window.DEV_SYSTEM_CONFIG = {
  mode: "local", // "local" | "cloud"

  // Mercado Libre payment links — add your links here when ready.
  // You can set one link per plan, one per month, or both.
  // Per-month links take priority over per-plan links.
  mercadolibre: {
    paymentLinks: {
      "Plan Base": "",        // fallback link for Plan Base
      "Plan Profesional": "", // fallback link for Plan Profesional
      "Plan Expert": "",      // fallback link for Plan Expert
    },
    paymentLinksByMonth: {
      // Plan Base (meses 1-4)
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      // Plan Profesional (meses 5-8)
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      // Plan Expert (meses 9-12)
      "9": "",
      "10": "",
      "11": "",
      "12": "",
    },
  },

  supabase: {
    url: "",
    anonKey: "",
  },
};
