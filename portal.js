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
    var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
    var summary = window.DevSystemState.getProgressSummary(user.email);
    if (monthsSummary) monthsSummary.textContent = paidMonths.length + "/12";
    if (lessonsSummary) lessonsSummary.textContent = summary.done + "/" + summary.total;
    if (progressPercent) progressPercent.textContent = summary.percent + "%";
    if (progressFill) progressFill.style.width = summary.percent + "%";

    var cfg2 = window.DEV_SYSTEM_CONFIG || {};
    var xpPerLesson = cfg2.xpPerLesson || 50;
    var xpPerFirstTry = cfg2.xpPerFirstTry || 10;

    var rachaEl = document.getElementById("stat-racha");
    var xpEl = document.getElementById("stat-xp");

    if (cloudMode && window.DevSystemCloud.getAllLessonStats) {
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
      });
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
      });
    } else {
      var localXp = parseInt(localStorage.getItem("devsystem_xp_" + user.email) || "0", 10);
      if (xpEl) {
        xpEl.textContent = localXp;
        xpEl.animate([{transform:"scale(1)"},{transform:"scale(1.15)"},{transform:"scale(1)"}], {duration:350,easing:"ease-out"});
      }
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
    var dayDesc = document.getElementById("day-lesson-desc");
    if (!dayTitle) return;
    var materiaKeys = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];
    if (cloudMode && window.DevSystemCloud.getAllLessonStats) {
      window.DevSystemCloud.getProgressMap(user.email)
        .then(function (map) { renderDayCardWithProgress(map || {}); })
        .catch(function () { renderDayCardWithProgress({}); });
      return;
    }
    renderDayCardWithProgress(cloudMode ? {} : window.DevSystemState.getProgress(user.email));
  }

  function renderDayCardWithProgress(progress) {
    var dayTitle = document.getElementById("day-lesson-title");
    var dayDesc = document.getElementById("day-lesson-desc");
    if (!dayTitle) return;
    var materiaKeys = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];
    var nextLesson = null;
    for (var mi = 0; mi < materiaKeys.length && !nextLesson; mi++) {
      var mk = materiaKeys[mi];
      var m = leccionesData.m1.materias[mk];
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
    var root = rootEl || curriculumRoot;
    if (!root) return;
    var materias = leccionesData.m1 && leccionesData.m1.materias;
    if (!materias) {
      root.innerHTML = "<p class='small' style='color:var(--muted)'>No hay lecciones disponibles.</p>";
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
        var cls = completed ? "node-done" : currentUnlocked ? "node-current" : lesson.proximamente ? "node-soon" : "node-locked";
        var link = currentUnlocked ? "<a href='leccion.html?id=" + lesson.id + "'>" + lesson.titulo + "</a>" : "<span>" + lesson.titulo + "</span>";
        html += "<div class='roadmap-node " + cls + "'><span class='node-dot'></span><span class='node-label'>" + label + ".</span><span class='node-title'>" + link + "</span></div>";
      }

      html += "</div></div>";
      if (grid) grid.insertAdjacentHTML("beforeend", html);
    }

    if (cloudMode && !cloudProgress) {
      window.DevSystemCloud.getProgressMap(user.email)
        .then(function (map) { renderCurriculum(map || {}); })
        .catch(function () { renderCurriculum({}); });
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
      renderPayMonthOptions();
      updatePayAmount();
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

  function renderPayMonthOptions() {
    var select = document.getElementById("pay-month-select");
    var heading = document.getElementById("step-pay-heading");
    if (!select) return;
    var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
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
    else if (tabId === "marcadores") renderMarcadores();
    else if (tabId === "expediente") renderExpediente();
  }

  function initTabs() {
    var tabs = ["inicio", "plan", "aula", "examenes", "marcadores", "expediente"];
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
    renderProgress();
    renderAdmissionSteps();
    renderDayCard();
    if (enrollmentStatus === "activo") {
      renderInicioLecciones();
      renderPeriodoActual();
      renderAvanceMes();
    }
  }

  function renderInicioLecciones() {
    var container = document.getElementById("inicio-lecciones");
    if (!container) return;
    var materiaKeys = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];
    if (materiaKeys.length === 0) { container.innerHTML = ""; return; }

    function buildCards(progress) {
      var html = "";
      var count = 0;
      for (var mi = 0; mi < materiaKeys.length && count < 3; mi++) {
        var mk = materiaKeys[mi];
        var m = leccionesData.m1.materias[mk];
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

    if (cloudMode) {
      window.DevSystemCloud.getProgressMap(user.email)
        .then(function (map) { buildCards(map || {}); })
        .catch(function () { buildCards({}); });
    } else {
      buildCards(window.DevSystemState.getProgress(user.email));
    }
  }

  function renderPeriodoActual() {
    var container = document.getElementById("inicio-periodo");
    if (!container) return;
    var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
    if (paidMonths.length === 0) {
      container.style.display = "none";
      return;
    }
    container.style.display = "block";
    var latestMonth = paidMonths[paidMonths.length - 1];
    var now = new Date();
    var year = now.getFullYear();
    var periodStart = new Date(year, latestMonth - 1, 1);
    var periodEnd = new Date(year, latestMonth, 1);
    var totalDays = Math.round((periodEnd - periodStart) / 86400000);
    var elapsed = Math.round((now - periodStart) / 86400000);
    if (elapsed < 0) elapsed = 0;
    if (elapsed > totalDays) elapsed = totalDays;
    var pct = totalDays > 0 ? Math.round((elapsed / totalDays) * 100) : 0;
    var title = MONTH_TITLES[latestMonth] || "Mes " + latestMonth;

    container.innerHTML = "<div class='periodo-card'><p class='eyebrow'>Periodo actual — Mes " + latestMonth + "</p><h3>" + title + "</h3><div class='progress-bar' style='margin:0.6rem 0'><div class='progress-fill' style='width:" + pct + "%'></div></div><p class='small'>Día " + elapsed + " de " + totalDays + " (" + pct + "%)</p></div>";
  }

  function renderAvanceMes() {
    var container = document.getElementById("inicio-avance");
    if (!container) return;
    var materiaKeys = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];
    if (materiaKeys.length === 0) { container.style.display = "none"; return; }
    container.style.display = "block";

    function buildWidget(progress) {
      var total = 0;
      var done = 0;
      for (var mi = 0; mi < materiaKeys.length; mi++) {
        var mk = materiaKeys[mi];
        var m = leccionesData.m1.materias[mk];
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

    if (cloudMode) {
      window.DevSystemCloud.getProgressMap(user.email).then(function (map) {
        buildWidget(map || {});
      });
    } else {
      buildWidget(window.DevSystemState.getProgress(user.email));
    }
  }

  /* ===================================================================
     NEW: Plan de estudios tab (renderPlan)
     =================================================================== */

  function renderPlan() {
    var chipsRow = document.getElementById("plan-month-chips");
    var contentArea = document.getElementById("plan-content");
    if (!chipsRow || !contentArea) return;

    var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
    var paidMap = {};
    for (var pi = 0; pi < paidMonths.length; pi++) paidMap[paidMonths[pi]] = true;
    var activeMonth = paidMonths.length > 0 ? paidMonths[paidMonths.length - 1] : 1;

    chipsRow.innerHTML = "";
    for (var m = 1; m <= 12; m++) {
      var title = MONTH_TITLES[m] || "Mes " + m;
      var chip = document.createElement("button");
      chip.className = "month-chip";
      if (m === activeMonth) chip.classList.add("month-chip-active");
      chip.textContent = "M" + m + " " + title;
      (function (mid) {
        chip.addEventListener("click", function () {
          if (mid === activeMonth) return;
          if (!paidMap[mid]) {
            showToast("Bloqueado — Este mes no está disponible en tu plan actual.");
            return;
          }
          activeMonth = mid;
          renderPlanContent(activeMonth, contentArea);
          var allChips = chipsRow.querySelectorAll(".month-chip");
          for (var ci = 0; ci < allChips.length; ci++) {
            allChips[ci].classList.remove("month-chip-active");
          }
          chip.classList.add("month-chip-active");
        });
      })(m);
      chipsRow.appendChild(chip);
    }
    renderPlanContent(activeMonth, contentArea);
  }

  function renderPlanContent(monthNum, contentArea) {
    if (!contentArea) return;
    var isPaid = false;
    var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
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

  function renderAulaContinua() {
    var container = document.getElementById("aula-continua");
    if (!container) return;
    var materiaKeys = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];

    function buildCard(progress) {
      var firstUncompleted = null;
      var materiaName = "";
      var materiaIcon = "";
      for (var mi = 0; mi < materiaKeys.length && !firstUncompleted; mi++) {
        var mk = materiaKeys[mi];
        var m = leccionesData.m1.materias[mk];
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

    if (cloudMode) {
      window.DevSystemCloud.getProgressMap(user.email).then(function (map) {
        buildCard(map || {});
      });
    } else {
      buildCard(window.DevSystemState.getProgress(user.email));
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

  function renderExamenes() {
    var container = document.getElementById("exam-admision");
    if (container) {
      if (examPassed) {
        var examDate = enrollment.exam_date ? new Date(enrollment.exam_date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" }) : "—";
        container.innerHTML = "<div class='summary-row'><span>Examen de admisión</span><span class='badge badge-green'>Aprobado ✓</span></div><p class='small' style='margin-top:0.3rem;color:var(--green)'>Puntaje: " + (examScore || "—") + "/100 · " + examDate + "</p>";
      } else {
        container.innerHTML = "<div class='summary-row'><span>Examen de admisión</span><span class='badge' style='background:var(--line);color:var(--muted)'>Pendiente</span></div><p class='small' style='margin-top:0.3rem;color:var(--muted)'>Presenta tu examen de admisión para acceder a la tarifa preferente.</p><a href='examen.html' class='btn btn-block' style='margin-top:0.6rem'>Presentar examen</a>";
      }
    }

    var mes1Container = document.getElementById("exam-mes1");
    if (mes1Container) {
      var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
      var m1Paid = false;
      for (var pi = 0; pi < paidMonths.length; pi++) {
        if (paidMonths[pi] === 1) { m1Paid = true; break; }
      }
      if (m1Paid) {
        var now = new Date();
        var periodEnd = new Date(now.getFullYear(), 0, 31);
        var endStr = periodEnd.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
        mes1Container.innerHTML = "<div class='summary-row'><span>Examen del Mes 1</span><span class='badge' style='background:var(--line);color:var(--muted)'>🔒 Bloqueado</span></div><p class='small' style='margin-top:0.3rem;color:var(--muted)'>Se desbloquea al completar las lecciones del mes. Periodo vigente hasta " + endStr + ".</p>";
      } else {
        mes1Container.innerHTML = "<div class='summary-row'><span>Examen del Mes 1</span><span class='badge' style='background:var(--line);color:var(--muted)'>🔒 Bloqueado</span></div><p class='small' style='margin-top:0.3rem;color:var(--muted)'>Realiza el pago del Mes 1 para desbloquear.</p>";
      }
    }

    var mesesContainer = document.getElementById("exam-meses");
    if (mesesContainer) {
      var html = "";
      for (var m = 2; m <= 12; m++) {
        html += "<div class='summary-row'><span>Examen del Mes " + m + " — " + (MONTH_TITLES[m] || "") + "</span><span class='small' style='color:var(--muted)'>Próximamente</span></div>";
      }
      mesesContainer.innerHTML = html;
    }
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
    var MONTH_TITLES = {1:"Fundamentos del código",2:"Git y GitHub",3:"Frontend",4:"Backend y bases de datos",5:"LLMs y agentes",6:"Herramientas IA",7:"MCP e integraciones",8:"Testing y producto",9:"Cloud y deploy",10:"Datos y seguridad",11:"Automatización y colas",12:"SaaS final"};

    function buildKardex(paidMap, progress) {
      var html = "";
      for (var m = 1; m <= 12; m++) {
        var title = "M" + m + " · " + (MONTH_TITLES[m] || "Mes " + m);
        var estado, calif;
        if (paidMap[m]) {
          if (m === 1) {
            var total = 0, done = 0;
            var materiaKeys = leccionesData.m1 && Object.keys(leccionesData.m1.materias) || [];
            for (var mi = 0; mi < materiaKeys.length; mi++) {
              var mk = materiaKeys[mi];
              var mat = leccionesData.m1.materias[mk];
              for (var li = 0; li < mat.lecciones.length; li++) {
                var l = mat.lecciones[li];
                if (!l.proximamente) { total++; if (progress[l.id]) done++; }
              }
            }
            var pct = total > 0 ? Math.round((done / total) * 100) : 0;
            estado = "<span style='color:var(--success)'>En curso · " + pct + "%</span>";
          } else {
            estado = "<span style='color:var(--success)'>Pagado ✓</span>";
          }
          calif = "—";
        } else {
          estado = "Pendiente";
          calif = "—";
        }
        html += "<tr style='border-bottom:1px solid var(--line)'><td style='padding:0.5rem'>" + title + "</td><td style='padding:0.5rem'>" + estado + "</td><td style='padding:0.5rem;text-align:right'>" + calif + "</td></tr>";
      }
      tbody.innerHTML = html;
    }

    buildKardex({}, {});

    var paidPromise = cloudMode
      ? window.DevSystemCloud.getPaidMonthIds(user.email).catch(function () { return []; })
      : Promise.resolve(window.DevSystemState.getPaidMonthIds(user.email));

    paidPromise.then(function (pms) {
      var pm = {};
      for (var i = 0; i < pms.length; i++) pm[pms[i]] = true;
      if (cloudMode) {
        window.DevSystemCloud.getProgressMap(user.email)
          .then(function (map) { buildKardex(pm, map || {}); })
          .catch(function () { buildKardex(pm, {}); });
      } else {
        buildKardex(pm, window.DevSystemState.getProgress(user.email));
      }
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
