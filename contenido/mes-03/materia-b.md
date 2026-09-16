# MES 3 · MATERIA B — JavaScript en el navegador
## Lecciones B1–B5 (Lote 1)

---

## B1 — Dónde vive el JavaScript de una página y cuándo se ejecuta

### Concepto

El JavaScript de una página vive en tu propio documento HTML, y puede llegar de tres maneras: **en línea** (una etiqueta `<script>` con el código adentro: `<script>console.log("hola");</script>`), **archivo externo** (el caso que usarás siempre: `<script src="app.js"></script>` — el código vive en otro archivo y la etiqueta lo carga), y **desde la consola** (en DevTools puedes correr JavaScript al vuelo; no vive en ningún archivo, sirve para probar).

¿Y cuándo se ejecuta? El navegador lee el documento **de arriba a abajo**, como tú lees una carta. Cuando encuentra una etiqueta `<script>`, se **detiene**: descarga el archivo (si es externo), ejecuta todo el código, y *después* sigue leyendo el resto de la página. Por eso un script normal que toca elementos de la página se coloca casi al final del `body`: así los elementos ya existen cuando el código corre.

La alternativa moderna es el atributo `defer`, que le dice al navegador "descarga mientras tanto y ejecuta hasta que el documento termine". Se pone en el `head` sin que rompa nada: el navegador aprovecha el tiempo de descarga y corre el código cuando la página ya está completa.

Regla que te va a ahorrar sustos: **el script se ejecuta cuando el navegador lo encuentra, no cuando tú lo escribiste.** Si tu código busca un elemento que todavía no se ha leído, falla. Esa búsqueda de elementos es exactamente lo que vas a dominar en B3.

### Analogía

La página es un **teatro y el navegador es el director que lee el guion de corrido**. Cuando llega a una etiqueta `<script>`, levanta la mano: "alto, entra el actor a decir su parlamento". El actor (el JavaScript) ejecuta sus líneas y se va; el director sigue leyendo. Si el actor entra antes de que el escenario esté armado —script en el `head` sin `defer`— puede querer tocar sillas que todavía no existen. Por eso el buen director coloca al actor casi al final: escenario listo, parlamento a tiempo.

### Cómo se ve en la práctica

Crea dos archivos en la misma carpeta. Primero `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi página con JavaScript</title>
  </head>
  <body>
    <h1 id="titulo">Hola, mundo</h1>
    <script src="app.js"></script>
  </body>
</html>
```

Y después `app.js`:

```javascript
console.log("El JavaScript se está ejecutando");
document.getElementById("titulo").textContent = "Cambiado desde JS";
```

Ábrelo en el navegador: verás el texto cambiado en pantalla, y en DevTools (F12 → Consola) la línea "El JavaScript se está ejecutando". Ahora haz el experimento: mueve la etiqueta `<script>` al `head` y recarga. Error. El `h1` aún no existe cuando el código corre — el escenario no estaba armado. Esa manipulación del DOM la armamos pieza por pieza en B2 a B4.

### Díselo a la IA

> "Voy a añadir JavaScript a mi página. Dime si el script debe ir en el head, al final del body o con el atributo defer según lo que quiero lograr: [describe tu objetivo]. Explícame en una línea por qué esa posición y no otra."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la posición clásica de un script normal (sin atributos) que va a tocar elementos de la página?
   - a) Dentro del `<head>`
   - b) Justo antes de cerrar `</body>` ✔
   - c) En un archivo CSS
   - d) Después de `</html>`

2. **[completar]** "El atributo ____ de la etiqueta ____ apunta al archivo externo de JavaScript."
   - Banco: `src` · `script` · `href` · `link`
   - Respuesta: src / script

3. **[verdadero/falso]** "Un script externo detiene temporalmente el renderizado de la página mientras se descarga y ejecuta."
   - Respuesta: VERDADERO — el navegador lee en orden: al encontrar un script normal se pausa, lo ejecuta y sigue.

4. **[qué hace]** `console.log("Hola desde la consola");` — corres esa línea en `app.js`. ¿Dónde la verás?
   - a) En la página, como texto visible
   - b) En la Consola de DevTools ✔
   - c) En la pestaña del navegador
   - d) En un cuadro de alerta

5. **[ordenar]** Ordena qué pasa al abrir una página que carga un script externo al final del body:
   - Pasos: el servidor envía el HTML → el navegador lee el documento de arriba a abajo → encuentra la etiqueta `<script>` → descarga y ejecuta el archivo JS → el navegador termina de leer el documento

---

## B2 — El DOM: la página como árbol de objetos

### Concepto

DOM son las siglas de **Document Object Model**: el modelo de la página como objetos. Cuando el navegador lee tu HTML, no se limita a pintarlo: construye en memoria un **árbol de nodos**. Cada etiqueta se convierte en un elemento, cada texto en un nodo de texto, cada atributo en una propiedad. Ese árbol es el DOM — y es exactamente lo que JavaScript ve y modifica.

Tres datos para que no se te escape: **es un árbol** — hay padres, hijos y hermanos; el bloque `<body>` es hijo de `<html>`, y una `<section>` es hija de `<main>`. **La raíz es `document`** — `document.body` es el body, `document.title` es el título de la pestaña; todo cuelga de ahí. Y **está vivo** — cuando JavaScript cambia un nodo, el navegador vuelve a pintar esa parte solo, sin recargar la página.

Distinción clave: el archivo `.html` es el texto fuente; el DOM es el modelo viviente que el navegador mantiene en memoria. Por eso en DevTools → Elements (lo viste en A1) ves el árbol tal como está *ahora*, no necesariamente tal como lo escribiste.

### Analogía

El DOM es un **árbol genealógico**. `document` es el abuelo fundador. `html` es su hijo; `head` y `body` son sus nietos. Cada `<div>` es hijo del bloque que lo contiene, y los elementos al mismo nivel son hermanos. Cuando JavaScript toca un nodo es como llamar por teléfono a un familiar: el apellido del árbol se entera y la página se redibuja sola. No memorizas la genealogía de cada página: la *reconoces* en un vistazo cuando abres Elements.

### Cómo se ve en la práctica

Con este HTML:

```html
<main>
  <h1 id="titulo">Mi tienda</h1>
  <div class="producto">
    <h2>Audífonos</h2>
    <p class="precio">$499</p>
  </div>
</main>
```

El navegador construye este árbol:

```
document
└─ html
    ├─ head
    └─ body
        └─ main
            ├─ h1#titulo
            └─ div.producto
                ├─ h2
                └─ p.precio
```

Para comprobarlo tú, abre DevTools (F12 → Elements): la pestaña es una foto del DOM. Y en la Consola puedes inspeccionar el modelo desde JavaScript:

```javascript
console.log(document.body.children);
console.log(document.title);
```

El primero imprime los hijos directos del body; el segundo, el título de la pestaña. En B3 aprendes a agarrar de ese árbol el nodo exacto que quieres.

### Díselo a la IA

> "Tengo este HTML: [pega tu código]. Dibújame el árbol del DOM en texto, marcando padres, hijos y hermanos, y dime qué nodos tendría que modificar con JavaScript para lograr [objetivo]."

### Ejercicios

1. **[relacionar]** Une el concepto con su definición:
   - DOM ↔ El documento como árbol de objetos
   - document ↔ La raíz del árbol
   - elemento ↔ Un bloque como `<h1>` o `<div>`
   - nodo ↔ Cada punto del árbol: elementos y texto

2. **[opción múltiple]** Cuando el navegador lee el HTML, ¿qué es exactamente el DOM que construye?
   - a) El archivo original tal cual se descargó
   - b) El árbol de objetos que representa la página ✔
   - c) La lista de estilos CSS
   - d) El historial de navegación

3. **[completar]** "El DOM es el documento como un ____ de ____ que JavaScript puede modificar."
   - Banco: `árbol` · `objetos` · `pantalla` · `archivo`
   - Respuesta: árbol / objetos

4. **[verdadero/falso]** "Cuando JavaScript modifica el DOM, la página se actualiza sola, sin recargar."
   - Respuesta: VERDADERO — el DOM es el modelo vivo; el navegador repinta solo lo que cambió.

5. **[qué hace]** `console.log(document.title);` — ¿qué hace esta línea?
   - a) Cambia el título de la pestaña
   - b) Muestra el título de la página en la consola ✔
   - c) Carga un archivo JavaScript
   - d) Borra el título

---

## B3 — Seleccionar elementos: querySelector y compañía

### Concepto

Antes de cambiar cualquier cosa necesitas **una referencia al elemento**: un punto de agarre en el árbol del DOM (B2). Cuatro herramientas:

- `document.getElementById("titulo")` — por id, devuelve un solo elemento. Rápida y directa.
- `document.getElementsByClassName("precio")` — por clase, devuelve una **lista viva**: se actualiza sola si el DOM cambia.
- `document.querySelector("#titulo")` — el **caballito de batalla**: acepta cualquier selector CSS y devuelve el *primer* elemento que coincida.
- `document.querySelectorAll(".precio")` — igual que arriba, pero devuelve **todos** los que coinciden.

Por qué `querySelector` es el favorito: **reutiliza los selectores CSS que ya sabes** — `#id`, `.clase`, etiqueta, o combinados como `button.cta`. Un solo método para casi todo. Los otros casos de uso: `getElementById` cuando quieres máxima velocidad con un id conocido, y `querySelectorAll` cuando necesitas la lista completa para recorrerla.

Dos detalles que no son trivia: si `querySelector` no encuentra nada, devuelve `null` (y tocar `null` da error); y `querySelectorAll` te da una foto estática, mientras que `getElementsByClassName` es una lista viva. Reconócelo cuando aparezca, no lo memorices.

### Analogía

`querySelector` es el **recepcionista de un hotel**: le das una descripción —"el primer huésped con camisa roja", "la habitación 401"— y te trae *una sola persona*. `querySelectorAll` es el conserje que junta a *todos* los invitados con sombrero en una fila. Y `getElementById` es la llave maestra de la habitación 401: no hay descripción que pensar, solo funciona si el cuarto tiene número. La descripción que le das al recepcionista es exactamente un selector CSS — por eso ya sabes la mitad del truco.

### Cómo se ve en la práctica

Este HTML:

```html
<button id="comprar" class="boton">Comprar</button>
<button class="boton">Agregar</button>
<p class="precio">$499</p>
```

Con estas líneas en la consola:

```javascript
const boton = document.querySelector("#comprar");
const todos = document.querySelectorAll(".boton");
const porId = document.getElementById("comprar");
const primerPrecio = document.querySelector("p.precio");

console.log(boton, todos.length, porId, primerPrecio);
```

Resultado: `boton` es el botón "Comprar", `todos` es una lista con los dos botones (`todos.length` da 2), `porId` es el mismo botón que `boton`, y `primerPrecio` es el `<p>`. Fíjate: `querySelector` se queda con la primera coincidencia; `querySelectorAll` con todas. El siguiente paso (B4) es usar esas referencias para cambiar contenido.

### Díselo a la IA

> "Tengo esta página: [pega tu HTML]. Dame las líneas de JavaScript para seleccionar [elemento o grupo], y dime si el resultado es un elemento suelto o una lista, para no equivocarme al usarlo."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos métodos devuelve solo el PRIMER elemento que coincide?
   - a) `querySelectorAll(".precio")`
   - b) `querySelector(".precio")` ✔
   - c) `getElementsByClassName("precio")`
   - d) `getElementsByTagName("p")`

2. **[relacionar]** Une el selector con lo que selecciona:
   - `#logo` ↔ Selecciona por id
   - `.precio` ↔ Selecciona por clase
   - `h2` ↔ Selecciona por etiqueta
   - `button.cta` ↔ Combina etiqueta y clase

3. **[completar]** "`querySelector` usa ____ CSS: el ____ selecciona por id y el ____ por clase."
   - Banco: `selectores` · `#` · `.` · `tag`
   - Respuesta: selectores / # / .

4. **[verdadero/falso]** "`querySelectorAll` devuelve una lista con todos los elementos que coinciden con el selector."
   - Respuesta: VERDADERO — `querySelectorAll` junta todas las coincidencias; `querySelector` se queda con la primera.

5. **[qué hace]** `const titulo = document.querySelector("#titulo"); console.log(titulo);` — si NO existe ningún elemento con id "titulo", ¿qué imprime la consola?
   - a) `null` ✔
   - b) Un error que detiene todo el script
   - c) Un elemento vacío
   - d) El primer `<div>` de la página

---

## B4 — Cambiar contenido: textContent vs innerHTML

### Concepto

Ya sabes agarrar un elemento (B3). Ahora, a cambiar su contenido. Dos herramientas con personalidades opuestas:

- `elemento.textContent = "..."` — **texto plano**. Todo lo que asignes se muestra literal, tal cual, sin interpretar nada. Sirve para leer y para escribir.
- `elemento.innerHTML = "..."` — **interpreta HTML**. Si la cadena trae etiquetas, el navegador las parsea, crea los nodos y los pinta.

¿Cuál usar? **`textContent` para datos; `innerHTML` para construir HTML conscientemente.** Si el valor es un nombre, un precio, un mensaje — `textContent`. Si estás armando una tarjeta con `<h2>` y `<p>` a partir de datos — `innerHTML`.

El peligro real de `innerHTML` se llama **XSS** (cross-site scripting). Si el contenido viene de un usuario —un formulario, una URL— y lo metes con `innerHTML`, el usuario podría inyectar etiquetas maliciosas. Regla de seguridad: **contenido ajeno, solo `textContent`**. (Validar entradas lo ves a fondo en B23; el `value` de los inputs, en B7.)

Dato extra: existe `innerText`, que devuelve solo el texto *visible*; en la práctica `textContent` es el que vas a usar.

### Analogía

`textContent` es **escribir con plumón sobre una foto**: escribes sobre lo que hay y nada más; la foto no cambia de forma. `innerHTML` es **entregar el diseño a una imprenta**: la imprenta lee tus instrucciones (las etiquetas) y maqueta el resultado completo. El riesgo: si un extraño —el usuario— te pasa la hoja de instrucciones, la imprenta le obedece a él también. Con contenido ajeno, siempre plumón.

### Cómo se ve en la práctica

Este HTML:

```html
<p id="mensaje"></p>
<div id="tarjeta"></div>
```

Texto plano:

```javascript
const mensaje = document.querySelector("#mensaje");
mensaje.textContent = "Gracias por tu compra <3";
```

Interpretando HTML:

```javascript
const tarjeta = document.querySelector("#tarjeta");
tarjeta.innerHTML = "<h2>" + nombre + "</h2>" + "<p>" + precio + "</p>";
```

Con `mensaje`, lo que escribiste aparece tal cual. Con `tarjeta`, el navegador convierte las cadenas `<h2>` y `<p>` en nodos reales del DOM. Ahora el caso de seguridad:

```javascript
// Si `usuario` viene de un formulario o de la URL:
// tarjeta.innerHTML = "<p>Hola " + usuario + "</p>";  // riesgoso

tarjeta.textContent = "Hola " + usuario;  // seguro
```

La diferencia no se ve en la pantalla (se ve igual); se ve en la seguridad. Y ya que estás tocando nodos, el siguiente paso natural es cambiarles el look — B5.

### Díselo a la IA

> "Tengo que mostrar datos en esta parte de la página: [elemento]. Dime si conviene textContent o innerHTML para este caso, escríbeme el código, y si en algún punto entra contenido del usuario, muéstrame cómo sanearlo."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la diferencia central entre `textContent` e `innerHTML`?
   - a) `textContent` trata el valor como texto; `innerHTML` lo interpreta como HTML ✔
   - b) Son exactamente iguales
   - c) `textContent` solo sirve para números
   - d) `innerHTML` no funciona en el navegador

2. **[qué hace]** `tarjeta.innerHTML = "<b>Hola</b>";` — ¿qué mostrará la tarjeta?
   - a) Hola en negritas ✔
   - b) El texto literal `<b>Hola</b>`
   - c) Nada, da un error
   - d) Un botón

3. **[completar]** "Para insertar HTML desde una cadena usa ____; para texto plano que no se interprete usa ____."
   - Banco: `innerHTML` · `textContent` · `querySelector` · `appendChild`
   - Respuesta: innerHTML / textContent

4. **[verdadero/falso]** "Si pegas contenido del usuario con `innerHTML` sin limpiarlo, existe riesgo de inyección de código (XSS)."
   - Respuesta: VERDADERO — `innerHTML` interpreta etiquetas; contenido ajeno puede traer `<script>` u otras etiquetas maliciosas.

5. **[relacionar]** Une la herramienta con su papel:
   - `textContent` ↔ Texto plano, seguro
   - `innerHTML` ↔ Interpreta etiquetas HTML
   - `innerText` ↔ Solo el texto visible
   - `value` ↔ El contenido de un input

---

## B5 — Cambiar estilos y clases desde JavaScript

### Concepto

Última pieza del bloque: ya seleccionas (B3) y cambias contenido (B4). Ahora el aspecto. Dos caminos:

- **Estilo en línea** — `elemento.style.color = "red"`. Las propiedades CSS cambian de `kebab-case` a **camelCase**: `background-color` se vuelve `backgroundColor`, `font-size` se vuelve `fontSize`. Lo que tocas con `style` es el atributo `style="..."` del elemento.
- **Clases** — el camino profesional: `classList.add("dark")`, `classList.remove("dark")`, `classList.toggle("dark")` y `classList.contains("dark")` (pregunta si la tiene). Los estilos viven en tu CSS; JavaScript solo decide *cuándo* se aplican.

