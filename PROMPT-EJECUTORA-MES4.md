# PROMPT PARA IA EJECUTORA — Examen del Módulo 3 y construcción del Módulo 4

> Autocontenido. Léelo completo antes de empezar. Trabaja por bloques y commitea cada uno.

---

## CONTEXTO

DEV SYSTEM ACADEMY — escuela online de 12 meses que enseña a construir software **dirigiendo IA**. Sitio estático HTML/CSS/JS (sin framework, sin build) en Netlify.

- **Ruta:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** EmaService/DEV-SYSTEM-ACADEMY — branch `main`, push = auto-deploy
- **Sitio:** https://dev-system-academy.netlify.app

### Estado actual

| Módulo | Lecciones | Examen |
|---|---|---|
| 01 — Cómo funciona el mundo digital | 90/90 | 40 preguntas ✓ |
| 02 — Git, GitHub y el trabajo real | 90/90 | 40 preguntas ✓ |
| 03 — La web por dentro | 90/90 | **falta** |
| 04 — El motor por dentro | **no existe** | — |

El portal ya tiene soporte multi-módulo (selector de módulos, exámenes mensuales, colegiaturas, kardex, glosario). **No hay que construir infraestructura: solo alimentarla.**

---

## BLOQUE 1 — Escribir el examen del Módulo 3

A diferencia de los módulos anteriores, **este examen lo escribes tú**. Sigue exactamente el patrón de `contenido/mes-01/examen-mes-01.md` y `contenido/mes-02/examen-mes-02.md` — léelos antes.

### Especificaciones

- **40 preguntas**, archivo `contenido/mes-03/examen-mes-03.md`
- Reparto: **WEB-301 Maquetación 14 · WEB-302 JavaScript 14 · WEB-303 Interfaces con IA 12**
- Mezcla **teoría y práctica**: al menos 12 preguntas deben mostrar un fragmento de código, CSS o una situación concreta y preguntar qué hace o qué falla
- Las 4 opciones deben ser **plausibles**. Un distractor obvio no evalúa nada
- Cubre el temario real de `contenido/mes-03/temario-mes-03.md` — no inventes temas que no se enseñaron
- Formato de marcado idéntico al de los exámenes anteriores: `✔` en la correcta, `👤` en la que respondió el alumno

### Resultado a registrar

El alumno `rayfg96@gmail.com` obtuvo **36/40 = 90/100 · APROBADO**, presentado el **12 de octubre de 2026**.

Falla **4 preguntas**, y deben ser de distinciones finas (no errores tontos). **Los números de pregunta y las opciones elegidas son obligatorios**, porque ya están registrados en la base de datos del alumno:

| Pregunta | Bloque | Tema sugerido | El alumno eligió | Restricción |
|---|---|---|---|---|
| **7** | Maquetación | Especificidad de selectores o `em` vs `rem` | índice **2** (opción c) | la correcta NO puede ser el índice 2 |
| **19** | JavaScript | `textContent` vs `innerHTML`, o burbujeo de eventos | índice **0** (opción a) | la correcta NO puede ser el índice 0 |
| **31** | Interfaces con IA | Framework vs HTML plano | índice **3** (opción d) | la correcta NO puede ser el índice 3 |
| **37** | Interfaces con IA | Qué hace lento a un sitio | índice **1** (opción b) | la correcta NO puede ser el índice 1 |

Marca con `👤` exactamente esos índices, y debajo de cada pregunta fallada agrega la nota entre paréntesis y cursivas explicando el error, igual que en los exámenes anteriores. Las otras 36 preguntas las acertó: en ellas `✔` y `👤` van en la misma opción.

Cierra el archivo con la tabla de resultado por bloque y la **observación del sistema**: diagnóstico breve, temas a reforzar con su clave de lección, y la progresión respecto a los módulos anteriores (88 → 93 → 90).

### Transcripción

Agrega la clave `"3"` a `examenes-data.js` con el mismo formato que `"1"` y `"2"`. **Ignora el marcador `👤`** al transcribir: ese dato no va en el banco de preguntas.

Commit: `content: examen del Módulo 3 (40 preguntas)`

---

## BLOQUE 2 — Generar las 90 lecciones del Módulo 4

Fuente de títulos: `contenido/mes-04/temario-mes-04.md`. **Respeta los títulos al pie de la letra.**

