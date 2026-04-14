(function () {
  var params = new URLSearchParams(window.location.search);
  var mode = params.get("mode");
  var prefEmail = params.get("email") || "";

  var tabLogin = document.getElementById("tab-login");
  var tabRegister = document.getElementById("tab-register");
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");
  var message = document.getElementById("login-message");

  var loginEmail = document.getElementById("login-email");
  var loginPassword = document.getElementById("login-password");
  var regName = document.getElementById("reg-name");
  var regEmail = document.getElementById("reg-email");
  var regPassword = document.getElementById("reg-password");
  var regPasswordConfirm = document.getElementById("reg-password-confirm");

  function activateTab(target) {
    var isLogin = target === "login";
    tabLogin.classList.toggle("active", isLogin);
    tabRegister.classList.toggle("active", !isLogin);
    loginForm.classList.toggle("active", isLogin);
    registerForm.classList.toggle("active", !isLogin);
    message.textContent = "";
  }

  tabLogin.addEventListener("click", function () {
    activateTab("login");
  });

  tabRegister.addEventListener("click", function () {
    activateTab("register");
  });

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    var email = loginEmail.value.trim().toLowerCase();
    var password = loginPassword.value;
    var result;

    if (window.DevSystemCloud && window.DevSystemCloud.isEnabled()) {
      result = await window.DevSystemCloud.signIn(email, password);
      if (result.ok) {
        var enrollment = await window.DevSystemCloud.getEnrollment(email);
        if (!enrollment || enrollment.paid !== true) {
          result = {
            ok: false,
            message: "Tu acceso no esta activo. Completa tu inscripcion.",
          };
          await window.DevSystemCloud.signOut();
        }
      }
    } else {
      result = window.DevSystemState.login(email, password);
    }

    if (!result.ok) {
      message.textContent = result.message;
      if (
        result.message.indexOf("inscripcion") >= 0 ||
        result.message.indexOf("pagos activos") >= 0
      ) {
        setTimeout(function () {
          window.location.href = "checkout.html";
        }, 1000);
      }
      return;
    }

    message.textContent = "Acceso correcto. Redirigiendo...";
    setTimeout(function () {
      window.location.href = "portal.html";
    }, 650);
  });

  registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    var password = regPassword.value;
    var password2 = regPasswordConfirm.value;

    if (password !== password2) {
      message.textContent = "Las contrasenas no coinciden.";
      return;
    }

    var result;
    var email = regEmail.value.trim().toLowerCase();
    var name = regName.value.trim();

    if (window.DevSystemCloud && window.DevSystemCloud.isEnabled()) {
      var enrollment = await window.DevSystemCloud.getEnrollment(email);
      if (!enrollment || enrollment.paid !== true) {
        result = {
          ok: false,
          message: "No hay pagos activos para este correo.",
        };
      } else {
        result = await window.DevSystemCloud.signUp(name, email, password);
      }
    } else {
      result = window.DevSystemState.registerUser({
        name: name,
        email: email,
        password: password,
      });
    }

    if (!result.ok) {
      message.textContent = result.message;
      if (
        result.message.indexOf("inscripcion") >= 0 ||
        result.message.indexOf("pagos activos") >= 0
      ) {
        setTimeout(function () {
          window.location.href = "checkout.html";
        }, 1200);
      }
      return;
    }

    if (window.DevSystemCloud && window.DevSystemCloud.isEnabled() && (!result.user || !result.user.email)) {
      message.textContent =
        "Cuenta creada. Revisa tu correo para confirmar acceso si tu proyecto Supabase lo requiere.";
      return;
    }

    message.textContent = "Cuenta activada. Bienvenido a DEV SYSTEM.";
    setTimeout(function () {
      window.location.href = "portal.html";
    }, 700);
  });

  if (prefEmail) {
    loginEmail.value = prefEmail;
    regEmail.value = prefEmail;
  }

  if (mode === "register") {
    activateTab("register");
  } else {
    activateTab("login");
  }
})();
