(async function () {
  var cfg = window.DEV_SYSTEM_CONFIG || {};
  var user;
  var enrollment;
  var paidMonthsCloud = [];
  var documents = [];
  var cloudMode = window.DevSystemCloud && window.DevSystemCloud.isEnabled();

  if (cloudMode) {
    var cloudUser = await window.DevSystemCloud.getCurrentUser();
    if (!cloudUser || !cloudUser.email) {
      window.location.href = "login.html";
      return;
    }
    user = {
      name: (cloudUser.user_metadata && cloudUser.user_metadata.full_name) || "Alumno",
      email: cloudUser.email,
    };
    enrollment = await window.DevSystemCloud.getEnrollment(user.email);
    if (!enrollment) {
      window.location.href = "checkout.html";
      return;
    }
    paidMonthsCloud = await window.DevSystemCloud.getPaidMonthIds(user.email);
    documents = await window.DevSystemCloud.getDocuments(user.email);
  } else {
    user = window.DevSystemState.getCurrentUser();
    if (!user) {
      window.location.href = "login.html";
      return;
    }
    enrollment = window.DevSystemState.getEnrollment(user.email);
    if (!enrollment) {
      window.location.href = "checkout.html";
      return;
    }
  }

  if (cloudMode) {
    window.DevSystemState.clearProgress(user.email);
    for (var syncIndex = 0; syncIndex < paidMonthsCloud.length; syncIndex += 1) {
      var monthId = paidMonthsCloud[syncIndex];
      var monthMeta = null;
      var monthlyProgram = window.DevSystemState.getMonthlyProgram();
      for (var m = 0; m < monthlyProgram.length; m += 1) {
        if (Number(monthlyProgram[m].monthId) === Number(monthId)) {
          monthMeta = monthlyProgram[m];
          break;
        }
      }
      if (monthMeta) {
        window.DevSystemState.registerMonthlyPayment({
          email: user.email,
          monthId: monthId,
          plan: monthMeta.planName,
          price: monthMeta.price,
          fullName: user.name,
          phone: "",
        });
      }
    }
  }

  var logoutButton = document.getElementById("logout-btn");
  var welcomeName = document.getElementById("welcome-name");
  var welcomeText = document.getElementById("welcome-text");
  var studentPlan = document.getElementById("student-plan");
  var monthsSummary = document.getElementById("months-summary");
  var lessonsSummary = document.getElementById("lessons-summary");
  var progressPercent = document.getElementById("progress-percent");
  var progressFill = document.getElementById("progress-fill");
  var certificateStatus = document.getElementById("certificate-status");
  var curriculumRoot = document.getElementById("curriculum-root");
  var curriculumSection = document.getElementById("curriculum-section");
  var admissionCard = document.getElementById("admission-card");
  var admissionSteps = document.getElementById("admission-steps");
  var admissionCompleted = document.getElementById("admission-completed");
  var studentEmail = document.getElementById("student-email");
  var billingPlan = document.getElementById("billing-plan");
  var billingPrice = document.getElementById("billing-price");
  var billingStatus = document.getElementById("billing-status");
  var payMessage = document.getElementById("pay-message");

  var enrollmentStatus = enrollment.status || (enrollment.paid ? "activo" : "aplicante");
  var examPassed = enrollment.exam_passed || false;
  var examScore = enrollment.exam_score || null;
  var examPresented = examPassed || Boolean(enrollment.exam_date);

  var leccionesData = window.DEV_SYSTEM_LECCIONES || {};
  var glosarioData = window.DEV_SYSTEM_GLOSARIO || [];

  var planPricing = (cfg.planPricing || {})[enrollment.plan || "Plan Base"] || { label: "-", priceNum: 0 };
  var statusLabels = {
    "aplicante":           "Solicitud recibida",
    "documentos_enviados": "Documentos en revisión",
    "aprobado":            "Aprobado — pendiente de pago",
    "activo":              "Alumno activo",
  };

  var MONTH_TITLES = {
    1: "Fundamentos del código",
    2: "Git y GitHub",
    3: "Frontend",
    4: "Backend y bases de datos",
    5: "LLMs y agentes",
    6: "Herramientas IA",
    7: "MCP e integraciones",
    8: "Testing y producto",
    9: "Cloud y deploy",
    10: "Datos y seguridad",
    11: "Automatización y colas",
    12: "SaaS final",
  };

  function formatMxn(num) {
    return "$" + String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " MXN";
  }

  function getMonthTitle(m) {
    var cfgTitles = (window.DEV_SYSTEM_CONFIG || {}).monthTitles || {};
    return cfgTitles[m] || MONTH_TITLES[m] || "Mes " + m;
  }

  function addMonthsSafe(baseDate, n) {
    var d = new Date(baseDate.getTime());
    var day = d.getDate();
    d.setDate(1);
    d.setMonth(d.getMonth() + n);
    var lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    d.setDate(Math.min(day, lastDay));
    return d;
  }

  function getLocalPaymentDates(email) {
    var out = [];
    try {
      var raw = localStorage.getItem("devsystem_store_v3");
      var store = raw ? JSON.parse(raw) : null;
      var payments = (store && store.payments) || [];
      for (var i = 0; i < payments.length; i++) {
        var p = payments[i];
        if (p && String(p.email || "").toLowerCase() === String(email || "").toLowerCase() && p.status === "paid") {
          out.push({
            month_id: Number(p.monthId),
            created_at: p.createdAt || null,
            price_label: p.amountLabel || "",
          });
        }
      }
      out.sort(function (a, b) { return a.month_id - b.month_id; });
    } catch (e) { }
    return out;
  }

  function getPaymentDatesForUser(email) {
    if (cloudMode) {
      return window.DevSystemCloud.getPaymentDates(email).catch(function () { return []; });
    }
    return Promise.resolve(getLocalPaymentDates(email));
  }

  function getActiveMonth(paidMonths, progress) {
    var paid = paidMonths || [];
    progress = progress || {};
    if (paid.length === 0) return 1;
    var active = paid[paid.length - 1];
    for (var i = paid.length - 1; i >= 0; i--) {
      var m = paid[i];
      var data = leccionesData["m" + m];
      if (!data || !data.materias) continue;
      var keys = Object.keys(data.materias);
      var hasPending = false;
      for (var ki = 0; ki < keys.length && !hasPending; ki++) {
        var mat = data.materias[keys[ki]];
        for (var li = 0; li < mat.lecciones.length; li++) {
          var l = mat.lecciones[li];
          if (!l.proximamente && !progress[l.id]) { hasPending = true; break; }
        }
      }
      if (hasPending) { active = m; break; }
    }
    return active;
  }

  function getMonthState(m, progress, selectedMonth) {
    var data = leccionesData["m" + m];
    var total = 0;
    var done = 0;
    if (data && data.materias) {
      var keys = Object.keys(data.materias);
      for (var ki = 0; ki < keys.length; ki++) {
        var mat = data.materias[keys[ki]];
        for (var li = 0; li < mat.lecciones.length; li++) {
          var l = mat.lecciones[li];
          if (!l.proximamente) { total++; if (progress[l.id]) done++; }
        }
      }
    }
    if (total > 0 && done >= total) {
      return selectedMonth === m ? "Repaso" : "Completado ✓";
    }
    return "En curso";
  }

  function getMonthlyMonto(monthNum) {
    var cfgNow = window.DEV_SYSTEM_CONFIG || {};
    var pricing = cfgNow.monthlyPricing || {};
    var base = pricing[String(monthNum)] || 7000;
    return examPassed ? (cfgNow.preferredPrice || 7000) : base;
  }

  function getPagoEstado(payments) {
    var monthsPaid = payments && payments.length ? payments.length : 0;
    var proximoMes = monthsPaid + 1;
    if (proximoMes > 12) proximoMes = 12;
    var baseDate = new Date();
    if (payments && payments.length > 0) {
      var first = payments[0];
      var firstRaw = first.created_at || first.payment_date || null;
      if (firstRaw) baseDate = new Date(firstRaw);
    } else if (enrollment && enrollment.created_at) {
      baseDate = new Date(enrollment.created_at);
    }
    var diaCorte = baseDate.getDate();
    var fechaVencimiento = addMonthsSafe(baseDate, monthsPaid);
    var now = new Date();
    var diasRestantes = Math.round((fechaVencimiento - now) / 86400000);
    var estado = "al_corriente";
    if (monthsPaid >= 12) {
      estado = "al_corriente";
    } else if (diasRestantes < 0) {
      estado = "vencido";
    } else if (diasRestantes <= 5) {
      estado = "por_vencer";
    }
    return {
      estado: estado,
      mesesPagados: monthsPaid,
      proximoMes: proximoMes,
      baseDate: baseDate,
      diaCorte: diaCorte,
      fechaVencimiento: fechaVencimiento,
      diasRestantes: diasRestantes,
      monto: getMonthlyMonto(proximoMes),
    };
  }

  function renderHeader() {
    welcomeName.textContent = user.name;
    var statNivel = document.getElementById("stat-nivel");
    if (statNivel) statNivel.textContent = enrollment.plan || "Plan Base";
    studentPlan.textContent = (enrollment.phaseName || "Etapa 1") + " · " + (enrollment.plan || "Plan Base");
    studentEmail.textContent = user.email;
    billingPlan.textContent = enrollment.plan || "Plan Base";

    var priceNote = document.getElementById("price-note");
    if (examPassed) {
      if (billingPrice) billingPrice.textContent = "$7,000 MXN / mes";
      if (priceNote) { priceNote.textContent = "Tarifa preferente — examen de admisión aprobado ✓"; priceNote.style.color = "var(--green)"; }
    } else if (examPresented) {
      if (billingPrice) billingPrice.textContent = "Tarifa regular por mes (ver tabla de pagos)";
      if (priceNote) { priceNote.textContent = "Presentaste el examen pero no alcanzaste la tarifa preferente."; priceNote.style.color = "var(--muted)"; }
    } else {
      if (billingPrice) billingPrice.textContent = planPricing.label;
      if (priceNote) { priceNote.textContent = "Aprueba el examen de admisión para obtener la tarifa preferente de $7,000 MXN / mes."; priceNote.style.color = "var(--accent)"; }
    }

    if (billingStatus) billingStatus.textContent = statusLabels[enrollmentStatus] || "En proceso";

    if (enrollmentStatus === "activo") {
      welcomeText.textContent =
        "Tu acceso está activo. Sigue tu plan y completa las lecciones del día.";
    } else {
      welcomeText.textContent =
        "Completa tu proceso de admisión para acceder al programa.";
    }
  }

  function renderProgress() {
    var cfg2 = window.DEV_SYSTEM_CONFIG || {};
    var xpPerLesson = cfg2.xpPerLesson || 50;
    var xpPerFirstTry = cfg2.xpPerFirstTry || 10;
    var rachaEl = document.getElementById("stat-racha");
    var xpEl = document.getElementById("stat-xp");

    function setLessonStats(done, total, paidCount) {
      if (monthsSummary) monthsSummary.textContent = paidCount + "/12";
      if (lessonsSummary) lessonsSummary.textContent = done + "/" + total;
      var pct = total > 0 ? Math.round((done / total) * 100) : 0;
      if (progressPercent) progressPercent.textContent = pct + "%";
      if (progressFill) progressFill.style.width = pct + "%";
      if (progressPercent) {
        progressPercent.animate([{transform:"scale(1)"},{transform:"scale(1.15)"},{transform:"scale(1)"}], {duration:350,easing:"ease-out"});
      }
    }

    if (cloudMode && window.DevSystemCloud.getPaidMonthIds) {
      var paidPromise = window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; });
      var progPromise = window.DevSystemCloud.getProgressMap(user.email).catch(function () { return {}; });
      Promise.all([progPromise, paidPromise]).then(function (res) {
        var progress = res[0] || {};
        var paidMonths = res[1] || [];
        var done = 0, total = 0;
        for (var mp = 0; mp < paidMonths.length; mp++) {
          var data = leccionesData["m" + paidMonths[mp]];
          if (!data || !data.materias) continue;
          var keys = Object.keys(data.materias);
          for (var ki = 0; ki < keys.length; ki++) {
            var lessons = data.materias[keys[ki]].lecciones || [];
            for (var li = 0; li < lessons.length; li++) {
              if (!lessons[li].proximamente) { total++; if (progress[lessons[li].id]) done++; }
            }
          }
        }
        setLessonStats(done, total, paidMonths.length);
      }).catch(function () { setLessonStats(0, 0, 0); });

      window.DevSystemCloud.getStreakDays(user.email).then(function (streak) {
        if (rachaEl) {
          rachaEl.textContent = streak;
          var parent = rachaEl.closest(".stat-chip");
          if (parent) {
            if (streak >= 1) { parent.style.opacity = "1"; }
            else { parent.style.opacity = "0.6"; }
          }
          rachaEl.animate([{transform:"scale(1)"},{transform:"scale(1.15)"},{transform:"scale(1)"}], {duration:350,easing:"ease-out"});
        }
      }).catch(function () {});
      window.DevSystemCloud.getAllLessonStats(user.email).then(function (allStats) {
        var totalXp = 0;
        for (var st = 0; st < allStats.length; st++) {
          totalXp += xpPerLesson + (allStats[st].first_try_correct * xpPerFirstTry);
        }
        localStorage.setItem("devsystem_xp_" + user.email, totalXp);
        if (xpEl) {
          xpEl.textContent = totalXp;
          xpEl.animate([{transform:"scale(1)"},{transform:"scale(1.15)"},{transform:"scale(1)"}], {duration:350,easing:"ease-out"});
        }
      }).catch(function () {
        var localXp = parseInt(localStorage.getItem("devsystem_xp_" + user.email) || "0", 10);
        if (xpEl) xpEl.textContent = localXp;
      });
    } else {
      var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
      var summary = window.DevSystemState.getProgressSummary(user.email);
      setLessonStats(summary.done, summary.total, paidMonths.length);
      var localXp = parseInt(localStorage.getItem("devsystem_xp_" + user.email) || "0", 10);
      if (xpEl) xpEl.textContent = localXp;
      if (rachaEl) rachaEl.textContent = "0";
    }

    if (window.DevSystemState.isEligibleCertificate(user.email)) {
      certificateStatus.textContent =
        "Estado de certificación: elegible. Tu avance ya permite solicitar certificado.";
    } else {
      certificateStatus.textContent =
        "Estado de certificación: en progreso. Necesitas 85% de avance.";
    }
  }

  function renderDayCard() {
    var dayTitle = document.getElementById("day-lesson-title");
    if (!dayTitle) return;
    var build = function (progress, paidMonths) {
      renderDayCardWithProgress(progress || {}, paidMonths || []);
    };
    if (cloudMode) {
      var paidPromise = window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; });
      var progPromise = window.DevSystemCloud.getProgressMap(user.email).catch(function () { return {}; });
      Promise.all([progPromise, paidPromise])
        .then(function (res) { build(res[0], res[1]); })
        .catch(function () { build({}, []); });
      return;
    }
    build(window.DevSystemState.getProgress(user.email), window.DevSystemState.getPaidMonthIds(user.email));
  }

  function renderDayCardWithProgress(progress, paidMonths) {
    var dayTitle = document.getElementById("day-lesson-title");
    var dayDesc = document.getElementById("day-lesson-desc");
    if (!dayTitle) return;
    progress = progress || {};
    var activeMonth = getActiveMonth(paidMonths || [], progress);
    var data = leccionesData["m" + activeMonth];
    var materiaKeys = data && data.materias ? Object.keys(data.materias) : [];
    var nextLesson = null;
    for (var mi = 0; mi < materiaKeys.length && !nextLesson; mi++) {
      var mk = materiaKeys[mi];
      var m = data.materias[mk];
      for (var li = 0; li < m.lecciones.length; li++) {
        var l = m.lecciones[li];
        if (!l.proximamente && !progress[l.id]) { nextLesson = l; break; }
      }
    }
    if (nextLesson) {
      dayTitle.textContent = "📖 " + nextLesson.titulo;
      dayDesc.textContent = "Continúa tu progreso — esta es tu siguiente lección.";
    } else if (materiaKeys.length > 0) {
      dayTitle.textContent = "🎉 ¡Todo completado!";
      dayDesc.textContent = "Has terminado todas las lecciones disponibles.";
    } else {
      dayTitle.textContent = "Aún no tienes lecciones pendientes";
      dayDesc.textContent = "Completa tu proceso de admisión para comenzar.";
    }
  }

  function renderCurriculum(cloudProgress, rootEl) {
    renderCurriculumForMonth(1, cloudProgress, rootEl);
  }

  function renderCurriculumForMonth(monthNum, cloudProgress, rootEl) {
    var root = rootEl || curriculumRoot;
    if (!root) return;
    var data = leccionesData["m" + monthNum];
    var materias = data && data.materias;
    if (!materias) {
      root.innerHTML = "<p class='small' style='color:var(--muted)'>No hay lecciones publicadas para este mes.</p>";
      return;
    }
    var progress = cloudProgress || (cloudMode ? {} : window.DevSystemState.getProgress(user.email));
    var materiaKeys = Object.keys(materias);

    root.innerHTML = "<div class='roadmap-grid'></div>";
    var grid = root.querySelector(".roadmap-grid");

    for (var ti = 0; ti < materiaKeys.length; ti += 1) {
      var mk = materiaKeys[ti];
      var m = materias[mk];
      var lecciones = m.lecciones;
      var html = "<div class='roadmap-col'><h3>" + (m.icono || "◇") + " " + m.nombre + "</h3><div class='roadmap-nodes'>";
      var sequentialUnlocked = true;

      for (var i = 0; i < lecciones.length; i += 1) {
        var lesson = lecciones[i];
        var num = i + 1;
        var label = mk.toUpperCase() + num;
        var completed = Boolean(progress[lesson.id]);
        var currentUnlocked = sequentialUnlocked && !lesson.proximamente;
        if (completed) { } else { sequentialUnlocked = false; }
        var clickable = completed || currentUnlocked;
        var cls = completed ? "node-done" : currentUnlocked ? "node-current" : lesson.proximamente ? "node-soon" : "node-locked";
        var link = clickable ? "<a href='leccion.html?id=" + lesson.id + "'>" + lesson.titulo + "</a>" : "<span>" + lesson.titulo + "</span>";
        html += "<div class='roadmap-node " + cls + "'><span class='node-dot'></span><span class='node-label'>" + label + ".</span><span class='node-title'>" + link + "</span></div>";
      }

      html += "</div></div>";
      if (grid) grid.insertAdjacentHTML("beforeend", html);
    }

    if (cloudMode && !cloudProgress) {
      window.DevSystemCloud.getProgressMap(user.email)
        .then(function (map) { renderCurriculumForMonth(monthNum, map || {}, root); })
        .catch(function () { renderCurriculumForMonth(monthNum, {}, root); });
    }
  }

  function renderGlosario(containerOverride) {
    var glosarioCard = document.getElementById("glosario-card");
    if (!containerOverride) {
      if (enrollmentStatus !== "activo") {
        if (glosarioCard) glosarioCard.style.display = "none";
        return;
      }
      if (glosarioCard) glosarioCard.style.display = "block";
    }
    var container = containerOverride || document.getElementById("glosario-list");
    if (!container) return;
    container.innerHTML = "";

    function renderTerms(terms) {
      terms.sort(function (a, b) {
        if (a.reviewed === b.reviewed) return 0;
        return a.reviewed ? 1 : -1;
      });
      for (var i = 0; i < terms.length; i += 1) {
        var term = terms[i];
        var card = document.createElement("div");
        card.className = "glosario-item";

        var nameEl = document.createElement("strong");
        nameEl.className = "glosario-termino";
        nameEl.textContent = term.termino || term.term || "";

        var defEl = document.createElement("p");
        defEl.className = "glosario-def";
        defEl.textContent = term.definicion || term.definition || "";

        var meta = document.createElement("span");
        meta.className = "glosario-meta";
        meta.textContent = term.mes
          ? "Mes " + term.mes
          : term.month_ref
          ? "Mes " + term.month_ref
          : term.known_term === false
          ? "Próximamente"
          : "";

        var toggle = document.createElement("label");
        toggle.className = "glosario-toggle";
        toggle.style.cssText = "display:flex;align-items:center;gap:0.3rem;font-size:0.82rem";
        var chk = document.createElement("input");
        chk.type = "checkbox";
        chk.checked = Boolean(term.reviewed);
        chk.setAttribute("data-term", term.termino || term.term || "");
        chk.addEventListener("change", async function (e) {
          var t = e.target.getAttribute("data-term");
          var r = e.target.checked;
          if (cloudMode && window.DevSystemCloud.setGlossaryReviewed) {
            await window.DevSystemCloud.setGlossaryReviewed(user.email, t, r);
          }
          renderGlosario(containerOverride);
        });
        toggle.appendChild(chk);
        toggle.appendChild(document.createTextNode(" Repasado"));

        var delBtn = document.createElement("button");
        delBtn.className = "btn btn-ghost";
        delBtn.style.cssText = "padding:0.2rem 0.5rem;font-size:0.8rem";
        delBtn.textContent = "✕";
        delBtn.setAttribute("data-term", term.termino || term.term || "");
        delBtn.addEventListener("click", async function (e) {
          var t = e.currentTarget.getAttribute("data-term");
          if (cloudMode && window.DevSystemCloud.deleteGlossaryTerm) {
            await window.DevSystemCloud.deleteGlossaryTerm(user.email, t);
          }
          renderGlosario(containerOverride);
        });

        card.style.cssText =
          "padding:0.6rem;border-bottom:1px solid var(--line);display:grid;grid-template-columns:1fr auto auto;gap:0.3rem 0.6rem;align-items:center";
        nameEl.style.gridColumn = "1";
        defEl.style.cssText = "grid-column:1/-1;font-size:0.82rem;color:var(--muted)";
        meta.style.cssText = "font-size:0.78rem;color:var(--accent)";
        toggle.style.gridColumn = "2";

        card.appendChild(nameEl);
        card.appendChild(defEl);
        card.appendChild(meta);
        card.appendChild(toggle);
        card.appendChild(delBtn);
        container.appendChild(card);
      }
    }

    if (cloudMode) {
      window.DevSystemCloud.getGlossaryTerms(user.email).then(function (terms) {
        renderTerms(terms || []);
      });
    } else {
      var stored = {};
      try {
        stored = JSON.parse(
          localStorage.getItem("devsystem_glosario_reviewed_" + user.email) || "{}"
        );
      } catch (e) {
        /* ignore */
      }
      var terms = (glosarioData || []).map(function (entry) {
        return {
          termino: entry.termino,
          definicion: entry.definicion,
          mes: entry.mes,
          reviewed: Boolean(stored[entry.termino]),
        };
      });
      renderTerms(terms);
    }
  }

  function renderAdmissionSteps() {
    if (!admissionCard) return;
    admissionCard.style.display = "block";

    if (enrollmentStatus === "activo") {
      if (admissionSteps) admissionSteps.style.display = "none";
      if (admissionCompleted) admissionCompleted.style.display = "block";
      return;
    }

    if (admissionSteps) admissionSteps.style.display = "block";
    if (admissionCompleted) admissionCompleted.style.display = "none";

    var docTypes = ["identificacion", "curp", "comprobante_domicilio", "comprobante_estudios", "foto", "cv"];
    var docsMap = {};
    for (var d = 0; d < documents.length; d++) {
      docsMap[documents[d].doc_type] = documents[d];
    }

    var allDocsDone = true;
    for (var dt = 0; dt < docTypes.length; dt++) {
      var checkSpan = document.querySelector('.doc-check[data-doc-type="' + docTypes[dt] + '"]');
      var done = Boolean(docsMap[docTypes[dt]]);
      if (checkSpan) {
        checkSpan.style.display = done ? "inline" : "none";
      }
      if (!done) allDocsDone = false;
    }

    var stepDocsStatus = document.getElementById("step-docs-status");
    if (stepDocsStatus) {
      stepDocsStatus.textContent = allDocsDone ? "Completado ✓" : "Pendiente";
      stepDocsStatus.style.color = allDocsDone ? "var(--green)" : "";
    }

    var stepExamStatus = document.getElementById("step-exam-status");
    var examBtn = document.getElementById("exam-btn");
    if (examPassed) {
      if (stepExamStatus) { stepExamStatus.textContent = "Aprobado — Puntaje: " + examScore + "/100 ✓"; stepExamStatus.style.color = "var(--green)"; }
      if (examBtn) examBtn.style.display = "none";
    } else {
      if (stepExamStatus) { stepExamStatus.textContent = "Pendiente"; stepExamStatus.style.color = ""; }
    }

    var stepPayStatus = document.getElementById("step-pay-status");
    var stepPayContent = document.getElementById("step-pay-content");
    if (examPresented) {
      if (stepPayStatus) { stepPayStatus.textContent = examPassed ? "Disponible" : "Disponible (tarifa regular)"; stepPayStatus.style.color = "var(--green)"; }
      if (stepPayContent) stepPayContent.style.display = "block";
      if (cloudMode && window.DevSystemCloud.getPaidMonthIds) {
        window.DevSystemCloud.getPaidMonthIds(user.email)
          .then(function (pms) { renderPayMonthOptions(pms || []); updatePayAmount(); })
          .catch(function () { renderPayMonthOptions([]); updatePayAmount(); });
      } else {
        renderPayMonthOptions(window.DevSystemState.getPaidMonthIds(user.email));
        updatePayAmount();
      }
    }
  }

  function updatePayAmount() {
    var select = document.getElementById("pay-month-select");
    var amountEl = document.getElementById("step-pay-amount");
    if (!select || !amountEl) return;
    var mId = Number(select.value);
    if (examPassed) {
      amountEl.textContent = formatMxn(cfg.preferredPrice || 7000);
    } else {
      amountEl.textContent = formatMxn((cfg.monthlyPricing || {})[String(mId)] || 7000);
    }
  }

  function renderPayMonthOptions(paidMonthsArg) {
    var select = document.getElementById("pay-month-select");
    var heading = document.getElementById("step-pay-heading");
    if (!select) return;
    var paidMonths = paidMonthsArg || [];
    var paidMap = {};
    for (var p = 0; p < paidMonths.length; p++) paidMap[paidMonths[p]] = true;
    select.innerHTML = "";
    if (examPassed) {
      if (heading) { heading.textContent = "¡Felicidades! Calificaste a la mensualidad fija de $7,000 MXN × 12 meses."; heading.style.color = "var(--green)"; }
      for (var m = 1; m <= 12; m++) {
        var opt = document.createElement("option");
        opt.value = String(m);
        opt.textContent = "Mes " + m + " — " + formatMxn(cfg.preferredPrice || 7000);
        if (paidMap[m]) {
          opt.textContent += " — Pagado ✓";
          opt.disabled = true;
        }
        select.appendChild(opt);
      }
    } else {
      if (heading) { heading.textContent = "Puedes pagar tus mensualidades con la tarifa regular del programa."; heading.style.color = "var(--muted)"; }
      var pricing = cfg.monthlyPricing || {};
      for (var m = 1; m <= 12; m++) {
        var opt = document.createElement("option");
        opt.value = String(m);
        opt.textContent = "Mes " + m + " — " + formatMxn(pricing[String(m)] || 7000);
        if (paidMap[m]) {
          opt.textContent += " — Pagado ✓";
          opt.disabled = true;
        }
        select.appendChild(opt);
      }
    }
    select.removeEventListener("change", updatePayAmount);
    select.addEventListener("change", updatePayAmount);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", async function () {
      if (cloudMode) {
        await window.DevSystemCloud.signOut();
      } else {
        window.DevSystemState.logout();
      }
      window.location.href = "login.html";
    });
  }

  var docInputs = document.querySelectorAll("#step-docs-upload input[type='file']");
  for (var di = 0; di < docInputs.length; di++) {
    docInputs[di].addEventListener("change", async function (event) {
      if (!cloudMode) {
        document.getElementById("docs-message").textContent = "Sube documentos desde la nube.";
        return;
      }
      var file = event.target.files[0];
      if (!file) return;
      var docType = event.target.getAttribute("data-doc-type");
      var result = await window.DevSystemCloud.uploadDocumentFile(user.email, docType, file);
      if (!result.ok) {
        document.getElementById("docs-message").textContent = "Error: " + result.message;
        return;
      }
      var saveResult = await window.DevSystemCloud.saveDocument(user.email, docType, result.path);
      if (!saveResult.ok) {
        document.getElementById("docs-message").textContent = "Error: " + saveResult.message;
        return;
      }
      documents = await window.DevSystemCloud.getDocuments(user.email);
      renderAdmissionSteps();
      document.getElementById("docs-message").textContent = "Documento subido correctamente.";
      document.getElementById("docs-message").style.color = "var(--green)";

      var allDone = true;
      var docTypes = ["identificacion", "curp", "comprobante_domicilio", "comprobante_estudios", "foto", "cv"];
      var docsMap = {};
      for (var d = 0; d < documents.length; d++) docsMap[documents[d].doc_type] = documents[d];
      for (var dt = 0; dt < docTypes.length; dt++) {
        if (!docsMap[docTypes[dt]]) { allDone = false; break; }
      }
      if (allDone) {
        await window.DevSystemCloud.updateEnrollmentStatus(user.email, "documentos_enviados");
        enrollment.status = "documentos_enviados";
        enrollmentStatus = "documentos_enviados";
      }
    });
  }

  var payBtn = document.getElementById("pay-btn");
  if (payBtn) {
    payBtn.addEventListener("click", async function () {
      if (!window.DevSystemPago) {
        payMessage.textContent = "Error: módulo de pago no disponible.";
        return;
      }
      var monthId = document.getElementById("pay-month-select").value;
      payMessage.textContent = "Iniciando pago...";
      try {
        await window.DevSystemPago.iniciarPago(monthId, user.email, user.name, "", "portal-wallet-container");
        payMessage.textContent = "Elige tu método de pago:";
        document.getElementById("pay-btn").style.display = "none";
      } catch (err) {
        payMessage.textContent = "Error: " + err.message + ". Intenta de nuevo.";
      }
    });
  }

  var glosarioToggle = document.getElementById("glosario-toggle-btn");
  var glosarioDrawer = document.getElementById("glosario-drawer");
  var glosarioClose = document.getElementById("glosario-close-btn");
  if (glosarioToggle && glosarioDrawer) {
    glosarioToggle.addEventListener("click", function () {
      glosarioDrawer.classList.toggle("open");
    });
  }
  if (glosarioClose && glosarioDrawer) {
    glosarioClose.addEventListener("click", function () {
      glosarioDrawer.classList.remove("open");
    });
  }

  var collapsibles = document.querySelectorAll(".collapsible-section summary");
  for (var ci = 0; ci < collapsibles.length; ci++) {
    collapsibles[ci].addEventListener("click", function (e) {
      var details = e.currentTarget.parentNode;
      var icon = details.querySelector(".collapse-icon");
      if (icon) icon.textContent = details.open ? "▾" : "▸";
    });
  }

  /* ===================================================================
     NEW: Matrícula generation + chip
     =================================================================== */

  function initMatricula() {
    var chip = document.getElementById("matricula-chip");
    if (!chip) return;

    if (enrollment.matricula) {
      chip.textContent = enrollment.matricula;
      return;
    }

    if (!cloudMode) {
      var localMat = localStorage.getItem("devsystem_matricula_" + user.email);
      if (localMat) {
        chip.textContent = localMat;
        return;
      }
      var year = new Date().getFullYear();
      var rand = String(Math.floor(1000 + Math.random() * 9000));
      var generated = "DSA-" + year + "-" + rand;
      localStorage.setItem("devsystem_matricula_" + user.email, generated);
      chip.textContent = generated;
      return;
    }

    (async function trySetMatricula() {
      var year = new Date().getFullYear();
      for (var attempt = 0; attempt < 5; attempt++) {
        var rand = String(Math.floor(1000 + Math.random() * 9000));
        var mat = "DSA-" + year + "-" + rand;
        chip.textContent = mat;
        var result = await window.DevSystemCloud.setMatricula(user.email, mat);
        if (result && result.ok) {
          enrollment.matricula = mat;
          return;
        }
      }
      chip.textContent = "DSA-" + year + "-XXXX";
    })();
  }

  /* ===================================================================
     NEW: Tab navigation system
     =================================================================== */

  var currentTab = "inicio";

  function switchTab(tabId) {
    if (enrollmentStatus !== "activo" && tabId !== "inicio") return;
    currentTab = tabId;
    var hash = tabId === "inicio" ? "" : "#" + tabId;
    if (window.location.hash !== hash) {
      history.pushState(null, "", hash || window.location.pathname);
    }

    var allBtns = document.querySelectorAll(".portal-tabs button");
    var allSections = document.querySelectorAll(".tab-content");
    for (var si = 0; si < allBtns.length; si++) {
      allBtns[si].classList.toggle("active", allBtns[si].getAttribute("data-tab") === tabId);
    }
    for (var si2 = 0; si2 < allSections.length; si2++) {
      var isTarget = allSections[si2].id === tabId;
      allSections[si2].classList.toggle("active", isTarget);
      if (isTarget) {
        (function (sec) {
          sec.style.opacity = "0";
          sec.style.transform = "translateY(8px)";
          sec.style.transition = "opacity 0.25s ease, transform 0.25s ease";
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              sec.style.opacity = "1";
              sec.style.transform = "translateY(0)";
            });
          });
        })(allSections[si2]);
      }
    }

    if (tabId === "plan") renderPlan();
    else if (tabId === "aula") renderAula();
    else if (tabId === "examenes") renderExamenes();
    else if (tabId === "pagos") renderPagos();
    else if (tabId === "marcadores") renderMarcadores();
    else if (tabId === "expediente") renderExpediente();
  }

  function initTabs() {
    var tabs = ["inicio", "plan", "aula", "examenes", "pagos", "marcadores", "expediente"];
    var hash = window.location.hash.replace("#", "");
    var initialTab = hash && tabs.indexOf(hash) !== -1 ? hash : "inicio";

    var tabNav = document.getElementById("portal-tabs");
    if (!tabNav) {
      console.error("[DEV SYSTEM] portal-tabs no encontrado — tabs muertos");
      return;
    }

    var tabBtns = tabNav.querySelectorAll("button");
    for (var tbi = 0; tbi < tabBtns.length; tbi++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          var tid = btn.getAttribute("data-tab");
          if (enrollmentStatus !== "activo" && tid !== "inicio") return;
          switchTab(tid);
        });
      })(tabBtns[tbi]);
    }

    for (var t = 0; t < tabs.length; t++) {
      var tb = tabNav.querySelector("button[data-tab='" + tabs[t] + "']");
      if (tb && enrollmentStatus !== "activo" && tabs[t] !== "inicio") {
        tb.style.opacity = "0.4";
        tb.style.cursor = "not-allowed";
        tb.setAttribute("title", "Completa tu admisión para acceder");
      }
    }

    switchTab(initialTab);

    window.addEventListener("hashchange", function () {
      var newHash = window.location.hash.replace("#", "");
      switchTab(newHash && tabs.indexOf(newHash) !== -1 ? newHash : "inicio");
    });
  }

  /* ===================================================================
     NEW: Inicio tab (renderInicio)
     =================================================================== */

  function renderInicio() {
    renderHeader();
    renderPagoWarning();
    renderProgress();
    renderAdmissionSteps();
    renderDayCard();
    if (enrollmentStatus === "activo") {
      renderInicioLecciones();
      renderPeriodoActual();
      renderAvanceMes();
    }
  }

  async function renderInicioLecciones() {
    var container = document.getElementById("inicio-lecciones");
    if (!container) return;
    var paidMonths = cloudMode
      ? (await window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; }))
      : window.DevSystemState.getPaidMonthIds(user.email);
    var progress = cloudMode
      ? (await window.DevSystemCloud.getProgressMap(user.email).catch(function () { return {}; }))
      : window.DevSystemState.getProgress(user.email);
    var activeMonth = getActiveMonth(paidMonths, progress);
    var data = leccionesData["m" + activeMonth];
    var materiaKeys = data && data.materias ? Object.keys(data.materias) : [];
    if (materiaKeys.length === 0) { container.innerHTML = ""; return; }

    var html = "";
    var count = 0;
    for (var mi = 0; mi < materiaKeys.length && count < 3; mi++) {
      var mk = materiaKeys[mi];
      var m = data.materias[mk];
      for (var li = 0; li < m.lecciones.length && count < 3; li++) {
        var l = m.lecciones[li];
        if (!l.proximamente && !progress[l.id]) {
          html += "<div class='day-lesson-card'><span class='day-lesson-icon'>" + (m.icono || "◇") + "</span><div><strong>" + l.titulo + "</strong><br><span class='small'>" + m.nombre + "</span></div><a href='leccion.html?id=" + l.id + "' class='btn btn-sm'>Ir</a></div>";
          count++;
        }
      }
    }
    if (count === 0) {
      html = "<p class='small' style='color:var(--muted)'>Todas las lecciones completadas. ¡Buen trabajo!</p>";
    }
    container.innerHTML = html;
  }

  async function renderPeriodoActual() {
    var container = document.getElementById("inicio-periodo");
    if (!container) return;
    var paidMonths = cloudMode
      ? (await window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; }))
      : window.DevSystemState.getPaidMonthIds(user.email);
    if (paidMonths.length === 0) {
      container.style.display = "none";
      return;
    }
    container.style.display = "block";
    var latestMonth = paidMonths[paidMonths.length - 1];
    var payments = await getPaymentDatesForUser(user.email);
    var periodStart = null;
    for (var pi = 0; pi < payments.length; pi++) {
      if (Number(payments[pi].month_id) === Number(latestMonth)) {
        var rawDate = payments[pi].created_at || payments[pi].payment_date || null;
        if (rawDate) periodStart = new Date(rawDate);
        break;
      }
    }
    if (!periodStart) periodStart = new Date();
    var periodEnd = addMonthsSafe(periodStart, 1);
    var totalDays = Math.round((periodEnd - periodStart) / 86400000);
    var elapsed = Math.round((new Date() - periodStart) / 86400000);
    if (elapsed < 0) elapsed = 0;
    if (elapsed > totalDays) elapsed = totalDays;
    var pct = totalDays > 0 ? Math.round((elapsed / totalDays) * 100) : 0;
    var title = getMonthTitle(latestMonth);

    container.innerHTML = "<div class='periodo-card'><p class='eyebrow'>Periodo actual — Mes " + latestMonth + "</p><h3>" + title + "</h3><div class='progress-bar' style='margin:0.6rem 0'><div class='progress-fill' style='width:" + pct + "%'></div></div><p class='small'>Día " + elapsed + " de " + totalDays + " (" + pct + "%)</p></div>";
  }

  async function renderAvanceMes() {
    var container = document.getElementById("inicio-avance");
    if (!container) return;
    var paidMonths = cloudMode
      ? (await window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; }))
      : window.DevSystemState.getPaidMonthIds(user.email);
    var progress = cloudMode
      ? (await window.DevSystemCloud.getProgressMap(user.email).catch(function () { return {}; }))
      : window.DevSystemState.getProgress(user.email);
    var activeMonth = getActiveMonth(paidMonths, progress);
    var data = leccionesData["m" + activeMonth];
    var materiaKeys = data && data.materias ? Object.keys(data.materias) : [];
    if (materiaKeys.length === 0) { container.style.display = "none"; return; }
    container.style.display = "block";

    var total = 0;
    var done = 0;
    for (var mi = 0; mi < materiaKeys.length; mi++) {
      var mk = materiaKeys[mi];
      var m = data.materias[mk];
      for (var li = 0; li < m.lecciones.length; li++) {
        var l = m.lecciones[li];
        if (!l.proximamente) {
          total++;
          if (progress[l.id]) done++;
        }
      }
    }
    var pct = total > 0 ? Math.round((done / total) * 100) : 0;
    var r = 36;
    var circ = 2 * Math.PI * r;
    var offset = circ - (pct / 100) * circ;

    container.innerHTML = "<div class='avance-card'><p class='eyebrow'>Avance del mes</p><div class='avance-circle'><svg width='96' height='96' viewBox='0 0 96 96'><circle cx='48' cy='48' r='" + r + "' fill='none' stroke='var(--line)' stroke-width='6'/><circle cx='48' cy='48' r='" + r + "' fill='none' stroke='var(--accent)' stroke-width='6' stroke-dasharray='" + circ + "' stroke-dashoffset='" + offset + "' stroke-linecap='round' transform='rotate(-90,48,48)'/></svg><span class='avance-circle-text'>" + pct + "%</span></div><p class='small'>" + done + " de " + total + " lecciones</p></div>";
  }

  /* ===================================================================
     NEW: Plan de estudios tab (renderPlan)
     =================================================================== */

  async function renderPlan() {
    var chipsRow = document.getElementById("month-chips");
    var roadmapRoot = document.getElementById("curriculum-root");
    if (!chipsRow || !roadmapRoot) return;

    var paidMonths = cloudMode
      ? (await window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; }))
      : window.DevSystemState.getPaidMonthIds(user.email);
    var progress = cloudMode
      ? (await window.DevSystemCloud.getProgressMap(user.email).catch(function () { return {}; }))
      : window.DevSystemState.getProgress(user.email);
    var payments = await getPaymentDatesForUser(user.email);

    var paidMap = {};
    for (var pi = 0; pi < paidMonths.length; pi++) paidMap[paidMonths[pi]] = true;
    var activeMonth = getActiveMonth(paidMonths, progress);
    var pagoInfo = getPagoEstado(payments);

    chipsRow.innerHTML = "";
    for (var m = 1; m <= 12; m++) {
      var title = getMonthTitle(m);
      var isPaid = Boolean(paidMap[m]);
      var chip = document.createElement("button");
      chip.className = "month-chip";
      chip.setAttribute("data-paid", isPaid ? "1" : "0");
      chip.style.cssText = "text-align:left;flex-shrink:0;display:flex;flex-direction:column;gap:0.15rem;padding:0.55rem 0.8rem;border-radius:0.75rem;border:1px solid var(--line);background:var(--bg-card);color:var(--text);font:inherit;cursor:pointer;min-width:150px;transition:all 0.2s";
      if (m === activeMonth) {
        chip.classList.add("month-chip-active");
        chip.style.borderColor = "var(--accent)";
        chip.style.background = "rgba(173,199,255,0.08)";
      }
      var stateTxt = "";
      var stateColor = "var(--muted)";
      if (isPaid) {
        stateTxt = getMonthState(m, progress, activeMonth);
        stateColor = "var(--green)";
      } else {
        var lockFecha = addMonthsSafe(pagoInfo.baseDate, m - 1);
        stateTxt = "🔒 Disponible al pagar tu mensualidad del " + lockFecha.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
      }
      chip.innerHTML = "<strong style='font-size:0.82rem'>M" + m + "</strong><span class='small' style='font-size:0.72rem;color:var(--muted)'>" + title + "</span><span class='small' style='font-size:0.7rem;color:" + stateColor + "'>" + stateTxt + "</span>";
      (function (mid, paid) {
        chip.addEventListener("click", function () {
          if (paid) {
            var allChips = chipsRow.querySelectorAll(".month-chip");
            for (var ci = 0; ci < allChips.length; ci++) {
              allChips[ci].classList.remove("month-chip-active");
              allChips[ci].style.borderColor = "var(--line)";
              allChips[ci].style.background = "var(--bg-card)";
            }
            chip.classList.add("month-chip-active");
            chip.style.borderColor = "var(--accent)";
            chip.style.background = "rgba(173,199,255,0.08)";
            updateChipStates(chipsRow, mid, progress);
            renderPlanRoadmap(mid, roadmapRoot, progress);
          } else {
            switchTab("pagos");
          }
        });
      })(m, isPaid);
      chipsRow.appendChild(chip);
    }

    renderPlanRoadmap(activeMonth, roadmapRoot, progress);
  }

  function updateChipStates(chipsRow, selectedMonth, progress) {
    var chips = chipsRow.querySelectorAll(".month-chip");
    for (var ci = 0; ci < chips.length; ci++) {
      var c = chips[ci];
      if (c.getAttribute("data-paid") !== "1") continue;
      var strong = c.querySelector("strong");
      if (!strong) continue;
      var mid = Number(String(strong.textContent).replace("M", ""));
      var spans = c.querySelectorAll("span");
      if (spans.length >= 2) {
        var st = getMonthState(mid, progress, selectedMonth);
        spans[1].textContent = st;
        spans[1].style.color = "var(--green)";
      }
    }
  }

  function renderPlanRoadmap(monthNum, roadmapRoot, progress) {
    if (!roadmapRoot) return;
    roadmapRoot.innerHTML = "<h3 style='margin-bottom:0.8rem'>" + getMonthTitle(monthNum) + "</h3><div id='plan-roadmap-root' class='roadmap'></div>";
    var roadmapEl = document.getElementById("plan-roadmap-root");
    if (roadmapEl) renderCurriculumForMonth(monthNum, progress || null, roadmapEl);
  }

  function renderPlanContent(monthNum, contentArea, paidMonthsArg) {
    if (!contentArea) return;
    var isPaid = false;
    var paidMonths = paidMonthsArg || [];
    for (var pi = 0; pi < paidMonths.length; pi++) {
      if (paidMonths[pi] === monthNum) { isPaid = true; break; }
    }

    if (!isPaid) {
      contentArea.innerHTML = "<div style='padding:2rem;text-align:center;color:var(--muted)'><p>🔒 Mes " + monthNum + "</p><p class='small'>Este mes está bloqueado. Realiza el pago correspondiente para acceder.</p></div>";
      return;
    }

    if (monthNum === 1) {
      contentArea.innerHTML = "<h3 style='margin-bottom:1rem'>" + MONTH_TITLES[1] + "</h3><div id='plan-curriculum-root'></div>";
      var planRoot = document.getElementById("plan-curriculum-root");
      if (planRoot) {
        if (cloudMode) {
          window.DevSystemCloud.getProgressMap(user.email).then(function (map) {
            renderCurriculum(map || {}, planRoot);
          });
        } else {
          renderCurriculum(null, planRoot);
        }
      }
    } else {
      var title = MONTH_TITLES[monthNum] || "Mes " + monthNum;
      contentArea.innerHTML = "<div style='padding:2rem;text-align:center;color:var(--line)'><h3>" + title + "</h3><p class='small' style='margin-top:1rem;color:var(--muted)'>✨ El contenido del Mes " + monthNum + " se publicará próximamente.</p><p class='small' style='color:var(--muted)'>Completa los meses anteriores para mantener tu avance.</p></div>";
    }
  }

  /* ===================================================================
     NEW: Aula tab (renderAula)
     =================================================================== */

  function renderAula() {
    renderAulaContinua();
    renderAulaUltimas();
    renderAulaGuias();
  }

  async function renderAulaContinua() {
    var container = document.getElementById("aula-continua");
    if (!container) return;
    var paidMonths = cloudMode
      ? (await window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; }))
      : window.DevSystemState.getPaidMonthIds(user.email);
    var progress = cloudMode
      ? (await window.DevSystemCloud.getProgressMap(user.email).catch(function () { return {}; }))
      : window.DevSystemState.getProgress(user.email);
    var activeMonth = getActiveMonth(paidMonths, progress);
    var data = leccionesData["m" + activeMonth];
    var materiaKeys = data && data.materias ? Object.keys(data.materias) : [];

    var firstUncompleted = null;
    var materiaName = "";
    var materiaIcon = "";
    for (var mi = 0; mi < materiaKeys.length && !firstUncompleted; mi++) {
      var mk = materiaKeys[mi];
      var m = data.materias[mk];
      for (var li = 0; li < m.lecciones.length && !firstUncompleted; li++) {
        var l = m.lecciones[li];
        if (!l.proximamente && !progress[l.id]) {
          firstUncompleted = l;
          materiaName = m.nombre;
          materiaIcon = m.icono || "◇";
        }
      }
    }
    if (firstUncompleted) {
      container.innerHTML = "<div class='card card-highlighted'><p class='eyebrow'>Continúa donde te quedaste</p><h3>" + materiaIcon + " " + firstUncompleted.titulo + "</h3><p class='small'>" + materiaName + "</p><a href='leccion.html?id=" + firstUncompleted.id + "' class='btn btn-block' style='margin-top:0.8rem'>Ir a la lección</a></div>";
    } else {
      container.innerHTML = "<div class='card card-highlighted'><p class='eyebrow'>Continúa donde te quedaste</p><h3>🎉 ¡Todo completado!</h3><p class='small'>Has terminado todas las lecciones disponibles.</p></div>";
    }
  }

  function renderAulaUltimas() {
    var container = document.getElementById("aula-ultimas");
    if (!container) return;

    if (cloudMode && window.DevSystemCloud.getAllLessonStats) {
      window.DevSystemCloud.getAllLessonStats(user.email).then(function (stats) {
        if (!stats || stats.length === 0) {
          container.innerHTML = "<p class='small' style='color:var(--muted)'>Aún no has completado lecciones.</p>";
          return;
        }
        var sorted = stats.slice().sort(function (a, b) {
          var da = new Date(a.completed_at || 0);
          var db = new Date(b.completed_at || 0);
          return db - da;
        });
        var last5 = sorted.slice(0, 5);
        var html = "<p class='eyebrow'>Últimas lecciones</p>";
        for (var i = 0; i < last5.length; i++) {
          var s = last5[i];
          var dateStr = s.completed_at ? new Date(s.completed_at).toLocaleDateString("es-MX", { day: "numeric", month: "short" }) : "-";
          var allLessons = [];
          var materiaKeys = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];
          for (var mi = 0; mi < materiaKeys.length; mi++) {
            var mk = materiaKeys[mi];
            var m = leccionesData.m1.materias[mk];
            for (var li = 0; li < m.lecciones.length; li++) {
              allLessons.push(m.lecciones[li]);
            }
          }
          var lessonTitle = s.lesson_id || "-";
          for (var li2 = 0; li2 < allLessons.length; li2++) {
            if (allLessons[li2].id === s.lesson_id) { lessonTitle = allLessons[li2].titulo; break; }
          }
          html += "<div class='summary-row'><span class='small'>" + dateStr + "</span><strong style='flex:1;font-size:0.9rem'>" + lessonTitle + "</strong><span class='small' style='color:var(--accent)'>" + (s.first_try_correct || 0) + "/" + (s.total_exercises || "-") + "</span></div>";
        }
        container.innerHTML = html;
      });
    } else {
      var progress = window.DevSystemState.getProgress(user.email);
      var keys = Object.keys(progress);
      var doneIds = [];
      for (var ki = 0; ki < keys.length; ki++) {
        if (progress[keys[ki]]) doneIds.push(keys[ki]);
      }
      if (doneIds.length === 0) {
        container.innerHTML = "<p class='small' style='color:var(--muted)'>Aún no has completado lecciones.</p>";
        return;
      }
      var last5local = doneIds.slice(-5).reverse();
      var html = "<p class='eyebrow'>Últimas lecciones</p>";
      for (var li3 = 0; li3 < last5local.length; li3++) {
        var lid = last5local[li3];
        var allLessons2 = [];
        var materiaKeys2 = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];
        for (var mi2 = 0; mi2 < materiaKeys2.length; mi2++) {
          var mk2 = materiaKeys2[mi2];
          var m2 = leccionesData.m1.materias[mk2];
          for (var li4 = 0; li4 < m2.lecciones.length; li4++) {
            allLessons2.push(m2.lecciones[li4]);
          }
        }
        var title2 = lid;
        for (var li5 = 0; li5 < allLessons2.length; li5++) {
          if (allLessons2[li5].id === lid) { title2 = allLessons2[li5].titulo; break; }
        }
        html += "<div class='summary-row'><strong style='flex:1;font-size:0.9rem'>" + title2 + "</strong></div>";
      }
      container.innerHTML = html;
    }
  }

  function renderAulaGuias() {
    var container = document.getElementById("aula-guias");
    if (!container) return;
    var materiaKeys = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];
    var html = "<p class='eyebrow'>Guías de estudio</p><div style='display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))'>";

    function buildGuideCards(progress) {
      var h = html;
      for (var mi = 0; mi < materiaKeys.length; mi++) {
        var mk = materiaKeys[mi];
        var m = leccionesData.m1.materias[mk];
        var total = 0;
        var done = 0;
        for (var li = 0; li < m.lecciones.length; li++) {
          var l = m.lecciones[li];
          if (!l.proximamente) {
            total++;
            if (progress[l.id]) done++;
          }
        }
        var desc = "";
        if (mk === "a") desc = "Los fundamentos físicos y lógicos de la computación.";
        else if (mk === "b") desc = "El alfabeto del software: lenguajes y lógica.";
        else if (mk === "c") desc = "Aprende a dirigir la IA para construir.";
        else desc = m.nombre;
        var pct = total > 0 ? Math.round((done / total) * 100) : 0;
        h += "<div class='card'><h4>" + (m.icono || "◇") + " " + m.nombre + "</h4><p class='small'>" + desc + "</p><div class='progress-bar' style='margin:0.5rem 0;height:6px'><div class='progress-fill' style='width:" + pct + "%;height:6px'></div></div><span class='small'>" + done + "/" + total + " lecciones</span></div>";
      }
      h += "</div>";
      container.innerHTML = h;
    }

    if (cloudMode) {
      window.DevSystemCloud.getProgressMap(user.email).then(function (map) {
        buildGuideCards(map || {});
      });
    } else {
      buildGuideCards(window.DevSystemState.getProgress(user.email));
    }
  }

  /* ===================================================================
     NEW: Exámenes tab (renderExamenes)
     =================================================================== */

  async function renderExamenes() {
    var section = document.getElementById("examenes");
    if (!section) return;

    var paidMonths = cloudMode
      ? (await window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; }))
      : window.DevSystemState.getPaidMonthIds(user.email);
    var progress = cloudMode
      ? (await window.DevSystemCloud.getProgressMap(user.email).catch(function () { return {}; }))
      : window.DevSystemState.getProgress(user.email);
    var exams = cloudMode
      ? (await window.DevSystemCloud.getMonthExams(user.email).catch(function () { return []; }))
      : [];

    var examsMap = {};
    for (var ei = 0; ei < exams.length; ei++) {
      var ex = exams[ei];
      if (ex.passed) examsMap[Number(ex.month_id)] = ex;
    }

    var paidMap = {};
    for (var pi = 0; pi < paidMonths.length; pi++) paidMap[paidMonths[pi]] = true;

    var html = "";

    html += "<div class='card'><p class='eyebrow'>Examen de admisión</p>";
    if (examPassed) {
      var examDate = enrollment.exam_date ? new Date(enrollment.exam_date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" }) : "—";
      html += "<div class='summary-row'><span>Estado</span><span class='badge' style='background:rgba(34,197,94,0.15);color:var(--green);padding:0.25rem 0.6rem;border-radius:999px;font-size:0.75rem;font-weight:700'>Aprobado ✓</span></div><div class='summary-row'><span>Puntaje</span><strong>" + (examScore || "—") + "/100 · " + examDate + "</strong></div>";
    } else {
      html += "<div class='summary-row'><span>Estado</span><span class='badge' style='background:var(--line);color:var(--muted);padding:0.25rem 0.6rem;border-radius:999px;font-size:0.75rem;font-weight:700'>Pendiente</span></div><p class='small' style='margin-top:0.4rem;color:var(--muted)'>Presenta tu examen de admisión para acceder a la tarifa preferente.</p><a href='examen.html' class='btn btn-block' style='margin-top:0.6rem'>Presentar examen</a>";
    }
    html += "</div>";

    html += "<div style='margin-top:1.2rem'><p class='eyebrow'>Exámenes mensuales</p><div style='display:grid;gap:0.6rem'>";
    for (var m = 1; m <= 12; m++) {
      var mTitle = "Mes " + m + " · " + getMonthTitle(m);
      if (paidMap[m]) {
        var exRec = examsMap[m];
        html += "<div class='card' style='padding:1rem'><div class='summary-row'><span>" + mTitle + "</span>";
        if (exRec) {
          var exDate = exRec.taken_at ? new Date(exRec.taken_at).toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" }) : "—";
          html += "<span class='badge' style='background:rgba(34,197,94,0.15);color:var(--green);padding:0.25rem 0.6rem;border-radius:999px;font-size:0.75rem;font-weight:700'>Aprobado ✓ · " + (exRec.score || "—") + "/100</span></div><p class='small' style='margin-top:0.3rem;color:var(--green)'>Presentado el " + exDate + "</p>";
        } else {
          var total = 0;
          var done = 0;
          var data = leccionesData["m" + m];
          if (data && data.materias) {
            var keys = Object.keys(data.materias);
            for (var ki = 0; ki < keys.length; ki++) {
              var mat = data.materias[keys[ki]];
              for (var li = 0; li < mat.lecciones.length; li++) {
                var l = mat.lecciones[li];
                if (!l.proximamente) { total++; if (progress[l.id]) done++; }
              }
            }
          }
          if (total > 0 && done >= total) {
            html += "<span class='badge' style='background:rgba(173,199,255,0.12);color:var(--accent);padding:0.25rem 0.6rem;border-radius:999px;font-size:0.75rem;font-weight:700'>Disponible</span></div><p class='small' style='margin-top:0.3rem;color:var(--accent)'>Completaste todas las lecciones del mes. ¡Presenta tu examen!</p><a href='examen-mes.html?mes=" + m + "' class='btn btn-block' style='margin-top:0.6rem'>Presentar examen</a>";
          } else {
            html += "<span class='badge' style='background:var(--line);color:var(--muted);padding:0.25rem 0.6rem;border-radius:999px;font-size:0.75rem;font-weight:700'>🔒 Bloqueado</span></div><p class='small' style='margin-top:0.3rem;color:var(--muted)'>Completa todas las lecciones del mes (" + done + "/" + total + " lecciones) para desbloquear el examen.</p>";
          }
        }
        html += "</div>";
      } else {
        html += "<div class='summary-row' style='padding:0.6rem 0'><span class='small'>" + mTitle + "</span><span class='small' style='color:var(--muted)'>Próximamente</span></div>";
      }
    }
    html += "</div></div>";

    section.innerHTML = html;
  }

  /* ===================================================================
     NEW: Marcadores tab (renderMarcadores)
     =================================================================== */

  function renderMarcadores() {
    renderMarcadoresCount();
    renderMarcadoresSugeridos();
    renderGlosario(document.getElementById("marcadores-glosario-list"));
  }

  function renderMarcadoresCount() {
    var container = document.getElementById("marcadores-header");
    if (!container) return;

    function buildCount(terms) {
      var total = terms.length;
      var unreviewed = 0;
      for (var i = 0; i < terms.length; i++) {
        if (!terms[i].reviewed) unreviewed++;
      }
      container.innerHTML = "<p><strong>" + total + "</strong> términos · <span style='color:var(--accent)'>" + unreviewed + " sin repasar</span></p>";
    }

    if (cloudMode) {
      window.DevSystemCloud.getGlossaryTerms(user.email).then(function (terms) {
        buildCount(terms || []);
      });
    } else {
      var stored = {};
      try { stored = JSON.parse(localStorage.getItem("devsystem_glosario_reviewed_" + user.email) || "{}"); } catch (e) { }
      var terms = (glosarioData || []).map(function (entry) {
        return { termino: entry.termino, reviewed: Boolean(stored[entry.termino]) };
      });
      buildCount(terms);
    }
  }

  function renderMarcadoresSugeridos() {
    var container = document.getElementById("marcadores-sugeridos");
    if (!container) return;

    var suggested = [];
    for (var gi = 0; gi < glosarioData.length; gi++) {
      if (Number(glosarioData[gi].mes) === 1) suggested.push(glosarioData[gi]);
    }

    function buildExcludingSaved(savedSet) {
      var filtered = [];
      for (var si = 0; si < suggested.length && filtered.length < 6; si++) {
        var term = suggested[si];
        if (!savedSet[term.termino]) filtered.push(term);
      }
      if (filtered.length === 0) {
        container.style.display = "none";
        return;
      }
      container.style.display = "block";
      var html = "<p class='eyebrow'>Términos sugeridos del mes</p><div style='display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.5rem'>";
      for (var fi = 0; fi < filtered.length; fi++) {
        var t = filtered[fi];
        html += "<div class='glosario-suggested-item'><strong>" + t.termino + "</strong><p class='small'>" + t.definicion + "</p><button class='btn btn-ghost btn-sm add-term-btn' data-term='" + t.termino + "' data-def='" + (t.definicion || "").replace(/'/g, "&#39;") + "' data-mes='1'>+ Agregar</button></div>";
      }
      html += "</div>";
      container.innerHTML = html;

      var addBtns = container.querySelectorAll(".add-term-btn");
      for (var ai = 0; ai < addBtns.length; ai++) {
        (function (btn) {
          btn.addEventListener("click", async function () {
            var termino = btn.getAttribute("data-term");
            var definicion = btn.getAttribute("data-def");
            if (cloudMode && window.DevSystemCloud.saveGlossaryTerm) {
              await window.DevSystemCloud.saveGlossaryTerm({
                email: user.email,
                term: termino,
                definition: definicion,
                month_ref: 1,
                known_term: true,
                reviewed: false,
              });
            } else {
              var key = "devsystem_glosario_saved_" + user.email;
              var saved = {};
              try { saved = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { }
              saved[termino] = { definition: definicion, month_ref: 1 };
              localStorage.setItem(key, JSON.stringify(saved));
            }
            renderMarcadores();
          });
        })(addBtns[ai]);
      }
    }

    if (cloudMode) {
      window.DevSystemCloud.getGlossaryTerms(user.email).then(function (existing) {
        var savedSet = {};
        for (var ei = 0; ei < (existing || []).length; ei++) {
          savedSet[(existing[ei].term || existing[ei].termino || "").toLowerCase()] = true;
        }
        buildExcludingSaved(savedSet);
      });
    } else {
      var savedSet = {};
      try {
        var raw = localStorage.getItem("devsystem_glosario_saved_" + user.email) || "{}";
        var parsed = JSON.parse(raw);
        for (var sk in parsed) savedSet[sk.toLowerCase()] = true;
      } catch (e) { }
      var storedReviewed = {};
      try { storedReviewed = JSON.parse(localStorage.getItem("devsystem_glosario_reviewed_" + user.email) || "{}"); } catch (e) { }
      for (var sr in storedReviewed) savedSet[sr.toLowerCase()] = true;
      buildExcludingSaved(savedSet);
    }
  }

  /* ===================================================================
     NEW: Expediente tab (renderExpediente)
     =================================================================== */

  function renderExpediente() {
    renderExpedienteCredencial();
    renderExpedienteKardex();
    renderExpedienteDatos();
    renderExpedienteDocs();
  }

  function renderExpedienteCredencial() {
    var setText = function (id, val) { var el = document.getElementById(id); if (el) el.textContent = val || "—"; };

    var matricula = enrollment.matricula || (document.getElementById("matricula-chip") ? document.getElementById("matricula-chip").textContent : "—");

    setText("credencial-nombre", user.name || enrollment.full_name);
    setText("credencial-matricula", matricula);
    setText("credencial-nivel", enrollment.plan || "Plan Base");

    var vigenciaStr = "—";
    if (cloudMode && window.DevSystemCloud.getPaidMonthIds) {
      window.DevSystemCloud.getPaidMonthIds(user.email).then(function (paidMonths) {
        if (paidMonths && paidMonths.length > 0) {
          var maxPay = Math.max.apply(null, paidMonths);
          var start = new Date();
          start.setMonth(start.getMonth() - (12 - maxPay));
          var end = new Date(start);
          end.setMonth(end.getMonth() + 1);
          vigenciaStr = end.toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
        }
        setText("credencial-vigencia", vigenciaStr);
      });
    } else {
      var d = new Date(); d.setFullYear(d.getFullYear() + 1);
      vigenciaStr = d.toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
      setText("credencial-vigencia", vigenciaStr);
    }

    var initials = (user.name || "A").split(" ").map(function (s) { return s.charAt(0); }).join("").slice(0, 2).toUpperCase();
    var avatar = document.getElementById("credencial-avatar");
    if (avatar) avatar.innerHTML = initials;
    if (avatar) avatar.style.fontSize = "1.2rem";
    if (avatar) avatar.style.fontWeight = "700";
    if (avatar) avatar.style.color = "var(--accent)";

    if (cloudMode && window.DevSystemCloud.getDocumentPhotoUrl) {
      window.DevSystemCloud.getDocumentPhotoUrl(user.email)
        .then(function (photoUrl) {
          if (photoUrl && avatar) { avatar.innerHTML = "<img src='" + photoUrl + "' alt='Foto' style='width:100%;height:100%;object-fit:cover;border-radius:50%'>"; avatar.style.fontSize = ""; avatar.style.fontWeight = ""; avatar.style.color = ""; }
        })
        .catch(function () {});
    }
  }

  function renderExpedienteKardex() {
    var tbody = document.getElementById("kardex-body");
    if (!tbody) return;

    function paidMonthsFromMap(map) {
      var out = [];
      for (var k in map) { if (map[k]) out.push(Number(k)); }
      out.sort(function (a, b) { return a - b; });
      return out;
    }

    function buildKardex(paidMap, progress, examsMap) {
      var activeMonth = getActiveMonth(paidMonthsFromMap(paidMap), progress);
      var html = "";
      for (var m = 1; m <= 12; m++) {
        var title = "M" + m + " · " + getMonthTitle(m);
        var estado, calif;
        var exRec = examsMap[m];
        if (paidMap[m]) {
          if (exRec && exRec.passed) {
            estado = "<span style='color:var(--green)'>Aprobado ✓</span>";
            calif = exRec.score || "—";
          } else {
            var total = 0, done = 0;
            var data = leccionesData["m" + m];
            if (data && data.materias) {
              var materiaKeys = Object.keys(data.materias);
              for (var mi = 0; mi < materiaKeys.length; mi++) {
                var mk = materiaKeys[mi];
                var mat = data.materias[mk];
                for (var li = 0; li < mat.lecciones.length; li++) {
                  var l = mat.lecciones[li];
                  if (!l.proximamente) { total++; if (progress[l.id]) done++; }
                }
              }
            }
            var pct = total > 0 ? Math.round((done / total) * 100) : 0;
            if (m === activeMonth) {
              estado = "<span style='color:var(--success)'>En curso · " + pct + "%</span>";
            } else {
              estado = "<span style='color:var(--success)'>Pagado ✓</span>";
            }
            calif = "—";
          }
        } else {
          estado = "Pendiente";
          calif = "—";
        }
        html += "<tr style='border-bottom:1px solid var(--line)'><td style='padding:0.5rem'>" + title + "</td><td style='padding:0.5rem'>" + estado + "</td><td style='padding:0.5rem;text-align:right'>" + calif + "</td></tr>";
      }
      tbody.innerHTML = html;
    }

    buildKardex({}, {}, {});

    var paidPromise = cloudMode
      ? window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; })
      : Promise.resolve(window.DevSystemState.getPaidMonthIds(user.email));

    paidPromise.then(function (pms) {
      var pm = {};
      for (var i = 0; i < pms.length; i++) pm[pms[i]] = true;
      var examsPromise = cloudMode
        ? window.DevSystemCloud.getMonthExams(user.email).catch(function () { return []; })
        : Promise.resolve([]);
      examsPromise.then(function (exams) {
        var em = {};
        for (var j = 0; j < exams.length; j++) {
          var ex = exams[j];
          if (ex.passed) em[Number(ex.month_id)] = ex;
        }
        if (cloudMode) {
          window.DevSystemCloud.getProgressMap(user.email)
            .then(function (map) { buildKardex(pm, map || {}, em); })
            .catch(function () { buildKardex(pm, {}, em); });
        } else {
          buildKardex(pm, window.DevSystemState.getProgress(user.email), em);
        }
      });
    });
  }

  function renderExpedienteDatos() {
    var el = function (id) { return document.getElementById(id); };
    if (el("student-email")) el("student-email").textContent = user.email || "—";
    if (el("student-phone")) el("student-phone").textContent = enrollment.phone || "—";
    if (el("billing-plan")) el("billing-plan").textContent = enrollment.plan || "Plan Base";
    if (el("billing-price")) el("billing-price").textContent = examPassed ? "$7,000 MXN / mes" : (planPricing.label || "—");
    if (el("billing-status")) el("billing-status").textContent = statusLabels[enrollmentStatus] || enrollmentStatus;
    var fechaRaw = enrollment.created_at || enrollment.updated_at || null;
    if (fechaRaw && el("student-fecha")) {
      el("student-fecha").textContent = new Date(fechaRaw).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
    }
    var priceNote = el("price-note");
    if (priceNote) {
      if (examPassed) { priceNote.textContent = "Tarifa preferente — examen de admisión aprobado ✓"; priceNote.style.color = "var(--green)"; }
      else { priceNote.textContent = "Aprueba el examen para tarifa preferente de $7,000 MXN / mes."; priceNote.style.color = "var(--accent)"; }
    }
  }

  function renderExpedienteDocs() {
    var container = document.getElementById("documentos-list");
    if (!container) return;
    var docTypes = ["identificacion", "curp", "comprobante_domicilio", "comprobante_estudios", "foto", "cv"];
    var docLabels = {
      identificacion: "Identificación oficial",
      curp: "CURP",
      comprobante_domicilio: "Comprobante de domicilio",
      comprobante_estudios: "Certificado de estudios",
      foto: "Fotografía",
      cv: "CV",
    };
    var docsMap = {};
    for (var d = 0; d < documents.length; d++) {
      docsMap[documents[d].doc_type] = documents[d];
    }
    var html = "";
    for (var dt = 0; dt < docTypes.length; dt++) {
      var present = Boolean(docsMap[docTypes[dt]]);
      var icon = present ? "✓" : "✕";
      var color = present ? "var(--green)" : "var(--muted)";
      html += "<div class='summary-row'><span>" + (docLabels[docTypes[dt]] || docTypes[dt]) + "</span><strong style='color:" + color + "'>" + icon + "</strong></div>";
    }
    container.innerHTML = html;
  }

  /* ===================================================================
     NEW: Pagos tab (renderPagos) + pago warnings (renderPagoWarning)
     =================================================================== */

  async function renderPagos() {
    var estadoContent = document.getElementById("pago-estado-contenido");
    var pagarContent = document.getElementById("pago-pagar-contenido");
    var historialBody = document.getElementById("pago-historial-body");
    var calendarioEl = document.getElementById("pago-calendario");
    if (!estadoContent && !pagarContent && !historialBody && !calendarioEl) return;

    if (!document.getElementById("pagos-css")) {
      var st = document.createElement("style");
      st.id = "pagos-css";
      st.textContent = "@media(max-width:600px){#pago-calendario{grid-template-columns:repeat(2,1fr)!important}}";
      document.head.appendChild(st);
    }

    var payments = await getPaymentDatesForUser(user.email);
    var info = getPagoEstado(payments);

    var badges = {
      al_corriente: { color: "var(--green)", label: "Al corriente" },
      por_vencer:   { color: "var(--amber)", label: "Por vencer" },
      vencido:      { color: "var(--danger)", label: "Vencido" },
    };
    var badge = badges[info.estado] || badges.al_corriente;

    if (estadoContent) {
      var fechaStr = info.fechaVencimiento.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
      var msg = "";
      if (info.estado === "vencido") {
        msg = "Tu mensualidad del Mes " + info.proximoMes + " está vencida. Realiza tu pago para continuar con el programa.";
      } else if (info.estado === "por_vencer") {
        msg = "Tu mensualidad del Mes " + info.proximoMes + " vence en " + (info.diasRestantes === 1 ? "1 día" : info.diasRestantes + " días") + ".";
      } else {
        msg = "Estás al corriente. Tu siguiente mensualidad (Mes " + info.proximoMes + ") vence el " + fechaStr + ".";
      }
      estadoContent.innerHTML =
        "<div style='display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap'><span class='badge' style='background:" + badge.color + ";color:#001a41;padding:0.3rem 0.8rem;border-radius:999px;font-size:0.78rem;font-weight:800'>" + badge.label + "</span><span class='small' style='color:var(--muted)'>" + msg + "</span></div>" +
        "<div class='summary-row' style='margin-top:0.8rem'><span>Monto mensual</span><strong>" + formatMxn(info.monto) + "</strong></div>" +
        "<div class='summary-row'><span>Concepto</span><strong>Mensualidad Mes " + info.proximoMes + " · " + getMonthTitle(info.proximoMes) + "</strong></div>" +
        "<div class='summary-row'><span>Fecha límite</span><strong>" + fechaStr + "</strong></div>" +
        (info.diasRestantes < 0 ? "<div class='summary-row'><span>Días de retraso</span><strong style='color:var(--danger)'>" + Math.abs(info.diasRestantes) + " días</strong></div>" : "");
    }

    if (pagarContent) {
      var payHtml = "";
      if (info.mesesPagados >= 12) {
        payHtml = "<p style='color:var(--green)'><strong>Programa completado ✓</strong></p><p class='small' style='color:var(--muted)'>Ya cubriste las 12 mensualidades del programa.</p>";
      } else if (info.estado === "al_corriente") {
        payHtml = "<p style='color:var(--green)'><strong>Estás al corriente ✓</strong></p><p class='small' style='color:var(--muted)'>Tu próximo pago (Mes " + info.proximoMes + ") vence el " + info.fechaVencimiento.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" }) + ".</p>";
        payHtml += "<button class='btn btn-ghost' id='pago-adelantado-btn' style='margin-top:0.8rem'>Pagar por adelantado</button>";
      } else {
        payHtml = "<p class='small' style='color:var(--muted)'>Realiza el pago de tu siguiente mensualidad para mantener tu acceso activo.</p>";
        payHtml += "<button class='btn btn-brand' id='pago-mensualidad-btn' style='margin-top:0.8rem'>Pagar " + formatMxn(info.monto) + "</button>";
      }
      payHtml += "<div id='portal-wallet-container-pagos' style='margin-top:0.8rem'></div>";
      payHtml += "<p id='pago-message' class='small' style='margin-top:0.4rem;color:var(--muted)'></p>";
      pagarContent.innerHTML = payHtml;

      var payBtn = document.getElementById("pago-mensualidad-btn");
      var advanceBtn = document.getElementById("pago-adelantado-btn");
      var payMsg = document.getElementById("pago-message");
      var wallet = document.getElementById("portal-wallet-container-pagos");
      var phone = (enrollment && enrollment.phone) || "";
      var startPayment = async function (monthId, monto) {
        if (!window.DevSystemPago) {
          if (payMsg) payMsg.textContent = "Error: módulo de pago no disponible.";
          return;
        }
        try {
          var pending = {
            fullName: user.name,
            email: user.email,
            phone: phone,
            plan: (enrollment && enrollment.plan) || "Plan Base",
            price: monto,
            monthId: Number(monthId),
            createdAt: new Date().toISOString(),
          };
          localStorage.setItem("devsystem_pending_checkout", JSON.stringify(pending));
          if (payMsg) payMsg.textContent = "Iniciando pago...";
          await window.DevSystemPago.iniciarPago(monthId, user.email, user.name, phone, "portal-wallet-container-pagos");
          if (payMsg) payMsg.textContent = "Elige tu método de pago:";
        } catch (err) {
          if (payMsg) payMsg.textContent = "Error: " + (err && err.message ? err.message : err) + ". Intenta de nuevo.";
        }
      };
      if (payBtn) {
        payBtn.addEventListener("click", function () { startPayment(info.proximoMes, info.monto); });
      }
      if (advanceBtn) {
        advanceBtn.addEventListener("click", function () { startPayment(info.proximoMes, info.monto); });
      }
      if (!payBtn && !advanceBtn && wallet) wallet.style.display = "none";
    }

    if (historialBody) {
      var hHtml = "";
      for (var pm = 1; pm <= 12; pm++) {
        var rowDate = null;
        var statusCell;
        if (pm <= info.mesesPagados) {
          var payRec = null;
          for (var pmi = 0; pmi < payments.length; pmi++) {
            if (Number(payments[pmi].month_id) === pm) { payRec = payments[pmi]; break; }
          }
          rowDate = payRec && (payRec.created_at || payRec.payment_date) ? new Date(payRec.created_at || payRec.payment_date) : null;
          statusCell = "<span style='color:var(--green)'>Pagado ✓</span>";
        } else {
          rowDate = addMonthsSafe(info.baseDate, pm - 1);
          statusCell = "<span style='color:var(--muted)'>Pendiente</span>";
        }
        var dateStr = rowDate ? rowDate.toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" }) : "—";
        var montoRow = getMonthlyMonto(pm);
        hHtml += "<tr style='border-bottom:1px solid var(--line)'><td style='padding:0.5rem'>Mes " + pm + "</td><td style='padding:0.5rem'>Mensualidad Mes " + pm + " · " + getMonthTitle(pm) + "</td><td style='padding:0.5rem;text-align:right'>" + formatMxn(montoRow) + "</td><td style='padding:0.5rem'>" + dateStr + "</td><td style='padding:0.5rem;text-align:right'>" + statusCell + "</td></tr>";
      }
      historialBody.innerHTML = hHtml;
    }

    if (calendarioEl) {
      var cHtml = "";
      for (var cm = 1; cm <= 12; cm++) {
        var bg = "var(--line)";
        var color = "var(--muted)";
        if (cm <= info.mesesPagados) {
          bg = "rgba(34,197,94,0.18)";
          color = "var(--green)";
        } else if (cm === info.proximoMes) {
          bg = "rgba(124,92,255,0.22)";
          color = "var(--brand-2)";
        }
        cHtml += "<div style='background:" + bg + ";color:" + color + ";border:1px solid var(--line);border-radius:0.75rem;padding:0.55rem;text-align:center;font-size:0.78rem;font-weight:700'>M" + cm + "</div>";
      }
      calendarioEl.innerHTML = cHtml;
    }
  }

  async function renderPagoWarning() {
    var payments = await getPaymentDatesForUser(user.email);
    var info = getPagoEstado(payments);

    var showWarning = info.estado === "por_vencer" || info.estado === "vencido";

    var banner = document.getElementById("pago-banner");
    if (banner) {
      if (showWarning) {
        var bannerColor = info.estado === "vencido" ? "var(--danger)" : "var(--amber)";
        var bannerText = info.estado === "vencido" ? "⚠ Tu mensualidad está vencida. Realiza tu pago para continuar." : "⚠ Tu mensualidad está por vencer.";
        banner.style.display = "block";
        banner.innerHTML =
          "<div style='display:flex;align-items:center;justify-content:space-between;gap:0.8rem;flex-wrap:wrap;background:" + bannerColor + ";color:" + (info.estado === "vencido" ? "#ffffff" : "#001a41") + ";padding:0.7rem 1rem;border-radius:0.75rem;font-size:0.85rem;font-weight:700'>" +
          "<span>" + bannerText + "</span>" +
          "<button class='btn' id='pago-banner-btn' style='background:#001a41;color:#fff;padding:0.4rem 1rem;font-size:0.78rem;border:0'>Ir a Pagos</button></div>";
        var bannerBtn = document.getElementById("pago-banner-btn");
        if (bannerBtn) {
          bannerBtn.addEventListener("click", function () { switchTab("pagos"); });
        }
      } else {
        banner.style.display = "none";
        banner.innerHTML = "";
      }
    }

    var headerRight = document.querySelector(".portal-header-right");
    var existing = document.getElementById("pago-pendiente-chip");
    if (existing) existing.remove();
    if (showWarning && headerRight) {
      var chip = document.createElement("button");
      chip.id = "pago-pendiente-chip";
      chip.type = "button";
      chip.textContent = "⚠ Pago pendiente";
      chip.style.cssText = "font-family:var(--font-display);font-size:0.72rem;font-weight:700;background:rgba(239,68,68,0.18);border:1px solid var(--danger);color:var(--danger);padding:0.25rem 0.7rem;border-radius:999px;cursor:pointer;white-space:nowrap";
      chip.addEventListener("click", function () { switchTab("pagos"); });
      headerRight.insertBefore(chip, headerRight.firstChild);
    }
  }

  function showToast(msg) {
    var existing = document.querySelector(".toast-notification");
    if (existing) existing.remove();
    var toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.textContent = msg;
    toast.style.cssText = "position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:var(--bg-card);border:1px solid var(--line);padding:0.8rem 1.5rem;border-radius:var(--radius);z-index:1000;box-shadow:0 8px 24px rgba(0,0,0,0.3);font-size:0.9rem;max-width:90vw;text-align:center";
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s";
      setTimeout(function () { toast.remove(); }, 300);
    }, 3000);
  }

  /* ===================================================================
     INIT
     =================================================================== */

  renderHeader();
  renderPagoWarning();
  renderProgress();
  renderAdmissionSteps();
  renderDayCard();

  if (enrollmentStatus === "activo") {
    if (curriculumSection) curriculumSection.style.display = "block";
    renderCurriculum();
    renderGlosario();
    renderInicioLecciones();
    renderPeriodoActual();
    renderAvanceMes();
  }

  initMatricula();
  initTabs();
})();