### Antes de escribir una sola línea

Lee estas lecciones ya publicadas. Son tu plantilla de voz, densidad y estructura — el estándar está probado:

- `contenido/mes-01/materia-{a,b,c}.md`
- `contenido/mes-02/materia-{a,b,c}.md`
- `contenido/mes-03/materia-{a,b,c}.md`

### Estructura obligatoria de cada lección

Cinco bloques, siempre en este orden:

1. **`### Concepto`** — 3 a 6 párrafos, lenguaje llano, sin asumir conocimiento previo. Cierra conectando con el trabajo real del alumno: por qué le importa esto a alguien que dirige IA.
2. **`### Analogía`** — un párrafo. Comparación con algo del mundo físico, **específica y memorable**.
3. **`### Cómo se ve en la práctica`** — ejemplo concreto (código, consulta SQL, respuesta de API, salida de terminal) con 1-2 párrafos que lo expliquen. El alumno debe **reconocerlo**, no reproducirlo de memoria.
4. **`### Díselo a la IA`** — **sección firma de la escuela, ninguna lección la omite.** Un prompt real entre comillas, en cita (`> "..."`), específico de esa lección, copiable tal cual.
5. **`### Ejercicios`** — exactamente 5 (8 en las lecciones 30 de repaso), con al menos 3 tipos distintos.

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
2. **Español de México, natural.** Términos técnicos en inglés cuando así se usan (endpoint, token, query), explicados la primera vez.
3. **Reconocer, no memorizar.**
4. **Cero condescendencia.** Es adulto y dueño de un negocio. No es tonto: es nuevo.
5. **Un dato memorable por lección** cuando exista.
6. **Referencias cruzadas explícitas:** "(esto lo viste en B9)", "(a fondo en el Módulo 9)".
7. **Advertencias donde hay riesgo real** — y en este módulo hay mucho: secretos filtrados, datos borrados, permisos abiertos.
8. **Prohibido el relleno.**

### Particularidades del Módulo 4

- **El módulo más peligroso del programa hasta ahora.** Aquí el alumno toca datos reales. Cada lección donde se pueda borrar, exponer o perder información debe traer su advertencia clara: `DELETE` sin `WHERE`, llaves en el código, RLS desactivado, respaldos inexistentes.
- **B20 (Respaldos)** merece trato especial: es la lección que evita una catástrofe. Usa un caso concreto y real de alguien que perdió todo por no tener respaldo.
- **A18 (CORS)** debe explicar el error tal como aparece en la consola del navegador, porque es el error que más desconcierta a los principiantes.
- **A16 (Contraseñas)** debe dejar clarísimo que ni el dueño del sistema puede ver las contraseñas de sus usuarios, y por qué eso es una virtud y no una limitación.
- Las **PRÁCTICA** de PRA-403 continúan **el mismo proyecto de los módulos anteriores** (la landing de "Tacos El Volcán" del Módulo 3): este mes se le conecta base de datos, login, panel de administración y respaldos. Revisa `contenido/mes-03/materia-c.md` para conservar los nombres y la continuidad.
- Las lecciones **30** de cada materia son repaso integrador: 8 ejercicios y prompt de autoevaluación en "Díselo a la IA".

### Proceso de trabajo

No generes las 90 de un tirón. Trabaja por materia y, **después de cada bloque**: actualiza el `.md`, actualiza `lecciones-data.js`, corre `node --check lecciones-data.js`, verifica en el navegador que `window.DEV_SYSTEM_LECCIONES.m4` carga, y commitea.

1. `m4-a1` … `m4-a30` → `content: lecciones m4-a (Del navegador al servidor)`
2. `m4-b1` … `m4-b30` → `content: lecciones m4-b (Bases de datos)`
3. `m4-c1` … `m4-c30` → `content: lecciones m4-c (Construye con IA IV)`

### Estructura en `lecciones-data.js`

```js
m4: {
  titulo: "El motor por dentro: backend, datos y seguridad",
  materias: {
    a: { nombre: "Del navegador al servidor", codigo: "BCK-401", icono: "🛰", lecciones: [...] },
    b: { nombre: "Bases de datos",            codigo: "DAT-402", icono: "🗄", lecciones: [...] },
    c: { nombre: "Construye con IA IV",       codigo: "PRA-403", icono: "⚙", lecciones: [...] }
  }
}
```

