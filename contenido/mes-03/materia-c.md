# MES 3 · MATERIA C — Construye con IA III: interfaces reales

---

## C1 — El brief de interfaz: describir lo que todavía no existe

### Concepto

Para una página que ya existe, puedes señalar con el dedo lo que no te gusta. Para una que todavía no existe — la que vamos a construir este mes — no hay nada que señalar: tienes que describirla completa antes de que exista. Ese documento se llama **brief de interfaz**: la descripción escrita de una página que la IA va a materializar.

Un buen brief de interfaz responde cinco preguntas, y cada una evita que la IA adivine:

- **Propósito** — para qué existe la página. "Que la gente pida por WhatsApp" es un propósito. "Que se vea bonita" no.
- **Contenido** — qué bloques tiene: nombre, menú, horario, botón. Lo que no está en el brief no va a aparecer.
- **Estilo visual** — cómo se ve: colores, tipografía, sensación. Sin esto, la IA elige su "bonito" — y el suyo no es el tuyo.
- **Restricciones** — límites técnicos: una sola página, archivo único, que funcione en celular.
- **Éxito** — cómo sabrás que funcionó. Para una landing suele ser una acción concreta: "un clic por visita".

¿Te suena? Es la versión grande de las 4 piezas del prompt que viste en el Mes 1 (contexto, objetivo, restricciones, formato): el brief de interfaz es ese mismo músculo, aplicado a una página completa.

Esto te importa directamente: quien dirige IA no dibuja, pero el brief es su forma de dibujar con palabras. Cuanto mejor lo describas, menos adivina la máquina — y menos tendrás que corregir después.

### Analogía

Un brief de interfaz es como **encargar un mueble a un carpintero que nunca ha visto tu sala**. Si solo dices "quiero algo para las botellas", recibirás lo que sea. Si dices "un mueble de 1.20 m de ancho, para la pared libre junto a la puerta, madera clara, 3 niveles, que no pase del tope del marco", el carpintero — mismo taller, mismo precio — te entrega exactamente eso. La IA es el mejor carpintero del mundo, y es un carpintero ciego: tu brief es sus ojos.

### Cómo se ve en la práctica

Este es el brief real de la taquería que vamos a construir a lo largo del mes — **Tacos El Volcán**. Guárdalo en tus notas: es el mismo negocio en C2, C3, C4 y C5.

```
BRIEF DE INTERFAZ — Tacos El Volcán
1. Propósito: que la gente vea el menú y pida por WhatsApp.
2. Contenido: nombre, eslogan, menú con 6 tacos y precios,
   horario, dirección, botón de WhatsApp.
3. Estilo: rojo ladrillo y crema, tipografía gruesa estilo
   cantina, con buen espacio entre secciones.
4. Restricciones: una sola página, archivo HTML único con el
   CSS dentro, etiquetas semánticas, que se vea bien en celular.
5. Éxito: al menos un clic al botón de WhatsApp por visita.
```

Cada línea le dice a la IA algo que de otro modo tendría que inventar. El punto 2 ya define la estructura (la verás como header, main, section y footer en m3-a3); el 3 define los estilos; el 4 son las reglas técnicas; el 5 es tu criterio para revisar el resultado. Con esto en la mano, el prompt de la C2 se escribe solo.

### Díselo a la IA

> "Voy a crear la página de mi negocio: [describe tu negocio en dos líneas]. Antes de escribir una sola línea de código, actúa como director de arte y entrevístame para armar un brief de interfaz: pregúntame propósito, contenido, estilo visual, restricciones y cómo sabré si funcionó. Después de mis respuestas, entrégame el brief completo en una lista numerada."

Ese prompt convierte a la IA en entrevistadora: las preguntas que te haga son exactamente la información que necesita para no adivinar. Tú solo respondes y verificas el resultado.

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la función principal de un brief de interfaz?
   - a) Diseñar los colores de la página
   - b) Describir una página que todavía no existe para que la IA la materialice ✔
   - c) Servir como contrato con el cliente
   - d) Reemplazar el HTML de la página

2. **[completar]** "El brief de interfaz es la versión grande de las 4 ____ del prompt — contexto, objetivo, restricciones y ____ — aplicadas a una página completa."
   - Banco: `piezas` · `formato` · `secciones` · `diseños`
   - Respuesta: piezas / formato

3. **[relacionar]** Une cada parte del brief con lo que define:
   - Propósito ↔ Para qué existe la página
   - Contenido ↔ Qué bloques incluye: menú, horario, botón
   - Estilo visual ↔ Colores, tipografía y sensación
   - Restricciones ↔ Archivo único, que se vea bien en celular
   - Éxito ↔ Cómo sabrás que funcionó

4. **[verdadero/falso]** "Lo que no está escrito en el brief, la IA lo adivina con su propio criterio."
   - Respuesta: VERDADERO — por eso el brief debe ser completo: todo lo que no escribes, ella lo decide.

5. **[ordenar]** Ordena el proceso para arrancar una landing:
   - Desordenado: `La IA entrega el brief completo en lista` · `Describes tu negocio en dos líneas` · `Pasas el brief al prompt de maquetación de la C2` · `La IA te entrevista con las cinco preguntas del brief` · `Tú revisas que cada punto sea cierto`
   - Respuesta: Describes tu negocio → La IA te entrevista → La IA entrega el brief → Tú revisas → Pasas el brief al prompt de la C2

---

## C2 — PRÁCTICA: maquetar una landing completa con IA

### Concepto

"Maquetar" (del inglés *mock-up*: modelo o prototipo) es armar la estructura visual de una página: dónde va el nombre, dónde el menú, dónde el botón, y con qué estilos. No es programar la lógica — eso llega después con JavaScript (m3-b1 en adelante). Es darle forma y cara al proyecto.

Lo que vas a construir es una **landing** (página de aterrizaje): un sitio de una sola página pensado para una sola acción. En nuestro caso, que el visitante vea el menú y pida por WhatsApp. Toda landing seria se construye en el mismo orden: brief (C1) → estructura → estilos → responsive (C4) → detalles (C5). Hoy haces los primeros tres pasos en una sola sesión, porque la IA ejecuta la maquetación y tú diriges.

Tu papel en esta práctica NO es escribir HTML. Es: (1) dar el brief claro, (2) pedir el archivo con el formato correcto, (3) guardarlo donde corresponde y (4) revisar que cumplió lo pedido. El 80% del trabajo es definir y verificar; el tecleo lo hace la IA. Eso es dirigir, y es exactamente lo que harás en tu vida laboral real.

### Analogía

Maquetar una landing es como **montar la cocina de un taquero nuevo**: primero la parrilla, la mesa de trabajo y el mostrador donde el cliente va a pedir. Todavía no hay salsa en el fuego (los detalles finos) ni fachada pintada (el estilo de lujo), pero la disposición ya funciona: el cliente entra, ve el menú y pide. Así debe quedar tu landing al terminar esta práctica: estructura completa, con estilo, lista para afinar en C4 y C5.

### Cómo se ve en la práctica

Sigue estos pasos y termina con un archivo real en tu computadora:

1. Crea una carpeta llamada `tacos-el-volcan` en tu escritorio.
2. Dentro, crea un archivo vacío llamado `index.html` (en el Mes 2 viste por qué se llama así: es el nombre que los servidores usan como página principal).
3. Abre tu asistente de IA (ChatGPT, Claude o Gemini) y pega el prompt de la sección "Díselo a la IA".
4. Copia el bloque de código completo de la respuesta y pégalo en `index.html`. Guarda con Ctrl+S.
5. Da doble clic en `index.html`: se abre en el navegador. Revisa contra el brief de la C1:
   - ¿Aparece el nombre grande arriba?
   - ¿Se ven los 6 tacos con precio?
   - ¿Está el botón de WhatsApp?
   - ¿Los colores son rojo ladrillo y crema?

Si algo falta, NO lo corrijas a mano todavía: vuelve a pedirlo. C5 es exactamente para pedir ajustes sin romper nada. Tu trabajo en C2 es verificar que la estructura exista y se vea presentable.

### Díselo a la IA

> "Hazme la landing de una sola página para la taquería 'Tacos El Volcán'. Entrégame un archivo HTML único, con el CSS dentro de la etiqueta style (no archivos separados). Contenido: nombre grande arriba, eslogan 'El sabor que hace temblar', menú con 6 tacos y sus precios, horario de 11 am a 11 pm, dirección, y un botón verde de WhatsApp con el número 55-1234-5678 que abra wa.me/5215512345678. Estilo: rojo ladrillo y crema, tipografía gruesa estilo cantina, con buen espacio entre secciones. Usa etiquetas semánticas: header, nav, main, section y footer. Que se vea bien en celular y en computadora. Dame el archivo completo en un solo bloque de código, listo para guardar como index.html."

Ese prompt lleva las 4 piezas del Mes 1 (contexto, objetivo, restricciones, formato) a escala landing: la IA sabe para quién, qué construir, bajo qué reglas y cómo entregarlo. Si la respuesta trae archivos separados o faltan secciones, repite el pedido señalando qué falta.

### Ejercicios

1. **[qué hace]** ` <a href="https://wa.me/5215512345678">Pide por WhatsApp</a> ` — ¿Qué hace este enlace en la landing?
   - a) Abre una conversación de WhatsApp con ese número ✔
   - b) Envía un correo electrónico
   - c) Abre la ubicación en Google Maps
   - d) Descarga la página

2. **[opción múltiple]** ¿Qué significa "maquetar" una página?
   - a) Escribir toda la lógica de negocio
   - b) Armar la estructura visual: dónde va cada bloque y con qué estilos ✔
   - c) Publicar la página en internet
   - d) Conectar la página a una base de datos

3. **[completar]** "Una ____ es un sitio de una sola página pensado para una sola ____: en nuestro caso, pedir por WhatsApp."
   - Banco: `landing` · `acción` · `aplicación` · `carpeta`
   - Respuesta: landing / acción

4. **[relacionar]** Une cada etiqueta con su bloque en la landing:
   - header ↔ El nombre y el eslogan arriba
   - main ↔ El contenido principal de la página
   - section ↔ Cada bloque temático: menú, horario, contacto
   - footer ↔ Dirección, horario y pie de página
   - botón de WhatsApp ↔ La acción que queremos que el visitante haga

5. **[verdadero/falso]** "Si a tu landing le falta el botón de WhatsApp, lo correcto es editarla a mano para agregarlo de inmediato."
   - Respuesta: FALSO — tu trabajo en C2 es verificar y pedir; editar a mano no es dirigir, y C5 te enseña a pedir cambios sin romper nada.

---

## C3 — Leer el HTML que la IA generó, etiqueta por etiqueta

### Concepto

Ya tienes la landing de Tacos El Volcán funcionando. Ahora viene la habilidad que separa a un usuario de un director: **leer el HTML que otra entidad escribió**. No para reproducirlo de memoria (eso es trabajo de la máquina), sino para (1) saber qué hay ahí, (2) saber dónde tocar cuando pidas un cambio y (3) verificar que la IA cumplió tu brief.

Leer HTML es leer de arriba a abajo, por bloques. La regla de oro: **toda etiqueta que abre, cierra**. `<header>` se cierra con `</header>`, y lo que está en medio es el contenido de ese bloque. Así, un documento de 300 líneas se reduce a 6 o 7 bloques: head (lo que no se ve), header, nav, main (que a su vez contiene sections), footer.

Lo que NO necesitas hacer: entender cada propiedad CSS o cada atributo. Necesitas identificar para qué sirve cada bloque y dónde está lo que quieres cambiar. Recuerda el lema del programa: **reconocer, no memorizar**. Cuando le pidas a la IA que "el botón de WhatsApp se ve pequeño", le vas a poder decir "el que está en la sección de contacto" porque lo ubicas en el código.

Esto es la práctica del vocabulario que viste en m3-a2 y m3-a3: ahora lo lees en código real, no en un ejemplo de libro.

### Analogía

Leer el HTML que generó la IA es como **revisar los planos que el arquitecto dibujó por ti**. Tú no dibujaste, pero sabes leer un plano: ubicas dónde está la cocina, dónde el baño, si las medidas coinciden con lo que pediste. El albañil (la IA) va a hacer el trabajo; tú, antes, verificas que los cuartos estén donde los pediste. Leer un plano no te hace albañil: te hace un cliente que no se deja engañar.

### Cómo se ve en la práctica

Un pedazo del HTML que la IA te generó para el menú de Tacos El Volcán — esto es lo que debes ser capaz de leer:

```html
<main>
  <section class="menu">
    <h2>Nuestros tacos</h2>
    <ul>
      <li>Suadero — $25</li>
      <li>Pastor — $22</li>
      <li>Campechano — $28</li>
    </ul>
  </section>
  <section class="horario">
    <h2>Horario</h2>
    <p>Lunes a domingo, 11 am – 11 pm</p>
  </section>
</main>
```

Fíjate en el patrón: `<main>` abre el bloque principal y adentro viven dos `<section>` — la del menú (class="menu") y la del horario. Cada bloque abre con su etiqueta, tiene su contenido y cierra con la misma etiqueta con diagonal: `</section>`. Truco rápido: en tu archivo usa **Ctrl+F** y escribe "WhatsApp": verás exactamente dónde vive el botón. Hay además una forma de poner notas invisibles en el código (se llaman comentarios): pídele a la IA que te los ponga para aprender a ubicarte.

### Díselo a la IA

> "Aquí está el HTML completo de mi landing de Tacos El Volcán. Recórrelo bloque por bloque y: 1) dime si incluye todas las secciones del brief (nombre, menú, horario, dirección y botón de WhatsApp); 2) agrégame comentarios que marquen cada bloque —header, nav, main, section, footer— para que yo aprenda a ubicarme; 3) avísame si hay etiquetas mal cerradas o si usaste div donde debía ir una etiqueta semántica."

Este prompt te entrega un mapa anotado de tu propia página: después de esto vas a saber dónde vive cada cosa, y los pedidos de C5 los vas a poder apuntar con precisión.

### Ejercicios

1. **[qué hace]** ¿Qué contiene este bloque?
   ```
   <section>
     <h2>Nuestros tacos</h2>
     <ul>
       <li>Suadero — $25</li>
     </ul>
   </section>
   ```
   - a) Una sección con un título y una lista ✔
   - b) Una tabla de precios
   - c) Un formulario de contacto
   - d) Un enlace a otra página

2. **[relacionar]** Une cada etiqueta con lo que contiene:
   - `<header>` ↔ El nombre y el eslogan de la taquería
   - `<main>` ↔ El contenido principal de la página
   - `<section>` ↔ Un bloque temático como el menú
   - `<footer>` ↔ Dirección, horario y pie de página

3. **[opción múltiple]** ¿Cuál es el primer paso para leer un HTML que no escribiste tú?
   - a) Memorizar cada línea
   - b) Leerlo de arriba a abajo y agruparlo en bloques que abren y cierran ✔
   - c) Borrar los estilos para ver solo la estructura
   - d) Traducirlo a otro idioma

4. **[completar]** "La regla de oro: toda etiqueta que ____, ____. Lo que está en medio es el ____ del bloque."
   - Banco: `abre` · `cierra` · `contenido` · `clase`
   - Respuesta: abre / cierra / contenido

5. **[verdadero/falso]** "Los comentarios del código se ven como texto al final de la página."
   - Respuesta: FALSO — los comentarios son invisibles en pantalla: son notas para quien lee el código, no contenido de la página.

---

## C4 — PRÁCTICA: hacerla responsive de verdad

### Concepto

En el brief pediste "que se vea bien en celular". Esa frase, sola, es la más vaga del diseño web. **Responsive** (adaptable) es la técnica para que una página cambie su acomodo según el ancho de la pantalla: lo que en computadora son tres columnas, en celular es una; lo que arriba es un menú horizontal, en celular se apila.

¿Cómo lo logra una página? Con dos piezas. El **viewport** es una metaetiqueta que le dice al celular: "no me encoges como si fuera la versión de computadora, me ajustas a tu pantalla". Sin ella, el celular muestra tu página de escritorio diminuta y el usuario hace zoom como en 2010. Las **media queries** (a fondo en m3-a24 y m3-a25) son reglas de CSS con condición: "cuando la pantalla mida menos de 768 px, haz esto".

Por qué te importa como director: porque "hazlo responsive" es una orden floja. Decir "cuando el ancho sea menor a 768 px, el menú pasa a una columna y el botón ocupa el ancho completo" es una orden que la IA ejecuta sin adivinar. Tu criterio es saber qué debe pasar en cada tamaño y pedirlo con nombre.

### Analogía

Responsive es como **el puesto del taquero que se adapta a la plaza**. En la plaza grande (pantalla de computadora) pone mesas en filas de tres, el letrero enorme y los condimentos repartidos a los lados. En el callejón angosto (celular) el mismo puesto se reacomoda: todo en una columna, el letrero centrado y el contenedor de salsas a la mano. La mercancía es la misma — lo que cambia es el acomodo según el espacio. Tu página no debe "verse más chiquita": debe reacomodarse.

### Cómo se ve en la práctica

Vas a romper tu landing a propósito para descubrir sus debilidades, y después la arreglas. Paso a paso:

1. Abre tu `index.html` en el navegador y presiona **F12**. En la barra superior, activa el ícono de celular (device toolbar, Ctrl+Shift+M).
2. Prueba tres anchos: **360 px** (celular chico), **768 px** (tablet) y **1280 px** (computadora).
3. Anota lo que se rompe: lo típico es que el menú se salga del ancho, que el botón de WhatsApp quede diminuto o que los tacos se amontonen.
4. Verifica que en el `head` esté el viewport. Sin él, ningún arreglo funciona:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

5. Con tu lista de fallas a la mano, pega el prompt de "Díselo a la IA". Cuando responda, reemplaza el contenido de `index.html` y repite el paso 2.
6. Termina cuando los tres anchos se vean aceptables: nada se sale, todo se lee y el botón se puede tocar con el pulgar.

Un ejemplo de lo que la IA te va a escribir (lo verás a fondo en m3-a24):

```css
@media (max-width: 768px) {
  .menu {
    grid-template-columns: 1fr;   /* una columna en celular */
  }
  .btn-whatsapp {
    width: 100%;                  /* el botón ocupa todo el ancho */
  }
}
```

Fíjate en la estructura: `@media (condición) { reglas }` — adentro va lo que debe pasar cuando la condición se cumple.

### Díselo a la IA

> "Mi landing de Tacos El Volcán no es responsive de verdad. Probé en DevTools a 360 px y pasan estas cosas: [pega tu lista de fallas]. Corrige el CSS para que se vea bien en celular, tablet y computadora: agrega el viewport en el head si falta, y usa media queries en los breakpoints de 768 px y 1024 px. El menú debe pasar a una columna en celular, el botón de WhatsApp debe ocupar el ancho completo y ser fácil de tocar, y nada debe salirse de la pantalla. No cambies el contenido ni los textos. Dame el archivo completo actualizado."

Cada frase de este prompt le da a la IA un dato accionable: fallas concretas, breakpoints con nombre y reglas que aplicar. Cero adivinación.

### Ejercicios

1. **[completar]** "El ____ le dice al celular que ajuste la página a su pantalla; las ____ aplican estilos según el ancho."
   - Banco: `viewport` · `media queries` · `grid` · `favicon`
   - Respuesta: viewport / media queries

2. **[opción múltiple]** Sin la etiqueta viewport, un celular muestra tu página de escritorio…
   - a) Perfectamente ajustada a su pantalla
   - b) Diminuta, como si la vieras desde lejos, con zoom manual ✔
   - c) En modo oscuro automático
   - d) Sin estilos de ningún tipo

3. **[qué hace]** ¿Qué hace este bloque CSS?
   ```css
   @media (max-width: 768px) {
     .menu {
       grid-template-columns: 1fr;
     }
   }
   ```
   - a) Cuando la pantalla mide menos de 768 px, el menú pasa a una columna ✔
   - b) Cuando la pantalla mide más de 768 px, el menú pasa a una columna
   - c) Cambia el color de fondo del menú
   - d) Elimina el menú en pantallas pequeñas

4. **[relacionar]** Une cada ancho con su dispositivo típico:
   - 360 px ↔ Celular chico
   - 768 px ↔ Tablet o celular grande
   - 1024 px ↔ Laptop pequeña
   - 1280 px ↔ Computadora de escritorio

5. **[verdadero/falso]** "La metaetiqueta viewport se coloca dentro del body, junto al contenido visible."
   - Respuesta: FALSO — va en el head, junto a los metadatos (m3-a2): es configuración, no contenido visible.

---

## C5 — Pedir cambios visuales con precisión quirúrgica

### Concepto

Tu flujo del día a día no va a ser "pedir una página": va a ser **pedir 20 ajustes a una página que ya existe**. Y ahí está el truco del director: los cambios visuales se piden como se describen los síntomas a un doctor. La IA no ve tu pantalla: tienes que decirle qué se ve ahora, dónde, y qué quieres en su lugar.

Tres técnicas que vuelven quirúrgico un pedido:

- **Apunta al elemento por su nombre.** "El h1", "el botón de WhatsApp", "la sección del menú" — el vocabulario de m3-a3 y m3-a12 es tu puntero.
- **Describe el antes y el después.** "Se ve pegado a la izquierda" → "lo quiero centrado". "El espacio entre tarjetas es chico" → "dame un gap de 24 px".
- **Usa el vocabulario CSS.** padding (aire adentro), margin (aire afuera), gap (espacio entre), font-size, color, border-radius. No necesitas programar: necesitas saber nombrar lo que ves (m3-a14 te da el modelo de caja completo).

Una advertencia que te ahorra un día: si pides un cambio y "no pasó nada", casi siempre es la **cascada y la especificidad** (m3-a13): otra regla con más peso le está ganando. No se arregla repitiendo más fuerte. Se arregla preguntándole a la IA qué regla le gana a la tuya y cómo hacerla ganar.

### Analogía

Pedir un cambio visual es como **pedirle un corte a un barbero que no te está viendo**. Si dices "córtame bonito", te corta según su gusto. Si dices "bájame un centímetro de los lados, arriba déjame el fleco entero y no toques la barba", el resultado es exacto. Y si algo sale mal, no se arregla gritando "¡más bonito!": se arregla siendo más específico. La precisión de tu pedido es la precisión del corte.

### Cómo se ve en la práctica

La misma intención dicha de dos formas — mira la diferencia:

```
FLOJO:  "El botón se ve mal, arréglalo."

QUIRÚRGICO: "El botón de WhatsApp que está en la sección de contacto
se ve verde brillante y muy pegado al texto de arriba. Quiero:
fondo verde mate, padding de 16px por todos lados, margin-top
de 24px y esquinas redondeadas con border-radius de 12px.
El texto debe quedar blanco y centrado."
```

El flojo obliga a la IA a adivinar cuál botón, qué "mal" y qué "arreglo". El quirúrgico nombra el elemento, el defecto y el resultado exacto en vocabulario CSS. Lo que la IA te va a devolver se ve así:

