# PROMPT PARA IA EJECUTORA — Webhook de Mercado Pago

> Autocontenido. Este cambio es **crítico para el negocio**: hoy un alumno puede pagar y no obtener acceso. Trabaja con cuidado y no rompas el flujo actual.

---

## CONTEXTO

DEV SYSTEM ACADEMY — escuela online con colegiaturas mensuales de $7,000 MXN cobradas por Mercado Pago (Checkout Pro con Wallet Brick).

- **Ruta:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** EmaService/DEV-SYSTEM-ACADEMY — branch `main`, push = auto-deploy
- **Sitio:** https://dev-system-academy.netlify.app
- **Supabase:** `https://nirgwrsorefkvveospzq.supabase.co` (la anon key está en `platform-config.js` y en `netlify/functions/create-preference.js`, es pública por diseño)
- **Variable de entorno ya configurada en Netlify:** `MP_ACCESS_TOKEN`

### Flujo de pago actual

1. El alumno elige el mes en el portal → `payment.js` llama a `netlify/functions/create-preference.js`
2. Esa función **decide el precio del lado del servidor** consultando `enrollments.exam_passed` (aprobado → $7,000; si no → tabla escalonada) y crea la preferencia en Mercado Pago con `external_reference: "mes-{monthId}-{email}"`
3. Se renderiza el Wallet Brick y el alumno paga
4. Mercado Pago lo redirige a `/enrollment-success`
5. **Ahí, en el navegador del alumno**, `enrollment-success.js` lee `localStorage.devsystem_pending_checkout` y registra el pago en Supabase

## EL PROBLEMA

El paso 5 depende de que el alumno **regrese al sitio con su localStorage intacto**. Si cierra la pestaña al ver "pago aprobado", si se le cae la conexión, si paga desde otro dispositivo o si el navegador limpia el almacenamiento, **el dinero entra a la cuenta del dueño pero el sistema nunca registra el pago**. El alumno paga y se queda sin acceso al módulo.

Ya ocurrió: el pago del 16 de agosto de 2026 del alumno `rayfg96@gmail.com` se cobró y nunca llegó a `monthly_payments`.

## LA SOLUCIÓN

Un **webhook**: Mercado Pago notifica directamente al servidor cuando un pago cambia de estado, sin pasar por el navegador del alumno. El registro del navegador se **conserva** como respaldo — las dos vías serán idempotentes, así que registrar dos veces no duplica nada.

---

## PASO 0 — SQL que el dueño correrá en Supabase (solo documéntalo, no lo ejecutes)

Deja este bloque en un archivo `supabase-webhook.sql` en la raíz del repo:

```sql
-- Bitácora de eventos de pago: idempotencia + auditoría
create table if not exists public.payment_events (
  payment_id    text primary key,
  email         text,
  month_id      int,
  status        text not null,
  amount        numeric,
  expected      numeric,
  raw           jsonb,
  processed_at  timestamptz not null default now()
);

alter table public.payment_events enable row level security;
drop policy if exists "payment_events_all" on public.payment_events;
create policy "payment_events_all" on public.payment_events
  for all to anon, authenticated using (true) with check (true);

create index if not exists payment_events_email_idx on public.payment_events (email);
```

---

## PASO 1 — `netlify/functions/mp-webhook.js` (ARCHIVO NUEVO)

### Comportamiento

**Siempre responder HTTP 200**, incluso ante errores no críticos. Si devuelves 4xx/5xx, Mercado Pago reintenta durante días y llena la bitácora. Registra el error en la consola y responde 200.

Acepta `POST`. A `GET` responde 200 con `{ok:true}` (Mercado Pago hace una prueba de alcance al configurar la URL).

### 1.1 Extraer el ID del pago

Mercado Pago manda el aviso en formatos distintos según la integración. Soporta los tres:

```js
// a) body JSON nuevo:  { type: "payment", data: { id: "123456789" } }
// b) body JSON viejo:  { topic: "payment", resource: "https://.../v1/payments/123456789" }
// c) query string:     ?topic=payment&id=123456789
```

