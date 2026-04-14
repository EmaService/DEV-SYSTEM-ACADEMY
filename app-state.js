(function () {
  var STORE_KEY = "devsystem_store_v3";
  var SESSION_KEY = "devsystem_session_v3";

  var monthlyProgram = [
    { monthId: 1,  phaseId: "p1", phaseName: "Etapa 1", planName: "Plan Base",        monthName: "Mes 1 · Fundamentos Web",          price: "$7,900 MXN",  priceNum: 7900  },
    { monthId: 2,  phaseId: "p1", phaseName: "Etapa 1", planName: "Plan Base",        monthName: "Mes 2 · JavaScript Aplicado",      price: "$9,100 MXN",  priceNum: 9100  },
    { monthId: 3,  phaseId: "p1", phaseName: "Etapa 1", planName: "Plan Base",        monthName: "Mes 3 · Backend Inicial",          price: "$10,500 MXN", priceNum: 10500 },
    { monthId: 4,  phaseId: "p1", phaseName: "Etapa 1", planName: "Plan Base",        monthName: "Mes 4 · Bases de Datos",           price: "$11,900 MXN", priceNum: 11900 },
    { monthId: 5,  phaseId: "p2", phaseName: "Etapa 2", planName: "Plan Profesional", monthName: "Mes 5 · Arquitectura API",         price: "$13,100 MXN", priceNum: 13100 },
    { monthId: 6,  phaseId: "p2", phaseName: "Etapa 2", planName: "Plan Profesional", monthName: "Mes 6 · Frontend Avanzado",        price: "$14,500 MXN", priceNum: 14500 },
    { monthId: 7,  phaseId: "p2", phaseName: "Etapa 2", planName: "Plan Profesional", monthName: "Mes 7 · Cloud y Deploy",           price: "$15,900 MXN", priceNum: 15900 },
    { monthId: 8,  phaseId: "p2", phaseName: "Etapa 2", planName: "Plan Profesional", monthName: "Mes 8 · Testing y Calidad",        price: "$17,100 MXN", priceNum: 17100 },
    { monthId: 9,  phaseId: "p3", phaseName: "Etapa 3", planName: "Plan Expert",      monthName: "Mes 9 · Integración Inteligente",  price: "$18,500 MXN", priceNum: 18500 },
    { monthId: 10, phaseId: "p3", phaseName: "Etapa 3", planName: "Plan Expert",      monthName: "Mes 10 · Automatización",          price: "$19,900 MXN", priceNum: 19900 },
    { monthId: 11, phaseId: "p3", phaseName: "Etapa 3", planName: "Plan Expert",      monthName: "Mes 11 · Escalabilidad y Producto", price: "$21,100 MXN", priceNum: 21100 },
    { monthId: 12, phaseId: "p3", phaseName: "Etapa 3", planName: "Plan Expert",      monthName: "Mes 12 · SaaS Final",              price: "$21,900 MXN", priceNum: 21900 },
  ];

  var curriculum = monthlyProgram.map(function (m) {
    return {
      id: "m" + m.monthId,
      monthId: m.monthId,
      phaseName: m.phaseName,
      planName: m.planName,
      name: m.monthName,
      duration: "1 mes",
      outcome: "Resultado mensual aplicado a producto real.",
      lessons: [
        { id: "m" + m.monthId + "-l1", title: "Clase tecnica principal" },
        { id: "m" + m.monthId + "-l2", title: "Laboratorio de implementacion" },
        { id: "m" + m.monthId + "-l3", title: "Entrega y retroalimentacion" },
      ],
    };
  });

  function baseStore() {
    return { users: [], payments: [], progress: {} };
  }

  function readStore() {
    var raw = localStorage.getItem(STORE_KEY);
    if (!raw) return baseStore();
    try {
      var parsed = JSON.parse(raw);
      return {
        users: parsed.users || [],
        payments: parsed.payments || [],
        progress: parsed.progress || {},
      };
    } catch (error) {
      return baseStore();
    }
  }

  function writeStore(store) {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  }

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  function findUserByEmail(email) {
    var store = readStore();
    var normalized = normalizeEmail(email);
    for (var i = 0; i < store.users.length; i += 1) {
      if (normalizeEmail(store.users[i].email) === normalized) return store.users[i];
    }
    return null;
  }

  function getPaymentsByEmail(email) {
    var store = readStore();
    var normalized = normalizeEmail(email);
    var out = [];
    for (var i = 0; i < store.payments.length; i += 1) {
      if (normalizeEmail(store.payments[i].email) === normalized && store.payments[i].status === "paid") {
        out.push(store.payments[i]);
      }
    }
    return out;
  }

  function getPaidMonthIds(email) {
    var payments = getPaymentsByEmail(email);
    var set = {};
    for (var i = 0; i < payments.length; i += 1) set[payments[i].monthId] = true;
    return Object.keys(set).map(function (x) { return Number(x); }).sort(function (a, b) { return a - b; });
  }

  function hasEnrollment(email) {
    return getPaidMonthIds(email).length > 0;
  }

  function getEnrollment(email) {
    var paidMonths = getPaidMonthIds(email);
    if (paidMonths.length === 0) return null;
    var latestMonth = paidMonths[paidMonths.length - 1];
    var monthMeta = getMonthById(latestMonth);
    return {
      paid: true,
      latestMonthId: latestMonth,
      monthsPaid: paidMonths.length,
      activeMonths: paidMonths,
      plan: monthMeta ? monthMeta.planName : "Plan Base",
      phaseName: monthMeta ? monthMeta.phaseName : "Etapa 1",
      price: monthMeta ? monthMeta.price : "-",
    };
  }

  function getMonthById(monthId) {
    for (var i = 0; i < monthlyProgram.length; i += 1) {
      if (Number(monthlyProgram[i].monthId) === Number(monthId)) return monthlyProgram[i];
    }
    return null;
  }

  function registerMonthlyPayment(payload) {
    var store = readStore();
    var email = normalizeEmail(payload.email);
    var monthId = Number(payload.monthId);
    var monthMeta = getMonthById(monthId);
    if (!monthMeta) return { ok: false, message: "Mes invalido." };

    for (var i = 0; i < store.payments.length; i += 1) {
      var p = store.payments[i];
      if (normalizeEmail(p.email) === email && Number(p.monthId) === monthId && p.status === "paid") {
        return { ok: false, message: "Este mes ya esta pagado para este correo." };
      }
    }

    store.payments.push({
      id: "pay_" + Date.now(),
      email: email,
      fullName: payload.fullName || "",
      phone: payload.phone || "",
      monthId: monthId,
      monthName: monthMeta.monthName,
      plan: monthMeta.planName,
      phaseName: monthMeta.phaseName,
      amountLabel: monthMeta.price,
      status: "paid",
      createdAt: new Date().toISOString(),
    });
    writeStore(store);
    return { ok: true };
  }

  function getCurrentUser() {
    var sessionRaw = localStorage.getItem(SESSION_KEY);
    if (!sessionRaw) return null;
    try {
      var session = JSON.parse(sessionRaw);
      if (!session.email) return null;
      return findUserByEmail(session.email);
    } catch (error) {
      return null;
    }
  }

  function setSession(email) {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ email: normalizeEmail(email), loggedAt: new Date().toISOString() })
    );
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
  }

  function registerUser(data) {
    var email = normalizeEmail(data.email);
    var store = readStore();
    if (!hasEnrollment(email)) return { ok: false, message: "No hay pagos activos para este correo." };
    for (var i = 0; i < store.users.length; i += 1) {
      if (normalizeEmail(store.users[i].email) === email) return { ok: false, message: "Este correo ya tiene cuenta activa." };
    }
    var user = {
      id: "usr_" + Date.now(),
      name: data.name || "",
      email: email,
      password: String(data.password || ""),
      createdAt: new Date().toISOString(),
    };
    store.users.push(user);
    writeStore(store);
    setSession(email);
    return { ok: true, user: user };
  }

  function login(email, password) {
    var user = findUserByEmail(email);
    if (!user) return { ok: false, message: "No existe cuenta con este correo." };
    if (String(user.password) !== String(password)) return { ok: false, message: "La contrasena no coincide." };
    if (!hasEnrollment(email)) return { ok: false, message: "No hay pagos activos para este correo." };
    setSession(email);
    return { ok: true, user: user };
  }

  function lessonMonthIdFromLessonId(lessonId) {
    var str = String(lessonId || "");
    if (str.indexOf("m") !== 0) return null;
    var monthChunk = str.split("-")[0].replace("m", "");
    return Number(monthChunk);
  }

  function setLessonCompletion(email, lessonId, completed) {
    var allowed = getPaidMonthIds(email);
    var monthId = lessonMonthIdFromLessonId(lessonId);
    if (allowed.indexOf(monthId) === -1) return false;
    var store = readStore();
    var key = normalizeEmail(email);
    if (!store.progress[key]) store.progress[key] = {};
    store.progress[key][lessonId] = Boolean(completed);
    writeStore(store);
    return Boolean(completed);
  }

  function getProgress(email) {
    var store = readStore();
    return store.progress[normalizeEmail(email)] || {};
  }

  function clearProgress(email) {
    var store = readStore();
    store.progress[normalizeEmail(email)] = {};
    writeStore(store);
  }

  function getUnlockedLessons(email) {
    var allowed = getPaidMonthIds(email);
    var allowedMap = {};
    for (var i = 0; i < allowed.length; i += 1) allowedMap[allowed[i]] = true;
    var lessons = [];
    for (var j = 0; j < curriculum.length; j += 1) {
      if (!allowedMap[curriculum[j].monthId]) continue;
      for (var k = 0; k < curriculum[j].lessons.length; k += 1) lessons.push(curriculum[j].lessons[k].id);
    }
    return lessons;
  }

  function getProgressSummary(email) {
    var doneMap = getProgress(email);
    var unlocked = getUnlockedLessons(email);
    var total = unlocked.length;
    var done = 0;
    for (var i = 0; i < unlocked.length; i += 1) {
      if (doneMap[unlocked[i]]) done += 1;
    }
    return { done: done, total: total, percent: total === 0 ? 0 : Math.round((done / total) * 100) };
  }

  function isEligibleCertificate(email) {
    var enrollment = getEnrollment(email);
    if (!enrollment) return false;
    if (enrollment.activeMonths.length < 12) return false;
    return getProgressSummary(email).percent >= 85;
  }

  function getProgramByPlan() {
    var groups = { "Plan Base": [], "Plan Profesional": [], "Plan Expert": [] };
    for (var i = 0; i < monthlyProgram.length; i += 1) {
      groups[monthlyProgram[i].planName].push(monthlyProgram[i]);
    }
    return groups;
  }

  function resetAll() {
    localStorage.removeItem(STORE_KEY);
    localStorage.removeItem(SESSION_KEY);
  }

  window.DevSystemState = {
    getMonthlyProgram: function () { return monthlyProgram; },
    getProgramByPlan: getProgramByPlan,
    getCurriculum: function () { return curriculum; },
    getCurrentUser: getCurrentUser,
    logout: logout,
    registerUser: registerUser,
    login: login,
    hasEnrollment: hasEnrollment,
    getEnrollment: getEnrollment,
    getPaidMonthIds: getPaidMonthIds,
    registerMonthlyPayment: registerMonthlyPayment,
    getProgress: getProgress,
    setLessonCompletion: setLessonCompletion,
    clearProgress: clearProgress,
    getProgressSummary: getProgressSummary,
    isEligibleCertificate: isEligibleCertificate,
    resetAll: resetAll,
  };
})();
