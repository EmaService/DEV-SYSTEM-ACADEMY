# PROMPT PARA IA EJECUTORA — Mes 2 + Multi-mes + Exámenes + Colegiaturas

> Este archivo es autocontenido. Léelo completo antes de empezar y ejecútalo en un solo commit.

---

## CONTEXTO DEL PROYECTO

DEV SYSTEM ACADEMY — escuela online de 12 meses. Sitio estático HTML/CSS/JS (sin framework, sin build) desplegado en Netlify.

- **Ruta local:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** https://github.com/EmaService/DEV-SYSTEM-ACADEMY — branch `main`, push = auto-deploy
- **Sitio live:** https://dev-system-academy.netlify.app
- **Supabase:** https://nirgwrsorefkvveospzq.supabase.co (credenciales en `platform-config.js`)
- **Último commit:** `7acbe46`

### Arquitectura actual (todo esto YA FUNCIONA, no lo rompas)

| Archivo | Rol |
|---|---|
| `platform-config.js` | Config global `window.DEV_SYSTEM_CONFIG`: mode "cloud", supabase, mercadoPagoPublicKey, xpPerLesson: 50, xpPerFirstTry: 10, preferredPrice: 7000, monthlyPricing (tabla escalonada), planPricing |
| `cloud-state.js` | Wrapper de Supabase `window.DevSystemCloud`: signIn/signUp/getCurrentUser, upsertEnrollment, getEnrollment, recordMonthlyPayment, getPaidMonthIds, setLessonProgress, getProgressMap, saveLessonStats, getAllLessonStats, getStreakDays, saveGlossaryTerm/getGlossaryTerms, saveDocument/getDocuments/uploadDocumentFile, setMatricula, getDocumentPhotoUrl |
| `app-state.js` | Estado localStorage `window.DevSystemState` (fallback cuando no hay cloud) |
| `portal.html` / `portal.js` | Portal académico con header propio + 6 tabs SPA (Inicio, Plan de estudios, Aula, Exámenes, Marcadores, Expediente) |
| `leccion.html` / `leccion.js` | Visor de lecciones: carrusel de 4 secciones + 6 tipos de ejercicio + glosario vivo por selección de texto |
| `lecciones-data.js` | `window.DEV_SYSTEM_LECCIONES = { m1: { materias: { a, b, c } } }` — 30 lecciones publicadas del Mes 1 + 60 con `proximamente: true` |
| `glosario-data.js` | `window.DEV_SYSTEM_GLOSARIO` — 119 términos con variantes, definición y mes |
| `payment.js` | `window.DevSystemPago.iniciarPago()` — Wallet Brick de Mercado Pago |
| `netlify/functions/create-preference.js` | Crea la preferencia de MP. **Decide el precio SERVER-SIDE** consultando `enrollments.exam_passed`: aprobado → $7,000 fijo; no aprobado → tabla escalonada $7,900–$21,900 |
| `examen.html` / `examen.js` | Examen de admisión (15 preguntas, SIEMPRE aprueba — es intencional) |
| `styles.css` | Paleta: `--brand` #7c5cff morado, `--bg-deep`, `--bg-card`, `--bg-card-hi`, `--success`, `--warn`, `--xp`, `--radius-lg/xl`, `--font-display` Space Grotesk |

### Tablas en Supabase (todas YA EXISTEN, migraciones ya corridas)

`enrollments` (email PK, full_name, phone, plan, price_label, paid, status, exam_passed, exam_score, exam_date, matricula, updated_at) · `monthly_payments` (email+month_id PK, plan, price_label, status, source, updated_at) · `lesson_progress` (email+lesson_id PK, completed) · `lesson_stats` (email+lesson_id PK, first_try_correct, total_exercises, completed_at) · `student_documents` · `student_glossary` · **`month_exams` (email+month_id PK, score, passed, taken_at)** ← nueva

---

## MISIÓN

