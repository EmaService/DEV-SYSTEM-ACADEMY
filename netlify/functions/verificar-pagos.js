/* Herramienta de reparación para el dueño.
   /verificar-pagos?email=...&secret=...  → lista pagos aprobados no registrados
   /verificar-pagos?email=...&secret=...&reparar=1  → los registra
   El secret se compara contra ADMIN_SECRET. */

const { SUPABASE_URL, ANON_KEY } = require("./_precios");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

async function buscarPagosMP(email) {
  const out = [];
  for (let mes = 1; mes <= 12; mes++) {
    const ref = "mes-" + mes + "-" + email;
    const res = await fetch(
      "https://api.mercadopago.com/v1/payments/search?external_reference=" +
        encodeURIComponent(ref) +
        "&status=approved",
      { headers: { Authorization: "Bearer " + process.env.MP_ACCESS_TOKEN } }
    );
    if (!res.ok) continue;
    const data = await res.json();
    if (data.results && data.results.length) {
      for (const p of data.results) {
        out.push({ payment_id: String(p.id), month_id: mes, amount: p.transaction_amount, date_approved: p.date_approved, raw: p });
      }
    }
  }
  return out;
}

async function obtenerRegistrados(email) {
  const res = await fetch(
    SUPABASE_URL +
      "/rest/v1/monthly_payments?email=eq." +
      encodeURIComponent(email) +
      "&select=month_id",
    { headers: { apikey: ANON_KEY, Authorization: "Bearer " + ANON_KEY } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data.map((r) => Number(r.month_id)) : [];
}

async function registrar(email, monthId, amount, dateApproved) {
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
      source: "mp_reparacion",
      updated_at: dateApproved || new Date().toISOString(),
    }),
  });
  if (res.ok) {
    await fetch(
      SUPABASE_URL + "/rest/v1/enrollments?email=eq." + encodeURIComponent(String(email).toLowerCase()),
      {
        method: "PATCH",
        headers: { apikey: ANON_KEY, Authorization: "Bearer " + ANON_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ status: "activo" }),
      }
    ).catch(function () {});
  }
  return res.ok;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, headers: corsHeaders, body: "Method not allowed" };
  }

  const q = event.queryStringParameters || {};
  const email = (q.email || "").trim().toLowerCase();
  const secret = q.secret || "";
  const reparar = q.reparar === "1";

  if (secret !== process.env.ADMIN_SECRET) {
    return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ error: "No autorizado" }) };
  }
  if (!email) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: "Falta email" }) };
  }

  const pagosMP = await buscarPagosMP(email).catch(function () { return []; });
  const registrados = await obtenerRegistrados(email).catch(function () { return []; });
  const pendientes = pagosMP.filter((p) => registrados.indexOf(p.month_id) === -1);

  let reparados = [];
  if (reparar && pendientes.length) {
    for (const p of pendientes) {
      const ok = await registrar(email, p.month_id, p.amount, p.date_approved).catch(function () { return false; });
      if (ok) reparados.push(p.month_id);
    }
  }

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify({
      email: email,
      total_aprobados_mp: pagosMP.length,
      meses_registrados: registrados,
      pendientes: pendientes.map((p) => ({ month_id: p.month_id, payment_id: p.payment_id, amount: p.amount })),
      reparados: reparados,
    }),
  };
};