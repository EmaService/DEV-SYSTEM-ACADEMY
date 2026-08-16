# MES 1 · MATERIA C — Construye con IA
## Lecciones C1–C5 (Lote 1)

---

## C1 — ¿Qué es un LLM? La IA que habla (y programa)

### Concepto

Un **LLM** (Large Language Model, "modelo grande de lenguaje") es el tipo de inteligencia artificial detrás de ChatGPT, Claude y Gemini. Es un programa entrenado leyendo cantidades inimaginables de texto — libros, artículos, conversaciones, y millones de líneas de código — hasta volverse extraordinariamente bueno en una cosa: **predecir qué palabra sigue**.

Suena simple, pero de ahí sale todo: para predecir bien la siguiente palabra de "la capital de Francia es…", el modelo tuvo que aprender geografía. Para completar código, tuvo que aprender a programar. Esa habilidad de predicción, a escala gigante, se convierte en algo que conversa, explica, traduce y construye software.

Lo que un LLM ES:
- Una herramienta que entiende y genera lenguaje (humano y de programación)
- Tu traductor entre "lo que quieres" y "el código que lo hace"

Lo que un LLM NO es:
- No es una base de datos de hechos (puede equivocarse con total confianza — lección C5)
- No "piensa" como humano ni tiene intenciones
- No sabe lo que pasó después de su fecha de entrenamiento, salvo que se le conecte a internet o a herramientas

Este programa completo — DEV SYSTEM — existe porque los LLMs cambiaron quién puede construir software: ya no gana el que teclea más rápido, gana el que **dirige mejor**.

### Analogía

Un LLM es como un **asistente políglota que leyó todas las bibliotecas del mundo**: habla todos los idiomas (incluidos JavaScript, Python y SQL), leyó de todos los temas, y trabaja a velocidad sobrehumana. Pero leyó, no vivió: a veces mezcla recuerdos, no sabe qué pasó esta mañana, y necesita que TÚ le digas exactamente qué quieres. Genio disponible, dirección requerida.

### Cómo se ve en la práctica

Tú escribes:

```
Hazme una página simple que diga "Tortas El Güero"
con fondo amarillo y un botón de WhatsApp.
```

El LLM responde con el archivo HTML completo, listo para guardar y abrir. Eso que antes costaba contratar a alguien, hoy es una instrucción bien dada. Lo harás tú mismo en la práctica C7.

### Díselo a la IA

Tu primera conversación de reconocimiento — pregúntale al LLM sobre sí mismo:

> "Explícame qué eres, qué haces bien, en qué te equivocas seguido, y cómo debería pedirte las cosas para obtener los mejores resultados."

La respuesta te va a sorprender: la IA es muy buena explicando cómo usarla.

### Ejercicios

1. **[opción múltiple]** ¿Qué significa LLM?
   - a) Lenguaje Lógico de Máquinas
   - b) Modelo Grande de Lenguaje ✔
   - c) Librería Libre de Módulos
   - d) Lector Literal de Memoria

2. **[completar]** "Un LLM está entrenado para predecir la siguiente ____, y de esa habilidad a escala gigante sale su capacidad de conversar y ____."
   - Banco: `palabra` · `programar` · `imagen` · `calcular`
   - Respuesta: palabra / programar

3. **[verdadero/falso]** "Un LLM es una base de datos de hechos que nunca se equivoca."
   - Respuesta: FALSO — puede equivocarse con total confianza; no es una base de datos.

4. **[relacionar]** Une cada producto con su empresa:
   - ChatGPT ↔ OpenAI
   - Claude ↔ Anthropic
   - Gemini ↔ Google

5. **[opción múltiple]** En la era de los LLMs, ¿quién tiene ventaja construyendo software?
   - a) El que teclea más rápido
   - b) El que memoriza más lenguajes
   - c) El que dirige mejor ✔
   - d) El que tiene la computadora más cara

---

## C2 — ChatGPT, Claude, Gemini: quién es quién

### Concepto

Los tres grandes asistentes de IA que vas a usar (o ya usas):

- **ChatGPT** (de OpenAI) — el que hizo famosa a la IA en 2022. El más conocido del público.
- **Claude** (de Anthropic) — reconocido por su calidad escribiendo y programando; muy usado por profesionales del código.
- **Gemini** (de Google) — integrado al mundo Google: Gmail, Docs, búsqueda.

Detrás de cada asistente hay **modelos** con versiones — como los coches: mismo fabricante, distintos motores según el año y la gama. Cada empresa saca versiones nuevas cada pocos meses, más capaces que las anteriores.

Lo que importa entender:

1. **Todos funcionan igual por dentro** (son LLMs — lección C1). Lo que cambia es el entrenamiento, la personalidad y las herramientas conectadas.
2. **Gratis vs. de paga:** todos tienen versión gratuita con el modelo chico; pagar (~$20 USD/mes) te da el modelo grande. Para construir en serio, el modelo grande se nota muchísimo — es tu herramienta de trabajo, como la maquinaria de un taller.
3. **No te cases con uno:** son herramientas, no equipos de futbol. Los profesionales prueban el mismo problema en dos y comparan.

En este programa usaremos ejemplos con varios — tu habilidad de dirigirlos funciona igual en todos.

### Analogía

Son **tres talleres mecánicos de primera**: los tres arreglan tu coche. Uno es el más famoso, otro el favorito de los expertos para el trabajo fino, otro viene integrado con la agencia. Vale más saber explicar la falla — "hace un ruidito al frenar en frío" — que el logo del taller. Tu habilidad de explicar viaja contigo a donde vayas.

### Cómo se ve en la práctica

El mismo prompt en dos asistentes distintos:

```
"Hazme la página de una barbería con precios y botón de WhatsApp"
```

Los dos la generan bien, con estilos distintos. Uno quizá más sobrio, otro más creativo. Ninguno está "mal" — son estilos, como dos arquitectos con el mismo encargo. Con la práctica descubrirás cuál te acomoda para cada tipo de tarea.

### Díselo a la IA

> "Te voy a dar una tarea que también le di a otra IA. Dame tu versión y después dime qué fortalezas tendría tu enfoque comparado con otros posibles."

### Ejercicios

1. **[relacionar]** Une el asistente con su fama:
   - ChatGPT ↔ El que hizo famosa a la IA con el público
   - Claude ↔ Favorito de profesionales para escribir y programar
   - Gemini ↔ Integrado al ecosistema de Google

2. **[opción múltiple]** ¿Qué diferencia principal hay entre la versión gratis y la de paga de estos asistentes?
   - a) La de paga no tiene anuncios
   - b) La de paga usa modelos más grandes y capaces ✔
   - c) La gratis no guarda conversaciones
   - d) Son idénticas

3. **[verdadero/falso]** "Debes elegir un solo asistente de IA y usarlo para todo, siempre."
   - Respuesta: FALSO — son herramientas; los profesionales comparan y usan la mejor para cada tarea.

4. **[completar]** "Detrás de cada asistente hay ____ con versiones, como los coches: mismo fabricante, distintos ____."
   - Banco: `modelos` · `motores` · `precios` · `colores`
   - Respuesta: modelos / motores

5. **[opción múltiple]** ¿Qué habilidad tuya funciona igual en ChatGPT, Claude y Gemini?
   - a) Los atajos de teclado
   - b) Saber dirigir con instrucciones claras ✔
   - c) La memoria de conversaciones
   - d) La configuración de la cuenta

---

## C3 — Tu primer prompt: la diferencia entre pedir y pedir bien

### Concepto

Un **prompt** es lo que le escribes a la IA. Es tu herramienta número uno, y la diferencia entre resultados mediocres y resultados profesionales casi nunca está en la IA — está en el prompt.

Compara:

- Prompt flojo: *"hazme una página para mi negocio"*
- Prompt DEV SYSTEM: *"Hazme una página para mi negocio de postres 'Dulce Hogar'. Debe tener: nombre grande arriba, 3 fotos de productos, precios, botón de WhatsApp al 55-1234-5678, colores rosa y blanco, y que se vea bien en celular."*

El primero obliga a la IA a adivinar 10 decisiones. El segundo se las da. Misma IA, resultado radicalmente distinto.

Las 4 piezas de un buen prompt (memorízalas, son tu navaja suiza):

1. **Contexto** — quién eres y de qué es el proyecto ("mi negocio de postres Dulce Hogar")
2. **Objetivo** — qué quieres exactamente ("una página con estas 5 cosas: …")
3. **Restricciones** — límites y gustos ("colores rosa y blanco, que cargue rápido")
4. **Formato** — cómo quieres la respuesta ("dame el archivo HTML completo, listo para guardar")

No necesitas prompts kilométricos — necesitas prompts **completos**. Tres líneas con las 4 piezas valen más que dos párrafos de rodeos.

### Analogía

Pedir a la IA es como **encargar un pastel**: llegas a la pastelería y dices "hágame un pastel"… y recibes lo que sea. O dices: "pastel de chocolate para 20 personas, que diga Felicidades Marta, sin nuez porque hay alérgicos, para el sábado a las 4". El pastelero es el mismo. El resultado, no. La IA es el mejor pastelero del mundo — dale la orden completa.

### Cómo se ve en la práctica

Plantilla que usarás todo el programa:

```
[CONTEXTO] Tengo un/a ________ llamado/a ________.
[OBJETIVO] Necesito que ________.
Debe incluir: 1) ____ 2) ____ 3) ____
[RESTRICCIONES] Estilo: ________. Evita: ________.
[FORMATO] Entrégame ________.
```

Guárdala. En la práctica C7 la usarás para crear tu primera página real.

### Díselo a la IA

La jugada maestra — pedirle a la IA que mejore tu propio prompt:

> "Quiero pedirte esto: [tu prompt]. Antes de hacerlo, dime qué información te falta para darme el mejor resultado posible."

Con esa línea, la IA te entrevista a ti. De ahí salen los detalles que no sabías que importaban.

### Ejercicios

1. **[ordenar]** Acomoda las 4 piezas del buen prompt en orden:
   - Desordenado: `Formato` · `Contexto` · `Restricciones` · `Objetivo`
   - Respuesta: Contexto → Objetivo → Restricciones → Formato

2. **[opción múltiple]** ¿Cuál de estos prompts dará mejor resultado?
   - a) "hazme un logo"
   - b) "hazme algo bonito para mi negocio"
   - c) "Logo para taquería 'El Primo': letras rojas, estilo retro, fondo transparente, formato PNG" ✔
   - d) "necesito un logo urgente por favor"

3. **[completar]** "La diferencia entre resultados mediocres y profesionales casi nunca está en la ____, está en el ____."
   - Banco: `IA` · `prompt` · `computadora` · `suerte`
   - Respuesta: IA / prompt

4. **[qué hace]** Tu compañero escribe: "Antes de responder, dime qué información te falta". ¿Qué está logrando?
   - a) Confundir a la IA
   - b) Que la IA lo entreviste y descubra los detalles faltantes ✔
   - c) Ahorrar tokens
   - d) Que la IA responda más rápido

5. **[verdadero/falso]** "Un buen prompt debe ser lo más largo posible."
   - Respuesta: FALSO — debe ser completo (las 4 piezas), no largo.

---

## C4 — El contexto: por qué la IA "olvida" y cómo evitarlo

### Concepto

Te ha pasado o te pasará: llevas una conversación larga con la IA, todo va perfecto, y de repente… se le olvida algo que le dijiste hace rato. No está fallando: te topaste con la **ventana de contexto**.

El contexto es la memoria de trabajo de la conversación: todo lo que se ha dicho (tus mensajes y sus respuestas). Esa memoria tiene un límite de tamaño, medido en **tokens** — pedacitos de palabra (una palabra son ~1-2 tokens). Cuando la conversación excede el límite, lo más viejo se resume o se pierde.

Consecuencias prácticas:

- En conversaciones largas, la IA puede "olvidar" acuerdos del inicio
- Cada conversación nueva **empieza de cero**: la IA no recuerda la de ayer (salvo funciones especiales de memoria)
- Pegar documentos enormes se come el contexto rapidísimo

Las 3 reglas del constructor para manejarlo:

1. **Una conversación, una misión.** ¿Cambias de tema? Abre conversación nueva.
2. **Re-ancla lo importante.** En conversaciones largas, re-pega el acuerdo clave: "Recuerda: colores rosa/blanco, WhatsApp 55-1234-5678".
3. **El resumen puente.** Antes de cerrar una sesión larga: *"Resume todo lo acordado en esta conversación para pegarlo mañana en una nueva"*. Ese resumen es tu memoria portátil.

### Analogía

La IA es un **consultor brillante con memoria de pizarrón**: todo lo que hablan se va anotando en un pizarrón enorme, y mientras esté ahí, lo usa todo. Pero el pizarrón se llena — y para seguir escribiendo hay que borrar lo de arriba. Y cada nueva reunión, pizarrón limpio. El cliente listo llega a cada reunión con el resumen de la anterior y lo pega en la esquina.

### Cómo se ve en la práctica

Fin de una sesión de trabajo bien cerrada:

```
Tú: Resume en una lista: qué construimos hoy, qué decisiones
    tomamos, y qué falta. Lo usaré para continuar mañana.

IA: RESUMEN DE SESIÓN — Página "Dulce Hogar":
    ✔ Hecho: estructura, colores rosa/blanco, botón WhatsApp
    ✔ Decidido: 3 productos con foto, precios visibles
    ⏳ Falta: sección de pedidos y publicarla en internet
```

Mañana pegas eso en una conversación nueva y sigues como si nada. Ese hábito te separa de los amateurs desde la semana 1.

### Díselo a la IA

> "Resume todo lo acordado en esta conversación en una lista breve, para que mañana pueda pegarla en una conversación nueva y continuar donde nos quedamos."

### Ejercicios

1. **[opción múltiple]** ¿Qué es la ventana de contexto?
   - a) El navegador donde corre la IA
   - b) La memoria de trabajo de la conversación, con límite de tamaño ✔
   - c) La velocidad de respuesta
   - d) El historial de todas tus conversaciones

2. **[completar]** "El contexto se mide en ____, y cuando se llena, lo más ____ se resume o se pierde."
   - Banco: `tokens` · `viejo` · `pixeles` · `nuevo`
   - Respuesta: tokens / viejo

3. **[verdadero/falso]** "La IA recuerda automáticamente todas tus conversaciones anteriores."
   - Respuesta: FALSO — cada conversación empieza de cero (salvo funciones especiales de memoria).

4. **[ordenar]** El flujo del "resumen puente":
   - Desordenado: `pegar el resumen en la conversación nueva` · `pedir resumen al final de la sesión` · `continuar donde te quedaste` · `abrir conversación nueva al día siguiente`
   - Respuesta: pedir resumen → abrir conversación nueva → pegar el resumen → continuar

5. **[opción múltiple]** Llevas 2 horas en una conversación y la IA "olvidó" el color que acordaron al inicio. ¿Qué haces?
   - a) Regañarla hasta que recuerde
   - b) Re-anclar: repetir el acuerdo clave en un mensaje ✔
   - c) Borrar tu cuenta
   - d) Esperar a que recuerde sola

---

## C5 — Alucinaciones: cuando la IA inventa con toda seguridad

### Concepto

Una **alucinación** es cuando la IA da información falsa con total confianza: cita un libro que no existe, inventa una función de programación, asegura un precio que nunca fue. No es mentira (mentir requiere intención) — es el efecto secundario de cómo funciona: predice la respuesta más *plausible*, y lo plausible no siempre es lo *cierto*.

Cuándo alucinan más:
- Datos muy específicos: cifras, fechas, nombres, artículos de leyes, precios
- Temas recientes (posteriores a su entrenamiento)
- Cuando la pregunta presupone algo falso ("¿por qué Netlify cobra por cada visita?" — la IA puede seguirte la corriente aunque la premisa sea falsa)

Tu protocolo anti-alucinación (3 reglas):

1. **Dato crítico se verifica.** Si un número o hecho va a una decisión de dinero, salud o legal: buscar la fuente original, siempre.
2. **Pregunta sin cargar los dados.** Mejor "¿Netlify cobra por visitas? ¿cómo funciona su cobro?" que asumir la respuesta en la pregunta.
3. **Pide el nivel de certeza.** "¿Qué tan seguro estás? ¿Qué debería verificar por mi cuenta?" — la IA es sorprendentemente honesta sobre sus dudas cuando le preguntas.

En código las alucinaciones existen pero se delatan solas: código inventado truena al ejecutarse. Por eso construir con IA es más seguro que pedirle datos — el código se prueba, el dato hay que verificarlo.

### Analogía

La IA a veces es como el **amigo que nunca dice "no sé"**: le preguntas una dirección y te la da con seguridad total… aunque no la conozca. No es mala fe — es que su cerebro completa el hueco con lo que "suena correcto". Con ese amigo aprendiste a hacer lo mismo que harás con la IA: para llegar a la boda, confirmas por otro lado.

### Cómo se ve en la práctica