```css
.btn-whatsapp {
  background: #2f9e44;      /* verde mate */
  padding: 16px;
  margin-top: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
}
```

Regla de práctica: **pocos cambios por mensaje** — uno, o tres como máximo, bien descritos. Pides poco, verificas, y sigues. Muchos pedidos de golpe: la IA cumple el primero y olvida el resto.

### Díselo a la IA

> "Te voy a pedir tres cambios visuales a mi landing de Tacos El Volcán, y quiero que los hagas uno por uno. Por cada uno: dime en una línea qué bloque vas a tocar, haz el cambio y explícame qué CSS usaste. 1) El h1 se ve pequeño: quiero que ocupe el ancho completo y tenga font-weight 900. 2) Las tarjetas del menú están pegadas: dales un gap de 24 px. 3) El footer se ve gris y feo: pásalo a fondo crema con un borde superior fino. Solo esos tres cambios: no toques nada más."

Un pedido por cambio, con el resultado esperado descrito en vocabulario CSS: la IA actúa y tú aprendes qué propiedad hizo qué. Al final te da un mini-tutorial de tu propia página.

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos pedidos es quirúrgico?
   - a) Arregla el botón para que se vea mejor
   - b) El botón de WhatsApp: pásalo a verde mate, con padding de 16 px y borde redondeado de 12 px ✔
   - c) Haz que todo se vea más moderno y fresco
   - d) Me late que la página cambie su vibra

2. **[completar]** "El ____ es el aire adentro de un elemento; el ____ es el aire afuera; el ____ es el espacio entre elementos."
   - Banco: `padding` · `margin` · `gap` · `border`
   - Respuesta: padding / margin / gap

3. **[relacionar]** Une cada propiedad con lo que controla:
   - font-size ↔ El tamaño de la letra
   - font-weight ↔ Qué tan gruesa se ve la letra
   - border-radius ↔ Qué tan redondeadas son las esquinas
   - background ↔ El color de fondo del elemento

4. **[verdadero/falso]** "Si pediste un cambio y no pasó nada, lo correcto es repetir el mismo pedido con más énfasis."
   - Respuesta: FALSO — casi siempre es la cascada y la especificidad (m3-a13): otra regla le gana; pregunta a la IA cuál regla gana y cómo hacer ganar la tuya.

5. **[qué hace]** ¿Qué cambio visual produce este CSS?
   ```css
   .btn-whatsapp {
     background: #2f9e44;
     padding: 16px;
     border-radius: 12px;
   }
   ```
   - a) Un botón con fondo verde, aire adentro y esquinas redondeadas ✔
   - b) Un botón que parpadea al pasar el mouse
   - c) Un botón más ancho que la pantalla
   - d) Un botón con el texto en negritas

---

## C6 — PRÁCTICA: agregar dark mode a tu landing

### Concepto

Tu landing ya se ve bien de día. Ahora la vas a hacer que también se vea bien de noche: eso es el **dark mode** (modo oscuro), y agregarlo sin duplicar estilos es el truco que diferencia a una página armada a mano de una dirigida con criterio.

La idea es simple: en vez de tener los colores sueltos por todo el CSS, los mueves a **variables CSS** (custom properties) — nombres como `--fondo` o `--texto` que guardan un valor y se reutilizan con `var(--fondo)`. Esto lo viste a fondo en m3-a16. Después, con una **media query** (m3-a24) escuchas una preferencia del sistema llamada `prefers-color-scheme`: si el celular o la computadora del visitante está en modo oscuro, el navegador te avisa y tú cambias las variables por la paleta de noche.

Punto clave: el **dark mode automático no necesita JavaScript**. Es puro CSS. El botón manual para que el usuario cambie de tema con un clic es otro nivel de complejidad (ahí sí entra JS con m3-b5 y m3-b6, cambiando una clase en el body). Hoy haces la versión automática: gratis, sin lógica, y ya le da a tu proyecto un toque profesional. Reconocer, no memorizar: no vas a escribir la media query de memoria, vas a saber qué pedir y cómo verificar que se cumplió.

### Analogía

Dark mode es como **la iluminación del puesto de Tacos El Volcán**. El menú, los precios y la estructura son los mismos de día y de noche; lo que cambia es la luz: de día la parrilla se ve dorada sobre fondo claro, de noche el letrero se ve brillante sobre un fondo oscuro y los detalles no te lastiman los ojos. No reescribes el negocio para la noche — solo cambias la iluminación. Tus variables CSS son esa luz: la misma página, dos ambientes.

### Cómo se ve en la práctica

Paso a paso, termina con dark mode funcionando en tu `index.html`:

1. Abre tu landing en el editor y ubica los colores: usa **Ctrl+F** y busca "background" y "color". Vas a encontrar el rojo ladrillo y la crema repetidos en muchas reglas — eso es justo lo que vamos a centralizar.
2. Pega el prompt de "Díselo a la IA". La primera pasada mueve todos los colores a variables dentro de `:root` y las usa con `var()`.
3. La segunda pasada agrega la media query `prefers-color-scheme: dark`. El resultado se ve así:

```css
:root {
  --fondo: #fdf6ec;        /* crema de día */
  --texto: #5c1f14;        /* rojo ladrillo oscuro */
  --acento: #b22222;       /* rojo ladrillo */
  --tarjeta: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --fondo: #1a1210;      /* casi negro, cálido */
    --texto: #f5e6d8;      /* crema claro */
    --acento: #e05a3f;     /* rojo más luminoso */
    --tarjeta: #2a1d18;
  }
}

body {
  background: var(--fondo);
  color: var(--texto);
}
```

4. Prueba en DevTools: **F12** → activa el device toolbar (Ctrl+Shift+M) → en el menú de tres puntos busca "Emulate CSS media feature prefers-color-scheme" y cámbialo a *dark*. Tu página debe cambiar de crema a casi negro sin que toques nada.
5. Verifica contraste (m3-a29): en modo oscuro el texto claro sobre fondo oscuro debe leerse sin esfuerzo, y el botón de WhatsApp debe seguir destacando. Si algo queda apagado, pide ajustes con la técnica de la C5.

Regla final: el contenido de tu landing es el mismo en los dos modos. Si al oscurecer algo "desaparece", es señal de que ese color no estaba centralizado — regrésalo a variable.

### Díselo a la IA

> "Mi landing de Tacos El Volcán tiene los colores fijos en el CSS y quiero agregarle dark mode sin duplicar estilos. 1) Refactoriza todos los colores a variables CSS dentro de :root con nombres descriptivos (--fondo, --texto, --acento, --tarjeta, --boton). 2) Agrega una media query @media (prefers-color-scheme: dark) que sobreescriba esas variables con una paleta oscura cálida: fondo casi negro con tono café, texto crema claro, y el rojo ladrillo en una versión más luminosa para el acento y el botón. 3) Asegúrate de que todas las reglas usen var(--nombre) y que no quede ningún color suelto. 4) No cambies la estructura ni los textos. Dame el archivo completo actualizado."

Ese prompt hace el trabajo en un solo pedido: centraliza (paso 1), define el modo oscuro (paso 2), elimina colores sueltos (paso 3) y protege tu contenido (paso 4). Cuando lo verifiques en DevTools y algo no cambie, no edites a mano: describe qué se quedó igual y repítele el pedido.

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la forma limpia de agregar dark mode sin duplicar estilos?
   - a) Reescribir todo el CSS en un segundo archivo aparte
   - b) Mover los colores a variables CSS y cambiarlas con prefers-color-scheme ✔
   - c) Ponerle un filtro gris a toda la página
   - d) Pedirle al usuario que cambie el fondo a mano cada vez

2. **[completar]** "Las ____ CSS (custom properties) se definen en ____ y permiten reutilizar un valor en todo el documento."
   - Banco: `variables` · `:root` · `clases` · `footer`
   - Respuesta: variables / :root

3. **[qué hace]** ¿Qué hace este bloque CSS?
   ```css
   @media (prefers-color-scheme: dark) {
     :root {
       --fondo: #1a1210;
     }
   }
   ```
   - a) Aplica un fondo casi negro a la página cuando el sistema está en modo oscuro ✔
   - b) Oscurece la pantalla del navegador del usuario
   - c) Obliga al sitio a estar siempre en modo claro
   - d) Cambia el fondo solo cuando se ve en celular

4. **[verdadero/falso]** "El dark mode automático con prefers-color-scheme necesita JavaScript para funcionar."
   - Respuesta: FALSO — es una media query de CSS: el navegador detecta la preferencia del sistema sin JS; el JavaScript solo se necesita si quieres un botón manual para cambiar de tema (m3-b5 y m3-b6).

5. **[relacionar]** Une cada variable con su papel:
   - `--fondo` ↔ El color de fondo principal
   - `--texto` ↔ El color de la letra
   - `--acento` ↔ El color destacado, como el botón
   - `var(--fondo)` ↔ La forma de usar el valor definido

---

## C7 — El vocabulario visual: lo que debes saber nombrar

### Concepto

Para dirigir una interfaz no necesitas saber dibujar: necesitas saber **nombrar**. El vocabulario visual es el idioma que compartes con la IA para decirle qué se ve y qué quieres cambiar. Sin él, tus pedidos son señas: "esa cosita de arriba", "que se vea más bonito". Con él, son órdenes precisas que la IA ejecuta sin adivinar.

No tienes que memorizar listas: tienes que reconocer los términos cuando los veas (el lema del programa). Esto es lo que vale la pena saber nombrar:

- **Espaciado** — `padding` (aire adentro de un elemento), `margin` (aire afuera), `gap` (espacio entre elementos), `line-height` (espacio entre renglones). Modelo de caja completo en m3-a14.
- **Tipografía** — `font-family` (la familia de letra), `font-size` (tamaño), `font-weight` (qué tan gruesa), `text-align` (centrado o alineado), `letter-spacing` (separación entre letras). m3-a17.
- **Color** — matiz (el tono), saturación (qué tan vivo), brillo, contraste y opacidad. m3-a16.
- **Estructura** — `navbar` (barra de navegación), `hero` (el bloque de entrada con el nombre grande), `card` (tarjeta), `grid` (cuadrícula), `footer`. m3-a3 y m3-a21.
- **Detalles** — `border-radius` (esquinas redondeadas), `box-shadow` (sombra), `hover` (estado al pasar el mouse), `focus` (estado al enfocar con teclado o clic).

Cada término que aprendes le quita una adivinación a la IA. Y hay una forma rápida de construir tu vocabulario sobre tu propio proyecto: pedirle que te explique el CSS que te entrega. De esa conversación sale tu diccionario, hecho a la medida de lo que tú construyes.

### Analogía

El vocabulario visual es como **saber los nombres del menú en la taquería**. No sabes preparar el pastor ni cocer el suadero — y no hace falta. Pero pedir "dos de suadero, una de pastor con todo y una coca" te da exactamente lo que quieres; decir "lo que usted guste" te da lo que el taquero decida. La IA es el mejor taquero del mundo: conoce todas las recetas. Tu trabajo no es cocinar, es pedir con nombre y apellido. Saber nombrar no te vuelve cocinero: te vuelve un cliente que nunca recibe lo que no pidió.

### Cómo se ve en la práctica

Este es el puente entre "síntoma" y "término" — lo que ves y lo que le pides a la IA:

```
"El texto está pegado al borde"        → padding / margin
"Las letras se ven muy juntas"         → letter-spacing
"Las tarjetas se amontonan"            → gap
"El título se ve flojito"              → font-weight: 700
"Las esquinas se ven duras"            → border-radius
"El botón no reacciona al pasar el mouse" → hover
```

Pruébalo sobre tu landing: abre el inspector con **F12** (m3-b25) y señala con el cursor el hero, las tarjetas del menú y el botón. Verás la lista de propiedades de cada uno. Ahora describe en voz alta lo que ves usando el vocabulario: "el hero tiene padding grande y el título usa font-weight 900". Ese ejercicio de nombrar lo que ves es exactamente lo que haces cuando le escribes a la IA.

Truco para crecer tu vocabulario sin estudiar: pídele a la IA que te explique cada bloque de CSS "como si me lo enseñaras en la cocina", con lo que pasaría si cambiaras el valor. Cada explicación te deja un término nuevo y la intuición de para qué sirve.

### Díselo a la IA

> "Voy a construir mi vocabulario visual usando mi propia página. Toma el CSS de mi landing de Tacos El Volcán y: 1) hazme una tabla con cada bloque (hero, menú, horario, botón, footer) y las propiedades CSS que usa; 2) por cada propiedad, explícala en una línea con lenguaje de todos los días y dime qué pasaría si la quitara o la cambiara; 3) propón 5 mejoras visuales concretas y descríbelas usando ese vocabulario, por ejemplo 'al footer le falta padding' o 'el hero necesita un border-radius mayor'. No cambies nada del código: esta respuesta es solo para aprender."

Ese prompt convierte a la IA en maestra de tu propio proyecto: el diccionario que te devuelve usa exactamente las propiedades de tu código, no ejemplos de libro. Lo guardas, y los pedidos de las próximas prácticas los vas a escribir con esos términos.

### Ejercicios

1. **[relacionar]** Une cada término con lo que hace:
   - padding ↔ El aire adentro de un elemento
   - margin ↔ El aire afuera de un elemento
   - gap ↔ El espacio entre elementos
   - line-height ↔ El espacio entre líneas de texto

2. **[opción múltiple]** El texto del hero está pegado al borde de la pantalla y quieres que respire. ¿Qué le pides a la IA?
   - a) El hero necesita más font-weight
   - b) El hero necesita más padding ✔
   - c) El hero necesita un border-radius mayor
   - d) El hero necesita más saturación

3. **[completar]** "Cuando el usuario pasa el mouse sobre un botón, ese estado se llama ____; cuando el botón recibe el foco del teclado, se llama ____."
   - Banco: `hover` · `focus` · `gap` · `padding`
   - Respuesta: hover / focus

4. **[verdadero/falso]** "Para dirigir a la IA con precisión necesitas escribir CSS de memoria."
   - Respuesta: FALSO — necesitas saber nombrar lo que ves y lo que quieres cambiar (reconocer, no memorizar); la escritura del código la hace la IA, y el vocabulario se construye pidiéndole que te explique el CSS que te entrega.

5. **[qué hace]** ¿Qué produce esta propiedad sobre un título?
   ```css
   letter-spacing: 2px;
   ```
   - a) Separa las letras entre sí, dándole aire al título ✔
   - b) Pone el título en mayúsculas
   - c) Cambia el peso de la letra
   - d) Agrega espacio entre líneas de texto

---

## C8 — PRÁCTICA: formulario de contacto que funciona

### Concepto

Un formulario "que funciona" tiene dos capas. La primera es la **estructura**: cada campo con su `<label>` (el texto que le dice al usuario qué escribir), un atributo `name` (el nombre interno del campo), y el `type` correcto (`text`, `tel`, `email`) — esto lo viste en m3-a8. La segunda capa es la **validación**: el navegador bloquea el envío si un campo obligatorio está vacío o si el correo no parece correo, usando `required` y los tipos de campo de m3-a9.

Y la tercera — la que convierte un formulario estático en uno que "funciona" — es el **JavaScript**: cuando el usuario presiona Enviar, tu script escucha el evento `submit` (m3-b7), hace `preventDefault` para que la página no se recargue (m3-b8), lee los valores con el atributo `name` y hace algo con ellos: hoy, mostrar una confirmación.

Importante: en esta práctica el formulario "funciona" significa que captura bien los datos y confirma al usuario. Todavía no lo manda a ningún lado — conectarlo a WhatsApp o correo es exactamente la m3-c9. No mezcles las dos cosas o vas a depurar a ciegas.

### Analogía

Un formulario es la **comanda del taquero**. Una buena comanda tiene espacios marcados: cuántas, de qué, para llevar o aquí. Si el taquero solo apunta garabatos, la cocina no sabe qué preparar. Cada `<label>` es el letrero del espacio, y el atributo `name` es el nombre del espacio en la receta: sin `name`, aunque el cliente escriba su número, tu código no tiene manera de saber que ese texto es el teléfono. Formulario bien nombrado, cocina (o IA) bien alimentada.

### Cómo se ve en la práctica

Termina con un formulario que captura datos y confirma al visitante. Paso a paso:

1. Pega el prompt de "Díselo a la IA" y deja que agregue la sección de contacto con el formulario y el script.
2. Verifica la estructura con **Ctrl+F** buscando "form": cada campo debe tener `<label>`, su atributo `name` y `required`. Sin esas tres piezas, no funciona aunque se vea bonito.
3. Prueba el primer nivel: deja el formulario vacío y presiona Enviar. El navegador debe marcar los campos vacíos y **no** recargar la página. Eso es la validación nativa (m3-a9) trabajando.
4. Llena los campos y vuelve a enviar: debajo del botón debe aparecer el mensaje de confirmación con el nombre del visitante. Si la página recarga y se pierde todo, el `preventDefault` no está — pídelo de nuevo.
5. Para terminar, abre la consola (F12 → pestaña Console, m3-b24) y escribe `document.querySelector("#contacto")`: verás el formulario como objeto. Reconoce su estructura — es el DOM del que habla m3-b2.

El resultado, en resumen, se ve así:

```html
<form id="contacto">
  <label for="nombre">Tu nombre</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="telefono">Tu teléfono</label>
  <input type="tel" id="telefono" name="telefono" required>

  <label for="mensaje">Mensaje</label>
  <textarea id="mensaje" name="mensaje" required></textarea>

  <button type="submit">Enviar</button>
</form>

<p id="confirmacion"></p>
```

Y el script que captura los datos (m3-b7 y m3-b8):

```js
const form = document.querySelector("#contacto");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const datos = {
    nombre: form.nombre.value,
    telefono: form.telefono.value,
    mensaje: form.mensaje.value
  };
  document.querySelector("#confirmacion").textContent =
    `¡Gracias, ${datos.nombre}! Te contactamos al ${datos.telefono}.`;
});
```

Fíjate en las tres piezas: el evento (`submit`), el `preventDefault` y la lectura por `name`. Es el mismo patrón que usarás para conectar el formulario a WhatsApp en la C9.

### Díselo a la IA

> "Agrega a mi landing de Tacos El Volcán una sección de contacto con un formulario que funcione: 1) tres campos con su label y su atributo name — nombre (text), teléfono (tel) y mensaje (textarea) —, todos con required; 2) que use la validación nativa del navegador (type y required), con los mismos estilos que ya uso, sin exagerar; 3) un script que escuche el evento submit, haga preventDefault, lea los valores con el atributo name y muestre debajo del botón un mensaje de confirmación con el nombre del visitante; 4) no conectes el envío a ningún servicio todavía, eso lo haremos en la siguiente lección. Dame el archivo completo actualizado."

Cada punto del prompt protege una capa: estructura (1), validación (2), captura con confirmación (3) y el límite para no adelantar la m3-c9 (4).

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la forma correcta de capturar los valores de un formulario en JavaScript?
   - a) Hacer clic en el botón y copiar el texto de la página
   - b) Escuchar el evento submit, hacer preventDefault y leer los valores por su atributo name ✔
   - c) Reiniciar el formulario y ver lo que aparece en la consola
   - d) Poner un enlace de WhatsApp dentro del HTML

2. **[completar]** "Cada campo necesita un atributo ____ que lo identifica, y con el atributo ____ el navegador bloquea el envío si está vacío."
   - Banco: `name` · `required` · `style` · `href`
   - Respuesta: name / required

3. **[qué hace]** ¿Qué hace esta línea dentro del evento submit?
   ```js
   e.preventDefault();
   ```
   - a) Evita que la página se recargue al enviar el formulario ✔
   - b) Bloquea el botón de Enviar para siempre
   - c) Guarda los datos directamente en WhatsApp
   - d) Cierra el formulario automáticamente

4. **[verdadero/falso]** "La validación nativa del navegador bloquea el envío cuando un campo obligatorio está vacío, sin necesidad de JavaScript."
   - Respuesta: VERDADERO — con required y el type adecuado, el navegador valida antes de disparar el submit (m3-a9); tu script escucha el evento solo cuando ya pasó la validación.

5. **[relacionar]** Une cada pieza del formulario con su función:
   - `<label>` ↔ El texto que le dice al usuario qué escribir
   - name ↔ El identificador del campo para leer su valor
   - required ↔ El campo es obligatorio
   - submit ↔ El evento que se dispara al enviar

---

## C9 — Conectar el formulario a WhatsApp o correo

### Concepto

Ya tienes un formulario que captura datos. Ahora la pregunta real: ¿a dónde van esos datos? Un sitio guardado en tu computadora no tiene servidor, y el navegador no puede enviar correos ni mensajes por sí solo. Las opciones que funcionan sin servidor son tres:

- **WhatsApp (la más natural para un negocio local)** — armas un mensaje con los datos y abres `wa.me` con el texto ya escrito, igual que el botón de la C2 pero ahora con contenido variable del formulario.
- **Correo con `mailto:`** — abre la aplicación de correo del usuario con el asunto y el cuerpo ya llenos. No lo manda solo: lo deja listo para que el usuario presione Enviar en su app.
- **Servicios de formularios** (como Formspree o FormSubmit) — guardan los envíos en la nube y te llega un correo. Es la vía "profesional" sin programar un servidor; la verás con calma cuando hables de backends.

La pieza técnica que hace posibles las dos primeras es el **encodado de URL**: los mensajes con espacios, acentos y saltos de línea no pueden viajar así en una URL. La función `encodeURIComponent()` los convierte a un formato seguro (los espacios se vuelven %20, y así cada carácter especial). Reconocer, no memorizar: no vas a escribir el encodado a mano, vas a saber por qué existe y cuándo pedirlo.

### Analogía

Es como **la comanda que se entrega por la ventanilla de WhatsApp**. El taquero no tiene radio interna entre la cocina y la clientela, así que escribe el pedido en un papelito y lo manda por la app que todo el mundo ya tiene. Tu formulario escribe el papelito; `wa.me` o `mailto:` es la ventanilla que lo entrega. El mensaje viaja por un canal que ya existe y que el cliente ya usa — sin instalar nada nuevo, sin servidor.

### Cómo se ve en la práctica

Así se ve la conexión a WhatsApp — este es el script que tu formulario va a usar:

```js
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = form.nombre.value;
  const telefono = form.telefono.value;
  const mensaje = form.mensaje.value;

  const texto = `Hola Tacos El Volcán, soy ${nombre}.
Quiero pedir: ${mensaje}
Mi teléfono: ${telefono}`;

  const url = "https://wa.me/5215512345678?text=" + encodeURIComponent(texto);
  window.open(url, "_blank");
});
```

Dos piezas que debes poder reconocer: el mensaje se arma con **template literals** (m3-b14) — los acentos graves y `${...}` insertan valores — y después `encodeURIComponent` lo convierte para que quepa en la URL. Si lo quieres por correo, cambias la última parte:

```js
const url = "mailto:tacos@elvolcan.com" +
  "?subject=" + encodeURIComponent("Pedido de " + nombre) +
  "&body=" + encodeURIComponent(texto);
window.location.href = url;
```

Pasos para probarlo:

1. Pega el prompt de "Díselo a la IA" y reemplaza tu `index.html`.
2. Llena el formulario y envía: se abre WhatsApp en una pestaña nueva con el mensaje completo y el número correcto.
3. Verifica el encodado: en la barra del navegador verás `%20` en vez de espacios — es el texto seguro, no un error.
4. Cambia a la versión `mailto:`, envía de nuevo y revisa que el correo llegue pre-lleno a tu app de correo.
5. Decide cuál usarás para la taquería y deja solo esa versión en el código.

Advertencia: el número de `wa.me` va en formato internacional sin signos (para México: 521 + 10 dígitos). Si pones ceros o espacios, WhatsApp no encuentra el chat.

### Díselo a la IA

> "Conecta el formulario de contacto de mi landing de Tacos El Volcán a WhatsApp. Cuando el usuario haga submit: 1) haz preventDefault; 2) arma un mensaje legible con los valores del formulario usando template literals — saludo, nombre, mensaje y teléfono; 3) usa encodeURIComponent para convertir ese mensaje en un texto apto para URL; 4) abre wa.me/5215512345678?text=... en una pestaña nueva con window.open; 5) deja en un comentario la versión con mailto: por si prefiero cambiar a correo. El número va en formato internacional sin signos: 5215512345678. No cambies el diseño del formulario. Dame el archivo completo actualizado."

El prompt pide la versión WhatsApp y deja la de correo anotada en el código (paso 5), para que cambies de canal con un clic sin pedir todo de nuevo.

### Ejercicios

1. **[completar]** "El navegador no puede enviar correos por sí solo: con ____ abre la app de correo del usuario; con ____ abre WhatsApp con el mensaje ya escrito."
   - Banco: `mailto` · `wa.me` · `encodeURIComponent` · `formulario`
   - Respuesta: mailto / wa.me

2. **[opción múltiple]** ¿Por qué se usa encodeURIComponent sobre el texto del mensaje?
   - a) Para poner el mensaje en mayúsculas
   - b) Para convertir espacios, acentos y saltos de línea en un formato seguro para la URL ✔
   - c) Para cifrar el mensaje y que nadie lo lea
   - d) Para que el mensaje se borre después de enviarse

3. **[qué hace]** ¿Qué hace esta línea?
   ```js
   const url = "https://wa.me/5215512345678?text=" + encodeURIComponent("Hola, quiero un pedido");
   ```
   - a) Abre WhatsApp con ese mensaje ya escrito para ese número ✔
   - b) Descarga la página de WhatsApp
   - c) Envía un correo electrónico automático
   - d) Guarda el mensaje en la memoria del navegador

4. **[verdadero/falso]** "Para abrir WhatsApp con el mensaje pre-escrito, el número va en formato internacional sin signos — en México, 521 + 10 dígitos."
   - Respuesta: VERDADERO — wa.me exige el formato internacional sin + ni espacios; en México es 521 + 10 dígitos, el mismo número que pediste en el botón de la C2.

5. **[ordenar]** Ordena el flujo de un envío a WhatsApp:
   - Desordenado: `encodeURIComponent lo convierte a formato seguro` · `El usuario llena el formulario y presiona Enviar` · `window.open abre wa.me con el mensaje listo` · `JavaScript hace preventDefault y lee los valores` · `Se arma el mensaje legible con template literals`
   - Respuesta: El usuario llena y envía → JavaScript hace preventDefault y lee los valores → Se arma el mensaje con template literals → encodeURIComponent lo convierte → window.open abre wa.me

---

## C10 — PRÁCTICA: galería de productos desde datos

### Concepto

Hasta hoy, los seis tacos de tu menú están escritos uno por uno en el HTML. Eso funciona para seis. Para sesenta, se vuelve insostenible: cada cambio de precio te obliga a buscar la tarjeta y editar a mano. La solución es cambiar de paradigma: **separar los datos de la presentación** (tema que la m3-c11 va a llevar al extremo).

En vez de seis bloques de HTML, tienes un **arreglo de objetos** (m3-b13) — cada objeto es un taco con `nombre`, `precio` y `descripcion` — y la página lo recorre con `map` (m3-b12) para pintar una tarjeta por cada elemento usando **template literals** (m3-b14). Esto lo viste en m3-b10: pintar datos en pantalla. Hoy lo aplicas a tu proyecto real.

La ganancia no es estética: es que **los datos mandan y la página obedece**. Para agregar un taco nuevo, editas el arreglo y la tarjeta aparece sola. Para actualizar un precio, cambias un número en un solo lugar. El HTML deja de ser donde viven tus productos: es solo el molde que los repite.

### Analogía

Es como **el pizarrón del menú del taquero**. El taquero no escribe cada taco en un cartel distinto y los pega a la pared: tiene una lista en la cocina y un pizarrón que repite el mismo formato para cada uno — nombre arriba, descripción chiquita, precio abajo. Si sube el precio del suadero, cambia el número en la lista, no arranca el cartel. Tu arreglo de objetos es la lista de la cocina; el `map` es el pizarrón que la muestra.

### Cómo se ve en la práctica

Vas a convertir el menú estático en una galería que se pinta desde datos. Paso a paso:

1. Pega el prompt de "Díselo a la IA". Cuando termine, abre tu `index.html` y ubica el `script`: arriba verás el arreglo `tacos`, abajo el render con `map`.
2. Verifica el arreglo: cada taco es un objeto con `nombre`, `precio` y `descripcion`. Reconoce los seis del menú original.
3. Haz el "momento ajá": agrega un séptimo objeto al arreglo — una birria a $35 — y guarda (Ctrl+S). Recarga la página: la tarjeta apareció sola, sin tocar el HTML.
4. Cambia el precio del suadero en el arreglo y recarga: se actualizó en la tarjeta. Ahí está el poder de los datos centralizados.
5. Cierra el ciclo leyendo el render y explicándolo con tus palabras: el contenedor está vacío en el HTML, y el JavaScript arma el HTML de cada tarjeta y lo mete con `innerHTML` (m3-b4).

El código clave se ve así:

```js
const tacos = [
  { nombre: "Suadero", precio: 25, descripcion: "Jugoso, con cebolla y cilantro" },
  { nombre: "Pastor", precio: 22, descripcion: "El clásico, con piña" },
  { nombre: "Campechano", precio: 28, descripcion: "La mezcla de todo" }
];

const contenedor = document.querySelector("#menu");
const html = tacos.map(function (taco) {
  return `<article class="taco">
    <h3>${taco.nombre}</h3>
    <p>${taco.descripcion}</p>
    <strong>$${taco.precio}</strong>
  </article>`;
}).join("");
contenedor.innerHTML = html;
```

Fíjate en la secuencia: datos (el arreglo) → transformación (`map` devuelve un arreglo de strings HTML) → inserción (`innerHTML` lo pone en la página). Ese es el patrón que vas a usar en las próximas prácticas del mes.

### Díselo a la IA

> "Convierte el menú estático de mi landing de Tacos El Volcán en una galería que se pinta desde datos: 1) crea un arreglo llamado tacos con objetos — nombre, precio y descripcion — para los 6 tacos actuales; 2) deja el contenedor del menú vacío en el HTML y pinta las tarjetas con JavaScript usando map y template literals, guardando el HTML armado con innerHTML; 3) que cada tarjeta se vea igual a las actuales, con los mismos estilos; 4) agrega al final del arreglo un séptimo taco de birria a $35 para que yo vea que basta editarlo ahí. No cambies los estilos ni los textos. Dame el archivo completo actualizado."

El paso 4 del prompt es tu prueba de que funcionó: si el séptimo taco aparece solo, la galería ya es de datos. La m3-c11 te va a explicar por qué esta separación cambia todo.

### Ejercicios

1. **[qué hace]** ¿Qué hace este código?
   ```js
   const html = tacos.map(function (t) {
     return "<h3>" + t.nombre + "</h3>";
   }).join("");
   ```
   - a) Crea un texto HTML con el nombre de cada taco del arreglo ✔
   - b) Cambia el precio de todos los tacos
   - c) Elimina los tacos que no tienen nombre
   - d) Ordena el arreglo por precio

2. **[completar]** "En una galería desde datos, los productos viven en un ____ de ____; la página solo repite el mismo formato para cada uno."
   - Banco: `arreglo` · `objetos` · `colores` · `enlaces`
   - Respuesta: arreglo / objetos

3. **[opción múltiple]** Agregaste un taco nuevo al arreglo y guardaste. ¿Qué pasa con la página?
   - a) Aparece una nueva tarjeta sin tocar el HTML ✔
   - b) La página deja de funcionar hasta reiniciar
   - c) Hay que copiar y pegar una tarjeta a mano
   - d) El taco aparece solo en el buscador de Google

4. **[relacionar]** Une cada pieza con su papel:
   - `const tacos` ↔ El arreglo de objetos con los datos
   - `map` ↔ Repite el formato para cada elemento
   - template literals ↔ Armar el HTML con valores del objeto
   - `innerHTML` ↔ Poner el HTML armado dentro del contenedor

5. **[verdadero/falso]** "Cuando los datos están separados de la presentación, editar el contenido ya no requiere tocar la estructura de la página."
   - Respuesta: VERDADERO — cambias el arreglo y el render lo refleja: es la idea que la m3-c11 va a llevar al extremo.

---

## C11 — Separar datos de presentación: por qué cambia todo

### Concepto

En la m3-c10 convertiste el menú estático en una galería que se pinta desde un arreglo. Hoy vas a entender por qué ese cambio no fue estético: fue un cambio de paradigma. **Separar datos de presentación** significa que el contenido — los tacos, los precios, las descripciones — vive aparte de la forma en que se muestra — las tarjetas, los colores, la estructura. Dos mundos que se comunican a través del **render**: el código que toma los datos y produce HTML.

Hay tres capas, y aprender a distinguirlas es la mitad de tu trabajo como director:

- **Datos** — el arreglo `tacos` con sus objetos (m3-b13). El "qué" del menú.
- **Lógica** — el `map`, los filtros y los condicionales que transforman los datos (m3-b12, m3-b15). El "cómo se procesa".
- **Presentación** — el HTML y el CSS que muestran el resultado. El "cómo se ve".

Cuando las tres capas viven juntas — seis tarjetas escritas a mano en el HTML — cambiar un precio es una cacería: buscas la línea, la editas y rezas porque no haya otra copia. Cuando los datos están separados, cambiar un precio es editar **un solo número**. Y eso desbloquea todo lo que viene este mes: los filtros de la m3-c12, las APIs reales de la m3-c14 y los estados de la m3-c15. Ninguna de esas cosas existe si los datos siguen pegados a la presentación.

### Analogía

Es la diferencia entre la **receta** y la **vitrina**. La taquería tiene una sola receta de suadero (los datos), pero la presenta en taco, en torta y en volcán (las presentaciones). Si el suadero sube de precio, cambias la receta **una vez** y las tres presentaciones lo reflejan. Si mezclas receta con presentación — la receta del taco, la receta de la torta y la receta del volcán como tres documentos separados — subir el precio es editar tres hojas. Y el día que alguien se olvida de una, vendes tortas con el precio de hace tres meses. Tu `tacos` es la receta; tu render es la vitrina que la muestra.

### Cómo se ve en la práctica

El antes y el después, frente a frente:

```html
// ANTES — datos y presentación mezclados
<li>Suadero — $25</li>
<li>Pastor — $22</li>
<li>Campechano — $28</li>
```

```js
// DESPUÉS — los datos viven solos
const tacos = [
  { nombre: "Suadero", precio: 25 },
  { nombre: "Pastor", precio: 22 },
  { nombre: "Campechano", precio: 28 }
];

// y la presentación es un molde que los repite
const html = tacos.map(function (t) {
  return `<li>${t.nombre} — $${t.precio}</li>`;
}).join("");
```

Haz la prueba del poder en tu propia página:

1. Pega el prompt de "Díselo a la IA". Cuando termine, tendrás un archivo nuevo `datos.js` con el arreglo, y el render en tu script principal leyendo `window.TACOS`.
2. Verifica que la página se vea idéntica: el mismo menú, los mismos estilos. Separar datos no cambia lo que se ve — cambia dónde viven las cosas.
3. Abre `datos.js` y cambia el precio del suadero. Guarda y recarga: la tarjeta se actualizó sin tocar una sola etiqueta HTML.
4. Agrega un taco nuevo al arreglo en `datos.js`. Recarga: la tarjeta apareció sola. Eso es la fuente única de verdad: el contenido manda y la presentación obedece.

El detalle del orden importa: `datos.js` debe cargarse *antes* que tu script principal, porque `window.TACOS` tiene que existir cuando el render lo lea (m3-b1 te explica este orden de ejecución). Si ves `window.TACOS is not defined`, casi siempre es eso: el archivo de datos cargó después.

### Díselo a la IA

> "Quiero separar totalmente los datos de la presentación en mi landing de Tacos El Volcán. 1) Crea un archivo nuevo datos.js que declare el arreglo tacos como window.TACOS = [...], con los mismos objetos de ahora; 2) en index.html carga datos.js antes del script principal y ajusta el render para que lea window.TACOS; 3) agrega al inicio de datos.js un comentario que explique cómo agregar un taco nuevo o cambiar un precio; 4) el resultado en pantalla debe verse idéntico al actual. No cambies estilos ni textos. Dame los dos archivos completos."

Ese prompt pone los datos en su propia casa (paso 1), ordena las dependencias (paso 2) y deja instrucciones para el que edite después — tú incluido (paso 3). El paso 4 es tu control de calidad: si la página cambia visualmente, algo se movió de más.

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la ganancia principal de separar datos de presentación?
   - a) La página carga más rápido
   - b) El contenido vive en un solo lugar y cualquier cambio se refleja en toda la página ✔
   - c) La IA ya no necesita prompts tan largos
   - d) Los estilos se aplican solos

2. **[completar]** "Separar datos de presentación significa que el ____ (tacos, precios) vive aparte de la ____ (tarjetas, colores); el ____ los conecta convirtiendo datos en HTML."
   - Banco: `contenido` · `presentación` · `render` · `servidor`
   - Respuesta: contenido / presentación / render

3. **[relacionar]** Une cada capa con lo que representa:
   - Datos ↔ El arreglo tacos con nombre, precio y descripcion
   - Presentación ↔ Las tarjetas y los estilos del menú
   - Render ↔ El código que convierte datos en HTML
   - Fuente única de verdad ↔ Cambias un dato una vez y toda la página lo refleja

4. **[verdadero/falso]** "Separar datos de presentación solo vale la pena en proyectos enormes."
   - Respuesta: FALSO — vale desde el primer producto: el día que cambies un precio o agregues un taco, te lo agradece. Es disciplina, no tamaño.

5. **[qué hace]** ¿Qué pasa la próxima vez que la página se renderice?
   ```js
   const tacos = [
     { nombre: "Suadero", precio: 25 },
     { nombre: "Pastor", precio: 22 }
   ];
   tacos[0].precio = 30;
   ```
   - a) El suadero aparece a $30 sin tocar el HTML ✔
   - b) El pastor desaparece del menú
   - c) La página muestra un error de sintaxis
   - d) El menú se duplica

---

## C12 — PRÁCTICA: filtros y buscador en el navegador

### Concepto

Ya tienes los datos separados de la presentación (m3-c11). Eso convierte la interacción en algo trivial: un filtro ya no tiene que buscar en el HTML — le pregunta al arreglo. **Filtrar** es seleccionar de lo que ya existe: "los tacos que cuesten menos de $25", "los de res". **Buscar** es filtrar por texto: "los que tengan 'su' en el nombre". En ambos casos no creas nada nuevo: le haces una pregunta al arreglo y pintas la respuesta.

Las herramientas ya las conoces de la materia B:

- `filter` (m3-b12) — recorre el arreglo y devuelve uno nuevo solo con los elementos que cumplen la condición.
- `toLowerCase()` e `includes()` — convierten todo a minúsculas y preguntan "¿contiene este texto?". Sin `toLowerCase`, "Suadero" y "suadero" serían cosas distintas.
- El evento `input` (m3-b7) — se dispara en cada tecla que escribes en el buscador, para volver a filtrar en vivo.
- El re-render — el patrón de la m3-c10: recomputas, armas el HTML con `map` + template literals (m3-b14) y lo metes con `innerHTML` (m3-b4).

El dato que más se malinterpreta: `filter` **no modifica el arreglo original**. Devuelve una copia filtrada. Tus `tacos` quedan intactos para siempre — por eso al limpiar el filtro vuelve la lista completa. Y cuando la búsqueda no encuentra nada, no es un error: es el **estado vacío**, del que la m3-c15 va a hablar como se merece.

### Analogía

Filtrar es como **el chalan del mostrador con la lista de pedidos**. El cliente pregunta "¿cuáles llevan cebolla?" y el chalan recorre la lista y aparta los que sí llevan — no reescribe el recetario ni tacha a los demás: *selecciona* de lo que ya está anotado. Pregunta otra cosa, "¿cuáles son de res?", y vuelve a recorrer la misma lista. El recetario nunca cambia; lo que cambia es la selección que le muestras. Tu `filter` es ese chalan: la lista original es sagrada.

### Cómo se ve en la práctica

Paso a paso, terminas con buscador y filtros en tu landing:

1. Pega el prompt de "Díselo a la IA" y deja que agregue el campo `tipo` a tus tacos, el buscador y los chips de filtro.
2. Verifica en tu archivo: el buscador es un `<input id="buscador">`, y hay botones para Todos, De res, De puerco y Veggie. Ambos escriben sobre el mismo render.
3. Prueba el buscador: escribe "pas". ¿Solo queda el pastor? Eso es `toLowerCase` + `includes` trabajando.
4. Prueba los chips: haz clic en "De res". Se marcan los que son y se ocultan los demás.
5. Combina todo: chip "De res" + texto "su" — el filtro es la suma de las dos condiciones. ¿Vacío? Aparece el mensaje del estado vacío; es la m3-c15, no un bug.
6. Presiona "Limpiar": la lista completa vuelve. Eso es posible porque el arreglo original nunca se tocó.

El corazón del código, la función que decide qué se muestra:

```js
function tacosVisibles() {
  const texto = buscador.value.toLowerCase().trim();

  return tacos.filter(function (taco) {
    const coincideTexto = taco.nombre.toLowerCase().includes(texto);
    const coincideTipo = tipoActivo === "todos" || taco.tipo === tipoActivo;
    return coincideTexto && coincideTipo;
  });
}
```

Lee la lógica: `coincideTexto` pregunta si el nombre contiene lo escrito; `coincideTipo` pregunta si el taco es del chip activo. Un taco pasa solo si las **dos** respuestas son sí. Después, en cada evento (`input` en el buscador, `click` en un chip), vuelves a calcular `tacosVisibles()` y repintas. Repintar no es "borrar y volver a crear el menú": es recalcular la lista y llamar a la misma función de pintado que ya tienes de la m3-c10.

### Díselo a la IA

> "Mi landing de Tacos El Volcán pinta el menú desde el arreglo tacos (window.TACOS en datos.js). Agrégale buscador y filtros: 1) agrega a cada taco un campo tipo ('res', 'puerco' o 'veggie'); 2) un input con id 'buscador' que filtre por nombre en cada tecla, comparando con toLowerCase() e includes(); 3) botones de filtro por tipo — Todos, De res, De puerco, Veggie — que marquen visualmente el chip activo; 4) que buscador y filtros se combinen entre sí; 5) si no hay resultados, muestra 'No encontramos tacos con esos filtros'; 6) un botón 'Limpiar' que restaure la lista completa. No cambies estilos ni textos. Dame el archivo completo actualizado."

Cada número del prompt es un requisito verificable: el 4 es el que casi todos olvidan (los filtros se suman), y el 5 conecta directo con el estado vacío de la m3-c15.

### Ejercicios

1. **[qué hace]** El arreglo tacos tiene precios de $25, $22, $28 y $30. ¿Qué contiene resultado?
   ```js
   const resultado = tacos.filter(function (t) {
     return t.precio <= 25;
   });
   ```
   - a) Solo los tacos de $25 o menos ✔
   - b) Todos los tacos, ordenados por precio
   - c) Solo los tacos de exactamente $25
   - d) El taco más caro

2. **[completar]** "El evento ____ se dispara en cada tecla que escribes en el buscador; el método ____ devuelve un arreglo nuevo con los elementos que cumplen la condición."
   - Banco: `input` · `filter` · `click` · `sort`
   - Respuesta: input / filter

3. **[opción múltiple]** ¿Por qué se usa .toLowerCase() en el buscador?
   - a) Para que el buscador distinga entre mayúsculas y minúsculas
   - b) Para que 'Suadero' y 'suadero' cuenten como lo mismo ✔
   - c) Para ordenar los resultados alfabéticamente
   - d) Para que la búsqueda sea más rápida

4. **[relacionar]** Une cada pieza con su función:
   - `tacos.filter(fn)` ↔ Selecciona los tacos que cumplen la condición
   - input ↔ El evento que se dispara con cada tecla
   - `includes(texto)` ↔ Pregunta si el nombre contiene ese texto
   - `renderTacos(lista)` ↔ Pinta en pantalla cualquier lista que le pases

5. **[verdadero/falso]** "filter modifica el arreglo original: por eso después de buscar, los tacos filtrados desaparecen del arreglo."
   - Respuesta: FALSO — filter devuelve un arreglo NUEVO y deja el original intacto; por eso al limpiar el filtro vuelve la lista completa.

---

## C13 — Cuando la IA genera código que no entiendes

### Concepto

Te va a pasar — de hecho ya te pasó o está por pasarte. La IA te entrega un bloque de código que resuelve algo, y tú no entiendes todo lo que hay adentro. Aclaremos algo desde ya: **eso es normal y no te hace mal director**. El error no es no entender; el error es fingir que entiendes y pegar el código a ciegas. Entre "no entiendo nada" y "entiendo esta parte y esta no" hay un océano — y tu trabajo es caer siempre del segundo lado.

No necesitas entender cada carácter: necesitas una **comprensión operativa** — saber tres cosas de cada bloque:

- **¿Qué hace?** En una línea, sin profundidad innecesaria.
- **¿Qué pasa si lo quito?** ¿Se rompe la página o solo pierde una función secundaria?
- **¿Dónde se ancla?** Qué parte ya reconoces de la materia B — `fetch` (m3-b21), `filter` y `map` (m3-b12), `innerHTML` (m3-b4), `try/catch` (m3-b22). Tus conocidos son los postes del mapa: los desconocidos son solo calles entre postes.

