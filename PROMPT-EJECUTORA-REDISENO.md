# PROMPT PARA IA EJECUTORA — Rediseño del portal: de app gamificada a aula digital universitaria

> Autocontenido. Este es un rediseño de **sistema visual y jerarquía de información**, no de funcionalidad. Nada de lo que ya funciona debe dejar de funcionar.

---

## CONTEXTO

DEV SYSTEM ACADEMY — escuela online de 12 meses, colegiatura de $7,000 MXN mensuales. Sitio estático HTML/CSS/JS (sin framework, sin build) en Netlify.

- **Ruta:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** EmaService/DEV-SYSTEM-ACADEMY — branch `main`
- **Archivos del portal:** `portal.html`, `portal.js`, `leccion.html`, `leccion.js`, `examen-mes.html`, `examen-mes.js`, `styles.css`
- **Estado:** 3 módulos completos (270 lecciones, 1377 ejercicios), 2 exámenes, glosario de 159 términos, sistema de colegiaturas, expediente con credencial y kardex. **Todo funciona.**

## EL PROBLEMA

La dirección de diseño original fue "estilo Duolingo". Eso produjo un portal que se lee como app gratuita de consumo masivo, cuando el producto es una institución educativa de paga. El cliente lo describió como "web de niño de primaria".

Diagnóstico concreto:

| Síntoma | Dónde |
|---|---|
| Navegación con emojis | Los 8 tabs de `portal.html` |
| Emojis gigantes como métricas | `.chip-emoji` a 1.8rem |
| Morado saturado + glows | `--brand: #7c5cff`, `--shadow-glow` |
| Confeti animado | `leccion.js`, pantalla de lección completada |
| 4 familias tipográficas | Space Grotesk, Inter, Sora, JetBrains Mono |
| Radios de 24px, cards enormes | `--radius-xl`, baja densidad informativa |
| Nomenclatura de suscripción | "Mes 1", "Materia A" |

## LA DIRECCIÓN NUEVA

**Referencias correctas:** Coursera, edX, Canvas LMS, el dashboard de Stripe, Linear, Notion. Sobrias, tipográficas, densas en información, con color usado **como señal de estado, nunca como decoración**.

**Principios:**

1. **La tipografía hace el trabajo pesado**, no el color. Jerarquía por tamaño, peso y espaciado.
2. **Densidad informativa.** Un sistema académico muestra datos: códigos, fechas, créditos, estatus, metadatos. El aire vacío no comunica seriedad; comunica que no hay nada que decir.
3. **Color = significado.** Verde solo para aprobado/completado. Ámbar solo para pendiente/por vencer. Rojo solo para vencido/reprobado. El acento azul solo para acción primaria y estado activo. Nada más.
4. **Iconos de línea, nunca emojis** en la interfaz. (Los emojis pueden sobrevivir dentro del *contenido* de las lecciones, ahí sí aportan.)
5. **Contención.** Sin glows, sin confeti, sin animaciones de celebración. El refuerzo positivo de un adulto profesional es un número que sube y un sello que dice APROBADO.

---

## 1. SISTEMA VISUAL NUEVO

Reemplaza el bloque `:root` de `styles.css`. **Conserva los nombres de variable existentes** que ya se usan en el código (`--brand`, `--success`, etc.) apuntándolos a los valores nuevos, para no romper nada.

