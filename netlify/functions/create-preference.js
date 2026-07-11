const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const PRECIO_PREFERENTE = 7000;
const PRECIOS_POR_MES = {
  "1": 7900,  "2": 9100,  "3": 10500, "4": 11900,
  "5": 13100, "6": 14500, "7": 15900, "8": 17100,
  "9": 18500, "10": 19900, "11": 21100, "12": 21900,
};

const SUPABASE_URL = "https://nirgwrsorefkvveospzq.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pcmd3cnNvcmVma3Z2ZW9zcHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MzQwOTcsImV4cCI6MjA5OTMxMDA5N30.Dm-JuEccYfokL2RjdEdocd0d5wN8gnjVCS1p2m4FZ18";

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: "Method not allowed" };
  }

  const { monthId, email, fullName, phone } = JSON.parse(event.body);

  if (!monthId || !email || !fullName) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Faltan campos requeridos" }),
    };
  }

  if (!PRECIOS_POR_MES[monthId]) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Mes inválido" }),
    };
  }

  let examPassed = false;
  try {
    const sbRes = await fetch(
      SUPABASE_URL +
        "/rest/v1/enrollments?email=eq." +
        encodeURIComponent(email) +
        "&select=exam_passed",
      {
        headers: {
          apikey: ANON_KEY,
          Authorization: "Bearer " + ANON_KEY,
        },
      }
    );
    if (sbRes.ok) {
      const sbData = await sbRes.json();
      if (sbData && sbData.length > 0 && sbData[0].exam_passed === true) {
        examPassed = true;
      }
    }
  } catch (_) {
    /* fallback: usar tabla escalonada */
  }

  const price = examPassed ? PRECIO_PREFERENTE : PRECIOS_POR_MES[monthId];

  const preference = {
    items: [
      {
        title: "DEV SYSTEM ACADEMY - Mes " + monthId,
        quantity: 1,
        unit_price: price,
        currency_id: "MXN",
      },
    ],
    payer: {
      name: fullName,
      email: email,
    },
    back_urls: {
      success: "https://dev-system-academy.netlify.app/enrollment-success",
      failure: "https://dev-system-academy.netlify.app/checkout",
      pending: "https://dev-system-academy.netlify.app/enrollment-success",
    },
    auto_return: "approved",
    statement_descriptor: "DEV SYSTEM ACADEMY",
    external_reference: "mes-" + monthId + "-" + email,
  };

  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.MP_ACCESS_TOKEN,
      },
      body: JSON.stringify(preference),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: "Error al crear preferencia",
        details: data,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify({
      preferenceId: data.id,
      initPoint: data.init_point,
      price: price,
    }),
  };
};
