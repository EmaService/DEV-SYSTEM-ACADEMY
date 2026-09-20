# PROMPT PARA IA EJECUTORA — Correcciones del portal (header, glosario y datos)

> Autocontenido. Son defectos visibles reportados por el cliente sobre el rediseño del commit `100ee5b`. Trabaja quirúrgicamente; no rehagas lo que ya quedó bien.

---

## CONTEXTO

DEV SYSTEM ACADEMY — portal del estudiante. Sitio estático HTML/CSS/JS en Netlify.

- **Ruta:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** EmaService/DEV-SYSTEM-ACADEMY — branch `main`
- **Archivos:** `portal.html`, `portal.js`, `styles.css`
- El rediseño institucional (tipografía serif, paleta, iconos SVG) ya está aplicado y **debe conservarse**.

---

## FIX 1 — El header y los tabs están pegados al borde de la pantalla

### Causa

En `styles.css`:
```css
.container            { width: min(var(--container), calc(100% - 2.5rem)); margin-inline: auto; }  /* línea ~84 */
.portal-header-inner  { ... width: 100%; }                                                          /* línea ~99 */
```

`.portal-header-inner` tiene la misma especificidad que `.container` pero aparece después, así que su `width: 100%` **anula el ancho contenido**. El header queda al ras.

Además, `<nav class="portal-tabs">` no envuelve sus botones en ningún contenedor, así que los tabs arrancan pegados a la izquierda.

### Solución

1. En `.portal-header-inner`, **elimina `width: 100%`**. Que el `.container` haga su trabajo. Si necesitas que ocupe todo el ancho disponible del contenedor, usa `flex: 1` en los hijos, no `width` en el padre.

2. Envuelve los botones de los tabs en un contenedor centrado. Cambia la estructura a:
```html
<nav class="portal-tabs" id="portal-tabs">
  <div class="container portal-tabs-inner">
    <button ...>…</button>
    …
  </div>
</nav>
```
Y en CSS:
```css
.portal-tabs { position: sticky; top: 60px; z-index: 99; background: var(--bg); border-bottom: 1px solid var(--line); }
.portal-tabs-inner { display: flex; gap: 0; overflow-x: auto; scrollbar-width: none; }
.portal-tabs-inner::-webkit-scrollbar { display: none; }
```
**Importante:** `initTabs()` y `switchTab()` en `portal.js` buscan los botones con `.portal-tabs button` — ese selector sigue funcionando con el div intermedio. Verifica que la navegación no se rompa.

3. Revisa que **ninguna otra regla** del CSS le ponga `width: 100%` a un elemento que ya tenga la clase `.container`. Busca el patrón y corrígelo donde aparezca.

4. En móvil (≤540px), el `.container` ya reduce su margen. Confirma que header y tabs respeten ese margen y que los tabs sigan scrolleando horizontalmente.

---

## FIX 2 — El chip "Pago pendiente" se ve mal

Actualmente es un chip rojo saturado con borde redondeado que rompe la sobriedad del header.

Rediseño:
```css
.adeudo-chip {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  border: 1px solid var(--warn);
  border-radius: var(--radius);
  background: var(--warn-dim);
  color: var(--warn);
  font-size: 0.72rem; font-weight: 600;
  letter-spacing: 0.02em;
}
```
Texto: `Adeudo` (una palabra), precedido del icono `alert` de 13px. No "Pago pendiente" en rojo.

---

## FIX 3 — Eliminar el widget de glosario huérfano

En `portal.html` existe un bloque legacy que el cliente ve como un recuadro suelto con una **X** flotante y el texto *"Los términos se muestran en la sección Marcadores"*:

```html
<section id="glosario-card" class="glosario-widget reveal" style="display:none">
  <button id="glosario-toggle-btn" class="glosario-widget-header">…</button>
  <div id="glosario-drawer" class="glosario-drawer">…</div>
</section>
```