```css
:root {
  /* Superficies — neutras, no azul saturado */
  --bg:           #0b0d10;
  --bg-deep:      #07090b;
  --surface:      #14171c;
  --surface-2:    #1b1f26;
  --surface-3:    #23282f;

  /* Compatibilidad con nombres antiguos */
  --bg-card:      var(--surface);
  --bg-card-hi:   var(--surface-2);
  --bg-alt:       var(--surface-2);

  /* Texto */
  --text:         #e8eaed;
  --text-2:       #c3c8cf;
  --muted:        #8b929c;
  --text-faint:   #5f666f;

  /* Bordes — el diseño se estructura con líneas, no con sombras */
  --line:         rgba(255,255,255,0.07);
  --line-2:       rgba(255,255,255,0.12);
  --line-hi:      rgba(79,124,255,0.40);

  /* Acento institucional */
  --accent:       #4f7cff;
  --accent-2:     #7ba0ff;
  --accent-dim:   rgba(79,124,255,0.12);
  --brand:        var(--accent);
  --brand-2:      var(--accent-2);

  /* Dorado académico — SOLO credencial, sellos y distinciones. Úsalo poco. */
  --gold:         #c9a227;
  --gold-dim:     rgba(201,162,39,0.14);

  /* Estados — tonos sobrios, no neón */
  --success:      #2f9e5f;
  --success-dim:  rgba(47,158,95,0.14);
  --warn:         #b8791f;
  --warn-dim:     rgba(184,121,31,0.14);
  --danger:       #c0392b;
  --danger-dim:   rgba(192,57,43,0.14);
  --green:        var(--success);
  --amber:        var(--warn);
  --red:          var(--danger);
  --xp:           var(--accent);

  /* Geometría — radios discretos */
  --radius:       6px;
  --radius-lg:    10px;
  --radius-xl:    12px;

  /* Elevación — mínima. Los bordes estructuran. */
  --shadow:       0 1px 2px rgba(0,0,0,0.4);
  --shadow-card:  0 1px 3px rgba(0,0,0,0.35);
  --shadow-glow:  none;

  --container:    1280px;

  /* Tipografía */
  --font-serif:   'Source Serif 4', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
  --font-display: var(--font-serif);
}
```

### Tipografía — tres familias con propósito

Reemplaza los `@import` / `<link>` de fuentes. **Elimina Space Grotesk y Sora por completo.**

```
Source Serif 4  (400, 600, 700)  → títulos de página, nombre en credencial, calificaciones grandes
Inter           (400, 500, 600, 700) → toda la interfaz
JetBrains Mono  (400, 500)       → código, matrícula, códigos de asignatura, montos
```

La serif en los encabezados es lo que produce la lectura "académica" de forma inmediata. Úsala en: `h1` de cada sección, nombre del alumno en la credencial, calificación numérica grande, y títulos de lección. **No** en botones, etiquetas, tablas ni navegación.

Escala tipográfica:
```css
h1 { font-family: var(--font-serif); font-size: clamp(1.6rem, 3vw, 2.1rem); font-weight: 600; letter-spacing: -0.01em; }
h2 { font-family: var(--font-serif); font-size: 1.3rem; font-weight: 600; }
h3 { font-family: var(--font-body);  font-size: 0.95rem; font-weight: 600; letter-spacing: 0.01em; }
body { font-size: 0.925rem; line-height: 1.6; }
.label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--muted); }
```

---

## 2. ICONOGRAFÍA — reemplazar TODOS los emojis de la interfaz

Crea un helper en `portal.js` (y equivalente en las otras páginas) que devuelva SVG inline de trazo, 24×24, `stroke="currentColor"`, `stroke-width="1.5"`, `fill="none"`, `stroke-linecap="round"`:

```js
var ICONS = {
  inicio:      '<svg ...>', // casa de línea
  plan:        '<svg ...>', // libro abierto / lista
  aula:        '<svg ...>', // pizarrón o monitor
  examenes:    '<svg ...>', // documento con marca
  pagos:       '<svg ...>', // tarjeta / recibo
  marcadores:  '<svg ...>', // bookmark
  expediente:  '<svg ...>', // carpeta / birrete de línea
  check:       '<svg ...>', // palomita
  lock:        '<svg ...>', // candado
  play:        '<svg ...>', // triángulo
  clock:       '<svg ...>', // reloj
  alert:       '<svg ...>', // triángulo de alerta
  chevron:     '<svg ...>', // flecha
  flame:       '<svg ...>', // racha (línea, no emoji)
  award:       '<svg ...>'  // distinción
};
function icon(name, size) { ... }
```

Usa el set de **Lucide** como referencia de trazo (son MIT, puedes copiar los paths). Tamaño estándar 16px en línea de texto, 18px en navegación, 20px en encabezados de sección.

Sustituye todos los emojis de: tabs de navegación, stat chips, encabezados de materia, estados de lección (candado/palomita/play), cards de examen, calendario de pagos, y el toast del glosario.

**Excepción:** los emojis dentro del *contenido* de las lecciones (`lecciones-data.js`) se quedan como están. No toques ese archivo.

---

## 3. NOMENCLATURA ACADÉMICA

Cambia únicamente lo que se *muestra*; no renombres claves de datos ni IDs.