Habilitar el **Mes 2** sin romper el Mes 1 (que queda accesible siempre para repaso), crear el sistema de **exámenes mensuales reales**, y agregar la **sección de colegiaturas**. Todo en UN SOLO COMMIT.

---

## PARTE 0 — FIXES PREVIOS (haz esto PRIMERO)

Hay tres bugs en el portal actual. Todos son de la misma familia: **el JS busca IDs que no existen en el HTML, o lee de localStorage cuando el proyecto está en modo cloud.** Arréglalos antes de construir lo nuevo.

### 0.1 — Tab Exámenes no renderiza (IDs desalineados)

`renderExamenes()` (portal.js ~línea 1075) busca `#exam-admision`, `#exam-mes1` y `#exam-meses`. **Ninguno existe.** El HTML tiene `#exam-admission-label` y `#exam-admission-score` (portal.html líneas 257-258). Resultado: la función no escribe nada y quedan los placeholders estáticos ("Pendiente", "—") aunque el alumno YA aprobó el examen de admisión.

**Fix:** decide UNA estructura y alinéala en ambos lados. Recomendado: reescribe el bloque de Exámenes en `portal.html` con contenedores vacíos (`<div id="exam-admision"></div>`, `<div id="exam-mes-actual"></div>`, `<div id="exam-meses"></div>`) y que el JS los llene por completo. **Nada de placeholders con texto en el HTML** — si el JS falla, debe verse vacío, no información falsa.

Además: la card del examen de admisión debe leer `enrollment.exam_passed`, `enrollment.exam_score` y `enrollment.exam_date`. Si `exam_score` viene `null` pero `exam_passed` es `true`, muestra "Aprobado ✓" sin número, nunca "0".

### 0.2 — Widget "Avance del mes" muerto

`renderAvanceMes()` busca `#inicio-avance`, que **no existe en portal.html**. La función hace early-return y nunca dibuja el anillo de progreso.

**Fix:** agrega `<div id="inicio-avance"></div>` en el tab Inicio (dentro del hero o justo debajo) y verifica que la función lo llene. Agrega `.catch()` a su `getProgressMap`.

### 0.3 — Stats del hero leen de localStorage en modo cloud (LA CAUSA DE LOS CEROS)

`renderProgress()` (portal.js ~línea 150) usa:
```js
var paidMonths = window.DevSystemState.getPaidMonthIds(user.email);      // localStorage
var summary   = window.DevSystemState.getProgressSummary(user.email);    // localStorage
```
En modo cloud, localStorage está vacío → "0/12 meses", "0/0 lecciones", "0%". Los datos reales están en Supabase.

**Fix:** en modo cloud, calcular desde la nube:
- `monthsSummary` ← `DevSystemCloud.getPaidMonthIds(email).length + "/12"`
- `lessonsSummary` y `progressPercent` ← contar sobre `getProgressMap(email)` las lecciones **publicadas** (`!proximamente`) de TODOS los meses desbloqueados
- Mantener `DevSystemState` solo como fallback cuando `cloudMode` es false
- **Todas las promesas con `.catch()`** que dejen un valor por defecto visible

**Aplica la misma revisión a TODO portal.js:** busca cada `window.DevSystemState.getPaidMonthIds` y `getProgressSummary` y sustitúyelos por la versión cloud cuando `cloudMode` sea true. Están al menos en `renderProgress`, `renderPlan`, `renderPlanContent`, `renderExamenes` y `renderExpedienteKardex`.

### 0.4 — Racha en 0

`getStreakDays()` cuenta días consecutivos con lecciones completadas desde `lesson_stats.completed_at`. Verifica que:
- Cuente hacia atrás desde **hoy o ayer** (el día en curso todavía no termina; si el alumno estudió ayer y hoy no, la racha sigue viva)
- Compare por **fecha local** (no UTC) para no perder un día por zona horaria
- Tenga `.catch()` que deje 0 sin romper el resto del render

### 0.5 — Regla general para este commit