**Elimínalo por completo** del HTML. Después, en `portal.js` y `styles.css`:

- Borra todo el código que referencie `glosario-card`, `glosario-toggle-btn`, `glosario-drawer`, `glosario-count` y `glosario-widget*`.
- Borra las reglas CSS de `.glosario-widget`, `.glosario-widget-header` y `.glosario-drawer*`.
- Verifica que `renderGlosario()` y el tab Glosario sigan funcionando (esos usan otros contenedores).

Este bloque aparecía dos veces en pantalla porque otro código lo mostraba. Al eliminarlo desaparecen ambas apariciones.

---

## FIX 4 — Términos falsos escritos a mano en el HTML

En `portal.html` (~líneas 278-280) hay tres términos hardcodeados que **no existen en el glosario real** del alumno:

```html
<div class="glosario-item"><span class="glosario-termino">Algoritmo</span><p class="glosario-def">Conjunto de instrucciones ordenadas…</p></div>
<div class="glosario-item"><span class="glosario-termino">Variable</span>…</div>
<div class="glosario-item"><span class="glosario-termino">API</span>…</div>
```

Bórralos. Ese contenedor debe quedar **vacío** y llenarse solo desde `glosario-data.js` con los términos del módulo actual que el alumno todavía no ha guardado.

**Regla general de este proyecto, que se ha violado tres veces:** el HTML pone contenedores vacíos, el JS los llena. Si el JS falla, debe verse vacío — nunca información falsa. Recorre `portal.html` completo y elimina cualquier otro dato escrito a mano (nombres, números, fechas, estados, listas de ejemplo).

---

## FIX 5 — Rediseñar el tab Glosario

Actualmente son cards con la acción "Repasado" y una X sueltas a la derecha. Reemplaza por lista densa:

**Encabezado:** campo de búsqueda (filtra por término en vivo) + selector de módulo (`Todos`, `Módulo 01`, …). A la derecha, el conteo en `.label`: `12 TÉRMINOS · 3 POR REPASAR`.

**Cada término:** fila con divisor `--line`, padding vertical 0.8rem:
- Izquierda: término en Inter 600, 0.92rem. Debajo, la definición en `--text-2`, 0.85rem.
- Derecha: el módulo de referencia en `--font-mono` 0.72rem `--muted` (`MÓD. 03`). Si el término no está en el glosario maestro, muestra `SIN CLASIFICAR` en vez de "Próximamente".
- Las acciones (marcar repasado / eliminar) como iconos de 14px que **solo aparecen en hover** (en móvil, siempre visibles). Nada de checkbox con etiqueta "Repasado" ni X grande.
- Los términos ya repasados: término en `--muted` y un icono `check` pequeño en `--success` a la izquierda del módulo.

**"Términos sugeridos":** misma estructura de lista, con un botón de texto "Agregar" a la derecha de cada fila. Encabezado de sección en `.label`, no en serif grande.

---

## FIX 6 — Bugs de datos visibles en el dashboard

### 6.1 "Tu día de hoy" se queda en *Cargando…*

La función que lo llena tiene una promesa que no resuelve o no tiene `.catch`. Arréglalo con el patrón que ya se usa en el resto del portal: pinta un estado inicial, mejora cuando lleguen los datos, y **siempre** `.catch` que deje un mensaje legible (`"No pudimos cargar tu actividad de hoy."`) en vez de dejar "Cargando…" para siempre.

### 6.2 "Periodo actual: Enero 2026"

El periodo se está calculando mal. Debe salir del pago más reciente en `monthly_payments`:

- `inicioPeriodo` = fecha del pago del módulo más alto pagado
- `finPeriodo` = `inicioPeriodo` + 1 mes (usa los helpers `fechaBase` y `sumarMeses` que ya existen en `portal.js` — no reimplementes la aritmética de fechas)
- Muestra: `16 sep – 16 oct 2026` (rango, no un mes suelto)
- El avance del periodo es el porcentaje de días transcurridos, no 0%

