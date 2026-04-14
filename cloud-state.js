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
      paid: true,
      source: data.source || "stripe",
      updated_at: new Date().toISOString(),
    };
    var response = await c.from("enrollments").upsert(payload, { onConflict: "email" });
    if (response.error) return { ok: false, message: response.error.message };
    return { ok: true };
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
  };
})();
