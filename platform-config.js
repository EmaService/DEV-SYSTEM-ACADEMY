window.DEV_SYSTEM_CONFIG = {
  mode: "local", // "local" | "cloud"

  // Mercado Libre payment links — add your links here when ready.
  // You can set one link per plan, one per month, or both.
  // Per-month links take priority over per-plan links.
  mercadolibre: {
    certificationLink: "https://mpago.la/1RC5ino", // Certificación mensual $3,000 MXN
    paymentLinksByMonth: {
      "1":  "https://mpago.la/1DGj2tW",  // Plan Base · Mes 1  · $7,900
      "2":  "https://mpago.la/2ZAwPVP",  // Plan Base · Mes 2  · $9,100
      "3":  "https://mpago.la/231p9z8",  // Plan Base · Mes 3  · $10,500
      "4":  "https://mpago.la/1FN2TdN",  // Plan Base · Mes 4  · $11,900
      "5":  "https://mpago.la/26bWmu4",  // Plan Profesional · Mes 5  · $13,100
      "6":  "https://mpago.la/1B7JsFU",  // Plan Profesional · Mes 6  · $14,500
      "7":  "https://mpago.la/1GA5GpV",  // Plan Profesional · Mes 7  · $15,900
      "8":  "https://mpago.la/2T9NF3E",  // Plan Profesional · Mes 8  · $17,100
      "9":  "https://mpago.la/2qfWkd7",  // Plan Expert · Mes 9  · $18,500
      "10": "https://mpago.la/2F6KxUa",  // Plan Expert · Mes 10 · $19,900
      "11": "https://mpago.la/1ip3trM",  // Plan Expert · Mes 11 · $21,100
      "12": "https://mpago.la/2JLFfh6",  // Plan Expert · Mes 12 · $21,900
    },
  },

  supabase: {
    url: "",
    anonKey: "",
  },
};