```
Tú:  ¿Cuánto cobra Netlify por hosting?

IA:  El plan gratuito de Netlify incluye 100 GB de ancho
     de banda al mes [...]

Tú:  ¿Qué tan seguro estás de esas cifras? ¿Dónde las verifico?

IA:  Los precios pueden haber cambiado desde mi entrenamiento.
     Verifica en netlify.com/pricing — esa es la fuente oficial.
```

Segunda pregunta: 10 segundos. Decisión de negocio con dato verificado: no tiene precio.

### Díselo a la IA

> "¿Qué partes de tu respuesta son hechos verificables y cuáles son tu mejor estimación? Dame los enlaces o fuentes donde puedo confirmar los datos importantes."

### Ejercicios

1. **[opción múltiple]** ¿Qué es una alucinación de IA?
   - a) Un error de conexión
   - b) Información falsa dicha con total confianza ✔
   - c) Una respuesta lenta
   - d) Cuando la IA se niega a responder

2. **[relacionar]** Une la situación con el riesgo de alucinación:
   - Cifras y fechas específicas ↔ Riesgo alto
   - Temas posteriores a su entrenamiento ↔ Riesgo alto
   - Explicar un concepto general ↔ Riesgo bajo
   - Generar código (que se puede probar) ↔ Se delata solo al ejecutar

3. **[completar]** "La IA predice la respuesta más ____, y lo plausible no siempre es lo ____."
   - Banco: `plausible` · `cierto` · `rápida` · `barato`
   - Respuesta: plausible / cierto

4. **[verdadero/falso]** "Si un dato de la IA va a una decisión de dinero, basta con que la IA suene segura."
   - Respuesta: FALSO — dato crítico se verifica en la fuente original, siempre.

5. **[qué hace]** Preguntas "¿por qué Netlify cobra por cada visita?" (premisa falsa). ¿Cuál es el riesgo?
   - a) La IA se ofende
   - b) La IA puede seguirte la corriente y "explicar" algo que no es cierto ✔
   - c) La IA bloquea tu cuenta
   - d) Ninguno, la IA siempre corrige premisas falsas

---

## C6 — El prompt de código perfecto

### Concepto

En C3 aprendiste las 4 piezas del buen prompt (Contexto, Objetivo, Restricciones, Formato). Ahora las adaptas al caso más importante de tu carrera: pedir CÓDIGO. Los prompts de código tienen su propia anatomía, y dominarla es la habilidad que te va a devolver el $7,000 de este mes multiplicado por mil.

Anatomía del prompt de código PERFECTO:

**1. Rol y stack** — dile a la IA qué es y con qué herramientas trabajas.
> "Eres un desarrollador senior de frontend. El proyecto usa HTML, CSS y JavaScript vanilla, sin frameworks."

**2. Contexto del código existente** — qué hay ya (así no te reinventa el mundo).
> "Ya tengo `index.html` con la estructura básica y `styles.css` con los estilos. Aquí van los archivos: [pegas o describes]."

**3. Lo que quieres construir** — en presente, específico.
> "Necesito agregar un botón 'Contáctanos' en el header, que abra WhatsApp al número +52 55 1234 5678 con un mensaje predefinido."

**4. Restricciones** — los límites, los `NO` importantes.
> "No agregues librerías nuevas. No cambies los colores existentes. Que funcione bien en celular."

**5. Formato de entrega** — cómo quieres la respuesta.
> "Dame los cambios exactos: qué línea agregar y en qué archivo. Al final, un resumen en 3 bullets de qué cambió."

**6. Los 'tests' finales** — cómo saber que quedó bien.
> "Antes de darme el código, dime cómo voy a probar que funciona correctamente."

Guarda esta plantilla mental. Es tu superpoder para el resto del programa.

### Analogía

Un prompt de código es como el **brief de un director a un artista**: no le dices "hazme algo bonito"; le dices el estilo, el mensaje, el formato de entrega, el tamaño, la fecha, y qué se considera "listo". El artista bueno con brief bueno = magia. Sin brief = decepción.

### Cómo se ve en la práctica

```
Rol: Eres un desarrollador senior de frontend.
Stack: HTML/CSS/JS vanilla, sin frameworks.
Contexto: Ya tengo index.html y styles.css. Los pego abajo.
Objetivo: Agregar un botón "Contáctanos" en el header con
          enlace a WhatsApp (+52 55 1234 5678) y mensaje
          predefinido "Hola, vi tu página".
Restricciones: No librerías nuevas. Que se vea bien en móvil.
Formato: Muéstrame las líneas exactas a agregar y en qué archivo.
Tests: Antes del código, dime cómo compruebo que quedó bien.

[pego los archivos]
```

Le acabas de dar a la IA todo lo que un buen colega necesita. Lo que devuelva será casi siempre correcto a la primera.

### Díselo a la IA

Un metaprompt (un prompt para mejorar prompts):

> "Te voy a pedir algo. Antes de que respondas, evalúa mi prompt: ¿tiene rol y stack claros? ¿contexto suficiente? ¿objetivo específico? ¿restricciones? ¿formato de entrega? Si le falta algo, pídemelo antes de responder."

### Ejercicios

1. **[ordenar]** Acomoda las 6 piezas del prompt de código en orden natural:
   - Desordenado: `Objetivo` · `Rol y stack` · `Formato` · `Contexto` · `Tests` · `Restricciones`
   - Respuesta: Rol y stack → Contexto → Objetivo → Restricciones → Formato → Tests

2. **[opción múltiple]** ¿Cuál pieza le dice a la IA con qué herramientas trabajas?
   - a) Objetivo
   - b) Restricciones
   - c) Rol y stack ✔
   - d) Tests

3. **[completar]** "Las restricciones son los ____ y los ____ importantes: qué NO debe hacer la IA."
   - Banco: `límites` · `NO` · `estilos` · `datos`
   - Respuesta: límites / NO

4. **[verdadero/falso]** "Pedirle a la IA 'los tests' antes del código es perder tiempo."
   - Respuesta: FALSO — te dice cómo comprobar que quedó bien; si no puede decirlo, es señal de que el prompt está incompleto.

5. **[qué hace]** Le dices a la IA: "evalúa mi prompt antes de responder; si le falta algo, pídemelo." ¿Qué logras?
   - a) Que la IA se enoje
   - b) Que la IA descubra las piezas faltantes antes de generar código malo ✔
   - c) Que la IA responda más rápido
   - d) Que la IA use menos tokens

---

## C7 — PRÁCTICA: tu primera página HTML creada con IA

### Concepto

Hoy no lees teoría. Hoy **construyes**. Al terminar esta lección vas a tener un archivo HTML real, hecho por IA dirigida por ti, corriendo en tu navegador. No leído, no visto — construido.

Los pasos, secos:

1. **Abre tu asistente de IA** (ChatGPT, Claude o Gemini — el que uses).
2. **Copia este prompt** (o adáptalo con TUS datos):

```
Rol: Eres un desarrollador senior de frontend.
Stack: HTML puro, CSS embebido en el mismo archivo. Sin frameworks
       ni librerías externas. Un solo archivo `index.html`.
Objetivo: Crea la página de un negocio ficticio llamado
          "Tortas El Güero". Debe tener:
          - Un encabezado grande con el nombre
          - Una descripción corta (2 líneas)
          - 3 productos con nombre y precio (invéntalos)
          - Un botón grande al final que dice "Pídenos por WhatsApp"
            y abre https://wa.me/5512345678
Restricciones: Colores amarillo (#f59e0b) y café oscuro (#1a0f0a).
               Que se vea bien en celular (responsive). Sin imágenes
               (usa emojis 🌮 🥪 🌯 en los productos).
Formato: Dame el archivo `index.html` completo, listo para
         guardar y abrir. Nada de explicaciones antes del código.
Tests: Al final del código, dime cómo lo pruebo en mi computadora.
```

3. **Guarda la respuesta**: crea una carpeta `mi-primera-pagina` en tu escritorio y dentro un archivo `index.html`. Pega el código que te dio la IA. Guarda.
4. **Ábrelo**: doble clic en `index.html`. Tu navegador abre. Ahí está tu página. Hecha por ti dirigiendo a una IA.
5. **Prueba el botón de WhatsApp**: si tienes WhatsApp Web o la app, debe abrir un chat con el número.

Si algo salió mal, no toques el código — vuelve al chat y di: "Este es el archivo que me diste [pega]. Al abrirlo pasa esto: [describe]. ¿Qué falta?".

### Analogía

Es tu **primer plato cocinado**. No es el más elegante ni sabes por qué cada ingrediente va — pero salió, se sirve, se come. La chispa de "sí puedo" que sientes hoy es la misma que te va a llevar 12 meses. Guarda esta página; en el Mes 12 la vas a comparar con tu SaaS final y no vas a creerlo.

### Cómo se ve en la práctica

Al abrir el archivo verás algo tipo:

```
    🌮 Tortas El Güero 🥪

  La torta que tu día necesita.
  Hechas al momento, con amor.

  🌮 Torta Clásica ......... $65
  🥪 Torta Cubana .......... $85
  🌯 Torta Especial ........ $95

     [ Pídenos por WhatsApp ]
```

Colores amarillo y café. Todo centrado. Botón grande que abre WhatsApp al tocarlo. Y todo eso lo dirigiste tú.

### Díselo a la IA

Después de tener la página, para entenderla:

> "Ahora explícame el archivo que me acabas de dar, sección por sección, como si me lo contara un colega, no un manual. Quiero saber qué hace cada bloque."

Esa es la Lección C8. Sigue después de terminar esta.

### Ejercicios

1. **[ordenar]** Acomoda los pasos de la práctica en orden:
   - Desordenado: `Doble clic para abrirlo en el navegador` · `Guardar en index.html` · `Copiar el prompt al asistente` · `Probar el botón de WhatsApp`
   - Respuesta: Copiar el prompt al asistente → Guardar en index.html → Doble clic para abrirlo en el navegador → Probar el botón de WhatsApp

2. **[opción múltiple]** Si algo sale mal al abrir tu página, ¿qué debes hacer PRIMERO?
   - a) Editar el código a mano
   - b) Volver al chat y describir el problema a la IA ✔
   - c) Descargar otro navegador
   - d) Reiniciar la computadora

3. **[completar]** "Guardas el archivo con extensión ____ dentro de una carpeta como `mi-primera-pagina`, y para verlo le das ____ clic."
   - Banco: `.html` · `doble` · `.txt` · `derecho`
   - Respuesta: .html / doble

4. **[verdadero/falso]** "Esta primera página tiene que verse profesional para considerar la lección aprobada."
   - Respuesta: FALSO — el objetivo es TENER una página real hecha por ti; el pulido viene después.

5. **[qué hace]** Le pides a la IA "sin imágenes, usa emojis 🌮 🥪 🌯 en los productos". ¿Por qué?
   - a) Porque las imágenes son ilegales
   - b) Para tener una primera página completa sin necesitar archivos extra ✔
   - c) Porque los emojis cargan más rápido
   - d) Porque HTML no soporta imágenes

---

## C8 — Leer lo que la IA generó: entender tu propia página

### Concepto

Regla no negociable de este programa: **no publicas código que no entiendes**. La IA no es un oráculo — es un colaborador. Y tú, como director, revisas antes de firmar. Esa disciplina te separa del 90% de los "vibe coders" del mundo.

Cómo se lee el `index.html` que generó la IA en C7 (aplicable a cualquier archivo web):

1. **Empieza por la estructura general**. Todo HTML tiene esta forma:
   ```
   <!doctype html>
   <html>
     <head> ← metadata: título de la pestaña, estilos ← </head>
     <body> ← lo que se ve en pantalla ← </body>
   </html>
   ```
   Sin memorizar: reconoce. Head = "detrás del escenario"; Body = "lo que ve el público".

2. **Localiza los pedazos que ya conoces** (B7): `<h1>` (título grande), `<p>` (párrafo), `<a>` (enlace), `<button>` (botón). Si la IA usó `<div>` o `<section>`, esas son "cajas" agrupadoras — puedes pensar en ellas como carpetas dentro del body.

3. **Encuentra el CSS**. Suele estar dentro de `<style>...</style>` en el head. Ahí ves los colores, tamaños, alineaciones. Reglas de la forma `elemento { propiedad: valor; }` (B8).

4. **Pregúntale a la IA lo que no entiendas.** Copia el bloque que no captas y di: "Explícame estas líneas específicas".

### Analogía

Recibir el código de la IA es como recibir un **mueble armado por otro**: se ve bonito, funciona… hasta que se afloja un tornillo y no sabes cuál. Entender la estructura mientras funciona es tu manual de mantenimiento futuro. El día que se rompa (y algún día se romperá), vas a saber dónde apretar.

### Cómo se ve en la práctica

Un fragmento del `index.html` de C7 que ya puedes leer casi solo:

```html
<body>
  <h1>🌮 Tortas El Güero 🥪</h1>
  <p>La torta que tu día necesita.</p>
  <div class="productos">
    <p>🌮 Torta Clásica — $65</p>
    <p>🥪 Torta Cubana — $85</p>
  </div>
  <a href="https://wa.me/5512345678" class="btn">
    Pídenos por WhatsApp
  </a>
</body>
```

Léelo en voz alta: "en el body, hay un h1 con el título, un párrafo con la descripción, una caja de productos con dos párrafos adentro, y un enlace estilo botón que abre WhatsApp". Acabas de leer código.

### Díselo a la IA

> "Este es mi index.html [pegas el archivo]. Explícamelo así:
> 1. Una tabla con cada sección del `<body>` y qué muestra en pantalla.
> 2. Una lista de las reglas CSS y qué controla cada una.
> 3. Un párrafo final con lo que este archivo NO tiene todavía (por ejemplo, meta tags de SEO, favicon)."

Esa última pregunta te va a dar la lista de mejoras para la próxima iteración.

### Ejercicios

1. **[relacionar]** Une la parte del HTML con lo que contiene:
   - `<head>` ↔ Metadata (título de pestaña, estilos)
   - `<body>` ↔ Lo que se ve en la pantalla
   - `<style>` ↔ El CSS embebido
   - `<div>` ↔ Una caja agrupadora

2. **[verdadero/falso]** "En este programa, es aceptable publicar código que no entiendes si funciona."
   - Respuesta: FALSO — nunca publicas código que no entiendes; esa es la disciplina que te separa del promedio.

3. **[completar]** "Head es 'detrás del ____' y body es 'lo que ve el ____'."
   - Banco: `escenario` · `público` · `código` · `programador`
   - Respuesta: escenario / público

4. **[qué hace]** Ves esta línea: `<a href="https://wa.me/5512345678" class="btn">Pídenos</a>`. ¿Qué muestra?
   - a) Una imagen del logo de WhatsApp
   - b) Un enlace con texto "Pídenos" (con estilo de botón por su class) que abre WhatsApp al número indicado ✔
   - c) Un formulario para ingresar el número
   - d) Un video promocional

5. **[opción múltiple]** No entiendes 4 líneas del código. ¿Qué haces?
   - a) Las borras y ves qué pasa
   - b) Le pides a la IA que te las explique una por una ✔
   - c) Las ignoras
   - d) Publicas la página sin mirar

---

## C9 — PRÁCTICA: cambiar colores y textos dirigiendo a la IA

### Concepto

Tu página de C7 existe. Ahora vas a **iterar** — la palabra sagrada de este programa. Iterar es cambiar-probar-cambiar-probar hasta que quede como tú quieres. Los amateurs se paralizan buscando la versión perfecta a la primera; los profesionales sueltan versiones rápido y las mejoran a la vuelta.

Los pasos:

1. **Ábrela otra vez** en el navegador para tenerla al ojo.
2. **Vuelve al chat** donde la creaste. La IA todavía tiene el contexto (¿te acuerdas C4?) — puedes pedir cambios sin volver a describir el proyecto.
3. **Pide UN cambio a la vez.** Ejemplos reales:

```
Cambia el color amarillo por un naranja más profundo (#ea580c),
y agrega un cuarto producto: "🌮 Torta Vegetariana" a $70.
Dame el archivo completo actualizado.
```

O:

```
El título se ve muy pequeño. Hazlo mucho más grande, y agrégale
una sombra suave que le dé un toque premium. Mismo archivo.
```

O:

```
El botón de WhatsApp está muy tímido. Que sea grande, en un color
verde WhatsApp (#25D366), con letras blancas y bordes redondeados.
```

4. **Actualiza tu archivo**: copia el nuevo `index.html`, pégalo reemplazando el viejo, guarda, y refresca el navegador (F5 o Ctrl+R). El cambio aparece.
5. **Repite** hasta que la página te guste. Cada iteración toma menos de 60 segundos.

Este loop — pedir, pegar, refrescar — es cómo se construye software con IA. Vas a hacerlo miles de veces.

### Analogía

Iterar con IA es como **probarse ropa en tienda**: te pruebas, te ves al espejo, cambias, te ves al espejo. Nadie compra la primera prenda sin verse en el espejo. Y nadie construye software sin refrescar el navegador entre cambios.

### Cómo se ve en la práctica

Un ciclo real:

```
Tú:  El precio de las tortas se ve chico y disperso. Alinéalos
     a la derecha del nombre, en negrita.

IA:  Listo, aquí el CSS actualizado. Solo cambiaron 4 líneas
     dentro del <style>: agregué display: flex a .productos p
     y justify-content: space-between. Los precios ahora en
     <span> con font-weight: bold.
     [código nuevo]

Tú:  [pega, guarda, refresca] Perfecto. Ahora quiero que al
     pasar el mouse sobre un producto, se ilumine ligeramente.
```

Ese ida-y-vuelta es la vida real de un constructor con IA. Y cada refresh te enseña algo.

### Díselo a la IA

Prompt de oro para iterar sin romper:

> "Voy a pedirte cambios. Antes de darme código, contéstame en una línea: ¿este cambio va a afectar SOLO lo que pedí, o puede romper algo más? Si hay riesgo, dime qué probar después."

### Ejercicios

1. **[opción múltiple]** ¿Qué es "iterar"?
   - a) Escribir el código a mano
   - b) Cambiar-probar-cambiar-probar hasta que quede bien ✔
   - c) Cerrar el navegador y abrirlo
   - d) Cambiar de asistente de IA

2. **[completar]** "El loop de trabajo con IA es: ____ el cambio → pegar el código → ____ el navegador → repetir."
   - Banco: `pedir` · `refrescar` · `cerrar` · `imprimir`
   - Respuesta: pedir / refrescar

3. **[verdadero/falso]** "Debes pedir todos los cambios en un solo mensaje gigante."
   - Respuesta: FALSO — pide UN cambio a la vez; los mensajes atómicos se corrigen más fácil si algo sale mal.

4. **[ordenar]** El ciclo de iteración:
   - Desordenado: `refresh en el navegador` · `pegar y guardar` · `pedir el cambio en el chat` · `ver el resultado`
   - Respuesta: pedir el cambio en el chat → pegar y guardar → refresh en el navegador → ver el resultado

5. **[qué hace]** Le pides a la IA: "antes de darme código, dime si el cambio puede romper algo más". ¿Qué buscas?
   - a) Ahorrar tokens
   - b) Que la IA piense en efectos secundarios antes de generar ✔
   - c) Que la IA se disculpe
   - d) Confundir a la IA

---

## C10 — Guardar tu proyecto: archivos, carpeta y orden

### Concepto

Ya tienes una página iterada (C9). Ahora vas a hacer algo aburrido y crítico: **guardar tu proyecto como lo hacen los profesionales**. Un proyecto es más que un archivo — es una carpeta con estructura, y esa estructura te ahorra caos en 6 meses.

Estructura mínima recomendada, ya para tu primera página:

```
mi-primera-pagina/
├── index.html      ← el archivo principal
├── README.md       ← qué es esto y cómo abrirlo
└── .gitignore      ← lista de archivos que Git ignorará (Mes 2)
```

Reglas de nombre para carpetas y archivos (te van a ahorrar dolores):

- **Sin espacios**: `mi-primera-pagina`, no `Mi Primera Página`. Los espacios en rutas son un dolor de cabeza en la terminal.
- **Sin acentos**: `contrasenas.js`, no `contraseñas.js`. Los servidores a veces los cambian por caracteres raros.
- **Todo en minúsculas** (excepto abreviaturas famosas como `README`).
- **Guiones para separar palabras**: `mi-tienda-online` o `mi_tienda_online` (elige un estilo y sé consistente).

Tres archivos que aparecen en todo proyecto profesional:

- **README.md** — la carta de presentación: "esto es X, se abre así, hace esto". El primer archivo que abre cualquiera que herede tu proyecto (incluido tú mismo en 3 meses).
- **.gitignore** — le dice a Git (Mes 2) qué archivos no debe rastrear (contraseñas, dependencias pesadas). No lo vamos a usar hoy, pero acostúmbrate a verlo.
- **index.html** — nombre estándar para "la página principal de un sitio". Los servidores web buscan este nombre por default cuando alguien visita tu dominio.

Guarda todo así desde el día 1, y en el Mes 2 (Git) todo va a fluir naturalmente.

### Analogía

Un proyecto sin estructura es un **cuarto de adolescente**: todo funciona hasta que necesitas encontrar una calceta específica. Un proyecto ordenado es una **tienda organizada**: cualquiera que entra sabe dónde está cada cosa. La diferencia en esfuerzo es de 5 minutos hoy, y 5 horas en 6 meses.

### Cómo se ve en la práctica

Tu README.md más básico:

```markdown
# Mi Primera Página

Landing page para "Tortas El Güero", hecha con HTML y CSS.

## Cómo abrirla
1. Descarga esta carpeta.
2. Doble clic en `index.html`.
3. Se abre en tu navegador.

## Estado
- [x] Estructura básica
- [x] Botón de WhatsApp
- [ ] Sección de horarios
- [ ] Publicar en Netlify (Lección C16)
```

Ese archivo no es opcional en el mundo profesional. Es tu firma.

### Díselo a la IA

> "Genera un README.md profesional para mi proyecto [descríbelo]. Incluye: título, descripción en 2 líneas, cómo abrirlo, estado del proyecto con checklist, y una sección 'Notas' donde apunte pendientes. Formato markdown."

### Ejercicios

1. **[relacionar]** Une el archivo con su papel en el proyecto:
   - `index.html` ↔ La página principal (el nombre estándar)
   - `README.md` ↔ Carta de presentación del proyecto
   - `.gitignore` ↔ Lista de archivos que Git ignorará

2. **[opción múltiple]** ¿Cuál es el mejor nombre para una carpeta de proyecto?
   - a) Mi Proyecto Nuevo
   - b) mi-proyecto-nuevo ✔
   - c) Mi Proyecto Nuevo (final)
   - d) proyectoNuevoVersión_2

3. **[verdadero/falso]** "Los espacios en nombres de carpetas y archivos siempre son buena idea porque se leen bonito."
   - Respuesta: FALSO — causan dolores de cabeza en terminal y servidores; usa guiones o guiones bajos.

4. **[completar]** "Los servidores web buscan por default el archivo llamado ____ cuando alguien visita tu dominio."
   - Banco: `index.html` · `home.html` · `main.html` · `default.html`
   - Respuesta: index.html

5. **[qué hace]** Le pides a la IA "genera un README.md profesional con checklist de estado". ¿Qué ganas?
   - a) Un archivo bonito para presumir
   - b) Documentación viva de tu proyecto que te salva la memoria en meses ✔
   - c) Un archivo de configuración obligatorio
   - d) Que la página cargue más rápido

---

## C11 — PRÁCTICA: agregar una sección con imagen

### Concepto

Tu página de C7 ya tiene nombre, descripción, productos y botón de WhatsApp. Hoy le agregas el elemento que más cambia la percepción de una página: **una imagen**. Una landing page sin imagen se siente "de prueba"; con imagen, se siente negocio.

En HTML, una imagen se mete con la etiqueta `<img>` y su atributo `src` (source, "fuente") indica dónde está el archivo. Lo viste de pasada en C8 cuando leíste el `<body>` — hoy lo usas de verdad:

```html
<img src="torta.jpg" alt="Torta de pierna con aguacate">
```

- `src` le dice al navegador qué archivo cargar.
- `alt` es el texto alternativo: si la imagen no carga, se muestra él; y los lectores de pantalla lo leen en voz alta. Es accesibilidad y también buena práctica.

La regla de oro del archivo: **la imagen debe vivir en la misma carpeta que tu `index.html`** y el nombre debe coincidir exactamente con el `src`. Recuerda las reglas de C10: sin espacios, sin acentos, minúsculas. `torta.jpg`, no `Torta del día.jpg`.

El resto es dirigir a la IA igual que en C9: pides un cambio, pegas el código, refrescas. Pero antes de pedir, consigue la imagen: puedes tomarla con tu celular o descargar una foto libre de regalías (Unsplash, Pexels). Elige una que se vea apetitosa — es tu carta de presentación.

### Analogía

Agregar una imagen a tu página es como **ponerle foto al menú de un restaurante**: sin foto, el cliente lee "torta de pierna" e imagina; con foto, se le antoja. Y la foto no vive en el escritorio del chef — vive pegada al menú, para que cualquiera la vea. Tu imagen vive pegada a tu `index.html`.

### Cómo se ve en la práctica

Tu ciclo completo de hoy:

```
Tú:  En mi index.html quiero una sección con imagen entre el
     encabezado y los productos.
     - La imagen será un archivo "torta.jpg" que guardaré en la
       misma carpeta que index.html.
     - Leyenda debajo: "Hechas al momento, con ingredientes frescos".
     - Centrada, y que en celular ocupe todo el ancho.
     Dame el archivo completo actualizado y dime el tamaño ideal
     de la imagen (ancho x alto) para que no pese demasiado.

IA:  [código con <img src="torta.jpg" alt="..."> dentro de una
     sección nueva, CSS centrado y responsive]

Tú:  [Guardas torta.jpg en la carpeta, pegas el index.html nuevo,
     guardas, refrescas (F5)]
```

Si la imagen no aparece, no edites el código: regresa al chat y reporta el síntoma (lo viste en C12). Nueve de cada diez veces es un nombre mal escrito en `src` o la imagen en otra carpeta.

### Díselo a la IA

> "Agrega una sección con imagen a mi index.html. La imagen es un archivo local llamado 'torta.jpg' que estará en la misma carpeta. Incluye una leyenda debajo y hazla centrada y con ancho completo en celular. No cambies colores ni textos existentes. Dame el archivo completo."

### Ejercicios

1. **[opción múltiple]** ¿Dónde debe estar el archivo `torta.jpg` para que la página lo encuentre?
   - a) En cualquier carpeta del escritorio
   - b) En la misma carpeta que `index.html` ✔
   - c) Dentro de la carpeta de Descargas
   - d) En una carpeta distinta, para no mezclarlos

2. **[completar]** "La etiqueta para mostrar una imagen es ____ y su atributo ____ indica la ubicación del archivo."
   - Banco: `<img>` · `src` · `<photo>` · `href`
   - Respuesta: <img> / src

3. **[verdadero/falso]** "Si el archivo se llama `torta.jpg` y el `src` dice `Torta.jpg`, la página lo carga igual porque las mayúsculas no importan."
   - Respuesta: FALSO — en los servidores y en muchos sistemas sí se distingue; el nombre debe coincidir exactamente.

4. **[ordenar]** El ciclo de agregar una imagen a tu página:
   - Desordenado: `Guardar la imagen en la carpeta del proyecto` · `Refrescar el navegador` · `Pedir a la IA la sección con la imagen` · `Pegar el código nuevo en index.html`
   - Respuesta: Pedir a la IA → Guardar la imagen en la carpeta → Pegar el código nuevo → Refrescar el navegador

5. **[qué hace]** `<img src="torta.jpg" alt="Torta El Güero">` — ¿qué hace?
   - a) Muestra la imagen `torta.jpg`; si no carga, muestra el texto "Torta El Güero" ✔
   - b) Descarga la imagen desde internet en cada visita
   - c) Crea un archivo de imagen llamado torta.jpg
   - d) Convierte la imagen en un botón de WhatsApp

---

## C12 — Cuando la IA se equivoca: el arte de pedir correcciones

### Concepto

En C5 viste las alucinaciones. Pero el error más común de la IA no es inventar datos: es **malinterpretar lo que pediste** o **romper algo al cambiar otra cosa**. Eso no es un accidente — es parte del trabajo. La pregunta no es "¿va a equivocarse?", sino "¿qué hago cuando se equivoca?". Y la respuesta es el arte de pedir correcciones.

El error número uno del principiante es reportar así: *"no funciona"*, *"está mal"*, *"se ve feo"*. Con eso, la IA no tiene cómo diagnosticar — adivina, y adivinar produce otro error. Tu reporte es como los síntomas para un médico: mientras más preciso, mejor el diagnóstico.

La fórmula del reporte profesional tiene 3 partes:

1. **Qué esperabas** — el objetivo (lo viste en C3).
2. **Qué pasó exactamente** — el síntoma concreto, sin adornos: "al hacer clic en el botón no pasa nada", "en pantalla chica los productos se salen".
3. **El código relevante** — pega el archivo o la línea donde está el problema. "No funciona" sin código es un misterio; "no funciona + aquí está el código" es un caso resuelto a la mitad.

Y un extra que separa a los buenos: **pide la causa, no solo el arreglo.** "¿Cuál crees que sea la causa?" te enseña algo en cada corrección. Con el tiempo, tú mismo vas a sospechar la causa antes de preguntar.

Una cosa más: no repitas el mismo mensaje con más enojos. Si la primera respuesta no arregló nada, el problema es que falta información (no que la IA no te oyó). Agrega el síntoma que no diste.

### Analogía

Pedir correcciones es como **explicar un dolor al doctor**: si le dices "me siento mal", te hace estudios hasta adivinar. Si le dices "me duele el lado derecho, desde ayer, al respirar profundo", te manda directo al lugar correcto. La IA no ve tu pantalla — tu reporte es su único diagnóstico. Haz que sea bueno.

### Cómo se ve en la práctica

```
Tú:  El botón de WhatsApp no abre nada.
IA:  Dame el código del botón y dime qué pasa exactamente.
Tú:  Hago clic y no pasa nada. Aquí está mi botón:
     <a href="https://wa.me/5512345678" class="btn">
       Pídenos por WhatsApp</a>
     ¿Cuál crees que sea la causa?
IA:  El enlace está bien. La causa más probable es que el CSS
     del botón tenga pointer-events: none, o que un elemento
     lo tape. Busca en tu CSS "pointer-events" y pégalo aquí.
```

Mismo problema, dos reportes: "no funciona" obligó a la IA a adivinar; el reporte completo la convirtió en diagnóstica. Nota cómo la pregunta final —"¿cuál crees que sea la causa?"— le pide razonar en vez de soltar código al azar. Eso es dirigir.

### Díselo a la IA

> "Este es mi código: [pega el archivo o la línea]. Lo que esperaba: ____. Lo que pasa: ____ (síntoma exacto). ¿Cuál es la causa más probable y cuál es el arreglo mínimo, sin cambiar el resto?"

### Ejercicios

1. **[opción múltiple]** Tu página "se ve mal". ¿Cuál reporte le das a la IA?
   - a) "Está fea, arréglala"
   - b) "En pantalla chica los productos se salen del borde; aquí está mi CSS [pegas]" ✔
   - c) "No funciona nada"
   - d) "Hazla bonita, por favor"

2. **[completar]** "Un buen reporte tiene: qué ____, qué ____ exactamente, y el ____ relevante."
   - Banco: `esperabas` · `pasa` · `código` · `color`
   - Respuesta: esperabas / pasa / código

3. **[relacionar]** Une el reporte flojo con su versión que la IA sí puede usar:
   - "No funciona" ↔ "Al hacer clic no pasa nada; aquí está el código del botón"
   - "Está mal" ↔ "El precio dice $70 y debe decir $65 (Torta Vegetariana)"
   - "Se ve feo" ↔ "En pantalla de 375px el menú se desborda; este es mi CSS"

4. **[verdadero/falso]** "Si la IA no arregla el error con la primera corrección, lo mejor es repetir el mismo mensaje con más fuerza."
   - Respuesta: FALSO — repetir lo mismo da lo mismo; agrega información nueva (síntoma exacto, código, lo que esperabas).

5. **[qué hace]** Pegas tu código, describes el síntoma exacto y preguntas "¿cuál crees que sea la causa?" — ¿qué logras?
   - a) Que la IA adivine con menos pistas
   - b) Que la IA diagnostique en vez de escupir código al azar ✔
   - c) Que la IA borre tu archivo
   - d) Que la conversación se reinicie

---

## C13 — Iterar: la conversación como herramienta de construcción

### Concepto

En C9 hiciste tu primera iteración: pedir, pegar, refrescar. En C11 y C12 lo repetiste y aprendiste a reportar errores. Hoy formalizamos la idea que une todo: **la conversación misma es tu herramienta de construcción**. El chat no es un "truco para sacar código" — es el taller donde tu proyecto se moldea.

Cada mensaje de la conversación es un cambio: pediste colores, la IA los cambió; reportaste un botón, la IA lo arregló. Mientras más entienda la conversación, menos tienes que repetir (lo viste en C4 con el contexto). Por eso no abres una conversación nueva por cada tweak: la historia acumulada es parte del proyecto.

El ciclo de construcción profesional:

1. **Pedir el cambio** — uno a la vez (C9).
2. **Pegar y refrescar** — ver el resultado en el navegador.
3. **Evaluar contra el objetivo** — ¿quedó como pedí? Si no, reportar (C12).
4. **Siguiente cambio, o cerrar** — pedir el siguiente tweak, o cerrar con el resumen puente (C4).

El paso 3 es el que la mayoría salta. "¿Quedó como pedí?" requiere tener el objetivo en la cabeza — o mejor, en el brief (lo verás en C18). Sin objetivo, iteras sin rumbo y nunca sabes cuándo parar.