El protocolo completo antes de integrar código que no entiendes:

1. Pídele a la IA que te lo explique *antes* de integrarlo.
2. Léelo por bloques, no por caracteres — el mismo ejercicio de la m3-c3, pero con JavaScript.
3. Pruébalo por comportamiento: cambia un valor, recarga y observa qué pasó. El comportamiento es la verdad (m3-b25 te deja pausar y ver variables).
4. Si hay comandos de terminal o toca datos reales de clientes: **alto total**. Ahí no avanzas sin entender (m1-a7).

No todas las zonas exigen el mismo nivel. Un ajuste de `padding` se puede probar sin entender nada. Un comando que borra archivos o un cambio que toca pagos no se tocan sin entender. La IA es excelente — pero es excelente obedeciendo, y obedeció a muchos antes que a ti. La responsabilidad de lo que entra a tu proyecto es tuya.

### Analogía

La IA es **un chef famoso que te dicta la receta por teléfono**. No necesitas saber la química del maíz ni por qué la salsa cambia de color para seguirla — pero sí necesitas saber qué ingrediente estás agregando en cada paso y qué función cumple. "Agrega la taza de caldo" lo entiendes; "agrega una taza de sal" te hace detener la llamada. Y además pruebas mientras cocinas: no esperas a servir el platillo para descubrir si le falta sal, lo pruebas a medio camino (tu prueba por comportamiento). El chef nunca sabrá si tú entiendes la química — pero el platillo que sale a la mesa es tuyo, y tú respondes por él.

### Cómo se ve en la práctica

Vamos a practicar con un bloque real — el tipo de código que la IA te genera cuando conectas datos (m3-b21 y m3-b22):

```js
async function cargarSugerencias() {
  try {
    const res = await fetch("https://api.example.com/sugerencias");
    if (!res.ok) throw new Error("Servidor " + res.status);
    const datos = await res.json();
    const cards = datos
      .filter((d) => d.disponible)
      .slice(0, 3)
      .map((d) => `<article>${d.nombre}</article>`)
      .join("");
    document.querySelector("#recomendados").innerHTML = cards;
  } catch (error) {
    document.querySelector("#recomendados").textContent =
      "No se pudieron cargar las sugerencias";
  }
}
```

Haz el inventario de lo que sí reconoces: `fetch` + `res.json()` (m3-b21), `filter` y `map` (m3-b12), `innerHTML` (m3-b4), `try/catch` y `res.ok` (m3-b22). ¿Lo único nuevo? `.slice(0, 3)`. Entonces el protocolo es un mensaje: "¿qué hace slice aquí?". Respuesta: toma solo los primeros 3 elementos del arreglo filtrado. Ya no tienes 30 líneas desconocidas: tienes 29 conocidas y una pregunta. Eso es dirigir.

El diálogo con la IA, en la práctica:

```
Tú: Antes de integrar este bloque, explícame qué hace
    slice(0, 3) y qué pasaría si lo quito.

IA: slice(0, 3) recorta el arreglo a los primeros 3
    elementos. Si lo quitas, se pintarían todas las
    sugerencias en vez de solo 3.

Tú: Perfecto. Intégralo.
```

Y la prueba por comportamiento al final: cambia el `3` por `5`, recarga y cuenta las tarjetas. Si salen 5, tu comprensión operativa era correcta.

### Díselo a la IA

> "Te voy a pegar el código que me diste para [describe la función] porque quiero entenderlo antes de integrarlo. Recórrelo bloque por bloque y: 1) dime en una línea qué hace cada bloque; 2) por cada bloque, dime qué pasaría si lo quitara — si se rompe la página o solo pierde una función; 3) márca qué piezas ya conozco (fetch, res.json, filter, map, innerHTML, try/catch) y cuáles son nuevas para mí; 4) si algo toca datos de clientes o requiere comandos de terminal, adviérteme antes de que yo lo corra. No cambies el código: esta respuesta es solo para que yo entienda."

Ese prompt convierte a la IA en traductora de su propio código y te da el mapa de lo que es nuevo para ti. Después de esa respuesta, integrar deja de ser un acto de fe y se vuelve una decisión informada.

### Ejercicios

1. **[opción múltiple]** La IA te entrega un bloque de 30 líneas y entiendes 25. ¿Qué haces?
   - a) Pegarlo completo y esperar que funcione
   - b) Pedir que te explique las 5 que no entiendes antes de integrarlo ✔
   - c) Borrar las 5 que no entiendes
   - d) Decirle que reescriba todo en otro lenguaje

2. **[completar]** "No necesitas entender cada ____; necesitas saber qué hace cada ____ y qué pasaría si lo quitas."
   - Banco: `carácter` · `bloque` · `librería` · `prompt`
   - Respuesta: carácter / bloque

3. **[verdadero/falso]** "Antes de correr un comando de terminal que no entiendes, debes pedirle a la IA que te explique qué hace y qué puede afectar."
   - Respuesta: VERDADERO — un comando puede instalar algo… o borrar algo (m1-a7); nunca se corre a ciegas.

4. **[relacionar]** Une cada pieza con lo que ya sabes de ella:
   - fetch + res.json ↔ Pedir datos y desempacarlos (m3-b21)
   - filter + map ↔ Seleccionar y transformar elementos (m3-b12)
   - try/catch ↔ Si algo falla, la página no se rompe (m3-b22)
   - slice(0, 3) ↔ Tomar solo los primeros 3 elementos

5. **[qué hace]** En medio de un código que te dio la IA aparece `.slice(0, 3)`. ¿Qué hace?
   - a) Toma solo los primeros 3 elementos del arreglo ✔
   - b) Elimina los 3 primeros elementos
   - c) Ordena los primeros 3 alfabéticamente
   - d) Convierte el arreglo en texto

---

## C14 — PRÁCTICA: consumir una API pública real

### Concepto

Ya sabes pedir datos con `fetch` (m3-b21). Hoy los pides de verdad: a una **API pública real** — un servidor de otra empresa que expone sus datos por internet. La habilidad del director aquí no es escribir el fetch: es **leer la documentación, probar el endpoint y verificar la respuesta**.

Una API se compone de tres cosas que ya puedes reconocer:

- **Endpoints** — URLs que devuelven datos. Cada una es un "mostrador" distinto: uno te da platillos, otro precios, otro imágenes.
- **La respuesta JSON** — al abrir un endpoint en el navegador ves el dato crudo: un objeto con claves. Leerlo es reconocer la estructura (m3-b13 y m3-b17): `meals` guarda el arreglo, y cada elemento tiene claves como `strMeal` o `strMealThumb`.
- **Documentación** — la página que explica qué hace cada endpoint. Ahí confirmas la URL exacta, los parámetros (`?s=taco`) y si pide una clave (API key).

La API de esta práctica es **TheMealDB**, un catálogo abierto de recetas: `https://www.themealdb.com/api/json/v1/1/search.php?s=taco`. Busca recetas de taco y no pide clave. La vas a usar para darle a la taquería una sección nueva: **Tacos del mundo**. Y si algún día TheMealDB está caída, `https://jsonplaceholder.typicode.com/users` es tu banco de pruebas: devuelve usuarios falsos siempre que la necesites para probar el patrón.

El flujo del director: (1) abres el endpoint en el navegador y ves el JSON, (2) le describes a la IA la URL y la estructura que viste, (3) verificas que lo que pintó coincide con lo que prometía la respuesta.

### Analogía

Una API es **el proveedor de ingredientes de la taquería**. No entras a su cocina ni a su almacén: hay un mostrador (el endpoint) con un catálogo (la documentación), pides el platillo exacto (la URL con sus parámetros) y te entregan un paquete estandarizado (el JSON) — siempre con el mismo formato, aunque el contenido cambie. Tú no sabes cómo consiguieron el suadero: sabes que al pedir 'search.php?s=taco' te llega un paquete con la clave `meals` y adentro los platillos. Confías en el empaque, no en la cocina del proveedor.

### Cómo se ve en la práctica

Paso a paso, terminas con una sección 'Tacos del mundo' alimentada por una API real:

1. **Recon:** abre `https://www.themealdb.com/api/json/v1/1/search.php?s=taco` en una pestaña nueva. Lo que ves es JSON crudo. Identifica la clave `meals`, y dentro de cada platillo, `strMeal` (nombre) y `strMealThumb` (imagen).
2. Pega el prompt de "Díselo a la IA".
3. **Verifica el código:** busca la URL exacta, `res.json()` y que la condición de vacío revise `!datos.meals || datos.meals.length === 0`. Si meals llegara `null`, sin esa condición tu página revienta (adelanto de la m3-c15).
4. Recarga la página: las tarjetas de Tacos del mundo aparecen con foto y nombre.
5. **Juega con el endpoint:** cambia `s=taco` por `s=burrito` en el código, recarga y observa cómo cambia la sección entera sin tocar el render. Vuelve a `taco`.
6. Abre la consola (m3-b24) y prueba: `console.table(datos.meals)` — la estructura completa en tabla.
7. Si la página no muestra nada: abre la consola, mira el error, y pídele a la IA que lo corrija describiendo lo que viste. No edites a ciegas (m3-c13).

El corazón del render se ve así:

```js
const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=taco");
const datos = await res.json();

if (!datos.meals || datos.meals.length === 0) {
  contenedor.textContent = "Hoy no encontramos tacos del mundo";
} else {
  contenedor.innerHTML = datos.meals.map(function (platillo) {
    return `<article class="taco-mundo">
      <img src="${platillo.strMealThumb}" alt="${platillo.strMeal}">
      <h3>${platillo.strMeal}</h3>
      <p>${platillo.strArea}</p>
    </article>`;
  }).join("");
}
```

Lee el flujo: pides → desempacas → decides (vacío o éxito) → pintas. Cada paso es una línea que ya sabes leer.

### Díselo a la IA

> "Agrega a mi landing de Tacos El Volcán una sección 'Tacos del mundo' que consuma una API pública real. Usa TheMealDB con este endpoint: https://www.themealdb.com/api/json/v1/1/search.php?s=taco. Con fetch y async/await: desempaca con res.json(), revisa res.ok, y guarda el arreglo de platillos que viene en la clave meals. Pinta una tarjeta por platillo con la imagen (strMealThumb), el nombre (strMeal) y el país (strArea), reutilizando el estilo de las tarjetas del menú. Si meals llega vacío o null, muestra 'Hoy no encontramos tacos del mundo'. Si la petición falla, muestra un mensaje de error amable sin romper el resto de la página. No uses alert. Dame el archivo completo actualizado."

El prompt le da a la IA la URL exacta (paso que casi nadie hace y que evita que invente una), le dice dónde viven los datos en la respuesta (`meals`) y define qué mostrar en los casos raros.

### Ejercicios

1. **[opción múltiple]** Abres el endpoint de una API en el navegador y ves texto JSON. ¿Qué está pasando?
   - a) La API está fallando
   - b) Estás viendo los datos crudos que devuelve la API, tal cual viajan por internet ✔
   - c) El navegador está mostrando el código fuente de la API
   - d) Necesitas instalar un programa para leerlo

2. **[completar]** "Una API expone datos por internet a través de ____ (URLs); al abrir uno en el navegador ves la respuesta en formato ____."
   - Banco: `endpoints` · `JSON` · `tarjetas` · `HTML`
   - Respuesta: endpoints / JSON

3. **[qué hace]** ¿Qué imprime la consola?
   ```js
   const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=taco");
   const datos = await res.json();
   console.log(datos.meals[0].strMeal);
   ```
   - a) El nombre del primer platillo de la búsqueda ✔
   - b) Todo el JSON de la respuesta
   - c) El arreglo completo de platillos
   - d) Un error porque falta res.ok

4. **[relacionar]** Une cada pieza con lo que es:
   - Endpoint ↔ La URL donde vive el dato
   - meals ↔ La clave del JSON que guarda el arreglo de platillos
   - strMealThumb ↔ La URL de la imagen del platillo
   - `res.json()` ↔ Convierte la respuesta en datos

5. **[verdadero/falso]** "Todas las APIs públicas requieren una clave (API key) para funcionar."
   - Respuesta: FALSO — muchas son abiertas y sin clave, como TheMealDB y JSONPlaceholder de esta práctica; otras — pagos, mapas — sí piden una llave. Se confirma en la documentación.

---

## C15 — Los tres estados de toda interfaz: cargando, vacío, error

### Concepto

Todo bloque de interfaz que muestra datos vive, en cada momento, en uno de estos estados — y el buen director los diseña todos:

- **Cargando** — los datos todavía no llegan. El usuario debe saber que la página está trabajando, no congelada. Un mensaje ('Cargando tacos...') o un esqueleto visual.
- **Éxito** — los datos llegaron y se pintan. Es el estado donde tu página ya pasa el 90% del tiempo.
- **Vacío** — la respuesta llegó, es válida, pero trae cero resultados: una búsqueda sin coincidencias, un historial sin pedidos. **No es un error.** Es una respuesta correcta con la lista vacía — y la interfaz debe decir algo útil y dar un camino a seguir ('No encontramos tacos con esos filtros' y una sugerencia).
- **Error** — la petición falló: red caída, servidor 500, URL mal escrita. Aquí sí es un fallo: mensaje claro y un botón de **Reintentar** que vuelva a intentar (m3-b22).

La regla de oro: **el usuario nunca debe quedarse sin saber qué pasa**. Una pantalla en blanco mientras carga o cuando falla es el peor estado de todos — peor que un error bien comunicado. El nombre de estos tres estados es lenguaje de industria: si lo reconoces, ya puedes leer discusiones de equipos de producto y pedirle a la IA exactamente lo que quieres. Lo montarás en tu página en la m3-c16, así que hoy la misión es reconocer los estados y saber pedirlos por su nombre.

### Analogía

Son los tiempos de **la comanda en la taquería**. Pides tu orden y el taquero te dice 'ahorita mismo' — ese es el estado **cargando**: sabes que el trabajo está en camino. Llega el plato a tu mesa: **éxito**. 'Se nos acabó el suadero' — eso es el **vacío**: no es un error, es una respuesta válida con cero resultados, y el buen taquero te sugiere el pastor para que no te vayas sin comer. Y si la cocina se cae, el dueño no se esconde: te dice 'la parrilla falló, dame dos minutos' — **error** con reintento. El taquero que te deja parado sin decirte nada pierde al cliente; la interfaz que se queda en blanco pierde al usuario.

### Cómo se ve en la práctica

El mismo bloque de datos con los tres estados, en un solo flujo — este patrón ya lo rozaste en m3-b22, hoy lo nombras con precisión:

```js
const contenedor = document.querySelector("#tacos-del-mundo");

async function cargarTacos() {
  contenedor.textContent = "Cargando tacos del mundo...";   // 1. CARGANDO

  try {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=taco");
    if (!res.ok) throw new Error("Servidor respondió " + res.status);

    const datos = await res.json();

    if (!datos.meals || datos.meals.length === 0) {
      contenedor.textContent =
        "Hoy no encontramos tacos del mundo. Prueba la sección del menú.";  // 2. VACÍO
    } else {
      contenedor.innerHTML = renderTacos(datos.meals);   // ÉXITO
    }
  } catch (error) {
    contenedor.innerHTML =
      "<p>No pudimos cargar los tacos del mundo.</p>" +
      "<button onclick=\"cargarTacos()\">Reintentar</button>";  // 3. ERROR
  }
}

cargarTacos();
```

Recorre la historia: el contenedor empieza en **cargando**. Si todo sale bien, el `if` decide entre **vacío** y **éxito** según lo que traiga la respuesta. Si algo falla (`!res.ok` o un fallo de red), el `catch` deja el **error** en pantalla con su botón de Reintentar, que llama a la misma función para volver a empezar (m3-b6). Solo uno de los estados se muestra a la vez — y el usuario nunca ve una pantalla muda.

Truco de reconocimiento para revisar el código de la IA: busca las tres marcas. **El texto de cargando** antes del `fetch`, **la condición de vacío** (`.length === 0` o `!datos.algo`) después de desempacar, y **el `catch`** con su mensaje. Si una de las tres no está, pídelo por su nombre.

### Díselo a la IA

> "La sección de datos de mi landing de Tacos El Volcán solo pinta cuando todo sale bien. Agrega los tres estados por su nombre: 1) cargando — mientras espera la respuesta, muestra 'Cargando tacos del mundo...' en el contenedor; 2) vacío — si la respuesta llega válida pero sin datos, muestra un mensaje amable distinto del error, con una sugerencia; 3) error — si res.ok es falso o hay un fallo de red, muestra 'No pudimos cargar los tacos del mundo' con un botón de Reintentar que llame a la función de nuevo. Asegúrate de que solo uno de los tres se muestre a la vez. No uses alert. Dame el archivo completo actualizado."

Pedir los estados 'por su nombre' es exactamente el lenguaje de industria: la IA no tiene que adivinar que quieres estados, solo ejecutarlos. En la m3-c16 vas a pulir los tres estados hasta que se vean profesionales.

### Ejercicios

1. **[opción múltiple]** El buscador de la m3-c12 no encuentra nada y muestra 'No encontramos tacos con esos filtros'. ¿Qué estado es?
   - a) Error
   - b) Vacío ✔
   - c) Cargando
   - d) Éxito

2. **[relacionar]** Une cada estado con lo que muestra:
   - Cargando ↔ El usuario espera: 'Cargando tacos...'
   - Éxito ↔ Los datos llegaron y se pintan
   - Vacío ↔ Respuesta válida sin resultados: mensaje con sugerencia
   - Error ↔ Algo falló: mensaje claro con Reintentar

3. **[completar]** "El estado ____ no es un error: es una respuesta ____ que trae cero resultados."
   - Banco: `vacío` · `válida` · `lenta` · `cargando`
   - Respuesta: vacío / válida

4. **[verdadero/falso]** "Si una interfaz se queda en blanco mientras carga o cuando falla, el usuario no debería enterarse de qué pasó."
   - Respuesta: FALSO — la interfaz debe estar siempre en un estado y comunicarlo; la pantalla muda es el peor estado de todos.

5. **[qué hace]** La respuesta de la API es válida pero datos está vacío. ¿Qué se muestra en pantalla?
   ```js
   if (datos.length === 0) {
     contenedor.textContent = "Se nos acabó el suadero. Prueba el pastor.";
   } else {
     contenedor.innerHTML = renderTacos(datos);
   }
   ```
   - a) El mensaje 'Se nos acabó el suadero. Prueba el pastor.' ✔
   - b) La lista de tacos renderizada
   - c) Un error en rojo con Reintentar
   - d) El contenedor queda en blanco

---

## C16 — PRÁCTICA: manejar los tres estados

### Concepto

La teoría de la m3-c15 ya está montada: tu landing tiene los tres estados (cargando, vacío y error) en la sección 'Tacos del mundo'. Hoy los pones a prueba. Un director no reza para que los estados funcionen: **rompe la página a propósito** para verlos aparecer. Cada estado se fuerza de una manera distinta:

- **Cargando** — se ve mientras pides los datos, pero con tu internet vuela y no alcanzas a verlo. Lo haces visible con una red lenta.
- **Vacío** — cambias el endpoint a una búsqueda que no devuelve nada, o filtras a cero resultados.
- **Error** — apagas la red (Offline) o escribes mal la URL del endpoint.

Regla de director: **si no puedes reproducir un estado, no sabes si existe** — y lo que no está probado no está hecho. Hoy el orden es: forzar cada estado, confirmar el mensaje correcto y pulir su apariencia para que se vea profesional.

### Analogía

Es **el simulacro de incendio de la taquería**. Nadie espera a que la cocina se incendie de verdad para descubrir que el extintor está vacío: se hace el simulacro un martes a propósito, con el restaurante vacío, y se verifica que todos saben salir y que el extintor dispara. Hoy apagas la página: desconectas la red, le das un endpoint sin resultados, la pones a cargar en cámara lenta. El día que la API real se caiga — y algún día se cae — tus estados ya estarán entrenados, y el usuario jamás verá una pantalla muda.

### Cómo se ve en la práctica

Hoy no escribes funciones nuevas: **pruebas y pules**. Abre tu landing de Tacos El Volcán y sigue el orden:

1. **Camino feliz:** recarga normal y verifica el estado **éxito**: las tarjetas de Tacos del mundo aparecen (m3-c14).
2. **Fuerza el vacío:** en el código cambia `s=taco` por `s=nadita` en la URL del endpoint, recarga y confirma el mensaje amable con sugerencia — distinto del error. Vuelve a `s=taco`.
3. **Fuerza el error:** abre DevTools (F12), ve a la pestaña **Network**, marca **Offline** y recarga. Debe aparecer el mensaje de error con su botón **Reintentar**. Desmarca Offline, haz clic en Reintentar y confirma que recupera los datos.
4. **Fuerza el cargando:** en Network cambia la velocidad a **Slow 3G** y recarga: ahora sí alcanzas a ver 'Cargando...' antes de las tarjetas. Restaura la velocidad normal.
5. **Pule:** pega el prompt de "Díselo a la IA" para que los tres estados se vean profesionales, cada uno con su clase CSS y un spinner para el cargando.
6. **Regla final:** recarga una última vez y confirma que solo *uno* de los tres estados se muestra a la vez (m3-c15).

Si algún estado no aparece cuando lo fuerzas, no lo toques a ciegas: describe lo que viste a la IA y pídele que lo corrija (m3-c13).

### Díselo a la IA

> "Mi landing de Tacos El Volcán ya tiene los tres estados de la sección 'Tacos del mundo' (cargando, vacío y error), pero se ven planos y genéricos. Déjalos profesionales: 1) cargando — un mensaje claro con un indicador visual simple (un spinner con CSS puro, sin librerías); 2) vacío — un mensaje amable distinto del error, con una sugerencia y un botón para recargar la sección; 3) error — mensaje claro con botón Reintentar que vuelva a llamar la función. Dale a cada estado su propia clase CSS, bien espaciado y coherente con la paleta rojo ladrillo y crema. Asegúrate de que solo uno de los tres se muestre a la vez. No uses alert. Dame el archivo completo actualizado."

La práctica de forzar los estados te dio la evidencia de qué faltaba; este prompt la convierte en instrucciones precisas. Pedir el spinner 'con CSS puro' evita que la IA agregue una librería entera para un adorno.

### Ejercicios

1. **[opción múltiple]** Abres DevTools, en Network marcas Offline y recargas. ¿Qué estado de la sección 'Tacos del mundo' deberías ver?
   - a) Cargando
   - b) Vacío
   - c) Error ✔
   - d) Éxito

2. **[completar]** "Para probar el estado vacío cambias el endpoint a una búsqueda sin ____; si aparece el mensaje con ____, el estado está bien separado del error."
   - Banco: `resultados` · `sugerencia` · `errores` · `imágenes`
   - Respuesta: resultados / sugerencia