Cualquier dato que el HTML muestre "en duro" (un número, un estado, una palomita) y que el JS deba calcular, **debe salir del HTML**. El HTML pone contenedores vacíos; el JS los llena. Este proyecto ya tuvo tres rondas de bugs por placeholders estáticos que se veían como datos reales.

---

## PARTE 1 — Transcribir el Mes 2 a `lecciones-data.js`

### Fuentes (léelas del repo)

- `contenido/mes-02/temario-mes-02.md` — mapa de las 90 lecciones (3 materias × 30)
- `contenido/mes-02/materia-a.md` — lecciones **A1–A5 completas** (Git: la máquina del tiempo)
- `contenido/mes-02/materia-b.md` — lecciones **B1–B5 completas** (GitHub: la plaza pública del código)
- `contenido/mes-02/materia-c.md` — lecciones **C1–C5 completas** (Construye con IA II)

### Qué construir

Agrega a `window.DEV_SYSTEM_LECCIONES` la clave `m2` con la MISMA estructura que `m1`:

```js
m2: {
  titulo: "Git, GitHub y el trabajo real con código",
  materias: {
    a: { nombre: "Git: la máquina del tiempo", icono: "⏳", lecciones: [...] },
    b: { nombre: "GitHub: la plaza pública del código", icono: "🐙", lecciones: [...] },
    c: { nombre: "Construye con IA II", icono: "🔧", lecciones: [...] }
  }
}
```

- **IDs:** `m2-a1` … `m2-a30`, `m2-b1` … `m2-b30`, `m2-c1` … `m2-c30`
- **Lecciones 1–5 de cada materia:** contenido COMPLETO (4 secciones + 5 ejercicios), transcrito **fiel** de los `.md`. No reescribas, no resumas, no "mejores" los textos.
- **Lecciones 6–30:** `{ id, titulo, proximamente: true }` con los títulos exactos del temario.
- Agrega también `titulo: "Cómo funciona el mundo digital"` a `m1` para consistencia.

### Formato de las secciones y ejercicios (idéntico al Mes 1)

Secciones: `{ tipo: "concepto"|"analogia"|"practica"|"prompt", titulo, html }`. Los snippets de código van en `<pre><code>`.

Los 6 tipos de ejercicio ya soportados:
1. `{ tipo:"multiple", pregunta, opciones:[...], correcta: idx }`
2. `{ tipo:"completar", frase:"... ____ ... ____", banco:[...], respuestas:[...] }`
3. `{ tipo:"relacionar", pares:[[izq,der],...] }`
4. `{ tipo:"vf", afirmacion, correcta: bool, explicacion }`
5. `{ tipo:"ordenar", instruccion, elementos:[...] }` (en orden CORRECTO; se muestran revueltos)
6. `{ tipo:"quehace", codigo, pregunta, opciones:[...], correcta: idx }`

En los `.md`, la respuesta correcta está marcada con ✔ o con "Respuesta:". En `[relacionar]` y `[ordenar]`, el orden escrito ES el correcto.

---

## PARTE 2 — Soporte multi-mes en el portal

### 2.1 `platform-config.js`

```js
monthTitles: {
  1:"Cómo funciona el mundo digital", 2:"Git, GitHub y el trabajo real",
  3:"Frontend", 4:"Backend y bases de datos", 5:"LLMs y agentes",
  6:"Herramientas IA", 7:"MCP e integraciones", 8:"Testing y producto",
  9:"Cloud y deploy", 10:"Datos y seguridad", 11:"Automatización", 12:"SaaS final"
}
```

### 2.2 `cloud-state.js` — funciones nuevas

- `saveMonthExam(email, monthId, score, passed)` → upsert en `month_exams`
- `getMonthExams(email)` → array de todos los exámenes mensuales del alumno
- `getPaymentDates(email)` → los registros de `monthly_payments` con su `updated_at` (necesario para el calendario de colegiaturas)

### 2.3 `portal.js` — Plan de estudios con selector de mes

