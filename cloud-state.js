(function () {
  var config = window.DEV_SYSTEM_CONFIG || {};
  var supabaseCfg = config.supabase || {};
  var mode = config.mode || "local";
  var client = null;

  function isEnabled() {
    return (
      mode === "cloud" &&
      typeof window.supabase !== "undefined" &&
      Boolean(supabaseCfg.url) &&
      Boolean(supabaseCfg.anonKey)
    );
  }

  function getClient() {
    if (!isEnabled()) return null;
    if (!client) {
      client = window.supabase.createClient(supabaseCfg.url, supabaseCfg.anonKey);
    }
    return client;
  }

  async function signUp(name, email, password) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { full_name: name },
      },
    });
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true, user: response.data.user };
  }

  async function signIn(email, password) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c.auth.signInWithPassword({ email: email, password: password });
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true, user: response.data.user };
  }

  async function signOut() {
    var c = getClient();
    if (!c) return { ok: false };
    await c.auth.signOut();
    return { ok: true };
  }

  async function getCurrentUser() {
    var c = getClient();
    if (!c) return null;
    var response = await c.auth.getUser();
    if (response.error || !response.data.user) return null;
    return response.data.user;
  }

  async function upsertEnrollment(data) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var payload = {
      email: String(data.email || "").toLowerCase(),
      full_name: data.fullName || "",
      phone: data.phone || "",
      plan: data.plan || "Plan Base",
      price_label: data.price || "",
      latest_month_id: Number(data.monthId) || null,
      paid: data.paid === undefined ? true : Boolean(data.paid),
      source: data.source || "stripe",
      status: data.status || null,
      updated_at: new Date().toISOString(),
    };
    var response = await c.from("enrollments").upsert(payload, { onConflict: "email" });
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function updateEnrollmentStatus(email, status) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c
      .from("enrollments")
      .update({ status: status, updated_at: new Date().toISOString() })
      .eq("email", String(email || "").toLowerCase());
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function saveExamResult(email, score) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c
      .from("enrollments")
      .update({
        exam_passed: true,
        exam_score: Number(score),
        exam_date: new Date().toISOString(),
        status: "aprobado",
        updated_at: new Date().toISOString(),
      })
      .eq("email", String(email || "").toLowerCase());
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function saveDocument(email, docType, filePath) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c
      .from("student_documents")
      .upsert(
        {
          email: String(email || "").toLowerCase(),
          doc_type: docType,
          file_path: filePath,
          uploaded_at: new Date().toISOString(),
        },
        { onConflict: "email,doc_type" }
      );
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function getDocuments(email) {
    var c = getClient();
    if (!c) return [];
    var response = await c
      .from("student_documents")
      .select("doc_type, file_path, uploaded_at")
      .eq("email", String(email || "").toLowerCase());
    if (response.error || !response.data) return [];
    return response.data;
  }

  async function saveGlossaryTerm(entry) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var payload = {
      email: String(entry.email || "").toLowerCase(),
      term: entry.term || "",
      definition: entry.definition || "",
      month_ref: entry.month_ref || null,
      known_term: Boolean(entry.known_term),
      reviewed: Boolean(entry.reviewed),
      created_at: new Date().toISOString(),
    };
    var response = await c.from("student_glossary").upsert(payload, {
      onConflict: "email,term",
    });
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function getGlossaryTerms(email) {
    var c = getClient();
    if (!c) return [];
    var response = await c
      .from("student_glossary")
      .select("*")
      .eq("email", String(email || "").toLowerCase())
      .order("reviewed", { ascending: true })
      .order("created_at", { ascending: false });
    if (response.error || !response.data) return [];
    return response.data;
  }

  async function setGlossaryReviewed(email, term, reviewed) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c
      .from("student_glossary")
      .update({ reviewed: Boolean(reviewed), updated_at: new Date().toISOString() })
      .eq("email", String(email || "").toLowerCase())
      .eq("term", term);
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function deleteGlossaryTerm(email, term) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c
      .from("student_glossary")
      .delete()
      .eq("email", String(email || "").toLowerCase())
      .eq("term", term);
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function saveLessonStats(email, lessonId, firstTryCorrect, totalExercises) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c.from("lesson_stats").upsert(
      {
        email: String(email || "").toLowerCase(),
        lesson_id: lessonId,
        first_try_correct: Number(firstTryCorrect),
        total_exercises: Number(totalExercises),
        completed_at: new Date().toISOString(),
      },
      { onConflict: "email,lesson_id" }
    );
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function getAllLessonStats(email) {
    var c = getClient();
    if (!c) return [];
    var response = await c
      .from("lesson_stats")
      .select("*")
      .eq("email", String(email || "").toLowerCase());
    if (response.error || !response.data) return [];
    return response.data;
  }

  async function getStreakDays(email) {
    var c = getClient();
    if (!c) return 0;
    var response = await c.rpc("get_streak_days", {
      p_email: String(email || "").toLowerCase(),
    });
    if (!response.error && typeof response.data === "number") return response.data;
    var fallback = await c
      .from("lesson_stats")
      .select("completed_at")
      .eq("email", String(email || "").toLowerCase())
      .order("completed_at", { ascending: false });
    if (fallback.error || !fallback.data || fallback.data.length === 0) return 0;
    var dates = [];
    for (var d = 0; d < fallback.data.length; d++) {
      var dt = new Date(fallback.data[d].completed_at);
      var dateStr = dt.toISOString().slice(0, 10);
      if (dates.indexOf(dateStr) === -1) dates.push(dateStr);
    }
    dates.sort().reverse();
    var streak = 0;
    var today = new Date();
    var todayStr = today.toISOString().slice(0, 10);
    var yesterdayStr = new Date(today.getTime() - 86400000).toISOString().slice(0, 10);
    var expected = dates[0] === todayStr ? todayStr : dates[0] === yesterdayStr ? yesterdayStr : null;
    if (!expected) return 0;
    for (var s = 0; s < dates.length; s++) {
      if (dates[s] === expected) { streak++; expected = new Date(new Date(expected).getTime() - 86400000).toISOString().slice(0, 10); }
      else break;
    }
    return streak;
  }

  async function uploadDocumentFile(email, docType, file) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var filePath = String(email || "").toLowerCase() + "/" + docType;
    var response = await c.storage
      .from("documentos-alumnos")
      .upload(filePath, file, { upsert: true });
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true, path: filePath };
  }

  async function getEnrollment(email) {
    var c = getClient();
    if (!c) return null;
    var response = await c
      .from("enrollments")
      .select("*")
      .eq("email", String(email || "").toLowerCase())
      .maybeSingle();
    if (response.error) return null;
    return response.data;
  }

  async function recordMonthlyPayment(data) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var payload = {
      email: String(data.email || "").toLowerCase(),
      month_id: Number(data.monthId),
      plan: data.plan || "Plan Base",
      price_label: data.price || "",
      status: "paid",
      source: data.source || "stripe",
      updated_at: new Date().toISOString(),
    };
    var response = await c.from("monthly_payments").upsert(payload, {
      onConflict: "email,month_id",
    });
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function getPaidMonthIds(email) {
    var c = getClient();
    if (!c) return [];
    var response = await c
      .from("monthly_payments")
      .select("month_id,status")
      .eq("email", String(email || "").toLowerCase())
      .eq("status", "paid");
    if (response.error || !response.data) return [];
    var out = [];
    var seen = {};
    for (var i = 0; i < response.data.length; i += 1) {
      var month = Number(response.data[i].month_id);
      if (!seen[month]) {
        seen[month] = true;
        out.push(month);
      }
    }
    out.sort(function (a, b) {
      return a - b;
    });
    return out;
  }

  async function setLessonProgress(email, lessonId, completed) {
    var c = getClient();
    if (!c) return { ok: false, message: "Cloud no configurado." };
    var response = await c.from("lesson_progress").upsert(
      {
        email: String(email || "").toLowerCase(),
        lesson_id: lessonId,
        completed: Boolean(completed),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email,lesson_id" }
    );
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
  }

  async function getProgressMap(email) {
    var c = getClient();
    if (!c) return {};
    var response = await c
      .from("lesson_progress")
      .select("lesson_id, completed")
      .eq("email", String(email || "").toLowerCase());
    if (response.error || !response.data) return {};
    var map = {};
    for (var i = 0; i < response.data.length; i += 1) {
      map[response.data[i].lesson_id] = Boolean(response.data[i].completed);
    }
    return map;
  }

  window.DevSystemCloud = {
    isEnabled: isEnabled,
    signUp: signUp,
    signIn: signIn,
    signOut: signOut,
    getCurrentUser: getCurrentUser,
    upsertEnrollment: upsertEnrollment,
    getEnrollment: getEnrollment,
    recordMonthlyPayment: recordMonthlyPayment,
    getPaidMonthIds: getPaidMonthIds,
    setLessonProgress: setLessonProgress,
    getProgressMap: getProgressMap,
    updateEnrollmentStatus: updateEnrollmentStatus,
    saveExamResult: saveExamResult,
    saveDocument: saveDocument,
    getDocuments: getDocuments,
    uploadDocumentFile: uploadDocumentFile,
    saveGlossaryTerm: saveGlossaryTerm,
    getGlossaryTerms: getGlossaryTerms,
    setGlossaryReviewed: setGlossaryReviewed,
    deleteGlossaryTerm: deleteGlossaryTerm,
    saveLessonStats: saveLessonStats,
    getAllLessonStats: getAllLessonStats,
    getStreakDays: getStreakDays,
  };
})();