3. **[verdadero/falso]** "Si no puedes reproducir un estado en tu máquina, lo más seguro es asumir que funciona igual para los usuarios reales."
   - Respuesta: FALSO — si no lo viste funcionar, no lo viste: cada estado se fuerza y se prueba; lo que no se prueba es lo que se rompe el día menos esperado.

4. **[qué hace]** El endpoint existe y responde 200, pero la búsqueda no trae platillos. ¿Qué se muestra en pantalla?
   ```js
   async function cargarTacos() {
     contenedor.textContent = "Cargando...";
     try {
       const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=nadita");
       if (!res.ok) throw new Error("falló");
       const datos = await res.json();
       if (!datos.meals || datos.meals.length === 0) {
         contenedor.textContent = "Hoy no hay tacos del mundo. Prueba el menú.";
       } else {
         contenedor.innerHTML = renderTacos(datos.meals);
       }
     } catch (error) {
       contenedor.textContent = "No pudimos cargar.";
     }
   }
   ```
   - a) 'Cargando...'
   - b) 'Hoy no hay tacos del mundo. Prueba el menú.' ✔
   - c) 'No pudimos cargar.'
   - d) Las tarjetas de tacos del mundo

5. **[relacionar]** Une cada estado con cómo se fuerza:
   - Vacío ↔ Cambia el endpoint a una búsqueda sin resultados
   - Error ↔ Marca Offline en DevTools
   - Cargando ↔ Red lenta (Slow 3G) al recargar
   - Éxito ↔ Recarga normal con internet

---

## C17 — Diseño desde referencia: darle una imagen a la IA

### Concepto

Decirle a la IA 'hazla moderna' o 'que se vea bonita' es apostar: tu 'moderno' no es el suyo. **Diseño desde referencia** es darle a la IA algo que ver: la URL de un sitio que te gusta, o una imagen (screenshot) subida directamente. La referencia transfiere lo que los adjetivos destrozan — colores, tipografías, espaciado, distribución.

Tienes dos formas de pasarla:

- **Por URL** — pegas el enlace del sitio de referencia en el prompt y varios asistentes lo abren y lo analizan.
- **Por imagen** — subes un screenshot (del sitio, de un menú, de un cartel, de una fachada) y el asistente lo lee como imagen.

La regla de oro: **referencia de estilo, no de contenido**. No quieres que copie los textos ni las fotos del sitio de referencia — quieres que copie su lenguaje visual. La referencia responde la pregunta del estilo del brief (m3-c1) con evidencia en vez de opinión. Y antes de pedir el rediseño, pídele que te diga qué extrajo: paleta en HEX, tipografías, espaciado. Si lo nombró bien, lo va a aplicar bien.

### Analogía

Es **probarle la salsa al chef en vez de describírsela**. Decir 'un toque ahumado, picante medio, con un dulzor sutil' es una apuesta: el chef imaginó algo distinto de lo que tú probaste. Ponerle el platillo enfrente y decirle 'así lo quiero' es comunicación instantánea. La IA no puede probar salsas, pero sí puede ver un sitio o una imagen y extraer de ahí su paleta, su letra y su ritmo. Tú eres el que lleva la muestra al chef.

### Cómo se ve en la práctica

Antes de abrir el chat, haz tu **receta de la referencia**: elige un sitio que te guste y escribe 3-4 cosas concretas que te gustan de él. Nada de 'me gusta todo': cosas nombrables.

```
RECETA DE REFERENCIA — [nombre del sitio]
1. Paleta: fondo crema, acentos verde oscuro.
2. Tipografía: títulos gruesos tipo cartel.
3. Menú en grid de 3 columnas con tarjetas.
4. Botón grande y redondeado en cada tarjeta.
```

Con eso en la mano:

1. Sube el screenshot o pega la URL de la referencia en el chat.
2. Pide el primer paso de verificación: 'dime qué extrajiste de esta referencia — paleta en HEX, tipografías, espaciados' *antes* de tocar código.
3. Compara su lista contra tu receta: si faltó algo, señálalo ('no mencionaste el grid de 3 columnas').
4. Recién ahí pega el prompt de "Díselo a la IA" para el rediseño.

Ese paso de 'nómbrame lo que viste' es el que separa a quien adivina de quien dirige: verificas la lectura de la IA antes de que toque tu código.

### Díselo a la IA

> "Te voy a pasar una referencia visual para rediseñar mi landing de Tacos El Volcán. Primero, sin tocar mi código: dime qué extrajiste de la referencia — paleta de colores en HEX, tipografías, espaciados y cómo distribuye las secciones. Espera a que yo confirme. Después rediseña mi landing con ese lenguaje visual: misma sensación y distribución, pero con mi contenido (nombre, eslogan, menú de 6 tacos con precios, horario, dirección y botón de WhatsApp). No copies los textos, productos ni fotos de la referencia. Mantén la identidad de mi taquería: rojo ladrillo y crema si el contraste lo permite, o adapta la paleta para que siga viéndose mía. Dame el archivo completo actualizado."

Fíjate en la estructura del prompt: primero extraer y esperar confirmación, después rediseñar. Ese 'espera a que yo confirme' es el control del director — la IA no avanza hasta que tú verificaste que leyó bien la referencia.

### Ejercicios

1. **[opción múltiple]** Le pides a la IA 'hazla moderna' y el resultado no se parece a lo que imaginabas. ¿Cuál es la causa?
   - a) La IA no sabe diseñar
   - b) Los adjetivos son subjetivos: le diste una opinión, no una referencia ✔
   - c) Necesitas otro plan de pago
   - d) Le faltaba más texto de explicación

2. **[relacionar]** Une cada tipo de referencia con lo que es:
   - URL de un sitio ↔ Referencia que la IA abre y analiza
   - Screenshot subido ↔ Referencia en imagen que la IA lee
   - Paleta en HEX ↔ Colores exactos verificables
   - 'Moderno' o 'bonito' ↔ Adjetivos subjetivos que no transfieren estilo

3. **[completar]** "La referencia transfiere el ____ visual: colores, tipografías y ____. El contenido — textos y fotos — es tuyo."
   - Banco: `lenguaje` · `espaciado` · `código` · `dominio`
   - Respuesta: lenguaje / espaciado

4. **[verdadero/falso]** "Una referencia bien usada implica que la IA copie también el contenido del sitio de referencia."
   - Respuesta: FALSO — la referencia es de estilo, no de contenido: se copia el lenguaje visual, no los textos ni productos del otro sitio.

5. **[ordenar]** Ordena el flujo para diseñar desde referencia:
   - Desordenado: `Pides el rediseño con tu contenido` · `Eliges un sitio que te gusta y anotas 3-4 cosas concretas` · `Verificas su lista contra tus notas` · `Subes screenshot o pegas la URL en el chat` · `Pides que nombre la paleta y tipografías extraídas`
   - Respuesta: Eliges y anotas → Subes la referencia → Pides que nombre lo extraído → Verificas su lista → Pides el rediseño

---

## C18 — PRÁCTICA: replicar la estructura de un sitio que te gusta

### Concepto

Ayer viste la teoría (m3-c17); hoy la ejecutas. Elegiste un sitio que te gusta y hoy copias su **estructura** — el esqueleto, no el contenido ni el estilo. Estructura es el orden y tipo de secciones: header, hero, menú en grid, testimonios, footer — y cómo se distribuyen. Dos sitios pueden compartir el mismo esqueleto y verse completamente distintos (el brief de la m3-c1 te dio el método; hoy el brief se apoya en algo real que puedes señalar).

El método tiene tres pasos: **inventariar** (escribes las secciones de arriba a abajo), **mapear** (decides cuáles de tus secciones ya existen y cuáles cambian de lugar) y **replicar** (pasas referencia + inventario a la IA y verificas). El inventario es la parte que casi nadie hace — y es la que te da el control: si lo escribiste tú, sabes exactamente qué verificar cuando la IA termine.

### Analogía

Es **pedirle los planos al vecino para tu casa**. No vas a copiar sus muebles (contenido) ni su pintura (estilo): copias que la recámara dé al oriente, que la cocina esté junto al comedor y que la entrada tenga escalones. Con los mismos planos, dos familias arman casas totalmente distintas. La estructura es de todos; el contenido y el estilo son tuyos. Hoy le pides a la IA que levante tu landing siguiendo los planos del sitio que te gusta — con tus muebles y tu pintura.

### Cómo se ve en la práctica

Hoy terminas con tu landing reestructurada. Pasos:

1. **Elige la referencia:** usa el sitio que elegiste en la m3-c17 (si es una taquería o un restaurante, mejor: la estructura va a encajar casi directo).
2. **Inventaría su esqueleto** de arriba a abajo, así:

```
ESTRUCTURA DE [SITIO]:
1. Header fijo: logo a la izquierda, navegación a la derecha.
2. Hero: foto grande, titular arriba, botón de WhatsApp.
3. Menú: grid de 3 columnas con tarjetas.
4. Testimonios: 3 citas en fila.
5. Footer: 3 columnas (horario, dirección, redes).
```

3. **Mapea:** compara contra tu landing. Tu header y tu hero ya existen (m3-c2); tu menú ya es un grid de tarjetas que se pinta desde datos (m3-c10); te faltan los testimonios y el footer de 3 columnas.
4. Pega el prompt de "Díselo a la IA" con tu inventario.
5. **Verifica:** recarga y compárala con tu lista, sección por sección, de arriba a abajo. Si falta una sección o cambió el orden, señálalo.
6. **Revisa el contenido:** confirma que tus textos y tu menú siguen intactos — se copió estructura, no contenido (m3-c13 para lo que no entiendas del código).

### Díselo a la IA

> "Voy a reestructurar mi landing de Tacos El Volcán siguiendo la referencia: [URL del sitio]. Replica únicamente su ESTRUCTURA: el orden y tipo de secciones y cómo distribuye cada una — header con logo y navegación, hero con imagen grande y botón, menú en grid de 3 columnas, testimonios en fila, footer de 3 columnas. No copies sus textos, productos, fotos ni colores. Usa mi contenido: nombre, eslogan, menú de 6 tacos con precios, horario, dirección y botón de WhatsApp. Mantén mi estilo (rojo ladrillo y crema). Antes de tocar código, devuélveme la lista de secciones en el mismo orden para confirmar. Después dame el archivo completo actualizado."

El prompt separa estructura de contenido explícitamente ('no copies sus textos... usa mi contenido') porque la IA tiende a mezclarlos. Y de nuevo el doble paso: primero confirma el plan, después ejecuta.

### Ejercicios

1. **[opción múltiple]** Al replicar la estructura de un sitio, ¿qué es exactamente lo que copias?
   - a) Sus textos y fotografías
   - b) El orden, tipo y distribución de sus secciones ✔
   - c) Su dominio y servidor
   - d) Sus colores y tipografías exactos

2. **[ordenar]** Ordena el método de la práctica:
   - Desordenado: `Verificas sección por sección` · `Eliges un sitio de referencia` · `Pasas referencia + inventario a la IA` · `Inventarías su esqueleto de arriba a abajo` · `Mapeas sus secciones contra tu landing`
   - Respuesta: Eliges la referencia → Inventarías el esqueleto → Mapeas contra tu landing → Pasas referencia + inventario → Verificas sección por sección

3. **[relacionar]** Une cada paso del método con lo que hace:
   - Inventariar ↔ Escribir las secciones del sitio de arriba a abajo
   - Mapear ↔ Comparar el esqueleto con tu landing actual
   - Replicar ↔ Pasar referencia + inventario a la IA
   - Verificar ↔ Revisar sección por sección contra tu lista

4. **[completar]** "Se copia la ____ del sitio de referencia, pero el ____ y el estilo son tuyos."
   - Banco: `estructura` · `contenido` · `foto` · `servidor`
   - Respuesta: estructura / contenido

5. **[verdadero/falso]** "Si la IA mezcla el contenido de la referencia con el tuyo, la culpa es de la IA y no tienes cómo evitarlo."
   - Respuesta: FALSO — se evita pidiéndolo en el prompt ('no copies textos ni fotos, usa mi contenido') y verificando después que el contenido siga intacto.

---

## C19 — Componentes: pensar en piezas reutilizables

### Concepto

Ya usas componentes sin llamarlos así. Desde la m3-c10, tu menú se pinta desde el arreglo `tacos` con `map`; en la m3-c14 hiciste `renderTacos` para las tarjetas de Tacos del mundo. Un **componente** es exactamente eso, con nombre: una pieza de interfaz reutilizable — una función que recibe los datos de un elemento y devuelve su HTML (m3-b14). Datos entran, HTML sale.

La diferencia que hoy aprendes a nombrar: en la m3-c10 el molde vivía escondido *adentro* del `map` (una línea larga); convertirlo en una función nombrada — `renderTaco(taco)` — lo vuelve una pieza aparte que puedes reusar y editar en un solo lugar. ¿Por qué importa?

- **Escribes una vez** — la tarjeta existe en un solo lugar, no repetida ni incrustada en cada render.
- **Cambias una vez** — modificas el molde y se actualiza en todos lados a la vez (la m3-c11 te dio la idea con los datos; esto es la misma idea con la pieza visual).
- **Menos lugares donde romperse** — un error de tarjeta se corrige en un punto, no en seis.
- **Piensas en piezas** — tu landing deja de ser un muro de HTML y se vuelve un catálogo de moldes que puedes mover y reusar (m3-c20 lo pondrá en práctica).

Y esto no es un truco de este curso: los frameworks de la m3-c24 (React y compañía) existen para hacer exactamente esto a escala industrial. Si entiendes la tarjeta del menú como componente, ya entendiste la mitad de React.

### Analogía

Un componente es **la tortilla de la taquería**. La cocina no arma cada tortilla a mano para cada orden: hay un molde estándar, y cada comanda le pone su relleno. El taco al pastor y el de suadero comparten la misma tortilla — mismo molde, distinto relleno. Si mañana el dueño decide tortillas más grandes, cambia el molde una vez y todas las órdenes salen con la nueva tortilla; nadie rehace taco por taco. Tu `renderTaco(taco)` es ese molde: cámbialo una vez y los seis tacos del menú se actualizan sin que toques sus rellenos.

### Cómo se ve en la práctica

Compara las dos formas del mismo menú. Sin componente, el molde vive dentro del `map` (m3-c10):

```js
// SIN componente — el molde escondido en el map
menuHTML = tacos.map(function (t) {
  return `<article class="menu-card">
    <h3>${t.nombre}</h3>
    <p>${t.descripcion}</p>
    <p>$${t.precio}</p>
  </article>`;
}).join("");
```

Con componente, el molde sale del `map` y recibe nombre:

```js
// CON componente — un molde nombrado y reutilizable
function renderTaco(taco) {
  return `<article class="menu-card">
    <h3>${taco.nombre}</h3>
    <p>${taco.descripcion}</p>
    <p>$${taco.precio}</p>
  </article>`;
}

menuHTML = tacos.map(renderTaco).join("");
```

Lee la segunda por bloques (m3-c3): `map` llama a `renderTaco` por cada elemento del arreglo (m3-b12), cada llamada devuelve el HTML de su tarjeta, y `.join("")` une todas en un solo texto que se pinta con `innerHTML` (m3-b4). La pantalla no cambia en nada — pero ahora la tarjeta tiene dirección: si mañana cambias `menu-card` en la función, cambian las seis tarjetas sin tocar el `map`. Esa es la jugada que en la m3-c20 vas a aplicar a todo tu sitio.

### Díselo a la IA

> "Mi landing de Tacos El Volcán pinta el menú desde el arreglo tacos, pero el HTML de la tarjeta está incrustado dentro del map y las tarjetas de 'Tacos del mundo' (m3-c14) repiten una estructura parecida por separado. Extrae la tarjeta del menú a una función componente renderTaco(taco) que reciba un objeto con nombre, descripción y precio y devuelva el HTML; pinta el menú con .map(renderTaco). Deja también las tarjetas de 'Tacos del mundo' como su propio componente. El resultado debe verse idéntico en pantalla. No cambies contenido ni estilos, solo organiza el código en piezas. Dame el archivo completo actualizado."

Nota cómo el prompt describe el componente por su forma ('recibe un objeto... devuelve el HTML') en vez de pedir 'usa componentes' a secas. Tú no memorizas la sintaxis: describes el molde y la IA lo escribe (reconocer, no memorizar — m3-c13).

### Ejercicios

1. **[qué hace]** ¿Qué produce este código?
   ```js
   function renderTaco(taco) {
     return `<article class="menu-card">${taco.nombre}</article>`;
   }
   const html = tacos.map(renderTaco).join("");
   ```
   - a) Un solo taco con datos fijos
   - b) Una tarjeta HTML por cada taco del arreglo, unidas en un solo texto ✔
   - c) Los tacos ordenados por precio
   - d) Un error porque falta un ciclo for

2. **[opción múltiple]** Tu menú se muestra en la landing y en una versión móvil separada. Cambias el estilo de la tarjeta dentro del componente renderTaco. ¿Qué pasa?
   - a) Solo cambia en la landing
   - b) Cambia en todos lados donde se usa el componente ✔
   - c) Hay que duplicar el cambio
   - d) No cambia nada hasta reescribir el arreglo

3. **[completar]** "Un componente recibe los ____ del taco y devuelve su ____; el mismo molde, distinto relleno."
   - Banco: `datos` · `HTML` · `estilos` · `prompt`
   - Respuesta: datos / HTML

4. **[relacionar]** Une cada pieza con su función:
   - Componente ↔ Pieza de interfaz reutilizable
   - `renderTaco(taco)` ↔ Recibe los datos de un taco y devuelve el HTML de su tarjeta
   - `.map()` ↔ Llama al componente por cada elemento
   - `.join("")` ↔ Une las tarjetas en un solo texto

5. **[verdadero/falso]** "Si escribes el HTML de la tarjeta a mano seis veces y mañana cambia el diseño, corrigen en seis lugares."
   - Respuesta: VERDADERO — por eso el componente: el molde se cambia una vez y se actualiza en todos lados (lo practicarás en la m3-c20).

---

## C20 — PRÁCTICA: convertir tu sitio en componentes

### Concepto

La teoría de la m3-c19 ya la tienes; hoy conviertes tu landing de Tacos El Volcán en componentes de verdad. La meta: **ninguna pieza de interfaz queda escondida ni repetida**. Donde el mismo molde aparezca más de una vez, se vuelve función componente y se pinta con `.map` (m3-b12).

El criterio de éxito no es visual: **la página debe verse exactamente igual**. Lo que cambia es invisible y vale oro — el mantenimiento. La prueba final es la del 'cambio único': pides un cambio pequeño en la tarjeta (una insignia, un borde) y aparece en todas las tarjetas a la vez. Ese es el momento en que el componente demuestra que funciona.

¿Qué convertimos? El menú (ya pinta desde datos, m3-c11, pero su molde puede salir del `map`), las tarjetas de Tacos del mundo (ya son componente desde la m3-c14) y cualquier bloque que repita estructura — header, footer, lo que se repita. Piensa en piezas (m3-c19): tu landing es un catálogo de moldes, no un muro de HTML.

### Analogía

Es **abrir la tortilladora en la taquería**. Antes, cada orden se armaba a mano, bloque por bloque; hoy, un solo molde produce la tortilla estándar y cada comanda solo decide el relleno. Cuando la cocina se modernizó así, nadie notó la diferencia en el sabor — pero la cocina se volvió mantenible: para hacer tortillas más grandes, cambias la tortilladora una vez, no cada orden. Tu landing pasa por lo mismo: se ve igual, pero a partir de hoy, cambiar una pieza cambia todo lo que la usa.

### Cómo se ve en la práctica

Paso a paso, terminas con una landing hecha de piezas:

1. **Recon (m3-c19):** abre tu landing y busca los moldes. El menú se pinta desde `tacos` (m3-c11), pero su tarjeta puede estar incrustada en el `map` o repetida. Anota también header, footer y tarjetas de Tacos del mundo.
2. **Inventaría los datos:** ¿qué necesita cada tarjeta? Nombre, descripción y precio — los 'inputs' del componente. Tus tacos ya viven en `datos.js` como `window.TACOS` (m3-c11): el componente es el molde que los toma.
3. Pega el prompt de "Díselo a la IA".
4. **Verifica visual:** recarga y confirma que se ve idéntico. Si algo cambió de aspecto, descríbelo a la IA y que lo corrija (m3-c13) — el refactor no debe alterar lo que ve el cliente.
5. **Prueba del cambio único:** pide un cambio pequeño en el componente — 'agrega una insignia RECOMENDADO a la tarjeta del menú'. Recarga: si aparece en las seis tarjetas desde un solo cambio, el componente funciona (m3-b25 te deja pausar y ver el arreglo si algo no cuadra).
6. **Verifica los datos:** confirma que el contenido del menú (nombres y precios) quedó intacto después del refactor.

Ese paso 5 es la cereza: no es un adorno, es la evidencia de que convertiste tu sitio en componentes.

### Díselo a la IA

> "Mi landing de Tacos El Volcán ya usa componentes para las tarjetas, pero quiero que revises todo el archivo y elimines cualquier pieza de interfaz que quede escondida o repetida: si el mismo molde aparece más de una vez (menú, header, footer, tarjetas), conviértelo en una función componente que reciba sus datos y devuelva el HTML. Guarda el contenido del menú en el arreglo de datos.js y pinta con .map. La pantalla debe verse exactamente igual después del cambio — no cambies contenido ni estilos, solo organiza el código en piezas. Al terminar, dime cuántos componentes quedaron y qué repeticiones eliminaste. Dame el archivo completo actualizado."

Dos detalles que hacen fuerte este prompt: pedir el *reporte final* ('dime cuántos componentes quedaron') te da la evidencia de qué se hizo sin leer el archivo completo, y la condición 'la pantalla debe verse igual' fija la regla de oro del refactor.

### Ejercicios

1. **[ordenar]** Ordena la práctica de hoy:
   - Desordenado: `Recargas y verificas que se vea idéntico` · `Anotas qué datos necesita cada tarjeta` · `Pruebas un cambio y lo ves en todos lados` · `Buscas los moldes repetidos en tu landing` · `Pides convertir las repeticiones en componentes`
   - Respuesta: Buscas los moldes → Anotas qué datos necesita cada tarjeta → Pides convertir las repeticiones en componentes → Recargas y verificas → Pruebas un cambio y lo ves en todos lados

2. **[opción múltiple]** Después del refactor, tu landing se ve exactamente igual que antes. ¿El cambio falló?
   - a) Sí, algo se rompió en silencio
   - b) No — verse idéntica es el resultado correcto; el beneficio está en mantener el código, no en el aspecto ✔
   - c) Hay que reiniciar el navegador
   - d) Significa que los componentes no se usaron

3. **[completar]** "La prueba del cambio único: modificas el ____ una vez y el cambio aparece en todas las tarjetas a la vez."
   - Banco: `componente` · `código` · `taco` · `estilo`
   - Respuesta: componente

