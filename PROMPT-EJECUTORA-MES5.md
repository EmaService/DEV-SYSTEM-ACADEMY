# PROMPT PARA IA EJECUTORA — Terminar el Módulo 4, su examen, y construir el Módulo 5

> Autocontenido. Léelo completo antes de empezar. Son **tres bloques grandes**: trabaja en orden y commitea cada uno.

---

## CONTEXTO

DEV SYSTEM ACADEMY — escuela online de 12 meses que enseña a construir software **dirigiendo IA**. Sitio estático HTML/CSS/JS (sin framework, sin build) en Netlify.

- **Ruta:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** EmaService/DEV-SYSTEM-ACADEMY — branch `main`, push = auto-deploy
- **Sitio:** https://dev-system-academy.netlify.app

### Estado actual

| Módulo | Unidades | Examen |
|---|---|---|
| 01 — Cómo funciona el mundo digital | 90/90 ✓ | 40 preguntas ✓ |
| 02 — Git, GitHub y el trabajo real | 90/90 ✓ | 40 preguntas ✓ |
| 03 — La web por dentro | 90/90 ✓ | 40 preguntas ✓ |
| **04 — El motor por dentro** | **11 de 90** ⚠️ | **falta** |
| **05 — La máquina que piensa** | **no existe** | — |

El portal ya tiene soporte multi-módulo (rejilla de módulos, exámenes mensuales, colegiaturas, kardex, glosario). **No hay que construir infraestructura: solo alimentarla.**

---

## ANTES DE ESCRIBIR UNA SOLA LÍNEA

Lee estas unidades ya publicadas. Son tu plantilla de voz, densidad y estructura — el estándar está probado en 281 unidades:

- `contenido/mes-01/materia-{a,b,c}.md`
- `contenido/mes-03/materia-{a,b,c}.md`
- `contenido/mes-04/materia-{a,b,c}.md` ← las 11 que ya existen del módulo que vas a terminar

Y para los exámenes: `contenido/mes-01/examen-mes-01.md`, `mes-02`, `mes-03`.

### Estructura obligatoria de cada unidad

Cinco bloques, siempre en este orden:

1. **`### Concepto`** — 3 a 6 párrafos, lenguaje llano. Cierra conectando con el trabajo real del alumno.
2. **`### Analogía`** — un párrafo. Comparación con algo del mundo físico, **específica y memorable**.
3. **`### Cómo se ve en la práctica`** — ejemplo concreto con 1-2 párrafos que lo expliquen.
4. **`### Díselo a la IA`** — **sección firma de la escuela, ninguna unidad la omite.** Prompt real entre comillas, en cita (`> "..."`), copiable tal cual.
5. **`### Ejercicios`** — exactamente 5 (8 en las unidades 30 de repaso), con al menos 3 tipos distintos.

### Los 6 tipos de ejercicio

```
{ tipo:"multiple",   pregunta, opciones:[4], correcta: idx }
{ tipo:"completar",  frase:"... ____ ... ____", banco:[...], respuestas:[...] }
{ tipo:"relacionar", pares:[[izq,der], ...] }          // 3 a 5 pares
{ tipo:"vf",         afirmacion, correcta: bool, explicacion }
{ tipo:"ordenar",    instruccion, elementos:[...] }     // en orden CORRECTO
{ tipo:"quehace",    codigo, pregunta, opciones:[4], correcta: idx }
```

### Reglas de voz

1. **Tuteo directo.** "Vas a ver", "te conviene". Nunca "el alumno debe".
2. **Español de México, natural.** Términos técnicos en inglés cuando así se usan, explicados la primera vez.
3. **Reconocer, no memorizar.**
4. **Cero condescendencia.** Es adulto y dueño de un negocio. No es tonto: es nuevo.
5. **Un dato memorable por unidad** cuando exista.
6. **Referencias cruzadas explícitas** entre unidades y módulos.
7. **Advertencias donde hay riesgo real.**
8. **Prohibido el relleno.**

---

# BLOQUE 1 — Terminar el Módulo 4 (79 unidades)

Fuente de títulos: `contenido/mes-04/temario-mes-04.md`. **Respeta los títulos al pie de la letra.**

Ya existen 11 unidades publicadas. Identifica cuáles (`proximamente: false` en `lecciones-data.js`) y **genera solo las que faltan**, conservando la continuidad de ejemplos y proyecto con las que ya están escritas.

### Particularidades del Módulo 4

