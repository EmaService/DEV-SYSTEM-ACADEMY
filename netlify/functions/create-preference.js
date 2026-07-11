const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

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

  const price = 7000;

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
    body: JSON.stringify({ preferenceId: data.id, initPoint: data.init_point }),
  };
};