Y hablando de parar: itera hasta "bueno", no hasta "perfecto". El perfeccionismo que nunca publica es procrastinación con disfraz. Tu meta de hoy no es la página definitiva del mundo — es una página buena, publicada, que mañana mejoras. Publicar se aprende en C16.

### Analogía

La conversación como construcción es como **guiar a un conductor por el tráfico**: no le dictas la ruta completa al inicio y te quedas callado — le dices "derecha aquí, sigue, en la siguiente das vuelta", él corrige sobre la marcha, y si metes mal el pie le das el detalle y sigue. Cada comentario tuyo ajusta el rumbo. Y nunca reinicias el viaje desde cero por una desviación.

### Cómo se ve en la práctica

Tres mensajes, un solo hilo, un solo proyecto:

```
Tú:  Cambia el texto del encabezado a "Tortas El Güero —
     hechas al momento". Mismo estilo, solo el texto.
IA:  [código]
Tú:  [pega, refresca] Perfecto. Ahora el título de la pestaña:
     que diga "Tortas El Güero | Pide hoy".
IA:  [código]
Tú:  [pega, refresca] Listo. Revisa mi página contra esta lista
     y dime qué falta: 1) nombre 2) descripción 3) imagen
     4) productos con precio 5) botón WhatsApp.
IA:  Tienes todo, solo el botón usa el número genérico 5512345678.
     ¿Quieres cambiarlo por el real antes de publicar?
```

Fíjate en el último mensaje: la IA pasó de constructora a **auditora** contra tu checklist. Esa jugada —usar la conversación para revisar, no solo para escribir— es puro nivel profesional.

### Díselo a la IA

> "Aquí está mi página actual: [pegas el index.html]. Aquí está mi lista de requisitos: [pega el brief]. Revisa los dos y dime, en orden de prioridad, qué ya cumplo y qué me falta. No cambies nada todavía."

### Ejercicios

1. **[ordenar]** El ciclo de construcción con la conversación:
   - Desordenado: `evaluar contra el objetivo` · `pedir el cambio` · `pedir el siguiente cambio o cerrar` · `pegar y refrescar`
   - Respuesta: pedir el cambio → pegar y refrescar → evaluar contra el objetivo → pedir el siguiente cambio o cerrar

2. **[opción múltiple]** ¿Cuándo conviene abrir una conversación NUEVA?
   - a) Para cada cambio, por más pequeño que sea
   - b) Cuando cambias de misión (otro proyecto) o la conversación se llenó y usas el resumen puente ✔
   - c) Cada vez que refrescas el navegador
   - d) Nunca, en ninguna situación

3. **[completar]** "Cada ____ de la conversación es un cambio, y cada cambio debe ser ____ para corregirse fácil si sale mal."
   - Banco: `mensaje` · `atómico` · `secreto` · `final`
   - Respuesta: mensaje / atómico

4. **[verdadero/falso]** "Itera y sigue iterando: nunca publicar es la estrategia del profesional."
   - Respuesta: FALSO — iteras hasta "bueno" y publicas; el perfeccionismo que nunca publica es procrastinación.

5. **[qué hace]** Le pegas tu index.html + tu lista de requisitos y le pides "revisa y dime qué falta, no cambies nada todavía". ¿Qué logras?
   - a) Una auditoría priorizada de lo que falta, sin romper nada ✔
   - b) Que la IA reescriba toda la página sola
   - c) Que la IA borre tu lista de requisitos
   - d) Nada, eso no se puede pedir

---

## C14 — PRÁCTICA: hacer tu página responsive (que se vea bien en celular)

### Concepto

**Responsive** significa que tu página se adapta al ancho de la pantalla donde se ve: computadora, tablet, celular. No es "hacer otra versión" — es la misma página que se reorganiza sola según el espacio disponible. En México la mayoría de la gente navega desde el celular: si tu página solo se ve bien en escritorio, es como un negocio con el letrero volteado.

Hay dos piezas técnicas que debes reconocer (no memorizar — reconocer):

1. **El meta viewport** — una línea que le dice al navegador del celular "usa el ancho real de mi pantalla, no me encogas la versión de escritorio". Sin ella, tu página en celular se ve como una foto mini con letras diminutas.
2. **Las media queries** — reglas CSS que se activan según el ancho de pantalla. Se ven así:

```css
@media (max-width: 600px) {
  .productos { flex-direction: column; }
}
```

"Cuando la pantalla mida 600px o menos, los productos van en una columna." Celular primero, luego tablet, luego escritorio.

En C7 pediste "que se vea bien en celular" desde el primer prompt — pero pedirlo no garantiza el resultado. Hoy lo **verificas de verdad** y ajustas. Tu página ya vive en tu computadora; en C16 la vas a ver en tu celular real. Que no te dé pena la primera vez.

### Analogía

Una página no responsive es como un **mueble gigante que no cabe por la puerta**: el contenido está, pero se desborda, se corta y tienes que hacer zoom para encontrar lo que buscas. Una página responsive es un mueble que se arma solo según el espacio: en la sala grande, extendido; en la recámara chica, compacto. Mismo mueble, distinta posición. Tu página es ese mueble.

### Cómo se ve en la práctica

Los pasos de hoy:

```
1. Abre tu index.html y aprieta F12 (o Ctrl+Shift+I). Arriba
   a la izquierda hay un ícono de celular/tablet (o Ctrl+Shift+M):
   eso activa el "modo dispositivo". Cambia el ancho a 375px
   (tamaño de iPhone) y mira tu página. ¿Se sale algo? ¿Los
   productos están apretados?

2. Copia este prompt a tu chat (el de tu proyecto):

   "Revisa mi index.html en pantallas de 375px (celular) y 768px
   (tablet). Hazla responsive con media queries y el meta viewport:
   - Nada debe salirse de la pantalla
   - Los productos en una sola columna en celular
   - El botón de WhatsApp del tamaño de un dedo (mínimo 44px de alto)
   - No cambies colores, textos ni la imagen
   Dame el archivo completo actualizado."

3. Pega, guarda, refresca. Repite la prueba en 375px, 768px y
   en pantalla completa.
4. Si algo se ve raro, reporta con la fórmula de C12: qué
   esperabas, qué pasa, el código.
5. Probar en tu celular de verdad… eso llega en C16, cuando
   publiques la página. Por ahora, el modo dispositivo es tu
   laboratorio.
```

Una media query no se ve "mal" ni "bien" a ojo: se prueba a cada ancho. Por eso el modo dispositivo no es opcional — es tu cinta métrica.

### Díselo a la IA

> "Haz responsive mi index.html. Hoy se ve bien en escritorio pero no en celular. Ajusta: textos que no se salgan, productos en una columna en pantallas chicas, botón del tamaño de un dedo. Usa media queries y el meta viewport. No cambies colores, textos ni imágenes. Dame el archivo completo."

### Ejercicios

1. **[opción múltiple]** ¿Qué significa que una página sea responsive?
   - a) Que se adapta al ancho de la pantalla donde se ve ✔
   - b) Que se ve idéntica en todas las pantallas
   - c) Que solo funciona en celulares
   - d) Que carga más rápido que las demás

2. **[completar]** "Las ____ son reglas CSS que se activan según el ancho de pantalla, y el ____ le dice al celular que use su ancho real."
   - Banco: `media queries` · `viewport` · `flexbox` · `margen`
   - Respuesta: media queries / viewport

3. **[verdadero/falso]** "Desde C7 tu prompt ya pedía 'que se vea bien en celular', así que no necesitas probarla en pantalla chica."
   - Respuesta: FALSO — pedirlo no garantiza el resultado; hoy verificas de verdad con el modo dispositivo y ajustas.

4. **[ordenar]** La práctica de hoy:
   - Desordenado: `pedir a la IA que la haga responsive` · `probar en pantalla de 375px con el modo dispositivo` · `pedir ajustes si algo se sale` · `pegar, guardar y refrescar`
   - Respuesta: probar en 375px → pedir a la IA que la haga responsive → pegar, guardar y refrescar → pedir ajustes si algo se sale

5. **[qué hace]** Esta regla: `@media (max-width: 600px) { .productos { flex-direction: column; } }` — ¿qué hace?
   - a) Pone los productos en una columna solo en pantallas de 600px o menos ✔
   - b) Pone los productos en columna siempre, en cualquier pantalla
   - c) Bloquea la página si la pantalla mide 600px
   - d) Convierte la página en una app

---

## C15 — Publicar I: qué es hosting y qué opciones existen

### Concepto

Tu página existe en tu computadora. El problema: tu computadora es tuya. Cuando se apaga, cuando cierras el navegador, cuando tu casa se queda sin internet — nadie más puede ver la página. Para que el mundo la vea 24/7 necesitas **hosting**: espacio rentado en un **servidor**, una computadora profesional que está encendida y conectada todo el tiempo (en A9 y A27 de la Materia A aprendes cómo viven esas máquinas).

Tu página actual es lo que llamamos una **página estática**: son archivos HTML, CSS y JavaScript que el servidor solo tiene que *entregar*. No calcula nada, no guarda datos, no pregunta a una base de datos. Y esa simplicidad tiene un premio: el hosting para páginas estáticas es gratis y rapidísimo.

Opciones que te convienen hoy (todas gratis para lo que necesitas):

- **Netlify Drop** — arrastras tu carpeta al navegador y tu página queda en vivo. La usas mañana en C16.
- **GitHub Pages** — sirve tu proyecto desde tu repositorio de Git (lo aprendes en el Mes 2).
- **Vercel** — muy popular para proyectos de frontend, similar a Netlify.

Opciones para más adelante (no las toques hoy): **hosting compartido** con panel y base de datos (~$3-10/mes), **VPS** de Linux, y plataformas tipo **serverless**. Todas resuelven problemas que tu landing page todavía no tiene — cuando construyas apps con datos (Mes 4+) llegará su momento.

Un concepto que confunde a todos: **hosting y dominio son dos cosas distintas**. El hosting es el local (dónde vive tu página); el dominio es la dirección (cómo la encuentra la gente). Puedes tener página sin comprar dominio: Netlify te regala una dirección tipo `tu-sitio.netlify.app`. El dominio de verdad — `tortaselguero.com` — es otro tema (y en C17 ves el viaje completo de un clic).

### Analogía

El hosting es **el local del negocio**: tu página es el producto y tu computadora es el taller de tu casa — puedes mostrarle tu trabajo a los amigos que vienen, pero no está abierto al público. El hosting es el local en la avenida, abierto 24 horas, donde cualquiera entra sin avisar. Y por lo que construyes hoy, hay dueños de local que te lo prestan gratis (Netlify) a cambio de que su nombre aparezca en la puerta.

### Cómo se ve en la práctica

Comparación rápida de opciones para lo que construyes:

```
Opción               Qué es                          Costo hoy
Netlify Drop         Arrastra tu carpeta → en vivo   $0
GitHub Pages         Sirve desde tu repo de Git      $0 (Mes 2)
Vercel               Ídem, popular para frontend     $0
Hosting compartido   Panel + base de datos           ~$3–10/mes
```

Para decidir, la pregunta no es "¿cuál es mejor?" — es "¿qué problema resuelvo?". Hoy tu problema es: *un index.html que el mundo pueda abrir*. La respuesta es cualquier hosting estático gratuito, y la más corta en pasos es Netlify Drop.

### Díselo a la IA

> "Tengo una página estática de un negocio (un solo index.html con CSS adentro). Quiero publicarla gratis, sin comprar dominio todavía. Recomiéndame la opción más rápida y dame el paso a paso para hoy."

### Ejercicios

1. **[opción múltiple]** ¿Qué es hosting?
   - a) El programa donde editas tu código
   - b) Espacio en un servidor para que tu página esté en internet 24/7 ✔
   - c) Un navegador especial para programadores
   - d) El nombre de tu página

2. **[relacionar]** Une el concepto con su equivalente cotidiano:
   - Dominio ↔ La dirección del negocio
   - Hosting ↔ El local donde vive el negocio
   - Tu computadora ↔ El taller de tu casa (solo amigos)
   - Desplegar ↔ Abrir el local al público

3. **[completar]** "Tu página de HTML/CSS/JS se sirve perfecto con hosting ____, que casi siempre es ____."
   - Banco: `estático` · `gratis` · `dinámico` · `caro`
   - Respuesta: estático / gratis

4. **[verdadero/falso]** "Para publicar tu página necesitas primero comprar un dominio como tortaselguero.com."
   - Respuesta: FALSO — Netlify te regala una URL tipo tu-sitio.netlify.app; el dominio propio es opcional.

5. **[qué hace]** Tu compañero dice: "mi página es un solo index.html con el CSS adentro". ¿Qué hosting le conviene?
   - a) Un hosting estático gratuito: Netlify, GitHub Pages o Vercel ✔
   - b) Un servidor con base de datos MySQL
   - c) Una VPS de Linux con panel de control
   - d) Ninguno, su página ya está en internet

---

## C16 — PRÁCTICA: Netlify Drop — tu página EN VIVO en internet

### Concepto

Hoy es el día grande: tu página deja de ser un archivo local y se convierte en **una URL que cualquiera en el mundo puede abrir**. En C15 viste la teoría del hosting; hoy la ejecutas en menos de 10 minutos con **Netlify Drop**, la vía más corta que existe para publicar.

Netlify Drop es exactamente lo que promete: arrastras tu carpeta del proyecto a una zona en el navegador, y Netlify la sube a sus servidores y te regala una URL tipo `tu-sitio.netlify.app`. No hay que instalar nada, no hay que configurar nada, no hay tarjeta de crédito.

Antes de publicar, aplica todo lo aprendido:

- **Ordena tu carpeta** (C10): `index.html` en la raíz + la imagen de C11. Sin basura.
- **Revisa tu página** en el modo dispositivo (C14): lo que publiques será lo que la gente vea.
- **No publiques lo que no entiendes** (C8): si hay algo que no te quedó claro, pregunta antes.

El paso del mundo profesional: publicar temprano y feo, mejor que nunca publicar. Tu primera versión no tiene que ser perfecta — tiene que **existir**. Mañana la mejoras (y en C19-C20 construyes una mejor para un negocio real). Publicar rápido te desbloquea: deja de ser "el alumno que aprende" y empieza a ser "alguien que tiene página".

### Analogía

Este es el **día de la inauguración**: tu taller (la computadora) siempre estuvo en tu casa, y hoy el local abre al público en la avenida. Netlify te da el local, la luz, el letrero — y tú solo llevas tu producto y lo pones en el escaparate. La primera vez que un extraño puede entrar, no un amigo que vino por cortesía.

### Cómo se ve en la práctica

Los pasos exactos:

```
1. Confirma tu carpeta del proyecto: index.html en la raíz,
   torta.jpg en la misma carpeta. Sin archivos basura.

2. Ve a:  https://app.netlify.com/drop

3. Arrastra TODA la carpeta (no el archivo solo) a la zona
   punteada que dice "drag and drop your site output folder".

4. Espera ~5 segundos. Netlify te da una URL:
   https://<tu-sitio>.netlify.app   ← cópiala y guárdala.

5. Ábrela en tu celular (sí, en tu celular de verdad).
   Revisa: botón de WhatsApp, imagen, responsive, textos.

6. ¿Cambiaste algo? Vuelve a arrastrar la carpeta: Netlify
   actualiza la misma URL. Publícala cada vez que mejores.
```

Ese momento —abrir la URL en tu teléfono y ver TU página— es el pago de todo el mes. Mándala al grupo de la familia. Que lo vea quien quieras: ya no estás practicando, ya estás publicado.

### Díselo a la IA

> "Voy a publicar mi página en Netlify Drop. Antes de subirla, revisa mi proyecto [pegas index.html y describes la carpeta]. Dime si falta algo para que la primera versión pública no se vea improvisada: título de pestaña, meta viewport, imagen, orden de archivos. Hazme una checklist."

### Ejercicios

1. **[ordenar]** Publicar tu página con Netlify Drop:
   - Desordenado: `arrastrar la carpeta al navegador` · `abrir la URL en tu celular` · `ir a app.netlify.com/drop` · `probar botón, imagen y responsive`
   - Respuesta: ir a app.netlify.com/drop → arrastrar la carpeta → abrir la URL en tu celular → probar botón, imagen y responsive

2. **[opción múltiple]** ¿Qué arrastras a Netlify Drop?
   - a) Un archivo .zip con fotos
   - b) Tu carpeta completa del proyecto (index.html + imagen) ✔
   - c) Un enlace a tu conversación de IA
   - d) Un solo archivo .css

3. **[completar]** "Netlify te regala una URL tipo ____, y si cambias algo, vuelves a ____ la carpeta para actualizarla."
   - Banco: `tu-sitio.netlify.app` · `arrastrar` · `renombrar` · `imprimir`
   - Respuesta: tu-sitio.netlify.app / arrastrar

4. **[verdadero/falso]** "Antes de publicar debes revisar que tu carpeta esté ordenada y que index.html esté en la raíz."
   - Respuesta: VERDADERO — el orden de C10 es parte del trabajo; Netlify busca index.html por default.