- **Es el módulo más peligroso del programa hasta ahora:** el alumno toca datos reales. Cada unidad donde se pueda borrar, exponer o perder información lleva su advertencia clara: `DELETE` sin `WHERE`, llaves en el código, RLS desactivado, respaldos inexistentes.
- **B20 (Respaldos)** merece trato especial: usa un caso concreto de alguien que perdió todo por no tener respaldo. *(Dato real del dueño de esta escuela: su proyecto de Supabase se pausó dos veces por inactividad, y antes borró por accidente la cuenta de hosting completa. Lo salvó tener el código en GitHub.)*
- **A18 (CORS)** debe mostrar el error tal como aparece en la consola del navegador.
- **A16 (Contraseñas)** debe dejar clarísimo que ni el dueño del sistema puede ver las contraseñas de sus usuarios, y por qué eso es una virtud.
- Las **PRÁCTICA** de PRA-403 continúan el proyecto de los módulos anteriores (la landing de "Tacos El Volcán" del Módulo 3): este mes se le conecta base de datos, login, panel de administración y respaldos.

### Commits de este bloque

1. `m4-a*` faltantes → `content: completar unidades m4-a (Del navegador al servidor)`
2. `m4-b*` faltantes → `content: completar unidades m4-b (Bases de datos)`
3. `m4-c*` faltantes → `content: completar unidades m4-c (Construye con IA IV)`

---

# BLOQUE 2 — Escribir el examen del Módulo 4

Archivo `contenido/mes-04/examen-mes-04.md`, siguiendo el formato exacto de los tres exámenes anteriores.

- **40 preguntas** · reparto: **BCK-401 14 · DAT-402 14 · PRA-403 12**
- Mezcla teoría y práctica: al menos **14 preguntas** deben mostrar una consulta SQL, una respuesta de API, un fragmento de código o un error real y preguntar qué hace o qué falla
- Las 4 opciones deben ser **plausibles**
- Cubre el temario real de `contenido/mes-04/temario-mes-04.md`

### Resultado a registrar

El alumno obtuvo **38/40 = 95/100 · APROBADO**, presentado el **14 de noviembre de 2026**.

Falla **2 preguntas**. **Los números y las opciones elegidas son obligatorios**, porque ya están registrados en la base de datos:

| Pregunta | Bloque | Tema sugerido | El alumno eligió | Restricción |
|---|---|---|---|---|
| **14** | BCK-401 | Diferencia entre autenticación y autorización, o qué contiene un JWT | índice **3** (opción d) | la correcta NO puede ser el índice 3 |
| **29** | PRA-403 | Qué va en el navegador y qué va en el servidor | índice **0** (opción a) | la correcta NO puede ser el índice 0 |

Marca con `👤` exactamente esos índices. Las otras 38 las acertó: ahí `✔` y `👤` van en la misma opción.

Cierra con la tabla de resultado por bloque y la **observación del sistema**, incluyendo la progresión: 88 → 93 → 90 → **95**.

Transcribe a `examenes-data.js` como clave `"4"`, **ignorando el marcador `👤`**.

Commit: `content: examen del Módulo 4 (40 preguntas)`

---

# BLOQUE 3 — Construir el Módulo 5 completo (90 unidades)

Fuente de títulos: `contenido/mes-05/temario-mes-05.md`.

### Estructura en `lecciones-data.js`

```js
m5: {
  titulo: "La máquina que piensa: LLMs por dentro",
  materias: {
    a: { nombre: "Cómo funciona un LLM", codigo: "IAG-501", icono: "🧠", lecciones: [...] },
    b: { nombre: "Dirigir la IA",        codigo: "IAG-502", icono: "🎯", lecciones: [...] },
    c: { nombre: "Construye con IA V",   codigo: "IAG-503", icono: "🔌", lecciones: [...] }
  }
}
```

IDs: `m5-a1` … `m5-a30`, `m5-b1` … `m5-b30`, `m5-c1` … `m5-c30`. Todas con `proximamente: false`.

### Particularidades del Módulo 5

- **Es el módulo central del programa.** El alumno lleva cuatro meses dirigiendo IA sin saber qué tiene enfrente. Aquí se abre la caja. El tono debe estar a la altura: ni místico ni condescendiente, sino técnico y claro.
- **A8 (Alucinaciones)** y **A19 (Qué NO es inteligencia)** son las dos unidades que más deben cuidar la honestidad: nada de hype, nada de catastrofismo. Explican un mecanismo.
- **A16 (Costos)** debe traer números reales y actuales: precio por millón de tokens de entrada y salida de los modelos principales, con la advertencia de que cambian y hay que verificarlos en la página oficial del proveedor.
- **A28 (Prompt injection)** debe mostrar un ejemplo concreto de ataque y su defensa, porque el alumno va a construir asistentes que reciben texto de desconocidos.
- **B23 (Dos IAs: una que planea y otra que ejecuta)** describe exactamente el método con el que se construyó esta escuela. Dilo: es el caso real más cercano que tiene el alumno.
- Las **PRÁCTICA** de IAG-503 construyen **un asistente de IA real para el negocio del alumno**, montado sobre el sitio y la base de datos de los módulos anteriores. Nombra el negocio de forma consistente con el Módulo 4.
- Las unidades **30** de cada asignatura son repaso integrador: 8 ejercicios y prompt de autoevaluación.