La regla de reparto: **CSS decide cómo se ve; JavaScript decide cuándo.** Para estados (resaltado, modo oscuro, tarjeta activa) usa clases: es mantenible y deja el diseño en un solo lugar. Guarda `style` para valores dinámicos que no conocías al escribir el CSS — posiciones, tamaños, coordenadas que llegan de datos.

Nota: `classList.add` agrega sin pisar las clases que ya tiene; `toggle` enciende y apaga en una sola llamada. El click que dispara todo esto llega en B6; aquí domina el interruptor.

### Analogía

El estilo en línea es **pintar una pared con brocha de mano**: sirve para una pared puntual, es un desastre para toda la casa. Las clases son el **guardarropa del escenario**: el vestuario (el CSS) ya está diseñado, y JavaScript es el asistente que decide cuándo el actor se pone el traje "dark" o se lo quita. Cambiar de vestuario es más barato que repintar la casa cada vez que cambia la escena.

### Cómo se ve en la práctica

Primero los estilos en tu CSS:

```css
.dark {
  background: #111;
  color: #eee;
}
.destacada {
  border: 2px solid #0a0;
  box-shadow: 0 0 12px rgba(0, 170, 0, 0.4);
}
```

Y el JavaScript que los enciende:

```javascript
const body = document.body;
const tarjeta = document.querySelector(".tarjeta");

body.classList.add("dark");              // el fondo cambia a oscuro
tarjeta.classList.toggle("destacada");   // la resalta, y al repetir la apaga
tarjeta.style.borderColor = "gold";      // un valor puntual en línea
```

Observa la división de trabajo: `dark` y `destacada` están definidas en CSS y solo se prenden y apagan desde JS; el dorado, en cambio, es un capricho del momento y se pone con `style`. Ahora repite la línea de `toggle` en la consola: la clase aparece y desaparece. Ese interruptor es la base de todo botón que cambia de tema, y el botón mismo llega en B6.

### Díselo a la IA

> "Cuando el usuario [acción, ej. presione el botón] quiero que [estado visual, ej. la tarjeta se resalte y el fondo se oscurezca]. Dame el CSS de las clases y el JavaScript con classList. Y dime si algún valor dinámico (posiciones, tamaños desde datos) conviene ponerlo con style en vez de clase."

### Ejercicios

1. **[opción múltiple]** ¿Cómo cambias el color de fondo de un elemento desde JavaScript?
   - a) `elemento.style.backgroundColor` ✔
   - b) `elemento.style.background-color`
   - c) `elemento.background = "red"`
   - d) `elemento.style.backgroundcolor`

2. **[verdadero/falso]** "Para estados visuales (resaltar, modo oscuro) es mejor definir clases en CSS y prenderlas con `classList` que pintar estilos uno por uno."
   - Respuesta: VERDADERO — las clases dejan el diseño en CSS y hacen que JavaScript solo decida cuándo se aplican.

3. **[completar]** "`classList.____` agrega la clase si no existe y la quita si ya existe; a eso se le llama ____."
   - Banco: `toggle` · `alternar` · `add` · `style`
   - Respuesta: toggle / alternar

4. **[qué hace]** `const c = document.querySelector(".tarjeta"); c.classList.add("destacada");` — si la clase `.destacada` tiene estilos en el CSS, ¿qué pasa?
   - a) La tarjeta recibe los estilos de `.destacada` ✔
   - b) La tarjeta pierde todas sus clases
   - c) El CSS se borra de la página
   - d) La tarjeta se oculta

5. **[relacionar]** Une la instrucción con lo que hace:
   - `style.backgroundColor` ↔ Estilo en línea, un solo valor
   - `classList.add` ↔ Añade una clase
   - `classList.remove` ↔ Quita una clase
   - `classList.toggle` ↔ Enciende o apaga una clase

---

## B6 — Eventos I: el click, el más importante de todos

### Concepto

Hasta B5, tu página solo actuaba cuando se cargaba. Los **eventos** son lo que la hacen *reaccionar*: el navegador está pendiente de lo que pasa —un clic, una tecla, un movimiento— y cuando pasa, ejecuta tu código. El modelo es simple: **escuchar + reaccionar**.

Para escuchar usas `addEventListener`, con dos datos: **qué evento** escuchar (su nombre en inglés, en minúsculas, entre comillas) y **qué función** ejecutar cuando ocurra:

```javascript
boton.addEventListener("click", function () {
  alert("Me hiciste clic");
});
```

El evento más usado de todos es `click`: botones, enlaces, tarjetas, iconos — todo se vuelve clickeable. Detalles que valen oro: el nombre es el primer argumento (`"click"` no lleva mayúsculas); la función que reacciona se llama **callback** y se ejecuta en *cada* clic, no una sola vez; puedes registrar varios listeners sobre el mismo elemento (se ejecutan todos, en orden); y el atributo HTML `onclick="..."` existe, pero es el camino viejo — mezcla HTML y JS. `addEventListener` es el profesional: el JavaScript vive separado, como viste en B1.

Con esto tu página deja de ser un póster y se vuelve un interlocutor. Y el click que dispara los interruptores de clases que dejaste listos en B5 ya está aquí.

### Analogía

Un evento es el **timbre de la puerta**: no necesitas quedarte todo el día mirando por la ventanita si alguien llega (eso sería revisar en un bucle eterno). Instalas el timbre —el `addEventListener`— y vives tu vida. Cuando alguien toca —el `click`—, suena la campana y se ejecuta la respuesta que programaste: abrir, saludar, pedir identificación. El timbre no decide quién toca: solo te avisa. La respuesta es tuya.

### Cómo se ve en la práctica

Este HTML:

```html
<button id="boton">Clic aquí</button>
<p id="contador">0</p>
```

Con este JavaScript:

```javascript
const boton = document.querySelector("#boton");
const contador = document.querySelector("#contador");
let veces = 0;

boton.addEventListener("click", function () {
  veces = veces + 1;
  contador.textContent = veces;
});
```

Cada clic suma uno y pinta el número nuevo en el `<p>` (`textContent` lo viste en B4). Nota que la función no tiene nombre y no se llama en ninguna parte: la **registras** en el listener y el navegador la invoca por ti en cada clic. Ese es el corazón de toda interfaz. En B7 verás los eventos de formularios; en B8, el objeto que el navegador te pasa cuando el evento ocurre.

### Díselo a la IA

> "Quiero que [botón, tarjeta o enlace] responda cuando el usuario le haga clic y ocurra esto: [describe la acción, ej. mostrar un mensaje, cambiar de tema, abrir un panel]. Dame el JavaScript con addEventListener, dime qué evento usar, y si necesito un solo listener o varios sobre el mismo elemento."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la forma moderna de escuchar un clic sobre el elemento `boton`?
   - a) `boton.addEventListener("click", function () { ... })` ✔
   - b) `boton.onclick = "alert('hola')"`
   - c) `click(boton)`
   - d) `boton.addEvent("click")`

2. **[completar]** "Para escuchar un evento usas ____ con dos datos: el nombre del evento y la función que se ____ en cada ocurrencia."
   - Banco: `addEventListener` · `ejecuta` · `click` · `carga`
   - Respuesta: addEventListener / ejecuta

3. **[relacionar]** Une el término con su papel:
   - `addEventListener` ↔ Registra la función que reacciona
   - `"click"` ↔ El evento a escuchar
   - callback ↔ La función que se ejecuta
   - varios listeners ↔ Se ejecutan en orden sobre el mismo elemento

4. **[verdadero/falso]** "Un `addEventListener` registrado sobre un botón se ejecuta una sola vez en toda la sesión."
   - Respuesta: FALSO — se ejecuta en CADA clic; por eso sirve para contadores e interruptores.

5. **[qué hace]** `const b = document.querySelector("#miboton"); b.addEventListener("click", function () { document.body.classList.toggle("oscuro"); });` — ¿qué efecto tiene cada clic en el botón?
   - a) Prende y apaga la clase `oscuro` en el body ✔
   - b) Borra el botón
   - c) Recarga la página
   - d) Cambia el texto del botón

---

## B7 — Eventos II: input, change y submit

### Concepto

El `click` (B6) es el evento de los botones. Los formularios tienen los suyos, y hay tres que vas a usar todos los días:

- `input` — se dispara **con cada tecla** mientras el usuario escribe (o con cada cambio en un checkbox). Ideal para búsquedas en vivo y contadores de caracteres.
- `change` — se dispara cuando el valor **se consolida**: el usuario termina de escribir y sale del campo (o elige en un `<select>`). No se dispara tecla por tecla.
- `submit` — se dispara cuando el formulario **se envía** (clic en el botón de enviar o Enter). Vive en el `<form>`, no en el botón.

El dato que siempre te interesa es **el valor actual**, y se lee con `.value`: en cada evento, lees `campo.value` para saber qué escribió el usuario. (Ese `value` ya lo conoces de B4.)

Regla de reparto: si necesitas *cada letra* → `input`. Si necesitas el resultado *final* → `change`. Si es el envío completo → `submit`. Los tres, escuchados sobre elementos distintos del formulario. (Capturar y validar el formulario completo a fondo lo ves en B23; aquí domina el vocabulario.)

### Analogía

Llenas una solicitud frente a un empleado. `input` es el empleado que **va en voz alta con cada letra** mientras tipeas: reacciona al instante, tecla por tecla. `change` es cuando el empleado **da por terminado el campo**: dejas el casillero y él sella "anotado" con el valor final. `submit` es cuando **firmas y entregas la solicitud completa**: ya no es un campo, es el documento entero. Tres momentos distintos de la misma conversación: escribes, te detienes, entregas.

### Cómo se ve en la práctica

Este HTML:

```html
<input type="text" id="busqueda" placeholder="Escribe...">
<p id="vivo"></p>
<form id="formulario">
  <input type="text" name="nombre" placeholder="Tu nombre">
  <button type="submit">Enviar</button>
</form>
```

Con este JavaScript:

```javascript
const busqueda = document.querySelector("#busqueda");
const vivo = document.querySelector("#vivo");

busqueda.addEventListener("input", function () {
  vivo.textContent = "Buscando: " + busqueda.value;
});

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", function () {
  alert("Enviado: " + formulario.querySelector("input").value);
});
```

El `input` actualiza la vista con cada tecla: es el patrón de las búsquedas en vivo. El `submit` reacciona al envío completo. Ojo: con `submit`, el navegador también recarga la página por defecto — cómo evitarlo es exactamente el tema de B8. Y nota dónde vive cada evento: `input` y `change` se escuchan sobre el campo; `submit`, sobre el `<form>` completo.

### Díselo a la IA

> "Tengo un formulario con un campo de búsqueda y un botón de enviar. Quiero [reacción en vivo mientras escribe] y [reacción al enviar]. Dime cuál de los eventos input, change o submit corresponde a cada caso, dónde se escucha cada uno (campo o form), y el código con .value."

### Ejercicios

1. **[opción múltiple]** ¿Cuál evento se dispara con CADA tecla que escribe el usuario?
   - a) `input` ✔
   - b) `change`
   - c) `submit`
   - d) `click`

2. **[relacionar]** Une el evento con su momento:
   - `input` ↔ Reacción en vivo, cada tecla
   - `change` ↔ Cuando el valor se consolida
   - `submit` ↔ Cuando se envía el formulario
   - `value` ↔ El contenido actual del campo

3. **[qué hace]** `const campo = document.querySelector("#nombre"); campo.addEventListener("change", function () { console.log(campo.value); });` — ¿cuándo se ejecuta el `console.log`?
   - a) En cada tecla mientras escribe
   - b) Cuando el usuario termina el campo y sale de él ✔
   - c) Al cargar la página
   - d) Cada vez que se envía el formulario

4. **[completar]** "El evento ____ se escucha sobre el elemento form, y se dispara cuando el usuario ____ el formulario."
   - Banco: `submit` · `envía` · `click` · `borra`
   - Respuesta: submit / envía

5. **[verdadero/falso]** "El evento `change` se dispara una vez por cada letra que escribe el usuario."
   - Respuesta: FALSO — `change` se dispara cuando el valor se consolida (al salir del campo); el que dispara por letra es `input`.

---

## B8 — Eventos III: el objeto event y preventDefault

### Concepto

Cuando el evento ocurre (B6 y B7), el navegador no llama a tu función a ciegas: le pasa un **objeto event** — una bolsa de datos sobre lo que pasó. Lo recibes como primer parámetro del callback, y por convención se llama `event` o `e`:

```javascript
boton.addEventListener("click", function (event) {
  console.log(event.target);  // sobre qué elemento se hizo clic
  console.log(event.type);    // el nombre del evento
});
```

Tres usos que resuelven problemas reales:

- `event.target` — **qué elemento** disparó el evento. Clave cuando varios elementos comparten el mismo listener (lo necesitas en B9 para borrar el elemento correcto).
- `event.type` — el nombre del evento que ocurrió.
- `event.preventDefault()` — el superpoder: muchos eventos traen un **comportamiento por defecto** del navegador. Un `submit` recarga la página; un clic en un `<a href>` navega a otra URL. `preventDefault()` cancela eso y te deja a ti el control.

Es la pieza que faltaba en B7: sin `preventDefault`, tu submit recarga la página y pierdes lo que JavaScript estaba haciendo.

### Analogía

El objeto event es el **parte del evento**: cuando tocan el timbre (B6), no solo suena la campana — te dejan en la puerta una hoja con los datos: quién tocó (`target`), qué tipo de timbre (`type`). Y `preventDefault` es el **freno de mano**: el navegador trae acciones por defecto rodando cuesta abajo —recargar, navegar—; con `preventDefault` jalas el freno antes de que las haga, y decides tú qué pasa.

### Cómo se ve en la práctica

Este HTML:

```html
<a href="https://ejemplo.com" id="enlace">Ir a ejemplo.com</a>
<form id="formulario">
  <input type="text" id="email" placeholder="Email">
  <button type="submit">Registrarme</button>
</form>
```

Con este JavaScript:

```javascript
document.querySelector("#enlace").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Navegación detenida. Target: " + event.target.tagName);
});

document.querySelector("#formulario").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  console.log("Enviando sin recargar: " + email);
});
```

En el clic, `preventDefault` cancela la navegación y `event.target.tagName` te dice que tocaste un `A` (anchor). En el submit, el formulario no recarga y tú decides qué hacer con el dato. Ese patrón —detener lo por defecto y controlar el flujo— es la base de los formularios modernos (B23).

### Díselo a la IA

> "Tengo [un formulario que recarga la página al enviarse / un enlace que navega y no quiero que navegue]. Muéstrame el código con addEventListener y event.preventDefault(), y dime cómo usar event.target si quiero que varios elementos compartan un solo listener."

### Ejercicios

1. **[qué hace]** `const form = document.querySelector("#form"); form.addEventListener("submit", function (event) { event.preventDefault(); console.log("Atrapado"); });` — ¿qué logra `preventDefault()` en este submit?
   - a) Evita que el formulario recargue la página ✔
   - b) Borra el formulario
   - c) Detiene todos los clicks de la página
   - d) Impide que el submit se dispare

2. **[opción múltiple]** ¿Qué información te da `event.target`?
   - a) El elemento sobre el que ocurrió el evento ✔
   - b) La hora exacta del evento
   - c) El número de veces que ocurrió
   - d) El navegador del usuario

3. **[relacionar]** Une el dato con su significado:
   - `event` ↔ El objeto con los datos del evento
   - `event.target` ↔ Qué elemento lo disparó
   - `event.type` ↔ El nombre del evento
   - `preventDefault()` ↔ Cancela el comportamiento por defecto

4. **[completar]** "El callback del listener recibe como primer parámetro el objeto ____; para cancelar la recarga de un submit se llama a ____."
   - Banco: `event` · `preventDefault()` · `target` · `submit()`
   - Respuesta: event / preventDefault()

5. **[verdadero/falso]** "El objeto event tiene que llamarse obligatoriamente 'event' para que el navegador lo reconozca."
   - Respuesta: FALSO — es una convención: puedes llamarlo `e` o `evt`, porque es un parámetro normal de la función.

---

## B9 — Crear y borrar elementos dinámicamente

### Concepto

Hasta B5 modificabas elementos que ya existían en el HTML. Ahora vas a **crearlos en tiempo real**: la página crece según los datos o las acciones del usuario. Tres herramientas:

- `document.createElement("li")` — crea un elemento **en memoria** (todavía no se ve en pantalla).
- `padre.append(nuevo)` — lo **inserta** al final del padre. (`appendChild` es el clásico; `append` acepta varios nodos y también texto.)
- `nuevo.remove()` — **borra el elemento** del documento.

El patrón es siempre el mismo: **crear → llenar → insertar**:

```javascript
const item = document.createElement("li");   // crear
item.textContent = "Pan";                    // llenar (textContent: B4)
lista.append(item);                          // insertar
```

Combinado con eventos (B6), tienes el clásico "agregar y borrar": un botón agrega, y al hacer clic sobre un item lo eliminas con `item.remove()`. Cuando varios elementos comparten listener, necesitas `event.target` (B8) para saber cuál borrar. Cuidado con el atajo `padre.innerHTML += "..."`: funciona, pero reconstruye todo el contenido del padre y, con datos ajenos, abre la puerta a XSS (B4).

### Analogía

El DOM es un **tablero de LEGO** y tú tienes la caja de piezas: `createElement` es sacar una pieza nueva de la caja —aún en tu mano, no en el tablero—, `append` es encajarla en su lugar, y `remove` es desmontar una pieza y retirarla. Puedes armar y desarmar el tablero en tiempo real sin romper lo demás. La pieza no existe en el tablero hasta que la encajas: un elemento creado no se ve hasta que lo insertas.