- Los 12 chips de meses son **funcionales** para los meses desbloqueados. Un mes está desbloqueado si aparece en `getPaidMonthIds()`. Los demás con candado.
- Clic en un mes desbloqueado → el roadmap de abajo muestra las 3 materias **de ese mes**.
- Estado del chip: **"Completado ✓"** (todas sus lecciones publicadas hechas) · **"En curso"** (el más alto desbloqueado con pendientes) · **"Repaso"** (mes completado que el alumno reabre).
- **CRÍTICO:** el Mes 1 debe seguir navegable siempre. Sus lecciones completadas se ven con palomita verde y **siguen siendo clickeables** para repasar. Nunca bloquear lo ya hecho.
- Por default abre el mes más alto desbloqueado con pendientes; si no hay, el más alto.
- El desbloqueo secuencial de lecciones aplica DENTRO de cada mes por materia (como ya funciona).
- El chip de un mes **NO pagado** muestra candado con texto "Disponible al pagar tu mensualidad del {fecha}" y al hacer clic **lleva al tab Pagos** (`switchTab("pagos")`).

### 2.4 `portal.js` — Inicio y Aula multi-mes

- "Tu día de hoy" y "Continúa donde te quedaste" buscan la próxima lección disponible en el **mes activo** (el más alto desbloqueado con pendientes), no hardcodeado a `m1`.
- El widget "Avance del mes" cuenta lecciones del mes activo.
- El widget "Periodo actual" se calcula del pago del mes más alto.

### 2.5 `portal.js` — Tab Exámenes (hazlo real)

Card por cada mes desbloqueado, con estado desde `getMonthExams()`:
- **Aprobado:** badge verde con calificación y fecha ("Aprobado · 93/100 · 18 jul 2026")
- **Disponible:** si todas las lecciones publicadas del mes están completas → botón "Presentar examen" → `examen-mes.html?mes=N`
- **Bloqueado:** "Completa las lecciones del mes para desbloquear" con progreso ("24/30 lecciones")
- Meses no pagados: lista compacta "Próximamente"

### 2.6 `portal.js` — Kardex del expediente

- Columna **Estatus**: "Aprobado ✓" si hay examen aprobado · "En curso · X%" si es el mes activo · "Pagado ✓" si pagado sin avance · "Pendiente" si no pagado. Agrega la fecha de pago en la fila.
- Columna **Calificación**: la del examen mensual, o "—".

---

## PARTE 3 — Exámenes mensuales reales

### 3.1 `examenes-data.js` (ARCHIVO NUEVO)

```js
window.DEV_SYSTEM_EXAMENES = {
  "1": {
    titulo: "Examen del Mes 1 — Fundamentos del mundo digital",
    preguntas: [ { pregunta, opciones: [...], correcta: idx }, ... ]
  }
};
```

Transcribe las **30 preguntas** de `contenido/mes-01/examen-mes-01.md` (bloques A, B y C, 10 c/u). La respuesta correcta está marcada con ✔.

### 3.2 `examen-mes.html` + `examen-mes.js` (ARCHIVOS NUEVOS)

Reutiliza los patrones visuales de `examen.js` (el de admisión) pero con estas diferencias:

- Recibe `?mes=N` por query string. Requiere sesión (`getCurrentUser`, si no → `login.html`).
- **ESTE SÍ SE CALIFICA DE VERDAD** — a diferencia del de admisión que siempre aprueba. Puntaje = aciertos/total × 100. Aprobatorio: **70**. Deja un comentario claro en el código señalando esa diferencia respecto a `examen.js`.
- Una pregunta a la vez, barra de progreso, sin poder regresar una vez respondida.
- Al terminar: `saveMonthExam(email, mes, score, passed)`. Pantalla de resultado con calificación grande, aprobado/reprobado, y botón a `portal.html#examenes`.
- Si reprobó: mensaje de que puede reintentar en 24 horas (informativo; permite reintentar).
- Si ya lo aprobó al entrar: muestra directamente el resultado guardado, sin dejar repetir.