4. **[verdadero/falso]** "Convertir tu sitio en componentes cambia la apariencia de tu página."
   - Respuesta: FALSO — el aspecto queda idéntico; lo que cambia es el mantenimiento: cada pieza se edita en un solo lugar.

5. **[relacionar]** Une cada pieza con su proyecto:
   - `renderTaco` ↔ Componente del menú de Tacos El Volcán
   - `renderTacos` ↔ Componente de las tarjetas de la API (m3-c14)
   - `.map()` ↔ Genera una tarjeta por elemento del arreglo
   - Insignia RECOMENDADO ↔ Cambio que se propaga a todas las tarjetas

---

## C21 — Herramientas de generación de UI: v0, Bolt, Lovable

### Concepto

Ya sabes dirigir a un LLM para maquetar desde el chat (todo este mes, con ChatGPT, Claude o Gemini). Pero existe una familia de herramientas pensadas **exclusivamente** para eso: las **herramientas de generación de UI**. No te dan un chat que escribe código y te lo pega en un bloque: te dan un taller donde escribes tu prompt, la herramienta genera la interfaz y te la muestra **en vivo** en una vista previa, la iteras con más prompts y al final exportas el código de un proyecto completo y estructurado.

Tres nombres que vas a oír (y vas a probar en la m3-c22):

- **v0** (de Vercel) — nació para generar interfaces con React y Tailwind (m3-b28 y m3-a11). Es la favorita del ecosistema Next.js y la que probamos mañana.
- **Bolt** (de StackBlitz) — no solo maqueta: puede correr el proyecto entero en la nube, backend incluido. Tú escribes, y la herramienta ejecuta y te enseña el resultado.
- **Lovable** — apunta a producto completo: en lenguaje natural generas apps con autenticación y base de datos, pensada para que el dueño del negocio arme su MVP sin equipo técnico.

Lo que importa entender: no compiten contra los LLMs que ya usas — **los usan por debajo**. El modelo sigue siendo el que habla; lo que cambia es el **entorno**: vista previa en vivo, código en archivos organizados en vez de un bloque de texto que pegas a mano, y un ciclo prompt → ver → corregir instantáneo. Tu prompt deja de ser de una sola pasada y se vuelve una conversación con la página enfrente.

Como director, tus habilidades viajan igual: el brief de la m3-c1, el vocabulario visual de la m3-c7 y los cambios quirúrgicos de la m3-c5 funcionan exactamente igual aquí. Cambia la herramienta, no el músculo.

### Analogía

Dirigir desde el chat es como **pedirle un platillo al chef por teléfono**: te lo describen, confías, y esperas a que llegue para ver si era eso. Con una herramienta de generación de UI es como **llevar la receta al restaurante y que el chef cocine frente a ti**: ves el platillo tomando forma en la barra, pruebas el caldo, le pides más sal y menos picante, y hasta te llevas la receta escrita en limpio (el código exportado). El chef es el mismo — cambia que ahora trabajas con el platillo enfrente, no con la descripción de un sueño.

### Cómo se ve en la práctica

Así se ve una sesión típica de v0, de principio a fin — esto es lo que vas a reconocer mañana:

```
PROMPT inicial:
  "Landing de una página para Tacos El Volcán,
   estilo cantina, rojo ladrillo y crema..."

     ↓ v0 genera la interfaz y la muestra en vivo

ITERACIÓN 1:
  "El menú en 3 columnas en escritorio y 1 en celular."

ITERACIÓN 2:
  "El botón de WhatsApp más grande y pegado arriba en celular."

     ↓ cuando te gusta: EXPORTAR

Se descarga un proyecto React con carpetas y archivos:
app/
├── page.jsx
├── layout.jsx
└── components/
    ├── Hero.jsx
    ├── Menu.jsx
    └── Footer.jsx
```

Reconoce la estructura: `components/` guarda las piezas (m3-c19) y cada archivo `.jsx` es un componente de React (m3-b28). El plan de la m3-c22: generas la interfaz con v0, y después adaptas ese diseño a tu `index.html` con tu asistente habitual. Los planes gratuitos de estas herramientas dan una cuota de generaciones al día — suficiente para la práctica; no pagues nada hoy.

### Díselo a la IA

> "Necesito elegir una herramienta de generación de UI para mi proyecto: [describe tu negocio en dos líneas]. Compara v0, Bolt y Lovable en una tabla: qué stack generan, si incluyen backend, qué tan fácil es para un principiante y qué límites tiene el plan gratuito. Recomiéndame una para mi caso y dame el primer prompt exacto que debo pegarle para arrancar."

Ese prompt te arma la comparación antes de que te enamores de una marca (m3-c1): con el veredicto y el prompt inicial listos, la práctica de mañana arranca sin fricción.

### Ejercicios

1. **[opción múltiple]** ¿Qué distingue a una herramienta de generación de UI (v0, Bolt, Lovable) de un chat LLM común?
   - a) No usa IA por debajo
   - b) Te muestra la interfaz en vivo y exporta un proyecto estructurado, con ciclo prompt → ver → corregir instantáneo ✔
   - c) Solo genera imágenes, no código
   - d) No acepta prompts en lenguaje natural

2. **[relacionar]** Une cada herramienta con su especialidad:
   - v0 ↔ Generada por Vercel, para interfaces con React y Tailwind
   - Bolt ↔ Corre el proyecto completo en la nube, backend incluido
   - Lovable ↔ Apps completas con autenticación y base de datos desde lenguaje natural

3. **[completar]** "Las herramientas de generación de UI usan los mismos ____ por debajo que tu chat habitual; lo que cambia es el ____: vista previa en vivo y código en un proyecto estructurado."
   - Banco: `LLMs` · `entorno` · `diseños` · `precio`
   - Respuesta: LLMs / entorno

4. **[verdadero/falso]** "Con una herramienta de generación de UI, el ciclo prompt → ver → corregir es instantáneo, así que tu prompt se vuelve iterativo en vez de una sola pasada."
   - Respuesta: VERDADERO — la vista previa en vivo convierte el prompt en conversación: escribes, ves y vuelves a escribir.

5. **[qué hace]** Terminaste tu sesión en v0 y exportaste. Esto es lo que descargaste. ¿Qué es?
   ```
   app/
   ├── page.jsx
   ├── layout.jsx
   └── components/
       ├── Hero.jsx
       ├── Menu.jsx
       └── Footer.jsx
   ```
   - a) Un error de compilación
   - b) El árbol de archivos de tu proyecto generado, con los componentes en components/ ✔
   - c) La vista previa de la página
   - d) El log de la consola del navegador

---

## C22 — PRÁCTICA: generar una interfaz con v0 y adaptarla

### Concepto

La meta de hoy es concreta: **generar una interfaz para Tacos El Volcán con v0 y adaptarla a tu landing**. No empezamos de cero: ya tienes el brief (m3-c1), el contenido (menú desde datos, formulario, botón de WhatsApp) y un diseño que ha evolucionado todo el mes. v0 te sirve como segundo par de ojos: una herramienta distinta que propone un diseño completo en segundos.

Un detalle que evita el susto: v0 genera el proyecto en **React** (m3-b28), y tu landing es HTML plano. La práctica no es "borrar tu landing": es **adaptar**. Tú tomas el diseño que v0 propuso y lo llevas a tu `index.html` con tu asistente habitual, conservando tus datos y tu lógica. El flujo completo: prompt inicial → iterar → exportar → adaptar → verificar.

Y un punto de director: tu trabajo aquí no es escribir React ni CSS. Es (1) dar un prompt claro, (2) iterar pidiendo cambios con nombre (m3-c5), (3) decidir cuándo el diseño ya está bueno y (4) verificar que, al adaptarlo, nada de tu contenido se rompió.

### Analogía

Es como **probar el menú del chef de la esquina antes de encargarlo en tu cocina**. No vas a mudarte a su restaurante: vas a comer un platillo de muestra, decidir cuáles de sus ideas te gustan (el acomodo, los colores, el tamaño del botón) y volver a tu cocina a prepararlo a tu manera, con tus ingredientes (tus datos y tu lógica). La muestra es del chef; el platillo es tuyo.

### Cómo se ve en la práctica

Sigue el orden y termina con el diseño de v0 adaptado en tu landing:

1. **Cuenta:** entra a v0.dev y regístrate con tu cuenta de Google o GitHub. El plan gratuito alcanza para esta práctica.
2. **Prompt inicial:** pega el prompt de la sección "Díselo a la IA". v0 genera la interfaz y la muestra en vivo.
3. **Itera:** pide 2 o 3 cambios concretos, uno por mensaje, con el vocabulario de la m3-c7: "el menú en grid de 3 columnas en escritorio y 1 en celular", "el botón de WhatsApp verde y que ocupe el ancho completo en móvil".
4. **Congela:** cuando el diseño te guste, busca el botón de *exportar/copiar código* y guárdalo en una carpeta `v0-export`. No lo mezcles todavía con tu landing.
5. **Adapta:** abre tu asistente habitual (ChatGPT, Claude o Gemini), pégale el código exportado y pídele que traduzca el diseño a tu `index.html` conservando tu contenido.
6. **Verifica:** recarga y compara contra la vista previa de v0. Confirma las tres cosas que no pueden romperse: el menú sigue pintándose desde `datos.js` (m3-c11), el formulario sigue conectado a WhatsApp (m3-c9) y el botón sigue abriendo `wa.me` (m3-c2).

Si al adaptar algo se rompe, no edites a ciegas: describe el daño a la IA y que lo corrija (m3-c13). La adaptación es de la piel; los datos y la lógica son el esqueleto.

### Díselo a la IA

> "Genera una landing de una sola página para la taquería 'Tacos El Volcán'. Contenido: nombre grande arriba, eslogan 'El sabor que hace temblar', menú con 6 tacos y sus precios, horario de 11 am a 11 pm, dirección, y un botón verde de WhatsApp. Estilo: rojo ladrillo y crema, tipografía gruesa estilo cantina, con buen espacio entre secciones. Que se vea bien en celular y en computadora. Primero muéstrame la vista previa, no el código."

Ese prompt lleva el brief de la m3-c1 completo y termina con "primero muéstrame la vista previa": la regla de la m3-c17 aplicada a v0 — ver antes de exportar.

### Ejercicios

1. **[ordenar]** Ordena el flujo de la práctica de hoy:
   - Desordenado: `Adaptas el diseño a tu index.html y verificas que nada se rompa` · `Iteras pidiendo 2 o 3 cambios concretos` · `Te registras en v0.dev` · `Exportas el código a una carpeta` · `Pegas el prompt del brief de Tacos El Volcán`
   - Respuesta: Te registras en v0.dev → Pegas el prompt del brief → Iteras pidiendo cambios → Exportas el código → Adaptas y verificas

2. **[opción múltiple]** v0 genera el proyecto en React, pero tu landing es HTML plano. ¿Cuál es el movimiento correcto?
   - a) Borrar tu landing y pegar el código de v0 tal cual
   - b) Tomar el diseño de v0 como referencia y pedirle a tu asistente habitual que lo adapte a tu index.html con tu contenido ✔
   - c) Renunciar al diseño de v0
   - d) Copiar a mano los textos de la vista previa

3. **[completar]** "En la práctica, el flujo con v0 es: prompt ____ → ver la vista previa en vivo → ____ con cambios con nombre → ____ el código."
   - Banco: `inicial` · `iterar` · `exportar` · `comprar`
   - Respuesta: inicial / iterar / exportar

4. **[verdadero/falso]** "Al adaptar el diseño de v0, tu menú debe seguir pintándose desde datos.js y el formulario debe seguir abriendo WhatsApp: solo cambia la piel, no el esqueleto."
   - Respuesta: VERDADERO — adaptar es llevar el diseño; los datos y la lógica (m3-c11 y m3-c9) se conservan intactos.

5. **[qué hace]** En tu sesión de v0 escribes esto como siguiente mensaje. ¿Qué es?
   ```
   El menú en grid de 3 columnas en escritorio y 1 en celular.
   ```
   - a) Un comando de terminal
   - b) Una iteración: un cambio visual concreto sobre la vista previa ✔
   - c) El contenido de datos.js
   - d) Un error de JavaScript

---

## C23 — Cuándo usar framework y cuándo basta HTML plano

### Concepto

En la m3-b27 viste qué es un framework y en la m3-b29 por qué Next.js vale la pena solo en ciertos casos. Hoy pones el criterio en orden: la pregunta no es "¿framework sí o no?" sino **"¿a qué escala mi proyecto lo merece?"**. Y la respuesta empieza por saber qué es HTML plano: tu landing de Tacos El Volcán — un `index.html`, un CSS y un JS, todo estático, sin procesos de compilación ni herramientas.

El diagnóstico se hace con cinco preguntas:

- **¿Cuántas vistas tiene?** Una página de una sola vista (landing) vive feliz en HTML plano. Varias páginas reales con rutas propias empujan al framework.
- **¿Hay estado que cambia en vivo?** Carrito, login, filtros que comparten datos entre pantallas. Ese es el terreno de React (m3-b28).
- **¿Los datos cambian y se comparten?** Si varias pantallas leen lo mismo y se actualizan juntas, el framework paga su costo.
- **¿El SEO importa?** Si tu negocio depende de aparecer en Google, ahí es donde entra Next.js (m3-b29). Una landing interna no lo necesita.
- **¿Voy a crecerlo?** Un proyecto que sabes que va a sumar pantallas y funciones crece mejor con la estructura desde el día uno.

La regla del director: **el framework es un préstamo, no una medalla**. No se adopta por prestigio ni porque "es lo moderno": se adopta cuando la complejidad que ahorra es mayor que la que agrega. Y agrega: más que instalar, más que aprender, más que mantener, y casi siempre una carga más pesada para el visitante (m3-c25).

Con IA dirigida, portar entre las dos opciones es barato — lo viste en la m3-c22 y lo harás en la m3-c24. Eso te libera: puedes arrancar simple y migrar cuando el proyecto lo pida, sin miedo a quedar atrapado.

### Analogía

Es la diferencia entre **el puesto de tacos y el restaurante con cocina central**. El puesto atiende un mostrador, un menú corto y una cocina a la vista: perfecto para lo que es, y cualquier equipo extra le estorba. El restaurante tiene cocina central, brigada de meseros y sistema de pedidos porque la operación lo exige. Nadie pone una cocina central en un puesto de la esquina — y nadie atiende un restaurante con un puesto plegable. La escala decide la cocina; la herramienta sigue a la operación, no al orgullo.

### Cómo se ve en la práctica

Este es el diagnóstico que vas a usar — guárdalo en tus notas:

```
¿ME CONVIENE FRAMEWORK?
□ ¿Más de una vista real (no solo secciones)?
□ ¿Estado que cambia en vivo y se comparte (carrito, login)?
□ ¿Datos en vivo que varias pantallas leen juntas?
□ ¿El SEO importa (vender, aparecer en Google)?
□ ¿Planeo crecerlo con más funciones?

2+ casillas marcadas → framework.
0-1 casillas → HTML plano. Revisa otra vez antes de seguir.
```

Pruébalo con tu propio proyecto: Tacos El Volcán es una landing de una vista, sin login, sin carrito, con datos estáticos (m3-c11) y sin SEO crítico por ahora. Resultado: 0-1 casillas → HTML plano es la respuesta correcta, y todo lo que construiste este mes lo demuestra. Ahora pruébalo con un negocio hipotético — "una tienda online con carrito, 12 páginas de productos y que vive de Google": 4 casillas → framework, sin discusión.

El veredicto no es eterno: cuando tu landing crezca (¿pedidos en línea? ¿perfiles de cliente?), re-corres el diagnóstico y migras con la IA a tu ritmo.

### Díselo a la IA

> "Voy a construir [describe tu proyecto: qué hace, cuántas vistas, si hay estado en vivo, si el SEO importa y si planeas crecerlo]. Llena conmigo el diagnóstico de framework y dime el veredicto entre HTML + JavaScript puro, React simple y Next.js. Explícame el porqué en tres líneas. Si me toca framework, dime qué archivos y dependencias pedirle a la IA para arrancar; si me toca HTML plano, dime qué NO debo agregarle para no complicar el proyecto."

El prompt llena el checklist contigo (en vez de que la IA adivine tu escala) y cierra con un consejo específico para cada veredicto: qué pedir si migras, y qué evitar si te quedas simple.

### Ejercicios

1. **[opción múltiple]** ¿Cuándo basta HTML plano para un proyecto web?
   - a) Cuando quiero usar la herramienta más popular
   - b) Cuando es una landing de pocas vistas, sin estado complejo ni SEO crítico ✔
   - c) Cuando la IA ya lo construyó
   - d) Nunca: todo proyecto moderno debe usar framework

2. **[relacionar]** Une la herramienta con su terreno natural:
   - HTML + JS puro ↔ Landing de una vista, sin estado ni SEO crítico
   - React simple ↔ Interfaz con estado en vivo, sin SEO multi-ruta
   - Next.js ↔ Varias rutas, SEO importante y datos que cambian

3. **[completar]** "La regla del director: el framework es un ____, no una ____: se adopta según la ____ del proyecto, no por moda."
   - Banco: `préstamo` · `medalla` · `escala` · `opinión`
   - Respuesta: préstamo / medalla / escala

4. **[verdadero/falso]** "Un framework siempre hace que tu sitio cargue más rápido que HTML plano."
   - Respuesta: FALSO — suele ser lo contrario: más JavaScript y herramientas que cargar (m3-c25). Se adopta por estructura y mantenimiento, no por velocidad.

5. **[ordenar]** Ordena el proceso para decidir tu herramienta:
   - Desordenado: `Cuentas las casillas marcadas` · `Rellenas el checklist de framework` · `Decides y arrancas con la herramienta elegida` · `Pides el veredicto a la IA con sus razones` · `Describes el proyecto: vistas, estado, datos, SEO, crecimiento`
   - Respuesta: Describes el proyecto → Rellenas el checklist → Cuentas las casillas → Pides el veredicto → Decides y arrancas

---

## C24 — PRÁCTICA: tu primer proyecto en React dirigido con IA

### Concepto

Hoy creas tu primer proyecto en **React** de verdad — dirigido por IA, claro. La teoría ya la tienes: componentes, props y estado (m3-b28), y los componentes los construiste a mano en la m3-c19 y la m3-c20, solo que con funciones que devolvían texto HTML. React es el mismo molde, a escala industrial: cada pieza es una función que devuelve su parte de la pantalla, y cuando el estado cambia, React repinta solo — olvídate del `querySelector` y del `innerHTML` a mano.

Para que un proyecto React funcione hace falta herramienta que lo prepare: **Vite**. Es el montador que crea el esqueleto del proyecto en segundos y levanta un servidor local para que veas tu página mientras trabajas. Los comandos los escribes en la terminal (m1-a5 y m1-a10), pero no los memorizas: reconoces qué hace cada paso, y la IA te acompaña en el proceso.

Tu papel hoy: **dirigir**. No escribes componentes: le das a la IA el contenido de tu landing, le pides que lo convierta en componentes de React, corres el proyecto y verificas. Al final vas a reconocer en el código las tres piezas de la m3-b28: la tarjeta del menú como componente que recibe props, el `map` que la repite, y — si algo cambia en vivo — el `useState`.

### Analogía

Vite es **el local ya acondicionado que rentas para tu taquería**. Llegas con las llaves, la cocina ya tiene gas y conexiones, y solo falta que instales tus ingredientes y decidas qué platillos preparar. Sin Vite, montar React a mano sería comprar el terreno, poner los muros y hacer la instalación eléctrica antes de cocinar. Con Vite, el local está listo: corres `npm run dev` y en segundos tu taquería (tu proyecto) está abierta en `localhost`, lista para que la IA ponga los platillos.

### Cómo se ve en la práctica

Paso a paso, terminas con una versión React de tu landing corriendo en tu computadora:

1. **Verifica Node:** abre la terminal y escribe `node --version`. Si responde algo como `v20.x` o mayor, listo. Si no, instálalo (m1-a10: `winget install --id OpenJS.NodeJS`).
2. **Crea el proyecto:** en la terminal, dentro de tu carpeta de proyectos: `npm create vite@latest tacos-react -- --template react`.
3. **Entra y levanta:** `cd tacos-react`, después `npm install` (baja las dependencias, m1-a11) y `npm run dev`. La terminal te da una dirección: abre `http://localhost:5173`. Verás la página de bienvenida de Vite.
4. **Pide la conversión:** pega el prompt de "Díselo a la IA" con tu contenido. La IA te dirá qué archivos editar: casi siempre `src/App.jsx` y `src/index.css`.
5. **Aplica y verifica:** reemplaza el contenido de esos archivos, guarda (Ctrl+S) y mira el navegador: tu landing debe verse ahí, servida por React. Si hay un error, la pantalla roja del servidor lo dice — pásale el mensaje a la IA y que lo corrija (m3-c13).
6. **Prueba del cambio único (m3-c20):** pide cambiar el color de fondo de la tarjeta del menú dentro del componente `TarjetaTaco`. Guarda: cambian todas las tarjetas a la vez. Ese es React haciendo el trabajo de la m3-c19 solo.
7. **Reconoce:** abre `src/App.jsx` e identifica el componente, las props y el `map` (m3-b28). No necesitas escribir más: necesitas saber qué hay ahí.

Para cerrar la sesión: Ctrl+C en la terminal detiene el servidor. El proyecto queda en tu carpeta para las prácticas de rendimiento (m3-c25 y m3-c26).

### Díselo a la IA

> "Acabo de crear un proyecto de React con Vite (npm create vite, template react). Voy a convertir mi landing de Tacos El Volcán: [pega aquí el contenido: nombre, eslogan, los 6 tacos con precios del menú, horario, dirección, botón de WhatsApp]. 1) Organiza la interfaz en componentes: Hero, Menu, TarjetaTaco, Footer. 2) El menú se pinta pasando el arreglo de tacos por props a TarjetaTaco y repitiéndolo con map. 3) Conserva el estilo rojo ladrillo y crema. 4) El botón de WhatsApp debe abrir wa.me/5215512345678. 5) Explícame en dos líneas qué componentes creaste y qué props usaste. Dame el contenido completo de los archivos que debo reemplazar en src/."

Cada número del prompt es un requisito verificable: componentes (1), datos por props con map (2), estilo (3), acción real del botón (4) y el reporte que te enseña a reconocer (5). Con eso, la IA te entrega los archivos y tú solo aplicas y verificas.

### Ejercicios

1. **[ordenar]** Ordena la práctica de hoy:
   - Desordenado: `Le pides a la IA convertir tu landing en componentes` · `Verificas en el navegador y pruebas el cambio único` · `Verificas que Node esté instalado` · `Instalas dependencias y corres el servidor` · `Creas el proyecto con Vite`
   - Respuesta: Verificas Node → Creas el proyecto con Vite → Instalas dependencias y corres el servidor → Pides la conversión a componentes → Verificas y pruebas el cambio único

