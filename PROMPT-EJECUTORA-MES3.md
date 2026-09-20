# PROMPT PARA IA EJECUTORA — Cerrar el Mes 2 y construir el Mes 3

> Autocontenido. Léelo completo antes de empezar. Trabaja por bloques y commitea cada uno.

---

## CONTEXTO

DEV SYSTEM ACADEMY — escuela online de 12 meses que enseña a construir software **dirigiendo IA**. Sitio estático HTML/CSS/JS en Netlify.

- **Ruta:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** EmaService/DEV-SYSTEM-ACADEMY — branch `main`, push = auto-deploy
- **Último commit relevante de contenido:** `e850e38`

### Estado actual

| | Lecciones | Examen |
|---|---|---|
| Mes 1 — Cómo funciona el mundo digital | 90/90 en `lecciones-data.js` | 40 preguntas en `examenes-data.js` |
| Mes 2 — Git, GitHub y el trabajo real | 90/90 en `lecciones-data.js` | **escrito en .md, falta transcribir** |
| Mes 3 — La web por dentro | **no existe** | — |

El portal ya tiene **soporte multi-mes** (selector de meses en Plan de estudios, exámenes mensuales, colegiaturas, kardex). No hay que construir infraestructura nueva: solo alimentarla con el Mes 3.

---

## BLOQUE 1 — Transcribir el examen del Mes 2

Fuente: `contenido/mes-02/examen-mes-02.md` (40 preguntas: bloque A Git 14, bloque B GitHub 14, bloque C IA II 12).

Agrega la clave `"2"` a `examenes-data.js` con el mismo formato que la `"1"`:

```js
window.DEV_SYSTEM_EXAMENES = {
  "1": { titulo: "...", preguntas: [...] },
  "2": {
    titulo: "Examen del Mes 2 — Git, GitHub y el trabajo real con código",
    preguntas: [ { pregunta, opciones: [...], correcta: idx }, ... ]
  }
};
```

- La respuesta correcta está marcada con `✔`. **Ignora el marcador `👤`** (indica lo que respondió el alumno; no va en el banco).
- Transcribe el texto exacto, incluyendo los bloques de código de las preguntas prácticas.
- Escapa las comillas dentro de los strings.

**Verifica al terminar:** `window.DEV_SYSTEM_EXAMENES["2"].preguntas.length === 40` y que ninguna pregunta tenga menos de 4 opciones o un índice `correcta` fuera de rango.

Commit: `content: examen del Mes 2 (40 preguntas)`

---

## BLOQUE 2 — Generar las 90 lecciones del Mes 3

Fuente de títulos: `contenido/mes-03/temario-mes-03.md`. **Respeta los títulos al pie de la letra.**

### Antes de escribir una sola línea

Lee estas lecciones ya publicadas. Son tu plantilla de voz, densidad y estructura — el estándar está probado y no se negocia:

- `contenido/mes-01/materia-a.md`, `materia-b.md`, `materia-c.md`
- `contenido/mes-02/materia-a.md`, `materia-b.md`, `materia-c.md`

### Estructura obligatoria de cada lección

Cinco bloques, siempre en este orden:

1. **`### Concepto`** — 3 a 6 párrafos. Lenguaje llano, sin asumir conocimiento previo. Cierra conectando el concepto con el trabajo real del alumno: por qué le importa esto a alguien que dirige IA.
2. **`### Analogía`** — un párrafo. Comparación con algo del mundo físico, **específica y memorable**. Nada de "es como una caja".
3. **`### Cómo se ve en la práctica`** — un ejemplo concreto (código, salida de terminal, fragmento de CSS, árbol de archivos) con 1-2 párrafos que lo expliquen. El alumno debe poder **reconocerlo**, no reproducirlo de memoria.
4. **`### Díselo a la IA`** — **sección firma de la escuela, ninguna lección la omite.** Un prompt real entre comillas, en formato de cita (`> "..."`), específico de esa lección, que el alumno pueda copiar y pegar.
5. **`### Ejercicios`** — exactamente 5 (8 en las lecciones 30 de repaso), mezclando al menos 3 tipos distintos.

