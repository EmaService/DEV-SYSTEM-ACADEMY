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
        blankSpan.style.cssText = "background:rgba(124,92,255,0.08);border:2px dashed var(--brand);padding:0.25rem 0.9rem;border-radius:var(--radius);min-width:80px;display:inline-block;height:1.6em;vertical-align:middle;text-align:center;font-weight:600;transition:all 0.2s;margin:0 4px"
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
    p.style.cssText = "margin-bottom:1rem;font-size:1.05rem;line-height:2"
    p.appendChild(fragment)
    ejContainer.appendChild(p)

    var fillState = []
    for (var b = 0; b < blanks.length; b++) {
      fillState.push(null)
    }
    var fillIndex = 0

    var undoDiv = document.createElement("div")
    undoDiv.style.cssText = "margin-top:0.5rem;min-height:36px"
    var undoBtn = document.createElement("button")
    undoBtn.className = "btn btn-ghost"
    undoBtn.textContent = "\u21a9 Deshacer \u00faltimo"
    undoBtn.style.cssText = "font-size:0.85rem;padding:0.3rem 0.8rem"
    undoBtn.addEventListener("click", function () { undoLast() })
    undoDiv.appendChild(undoBtn)
    ejContainer.appendChild(undoDiv)
    undoDiv.style.display = "none"

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
          blanks[k2].style.background = "var(--success)"
          blanks[k2].style.borderColor = "var(--success)"
          blanks[k2].style.color = "#fff"
        }
        showFeedback("✔ ¡Correcto!", true)
        advanceAfter(1200, true)
      } else {
        for (var k3 = 0; k3 < blanks.length; k3++) {
          if (normalizeText(fillState[k3]) !== normalizeText(ej.respuestas[k3])) {
            blanks[k3].style.background = "rgba(239,68,68,0.15)"
            blanks[k3].style.borderColor = "var(--red)"
            blanks[k3].style.color = "var(--red)"
          } else {
            blanks[k3].style.background = "var(--success)"
            blanks[k3].style.borderColor = "var(--success)"
            blanks[k3].style.color = "#fff"
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
      blanks[fillIndex].style.background = "var(--brand)"
      blanks[fillIndex].style.borderColor = "var(--brand)"
      blanks[fillIndex].style.color = "#fff"
      fillIndex++
      undoDiv.style.display = fillIndex > 0 ? "" : "none"
      checkCompletar()
    }

    function undoLast() {
      if (answering) return
      if (fillIndex <= 0) return
      fillIndex--
      fillState[fillIndex] = null
      blanks[fillIndex].textContent = "____"
      blanks[fillIndex].setAttribute("data-filled", "false")
      blanks[fillIndex].style.background = "rgba(124,92,255,0.08)"
      blanks[fillIndex].style.borderColor = "var(--brand)"
      blanks[fillIndex].style.color = "var(--text)"
      undoDiv.style.display = fillIndex > 0 ? "" : "none"
    }

    var bankDiv = document.createElement("div")
    bankDiv.style.cssText = "display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:1rem"

    var shuffledBank = shuffle(ej.banco)
    for (var c = 0; c < shuffledBank.length; c++) {
      var chip = document.createElement("button")
      chip.className = "chip"
      chip.textContent = shuffledBank[c]
      chip.setAttribute("data-word", shuffledBank[c])
      chip.style.cssText = "background:var(--bg-card-hi);border:1px solid var(--line);padding:0.7rem 1.1rem;border-radius:var(--radius);font-weight:600;cursor:pointer;transition:all 0.2s;min-height:44px;font-size:0.95rem"
      chip.addEventListener("mouseenter", function (el) { return function () { if (el.style.opacity !== "0.3") { el.style.borderColor = "var(--brand)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 4px 12px rgba(124,92,255,0.2)" } } }(chip))
      chip.addEventListener("mouseleave", function (el) { return function () { el.style.borderColor = ""; el.style.transform = ""; el.style.boxShadow = "" } }(chip))
      chip.addEventListener("click", function (word, el) {
        return function () {
          if (answering) return
          if (el.style.opacity === "0.3") return
          el.style.opacity = "0.3"
          el.style.pointerEvents = "none"
          el.style.borderColor = ""
          el.style.transform = ""
          el.style.boxShadow = ""
          fillNextBlank(word)
        }
      }(shuffledBank[c], chip))
      bankDiv.appendChild(chip)
    }
    ejContainer.appendChild(bankDiv)
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

    var instr = document.createElement("p")
    instr.style.cssText = "font-weight:600;margin-bottom:0.75rem;text-align:center;color:var(--muted)"
    instr.textContent = "Toca un elemento de cada columna para emparejarlos"
    ejContainer.appendChild(instr)

    var grid = document.createElement("div")
    grid.style.cssText = "display:grid;grid-template-columns:1fr 40px 1fr;gap:0.75rem;margin-top:1rem;align-items:start"

    var leftCol = document.createElement("div")
    leftCol.style.cssText = "display:flex;flex-direction:column;gap:0.5rem"
    var midCol = document.createElement("div")
    midCol.style.cssText = "display:flex;flex-direction:column;gap:0.5rem;padding-top:2.5rem;align-items:center"
    var rightCol = document.createElement("div")
    rightCol.style.cssText = "display:flex;flex-direction:column;gap:0.5rem"

    var leftHeader = document.createElement("div")
    leftHeader.style.cssText = "font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--brand);text-align:center;padding-bottom:0.25rem"
    leftHeader.textContent = "Concepto"
    leftCol.appendChild(leftHeader)

    var rightHeader = document.createElement("div")
    rightHeader.style.cssText = "font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--success);text-align:center;padding-bottom:0.25rem"
    rightHeader.textContent = "Descripci\u00f3n"
    rightCol.appendChild(rightHeader)

    var leftEls = []
    var rightEls = []

    for (var i = 0; i < shuffledLeft.length; i++) {
      var item = shuffledLeft[i]
      var el = document.createElement("button")
      el.textContent = item.text
      el.style.cssText = "background:rgba(124,92,255,0.15);border:2px solid var(--brand);color:var(--text);padding:0.9rem 1.2rem;border-radius:var(--radius-lg);font-size:0.95rem;min-height:44px;cursor:pointer;transition:all 0.2s"
      el.style.setProperty("--i", i)
      el.style.animationDelay = "calc(var(--i) * 60ms)"
      el.setAttribute("data-pair-idx", item.pairIdx)
      el.addEventListener("click", function (el, item) {
        return function () {
          if (pairedLeft[item.pairIdx]) return
          if (answering) return
          if (selectedLeftEl && selectedLeftEl !== el) {
            selectedLeftEl.style.background = "rgba(124,92,255,0.15)"
            selectedLeftEl.style.color = "var(--text)"
            selectedLeftEl.style.borderColor = "var(--brand)"
            selectedLeftEl.style.transform = ""
            selectedLeftEl.style.boxShadow = ""
          }
          selectedLeft = item
          selectedLeftEl = el
          el.style.background = "var(--brand)"
          el.style.color = "#fff"
          el.style.borderColor = "var(--brand)"
          el.style.transform = "scale(1.03)"
          el.style.boxShadow = "0 4px 12px rgba(124,92,255,0.3)"
        }
      }(el, item))
      leftCol.appendChild(el)
      leftEls.push(el)
    }

    for (var j = 0; j < shuffledRight.length; j++) {
      var item2 = shuffledRight[j]
      var el2 = document.createElement("button")
      el2.textContent = item2.text
      el2.style.cssText = "background:rgba(34,197,94,0.15);border:2px solid var(--success);color:var(--text);padding:0.9rem 1.2rem;border-radius:var(--radius-lg);font-size:0.95rem;min-height:44px;cursor:pointer;transition:all 0.2s"
      el2.style.setProperty("--i", j)
      el2.style.animationDelay = "calc(var(--i) * 60ms)"
      el2.setAttribute("data-pair-idx", item2.pairIdx)
      el2.addEventListener("click", function (el2, item2) {
        return function () {
          if (pairedRight[item2.pairIdx]) return
          if (answering) return
          if (!selectedLeft) return
          if (selectedLeft.pairIdx === item2.pairIdx) {
            pairedLeft[item2.pairIdx] = true
            pairedRight[item2.pairIdx] = true
            selectedLeftEl.style.background = "var(--success)"
            selectedLeftEl.style.color = "#fff"
            selectedLeftEl.style.borderColor = "var(--success)"
            selectedLeftEl.style.opacity = "0.9"
            selectedLeftEl.style.cursor = "default"
            selectedLeftEl.style.transform = ""
            selectedLeftEl.style.boxShadow = ""
            el2.style.background = "var(--success)"
            el2.style.color = "#fff"
            el2.style.borderColor = "var(--success)"
            el2.style.opacity = "0.9"
            el2.style.cursor = "default"
            el2.style.transform = ""
            el2.style.boxShadow = ""
            selectedLeft = null
            selectedLeftEl = null

            var arrow = document.createElement("div")
            arrow.textContent = "\u2194"
            arrow.style.cssText = "font-size:1.2rem;color:var(--success);font-weight:700"
            midCol.appendChild(arrow)

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
                showFeedback("✔ \u00a1Todos los pares correctos!", true)
                advanceAfter(1200, true)
              }
            }
          } else {
            wrongPairings++
            showFeedback("\u2757 Esos no van juntos", false)
            el2.style.borderColor = "var(--red)"
            selectedLeftEl.style.borderColor = "var(--red)"
            selectedLeftEl.style.transform = ""
            selectedLeftEl.style.boxShadow = ""
            el2.style.animation = "none"
            el2.offsetHeight
            el2.style.animation = "shake 0.4s ease"
            selectedLeftEl.style.animation = "none"
            selectedLeftEl.offsetHeight
            selectedLeftEl.style.animation = "shake 0.4s ease"
            setTimeout(function () {
              el2.style.borderColor = ""
              el2.style.background = "rgba(34,197,94,0.15)"
              el2.style.animation = ""
              if (selectedLeftEl) {
                selectedLeftEl.style.borderColor = ""
                selectedLeftEl.style.background = "rgba(124,92,255,0.15)"
                selectedLeftEl.style.animation = ""
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
    grid.appendChild(midCol)
    grid.appendChild(rightCol)
    ejContainer.appendChild(grid)
  }

  function renderOrdenar(ej) {
    var elementos = ej.elementos || []
    var correctOrder = elementos.slice()
    var shuffled = shuffle(elementos)
    var sequence = []

    var instr = document.createElement("p")
    instr.style.cssText = "font-weight:600;margin-bottom:0.75rem;color:var(--muted)"
    instr.textContent = "Toca los pasos en el orden correcto"
    ejContainer.appendChild(instr)

    var seqDiv = document.createElement("div")
    seqDiv.style.cssText = "background:rgba(124,92,255,0.05);border:2px dashed var(--brand);padding:1rem;min-height:120px;border-radius:var(--radius-lg);margin-bottom:1rem;display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center"
    var placeholder = document.createElement("span")
    placeholder.textContent = "Toca los chips para armar la secuencia..."
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
        ph.textContent = "Toca los chips para armar la secuencia..."
        ph.style.color = "var(--muted)"
        ph.style.fontSize = "0.85rem"
        seqDiv.appendChild(ph)
      } else {
        for (var s = 0; s < sequence.length; s++) {
          var tag = document.createElement("span")
          tag.textContent = (s + 1) + ". " + sequence[s]
          tag.style.cssText = "background:var(--brand);color:#fff;border:none;padding:0.5rem 1rem;border-radius:var(--radius);font-weight:600"
          seqDiv.appendChild(tag)
        }
      }
      var undoSpan = document.createElement("span")
      undoSpan.textContent = "\u21a9 Deshacer"
      undoSpan.style.cssText = "color:var(--brand);cursor:pointer;font-size:0.85rem;font-weight:600;padding:0.5rem 0.75rem;border-radius:var(--radius);transition:background 0.2s"
      undoSpan.addEventListener("mouseenter", function () { undoSpan.style.background = "rgba(124,92,255,0.1)" })
      undoSpan.addEventListener("mouseleave", function () { undoSpan.style.background = "" })
      undoSpan.addEventListener("click", undoOrdenar)
      seqDiv.appendChild(undoSpan)
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
        seqDiv.style.borderColor = "var(--success)"
        seqDiv.style.background = "rgba(34,197,94,0.05)"
        showFeedback("✔ ¡Orden correcto!", true)
        advanceAfter(1200, true)
      } else {
        seqDiv.style.borderColor = "var(--red)"
        seqDiv.style.background = "rgba(239,68,68,0.05)"
        seqDiv.style.animation = "none"
        seqDiv.offsetHeight
        seqDiv.style.animation = "shake 0.4s ease"
        var correctStr = correctOrder.join(" → ")
        showFeedback("❌ Incorrecto. El orden correcto es: " + correctStr, false)
        var savedSeq = sequence.slice()
        setTimeout(function () {
          sequence.length = 0
          for (var r = 0; r < savedSeq.length; r++) {
            for (var r2 = 0; r2 < chipEls.length; r2++) {
              if (chipEls[r2].getAttribute("data-word") === savedSeq[r] && chipEls[r2].style.display === "none") {
                chipEls[r2].style.display = ""
                chipEls[r2].style.opacity = ""
                chipEls[r2].style.pointerEvents = ""
                break
              }
            }
          }
          seqDiv.style.borderColor = "var(--brand)"
          seqDiv.style.background = "rgba(124,92,255,0.05)"
          seqDiv.style.animation = ""
          rebuildSequence()
          answering = false
          ejFeedback.innerHTML = ""
        }, 1200)
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
      chip.style.cssText = "background:var(--bg-card-hi);border:1px solid var(--line);padding:0.7rem 1.1rem;border-radius:var(--radius);font-weight:600;cursor:pointer;transition:all 0.2s;min-height:44px;font-size:0.95rem"
      chip.addEventListener("mouseenter", function (el) { return function () { if (el.style.display !== "none") { el.style.borderColor = "var(--brand)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 4px 12px rgba(124,92,255,0.2)" } } }(chip))
      chip.addEventListener("mouseleave", function (el) { return function () { el.style.borderColor = ""; el.style.transform = ""; el.style.boxShadow = "" } }(chip))
      chip.addEventListener("click", function (word, el) {
        return function () {
          if (answering) return
          addToSequence(word)
        }
      }(shuffled[w], chip))
      chipsDiv.appendChild(chip)
      chipEls.push(chip)
    }
    ejContainer.appendChild(chipsDiv)
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

    var cfg2 = window.DEV_SYSTEM_CONFIG || {}
    var xpPerLesson = cfg2.xpPerLesson || 50
    var xpPerFirstTry = cfg2.xpPerFirstTry || 10
    var xpGain = xpPerLesson + (firstTryCorrectCount * xpPerFirstTry)
    var xpChip = document.getElementById("completada-xp-chip")
    if (xpChip) xpChip.textContent = "⭐ +" + xpGain + " XP"

    if (cloudEnabled) {
      window.DevSystemCloud.setLessonProgress(email, lessonId, true).catch(function () {})
      window.DevSystemCloud.saveLessonStats(email, lessonId, firstTryCorrectCount, totalExercises).then(function () {
        window.DevSystemCloud.getAllLessonStats(email).then(function (allStats) {
          var total = 0
          for (var st = 0; st < allStats.length; st++) {
            total += xpPerLesson + (allStats[st].first_try_correct * xpPerFirstTry)
          }
          localStorage.setItem("devsystem_xp_" + email, total)
          var headerXp = document.getElementById("leccion-xp-chip")
          if (headerXp) {
            headerXp.textContent = "⭐ " + total + " XP"
            headerXp.classList.add("xp-chip-pop")
            setTimeout(function () { headerXp.classList.remove("xp-chip-pop") }, 500)
          }
        })
      })
    } else {
      var prevTotal = parseInt(localStorage.getItem("devsystem_xp_" + email) || "0", 10)
      var newTotal = prevTotal + xpGain
      localStorage.setItem("devsystem_xp_" + email, newTotal)
      var headerXp = document.getElementById("leccion-xp-chip")
      if (headerXp) {
        headerXp.textContent = "⭐ " + newTotal + " XP"
        headerXp.classList.add("xp-chip-pop")
        setTimeout(function () { headerXp.classList.remove("xp-chip-pop") }, 500)
      }
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
