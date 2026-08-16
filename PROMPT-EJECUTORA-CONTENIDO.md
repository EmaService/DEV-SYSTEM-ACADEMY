# PROMPT PARA IA EJECUTORA — Generar las 135 lecciones faltantes

> Autocontenido. Léelo completo. Este trabajo es de ESCRITURA de contenido educativo, no de código: la calidad del texto es el producto.

---

## CONTEXTO

DEV SYSTEM ACADEMY es una escuela online de 12 meses que enseña a construir software **dirigiendo IA**, no tecleando código. El alumno no va a escribir código a mano en su trabajo real — una IA lo hará. Pero para dirigirla necesita entender **conceptos, vocabulario y criterio**.

- **Ruta:** `C:\Users\USER\Desktop\BUSINESS\Paginas Web\DEV SYSTEMS ACADEMY`
- **Repo:** EmaService/DEV-SYSTEM-ACADEMY, branch `main`
- El contenido vive en `contenido/mes-XX/materia-{a,b,c}.md` y se transcribe a `lecciones-data.js`

## MISIÓN

Escribir **135 lecciones** que faltan y transcribirlas a `lecciones-data.js`:

| Mes | Materia | Faltan | IDs |
|---|---|---|---|
| 1 | A — La Máquina | 20 | `m1-a11` … `m1-a30` |
| 1 | B — El Idioma del Código | 20 | `m1-b11` … `m1-b30` |
| 1 | C — Construye con IA | 20 | `m1-c11` … `m1-c30` |
| 2 | A — Git: la máquina del tiempo | 25 | `m2-a6` … `m2-a30` |
| 2 | B — GitHub | 25 | `m2-b6` … `m2-b30` |
| 2 | C — Construye con IA II | 25 | `m2-c6` … `m2-c30` |

Los **títulos exactos** de cada lección ya están definidos en:
- `contenido/mes-01/temario-mes-01.md`
- `contenido/mes-02/temario-mes-02.md`

Y también están ya cargados en `lecciones-data.js` como entradas con `proximamente: true`. **Respeta esos títulos al pie de la letra** — no los cambies ni los reordenes.

---

## LO PRIMERO QUE DEBES HACER

**Lee estas lecciones ya escritas antes de escribir una sola línea.** Son tu plantilla de voz, densidad y estructura:

- `contenido/mes-01/materia-a.md` — lecciones A1 a A10
- `contenido/mes-01/materia-b.md` — lecciones B1 a B10
- `contenido/mes-01/materia-c.md` — lecciones C1 a C10
- `contenido/mes-02/materia-a.md`, `materia-b.md`, `materia-c.md` — lecciones 1 a 5 de cada una

No empieces a generar hasta haberlas leído. Todo lo que sigue es la descripción de lo que vas a ver ahí.

---

## ESTRUCTURA OBLIGATORIA DE CADA LECCIÓN

Cinco bloques, siempre en este orden:

### 1. `### Concepto`
3 a 6 párrafos. Explica la idea en lenguaje llano, sin asumir conocimiento previo. Puede incluir listas con viñetas para enumerar tipos, pasos o características. **Cierra siempre conectando el concepto con el trabajo real del alumno**: por qué le importa esto a alguien que dirige IA.

### 2. `### Analogía`
Un párrafo. Una comparación con algo del mundo físico cotidiano — cocina, restaurante, mudanza, taller, banco, escuela. Debe ser **específica y memorable**, no genérica. Mala: "es como una caja". Buena: "la RAM es la mesa de trabajo del chef: entre más grande, más platillos a la vez; si se llena, el chef pierde tiempo yendo a la alacena".

### 3. `### Cómo se ve en la práctica`
Un ejemplo concreto: un bloque de código, una salida de terminal, un fragmento de configuración o un árbol de archivos, con 1-2 párrafos que lo expliquen. El alumno debe poder **reconocer** eso cuando lo vea, no reproducirlo de memoria.

### 4. `### Díselo a la IA`
**Esta es la sección firma de la escuela y ninguna lección puede omitirla.** Un prompt real, entre comillas, en formato de cita (`> "..."`), que el alumno puede copiar y pegar tal cual para aplicar el concepto de la lección con una IA. Debe ser específico de ESA lección, no genérico. Puede ir seguido de 1-2 líneas explicando por qué ese prompt funciona.

### 5. `### Ejercicios`
Exactamente **5 ejercicios**, numerados, mezclando los 6 tipos (ver abajo). Cada lección debe usar **al menos 3 tipos distintos**. Marca la respuesta correcta con `✔` o con la línea `- Respuesta: ...`.