### Cómo se ve en la práctica

Este HTML:

```html
<ul id="lista"></ul>
<button id="agregar">Agregar tarea</button>
```

Con este JavaScript:

```javascript
const lista = document.querySelector("#lista");
const boton = document.querySelector("#agregar");

boton.addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "Tarea " + (lista.children.length + 1);
  item.addEventListener("click", function () {
    item.remove();
  });
  lista.append(item);
});
```

Cada clic crea un `<li>`, lo llena, le pone su propio listener de borrado y lo encaja en la lista; y cada `<li>` se elimina a sí mismo con `remove()` al hacerle clic. Fíjate en el orden: **crear, llenar, insertar** — y cada elemento nuevo lleva sus propios oídos. Cuando quieras que la lista se llene sola desde un arreglo de datos (sin clic por clic), eso es B10.

### Díselo a la IA

> "Quiero que el usuario pueda [agregar / borrar / marcar] elementos de una lista, como una lista de tareas. Dame el código: crear con createElement, llenar con textContent, insertar con append, y el borrado con remove() usando addEventListener. Dime si conviene un listener por elemento o uno compartido con event.target."

### Ejercicios

1. **[completar]** "El patrón para crear elementos es: ____ el elemento con `createElement`, ____ con `textContent` y ____ al padre con `append`."
   - Banco: `crear` · `llenar` · `insertar` · `borrar`
   - Respuesta: crear / llenar / insertar

2. **[opción múltiple]** ¿Qué hace exactamente `document.createElement("li")`?
   - a) Crea un `<li>` en memoria que aún no se ve en la página ✔
   - b) Lo inserta al instante al final del body
   - c) Busca un `<li>` que ya existe
   - d) Borra el `<li>` más reciente

3. **[relacionar]** Une la herramienta con lo que hace:
   - `createElement` ↔ Crea el elemento en memoria
   - `append` ↔ Inserta el elemento en el padre
   - `remove` ↔ Borra el elemento del documento
   - `textContent` ↔ Llena el elemento con texto plano

4. **[qué hace]** `const lista = document.querySelector("#lista"); const item = document.createElement("li"); item.textContent = "Nuevo"; lista.append(item);` — ¿qué pasa con el `<li>` creado?
   - a) Aparece como un nuevo elemento dentro de la lista ✔
   - b) Aparece en el body fuera de la lista
   - c) No aparece porque falta addEventListener
   - d) Reemplaza a todos los `<li>` existentes

5. **[verdadero/falso]** "Un elemento creado con `createElement` se muestra en pantalla automáticamente en cuanto se crea."
   - Respuesta: FALSO — `createElement` solo lo crea en memoria; necesita `append` (o similar) para insertarse en el DOM y verse.

---

## B10 — Recorrer listas: pintar datos en pantalla

### Concepto

Ya sabes crear elementos sueltos (B9). El problema real es: **tengo 50 productos en un arreglo, ¿los escribo a mano?** No — los recorres con un **bucle**. Un bucle es la instrucción "haz esto con cada elemento de la lista". Dos sintaxis que vas a reconocer:

```javascript
for (const producto of productos) {
  // una vuelta por cada elemento
}

productos.forEach(function (producto) {
  // igual: una vuelta por cada elemento
});
```

El patrón completo para pintar datos se arma con lo que ya sabes:

```javascript
productos.forEach(function (producto) {
  const item = document.createElement("li");  // crear (B9)
  item.textContent = producto.nombre;           // llenar (B4)
  lista.append(item);                          // insertar (B9)
});
```

Tres datos que te ahorran errores: dentro del bucle, `producto` es el elemento **de turno** — cambia en cada vuelta; `forEach` también funciona en las listas de nodos del DOM (`document.querySelectorAll("...").forEach(...)`, B3); y el bucle corre hasta terminar de recorrer — con 50 elementos, se ejecuta 50 veces y pinta 50 elementos.

### Analogía

El bucle es la **línea de empaque**: los productos pasan uno por uno por la banda y en cada uno haces el mismo gesto —ponerle etiqueta y colocarlo en la caja—. No preparas 50 etiquetas a mano: configuras la banda una vez y ella repite el gesto con cada producto. La caja al final (el `<ul>`) queda llena sin que hayas tocado pieza por pieza.

### Cómo se ve en la práctica

Este HTML:

```html
<ul id="productos"></ul>
```

Con este JavaScript:

```javascript
const productos = [
  { nombre: "Audífonos", precio: 499 },
  { nombre: "Teclado", precio: 899 },
  { nombre: "Mouse", precio: 349 }
];
const lista = document.querySelector("#productos");

productos.forEach(function (producto) {
  const item = document.createElement("li");
  item.textContent = producto.nombre + " — $" + producto.precio;
  lista.append(item);
});
```

El arreglo tiene 3 objetos; el bucle da 3 vueltas y la lista termina con 3 `<li>`. Si mañana agregas un cuarto producto al arreglo, el código no cambia: el bucle lo pinta solo. La ventaja es que **el código describe la operación, no los datos**. (Cuando quieras transformar esos datos antes de pintarlos —filtrar o buscar—, los métodos de B12 se encargan.)

### Díselo a la IA

> "Tengo esta lista de datos: [pega tu arreglo de objetos]. Quiero pintarlos dentro de [contenedor], cada uno como [formato, ej. un li con nombre y precio]. Dame el código con forEach o for...of usando createElement y append, y dime qué hacer si quiero que la lista se repinte cuando los datos cambien."

### Ejercicios

1. **[qué hace]** `const frutas = ["mango", "papaya", "coco"]; frutas.forEach(function (fruta) { console.log(fruta); });` — ¿qué imprime la consola?
   - a) mango, papaya, coco — uno por línea ✔
   - b) fruta, fruta, fruta
   - c) El arreglo completo en una sola línea
   - d) Nada, porque falta addEventListener

2. **[completar]** "El método ____ ejecuta la función una vez por ____ elemento del arreglo."
   - Banco: `forEach` · `cada` · `uno` · `click`
   - Respuesta: forEach / cada

3. **[opción múltiple]** ¿Cuál es el propósito de recorrer un arreglo de datos con un bucle?
   - a) Aplicar la misma operación a cada elemento ✔
   - b) Borrar la página
   - c) Recargar el navegador
   - d) Crear un solo elemento, una sola vez

4. **[ordenar]** Ordena los pasos para pintar un arreglo de datos en una lista:
   - Pasos: tener el arreglo de datos → seleccionar el contenedor con querySelector → recorrer el arreglo con forEach → crear un elemento con createElement → llenarlo con textContent e insertarlo con append

5. **[verdadero/falso]** "`querySelectorAll` devuelve una lista de nodos sobre la que puedes usar `forEach` directamente."
   - Respuesta: VERDADERO — las NodeList soportan `forEach`, así que puedes recorrer todos los elementos seleccionados sin convertirlos.

---

## B11 — Funciones flecha y sintaxis moderna

### Concepto

Desde B9 escribes funciones con la palabra `function`. La **función flecha** (arrow function) es la misma idea con una sintaxis más corta — y hoy es la que verás en casi todo código moderno, incluido el que la IA genera. La diferencia es de forma, no de poder:

```javascript
// Función normal (lo que ya conoces)
function doble(numero) {
  return numero * 2;
}

// Función flecha
const doble = (numero) => {
  return numero * 2;
};

// Función flecha con return implícito
const doble = (numero) => numero * 2;
```

Lee la flecha `=>` como **"va y regresa"**: `numero => numero * 2` se lee "numero va y regresa numero por 2". Tres reglas de sintaxis moderna: si el cuerpo es una sola expresión, se omite `return` (es el **return implícito**: la última expresión se devuelve sola); si hay un solo parámetro, los paréntesis son opcionales (`n => n * 2`); y si el cuerpo necesita varias líneas, usas `{ }` y entonces sí escribes `return`.

La flecha es omnipresente en los **callbacks** —las funciones que pasas como argumento—: `forEach` (B10), eventos (B6) y, desde la próxima lección, `map`, `filter` y `find`. La reconoces al instante: una línea con `=>`. Un detalle que aparece en la documentación: las flechas no tienen su propio `this`; en la práctica, dentro de un callback flecha `this` sigue siendo el de afuera. Reconócelo cuando lo veas, no lo memorices.

### Analogía

La función normal es la **receta completa**: "mezcla, reposa, revuelve y regresa el resultado". La flecha es la **nota de cocina**: "2 × n, regresa eso". Cuando el platillo es una sola operación, la nota alcanza; cuando son varios pasos, vuelves a la receta con llaves. Las dos producen exactamente lo mismo — cambia la forma de escribirlo, no el resultado. Por eso la IA alterna entre las dos sin drama.

### Cómo se ve en la práctica

Este HTML (el mismo de B10):

```html
<ul id="productos"></ul>
```

Y este JavaScript en las dos versiones:

```javascript
const lista = document.querySelector("#productos");

// Versión con function (patrón de B10)
productos.forEach(function (producto) {
  const item = document.createElement("li");
  item.textContent = producto.nombre;
  lista.append(item);
});

// Versión con flecha
productos.forEach((producto) => {
  const item = document.createElement("li");
  item.textContent = producto.nombre;
  lista.append(item);
});
```

Cuando el callback es una sola línea, la flecha se encoge:

```javascript
productos.forEach(producto => console.log(producto.nombre));
```

Mismo recorrido de B10, distinto empaque. Y en los eventos (B6) el patrón es igual: `boton.addEventListener("click", (e) => { ... })` — el evento llega como parámetro y la flecha lo recibe.

### Díselo a la IA

> "Este código usa callbacks con function. Conviértemelo a funciones flecha y explícame en una línea qué cambió en cada caso. Si alguna flecha necesita return explícito o varias líneas, dime por qué."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la forma flecha con return implícito de una función que duplica?
   - a) `const doble = (n) => n * 2;` ✔
   - b) `const doble = (n) => { n * 2 };`
   - c) `function doble(n) { return n * 2; }`
   - d) `const doble = (n) => return n * 2;`

2. **[completar]** "En una función flecha con una sola ____, el ____ se puede omitir: la última expresión se devuelve sola."
   - Banco: `expresión` · `return` · `función` · `llaves`
   - Respuesta: expresión / return

3. **[qué hace]** `const precioFinal = (monto, impuesto) => monto + monto * impuesto; console.log(precioFinal(100, 0.16));` — ¿qué imprime la consola?
   - a) 116 ✔
   - b) 100
   - c) 0.16
   - d) 100.16

4. **[verdadero/falso]** "Una función flecha con un solo parámetro puede omitir los paréntesis: `n => n * 2`."
   - Respuesta: VERDADERO — con un solo parámetro los paréntesis son opcionales; con varios o ninguno se necesitan.

5. **[relacionar]** Une cada versión con su nombre:
   - `function (x) { return x + 1; }` ↔ Versión clásica con function
   - `(x) => x + 1` ↔ Flecha con return implícito
   - `x => x + 1` ↔ Flecha sin paréntesis (un parámetro)
   - `(x) => { return x + 1; }` ↔ Flecha con cuerpo de varias líneas

---

## B12 — Métodos de arreglo: map, filter, find

### Concepto

En B10 recorriste arreglos con `forEach` para pintarlos. Los métodos de esta lección hacen más que recorrer: **transforman, filtran y buscan** — y usan las flechas de B11. Tres herramientas que verás todos los días:

- `map` — **transforma cada elemento** y devuelve un arreglo nuevo del mismo tamaño. Aplica la función a cada elemento y junta los resultados.
- `filter` — **selecciona los que pasan una prueba** y devuelve un arreglo nuevo (casi siempre más corto). El callback regresa `true` o `false`.
- `find` — **devuelve el primer elemento que pasa la prueba**, o `undefined` si ninguno.

El punto que más gente olvida: **ninguno modifica el arreglo original**. `map` y `filter` regresan arreglos nuevos; `find` regresa un elemento. Para modificar un arreglo de verdad existen `push`, `splice` y compañía — reconócelos cuando aparezcan.

```javascript
const nombres = productos.map(p => p.nombre);
const baratos = productos.filter(p => p.precio < 500);
const buscado = productos.find(p => p.id === 2);
```

El patrón mental: el callback decide **cómo** (map) o **si** (filter y find). `map` describe una transformación; `filter` describe un criterio. En B14 combinarás `map` con template literals para generar HTML desde un arreglo entero.

### Analogía

`map` es la **fábrica de empaque**: cada pieza entra y sale convertida en otra cosa —cada producto sale convertido en su nombre— y todas salen, ninguna se pierde. `filter` es el **control de calidad**: solo pasan las piezas que cumplen la norma (precio menor a 500); las demás no llegan a la caja. `find` es el **conserje del edificio**: le preguntas por el departamento 2 y te trae al primer habitante que lo tiene; si no existe, te regresa un encogimiento de hombros (`undefined`). Las tres trabajan sobre la misma banda: el arreglo original sigue intacto en el almacén.

### Cómo se ve en la práctica

Este arreglo de productos (mismo estilo de B10):

```javascript
const productos = [
  { id: 1, nombre: "Audífonos", precio: 499 },
  { id: 2, nombre: "Teclado", precio: 899 },
  { id: 3, nombre: "Mouse", precio: 349 }
];
```

Transformar, filtrar y buscar:

```javascript
const nombres = productos.map(p => p.nombre);
console.log(nombres);          // ["Audífonos", "Teclado", "Mouse"]

const accesibles = productos.filter(p => p.precio < 500);
console.log(accesibles);       // Audífonos y Mouse

const teclado = productos.find(p => p.id === 2);
console.log(teclado.nombre);   // "Teclado"

const inexistente = productos.find(p => p.id === 99);
console.log(inexistente);      // undefined
```

Fíjate en las flechas (B11): cada callback es una línea y regresa la transformación o la prueba. Y **`productos` queda intacto**: `nombres`, `accesibles` y `teclado` son cosas nuevas. Cuando quieras pintar esos resultados, en B14 los conviertes en HTML con `map` + template literals.

### Díselo a la IA

> "Tengo este arreglo de datos: [pega tu arreglo]. Necesito: 1) una versión transformada con solo [campos], 2) filtrar por [criterio], 3) encontrar el que cumpla [condición]. Dame el código con map, filter y find usando funciones flecha, y dime cuál de los tres toca el arreglo original."

### Ejercicios

1. **[relacionar]** Une el método con lo que hace:
   - `map` ↔ Transforma cada elemento y devuelve un arreglo del mismo tamaño
   - `filter` ↔ Devuelve los que pasan la prueba
   - `find` ↔ Devuelve el primer elemento que pasa la prueba
   - `forEach` ↔ Recorre sin devolver un arreglo nuevo

2. **[completar]** "____ y ____ devuelven arreglos nuevos y no modifican el ____ original."
   - Banco: `map` · `filter` · `arreglo` · `HTML`
   - Respuesta: map / filter / arreglo

3. **[qué hace]** `const notas = [8, 9, 6, 10]; const aprobadas = notas.filter(n => n >= 8); console.log(aprobadas);` — ¿qué imprime la consola?
   - a) `[8, 9, 10]` ✔
   - b) `[6]`
   - c) `[8, 9, 6, 10]`
   - d) `[9, 10]`

4. **[opción múltiple]** ¿Qué devuelve `find` cuando ningún elemento cumple la prueba?
   - a) `undefined` ✔
   - b) Un arreglo vacío `[]`
   - c) El último elemento del arreglo
   - d) `null`

5. **[verdadero/falso]** "`filter` modifica el arreglo original quitando los elementos que no cumplen."
   - Respuesta: FALSO — `filter` no toca el original: devuelve un arreglo nuevo solo con los que pasan la prueba.

---

## B13 — Objetos y destructuring

### Concepto

Los objetos te acompañan desde B10: cada producto de tu lista era un objeto con `nombre` y `precio`. Un objeto agrupa datos relacionados con el formato `{ clave: valor }`, y los accedes con un punto:

```javascript
const producto = { nombre: "Audífonos", precio: 499, stock: 12 };
console.log(producto.nombre);   // "Audífonos"
console.log(producto.precio);   // 499
```

La sintaxis moderna de esta lección es el **destructuring** (desestructuración): en una sola línea **extraes varias propiedades y las conviertes en variables**.

```javascript
const { nombre, precio } = producto;
console.log(nombre);  // "Audífonos"
console.log(precio);  // 499
```

Lee la línea como "saca `nombre` y `precio` del objeto". Trucos que vas a reconocer: puedes renombrar (`{ nombre: n }`), dar un valor por defecto (`{ stock = 0 }`), extraer propiedades anidadas, y el mismo patrón funciona con arreglos (`const [primero, segundo] = productos`). El objeto original no se modifica: solo copias sus valores a variables nuevas. El destructuring brilla al leer datos de una API (B21) o cuando una función recibe un objeto y quieres las partes por separado.

### Analogía

Un objeto es un **folder de archivo etiquetado**: cada ficha tiene un nombre y un dato. Leer `producto.nombre` es abrir el folder y sacar la ficha del nombre. El destructuring es **vaciar el folder sobre el escritorio**: de un solo movimiento todas las fichas quedan como papeles sueltos (variables) listos para usar. El folder no se vacía de verdad — solo hiciste copias en tu escritorio.

### Cómo se ve en la práctica

Con el arreglo de productos:

```javascript
const productos = [
  { id: 1, nombre: "Audífonos", precio: 499 },
  { id: 2, nombre: "Teclado", precio: 899 }
];
```

Acceso clásico:

```javascript
const primero = productos[0];
console.log(primero.nombre + " — " + primero.precio);
```

Y con destructuring dentro de un `map` (flechas: B11, map: B12):

```javascript
const fichas = productos.map(({ nombre, precio }) => {
  return nombre + " — " + precio;
});
console.log(fichas);  // ["Audífonos — 499", "Teclado — 899"]
```

Las llaves en el parámetro `({ nombre, precio })` dicen: "del objeto que voy a recibir, sácame `nombre` y `precio`". En B14 este patrón — `map` + destructuring + template literal — es exactamente el que genera listas de HTML desde datos.

### Díselo a la IA

> "Tengo este arreglo de objetos: [pega tus datos]. Usa destructuring para extraer [campos] y muéstrame: 1) cómo desestructurar dentro de un map, 2) cómo renombrar una propiedad, y 3) cómo dar un valor por defecto cuando una propiedad no existe."

### Ejercicios

1. **[completar]** "El destructuring extrae propiedades de un objeto y las convierte en ____, sin tocar el ____ original."
   - Banco: `variables` · `objeto` · `página` · `DOM`
   - Respuesta: variables / objeto

2. **[opción múltiple]** ¿Qué hace exactamente `const { precio } = producto;`?
   - a) Crea una variable `precio` con el valor de `producto.precio` ✔
   - b) Borra la propiedad precio del objeto
   - c) Multiplica precio por 2
   - d) Crea una copia completa del objeto

3. **[qué hace]** `const usuario = { nombre: "Luis", edad: 30 }; const { edad } = usuario; console.log(edad);` — ¿qué imprime la consola?
   - a) 30 ✔
   - b) Luis
   - c) usuario
   - d) undefined

4. **[verdadero/falso]** "El destructuring modifica el objeto original quitando las propiedades extraídas."
   - Respuesta: FALSO — el destructuring solo copia los valores a variables nuevas; el objeto queda intacto.

5. **[relacionar]** Une la sintaxis con lo que hace:
   - `producto.nombre` ↔ Acceso con punto
   - `const { nombre } = producto` ↔ Extraer nombre como variable
   - `{ nombre: n }` ↔ Renombrar al desestructurar
   - `{ stock = 0 }` ↔ Valor por defecto si falta la propiedad

---

## B14 — Template literals: armar HTML desde datos

### Concepto

Hasta ahora uniste texto con `+`: `"Hola " + nombre`. El **template literal** es la forma moderna de armar cadenas — y, unido a lo que ya sabes, se vuelve la máquina que convierte datos en HTML. Se escribe con **backticks** (`` ` ``) y mete valores con `${...}`:

```javascript
const nombre = "Audífonos";
const precio = 499;

const texto = `El ${nombre} cuesta $${precio}`;
console.log(texto);  // "El Audífonos cuesta $499"
```

Tres superpoderes sobre las comillas normales: **interpolación** — `${expresion}` mete el valor de cualquier expresión: variable, suma, llamada a función; **multilínea** — puedes escribir saltos de línea reales sin `\n`; y **se combinan** — con `map` (B12) y destructuring (B13) conviertes un arreglo en una lista de HTML.

El patrón que arma listas desde datos (compáralo con el crear-llenar-insertar de B10):

```javascript
const htmlLista = productos
  .map(p => `<li>${p.nombre} — $${p.precio}</li>`)
  .join("");
contenedor.innerHTML = htmlLista;
```

`map` convierte cada producto en un pedazo de HTML, `join("")` los pega en una sola cadena, `innerHTML` (B4) la pinta. Ojo: un template literal **no sanitiza nada** — si el dato viene de un usuario, el riesgo XSS de B4 sigue ahí. Datos ajenos, `textContent` o sanitiza antes.

### Analogía

El template literal es la **maqueta de formulario con huecos**: el texto ya está impreso y `${...}` son los campos en blanco donde se llena el dato de turno. Escribir la misma carta 50 veces no tiene sentido: escribes el molde una vez y en cada pasada solo cambian los valores. `map` (B12) es la imprenta que pasa las 50 copias por el molde.

### Cómo se ve en la práctica

Este HTML:

```html
<ul id="productos"></ul>
```

Y estos datos (mismo arreglo de B12):

```javascript
const productos = [
  { nombre: "Audífonos", precio: 499 },
  { nombre: "Teclado", precio: 899 },
  { nombre: "Mouse", precio: 349 }
];
```

Convertirlos a HTML en dos líneas:

```javascript
const contenedor = document.querySelector("#productos");

contenedor.innerHTML = productos
  .map(p => `<li>${p.nombre} — $${p.precio}</li>`)
  .join("");
```

Resultado: una `<ul>` con tres `<li>`, sin crear elementos a mano. Con destructuring (B13) queda igual de claro:

```javascript
contenedor.innerHTML = productos
  .map(({ nombre, precio }) => `<li>${nombre} — $${precio}</li>`)
  .join("");
```

Si mañana agregas un cuarto producto, el código no cambia: el molde lo pinta solo. En B15 vas a condicionar qué se muestra — aquí generas el HTML, allá decides cuándo pintarlo.

### Díselo a la IA

> "Tengo este arreglo de datos: [pega tus objetos]. Quiero generar el HTML de [estructura, ej. una tarjeta con título y precio] dentro de [contenedor]. Dame el código con map, destructuring y template literals, y dime cómo manejar los casos en que un dato llegue vacío."

### Ejercicios

1. **[qué hace]** `const producto = "Teclado"; console.log(`Oferta: ${producto}`);` — ¿qué imprime la consola?
   - a) Oferta: Teclado ✔
   - b) Oferta: ${producto}
   - c) Oferta: "Teclado"
   - d) Un error de sintaxis

2. **[completar]** "Los template literals se escriben con ____ (backticks) e insertan valores con ____."
   - Banco: `` ` `` · `${}` · `comillas` · `paréntesis`
   - Respuesta: ` / ${}

3. **[opción múltiple]** ¿Qué hace `.join("")` después de un `map` que genera HTML?
   - a) Pega todos los pedazos en una sola cadena ✔
   - b) Borra el arreglo
   - c) Convierte todo a números
   - d) Repite el primer elemento

4. **[verdadero/falso]** "Un template literal puede contener saltos de línea reales sin usar `\n`."
   - Respuesta: VERDADERO — los backticks permiten escribir el texto en varias líneas tal cual.

5. **[relacionar]** Une la pieza con su papel:
   - `` `...` `` ↔ Template literal (backticks)
   - `${precio}` ↔ Interpola el valor de una expresión
   - `join("")` ↔ Une los elementos de un arreglo en una cadena
   - `innerHTML` ↔ Pinta el HTML generado (B4)

---

## B15 — Condicionales en la interfaz: mostrar, ocultar, alternar

### Concepto

Toda la interfaz moderna es un juego de **mostrar y ocultar**: menús que se despliegan, mensajes que aparecen, secciones que cambian según los datos. Dos formas de hacerlo:

- **Con estilo directo** — `elemento.style.display = "none"` lo oculta (sale del flujo, no deja hueco) y `elemento.style.display = ""` lo regresa: el CSS de la página vuelve a mandar.
- **Con clases** (la favorita) — `classList.add("oculto")`, `classList.remove("oculto")` y la joya `classList.toggle("oculto")`, que **alterna**: si la clase no está, la pone; si está, la quita.

Y cuando la decisión depende de los datos, usas los condicionales que ya reconoces:

```javascript
if (producto.stock === 0) {
  boton.classList.add("deshabilitado");
  mensaje.textContent = "Agotado";
} else {
  boton.classList.remove("deshabilitado");
}
```

Dos principios que ordenan todo: **la clase `oculto` se define una vez en CSS** (por ejemplo `.oculto { display: none; }`) y JavaScript solo la prende o la apaga; y **la interfaz es un reflejo del estado** — si el dato cambia (stock llega a 0), vuelves a correr la lógica y la pantalla se actualiza. Cuando quieras recordar ese estado entre visitas, entra en juego localStorage (B16).

### Analogía

Mostrar y ocultar es el **telón del teatro**. `display: none` es el telón cerrado: el escenario deja de existir para el público, pero está intacto detrás; `display: ""` lo vuelve a abrir. `classList.toggle` es el **interruptor de luz**: cada clic cambia el estado — si estaba prendido, apaga; si estaba apagado, prende. No revisas nada: el interruptor decide solo. Tú solo defines una vez qué significa "apagado" en el CSS, como defines en el teatro qué es "telón abajo".

### Cómo se ve en la práctica

Este HTML:

```html
<button id="menuBoton">Menú</button>
<nav id="menu" class="oculto">
  <a href="#">Inicio</a>
  <a href="#">Tienda</a>
</nav>

<p id="aviso" class="oculto"></p>
```

Este CSS (una sola regla, la clase):

```css
.oculto { display: none; }
```

Y este JavaScript:

```javascript
const menu = document.querySelector("#menu");
const boton = document.querySelector("#menuBoton");
const aviso = document.querySelector("#aviso");

// Alternar: cada clic prende o apaga la clase
boton.addEventListener("click", () => {
  menu.classList.toggle("oculto");
});

// Condicional según datos
const stock = 0;
if (stock === 0) {
  aviso.textContent = "Agotado, vuelve pronto";
  aviso.classList.remove("oculto");
} else {
  aviso.textContent = "Disponible";
  aviso.classList.add("oculto");
}
```

Fíjate en el reparto: el CSS decide **cómo se ve** oculto; JavaScript decide **cuándo**. El botón usa la flecha de B11 y el toggle no necesita ningún `if`: la clase se prende y se apaga sola. Cambia `stock` a 5 y corre otra vez: el aviso pasa de oculto a visible — la pantalla refleja los datos. Y si quieres guardar esa decisión ("menú abierto") entre visitas, eso es B16.

### Díselo a la IA

> "Quiero que [elemento] se muestre u oculte según [condición o acción, ej. clic en un botón / stock mayor que 0]. Dame el código con classList (add, remove, toggle), define la clase oculto en CSS, y dime si para mi caso conviene toggle o un if/else explícito."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la forma más limpia de alternar una clase entre visible y oculto en cada clic?
   - a) `classList.toggle("oculto")` ✔
   - b) `classList.replace("oculto")`
   - c) `elemento.className = true`
   - d) `elemento.style = undefined`

2. **[qué hace]** `const aviso = document.querySelector("#aviso"); aviso.classList.toggle("oculto"); aviso.classList.toggle("oculto");` — ¿cómo queda el elemento después de las dos líneas?
   - a) Igual que al inicio ✔
   - b) Sin la clase oculto
   - c) Con la clase oculto
   - d) Con un error porque toggle se usa dos veces

3. **[completar]** "La clase ____ se define en ____ (por ejemplo, `display: none`) y JavaScript solo la ____ con `classList`."
   - Banco: `oculto` · `CSS` · `alterna` · `HTML`
   - Respuesta: oculto / CSS / alterna

4. **[verdadero/falso]** "`style.display = "none"` saca el elemento del flujo de la página y no deja espacio vacío."
   - Respuesta: VERDADERO — `display: none` quita el elemento del layout; `visibility: hidden` lo oculta pero deja el hueco.

5. **[relacionar]** Une la instrucción con su efecto:
   - `classList.add("oculto")` ↔ Esconde el elemento
   - `classList.remove("oculto")` ↔ Vuelve a mostrarlo
   - `classList.toggle("oculto")` ↔ Alterna entre los dos estados
   - `style.display = "none"` ↔ Lo esconde directamente, sin clases

---

## B16 — localStorage: recordar cosas en el navegador

### Concepto

Tu página vive y muere en cada recarga: todo lo que JavaScript guardó en variables se borra al actualizar. Para **recordar cosas entre visitas** existe **localStorage** — un mini-almacén que el navegador mantiene en tu computadora, dominio por dominio.

Tres movimientos lo cubren todo:

- `localStorage.setItem("clave", "valor")` — guarda. Los dos datos son **cadenas de texto**.
- `localStorage.getItem("clave")` — lee. Regresa el valor guardado, o `null` si esa clave nunca se guardó.
- `localStorage.removeItem("clave")` — borra esa clave.

Tres detalles que definen cómo se usa: **todo es texto** — guardas un número o un objeto y al leerlos te llegan cadenas (o `[object Object]`), por eso los objetos se pasan por JSON (B17); **es persistente** — cierra el navegador, reinicia la compu: los datos siguen ahí hasta que tu código los borre o el usuario limpie los datos del sitio; y **tiene límite y casa propia** — unos 5 MB, y vive aislado por dominio: lo que guarda tu sitio no lo lee otro sitio.

Dato extra: `sessionStorage` es el primo que solo recuerda mientras la pestaña esté abierta. En la práctica, el que usarás es localStorage.

### Analogía

localStorage es la **taquilla con cerradura del gimnasio**: no dependes de tu memoria (variables, que se borran al cerrar), guardas el boleto y mañana regresas, abres tu taquilla y ahí sigue tu bolsa. Cada miembro (dominio) tiene su propia taquilla y no ve la del vecino. Y como la taquilla solo guarda bolsas (texto), no mesas de ping-pong: para guardar un objeto entero tienes que empacarlo — eso es exactamente JSON (B17).

### Cómo se ve en la práctica

Este HTML:

```html
<input type="text" id="nombre" placeholder="Tu nombre">
<button id="guardar">Guardar</button>
<p id="saludo"></p>
```

Y este JavaScript:

```javascript
const nombre = document.querySelector("#nombre");
const boton = document.querySelector("#guardar");
const saludo = document.querySelector("#saludo");

// Al cargar, lee lo que haya guardado
const guardado = localStorage.getItem("nombre");
if (guardado) {
  saludo.textContent = "Hola otra vez, " + guardado;
  nombre.value = guardado;
}

// Al hacer clic, guarda
boton.addEventListener("click", () => {
  localStorage.setItem("nombre", nombre.value);
  saludo.textContent = "Guardado: " + nombre.value;
});
```

Escenario para probarlo: escribe tu nombre, da clic, recarga la página. El saludo te recibe de nuevo — los datos sobrevivieron la recarga. Para comprobarlo a fondo, abre DevTools (F12) → Application → Local Storage y verás tu par clave-valor viviendo ahí; en la Consola también puedes leerlo con `localStorage.getItem("nombre")`. El `if` con `guardado` maneja la primera visita (cuando `getItem` regresa `null` y no hay nada que saludar) — es el mismo `if` de B15, ahora decidiendo según lo que guardó la memoria.

Una advertencia profesional: no guardes ahí contraseñas ni tarjetas. localStorage es de tu dominio, pero cualquier script de tu propia página puede leerlo — es para preferencias y datos no sensibles.

### Díselo a la IA

> "Quiero que mi página recuerde [qué: preferencias, un nombre, un estado] entre visitas. Guíame para guardarlo con localStorage y recuperarlo al cargar. Dime qué debe guardarse como texto y, si necesito guardar un objeto o un arreglo, cómo encadenar JSON.stringify y JSON.parse. Y adviérteme si alguno de los datos no debería vivir en localStorage."

### Ejercicios

1. **[opción múltiple]** ¿Con qué par de métodos guardas y lees en localStorage?
   - a) `setItem` / `getItem` ✔
   - b) `push` / `pop`
   - c) `addEventListener` / `removeEventListener`
   - d) `createElement` / `append`

2. **[completar]** "localStorage guarda todo como ____; por eso los objetos pasan por ____ antes de guardarse."
   - Banco: `texto` · `JSON` · `imágenes` · `números`
   - Respuesta: texto / JSON

3. **[verdadero/falso]** "Los datos de localStorage se borran automáticamente cada vez que recargas la página."
   - Respuesta: FALSO — persisten entre visitas; se borran cuando el código los elimina o el usuario limpia los datos del sitio.

4. **[qué hace]** `localStorage.setItem("tema", "oscuro"); console.log(localStorage.getItem("tema"));` — ¿qué imprime la consola?
   - a) oscuro ✔
   - b) null
   - c) true
   - d) Un error

5. **[relacionar]** Une el método con su función:
   - `setItem` ↔ Guarda un valor
   - `getItem` ↔ Lee un valor (o null)
   - `removeItem` ↔ Borra una clave
   - `sessionStorage` ↔ Solo recuerda con la pestaña abierta

---

## B17 — JSON en la práctica: parse y stringify

### Concepto

JSON (**JavaScript Object Notation**) es el **formato de texto** en que viajan los datos por internet y el que usan las APIs (B21). Su genialidad: parece JavaScript (objetos y arreglos), pero es solo **texto plano** — cualquier sistema lo entiende, sea el lenguaje que sea.

Dos funciones lo resuelven todo:

- `JSON.stringify(objeto)` — convierte un valor (objeto, arreglo, número…) en **texto JSON**. *String* + *ify*: "convertir a cadena".
- `JSON.parse(texto)` — convierte el texto JSON **de vuelta a un valor real** de JavaScript. *Parse*: "leer y desarmar".

El par ida y vuelta:

```javascript
const carrito = [{ nombre: "Audífonos", precio: 499 }];
const texto = JSON.stringify(carrito);  // "[{"nombre":"Audífonos","precio":499}]"
const original = JSON.parse(texto);     // el arreglo otra vez
```

Cuatro datos que te van a salvar: **las comillas son obligatorias y dobles** — en JSON las claves van entre `"`; en JavaScript pueden ir sin ellas, por eso el texto de `stringify` tiene comillas que el objeto original no tenía; **solo datos** — JSON guarda texto, números, booleanos, `null`, arreglos y objetos; las funciones y `undefined` se ignoran; **es la pieza que le faltaba a localStorage (B16)** — guardar un objeto entero = `stringify` al guardar y `parse` al leer; y `JSON.parse` con texto inválido **lanza un error** que detiene el script (el manejo de errores se ve en B22).

Y un mito a derribar: JSON se parece a los objetos de JavaScript (B13), pero es un **formato de texto independiente** — Python, Java, todo lo lee. De hecho casi nunca lo escribes a mano: `stringify` y `parse` lo hacen por ti.

### Analogía

JSON es la **maleta del viajero**. En casa tienes tu ropa en cajones (objetos de JavaScript: cómodos, con etiquetas claras). Para viajar, empacas todo en la maleta (`stringify`): ahora es un bulto de texto compacto, con reglas de embalaje estrictas. Llegas a destino, desempacas (`parse`) y vuelves a tener ropa en cajones. La maleta no entiende de cajones: entiende de bultos. Toda comunicación entre sistemas —guardar en localStorage (B16), hablar con una API (B21)— es mandar la maleta y desempacarla del otro lado.

### Cómo se ve en la práctica

El caso que usarás en serio: guardar el carrito completo (un arreglo de objetos) y recuperarlo.

```javascript
const carrito = [
  { nombre: "Audífonos", precio: 499, cantidad: 1 },
  { nombre: "Teclado", precio: 899, cantidad: 2 }
];

// Guardar: objeto → texto
localStorage.setItem("carrito", JSON.stringify(carrito));

// Leer: texto → objeto
const texto = localStorage.getItem("carrito");
const carritoRecuperado = texto ? JSON.parse(texto) : [];

console.log(carritoRecuperado[0].nombre);      // "Audífonos"
console.log(Array.isArray(carritoRecuperado)); // true
```

Fíjate en la guardia de la línea de `carritoRecuperado`: si `texto` es `null` —aún no hay nada guardado— no hay nada que desempacar y arrancamos con `[]`. El resultado es un arreglo de objetos de verdad, listo para pintarse con `map` + template literals (B14) o recorrerse (B10). Y ese par `stringify`/`parse` es el mismo que verás en cada `fetch` de B21: los datos llegan como texto JSON y tú los desempacas con `parse`.

### Díselo a la IA

> "Voy a guardar y recuperar estos datos en el navegador: [pega tu objeto o arreglo]. Escríbeme el código con JSON.stringify al guardar y JSON.parse al recuperar, y maneja el caso en que todavía no exista nada guardado sin que la página truene."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `JSON.stringify`?
   - a) Convierte texto JSON en un objeto
   - b) Convierte un valor de JavaScript en texto JSON ✔
   - c) Borra los datos guardados
   - d) Comprime imágenes

