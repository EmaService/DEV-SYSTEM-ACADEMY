window.DEV_SYSTEM_CONFIG = {
  mode: "local", // "local" | "cloud"
  stripe: {
    // If your pricing changes every month, prefer paymentLinksByMonth (1..12).
    // If you only have one link per plan, paymentLinks works as fallback.
    paymentLinks: {
      "Plan Base": "",
      "Plan Profesional": "",
      "Plan Expert": "",
    },
    paymentLinksByMonth: {
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
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