2. **[opción múltiple]** Ya creaste el proyecto con Vite. ¿Cuál comando levanta tu página en el navegador?
   - a) npm start
   - b) npm run dev ✔
   - c) node index.html
   - d) npm build

3. **[relacionar]** Une cada pieza con su papel:
   - `src/App.jsx` ↔ El componente raíz donde viven Hero, Menu y Footer
   - TarjetaTaco ↔ Recibe los datos de un taco por props
   - props ↔ Datos de entrada que el componente no modifica
   - map ↔ Genera una TarjetaTaco por cada taco del arreglo

4. **[completar]** "En tu proyecto React, el menú se pinta pasando el arreglo de tacos por ____ al componente y repitiéndolo con ____."
   - Banco: `props` · `map` · `clase` · `fetch`
   - Respuesta: props / map

5. **[verdadero/falso]** "En React, si cambias el estilo dentro del componente TarjetaTaco, solo cambia la primera tarjeta del menú."
   - Respuesta: FALSO — el componente es un molde (m3-c19): el cambio se propaga a todas las tarjetas a la vez — es la prueba del cambio único que viste en la m3-c20.

---

## C25 — Rendimiento: por qué tu sitio carga lento

### Concepto

Cuando alguien abre tu sitio, el navegador tiene que **descargar y procesar archivos antes de poder mostrar nada**. Si esa espera es larga, el visitante se va — un segundo extra de carga puede costarte una parte importante de tus clientes. Saber por qué un sitio carga lento es la primera mitad de arreglarlo (la otra mitad, las correcciones, es la m3-c26).

Las cuatro causas clásicas, en orden de frecuencia:

- **Imágenes pesadas** — el culpable número uno de casi todos los sitios. Una foto de 5 MB se descarga entera aunque en pantalla mida 400 px. Formato y peso correctos desde la m3-a6.
- **JavaScript grande** — cada script se descarga *y después se ejecuta*. Un archivo de un megabyte deja la página parpadeando y los botones sin responder mientras el navegador lo procesa.
- **Archivos que bloquean el pintado** — ciertos CSS y JS en el `head` (m3-a2) se procesan *antes* de dibujar: mientras tanto, pantalla en blanco.
- **Demasiadas peticiones** — cada fuente, ícono o librería es un viaje de ida y vuelta al servidor (m3-c21): cincuenta archivos chicos pesan más en tiempo que uno mediano.

Y cómo se mide: el **Network** de DevTools (m3-b24) te muestra cada petición con su tamaño y su tiempo; **Lighthouse** (incluido en el navegador) te da una calificación y una lista de culpables. Los nombres que oirás de Google son los **Core Web Vitals**: el **LCP** (cuánto tarda en aparecer el contenido principal), la **interactividad** (cuánto tarda en responder un clic) y la **estabilidad visual** (si la página brinca mientras carga). Reconocerlos te basta: las correcciones las pides con nombre.

La regla del director: **medir antes de tocar**. Adivinar qué está lento es apostar; el reporte de Lighthouse y la tabla de Network dicen exactamente qué archivo cuesta. Y eso se lo pasas a la IA como evidencia, no como sospecha.

### Analogía

Es **el servicio de la taquería en hora pico**. El cliente que pidió de primero ve su platillo tarde si el mesero hace muchos viajes (cada viaje es una petición), si el chef tiene que cortar la carne en la mesa (el JavaScript que se ejecuta frente al cliente) o si la bodega está lejos y el producto llega en camiones pesados (las imágenes de 5 MB). El taquero que mide su servicio — cuánto tarda cada platillo en promedio — descubre dónde está el cuello de botella; el que solo se apura sin medir sigue sirviendo lento. Tu Network y tu Lighthouse son el cronómetro del servicio.

### Cómo se ve en la práctica

Este es el tipo de evidencia que tu Network te va a dar. Con F12 → pestaña Network, recargas y ves:

```
Nombre                 Tamaño      Tiempo
hero.jpg (foto)        5.2 MB      3.1 s   ← el culpable
app.js                 1.4 MB      980 ms
styles.css              45 KB      210 ms
logo.png                80 KB      120 ms
```

Lee la tabla como quien lee la comanda: `hero.jpg` pesa más que todo lo demás junto. Ese archivo es la respuesta — no el CSS ni el servidor. Ahora corre Lighthouse: F12 → pestaña Lighthouse → *Generate report*. Te dará una nota de 0 a 100 y una lista de oportunidades ordenadas por impacto.

Ejercicio de lectura de un reporte típico:

```
Lighthouse — Rendimiento: 58/100
Oportunidades:
  Servir imágenes en formatos modernos  -24 s  WebP/AVIF
  Reducir el peso de las imágenes       -9 s
  Eliminar JavaScript sin usar          -4 s
  Aplazar las hojas de estilo           -2 s
```

La primera oportunidad casi siempre gana: comprimir y convertir imágenes. Eso y el resto de las correcciones son exactamente la m3-c26 — pero hoy ya sabes *por qué* tu sitio carga lento y dónde mirar.

### Díselo a la IA

> "Mi landing de Tacos El Volcán tarda en cargar. Abre la pestaña Network de DevTools y corre Lighthouse: 1) dime la calificación de rendimiento; 2) lista las peticiones de mayor a menor tamaño con su tiempo; 3) dime cuál es el archivo que más cuesta y por qué; 4) ordena las correcciones por impacto (imágenes, JavaScript, peticiones, CSS) y explícame cada una en una línea. No cambies nada todavía: primero el diagnóstico completo, después me das el plan."

Ese prompt convierte a la IA en auditora: no te da el código, te da el reporte y el plan ordenado por impacto. Con eso en la mano, la m3-c26 ejecuta las correcciones una por una.

### Ejercicios

1. **[opción múltiple]** En la gran mayoría de los sitios web, la causa número uno de lentitud es…
   - a) El servidor es demasiado lento
   - b) Las imágenes pesadas ✔
   - c) El color de fondo
   - d) La computadora del usuario

2. **[relacionar]** Une la causa con su explicación:
   - Imágenes pesadas ↔ El archivo más grande de la página, casi siempre
   - JavaScript grande ↔ Se descarga y se ejecuta; retrasa la interactividad
   - Archivos que bloquean ↔ La página queda en blanco mientras se procesan
   - Demasiadas peticiones ↔ Cada una es un viaje de ida y vuelta al servidor

3. **[completar]** "Las métricas de Google para medir la velocidad se llaman ____; el ____ mide cuánto tarda en aparecer el contenido principal de la página."
   - Banco: `Core Web Vitals` · `LCP` · `HTML` · `SEO`
   - Respuesta: Core Web Vitals / LCP

4. **[verdadero/falso]** "Para optimizar el rendimiento, lo primero es medir y ver qué peticiones pesan más; corregir a ciegas casi siempre ataca lo que no era."
   - Respuesta: VERDADERO — el Network y Lighthouse dicen qué archivo cuesta; sin ese diagnóstico, optimizas a ciegas.

5. **[qué hace]** Abres la pestaña Network de DevTools y ves esta tabla. ¿Qué archivo atacas primero?
   ```
   Nombre                 Tamaño      Tiempo
   hero.jpg (foto)        5.2 MB      3.1 s
   app.js                 1.4 MB      980 ms
   styles.css              45 KB      210 ms
   ```
   - a) styles.css
   - b) hero.jpg ✔
   - c) app.js
   - d) Todos pesan igual

---

## C26 — PRÁCTICA: optimizar imágenes y tiempo de carga

### Concepto

Ayer diagnosticaste (m3-c25): tu Network y tu Lighthouse señalaron al culpable — casi siempre una imagen de 5 MB. Hoy ejecutas las correcciones, en el orden que te dio el diagnóstico. Y la regla sigue siendo la misma: **medir antes, medir después**. Sin el antes y el después, no sabes si cambiaste algo o solo moviste el problema de lugar.

Las correcciones, ordenadas por impacto:

- **Comprimir y convertir imágenes** — el plato fuerte. WebP o AVIF pesan una fracción del JPG o PNG con la misma calidad visual (m3-a6). Una hero de 5.2 MB debe terminar en unos 150 KB.
- **Redimensionar al tamaño real** — tu hero se muestra a 1200 px de ancho; si el archivo es de 4000 px, descargas píxeles que nadie verá. El navegador encoge la imagen, pero la descarga completa igual.
- **Cargar con pereza (lazy loading)** — `loading="lazy"` en las imágenes que no se ven al abrir la página: el navegador las descarga hasta que el usuario hace scroll. La hero no se marca: es el contenido principal (el LCP de la m3-c25).
- **Aplazar el JavaScript** — tu script no debe bloquear el pintado: se mueve al final del body o se le pone el atributo `defer` para que el texto y las tarjetas aparezcan primero.
- **Reducir peticiones** — cada fuente o ícono externo es un viaje de ida y vuelta (m3-c21): si una fuente trae 5 pesos y usas 2, carga solo los que usas.

La meta no es un número mágico: es **ver el puntaje subir** en Lighthouse y los tiempos bajar en Network. Y ojo, porque el puntaje perfecto no existe: hay sitios con 100 que se sienten lentos y sitios con 80 que vuelan. El criterio real es el que sentiste todo el mes — que la página aparezca rápido y no brinque mientras carga.

### Analogía

Comprimir imágenes es como **empacar el pedido para llevar**. El cliente pidió dos tacos: no le cargas el costal de maíz, la caja de cebolla ni el tanque de gas — le empacas lo que va a consumir, en un contenedor del tamaño justo. La foto original de la cámara es el costal completo: sirve para imprimir una lona gigante, no para un plato en pantalla. Comprimir y redimensionar es servir el pedido en su tamaño; el `loading="lazy"` es dejar en la cocina lo que el cliente todavía no pide y pasárselo cuando lo pide. Mismo sabor, mucho menos peso en las manos.

### Cómo se ve en la práctica

Paso a paso, terminas con una landing más rápida y el puntaje subido:

1. **Corre tu línea base:** F12 → pestaña Lighthouse → *Generate report* (m3-c25). Anota el puntaje — el típico del mes es 58/100. Ese es tu 'antes'.
2. **Lista los culpables:** en la pestaña Network, filtra por imágenes y ordena por tamaño. Anota: archivo, peso y cuánto mide en pantalla (clic en la imagen y mira en el inspector, m3-b25).
3. **Redimensiona y convierte:** para cada imagen grande, pide la receta a la IA (el prompt de abajo) y conviértelas a WebP: hero a ~1200 px de ancho y ~150 KB; tarjetas a ~400 px y ~30-60 KB. Guárdalas en tu carpeta con nombre limpio (m3-a6).
4. **Actualiza el HTML:** pide que reemplacen las rutas por las versiones `.webp` y que cada imagen tenga `width` y `height` — eso evita que la página brinque mientras carga (la estabilidad visual de la m3-c25).
5. **Lazy loading:** pide `loading="lazy"` en las imágenes que no se ven al abrir (galería y menú) y que **no** se lo pongan a la hero.
6. **Aplaza el script:** verifica que tu `script` esté antes de `</body>` o con el atributo `defer`. Si el botón tarda en responder, ese era el problema (la interactividad de la m3-c25).
7. **Vuelve a medir:** corre Lighthouse de nuevo y compara con tu línea base. Más importante que el número: recarga en *Slow 3G* (Network, como en la m3-c16) y siente la diferencia.

El resultado típico: la hero pasa de 5.2 MB a ~150 KB, el menú entero deja de pesar, y Lighthouse sube de los 50s a los 90s. Si un archivo sigue pesando, repite la receta: la calidad visual tiene un límite de compresión, pero el tamaño en pantalla siempre se puede corregir.

Nota de oficio: las imágenes optimizadas viven en tu carpeta y se publican con la landing. Si también hiciste la versión React de la m3-c24, las mismas imágenes sirven — WebP funciona igual ahí.

### Díselo a la IA

> "Mi landing de Tacos El Volcán ya está diagnosticada: Lighthouse 58/100 y la hero pesa 5.2 MB. Vamos a optimizarla: 1) dame una tabla con cada imagen del proyecto — tamaño actual, tamaño que debe tener según lo que mide en pantalla (hero ~1200 px de ancho, tarjetas ~400 px) y peso objetivo en KB en formato WebP; 2) para cada una, dime con qué herramienta gratuita convertirla (Squoosh o tu equivalente) y con qué ajustes exactos; 3) cuando las convierta, dime los cambios exactos en index.html: rutas nuevas a las versiones .webp, width y height en cada imagen para que no brinque la página, y loading="lazy" en las que no se ven al abrir — nunca en la hero; 4) revisa el script y dime si debe ir con defer o al final del body para no bloquear el pintado. No cambies textos ni estilos. Dame el archivo completo actualizado."

Cada número es un requisito verificable: la tabla (1) te da la receta de compresión, el (3) cuida que el HTML no se rompa y el (4) cierra el JavaScript de la m3-c25.

### Ejercicios

1. **[relacionar]** Une la técnica con lo que logra:
   - WebP ↔ Formato moderno: misma calidad visual, fracción del peso
   - `loading="lazy"` ↔ Se descarga hasta que el usuario hace scroll
   - width y height ↔ Evitan que la página brinque mientras carga
   - defer ↔ No bloquea el pintado de la página

2. **[opción múltiple]** Tu Lighthouse señala la hero de 5.2 MB como el archivo que más cuesta. ¿Cuál es la primera corrección de mayor impacto?
   - a) Borrar el script de la página
   - b) Comprimir y redimensionar la imagen a WebP ✔
   - c) Cambiar el color de fondo
   - d) Agregar más fuentes al head

3. **[completar]** "Las imágenes que no se ven al abrir llevan `loading=____` para descargarse hasta que el usuario hace scroll; la ____ no se marca porque es el contenido principal (el LCP)."
   - Banco: `lazy` · `hero` · `defer` · `logo`
   - Respuesta: lazy / hero

4. **[verdadero/falso]** "El objetivo de optimizar es alcanzar el puntaje perfecto de 100 en Lighthouse, aunque la imagen se vea destruida."
   - Respuesta: FALSO — el puntaje perfecto no es la meta: el criterio real es que cargue rápido y no brinque; comprimir hasta dañar la calidad visual para subir unos puntos no vale la pena.

5. **[qué hace]** Esta imagen de la galería del menú…
   ```html
   <img src="imagenes/menu/suadero.webp" alt="Taco de suadero" width="400" height="300" loading="lazy">
   ```
   - a) Se descarga hasta que el usuario se acerca con el scroll ✔
   - b) Se descarga antes que el texto de la página
   - c) Solo funciona en computadoras de escritorio
   - d) Se recarga cada vez que el usuario la mira

---

## C27 — SEO básico: que Google entienda de qué va tu sitio

### Concepto

**SEO** (Search Engine Optimization) es hacer que tu sitio sea fácil de entender para Google — y con eso, más fácil de encontrar. Traducido a tu caso: cuando alguien busca 'tacos cerca de mí', Google decide a quién mostrarle primero. Tu trabajo no es engañar a Google: es **hablarle claro**.

Así funciona Google, en tres pasos:

- **Rastreo (crawl)** — los robots de Google recorren internet siguiendo enlaces y descargan las páginas: entran por tu URL, leen tu HTML de arriba a abajo y siguen los enlaces que encuentran.
- **Indexación (index)** — lo que leyeron se guarda en un catálogo gigantesco: el índice de Google. Lo que es confuso o duplicado se queda fuera.
- **Posicionamiento (rank)** — cuando alguien busca, Google ordena las páginas indexadas usando cientos de señales.

La clave que lo cambia todo: **Google no ve tu página como tú**. No mira colores, fotos ni animaciones: lee texto y estructura. Es un cliente que llega a tu taquería con los ojos vendados — lo único que puede hacer es leer el menú escrito. Tu menú es tu HTML.

Lo que Google lee de tu página:

- **El title** — el texto de la pestaña del navegador y el título de los resultados de búsqueda.
- **La meta description** — el párrafo que aparece debajo del título en Google (la escribes en la m3-c28).
- **Los encabezados** — la jerarquía: un solo `h1` (el plato principal), `h2` para cada sección y `h3` para subsecciones (m3-a4).
- **Las etiquetas semánticas** — `header`, `main`, `section`, `footer` le dicen qué es cada bloque (m3-a3). Tu landing de Tacos El Volcán ya nació con ellas.
- **El alt de las imágenes** — Google no ve la foto del taco, pero lee el `alt` (m3-a6). Ahí le dices qué es.
- **El texto mismo** — las palabras naturales. Escribe 'tacos de suadero al pastor en la colonia Roma' y Google sabrá de qué hablas; repetir 'tacos' 50 veces (el relleno de palabras) es justo lo que castiga.

Para un negocio local, el **SEO local** pesa tanto como lo anterior: registrar el negocio en **Google Business Profile** (dirección, horario y fotos reales), juntar reseñas de clientes y tener tu dirección en el footer de tu página. Cuando alguien busca 'taquería cerca de mí', Google mezcla ese directorio con las señales de tu sitio.

La regla del director: **SEO no es hackear a Google — es estructura y honestidad**. Escribes para humanos, y al hacerlo con estructura, las máquinas te entienden gratis. Mañana (m3-c28) lo pones en tu landing con meta tags, Open Graph y favicon.

### Analogía

Google es como **el crítico gastronómico que no puede probar nada**: no ve tu fachada, no huele tu salsa ni prueba tu suadero. Lo único que puede hacer es leer tu menú escrito (tu HTML). Si el menú es un desorden — platillos sin nombres claros, sin precios, sin secciones — no puede recomendarte. Si el menú está impecable, le das todo para recomendarte. Y en el barrio, el crítico también pregunta a los vecinos (las reseñas) y consulta el directorio (Google Business Profile). Tu trabajo es dejar el menú tan claro que el crítico ciego lo entienda a la primera.

### Cómo se ve en la práctica

Esto es lo que Google lee de tu landing — y dónde lo vas a buscar mañana (m3-c28):

```html
<title>Tacos El Volcán | El sabor que hace temblar</title>
<meta name="description" content="Tacos de suadero, pastor y más en la colonia Roma. Menú completo, horarios y pedido directo por WhatsApp.">

<main>
  <h1>Tacos El Volcán</h1>            ← un solo h1: el plato principal
  <section class="menu">
    <h2>Nuestros tacos</h2>           ← h2: cada sección
    <h3>Suadero — $25</h3>            ← h3: cada platillo
    <img src="suadero.webp" alt="Taco de suadero con salsa verde">
  </section>
</main>
```

Pruébalo sobre tu página ya publicada (el hosting del Mes 1 o GitHub Pages):

1. **Mira tu title:** ¿dice 'Tacos El Volcán' o algo genérico como 'index'? Ese texto es tu título en Google.
2. **Busca `site:`:** escribe en Google `site:tu-sitio.netlify.app`. Todo lo que Google indexó de tu página aparece ahí. Si no sale nada, tu página aún no se rastreó: los sitios nuevos tardan en entrar al índice.
3. **Cuenta los h1:** Ctrl+F en tu HTML y escribe `<h1`. Debe haber exactamente uno. Varios h1 es el error de SEO más común y el más fácil de arreglar.
4. **Revisa los alt:** cada imagen debe decir qué es ('Taco de suadero con salsa verde'), no 'img0234.jpg' (m3-a6).
5. **Piensa la búsqueda real:** escribe cómo buscaría un cliente — 'taquería en la Roma', 'tacos de pastor cerca de mí'. ¿Están esas palabras en tu texto? Como contenido natural, no como relleno.

La herramienta que conocerás con calma es **Google Search Console**: el panel donde Google te dice qué rastreó, qué indexó y qué buscaron para llegar a ti. Hoy solo la mencionas; en tu proyecto final (m3-c30) la conectas a tu sitio publicado para verificar que Google te encontró.

### Díselo a la IA

> "Evalúa el SEO de mi landing de Tacos El Volcán sin cambiar nada todavía. 1) Revisa el title y la meta description actuales: dime si existen, si son buenos y cómo los mejorarías (longitud y palabras del negocio). 2) Recorre el HTML y dime si la jerarquía de encabezados es correcta: un solo h1, h2 por sección, h3 por platillo; si algo está mal, señálalo. 3) Revisa los alt de las imágenes y dime cuáles no describen su contenido. 4) Dame una lista de 5 mejoras de SEO ordenadas por impacto para una taquería local, y dime cuáles corresponden a meta tags (las arreglamos mañana)."

Es un prompt de auditoría, no de cambio: el diagnóstico primero (la m3-c25 te dio la misma disciplina para el rendimiento) y la ejecución al día siguiente.

### Ejercicios

1. **[opción múltiple]** Google no puede 'ver' tu página como tú. ¿Qué es lo que realmente lee?
   - a) Los colores y las animaciones
   - b) El texto y la estructura del HTML ✔
   - c) Las fotos en alta calidad
   - d) El diseño del logo

2. **[relacionar]** Une cada paso del proceso de Google con lo que hace:
   - Rastreo (crawl) ↔ Los robots descargan tu página siguiendo enlaces
   - Indexación (index) ↔ Tu página entra al catálogo de Google
   - Posicionamiento (rank) ↔ Google ordena los resultados para cada búsqueda

3. **[completar]** "Un solo ____ por página es el plato principal de tu contenido; cada ____ es una sección. Google lee esa jerarquía."
   - Banco: `h1` · `h2` · `alt` · `enlace`
   - Respuesta: h1 / h2

4. **[verdadero/falso]** "El atributo alt de una imagen solo sirve para accesibilidad; a Google no le importa."
   - Respuesta: FALSO — Google no ve la imagen, lee el alt (m3-a6): es una de las señales que usa para entender qué hay ahí, además de servir a los lectores de pantalla.

5. **[ordenar]** Acomoda cómo procesa Google tu página:
   - Desordenado: `Google ordena los resultados según la búsqueda del usuario` · `Tu página entra al índice de Google` · `Los robots rastrean tu URL y leen tu HTML`
   - Respuesta: Los robots rastrean tu URL → Tu página entra al índice → Google ordena los resultados

---

## C28 — PRÁCTICA: meta tags, Open Graph y favicon

### Concepto

La m3-c27 te dijo qué lee Google. Hoy lo pones en tu landing: los tres bloques del `head` que todavía no tienes, y que se notan más de lo que crees:

- **Meta tags de SEO** — el `title` (el texto de la pestaña y de Google) y la `meta description` (el párrafo de los resultados). Dos piezas, escritas con oficio.
- **Open Graph** — las etiquetas `og:` que controlan la **tarjeta de vista previa** cuando compartes tu URL por WhatsApp, Facebook o mensaje. Sin ellas, el enlace se comparte 'pelón': una URL cruda. Con ellas, aparece título, descripción y una imagen — el antojo que se antoja. Twitter tiene su propia variante (las etiquetas `twitter:`).
- **Favicon** — el ícono chiquito de la pestaña del navegador. Sin él, el navegador muestra un globo genérico; con él, tu sitio tiene carita. Un SVG con un taco dibujado basta y sobra para empezar.