Si no hay pagos, muestra `—` y oculta la barra.

### 6.3 "Tu mensualidad vence en 0 día(s)"

Redacta los mensajes en lenguaje natural, sin `día(s)`:

| Situación | Texto |
|---|---|
| Vence hoy | `Tu mensualidad vence hoy. Paga para acceder al Módulo {N}.` |
| Vence mañana | `Tu mensualidad vence mañana.` |
| Faltan 2-5 días | `Tu mensualidad vence en {N} días.` |
| Vencida | `Tu mensualidad venció el {fecha}. Paga para acceder al Módulo {N}.` |

Si está vencida, el banner usa `--danger`; si está por vencer, `--warn`.

### 6.4 Subtexto redundante en las métricas

La métrica "Puntos de avance" tiene como subtexto "Puntos de avance". Los subtextos deben aportar contexto:

| Métrica | Subtexto |
|---|---|
| Módulos cursados | `17% del programa` |
| Puntos de avance | `{N} unidades completadas` |
| Días consecutivos | Si es 0: `Retoma hoy tu racha`. Si ≥1: `Desde el {fecha}` |
| Promedio general | `{N} exámenes aprobados` |

Y quita el guion suelto (`—`) que aparece bajo "Días consecutivos".

### 6.5 "Estado de certificación" mal ubicado

Ese texto está dentro de la card "Tu día de hoy", donde no corresponde. Muévelo a la columna lateral, como una línea discreta bajo el progreso del módulo, en `--muted` 0.78rem. Si no hay columna lateral todavía, ponlo al final de la sección de Inicio, no dentro de otra card.

---

## FIX 7 — Emojis que sobrevivieron

Quedan 9 emojis a color en la interfaz. Sustitúyelos por los iconos SVG de `icons.js`:

| Emoji | Dónde | Reemplazo |
|---|---|---|
| ❌ (×5) | Feedback de ejercicio incorrecto (`leccion.js`) | icono `x` en `--danger` |
| 👤 | Avatar por defecto de la credencial | Iniciales del alumno en serif sobre `--surface-3` |
| 🎉 | Cierre de unidad | icono `award` en `--gold` |
| 🔒 | Estado bloqueado | icono `lock` |
| 📖 | Glosario | icono `marcadores` |
| ✨ | Donde aparezca | eliminar |

Los caracteres tipográficos `✓ ✔ ✕` pueden quedarse dentro de texto corrido, pero donde funcionen como **indicador de estado** (listas de unidades, tablas, documentos) usa el icono SVG `check` en `--success`.

También elimina la regla CSS huérfana de `confetti` que quedó en `styles.css`.

---

## VERIFICACIÓN (en el navegador, antes de pushear)

1. Header y tabs alineados con el contenido: el logo arranca a la misma altura que el título "Hola, Raymundo", y "Cerrar sesión" termina donde termina la última métrica.
2. A 375px de ancho: header y tabs con margen lateral, tabs scrolleables, sin scroll horizontal de página.
3. No existe ningún recuadro suelto de "Mi glosario" en ninguna sección.
4. El tab Glosario muestra **solo** términos reales del alumno, con buscador y filtro por módulo.
5. "Tu día de hoy" muestra las 3 asignaturas (o un mensaje de error), nunca "Cargando…" permanente.
6. Periodo actual: `16 sep – 16 oct 2026` con el avance de días correcto.
7. El banner dice "vence hoy", no "en 0 día(s)".
8. Ningún emoji a color en la interfaz.
9. Consola sin errores; la navegación entre los 8 tabs sigue funcionando.

## COMMIT

`fix: alineación del header, glosario huérfano, datos del dashboard y emojis restantes` y push.

## NO TOCAR

`lecciones-data.js` · `examenes-data.js` · `glosario-data.js` · `index.html` · `netlify/` · `payment.js` · `cloud-state.js` · `platform-config.js`
