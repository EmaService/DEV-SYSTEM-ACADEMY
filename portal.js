(async function () {
  var user;
  var enrollment;
  var paidMonthsCloud = [];
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
    if (!enrollment || enrollment.paid !== true) {
      window.location.href = "checkout.html";
      return;
    }
    paidMonthsCloud = await window.DevSystemCloud.getPaidMonthIds(user.email);
  } else {
    user = window.DevSystemState.getCurrentUser();
    if (!user) {
      window.location.href = "login.html";
      return;
    }
    enrollment = window.DevSystemState.getEnrollment(user.email);
    if (!enrollment || enrollment.paid !== true) {
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
  var studentEmail = document.getElementById("student-email");
  var billingPlan = document.getElementById("billing-plan");
  var billingPrice = document.getElementById("billing-price");

  function renderHeader() {
    welcomeName.textContent = "Hola, " + user.name;
    welcomeText.textContent =
      "Tu acceso está activo. Marca cada lección completada y mantén tu progreso al día.";
    studentPlan.textContent = (enrollment.phaseName || "Etapa 1") + " · " + (enrollment.plan || "Plan Base");
    studentEmail.textContent = user.email;
    billingPlan.textContent = enrollment.plan || "Plan Base";
    billingPrice.textContent = enrollment.price || enrollment.price_label || "-";
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

  logoutButton.addEventListener("click", async function () {
    if (cloudMode) {
      await window.DevSystemCloud.signOut();
    } else {
      window.DevSystemState.logout();
    }
    window.location.href = "login.html";
  });

  renderHeader();
  renderProgress();
  renderCurriculum();
})();