---

## PARTE 4 — Sección de colegiaturas (nuevo tab 💳 Pagos)

### Modelo de negocio

El alumno paga **cada mes** para desbloquear el siguiente módulo. El día de corte es el **día del mes del primer pago** (para el alumno actual: día 16, porque pagó el 16 de julio de 2026). Cada pago cubre un ciclo de un mes y desbloquea un módulo.

**REGLA DE ACCESO:** sin pago no hay mes nuevo. Los meses ya pagados quedan **SIEMPRE accesibles** para repaso, aunque el ciclo haya vencido. Nunca se bloquea contenido anterior.

### 4.1 Nuevo tab "💳 Pagos"

Séptimo tab, entre **Exámenes** y **Marcadores**. Mismo sistema de tabs SPA que ya existe (`#portal-tabs`, `.tab-content`, hash routing).

### 4.2 Card "Estado de cuenta"

Cálculos desde `monthly_payments`:
- `diaCorte` = día del mes del pago del mes 1 (`getDate()` de su `updated_at`)
- `mesesPagados` = cantidad de registros
- `proximoMes` = mesesPagados + 1
- `fechaVencimiento` = fecha del primer pago + `mesesPagados` meses (ej: 16 jul + 1 mes = 16 ago)
- `diasRestantes` = días entre hoy y `fechaVencimiento`

Estados visuales:

| Condición | Badge | Mensaje |
|---|---|---|
| Faltan más de 5 días | Verde | "Tu acceso está vigente hasta el {fecha}" |
| 5 días o menos, sin vencer | Ámbar | "Tu mensualidad vence en {N} días" |
| Fecha pasada, sin pagar | Rojo | "Tu mensualidad venció el {fecha}. Paga para desbloquear el Mes {N}." + nota tranquilizadora: "Tu contenido de meses anteriores sigue disponible." |

Muestra también: monto ($7,000 MXN si `exam_passed`, si no la tabla escalonada), concepto ("Mensualidad Mes {N} — {título del mes}"), fecha límite.

### 4.3 Bloque "Pagar mensualidad"

- Botón grande "Pagar $7,000 MXN" (`btn-brand`) que llama a `window.DevSystemPago.iniciarPago()` con `monthId = proximoMes`, renderizando el Wallet Brick en un contenedor de este tab.
- **El precio lo decide el SERVIDOR** (`create-preference` ya consulta `exam_passed`) — el frontend solo lo muestra.
- Antes de iniciar el pago, guarda en `localStorage.devsystem_pending_checkout` con `{ email, monthId: proximoMes, price }` para que `enrollment-success.js` lo registre correctamente al volver de Mercado Pago.
- Si ya está al corriente y no toca aún el siguiente: mostrar "Estás al corriente ✓" + "Tu próximo pago es el {fecha}", y un botón secundario ghost "Pagar por adelantado" que igual habilita el pago.

### 4.4 Card "Historial de pagos"

Tabla real (`<table>`): **Mes · Concepto · Monto · Fecha de pago · Estatus**
- Una fila por registro de `monthly_payments`, ordenadas por `month_id`, estatus "Pagado ✓" en verde.
- Debajo, los meses futuros con "Pendiente" en muted y su fecha de vencimiento calculada (mes 3 = primer pago + 2 meses, etc.) hasta el mes 12 — así el alumno ve el calendario completo de sus 12 colegiaturas de un vistazo.

### 4.5 Calendario visual de pagos

12 chips en grid (4 columnas desktop / 2 mobile), uno por mes: número, fecha de corte (ej. "16 ago") y color por estado:
- **Pagado:** verde con ✓
- **Próximo a pagar:** morado con borde brillante
- **Futuro:** gris muted

### 4.6 Integraciones con el resto del portal