5. **[qué hace]** Le pasas tu URL a un amigo y le dices "ábrela en tu celular". ¿Qué estás verificando de verdad?
   - a) Que tu página se vea bien fuera de tu computadora, en una pantalla y red reales ✔
   - b) Que tu amigo tenga WhatsApp instalado
   - c) Que Netlify te cobre bien
   - d) Nada, solo presumir

---

## C17 — Tu URL en el mundo: qué pasa por detrás cuando alguien la abre

### Concepto

Ayer le mandaste tu URL a alguien (C16). Hoy descubres qué pasó por detrás en ese segundo en que esa persona tocó el enlace. No es magia: es la **máquina de internet** trabajando, y ya conoces casi todas sus piezas de la Materia A (A16-A20). Aquí las unes todas en una sola historia.

Cuando alguien escribe `tu-sitio.netlify.app` y aprieta Enter:

1. **Su computadora pregunta al DNS** — "¿dónde vive ese nombre?". El DNS (lo viste en A17) es el directorio telefónico de internet: traduce nombres bonitos a **direcciones IP** (los números tipo `75.2.60.5`).
2. **El DNS responde** con la IP del servidor de Netlify más cercano a esa persona.
3. **El navegador hace una petición HTTP** (lo viste en A19) — "dame la página, por favor" — a esa IP.
4. **El servidor responde** enviando el `index.html`. El navegador lo lee, descubre que también necesita el CSS y la imagen, y los pide.
5. **El navegador arma todo en pantalla**: estructura (HTML), estilo (CSS), imagen. Lo que ves es el resultado final.

Tres detalles que hacen de esto algo interesante:

- **El DNS es jerárquico y tiene memoria.** Si el navegador o su proveedor ya resolvieron `netlify.app` antes, lo tiene en **caché** (A14) y se ahorra la pregunta. Por eso la segunda visita es más rápida.
- **Netlify es una CDN** (Content Delivery Network): tu página está copiada en servidores en muchos países, y el DNS responde con el más cercano. Por eso carga rápido en México aunque el servidor original esté en Estados Unidos.
- **No hay "magia" ni "wifi mágico":** cada visita es una mini-transacción de datos. Tu página responde rápido porque es estática (C15) — archivos listos para entregar, sin cálculo en el servidor.

Entender este viaje te separa del 99% de la gente que "tiene página web": sabes qué estás pidiendo, a quién, y por qué a veces tarda y a veces es instantáneo.

### Analogía

El DNS es como la **recepcionista de un edificio de oficinas**: le dices "quiero hablar con Tortas El Güero" y ella sabe que está en la oficina 305 sin que tengas que memorizar la extensión. Y como ya conoce el edificio de visitas pasadas, la segunda vez que llegas te conecta al instante. La primera vez siempre tarda un poquito más.

### Cómo se ve en la práctica

```
Cuando tu amigo abre tu URL (vista de cámara lenta):

1. Escribe:  tu-sitio.netlify.app
2. Su compu pregunta al DNS:  "¿en qué IP vive ese nombre?"
3. El DNS responde:  "en 75.2.60.5, un servidor de Netlify
   cerca de ti"          ← caché local lo acelera
4. Su navegador pide:  GET /  → esa IP (petición HTTP)
5. El servidor envía:  index.html + estilos + imagen
6. Su navegador arma y pinta la página. Fin.
```

Todo eso pasa en menos de un segundo y sin que nadie lo vea. Pero ahora tú lo ves: cada clic es una cadena de decisiones bien hechas — y tu página está al final de la cadena porque tú la pusiste ahí.

### Díselo a la IA

> "Tengo una página en una URL de Netlify. Explícame el viaje completo desde que alguien escribe mi URL hasta que ve la página: DNS, IP, petición HTTP, respuesta del servidor y caché. Para cada paso, dame un símil cotidiano. Nivel principiante."

### Ejercicios

1. **[ordenar]** Qué pasa cuando alguien abre tu URL:
   - Desordenado: `el servidor responde con el HTML y sus archivos` · `la computadora pregunta al DNS dónde vive el nombre` · `el navegador pide la página a la IP` · `el DNS responde con la IP del servidor`
   - Respuesta: la computadora pregunta al DNS → el DNS responde con la IP → el navegador pide la página a la IP → el servidor responde con el HTML

2. **[relacionar]** Une el término con su papel en el viaje:
   - DNS ↔ Traduce el nombre a una dirección IP
   - IP ↔ La dirección exacta del servidor
   - Petición HTTP ↔ El "dame la página" del navegador
   - Caché ↔ Por qué la segunda visita es más rápida

3. **[opción múltiple]** ¿Qué es el DNS?
   - a) El archivo que guarda tu página
   - b) El sistema que traduce nombres (tu-sitio.netlify.app) a direcciones IP ✔
   - c) Un tipo de hosting de paga
   - d) El cable que conecta tu casa a internet

4. **[completar]** "El ____ responde con el HTML y sus archivos, y el ____ lo arma y lo pinta en pantalla."
   - Banco: `servidor` · `navegador` · `editor` · `servicio`
   - Respuesta: servidor / navegador

5. **[verdadero/falso]** "Cada visita a tu página repite desde cero toda la búsqueda del DNS, sin atajos."
   - Respuesta: FALSO — la caché guarda los pasos ya resueltos y hace las visitas siguientes mucho más rápidas.

---

## C18 — PRÁCTICA: página para un negocio I — escribir el brief

### Concepto

Vas a arrancar el proyecto que cierra el mes: la página de un negocio real o ficticio, construida dirigiendo a la IA y publicada en internet. En C19 la construyes, en C20 la publicas y la presumes. Hoy no se toca código: hoy se escribe el **brief**, y este documento es el que decide si C19 va a ser un placer o una pesadilla.

Un brief es el prompt hecho documento: todo lo que la IA necesita saber para construir tu página, escrito una vez y con orden. En C3 viste las 4 piezas del buen prompt y en C6 la anatomía del prompt de código — el brief es la versión formal y completa de ambas, pensada para un negocio. Cuando la IA "adivina", es porque el brief no existe.

Estructura del brief de una página de negocio:

1. **El negocio** — nombre, qué vende, para quién, qué lo distingue.
2. **Objetivo de la página** — qué debe lograr (¿que pidan por WhatsApp? ¿que llamen? ¿que visiten?).
3. **Contenido** — textos, productos o servicios con precio, fotos, horarios.
4. **Identidad** — colores, estilo, tono de los textos.
5. **Contacto** — WhatsApp, teléfono, dirección, redes.
6. **Restricciones y entrega** — sin frameworks, responsive, formato del archivo.

Hoy eliges un negocio (puede ser real: un negocio de la familia, del barrio; o ficticio: un negocio que inventas y donde tú pones las reglas) y lo entrevistas. Si es real, pregúntale al dueño; si es ficticio, pregúntate a ti. Diez preguntas bien hechas valen más que una tarde de "más o menos, hazlo bonito".

Al final de la práctica guardas el brief en tu carpeta del proyecto como `BRIEF.md` — al lado del `README.md` de C10. Ese archivo es tu arma para C19: se lo entregas a la IA y dejas de adivinar.

### Analogía

El brief es el **guion que el chef recibe antes de cocinar un platillo nuevo**: ingredientes, porciones, presentación, tiempo, para quién. Un restaurante que le dice al chef "hazme algo rico" come lo que salga. Tu página de negocio merece un platillo con guion — y el guion lo escribes tú hoy.

### Cómo se ve en la práctica

Tu plantilla para hoy (copiala, llénala, guárdala como `BRIEF.md`):

```
# Brief — Página web de Tortas El Güero

## 1. El negocio
- Nombre: Tortas El Güero
- Qué vende: tortas y tostadas hechas al momento
- Para quién: oficinistas y estudiantes del centro
- Diferencial: pan horneado en el local, sabor de barrio

## 2. Objetivo de la página
Que el cliente pida a domicilio por WhatsApp en vez de llamar.

## 3. Contenido
- Encabezado con nombre y slogan
- Descripción del negocio (2 líneas)
- 4 tortas con precio + 2 tostadas con precio
- Horario de atención
- Foto del local
- Botón de WhatsApp bien visible

## 4. Identidad
- Colores: amarillo (#f59e0b) y café oscuro (#1a0f0a)
- Estilo: familiar, de barrio, sin elegancia falsa
- Tono: como habla el dueño, en confianza

## 5. Contacto
- WhatsApp: 55-1234-5678 (wa.me/5512345678)
- Dirección: Av. del Sabor #12, Centro
- Redes: Instagram @tortaselguero (sin página aún)

## 6. Restricciones y entrega
- HTML/CSS vanilla, sin frameworks (lo viste en C6)
- Responsive, celular primero (C14)
- Un solo index.html con CSS adentro
- Lista para publicar en Netlify (C16)
```

Cada línea de ese documento es una instrucción que la IA va a obedecer en C19. Un brief bueno hace que C19 sea una conversación de dirección; un brief flojo hace que sea una sesión de adivinanzas.

### Díselo a la IA

> "Actúa como entrevistador de negocios. Hazme las 10 preguntas más importantes para escribir el brief de la página de mi negocio: [nombre + giro + 2 datos]. Quiero preguntas sobre qué vende, para quién, qué debe lograr la página, contenido, identidad y contacto. No escribas el brief todavía."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un brief?
   - a) Una contraseña para Netlify
   - b) El documento con todo lo que la IA necesita para construir tu página ✔
   - c) Un formato de imagen comprimida
   - d) El diseño visual final de la página

2. **[completar]** "El brief es el ____ hecho documento: negocio, objetivo, ____, identidad, contacto y entrega."
   - Banco: `prompt` · `contenido` · `código` · `diseño`
   - Respuesta: prompt / contenido

3. **[relacionar]** Une la sección del brief con lo que responde:
   - "El negocio" ↔ Qué vende y para quién
   - "Objetivo" ↔ Qué debe lograr la página
   - "Identidad" ↔ Colores, estilo y tono
   - "Restricciones" ↔ Sin frameworks, responsive, formato de entrega

4. **[verdadero/falso]** "En esta lección ya debes construir el código de la página del negocio; el brief se escribe al final."
   - Respuesta: FALSO — hoy solo se escribe el brief; la construcción dirigida con IA es la práctica C19.

5. **[qué hace]** Le pides a la IA "entrevístame para sacar los datos del brief, aún no escribas nada". ¿Qué logras?
   - a) Que la IA adivine tu negocio y escriba el brief por ti
   - b) Que las preguntas te saquen datos que no pensabas incluir ✔
   - c) Que la IA te cobre por la entrevista
   - d) Que la conversación se cierre de inmediato

---

## C19 — PRÁCTICA: página para un negocio II — dirigir la construcción

### Concepto

Tienes el brief (C18). Hoy lo conviertes en una página real, dirigiendo la construcción como un director de obra. La diferencia con C7: ahí la IA construyó de un jalón y tú revisaste al final; hoy construyes por **fases**, aprobando cada una antes de pasar a la siguiente.

Los pasos:

1. **Abre una conversación NUEVA** (C4) — el brief es tu resumen puente; no hace falta que la IA recuerde nada.
2. **Pega el brief completo** (`BRIEF.md`) y pide confirmación + un plan de fases.
3. **Construye por fases**: 1) estructura y textos, 2) estilos e identidad, 3) productos y precios, 4) botón de WhatsApp y contacto, 5) responsive.
4. **Aprueba y pega cada fase** (C9), probando en el navegador antes de pedir la siguiente.
5. **Si algo falla**, reporta con la fórmula de C12: qué esperabas, qué pasa, el código.

La regla de oro: **la IA propone, TÚ apruebas.** Cada fase es atómica (C13): si una sale mal, se corrige sin tirar las demás. El constructor con brief dirige por fases; el que tira todo de golpe pierde el control de lo que le entregan.

### Analogía

Es como el **dueño de la obra con el contratista**: no deja el plano un día y regresa en un mes a ver qué pasó. Camina la obra con él, fase por fase, revisando cada acabado antes de seguir con el siguiente cuarto. Tú pones el plano (el brief) y decides cuándo una fase está lista; la IA pone la mano de obra.

### Cómo se ve en la práctica

```
Tú (conversación nueva):
  Aquí está el brief de mi negocio:
  [pegas BRIEF.md completo]
  Antes de escribir código: ¿entendiste el proyecto?
  Explícamelo en 3 líneas y dime el orden de las fases
  en que lo construiremos. Trabajaremos una por una.

IA: Entiendo: landing page de Tortas El Güero, objetivo
    pedidos por WhatsApp, 6 productos con precio, horario,
    foto, colores amarillo/café, responsive. Fases:
    1) Estructura y textos  2) Estilos e identidad
    3) Productos y precios  4) WhatsApp y contacto
    5) Responsive y pulido.

Tú: Aprobado. Fase 1: estructura y textos. Dame solo eso.
IA: [código de la fase 1]
Tú: [pega, guarda, refresca] Quedó bien. Fase 2, por favor.
```

Mismo proyecto, mismo brief, pero ahora cada entrega es chiquita y tú la validas antes de seguir. Si la fase 3 sale mal, el desastre cabe en una fase — no en toda la página.

### Díselo a la IA

> "Te voy a dar el brief completo de un negocio. Antes de escribir código, confírmame que lo entendiste en 3 líneas y propón el orden de fases en que lo construiremos. Trabajaremos fase por fase: no me entregues todo de golpe."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la regla de oro de esta práctica?
   - a) La IA construye todo de un jalón y tú revisas al final
   - b) La IA propone y tú apruebas, fase por fase ✔
   - c) Tú escribes el código y la IA lo revisa
   - d) La IA decide el orden de todo sin preguntar

2. **[completar]** "Construyes por ____, aprobando cada una antes de pasar a la siguiente; así cada entrega es ____ y se corrige fácil."
   - Banco: `fases` · `atómica` · `final` · `secreta`
   - Respuesta: fases / atómica

3. **[verdadero/falso]** "Después de C18, no necesitas volver a pegar el brief: la IA se acuerda de todo."
   - Respuesta: FALSO — cada conversación nueva empieza de cero (C4); el brief es tu resumen puente y se pega completo.

4. **[ordenar]** La construcción dirigida de C19:
   - Desordenado: `aprobar la fase y pegar el código` · `pedir el plan de fases` · `pegar el brief en conversación nueva` · `pedir cada fase una por una`
   - Respuesta: pegar el brief → pedir el plan de fases → pedir cada fase una por una → aprobar la fase y pegar el código

5. **[qué hace]** Le dices a la IA "antes de escribir código, confírmame que entendiste el brief y propón el orden de fases". ¿Qué buscas?
   - a) Que la IA trabaje más lento
   - b) Detectar malentendidos ANTES de generar código y tener un plan aprobado por ti ✔
   - c) Que la IA adivine tu proyecto sin el brief
   - d) Que la IA no use restricciones

---

## C20 — PRÁCTICA: página para un negocio III — publicar y presumir

### Concepto

Tu página del negocio existe y está aprobada (C19). Hoy se va al mundo: **publicarla y presumirla**. Publicar es el paso que separa a los que "están aprendiendo" de los que "tienen negocio en línea". El ciclo completo que cierras hoy —brief (C18), construir (C19), publicar (C20)— es el mismo que usarás para el proyecto final del mes (C30) y para cada proyecto del programa.

Los pasos:

1. **Revisión pre-vuelo**: carpeta ordenada con `index.html` en la raíz (C10), responsive probado en el modo dispositivo (C14), y el dato que todos olvidan: **el número de WhatsApp real**. El botón con el número de ejemplo (`5512345678`) es el error más común en negocios recién publicados.
2. **Publica** con Netlify Drop (C16): arrastra la carpeta, recibe tu URL.
3. **Prueba en tu celular de verdad**: botón de WhatsApp, foto, horario, rapidez de carga.
4. **Audita contra el brief**: pide a la IA que compare lo publicado con `BRIEF.md` y te dé mejoras priorizadas para la versión 2.
5. **Presume**: mándala a la familia, a un dueño de negocio que conozcas, póntela en tus redes. La opinión de gente real es tu mejor herramienta de mejora.

Publicar no es el final: es el inicio del ciclo **mejora → opinión → mejora**. El letrero no se mejora escondido en el taller; se mejora viendo cómo lo recibe la calle.

### Analogía

Es como **colgar el letrero en la avenida**: no lo pones y te encierras. Te paras afuera a ver quién voltea, preguntas a los vecinos qué se entiende y qué no, y mañana ajustas. El local ya está abierto (C16/C20) — ahora viene la parte de escuchar.

### Cómo se ve en la práctica

```
1. Revisión pre-vuelo:
   ✔ Carpeta ordenada (index.html + foto en la raíz, C10)
   ✔ Responsive probado en 375px (C14)
   ✔ WhatsApp con el número REAL y mensaje predefinido
2. Publicar: app.netlify.com/drop → arrastrar la carpeta → URL.
3. Prueba en tu celular: botón, foto, horario, rapidez.
4. Audita: [pegas URL] "Compara con mi brief y dime las 3
   mejoras de mayor impacto para la versión 2."
5. Presume: manda la URL a quien quieras que opine.
```