| Antes | Ahora |
|---|---|
| Mes 1 | **Módulo 01** |
| Materia A / B / C | **Asignatura** con código |
| Lección A5 | **Unidad FND-101.05** (o simplemente "Unidad 05" dentro de la asignatura) |
| Plan de estudios | **Plan de estudios** (se queda) |
| Aula | **Aula virtual** |
| Marcadores | **Glosario** |
| Expediente | **Expediente académico** |
| XP | **Puntos de avance** |
| Racha | **Días consecutivos** |

Códigos de asignatura (agrégalos como campo `codigo` en `lecciones-data.js` a nivel de materia — es aditivo, no rompe nada):

```
Módulo 01 — Fundamentos del entorno digital
  FND-101  Arquitectura y sistemas          (antes "La Máquina")
  FND-102  Lenguajes y sintaxis             (antes "El Idioma del Código")
  FND-103  Práctica dirigida con IA         (antes "Construye con IA")

Módulo 02 — Control de versiones y trabajo colaborativo
  VCS-201  Git y control de versiones
  VCS-202  GitHub y colaboración
  VCS-203  Práctica dirigida con IA II

Módulo 03 — Desarrollo de interfaces web
  WEB-301  Maquetación: HTML y CSS
  WEB-302  JavaScript en el navegador
  WEB-303  Práctica dirigida con IA III
```

Muestra el código en `--font-mono`, tamaño chico, color `--muted`, antes del nombre de la asignatura. Eso solo ya sube el nivel percibido.

---

## 4. REDISEÑO POR PANTALLA

### 4.1 Header institucional

Barra superior de 60px, `background: var(--surface)`, borde inferior `--line`:
- **Izquierda:** logo (24px) + `DEV SYSTEM ACADEMY` en Inter 600, 0.82rem, `letter-spacing: 0.06em`, mayúsculas. Debajo, en 0.65rem `--muted`: `PORTAL DEL ESTUDIANTE`.
- **Derecha:** matrícula en `--font-mono` 0.78rem dentro de un chip discreto (borde `--line-2`, sin relleno de color), el nombre del alumno, y un botón de texto "Cerrar sesión" sin fondo.
- Si hay pago pendiente: un chip ámbar con icono `alert` + "Adeudo" (sin emoji).

### 4.2 Navegación

Barra horizontal debajo del header, `background: var(--bg)`, borde inferior `--line`:
- Cada tab: icono 18px + texto en Inter 500, 0.85rem. Sin emoji.
- Activo: texto `--text`, icono `--accent`, borde inferior 2px `--accent`.
- Inactivo: `--muted`. Hover: `--text-2`.
- Tabs bloqueados: `--text-faint` + icono `lock`.
- Altura 46px, `gap: 0`, padding lateral 1rem por tab.

### 4.3 Tab Inicio — dashboard académico

Grid de 2 columnas en desktop (`minmax(0,1fr) 320px`), una sola columna bajo 980px.

**Columna principal:**

1. **Encabezado:** `h1` en serif "Hola, {nombre}" + línea secundaria con `Módulo 03 · Periodo 16 sep – 16 oct 2026` en `--muted` 0.85rem.

2. **Fila de 4 métricas** en un solo bloque con bordes divisorios verticales (NO 4 cards separadas con emojis). Cada métrica: label en `.label` arriba, número grande en serif abajo, y una línea de contexto en 0.75rem `--muted`.
   ```
   MÓDULOS CURSADOS   PUNTOS DE AVANCE   DÍAS CONSECUTIVOS   PROMEDIO GENERAL
   2 de 12            10,800             14                  90.5
   16.6% del programa  +150 esta semana   desde el 2 sep      2 exámenes
   ```
   El promedio general (media de las calificaciones de exámenes aprobados) es un dato nuevo y muy académico: agrégalo.

3. **"Actividad de hoy"** — reemplaza la card gamificada. Lista de 3 filas (una por asignatura), cada una con: código de asignatura en mono, título de la unidad, estado (icono check si está hecha / botón "Continuar" si no), y duración estimada (`~40 min`). Filas con divisor `--line`, sin cards individuales.

4. **Avisos** — si hay adeudo o examen disponible, una franja con borde izquierdo de 3px del color del estado, fondo `--*-dim`, icono, texto y acción. Sin esquinas redondeadas grandes.

**Columna lateral (sticky):**

- **Progreso del módulo:** barra de progreso delgada (4px) + "68 de 90 unidades" + porcentaje. Sin anillo SVG grande.
- **Próximas fechas:** lista con fecha en mono a la izquierda y evento a la derecha (pago, examen disponible, cierre de periodo).
- **Accesos directos:** continuar última unidad, ir al examen, ver expediente.

