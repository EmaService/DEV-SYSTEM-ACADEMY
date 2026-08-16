(async function () {
  /*
    IMPORTANTE — DIFERENCIA CON examen.js:
    El examen de admisión (examen.js) SIEMPRE aprueba: ajusta el puntaje a
    70+ aunque falles. ESTE examen mensual SÍ SE CALIFICA DE VERDAD:
    score = aciertos / total * 100 y se aprueba únicamente con 70 o más.
    Aquí NO existe ningún ajuste para "siempre aprobar".
  */

  var cfg = window.DEV_SYSTEM_CONFIG || {};
  var cloudEnabled = window.DevSystemCloud && window.DevSystemCloud.isEnabled();
  var cloudUser = null;

  var params = new URLSearchParams(window.location.search);
  var mes = params.get("mes");
  if (mes === null || mes === "") {
    window.location.href = "portal.html#examenes";
    return;
  }

  if (cloudEnabled) {
    cloudUser = await window.DevSystemCloud.getCurrentUser().catch(function () {
      return null;
    });
    if (!cloudUser || !cloudUser.email) {
      window.location.href = "login.html";
      return;
    }
  }

  var email = cloudUser ? cloudUser.email : "local@test.com";
  var passing = 70;

  var examData = (window.DEV_SYSTEM_EXAMENES || {})[mes];
  if (!examData || !examData.preguntas || examData.preguntas.length === 0) {
    document.getElementById("exam-message").textContent =
      "No se encontraron preguntas para este mes.";
    return;
  }
  var questions = examData.preguntas;

  var examTitle = document.getElementById("exam-title");
  var examDescription = document.getElementById("exam-description");
  var questionText = document.getElementById("question-text");
  var optionsContainer = document.getElementById("options-container");
  var nextBtn = document.getElementById("next-btn");
  var examContent = document.getElementById("exam-content");
  var examResult = document.getElementById("exam-result");
  var resultVerdict = document.getElementById("result-verdict");
  var resultScore = document.getElementById("result-score");
  var resultInfo = document.getElementById("result-info");
  var examMessage = document.getElementById("exam-message");
  var examCounter = document.getElementById("exam-counter");
  var examProgressFill = document.getElementById("exam-progress-fill");

  examTitle.textContent =
    examData.titulo ||
    (cfg.monthTitles && cfg.monthTitles[mes]) ||
    "Examen del Mes " + mes;
  examDescription.textContent =
    "Responde las " + questions.length + " preguntas. Deberás obtener al menos " + passing + " puntos para aprobar.";

  /* Si el alumno ya aprobó este mes (getMonthExams), muestra el resultado
     guardado directamente y no deja repetir el examen. */
  if (cloudEnabled && cloudUser && typeof window.DevSystemCloud.getMonthExams === "function") {
    var monthExams = await window.DevSystemCloud.getMonthExams(cloudUser.email).catch(function () {
      return [];
    });
    var savedPassed = null;
    if (monthExams && monthExams.length) {
      for (var i = 0; i < monthExams.length; i++) {
        if (Number(monthExams[i].month_id) === Number(mes) && monthExams[i].passed) {
          savedPassed = monthExams[i];
          break;
        }
      }
    }
    if (savedPassed) {
      showSavedResult(savedPassed);
      return;
    }
  }

  var currentIndex = 0;
  var answers = {};

  function renderQuestion(index) {
    var q = questions[index];
    var opts = q.opciones || [];
    questionText.textContent = q.pregunta;
    optionsContainer.innerHTML = "";
    for (var i = 0; i < opts.length; i++) {
      var opt = document.createElement("article");
      opt.className = "card plan-card";
      if (answers[index] === i) opt.classList.add("selected");
      opt.setAttribute("data-opt-index", i);
      opt.textContent = opts[i];
      opt.addEventListener("click", function () {
        var idx = Number(this.getAttribute("data-opt-index"));
        answers[index] = idx;
        var all = optionsContainer.querySelectorAll(".plan-card");
        for (var j = 0; j < all.length; j++) all[j].classList.remove("selected");
        this.classList.add("selected");
      });
      optionsContainer.appendChild(opt);
    }
    examCounter.textContent = "Pregunta " + (index + 1) + " de " + questions.length;
    examProgressFill.style.width = ((index + 1) / questions.length) * 100 + "%";
    nextBtn.textContent = index === questions.length - 1 ? "Entregar examen" : "Siguiente";
  }

  function goNext() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion(currentIndex);
    } else {
      finish();
    }
  }

  /* Calificación REAL: aciertos/total*100. Aprobatorio: 70. Sin ajustes. */
  function calculateScore() {
    var correct = 0;
    for (var i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correcta) correct++;
    }
    return Math.round((correct / questions.length) * 100);
  }

  async function finish() {
    var score = calculateScore();
    var passed = score >= passing;
    if (cloudEnabled && cloudUser && cloudUser.email) {
      if (typeof window.DevSystemCloud.saveMonthExam === "function") {
        var result = await window.DevSystemCloud.saveMonthExam(cloudUser.email, mes, score, passed).catch(function () {
          return { ok: false, message: "Error de conexión al guardar tu resultado." };
        });
        if (result && !result.ok) {
          examMessage.textContent = result.message || "No se pudo guardar tu resultado.";
          return;
        }
      } else {
        examMessage.textContent = "Aviso: tu resultado no pudo guardarse en la nube.";
      }
    }
    showResult(score, passed);
  }

  function showResult(score, passed) {
    examContent.style.display = "none";
    examResult.style.display = "block";
    resultScore.textContent = score + "/100";
    if (passed) {
      resultVerdict.textContent = "¡Aprobado!";
      resultVerdict.style.color = "var(--green)";
      resultInfo.textContent =
        "Excelente. Tu calificación quedó registrada para el Mes " + mes + ".";
    } else {
      resultVerdict.textContent = "Reprobado";
      resultVerdict.style.color = "var(--danger)";
      resultInfo.textContent =
        "Puedes volver a intentarlo en 24 horas para mejorar tu calificación.";
    }
  }

  function showSavedResult(record) {
    examContent.style.display = "none";
    examResult.style.display = "block";
    resultVerdict.textContent = "¡Aprobado!";
    resultVerdict.style.color = "var(--green)";
    resultScore.textContent = (record.score != null ? record.score : "—") + "/100";
    resultInfo.textContent =
      "Ya aprobaste el examen del Mes " + mes + ". Tu resultado guardado se muestra aquí.";
  }

  nextBtn.addEventListener("click", goNext);

  renderQuestion(0);
})();
