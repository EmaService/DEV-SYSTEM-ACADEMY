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