### Los 6 tipos de ejercicio

```
{ tipo:"multiple",   pregunta, opciones:[4], correcta: idx }
{ tipo:"completar",  frase:"... ____ ... ____", banco:[...], respuestas:[...] }
{ tipo:"relacionar", pares:[[izq,der], ...] }          // 3 a 5 pares
{ tipo:"vf",         afirmacion, correcta: bool, explicacion }
{ tipo:"ordenar",    instruccion, elementos:[...] }     // en orden CORRECTO
{ tipo:"quehace",    codigo, pregunta, opciones:[4], correcta: idx }
```

En los `.md` se marcan con `**[opción múltiple]**`, `**[completar]**`, `**[relacionar]**`, `**[verdadero/falso]**`, `**[ordenar]**`, `**[qué hace]**`, y la correcta con `✔` o `- Respuesta: ...`.

### Reglas de voz (es lo que distingue a esta escuela)

1. **Tuteo directo.** "Vas a ver", "te conviene". Nunca "el alumno debe".
2. **Español de México, natural.** Términos técnicos en inglés cuando así se usan (flexbox, grid, fetch), explicados la primera vez.
3. **Reconocer, no memorizar.** El objetivo es que identifique lo que ve.
4. **Cero condescendencia.** Es adulto y dueño de un negocio. No es tonto: es nuevo.
5. **Un dato memorable por lección** cuando exista.
6. **Referencias cruzadas explícitas:** "(esto lo viste en A14)", "(a fondo en el Mes 9)".
7. **Advertencias donde hay riesgo real.**
8. **Prohibido el relleno.** Si da para 4 párrafos, son 4 párrafos.

### Particularidades del Mes 3

- La materia A es **visual**: los ejemplos de CSS deben incluir el código Y una descripción de qué se ve en pantalla. Cuando expliques Flexbox o Grid, describe la disposición resultante con texto (`[ A ][ B ][ C ]`) para que se entienda sin imagen.
- La materia B construye una habilidad acumulativa: para B21 (`fetch`) el alumno ya debe manejar DOM, eventos, arreglos y async. Respeta ese orden.
- Las **PRÁCTICA** de la materia C son accionables paso a paso y **construyen un solo proyecto que evoluciona**: una landing de negocio que arranca en C2 y termina en C30 como web app completa (responsive, dark mode, catálogo desde datos, buscador, formulario, estados, SEO). Nombra el negocio de forma consistente a lo largo del mes.
- Las lecciones **30** de cada materia son repaso integrador: 8 ejercicios y un prompt de autoevaluación en "Díselo a la IA".

### Proceso de trabajo

No generes las 90 de un tirón. Trabaja por materia, y **después de cada bloque**: actualiza el `.md`, actualiza `lecciones-data.js`, corre `node --check lecciones-data.js`, verifica en el navegador que `window.DEV_SYSTEM_LECCIONES.m3` carga, y haz commit.

1. `m3-a1` … `m3-a30` → commit `content: lecciones m3-a (Maquetación)`
2. `m3-b1` … `m3-b30` → commit `content: lecciones m3-b (JavaScript)`
3. `m3-c1` … `m3-c30` → commit `content: lecciones m3-c (Interfaces con IA)`

### Estructura en `lecciones-data.js`

```js
m3: {
  titulo: "La web por dentro: interfaces que se ven bien y funcionan",
  materias: {
    a: { nombre: "Maquetación: HTML y CSS", icono: "🎨", lecciones: [...] },
    b: { nombre: "JavaScript en el navegador", icono: "⚡", lecciones: [...] },
    c: { nombre: "Construye con IA III", icono: "🖼", lecciones: [...] }
  }
}
```

IDs: `m3-a1` … `m3-a30`, `m3-b1` … `m3-b30`, `m3-c1` … `m3-c30`. Todas con `proximamente: false`.