- **Inicio:** si el estado es "Por vencer" o "Vencido", banner arriba del hero (fondo ámbar/rojo suave) con el aviso y botón "Ir a Pagos" → `switchTab("pagos")`. Si está al corriente, sin banner.
- **Header:** junto al chip de matrícula, si el estado es "Por vencer"/"Vencido", chip pequeño ámbar/rojo "⚠ Pago pendiente" clickeable que lleva al tab Pagos. Al corriente: no aparece nada.
- **`enrollment-success.js`:** al registrar el pago, el `monthId` debe ser el que venía en `devsystem_pending_checkout` (NO hardcodeado a 1).

---

## DISEÑO

- Respeta la paleta y el lenguaje visual ya establecidos (`--brand` morado, `--radius-xl`, cards con `--bg-card`, tipografía display para números grandes).
- Mobile-first: probar mental y realmente a 375px. Los tabs ya tienen scroll-x; el nuevo tab entra en ese scroll.
- Tablas (kardex, historial de pagos) con `overflow-x: auto` dentro de su card.
- Transiciones suaves ya existentes; no introduzcas librerías.

---

## REGLAS TÉCNICAS

- **CERO dependencias nuevas.** JS vanilla como todo el proyecto.
- Todas las promesas con `.catch()` — una promesa que rechaza en silencio deja secciones vacías (ya pasó antes en este proyecto).
- Cuidado con closures en loops: usa IIFE o `let` al capturar variables dentro de `setTimeout`/`requestAnimationFrame` (bug histórico de este repo).
- Al renderizar listas, **limpia el contenedor antes** (`innerHTML = ""`) — no uses `+=` acumulativo, causa duplicados en re-render.
- Un solo sistema de tabs: el de `portal.js`. No agregues scripts inline en el HTML que manejen navegación.

---

## VERIFICACIÓN OBLIGATORIA (hazla tú en el navegador antes de pushear)

0. **Fixes de la Parte 0:** el hero muestra "1/12 meses" y "30/30 lecciones · 100%" (no 0/0). El anillo de "Avance del mes" dibuja 100%. La racha muestra un número real. El tab Exámenes muestra "Examen de admisión — Aprobado ✓" (no "Pendiente").
1. **Plan de estudios:** chip M1 desbloqueado, M2 con candado (aún no pagado). Clic en M1 → roadmap con las 30 lecciones en verde y clickeables. Clic en M2 → lleva al tab Pagos.
2. **Inicio:** banner de pago si aplica; "Tu día de hoy" sin romperse.
3. **Exámenes:** Mes 1 "Aprobado · 93/100". Mes 2 en "Próximamente" (no pagado).
4. **Expediente / kardex:** M1 aprobado con calificación 93 y fecha de pago.
5. **Pagos:** estado de cuenta correcto (primer pago 16 jul 2026 → vencimiento 16 ago 2026), historial con Mes 1 pagado, calendario con los 12 chips, botón de pago abre el Wallet Brick con $7,000.
6. **Lección del Mes 2:** `/leccion?id=m2-a1` (aunque el mes esté bloqueado en el portal, la URL directa debe funcionar para tu prueba) — carrusel, 5 ejercicios, glosario y XP funcionando igual que en el Mes 1.
7. **Repaso Mes 1:** abrir `/leccion?id=m1-a1` funciona sin problema.
8. **Mobile 375px:** los 7 tabs scrollean, las tablas no desbordan, el calendario de pagos se ve en 2 columnas.
9. **Consola sin errores.**

---

## COMMIT

Un solo commit: `feat: Mes 2 (Git y GitHub) + soporte multi-mes + exámenes mensuales + colegiaturas` y push a `main`.

Reporta: archivos creados/modificados, cuántas lecciones y ejercicios transcribiste, y cualquier decisión no obvia que hayas tomado.

---

## NO TOCAR

`index.html` (landing) · `checkout.html` / `checkout.js` · `login.html` / `login.js` · `examen.html` / `examen.js` (el de admisión — solo léelo como referencia) · `netlify.toml` · `netlify/functions/` · `payment.js` (úsalo, no lo modifiques) · `admin.html`