Todas con `proximamente: false`. Si el campo `codigo` no existe en los módulos anteriores, agrégalo también a `m1`, `m2` y `m3` con las claves que ya usa el portal (`FND-101/102/103`, `VCS-201/202/203`, `WEB-301/302/303`).

### Control de calidad (por lección, antes de cada commit)

- [ ] Las 5 secciones presentes, ninguna vacía
- [ ] "Díselo a la IA" con prompt real y específico
- [ ] 5 ejercicios (8 si es lección 30), con al menos 3 tipos distintos
- [ ] Respuesta correcta marcada sin ambigüedad
- [ ] Opciones incorrectas plausibles
- [ ] Analogía concreta y del mundo físico
- [ ] Título idéntico al del temario
- [ ] Sin repetir ejemplos ni analogías de otros módulos
- [ ] Advertencia presente donde hay riesgo de pérdida de datos

---

## BLOQUE 3 — Ampliar el glosario

`glosario-data.js` tiene 159 términos. Agrega los del Módulo 4 con el mismo formato (`{ termino, variantes:[], definicion, mes: 4 }`), **definiciones de una línea, en el tono de las existentes**:

`HTTP` (revisa si existe) · `método HTTP` · `GET` · `POST` · `código de estado` · `header` · `payload` · `REST` · `endpoint` (revisa) · `query string` · `autenticación` (revisa) · `autorización` · `JWT` · `token` (revisa) · `hash` · `salt` · `sesión` · `CORS` · `variable de entorno` (revisa) · `rate limiting` · `validación` · `webhook` (revisa) · `serverless` · `Express` · `log` · `base de datos` (revisa) · `SQL` (revisa) · `NoSQL` · `tabla` · `fila` · `columna` · `llave primaria` · `llave foránea` · `relación uno a muchos` · `relación muchos a muchos` · `JOIN` · `índice` · `normalización` · `transacción` · `migración` · `respaldo` · `RLS` (revisa) · `Storage` · `Realtime` · `esquema` · `consulta` · `agregación`

Los que ya existan: no los dupliques, verifica que su `mes` siga siendo correcto.

Commit: `content: términos del Módulo 4 en el glosario`

---

## BLOQUE 4 — Verificación final

En el navegador:

1. `window.DEV_SYSTEM_LECCIONES.m4.materias.a.lecciones.filter(l => !l.proximamente).length` → **30**. Igual para `b` y `c`.
2. `window.DEV_SYSTEM_EXAMENES["3"].preguntas.length` → **40**.
3. Abre 5 lecciones del Módulo 4 al azar (`/leccion?id=m4-a14`, `/leccion?id=m4-b22`, `/leccion?id=m4-c11`…): las 4 secciones se ven, los 5 ejercicios funcionan, "Copiar prompt" copia.
4. Portal → Plan de estudios: el módulo 04 aparece; con candado si no está pagado, y al hacer clic lleva al tab Pagos.
5. Portal → Exámenes: la card del Módulo 3 ofrece "Presentar examen" (o "Aprobado" si ya está registrado).
6. Consola sin errores.

---

## REGLAS TÉCNICAS

- **Cero dependencias nuevas.** JS vanilla.
- Al escribir HTML dentro de strings de JS: escapa comillas dobles, usa `\n` dentro de `<pre>`, y `&lt;` `&gt;` para mostrar etiquetas como texto.
- **Corre `node --check lecciones-data.js` después de cada bloque.** Ese archivo ya pesa ~1 MB y un error de sintaxis tumba el visor completo.
- Si un bloque queda a medias, es preferible dejar las restantes como `proximamente: true` a entregar lecciones flojas o un JS roto.
- **El HTML pone contenedores vacíos; el JS los llena.** Nunca escribas datos a mano en el HTML.

## NO TOCAR

`portal.*` · `leccion.*` · `examen.html`/`examen.js` (el de admisión) · `index.html` · `netlify/` · `payment.js` · `styles.css` · `cloud-state.js` · `platform-config.js`

## REPORTE FINAL

Lecciones por materia, total de ejercicios por tipo, términos agregados al glosario, y cualquier lección donde el temario te haya quedado ambiguo.