Cada lección:
```js
{
  id, titulo, proximamente: false,
  secciones: [
    { tipo:"concepto", titulo:"Concepto", html:"<p>...</p>" },
    { tipo:"analogia", titulo:"Analogía", html:"<p>...</p>" },
    { tipo:"practica", titulo:"Cómo se ve en la práctica", html:"<p>...</p><pre><code>...</code></pre>" },
    { tipo:"prompt",   titulo:"Díselo a la IA", html:"<blockquote><p>...</p></blockquote>" }
  ],
  ejercicios: [ ... ]
}
```

### Control de calidad (por lección, antes de cada commit)

- [ ] Las 5 secciones presentes, ninguna vacía
- [ ] "Díselo a la IA" con prompt real y específico de esa lección
- [ ] 5 ejercicios (8 si es lección 30), con al menos 3 tipos distintos
- [ ] Respuesta correcta marcada sin ambigüedad
- [ ] Opciones incorrectas **plausibles** — un distractor obvio no enseña nada
- [ ] Analogía concreta y del mundo físico
- [ ] Título idéntico al del temario
- [ ] Sin repetir ejemplos ni analogías ya usadas en otro mes

---

## BLOQUE 3 — Ampliar el glosario con términos del Mes 3

`glosario-data.js` tiene 119 términos. Agrega los del Mes 3 con el mismo formato (`{ termino, variantes:[], definicion, mes }`), **definiciones de una sola línea, en el tono de las existentes**:

`DOM` · `etiqueta semántica` · `modelo de caja` (box model) · `padding` · `margin` · `selector` · `especificidad` · `cascada` · `rem` · `viewport` · `flexbox` · `grid` · `media query` · `breakpoint` · `mobile-first` · `responsive` (ya existe, revisa) · `transición` · `querySelector` · `evento` · `listener` · `preventDefault` · `innerHTML` · `template literal` · `map` · `filter` · `localStorage` · `asincronía` · `promesa` · `async/await` · `fetch` · `endpoint` (ya existe) · `estado de carga` · `breakpoint del debugger` · `módulo` · `import/export` · `props` · `estado` (state) · `componente` (ya existe, revisa) · `hidratación` · `SSR` · `Open Graph` · `meta tag` · `favicon` · `lazy loading` · `WebP`

Los que ya existan: no los dupliques, revisa que su `mes` siga siendo correcto.

Commit: `content: términos del Mes 3 en el glosario`

---

## BLOQUE 4 — Verificación final

En el navegador, con sesión iniciada:

1. `window.DEV_SYSTEM_LECCIONES.m3.materias.a.lecciones.filter(l => !l.proximamente).length` → **30**. Igual para `b` y `c`.
2. `window.DEV_SYSTEM_EXAMENES["2"].preguntas.length` → **40**.
3. Abre 5 lecciones del Mes 3 al azar (`/leccion?id=m3-a19`, `/leccion?id=m3-b21`, `/leccion?id=m3-c14`…): las 4 secciones se ven, los 5 ejercicios funcionan, el botón "Copiar prompt" copia.
4. Portal → **Plan de estudios**: el chip M3 aparece; si el alumno aún no lo ha pagado debe verse con candado y llevar al tab Pagos al hacer clic.
5. Portal → **Exámenes**: la card del Mes 2 debe ofrecer "Presentar examen" (o "Aprobado" si ya está registrado en `month_exams`).
6. Consola sin errores.

---

## REGLAS TÉCNICAS

- **Cero dependencias nuevas.** JS vanilla.
- Al escribir HTML dentro de strings de JS: escapa comillas dobles, usa `\n` para saltos dentro de `<pre>`, y `&lt;` `&gt;` cuando muestres etiquetas como texto.
- **Verifica `node --check lecciones-data.js` después de cada bloque.** Un error de sintaxis en ese archivo tumba el visor completo.
- Si un bloque queda a medias, es preferible dejar las restantes como `proximamente: true` a entregar lecciones flojas o un JS roto.

## NO TOCAR

`index.html` · `portal.*` · `leccion.*` · `checkout.*` · `login.*` · `examen.html`/`examen.js` (el de admisión) · `netlify/` · `payment.js` · `styles.css` · `humanizador-*`

## REPORTE FINAL

Cuántas lecciones por materia, total de ejercicios por tipo, términos agregados al glosario, y cualquier lección donde el temario te haya quedado ambiguo.