De ahora en adelante, cualquier página que construyas termina en una URL. Ese es tu estándar de "terminado": no es terminar el archivo, es terminarlo **en línea**.

### Díselo a la IA

> "Esta es la URL de mi página de negocio ya publicada: [pegas URL]. Compárala contra mi brief [pegas BRIEF.md]: dime qué ya cumple, qué falta, y las 3 mejoras de mayor impacto para la versión 2. No cambies nada todavía."

### Ejercicios

1. **[ordenar]** El flujo completo del negocio (C18–C20):
   - Desordenado: `publicar en Netlify` · `construir con la IA por fases` · `presumir la URL y juntar opiniones` · `escribir el brief`
   - Respuesta: escribir el brief → construir por fases → publicar en Netlify → presumir la URL

2. **[opción múltiple]** ¿Cuál es el error más común que la gente no detecta antes de publicar?
   - a) Que la página cargue rápido
   - b) Que el botón de WhatsApp tenga el número de ejemplo en vez del real ✔
   - c) Que la página sea responsive
   - d) Que el título diga el nombre del negocio

3. **[completar]** "Publicar no es el final: es el inicio del ciclo ____ → ____ → mejora, y presumir es tu mejor loop de ____."
   - Banco: `mejora` · `opinión` · `feedback` · `error`
   - Respuesta: mejora / opinión / feedback

4. **[verdadero/falso]** "Presumir tu URL con amigos y conocidos es perder el tiempo porque ellos no saben de código."
   - Respuesta: FALSO — no pides crítica técnica; pides la reacción de usuarios reales, que es justo lo que tu brief necesita.

5. **[qué hace]** Pegas tu URL publicada + tu brief y pides "dime las 3 mejoras de mayor impacto". ¿Qué logras?
   - a) Que la IA borre la página
   - b) Una lista priorizada de mejoras para la versión 2, sin tocar la página en línea ✔
   - c) Que la IA publique otra página
   - d) Que la URL cambie sola

---

## C21 — El mapa de herramientas: Copilot, Cursor, Claude Code, v0, Bolt

### Concepto

Hasta hoy construiste con asistentes de chat (ChatGPT, Claude, Gemini). Pero el mundo de la IA para programar es más amplio. Esta lección es un **mapa**: no para que uses todo ya, sino para que sepas qué existe y dónde encaja cada pieza cuando la necesites.

- **Copilot** (de GitHub/Microsoft) — la IA más famosa para escribir código. Vive DENTRO del editor: mientras tecleas, te sugiere la siguiente línea. Es autocompletado de nivel profesional.
- **Cursor** — un editor de código (tipo VS Code) construido alrededor de la IA: chat integrado que lee y modifica todo tu proyecto, y autocompletado potente. Lo tocas en C24 con la versión que vives en VS Code.
- **Claude Code** — una IA que trabaja desde la terminal (Materia A): le das una misión y trabaja sola sobre tus archivos, los lee, los escribe, hasta ejecuta comandos.
- **v0** (de Vercel) — escribes una descripción y te genera interfaces de usuario (UI) listas. Mucho más visual que un chat normal.
- **Bolt** — escribes un prompt y te arma una app completa en el navegador, con estructura de archivos y vista previa al instante.

El mapa mental en 3 categorías:

1. **IA dentro del editor** (Copilot, Cursor) — te acompaña mientras trabajas en tus archivos. Es tu siguiente paso natural (C22–C24).
2. **IA que genera proyectos en el navegador** (v0, Bolt) — describes y te entrega un proyecto casi listo. Ideal para prototipos y diseño de interfaz.
3. **IA agente en la terminal** (Claude Code) — le das una misión y trabaja sobre tu proyecto real. Poderosa, pero exige saber qué está haciendo; la aprenderás a dirigir más adelante.

La regla que une todo: **todas son un LLM por dentro** (C1). Cambia el contexto que reciben —tus archivos, tu editor, tu terminal— y las herramientas conectadas. Tu habilidad de dirigir viaja intacta de una a otra.

### Analogía

Es la **cocina de un restaurante profesional**: el chat es el chef que te explica y te pasa recetas; Copilot/Cursor son el cuchillo y la plancha que tienes a la mano mientras trabajas; v0/Bolt son el horno que te entrega el platillo casi listo; Claude Code es el ayudante de cocina que trabaja con las manos donde le digas. Un buen restaurante no elige UNO — usa todos según el plato del día.

### Cómo se ve en la práctica

```
Situación                          Herramienta ideal
Quiero que me siga sugiriendo      Copilot / Cursor
mientras escribo en el editor      (IA dentro del editor)
Quiero un diseño visual desde      v0 / Bolt
una descripción                    (IA que genera en el navegador)
Quiero que algo trabaje sobre      Claude Code
mis archivos en la terminal        (IA agente)
Quiero una página de negocio       ChatGPT / Claude / Gemini
desde cero, paso a paso            (asistentes de chat — lo que
                                   ya sabes hacer)
```

En este mes seguirás con lo que ya sabes (el chat) y darás tu primer paso al editor con VS Code (C22–C24). Las demás herramientas se suman cuando resuelven un problema que TENGAS — no por moda.

### Díselo a la IA

> "Soy principiante y uso asistentes de chat para construir páginas web. Explícame la diferencia real entre Copilot, Cursor, Claude Code, v0 y Bolt. Para cada una: qué resuelve, en qué momento del trabajo se usa, y cuál recomiendas para alguien en mi nivel. No me vendas, explícame."

### Ejercicios

1. **[relacionar]** Une la herramienta con su categoría:
   - Copilot ↔ IA dentro del editor
   - Cursor ↔ IA dentro del editor
   - v0 ↔ IA que genera proyectos en el navegador
   - Claude Code ↔ IA agente que trabaja en la terminal

2. **[opción múltiple]** ¿Qué tienen en común todas estas herramientas por dentro?
   - a) Que usan la misma marca de computadora
   - b) Que son LLMs; cambia el contexto y las herramientas conectadas ✔
   - c) Que solo funcionan en VS Code
   - d) Que ninguna sirve para principiantes

3. **[completar]** "____ te sugiere la siguiente línea mientras escribes en el editor; ____ te arma una app completa desde un prompt en el navegador."
   - Banco: `Copilot` · `Bolt` · `Excel` · `Word`
   - Respuesta: Copilot / Bolt

4. **[verdadero/falso]** "Ya que publicaste tu página de negocio, no necesitas conocer las demás herramientas de IA."
   - Respuesta: FALSO — el mapa te deja saber qué existe y cuándo cada herramienta resuelve un problema; se suman por necesidad, no por moda.

5. **[qué hace]** Una amiga dice "le pedí una app a Bolt y me la armó completa en el navegador". ¿Qué categoría es?
   - a) IA dentro del editor
   - b) IA que genera proyectos en el navegador ✔
   - c) IA agente en la terminal
   - d) Un asistente de chat clásico

---

## C22 — ¿Qué es un editor de código? VS Code sin miedo

### Concepto

Un **editor de código** es el programa donde ESCRIBES y ORGANIZAS tu código — el "Word de los programadores". Hasta hoy pegabas código en `index.html` con el Bloc de notas y veías el resultado en el navegador. No los confundas: el navegador MUESTRA la página, el editor la ESCRIBE.

**VS Code** (Visual Studio Code, de Microsoft) es el editor más usado del mundo — y es gratis. ¿Por qué lo usa todo el mundo?

- **Colorea el código** (syntax highlighting): cada tipo de elemento con su color. Leer es mil veces más fácil que en el Bloc de notas.
- **Árbol de archivos**: ves tu carpeta completa a la izquierda, abres y creas archivos sin salirte.
- **Pestañas**: varios archivos abiertos a la vez.
- **Terminal integrada**: la terminal de la Materia A dentro del mismo programa.
- **Extensiones**: miles de plugins, incluida la IA (C24) y servidores locales (C23).
- **Avisos de errores** al escribir, y autocompletado básico.

La interfaz en 3 zonas — no necesitas más por ahora:

1. **Barra lateral (Explorer)** — el árbol de tus archivos.
2. **Área de edición** — el archivo abierto; aquí escribes.
3. **Barra inferior** — estado del editor y la terminal.

Dato que evita confusiones: VS Code NO ejecuta tu página por ti. Para verla sigues abriendo `index.html` en el navegador, o usas una extensión que te sirve la página sola (Live Server — mañana en C23). El editor escribe; el navegador muestra; el servidor entrega. Tres oficios distintos.

Nada de miedo: no tienes que memorizar nada. Si sabes abrir una carpeta y un archivo, ya sabes el 80% de VS Code. El miedo a una herramienta nueva se cura usándola, no leyendo sobre ella.

### Analogía

El navegador es la **vitrina** (lo que ve el cliente) y el editor es el **taller** (donde trabajas la madera). Hasta hoy trabajabas tu proyecto en la banqueta, con el Bloc de notas. VS Code es el taller con banco de trabajo, buenas luces y todas las herramientas ordenadas en la pared. Mismo oficio, mil veces más cómodo.

### Cómo se ve en la práctica

```
Al abrir tu proyecto en VS Code:

EXPLORER (izquierda)        AREA DE EDICIÓN (centro)
├── tortas-el-guero/        | 1  <!doctype html>
│   ├── index.html          | 2  <html>
│   ├── torta.jpg           | 3    <head>
│   └── BRIEF.md            | 4      <title>Tortas El Güero</title>
                            | 5    </head>
                            | 6    <body>
TERMINAL (abajo, Ctrl+Ñ)    | 7    ...
```

Todo el código en colores, el árbol con tu carpeta completa, y la terminal un Ctrl+Ñ de distancia. Mañana (C23) abres tu proyecto de verdad aquí; pasado mañana (C24) le metes la IA adentro.

### Díselo a la IA

> "Nunca he usado VS Code. Explícame en lenguaje simple: qué es, para qué sirve cada parte de la pantalla (Explorer, área de edición, terminal), y las 5 teclas o acciones que más usará un principiante. Nada de teoría — solo lo que me sirve hoy."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un editor de código?
   - a) El programa donde se muestra tu página al público
   - b) El programa donde escribes y organizas tu código ✔
   - c) Un servidor de internet
   - d) Una base de datos

2. **[relacionar]** Une la zona de VS Code con su función:
   - Explorer ↔ El árbol de archivos de tu proyecto
   - Área de edición ↔ Donde escribes el código del archivo abierto
   - Terminal ↔ La terminal integrada (Ctrl+Ñ)
   - Barra de estado ↔ Estado y mensajes del editor

3. **[completar]** "El editor ____ el código; el navegador lo ____."
   - Banco: `escribe` · `muestra` · `borra` · `vende`
   - Respuesta: escribe / muestra

4. **[verdadero/falso]** "VS Code ejecuta tu página por ti: al abrir tu proyecto, la página aparece en una ventana."
   - Respuesta: FALSO — VS Code escribe y organiza; para verla la abres en el navegador o usas una extensión de servidor local (C23).

5. **[qué hace]** El "syntax highlighting" (los colores del código) — ¿para qué sirve?
   - a) Para decorar tu pantalla
   - b) Para que leas el código más rápido al distinguir etiquetas, texto y palabras clave ✔
   - c) Para que el archivo pese más
   - d) Para que la página se vea de colores

---

## C23 — PRÁCTICA: abrir tu proyecto en VS Code

### Concepto

Hoy llevas tu proyecto al taller (C22). Abrir un proyecto en VS Code es el momento en que dejas de editar archivos sueltos y empiezas a trabajar con un **proyecto completo** — la forma en que se trabaja de aquí en adelante.

Los pasos:

1. **Si no lo tienes**: instala VS Code desde `code.visualstudio.com` (gratis, Windows/Mac/Linux).
2. **Abre tu carpeta**: `File → Open Folder` (o Ctrl+K Ctrl+O) → selecciona tu carpeta de proyecto, por ejemplo `tortas-el-guero`.
3. **Explora el árbol**: `index.html`, la foto, `BRIEF.md`. Doble clic en `index.html` para editarlo.
4. **Instala "Live Server"** (extensión de Ritwick Dey): sirve tu página en un servidor local y la **refresca sola cada vez que guardas**. Ya no das F5 a mano.
5. **Trabaja con la IA como siempre** (C9): pides el cambio en el chat, pegas, guardas con Ctrl+S — y el navegador se actualiza SOLO. Ese loop (editar → guardar → ver) es el flujo de trabajo profesional.

Qué NO debe pasar: que te asuste la cantidad de botones. Por ahora solo usas: Open Folder, el árbol, la pestaña del archivo, Ctrl+S y Go Live. El resto existe, pero no es tuyo todavía.

La dirección `http://localhost:5500` que verás es un **servidor local**: vive en tu propia computadora (lo estudias a fondo en la Materia A, A26). Tu página no está en internet — está en tu taller, solo para ti.

### Analogía

Es tu **primer día en el taller** (C22): desempacas tus materiales, los colocas en el banco de trabajo y prendes la maquinaria. Live Server es la iluminación automática: ya no prender y apagar la luz (F5) cada vez — el taller se ajusta solo mientras trabajas.

### Cómo se ve en la práctica

```
1. Abre VS Code.
2. File → Open Folder → elige tortas-el-guero → OK.
3. En el Explorer, doble clic en index.html. El código abre.
4. Extensiones (Ctrl+Shift+X) → busca "Live Server" →
   instala la de Ritwick Dey.
5. Abajo a la derecha: clic en "Go Live". Se abre el navegador
   con tu página en http://localhost:5500
6. Pide un cambio a la IA, pega, Ctrl+S → el navegador se
   actualiza SOLO. Sin F5.
```

Ese último paso es la joya: el chat + VS Code + Live Server juntos forman tu ciclo de iteración (C9/C13) sin que tengas que andar copiando y recargando a mano. Pide el cambio, la IA te da el código, lo pegas, y en menos de un segundo lo ves en pantalla.

### Díselo a la IA

> "Voy a abrir mi proyecto de página web en VS Code por primera vez. No tengo nada configurado. Dame los pasos exactos para: instalar VS Code (si me hace falta), abrir mi carpeta de proyecto, e instalar y usar la extensión Live Server. No asumas que sé nada de la interfaz."

### Ejercicios

1. **[ordenar]** Abrir tu proyecto y verlo con Live Server:
   - Desordenado: `instalar la extensión Live Server` · `abrir la carpeta con Open Folder` · `clic en Go Live` · `abrir index.html en el árbol`
   - Respuesta: abrir la carpeta con Open Folder → abrir index.html en el árbol → instalar Live Server → clic en Go Live

2. **[opción múltiple]** ¿Qué hace Live Server?
   - a) Publica tu página en internet para todo el mundo
   - b) Sirve tu página en un servidor local y la refresca sola al guardar ✔
   - c) Traduce tu código a otro idioma
   - d) Guarda copias de tu proyecto

3. **[completar]** "Con Live Server, guardas (____) y el navegador se ____ solo; ya no necesitas F5 a mano."
   - Banco: `Ctrl+S` · `actualiza` · `cierra` · `imprime`
   - Respuesta: Ctrl+S / actualiza

4. **[verdadero/falso]** "La dirección http://localhost:5500 significa que tu página ya está publicada en internet."
   - Respuesta: FALSO — localhost es un servidor local, solo en tu computadora; publicar es otro paso (C16/C20).

5. **[qué hace]** "File → Open Folder → [tu carpeta]" — ¿qué estás haciendo?
   - a) Subiendo tu página a Netlify
   - b) Abriendo todo tu proyecto como un solo espacio de trabajo en VS Code ✔
   - c) Creando una base de datos
   - d) Enviando tu código a la IA

---

## C24 — La IA dentro del editor: autocompletado y chat integrado

### Concepto

En C21 viste el mapa; hoy le metes IA a tu editor. Dos formas principales (el resto son variaciones de estas):

1. **Autocompletado** — mientras escribes, la IA te sugiere la siguiente línea o bloque completo en **gris** (ghost text). Aprietas **Tab** y se acepta. Es la forma más común de "IA que te escribe".
2. **Chat integrado** — un chat como el de ChatGPT, pero dentro del editor: le preguntas sobre el archivo abierto, le pides explicar código (C8) o que haga cambios directos en el archivo. Ve todo tu proyecto, no solo el archivo.

Tres usos que valen oro en tu nivel:

- **Explicar**: "¿qué hace esta función?" — sin salir del editor.
- **Editar dirigido**: "cambia el color del botón a verde y haz el título más grande" — la IA edita el archivo por ti.
- **Detectar errores**: "¿por qué no carga mi imagen?" con el archivo abierto — ve el `src` real y te dice el typo.

La regla que NO cambia: sigue siendo la de C8 — **no publicas ni aceptas lo que no entiendes**. El autocompletado te ofrece una línea; TÚ decides si entra. La IA es **copiloto, no autopiloto**: aceptar a ciegas te convierte en espectador; revisar lo que aceptas te convierte en constructor.

