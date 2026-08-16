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
  var revisar = params.get("revisar") === "1";
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
  var resultReviewBtn = document.getElementById("result-review-btn");

  examTitle.textContent =
    examData.titulo ||
    (cfg.monthTitles && cfg.monthTitles[mes]) ||
    "Examen del Mes " + mes;

  /* Modo revisión (?revisar=1): no presenta el examen, muestra la revisión. */
  if (revisar) {
    showReview();
    return;
  }

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
    var correctCount = 0;
    var answersObj = { total: questions.length, aciertos: 0, wrong: {} };
    for (var ai = 0; ai < questions.length; ai++) {
      if (answers[ai] === questions[ai].correcta) {
        correctCount++;
      } else {
        answersObj.wrong[String(ai + 1)] = answers[ai];
      }
    }
    answersObj.aciertos = correctCount;
    if (cloudEnabled && cloudUser && cloudUser.email) {
      if (typeof window.DevSystemCloud.saveMonthExam === "function") {
        var result = await window.DevSystemCloud.saveMonthExam(cloudUser.email, mes, score, passed, answersObj).catch(function () {
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
      if (resultReviewBtn) resultReviewBtn.style.display = "block";
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
    if (resultReviewBtn) resultReviewBtn.style.display = "block";
  }

  if (resultReviewBtn) {
    resultReviewBtn.addEventListener("click", function () {
      window.location.href = "examen-mes.html?mes=" + mes + "&revisar=1";
    });
  }

  /* =====================================================================
     MODO REVISIÓN
     ===================================================================== */
  function renderReview(record) {
    var reviewHeader = document.getElementById("review-header");
    var reviewFilters = document.getElementById("review-filters");
    var reviewList = document.getElementById("review-list");
    var reviewClosing = document.getElementById("review-closing");
    if (!reviewHeader || !reviewList) return;
    examContent.style.display = "none";
    examDescription.style.display = "none";
    examResult.style.display = "none";
    document.getElementById("exam-review").style.display = "block";

    var score = record && record.score != null ? record.score : 0;
    var passed = record ? Boolean(record.passed) : score >= passing;
    var takenDate = record && record.taken_at
      ? new Date(record.taken_at).toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })
      : null;
    var answers = (record && record.answers) || null;
    var hasAnswers = answers && typeof answers === "object" && answers.total != null;
    var wrong = {};
    var totalAciertos = null;
    if (hasAnswers) {
      totalAciertos = answers.aciertos;
      if (answers.wrong) wrong = answers.wrong;
    }

    var aciertosStr = totalAciertos != null ? totalAciertos : (hasAnswers ? questions.length - Object.keys(wrong).length : null);
    var failCount = hasAnswers ? Object.keys(wrong).length : 0;

    var headerHtml = "<div style='text-align:center'><p class='eyebrow'>Revisión del examen</p>";
    headerHtml += "<h1 style='font-size:1.3rem'>" + examTitle.textContent + "</h1>";
    headerHtml += "<div style='font-family:var(--font-display);font-size:3rem;font-weight:800;color:var(--text);line-height:1.1;margin-top:0.6rem'>" + score + "/100</div>";
    headerHtml += "<span class='badge' style='display:inline-block;margin-top:0.5rem;background:rgba(34,197,94,0.15);color:var(--green);padding:0.3rem 0.9rem;border-radius:999px;font-size:0.8rem;font-weight:800'>" + (passed ? "APROBADO" : "REPROBADO") + "</span>";
    if (takenDate) headerHtml += "<p class='small' style='margin-top:0.5rem;color:var(--muted)'>Presentado el " + takenDate + "</p>";
    if (aciertosStr != null) headerHtml += "<p class='small' style='color:var(--accent)'>" + aciertosStr + " de " + questions.length + " aciertos</p>";
    if (!hasAnswers) headerHtml += "<p class='small' style='margin-top:0.5rem;color:var(--warn)'>No se guardó el detalle de tus respuestas en este examen.</p>";
    headerHtml += "</div>";
    reviewHeader.innerHTML = headerHtml;

    reviewFilters.innerHTML = "";
    var filterAll = document.createElement("button");
    filterAll.className = "tab-btn active";
    filterAll.textContent = "Todas (" + questions.length + ")";
    var filterWrong = document.createElement("button");
    filterWrong.className = "tab-btn";
    filterWrong.textContent = "Solo las que fallé (" + failCount + ")";
    reviewFilters.appendChild(filterAll);
    reviewFilters.appendChild(filterWrong);

    function esc(str) {
      return String(str == null ? "" : str)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }

    var showOnlyWrong = false;
    function renderList() {
      reviewList.innerHTML = "";
      var html = "";
      var shown = 0;
      for (var qi = 0; qi < questions.length; qi++) {
        var q = questions[qi];
        var qNum = qi + 1;
        var isWrong = wrong[qNum] !== undefined;
        if (showOnlyWrong && !isWrong) continue;
        shown++;
        var userPick = wrong[qNum] !== undefined ? Number(wrong[qNum]) : null;

        html += "<div class='card' style='padding:1.1rem'>";
        html += "<p style='font-weight:700;color:var(--text);margin-bottom:0.6rem'><span style='color:var(--muted);margin-right:0.4rem'>" + qNum + ".</span>" + esc(q.pregunta) + "</p>";
        var opts = q.opciones || [];
        for (var oi = 0; oi < opts.length; oi++) {
          var isCorrect = oi === q.correcta;
          var isUserPick = userPick === oi;
          var style = "";
          var tag = "";
          if (isCorrect) {
            style = "background:rgba(34,197,94,0.12);border:1px solid var(--success);color:var(--text);padding:0.55rem 0.9rem;border-radius:var(--radius);margin-bottom:0.35rem;font-size:0.9rem";
            tag = " ✔";
          }
          if (isUserPick && !isCorrect) {
            style = "background:rgba(239,68,68,0.12);border:1px solid var(--danger);color:var(--text);padding:0.55rem 0.9rem;border-radius:var(--radius);margin-bottom:0.35rem;font-size:0.9rem";
            tag = " ✕";
          }
          var letter = String.fromCharCode(97 + oi);
          var userLabel = isUserPick ? (isCorrect ? " · Tu respuesta ✓" : " · Tu respuesta") : "";
          html += "<div style='" + style + "'><span style='color:var(--muted);margin-right:0.4rem'>" + letter + ")</span>" + esc(opts[oi]) + tag + userLabel + "</div>";
        }
        html += "</div>";
      }
      reviewList.innerHTML = html || "<p class='small' style='color:var(--muted)'>No hay preguntas que mostrar.</p>";
    }

    filterAll.addEventListener("click", function () {
      showOnlyWrong = false;
      filterAll.classList.add("active");
      filterWrong.classList.remove("active");
      renderList();
    });
    filterWrong.addEventListener("click", function () {
      showOnlyWrong = true;
      filterWrong.classList.add("active");
      filterAll.classList.remove("active");
      renderList();
    });

    var closingHtml = "";
    if (answers && typeof answers === "object" && answers.wrong && Object.keys(answers.wrong).length > 0) {
      closingHtml = "<div class='card'><p class='eyebrow'>Áreas de refuerzo</p><p class='small' style='color:var(--muted)'>Los temas donde fallaste se retoman más adelante en el programa:</p><ul style='margin-top:0.5rem;padding-left:1.2rem;font-size:0.88rem;color:var(--muted);display:grid;gap:0.3rem'><li>El comportamiento de tipos y la concatenación en JavaScript — se profundiza en el Mes 2 (materia C) y el Mes 5 (LLMs a fondo).</li><li>El criterio de verificación frente a la IA (dónde alucina más) — se retoma en el Mes 5 (LLMs a fondo).</li></ul></div>";
    } else {
      closingHtml = "<div class='card'><p class='eyebrow'>Áreas de refuerzo</p><p class='small' style='color:var(--muted)'>Sigue con tu plan. Los temas de este examen se retoman en profundidad a lo largo del programa.</p></div>";
    }
    reviewClosing.innerHTML = closingHtml;

    renderList();
  }

  async function showReview() {
    examTitle.style.display = "none";
    if (cloudEnabled && cloudUser && typeof window.DevSystemCloud.getMonthExams === "function") {
      var exams = await window.DevSystemCloud.getMonthExams(cloudUser.email).catch(function () {
        return [];
      });
      var record = null;
      if (exams && exams.length) {
        for (var i = 0; i < exams.length; i++) {
          if (Number(exams[i].month_id) === Number(mes)) { record = exams[i]; break; }
        }
      }
      if (!record) {
        document.getElementById("exam-message").textContent = "No hay un examen registrado para este mes.";
        return;
      }
      renderReview(record);
    } else {
      renderReview(null);
    }
  }

  nextBtn.addEventListener("click", goNext);

  renderQuestion(0);
})();
