(function () {
  var cfg = window.DEV_SYSTEM_CONFIG || {};
  var ALLOWED_EMAILS = ["rayfg96@gmail.com"];
  var MAX_RETRIES = 2;

  var sb = null;
  try {
    if (cfg.supabase && cfg.supabase.url && cfg.supabase.anonKey) {
      sb = window.supabase.createClient(cfg.supabase.url, cfg.supabase.anonKey);
    }
  } catch (e) {
    sb = null;
  }

  var inputTexto = document.getElementById("input-texto");
  var outputTexto = document.getElementById("output-texto");
  var nivelSelect = document.getElementById("nivel-select");
  var humanizarBtn = document.getElementById("humanizar-btn");
  var copiarBtn = document.getElementById("copiar-btn");
  var guardarBtn = document.getElementById("guardar-btn");
  var estadoTexto = document.getElementById("estado-texto");
  var cambiosPanel = document.getElementById("cambios-panel");
  var cambiosList = document.getElementById("cambios-list");
  var semaforoPanel = document.getElementById("semaforo-panel");
  var scoreGlobal = document.getElementById("score-global");
  var metricasList = document.getElementById("metricas-list");
  var message = document.getElementById("humanizador-message");

  var currentUser = null;
  var currentOutput = "";
  var currentNivel = "licenciatura";
  var cambiosDeCapa1 = [];

  function guardarMensaje(txt, color) {
    message.textContent = txt;
    if (color) message.style.color = color;
  }

  async function init() {
    if (window.DevSystemCloud && window.DevSystemCloud.isEnabled()) {
      currentUser = await window.DevSystemCloud.getCurrentUser().catch(function () {
        return null;
      });
      if (!currentUser || !currentUser.email) {
        window.location.href = "login.html";
        return;
      }
      var allowed = false;
      for (var i = 0; i < ALLOWED_EMAILS.length; i++) {
        if (ALLOWED_EMAILS[i] === String(currentUser.email).toLowerCase()) { allowed = true; break; }
      }
      if (!allowed) {
        humanizarBtn.style.display = "none";
        guardarMensaje("Esta herramienta es de uso privado. Tu cuenta no tiene acceso.", "var(--danger)");
        return;
      }
    } else {
      currentUser = window.DevSystemState ? window.DevSystemState.getCurrentUser() : null;
      if (!currentUser) {
        window.location.href = "login.html";
        return;
      }
    }
  }

  function obtenerInstruccionesRojo(metricas) {
    var instrucciones = [];
    for (var i = 0; i < metricas.length; i++) {
      var m = metricas[i];
      if (m.semaforo !== "rojo") continue;
      switch (m.id) {
        case "variacion_oraciones":
          instrucciones.push("Tus oraciones son demasiado parejas en longitud. Partea dos o tres oraciones largas en una corta más una larga, y une dos oraciones cortas seguidas en una sola más larga.");
          break;
        case "oraciones_cortas":
          instrucciones.push("Necesitas más oraciones cortas, de menos de 12 palabras. Agrega al menos una oración corta por párrafo.");
          break;
        case "muletillas":
          instrucciones.push("Siguen quedando frases muletilla como 'es importante destacar', 'cabe señalar' o 'en este sentido'. Elimínalas por completo.");
          break;
        case "arranques":
          instrucciones.push("Varios párrafos abren con la misma palabra. Cambia los arranques para que no se repitan.");
          break;
        case "uniformidad_parrafos":
          instrucciones.push("Tus párrafos son del mismo tamaño. Hazlos desiguales: uno corto y otro largo, con ritmo variado.");
          break;
        case "palabras_largas":
          instrucciones.push("Usas demasiadas palabras largas. Cambia algunas por equivalentes más sencillos y cotidianos.");
          break;
      }
    }
    return instrucciones;
  }

  function pintarSemaforo(medida) {
    semaforoPanel.style.display = "block";
    scoreGlobal.textContent = medida.scoreGlobal;
    if (medida.scoreGlobal >= 70) scoreGlobal.style.color = "var(--success)";
    else if (medida.scoreGlobal >= 50) scoreGlobal.style.color = "var(--warn)";
    else scoreGlobal.style.color = "var(--danger)";

    metricasList.innerHTML = "";
    for (var i = 0; i < medida.metricas.length; i++) {
      var m = medida.metricas[i];
      var row = document.createElement("div");
      row.className = "metrica-row";
      row.innerHTML =
        "<span style='display:flex;align-items:center;gap:0.5rem'><span class='metrica-semaforo semaforo-" + m.semaforo + "'></span>" +
        m.nombre +
        "</span><strong>" +
        m.valor +
        "</strong>";
      metricasList.appendChild(row);
    }
  }

  function pintarCambios(cambios) {
    cambiosPanel.style.display = "block";
    cambiosList.innerHTML = "";
    if (!cambios || cambios.length === 0) {
      cambiosList.textContent = "Sin cambios de limpieza automática.";
      return;
    }
    var html = "";
    for (var i = 0; i < cambios.length; i++) {
      var c = cambios[i];
      html += "<div>• <strong>" + c.de + "</strong> → " + c.a + " (" + c.count + ")</div>";
    }
    cambiosList.innerHTML = html;
  }

  function limpiarSalida(textoSalida) {
    var t = String(textoSalida || "");
    t = t.replace(/^```[\s\S]*?\n/, "").replace(/\n```\s*$/, "");
    t = t.replace(/^"|"$/g, "");
    return t.trim();
  }

  async function humanizar(intentos, correccionesPrevias) {
    if (!inputTexto.value.trim()) {
      guardarMensaje("Escribe o pega un texto primero.", "var(--warn)");
      return;
    }
    currentNivel = nivelSelect.value;

    var limpio = window.HumanizadorReglas.limpiar(inputTexto.value);
    cambiosDeCapa1 = limpio.cambios;
    pintarCambios(limpio.cambios);

    var token = "";
    if (sb) {
      var ses = await sb.auth.getSession().catch(function () { return { data: null }; });
      if (ses && ses.data && ses.data.session) token = ses.data.session.access_token;
    }

    humanizarBtn.disabled = true;
    humanizarBtn.textContent = intentos > 0 ? "Reintentando... (" + intentos + ")" : "Humanizando...";
    estadoTexto.textContent = "Llamando al servidor...";

    try {
      var res = await fetch("/.netlify/functions/humanizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          texto: limpio.texto,
          nivel: currentNivel,
          notasDeReglas: limpio.notas || [],
          correccionesPrevias: correccionesPrevias || "",
        }),
      });
      var data = await res.json().catch(function () { return {}; });

      if (res.status === 401) {
        guardarMensaje("Tu sesión expiró. Vuelve a entrar y reintenta.", "var(--danger)");
        humanizarBtn.disabled = false;
        humanizarBtn.textContent = "Humanizar";
        return;
      }
      if (res.status === 403) {
        guardarMensaje("No tienes acceso a esta herramienta.", "var(--danger)");
        humanizarBtn.disabled = false;
        humanizarBtn.textContent = "Humanizar";
        return;
      }
      if (res.status === 413) {
        guardarMensaje(data.error || "El texto es demasiado largo.", "var(--danger)");
        humanizarBtn.disabled = false;
        humanizarBtn.textContent = "Humanizar";
        return;
      }
      if (!res.ok) {
        guardarMensaje(data.error || "Error al humanizar. Intenta de nuevo.", "var(--danger)");
        humanizarBtn.disabled = false;
        humanizarBtn.textContent = "Humanizar";
        return;
      }

      var salida = limpiarSalida(data.texto);
      currentOutput = salida;
      outputTexto.value = salida;
      copiarBtn.style.display = "";
      guardarBtn.style.display = "";

      var medida = window.HumanizadorReglas.medir(salida);
      pintarSemaforo(medida);

      if (medida.scoreGlobal < 70 && intentos < MAX_RETRIES) {
        var correcciones = obtenerInstruccionesRojo(medida.metricas);
        estadoTexto.textContent = "Score " + medida.scoreGlobal + ". Reintentando...";
        await humanizar(intentos + 1, correcciones.join("\n"));
        return;
      }

      if (medida.scoreGlobal < 70) {
        estadoTexto.textContent = "Listo. Score " + medida.scoreGlobal + " — quedaron métricas débiles (revisa el semáforo).";
      } else {
        estadoTexto.textContent = "Listo. Score " + medida.scoreGlobal + ".";
      }
      guardarMensaje("");
      humanizarBtn.disabled = false;
      humanizarBtn.textContent = "Humanizar";
    } catch (err) {
      guardarMensaje("Error de red: " + (err && err.message ? err.message : err), "var(--danger)");
      humanizarBtn.disabled = false;
      humanizarBtn.textContent = "Humanizar";
    }
  }

  humanizarBtn.addEventListener("click", function () {
    humanizar(0, "");
  });

  copiarBtn.addEventListener("click", function () {
    if (!currentOutput) return;
    navigator.clipboard.writeText(currentOutput).catch(function () {});
    copiarBtn.textContent = "Copiado ✓";
    setTimeout(function () { copiarBtn.textContent = "Copiar"; }, 2000);
  });

  guardarBtn.addEventListener("click", async function () {
    if (!currentOutput) return;
    if (!sb || !currentUser) {
      guardarMensaje("No hay sesión activa para guardar el ejemplo.", "var(--warn)");
      return;
    }
    var res = await sb
      .from("humanizador_muestras")
      .insert({ email: String(currentUser.email).toLowerCase(), texto: currentOutput, nivel: currentNivel })
      .catch(function () { return { error: true }; });
    if (res && res.error) {
      guardarMensaje("No se pudo guardar el ejemplo: " + (res.error.message || "error"), "var(--danger)");
    } else {
      guardarMensaje("Ejemplo guardado. Se usará como referencia de estilo.", "var(--green)");
    }
  });

  init();
})();