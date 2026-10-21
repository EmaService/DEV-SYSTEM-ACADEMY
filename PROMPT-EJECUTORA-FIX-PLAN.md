# PROMPT PARA IA EJECUTORA — Rediseñar el tab "Plan de estudios"

> Autocontenido. Es un defecto reportado por el cliente: *"está súper mal responsive, no entiendo ni cómo moverlo, está extraño"*. Trabaja quirúrgicamente sobre ese tab.

---

## CONTEXTO

DEV SYSTEM ACADEMY — portal del estudiante. Sitio estático HTML/CSS/JS en Netlify.

- **Ruta:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** EmaService/DEV-SYSTEM-ACADEMY — branch `main`
- **Archivos:** `portal.html`, `portal.js`, `styles.css`
- El rediseño institucional (serif Source Serif 4, paleta neutra, iconos SVG de `icons.js`) ya está aplicado y **debe conservarse**.

---

## LOS 4 PROBLEMAS

### 1. Los 12 módulos están escritos a mano en el HTML

En `portal.html`, dentro de `<section id="plan">`, hay 12 `<button>` hardcodeados:

```html
<div id="month-chips" style="display:flex;gap:0.4rem;overflow-x:auto;...">
  <button class="stat-chip chip-nivel active" style="flex-shrink:0;..." data-month="1">Mes 1</button>
  ... (12 veces) ...
</div>
```

Problemas: dicen **"Mes"** en vez de **"Módulo"**, no muestran el título del módulo ni su estado, usan la clase `stat-chip chip-nivel` que pertenece a las métricas del hero (reutilizada fuera de contexto), y llevan estilos inline.

### 2. Scroll horizontal sin ninguna pista visual

Los 12 chips viven en una fila con `overflow-x:auto`. En pantallas angostas se cortan a la mitad y **el usuario no tiene forma de saber que puede deslizar**. Es literalmente la queja del cliente.

### 3. Mismatch de IDs: parte del render no se ejecuta

`renderPlan()` en `portal.js` busca `getElementById("plan-curriculum-root")` y `getElementById("plan-roadmap-root")`. **Ninguno de los dos existe** en el HTML (que solo tiene `curriculum-root` y `month-chips`). Esas ramas de código mueren silenciosamente.

### 4. En móvil se apilan 90 lecciones en una columna

`@media (max-width: 900px) { .roadmap-grid { grid-template-columns: 1fr; } }` convierte las 3 asignaturas en una sola columna vertical: 90 renglones seguidos, imposible de navegar.

---

## EL REDISEÑO

### A. Selector de módulos: rejilla, no fila con scroll

Reemplaza la fila horizontal por una **rejilla donde los 12 módulos se ven completos de un vistazo**. Sin scroll, sin adivinanzas.

**HTML** — el contenedor queda VACÍO; lo llena `portal.js`:

```html
<section id="plan" class="tab-content">
  <p class="label">Plan de estudios</p>
  <div id="month-chips" class="modulos-grid"></div>
  <div id="plan-detalle"></div>
</section>
```

**CSS:**

```css
.modulos-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 0.6rem; margin: 0.8rem 0 1.4rem; }
@media (max-width: 1080px) { .modulos-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
@media (max-width: 760px)  { .modulos-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }

.modulo-card {
  position: relative; text-align: left; cursor: pointer;
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--radius-lg); padding: 0.75rem 0.8rem 0.85rem;
  font: inherit; color: var(--text-2); overflow: hidden;
  transition: border-color 0.15s, background 0.15s;
}
.modulo-card:hover:not(.modulo-bloqueado) { border-color: var(--line-2); background: var(--surface-2); }
.modulo-card.activo { border-color: var(--accent); background: var(--surface-2); }
.modulo-card.modulo-bloqueado { opacity: 0.5; cursor: pointer; }

.modulo-num   { font-family: var(--font-mono); font-size: 1.15rem; font-weight: 500; color: var(--text); line-height: 1; }
.modulo-card.activo .modulo-num { color: var(--accent); }
.modulo-titulo{ display: block; margin-top: 0.35rem; font-size: 0.76rem; line-height: 1.3; color: var(--muted); min-height: 2em; }
.modulo-estado{ display: flex; align-items: center; gap: 0.3rem; margin-top: 0.5rem; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
.modulo-barra { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: var(--line); }
.modulo-barra span { display: block; height: 100%; }
```

**Contenido de cada tarjeta** (lo genera el JS):
- Número en mono con cero a la izquierda: `01` … `12`
- Título corto del módulo (de `DEV_SYSTEM_CONFIG.monthTitles`)
- Estado con punto de color de 6px + texto:

| Estado | Condición | Color | Texto | Barra inferior |
|---|---|---|---|---|
| Completado | pagado y todas sus unidades publicadas hechas | `--success` | `Completado` | 100% verde |
| En curso | pagado, con unidades pendientes | `--accent` | `En curso` | % real en azul |
| Pagado | pagado, sin avance | `--accent` | `Disponible` | 0% |
| Bloqueado | no pagado | `--text-faint` | `Bloqueado` + icono `lock` de 11px | sin barra |

Al hacer clic en un módulo **bloqueado**, lleva al tab Pagos (`switchTab("pagos")`), como ya hace el código actual.

### B. Detalle del módulo: tabs de asignatura en móvil

Debajo de la rejilla va `#plan-detalle`, que el JS llena con:

1. **Encabezado del módulo:** `MÓDULO 03` en `.label`, y debajo el título completo en serif (`h2`).

2. **Tabs de asignatura** — visibles **solo en móvil** (`@media (max-width: 900px)`). Tres botones con el código de asignatura (`WEB-301`, `WEB-302`, `WEB-303`) y el avance (`28/30`). Mismo lenguaje visual que los tabs del portal: texto, borde inferior de 2px en el activo, sin fondo.

3. **Rejilla de asignaturas:** las 3 columnas actuales en desktop. En móvil, solo se muestra la asignatura del tab activo:

```css
.roadmap-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 1rem; }
.asignatura-tabs { display: none; }
@media (max-width: 900px) {
  .roadmap-grid { grid-template-columns: 1fr; }
  .asignatura-tabs { display: flex; gap: 0; border-bottom: 1px solid var(--line); margin-bottom: 0.9rem; }
  .roadmap-col { display: none; }
  .roadmap-col.asignatura-activa { display: block; }
}
```

4. **Encabezado de cada asignatura:** código en mono `--muted` 0.72rem, nombre en Inter 600 0.92rem, y el avance `28/30` alineado a la derecha en mono.

5. **Lista de unidades** — filas densas, como ya están pero afinadas:

```css
.roadmap-node { display: grid; grid-template-columns: 28px 1fr 16px; gap: 0.5rem; align-items: center; min-height: 38px; padding: 0 0.35rem; border-bottom: 1px solid var(--line); font-size: 0.82rem; }
.roadmap-node:last-child { border-bottom: 0; }
.roadmap-node .node-num { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-faint); }
.roadmap-node .node-title { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.roadmap-node .node-ico { display: flex; justify-content: flex-end; }
```

Estado de cada unidad, con icono SVG de 14px en la tercera columna:
- Completada: icono `check` en `--success`, título en `--text-2`. **Sigue siendo clickeable** (repaso).
- Disponible: icono `play` en `--accent`, título en `--text`, peso 500.
- Bloqueada: icono `lock` en `--text-faint`, título en `--text-faint`, sin enlace.

Quita el `border-left` y el `margin-left` actuales del nodo: ensucian la lista.

### C. Elimina el código muerto

- Borra del HTML los 12 `<button>` hardcodeados y todos sus estilos inline.
- En `renderPlan()`, elimina o corrige las referencias a `plan-curriculum-root` y `plan-roadmap-root`. Deja **un solo** contenedor: `#plan-detalle`.
- Deja de usar `stat-chip` / `chip-nivel` fuera del hero.

---

## REGLAS

- **Cero dependencias nuevas.** JS vanilla, SVG de `icons.js`.
- **El HTML pone contenedores vacíos; el JS los llena.** Es la cuarta vez que este proyecto se rompe por datos escritos a mano en el HTML.
- Todas las promesas con `.catch()` que dejen un estado visible.
- Cuidado con los closures en loops: usa IIFE o `let` al capturar variables dentro de callbacks.
- Limpia el contenedor (`innerHTML = ""`) antes de volver a pintar; nunca acumules con `+=`.

## VERIFICACIÓN (en el navegador, obligatoria antes de pushear)

1. **Desktop 1440px:** los 12 módulos en rejilla de 4 columnas, todos visibles sin scroll. El activo con borde azul.
2. **Tablet 900px:** rejilla de 3 columnas; aparecen los tabs de asignatura y solo se ve una asignatura a la vez.
3. **Móvil 375px:** rejilla de 2 columnas; tabs de asignatura funcionando; las unidades legibles sin desbordarse; **cero scroll horizontal en la página**.
4. Clic en un módulo bloqueado → lleva al tab Pagos.
5. Clic en una unidad completada → abre la lección (repaso).
6. Los estados se ven correctos: Módulos 01 y 02 completados, 03 según avance, 04-12 bloqueados.
7. Consola sin errores.

## COMMIT

`fix: rediseño del plan de estudios — rejilla de módulos y tabs de asignatura en móvil` y push.

## NO TOCAR

`lecciones-data.js` · `examenes-data.js` · `glosario-data.js` · `index.html` · `netlify/` · `payment.js` · `cloud-state.js`