Una regla de oro que te ahorra el susto: **la `og:image` necesita una URL pública, no un archivo local**. Si pruebas la tarjeta en tu computadora con `file:///`, la imagen no aparece. No es un bug: la tarjeta la arma quien comparte el enlace, no tu navegador.

Y la `meta description` tiene una longitud que importa: **~155 caracteres**. Más larga, Google la corta con '...'. Menos, desperdicias espacio. Escríbela como la frase de la comanda: clara, con el negocio, sin relleno.

### Analogía

Los meta tags son la **ficha del platillo que repartes en la calle**. Cuando compartes tu enlace por WhatsApp, la gente no ve tu local: ve la ficha — título, descripción y foto. Sin ficha (sin Open Graph), entregas un papel en blanco con solo la dirección. Con ficha, entregas el antojo: nombre del platillo, dos líneas que enamoran y la foto bien servida. El favicon, por su parte, es el **letrerito de la puerta**: chiquito, pero cuando tienes 20 pestañas abiertas, es lo único que distingue tu local de los demás.

### Cómo se ve en la práctica

Paso a paso, terminas con el head completo y una tarjeta de WhatsApp que enamora:

1. **Abre tu head:** en tu `index.html`, localiza el `head` (m3-a2). Ahí están el `charset`, el `viewport` (m3-c4) y el `title` de la C2. Falta el resto.
2. **Pega el prompt** de 'Díselo a la IA'.
3. **Verifica el title:** la pestaña del navegador debe decir 'Tacos El Volcán | El sabor que hace temblar' — no 'index' ni 'Documento'.
4. **Mide la description:** selecciona el texto de la `meta description` y cuéntale los caracteres; pídele a la IA que la ajuste a ~155. Debe decir qué es, dónde está y cómo pedir.
5. **Crea el favicon:** pide a la IA un SVG de taco o tu logo, guárdalo como `favicon.svg` en tu carpeta y confirma el `<link rel="icon">` en el head. Refresca: la pestaña ya tiene carita.
6. **Publica** — la tarjeta necesita la URL pública (hosting del Mes 1 o GitHub Pages).
7. **Prueba la tarjeta:** mándate el enlace publicado por WhatsApp y mira la vista previa: título, descripción y la imagen del hero. Si sale la URL pelona, revisa que las `og:` estén en el head y que `og:image` apunte a una URL completa.
8. **Verifica con una herramienta:** pega tu URL pública en un validador de Open Graph (busca 'Open Graph debugger' o 'meta tags validator') y confirma que lee todas las etiquetas sin errores.

El head terminado, en lo que agregaste hoy:

```html
<title>Tacos El Volcán | El sabor que hace temblar</title>
<meta name="description" content="Tacos de suadero, pastor y más en la colonia Roma. Menú completo, horarios y pedido directo por WhatsApp.">

<meta property="og:title" content="Tacos El Volcán">
<meta property="og:description" content="Tacos de suadero, pastor y más en la colonia Roma. Pedido directo por WhatsApp.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://tacos-el-volcan.netlify.app">
<meta property="og:image" content="https://tacos-el-volcan.netlify.app/imagenes/hero.webp">
<meta name="twitter:card" content="summary_large_image">

<link rel="icon" href="favicon.svg" type="image/svg+xml">
```

Detalle de oficio: `og:url` y `og:image` usan la URL **completa** (con `https://`), no rutas relativas. Es la diferencia entre una tarjeta bonita y un enlace pelón.

### Díselo a la IA

> "Mi landing de Tacos El Volcán ya está publicada en [tu URL]. Agrégale los meta tags completos en el head: 1) un title único y descriptivo con el nombre del negocio y su eslogan; 2) una meta description de ~155 caracteres que diga qué es, dónde está y que el pedido es por WhatsApp; 3) las etiquetas Open Graph — og:title, og:description, og:type website, og:url con la URL pública completa, y og:image apuntando a la URL pública de mi hero en WebP; 4) twitter:card con summary_large_image; 5) un favicon: crea un SVG simple de un taco en rojo ladrillo, guárdalo como favicon.svg en la carpeta y enlázalo con link rel=\"icon\". No cambies el contenido visible ni los estilos. Dame el archivo completo actualizado y la lista de lo que agregaste."

El prompt pide la lista final (el punto extra): cuando la IA te reporta lo que agregó, tu verificación tiene nombre y apellido.

### Ejercicios

1. **[opción múltiple]** ¿Dónde viven los meta tags y el favicon?
   - a) Dentro del body, junto al contenido visible
   - b) En el head, junto al charset y al viewport ✔
   - c) En un archivo aparte llamado meta.js
   - d) En el footer de la página

2. **[completar]** "Las etiquetas ____ controlan la tarjeta de vista previa al compartir el enlace en WhatsApp o Facebook; la imagen de esa tarjeta (og:image) necesita una URL ____, no un archivo local."
   - Banco: `og:` · `pública` · `local` · `escondida`
   - Respuesta: og: / pública

3. **[verdadero/falso]** "Si pruebas la tarjeta de Open Graph en tu computadora con file:/// y la imagen no aparece, es porque tu código está mal."
   - Respuesta: FALSO — la og:image necesita una URL pública: la tarjeta la arma quien comparte el enlace, no tu navegador local.

4. **[qué hace]** ¿Qué hace esta línea del head?
   ```html
   <link rel="icon" href="favicon.svg" type="image/svg+xml">
   ```
   - a) Pone el ícono de la pestaña del navegador (el favicon) ✔
   - b) Convierte la página en un archivo SVG
   - c) Agrega una fuente nueva al sitio
   - d) Define la imagen que se comparte en WhatsApp

5. **[relacionar]** Une cada pieza con lo que controla:
   - title ↔ El texto de la pestaña y de los resultados de Google
   - meta description ↔ El párrafo que aparece bajo el título en Google
   - og:image ↔ La foto de la tarjeta al compartir el enlace
   - twitter:card ↔ La tarjeta de vista previa en X (Twitter)
   - favicon ↔ El ícono chiquito de la pestaña del navegador

---

## C29 — Tu flujo completo de construcción de interfaces

### Concepto

Este mes construiste un proyecto completo de principio a fin — y de camino, sin que lo notaras, se te formó un método. Hoy lo nombras y lo fijas. El **flujo completo de construcción de interfaces** es la secuencia que repites en cada proyecto, sin importar el tamaño ni la herramienta:

1. **Reconocer** — mirar antes de construir: la referencia que te gusta (m3-c17), el sitio que quieres replicar (m3-c18), lo que ya tienes y lo que falta. El diagnóstico de rendimiento también arranca aquí: medir, no adivinar (m3-c25).
2. **Brief** — describir lo que todavía no existe (m3-c1): propósito, contenido, estilo, restricciones y éxito. Es la piedra del flujo: lo que no está en el brief, la IA lo inventa.
3. **Prompt** — el brief convertido en instrucción con nombre: las 4 piezas del Mes 1 (contexto, objetivo, restricciones, formato) + el vocabulario visual (m3-c7) + las reglas técnicas (m3-c4, m3-c11).
4. **Construir por partes** — por secciones (m3-c18), con componentes (m3-c19), con datos separados de la presentación (m3-c11). Nunca de un golpe.
5. **Verificar en cada paso** — el inventario de la m3-c18, la prueba del cambio único (m3-c20), los tres estados forzados (m3-c16) y la prueba en celular (m3-c4). Lo que no se verificó, no se hizo.
6. **Corregir sin romper** — pedir cambios con precisión (m3-c5), describir el daño en vez de editar a ciegas (m3-c13), iterar con la vista previa enfrente (m3-c22).
7. **Medir y pulir** — el rendimiento (m3-c25, m3-c26) y el SEO (m3-c27, m3-c28): los dos detalles que separan un proyecto terminado de uno profesional.
8. **Publicar y versionar** — salir del boceto: hosting (m1-c16) o GitHub Pages (m2-b20), y Git con commits, ramas y tags (Mes 2). La URL pública es el negocio abierto.

La idea que te tiene que quedar grabada: **el flujo no cambia cuando cambia la herramienta**. Lo usaste con HTML plano (m3-c2), con una API (m3-c14), con v0 (m3-c22) y con React (m3-c24). Lo que cambia es la herramienta; lo que no cambia es el método: reconocer, brief, construir, verificar, medir, publicar.

Y el flujo es el mismo en todas las escalas: una sección, una landing o una web app completa son el mismo bucle. La diferencia es cuántas veces lo repites y con qué tamaño de piezas.

### Analogía

Es la **receta del taquero que ya no piensa al preparar la orden**. Al principio, cada taco era un proceso: ¿dónde está la tortilla?, ¿cuánta cebolla?, ¿primero la salsa? Después de miles de órdenes, el taquero tiene un flujo: parrilla, tortilla, carne, salsa, servir — lo repite sin pensarlo y no se le olvida el paso. Tu flujo de interfaces es esa receta: cada vez que arrancas un proyecto no empiezas a adivinar — comienzas por el mismo lado, pasas por los mismos pasos y el resultado sale parejo. El que domina su flujo construye cualquier platillo; el que no, improvisa y el cliente lo nota.

### Cómo se ve en la práctica

Este es tu flujo como lista de verificación — la misma que vas a usar mañana (m3-c30) en tu proyecto final:

```
MI FLUJO COMPLETO DE CONSTRUCCIÓN

□ 1. RECONOCER — la referencia (m3-c17, m3-c18), lo que ya tengo
     y lo que falta. Medir, no adivinar (m3-c25).
□ 2. BRIEF — propósito, contenido, estilo, restricciones y éxito
     (m3-c1). Completarlo con la IA antes del código.
□ 3. PROMPT — brief + vocabulario visual (m3-c7) + reglas
     técnicas: responsive (m3-c4), datos (m3-c11), estados (m3-c15).
□ 4. CONSTRUIR — por secciones (m3-c18) y componentes (m3-c19),
     datos separados de presentación (m3-c11).
□ 5. VERIFICAR — inventario arriba-abajo (m3-c18), cambio único
     (m3-c20), estados forzados (m3-c16), celular (m3-c4).
□ 6. CORREGIR — con precisión (m3-c5), sin editar a ciegas
     (m3-c13), iterando (m3-c22).
□ 7. MEDIR — Lighthouse y Network (m3-c25) → optimizar (m3-c26)
     → SEO y meta tags (m3-c27, m3-c28).
□ 8. PUBLICAR — hosting (m1-c16) o GitHub Pages (m2-b20)
     + versionar con Git: commits, ramas, tag v1.0.0 al terminar.
```

Hoy lo aplicas una vez más a algo que ya conoces: recorre tu landing de Tacos El Volcán con la lista en la mano y marca lo que ya tiene: brief completo (sí, desde la m3-c1), datos separados (sí, desde la m3-c10), estados (sí, desde la m3-c15), rendimiento (sí, desde la m3-c26), meta tags (sí, desde la m3-c28), publicada y versionada (sí, desde el Mes 2 o el hosting del Mes 1).

Si te queda algo sin marcar, esa es exactamente tu tarea en el proyecto final. Y ahí está la jugada: el proyecto final no es otra landing de tacos — es **tu lista aplicada a un proyecto tuyo, de principio a fin, sin las instrucciones de esta clase**.

### Díselo a la IA

> "Repasa conmigo el flujo completo que aprendí este mes antes de mi proyecto final. 1) Te doy mi lista de verificación: reconocer, brief, prompt, construir por partes, verificar, corregir, medir, publicar. 2) Aplícala a mi landing de Tacos El Volcán y dime qué pasos cumplo bien y cuáles son mis puntos débiles típicos — por ejemplo, si verifico poco, si pido todo de un golpe o si edito a ciegas. 3) Devuélveme una versión de mi lista adaptada a mi forma de trabajar, con 2 o 3 recordatorios personales por etapa. No cambies nada del código: esto es un repaso de método."

Ese prompt convierte a la IA en entrenadora de tu proceso, no en productora de código: de la respuesta sale tu lista personalizada para la m3-c30.

### Ejercicios

1. **[ordenar]** Acomoda el flujo completo de construcción de interfaces:
   - Desordenado: `Armar el prompt con vocabulario visual` · `Construir por partes y verificar` · `Publicar y versionar` · `Escribir el brief` · `Medir rendimiento y SEO` · `Reconocer y medir`
   - Respuesta: Reconocer y medir → Escribir el brief → Armar el prompt → Construir por partes y verificar → Medir rendimiento y SEO → Publicar y versionar

2. **[opción múltiple]** Este mes usaste HTML plano, una API, v0 y React. ¿Qué es lo que NO cambia entre herramientas?
   - a) La sintaxis de los componentes
   - b) El flujo completo: reconocer, brief, construir, verificar, medir, publicar ✔
   - c) El archivo index.html
   - d) Los comandos de la terminal

3. **[relacionar]** Une cada etapa del flujo con lo que es:
   - Brief ↔ Describir lo que todavía no existe (m3-c1)
   - Verificar ↔ Inventario, cambio único y estados forzados (m3-c18, m3-c20, m3-c16)
   - Medir ↔ Lighthouse y Network antes de tocar (m3-c25)
   - Publicar ↔ Hosting + Git con tag al terminar

4. **[completar]** "El flujo se repite en todas las ____: una sección, una landing y una web app son el mismo ____; lo que cambia es el tamaño de las piezas."
   - Banco: `escalas` · `bucle` · `herramientas` · `archivos`
   - Respuesta: escalas / bucle

5. **[verdadero/falso]** "Lo que no está en el brief, la IA lo decide con su propio criterio — por eso el brief es la piedra del flujo."
   - Respuesta: VERDADERO — es el principio de la m3-c1: todo lo que no escribes, ella lo adivina.

---

## C30 — Repaso + arranque del proyecto final del mes

### Concepto

Llegaste al cierre del Mes 3. Hoy haces dos cosas: **repasas el mes en tres bloques** y **arrancas el proyecto final** — una web app completa, tuya, publicada y versionada.

El repaso:

- **Estructura** — viste una página por dentro: el navegador que la pinta (m3-a1), el head y el body (m3-a2), las etiquetas semánticas (m3-a3), Flexbox y Grid (m3-a19 a m3-a22), el responsive con media queries (m3-a24, m3-a25) y el dark mode (m3-a28).
- **Datos e interacción** — JavaScript en el navegador: el DOM (m3-b2), pintar datos (m3-b10), map y filter (m3-b12), objetos (m3-b13), template literals (m3-b14), fetch y async (m3-b19 a m3-b21) y la consola (m3-b24).
- **Dirigir** — el oficio del mes: brief (m3-c1), maquetar (m3-c2), leer HTML (m3-c3), responsive (m3-c4), cambios quirúrgicos (m3-c5), datos separados (m3-c11), filtros (m3-c12), estados (m3-c15), componentes (m3-c19), rendimiento (m3-c26) y SEO (m3-c28).

El proyecto final junta todo eso: **una web app real de un negocio — el tuyo o uno que conozcas — con estos requisitos exactos:**

- Layout responsive con **Grid o Flexbox** (m3-a19 a m3-a22, m3-a24).
- **Dark mode** (m3-a28).
- Un **catálogo pintado desde datos** — no HTML escrito a mano (m3-c10, m3-c11).
- **Buscador o filtro funcional** (m3-c12).
- **Formulario de contacto conectado** a WhatsApp o correo (m3-c8, m3-c9).
- Los **tres estados de interfaz** manejados: cargando, vacío y error (m3-c15, m3-c16).
- **Meta tags** para compartir: title, description, Open Graph y favicon (m3-c28).
- **Publicada y versionada**: el sitio vive en una URL pública (hosting del Mes 1 o GitHub Pages, m2-b20) y el código vive en un repositorio de Git versionado, con un tag v1.0.0 y su release al terminar (m2-a23, m2-b23).

Se entregan dos URLs: la del sitio y la del repositorio. Nada de esto es nuevo: cada requisito es una lección que ya pasaste. El reto es unirlos sin instrucciones — con tu flujo de la m3-c29 como única guía.

### Analogía

El proyecto final es **montar tu propio puesto, no trabajar en el puesto de Tacos El Volcán**. Este mes fuiste el aprendiz que acompaña: el taquero te dejaba la parrilla encendida, los ingredientes puestos y te decía cada paso. Hoy te dan un local vacío y te dicen 'ábrelo'. Los ingredientes los eliges tú, el menú lo diseñas tú, y los clientes — cualquiera que abra tu URL — deciden si vuelven. No hay receta secreta: es la misma receta del mes — brief, construir por partes, verificar, medir, publicar y versionar — aplicada sin mano que te guíe. Y cuando tu puesto queda abierto (URL pública) con su letrero registrado (repo versionado con v1.0.0), ese local es tuyo: para presumirlo y para crecerlo.

### Cómo se ve en la práctica

El arranque del proyecto final, paso a paso, con tu flujo de la m3-c29:

1. **Elige el negocio.** El tuyo, el de alguien que conoces o uno real de tu colonia. Esta es la ocasión de usar contenido verdadero: precios y horarios reales. No otro taco — algo tuyo.
2. **Escribe el brief completo** (m3-c1): propósito, contenido, estilo, restricciones y éxito. Pásalo por la entrevista de la IA para que te haga las preguntas que faltan.
3. **Convierte el brief en requisitos técnicos:** catálogo desde datos, buscador o filtro, dark mode, formulario, tres estados y meta tags. Ese puente entre brief y requisitos es el oficio de la m3-c29.
4. **Crea la carpeta y versiona desde el día uno** (Mes 2): `mkdir`, `git init`, `.gitignore` y primer commit. El proyecto nace versionado, no 'se le agrega Git después'.
5. **Construye por secciones** (m3-c18), una a la vez, verificando cada una en el navegador (m3-c4). El catálogo desde datos desde el principio (m3-c10, m3-c11) — escribirlo a mano 'para ahorrar tiempo' te cuesta el doble cuando llegues al filtro.
6. **Pule y mide:** estados forzados (m3-c16), Lighthouse (m3-c26) y meta tags (m3-c28).
7. **Publica y versiona:** sube el repo a GitHub, publica con GitHub Pages (m2-b20) o tu hosting del Mes 1, y cuando todo esté verde marca `git tag -a v1.0.0` y crea la release (m2-b23).

```
ENTREGABLES DEL PROYECTO FINAL:
URL del sitio .... https://tuusuario.github.io/tu-app/   (o .netlify.app)
URL del repo .... https://github.com/tuusuario/tu-app

LISTA DE REQUISITOS:
□ Layout responsive con Grid o Flexbox
□ Dark mode (prefers-color-scheme o botón)
□ Catálogo pintado desde datos (no a mano)
□ Buscador o filtro funcional
□ Formulario de contacto conectado (WhatsApp o correo)
□ Tres estados: cargando, vacío, error
□ Meta tags: title, description, Open Graph, favicon
□ Publicada en URL pública
□ Versionada en Git con tag v1.0.0 y release

Se entrega la URL del sitio y la del repositorio.
```

La regla de cierre: no avances a 'pulir' con requisitos pendientes — cada casilla sin marcar se paga después con rehacer. El proyecto termina cuando las nueve están marcadas y la URL se abre en tu celular.

### Díselo a la IA

> "Voy a arrancar mi proyecto final del Mes 3: [describe tu negocio en dos líneas]. Antes de escribir código, actúa como evaluador: 1) hazme un examen corto de 8 preguntas sobre los temas del mes — brief, datos separados de presentación, filtros, los tres estados, componentes, rendimiento, SEO y publicar/versionar; 2) cuando responda, dime cuáles me fallaron y qué lección debo repasar de cada una; 3) después entrevístame para completar el brief de mi proyecto final — propósito, contenido, estilo, restricciones y éxito — y devuélveme el plan de construcción por etapas, cada una con su verificación y con la lección del mes que la respalda. No generes código todavía."

Es un prompt de auto-evaluación, no de construcción: primero confirmas que el mes quedó en ti, después arrancas el proyecto con el brief completo y el plan por etapas.

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos NO es un requisito del proyecto final del Mes 3?
   - a) Catálogo pintado desde datos
   - b) Dark mode
   - c) Usar React con Vite ✔
   - d) Buscador o filtro funcional

2. **[completar]** "El proyecto final se entrega con dos URLs: la del ____, donde vive la web app publicada, y la del ____, donde vive el código versionado."
   - Banco: `sitio` · `repositorio` · `negocio` · `servidor`
   - Respuesta: sitio / repositorio

3. **[relacionar]** Une cada requisito con la lección que lo respalda:
   - Catálogo desde datos ↔ m3-c10 y m3-c11
   - Tres estados de interfaz ↔ m3-c15 y m3-c16
   - Formulario conectado ↔ m3-c8 y m3-c9
   - Meta tags para compartir ↔ m3-c28

4. **[verdadero/falso]** "Puedes escribir el catálogo del proyecto final a mano en el HTML: es más rápido y cumple igual."
   - Respuesta: FALSO — el catálogo desde datos (m3-c10, m3-c11) es requisito: sin él no hay filtro (m3-c12) y cada cambio de precio sería una cacería por el código.

5. **[ordenar]** Acomoda el arranque del proyecto final:
   - Desordenado: `Agregar buscador, filtro y dark mode` · `Manejar los tres estados de interfaz` · `Elegir el negocio y escribir el brief` · `Publicar, marcar la tag v1.0.0 y entregar las dos URLs` · `Crear la carpeta, git init y .gitignore con el primer commit` · `Construir el catálogo desde datos`
   - Respuesta: Elegir el negocio y escribir el brief → Crear la carpeta y versionar desde el día uno → Construir el catálogo desde datos → Agregar buscador, filtro y dark mode → Manejar los tres estados → Publicar, marcar la tag y entregar las dos URLs

6. **[qué hace]** Terminaste tu proyecto y corres este comando. ¿Qué logra?
   ```
   git tag -a v1.0.0 -m "Proyecto final del Mes 3"
   ```
   - a) Marca el commit actual como la versión 1.0.0: el punto exacto del proyecto terminado ✔
   - b) Sube el proyecto a GitHub Pages
   - c) Crea una rama nueva para seguir trabajando
   - d) Borra el historial de commits anteriores

7. **[opción múltiple]** Abres tu web app en el celular, el buscador no encuentra nada y aparece un mensaje amable con una sugerencia. ¿Qué estado de interfaz está funcionando?
   - a) Error
   - b) Vacío ✔
   - c) Cargando
   - d) Éxito

8. **[verdadero/falso]** "El proyecto final 'publicado y versionado' significa que el sitio está en una URL pública y el código está en un repositorio de Git con un tag de lanzamiento como v1.0.0."
   - Respuesta: VERDADERO — las dos entregas son la URL del sitio y la del repositorio (Mes 2): el tag marca la versión terminada para siempre.

---
