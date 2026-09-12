(function () {
  /* =====================================================================
     HUMANIZADOR — Capa 1: reglas deterministas de limpieza y medición.
     Funciones puras, sin red, sin dependencias.
     ===================================================================== */

  var MULETILLAS_BORRAR = [
    "es importante destacar que",
    "es importante mencionar que",
    "es importante señalar que",
    "es importante recalcar que",
    "cabe destacar que",
    "cabe mencionar que",
    "cabe resaltar que",
    "cabe señalar que",
    "es fundamental entender que",
    "es necesario comprender que",
    "vale la pena mencionar que",
    "en este sentido,",
    "en tal sentido,",
    "dicho esto,",
    "por lo tanto, es evidente que",
  ];

  var MULETILLAS_INICIO_PARRAFO = [
    "a lo largo de la historia,",
    "desde tiempos inmemoriales,",
    "en el mundo actual,",
    "en la era digital,",
    "hoy en día,",
  ];

  var SUSTITUCIONES = [
    { de: "profundizar en", a: "estudiar a fondo" },
    { de: "fomentar", a: "impulsar" },
    { de: "robusta", a: "sólida" },
    { de: "robusto", a: "sólido" },
    { de: "crucial", a: "importante" },
    { de: "holístico", a: "completo" },
    { de: "holística", a: "completa" },
    { de: "integral", a: "completo" },
    { de: "aprovechar", a: "usar" },
    { de: "pilar fundamental", a: "base" },
    { de: "herramienta poderosa", a: "herramienta útil" },
    { de: "de vital importancia", a: "muy importante" },
    { de: "panorama", a: "situación" },
    { de: "ámbito", a: "área" },
    { de: "desempeña un papel fundamental", a: "es importante en" },
    { de: "en aras de", a: "para" },
    { de: "no obstante", a: "pero" },
    { de: "por consiguiente", a: "entonces" },
    { de: "por ende", a: "entonces" },
    { de: "asimismo", a: "también" },
  ];

  var EMPIEZA_MAYUS = /^[A-ZÁÉÍÓÚÑ]/;

  /* Sustitución que respeta la mayúscula inicial del match. */
  function reemplazarRespetandoMayus(texto, de, a, cambios) {
    var re = new RegExp(de.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    var res = texto.replace(re, function (match) {
      var remplazo = a;
      if (EMPIEZA_MAYUS.test(match)) {
        remplazo = a.charAt(0).toUpperCase() + a.slice(1);
      }
      if (cambios) {
        var prev = null;
        for (var i = 0; i < cambios.length; i++) {
          if (cambios[i].de === de) { prev = cambios[i]; break; }
        }
        if (prev) {
          prev.count += 1;
        } else {
          cambios.push({ de: de, a: a, count: 1 });
        }
      }
      return remplazo;
    });
    return res;
  }

  function limpiar(texto) {
    var t = String(texto || "");
    var cambios = [];
    var notas = [];

    /* Em dashes: convertir a coma o separar. Un em dash no debe sobrevivir. */
    var emDashCount = (t.match(/—/g) || []).length;
    if (emDashCount > 0) {
      t = t.replace(/—/g, ", ");
      cambios.push({ de: "em dash", a: "coma", count: emDashCount });
    }
    /* En dash a coma. */
    t = t.replace(/–/g, ", ");

    /* Comillas tipográficas a rectas. */
    t = t.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");

    /* Borrar emojis (rango amplio de símbolos y emojis). */
    var emojisAntes = t.length;
    t = t.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{1F000}-\u{1F2FF}]/gu, "");
    if (t.length !== emojisAntes) {
      cambios.push({ de: "emojis", a: "(borrados)", count: emojisAntes - t.length });
    }

    /* Viñetas con negrita inicial ("- **Concepto:** ...") a prosa corrida.
       Solo si el patrón típico de IA. */
    var bulletRegex = /^[\s]*[-•*]\s*\*\*(.+?)\*\*\s*[:：]?\s*/gm;
    var bulletCount = (t.match(bulletRegex) || []).length;
    if (bulletCount > 0) {
      t = t.replace(bulletRegex, function (m, titulo) {
        var limpioTitulo = String(titulo || "").replace(/\s*[:：]\s*$/, "");
        return limpioTitulo + ". ";
      });
      cambios.push({ de: "viñetas con negrita", a: "prosa corrida", count: bulletCount });
    }

    /* Frases muleta generales: borrar. */
    var muletillasB = MULETILLAS_BORRAR.slice();
    for (var mbi = 0; mbi < muletillasB.length; mbi++) {
      var mb = muletillasB[mbi];
      var reB = new RegExp(mb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      var mts = t.match(reB);
      var nB = mts ? mts.length : 0;
      if (nB > 0) {
        t = t.replace(reB, " ");
        cambios.push({ de: mb, a: "(borrada)", count: nB });
      }
    }

    /* Muletillas que solo abren primer párrafo: borrar en el inicio del texto. */
    var primerasLineas = t;
    for (var mpi = 0; mpi < MULETILLAS_INICIO_PARRAFO.length; mpi++) {
      var mp = MULETILLAS_INICIO_PARRAFO[mpi];
      var reP = new RegExp("^" + mp.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      if (reP.test(primerasLineas)) {
        primerasLineas = primerasLineas.replace(reP, function () {
          return "";
        });
        cambios.push({ de: mp, a: "(borrada)", count: 1 });
      }
    }
    t = primerasLineas;

    /* Palabras sobreusadas: reemplazar. "abordar" como verbo de tema. */
    for (var si = 0; si < SUSTITUCIONES.length; si++) {
      t = reemplazarRespetandoMayus(t, SUSTITUCIONES[si].de, SUSTITUCIONES[si].a, cambios);
    }
    /* "abordar" + objeto (tratar un tema). */
    t = reemplazarRespetandoMayus(t, "abordar", "tratar", cambios);

    /* Colapsar espacios dobles y limpiar comas duplicadas / espacios raros. */
    t = t.replace(/[ \t]+/g, " ");
    t = t.replace(/ ,/g, ",");
    t = t.replace(/\.\./g, ".");
    t = t.replace(/,\s*,/g, ",");
    t = t.replace(/^\s+|\s+$/g, "");

    /* Detección estructural para Capa 2 (notas). */
    if (/no solo[\s\S]{0,80}sino (también|además)/i.test(t)) {
      notas.push("Deshaz la construcción 'no solo X sino también Y' separándola en dos oraciones.");
    }
    var parrafos = t.split(/\n\s*\n/);
    var arranques = {};
    for (var pi = 0; pi < parrafos.length; pi++) {
      var primera = parrafos[pi].replace(/^\s*[-•*]*\s*/, "").match(/[A-Za-zÁÉÍÓÚÑáéíóúñ]+/);
      if (primera) {
        var w = primera[0].toLowerCase();
        if (arranques[w]) arranques[w].push(pi + 1);
        else arranques[w] = [pi + 1];
      }
    }
    for (var k in arranques) {
      if (arranques[k].length >= 2) {
        notas.push("Los párrafos " + arranques[k].join(" y ") + " abren con la misma palabra ('" + k + "'). Varía los arranques.");
      }
    }

    return { texto: t, cambios: cambios, notas: notas };
  }

  /* ------------------------------------------------------------------
     MEDICIÓN
     ------------------------------------------------------------------ */

  function contarSilabas(palabra) {
    var w = String(palabra || "").toLowerCase().replace(/[^a-záéíóúü]/g, "");
    if (!w) return 0;
    var grupos = w.match(/[aeiouáéíóúü]{1,2}/g) || [];
    return grupos.length;
  }

  function desviacionEstandar(valores) {
    if (!valores || valores.length === 0) return 0;
    var n = valores.length;
    var suma = 0;
    for (var i = 0; i < n; i++) suma += valores[i];
    var media = suma / n;
    var varianza = 0;
    for (var j = 0; j < n; j++) {
      varianza += Math.pow(valores[j] - media, 2);
    }
    return Math.sqrt(varianza / n);
  }

  function obtenerOraciones(texto) {
    var parrafos = texto.split(/\n\s*\n/);
    var oraciones = [];
    for (var i = 0; i < parrafos.length; i++) {
      var chunk = parrafos[i].replace(/\s+/g, " ").trim();
      if (!chunk) continue;
      var partes = chunk.split(/(?<=[.!?])\s+/);
      for (var j = 0; j < partes.length; j++) {
        var o = partes[j].trim();
        if (o) oraciones.push(o);
      }
    }
    return oraciones;
  }

  function obtenerParrafos(texto) {
    var parrafos = texto.split(/\n\s*\n/);
    var out = [];
    for (var i = 0; i < parrafos.length; i++) {
      var p = parrafos[i].replace(/\s+/g, " ").trim();
      if (p) out.push(p);
    }
    return out;
  }

  function contarMuletillas(texto) {
    var t = String(texto || "").toLowerCase();
    var total = 0;
    var todas = MULETILLAS_BORRAR.concat(MULETILLAS_INICIO_PARRAFO);
    for (var i = 0; i < todas.length; i++) {
      var m = todas[i];
      var re = new RegExp(m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
      var mts = t.match(re);
      if (mts) total += mts.length;
    }
    return total;
  }

  function semaforo(valor, verdeMin, amarilloMin) {
    if (valor >= verdeMin) return "verde";
    if (valor >= amarilloMin) return "amarillo";
    return "rojo";
  }

  function semaforoPorcentaje(pct, verdeMin, amarilloMin) {
    if (pct < verdeMin) return "verde";
    if (pct < amarilloMin) return "amarillo";
    return "rojo";
  }

  function medir(texto) {
    var oraciones = obtenerOraciones(texto);
    var parrafos = obtenerParrafos(texto);
    var palabrasPorOracion = oraciones.map(function (o) {
      return (o.match(/[A-Za-zÁÉÍÓÚÑáéíóúñ0-9]+/g) || []).length;
    });
    var palabrasPorParrafo = parrafos.map(function (p) {
      return (p.match(/[A-Za-zÁÉÍÓÚÑáéíóúñ0-9]+/g) || []).length;
    });
    var todasLasPalabras = (texto.match(/[A-Za-zÁÉÍÓÚÑáéíóúñ]+/g) || []);

    var metricas = [];

    /* 1. Variación de oraciones */
    var desvOracion = desviacionEstandar(palabrasPorOracion);
    metricas.push({
      id: "variacion_oraciones",
      nombre: "Variación de oraciones",
      valor: Math.round(desvOracion * 10) / 10,
      unidad: "desv. est.",
      semaforo: semaforo(desvOracion, 8, 5),
    });

    /* 2. Oraciones cortas */
    var cortas = 0;
    for (var i = 0; i < palabrasPorOracion.length; i++) {
      if (palabrasPorOracion[i] > 0 && palabrasPorOracion[i] < 12) cortas++;
    }
    var pctCortas = palabrasPorOracion.length > 0 ? (cortas / palabrasPorOracion.length) * 100 : 0;
    metricas.push({
      id: "oraciones_cortas",
      nombre: "Oraciones cortas (<12 palabras)",
      valor: Math.round(pctCortas) + "%",
      unidad: "%",
      semaforo: semaforoPorcentaje(pctCortas, 15, 8),
    });

    /* 3. Muletillas restantes */
    var muletillas = contarMuletillas(texto);
    metricas.push({
      id: "muletillas",
      nombre: "Muletillas restantes",
      valor: muletillas,
      unidad: "",
      semaforo: muletillas === 0 ? "verde" : (muletillas <= 2 ? "amarillo" : "rojo"),
    });

    /* 4. Arranques repetidos */
    var arranques = {};
    for (var pi = 0; pi < parrafos.length; pi++) {
      var primera = parrafos[pi].replace(/^\s*[-•*]*\s*/, "").match(/[A-Za-zÁÉÍÓÚÑáéíóúñ]+/);
      if (primera) {
        var w = primera[0].toLowerCase();
        arranques[w] = (arranques[w] || 0) + 1;
      }
    }
    var arranquesRepetidos = 0;
    for (var k in arranques) {
      if (arranques[k] >= 2) arranquesRepetidos++;
    }
    metricas.push({
      id: "arranques",
      nombre: "Arranques repetidos",
      valor: arranquesRepetidos,
      unidad: "",
      semaforo: arranquesRepetidos === 0 ? "verde" : (arranquesRepetidos === 1 ? "amarillo" : "rojo"),
    });

    /* 5. Uniformidad de párrafos */
    var desvParrafo = desviacionEstandar(palabrasPorParrafo);
    metricas.push({
      id: "uniformidad_parrafos",
      nombre: "Uniformidad de párrafos",
      valor: Math.round(desvParrafo * 10) / 10,
      unidad: "desv. est.",
      semaforo: semaforo(desvParrafo, 25, 15),
    });

    /* 6. Palabras largas (4+ sílabas) */
    var largas = 0;
    for (var wl = 0; wl < todasLasPalabras.length; wl++) {
      if (contarSilabas(todasLasPalabras[wl]) >= 4) largas++;
    }
    var pctLargas = todasLasPalabras.length > 0 ? (largas / todasLasPalabras.length) * 100 : 0;
    metricas.push({
      id: "palabras_largas",
      nombre: "Palabras largas (4+ sílabas)",
      valor: Math.round(pctLargas) + "%",
      unidad: "%",
      semaforo: semaforoPorcentaje(pctLargas, 12, 18),
    });

    var score = 0;
    for (var m = 0; m < metricas.length; m++) {
      if (metricas[m].semaforo === "verde") score += 1;
      else if (metricas[m].semaforo === "amarillo") score += 0.5;
    }
    var scoreGlobal = Math.round((score / metricas.length) * 100);

    return { scoreGlobal: scoreGlobal, metricas: metricas };
  }

  window.HumanizadorReglas = {
    limpiar: limpiar,
    medir: medir,
    _muletillasB: MULETILLAS_BORRAR,
    _muletillasInicio: MULETILLAS_INICIO_PARRAFO,
    _sustituciones: SUSTITUCIONES,
  };
})();