2. **[qué hace]** `const texto = JSON.stringify({ nombre: "Ray", edad: 30 }); console.log(texto);` — ¿qué imprime la consola?
   - a) `{"nombre":"Ray","edad":30}` ✔
   - b) `{nombre: Ray, edad: 30}`
   - c) Un error de sintaxis
   - d) `[object Object]`

3. **[completar]** "____ convierte un valor en texto JSON; ____ convierte el texto de vuelta en un valor."
   - Banco: `JSON.stringify` · `JSON.parse` · `JSON.format` · `JSON.load`
   - Respuesta: JSON.stringify / JSON.parse

4. **[verdadero/falso]** "JSON solo guarda datos: texto, números, booleanos, null, arreglos y objetos; las funciones se ignoran."
   - Respuesta: VERDADERO — JSON es un formato de datos, no de código: las funciones no sobreviven a `stringify`.

5. **[relacionar]** Une el dato con su papel:
   - `JSON.stringify` ↔ Objeto → texto
   - `JSON.parse` ↔ Texto → objeto
   - `localStorage.getItem` ↔ Devuelve null si la clave no existe
   - `JSON.parse` con texto inválido ↔ Lanza un error (B22)

---

## B18 — Asincronía I: por qué existe el "mientras tanto"

### Concepto

Hasta ahora cada línea de tu código se ejecuta **en orden, una tras otra, y la página espera**. Eso es código **síncrono**: termino esto, luego hago esto otro, y nadie me interrumpe. ¿El problema? Algunas operaciones tardan — pedir datos a un servidor puede tomar medio segundo o más. Si el navegador se quedara esperando en silencio, tu página se congelaría: nada de clics, nada de scroll, solo un bloqueo feo.

Por eso existe la **asincronía**: la capacidad de **empezar algo que tarda y seguir adelante con el resto**, para retomar el resultado *cuando llegue*. Es el "mientras tanto" del mundo real: pones la comida a calentar (tarda) y mientras tanto pones la mesa.

El ejemplo más accesible es `setTimeout`, que programa una función para más tarde:

```javascript
console.log("1. Pongo la mesa");

setTimeout(() => {
  console.log("3. La comida está lista");
}, 1000);  // 1000 milisegundos = 1 segundo

console.log("2. Mientras tanto, sirvo las bebidas");
```

El orden en la consola será `1, 2, 3`: la línea del `setTimeout` **no espera el segundo**; agenda la función y el código sigue corriendo. Cuando el temporizador termina, el navegador ejecuta la función que le diste (el callback — los callbacks te suenan de B6).

El corazón del asunto: **JavaScript es de un solo hilo** — una sola línea de trabajo a la vez. Para no congelarse con operaciones que tardan, no espera: **agenda y sigue**. Las funciones que corren "más tarde" viven en la **cola de eventos**, y el **event loop** es el maestro de ceremonias que revisa si la operación ya terminó para ejecutar su función. Reconócelo cuando aparezca, no lo memorices.

Las operaciones que de verdad te importan —pedir datos, leer archivos— usan el mismo principio, pero con una herramienta más potente que `setTimeout`: la **promesa**, que es el tema de B19.

### Analogía

La asincronía es el **mesero con cocina atrasada**. Si el mesero esperara de pie junto a la cocina hasta que cada platillo esté listo, el restaurante sería un desastre: solo habría una mesa atendida a la vez. En vez de eso, toma la orden, la lleva a la cocina y **sigue atendiendo otras mesas**. Cuando la cocina grita "¡orden 7 lista!", el mesero corre a llevarla. Ese grito —"ya está tu pedido"— es exactamente lo que hace el callback de `setTimeout`: no bloquea nada, avisa cuando hay resultado.

### Cómo se ve en la práctica

La demostración clásica: el orden de los `console.log` te cuenta toda la historia.

```javascript
console.log("Inicio");

setTimeout(() => {
  console.log("Tarea que tarda");
}, 2000);

console.log("Fin");
```

Abre la consola y observa: `Inicio` y `Fin` aparecen al instante; `Tarea que tarda` aparece dos segundos después. El código no se "detuvo" en el `setTimeout`: agendó y siguió.

Ahora el caso que te va a importar de verdad. Cuando en B21 hagas esto:

```javascript
fetch("https://api.example.com/productos")
  .then(res => res.json());  // avísame cuando lleguen los datos
```

La página no se congela mientras el servidor responde: el usuario sigue interactuando. La promesa (B19) es el mecanismo de esa "promesa de resultado futuro", y `then` es tu forma de decir qué hacer cuando llegue. Tú **no escribes esto de memoria**: lo reconoces porque ya sabes qué historia cuenta — "inicio, hago lo mío, y cuando llegue el resultado, entonces...".

### Díselo a la IA

> "En mi página hay una operación que tarda (pedir datos, procesar algo) y el usuario siente que se congela. Explícame qué está pasando y muéstrame el patrón para convertirla en asíncrona: dónde inicia la operación, qué se ejecuta mientras tanto, y dónde retomo el resultado cuando llegue."

### Ejercicios

1. **[ordenar]** Ordena qué pasa en el navegador con este código:
   - Pasos: el script corre `console.log("A")` → `setTimeout` agenda la función para dentro de 1 segundo → el script termina su ejecución → el temporizador termina y se ejecuta `console.log("B")`

2. **[opción múltiple]** ¿Cuál es el orden en la consola?
   ```javascript
   console.log("1");
   setTimeout(() => console.log("2"), 500);
   console.log("3");
   ```
   - a) 1, 2, 3
   - b) 1, 3, 2 ✔
   - c) 2, 1, 3
   - d) 3, 2, 1

3. **[completar]** "El código ____ se ejecuta en orden y bloquea; la ____ permite empezar algo que tarda y seguir adelante."
   - Banco: `síncrono` · `asincronía` · `promesa` · `recursión`
   - Respuesta: síncrono / asincronía

4. **[verdadero/falso]** "`setTimeout` hace que el código se detenga y espere hasta que pasen los milisegundos indicados."
   - Respuesta: FALSO — no espera: agenda la función para después y el resto del código corre de inmediato.

5. **[qué hace]** `setTimeout(() => console.log("Listo"), 1000);` — ¿qué hace esta línea?
   - a) Espera 1 segundo bloqueando la página y luego imprime
   - b) Agenda imprimir "Listo" dentro de 1 segundo y sigue con el resto del código ✔
   - c) Borra la consola después de 1 segundo
   - d) Imprime "Listo" al instante

---

## B19 — Asincronía II: promesas

### Concepto

En B18 viste que JavaScript agenda lo que tarda y sigue. **Promise** (promesa) es la herramienta profesional para manejar el resultado que aún no llega: un objeto que **representa un valor futuro** — o un futuro error.

Una promesa nace con `new Promise(...)`, pero la verdad es que **casi nunca la creas tú**: las funciones que tardan —pedir datos, leer archivos— te la *regresan* lista. Tu trabajo es reaccionar a ella. Una promesa tiene tres estados: **pending** (pendiente) — aún trabajando, el resultado no ha llegado; **fulfilled** (cumplida) — todo salió bien y trae un valor; **rejected** (rechazada) — algo falló y trae un error.

Para reaccionar usas dos métodos:

```javascript
pedirDatos()
  .then((datos) => {
    // se ejecuta si la promesa se cumplió
    console.log("Llegaron:", datos);
  })
  .catch((error) => {
    // se ejecuta si se rechazó
    console.log("Falló:", error);
  });
```

Lee `then` como "**cuando llegue**" y `catch` como "**si falla**". El callback de `then` recibe el valor; el de `catch`, el error.

Tres ideas que ordenan todo: **la promesa se resuelve una sola vez** — pasa de pending a fulfilled o a rejected, y ahí se queda; no es un botón que repites; **se pueden encadenar** — `.then(a).then(b)`: cada `then` puede devolver otra promesa (o un valor) y el siguiente la espera, así se encadenan pasos — traer datos, transformarlos, pintarlos; y **el encadenamiento nació para salir del infierno** — antes todo eran callbacks anidados adentro de callbacks (callback hell); las promesas lo aplastan en una fila horizontal de `.then`.

¿Cuándo vas a ver una promesa en tu vida real? En `fetch` (B21) y en cualquier función marcada con la palabra `async` (B20). Esta lección te da el idioma para leerlas.

### Analogía

Una promesa es un **pedido a domicilio**. Al llamar, `pedirPizza()` te **devuelve de inmediato un ticket** (la promesa) que representa tu futura pizza, sin quedarte pegado al teléfono. El ticket pasa por estados: *en preparación* (pending), *entregada con tu pizza* (fulfilled), o *rechazada, llegó quemada y reclamas* (rejected). Tu `.then` es "cuando llegue la pizza, ábrela y pon la mesa"; tu `.catch` es "si no llega o llega mal, reclama". El ticket solo se resuelve una vez: no te llaman dos veces por la misma pizza.

### Cómo se ve en la práctica

Primero, ver una promesa en vivo. Este código la crea y la consume:

```javascript
const pedido = new Promise((resolver, rechazar) => {
  const llego = Math.random() > 0.3;  // 70% de probabilidad

  setTimeout(() => {
    if (llego) {
      resolver("Pizza de pepperoni");
    } else {
      rechazar("La pizza se perdió en el camino");
    }
  }, 1500);
});

pedido
  .then((platillo) => console.log("Comiendo:", platillo))
  .catch((error) => console.log("Error:", error));
```

La función que le pasas a `new Promise` recibe dos herramientas: `resolver` y `rechazar`. Cuando llamas `resolver("...")`, la promesa se cumple con ese valor; cuando llamas `rechazar("...")`, se rechaza con ese error. El `then` o el `catch` se ejecuta según el camino.

Ahora el caso que sí usarás todos los días: una función que **regresa** una promesa. En B21, `fetch` es exactamente eso:

```javascript
const pedirProductos = fetch("https://api.example.com/productos");

pedirProductos
  .then((respuesta) => respuesta.json())  // transforma la respuesta
  .then((productos) => console.log(productos))
  .catch((error) => console.log("No se pudo:", error));
```

Fíjate en el encadenado: el primer `then` recibe la respuesta y regresa otra promesa (`respuesta.json()`), y el segundo `then` espera ese resultado. Leer promesas es reconocer el ticket y saber qué hacer en cada caso.

### Díselo a la IA

> "Voy a usar una función que tarda y regresa una promesa (por ejemplo fetch). Escríbeme el patrón con .then para el caso de éxito y .catch para el error, y si hay pasos que dependen uno del otro, muéstrame cómo encadenarlos sin anidar callbacks."

### Ejercicios

1. **[opción múltiple]** ¿Cuáles son los tres estados de una promesa?
   - a) inicio, medio, fin
   - b) pending, fulfilled, rejected ✔
   - c) listo, preparando, enviado
   - d) true, false, null

2. **[relacionar]** Une el estado con su significado:
   - pending ↔ El resultado aún no llega
   - fulfilled ↔ Salió bien y trae un valor
   - rejected ↔ Algo falló y trae un error
   - `.then()` ↔ Qué hacer cuando se cumple

3. **[completar]** "El método ____ se ejecuta si la promesa se cumplió; el método ____ se ejecuta si se rechazó."
   - Banco: `then` · `catch` · `resolve` · `finally`
   - Respuesta: then / catch

4. **[qué hace]** `miPromesa .then((dato) => console.log("OK:", dato)) .catch((error) => console.log("ERROR:", error));` — si `miPromesa` se RECHAZA (rejected), ¿qué imprime la consola?
   - a) OK: ...
   - b) ERROR: ... ✔
   - c) Nada, se queda pendiente
   - d) Imprime ambas líneas

5. **[verdadero/falso]** "Una promesa solo se resuelve una vez: pasa de pending a fulfilled o rejected, y ahí se queda."
   - Respuesta: VERDADERO — no es un botón que se repite; una vez cumplida o rechazada, ese es su estado final.

---

## B20 — Asincronía III: async / await

### Concepto

Las promesas (B19) resolvieron el caos de los callbacks, pero su sintaxis de encadenado sigue siendo un poco maratón: `.then` tras `.then`. **async / await** es la forma moderna de escribir lo mismo **como si el código fuera síncrono**: lectura de arriba a abajo, sin encadenados.

Dos palabras, dos reglas:

- `async` — se escribe antes de la función. Le dice a JavaScript: "esta función devuelve una promesa". Todo lo que regreses con `return` queda envuelto en una promesa cumplida.
- `await` — solo vive dentro de una función `async`. Se pone antes de una promesa y significa: **"pausa esta función hasta que la promesa se resuelva y usa su valor"**. Mientras espera, el resto de la página sigue viva (no se congela); solo esa función hace una pausa.

El mismo ejemplo de B19 en las dos versiones:

```javascript
// Promesas
pedirProductos()
  .then((productos) => console.log(productos))
  .catch((error) => console.log(error));

// async / await (la moderna)
async function cargarProductos() {
  try {
    const productos = await pedirProductos();
    console.log(productos);
  } catch (error) {
    console.log(error);
  }
}
```

Lee `await pedirProductos()` como "**espera a que esto llegue y pon el resultado en `productos`**". El `try/catch` es el `.catch` de la promesa: si `pedirProductos()` se rechaza, el error cae en `catch` (a fondo en B22).

Tres reglas de oro para no tropezar: **`await` solo funciona dentro de `async`** — usarlo en una función normal es error de sintaxis; **`async` siempre devuelve una promesa** — si otro código llama a tu función, recibe una promesa y él decide si la `await` o la encadena; y **no es magia, es azúcar** — async/await es promesas por dentro, el mismo juego de B18 y B19, con mejor letra. Reconócelo, no lo memorices.

Nota de actualidad: casi todo el código que una IA genera hoy —incluido `fetch`, B21— está escrito con async/await. Esta lección es el idioma para leerlo.

### Analogía

async / await es el **mesero con libreta de pedidos**. La versión promesas era un mesero que anota tu orden y te avisa mesa por mesa con gritos (`.then`). La versión async/await es un mesero que escribe la orden en su libreta y **vuelve a tu mesa cuando la cocina tiene tu plato**, como quien dice "espera y te traigo". La cocina sigue trabajando en paralelo; el mesero no se queda clavado. En el código, `await` es la marca en la libreta: "hasta que esto esté, no sigo con esta mesa" — sin bloquear a las demás mesas (el resto de la página).

### Cómo se ve en la práctica

El patrón que verás en todo código moderno de datos:

```javascript
// Función que simula una petición que tarda
function pedirProductos() {
  return new Promise((resolver) => {
    setTimeout(() => resolver(["Audífonos", "Teclado"]), 1000);
  });
}

// Función async: la que usa await
async function cargarLista() {
  const productos = await pedirProductos();  // espera 1 segundo y sigue
  console.log(productos);                    // ["Audífonos", "Teclado"]
}

cargarLista();  // llama a la función (devuelve una promesa)
console.log("Esto se imprime ANTES");
```

