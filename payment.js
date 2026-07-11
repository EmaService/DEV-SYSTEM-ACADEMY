window.DevSystemPago = {
  iniciarPago: async function (monthId, email, fullName, phone, containerId) {
    var cfg = window.DEV_SYSTEM_CONFIG || {};
    var container = document.getElementById(containerId);
    if (!container) throw new Error("Contenedor " + containerId + " no encontrado");

    var price = cfg.monthlyPrice || 7000;

    var pending = {
      fullName: fullName,
      email: email,
      phone: phone,
      plan: "Plan Base",
      price: price,
      monthId: Number(monthId),
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("devsystem_pending_checkout", JSON.stringify(pending));

    container.innerHTML = "<p class='small' style='margin-top:0.5rem'>Preparando pago...</p>";

    var res = await fetch("/.netlify/functions/create-preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        monthId: String(monthId),
        email: email,
        fullName: fullName,
        phone: phone,
      }),
    });
    var data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al crear preferencia");

    container.innerHTML = "";
    var mp = new MercadoPago(cfg.mercadoPagoPublicKey, { locale: "es-MX" });
    await mp.bricks().create("wallet", containerId, {
      initialization: { preferenceId: data.preferenceId },
      customization: { texts: { valueProp: "smart_option" } },
    });
  },
};
