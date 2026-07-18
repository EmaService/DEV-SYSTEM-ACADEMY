(async function () {
  var cloudEnabled = window.DevSystemCloud && window.DevSystemCloud.isEnabled()
  var cloudUser = null
  var email = null

  if (cloudEnabled) {
    cloudUser = await window.DevSystemCloud.getCurrentUser()
    if (!cloudUser || !cloudUser.email) {
      window.location.href = "login.html"
      return
    }
    email = cloudUser.email
  } else {
    var localUser = window.DevSystemState && window.DevSystemState.getCurrentUser()
    if (!localUser || !localUser.email) {
      window.location.href = "login.html"
      return
    }
    email = localUser.email
  }

  function getQueryParam(name) {
    var match = window.location.search.match(new RegExp("[?&]" + name + "=([^&]+)"))
    return match ? decodeURIComponent(match[1]) : null
  }

  var lessonId = getQueryParam("id")

  function findLessonById(id) {
    var parts = String(id || "").split("-")
    if (parts.length < 2) return null
    var moduleKey = parts[0]
    var letter = parts[1].charAt(0)
    var moduleData = window.DEV_SYSTEM_LECCIONES[moduleKey]
    if (!moduleData) return null
    var materia = moduleData.materias[letter]
    if (!materia) return null
    for (var i = 0; i < materia.lecciones.length; i++) {
      if (materia.lecciones[i].id === id) return materia.lecciones[i]
    }
    return null
  }

  function getMateriaInfo(id) {
    var parts = String(id || "").split("-")
    if (parts.length < 2) return null
    var moduleKey = parts[0]
    var letter = parts[1].charAt(0)
    var moduleData = window.DEV_SYSTEM_LECCIONES[moduleKey]
    if (!moduleData) return null
    var materia = moduleData.materias[letter]
    if (!materia) return null
    return { nombre: materia.nombre, icono: materia.icono, letter: letter, moduleKey: moduleKey, materia: materia }
  }

  function normalizeText(str) {
    return String(str || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }

  function shuffle(arr) {
    var a = arr.slice()
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
    }
    return a
  }

  function findInGlossary(text) {
    var norm = normalizeText(text)
    for (var i = 0; i < window.DEV_SYSTEM_GLOSARIO.length; i++) {
      var entry = window.DEV_SYSTEM_GLOSARIO[i]
      if (normalizeText(entry.termino) === norm) return entry
      var vars = entry.variantes || []
      for (var j = 0; j < vars.length; j++) {
        if (normalizeText(vars[j]) === norm) return entry
      }
    }
    return null
  }

  function findNextLesson(currentId) {
    var parts = String(currentId || "").split("-")
    if (parts.length < 2) return null
    var moduleKey = parts[0]
    var letter = parts[1].charAt(0)
    var numPart = parts[1].substring(1)
    var currentNum = parseInt(numPart, 10)
    var moduleData = window.DEV_SYSTEM_LECCIONES[moduleKey]
    if (!moduleData) return null
    var letters = Object.keys(moduleData.materias).sort()
    var currentLetterIdx = letters.indexOf(letter)

    for (var l = currentLetterIdx; l < letters.length; l++) {
      var materia = moduleData.materias[letters[l]]
      var startNum = l === currentLetterIdx ? currentNum + 1 : 1
      for (var n = startNum; n <= 50; n++) {
        var candidateId = moduleKey + "-" + letters[l] + n
        for (var k = 0; k < materia.lecciones.length; k++) {
          if (materia.lecciones[k].id === candidateId && !materia.lecciones[k].proximamente) {
            return candidateId
          }
        }
      }
    }
    return null
  }

  var lesson = findLessonById(lessonId)
  var materiaInfo = getMateriaInfo(lessonId)

  var lecturaSection = document.getElementById("lectura-section")
  var ejerciciosSection = document.getElementById("ejercicios-section")
  var completadaSection = document.getElementById("completada-section")
  var leccionMateria = document.getElementById("leccion-materia")
  var leccionTitulo = document.getElementById("leccion-titulo")
  var leccionSecciones = document.getElementById("leccion-secciones")
  var startBtn = document.getElementById("start-ejercicios-btn")
  var ejContainer = document.getElementById("ej-container")
  var ejFeedback = document.getElementById("ej-feedback")
  var ejProgressFill = document.getElementById("ej-progress-fill")
  var ejCounter = document.getElementById("ej-counter")
  var ejTitulo = document.getElementById("ejercicios-titulo")
  var toastEl = document.getElementById("glosario-toast")
  var completadaStats = document.getElementById("completada-stats")
  var nextLessonBtn = document.getElementById("next-lesson-btn")

  if (!lesson) {
    lecturaSection.innerHTML = "<p class='notice'>Lección no encontrada. <a href='portal.html'>Volver al portal</a></p>"
    startBtn.style.display = "none"
    return
  }

  var readingSaved = localStorage.getItem("devsystem_reading_" + lessonId) === "read"

  function renderReadingPhase() {
    if (materiaInfo) {
      leccionMateria.textContent = materiaInfo.icono + " " + materiaInfo.nombre
    } else {
      leccionMateria.textContent = ""
    }
    leccionTitulo.textContent = lesson.titulo
    leccionSecciones.innerHTML = ""

    var secciones = lesson.secciones || []
    for (var i = 0; i < secciones.length; i++) {
      var sec = secciones[i]
      var slide = document.createElement("div")
      slide.className = "carousel-slide"

      if (sec.tipo === "prompt") {
        slide.classList.add("prompt-slide")
        slide.style.background = "linear-gradient(135deg, var(--brand) 0%, var(--brand-2) 100%)"
        slide.style.color = "#fff"

        var badge = document.createElement("span")
        badge.className = "prompt-badge"
        badge.textContent = "TU SUPERPODER"
        slide.appendChild(badge)
      }

      var secTitle = document.createElement("h3")
      secTitle.textContent = sec.titulo
      secTitle.style.marginBottom = "0.75rem"
      secTitle.style.fontSize = "clamp(1.1rem,3.5vw,1.4rem)"
      if (sec.tipo === "prompt") secTitle.style.color = "#fff"
      slide.appendChild(secTitle)

      var secBody = document.createElement("div")
      secBody.innerHTML = sec.html || ""
      slide.appendChild(secBody)

      if (sec.tipo === "prompt") {
        var copyBtn = document.createElement("button")
        copyBtn.textContent = "📋 Copiar prompt"
        copyBtn.style.cssText = "background:#fff;color:var(--brand);font-weight:700;padding:0.75rem 1.5rem;border-radius:var(--radius);border:0;margin-top:1rem;cursor:pointer"
        copyBtn.addEventListener("click", function (html, btn) {
          return function () {
            var text = html.replace(/<[^>]*>/g, "").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'")
            navigator.clipboard.writeText(text).catch(function () {})
            btn.textContent = "Copiado ✓"
            btn.style.background = "rgba(255,255,255,0.2)"
            btn.style.color = "#fff"
            setTimeout(function () {
              btn.textContent = "📋 Copiar prompt"
              btn.style.background = "#fff"
              btn.style.color = "var(--brand)"
            }, 2000)
          }
        }(sec.html, copyBtn))
        slide.appendChild(copyBtn)
      }

      leccionSecciones.appendChild(slide)
    }
  }

  function saveReadingProgress() {
    if (!readingSaved) {
      localStorage.setItem("devsystem_reading_" + lessonId, "read")
      readingSaved = true
    }
  }

  renderReadingPhase()

  var carouselSlides = document.getElementById("leccion-secciones")
  var carouselDots = document.getElementById("carousel-dots")
  var carouselNext = document.getElementById("carousel-next-btn")
  var startBtn = document.getElementById("start-ejercicios-btn")
  var slideIndex = 0
  var totalSlides = carouselSlides ? carouselSlides.children.length : 0

  if (carouselDots && totalSlides > 0) {
    for (var si = 0; si < totalSlides; si++) {
      var dot = document.createElement("span")
      dot.className = "carousel-dot" + (si === 0 ? " active" : "")
      dot.setAttribute("data-slide", si)
      dot.addEventListener("click", (function (idx) { return function () { goToSlide(idx) } })(si))
      carouselDots.appendChild(dot)
    }
  }

  function goToSlide(idx) {
    if (!carouselSlides) return
    slideIndex = Math.max(0, Math.min(idx, totalSlides - 1))
    carouselSlides.scrollTo({ left: carouselSlides.clientWidth * slideIndex, behavior: "smooth" })
    var dots = carouselDots ? carouselDots.querySelectorAll(".carousel-dot") : []
    for (var di = 0; di < dots.length; di++) dots[di].classList.toggle("active", di === slideIndex)
    var isLast = slideIndex >= totalSlides - 1
    if (carouselNext) carouselNext.style.display = isLast ? "none" : "inline-block"
    if (startBtn) {
      startBtn.className = "btn btn-brand"
      startBtn.style.cssText = "position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);z-index:50;width:85%;max-width:400px;text-align:center;display:" + (isLast ? "inline-block" : "none")
    }
  }

  if (carouselNext) {
    carouselNext.addEventListener("click", function () { goToSlide(slideIndex + 1) })
  }

  var carouselScrollTimer = null
  if (carouselSlides) {
    carouselSlides.addEventListener("scroll", function () {
      if (carouselScrollTimer) clearTimeout(carouselScrollTimer)
      carouselScrollTimer = setTimeout(function () {
        var newIdx = Math.round(carouselSlides.scrollLeft / carouselSlides.clientWidth)
        if (newIdx !== slideIndex) goToSlide(newIdx)
      }, 50)
    })
  }

  goToSlide(0)

  var carouselScrollListener = function () {
    if (carouselSlides && carouselSlides.scrollLeft + carouselSlides.clientWidth >= carouselSlides.scrollWidth - 10) {
      saveReadingProgress()
    }
  }
  if (carouselSlides) {
    carouselSlides.addEventListener("scroll", carouselScrollListener)
  }

  function showToast(message, duration) {
    toastEl.textContent = message
    toastEl.style.display = "block"
    if (toastEl._hideTimer) clearTimeout(toastEl._hideTimer)
    toastEl._hideTimer = setTimeout(function () {
      toastEl.style.display = "none"
    }, duration || 4000)
  }

  function hideToast() {
    toastEl.style.display = "none"
    if (toastEl._hideTimer) clearTimeout(toastEl._hideTimer)
  }

  var floatBtn = document.createElement("button")
  floatBtn.textContent = "+"
  floatBtn.title = "Agregar a glosario"
  floatBtn.style.cssText = "position:fixed;z-index:998;width:36px;height:36px;border-radius:50%;background:var(--accent);color:#fff;font-size:1.5rem;border:none;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);line-height:1"
  document.body.appendChild(floatBtn)

  function handleTextSelection(event) {
    setTimeout(function () {
      var selection = window.getSelection()
      var text = selection ? selection.toString().trim() : ""
      if (!text || !lecturaSection.contains(selection.anchorNode)) {
        floatBtn.style.display = "none"
        return
      }
      var range = selection.getRangeAt(0)
      var rect = range.getBoundingClientRect()
      floatBtn.style.display = "flex"
      floatBtn.style.left = (rect.left + rect.width / 2 - 18) + "px"
      floatBtn.style.top = (rect.top - 46) + "px"
      floatBtn._selectedText = text
    }, 10)
  }

  document.addEventListener("mouseup", handleTextSelection)
  document.addEventListener("touchend", handleTextSelection)
  document.addEventListener("mousedown", function (e) {
    if (floatBtn.style.display !== "none" && e.target !== floatBtn) {
      floatBtn.style.display = "none"
    }
  })

  floatBtn.addEventListener("click", async function () {
    var rawText = floatBtn._selectedText || ""
    floatBtn.style.display = "none"
    if (!rawText) return

    var normalized = normalizeText(rawText)
    if (normalized.length > 40) normalized = normalized.substring(0, 40)

    var found = findInGlossary(normalized)

    try {
      if (found) {
        var result = await window.DevSystemCloud.saveGlossaryTerm({
          email: email,
          term: found.termino,
          definition: found.definicion,
          month_ref: found.mes || null,
          known_term: true,
          reviewed: false,
        })
        if (result && result.ok === false) {
          var msg = (result.message || "").toLowerCase()
          if (msg.indexOf("duplicate") !== -1 || msg.indexOf("ya existe") !== -1 || msg.indexOf("already") !== -1) {
            showToast("Ya está en tu glosario")
          } else {
            showToast("Error: " + result.message)
          }
        } else {
          showToast("Definición: " + found.definicion)
        }
      } else {
        var result2 = await window.DevSystemCloud.saveGlossaryTerm({
          email: email,
          term: rawText.substring(0, 40),
          definition: "",
          month_ref: null,
          known_term: false,
          reviewed: false,
        })
        if (result2 && result2.ok === false) {
          var msg2 = (result2.message || "").toLowerCase()
          if (msg2.indexOf("duplicate") !== -1 || msg2.indexOf("ya existe") !== -1 || msg2.indexOf("already") !== -1) {
            showToast("Ya está en tu glosario")
          } else {
            showToast("Error: " + result2.message)
          }
        } else {
          showToast("Guardado en tu glosario — este término lo cubriremos más adelante.")
        }
      }
    } catch (err) {
      showToast("Ya está en tu glosario")
    }
  })

  var ejercicios = (lesson.ejercicios || []).slice()
  var queue = []
  var queueIndex = 0
  var totalExercises = ejercicios.length
  var firstTryCorrectCount = 0
  var failedSet = {}
  var answering = false
  var advanceTimer = null

  function startExercises() {
    saveReadingProgress()
    lecturaSection.style.display = "none"
    ejerciciosSection.style.display = "block"

    if (totalExercises === 0) {
      showCompletada()
      return
    }

    queue = []
    for (var i = 0; i < totalExercises; i++) {
      queue.push(i)
    }
    queueIndex = 0
    firstTryCorrectCount = 0
    failedSet = {}
    renderCurrentExercise()
  }

  function renderCurrentExercise() {
    hideToast()
    ejFeedback.innerHTML = ""
    if (advanceTimer) {
      clearTimeout(advanceTimer)
      advanceTimer = null
    }
    answering = false
    if (queueIndex >= queue.length) {
      showCompletada()
      return
    }
    var ejIdx = queue[queueIndex]
    var ej = ejercicios[ejIdx]
    ejContainer.innerHTML = ""
    var progressPct = ((queueIndex) / queue.length) * 100
    ejProgressFill.style.width = progressPct + "%"
    ejCounter.textContent = "Ejercicio " + (queueIndex + 1) + " de " + queue.length
    if (ejTitulo) ejTitulo.textContent = lesson.titulo
    ejContainer._ejIdx = ejIdx
    ejContainer._isFirstAttempt = !failedSet[ejIdx]

    switch (ej.tipo) {
      case "multiple":
        renderMultiple(ej)
        break
      case "completar":
        renderCompletar(ej)
        break
      case "vf":
        renderVF(ej)
        break
      case "relacionar":
        renderRelacionar(ej)
        break
      case "ordenar":
        renderOrdenar(ej)
        break
      case "quehace":
        renderQuehace(ej)
        break
      default:
        ejContainer.innerHTML = "<p>Tipo de ejercicio no soportado: " + ej.tipo + "</p>"
        break
    }
  }

  function nextExercise(success) {
    if (advanceTimer) {
      clearTimeout(advanceTimer)
      advanceTimer = null
    }
    var ejIdx = queue[queueIndex]
    if (success) {
      if (ejContainer._isFirstAttempt) {
        firstTryCorrectCount++
      }
      queue.splice(queueIndex, 1)
    } else {
      failedSet[ejIdx] = true
      if (queue.length > 1) {
        queue.push(queue.splice(queueIndex, 1)[0])
      } else {
        queue.splice(queueIndex, 1)
      }
    }
    if (queue.length === 0) {
      showCompletada()
    } else {
      renderCurrentExercise()
    }
  }

  function advanceAfter(delay, success) {
    if (advanceTimer) clearTimeout(advanceTimer)
    advanceTimer = setTimeout(function () {
      nextExercise(success)
    }, delay)
  }

  function showFeedback(html, isCorrect) {
    ejFeedback.innerHTML = html
    ejFeedback.style.color = isCorrect ? "var(--green)" : "var(--red)"
    ejFeedback.className = "ej-feedback slide-in-" + (isCorrect ? "correct" : "wrong")
    ejFeedback.style.transform = "translateY(0)"
  }

  function renderMultiple(ej) {
    var p = document.createElement("p")
    p.style.fontWeight = "600"
    p.style.marginBottom = "1rem"
    p.textContent = ej.pregunta
    ejContainer.appendChild(p)

    var grid = document.createElement("div")
    grid.className = "plan-grid"

    for (var i = 0; i < ej.opciones.length; i++) {
      var opt = document.createElement("article")
      opt.className = "card plan-card"
      opt.textContent = ej.opciones[i]
      opt.setAttribute("data-index", i)
      opt.addEventListener("click", function (ej, idx) {
        return function () {
          if (answering) return
          answering = true
          var all = grid.querySelectorAll(".plan-card")
          for (var j = 0; j < all.length; j++) all[j].classList.remove("selected")
          this.classList.add("selected")
          var correct = idx === ej.correcta
          if (correct) {
            this.classList.add("correct")
            showFeedback("✔ ¡Correcto!", true)
            advanceAfter(1200, true)
          } else {
            this.classList.add("wrong")
            all[ej.correcta].classList.add("correct")
            showFeedback("❌ Incorrecto. La respuesta correcta es: " + ej.opciones[ej.correcta], false)
            advanceAfter(2000, false)
          }
        }
      }(ej, i))
      grid.appendChild(opt)
    }
    ejContainer.appendChild(grid)
  }

  function renderCompletar(ej) {
    var blanks = []
    var parts = ej.frase.split("____")
    var fragment = document.createDocumentFragment()

    for (var i = 0; i < parts.length; i++) {
      if (i > 0) {
        var blankSpan = document.createElement("span")
        blankSpan.className = "blank-fill"
        blankSpan.style.cssText = "display:inline-block;min-width:80px;border-bottom:2px dashed var(--accent);margin:0 4px;text-align:center;padding:0 4px;font-family:var(--mono);color:var(--text)"
        blankSpan.textContent = "____"
        blankSpan.setAttribute("data-index", i - 1)
        blankSpan.setAttribute("data-filled", "false")
        fragment.appendChild(blankSpan)
        blanks.push(blankSpan)
      }
      if (parts[i]) {
        fragment.appendChild(document.createTextNode(parts[i]))
      }
    }

    var p = document.createElement("p")
    p.style.marginBottom = "1rem"
    p.appendChild(fragment)
    ejContainer.appendChild(p)

    var fillState = []
    for (var b = 0; b < blanks.length; b++) {
      fillState.push(null)
    }
    var fillIndex = 0

    function checkCompletar() {
      var allFilled = fillState.every(function (v) { return v !== null })
      if (!allFilled) return
      if (answering) return
      answering = true

      var correct = true
      for (var k = 0; k < fillState.length; k++) {
        if (normalizeText(fillState[k]) !== normalizeText(ej.respuestas[k])) {
          correct = false
          break
        }
      }
      if (correct) {
        for (var k2 = 0; k2 < blanks.length; k2++) {
          blanks[k2].style.borderBottomColor = "var(--green)"
          blanks[k2].style.color = "var(--green)"
        }
        showFeedback("✔ ¡Correcto!", true)
        advanceAfter(1200, true)
      } else {
        for (var k3 = 0; k3 < blanks.length; k3++) {
          if (normalizeText(fillState[k3]) !== normalizeText(ej.respuestas[k3])) {
            blanks[k3].style.borderBottomColor = "var(--red)"
            blanks[k3].style.color = "var(--red)"
          } else {
            blanks[k3].style.borderBottomColor = "var(--green)"
            blanks[k3].style.color = "var(--green)"
          }
        }
        var correctResp = ej.respuestas.join(", ")
        showFeedback("❌ Incorrecto. Respuestas correctas: " + correctResp, false)
        advanceAfter(2000, false)
      }
    }

    function fillNextBlank(word) {
      if (fillIndex >= blanks.length) return
      fillState[fillIndex] = word
      blanks[fillIndex].textContent = word
      blanks[fillIndex].setAttribute("data-filled", "true")
      blanks[fillIndex].style.borderBottomColor = "var(--accent)"
      blanks[fillIndex].style.color = "var(--accent)"
      fillIndex++
      checkCompletar()
    }

    function undoLast() {
      if (answering) return
      if (fillIndex <= 0) return
      fillIndex--
      fillState[fillIndex] = null
      blanks[fillIndex].textContent = "____"
      blanks[fillIndex].setAttribute("data-filled", "false")
      blanks[fillIndex].style.borderBottomColor = "dashed var(--accent)"
      blanks[fillIndex].style.color = "var(--text)"
    }

    var bankDiv = document.createElement("div")
    bankDiv.style.cssText = "display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:1rem"

    var shuffledBank = shuffle(ej.banco)
    for (var c = 0; c < shuffledBank.length; c++) {
      var chip = document.createElement("button")
      chip.className = "chip"
      chip.textContent = shuffledBank[c]
      chip.setAttribute("data-word", shuffledBank[c])
      chip.style.cssText = "padding:0.4rem 0.8rem;border:1px solid var(--accent);border-radius:var(--radius-sm);background:var(--bg-card);cursor:pointer;font-family:var(--mono);font-size:0.9rem"
      chip.addEventListener("click", function (word) {
        return function () {
          if (answering) return
          fillNextBlank(word)
        }
      }(shuffledBank[c]))
      bankDiv.appendChild(chip)
    }
    ejContainer.appendChild(bankDiv)

    var undoDiv = document.createElement("div")
    undoDiv.style.marginTop = "0.75rem"
    var undoBtn = document.createElement("button")
    undoBtn.className = "btn btn-ghost"
    undoBtn.textContent = "Deshacer"
    undoBtn.addEventListener("click", undoLast)
    undoDiv.appendChild(undoBtn)
    ejContainer.appendChild(undoDiv)
  }

  function renderVF(ej) {
    var p = document.createElement("p")
    p.style.fontWeight = "600"
    p.style.marginBottom = "1rem"
    p.textContent = ej.afirmacion
    ejContainer.appendChild(p)

    var btnDiv = document.createElement("div")
    btnDiv.style.cssText = "display:flex;gap:1rem;justify-content:center"

    function makeVFBtn(value, label) {
      var btn = document.createElement("button")
      btn.className = "btn"
      btn.textContent = label
      btn.style.cssText = "flex:1;max-width:120px;font-size:1.5rem;font-weight:700;padding:1rem"
      btn.addEventListener("click", function () {
        if (answering) return
        answering = true
        var correct = value === ej.correcta
        if (correct) {
          btn.style.background = "var(--green)"
          btn.style.color = "#fff"
          showFeedback("✔ ¡Correcto! " + (ej.explicacion || ""), true)
          advanceAfter(1200, true)
        } else {
          btn.style.background = "var(--red)"
          btn.style.color = "#fff"
          var correctLabel = ej.correcta ? "Verdadero" : "Falso"
          showFeedback("❌ Incorrecto. Respuesta correcta: " + correctLabel + ". " + (ej.explicacion || ""), false)
          advanceAfter(2000, false)
        }
      })
      return btn
    }

    btnDiv.appendChild(makeVFBtn(true, "V"))
    btnDiv.appendChild(makeVFBtn(false, "F"))
    ejContainer.appendChild(btnDiv)
  }

  function renderRelacionar(ej) {
    var pairs = ej.pares || []
    var leftItems = pairs.map(function (p, i) { return { text: p[0], pairIdx: i } })
    var rightItems = pairs.map(function (p, i) { return { text: p[1], pairIdx: i } })
    var shuffledLeft = shuffle(leftItems)
    var shuffledRight = shuffle(rightItems)

    var pairedLeft = {}
    var pairedRight = {}
    var selectedLeft = null
    var selectedLeftEl = null
    var wrongPairings = 0

    var grid = document.createElement("div")
    grid.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem"

    var leftCol = document.createElement("div")
    leftCol.style.cssText = "display:flex;flex-direction:column;gap:0.5rem"
    var rightCol = document.createElement("div")
    rightCol.style.cssText = "display:flex;flex-direction:column;gap:0.5rem"

    var leftEls = []
    var rightEls = []

    for (var i = 0; i < shuffledLeft.length; i++) {
      var item = shuffledLeft[i]
      var el = document.createElement("button")
      el.className = "card plan-card"
      el.textContent = item.text
      el.style.cssText = "padding:0.6rem 1rem;text-align:center;cursor:pointer;font-size:0.9rem"
      el.setAttribute("data-pair-idx", item.pairIdx)
      el.addEventListener("click", function (el, item) {
        return function () {
          if (pairedLeft[item.pairIdx]) return
          if (answering) return
          if (selectedLeftEl) {
            selectedLeftEl.style.borderColor = ""
            selectedLeftEl.style.borderWidth = ""
          }
          selectedLeft = item
          selectedLeftEl = el
          el.style.borderColor = "var(--accent)"
          el.style.borderWidth = "2px"
        }
      }(el, item))
      leftCol.appendChild(el)
      leftEls.push(el)
    }

    for (var j = 0; j < shuffledRight.length; j++) {
      var item2 = shuffledRight[j]
      var el2 = document.createElement("button")
      el2.className = "card plan-card"
      el2.textContent = item2.text
      el2.style.cssText = "padding:0.6rem 1rem;text-align:center;cursor:pointer;font-size:0.9rem"
      el2.setAttribute("data-pair-idx", item2.pairIdx)
      el2.addEventListener("click", function (el2, item2) {
        return function () {
          if (pairedRight[item2.pairIdx]) return
          if (answering) return
          if (!selectedLeft) return
          if (selectedLeft.pairIdx === item2.pairIdx) {
            pairedLeft[item2.pairIdx] = true
            pairedRight[item2.pairIdx] = true
            selectedLeftEl.style.borderColor = "var(--green)"
            selectedLeftEl.style.borderWidth = "2px"
            selectedLeftEl.style.background = "var(--green-light)"
            selectedLeftEl.style.cursor = "default"
            el2.style.borderColor = "var(--green)"
            el2.style.borderWidth = "2px"
            el2.style.background = "var(--green-light)"
            el2.style.cursor = "default"
            selectedLeft = null
            selectedLeftEl = null

            var allPaired = true
            for (var k = 0; k < pairs.length; k++) {
              if (!pairedLeft[k]) { allPaired = false; break }
            }
            if (allPaired) {
              answering = true
              if (wrongPairings > 0) {
                showFeedback("✔ Has completado todos los pares.", true)
                advanceAfter(1200, false)
              } else {
                showFeedback("✔ ¡Todos los pares correctos!", true)
                advanceAfter(1200, true)
              }
            }
          } else {
            wrongPairings++
            el2.style.borderColor = "var(--red)"
            el2.style.borderWidth = "2px"
            selectedLeftEl.style.borderColor = "var(--red)"
            selectedLeftEl.style.borderWidth = "2px"
            showFeedback("❌ Esa combinación no es correcta. Sigue intentando.", false)
            setTimeout(function () {
              el2.style.borderColor = ""
              el2.style.borderWidth = ""
              if (selectedLeftEl) {
                selectedLeftEl.style.borderColor = ""
                selectedLeftEl.style.borderWidth = ""
              }
              selectedLeft = null
              selectedLeftEl = null
              ejFeedback.innerHTML = ""
            }, 600)
          }
        }
      }(el2, item2))
      rightCol.appendChild(el2)
      rightEls.push(el2)
    }

    grid.appendChild(leftCol)
    grid.appendChild(rightCol)
    ejContainer.appendChild(grid)
  }

  function renderOrdenar(ej) {
    var elementos = ej.elementos || []
    var correctOrder = elementos.slice()
    var shuffled = shuffle(elementos)
    var sequence = []

    var instr = document.createElement("p")
    instr.style.fontWeight = "600"
    instr.style.marginBottom = "0.75rem"
    instr.textContent = ej.instruccion || "Acomoda en el orden correcto:"
    ejContainer.appendChild(instr)

    var seqDiv = document.createElement("div")
    seqDiv.style.cssText = "display:flex;flex-wrap:wrap;gap:0.5rem;min-height:3rem;padding:0.75rem;border:2px dashed var(--muted);border-radius:var(--radius);margin-bottom:1rem;align-items:center"
    var placeholder = document.createElement("span")
    placeholder.textContent = "Haz clic en los chips para construir la secuencia..."
    placeholder.style.color = "var(--muted)"
    placeholder.style.fontSize = "0.85rem"
    seqDiv.appendChild(placeholder)
    ejContainer.appendChild(seqDiv)

    var chipsDiv = document.createElement("div")
    chipsDiv.style.cssText = "display:flex;flex-wrap:wrap;gap:0.5rem"
    var chipEls = []

    function rebuildSequence() {
      seqDiv.innerHTML = ""
      if (sequence.length === 0) {
        var ph = document.createElement("span")
        ph.textContent = "Haz clic en los chips para construir la secuencia..."
        ph.style.color = "var(--muted)"
        ph.style.fontSize = "0.85rem"
        seqDiv.appendChild(ph)
      } else {
        for (var s = 0; s < sequence.length; s++) {
          var tag = document.createElement("span")
          tag.textContent = sequence[s]
          tag.style.cssText = "padding:0.3rem 0.7rem;background:var(--accent-light, rgba(0,200,150,0.1));border:1px solid var(--accent);border-radius:var(--radius-sm);font-family:var(--mono);font-size:0.85rem"
          seqDiv.appendChild(tag)
        }
      }
    }

    function checkOrdenar() {
      if (sequence.length !== correctOrder.length) return
      if (answering) return
      answering = true
      var correct = true
      for (var k = 0; k < sequence.length; k++) {
        if (normalizeText(sequence[k]) !== normalizeText(correctOrder[k])) {
          correct = false
          break
        }
      }
      if (correct) {
        seqDiv.style.borderColor = "var(--green)"
        showFeedback("✔ ¡Orden correcto!", true)
        advanceAfter(1200, true)
      } else {
        seqDiv.style.borderColor = "var(--red)"
        var correctStr = correctOrder.join(" → ")
        showFeedback("❌ Incorrecto. El orden correcto es: " + correctStr, false)
        advanceAfter(2000, false)
      }
    }

    function addToSequence(word) {
      sequence.push(word)
      rebuildSequence()
      for (var c = 0; c < chipEls.length; c++) {
        if (chipEls[c].getAttribute("data-word") === word && chipEls[c].style.display !== "none") {
          chipEls[c].style.display = "none"
          break
        }
      }
      if (sequence.length === correctOrder.length) {
        checkOrdenar()
      }
    }

    function undoOrdenar() {
      if (answering) return
      if (sequence.length === 0) return
      var removed = sequence.pop()
      rebuildSequence()
      for (var c2 = 0; c2 < chipEls.length; c2++) {
        if (chipEls[c2].getAttribute("data-word") === removed && chipEls[c2].style.display === "none") {
          chipEls[c2].style.display = ""
          break
        }
      }
    }

    for (var w = 0; w < shuffled.length; w++) {
      var chip = document.createElement("button")
      chip.textContent = shuffled[w]
      chip.className = "chip"
      chip.setAttribute("data-word", shuffled[w])
      chip.style.cssText = "padding:0.4rem 0.8rem;border:1px solid var(--accent);border-radius:var(--radius-sm);background:var(--bg-card);cursor:pointer;font-family:var(--mono);font-size:0.9rem"
      chip.addEventListener("click", function (word) {
        return function () {
          if (answering) return
          addToSequence(word)
        }
      }(shuffled[w]))
      chipsDiv.appendChild(chip)
      chipEls.push(chip)
    }
    ejContainer.appendChild(chipsDiv)

    var undoDiv2 = document.createElement("div")
    undoDiv2.style.marginTop = "0.75rem"
    var undoBtn2 = document.createElement("button")
    undoBtn2.className = "btn btn-ghost"
    undoBtn2.textContent = "Deshacer"
    undoBtn2.addEventListener("click", undoOrdenar)
    undoDiv2.appendChild(undoBtn2)
    ejContainer.appendChild(undoDiv2)
  }

  function renderQuehace(ej) {
    if (ej.codigo) {
      var pre = document.createElement("pre")
      var code = document.createElement("code")
      code.textContent = ej.codigo
      pre.appendChild(code)
      pre.style.marginBottom = "1rem"
      ejContainer.appendChild(pre)
    }
    var p = document.createElement("p")
    p.style.fontWeight = "600"
    p.style.marginBottom = "1rem"
    p.innerHTML = ej.pregunta
    ejContainer.appendChild(p)

    var grid = document.createElement("div")
    grid.className = "plan-grid"

    for (var i = 0; i < ej.opciones.length; i++) {
      var opt = document.createElement("article")
      opt.className = "card plan-card"
      opt.innerHTML = ej.opciones[i]
      opt.setAttribute("data-index", i)
      opt.addEventListener("click", function (ej, idx) {
        return function () {
          if (answering) return
          answering = true
          var all = grid.querySelectorAll(".plan-card")
          for (var j = 0; j < all.length; j++) all[j].classList.remove("selected")
          this.classList.add("selected")
          var correct = idx === ej.correcta
          if (correct) {
            this.classList.add("correct")
            showFeedback("✔ ¡Correcto!", true)
            advanceAfter(1200, true)
          } else {
            this.classList.add("wrong")
            all[ej.correcta].classList.add("correct")
            showFeedback("❌ Incorrecto. La respuesta correcta es: " + ej.opciones[ej.correcta], false)
            advanceAfter(2000, false)
          }
        }
      }(ej, i))
      grid.appendChild(opt)
    }
    ejContainer.appendChild(grid)
  }

  function showCompletada() {
    if (ejerciciosSection) ejerciciosSection.style.display = "none"
    if (completadaSection) completadaSection.style.display = "block"
    completadaStats.textContent = "Aciertos a la primera: " + firstTryCorrectCount + "/" + totalExercises

    var xpGain = totalExercises * 10
    var xpChip = document.getElementById("completada-xp-chip")
    if (xpChip) xpChip.textContent = "⭐ +" + xpGain + " XP"

    var headerXp = document.getElementById("leccion-xp-chip")
    if (headerXp) {
      var current = parseInt(headerXp.textContent.match(/\d+/) || 0, 10)
      headerXp.textContent = "⭐ " + (current + xpGain) + " XP"
      headerXp.classList.add("xp-chip-pop")
      setTimeout(function () { headerXp.classList.remove("xp-chip-pop") }, 500)
    }

    var confettiContainer = document.getElementById("confetti-container")
    if (confettiContainer) {
      var colors = ["#66dd8b", "#adc7ff", "#ffb300", "#ffb4ab", "#167eff", "#7c5cff"]
      for (var ci = 0; ci < 60; ci++) {
        var piece = document.createElement("div")
        piece.className = "confetti-piece"
        piece.style.cssText = "left:" + Math.random() * 100 + "%;animation-delay:" + (Math.random() * 2) + "s;background:" + colors[Math.floor(Math.random() * colors.length)]
        confettiContainer.appendChild(piece)
      }
    }

    if (cloudEnabled) {
      window.DevSystemCloud.setLessonProgress(email, lessonId, true).catch(function () {})
    }

    var nextId = findNextLesson(lessonId)
    if (nextId) {
      nextLessonBtn.href = "leccion.html?id=" + nextId
      nextLessonBtn.style.display = ""
    } else {
      nextLessonBtn.style.display = "none"
    }
  }

  startBtn.addEventListener("click", startExercises)

  var nextEjBtn = document.getElementById("ej-next-btn")
  var retryEjBtn = document.getElementById("ej-retry-btn")
  if (nextEjBtn) nextEjBtn.style.display = "none"
  if (retryEjBtn) retryEjBtn.style.display = "none"
})()