El orden en la consola: `Esto se imprime ANTES` primero, y un segundo después el arreglo. ¿Por qué? Porque `cargarLista()` es async: al llegar a `await`, pausa *su propia* ejecución y el script sigue con lo que sigue. Cuando la promesa se resuelve, la función retoma.

Con errores, la versión completa (la que usarás con `fetch` en B21):

```javascript
async function cargarLista() {
  try {
    const productos = await pedirProductos();
    console.log(productos);
  } catch (error) {
    console.log("Falló la carga:", error);
  }
}
```

Lo que te falta para el cuadro completo es qué mostrarle al usuario mientras espera —"Cargando..."— que se ve en B22 junto con el manejo de errores. Este es el vocabulario; allá es la escena completa.

### Díselo a la IA

> "Tengo una función que regresa una promesa (un fetch o una petición). Escríbeme la versión con async/await: la función async, el await de la petición, y el try/catch para el error. Y dime qué le debería mostrar al usuario mientras espera la carga."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `await` dentro de una función `async`?
   - a) Pausa la ejecución de esa función hasta que la promesa se resuelva ✔
   - b) Borra la promesa
   - c) Convierte todo en síncrono y congela la página
   - d) Convierte la promesa en un arreglo

2. **[completar]** "La palabra ____ antes de una función hace que devuelva una promesa; ____ solo puede usarse dentro de ella."
   - Banco: `async` · `await` · `then` · `promise`
   - Respuesta: async / await

3. **[verdadero/falso]** "Puedes usar `await` dentro de cualquier función, normal o async."
   - Respuesta: FALSO — `await` solo funciona dentro de funciones marcadas como `async`; fuera de ellas es error de sintaxis.

4. **[qué hace]** `async function mostrar() { const resultado = await tarea(); console.log(resultado); }` — ¿qué regresa la función `mostrar()` al ser llamada?
   - a) El resultado de `tarea()`
   - b) Una promesa ✔
   - c) Siempre undefined
   - d) Un error

5. **[relacionar]** Une la palabra con su papel:
   - `async` ↔ La función devuelve una promesa
   - `await` ↔ Pausa hasta que la promesa se resuelva
   - `try/catch` ↔ El equivalente del `.catch`
   - `fetch` ↔ Pedir datos: tema de B21

---

## B21 — fetch: traer datos de una API

### Concepto

`fetch` es la función del navegador para **pedirle datos a una API** — un servidor que entrega información por internet. Le pasas la **URL** (la dirección del recurso) y, por defecto, hace una petición **GET**: "dame los datos".

`fetch` es la pieza que esperabas desde B19: **devuelve una promesa**. Cuando la promesa se cumple, recibes un objeto `Response` — la respuesta del servidor, que todavía trae el cuerpo como texto. Para leerlo llamas a `res.json()` (B17): lee el cuerpo y lo convierte en datos reales. Y como ese "lee y convierte" también puede tardar, `res.json()` **regresa otra promesa**. Por eso el encadenado clásico:

```javascript
fetch("https://api.example.com/productos")
  .then((res) => res.json())
  .then((productos) => console.log(productos));
```

Que es lo mismo de B20 en su versión `async/await`:

```javascript
async function cargarProductos() {
  const res = await fetch("https://api.example.com/productos");
  const productos = await res.json();
  console.log(productos);
}
```

Lee el flujo: **pido → espero la respuesta → desempaco el JSON → uso los datos**. Para pintarlos en pantalla usas el patrón de B14 (map + template literals) o el `forEach` de B10.

Un dato que te ahorra sustos: `fetch` **no se rechaza si el servidor responde con un error HTTP** (404, 500): la respuesta llega igual, y hay que revisarla con `res.ok`. Eso es B22.

### Analogía

`fetch` es **mandar al mensajero al almacén del proveedor**. Le das la dirección (la URL) y te **devuelve de inmediato un recibo** (la promesa): no te quedas pegado a la puerta. Cuando el mensajero vuelve, trae un **paquete cerrado** (la `Response`): los datos están adentro, pero no los ves hasta abrirlo. `res.json()` es abrir el paquete y desempacar — y desempacar también toma su tiempo, por eso es otra promesa y por eso los `.then` se encadenan: "cuando vuelva, abre; cuando abras, úsalo". El recibo, el paquete y el desempacado: esa es toda la historia de `fetch`.

### Cómo se ve en la práctica

La escena completa: pedir productos y pintarlos en una lista. Este HTML:

```html
<ul id="productos"></ul>
<p id="estado"></p>
```

Y este JavaScript:

```javascript
async function cargarProductos() {
  const res = await fetch("https://api.example.com/productos");
  const productos = await res.json();

  const lista = document.querySelector("#productos");
  lista.innerHTML = productos
    .map((p) => `<li>${p.nombre} — $${p.precio}</li>`)
    .join("");
}

cargarProductos();
```

En pantalla: los nombres y precios de los productos dentro de la lista. Las dos primeras líneas son puro B20: `await` detiene *esta función* hasta que llega la respuesta y hasta que el JSON se desempaca. El `map` + template literals es B14, y el `innerHTML` B4. `fetch` no es una pieza nueva: es el **punto de partida** de los datos que ya sabes procesar.

Para verlo en vivo ahora mismo: abre la consola y prueba con una API pública real, por ejemplo `fetch("https://jsonplaceholder.typicode.com/users")` encadenado con `.then(res => res.json())`. Verás un arreglo de usuarios listo para usar.

### Díselo a la IA

> "Tengo una API que me devuelve [describe los datos, ej. un arreglo de productos con nombre y precio]. Escríbeme el código con fetch y async/await: la URL, await res.json() para desempacar el cuerpo, y pinta los datos en [elemento] con map y template literals. Si la respuesta llega con error, no lo dejes pasar: dime dónde revisarla."

### Ejercicios

1. **[opción múltiple]** ¿Qué regresa `fetch("url")` de inmediato, antes de que llegue cualquier dato?
   - a) Los datos ya convertidos en objeto
   - b) Una promesa que representa la respuesta futura ✔
   - c) Un arreglo vacío listo para llenarse
   - d) El texto JSON crudo

2. **[completar]** "`fetch("url")` pide datos a una ____ y devuelve una ____; el método ____() lee el cuerpo de la respuesta y lo convierte en datos."
   - Banco: `API` · `promesa` · `json` · `parse`
   - Respuesta: API / promesa / json

3. **[verdadero/falso]** "Por defecto, fetch hace una petición GET: para solo traer datos no necesitas indicarle ningún método."
   - Respuesta: VERDADERO — GET es la petición por defecto de fetch; cuando quieras enviar datos (B23) indicarás otro método explícitamente.

4. **[qué hace]** `fetch("https://api.example.com/productos") .then((res) => res.json()) .then((productos) => console.log(productos[0].nombre));` — la API devuelve un arreglo de productos. ¿Qué imprime la consola?
   - a) Todo el arreglo de productos
   - b) El nombre del primer producto ✔
   - c) La URL de la API
   - d) Un error porque falta await

5. **[relacionar]** Une la pieza con su papel:
   - `fetch(url)` ↔ Pide datos a la API
   - `res.json()` ↔ Lee el cuerpo y lo convierte en datos
   - `await` ↔ Espera a que la promesa se resuelva
   - `URL` ↔ La dirección del recurso

---

## B22 — Manejo de errores: try/catch y estados de carga

### Concepto

Cuando pides datos a una API (B21), las cosas pueden fallar: se cae la red, la URL está mal, el servidor responde 500. Un código sin manejo de errores deja al usuario con una pantalla vacía o, peor, con un error que nunca ve. Tienes dos herramientas y un patrón.

**1. try/catch** — el bloque de B20. Todo lo que puede fallar va dentro de `try`; si algo lanza un error, la ejecución salta a `catch` con ese error en su parámetro:

```javascript
try {
  const res = await fetch("https://api.example.com/productos");
  const datos = await res.json();
} catch (error) {
  console.log("Falló:", error);
}
```

**2. La trampa de HTTP** — `fetch` solo se rechaza (y cae en `catch`) cuando la *red* falla. Si el servidor responde con un 404 o un 500, la respuesta **llega igual** — y tú tienes que revisarla con `res.ok`. Si no está `ok`, lanzas el error a propósito con `throw`:

```javascript
const res = await fetch("https://api.example.com/productos");
if (!res.ok) throw new Error("El servidor respondió " + res.status);
```

**3. Los tres estados** — toda carga de datos debe mostrar tres momentos en pantalla: **cargando** (mientras esperas), **éxito** (los datos llegaron) y **error** (algo falló, con mensaje claro). El usuario nunca debe quedarse sin saber qué pasa.

### Analogía

`try/catch` es la **red de seguridad del trapecista**. Intentas el truco (todo dentro de `try`); si el truco sale mal, caes en la red (`catch`) y sigues intacto para contarlo. Sin red, el error cae al piso y el script muere en seco. Y los estados de carga son un **semáforo**: amarillo mientras esperas ("Cargando..."), verde cuando los datos llegaron, rojo cuando algo falló. El semáforo nunca está en blanco — tu interfaz tampoco debería estarlo.

### Cómo se ve en la práctica

La versión completa, con los tres estados en pantalla:

```javascript
const lista = document.querySelector("#productos");
const estado = document.querySelector("#estado");

async function cargarProductos() {
  estado.textContent = "Cargando...";

  try {
    const res = await fetch("https://api.example.com/productos");
    if (!res.ok) throw new Error("El servidor respondió " + res.status);

    const productos = await res.json();
    estado.textContent = "Listo: " + productos.length + " productos";
    lista.innerHTML = productos
      .map((p) => `<li>${p.nombre} — $${p.precio}</li>`)
      .join("");
  } catch (error) {
    estado.textContent = "No se pudo cargar: " + error.message;
  }
}

cargarProductos();
```

Recorre la historia: primero se pinta "Cargando..." con `textContent` (B4). El `try` hace la petición; si `res.ok` es falso, el `throw` lanza un error y el flujo salta directo al `catch`, que cambia el mensaje. `error.message` te da el texto legible de lo que lanzaste. Si todo sale bien, el estado se vuelve "Listo" y la lista se pinta con map (B14). Un solo flujo cubre los tres semáforos.

Para reintentar no hace falta nada especial: `cargarProductos()` es una función y un botón puede volver a llamarla (B6).

### Díselo a la IA

> "Tengo esta función con fetch: [pega tu código]. Agrégale manejo de errores completo: revisa res.ok y lanza un error si la respuesta no es buena, envuelve todo en try/catch, y muéstrame los tres estados en pantalla — un mensaje 'Cargando...' al inicio, los datos cuando lleguen, y un mensaje claro con opción de reintentar si falla. No uses alert."

### Ejercicios

1. **[opción múltiple]** Si el servidor responde con un 404 (el recurso no existe), ¿qué pasa con un `fetch` normal?
   - a) fetch se rechaza y cae en catch automáticamente
   - b) La respuesta llega igual, con `res.ok` en false ✔
   - c) El navegador muestra una página de error
   - d) fetch devuelve null

2. **[completar]** "En el patrón async/await, el código que puede fallar va dentro de ____ y la recuperación, dentro de ____."
   - Banco: `try` · `catch` · `throw` · `finally`
   - Respuesta: try / catch

3. **[verdadero/falso]** "`throw new Error("...")` detiene el bloque try y salta directo al catch con ese error."
   - Respuesta: VERDADERO — `throw` crea el error y transfiere el control al bloque `catch`, que lo recibe en su parámetro.

4. **[ordenar]** Ordena el flujo de una carga de datos en pantalla:
   - Pasos: la función marca 'Cargando...' → fetch pide los datos a la API → la respuesta llega y se revisa res.ok → los datos se convierten con res.json() → la lista se pinta con los productos

5. **[qué hace]** `const res = await fetch("https://api.example.com/productos"); if (!res.ok) throw new Error("Respuesta mala"); const datos = await res.json();` — ¿qué pasa si el servidor responde con 404?
   - a) Se lanza 'Respuesta mala' y el control salta al catch ✔
   - b) Los datos se convierten igual
   - c) fetch se rechaza solo
   - d) La página se recarga

---

## B23 — Formularios con JavaScript: capturar, validar, enviar

### Concepto

Un formulario en el navegador tiene tres momentos, y este es el mapa completo:

- **Capturar** — leer lo que escribió el usuario. En el evento `submit` (B7) lees cada campo con `.value`. Y lo primero de todo: `preventDefault()` (B8) para **detener la recarga** que hace el formulario por defecto.
- **Validar** — revisar que los datos cumplen reglas antes de mandarlos: que no estén vacíos, que el correo tenga formato. Si algo falla, muestras el error y `return`: no envías basura.
- **Enviar** — mandar los datos ya validados a su destino: una API con `fetch` (B21) en modo `POST`, o un servicio como WhatsApp o correo (C9).

El truco de `.trim()`: quita los espacios de los extremos. " ana@mail.com " y "ana@mail.com" son la misma persona — y un campo lleno solo de espacios cuenta como vacío. Valida siempre sobre el valor recortado.

Regla de oro: **la validación es de dos lados**. El navegador valida para que el usuario no se equivoque al escribir; el servidor valida porque es la única autoridad. Lo que haces aquí es la primera capa.

### Analogía

El formulario es la **aduana del aeropuerto**. El usuario se acerca con sus documentos (los datos). El oficial (tu JavaScript) los revisa contra las reglas: ¿nombre escrito? ¿formato de correo válido? Cada documento que no cumple se devuelve con la indicación de qué falta, y nadie pasa hasta que está en orden. Solo cuando todo cumple, el oficial sella (valida) y el viajero sigue su camino (envía). Si la aduana dejara pasar a cualquiera sin revisar, el problema lo tendrías tú del otro lado.

### Cómo se ve en la práctica

Un formulario mínimo con los tres momentos:

```html
<form id="contacto">
  <input type="text" id="nombre" placeholder="Nombre">
  <input type="email" id="email" placeholder="Email">
  <p id="mensaje"></p>
  <button type="submit">Enviar</button>
</form>
```

Y el JavaScript:

```javascript
const form = document.querySelector("#contacto");
const mensaje = document.querySelector("#mensaje");

form.addEventListener("submit", function (event) {
  event.preventDefault();  // sin recarga

  // 1. Capturar
  const nombre = form.querySelector("#nombre").value.trim();
  const email = form.querySelector("#email").value.trim();

  // 2. Validar
  if (nombre === "") {
    mensaje.textContent = "El nombre es obligatorio";
    return;
  }
  if (!email.includes("@")) {
    mensaje.textContent = "Correo inválido";
    return;
  }

  // 3. Enviar (aquí iría el fetch por POST, B21)
  mensaje.textContent = "Enviando a " + email + "...";
});
```

Lee el flujo: `preventDefault` primero — sin eso la página recarga y pierdes todo. Capturas con `.value` + `.trim()`. Cada validación que falla muestra su mensaje y `return` detiene la función: el envío solo ocurre si pasaste todas las revisiones. El mensaje se pinta con `textContent` (B4) en el `<p>`.

### Díselo a la IA

> "Tengo este formulario HTML: [pega tu HTML]. Escríbeme el JavaScript que: capture los valores con .value en el evento submit, detenga la recarga con preventDefault, valide que los campos obligatorios no estén vacíos y que el correo tenga formato, muestre el mensaje de error junto al campo que falló, y cuando todo pase, arme el objeto con los datos y envíelo con fetch por POST. No uses alert."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `event.preventDefault()` en el submit de un formulario?
   - a) Detiene la recarga y el envío por defecto ✔
   - b) Borra los campos del formulario
   - c) Valida los datos automáticamente
   - d) Cierra el formulario

2. **[completar]** "El evento ____ se escucha en el `<form>` (no en el botón); el texto escrito se lee con ____; y ____ quita los espacios de los extremos antes de validar."
   - Banco: `submit` · `value` · `trim` · `change`
   - Respuesta: submit / value / trim

3. **[verdadero/falso]** "El evento `submit` se dispara en el botón 'Enviar', y por eso el addEventListener se pone en el botón."
   - Respuesta: FALSO — `submit` vive en el `<form>` y se dispara al enviar, sea por el botón o por Enter; el listener va en el form.

4. **[relacionar]** Une la pieza con su papel en el formulario:
   - `preventDefault` ↔ Detiene el envío y la recarga
   - `campo.value` ↔ El texto escrito en el campo
   - `campo.trim()` ↔ Quita espacios al inicio y al final
   - `validar` ↔ Revisar el dato contra reglas antes de enviar

5. **[qué hace]** `const email = form.querySelector("#email").value.trim(); if (!email.includes("@")) { mensaje.textContent = "Correo inválido"; return; } mensaje.textContent = "Correo válido: " + email;` — el usuario escribe 'ana@mail.com'. ¿Qué se muestra en el mensaje?
   - a) Correo inválido
   - b) Correo válido: ana@mail.com ✔
   - c) La página se recarga
   - d) Nada: el código se detiene

---

## B24 — Debugging I: la consola es tu mejor amiga

### Concepto

Llegó el momento en que las cosas se rompen — y se rompen *siempre*. **Debugging** (depurar) es encontrar y corregir errores, y la primera herramienta la conoces desde B1: **la consola**. Es donde el navegador te habla.

Tres formas de hablarle tú:

- `console.log(valor)` — registra un valor en cualquier punto del código. Tu instrumento de medición.
- `console.warn(...)` — advertencia en amarillo: algo raro, pero no fatal.
- `console.error(...)` — error en rojo, lo que querías evitar.
- `console.table(arreglo)` — los arreglos de objetos (B13) como una tabla legible de un vistazo.

Y los errores que la consola te muestra: cada mensaje dice **qué pasó, en qué archivo y en qué línea**. Aprende a leerlos — son la respuesta, no el enemigo:

- `SyntaxError` — mala sintaxis: un paréntesis que falta, una coma mal puesta. El navegador ni siquiera corrió tu código.
- `ReferenceError: X is not defined` — usaste el nombre `X` y no existe en ese punto (B13): lo declaraste después, o con otro nombre.
- `TypeError: Cannot read properties of null` — tocaste algo que es `null`. Y `null` es lo que regresa `querySelector` cuando no encuentra nada (B3).

La estrategia: cuando algo falla, **no adivines**. Pega un `console.log` en cada paso y observa en qué punto el valor deja de ser el esperado. Divide el problema: el dato, el `fetch` (B21) o el pintado — sabrás en cuál parar de mirar.

### Analogía

La consola es el **cronista del navegador**: te va contando qué hizo tu código, paso a paso. `console.log` es el cronista que registra lo que pasa en cada punto; el mensaje de error es el reportero que llega gritando "¡esto se rompió!" y te dice *la calle y el número* (archivo y línea) del accidente. Sin consola buscarías el error a ciegas, línea por línea, como quien busca un arete en un estacionamiento. Con ella, el cronista te dice exactamente dónde empezar a mirar.

### Cómo se ve en la práctica

El caso clásico: seleccionar un elemento que no existe.

```javascript
const boton = document.querySelector("#comprar");
boton.textContent = "Agregar";
```

Si en tu HTML no hay ningún elemento con `id="comprar"`, la consola muestra algo como:

```
Uncaught TypeError: Cannot read properties of null (reading 'textContent')
    at archivo.js:2:1
```

Traducción: `boton` es `null` (no encontró nada) y en la línea 2 lo intentaste usar. El mensaje te dice el archivo y la línea — ya sabes dónde empezar.

El método de observación en tres pasos:

```javascript
// 1. ¿Qué tengo en realidad?
const boton = document.querySelector("#comprar");
console.log("El botón es:", boton);

// 2. Observa el dato antes de usarlo
const precio = 499;
console.log("Precio sin descuento:", precio);

// 3. Verifica el resultado
console.log("Precio final:", precio * 0.9);
```

El `console.log` no corrige nada: **te enseña lo que hay**. Corriges tú, con el dato frente a los ojos. Y para arreglos de objetos, `console.table` te ahorra el scroll:

```javascript
console.table([
  { nombre: "Audífonos", precio: 499 },
  { nombre: "Teclado", precio: 899 }
]);
```

### Díselo a la IA

> "Esta parte de mi página no funciona como debería: [describe el síntoma]. Aquí está mi código: [código]. Guíame a depurarlo con la consola: dime qué console.log poner en cada paso para ver dónde se rompe, y cuando yo te pegue el error, explícame qué significa, en qué archivo y línea ocurre, y cómo lo corrijo. No adivines: guíame a observar."

### Ejercicios

1. **[opción múltiple]** ¿Qué información te da un mensaje de error como 'at app.js:12'?
   - a) La fecha y hora del error
   - b) El archivo y la línea exacta donde ocurrió ✔
   - c) El navegador donde corre la página
   - d) La velocidad de la conexión

2. **[completar]** "Para registrar un valor usas console.____; para marcar un error, console.____; y para ver un arreglo de objetos ordenado, console.____."
   - Banco: `log` · `error` · `table` · `print`
   - Respuesta: log / error / table

3. **[verdadero/falso]** "'ReferenceError: precio is not defined' significa que la variable precio no existe (o no está en alcance) en ese punto del código."
   - Respuesta: VERDADERO — not defined = el nombre no existe ahí; revisa dónde declaraste la variable y el orden del código.

4. **[relacionar]** Une la herramienta con su uso:
   - `console.log` ↔ Registrar un valor para observar
   - `console.error` ↔ Marcar el error en rojo
   - `console.table` ↔ Ver un arreglo de objetos como tabla
   - Archivo:línea ↔ Dónde ocurrió el problema

5. **[qué hace]** `const boton = document.querySelector("#comprar"); boton.textContent = "Agregar";` — no existe ningún elemento con id 'comprar'. ¿Qué error ves en la consola?
   - a) SyntaxError: missing ) after argument list
   - b) TypeError: Cannot read properties of null ✔
   - c) ReferenceError: boton is not defined
   - d) RangeError: Maximum call stack size exceeded

---

## B25 — Debugging II: el inspector y los breakpoints

### Concepto

La consola (B24) te dice *qué* pasó. El inspector y los breakpoints te dicen *por qué*: puedes **pausar la ejecución en cualquier línea y examinarlo todo** en ese instante exacto.

Dos herramientas del mismo DevTools (F12):

- **El inspector** — la pestaña `Elements` te muestra el DOM *tal como está ahora* (B2), no como lo escribiste; si JavaScript lo cambió, lo ves. Las pestañas `Styles` y `Event Listeners` te dicen qué CSS aplica a un elemento y qué eventos tiene conectados.
- **Los breakpoints** — en la pestaña `Sources` abres el archivo y haces clic en el número de una línea: aparece un punto rojo. Cuando el código llega a esa línea, la ejecución **se pausa** y el panel `Scope` te muestra todas las variables de ese momento. Con `step over` (avanza a la siguiente línea) y `step into` (entra a la función) caminas línea por línea viendo cómo cambian los valores; el `Call Stack` te muestra la fila de funciones que te trajeron hasta ahí.

También existe el breakpoint en el código: la línea `debugger;` pausa cuando la alcanza, sin abrir el inspector.

Por qué es mejor que adivinar: **ves el valor real en el momento exacto**. El `console.log` de B24 es medir antes y después; el breakpoint es congelar la escena y mirar todo a la vez.

### Analogía

El breakpoint es **la pausa del videojuego**. En plena acción, pausas la partida y examinas cada personaje: sus puntos de vida, su posición, sus objetos. Sabes exactamente qué pasaba en ese instante, sin que el juego siga y cambie todo. El `step over` es avanzar un cuadro a la vez, como mirar la película en cámara lenta para no perder detalle. Y el inspector es la **ventana de la cocina del navegador**: ves el DOM, los estilos y los eventos tal como están ahora, no como los imaginaste al escribirlos.

### Cómo se ve en la práctica

Este código se ve bien, pero quieres ver qué está pasando adentro:

```javascript
function calcularTotal(precio, cantidad) {
  const subtotal = precio * cantidad;
  const impuesto = subtotal * 0.16;
  return subtotal + impuesto;
}

const total = calcularTotal(499, 2);
console.log("Total:", total);
```

Pon un breakpoint en la línea `const subtotal = precio * cantidad;`:

1. Abre DevTools (F12) → `Sources` → abre tu `app.js`.
2. Haz clic en el número de línea: aparece el punto rojo.
3. Recarga la página. La ejecución **se detiene** en esa línea, resaltada en azul.
4. En el panel `Scope` ves los valores de `precio` (499) y `cantidad` (2). Con `step over` avanzas línea por línea y ves nacer a `subtotal` y luego a `impuesto`.

Si un valor no es el que esperabas, ya sabes en qué línea se tuerce. Y la versión con el breakpoint escrito en el código:

```javascript
function calcularTotal(precio, cantidad) {
  debugger;  // pausa aquí cuando se ejecute
  const subtotal = precio * cantidad;
  const impuesto = subtotal * 0.16;
  return subtotal + impuesto;
}
```

La diferencia con el `console.log` de B24: ahí imprimes lo que pensaste medir; aquí **ves todo lo que existe** en ese instante, sin escribir una línea extra.

### Díselo a la IA

> "Mi código hace [describe el síntoma] y los console.log ya no me alcanzan. Guíame a depurarlo con el inspector: dime en qué archivo y línea pongo el breakpoint, qué paneles reviso (Scope, Call Stack, Watch) y cómo avanzo con step over para encontrar dónde cambia el valor. Aquí está mi código: [código]."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace un breakpoint en la pestaña Sources?
   - a) Borra la línea donde se pone
   - b) Pausa la ejecución en esa línea para inspeccionar el estado ✔
   - c) Acelera la página al saltarse esa línea
   - d) Muestra un error en rojo automáticamente

2. **[completar]** "El DOM en vivo se ve en la pestaña ____; los breakpoints se ponen en la pestaña ____; y la pila de funciones que te trajeron a un punto es el ____ ____."
   - Banco: `Elements` · `Sources` · `Call` · `Stack`
   - Respuesta: Elements / Sources / Call / Stack

3. **[verdadero/falso]** "La línea `debugger;` dentro del código funciona como un breakpoint: pausa la ejecución cuando la alcanza."
   - Respuesta: VERDADERO — `debugger` es el breakpoint escrito en el código; al llegar a ella, DevTools pausa la ejecución.

4. **[relacionar]** Une la pestaña o panel con su función:
   - `Elements` ↔ El DOM tal como está ahora
   - `Sources` ↔ Los archivos del código
   - `Step over` ↔ Avanzar a la siguiente línea
   - `Scope` ↔ Las variables visibles en el punto de pausa

5. **[qué hace]** `function doblar(n) { return n * 2;  // breakpoint aquí } const resultado = doblar(21);` — el breakpoint pausa en el `return`. ¿Qué valor tiene `n` en el panel Scope?
   - a) 21 ✔
   - b) 42
   - c) undefined
   - d) null

---

## B26 — Módulos: import y export

### Concepto

Hasta ahora cada archivo `.js` era una hoja suelta: todo lo que declarabas quedaba visible para los demás, y a medida que el proyecto crece eso es un desastre — dos archivos que declaran la misma función chocan entre sí. La solución se llama **módulos**: dividir el código en archivos independientes donde cada uno **exporta** lo que quiere compartir e **importa** lo que necesita de los demás.

Dos palabras lo resuelven todo:

- `export` — le pone etiqueta de "compartible" a una función, variable o clase. Lo que no lleva `export` queda privado: nadie de afuera puede tocarlo.
- `import` — trae lo que otro módulo exportó. Traes lo que necesitas, no el archivo entero.

Dos formas de exportar que vas a reconocer:

- **Export nombrado** — `export function calcularTotal(...)` o `export const IVA = 0.16;`. Al importar usas llaves y el nombre exacto: `import { calcularTotal, IVA } from "./utilidades.js"`.
- **Export por defecto** — `export default function calcularTotal(...)`. Un solo protagonista por módulo, y al importarlo le puedes poner cualquier nombre: `import calcularTotal from "./utilidades.js"`.

Tres datos prácticos: para que el navegador los trate como módulos, el script se carga con `<script type="module" src="app.js"></script>`; los módulos corren en modo estricto automáticamente; y no funcionan abriendo el archivo directo (`file://`) — necesitan un servidor local, porque importar y exportar es comunicación entre archivos. Puedes arrancar uno con la extensión Live Server de VS Code.

### Analogía

Un módulo es un **cajón de herramientas del taller**. Tu proyecto es el taller completo; cada cajón (módulo) guarda sus herramientas y su orden interno. `export` es pegarle la etiqueta "esta se presta" a las piezas que sí compartes; sin etiqueta, nadie las pide. `import` es ir al cajón del vecino con la lista exacta: pides `{ calcularTotal, IVA }` y te las dan tal cual, sin abrir el cajón entero. Igual que el destructuring de B13, importar es pedir solo lo que necesitas, no el archivo completo.

### Cómo se ve en la práctica

Dos archivos en la misma carpeta. Primero `utilidades.js`, que solo guarda y exporta:

```javascript
export const IVA = 0.16;

export function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}
```

Y `app.js`, que importa y usa:

```javascript
import { calcularTotal, IVA } from "./utilidades.js";

const subtotal = calcularTotal(499, 2);
console.log("Total con IVA: $" + (subtotal + subtotal * IVA));
```

En el HTML, el script que carga la app lleva `type="module"`:

```html
<script type="module" src="app.js"></script>
```

Compara: sin módulos, `calcularTotal` viviría en un archivo global visible para todos. Con módulos, `utilidades.js` es un cajón: exporta sus dos piezas y nada más. Cuando leas un proyecto con estructura de carpetas, los `import` son el mapa de qué pieza usa qué otra — y así es exactamente como React y las apps grandes organizan su código.

### Díselo a la IA

> "Tengo este archivo que se está volviendo largo: [pega tu código]. Divídelo en módulos separándolo por responsabilidades, y dime qué exportar en cada archivo y qué importar en app.js. Usa export nombrado donde haya varias piezas y export default donde haya un protagonista claro."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `export` en un módulo?
   - a) Hace que el archivo se ejecute más rápido
   - b) Marca qué piezas quedan disponibles para importar desde otros archivos ✔
   - c) Borra el código que no se usa
   - d) Obliga a que el archivo sea de una sola línea

2. **[completar]** "Con export ____ importas usando llaves y el nombre exacto; con export ____ le puedes poner el nombre que quieras al importar."
   - Banco: `nombrado` · `default` · `privado` · `global`
   - Respuesta: nombrado / default

3. **[relacionar]** Une la sintaxis con su significado:
   - `export function x` ↔ Comparte una función con nombre
   - `export default x` ↔ Comparte un protagonista único
   - `import { x }` ↔ Trae la pieza con su nombre exacto
   - `type="module"` ↔ Le dice al navegador que el script es un módulo

4. **[verdadero/falso]** "Un archivo con import y export funciona abriéndolo directo desde el disco (file://), sin necesidad de servidor."
   - Respuesta: FALSO — los módulos necesitan un servidor local: importar y exportar es comunicación entre archivos, y `file://` la bloquea.

5. **[qué hace]** `// utilidades.js` `export const IVA = 0.16;` `// app.js` `import { IVA } from "./utilidades.js";` `console.log(IVA);` — ¿qué imprime la consola?
   - a) 0.16 ✔
   - b) Un error: no se puede importar solo una pieza
   - c) IVA
   - d) undefined

---

## B27 — ¿Qué es un framework y por qué existen?

### Concepto

Ya sabes construir páginas a mano: HTML, CSS y JavaScript puro (B1 a B25). Eso funciona perfecto mientras el proyecto es chico. Pero cuando una app crece —muchas páginas, datos que cambian, decenas de componentes— el código suelto se vuelve un caos: cada quien ordena como quiere, y repetir y mantener es un dolor. Un **framework** es la respuesta: un **esqueleto con reglas ya decididas** que te da la estructura, las herramientas comunes y la forma de trabajar, para que tú solo llenes las partes que hacen único a TU proyecto.

Tres cosas que un framework te da:

- **Estructura y convenciones** — ya hay carpetas y reglas de cómo ordenar: nadie reinventa el acomodo.
- **Herramientas listas** — manejo de páginas (routing), actualizar la pantalla cuando cambian datos, componentes reutilizables.
- **Estándares compartidos** — el código que genera la IA y otros equipos se parece al tuyo, porque todos siguen el mismo manual.

Distinción que te hará quedar bien en cualquier conversación: una **librería** es una herramienta que tú llamas cuando la necesitas (*you call the library*); un **framework** es la estructura que te llama a ti (*the framework calls your code*). En el primer caso decides el rumbo; en el segundo, aceptas el reglamento del juego. Los nombres que vas a oír: **React** (B28) es, en rigor, una librería de interfaces; **Next.js** (B29) es un framework construido sobre ella; Vue y Angular son otros frameworks.

La pregunta correcta no es "¿framework sí o no?" sino "**¿a qué escala vale la pena?**" — y a eso le entras en C23.

### Analogía

Un framework es un **juego de mesa con reglamento oficial**. Si juegas ajedrez con tus primos, cada partida se arregla "a mano": las reglas varían, falta una pieza y la suplen con una moneda. Eso es HTML + JavaScript puro: flexible, pero cada mesa juega distinto. El framework es el reglamento impreso: tablero estandarizado, piezas definidas, turnos claros. Ya no discutes las reglas — las aprendes una vez y te concentras en jugar bien. Y la IA, que también leyó el reglamento, juega contigo sin explicarte cada movimiento.

### Cómo se ve en la práctica

Para que lo reconozcas cuando lo veas, así se ve la misma idea —"una tarjeta de producto"— con y sin framework. Sin framework, todo a mano (B14):

```javascript
const lista = document.querySelector("#productos");
lista.innerHTML = productos
  .map(p => `<li>${p.nombre} — $${p.precio}</li>`)
  .join("");
```

Con un framework de componentes, la misma tarjeta se declara como una pieza reutilizable (es JavaScript con una extensión llamada JSX — no lo escribes, solo lo reconoces):

```jsx
function Tarjeta({ nombre, precio }) {
  return <li>{nombre} — ${precio}</li>;
}
```

La diferencia no está en la pantalla: está en **cómo se organiza el trabajo**. Sin framework decides todo tú (y repites todo tú). Con framework, la pieza se usa, se reusa y se mantiene sola. Lo bueno: todo lo de B13 y B14 —objetos, map y template literals— sigue sirviendo. Los datos viajan igual; solo cambia el empaque.

### Díselo a la IA

> "Estoy por construir [describe tu proyecto: qué hace, cuántas páginas, si necesita SEO o datos en vivo]. Dime si me conviene HTML + JavaScript puro, una librería como React o un framework como Next.js, y explícame en tres líneas por qué. Si me recomiendas framework, dime qué necesito aprender a reconocer antes de empezar."

