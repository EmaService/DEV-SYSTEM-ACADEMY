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
      window.DevSystemCloud.getProgressMap(user.email).then(function (map) {
        renderDayCardWithProgress(map || {});
      });
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

  function renderCurriculum(cloudProgress) {
    var materias = leccionesData.m1 && leccionesData.m1.materias;
    if (!materias) {
      curriculumRoot.innerHTML = "<p class='small' style='color:var(--muted)'>No hay lecciones disponibles.</p>";
      return;
    }
    var progress = cloudProgress || (cloudMode ? {} : window.DevSystemState.getProgress(user.email));
    var materiaKeys = Object.keys(materias);

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
      if (!curriculumRoot.innerHTML) curriculumRoot.innerHTML = "<div class='roadmap-grid'></div>";
      var grid = curriculumRoot.querySelector(".roadmap-grid");
      if (grid) grid.innerHTML += html;
    }

    if (cloudMode && !cloudProgress) {
      window.DevSystemCloud.getProgressMap(user.email).then(function (map) {
        renderCurriculum(map || {});
      });
    }
  }

  function renderGlosario() {
    var glosarioCard = document.getElementById("glosario-card");
    if (enrollmentStatus !== "activo") {
      glosarioCard.style.display = "none";
      return;
    }
    glosarioCard.style.display = "block";
    var container = document.getElementById("glosario-list");
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
          renderGlosario();
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
          renderGlosario();
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
    admissionCard.style.display = "block";

    if (enrollmentStatus === "activo") {
      admissionSteps.style.display = "none";
      admissionCompleted.style.display = "block";
      return;
    }

    admissionSteps.style.display = "block";
    admissionCompleted.style.display = "none";

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

    document.getElementById("step-docs-status").textContent = allDocsDone ? "Completado ✓" : "Pendiente";
    document.getElementById("step-docs-status").style.color = allDocsDone ? "var(--green)" : "";

    if (examPassed) {
      document.getElementById("step-exam-status").textContent = "Aprobado — Puntaje: " + examScore + "/100 ✓";
      document.getElementById("step-exam-status").style.color = "var(--green)";
      document.getElementById("exam-btn").style.display = "none";
    } else {
      document.getElementById("step-exam-status").textContent = "Pendiente";
      document.getElementById("step-exam-status").style.color = "";
    }

    if (examPresented) {
      document.getElementById("step-pay-status").textContent = examPassed ? "Disponible" : "Disponible (tarifa regular)";
      document.getElementById("step-pay-status").style.color = "var(--green)";
      document.getElementById("step-pay-content").style.display = "block";
      renderPayMonthOptions();
      updatePayAmount();
    }
  }

  function updatePayAmount() {
    var select = document.getElementById("pay-month-select");
    var amountEl = document.getElementById("step-pay-amount");
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
    var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
    var paidMap = {};
    for (var p = 0; p < paidMonths.length; p++) paidMap[paidMonths[p]] = true;
    select.innerHTML = "";
    if (examPassed) {
      heading.textContent = "¡Felicidades! Calificaste a la mensualidad fija de $7,000 MXN × 12 meses.";
      heading.style.color = "var(--green)";
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
      heading.textContent = "Puedes pagar tus mensualidades con la tarifa regular del programa.";
      heading.style.color = "var(--muted)";
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
    select.addEventListener("change", updatePayAmount);
  }

  logoutButton.addEventListener("click", async function () {
    if (cloudMode) {
      await window.DevSystemCloud.signOut();
    } else {
      window.DevSystemState.logout();
    }
    window.location.href = "login.html";
  });

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

  document.getElementById("pay-btn").addEventListener("click", async function () {
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

  renderHeader();
  renderProgress();
  renderAdmissionSteps();
  renderDayCard();

  if (enrollmentStatus === "activo") {
    curriculumSection.style.display = "block";
    renderCurriculum();
    renderGlosario();
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
})();
