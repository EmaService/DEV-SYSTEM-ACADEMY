(function () {
  var params = new URLSearchParams(window.location.search);
  var requestedVariant = (params.get("v") || "").toLowerCase();
  var storedVariant = localStorage.getItem("devsystem_ab_variant");
  var variant =
    requestedVariant === "a" || requestedVariant === "b"
      ? requestedVariant
      : storedVariant === "a" || storedVariant === "b"
      ? storedVariant
      : Math.random() < 0.5
      ? "a"
      : "b";

  localStorage.setItem("devsystem_ab_variant", variant);

  var variants = {
    a: {
      theme: "blue",
      heroTitle: "Aprende a construir software de verdad.",
      heroSubtitle:
        "Domina los fundamentos que conectan frontend, backend, bases de datos e infraestructura para crear productos funcionales, escalables y profesionales.",
      heroCtaPrimary: "Quiero empezar",
      heroCtaSecondary: "Ver plan completo",
      finalTitle: "Construye la base técnica que te abre oportunidades reales.",
      finalSubtitle:
        "Empieza hoy tu formación en DEV SYSTEM y desarrolla la capacidad de crear software con criterio profesional.",
      finalCtaPrimary: "Quiero unirme a DEV SYSTEM",
      finalCtaSecondary: "Ya soy alumno",
    },
    b: {
      theme: "green",
      heroTitle: "Domina la ingeniería de software desde los fundamentos.",
      heroSubtitle:
        "Aprende a diseñar, construir y desplegar sistemas completos para convertir conocimiento técnico en resultados reales.",
      heroCtaPrimary: "Aplicar a la cohorte",
      heroCtaSecondary: "Revisar roadmap",
      finalTitle: "Pasa de aprender por partes a construir sistemas completos.",
      finalSubtitle:
        "Reserva tu lugar en la próxima cohorte de DEV SYSTEM y desarrolla una habilidad técnica con valor profesional real.",
      finalCtaPrimary: "Reservar mi lugar",
      finalCtaSecondary: "Ya soy alumno",
    },
  };

  var content = variants[variant];
  document.documentElement.setAttribute("data-theme", content.theme);

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  setText("hero-title", content.heroTitle);
  setText("hero-subtitle", content.heroSubtitle);
  setText("hero-cta-primary", content.heroCtaPrimary);
  setText("hero-cta-secondary", content.heroCtaSecondary);
  setText("final-title", content.finalTitle);
  setText("final-subtitle", content.finalSubtitle);
  setText("final-cta-primary", content.finalCtaPrimary);
  setText("final-cta-secondary", content.finalCtaSecondary);
})();
