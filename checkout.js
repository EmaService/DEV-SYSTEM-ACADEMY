(function () {
  var cfg = window.DEV_SYSTEM_CONFIG || {};
  var mlCfg = cfg.mercadolibre || {};
  var monthlyLinks = mlCfg.paymentLinksByMonth || {};
  var monthlyProgram = window.DevSystemState.getMonthlyProgram();

  var cards = Array.prototype.slice.call(document.querySelectorAll(".plan-card"));
  var selectedPlan = document.getElementById("selected-plan");
  var selectedPrice = document.getElementById("selected-price");
  var selectedMonth = document.getElementById("selected-month");
  var checkoutButton = document.getElementById("checkout-button");
  var checkoutMessage = document.getElementById("checkout-message");
  var inputName = document.getElementById("buyer-name");
  var inputEmail = document.getElementById("buyer-email");
  var inputPhone = document.getElementById("buyer-phone");

  var planMonthMap = {
    "Plan Base": [1, 2, 3, 4],
    "Plan Profesional": [5, 6, 7, 8],
    "Plan Expert": [9, 10, 11, 12],
  };

  var currentSelection = {
    plan: "Plan Base",
    price: "$5,000 MXN",
  };

  function getMonthMeta(monthId) {
    for (var i = 0; i < monthlyProgram.length; i += 1) {
      if (Number(monthlyProgram[i].monthId) === Number(monthId)) return monthlyProgram[i];
    }
    return null;
  }

  function renderMonthOptions(plan) {
    var months = planMonthMap[plan] || [1];
    selectedMonth.innerHTML = "";
    for (var i = 0; i < months.length; i += 1) {
      var option = document.createElement("option");
      option.value = String(months[i]);
      option.textContent = "Mes " + months[i];
      selectedMonth.appendChild(option);
    }
  }

  function renderSelection() {
    selectedPlan.textContent = currentSelection.plan;
    renderMonthOptions(currentSelection.plan);
    var monthMeta = getMonthMeta(Number(selectedMonth.value));
    currentSelection.price = monthMeta ? monthMeta.price : currentSelection.price;
    selectedPrice.textContent = currentSelection.price;
  }

  function selectCard(card) {
    cards.forEach(function (item) {
      item.classList.remove("selected");
    });
    card.classList.add("selected");
    currentSelection.plan = card.getAttribute("data-plan") || "Plan Base";
    renderSelection();
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      selectCard(card);
    });
  });

  selectedMonth.addEventListener("change", function () {
    var monthMeta = getMonthMeta(Number(selectedMonth.value));
    currentSelection.price = monthMeta ? monthMeta.price : currentSelection.price;
    selectedPrice.textContent = currentSelection.price;
  });

  checkoutButton.addEventListener("click", async function () {
    var fullName = inputName.value.trim();
    var email = inputEmail.value.trim().toLowerCase();
    var phone = inputPhone.value.trim();
    var monthId = Number(selectedMonth.value);

    if (!fullName || !email || !phone) {
      checkoutMessage.textContent = "Completa tus datos para confirmar el pago.";
      return;
    }
    if (email.indexOf("@") === -1) {
      checkoutMessage.textContent = "Ingresa un correo valido.";
      return;
    }

    var pending = {
      fullName: fullName,
      email: email,
      phone: phone,
      plan: currentSelection.plan,
      price: currentSelection.price,
      monthId: monthId,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("devsystem_pending_checkout", JSON.stringify(pending));

    var selectedLink = monthlyLinks[String(monthId)];
    if (selectedLink) {
      checkoutMessage.textContent = "Redirigiendo a Mercado Libre para pago seguro...";
      checkoutButton.disabled = true;
      checkoutButton.textContent = "Abriendo Mercado Libre...";
      window.location.href = selectedLink;
      return;
    }

    var result = window.DevSystemState.registerMonthlyPayment(pending);
    if (!result.ok) {
      checkoutMessage.textContent = result.message;
      return;
    }

    if (window.DevSystemCloud && window.DevSystemCloud.isEnabled()) {
      await window.DevSystemCloud.recordMonthlyPayment({
        email: email,
        monthId: monthId,
        plan: currentSelection.plan,
        price: currentSelection.price,
        source: "local_fallback_checkout",
      });
      await window.DevSystemCloud.upsertEnrollment({
        fullName: fullName,
        email: email,
        phone: phone,
        plan: currentSelection.plan,
        price: currentSelection.price,
        monthId: monthId,
        source: "local_fallback_checkout",
      });
    }

    checkoutMessage.textContent =
      "Pago mensual registrado. Continuamos con activacion de cuenta.";
    setTimeout(function () {
      window.location.href = "login.html?mode=register&email=" + encodeURIComponent(email);
    }, 850);
  });

  renderSelection();
})();
