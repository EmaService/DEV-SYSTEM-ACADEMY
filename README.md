# DEV SYSTEM - Landing + Compra + Portal (12 meses, pago mensual)

## Qué incluye

- `index.html`: landing comercial con copy premium + A/B test.
- `checkout.html`: pago mensual por etapa/plan (12 meses totales).
- `enrollment-success.html`: retorno post-pago para activar inscripción.
- `login.html`: acceso y activación de cuenta.
- `portal.html`: plataforma del alumno con roadmap y progreso por lección.
- `platform-config.js`: modo de operación (`local` o `cloud`).
- `cloud-state.js`: integración Supabase.

## Lógica de negocio implementada

- Estado persistente en `localStorage` mediante `app-state.js`.
- Integración cloud opcional con Supabase Auth/DB.
- Integración de cobro con Stripe Payment Links.
- Cada pago activa el acceso al mes correspondiente.
- Solo alumnos con inscripción pagada pueden registrar cuenta.
- Solo alumnos autenticados pueden entrar al portal.
- Progreso por lección solo en meses desbloqueados.

## Flujo recomendado

1. Abrir `index.html`
2. Clic en `Inscribirme`
3. Completar datos y pagar un mes en `checkout.html`
4. Si hay Stripe configurado: redirige a pago y vuelve a `enrollment-success.html`
5. Activar cuenta en `login.html` (tab "Activar cuenta")
6. Entrar y estudiar en `portal.html` con contenido según meses pagados

## Esquema de precios mensual

- Mes 1: $5,000 MXN
- Incremento progresivo cada mes
- Mes 12: $15,000 MXN

## Reinicio rápido de demo

Abre consola del navegador y ejecuta:

```js
localStorage.removeItem("devsystem_store_v2");
localStorage.removeItem("devsystem_session_v2");
localStorage.removeItem("devsystem_ab_variant");
localStorage.removeItem("devsystem_pending_checkout");
```

## Producción
- Ver guía en [DEPLOYMENT.md](c:/Users/USER/Desktop/DEV%20SYSTEMS%20ACADEMY/DEPLOYMENT.md)
- Ejecuta el esquema SQL en [supabase-schema.sql](c:/Users/USER/Desktop/DEV%20SYSTEMS%20ACADEMY/supabase-schema.sql)