En VS Code, la vía oficial es la extensión **GitHub Copilot** (tiene plan gratis para estudiantes); cada editor de C21 trae la suya. No te cases con la marca (C2): lo importante es el hábito — escribir con la IA al lado y revisar con criterio.

### Analogía

Es tener un **copiloto en el carro**: sugiere la siguiente maniobra, te avisa de riesgos y contesta tus dudas sin que te estaciones. Pero el que conduce eres tú: el volante no se mueve solo, y si te dejas ir sin mirar, el carro termina donde el copiloto quiera. Dirigir es aceptar con criterio.

### Cómo se ve en la práctica

```
Tú escribes en index.html:
  <button class="btn-wa">Pídenos por WhatsApp</button>
            ↑ el copiloto sugiere en gris:
  <a href="https://wa.me/55..." ...>    ← Tab para aceptar

Y en el chat integrado:
Tú:  Explica el bloque de la sección de productos. ¿Por qué
     los precios se descuadran en celular?
IA:  Los precios están en <p> dentro de un flex sin
     justify-content: space-between; en pantallas chicas se
     enciman. Sugiero una media query (C14). ¿Aplico el
     cambio en el archivo?
Tú:  Sí, aplica.
```

Ahora el loop de siempre —pedir, pegar, refrescar— vive dentro del editor: la IA edita el archivo, tú revisas lo que cambió, guardas con Ctrl+S y Live Server (C23) actualiza. Menos copiar-pegar, más dirigir.

### Díselo a la IA

> "Estoy aprendiendo a usar la IA dentro del editor. Dame 5 situaciones reales donde me convenga el autocompletado y 5 donde me convenga el chat integrado, con un ejemplo de cada una. Y dime: ¿qué debo revisar siempre antes de aceptar una sugerencia de la IA en mi código?"

### Ejercicios

1. **[opción múltiple]** ¿Cuáles son las dos formas principales de IA dentro del editor?
   - a) Autocompletado y chat integrado ✔
   - b) Redes sociales y correo
   - c) Antivirus y firewall
   - d) Traductor y diccionario

2. **[completar]** "El autocompletado te sugiere la siguiente línea en ____ y la aceptas con ____; TÚ decides si entra."
   - Banco: `gris` · `Tab` · `rojo` · `Enter`
   - Respuesta: gris / Tab

3. **[verdadero/falso]** "Con la IA integrada en el editor, la regla de C8 (no publicar lo que no entiendes) ya no aplica."
   - Respuesta: FALSO — la IA es copiloto, no autopiloto; aceptar a ciegas te hace espectador, revisar te hace constructor.

4. **[relacionar]** Une el uso con la herramienta del editor:
   - "¿Qué hace esta función?" ↔ Chat integrado (explicar)
   - Que me siga escribiendo mientras tecleo ↔ Autocompletado
   - "Cambia el color del botón y haz el título más grande" ↔ Chat integrado (editar dirigido)
   - "¿Por qué no carga mi imagen?" con el archivo abierto ↔ Chat integrado (detectar errores)

5. **[qué hace]** Aprietas Tab cuando aparece texto en gris en tu editor. ¿Qué pasó?
   - a) Guardaste el archivo
   - b) Aceptaste la sugerencia de la IA que estaba en gris ✔
   - c) Publicaste la página
   - d) Abriste la terminal

---

## C25 — Versiones de tu trabajo: copias, respaldos y el problema que Git resolverá (Mes 2)

### Concepto

Desde C9 has iterado tu página decenas de veces. Cada iteración **sobreescribe** el archivo anterior: la versión de ayer desaparece, y si el cambio de hoy rompe todo, no hay forma de volver atrás. Ese es el **problema de las versiones** — el que nadie te cuenta hasta que pierdes un día de trabajo.

Tus defensas hasta hoy han sido manuales: copiar la carpeta con nombres tipo `mi-pagina-final-v2`, `v2-definitivo`, `v3-NO-borrar`. Ese sistema funciona… hasta que dejas de copiar, se mezclan las carpetas, o no recuerdas cuál era la buena. Los problemas del respaldo manual:

1. **Depende de tu memoria**: ¿copiaste antes de ese cambio?
2. **Nombres mentirosos**: "final" nunca es final.
3. **No se comparan**: ver qué cambió entre la v2 y la v3 es a ojo de buen cubero.
4. **Desordena y ocupa espacio**: quince carpetas clon en el escritorio.

La solución profesional se llama **Git** (y su compañero **GitHub**) y es la siguiente gran herramienta del programa — la aprendes a fondo en el Mes 2. Hoy solo necesitas entender QUÉ problema resuelve, para que cuando llegue el Mes 2 te caiga el veinte de volada:

- Git toma una **foto** (commit) de tu proyecto cuando tú digas: "así estaba ahorita".
- Puedes **volver** a cualquiera de esas fotos: deshacer un desastre en un comando.
- Cada foto lleva **fecha y mensaje**: sabes exactamente qué cambiaste y cuándo.
- Git **compara versiones**: te muestra línea por línea qué cambió.

Lo que SÍ empiezas hoy: el hábito de **respaldar antes de un cambio grande**. Copiar la carpeta con fecha (`tortas-el-guero-2026-08-16`) antes de una cirugía mayor es tu "punto de guardado" manual. Cuando Git llegue en el Mes 2, lo vas a adoptar en 10 minutos — porque ya sientes el dolor que cura.

### Analogía

Es como un **videojuego con checkpoints**: llevas horas construyendo un nivel, y si pierdes, ¿regresas al inicio del juego o al último checkpoint? El respaldo manual (copiar carpetas con nombres) es guardar la partida en papel; Git es la memoria del juego: automática, exacta, y capaz de cargar cualquier checkpoint. Hoy aprendes a guardar la partida; en el Mes 2, a que el juego la guarde por ti.

### Cómo se ve en la práctica

```
EL DESASTRE QUE GIT EVITARÁ (Mes 2):

HOY (sin Git):
 1. Pides a la IA "cambia todo el diseño del encabezado".
 2. Pegas, guardas… y el título desapareció o se rompió.
 3. No puedes volver atrás: la versión buena ya no existe
    (a menos que hayas copiado la carpeta antes).

TU HÁBITO NUEVO desde hoy:
 1. Antes de un cambio grande: copia la carpeta completa
    con fecha → tortas-el-guero-2026-08-16
 2. Haz el cambio. Si algo sale mal, vuelves a la copia.
 3. Si el cambio quedó bien, conserva la copia o bórrala:
    no estorba si está ordenada (C10).

CON GIT (Mes 2):
 1. Antes del cambio: git commit -m "antes del nuevo encabezado"
 2. Si sale mal: volver a la foto anterior (checkout)
 3. Ver qué cambió: comparación línea por línea (diff)
```

Hoy no instalas Git. Te llevas dos cosas: el hábito del respaldo con fecha antes de un cambio grande, y la certeza de que existe una herramienta que lo hace todo automático. Cuando el Mes 2 te enseñe `git commit`, ya sabrás por qué existe.

### Díselo a la IA

> "Voy a hacer un cambio grande en mi proyecto y todavía no uso Git. Dame un método simple de respaldo manual por carpetas con fecha, y explícame en 5 líneas qué problema va a resolver Git cuando lo aprenda en el Mes 2. Nada técnico todavía."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el problema de las versiones manuales?
   - a) Que ocupan poquito espacio
   - b) Que dependen de tu memoria y se desordenan (final_v2_final) ✔
   - c) Que son automáticas
   - d) Que no existen

2. **[completar]** "Git toma una ____ de tu proyecto cuando tú digas, y puedes ____ a cualquiera de ellas."
   - Banco: `foto` · `volver` · `caja` · `enviar`
   - Respuesta: foto / volver

3. **[verdadero/falso]** "Ya que aprendiste a iterar con la IA, no necesitas cuidar las versiones de tu trabajo."
   - Respuesta: FALSO — cada iteración sobreescribe la anterior; sin respaldo, un mal cambio no tiene vuelta atrás.

4. **[ordenar]** Tu hábito de respaldo desde hoy:
   - Desordenado: `hacer el cambio` · `copiar la carpeta con fecha` · `volver a la copia si algo salió mal` · `decidir si el cambio quedó bien`
   - Respuesta: copiar la carpeta con fecha → hacer el cambio → decidir si el cambio quedó bien → volver a la copia si algo salió mal

5. **[qué hace]** Tu compañero hace `git commit -m "antes del nuevo encabezado"`. ¿Qué está haciendo?
   - a) Guardando una foto marcada de su proyecto antes de un cambio ✔
   - b) Publicando su página en Netlify
   - c) Borrando su proyecto
   - d) Abriendo su proyecto en VS Code

---

## C26 — PRÁCTICA: rehacer tu página personal, versión mejorada

### Concepto

Cierre práctico del ciclo de construcción. En C7 hiciste tu primera página con IA; desde entonces aprendiste a iterar (C9), a leer (C8), a hacerla responsive (C14), a publicarla (C16), a escribir un brief (C18), a construir por fases (C19), a publicar un negocio (C20) y a trabajar en un editor con IA (C22–C24). Hoy juntas TODO: **rehaces tu página personal como versión mejorada**.

La meta no es "otra página" — es demostrarte el salto entre la C7 y la C26 usando el mismo proyecto base. El plan:

1. **Crea una carpeta nueva** `mi-pagina-v2` (y conserva la v1 intacta — el hábito de C25 en acción).
2. **Escribe un mini-brief** (C18) de tu página personal: quién eres, qué ofreces, contacto. No hace falta un `BRIEF.md` gigante — seis líneas claras bastan.
3. **Construye por fases** (C19) en VS Code con la IA del chat: estructura, estilos, secciones (presentación, lo que sabes hacer, contacto), responsive (C14).
4. **Revisa lo que entiendes** (C8): pide a la IA que te explique cada sección antes de aceptarla.
5. **Publica** (C16/C20) y **compara**: abre lado a lado la URL de la v1 (guárdala de C16) y la de la v2.

El momento de la verdad es el paso 5: ver la v1 y la v2 juntas es ver tu progreso en un mes. Eso no te lo da nadie — lo construiste tú.

### Analogía

Es el **antes y después de una remodelación**: no miras las fotos del proceso, pones la foto del día 1 junto a la del día 30. El edificio era el mismo; la diferencia es todo lo que aprendiste a dirigir entre esas dos fechas. Guarda ambas versiones — en el Mes 6 la v2 te va a parecer tan básica como hoy te parece la v1.

### Cómo se ve en la práctica

```
1. Carpeta nueva: mi-pagina-v2   (la v1 queda intacta)
2. Mini-brief (pégaselo a la IA):
   # Mi página personal v2
   - Yo: [tu nombre], estudiante de DEV SYSTEM ACADEMY
   - Qué ofrezco: [lo que haces o quieres ofrecer]
   - Secciones: presentación, lo que sé hacer, contacto
   - Estilo: [2-3 adjetivos: limpio, moderno, serio]
   - Contacto: [tu WhatsApp / correo / redes]
   - Restricciones: HTML/CSS vanilla, responsive, sin librerías
3. En VS Code: File → Open Folder → mi-pagina-v2
4. Construye por fases con la IA, probando con Live Server (C23)
5. Pide explicación de cada sección antes de seguir (C8)
6. Publica en Netlify (C16) y abre v1 vs v2 lado a lado.
```

Si el cierre del mes (C30) te pide tu proyecto final, esta v2 ya es un sólido candidato — o el molde para el negocio que elijas. Deja la carpeta ordenada (C10) con su README: es tu carta de presentación como constructor.

### Díselo a la IA

> "Voy a rehacer mi página personal como versión mejorada. Aquí está mi mini-brief: [pégalo]. Construiremos por fases en VS Code. Antes de cada fase, confírmame qué entendiste y dame solo lo de esa fase; al terminar, explícame cada sección en una línea para revisarla antes de publicar."

### Ejercicios

1. **[ordenar]** El flujo de esta práctica:
   - Desordenado: `construir por fases en VS Code` · `publicar en Netlify` · `crear la carpeta mi-pagina-v2` · `comparar v1 vs v2`
   - Respuesta: crear la carpeta mi-pagina-v2 → construir por fases en VS Code → publicar en Netlify → comparar v1 vs v2

2. **[opción múltiple]** ¿Por qué conservas la v1 intacta al hacer la v2?
   - a) Para ocupar espacio en el disco
   - b) Porque es tu punto de respaldo y tu evidencia de progreso al comparar ✔
   - c) Porque no puedes borrar archivos
   - d) Porque la v2 sale de copiar la v1

3. **[completar]** "El momento de la verdad es abrir ____ y ____ lado a lado: es tu progreso en un mes hecho ____."
   - Banco: `v1` · `v2` · `página` · `imagen`
   - Respuesta: v1 / v2 / página

4. **[verdadero/falso]** "La v2 tiene que ser una página de negocio completamente distinta para contar como mejorada."
   - Respuesta: FALSO — es tu página personal reescrita con todo lo aprendido; el valor está en compararla con la v1, no en cambiar de tema.

5. **[qué hace]** Le pides a la IA "antes de cada fase, confírmame qué entendiste y dame solo lo de esa fase". ¿Qué estás haciendo?
   - a) Trabajando por fases atómicas con revisión, como en C19 ✔
   - b) Retrasando tu trabajo a propósito
   - c) Haciendo que la IA no use tu brief
   - d) Publicando sin revisar

---

## C27 — Pedirle a la IA que explique código ajeno (tu superpoder de lectura)

### Concepto

Todo lo que has leído hasta hoy fue código que la IA te escribió (C8, C19, C26). Hoy subes de nivel: vas a leer **código que otra persona escribió** — un script que encontraste en internet, la página de un negocio que admiras, un archivo que te mandó un amigo o una plantilla que descargaste. Este es el escenario real del mundo profesional: casi todo el código que se mantiene en un trabajo es "ajeno" — de un colega, de una versión anterior o de un proyecto open source.

Tu superpoder no es haber memorizado la sintaxis: es poder **pedirle a la IA que te traduzca cualquier código al español simple**. Esa habilidad vale más que la memoria, porque el código del mundo es infinito y tu tiempo no.

La escalera de comprensión tiene 4 peldaños, y la diferencia entre principiantes y profesionales está en pedir siempre el primero:

1. **El panorama** — "¿qué hace este archivo completo, en 3 líneas?"
2. **Por secciones** — "¿qué hace cada bloque?"
3. **Línea por línea** — "explícame estas 10 líneas"
4. **El porqué** — "¿qué problema resuelve esto y por qué esta solución y no otra?"

Casi nadie salta directo al peldaño 4, pero es el que te convierte en constructor: entender **por qué** existe cada pieza te dice cuál puedes tocar sin romper nada. Y la regla de C8 sigue viva: antes de aceptar o modificar un código ajeno, entiéndelo. Ahora tienes la llave para entender cualquier cosa.

### Analogía

Llegas a dirigir un restaurante que ya funciona y te encuentras las recetas manuscritas del chef anterior: renglones borrosos, medidas raras, caligrafía que solo él entendía. No reinventas el menú desde cero: consigues que alguien te las traduzca, te explique para qué sirve cada platillo y cuál ingrediente no se puede cambiar. Ese alguien es la IA, y tú eres el nuevo chef que decide qué mantener y qué mejorar.

### Cómo se ve en la práctica

Encuentras un script de JavaScript en internet y le pides la escalera completa:

```
Tú:  Este es un código que encontré en internet. No lo escribí.
     Primero: ¿qué hace este archivo completo en 3 líneas?

IA:  Crea un contador de visitas que suma 1 cada vez que alguien
     abre la página, lo guarda en el almacenamiento del navegador,
     y lo muestra en un elemento con id="contador".

Tú:  Ahora, ¿qué bloque no puedo tocar sin riesgo y cuál puedo
     modificar para cambiar el número inicial? Explícame el porqué.

IA:  No toques localStorage.setItem (guarda el dato) ni el bloque
     que lo lee al inicio. El número inicial lo cambias donde dice
     let contador = 0. Toca el resto y el contador deja de guardar.
```

Dos mensajes y ya sabes qué puedes modificar sin romper nada. Eso es la lectura profesional de código: no saberlo todo, saber preguntar bien.

### Díselo a la IA

> "Aquí tienes un código que no escribí: [pega el archivo]. Explícamelo en 4 niveles: 1) qué hace completo en 3 líneas, 2) qué hace cada sección, 3) las líneas que un principiante no entendería, y 4) qué partes puedo modificar sin riesgo y cuáles no, con el porqué. Nivel principiante, en español claro."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el peldaño más alto de la escalera de comprensión y el que más te convierte en constructor?
   - a) El panorama ("qué hace el archivo")
   - b) Por secciones ("qué hace cada bloque")
   - c) El porqué ("qué problema resuelve y por qué así") ✔
   - d) Copiar y pegar el código