Si el tipo/topic **no** es `payment` (por ejemplo `merchant_order`), responde 200 y termina sin hacer nada.

### 1.2 Consultar el pago real en la API

**Nunca confíes en el contenido del aviso.** Solo trae el ID; el estado hay que consultarlo:

```
GET https://api.mercadopago.com/v1/payments/{paymentId}
Headers: { Authorization: "Bearer " + process.env.MP_ACCESS_TOKEN }
```

Del resultado toma: `status`, `status_detail`, `transaction_amount`, `external_reference`, `date_approved`, `payer.email`.

### 1.3 Procesar solo pagos aprobados

Si `status !== "approved"`, registra el evento en `payment_events` con ese estado (sirve para auditar rechazos y pendientes) y termina con 200. **No otorgues acceso.**

### 1.4 Parsear el `external_reference`

Viene como `mes-{monthId}-{email}`. Ojo: el correo puede contener guiones, así que **no partas por todos los guiones**. Usa:

```js
var m = /^mes-(\d{1,2})-(.+)$/.exec(externalReference || "");
var monthId = m ? parseInt(m[1], 10) : null;
var email   = m ? m[2].trim().toLowerCase() : null;
```

Si no hace match o el mes está fuera de 1–12, registra el evento con `status: "unparseable"` y termina en 200 (el dueño lo revisará a mano).

### 1.5 Idempotencia

Antes de otorgar acceso, consulta `payment_events` por `payment_id`. Si ya existe con `status = "approved"`, responde 200 sin volver a procesar. Mercado Pago reenvía el mismo aviso varias veces y el alumno también puede regresar al sitio: ambas vías deben poder correr sin duplicar.

### 1.6 Verificar el monto

Recalcula el precio esperado con **la misma lógica que `create-preference.js`** (consulta `enrollments.exam_passed` de ese email; aprobado → 7000; si no → la tabla escalonada por mes). Extrae esa lógica a un módulo compartido `netlify/functions/_precios.js` que ambas funciones importen, para que nunca se desincronicen.

- Si `transaction_amount` coincide → procede normal.
- Si **no** coincide → **de todas formas otorga el acceso** (el alumno ya pagó y no es su culpa), pero guarda `amount` y `expected` distintos en `payment_events` para que el dueño lo detecte.

### 1.7 Otorgar el acceso

Usando la API REST de Supabase con la anon key (las tablas tienen políticas abiertas para `anon`), en este orden:

1. **Upsert en `monthly_payments`**: `{ email, month_id: monthId, plan, price_label: String(amount), status: "paid", source: "mp_webhook", updated_at: date_approved }` con `Prefer: resolution=merge-duplicates`.
2. **Actualizar `enrollments`**: `status = "activo"` para ese email.
3. **Insertar en `payment_events`** el registro completo con el `raw` del pago.

Si el paso 1 falla, **no** escribas `payment_events` como aprobado — así el reintento de Mercado Pago vuelve a intentarlo.

### 1.8 Verificación de firma (seguridad)

Mercado Pago firma cada aviso en el header `x-signature`, con el formato `ts=1704908010,v1=abc123...`.

La cadena a firmar es exactamente (respetando los `;` finales):

```
id:{data.id};request-id:{header x-request-id};ts:{ts};
```

Se calcula `HMAC-SHA256` con la clave secreta del webhook y se compara con `v1` usando comparación de tiempo constante (`crypto.timingSafeEqual`).

- La clave va en la variable de entorno `MP_WEBHOOK_SECRET`.
- **Si `MP_WEBHOOK_SECRET` no está definida**, registra `console.warn("[mp-webhook] sin secreto configurado — firma no verificada")` y **procesa de todas formas**. Esto permite poner el webhook a funcionar antes de configurar el secreto; el dueño lo activa después.
- Si la variable **sí** está definida y la firma no coincide: responde 200, registra el intento en consola y **no proceses nada**.

Usa el módulo `crypto` nativo de Node (viene incluido en Netlify Functions, no es dependencia externa).

### 1.9 Registro en consola

Cada ejecución debe dejar una línea legible en los logs de Netlify:

```
[mp-webhook] payment=123456789 status=approved mes=3 email=ray@... monto=7000 esperado=7000 → acceso otorgado
```

Esos logs son lo que el dueño va a leer cuando un alumno reclame.

---

## PASO 2 — `netlify/functions/create-preference.js`

1. Extrae la lógica de precios a `netlify/functions/_precios.js` (exporta `precioPara(monthId, examPassed)` y la tabla) e impórtala aquí y en el webhook.
2. Agrega a la preferencia:

```js
notification_url: "https://dev-system-academy.netlify.app/.netlify/functions/mp-webhook",
metadata: { month_id: monthId, email: email }
```

3. Conserva `external_reference` exactamente como está — el webhook depende de ese formato.

---

## PASO 3 — `enrollment-success.js` (respaldo, no lo elimines)

Se queda como está, con dos ajustes:

1. Que el registro sea tolerante: si el pago ya fue registrado por el webhook, no debe mostrar error al alumno. Mensaje único y tranquilizador: *"Tu pago fue confirmado. Ya tienes acceso al Módulo {N}."*
2. Si `localStorage.devsystem_pending_checkout` viene vacío (el caso que causó el problema), **no muestres un error**: consulta `monthly_payments` del alumno y muestra el último mes pagado. Si tampoco hay nada, muestra: *"Estamos confirmando tu pago. Si no ves el acceso en unos minutos, escríbenos."* y un enlace al portal.

---

## PASO 4 — Herramienta de reparación para el dueño

Crea `netlify/functions/verificar-pagos.js`: recibe `?email=...&secret=...` (el `secret` se compara contra la variable de entorno `ADMIN_SECRET`; si no coincide, 401). Consulta los pagos de ese alumno en la API de Mercado Pago mediante el buscador:

```
GET https://api.mercadopago.com/v1/payments/search?external_reference=mes-{N}-{email}
```

Devuelve un JSON con los pagos aprobados que **no** estén en `monthly_payments`, y con `&reparar=1` los registra. Así, cuando un alumno reclame, el dueño abre una URL en el navegador y se resuelve sin tocar SQL.

---

## REGLAS TÉCNICAS

- **Cero dependencias nuevas.** `fetch` nativo y `crypto` de Node.
- Nada de secretos en el código: `MP_ACCESS_TOKEN`, `MP_WEBHOOK_SECRET` y `ADMIN_SECRET` salen de `process.env`.
- La función debe responder en menos de 10 segundos (límite de Netlify). Consulta el pago, escribe y responde; no hagas trabajo extra.
- Maneja el caso de que `enrollments` no tenga ese email (pago de alguien que nunca se inscribió): registra el evento y responde 200 sin crear la inscripción.

## CÓMO PROBARLO (hazlo tú antes de pushear)

1. `GET https://dev-system-academy.netlify.app/.netlify/functions/mp-webhook` → debe responder 200 `{ok:true}`.
2. Simula un aviso con `curl`:
   ```
   curl -X POST ".../.netlify/functions/mp-webhook" \
     -H "Content-Type: application/json" \
     -d '{"type":"payment","data":{"id":"ID_DE_UN_PAGO_REAL"}}'
   ```
   Usa el ID de un pago real de la cuenta (el del Mes 1 sirve). Verifica en los logs de Netlify que aparezca la línea de registro y que **no duplique** el registro existente en `monthly_payments`.
3. Corre el mismo `curl` dos veces: la segunda debe decir que ya estaba procesado y no escribir nada.
4. Manda un aviso con un ID inexistente: debe responder 200 sin romperse.
5. Manda un `merchant_order`: debe ignorarlo y responder 200.

## COMMIT

Un commit: `feat: webhook de Mercado Pago para registrar pagos del lado del servidor` y push.

En el reporte incluye: la URL exacta del webhook, si `MP_WEBHOOK_SECRET` quedó pendiente de configurar, y el resultado de las 5 pruebas.

## NO TOCAR

`portal.*` · `leccion.*` · `examen*.*` · `lecciones-data.js` · `examenes-data.js` · `styles.css` · `index.html` · `humanizar.js`
