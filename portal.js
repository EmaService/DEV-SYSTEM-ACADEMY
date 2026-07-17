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

  function renderCurriculum(cloudProgress) {
    var materias = leccionesData.m1 && leccionesData.m1.materias;
    if (!materias) {
      curriculumRoot.innerHTML = "<p class='small' style='color:var(--muted)'>No hay lecciones disponibles.</p>";
      return;
    }
    var progress = cloudProgress || (cloudMode ? {} : window.DevSystemState.getProgress(user.email));
    var materiaKeys = Object.keys(materias);

    var html =
      "<div class='materia-tabs' style='display:flex;gap:0.5rem;margin-bottom:1rem'>";
    for (var ti = 0; ti < materiaKeys.length; ti += 1) {
      var mk = materiaKeys[ti];
      var m = materias[mk];
      html +=
        "<button class='tab-btn materia-tab' data-materia='" +
        mk +
        "'>" +
        (m.icono || "◇") +
        " " +
        m.nombre +
        "</button>";
    }
    html += "</div>";

    html += "<div class='materia-contents'>";
    var doneMap = {};
    var totalMap = {};

    for (var ti = 0; ti < materiaKeys.length; ti += 1) {
      var mk = materiaKeys[ti];
      var m = materias[mk];
      var lecciones = m.lecciones;
      var publishedCount = 0;
      var doneCount = 0;

      html += "<div class='materia-content' data-materia='" + mk + "'>";

      for (var i = 0; i < lecciones.length; i += 1) {
        if (!lecciones[i].proximamente) publishedCount += 1;
      }

      html +=
        "<div class='summary-row' style='margin-bottom:0.5rem'><span>Progreso</span><strong><span id='mpt-" +
        mk +
        "'>0/" +
        publishedCount +
        "</span></strong></div>";
      html +=
        "<div class='progress-bar'><div class='progress-fill' id='mpf-" +
        mk +
        "' style='width:0%'></div></div>";
      html += "<div class='lesson-list'>";

      var sequentialUnlocked = true;
      for (var i = 0; i < lecciones.length; i += 1) {
        var lesson = lecciones[i];
        var num = i + 1;
        var label = mk.toUpperCase() + num;

        if (!lesson.proximamente) {
          var completed = Boolean(progress[lesson.id]);
          if (completed) doneCount += 1;

          var currentUnlocked = sequentialUnlocked;
          if (completed) {
            /* allow next */
          } else {
            sequentialUnlocked = false;
          }

          var icon = completed ? "✔" : currentUnlocked ? "▶" : "🔒";
          var cls = completed
            ? "lesson-done"
            : currentUnlocked
            ? "lesson-available"
            : "lesson-locked";
          var link;
          if (currentUnlocked) {
            link =
              "<a href='leccion.html?id=" +
              lesson.id +
              "'>" +
              lesson.titulo +
              "</a>";
          } else if (!completed) {
            link = "<span>" + lesson.titulo + "</span>";
          } else {
            link = "<span>" + lesson.titulo + "</span>";
          }

          html +=
            "<div class='lesson-row " +
            cls +
            "' data-lesson-id='" +
            lesson.id +
            "'>";
          html += "<span>" + icon + "</span> ";
          html += "<span class='lesson-id-label'>" + label + ".</span> ";
          html += link;
          html += "</div>";
        } else {
          html += "<div class='lesson-row lesson-soon'>";
          html += "<span>🔒</span> ";
          html += "<span class='lesson-id-label'>" + label + ".</span> ";
          html +=
            "<span>" +
            lesson.titulo +
            " <span style='color:var(--muted);font-size:0.8rem'>Próximamente</span></span>";
          html += "</div>";
        }
      }

      html += "</div></div>";
      doneMap[mk] = doneCount;
      totalMap[mk] = publishedCount;
    }

    html += "</div>";

    html +=
      "<details style='margin-top:1rem'><summary style='cursor:pointer;color:var(--accent);font-weight:600'>📋 Temario completo del mes</summary><div class='temario-grid' style='display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:0.8rem'>";
    for (var ti = 0; ti < materiaKeys.length; ti += 1) {
      var mk = materiaKeys[ti];
      var m = materias[mk];
      html +=
        "<div><h4 style='font-size:0.9rem;margin-bottom:0.5rem'>" +
        (m.icono || "◇") +
        " " +
        m.nombre +
        "</h4>";
      var lecciones = m.lecciones;
      for (var i = 0; i < lecciones.length; i += 1) {
        var lesson = lecciones[i];
        var num = i + 1;
        var label = mk.toUpperCase() + num;
        html +=
          "<div style='font-size:0.82rem;padding:0.2rem 0;border-bottom:1px solid var(--line)'>" +
          "<span style='color:var(--muted);margin-right:0.3rem'>" +
          label +
          "</span>" +
          "<span style='color:var(--text)'>" +
          lesson.titulo +
          "</span></div>";
      }
      html += "</div>";
    }
    html += "</div></details>";

    curriculumRoot.innerHTML = html;

    var tabs = curriculumRoot.querySelectorAll(".materia-tab");
    var contents = curriculumRoot.querySelectorAll(".materia-content");
    function switchTab(key) {
      for (var t = 0; t < contents.length; t += 1) {
        contents[t].style.display =
          contents[t].getAttribute("data-materia") === key ? "block" : "none";
      }
      for (var t = 0; t < tabs.length; t += 1) {
        tabs[t].classList.toggle("active", tabs[t].getAttribute("data-materia") === key);
      }
    }
    for (var t = 0; t < tabs.length; t += 1) {
      (function (key) {
        tabs[t].addEventListener("click", function () {
          switchTab(key);
        });
      })(tabs[t].getAttribute("data-materia"));
    }
    if (materiaKeys.length > 0) switchTab(materiaKeys[0]);

    for (var ti = 0; ti < materiaKeys.length; ti += 1) {
      var mk = materiaKeys[ti];
      var fill = document.getElementById("mpf-" + mk);
      var text = document.getElementById("mpt-" + mk);
      if (fill) {
        var done = doneMap[mk] || 0;
        var total = totalMap[mk] || 1;
        fill.style.width = Math.round((done / total) * 100) + "%";
      }
      if (text) {
        text.textContent = (doneMap[mk] || 0) + "/" + (totalMap[mk] || 0);
      }
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

  if (enrollmentStatus === "activo") {
    curriculumSection.style.display = "block";
    renderCurriculum();
    renderGlosario();
  }
})();
