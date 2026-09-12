const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUPABASE_URL = "https://nirgwrsorefkvveospzq.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pcmd3cnNvcmVma3Z2ZW9zcHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MzQwOTcsImV4cCI6MjA5OTMxMDA5N30.Dm-JuEccYfokL2RjdEdocd0d5wN8gnjVCS1p2m4FZ18";

const ALLOWED_EMAILS = ["rayfg96@gmail.com"];

const MAX_CHARS = 12000;

const SYSTEM_PROMPT = `Eres un editor de estilo. Reescribes textos para que suenen como los escribió una persona real, no un modelo de lenguaje.

PERFIL DE QUIEN "ESCRIBE":
Estudiante mexicano de licenciatura, entre tercero y sexto semestre. Escribe correctamente y entiende su tema, pero no es escritor profesional. No presume vocabulario. Explica las cosas de forma directa. A veces repite una palabra porque no se puso a buscar sinónimo. Ocasionalmente deja una oración corta y seca porque le pareció suficiente.

REGLAS DE RITMO (lo más importante):
- Varía mucho el largo de las oraciones. Mezcla oraciones de 6 a 10 palabras con otras de 25 a 35. Un modelo escribe casi todo entre 18 y 22 palabras; eso es precisamente lo que hay que evitar.
- Cada párrafo debe tener al menos una oración corta, de menos de 12 palabras.
- Los párrafos también deben ser desiguales: uno de tres líneas, otro de ocho. Nunca todos del mismo tamaño.
- No cierres con un párrafo que resuma lo que ya se dijo, a menos que el texto original lo tuviera.

REGLAS DE VOCABULARIO:
- Nivel licenciatura, no nivel tesis doctoral. Si una palabra sencilla sirve, usa la sencilla.
- Conectores simples: "pero", "aunque", "entonces", "por eso", "y", "sin embargo" con moderación. Prohibidos: "no obstante", "por consiguiente", "por ende", "asimismo", "en este sentido", "cabe destacar", "es importante mencionar".
- Repetir una palabra clave dos o tres veces está bien y es normal. No busques sinónimo para cada aparición.
- Nada de guiones largos. Usa comas o separa en dos oraciones.
- Nada de listas con viñetas salvo que el texto original ya las tuviera.
- Nada de negritas a media oración.
- Se permite algo de voz propia donde encaje: "me parece", "considero", "en mi opinión". Una o dos veces en todo el texto, no más.

LO QUE NO PUEDES HACER:
- No inventes datos, cifras, fechas, nombres, autores ni citas.
- No cambies ningún número, nombre propio ni referencia bibliográfica del original.
- No agregues información que no estuviera en el texto de entrada.
- No quites contenido: el texto de salida debe cubrir todo lo que cubría el de entrada.
- No expliques lo que hiciste. Devuelve únicamente el texto reescrito, nada más.`;

async function validarTokenSupabase(token) {
  const res = await fetch(SUPABASE_URL + "/auth/v1/user", {
    headers: {
      apikey: ANON_KEY,
      Authorization: "Bearer " + token,
    },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data && data.email ? data.email : null;
}

async function obtenerMuestras(email, token) {
  const url =
    SUPABASE_URL +
    "/rest/v1/humanizador_muestras?email=eq." +
    encodeURIComponent(email) +
    "&select=texto&order=created_at.desc&limit=3";
  const res = await fetch(url, {
    headers: {
      apikey: ANON_KEY,
      Authorization: "Bearer " + token,
    },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: "Method not allowed" };
  }

  const authHeader = (event.headers && (event.headers.authorization || event.headers.Authorization)) || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (!token) {
    return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ error: "No autorizado" }) };
  }

  let email;
  try {
    email = await validarTokenSupabase(token);
  } catch (_) {
    email = null;
  }
  if (!email) {
    return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ error: "Sesión inválida" }) };
  }
  if (ALLOWED_EMAILS.indexOf(email) === -1) {
    return { statusCode: 403, headers: corsHeaders, body: JSON.stringify({ error: "No tienes acceso a esta herramienta" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (_) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: "JSON inválido" }) };
  }

  const { texto, notasDeReglas, correccionesPrevias } = body;
  if (!texto || typeof texto !== "string") {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: "Falta el texto" }) };
  }
  if (texto.length > MAX_CHARS) {
    return {
      statusCode: 413,
      headers: corsHeaders,
      body: JSON.stringify({ error: "El texto es demasiado largo (máximo " + MAX_CHARS + " caracteres)" }),
    };
  }

  const nivelesValidos = ["preparatoria", "licenciatura", "licenciatura-avanzada"];
  const nivel = nivelesValidos.indexOf(body.nivel) !== -1 ? body.nivel : "licenciatura";

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Falta configurar DEEPSEEK_API_KEY" }),
    };
  }

  let muestras = [];
  try {
    muestras = await obtenerMuestras(email, token);
  } catch (_) {
    muestras = [];
  }

  let ejemplosDeEstilo = "";
  if (muestras.length > 0) {
    ejemplosDeEstilo = "\nEJEMPLOS DEL ESTILO OBJETIVO (imita su ritmo y vocabulario, NO su contenido):\n";
    for (var sm = 0; sm < muestras.length; sm++) {
      ejemplosDeEstilo += "--- ejemplo " + (sm + 1) + " ---\n" + (muestras[sm].texto || "") + "\n";
    }
  }

  const notasStr = notasDeReglas && notasDeReglas.length ? notasDeReglas.join("\n") : "";
  const correccionesStr = correccionesPrevias || "";

  const userPrompt =
    "NIVEL: " +
    nivel +
    "\nTEXTO A REESCRIBIR:\n---\n" +
    texto +
    "\n---\n" +
    (notasStr ? "\n" + notasStr + "\n" : "") +
    (correccionesStr ? "\n" + correccionesStr + "\n" : "") +
    (ejemplosDeEstilo ? "\n" + ejemplosDeEstilo : "");

  const maxTokens = Math.min(2000, Math.max(500, Math.round(texto.length * 0.4)));

  let resp;
  try {
    resp = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        temperature: 1.0,
        max_tokens: maxTokens,
      }),
    });
  } catch (err) {
    return {
      statusCode: 502,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Error de conexión con el proveedor de IA" }),
    };
  }

  const data = await resp.json();

  if (!resp.ok) {
    return {
      statusCode: 502,
      headers: corsHeaders,
      body: JSON.stringify({ error: "El proveedor de IA falló", details: data }),
    };
  }

  const salida = data && data.choices && data.choices[0] && data.choices[0].message
    ? data.choices[0].message.content
    : "";

  if (!salida) {
    return {
      statusCode: 502,
      headers: corsHeaders,
      body: JSON.stringify({ error: "El proveedor de IA no devolvió texto" }),
    };
  }

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify({ texto: salida }),
  };
};