### 4.4 Tab Plan de estudios

- **Selector de módulos:** fila horizontal de 12 elementos. Cada uno: `01` en mono grande, título corto debajo, y una barra de estado de 3px (verde completado / azul en curso / gris bloqueado). El activo con fondo `--surface-2` y borde `--accent`. Sin chips redondos ni emojis.
- **Contenido del módulo:** tres columnas de asignatura. Encabezado de cada una: código en mono + nombre en Inter 600 + `28/30` a la derecha.
- **Lista de unidades:** filas densas, no nodos con círculos grandes. Cada fila: número `05` en mono `--text-faint` (40px de ancho), título, y a la derecha el estado como icono de 14px (check verde / play azul / lock gris). Altura de fila 38px, divisor `--line`, hover `--surface-2`. Las completadas siguen siendo clickeables (repaso), con el título en `--text-2`.

### 4.5 Tab Aula virtual

- **"Continuar"**: bloque destacado con borde `--line-hi` (no glow): código de asignatura, título de la unidad, barra de progreso de la asignatura y botón primario.
- **Historial reciente:** tabla real — Fecha · Código · Unidad · Aciertos. Fechas en mono.
- **Asignaturas del módulo:** tres filas con código, nombre, avance y enlace.

### 4.6 Tab Exámenes

Tabla académica, no cards:

| Módulo | Evaluación | Fecha | Calificación | Estatus | |
|---|---|---|---|---|---|
| 01 | Examen ordinario | 10 sep 2026 | **88** | Aprobado | Ver revisión |
| 02 | Examen ordinario | 12 sep 2026 | **93** | Aprobado | Ver revisión |
| 03 | Examen ordinario | — | — | Disponible | Presentar |

- Calificaciones en serif, 1.1rem, `--text`. Aprobado ≥70 en `--success`; reprobado en `--danger`.
- Estatus como texto con punto de color de 6px a la izquierda, no como badge de colores saturados.
- Fila de examen de admisión arriba, separada, con la etiqueta "Evaluación diagnóstica".

### 4.7 Tab Pagos → "Estado de cuenta"

- **Resumen** arriba en tres datos alineados: Situación (`Al corriente` / `Por vencer` / `Vencido`) · Próximo pago (fecha en mono) · Importe (mono, `$7,000.00 MXN`).
- **Tabla de colegiaturas:** Módulo · Concepto · Importe · Fecha de pago · Estatus. Los 12 renglones siempre visibles; los futuros en `--text-faint`.
- **Elimina el calendario de 12 chips de colores** — la tabla ya lo comunica y es más profesional.
- Botón de pago primario, alineado a la derecha del resumen.

### 4.8 Tab Glosario

- Barra de búsqueda arriba + filtro por módulo.
- Lista de dos columnas: término en Inter 600 + módulo de referencia en mono chico; definición debajo en `--text-2`. Divisores `--line`. Sin cards.
- Acciones (marcar repasado / eliminar) como iconos de 14px que aparecen en hover.

### 4.9 Tab Expediente académico

- **Credencial:** aquí SÍ se permite presencia visual. Card de 380×220 máx, fondo `--surface-2`, borde 1px `--gold-dim`, una franja superior de 3px en `--gold`. Foto o iniciales a la izquierda (72px, esquinas 4px, no círculo). A la derecha: nombre en **serif 1.15rem**, matrícula en mono, programa, y vigencia. Abajo, línea divisoria y `DEV SYSTEM ACADEMY · ESTUDIANTE ACTIVO` en 0.65rem `letter-spacing: 0.1em`. Sobria y elegante, como una credencial real.
- **Historial académico (kardex):** tabla con Módulo · Código · Asignatura · Unidades · Calificación · Estatus. Agrupada por módulo con fila de encabezado en `--surface-2`. Al final, fila de totales: unidades acumuladas y promedio general.
- **Datos del estudiante** y **Documentos** en dos columnas de definición (`label` arriba en mayúsculas chicas, valor abajo), no en filas con puntos suspensivos.

### 4.10 Visor de lección