### Ejercicios

1. **[opción múltiple]** ¿Para qué se inventaron los frameworks?
   - a) Para que las páginas carguen más lento
   - b) Para ordenar proyectos que crecen: estructura, reglas y herramientas comunes ✔
   - c) Para reemplazar a HTML y CSS
   - d) Para que solo las empresas grandes puedan hacer webs

2. **[relacionar]** Une el término con su definición:
   - Librería ↔ Herramienta que tú llamas cuando la necesitas
   - Framework ↔ Estructura que llama a tu código
   - Routing ↔ Manejo de páginas dentro de la app
   - Convenciones ↔ Reglas de cómo ordenar el código

3. **[verdadero/falso]** "Adoptar un framework obliga a cambiar tus datos a un formato especial que solo ese framework entiende."
   - Respuesta: FALSO — los datos (objetos y arreglos, B13) viajan igual; el framework cambia cómo se organiza el código, no el formato de los datos.

4. **[completar]** "En una librería tú llamas a la ____; en un framework, el framework ____ a tu código."
   - Banco: `herramienta` · `llama` · `ignora` · `escribe`
   - Respuesta: herramienta / llama

5. **[ordenar]** Ordena cuándo conviene pasar de HTML + JavaScript puro a un framework:
   - Pasos: una landing estática de una página, sin planes de crecer → empiezas a repetir el mismo bloque de código en varios lugares → agregas una segunda página con datos que cambian en vivo → divides la interfaz en componentes reutilizables → adoptas un framework con reglas y herramientas listas

---

## B28 — React en concepto: componentes, props y estado

### Concepto

**React** es la librería de interfaces más usada del mundo (creada por Meta) y la base de apps como Instagram o WhatsApp Web. Su idea central cabe en tres palabras: **componentes, props y estado**. Con esas tres se construye casi todo React, y tú solo necesitas *reconocerlas*.

- **Componente** — una pieza reutilizable de interfaz. En React, un componente es una función que regresa la descripción de su parte de la pantalla. Es la evolución de lo que hiciste a mano en B14: ahí convertías un arreglo en HTML con `map`; aquí declaras la "receta" de la tarjeta una vez y la usas mil veces.
- **Props** (de *properties*) — los datos de entrada que le pasas a un componente desde afuera. Son como los parámetros de una función (B9): el componente los recibe y los usa, pero **no puede modificarlos**. El padre manda; el hijo solo lee.
- **Estado** (state) — los datos que cambian con el tiempo y que el componente controla él mismo: un contador, lo que está escrito en un input, si un menú está abierto. Cuando el estado cambia, **React vuelve a pintar el componente solo** — olvídate de seleccionar con `querySelector` y repintar a mano: la pantalla es un reflejo del estado (B15).

El flujo que ordena todo: los datos bajan por **props** (de padre a hijo), los cambios nacen en el **estado**, y los **componentes** se rearman solos cuando algo cambia.

### Analogía

Un componente es una **máquina expendedora**. La máquina (el componente) tiene una receta fija: botón, y por dentro decide qué sacar. Las **props** son lo que alguien le carga desde afuera: cambias el precio o el nombre del producto sin abrir la máquina. El **estado** es el contador interno: cuántos quedan, si ya está vacía. Y lo clave: cuando el contador cambia —te llevas un producto— la máquina **actualiza su vitrina sola**. Nadie va con un `querySelector` a quitar el letrero "Agotado": el cambio de estado *es* el cambio en pantalla.

### Cómo se ve en la práctica

Un componente de contador en React — léelo, no lo escribas (es JavaScript con JSX, la extensión que mezcla HTML):

```jsx
function Contador({ inicio }) {
  const [cuenta, setCuenta] = React.useState(inicio);

  return (
    <button onClick={() => setCuenta(cuenta + 1)}>
      Clics: {cuenta}
    </button>
  );
}
```

Identifica las tres piezas: `{ inicio }` es una **prop** — viene de afuera y el componente no la modifica. `React.useState(inicio)` crea el **estado**: `cuenta` es el valor actual y `setCuenta` la función para cambiarlo. El `onClick` es el evento de B6, pero en vez de tocar el DOM con `classList` (B5), llamas `setCuenta` y React repinta solo. Compara con tu versión a mano de B15: ahí tú decidías cuándo mostrar; aquí el cambio de estado lo decide. Reconocer ese patrón — `useState`, una variable y su función para cambiarla — te basta para leer cualquier componente.

### Díselo a la IA

> "Voy a dirigir con IA los cambios de un proyecto en React. Toma este componente: [pega el código]. Explícamelo en español como si yo fuera el product owner: cuáles son los componentes, cuáles las props (de dónde vienen y qué pasan) y cuál es el estado (qué cambia con el tiempo y qué efecto tiene en pantalla). No me enseñes a escribir React: enséñame a leerlo."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un componente en React?
   - a) Una base de datos
   - b) Una pieza reutilizable de interfaz, declarada como función ✔
   - c) Un archivo CSS
   - d) Un tipo de servidor

2. **[relacionar]** Une el concepto con su papel:
   - Props ↔ Datos de entrada que un componente no puede modificar
   - Estado ↔ Datos que cambian con el tiempo dentro del componente
   - Componente ↔ Pieza reutilizable de interfaz
   - Re-render ↔ React repinta solo cuando el estado cambia

3. **[verdadero/falso]** "Un componente hijo puede modificar directamente las props que recibe de su padre."
   - Respuesta: FALSO — las props son de solo lectura: el padre las manda y el hijo solo las usa; los cambios viven en el estado.

4. **[completar]** "En React, los datos bajan de padre a hijo por ____, y cuando el ____ cambia, el componente se vuelve a pintar solo."
   - Banco: `props` · `estado` · `clase` · `servidor`
   - Respuesta: props / estado

5. **[qué hace]** `function Saludo({ nombre }) { return <p>Hola, {nombre}</p>; }` — le pasas la prop `nombre="Ana"`. ¿Qué muestra?
   - a) Hola, Ana ✔
   - b) Hola, {nombre}
   - c) Un error: no hay estado
   - d) Nada: las props no se usan para texto

---

## B29 — Next.js en concepto: cuándo vale la pena y cuándo no

### Concepto

**Next.js** es un framework construido *sobre* React (B28): toma componentes, props y estado, y les suma lo que una app seria necesita — **rutas por archivos** (cada página es un archivo o carpeta de tu proyecto), **renderizado en el servidor** (SSR), **generación estática** (SSG), optimización de imágenes y la opción de tener una API propia sin levantar otro proyecto.

¿Por qué existe? Porque las apps de React "puras" tienen dos costos: la página **se arma en el navegador** (el usuario ve un blanco mientras carga el JavaScript) y **los buscadores la leen peor**. Cuando tu contenido depende de aparecer en Google —tienda, blog, sitio de servicios— eso importa. Next.js cocina la página antes: la arma en el servidor y la entrega lista (SSR), o la pre-genera en el momento del build (SSG). El usuario recibe HTML ya servido: rápido y legible para Google.

La decisión, sin misterio:

- **Vale la pena cuando** — el proyecto tiene varias páginas, necesita SEO, carga datos en vivo o va a crecer.
- **No vale cuando** — es una landing simple de una página, un prototipo rápido o una app interna sin SEO: ahí React simple o hasta HTML + JS puro (B1 a B25) alcanzan y pesan menos.

Regla que te ahorra dramas: **más framework = más potencia, pero también más que aprender y configurar**. Elige la herramienta que la escala de TU proyecto merece, no la más famosa. (Y la pregunta de cuándo basta HTML plano está en C23.)

### Analogía

Next.js es el **concierge de un hotel**. Con React puro, el huésped llega a la habitación y arma el mueble (el navegador arma la página). Con Next.js, el concierge te lo deja armado: la página llega lista (SSR) o pre-armada de fábrica para cada habitación (SSG — se genera una vez y se sirve a todos). El concierge también conoce las rutas del hotel (routing) y tiene su propia cocina (API). ¿Cuándo lo contratas? Cuando tu hotel es grande, los huéspedes llegan a todas horas y la reseña del hotel (el SEO) lo es todo. Si tu proyecto es un puesto de café de una página, el concierge te estorba y cuesta. El tamaño del proyecto decide, no la moda.

### Cómo se ve en la práctica

En Next.js, las páginas se declaran con archivos: cada archivo dentro de `app` es una URL. Reconócelo, no lo configures:

```
app/
  index.jsx        →  /
  tienda.jsx       →  /tienda
  blog/[slug].jsx  →  /blog/cualquier-titulo
```

El corchete `[slug]` es un comodín: una sola plantilla sirve miles de artículos. Y esta es la diferencia que hace al SEO: la página que el usuario recibe ya trae el contenido puesto, en vez de una hoja en blanco que el navegador llena después:

```html
<!-- con Next.js: llega cocinada -->
<h1>Audífonos a $499</h1>
<p>3 disponibles</p>

<!-- React puro: el navegador tiene que armarla -->
<div id="root"></div>
```

Para Google y para el usuario con internet lenta, la primera es oro: contenido visible al instante. Cuando dirijas un proyecto con Next.js, tu trabajo no es escribirlo: es saber *cuándo* pedirlo y *por qué* — esa pregunta se la haces a la IA antes de empezar.

### Díselo a la IA

> "Voy a construir [describe tu proyecto: tipo de negocio, cuántas páginas, si te importa aparecer en Google, si los datos cambian a cada rato]. Dado lo que ya sé de HTML, CSS y JavaScript: ¿me conviene HTML puro, React simple o Next.js? Dame tu veredicto con tres razones, y si me conviene Next.js, dime exactamente qué estructura y archivos pedirle a la IA para arrancar. Si no me conviene, dime qué me ahorro al no usarlo."

### Ejercicios

1. **[opción múltiple]** ¿Qué le agrega Next.js a React?
   - a) Colores y fuentes
   - b) Rutas por archivos, renderizado en servidor y generación estática ✔
   - c) Una base de datos obligatoria
   - d) Un lenguaje de programación nuevo

2. **[verdadero/falso]** "Para una landing de una sola página, sin SEO, un framework completo como Next.js casi siempre es sobrado: HTML + JS puro o React simple alcanzan."
   - Respuesta: VERDADERO — más framework = más potencia pero también más complejidad; la escala del proyecto decide.

3. **[completar]** "El renderizado en ____ entrega la página ya cocinada; la generación ____ la pre-genera en el build y la sirve a todos igual."
   - Banco: `servidor` · `estática` · `cliente` · `manual`
   - Respuesta: servidor / estática

4. **[relacionar]** Une el término con su significado:
   - Rutas por archivos ↔ Cada archivo en app/ es una URL
   - SSR ↔ La página se arma en el servidor y llega lista
   - SSG ↔ Se pre-genera una vez y se sirve a todos
   - SEO ↔ Que Google encuentre y lea tu contenido

5. **[ordenar]** Ordena el proceso para decidir si tu proyecto usa framework:
   - Pasos: describe el proyecto: páginas, SEO, datos en vivo → pregunta a la IA si conviene HTML puro, React o Next.js → pide tres razones del veredicto → si es Next.js, pide la estructura de archivos → compara lo que ganas contra la complejidad extra

---

## B30 — Repaso integrador de JavaScript (mega-quiz jugable)

### Concepto

Llegaste al final de Materia B. Antes de seguir, cierra el círculo: en estas 29 lecciones recorriste la historia completa de una página web viva — de dónde vive el JavaScript (B1), cómo agarrar y cambiar el DOM (B3 a B5), cómo reaccionar a clics y formularios (B6 a B8), cómo organizar datos con arreglos y objetos (B10 a B13), cómo convertirlos en HTML (B14), cómo pedirlos a un servidor (B18 a B21), cómo manejar errores y depurarlos (B22 a B25), cómo partir tu código en módulos (B26) y por qué existen los frameworks (B27 a B29).

Este mega-quiz junta todo para que descubras *qué ya reconoces sin esfuerzo* y *qué conviene repasar*. La meta no es memorizar: es que cada pregunta te caiga como déjà vu — "esto lo vi, esto lo usé". Si alguna te cuesta, la lección correspondiente está a un clic. Y tu prueba final es la del mundo real: dirigir a la IA un proyecto pequeño y entender el código que te devuelve, línea por línea. Eso es exactamente lo que hace el próximo bloque de práctica.

El mapa del mes, por si algo se te olvida: el DOM y sus referencias (B2-B3), texto e HTML (B4), clases y estilos (B5), eventos (B6-B8), creación y recorridos (B9-B10), funciones flecha y métodos de arreglo (B11-B12), objetos y template literals (B13-B14), condicionales en pantalla (B15), persistencia y JSON (B16-B17), asincronía completa (B18-B21), errores y debugging (B22-B25), módulos (B26) y frameworks (B27-B29). Cada hueco que detectes en el quiz te lleva directo a su lección.

### Analogía

Este repaso es el **vuelo de verificación del piloto**: antes de volar solo, el instructor te hace pasar por cada instrumento —subir, virar, aterrizar— para confirmar que todo responde. No te pide la física del avión de memoria (memorizar): te pide que *hagas* los movimientos y reconozcas qué hace cada uno. Cada pregunta de este quiz es un instrumento. Las que respondas al vuelo, son tuyas. Las que te hagan dudar, son tu lista de repaso antes del vuelo real: tu primer proyecto completo dirigido con IA.

### Cómo se ve en la práctica

El clásico que junta casi todo el mes: pedir datos, transformarlos y pintarlos — la app que ya armaste pieza por pieza en B21:

```javascript
async function cargarProductos() {
  try {
    const res = await fetch("https://api.example.com/productos");
    if (!res.ok) throw new Error("Servidor respondió " + res.status);

    const productos = await res.json();
    document.querySelector("#lista").innerHTML = productos
      .map(({ nombre, precio }) => `<li>${nombre} — $${precio}</li>`)
      .join("");
  } catch (error) {
    document.querySelector("#estado").textContent = "Falló: " + error.message;
  }
}

cargarProductos();
```

Reconoce cada pieza: `async/await` (B20), `fetch` (B21), `res.ok` y `try/catch` (B22), `res.json()` (B17), destructuring (B13), map + template literal (B12 y B14), `querySelector` (B3) y `textContent` vs `innerHTML` (B4). Si lees esa función completa sin dudar, ya estás listo para dirigir proyectos. Si alguna pieza te saca, esa es tu lección a repasar.

### Díselo a la IA

> "Voy a autoevaluarme en JavaScript del navegador. Hazme 8 preguntas cortas en español, tipo quiz, mezclando: seleccionar el DOM, eventos, arreglos y objetos, map y template literals, fetch y async/await, módulos, y conceptos de React y Next.js. Hazlas una por una, espera mi respuesta en cada una, y al final dime en cuáles me equivoqué y qué lección me conviene repasar. No expliques la respuesta antes de que yo responda."

### Ejercicios

1. **[opción múltiple]** Quieres cambiar el texto de un párrafo con id "mensaje". ¿Cuál línea lo hace?
   - a) `document.querySelector("#mensaje").textContent = "Hola";` ✔
   - b) `document.querySelector(".mensaje").innerHTML = "Hola";`
   - c) `mensaje.textContent = "Hola";`
   - d) `document.getElementById("mensaje") = "Hola";`

2. **[completar]** "Para recorrer un arreglo y transformarlo usas ____; para quedarte con los que pasan una prueba, ____; y para buscar el primero que cumpla, ____."
   - Banco: `map` · `filter` · `find` · `forEach`
   - Respuesta: map / filter / find

3. **[relacionar]** Une la herramienta con su función:
   - `querySelector("#x")` ↔ Primer elemento que coincide con el selector
   - `addEventListener("click", fn)` ↔ Reaccionar a un clic
   - `JSON.stringify` ↔ Convertir un objeto a texto JSON
   - `localStorage.setItem` ↔ Guardar algo entre visitas

4. **[verdadero/falso]** "fetch se rechaza automáticamente cuando el servidor responde un 404, así que no hace falta revisar la respuesta."
   - Respuesta: FALSO — fetch solo se rechaza si la conexión falla; un 404 o 500 llega igual y se revisa con `res.ok` (B22).

5. **[ordenar]** Ordena el flujo de una app que carga y pinta productos:
   - Pasos: se llama a `cargarProductos()` → fetch pide los datos a la API → `res.json()` convierte el texto en datos → map + template literals arman el HTML → `innerHTML` pinta la lista en pantalla

6. **[qué hace]** `const productos = [ { nombre: "Audífonos", precio: 499 }, { nombre: "Teclado", precio: 899 }, { nombre: "Mouse", precio: 349 } ]; const precios = productos .filter(p => p.precio > 400) .map(p => p.nombre); console.log(precios);` — ¿qué imprime la consola?
   - a) `["Audífonos", "Teclado", "Mouse"]`
   - b) `["Audífonos", "Teclado"]` ✔
   - c) `["Teclado", "Mouse"]`
   - d) `["Mouse", "Audífonos"]`

7. **[opción múltiple]** En React, los datos que bajan del padre al hijo y que el hijo no modifica se llaman…
   - a) Estado
   - b) Props ✔
   - c) Módulos
   - d) Eventos

8. **[completar]** "Next.js cocina la página en el ____ o la pre-genera en el ____, para que llegue lista al navegador y a Google."
   - Banco: `servidor` · `build` · `navegador` · `cliente`
   - Respuesta: servidor / build

---