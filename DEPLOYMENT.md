# Producción: Stripe + Supabase

## 1) Configurar Supabase

1. Crea un proyecto en Supabase.
2. Ejecuta el SQL de [supabase-schema.sql](c:/Users/USER/Desktop/DEV%20SYSTEMS%20ACADEMY/supabase-schema.sql).
3. En `Authentication > Providers`, habilita Email/Password.
4. Define si exigirás confirmación por correo (recomendado para producción).
5. Copia:
   - `Project URL`
   - `anon public key`

## 2) Configurar Stripe Payment Links

1. Crea 3 Payment Links:
   - Plan Base (Meses 1-4)
   - Plan Profesional (Meses 5-8)
   - Plan Expert (Meses 9-12)
2. En cada Payment Link, configura `After payment` para redirigir a:
   - `https://TU_DOMINIO/enrollment-success.html`
3. Copia las URLs de esos Payment Links.

Nota: el mes especifico (1-12) se selecciona en `checkout.html` antes de ir a Stripe.
Nota recomendada: como el precio es progresivo por mes ($5,000 -> $15,000), usa `paymentLinksByMonth` para asignar 12 links con precio exacto.

## 3) Configurar la app

Edita [platform-config.js](c:/Users/USER/Desktop/DEV%20SYSTEMS%20ACADEMY/platform-config.js):

```js
window.DEV_SYSTEM_CONFIG = {
  mode: "cloud",
  stripe: {
    paymentLinks: {
      "Plan Base": "https://buy.stripe.com/...",
      "Plan Profesional": "https://buy.stripe.com/...",
      "Plan Expert": "https://buy.stripe.com/...",
    },
    paymentLinksByMonth: {
      "1": "https://buy.stripe.com/...",
      "2": "https://buy.stripe.com/...",
      "3": "https://buy.stripe.com/...",
      "4": "https://buy.stripe.com/...",
      "5": "https://buy.stripe.com/...",
      "6": "https://buy.stripe.com/...",
      "7": "https://buy.stripe.com/...",
      "8": "https://buy.stripe.com/...",
      "9": "https://buy.stripe.com/...",
      "10": "https://buy.stripe.com/...",
      "11": "https://buy.stripe.com/...",
      "12": "https://buy.stripe.com/...",
    },
  },
  supabase: {
    url: "https://xxxx.supabase.co",
    anonKey: "eyJ...",
  },
};
```

## 4) Publicar sitio estático

Puedes usar Netlify, Vercel Static o Cloudflare Pages.

Archivo principal:
- [index.html](c:/Users/USER/Desktop/DEV%20SYSTEMS%20ACADEMY/index.html)

## 5) Endurecimiento recomendado

1. Mover la escritura de `enrollments` a un webhook verificado de Stripe.
2. Eliminar políticas temporales abiertas de `enrollments`.
3. Restringir inserciones y updates solo a backend confiable.
4. Agregar panel admin para revisar alumnos y avances.