- **Barra superior:** botón de cerrar (icono X), al centro el código de asignatura + "Unidad 05 de 30" en mono, y a la derecha el progreso `3/4` con una barra de 3px. Quita el chip de XP de aquí.
- **Encabezado de la unidad:** código en mono `--muted`, título en **serif**, y una línea de metadatos: `Módulo 03 · WEB-301 · ~40 min`.
- **Secciones:** conserva el carrusel, pero cada slide con `background: var(--surface)`, borde `--line`, radio 10px, y el título de sección como `.label` en mayúsculas chicas arriba.
- **"Díselo a la IA":** ya no gradiente morado. Fondo `--surface-2`, borde izquierdo de 3px `--accent`, la etiqueta `PROMPT SUGERIDO` en `.label`, el prompt en `--font-mono` 0.85rem sobre `--bg-deep` con radio 6px, y el botón "Copiar" discreto arriba a la derecha del bloque.
- **Ejercicios:** opciones como filas con borde `--line`, radio 6px, altura mínima 48px, hover `--surface-2`. Correcta: fondo `--success-dim`, borde `--success`, icono check. Incorrecta: `--danger-dim` + borde `--danger` + icono X. Sin animación de sacudida exagerada — una transición de 150ms basta.
- **Cierre de unidad:** **elimina el confeti.** En su lugar: card centrada con icono `award` en `--gold`, "Unidad completada" en serif, los aciertos (`4 de 5 a la primera`), los puntos obtenidos, y dos botones. Discreto y adulto.

### 4.11 Examen y su revisión

- Misma sobriedad: enunciado en serif, opciones como filas.
- Pantalla de resultado: calificación en **serif 3.5rem**, sello `APROBADO` en `--success` con borde, desglose por bloque en tabla, y acceso a la revisión.
- En la revisión, la respuesta correcta con fondo `--success-dim` y la del alumno (si falló) con `--danger-dim`. Etiquetas "Respuesta correcta" y "Tu respuesta" en `.label`.

---

## 5. QUÉ ELIMINAR

- Todos los emojis de la interfaz (los de `lecciones-data.js` se quedan)
- El confeti y sus `@keyframes`
- `--shadow-glow` y todo uso de glow morado
- Las fuentes Space Grotesk y Sora
- El calendario de 12 chips de colores en Pagos
- Los anillos SVG de progreso grandes (barras delgadas en su lugar)
- Las animaciones de "pop" con `scale(1.15)` en los números
- Los badges de colores saturados (sustituir por texto + punto de color)

---

## 6. REGLAS TÉCNICAS

- **Cero dependencias nuevas.** SVG inline, CSS y JS vanilla.
- **No cambies la lógica de datos.** Solo estructura HTML, clases y estilos. Las funciones de render siguen leyendo lo mismo de Supabase.
- **El HTML pone contenedores vacíos; el JS los llena.** Nada de datos escritos a mano en el HTML (este proyecto ya tuvo tres rondas de bugs por eso).
- Toda promesa con `.catch()`.
- Mobile-first: probar a 375px. La navegación con scroll horizontal; las tablas con `overflow-x: auto` dentro de su contenedor; la credencial a ancho completo.
- Accesibilidad: contraste AA en todo texto; `aria-label` en botones de solo icono; `:focus-visible` con outline `--accent` de 2px.
- `prefers-reduced-motion` respetado.

## 7. VERIFICACIÓN (en el navegador, antes de pushear)

1. Ningún emoji visible en la interfaz del portal, la lección o el examen.
2. Los 8 tabs con iconos SVG; el activo con subrayado azul.
3. Inicio: 4 métricas con divisores, "Actividad de hoy" en filas, columna lateral sticky.
4. Plan de estudios: selector de 12 módulos, unidades en filas densas de 38px.
5. Exámenes y Estado de cuenta: tablas reales, calificaciones en serif.
6. Expediente: credencial con franja dorada y kardex agrupado por módulo.
7. Lección: sin confeti; "Díselo a la IA" con bloque mono y borde azul.
8. Mobile 375px: sin scroll horizontal accidental, tablas contenidas.
9. Consola sin errores. Todo el flujo (abrir lección, responder ejercicios, completar, volver al portal) sigue funcionando.

## 8. COMMIT

Trabaja en dos commits:
1. `refactor: sistema visual institucional (tokens, tipografía, iconos SVG)` — `styles.css` + helper de iconos
2. `refactor: rediseño de pantallas del portal, lección y exámenes` — el resto

## NO TOCAR

`lecciones-data.js` · `examenes-data.js` · `glosario-data.js` · `index.html` (landing) · `netlify/` · `payment.js` · `cloud-state.js` · `platform-config.js`
