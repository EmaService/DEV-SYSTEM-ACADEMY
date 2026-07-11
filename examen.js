(async function () {
  var questions = [
    {
      q: "¿Qué estructura de datos funciona bajo el principio LIFO?",
      opts: ["Pila", "Cola", "Lista enlazada", "Árbol"],
      ans: 0,
    },
    {
      q: "¿Cuál es el resultado de 2 + \"2\" en JavaScript?",
      opts: ["4", "\"22\"", "NaN", "Error"],
      ans: 1,
    },
    {
      q: "¿Qué etiqueta HTML se usa para el título más importante de una página?",
      opts: ["title", "h1", "header", "strong"],
      ans: 1,
    },
    {
      q: "¿Qué propiedad CSS controla el espacio INTERNO de un elemento?",
      opts: ["margin", "padding", "border", "gap"],
      ans: 1,
    },
    {
      q: "¿Qué comando SQL se usa para obtener registros de una tabla?",
      opts: ["GET", "FETCH", "SELECT", "OBTAIN"],
      ans: 2,
    },
    {
      q: "¿Qué código de estado HTTP indica \"no encontrado\"?",
      opts: ["200", "301", "500", "404"],
      ans: 3,
    },
    {
      q: "¿Qué método HTTP se usa típicamente para actualizar un recurso existente?",
      opts: ["GET", "PUT", "POST", "DELETE"],
      ans: 1,
    },
    {
      q: "¿Cuál es el tipo de dato de `typeof null` en JavaScript?",
      opts: ["\"null\"", "\"undefined\"", "\"boolean\"", "\"object\""],
      ans: 3,
    },
    {
      q: "¿Qué etiqueta HTML se usa para insertar una imagen?",
      opts: ["image", "src", "img", "picture"],
      ans: 2,
    },
    {
      q: "¿Qué significa DNS?",
      opts: [
        "Digital Network Service",
        "Data Node Security",
        "Dynamic Name Server",
        "Domain Name System",
      ],
      ans: 3,
    },
    {
      q: "¿Qué comando de git se usa para guardar cambios localmente?",
      opts: ["push", "save", "commit", "store"],
      ans: 2,
    },
    {
      q: "¿Qué propiedad de CSS se usa para hacer que un elemento sea flexible?",
      opts: ["position: flex", "flexible: true", "layout: flex", "display: flex"],
      ans: 3,
    },
    {
      q: "¿Cuál es el operador de comparación estricta en JavaScript?",
      opts: ["==", "=", "!==", "==="],
      ans: 3,
    },
    {
      q: "¿Qué lenguaje se usa principalmente para estilizar páginas web?",
      opts: ["HTML", "CSS", "JavaScript", "Python"],
      ans: 1,
    },
    {
      q: "¿Qué tipo de JOIN en SQL devuelve solo los registros con coincidencias en ambas tablas?",
      opts: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
      ans: 3,
    },
  ];

  var cfg = window.DEV_SYSTEM_CONFIG || {};
  var cloudUser = null;
  var cloudEnabled = window.DevSystemCloud && window.DevSystemCloud.isEnabled();

  if (cloudEnabled) {
    cloudUser = await window.DevSystemCloud.getCurrentUser();
    if (!cloudUser || !cloudUser.email) {
      window.location.href = "login.html";
      return;
    }
    var enrollment = await window.DevSystemCloud.getEnrollment(cloudUser.email);
    if (enrollment && enrollment.exam_passed) {
      showResult(enrollment.exam_score || 70);
      return;
    }
  }

  var currentIndex = 0;
  var answers = {};
  var email = cloudUser ? cloudUser.email : "local@test.com";

  var questionText = document.getElementById("question-text");
  var optionsContainer = document.getElementById("options-container");
  var prevBtn = document.getElementById("prev-btn");
  var nextBtn = document.getElementById("next-btn");
  var submitBtn = document.getElementById("submit-btn");
  var examContent = document.getElementById("exam-content");
  var examResult = document.getElementById("exam-result");
  var resultMessage = document.getElementById("result-message");
  var resultScore = document.getElementById("result-score");
  var resultPrice = document.getElementById("result-price");
  var resultCta = document.getElementById("result-cta");
  var examMessage = document.getElementById("exam-message");
  var examCounter = document.getElementById("exam-counter");
  var examProgressFill = document.getElementById("exam-progress-fill");

  function renderQuestion(index) {
    var q = questions[index];
    questionText.textContent = q.q;
    optionsContainer.innerHTML = "";
    for (var i = 0; i < q.opts.length; i++) {
      var opt = document.createElement("article");
      opt.className = "card plan-card";
      if (answers[index] === i) opt.classList.add("selected");
      opt.setAttribute("data-opt-index", i);
      opt.textContent = q.opts[i];
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
    prevBtn.disabled = index === 0;
    nextBtn.style.display = index === questions.length - 1 ? "none" : "";
    submitBtn.style.display = index === questions.length - 1 ? "" : "none";
  }

  function goNext() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion(currentIndex);
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion(currentIndex);
    }
  }

  function calculateScore() {
    var correct = 0;
    for (var i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].ans) correct++;
    }
    var raw = Math.round((correct / questions.length) * 100);
    var final = raw >= 70 ? raw : 70 + (raw % 15);
    return final;
  }

  function showResult(score) {
    examContent.style.display = "none";
    examResult.style.display = "block";
    resultMessage.textContent = "¡Felicidades, aprobaste el examen de admisión!";
    resultMessage.style.color = "var(--green)";
    resultScore.textContent = "Puntaje obtenido: " + score + "/100";
    resultPrice.textContent =
      "Tarifa preferente: $7,000 MXN / mes durante los 12 meses del programa.";
  }

  submitBtn.addEventListener("click", async function () {
    var score = calculateScore();
    if (cloudEnabled && cloudUser && cloudUser.email) {
      var result = await window.DevSystemCloud.saveExamResult(cloudUser.email, score);
      if (!result.ok) {
        examMessage.textContent = result.message;
        return;
      }
    }
    showResult(score);
  });

  nextBtn.addEventListener("click", goNext);
  prevBtn.addEventListener("click", goPrev);

  renderQuestion(0);
})();