2. **[completar]** "Casi todo el código que se mantiene en un trabajo es ____: de un colega, de una versión anterior o de un proyecto ____."
   - Banco: `ajeno` · `open source` · `secreto` · `borrado`
   - Respuesta: ajeno / open source

3. **[relacionar]** Une la pregunta con el peldaño de comprensión:
   - "¿Qué hace este archivo en 3 líneas?" ↔ El panorama
   - "¿Qué hace cada bloque?" ↔ Por secciones
   - "Explícame estas 10 líneas" ↔ Línea por línea
   - "¿Por qué esta solución y no otra?" ↔ El porqué

4. **[verdadero/falso]** "Si el código que encontré en internet funciona, no necesito entenderlo para usarlo en mi página."
   - Respuesta: FALSO — la regla de C8 no cambia: no publicas ni aceptas código que no entiendes; ahora la IA te da la llave para entenderlo.

5. **[qué hace]** Preguntas "¿qué partes puedo modificar sin riesgo y cuáles no, con el porqué?"
   - a) Identificas qué piezas tocar sin romper el código ✔
   - b) Haces que la IA reescriba todo
   - c) Guardas tu versión en Git
   - d) Publicas el archivo directo

---

## C28 — Los límites: qué NO puede hacer la IA (todavía) y dónde entras tú

### Concepto

Este mes viste el poder de la IA. Hoy ves sus límites — porque el profesional conoce la herramienta completa, no solo sus virtudes. La IA es extraordinaria generando, explicando y estructurando. Pero hay cosas que no puede garantizar, y ahí entras tú.

Lo que la IA NO puede hacer (todavía):

- **Garantizar que algo es correcto.** Un código puede parecer perfecto y fallar al correr; un dato puede sonar seguro y ser inventado (C5). La verificación siempre es tuya.
- **Conocer la realidad de tu negocio.** No sabe tu número de WhatsApp real, tus precios, tus horarios ni las reglas de tu local. Tú eres la única fuente de verdad — por eso existe el brief (C18).
- **Cuidar tus secretos por ti.** Lo que pegas en un chat puede ser leído por la empresa que opera el modelo o usarse para entrenamiento. **Nunca pegues contraseñas, tokens, llaves de API ni datos personales de clientes.** Eso es darle la llave de tu casa al vecino para que la guarde.
- **Ejecutar tu código por ti.** Puede simular o predecir, pero no correr tu página en tu computadora ni en tu servidor — y no puede arreglar lo que pasa en el navegador sin tu reporte (C12).
- **Tener juicio humano.** No conoce a tus clientes, tu barrio ni tu contexto. Decidir si un texto "se siente como tú" es gusto, y el gusto es tuyo.

Dónde entras tú (tu rol irremplazable): **verificar** los datos críticos, **decidir** qué se publica, **guardar** los secretos, **probar** lo que funciona de verdad y **firmar** lo que sale a la luz. La regla de C5 se vuelve ley aquí: dato crítico se verifica; secreto no se comparte.

### Analogía

La IA es el **genio de la casa**: increíble cocinando, redactando y resolviendo acertijos a toda velocidad. Pero es el genio de la casa, no el dueño: no sabe la combinación de la caja fuerte, no conoce a tus invitados, y jamás le das la llave del jardín "para que la guarde". Tú le pides, él sirve, y TÚ decides qué se sirve, a quién y qué permanece bajo llave.

### Cómo se ve en la práctica

El mal día de un principiante vs. el día del profesional:

```
MAL (no hagas esto):
Tú:  Aquí está mi password y la API key de mi bot:
     pass: "tortas123", key: sk-abc123...
     Úsalos para conectarme todo. También: ¿el precio de
     Netlify es $0 o $50? Resuélvelo tú.

BIEN (así se dirige):
Tú:  No te voy a pegar credenciales. En mi código hay un lugar
     con el texto "TU_API_KEY": dime cómo reemplazarlo yo mismo
     cuando lo vaya a subir. Para el precio de Netlify, no me
     des un número como hecho: dime dónde lo verifico en su
     página oficial.
```

Un solo mensaje marca la diferencia: en el primero regalas secretos y crees datos; en el segundo proteges lo tuyo y verificas lo crítico. De aquí en adelante se trabaja así — con la IA como colaborador y no como caja fuerte.

### Díselo a la IA

> "Este es mi proyecto de página web: [pega o describe]. Antes de que sigas, dime: 1) qué datos de mi respuesta NO puedes garantizar y debo verificar por mi cuenta, 2) dónde podría estar cometiendo un riesgo de seguridad, por ejemplo credenciales o datos pegados en el chat, y 3) qué pasos del flujo requieren sí o sí de un humano. Sé directo, no me adules."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estas cosas debes hacer SIEMPRE?
   - a) Pegar tu contraseña para que la IA la recuerde
   - b) Verificar los datos críticos en la fuente oficial y no compartir secretos en el chat ✔
   - c) Confiar en que la IA ya revisó tu código por ti
   - d) Publicar la página sin probarla en tu celular

2. **[completar]** "La IA puede ____ el resultado, pero no ____ tu código por ti; la prueba real siempre es tuya."
   - Banco: `simular` · `ejecutar` · `vender` · `borrar`
   - Respuesta: simular / ejecutar

3. **[relacionar]** Une la tarea con quién la hace:
   - Verificar el precio de Netlify en la fuente oficial ↔ Tú (humano)
   - Conocer el WhatsApp real del negocio ↔ Tú (el brief, C18)
   - Generar el HTML de una sección nueva ↔ La IA
   - Decidir si el texto "se siente como tú" ↔ Tú (gusto y juicio)

4. **[verdadero/falso]** "Los datos personales de tus clientes y tus contraseñas son seguros si se los pegas a la IA 'solo por esta vez'."
   - Respuesta: FALSO — nunca se comparten secretos en el chat; es un riesgo real, no una precaución exagerada.

5. **[qué hace]** Le pides a la IA "no me des el número como hecho: dime dónde lo verifico en la página oficial". ¿Qué estás aplicando?
   - a) El protocolo anti-alucinación de C5 en un dato crítico ✔
   - b) Una orden para que la IA no responda
   - c) Una forma de que la IA adivine mejor
   - d) Un truco para ahorrar tokens

---

## C29 — Tu flujo personal de trabajo con IA para todo el programa

### Concepto

En 28 lecciones aprendiste técnicas sueltas: el prompt completo (C3), el resumen puente (C4), la verificación (C5), el brief (C18), las fases (C19), el reporte de errores (C12), el respaldo (C25). Hoy las juntas en **tu flujo personal**: el orden exacto en que vas a trabajar de aquí en adelante, para cualquier proyecto del programa. Ya no piensas "¿cómo le pido esto a la IA?" — sigues tu flujo y la IA se acomoda a él.

Tu flujo, en 7 pasos:

1. **Brief** — escribe o refresca el documento de intención (C18). Es tu memoria externa y tu criterio para saber cuándo terminar.
2. **Conversación nueva por misión** — una misión, un chat (C4). Abre con el brief pegado o el resumen puente.
3. **Construye por fases** — una fase a la vez, aprobando cada una (C19).
4. **Entiende antes de aceptar** — pide explicación de lo nuevo (C8, C27). No publicas lo que no entiendes.
5. **Respalda antes de cambios grandes** — copia con fecha (C25); cuando llegue el Mes 2, Git.
6. **Prueba y verifica** — responsive (C14), botones reales, datos críticos (C5, C28).
7. **Publica e itera** — publica temprano (C16), junta opiniones y mejora (C20).

El paso que la mayoría salta es el 1: sin brief, los demás pasos adivinan. Y el detalle que lo une todo: cada paso tiene su "Díselo a la IA" — el flujo no es teoría, es una lista de prompts. Tu trabajo como director no es ejecutar el código: es no saltarte ningún paso del flujo.

### Analogía

Es la **checklist del piloto**: antes de despegar no improvisas — sigues la lista, en orden, sin saltar ninguna casilla. Parece aburrida e "innecesaria" hasta el día en que una casilla te salva. Tu flujo con IA es esa checklist: cada proyecto nuevo despega con los mismos 7 pasos, y el vuelo no depende de tu genio, sino de tu constancia.

### Cómo se ve en la práctica

Tu flujo en un vistazo (guárdalo en tu carpeta como `MI-FLUJO.md`):

```
1. BRIEF           → ¿qué construyo y para quién? (C18)
2. CHAT NUEVO      → pega el brief; una misión, una conversación (C4)
3. FASES           → una fase a la vez, tú apruebas (C19)
4. ENTIENDE        → "explícame esta parte antes de aceptar" (C8/C27)
5. RESPALDA        → copia con fecha antes de un cambio grande (C25)
6. PRUEBA/VERIFICA → celular, botones reales, datos críticos (C14/C28)
7. PUBLICA/ITERA   → en línea y a mejorar (C16/C20)
```

Cada casilla es un reflejo. Cuando el Mes 2 te enseñe Git y el Mes 3 te enseñe bases de datos, el flujo no cambia: solo cambian las herramientas dentro de las casillas. El director eres tú; el flujo es tu método.

### Díselo a la IA

> "Voy a crear mi flujo personal de trabajo con IA. Estos son los 7 pasos que aprendí: [pégalos]. Actúa como mi coach: revísalos y dime 1) cuál paso crees que la gente salta y por qué, 2) un consejo concreto para que no lo salte yo, y 3) un formato corto de MI-FLUJO.md que pueda pegar en mi carpeta. No cambies el método, solo afínalo."

### Ejercicios

1. **[ordenar]** El flujo personal de 7 pasos:
   - Desordenado: `publica e itera` · `construye por fases` · `escribe el brief` · `prueba y verifica` · `abre conversación nueva con el brief` · `entiende antes de aceptar` · `respaldas antes de cambios grandes`
   - Respuesta: brief → conversación nueva → construir por fases → entender antes de aceptar → respaldo → prueba y verifica → publica e itera

2. **[opción múltiple]** ¿Cuál es el paso que la mayoría salta y el que hace que los demás adivinen?
   - a) El respaldo con fecha
   - b) El brief (paso 1) ✔
   - c) Publicar
   - d) Probar en el modo dispositivo

3. **[completar]** "Cada paso del flujo tiene su ____; el flujo no es teoría, es una lista de ____."
   - Banco: `prompt` · `prompts` · `errores` · `fotos`
   - Respuesta: prompt / prompts

4. **[verdadero/falso]** "Tu flujo personal sirve solo para páginas web de negocios; para otro tipo de proyecto hay que inventar otro."
   - Respuesta: FALSO — el flujo te acompaña todo el programa; cambian las herramientas dentro de las casillas, no el método.

5. **[qué hace]** Guardas tu flujo como `MI-FLUJO.md` en la carpeta del proyecto. ¿Qué ganas?
   - a) Un archivo que la IA debe seguir por ti
   - b) Tu método documentado para no saltarte pasos en ningún proyecto ✔
   - c) Un requisito de Netlify para publicar
   - d) Nada, es solo decoración

---

## C30 — Repaso + arranque del proyecto final del mes

### Concepto

Llegaste al final del mes. Hoy repasas y arrancas el proyecto que cierra todo: **la página de un negocio publicada en internet**, construida por ti dirigiendo a la IA. El examen final del mes evalúa lo que sabes; este proyecto demuestra lo que sabes *hacer* — y hacer vale más.

Qué se entrega (léelo bien, es tu criterio de éxito):

1. **Una URL en vivo** (Netlify, C16) de una página de negocio real o ficticio.
2. **Una explicación escrita de qué hace cada archivo** de tu proyecto — la regla de C8 llevada a tu entrega final.
3. **Los requisitos de un negocio de verdad**: contacto real (nada de `5512345678` de ejemplo, C20), responsive (C14), y solo código que entiendes.

El repaso de hoy no es releer las lecciones: es demostrar que el mes entero cabe en un flujo (C29). Pídele a la IA la autoevaluación del final de esta lección, revisa tus respuestas contra lo aprendido, y que el resultado decida qué lección repasas antes de arrancar.

Hoy no se entrega todavía: hoy se **arranca**. Puedes usar el negocio de C18–C20 mejorado, o elegir uno nuevo — lo importante es que este proyecto demuestre los 7 pasos de tu flujo. El plan de hoy:

1. Elige o confirma tu negocio (real o ficticio).
2. Escribe (o afina) el `BRIEF.md` completo (C18).
3. Crea la carpeta del proyecto, ordenada (C10).
4. Abre la conversación nueva con tu brief y construye la fase 1 (C19).

No necesitas más para hoy. Los próximos días cierras fases, publicas y preparas tu explicación. Este mes te dio todas las herramientas; tu trabajo ahora es usarlas en orden, sin saltarte casillas.

### Analogía

Es el **examen de conducción al final de la escuela**: no te examinan de la teoría en un salón — te sientan en el coche y te dicen "maneja". Tu página publicada es ese manejo: demuestra la teoría completa hecha ruta. Y como todo buen examen, se aprueba no con genialidad, sino con el procedimiento: brief, fases, prueba, publicación.

### Cómo se ve en la práctica

Tu checklist de hoy (y de entrega):

```
HOY (arranque):
 [ ] Negocio elegido (real o ficticio)
 [ ] BRIEF.md completo (C18): negocio, objetivo, contenido,
     identidad, contacto REAL, restricciones
 [ ] Carpeta del proyecto ordenada (C10) con README.md
 [ ] Conversación nueva con el brief pegado (C29)
 [ ] Fase 1 construida y aprobada (C19)

AL ENTREGAR:
 [ ] URL en vivo en Netlify (C16)
 [ ] Prueba en celular de verdad: botón, imagen, horario (C14/C20)
 [ ] Nada de datos de ejemplo: WhatsApp, precios y horarios reales (C28)
 [ ] Explicación escrita de cada archivo (C8/C27)
 [ ] Proyecto respaldado (C25) y README actualizado (C10)
```

Esa checklist es tu mapa de los próximos días. No la pierdas — va en tu carpeta.

### Díselo a la IA (autoevaluación)

> "Actúa como mi examinador final. Hazme una autoevaluación de cierre del mes: hazme 10 preguntas cortas sobre el flujo completo de construir y publicar una página con IA — brief, contexto, fases, verificación de datos, seguridad (no compartir secretos) y publicación. Después de que responda, dime con honestidad en qué tema estoy más flojo y qué lección debo repasar antes de entregar mi proyecto final. No me califiques bonito, dime la verdad."

### Ejercicios

1. **[opción múltiple]** ¿Qué se entrega en el proyecto final del mes?
   - a) Solo el código en un archivo .zip
   - b) Una URL en vivo + una explicación escrita de qué hace cada archivo ✔
   - c) Un examen oral ante un jurado
   - d) Un certificado firmado por la IA

2. **[completar]** "Tu página final debe tener contacto ____ (nada de números de ejemplo) y debe ser ____ para verse bien en celular."
   - Banco: `real` · `responsive` · `secreto` · `gratis`
   - Respuesta: real / responsive

3. **[verdadero/falso]** "Para el proyecto final tienes que elegir un negocio completamente nuevo; la página que construiste en C18–C20 ya no cuenta."
   - Respuesta: FALSO — el proyecto demuestra tu flujo; puedes usar el negocio de C18–C20 y mejorarlo, siempre que la entrega (URL + explicación) esté completa.

4. **[relacionar]** Une la lección con lo que aporta al proyecto final:
   - C18 ↔ Escribir el BRIEF.md del negocio
   - C19 ↔ Construir por fases con tu aprobación
   - C20 ↔ Revisar el WhatsApp real antes de publicar
   - C29 ↔ No saltarte ningún paso del flujo

5. **[ordenar]** El flujo completo del proyecto final:
   - Desordenado: `publicar en Netlify y probar en celular` · `construir por fases en una conversación nueva` · `elegir el negocio y escribir el brief` · `preparar la explicación de cada archivo`
   - Respuesta: elegir el negocio y escribir el brief → construir por fases → publicar en Netlify y probar → preparar la explicación

6. **[qué hace]** Antes de publicar revisas esta línea de tu index.html:
   `<a href="https://wa.me/5512345678" class="btn">Pídenos por WhatsApp</a>`
   ¿Qué significa que necesites cambiarla?
   - a) El enlace usa el número de ejemplo y debes poner el real ✔
   - b) El botón no abre nada en ningún celular
   - c) La página no se va a publicar en Netlify
   - d) El enlace ya está perfecto, no se toca

7. **[opción múltiple]** Terminaste de construir y antes de publicar te das cuenta de que el botón usa el número de ejemplo. ¿Qué haces?
   - a) Publicas igual, nadie lo nota
   - b) Le pides a la IA cambiar el número al real y verificas que el enlace abra tu WhatsApp ✔
   - c) Le pones otro número inventado
   - d) Borras el botón de WhatsApp

8. **[verdadero/falso]** "Para aprobar el proyecto final basta con que la página se vea bonita; la explicación escrita de cada archivo es opcional."
   - Respuesta: FALSO — la explicación escrita es parte de la entrega: demuestra la regla de C8 (no publicar lo que no entiendes) y que diriges, no que pegas código.

---