### Commits de este bloque

1. `m5-a1` … `m5-a30` → `content: unidades m5-a (Cómo funciona un LLM)`
2. `m5-b1` … `m5-b30` → `content: unidades m5-b (Dirigir la IA)`
3. `m5-c1` … `m5-c30` → `content: unidades m5-c (Construye con IA V)`

---

# BLOQUE 4 — Ampliar el glosario

`glosario-data.js` tiene 159 términos. Agrega los de los Módulos 4 y 5 que falten, con el formato `{ termino, variantes:[], definicion, mes }` y **definiciones de una línea** en el tono de las existentes.

**Del Módulo 4 (mes: 4):** `método HTTP` · `código de estado` · `header` · `payload` · `query string` · `autorización` · `JWT` · `hash` · `salt` · `sesión` · `CORS` · `rate limiting` · `validación` · `serverless` · `Express` · `log` · `NoSQL` · `tabla` · `llave primaria` · `llave foránea` · `JOIN` · `índice` · `normalización` · `transacción` · `migración` · `respaldo` · `Storage` · `Realtime` · `esquema` · `agregación`

**Del Módulo 5 (mes: 5):** `LLM` (revisa) · `token` (revisa) · `ventana de contexto` (revisa) · `temperatura` · `parámetros` · `alucinación` (revisa) · `corte de conocimiento` · `sesgo` · `multimodal` · `modelo abierto` · `inferencia` · `latencia` · `embedding` · `búsqueda semántica` · `RAG` (revisa) · `fine-tuning` (revisa) · `agente` (revisa) · `herramienta` · `MCP` (revisa) · `prompt de sistema` · `few-shot` · `cadena de pensamiento` · `streaming` · `moderación` · `prompt injection` · `caché` (revisa)

Los que ya existan: no los dupliques, verifica que su `mes` siga siendo correcto.

Commit: `content: términos de los Módulos 4 y 5 en el glosario`

---

## PROCESO DE TRABAJO

**No generes todo de un tirón.** Son 169 unidades nuevas más un examen. Trabaja asignatura por asignatura y, **después de cada bloque**: actualiza el `.md`, actualiza `lecciones-data.js`, corre `node --check lecciones-data.js`, verifica en el navegador que el módulo carga, y commitea.

Si un bloque queda a medias, es preferible dejar las restantes como `proximamente: true` a entregar unidades flojas o un JS roto. **Reporta honestamente hasta dónde llegaste** — en la pasada anterior el Módulo 4 se quedó en 11 de 90 sin avisar, y el cliente lo descubrió un mes después.

## CONTROL DE CALIDAD (por unidad, antes de cada commit)

- [ ] Las 5 secciones presentes, ninguna vacía
- [ ] "Díselo a la IA" con prompt real y específico
- [ ] 5 ejercicios (8 si es unidad 30), con al menos 3 tipos distintos
- [ ] Respuesta correcta marcada sin ambigüedad
- [ ] Opciones incorrectas plausibles
- [ ] Analogía concreta y del mundo físico
- [ ] Título idéntico al del temario
- [ ] Sin repetir ejemplos ni analogías de otros módulos
- [ ] Advertencia presente donde hay riesgo real

## VERIFICACIÓN FINAL

En el navegador:

1. `['m4','m5'].map(m => ['a','b','c'].map(k => window.DEV_SYSTEM_LECCIONES[m].materias[k].lecciones.filter(l=>!l.proximamente).length))` → todo en **30**
2. `window.DEV_SYSTEM_EXAMENES["4"].preguntas.length` → **40**
3. Abre 5 unidades al azar de cada módulo nuevo: las 4 secciones se ven, los 5 ejercicios funcionan, "Copiar prompt" copia
4. Portal → Plan de estudios: los módulos 04 y 05 aparecen con su estado correcto
5. Consola sin errores

## REGLAS TÉCNICAS

- **Cero dependencias nuevas.** JS vanilla.
- Al escribir HTML dentro de strings de JS: escapa comillas dobles, usa `\n` dentro de `<pre>`, y `&lt;` `&gt;` para mostrar etiquetas como texto.
- **Corre `node --check lecciones-data.js` después de cada bloque.** Ese archivo pesa más de 1 MB y un error de sintaxis tumba el visor completo.
- **El HTML pone contenedores vacíos; el JS los llena.** Nunca escribas datos a mano en el HTML.

## NO TOCAR

`portal.*` · `leccion.*` · `examen.html`/`examen.js` (el de admisión) · `index.html` · `netlify/` · `payment.js` · `styles.css` · `cloud-state.js` · `platform-config.js`

## REPORTE FINAL

Unidades generadas por asignatura (y cuáles quedaron pendientes, si aplica), total de ejercicios por tipo, términos agregados al glosario, y cualquier título del temario que te haya quedado ambiguo.
