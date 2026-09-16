/* Webhook de Mercado Pago — registra pagos del lado del servidor.
   Siempre responde 200. Idempotente. No confía en el cuerpo del aviso. */

const crypto = require("crypto");
const { SUPABASE_URL, ANON_KEY, precioPara } = require("./_precios");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
};

async function selectEvent(paymentId) {
  const res = await fetch(
    SUPABASE_URL +
      "/rest/v1/payment_events?payment_id=eq." +
      encodeURIComponent(paymentId) +
      "&select=status",
    { headers: { apikey: ANON_KEY, Authorization: "Bearer " + ANON_KEY } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

async function insertEvent(payload) {
  const res = await fetch(SUPABASE_URL + "/rest/v1/payment_events", {
    method: "POST",
    headers: {
      apikey: ANON_KEY,
      Authorization: "Bearer " + ANON_KEY,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

async function upsertMonthlyPayment(email, monthId, amount, dateApproved) {
  const res = await fetch(SUPABASE_URL + "/rest/v1/monthly_payments", {
    method: "POST",
    headers: {
      apikey: ANON_KEY,
      Authorization: "Bearer " + ANON_KEY,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify({
      email: String(email).toLowerCase(),
      month_id: Number(monthId),
      plan: "Plan Base",
      price_label: String(amount),
      status: "paid",
      source: "mp_webhook",
      updated_at: dateApproved || new Date().toISOString(),
    }),
  });
  return res.ok;
}

async function updateEnrollmentActivo(email) {
  const res = await fetch(
    SUPABASE_URL +
      "/rest/v1/enrollments?email=eq." +
      encodeURIComponent(String(email).toLowerCase()),
    {
      method: "PATCH",
      headers: {
        apikey: ANON_KEY,
        Authorization: "Bearer " + ANON_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "activo" }),
    }
  );
  return res.ok;
}

function verificarFirma(headers, bodyRaw) {
  const secret = process.env.MP_WEBHOOK_SECRET;
  if (!secret) {
    console.warn("[mp-webhook] sin secreto configurado — firma no verificada");
    return null; // null = no verificado pero se procesa
  }
  const xSig = headers["x-signature"];
  if (!xSig) return false;
  const ts = /ts=(\d+)/.exec(xSig);
  const v1 = /v1=([a-f0-9]+)/.exec(xSig);
  if (!ts || !v1) return false;

  let dataId = "";
  try {
    const parsed = JSON.parse(bodyRaw || "{}");
    if (parsed.data && parsed.data.id) dataId = parsed.data.id;
  } catch (_) {
    return false;
  }
  const requestId = headers["x-request-id"] || "";
  const cadena = "id:" + dataId + ";request-id:" + requestId + ";ts:" + ts[1] + ";";
  const hmac = crypto.createHmac("sha256", secret).update(cadena).digest("hex");
  const a = Buffer.from(hmac, "hex");
  const b = Buffer.from(v1[1], "hex");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ ok: true }),
    };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 200, headers: corsHeaders, body: "{}" };
  }

  try {
    const bodyRaw = event.body || "";
    const headers = event.headers || {};
    const body = JSON.parse(bodyRaw || "{}");
    const qs = event.queryStringParameters || {};

    const firmaOk = verificarFirma(headers, bodyRaw);
    if (firmaOk === false) {
      console.warn("[mp-webhook] firma inválida — aviso ignorado");
      return { statusCode: 200, headers: corsHeaders, body: "{}" };
    }

    /* Extraer ID del pago (3 formatos) */
    let paymentId = null;
    let tipo = body.type || body.topic || qs.topic || "";
    if (tipo === "payment") {
      if (body.data && body.data.id) {
        paymentId = String(body.data.id);
      } else if (body.resource) {
        const m = /\/payments\/(\d+)/.exec(body.resource);
        if (m) paymentId = m[1];
      } else if (qs.id) {
        paymentId = qs.id;
      }
    }

    if (tipo !== "payment" || !paymentId) {
      return { statusCode: 200, headers: corsHeaders, body: "{}" };
    }

    /* Consultar el pago real en la API — nunca confiar en el aviso. */
    let pago;
    try {
      const mpRes = await fetch("https://api.mercadopago.com/v1/payments/" + paymentId, {
        headers: { Authorization: "Bearer " + process.env.MP_ACCESS_TOKEN },
      });
      if (!mpRes.ok) {
        console.warn("[mp-webhook] no se pudo consultar el pago " + paymentId + " (" + mpRes.status + ")");
        return { statusCode: 200, headers: corsHeaders, body: "{}" };
      }
      pago = await mpRes.json();
    } catch (err) {
      console.warn("[mp-webhook] error consultando pago " + paymentId + ": " + (err && err.message));
      return { statusCode: 200, headers: corsHeaders, body: "{}" };
    }

    const status = pago.status || "unknown";
    const statusDetail = pago.status_detail || "";
    const amount = pago.transaction_amount;
    const externalReference = pago.external_reference || "";
    const dateApproved = pago.date_approved || null;
    const payerEmail = (pago.payer && pago.payer.email) || "";

    const m = /^mes-(\d{1,2})-(.+)$/.exec(externalReference);
    let monthId = m ? parseInt(m[1], 10) : null;
    let email = m ? m[2].trim().toLowerCase() : null;

    /* Parseo fallido o mes inválido */
    if (!m || !email || !monthId || monthId < 1 || monthId > 12) {
      await insertEvent({
        payment_id: paymentId,
        email: (payerEmail || "").toLowerCase() || null,
        month_id: monthId,
        status: "unparseable",
        amount: amount,
        raw: pago,
      }).catch(function () {});
      console.warn("[mp-webhook] payment=" + paymentId + " external_reference no parseable: " + externalReference);
      return { statusCode: 200, headers: corsHeaders, body: "{}" };
    }

    /* Idempotencia: si ya fue aprobado, no reprocesar. */
    const existente = await selectEvent(paymentId).catch(function () { return null; });
    if (existente && existente.status === "approved") {
      console.log("[mp-webhook] payment=" + paymentId + " ya procesado (status=approved) — omitido");
      return { statusCode: 200, headers: corsHeaders, body: "{}" };
    }

    /* Solo pagos aprobados otorgan acceso; los demás se auditan. */
    if (status !== "approved") {
      await insertEvent({
        payment_id: paymentId,
        email: email,
        month_id: monthId,
        status: status + (statusDetail ? "_" + statusDetail : ""),
        amount: amount,
        raw: pago,
      }).catch(function () {});
      console.log("[mp-webhook] payment=" + paymentId + " status=" + status + " mes=" + monthId + " email=" + email + " → sin acceso");
      return { statusCode: 200, headers: corsHeaders, body: "{}" };
    }

    /* Verificar monto: recalcular lo esperado con la misma lógica. */
    let expected = null;
    try {
      expected = await precioPara(monthId, email);
    } catch (_) {
      expected = null;
    }
    const montoCoincide = expected !== null && Math.abs(Number(amount) - Number(expected)) < 0.01;

    /* Otorgar acceso. Si falla monthly_payments, NO escribir evento aprobado (MP reintentará). */
    let okPay = false;
    try {
      okPay = await upsertMonthlyPayment(email, monthId, amount, dateApproved);
    } catch (_) {
      okPay = false;
    }
    if (!okPay) {
      console.error("[mp-webhook] payment=" + paymentId + " falló al registrar monthly_payments — sin evento aprobado, se reintentará");
      return { statusCode: 200, headers: corsHeaders, body: "{}" };
    }

    try {
      await updateEnrollmentActivo(email);
    } catch (_) {
      /* no bloquea; el webhook lo reintentará */
    }

    await insertEvent({
      payment_id: paymentId,
      email: email,
      month_id: monthId,
      status: "approved",
      amount: amount,
      expected: expected,
      raw: pago,
    }).catch(function () {});

    console.log(
      "[mp-webhook] payment=" + paymentId +
      " status=approved mes=" + monthId +
      " email=" + email +
      " monto=" + amount +
      " esperado=" + expected +
      (montoCoincide ? "" : " (⚠ monto distinto)") +
      " → acceso otorgado"
    );

    return { statusCode: 200, headers: corsHeaders, body: "{}" };
  } catch (err) {
    console.error("[mp-webhook] error general: " + (err && err.stack ? err.stack : err));
    return { statusCode: 200, headers: corsHeaders, body: "{}" };
  }
};