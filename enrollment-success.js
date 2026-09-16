(async function () {
  var msg = document.getElementById("success-message");
  var cta = document.getElementById("success-cta");
  var raw = localStorage.getItem("devsystem_pending_checkout");

  var data = null;
  if (raw) {
    try {
      data = JSON.parse(raw);
    } catch (error) {
      data = null;
    }
  }

  var cloudEnabled = window.DevSystemCloud && window.DevSystemCloud.isEnabled();

  async function mostrarUltimoPago(email) {
    if (!cloudEnabled || !window.DevSystemCloud.getPaymentDates) {
      msg.textContent = "Estamos confirmando tu pago. Si no ves el acceso en unos minutos, escríbenos.";
      return;
    }
    var pagos = await window.DevSystemCloud.getPaymentDates(email).catch(function () { return []; });
    if (pagos && pagos.length > 0) {
      var ultimo = 0;
      for (var i = 0; i < pagos.length; i++) {
        if (Number(pagos[i].month_id) > ultimo) ultimo = Number(pagos[i].month_id);
      }
      if (ultimo > 0) {
        msg.textContent = "Tu pago fue confirmado. Ya tienes acceso al Módulo " + ultimo + ".";
        cta.href = "portal.html";
        cta.textContent = "Ir a mi portal";
        return;
      }
    }
    msg.textContent = "Estamos confirmando tu pago. Si no ves el acceso en unos minutos, escríbenos.";
  }

  /* Caso: localStorage vacío (la causa del problema original). No mostrar error. */
  if (!data || !data.email) {
    var maybeEmail = null;
    if (cloudEnabled) {
      var user = await window.DevSystemCloud.getCurrentUser().catch(function () { return null; });
      if (user && user.email) maybeEmail = user.email;
    }
    if (maybeEmail) {
      await mostrarUltimoPago(maybeEmail);
    } else {
      msg.textContent = "Estamos confirmando tu pago. Si no ves el acceso en unos minutos, escríbenos.";
    }
    return;
  }

  var localResult = window.DevSystemState.registerMonthlyPayment({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    plan: data.plan,
    price: data.price,
    monthId: data.monthId,
  });

  var yaPagado = localResult && !localResult.ok && localResult.message && localResult.message.indexOf("ya esta pagado") !== -1;

  if (cloudEnabled) {
    if (!yaPagado) {
      await window.DevSystemCloud.recordMonthlyPayment({
        email: data.email,
        monthId: data.monthId,
        plan: data.plan,
        price: data.price,
        source: "stripe_success_return",
      }).catch(function () {});

      await window.DevSystemCloud.upsertEnrollment({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        plan: data.plan,
        price: data.price,
        monthId: data.monthId,
        source: "stripe_success_return",
        status: "activo",
        paid: true,
      }).catch(function () {});
    }
  }

  localStorage.removeItem("devsystem_pending_checkout");
  msg.textContent = "Tu pago fue confirmado. Ya tienes acceso al Módulo " + data.monthId + ".";
  cta.href = "portal.html";
  cta.textContent = "Ir a mi portal";
})();