---

## LOS 6 TIPOS DE EJERCICIO

**1. `[opción múltiple]`** — 4 opciones, una correcta marcada con ✔
```
1. **[opción múltiple]** ¿Qué componente ejecuta las instrucciones?
   - a) La RAM
   - b) El CPU ✔
   - c) El disco
   - d) La pantalla
```

**2. `[completar]`** — frase con `____` y banco de palabras
```
2. **[completar]** "El ____ ejecuta las instrucciones y la ____ guarda lo que está en uso."
   - Banco: `CPU` · `RAM` · `disco` · `navegador`
   - Respuesta: CPU / RAM
```

**3. `[relacionar]`** — pares concepto ↔ descripción (3 a 5 pares)
```
3. **[relacionar]** Une cada pieza con su papel:
   - CPU ↔ El chef que cocina
   - RAM ↔ La mesa de trabajo
   - Disco ↔ La alacena
```

**4. `[verdadero/falso]`** — afirmación + respuesta + explicación breve
```
4. **[verdadero/falso]** "La RAM conserva la información al apagar el equipo."
   - Respuesta: FALSO — la RAM se vacía al apagar; lo permanente vive en el disco.
```

**5. `[ordenar]`** — pasos escritos **en el orden correcto** (la app los revuelve al mostrarlos)
```
5. **[ordenar]** Acomoda los pasos:
   - Desordenado: `git commit` · `editar archivo` · `git add`
   - Respuesta: editar archivo → git add → git commit
```

**6. `[qué hace]`** — un snippet o situación real + 4 opciones
```
5. **[qué hace]** `git add .` — ¿qué hace?
   - a) Sube el proyecto a internet
   - b) Prepara todos los archivos de la carpeta para el commit ✔
   - c) Crea un repositorio
   - d) Borra los cambios
```

---

## REGLAS DE VOZ (críticas — es lo que distingue a esta escuela)

1. **Tuteo directo.** "Vas a ver", "te conviene", "no necesitas memorizar". Nunca "el alumno debe".
2. **Español de México, natural.** Sin traducciones acartonadas. Los términos técnicos se dejan en inglés cuando así se usan (commit, push, staging), pero se explican la primera vez.
3. **Reconocer, no memorizar.** El objetivo es que el alumno IDENTIFIQUE lo que ve, no que lo escriba de memoria. Dilo explícitamente cuando aplique.
4. **Cero condescendencia.** El alumno es adulto, probablemente dueño de un negocio. No es tonto: es nuevo. La diferencia importa.
5. **Un dato memorable por lección** cuando exista: el bug de la polilla de 1947, que Python se llama así por Monty Python, que JavaScript se escribió en 10 días. Eso hace que la lección se recuerde.
6. **Conecta con el resto del programa.** Referencias cruzadas explícitas: "(esto lo viste en A5)", "(a fondo en el Mes 9)". El alumno debe sentir un plan, no lecciones sueltas.
7. **Advertencias donde hay riesgo real.** Comandos destructivos, secretos que no se suben, datos que hay que verificar. Sin dramatismo, pero claras.
8. **Prohibido el relleno.** Si una lección da para 4 párrafos, son 4 párrafos. No infles con obviedades ni repitas lo ya dicho con otras palabras.

---

## CONTINUIDAD ENTRE LECCIONES

- Las lecciones **prácticas** de la materia C construyen sobre la anterior: el alumno tiene un proyecto que evoluciona a lo largo del mes. En el Mes 1 crea su página y la publica; en el Mes 2 la versiona, la sube a GitHub y la publica con GitHub Pages.
- Las lecciones **30** de cada materia son "Repaso integrador": en vez de concepto nuevo, recorren los temas del mes con 8 ejercicios (en lugar de 5) que mezclan todos los tipos. Su sección "Díselo a la IA" es un prompt de autoevaluación.
- Las lecciones que el temario marca como **PRÁCTICA** deben ser accionables paso a paso: el alumno termina con algo hecho (un archivo, una cuenta, un sitio publicado), no con teoría.

---

## SALIDA ESPERADA

### 1. Archivos markdown
Agrega las lecciones nuevas **al final** de cada archivo existente, respetando el formato exacto (encabezado `## A11 — Título`, separadores `---`):
- `contenido/mes-01/materia-a.md` ← A11-A30
- `contenido/mes-01/materia-b.md` ← B11-B30
- `contenido/mes-01/materia-c.md` ← C11-C30
- `contenido/mes-02/materia-a.md` ← A6-A30
- `contenido/mes-02/materia-b.md` ← B6-B30
- `contenido/mes-02/materia-c.md` ← C6-C30

