/* Módulo compartido de precios — lo usan create-preference.js y mp-webhook.js
   para que el precio esperado nunca se desincronice entre ambos. */

const PRECIO_PREFERENTE = 7000;
const PRECIOS_POR_MES = {
  "1": 7900,  "2": 9100,  "3": 10500, "4": 11900,
  "5": 13100, "6": 14500, "7": 15900, "8": 17100,
  "9": 18500, "10": 19900, "11": 21100, "12": 21900,
};

const SUPABASE_URL = "https://nirgwrsorefkvveospzq.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pcmd3cnNvcmVma3Z2ZW9zcHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MzQwOTcsImV4cCI6MjA5OTMxMDA5N30.Dm-JuEccYfokL2RjdEdocd0d5wN8gnjVCS1p2m4FZ18";

async function obtenerExamPassed(email) {
  try {
    const res = await fetch(
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
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0 && data[0].exam_passed === true) return true;
    }
  } catch (_) {
    /* fallback: precio escalonado */
  }
  return false;
}

async function precioPara(monthId, email) {
  const examPassed = await obtenerExamPassed(email);
  return examPassed ? PRECIO_PREFERENTE : PRECIOS_POR_MES[String(monthId)] || null;
}

module.exports = {
  PRECIO_PREFERENTE,
  PRECIOS_POR_MES,
  SUPABASE_URL,
  ANON_KEY,
  obtenerExamPassed,
  precioPara,
};