(function () {
  var cfg = window.DEV_SYSTEM_CONFIG || {};

  var cards = Array.prototype.slice.call(document.querySelectorAll(".plan-card"));
  var selectedPlan = document.getElementById("selected-plan");
  var checkoutButton = document.getElementById("checkout-button");
  var checkoutMessage = document.getElementById("checkout-message");
  var inputName = document.getElementById("buyer-name");
  var inputEmail = document.getElementById("buyer-email");
  var inputPhone = document.getElementById("buyer-phone");

  var currentSelection = {
    plan: "Plan Base",
  };

  function selectCard(card) {
    cards.forEach(function (item) {
      item.classList.remove("selected");
    });
    card.classList.add("selected");
    currentSelection.plan = card.getAttribute("data-plan") || "Plan Base";
    selectedPlan.textContent = currentSelection.plan;
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      selectCard(card);
    });
  });

  checkoutButton.addEventListener("click", async function () {
    var fullName = inputName.value.trim();
    var email = inputEmail.value.trim().toLowerCase();
    var phone = inputPhone.value.trim();

    if (!fullName || !email || !phone) {
      checkoutMessage.textContent = "Completa tus datos para enviar la solicitud.";
      return;
    }
    if (email.indexOf("@") === -1) {
      checkoutMessage.textContent = "Ingresa un correo valido.";
      return;
    }

    var price = cfg.monthlyPrice || 7000;

    var pending = {
      fullName: fullName,
      email: email,
      phone: phone,
      plan: currentSelection.plan,
      price: price,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("devsystem_pending_checkout", JSON.stringify(pending));

    checkoutButton.disabled = true;
    checkoutButton.textContent = "Enviando solicitud...";
    checkoutMessage.textContent = "";

    try {
      if (cfg.mode === "cloud" && window.DevSystemCloud && window.DevSystemCloud.isEnabled()) {
        var result = await window.DevSystemCloud.upsertEnrollment({
          fullName: fullName,
          email: email,
          phone: phone,
          plan: currentSelection.plan,
          price: price,
          status: "aplicante",
          paid: false,
        });
        if (!result.ok) throw new Error(result.message);
      }

      checkoutButton.style.display = "none";
      checkoutMessage.innerHTML =
        "Solicitud registrada. Activa tu cuenta para continuar con tu proceso." +
        ' <a href="login.html?mode=register" class="btn btn-block" style="margin-top:0.8rem;text-align:center">Activar cuenta</a>';
    } catch (err) {
      checkoutButton.disabled = false;
      checkoutButton.textContent = "Enviar solicitud";
      checkoutMessage.textContent = "Error: " + err.message + ". Intenta de nuevo.";
    }
  });

  selectedPlan.textContent = currentSelection.plan;
})();