### 2. `lecciones-data.js`
Reemplaza cada entrada `proximamente: true` por la lección completa, con la misma estructura que las ya publicadas:

```js
{
  id: "m1-a11",
  titulo: "Dependencias y librerías: nadie construye desde cero",
  proximamente: false,
  secciones: [
    { tipo: "concepto",  titulo: "Concepto", html: "<p>...</p>" },
    { tipo: "analogia",  titulo: "Analogía", html: "<p>...</p>" },
    { tipo: "practica",  titulo: "Cómo se ve en la práctica", html: "<p>...</p><pre><code>...</code></pre>" },
    { tipo: "prompt",    titulo: "Díselo a la IA", html: "<blockquote><p>...</p></blockquote>" }
  ],
  ejercicios: [ ... ]
}
```

Formato de los ejercicios en JS:
```js
{ tipo:"multiple",   pregunta, opciones:[...], correcta: idx }
{ tipo:"completar",  frase:"... ____ ... ____", banco:[...], respuestas:[...] }
{ tipo:"relacionar", pares:[[izq,der], ...] }
{ tipo:"vf",         afirmacion, correcta: bool, explicacion }
{ tipo:"ordenar",    instruccion, elementos:[...] }   // en orden CORRECTO
{ tipo:"quehace",    codigo, pregunta, opciones:[...], correcta: idx }
```

**Cuidados de HTML:** escapa comillas dobles dentro de los strings; usa `<pre><code>` para bloques de código y `<code>` para código inline; los saltos de línea dentro de `<pre>` van como `\n`.

---

## PROCESO DE TRABAJO (importante)

No intentes generar las 135 de un tirón. Trabaja **por materia**, en este orden, y haz un commit por bloque:

1. `m1-a11` … `m1-a30` (20)
2. `m1-b11` … `m1-b30` (20)
3. `m1-c11` … `m1-c30` (20)
4. `m2-a6` … `m2-a30` (25)
5. `m2-b6` … `m2-b30` (25)
6. `m2-c6` … `m2-c30` (25)

Después de cada bloque: actualiza el `.md`, actualiza `lecciones-data.js`, **verifica que el archivo JS siga siendo válido** (ábrelo en el navegador y confirma en consola que `window.DEV_SYSTEM_LECCIONES` carga sin error), y haz commit con mensaje `content: lecciones {bloque}`.

Si un bloque queda a medias, es preferible dejar las restantes como `proximamente: true` a entregar lecciones flojas o un JS roto.

---

## CONTROL DE CALIDAD (obligatorio antes de cada commit)

Para cada lección generada, verifica:

- [ ] Tiene las 5 secciones, ninguna vacía
- [ ] La sección "Díselo a la IA" tiene un prompt real, específico de esa lección
- [ ] Tiene exactamente 5 ejercicios (8 si es lección 30 de repaso)
- [ ] Usa al menos 3 tipos distintos de ejercicio
- [ ] Cada ejercicio tiene su respuesta correcta marcada sin ambigüedad
- [ ] Las opciones incorrectas son **plausibles**, no absurdas (un distractor obvio no enseña nada)
- [ ] La analogía es concreta y del mundo físico
- [ ] El título coincide EXACTO con el del temario
- [ ] No repite ejemplos ni analogías ya usadas en otra lección

## VERIFICACIÓN FINAL

Al terminar los 6 bloques, en el navegador:
1. `window.DEV_SYSTEM_LECCIONES.m1.materias.a.lecciones.filter(l => !l.proximamente).length` → debe dar **30**. Igual para b y c, y para m2.
2. Abre 5 lecciones nuevas al azar (`/leccion?id=m1-a17`, `/leccion?id=m2-b23`, etc.): las 4 secciones se ven, los 5 ejercicios funcionan, el botón "Copiar prompt" funciona.
3. Consola sin errores.

## COMMIT FINAL

`content: completar las 90 lecciones del Mes 1 y del Mes 2` y push a `main`.

Reporta: cuántas lecciones generó cada bloque, cuántos ejercicios de cada tipo en total, y cualquier lección donde el temario te haya quedado ambiguo.

## NO TOCAR

`index.html` · `portal.*` · `leccion.*` · `checkout.*` · `login.*` · `examen*.*` · `netlify/` · `payment.js` · `styles.css` · `glosario-data.js`
