(async function () {
  var msg = document.getElementById("success-message");
  var cta = document.getElementById("success-cta");
  var raw = localStorage.getItem("devsystem_pending_checkout");

  if (!raw) {
    msg.textContent = "No encontramos una compra reciente en este navegador.";
    return;
  }

  var data;
  try {
    data = JSON.parse(raw);
  } catch (error) {
    msg.textContent = "No se pudo procesar el registro de compra.";
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

  if (!localResult.ok && localResult.message.indexOf("ya esta pagado") === -1) {
    msg.textContent = localResult.message;
    return;
  }

  if (window.DevSystemCloud && window.DevSystemCloud.isEnabled()) {
    await window.DevSystemCloud.recordMonthlyPayment({
      email: data.email,
      monthId: data.monthId,
      plan: data.plan,
      price: data.price,
      source: "stripe_success_return",
    });

    await window.DevSystemCloud.upsertEnrollment({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      plan: data.plan,
      price: data.price,
      monthId: data.monthId,
      source: "stripe_success_return",
    });
  }

  localStorage.removeItem("devsystem_pending_checkout");
  msg.textContent = "Pago del mes " + data.monthId + " registrado para: " + data.email;
  cta.href = "login.html?mode=register&email=" + encodeURIComponent(data.email);
})();
