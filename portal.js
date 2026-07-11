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
    welcomeName.textContent = "Hola, " + user.name;
    studentPlan.textContent = (enrollment.phaseName || "Etapa 1") + " · " + (enrollment.plan || "Plan Base");
    studentEmail.textContent = user.email;
    billingPlan.textContent = enrollment.plan || "Plan Base";

    var priceNote = document.getElementById("price-note");
    if (examPassed) {
      billingPrice.textContent = "$7,000 MXN / mes";
      priceNote.textContent = "Tarifa preferente — examen de admisión aprobado ✓";
      priceNote.style.color = "var(--green)";
    } else if (examPresented) {
      billingPrice.textContent = "Tarifa regular por mes (ver tabla de pagos)";
      priceNote.textContent = "Presentaste el examen pero no alcanzaste la tarifa preferente.";
      priceNote.style.color = "var(--muted)";
    } else {
      billingPrice.textContent = planPricing.label;
      priceNote.textContent = "Aprueba el examen de admisión para obtener la tarifa preferente de $7,000 MXN / mes.";
      priceNote.style.color = "var(--accent)";
    }

    billingStatus.textContent = statusLabels[enrollmentStatus] || "En proceso";

    if (enrollmentStatus === "activo") {
      welcomeText.textContent =
        "Tu acceso está activo. Marca cada lección completada y mantén tu progreso al día.";
    } else {
      welcomeText.textContent =
        "Completa tu proceso de admisión para acceder al programa.";
    }
  }

  function renderProgress() {
    var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
    var summary = window.DevSystemState.getProgressSummary(user.email);
    monthsSummary.textContent = paidMonths.length + "/12";
    lessonsSummary.textContent = summary.done + "/" + summary.total;
    progressPercent.textContent = summary.percent + "%";
    progressFill.style.width = summary.percent + "%";

    if (window.DevSystemState.isEligibleCertificate(user.email)) {
      certificateStatus.textContent =
        "Estado de certificación: elegible. Tu avance ya permite solicitar certificado.";
    } else {
      certificateStatus.textContent =
        "Estado de certificación: en progreso. Necesitas 85% de avance.";
    }
  }

  function renderCurriculum() {
    var phases = window.DevSystemState.getCurriculum();
    var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);
    var progress = cloudMode ? {} : window.DevSystemState.getProgress(user.email);
    curriculumRoot.innerHTML = "";

    for (var i = 0; i < phases.length; i += 1) {
      var phase = phases[i];
      var block = document.createElement("article");
      block.className = "phase-block";

      var phaseHeader = document.createElement("div");
      phaseHeader.className = "phase-block-head";
      phaseHeader.innerHTML =
        "<h3>" +
        phase.name +
        "</h3><p>" + phase.phaseName + " · " + phase.planName + " · " +
        phase.duration +
        "</p><p>" +
        phase.outcome +
        "</p>";
      block.appendChild(phaseHeader);
      if (paidMonths.indexOf(phase.monthId) === -1) {
        block.classList.add("locked");
      }

      var lessonsList = document.createElement("div");
      lessonsList.className = "lesson-list";

      for (var j = 0; j < phase.lessons.length; j += 1) {
        var lesson = phase.lessons[j];
        var lessonRow = document.createElement("label");
        lessonRow.className = "lesson-row";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = Boolean(progress[lesson.id]);
        checkbox.setAttribute("data-lesson-id", lesson.id);
        if (paidMonths.indexOf(phase.monthId) === -1) checkbox.disabled = true;

        var text = document.createElement("span");
        text.textContent = lesson.title;

        lessonRow.appendChild(checkbox);
        lessonRow.appendChild(text);
        lessonsList.appendChild(lessonRow);
      }

      block.appendChild(lessonsList);
      curriculumRoot.appendChild(block);
    }

    function bindCheckboxes() {
      var checkboxes = curriculumRoot.querySelectorAll("input[type='checkbox']");
      for (var k = 0; k < checkboxes.length; k += 1) {
        checkboxes[k].addEventListener("change", async function (event) {
          var lessonId = event.target.getAttribute("data-lesson-id");
          var completed = event.target.checked;
          if (cloudMode) {
            await window.DevSystemCloud.setLessonProgress(user.email, lessonId, completed);
            window.DevSystemState.setLessonCompletion(user.email, lessonId, completed);
          } else {
            window.DevSystemState.setLessonCompletion(user.email, lessonId, completed);
          }
          renderProgress();
        });
      }
    }

    if (cloudMode) {
      window.DevSystemCloud.getProgressMap(user.email).then(function (map) {
        progress = map || {};
        window.DevSystemState.clearProgress(user.email);
        var checkboxes = curriculumRoot.querySelectorAll("input[type='checkbox']");
        for (var x = 0; x < checkboxes.length; x += 1) {
          var lessonId = checkboxes[x].getAttribute("data-lesson-id");
          checkboxes[x].checked = Boolean(progress[lessonId]);
          window.DevSystemState.setLessonCompletion(
            user.email,
            lessonId,
            Boolean(progress[lessonId])
          );
        }
        renderProgress();
      });
    }

    bindCheckboxes();
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

  if (enrollmentStatus === "activo") {
    curriculumSection.style.display = "block";
    renderCurriculum();
  }
})();
