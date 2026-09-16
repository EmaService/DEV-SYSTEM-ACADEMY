# MES 3 · MATERIA A — Maquetación: HTML y CSS
## Lecciones A1–A30 (Mes 3)

> Formato de ejercicios: `[opción múltiple]`, `[completar]` (con banco de palabras), `[relacionar]`, `[verdadero/falso]`, `[ordenar]`, `[qué hace]`. La respuesta correcta va marcada con ✔ o indicada al final del ejercicio.

---

## A1 — El navegador por dentro: cómo se pinta una página

### Concepto

Cuando escribes una dirección y presionas Enter, el navegador dispara una cadena de trabajo que termina en milésimas de segundo. Primero le pide al **servidor** — la computadora donde vive tu página — los archivos que la componen. El servidor responde con tres documentos que cumplen papeles distintos:

- **HTML** — la estructura: qué bloques existen y en qué orden.
- **CSS** — el estilo: colores, tamaños, espacios, tipografía.
- **JavaScript** — el comportamiento: qué pasa cuando el usuario interactúa.

Con esos archivos en mano, el navegador **parsea** el HTML: lo lee y lo convierte en un árbol de bloques (el DOM). Después aplica el CSS para decidir cómo se ve cada bloque, calcula dónde va cada cosa (el **layout**) y al final **pinta** los píxeles en tu pantalla. Ese último paso se llama *paint*, y es literalmente dibujar la página frente a ti, capa por capa.

La parte visible de ese proceso es la **pestaña**. La parte que puedes inspeccionar es **DevTools** (tecla F12): ahí el navegador te enseña el árbol que construyó, los estilos que aplicó y los archivos que descargó. Cuando algo se ve mal, F12 es tu primera parada, no el último recurso.

¿Por qué te importa si la IA escribe el código? Porque cuando le pidas "hazme una landing", tú vas a ser quien revise el resultado. Si entiendes que primero hay estructura, luego estilo y al final pintura, vas a saber en qué capa está el problema: si el texto no aparece, es estructura; si aparece mal alineado, es estilo; si no reacciona al clic, es comportamiento. Dirigir es saber dónde mirar.

### Analogía

El navegador es un **equipo de escenografía**. El HTML es el guion y la lista de actores: quién está en escena y en qué orden. El CSS es el vestuario, la iluminación y la pintura del fondo: cómo se ve todo. El JavaScript son los movimientos: los actores caminan, los telones suben. El *paint* es el instante en que se abre el telón y el público ve el cuadro completo. Tú, al dirigir a la IA, eres el director: no pintas el fondo, pero decides qué escena se monta y cómo debe verse.

### Cómo se ve en la práctica

Abre cualquier página y presiona **F12**. En la pestaña *Elements* verás el árbol de bloques que el navegador construyó a partir del HTML — la prueba de que la página no se pintó "así nomás": primero se organizó. Un ejemplo mínimo de lo que hay detrás de una tarjeta:

```html
<div style="background:#eef; padding:16px;">
  <h2>Ofertas de hoy</h2>
  <p>Lleva 2 y paga 1.</p>
</div>
```

En pantalla verás un recuadro azul claro con un título y un texto adentro. En DevTools verás *tres cosas separadas*: el HTML (estructura), el estilo `background` y `padding` (CSS aplicado) y el bloque tal cual lo dibuja el navegador. Pestaña por pestaña, eso es "cómo se pinta una página".

### Díselo a la IA

> "Mi página se ve en blanco y no sé por qué. Guíame con DevTools (F12): qué debo revisar en la pestaña Consola y en la pestaña Red, y explícame en lenguaje simple qué significa lo que veo antes de cambiarlo."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace el navegador primero con el HTML que recibe?
   - a) Lo pinta tal cual llega
   - b) Lo parsea y construye un árbol de estructura ✔
   - c) Lo borra para empezar de cero
   - d) Lo convierte en CSS

2. **[relacionar]** Une cada archivo con su papel:
   - HTML ↔ La estructura de la página
   - CSS ↔ El estilo visual
   - JavaScript ↔ El comportamiento
   - Servidor ↔ Entrega los archivos de la página

3. **[verdadero/falso]** "El navegador descarga HTML, CSS y JavaScript por separado y después los combina para pintar la página."
   - Respuesta: VERDADERO — cada archivo cumple un papel distinto y el navegador los junta en el renderizado.

4. **[completar]** "El HTML define la ____, el CSS define el ____ visual y el JavaScript define el ____."
   - Banco: `estructura` · `estilo` · `comportamiento` · `velocidad`
   - Respuesta: estructura / estilo / comportamiento

5. **[ordenar]** Ordena qué pasa desde que escribes la URL hasta ver la página:
   - Desordenado: `Se pintan los píxeles` · `Escribes la URL` · `El navegador parsea el HTML` · `El servidor envía los archivos` · `Se aplican los estilos CSS`
   - Respuesta: Escribes la URL → El servidor envía los archivos → El navegador parsea el HTML → Se aplican los estilos CSS → Se pintan los píxeles

---

## A2 — Anatomía de un documento HTML: doctype, head y body

### Concepto

Todo documento HTML moderno tiene tres partes fijas. Aprende a verlas y ninguna página se te va a resistir:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola, mundo</h1>
  </body>
</html>
```

- **`<!DOCTYPE html>`** — la declaración. No es una etiqueta visible: es un letrero que le dice al navegador "esto es HTML5, compórtate en modo estándar". Sin él, el navegador puede activar el *quirks mode* y pintar tu página con reglas viejas de 1998.
- **`<head>`** — los metadatos: lo que el navegador necesita saber pero tú no ves. Ahí vive el `<title>` (lo que aparece en la pestaña), el `charset` (cómo se interpretan los acentos) y los enlaces a CSS.
- **`<body>`** — todo lo visible: lo que el usuario ve y con lo que interactúa.

La regla de oro es simple: **lo que se ve va en body; lo que no se ve, en head.** Y un detalle que importa: el navegador lee de arriba a abajo, así que el `<head>` va antes del `<body>`. Cambiar ese orden rompe la página.

Cuando le pidas a la IA el esqueleto de un documento, revisa que traiga las tres partes. Si te entrega solo un `<body>` suelto, ya sabes qué falta y por qué. Reconocer la anatomía te deja auditar cualquier archivo HTML que caiga en tus manos.

### Analogía

Piensa en el documento como una **persona**. El `head` es la cabeza: ahí está la información que no ves a simple vista pero define cómo funciona todo (el idioma, el título, la configuración). El `body` es el cuerpo: todo lo que la gente ve y toca. Y el `<!DOCTYPE html>` es la credencial de identidad: antes de hablar con alguien quieres saber que es un humano y no un maniquí. El doctype hace exactamente eso: le dice al navegador "soy un documento HTML5 de verdad".

### Cómo se ve en la práctica

Guarda el documento de arriba como `index.html`, ábrelo con doble clic y observa:

```
Pestaña del navegador:  Mi primera página
Página (blanca):        Hola, mundo
```

El `<title>` aparece en la **pestaña**, no en la página. El `<h1>` aparece en la **página**. Ese contraste es la mejor demostración de head vs body: lo del head se ve en los bordes del navegador (pestaña, barra de dirección), lo del body se ve en el lienzo. Ábrelo en DevTools (F12 → Elements) y verás el árbol exacto que escribiste.

### Díselo a la IA

> "Voy a crear mi primera página web. Dame el esqueleto completo de un documento HTML5: doctype, head con charset y title, y body con un encabezado. Antes de escribir, explícame en una línea qué hace cada parte para que yo sepa qué estoy modificando."

### Ejercicios

1. **[relacionar]** Une cada parte con lo que hace:
   - `<!DOCTYPE html>` ↔ Le dice al navegador que es HTML5
   - `head` ↔ Metadatos que no se ven
   - `body` ↔ Todo lo visible
   - `title` ↔ Lo que aparece en la pestaña

2. **[opción múltiple]** ¿Qué parte del documento se ve en la pantalla?
   - a) Todo lo del head
   - b) Solo lo del body ✔
   - c) Todo el documento
   - d) Nada hasta que lo confirmes

3. **[completar]** "El ____ guarda los metadatos que no se ven; el ____ guarda el contenido visible."
   - Banco: `head` · `body` · `footer` · `html`
   - Respuesta: head / body

4. **[verdadero/falso]** "El `<!DOCTYPE html>` se muestra como texto al inicio de la página."
   - Respuesta: FALSO — es una declaración para el navegador, no se renderiza en pantalla.

5. **[qué hace]** En un documento ves `<!DOCTYPE html>` al inicio. ¿Qué significa?
   - a) Declara que el documento es HTML5 ✔
   - b) Muestra el título en la pestaña
   - c) Carga una hoja de estilos
   - d) Crea un encabezado visible

---

## A3 — Etiquetas semánticas: header, nav, main, section, footer

### Concepto

Antes, para armar una página solo existía `<div>` — una caja genérica sin significado. Hoy HTML tiene **etiquetas semánticas**: cajas con nombre y propósito. Las cinco que no pueden faltar:

- **`<header>`** — el encabezado del sitio o de una sección: logo, título.
- **`<nav>`** — la navegación: los enlaces del menú.
- **`<main>`** — el contenido principal y único de la página (solo debe haber uno).
- **`<section>`** — un bloque temático: cada parte con su propio título.
- **`<footer>`** — el pie de página: derechos, contactos, enlaces secundarios.

¿Por qué importa? Por dos lectores muy importantes: **Google** usa la estructura para entender de qué va tu página (semántica = SEO), y los **lectores de pantalla** la usan para que una persona ciega salte directo al menú o al contenido (semántica = accesibilidad). Sin etiquetas semánticas, tu página es una caja gigante llena de cajas sin nombre.

Dato memorable: la semántica **no cambia la apariencia**. Un `<header>` se ve igual que un `<div>` hasta que le das estilos. Su valor no es visual: es informativo. Por eso, cuando dirijas a la IA, pídele semántica desde el primer prompt — cambiarla después es reescribir la estructura.

### Analogía

Las etiquetas semánticas son como **cuartos con letrero** en una casa. Un `<div>` es un cuarto sin nombre: sabes que hay un espacio, pero no para qué sirve. Un `<header>` es "entrada con perchero y cuadro de la familia"; un `<nav>` es "pasillo que conecta todos los cuartos"; un `<main>` es "la sala donde pasa lo importante"; un `<footer>` es "la puerta trasera con el cuadro de avisos". Tú no memorizas los planos: reconoces los letreros. Y Google es el invitado que lee los letreros para no perderse.

### Cómo se ve en la práctica

El esqueleto de un blog sencillo se ve así (todavía sin estilos):

```html
<header>
  <p>Mi blog</p>
</header>
<nav>
  <a href="#inicio">Inicio</a>
  <a href="#articulos">Artículos</a>
</nav>
<main>
  <section>
    <h2>Artículos recientes</h2>
    <p>El primero de esta semana…</p>
  </section>
</main>
<footer>
  <p>© 2026 Mi blog</p>
</footer>
```

En pantalla, sin CSS, verás bloques apilados: arriba "Mi blog", después dos enlaces azules subrayados, después un título con texto, y al final el año. Nada se ve "diseñado" — pero la estructura está declarada. Ábrelo en DevTools (F12 → Elements) y notarás que cada bloque tiene su nombre real: `header`, `nav`, `main`, `section`, `footer`. Ese nombre es lo que Google y los lectores de pantalla leen.

### Díselo a la IA

> "Estructura esta landing con etiquetas semánticas: header con el logo, nav con el menú, main con tres sections (cada una con su h2), y footer. No agregues estilos todavía: quiero ver solo el esqueleto, y dime en una línea qué va en cada bloque."

### Ejercicios

1. **[relacionar]** Une la etiqueta con lo que contiene:
   - `header` ↔ Encabezado del sitio: logo y título
   - `nav` ↔ El menú de navegación
   - `main` ↔ El contenido principal y único
   - `section` ↔ Un bloque temático con su título
   - `footer` ↔ El pie de página

2. **[opción múltiple]** ¿Cuál de estas etiquetas NO tiene significado semántico?
   - a) header
   - b) div ✔
   - c) nav
   - d) footer

3. **[verdadero/falso]** "Las etiquetas semánticas se ven diferentes por defecto, sin necesidad de CSS."
   - Respuesta: FALSO — se ven igual que un div; su valor es el significado, no la apariencia.

4. **[completar]** "Las etiquetas ____ le dan ____ al contenido: Google y los lectores de pantalla las usan para entender la página."
   - Banco: `semánticas` · `significado` · `color` · `tamaño`
   - Respuesta: semánticas / significado

5. **[ordenar]** Acomoda el documento en el orden correcto, de arriba a abajo:
   - Desordenado: `main` · `head` · `footer` · `doctype` · `header`
   - Respuesta: doctype → head → header → main → footer

---

## A4 — Texto: encabezados, párrafos, listas y énfasis

### Concepto

Todo el texto de tu página se escribe con unas cuantas etiquetas que vas a reconocer para siempre:

- **Encabezados** — `<h1>` a `<h6>`. El número es el nivel de importancia: `h1` es el título principal, `h2` los títulos de sección, `h3` los subtítulos. No son "letras más grandes": son *jerarquía*.
- **Párrafos** — `<p>`. El bloque de texto normal.
- **Listas** — `<ul>` (viñetas, el orden no importa), `<ol>` (numerada, el orden importa) y cada elemento va en `<li>`.
- **Énfasis** — `<strong>` para lo importante (se ve en negritas) y `<em>` para el énfasis de lectura (se ve en cursiva).

La regla que separa a los profesionales: **un solo `h1` por página**. Es como el titular de un periódico: hay uno, y a partir de ahí desciende la jerarquía. El navegador pinta los encabezados con distintos tamaños por defecto, pero esa apariencia es lo de menos — lo que importa es el nivel.

Cuando le pidas a la IA que "estructure el texto", ella decidirá los niveles. Tu trabajo es revisar que la jerarquía tenga sentido: que no haya tres `h1`, que los subtítulos cuelguen del título correcto. Reconocer la jerarquía es lo que te deja corregirla.

### Analogía

Tu página es un **periódico**. El `h1` es el titular de portada (uno solo, que grita de qué va todo). Los `h2` son los títulos de sección: Deportes, Espectáculos. Los `h3` son los subtítulos dentro de cada nota. Los `p` son los párrafos de la nota. Las listas son los recuadros de "pasos" o "beneficios". Y el `strong` es la palabra que el editor marcó con rojo porque no quiere que la dejes pasar.

### Cómo se ve en la práctica

Este pedacito genera una mini-página de recetas:

```html
<h1>Recetas de la abuela</h1>
<h2>Tacos de papa</h2>
<p>Una receta <strong>clásica</strong> y <em>muy fácil</em>.</p>
<h3>Ingredientes</h3>
<ul>
  <li>Papas</li>
  <li>Tortillas</li>
</ul>
<h3>Pasos</h3>
<ol>
  <li>Hierve las papas.</li>
  <li>Rellena y fríe.</li>
</ol>
```

En pantalla verás: un título grande, debajo un título más chico, un párrafo donde "clásica" está en negritas y "muy fácil" en cursiva, después "Ingredientes" con una lista de viñetas y "Pasos" con una lista numerada. La jerarquía se lee de un vistazo — así de claro debe ser el texto de tu página.

### Díselo a la IA

> "Estoy escribiendo el contenido de [mi página]. Estructúramelo con jerarquía correcta: un solo h1, h2 para secciones, h3 solo donde haga falta, párrafos cortos, listas para pasos o beneficios, y strong o em únicamente donde de verdad importe. Revisa si mi jerarquía está mal en algún punto y corrígela."

### Ejercicios

1. **[opción múltiple]** ¿Cuántos h1 debería tener una página?
   - a) Tantos como secciones
   - b) Uno ✔
   - c) Ninguno
   - d) Siempre tres

2. **[relacionar]** Une la etiqueta con su uso:
   - `h1` ↔ El titular principal de la página
   - `h2` ↔ Título de sección
   - `p` ↔ Párrafo de texto
   - `ul` ↔ Lista con viñetas
   - `ol` ↔ Lista numerada

3. **[completar]** "____ marca importancia y se ve en negritas; ____ marca énfasis de lectura y se ve en cursiva."
   - Banco: `strong` · `em` · `h1` · `p`
   - Respuesta: strong / em

4. **[verdadero/falso]** "Una lista `<ol>` es correcta cuando el orden importa, como los pasos de un tutorial."
   - Respuesta: VERDADERO — ol = ordered list: el orden es parte del contenido.

5. **[qué hace]** Con este código, ¿qué aparece en pantalla?
   ```html
   <ul>
     <li>Papas</li>
     <li>Tortillas</li>
   </ul>
   ```
   - a) Una lista con viñetas ✔
   - b) Una lista numerada
   - c) Dos párrafos
   - d) Una tabla de dos filas

---

## A5 — Enlaces: navegación interna, externa y anclas

### Concepto

El enlace (en inglés, *link*) es lo que hace que la web sea una red. Se escribe con la etiqueta `<a>` y el atributo `href` (hypertext reference: "a dónde lleva"). Hay tres destinos posibles:

- **Externo** — apunta a otro sitio: `<a href="https://google.com">`. Lleva la dirección completa.
- **Interno** — apunta a otro archivo de tu propio sitio: `<a href="contacto.html">`. Usa ruta relativa (¿te acuerdas de las rutas del Mes 1?).
- **Ancla** — se mueve dentro de la misma página: `<a href="#precios">`. Para que funcione, el destino debe tener un atributo `id` con ese mismo nombre: `<section id="precios">`.

Atributos que verás siempre: `target="_blank"` abre el enlace en una pestaña nueva (y por seguridad casi siempre va acompañado de `rel="noopener"`), y `title` agrega un texto que aparece al pasar el mouse. Las anclas son la base del "volver arriba" y de las tablas de contenido: un clic y saltas a la sección.

Dato memorable: un enlace puede apuntar a cualquier cosa que tenga dirección: otra página, un archivo, una imagen, hasta un correo (`mailto:`). Si algo no tiene dirección, no se puede enlazar. Cuando dirijas a la IA, decirle "enlace ancla a precios" en vez de "link" le ahorra adivinar qué tipo de navegación quieres.

### Analogía

Un enlace es una **instrucción para llegar**. El externo es "toma el avión a otra ciudad" (dirección completa). El interno es "camina al cuarto de al lado" (ruta relativa). La ancla es "en esta misma casa, la cocina está al fondo del pasillo" (mismo edificio, otro punto). Y el `target="_blank"` es "regresa después de llegar": abres la puerta, pero no abandonas la casa donde estabas.

### Cómo se ve en la práctica

Un menú con los tres tipos de enlaces:

```html
<nav>
  <a href="index.html">Inicio</a>
  <a href="#precios">Precios</a>
  <a href="https://instagram.com/mi-marca"
     target="_blank" rel="noopener">Instagram</a>
</nav>

<section id="precios">…</section>
```

En pantalla verás tres enlaces azules y subrayados (el estilo por defecto del navegador): "Inicio" y "Precios" se ven igual que "Instagram", pero se comportan distinto. Al hacer clic en "Precios" la página **salta** hasta la sección con `id="precios"`; al hacer clic en "Instagram" se abre una pestaña nueva. El cursor cambia a una manita sobre cualquiera de los tres: ese es el lenguaje visual del navegador para decir "esto es un enlace".

### Díselo a la IA

> "Necesito la navegación de mi página: un menú con enlaces internos a mis secciones, un enlace externo a [URL] que abra en pestaña nueva con rel='noopener', y un enlace ancla de 'volver arriba'. Explícame en una línea la diferencia entre cada tipo antes de escribirlos."

### Ejercicios

1. **[relacionar]** Une cada href con su tipo de enlace:
   - `href="https://…"` ↔ Enlace externo a otro sitio
   - `href="contacto.html"` ↔ Enlace interno a otro archivo del sitio
   - `href="#precios"` ↔ Ancla dentro de la misma página
   - `target="_blank"` ↔ Abre en una pestaña nueva

2. **[completar]** "Para que la ancla `href=\"#precios\"` funcione, debe existir un elemento con ____=\"precios\" en la página."
   - Banco: `id` · `class` · `name` · `src`
   - Respuesta: id

3. **[verdadero/falso]** "Un enlace ancla como `href=\"#contacto\"` te lleva a otro sitio web."
   - Respuesta: FALSO — las anclas se mueven dentro de la misma página, al elemento con ese id.

4. **[opción múltiple]** ¿Qué atributo abre el enlace en una pestaña nueva?
   - a) `target="_blank"` ✔
   - b) `href="_new"`
   - c) `rel="newtab"`
   - d) `title="blank"`

5. **[qué hace]** Con este enlace, ¿qué pasa al hacer clic?
   ```html
   <a href="#inicio">Volver arriba</a>
   ```
   - a) La página salta al elemento con id="inicio" ✔
   - b) Se abre otro sitio web
   - c) Se descarga un archivo
   - d) Se recarga la página

---

## A6 — Imágenes: formatos, peso, `alt` y por qué importa

### Concepto

Las imágenes son lo que más pesa en una página web — y casi siempre lo que más tarda en cargar. Tres decisiones las controlan: **formato**, **peso** y el texto **alt**.

**Formato** — la receta de la imagen. Los que verás en la vida real:

- `JPG` — fotos con millones de colores. Comprime bastante, ideal para fotografías reales.
- `PNG` — soporta **transparencia** y es nítido con logos y texto, pero pesa más.
- `WebP` — el moderno: comprime mejor que los dos y lo soporta todo navegador actual. Cuando la IA te diga "lo convierto a WebP", di que sí.
- `SVG` — no es una foto de puntos: es una receta de dibujo (vector). Se agranda hasta donde quieras sin perder calidad. Para logos e iconos.
- `GIF` — animaciones cortas y de pocos colores; hoy casi siempre conviene un video.

**Peso** — una página pesa lo que pesan sus imágenes. Cada kilo de más son milisegundos (o segundos) de espera: en el celular, en datos móviles, en un internet lento. Por eso el atributo `loading="lazy"` es tu amigo: le dice al navegador "no cargues esta imagen hasta que el usuario se acerque a verla".

**Alt** — el texto alternativo. Si la imagen no carga, se ve el alt. Si alguien usa lector de pantalla, escucha el alt. Y Google indexa el alt. Un alt vacío (`alt=""`) significa "esto es decorativo, ignóralo"; un alt con texto describe lo que se ve.

¿Por qué te importa si la IA genera las imágenes? Porque vas a leer sus reportes — "convertí las fotos a WebP", "agregué lazy loading" — y a revisar que el alt describa de verdad. Las imágenes mal optimizadas son la causa número uno de páginas lentas, y una página lenta pierde clientes (y posicionamiento en Google).

### Analogía

Cada imagen es un **platillo que tu página sirve**. El formato es la receta: hay recetas caras y lentas (PNG) y recetas rápidas y ligeras (WebP). El peso es el tiempo que tarda en llegar a la mesa — nadie pide un platillo que tarda 10 minutos en un local vacío. Y el alt es la etiqueta con el nombre del platillo: el mesero (lector de pantalla) se lo describe al comensal que no lo ve, y el crítico (Google) lo anota en su reseña.

### Cómo se ve en la práctica

La etiqueta completa de una imagen optimizada se ve así:

```html
<img src="fotos/cafe-olla.webp"
     alt="Café de olla servido en taza de barro"
     width="800" height="600"
     loading="lazy">
```

En pantalla verás la foto del café. El `width` y el `height` reservan el espacio antes de que cargue (así la página no brinca), y el `loading="lazy"` hace que no se descargue hasta que haga falta. El resultado de optimizar se lee en números:

```
foto-original.png   2.4 MB
foto-webp.webp      180 KB
```

Una imagen 13 veces más ligera, a simple vista idéntica. Ese es el trabajo invisible que hace que tu página se sienta rápida.

### Díselo a la IA

> "Voy a subir 12 fotos a mi página. Conviértemelas a WebP, dime cuánto pesaba cada una antes y después, y muéstrame el código img completo: alt que describa lo que se ve, width y height reales, y loading lazy. Si alguna es decorativa, usa alt vacío."

### Ejercicios

1. **[opción múltiple]** ¿Qué formato es el más ligero y moderno para fotos en una página web?
   - a) JPG
   - b) GIF
   - c) WebP ✔
   - d) SVG

2. **[completar]** "El atributo ____ lleva el texto que leen los lectores de pantalla; ____=\"lazy\" hace que la imagen cargue solo cuando se acerca a la vista."
   - Banco: `alt` · `loading` · `src` · `weight`
   - Respuesta: alt / loading

3. **[relacionar]** Une el formato con su caso de uso:
   - JPG ↔ Fotos con millones de colores
   - PNG ↔ Transparencia para logos y texto
   - WebP ↔ El formato moderno, ligero y universal
   - SVG ↔ Dibujo vectorial que nunca pierde nitidez

4. **[verdadero/falso]** "Una página con imágenes pesadas tarda más en cargar y eso afecta tanto al usuario como al posicionamiento en Google."
   - Respuesta: VERDADERO — el peso es la causa número uno de páginas lentas, y Google penaliza la lentitud.

5. **[qué hace]** Con este código, ¿qué significa?
   ```html
   <img src="foto.jpg" alt="" loading="lazy">
   ```
   - a) La imagen es decorativa: el alt vacío la excluye de los lectores de pantalla y carga con lazy ✔
   - b) La imagen no tiene descripción y es un error grave
   - c) El alt vacío hace que la imagen no cargue
   - d) La imagen se descarga de inmediato al abrir la página

---

## A7 — Tablas: cuándo sí y cuándo definitivamente no

### Concepto

Una **tabla** sirve exactamente para una cosa: mostrar **datos organizados en filas y columnas** — precios, horarios, comparaciones, resultados. Y para nada más. La regla de oro: **si lo que tienes son datos, tabla; si es diseño, NO tabla.**

Las piezas:

- `<table>` — la tabla completa.
- `<tr>` — *table row*: una fila.
- `<th>` — *table header*: celda de encabezado (se ve en negritas y centrada).
- `<td>` — *table data*: celda con un dato.
- `<thead>` y `<tbody>` — separan el bloque de encabezados del bloque de datos.

¿Cuándo **sí**? Comparaciones: tus tres planes de precios lado a lado, horarios de apertura, resultados de una encuesta, un catálogo con columnas. El ojo humano lee filas y columnas rapidísimo cuando hay datos que comparar.

¿Cuándo **definitivamente no**? Para maquetar: unir columnas para acomodar el logo a la izquierda y el menú a la derecha, dibujar tarjetas, armar el pie de página. Eso era lo normal en los años 90 y 2000, y hoy es una bandera roja: ese diseño se hace con CSS (flexbox y grid, en las lecciones A19–A22).

Dato memorable: si le pides a la IA "usa una tabla para el layout", está usando una técnica de hace 25 años. Reconócelo y redirige: "mejor maqueta con CSS".

### Analogía

La tabla es una **hoja de cálculo**: naciste sabiendo que Excel sirve para datos — filas, columnas, totales. Nadie diseña el letrero del restaurante en Excel. Tu página es el local: el layout (dónde va cada cosa) se diseña con reglas de diseño (CSS); las tablas solo se abren cuando hay datos que mostrar, igual que abres Excel para un presupuesto y no para dibujar.

### Cómo se ve en la práctica

El uso correcto: una comparación de planes.

```html
<table>
  <thead>
    <tr>
      <th>Plan</th>
      <th>Precio</th>
      <th>Soporte</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Básico</td>
      <td>$199</td>
      <td>Correo</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>$399</td>
      <td>Teléfono</td>
    </tr>
  </tbody>
</table>
```

En pantalla verás la primera fila con "Plan, Precio, Soporte" en negritas y centrado (los `th`), y debajo dos filas con los datos (los `td`). Sin estilos no se ven líneas divisorias, pero las columnas ya se alinean solas. Esa alineación vertical es la tabla haciendo su trabajo: comparar de un vistazo.

Y el uso incorrecto, el que debes reconocer para evitarlo:

```html
<table>
  <tr><td>Logo</td><td>Menú</td></tr>
</table>
```

Funciona visualmente… y es exactamente lo que hoy se hace con CSS. Tabla para datos, CSS para diseño.

### Díselo a la IA

> "Voy a mostrar mis planes de precios en la página. ¿Me conviene una tabla o tarjetas con CSS? Si es tabla, estructúrala con thead y tbody y th para encabezados. Si no, muéstrame la opción con CSS y explica por qué. Nunca uses tablas para el layout."

### Ejercicios

1. **[verdadero/falso]** "Una tabla es la opción correcta para mostrar datos comparativos como precios de planes."
   - Respuesta: VERDADERO — las tablas son para datos en filas y columnas, no para diseño.

2. **[opción múltiple]** ¿Para cuál de estos conviene usar una tabla?
   - a) Un menú de navegación horizontal
   - b) Una comparación de planes con precio y funciones ✔
   - c) Una tarjeta de producto con foto
   - d) El encabezado con el logo

3. **[relacionar]** Une la etiqueta con su pieza:
   - `table` ↔ La tabla completa
   - `tr` ↔ Una fila
   - `th` ↔ Celda de encabezado, en negritas
   - `td` ↔ Celda con un dato
   - `tbody` ↔ El bloque de datos

4. **[completar]** "La celda ____ marca un encabezado; la celda ____ guarda un dato; cada fila va en un ____."
   - Banco: `th` · `td` · `tr` · `table`
   - Respuesta: th / td / tr

5. **[qué hace]** Con este código, ¿qué está haciendo?
   ```html
   <table>
     <tr><td>Logo</td><td>Menú</td></tr>
   </table>
   ```
   - a) Muestra datos comparativos de forma correcta
   - b) Maqueta el layout con tablas: funciona, pero es la técnica vieja que hoy se hace con CSS ✔
   - c) Es la forma estándar de armar un menú
   - d) Está mal escrito y no se mostrará nada

---

## A8 — Formularios I: inputs, labels y tipos de campo

### Concepto

El **formulario** es como tu página le pide datos al usuario: un nombre, un correo, una contraseña, una respuesta. Y es el puente hacia el servidor: lo que se llena aquí es lo que tu negocio recibe.

Las tres piezas básicas:

- `<form>` — el contenedor de todo el formulario.
- `<label>` — el texto que dice qué se pide: "Nombre", "Correo", "Contraseña".
- `<input>` — el campo donde el usuario escribe.

El **tipo de campo** (atributo `type`) le dice al navegador qué espera: `text` (texto libre), `email` (correo — el navegador ya revisa el formato), `password` (oculta lo escrito), `number` (solo números, con flechitas), `tel` (teléfono), `date` (calendario), `checkbox` (casilla de sí/no), `radio` (una de varias opciones), `file` (subir archivo). Para texto largo existe `<textarea>` y para opciones desplegables `<select>`.

Dos conexiones que no se negocian:

- El `label` se conecta al input con `for` y `id`: `<label for="correo">` apunta a `<input id="correo">`. Así, al hacer clic en el texto, el campo se enfoca.
- El atributo `name` es el nombre del dato que se envía. Sin `name`, ese campo se queda mudo: el usuario escribe, pero el dato no viaja.

En A9 vas a ver cómo el navegador valida estos campos solito — esta lección es la base, no la memorices: reconócela en cualquier página. Cuando le pidas formularios a la IA, nombrar los tipos correctos te da un formulario usable desde el primer intento.

### Analogía

El formulario es una **solicitud de empleo impresa**. Los `label` son las preguntas impresas ("Nombre:", "Correo:"); los `input` son las líneas donde escribes; y el `name` es la etiqueta que alguien pone en el archivo cuando guarda tu solicitud — si la línea no tiene etiqueta, la secretaria (el servidor) no sabe qué dato es ese. El `type` es el tipo de línea: unas se llenan con lápiz (texto), otras con un marcador que no se ve (password), y las de opciones tienen casillas para marcar.

### Cómo se ve en la práctica

El esqueleto de un registro:

```html
<form>
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre">

  <label for="correo">Correo</label>
  <input type="email" id="correo" name="correo">

  <label for="clave">Contraseña</label>
  <input type="password" id="clave" name="clave">

  <button type="submit">Registrarme</button>
</form>
```

En pantalla verás tres etiquetas, cada una sobre su campo. Al escribir en "Contraseña", los caracteres se ocultan (puntos). Al hacer clic en la palabra "Nombre", el campo de arriba se enfoca — esa es la conexión `for`/`id`. Y si escribes un correo mal formado, el navegador ya lo marca — eso es el `type="email"` trabajando, aunque todavía no validemos nada (eso llega en A9).

### Díselo a la IA

> "Voy a crear el formulario de registro de mi negocio: nombre, correo, contraseña y un campo de texto para notas. Estructúralo con form, labels conectados con for e id, inputs con su tipo correcto y name, textarea para las notas y un botón submit. Antes de escribir, dime en una línea para qué sirve cada tipo de campo que uses."

### Ejercicios

1. **[relacionar]** Une el tipo de campo con lo que hace:
   - `type="text"` ↔ Texto libre corto
   - `type="email"` ↔ Correo: el navegador revisa el formato
   - `type="password"` ↔ Oculta los caracteres escritos
   - `type="number"` ↔ Solo números, con flechitas
   - `type="checkbox"` ↔ Casilla de sí/no

2. **[opción múltiple]** ¿Qué pasa si un input no tiene atributo name?
   - a) Funciona normal, el name es opcional
   - b) El dato de ese campo no se envía con el formulario ✔
   - c) El formulario no se muestra en pantalla
   - d) El navegador muestra un error

3. **[completar]** "El label se conecta al input con el atributo ____ y el mismo valor en el ____ del input."
   - Banco: `for` · `id` · `name` · `type`
   - Respuesta: for / id

4. **[verdadero/falso]** "Un grupo de radio buttons sirve para elegir una sola opción de varias."
   - Respuesta: VERDADERO — el radio es de selección única dentro de su grupo.

5. **[qué hace]** Con este código, ¿qué pasa al escribir en el campo?
   ```html
   <label for="correo">Correo</label>
   <input type="password" id="correo" name="correo">
   ```
   - a) Como el label dice 'Correo', el navegador valida correos
   - b) Los caracteres se ocultan: el type="password" manda aunque la etiqueta diga 'Correo' ✔
   - c) El campo se deshabilita solo
   - d) Se muestra un calendario para elegir fecha

---

## A9 — Formularios II: validación nativa del navegador

### Concepto

En A8 armaste los campos. Ahora el navegador va a hacer el trabajo de **revisarlos antes de enviar** — sin una línea de JavaScript. Eso se llama **validación nativa**, y es la primera barrera (para el usuario), no la última (para tu seguridad).

Los atributos que hacen magia:

- `required` — el campo no puede ir vacío. Si das enviar sin llenarlo, el navegador lo marca y bloquea.
- `minlength` / `maxlength` — mínimo y máximo de caracteres.
- `min` / `max` — valor mínimo y máximo (para `type="number"` y fechas).
- `pattern` — una regla de formato. Ejemplo: `pattern="[0-9]{10}"` exige exactamente 10 dígitos.
- Los tipos del navegador validan solos: `type="email"` exige un correo con @, `type="url"` exige algo como `https://…`.

El flujo: el usuario da clic en Enviar → el navegador revisa TODOS los campos → si algo falla, muestra un globo de error al lado del campo culpable y no envía nada. Es el navegador el que decide el mensaje ("Completa este campo", "Incluye un @").

Advertencia que te separa del resto: la validación nativa es para el usuario, no para tu seguridad. Un atacante no usa tu formulario: le manda datos directo al servidor. Por eso el servidor también valida (lo verás en el Mes 9). La nativa es la puerta amable; la del servidor es la puerta blindada.

Dato memorable: si un formulario no envía y nadie entiende por qué, revisa si hay un `required` — el globo del navegador casi siempre es el culpable. Saber esto te deja diagnosticar sin abrir DevTools.

### Analogía

La validación nativa es el **portero del antro**: antes de dejarte pasar, revisa tu credencial (required), que tenga la fecha al día (pattern), que tengas la edad mínima (min) y que el nombre coincida (type). Si algo falla, te lo dice en la puerta y no entras — sin necesidad de un empleado con lista de nombres (JavaScript). Pero el portero solo cuida la puerta: adentro, la caja fuerte (tu servidor) tiene su propia seguridad, porque alguien podría intentar entrar por la ventana.

### Cómo se ve en la práctica

El formulario de A8, ahora con validación:

```html
<form>
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre"
         required minlength="2">

  <label for="edad">Edad</label>
  <input type="number" id="edad" name="edad"
         min="18" max="100" required>

  <label for="web">Tu sitio web</label>
  <input type="url" id="web" name="web"
         placeholder="https://…">

  <button type="submit">Enviar</button>
</form>
```

En pantalla verás lo mismo que en A8, pero con comportamiento nuevo: si das clic en "Enviar" con el nombre vacío, el navegador muestra un globo "Completa este campo" y no envía. Si pones un nombre de una sola letra, lo rechaza por el `minlength`. Si pones 17 en la edad, lo rechaza por el `min="18"`. Y el campo de web pide algo que empiece con `https://`. Prueba todos los casos: estás viendo al navegador validar en vivo, sin JavaScript.

### Díselo a la IA

> "Termina el formulario de registro que armamos en A8 con validación nativa del navegador: required en los campos obligatorios, minlength de 2 en el nombre, min y max en la edad, y type correcto para correo y URL. Nada de JavaScript: quiero que el navegador muestre sus propios globos de error. Explícame qué valida cada atributo."

### Ejercicios

1. **[completar]** "El atributo ____ marca un campo obligatorio; ____=\"3\" exige un mínimo de 3 caracteres."
   - Banco: `required` · `minlength` · `maxlength` · `placeholder`
   - Respuesta: required / minlength

2. **[opción múltiple]** Escribes "hola@" en un input type="email" y das clic en Enviar. ¿Qué pasa?
   - a) El navegador lo acepta, los correos no se validan
   - b) El navegador muestra un error y bloquea el envío ✔
   - c) El servidor corrige el correo automáticamente
   - d) Se limpia el formulario completo

3. **[verdadero/falso]** "La validación nativa del navegador es suficiente para proteger tu servidor de datos maliciosos."
   - Respuesta: FALSO — protege la experiencia del usuario, no tu servidor: alguien puede enviar datos directo sin usar el formulario.

4. **[relacionar]** Une el atributo con lo que valida:
   - `required` ↔ El campo no puede ir vacío
   - `minlength="3"` ↔ Mínimo 3 caracteres
   - `min="18"` ↔ Valor mínimo 18
   - `type="url"` ↔ Debe verse como https://…
   - `pattern="[0-9]{10}"` ↔ Debe cumplir un formato exacto

5. **[qué hace]** Con este campo, ¿qué hace?
   ```html
   <input type="email" id="correo" name="correo" required>
   ```
   - a) Es opcional pero valida el formato del correo
   - b) Es obligatorio y el navegador revisa que sea un correo válido ✔
   - c) Solo acepta números
   - d) No se puede escribir en él

---

## A10 — Atributos: `id`, `class` y `data-*`

### Concepto

Los **atributos globales** son etiquetas que puede llevar cualquier elemento, y tres de ellos los vas a ver en cada archivo que toque una IA: `id`, `class` y `data-*`.

- **id** — identificador **único**. Solo puede existir uno por página. Es como el nombre en tu INE: nadie más lo tiene. Ya lo usaste sin darte cuenta en las anclas (A5: `href="#precios"` → `<section id="precios">`) y en los labels (A8: `for="correo"` → `id="correo"`). También es la puerta para que CSS y JavaScript apunten a UN elemento exacto.
- **class** — clasificador **repetible**. Muchos elementos pueden compartir la misma clase, y un elemento puede tener varias separadas por espacio. Es la herramienta del CSS para estilizar todos los de un grupo a la vez.
- **data-*** — almacén personal de datos: `data-precio="199"`, `data-stock="12"`. El asterisco es cualquier nombre que inventes. No se ve en pantalla ni afecta el estilo: es información guardada en el elemento para que JavaScript la lea cuando la necesite.

La lógica que llevas para siempre: **uno vs muchos vs escondido**. id identifica a uno, class agrupa a muchos, data-* esconde datos para el código.

En la Materia B los vas a usar a diario: `querySelector` busca por `#id` y por `.class`, y `dataset` lee los `data-*`. Si le pides a la IA estas tres piezas bien puestas, su código de JavaScript después fluye sin fricción.

### Analogía

Son los **tres datos de una persona en un evento**. El `id` es tu número de folio: único, nadie más lo tiene, con él te encuentran en cualquier lista. La `class` es tu playera del equipo: la traen 50 personas y eso permite que el organizador te ubique a todos de golpe. Y los `data-*` son la etiqueta pegada en tu espalda con tu talla y tu alimento preferido: no se ve de frente, pero el staff (JavaScript) la lee cuando la necesita.

### Cómo se ve en la práctica

Dos tarjetas de un catálogo:

```html
<div class="producto" id="producto-7"
     data-precio="199" data-stock="12">
  <h2>Café de olla</h2>
  <p>$199</p>
</div>

<div class="producto" id="producto-8"
     data-precio="149" data-stock="0">
  <h2>Té de canela</h2>
  <p>$149</p>
</div>
```

En pantalla verás dos tarjetas que se ven idénticas (las dos comparten `class="producto"`, que es lo que las estiliza igual). No verás ni el `id` ni los `data-*`: son invisibles. Pero en DevTools (F12 → Elements) están ahí, en el código. El `id` permite apuntar a "producto-8" sin tocar a "producto-7", y el `data-stock="0"` le dirá a JavaScript "este no tiene inventario" cuando el usuario intente comprarlo. Información lista, invisible, esperando.

### Díselo a la IA

> "Dame el catálogo de mis productos como tarjetas. Todas con class='producto', un id único por tarjeta (producto-1, producto-2…), y data-precio con data-stock con los valores reales de cada uno. Dime qué veré en pantalla y qué quedará invisible pero accesible para JavaScript."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos atributos debe ser único en toda la página?
   - a) class
   - b) id ✔
   - c) data-*
   - d) href

2. **[completar]** "____ agrupa varios elementos para estilizarlos igual; ____ identifica a un solo elemento de forma única."
   - Banco: `class` · `id` · `data` · `src`
   - Respuesta: class / id

3. **[relacionar]** Une el atributo con lo que hace:
   - `id="producto-7"` ↔ Identifica ese elemento de forma única
   - `class="producto"` ↔ Agrupa todas las tarjetas con el mismo estilo
   - `data-precio="199"` ↔ Guarda un dato que JavaScript puede leer
   - `data-stock="0"` ↔ Información de inventario para el código

4. **[verdadero/falso]** "Los atributos data-* son invisibles en pantalla pero legibles desde JavaScript."
   - Respuesta: VERDADERO — no afectan el visual; son datos para el código.

5. **[qué hace]** Con este fragmento, ¿qué verás en pantalla?
   ```html
   <div class="producto" data-precio="199">
   ```
   - a) El estilo de la clase 'producto', y '199' como texto visible
   - b) El estilo de la clase 'producto'; el data-precio queda invisible para el usuario pero disponible para JavaScript ✔
   - c) Nada, sin JavaScript no se muestra
   - d) Un error, porque data-precio no es un atributo válido

---

## A11 — CSS: las tres formas de aplicarlo y cuál usar siempre

### Concepto

El CSS es el que le da **cara** a tu HTML: colores, tamaños, espacios, tipografía. En esta materia vas a vivir de él, y lo primero es saber que se puede aplicar de **tres formas** — y que solo una debes usar siempre:

- **En línea (inline)** — dentro del mismo elemento, con el atributo `style`: `<p style="color: red;">…</p>`. Rápido para probar, fatal para mantener: el estilo queda atrapado en cada etiqueta.
- **Interno** — un bloque `<style>` dentro del `<head>` del documento. Sirve para archivos sueltos de una página.
- **Externo** — un archivo aparte, `styles.css`, conectado con un `<link>` en el `head`. Este es **el que usas siempre**.

¿Por qué el externo? Tres razones concretas: **separación** (el HTML queda limpio, solo estructura, como viste en A3), **reutilización** (un solo archivo controla todas tus páginas) y **mantenimiento** (cambias un color una vez y se actualiza todo el sitio). Cuando pidas estilos a la IA, fíjate que siempre genere o edite `styles.css` — nunca estilos pegados adentro del HTML.

### Analogía

Son **tres formas de dar instrucciones en un restaurante**. El inline es decirle al mesero, plato por plato: "este plato lleva más sal". Funciona, pero si hay 200 platos y cambia la receta, lo repites 200 veces. El interno es un pizarrón en la cocina de una sucursal: vale solo para esa sucursal. El externo es el **manual de la casa matriz**: todas las sucursales lo leen, y cuando cambias una línea del manual, el plato cambia en todas partes a la vez. Por eso tu proyecto debe tener un solo manual: `styles.css`.

### Cómo se ve en la práctica

Las tres formas en un mismo documento:

```html
<p style="color: red;">En línea</p>

<style>
  p { color: blue; }
</style>

<link rel="stylesheet" href="styles.css">
```

En pantalla verás "En línea" en **rojo**, porque su estilo inline gana; si en `styles.css` escribes `p { color: blue; }`, el resto de tu texto quedará azul. Prueba el flujo real: crea un `styles.css`, escribe `p { color: tomato; }`, conéctalo con el `<link>` y recarga. Todo tu texto cambió de color desde un solo archivo. Eso es lo que le vas a pedir a la IA de aquí en adelante.

### Díselo a la IA

> "Voy a estilizar mi landing. Crea un archivo styles.css y conéctalo a mi index.html con un link en el head. No pongas ningún estilo inline ni dentro del HTML: todo vive en styles.css. Explícame en una línea qué hace exactamente la etiqueta link que me das."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de las tres formas de CSS debes usar siempre en un proyecto real?
   - a) Inline, es la más rápida
   - b) Externa, en un archivo styles.css ✔
   - c) Interna, en un bloque style
   - d) Cualquiera, da igual

2. **[relacionar]** Une la forma con su característica:
   - Inline (style) ↔ Estilo atrapado en cada etiqueta
   - Interno (style en head) ↔ Vale solo para ese documento
   - Externo (link) ↔ Un archivo para todo el sitio
   - `styles.css` ↔ La hoja que conectas con link

3. **[completar]** "El CSS ____ vive en un archivo aparte y se conecta con la etiqueta ____ en el head."
   - Banco: `externo` · `link` · `inline` · `style`
   - Respuesta: externo / link

4. **[verdadero/falso]** "El CSS inline es una buena elección cuando 200 elementos deben verse idénticos."
   - Respuesta: FALSO — tendrías que repetir el estilo en los 200 elementos; el externo lo controla desde una sola línea.

5. **[qué hace]** Con esta línea del head, ¿qué hace?
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
   - a) Muestra un enlace a la página styles.css
   - b) Conecta tu HTML con la hoja de estilos externa ✔
   - c) Crea un archivo llamado styles.css
   - d) Le pone estilos solo a los enlaces

---

## A12 — Selectores: el idioma para apuntar a un elemento

### Concepto

Un **selector** es la parte del CSS que dice *a quién* se aplica la regla. Sin él, el navegador no sabe dónde pintar. Los cuatro que usarás a diario:

- **De elemento** — el nombre de la etiqueta: `p`, `h2`, `a`. Le pega a *todos* los de ese tipo.
- **De clase** — `.tarjeta`. Apunta a todos los que lleven `class="tarjeta"`. Las clases ya te son familiares desde A10.
- **De id** — `#menu`. Apunta a un solo elemento: el del `id="menu"`.
- **Descendiente** — `nav a`. Se lee como dirección: "un `a` que esté adentro de `nav`".

También existe el de **grupo**: `h1, h2, h3` aplica la misma regla a varios selectores a la vez. La regla de oro: **apunta con lo mínimo necesario** — empieza por elemento, sube a clase si lo necesitas, y deja el id para casos únicos.

Cuando revises el CSS que generó la IA, vas a leer los selectores como instrucciones de reparto: a quién le tocó qué estilo. Ese es el momento en que dejas de ver "código raro" y empiezas a ver decisiones.

### Analogía

El selector es la **dirección postal** para entregar un paquete (el estilo). `p` es "deja uno en todas las casas del mismo modelo". `.tarjeta` es "deja uno en todos los edificios con el letrero tarjeta en la entrada". `#menu` es "entrégaselo a la casa con el folio 5, la única que lo tiene". Y `nav a` es "busca los negocios que están dentro del centro comercial nav". Sin dirección exacta, el repartidor no sabe dónde bajar el paquete — y tu estilo no sabe dónde pintar.

### Cómo se ve en la práctica

Una mini-hoja con los cuatro selectores:

```css
p { color: #333; }

.tarjeta { background: #f5f5f5; }

#banner { text-align: center; }

nav a { text-decoration: none; }
```

En pantalla verás: todos los párrafos en gris oscuro; todos los elementos con `class="tarjeta"` con fondo gris claro; el único elemento con `id="banner"` centrado; y los enlaces *que están dentro de* `nav` sin subrayado — los de afuera lo conservan. El truco para nunca confundirte: **punto para clase, almohadilla (#) para id, nada para etiqueta**. Punto = muchos, # = uno exacto.

### Díselo a la IA

> "Tengo esta estructura en mi landing: varias sections con h2, tarjetas con class='producto' y un botón con id='boton-compra'. Quiero los h2 verdes, las tarjetas con borde gris, y solo ese botón naranja. Escríbeme el CSS con los selectores exactos y dime qué símbolo usa cada uno (. # o ninguno) y por qué."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos selectores apunta a un solo elemento único en la página?
   - a) p
   - b) .tarjeta
   - c) #menu ✔
   - d) nav a

2. **[relacionar]** Une el selector con a quién apunta:
   - `p` ↔ Todas las etiquetas de ese tipo
   - `.tarjeta` ↔ Todos los que tengan esa clase
   - `#menu` ↔ El único con ese id
   - `nav a` ↔ Los enlaces dentro de nav

3. **[completar]** "El selector de ____ se escribe con un punto (.tarjeta); el de ____ se escribe con almohadilla (#menu)."
   - Banco: `clase` · `id` · `elemento` · `grupo`
   - Respuesta: clase / id

4. **[verdadero/falso]** "El selector `p` apunta solo al primer párrafo de la página."
   - Respuesta: FALSO — apunta a todos los párrafos (p) del documento; si quieres uno solo, usa un id o una clase.

5. **[qué hace]** Con esta regla, ¿qué elementos se pintan de rojo?
   ```css
   nav a { color: red; }
   ```
   - a) Todos los enlaces de la página
   - b) Solo los enlaces que están dentro de nav ✔
   - c) Solo los enlaces de la primera página
   - d) El bloque nav completo

---

## A13 — La cascada y la especificidad: quién le gana a quién

### Concepto

¿Qué pasa si dos reglas quieren estilizar el mismo elemento y se contradicen? Ahí entran dos leyes: la **cascada** y la **especificidad**.

La **cascada** dice: a igualdad de condiciones, **gana la que está más abajo** en el archivo. El navegador lee tu CSS de arriba a abajo, y la última palabra es la que vale.

La **especificidad** dice: no todos los selectores valen lo mismo. Hay una escala de rango:

- `#id` — el de mayor rango (apunta a un elemento único).
- `.clase` — rango medio (apunta a un grupo).
- `etiqueta` — rango base (apunta a todos).

El orden de decisión es **primero el rango, después el orden**: gana el más específico; si empatan, gana el que está más abajo. Eso explica el 90% de los "no me pega el estilo": otro selector con más rango (o más abajo) le está ganando al tuyo.

Cuando la IA te entregue CSS que "no funciona", este es el primer sospechoso. Reconocer la especificidad te convierte en quien diagnostica, no en quien vuelve a pedir lo mismo a ciegas.

### Analogía

Es una **pelea por la última palabra en la oficina**. La etiqueta es un becario: puede opinar, pero pesa poco. La clase es el líder de equipo: pesa más. El id es el director: su palabra se impone sobre todos. Cuando dos del mismo rango discuten, se impone el que habló **al final de la reunión** (la cascada: el que está más abajo en el archivo). Y cuando el director habla, el becario puede gritar lo que quiera: pierde. Por eso un `#id` que está arriba le gana a una `.clase` que está abajo.

### Cómo se ve en la práctica

Tu CSS dice una cosa y en pantalla ves otra:

```css
.tarjeta { background: blue; }
#especial { background: red; }
.tarjeta { background: green; }
```

El elemento con `class="tarjeta" id="especial"` quedará **rojo**. ¿Por qué, si la última regla dice green? Porque la especificidad pesa más que el orden: el `#id` tiene más rango que cualquier clase, y gana aunque esté más arriba. Si lo quieres verde no agregues otra clase: cambia el color dentro del `#especial`, o quita ese id. Pruébalo en tu editor: mueve las reglas de lugar y verás que el rojo no se mueve. Cuando la IA te dé CSS que "no pega", revisa esto primero — casi siempre es especificidad, no un error de escritura.

### Díselo a la IA

> "Mi botón está saliendo azul aunque escribí .boton { background: red; }. Seguramente hay un selector con más especificidad o una regla más abajo en mi styles.css que le gana. Encuéntralo, explícame quién gana y por qué, y dime cómo arreglarlo sin usar !important."

### Ejercicios

1. **[opción múltiple]** ¿Qué selector tiene la mayor especificidad?
   - a) `#header` ✔
   - b) `.titulo`
   - c) `h2`
   - d) `p`

2. **[ordenar]** Ordena de menor a mayor especificidad:
   - Desordenado: `#header (id)` · `h2 (etiqueta)` · `.titulo (clase)`
   - Respuesta: h2 (etiqueta) → .titulo (clase) → #header (id)

3. **[completar]** "Si dos reglas tienen la misma especificidad, gana la que está ____ en el archivo: es la ley de la ____."
   - Banco: `más abajo` · `cascada` · `más arriba` · `especificidad`
   - Respuesta: más abajo / cascada

4. **[verdadero/falso]** "Una clase siempre le gana a un id, sin importar el orden en el archivo."
   - Respuesta: FALSO — es al revés: el id tiene mayor especificidad que cualquier clase.

5. **[qué hace]** Con este CSS, ¿de qué color quedará un h2 dentro de .contenido?
   ```css
   h2 { color: red; }
   .contenido h2 { color: blue; }
   ```
   - a) Rojo
   - b) Azul ✔
   - c) Morado
   - d) No se le aplica ningún color

---

## A14 — El modelo de caja: content, padding, border, margin

### Concepto

Todo elemento de tu página es una **caja**, y entender el diseño web es entender sus cuatro capas, de adentro hacia afuera:

- **content** — el contenido: texto, imagen, lo que sea. Es lo que mides con `width` y `height`.
- **padding** — el aire interno: espacio entre el contenido y el borde. Tiene el fondo del elemento y agranda la caja visible.
- **border** — el borde: la línea que delimita la caja. Grosor, estilo y color.
- **margin** — el aire externo: espacio *entre* esta caja y las demás. Es transparente y no pinta nada: solo separa.

Y el detalle que lo cambia todo: `box-sizing: border-box` hace que el `width` que escribes **ya incluya** content + padding + border. El valor por defecto (`content-box`) solo mide el contenido y las otras capas *se suman*, rompiendo tus medidas. Por eso en proyectos reales casi siempre ves `* { box-sizing: border-box; }` al inicio.

Cuando pidas "más aire", especifica si es por dentro (padding) o por fuera (margin). Esa precisión es la diferencia entre una IA que adivina y una que ejecuta.

### Analogía

Piensa en un **cuadro enmarcado** en la pared. El content es la foto. El padding es el paspartú: la cartulina que rodea la foto, con el color del marco. El border es el marco de madera. Y el margin es la distancia que dejas entre un cuadro y el otro: no se ve, solo evita que se toquen. Cuando pides "una tarjeta con más aire por dentro", pides `padding`; cuando pides "que las tarjetas no se peguen", pides `margin`. Saber cuál de los dos usar es la mitad del diseño web.

### Cómo se ve en la práctica

Una tarjeta con las cuatro capas definidas:

```css
* { box-sizing: border-box; }

.tarjeta {
  width: 300px;
  padding: 20px;
  border: 2px solid #999;
  margin: 30px;
}
```

En pantalla verás una caja de **300px en total** (content + padding + border ya incluidos por el `border-box`), un marco gris de 2px, 20px de aire entre el texto y el marco por los cuatro lados, y 30px de espacio en blanco alrededor que la separa de las demás cajas. Abre DevTools (F12 → Elements → Computed) y selecciona la tarjeta: el navegador dibuja el *modelo de caja* en colores — azul para content, verde para padding, naranja para border y naranja claro para margin. Esa imagen vale más que mil definiciones.

### Díselo a la IA

> "Necesito 3 tarjetas en fila que no se peguen entre sí. Pon en todo el proyecto box-sizing: border-box, dales padding de 24px, borde de 1px gris claro y margin de 16px entre ellas. Explícame qué veré en pantalla y cómo se ven las 4 capas de la caja de cada tarjeta."

### Ejercicios

1. **[relacionar]** Une la capa con lo que hace:
   - content ↔ El contenido: foto o texto
   - padding ↔ El aire interno, entre contenido y borde
   - border ↔ La línea que delimita la caja
   - margin ↔ El espacio externo que separa cajas

2. **[opción múltiple]** ¿Qué hace box-sizing: border-box?
   - a) Hace el borde redondeado
   - b) Incluye padding y border dentro del width ✔
   - c) Elimina el padding de la caja
   - d) Convierte el margin en padding

3. **[completar]** "El ____ es el espacio interno entre el contenido y el borde; el ____ es el espacio externo que separa esta caja de las demás."
   - Banco: `padding` · `margin` · `border` · `content`
   - Respuesta: padding / margin

4. **[verdadero/falso]** "El margin se pinta con el mismo fondo que el elemento y se ve en pantalla."
   - Respuesta: FALSO — el margin es transparente y no pinta nada: solo crea espacio entre cajas.

5. **[ordenar]** Ordena las capas de la caja, de adentro hacia afuera:
   - Desordenado: `border` · `content` · `margin` · `padding`
   - Respuesta: content → padding → border → margin

---

## A15 — Unidades: px, %, rem, em, vh, vw y cuándo usar cada una

### Concepto

Cada medida de tu página usa una **unidad**, y elegir la correcta es lo que separa una página que se rompe de una que se adapta. Las seis que dominarás:

- **px** — píxeles fijos. "Esta línea mide 2px". No cambia con nada. Úsalo en detalles que no deben moverse: bordes, sombras, radios.
- **%** — porcentaje **del contenedor padre**. "Ocupa el 50% de su papá". Úsalo en anchos de layout.
- **rem** — relativo al tamaño de letra **de la raíz** (el `<html>`). Por defecto 1rem = 16px, así que 2rem = 32px. Úsalo para textos: respeta la configuración de accesibilidad del usuario.
- **em** — relativo al tamaño de letra **de su propio elemento o su padre**. Se usa en paddings y espacios que deben escalar con el texto. Cuidado: se multiplica en cascada y puede desbocarse.
- **vh** — 1vh = 1% de la **altura de la ventana** (viewport). `100vh` = una pantalla de alto. Úsalo en secciones hero.
- **vw** — 1vw = 1% del **ancho de la ventana**. Útil para tipografías gigantes que escalan con la pantalla.

La regla rápida de los equipos reales: **texto en rem, layouts en %, cajas en px, pantallas en vh/vw**. Cuando pidas medidas a la IA, nombrar la unidad correcta evita que tu diseño se rompa al cambiar de pantalla.

### Analogía

Son **cuatro reglas de medición de un taller de carpintería**. El **px** es el centímetro de la regla rígida: no cambia jamás, ideal para el bisel del marco. El **%** es "la mitad del largo de la mesa sobre la que trabajo": depende de dónde apoyes la pieza (el padre). El **rem** es "una zancada del maestro carpintero": todos miden contra él, y si el maestro crece, todo el taller crece. El **em** es "una zancada del aprendiz que trabaja esa pieza": escala con su propia pieza. Y el **vh/vw** es la pared con ventana del taller: "este estante ocupa todo el alto de la ventana". Medir con la regla equivocada es exactamente por qué tu página se rompe al cambiar de pantalla.

### Cómo se ve en la práctica

Una sección que usa cada familia de unidades:

```css
html { font-size: 16px; }

.hero {
  height: 100vh;            /* toda la pantalla de alto */
}

.hero h1 {
  font-size: 3rem;          /* 48px, escala con el html */
}

.contenedor {
  width: 80%;               /* 80% del padre */
}

.tarjeta {
  padding: 1em;             /* escala con su propio texto */
  border: 1px solid #ccc;   /* detalle fijo */
}
```

En pantalla verás: una sección que ocupa exactamente el alto de tu ventana (`100vh`), un título de 48px (3rem × 16px), un contenedor que se estira al 80% del bloque que lo contiene, tarjetas con aire interno que crece si crece su letra, y un borde de 1px inmutable. Cambia el ancho de tu ventana y observa: el `vh` se ajusta al alto, el `%` se ajusta al ancho, el `rem` no se mueve si no cambias el `html`, y el `px` del borde permanece clavado. Así se ve la diferencia en vivo.

### Díselo a la IA

> "Haz mi landing responsive desde el primer píxel: textos siempre en rem, el contenedor principal al 80% con max-width, la sección hero con height de 100vh, y bordes y radios en px. Nada de medidas fijas para textos ni contenedores. Explícame qué unidad elegiste en cada caso y por qué."

### Ejercicios

1. **[relacionar]** Une la unidad con lo que mide:
   - px ↔ Fija, no cambia con nada
   - % ↔ Relativo al contenedor padre
   - rem ↔ Relativo al font-size de la raíz
   - vh ↔ Relativo a la altura de la ventana

2. **[opción múltiple]** Con el font-size de html en 16px, ¿cuánto mide un título con font-size: 2rem?
   - a) 16px
   - b) 24px
   - c) 32px ✔
   - d) 2px

3. **[completar]** "Los textos se miden en ____ (relativo a la raíz); los anchos de layout se miden en ____ (relativo al padre)."
   - Banco: `rem` · `%` · `px` · `vw`
   - Respuesta: rem / %

4. **[verdadero/falso]** "vh y vw dependen del tamaño de la ventana del navegador, no del contenedor padre."
   - Respuesta: VERDADERO — vw/vh se miden contra el viewport (la ventana), no contra el elemento que los contiene.

5. **[qué hace]** Con esta regla, ¿qué hace?
   ```css
   .hero { height: 100vh; }
   ```
   - a) La sección mide 100 píxeles de alto
   - b) La sección ocupa todo el alto de la ventana ✔
   - c) La sección mide el 100% de su padre
   - d) La sección se vuelve invisible

---

## A16 — Colores: hex, rgb, hsl y variables CSS

### Concepto

En CSS hay tres formas de escribir un color y una forma de administrarlos todos. No necesitas memorizar códigos: necesitas **reconocer** qué formato estás viendo y saber cuál conviene pedirle a la IA.

- **hex** — seis dígitos (o tres abreviados) precedidos de `#`: `#ff0000` es rojo puro. Compacto y omnipresente: es el formato de los color pickers y de casi todo el código existente.
- **rgb** — tres valores de 0 a 255, uno por canal: `rgb(255, 0, 0)`. Se lee como una receta: cuánto rojo, cuánto verde, cuánto azul. Con `rgba(255, 0, 0, 0.5)` agregas un cuarto valor: la **opacidad** (0 es invisible, 1 es opaco).
- **hsl** — tres valores pensados para humanos: `hsl(0, 100%, 50%)`. Primero el **tono** en grados (0° rojo, 120° verde, 240° azul), luego la **saturación** (0% gris, 100% vivo) y al final la **luminosidad** (0% negro, 100% blanco). Perfecto para pedir un azul más claro sin volverte loco.

Y encima de los tres formatos están las **variables CSS**: `--nombre: valor;` se declaran en `:root` y se leen con `var(--nombre)`. Cambias el valor en un solo lugar y se actualiza en todos los que lo usen. Ahí vive tu paleta, y es lo primero que le vas a pedir a la IA que arme por ti.

### Analogía

Los tres formatos son **tres etiquetas de la misma pintura**. El hex es el código de barras del bote: sirve para escanearlo en el almacén, pero no te dice si es azul cielo o azul marino. El rgb es la receta en mililitros: "255 de rojo, 0 de verde, 0 de azul". El hsl es el muestrario del ferretero: eliges la familia de color (tono), qué tan vivo lo quieres (saturación) y qué tan claro u oscuro (luminosidad). Y las variables CSS son los **botes etiquetados de tu taller**: no buscas el azul en cada pincelada, agarras el bote `--color-primario`, y si mañana quieres otro azul, cambias el contenido del bote y todas las pinceladas cambian solas.

### Cómo se ve en la práctica

Una paleta con variables aplicada a tres tarjetas:

```css
:root {
  --color-primario: #2d6cdf;
  --color-exito: #1e8e3e;
  --color-peligro: #d93025;
  --radio: 8px;
}

.tarjeta {
  background: var(--color-primario);
  border-radius: var(--radio);
  padding: 16px;
}
```

En pantalla verás tres tarjetas del mismo azul `#2d6cdf` con las esquinas redondeadas de 8px. Si ese azul deja de gustarte, cambias **una línea** en `:root` y todas las tarjetas que usen `var(--color-primario)` cambian juntas, sin tocar el resto del archivo. Compara: si el color estuviera escrito como hex en cada tarjeta, tendrías que buscarlo y reemplazarlo en diez lugares. Esa es la diferencia entre mantener una página y mantener un caos.

### Díselo a la IA

> "Voy a definir la paleta de mi sitio. Crea 5 variables CSS en :root (primario, secundario, exito, peligro y texto) y muéstrame cada color en los tres formatos: hex, rgb y hsl. Quiero cambiar cualquier color editando un solo lugar."

### Ejercicios

1. **[opción múltiple]** ¿Qué código hex representa el rojo puro?
   - a) `#ff0000` ✔
   - b) `#00ff00`
   - c) `#0000ff`
   - d) `#ffffff`

2. **[relacionar]** Une el formato con su descripción:
   - hex ↔ Formato compacto que empieza con #
   - rgb ↔ Tres canales de 0 a 255
   - hsl ↔ Tono, saturación y luminosidad
   - `var(--x)` ↔ Lee el valor de una variable CSS

3. **[completar]** "Una variable CSS se ____ con --nombre: valor; y se ____ con var(--nombre)."
   - Banco: `declara` · `lee` · `borra` · `pinta`
   - Respuesta: declara / lee

4. **[verdadero/falso]** "En hsl, el primer valor es el tono: hsl(0, 100%, 50%) es rojo."
   - Respuesta: VERDADERO — el hue (tono) va primero; 0° es rojo en el círculo cromático.

5. **[qué hace]** Cambiaste `--primario` a `#000`. ¿Qué pasa con todos los botones?
   ```css
   :root { --primario: #2d6cdf; }
   .boton { background: var(--primario); }
   ```
   - a) Solo cambia el primero
   - b) Todos los botones que usan var(--primario) cambian a negro ✔
   - c) Nada: las variables no se actualizan
   - d) La página deja de cargar

---

## A17 — Tipografía web: fuentes, escala y jerarquía

### Concepto

La tipografía decide si tu página se lee sola o si le cuesta trabajo a quien la ve. Tres piezas la controlan:

- **font-family** — la familia de letras, siempre como cadena de respaldo: `font-family: "Inter", Arial, sans-serif;`. El navegador intenta la primera fuente; si no está instalada ni cargada, pasa a la siguiente, y al final siempre hay una genérica (`serif`, `sans-serif`, `monospace`) para no quedarse sin letra.
- **font-size** — el tamaño. En web se usa `rem` (lo viste en A15) para que el texto respete la configuración de accesibilidad del usuario.
- **font-weight** — el grosor: `400` normal, `700` negrita. Y **line-height** — la distancia entre líneas; un texto cómodo anda entre 1.5 y 1.8.

Combinando tamaño y peso creas la **jerarquía**: el ojo aterriza en el título, baja a los subtítulos y por último lee el cuerpo. Las fuentes externas (como Google Fonts) se cargan con un `<link>` en el `head` — pídele a la IA que te las instale y que te explique qué línea cargó.

Cuando pidas "una página bonita", la IA solo adivina. Cuando pidas "jerarquía tipográfica de 3 niveles con escala en rem", le das el mapa exacto. La tipografía es donde tu vocabulario empieza a sonar profesional.

### Analogía

La tipografía es la **voz de tu página**, y la jerarquía es el volumen. La `font-family` es el timbre: una persona que habla formal (serif), una casual (sans-serif) y una de máquina de escribir (monospace). El `font-size` es el volumen base y el `font-weight` el golpe con que dices ciertas palabras. Un párrafo donde todo suena igual es un discurso plano; la jerarquía es saber cuándo gritar (título), cuándo conversar (subtítulo) y cuándo susurrar (pie de foto). El lector no piensa en las voces: siente qué importa primero.

### Cómo se ve en la práctica

Primero el HTML de una jerarquía típica:

```html
<h1>Vende más, sin manual</h1>
<h2>El curso que dirige IA</h2>
<p>Construye software real desde tu primer mes.</p>
```

Y el CSS que la produce:

```css
h1 { font-family: "Inter", Arial, sans-serif; font-size: 2.5rem; font-weight: 700; }
h2 { font-family: "Inter", Arial, sans-serif; font-size: 1.5rem; font-weight: 600; }
p  { font-family: "Inter", Arial, sans-serif; font-size: 1rem; line-height: 1.6; }
```

En pantalla verás: un titular grande y sólido que atrapa la mirada primero, un subtítulo visiblemente menor pero con peso, y un cuerpo chico y espaciado que se lee sin esfuerzo. El salto entre niveles — 2.5rem, 1.5rem, 1rem — es la **escala**: tamaños que se distinguen a la primera. Si todo usara el mismo tamaño y peso, la página sería un mar plano sin dónde agarrarse.

### Díselo a la IA

> "Dame la jerarquía tipográfica de mi sitio: elige 2 fuentes de Google Fonts (una para títulos, una para cuerpo), arma la escala completa en rem (h1, h2, h3, p y caption) y dame el link para cargarlas. Explícame por qué elegiste esa combinación."

### Ejercicios

1. **[opción múltiple]** ¿Para qué sirve escribir font-family: "Inter", Arial, sans-serif; con tres fuentes?
   - a) Para que cada párrafo use una distinta
   - b) Son respaldos: si la primera no está disponible, el navegador usa la siguiente ✔
   - c) Para que el texto se vea en negrita automáticamente
   - d) Para cargar tres tamaños a la vez

2. **[relacionar]** Une la propiedad con lo que controla:
   - `font-family` ↔ La familia de letras
   - `font-size` ↔ El tamaño de la letra
   - `font-weight` ↔ El grosor: 400 o 700
   - `line-height` ↔ El espacio entre líneas

3. **[completar]** "Combinando ____ y ____ creas la jerarquía visual: el ojo lee el título antes que el cuerpo."
   - Banco: `tamaño` · `peso` · `color` · `espaciado`
   - Respuesta: tamaño / peso

4. **[verdadero/falso]** "El texto de una página se mide en rem para respetar la configuración de accesibilidad del usuario."
   - Respuesta: VERDADERO — rem escala con el font-size de la raíz, que el usuario puede ajustar (A15).

5. **[ordenar]** Acomoda de mayor a menor jerarquía visual:
   - Desordenado: `p` · `h2` · `caption` · `h1`
   - Respuesta: h1 → h2 → p → caption

---

## A18 — Display: block, inline, inline-block

### Concepto

`display` decide cómo se comporta cada caja dentro del flujo de la página. Tres valores usarás todos los días:

- **block** — la caja ocupa todo el ancho de su padre y arranca en una línea nueva. Respeta `width`, `height`, `margin` y `padding` en las cuatro direcciones. Por defecto: `<div>`, `<p>`, `<h1>`, `<section>`.
- **inline** — vive *dentro* de la línea del texto, como una letra más. No arranca línea nueva y **no respeta** `width` ni `height`; sus márgenes y paddings horizontales sí funcionan, pero los verticales no mueven a los vecinos. Por defecto: `<span>`, `<a>`, `<strong>`, `<em>`.
- **inline-block** — lo mejor de los dos: se acomoda en la misma línea que el texto (como inline), pero respeta `width`, `height` y los márgenes verticales (como block). Es el clásico para botones y chips.

Cuando algo no se acomoda, el primer sospechoso es `display`: el elemento heredó un comportamiento que no esperabas. Esa pregunta — por qué esto no se acomoda — es un prompt de oro para la IA.

### Analogía

Son **tres tipos de vehículo en la misma calle**. El **block** es un camión de mudanzas: ocupa todo el carril, va solo y nadie lo rebasa. El **inline** es un peatón en medio de una fila: no puede reclamar ancho propio, es uno más de la fila. El **inline-block** es una moto: viaja en el mismo flujo que los peatones (se acomoda en la línea), pero tiene dimensiones propias y separación vertical. Si quieres que algo quepa junto a otra cosa pero con tamaño propio, elige la moto, no el camión.

### Cómo se ve en la práctica

El mismo HTML con tres displays distintos:

```html
<span>Uno</span><span>Dos</span><span>Tres</span>
```

```css
span { display: inline-block; width: 120px; text-align: center; }
```

Con `display: inline` (lo natural de un `<span>`) verás `Uno Dos Tres` corriendo como texto continuo, sin ancho propio. Con `inline-block` y `width: 120px` verás tres cajitas centradas una al lado de la otra, cada una de 120px: `[ Uno ][ Dos ][ Tres ]`. Con `block`, cada una ocuparía su propia línea completa. El mismo contenido, tres disposiciones — eso es lo que elige `display`.

### Díselo a la IA

> "Tengo 3 elementos que quiero uno al lado del otro, con ancho fijo de 120px y espacio entre ellos. Explícame por qué display: inline-block funciona aquí y qué pasaría con block o inline. No uses flexbox todavía: quiero entender la diferencia antes."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos elementos es inline por defecto?
   - a) `<div>`
   - b) `<span>` ✔
   - c) `<p>`
   - d) `<h1>`

2. **[relacionar]** Une el display con su comportamiento:
   - block ↔ Ocupa toda la línea y respeta width y height
   - inline ↔ Se acomoda en la línea del texto, sin width
   - inline-block ↔ En la línea, pero con width y height
   - display: none ↔ Saca el elemento del flujo por completo

3. **[verdadero/falso]** "Un elemento inline respeta el width y el height que le asignes."
   - Respuesta: FALSO — inline ignora width y height; si los necesitas, usa inline-block.

4. **[completar]** "display: ____ ocupa toda la línea de su padre; display: ____ respeta dimensiones pero se acomoda junto a otros en la misma línea."
   - Banco: `block` · `inline-block` · `inline` · `none`
   - Respuesta: block / inline-block

5. **[qué hace]** Con tres spans así, ¿qué verás en pantalla?
   ```css
   span { display: inline-block; width: 120px; }
   ```
   - a) Tres cajas de 120px una al lado de la otra ✔
   - b) Tres cajas apiladas a todo el ancho
   - c) Texto corrido sin ancho fijo
   - d) Tres elementos invisibles

---

## A19 — Flexbox I: el eje principal y la dirección

### Concepto

Flexbox es el primer sistema de layout de una dimensión: acomoda a los hijos de un contenedor a lo largo de **una sola dirección**. Se activa con `display: flex` en el contenedor (el *flex container*), y sus hijos directos se vuelven *flex items*. De golpe, los items ya no se apilan: se encadenan.

Flexbox trabaja sobre **dos ejes**. El **eje principal** es por donde avanza el layout; el **eje cruzado** es perpendicular. Cuál es cuál lo decide `flex-direction`:

- **row** — el valor por defecto: el eje principal va de izquierda a derecha, los items en fila horizontal.
- **row-reverse** — la misma fila, pero de derecha a izquierda.
- **column** — el eje principal va de arriba a abajo: los items en columna vertical.
- **column-reverse** — la columna, pero de abajo hacia arriba.

La clave: **primero decides la dirección, después la alineación**. Alinear a lo largo del eje principal es `justify-content`; a lo largo del cruzado, `align-items`. Esos dos los ves a fondo en la siguiente lección (A20).

### Analogía

Flexbox es un **tren de vagones**. El contenedor es la vía y `flex-direction` decide hacia dónde va: `row` es una vía horizontal y `column` una vía que sube la montaña en vertical. Los vagones (los flex items) no deciden dónde van: la vía los encadena en fila. La otra pregunta — con qué separación, centrados o pegados a un lado — la resuelve el maquinista, y es exactamente lo que verás en A20. Por ahora: **dirección primero, alineación después**.

### Cómo se ve en la práctica

Tres cajas dentro de un contenedor flex:

```html
<div class="fila">
  <div class="caja">A</div>
  <div class="caja">B</div>
  <div class="caja">C</div>
</div>
```

```css
.fila { display: flex; }
.caja { width: 80px; padding: 12px; }
```

Con `display: flex` y dirección `row` (la de fábrica) verás `[ A ][ B ][ C ]`: tres cajitas en una sola fila horizontal. Cambia a `flex-direction: column` y la vía gira 90°: verás las tres cajas **apiladas**, A arriba, B al centro, C abajo. Mismo HTML, misma regla de `display: flex` — solo cambió hacia dónde apunta el eje principal. Esa es toda la lección: **dirección**.

### Díselo a la IA

> "Tengo un menú con 3 enlaces dentro de un div. Pon display: flex al contenedor y explícame en palabras qué les pasó a los hijos: por qué quedaron en fila y qué cambia si uso flex-direction: column en lugar de row. Todavía no alinees nada."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el valor por defecto de flex-direction?
   - a) column
   - b) row ✔
   - c) row-reverse
   - d) column-reverse

2. **[relacionar]** Une la dirección con su efecto:
   - `row` ↔ Fila: de izquierda a derecha
   - `column` ↔ Columna: de arriba a abajo
   - `row-reverse` ↔ Fila: de derecha a izquierda
   - `column-reverse` ↔ Columna: de abajo hacia arriba

3. **[completar]** "Con flex-direction: ____ el eje principal es horizontal; con ____ el eje principal es vertical."
   - Banco: `row` · `column` · `flex` · `gap`
   - Respuesta: row / column

4. **[verdadero/falso]** "Los hijos directos de un contenedor con display: flex se llaman flex items y se acomodan a lo largo del eje principal."
   - Respuesta: VERDADERO — flexbox organiza a los hijos directos en el eje que define flex-direction.

5. **[qué hace]** Con A, B y C como hijos de .cont, ¿cómo se acomodan?
   ```css
   .cont { display: flex; flex-direction: column; }
   ```
   - a) En fila: [ A ][ B ][ C ]
   - b) Apilados: A arriba, B al centro, C abajo ✔
   - c) En orden aleatorio
   - d) Todos en el mismo punto

---

## A20 — Flexbox II: alineación, distribución y el `gap`

### Concepto

Ya sabes controlar la **dirección** del eje principal (A19). Ahora toca el reparto: dónde quedan los items a lo largo de cada eje y cuánto aire hay entre ellos. Tres propiedades lo resuelven:

- **justify-content** — alinea a lo largo del **eje principal**. Los de uso diario: `flex-start` (pegados al inicio), `center` (centrados), `flex-end` (pegados al final), `space-between` (el espacio sobrante se reparte *entre* los items) y `space-evenly` (espacio igual alrededor de todos).
- **align-items** — alinea a lo largo del **eje cruzado**: `stretch` (el valor por defecto: los items se estiran para llenar), `flex-start`, `center` y `flex-end`.
- **gap** — la distancia *fija* entre cada par de items: `gap: 16px;` separa todo en una línea, sin márgenes raros. `row-gap` y `column-gap` lo controlan por eje.

Truco de memoria que te ahorra errores: **justify-content sigue a la dirección (flex-direction); align-items siempre es perpendicular**. Si cambias la dirección, justo ahí cambian los dos ejes.

Cuando pidas "tarjetas centradas y separadas", ya sabes las tres palabras exactas: `justify-content`, `align-items`, `gap`. Ese vocabulario hace que la IA no adivine nada.

### Analogía

Imagina a **tres meseros acomodando platillos en una barra** (la barra es la dirección que aprendiste en A19). `justify-content` decide cómo se reparten a lo largo de la barra: todos a la izquierda (`flex-start`), todos al centro (`center`), o el espacio de sobra entre platillo y platillo (`space-between`). `align-items` decide a qué altura quedan en el eje perpendicular: todos tocando la base (`flex-end`), todos colgando del techo (`flex-start`) o estirándose hasta llenar el estante (`stretch`). Y `gap` es la distancia fija entre platillos, la que no cambia aunque la barra crezca. Distribución y alineación son dos decisiones distintas; flexbox las separa para que no las mezcles.

### Cómo se ve en la práctica

Una barra de herramientas con reparto y aire:

```css
.barra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
```

```html
<div class="barra">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

En pantalla verás `[A]    [B]    [C]`: A pegado a la izquierda, C pegado a la derecha, B justo al centro del espacio sobrante (por el `space-between`), los tres a la misma altura vertical (por `align-items: center`) y con 8px de aire entre los que quedan tocando (por `gap`). Cambia a `justify-content: center` y verás los tres juntos al centro, sin repartir nada. Mismo display, misma dirección, otro reparto — eso es flexbox II.

### Díselo a la IA

> "Hazme una barra de herramientas con display: flex: 3 elementos, justify-content: space-between, align-items: center y gap de 8px. Luego muéstrame la misma barra con justify-content: center para que vea la diferencia. Explícame en una línea qué controla cada propiedad."

### Ejercicios

1. **[opción múltiple]** ¿Qué propiedad alinea los items a lo largo del eje principal (el de flex-direction)?
   - a) align-items
   - b) justify-content ✔
   - c) gap
   - d) flex-direction

2. **[relacionar]** Une la propiedad con lo que hace:
   - `justify-content` ↔ Alineación a lo largo del eje principal
   - `align-items` ↔ Alineación a lo largo del eje cruzado
   - `gap` ↔ Espacio fijo entre items
   - `space-between` ↔ El espacio sobrante se reparte entre los items

3. **[completar]** "Con justify-content: ____ el primero queda a la izquierda, el último a la derecha y el sobrante en medio. El ____ es el aire fijo entre cada par."
   - Banco: `space-between` · `gap` · `center` · `stretch`
   - Respuesta: space-between / gap

4. **[verdadero/falso]** "El valor por defecto de align-items es stretch: los items se estiran para llenar el eje cruzado."
   - Respuesta: VERDADERO — por eso los hijos de un flex suelen llenar la altura del contenedor sin que se lo pidas.

5. **[qué hace]** Con tres items en .menu, ¿qué verás?
   ```css
   .menu { display: flex; justify-content: space-between; gap: 8px; }
   ```
   - a) Los tres juntos a la izquierda
   - b) Uno a la izquierda, uno al centro y uno a la derecha, con 8px de aire ✔
   - c) Los tres centrados en la pantalla
   - d) Una columna apilada

---

## A21 — Grid I: filas, columnas y `fr`

### Concepto

Ya controlas una dimensión con flexbox (A19 y A20). CSS Grid es el sistema de layout de **dos dimensiones**: acomoda a los hijos en **filas y columnas a la vez**, como una rejilla. Se activa con `display: grid` en el contenedor, y sus hijos se colocan solos, celda por celda.

Las dos propiedades que definen la rejilla:

- **grid-template-columns** — el ancho de cada columna. `grid-template-columns: 100px 1fr 1fr;` crea tres columnas: una fija de 100px y dos flexibles.
- **grid-template-rows** — el alto de cada fila. Si no la defines, las filas crecen con su contenido.

La unidad estrella es **fr** (fraction): una fracción del espacio disponible. `repeat(3, 1fr)` repite tres columnas iguales, y `2fr 1fr` hace una columna del doble de ancho que la otra. Comparada con los píxeles, `fr` reparte el espacio que sobra y se adapta solo.

El aire entre celdas es `gap`, igual que en flexbox (A20): sin él, las celdas se pegan. Cuando quieras una galería o un tablero de tarjetas, la respuesta casi siempre es grid — y saber decirlo hace que la IA acierte al primer intento.

### Analogía

Flexbox es un **búfete de una sola fila**: los platillos avanzan en línea. CSS Grid es el **mapa de la ciudad**: las columnas son las avenidas que van de arriba a abajo y las filas son las calles que van de izquierda a derecha. Cada celda es una manzana. La unidad `fr` es repartir el terreno: si el plano dice tres manzanas iguales (`repeat(3, 1fr)`), cada avenida recibe un tercio del terreno disponible; si dice `2fr 1fr`, una avenida recibe el doble de terreno que la otra.

### Cómo se ve en la práctica

Una cuadrícula de seis tarjetas:

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

```html
<div class="galeria">
  <div>Tarjeta 1</div>
  <div>Tarjeta 2</div>
  <div>Tarjeta 3</div>
  <div>Tarjeta 4</div>
  <div>Tarjeta 5</div>
  <div>Tarjeta 6</div>
</div>
```

En una pantalla amplia verás **3 columnas × 2 filas**: seis tarjetas del mismo ancho (cada `1fr` toma un tercio del espacio) con 16px de aire entre todas. Cambia a `grid-template-columns: repeat(2, 1fr)` y verás 2 columnas × 3 filas. Cambia a `grid-template-columns: 2fr 1fr` y la primera columna quedará al doble de ancho que la segunda. Los hijos no eligen su celda: el contenedor los acomoda automáticamente, en orden, uno tras otro.

### Díselo a la IA

> "Tengo 6 tarjetas de producto que quiero en cuadrícula. Crea un contenedor con display: grid, tres columnas iguales con repeat y la unidad fr, y gap de 16px. Después muéstrame la misma cuadrícula con 2fr 1fr y explícame en una línea qué hace fr y por qué no usar píxeles aquí."

### Ejercicios

1. **[opción múltiple]** ¿Qué sistema de layout trabaja con filas y columnas al mismo tiempo?
   - a) Flexbox
   - b) CSS Grid ✔
   - c) Display inline
   - d) La propiedad float

2. **[completar]** "display: ____ activa la rejilla; la unidad ____ reparte el espacio disponible en partes iguales."
   - Banco: `grid` · `fr` · `px` · `flex`
   - Respuesta: grid / fr

3. **[relacionar]** Une la propiedad con lo que define:
   - `grid-template-columns` ↔ El ancho de cada columna
   - `grid-template-rows` ↔ El alto de cada fila
   - `repeat(3, 1fr)` ↔ Tres columnas iguales
   - `gap` ↔ El aire entre celdas

4. **[verdadero/falso]** "Con grid-template-columns: 1fr 1fr 1fr; las tres columnas reciben la misma porción del espacio disponible."
   - Respuesta: VERDADERO — cada fr toma una fracción igual del espacio tras descontar los gaps.

5. **[qué hace]** Con dos hijos en .panel, ¿cómo se acomodan?
   ```css
   .panel { display: grid; grid-template-columns: 2fr 1fr; gap: 12px; }
   ```
   - a) La primera columna es el doble de ancha que la segunda, con 12px de aire ✔
   - b) Las dos columnas de ancho idéntico
   - c) Los dos hijos se apilan en vertical
   - d) La segunda columna es el doble de ancha

---

## A22 — Grid II: áreas nombradas y layouts completos

### Concepto

Definir columnas con `fr` (A21) funciona, pero para una página completa es más claro **nombrar las zonas** con `grid-template-areas`: dibujas el layout en texto, como un mapa, y después cada hijo dice en qué zona vive.

El mapa se lee así:

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "cabecera cabecera"
    "lateral  principal"
    "pie      pie";
}
```

Cada fila del mapa es una **fila del grid**, y cada palabra es una celda. Que `cabecera` aparezca dos veces en la primera fila significa que la cabecera abarca **las dos columnas**. Los hijos se asignan con `grid-area`: `header { grid-area: cabecera; }`. Un punto (`.`) marca una celda vacía.

Dos reglas que te ahorran errores: el mapa debe formar **rectángulos** (nada de formas de L o de T), y cada área del mapa necesita un hijo con ese mismo nombre. La magia de este sistema: cambiar el layout es cambiar el mapa, sin tocar el HTML.

### Analogía

`grid-template-areas` es el **plano del arquitecto**. No le dices a cada mueble en qué esquina va con coordenadas: dibujas el plano — cocina aquí, sala allá — y cada mueble se instala en su zona. Si mañana quieres la cocina a la derecha, **redibujas el plano**; no mueves la estufa con un margen. Eso es exactamente lo que cambia entre Grid I y Grid II (A21): primero aprendiste a dibujar líneas, ahora dibujas el plano entero de la casa.

### Cómo se ve en la práctica

La estructura clásica de una página: cabecera, barra lateral, contenido y pie.

```html
<div class="layout">
  <header>Cabecera</header>
  <aside>Barra lateral</aside>
  <main>Contenido</main>
  <footer>Pie</footer>
</div>
```

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "cabecera cabecera"
    "lateral  principal"
    "pie      pie";
  gap: 12px;
}
header { grid-area: cabecera; }
aside  { grid-area: lateral; }
main   { grid-area: principal; }
footer { grid-area: pie; }
```

En pantalla verás un layout completo: la **cabecera** ocupa todo el ancho en la primera fila; debajo, la **barra lateral** a la izquierda (un cuarto del ancho, por el `1fr`) y el **contenido** a la derecha (tres cuartos, por el `3fr`); al fondo, el **pie** cruza las dos columnas. Ahora prueba la magia: cambia el mapa a `"lateral lateral"` en la primera fila y verás la barra lateral arriba, a todo el ancho, sin tocar una línea de HTML. El mapa gobierna; los hijos obedecen.

### Díselo a la IA

> "Quiero el layout completo de mi página: cabecera arriba, barra lateral a la izquierda, contenido principal a la derecha y pie abajo. Usa display: grid, grid-template-columns: 1fr 3fr y grid-template-areas con nombres en español, y asigna cada sección con grid-area. Explícame en una línea qué significa cada fila del mapa."

### Ejercicios

1. **[relacionar]** Une el concepto con lo que hace:
   - `grid-template-areas` ↔ El mapa del layout escrito en texto
   - `grid-area` ↔ Le dice a cada hijo en qué zona del mapa vive
   - Repetir un nombre en el mapa ↔ Esa zona abarca varias celdas
   - Un punto (.) en el mapa ↔ Una celda vacía

2. **[opción múltiple]** ¿Cuál de estas figuras NO se puede dibujar en grid-template-areas?
   - a) Un rectángulo de 2 columnas por 2 filas
   - b) Una forma de L ✔
   - c) Una fila con tres nombres distintos
   - d) Un rectángulo de 1 fila por 3 columnas

3. **[completar]** "Cada hijo que ocupa una zona recibe la propiedad ____ con el mismo ____ que usaste en el mapa."
   - Banco: `grid-area` · `nombre` · `fr` · `gap`
   - Respuesta: grid-area / nombre

4. **[verdadero/falso]** "En el mapa puedes repetir el nombre de una zona en varias celdas, siempre que las celdas formen un rectángulo."
   - Respuesta: VERDADERO — las zonas deben ser rectangulares; las formas de L no son válidas.

5. **[qué hace]** ¿Cómo se acomoda la página con este mapa?
   ```css
   .layout {
     display: grid;
     grid-template-areas:
       "header header"
       "sidebar main"
       "footer footer";
   }
   ```
   - a) Cabecera arriba en todo el ancho, barra lateral izquierda, contenido a la derecha, pie abajo en todo el ancho ✔
   - b) Cabecera y pie a la izquierda, todo en una columna
   - c) Cuatro celdas idénticas en una sola fila
   - d) La página no se dibuja: falta grid-template-columns

---

## A23 — Posicionamiento: static, relative, absolute, fixed, sticky

### Concepto

Hasta ahora todo se acomodaba en el flujo normal de la página. La propiedad `position` cambia eso: decide **cómo se ubica un elemento y respecto a qué referencia**. Tiene cinco valores, y verlos en orden es la forma de entenderlos:

- **static** — el valor por defecto: el elemento vive en el flujo normal y `top`, `right`, `bottom` y `left` no hacen nada.
- **relative** — se desplaza desde su lugar normal (con `top: 10px`, etc.) pero **conserva su espacio original**: nadie más lo ocupa. Además se convierte en el ancestro posicionado de referencia para sus hijos absolutos.
- **absolute** — se sale del flujo por completo (su espacio se libera) y se posiciona respecto a su **ancestro posicionado más cercano**; si no hay ninguno, respecto a la página.
- **fixed** — se sale del flujo y se posiciona respecto a la **ventana del navegador**: se queda clavado aunque hagas scroll. El clásico menú superior o el botón de "volver arriba".
- **sticky** — un híbrido: fluye con la página (como relative) y al llegar a un límite que tú defines (como `top: 0`) se **pega** y se comporta como fixed hasta que su contenedor termina. Ideal para encabezados de sección.

Cuatro de los cinco (`relative`, `absolute`, `fixed`, `sticky`) trabajan con los desplazamientos `top`, `right`, `bottom` y `left`. `static` es el caso base: el que todo elemento tiene si nadie toca `position`. Cuando algo "no se queda donde debería", la pregunta de oro es: ¿a qué referencia está mirando? Ahí vive la respuesta.

### Analogía

Imagina una **fila de bailarines en un escenario**. `static` es el bailarín en su marca, en el flujo de la coreografía. `relative` es el que da dos pasos a un lado desde su marca, pero **deja la marca reservada**: nadie más la pisa. `absolute` es el que sale de la coreografía y es colocado exactamente en una X marcada en el escenario (o en el grupo que esté marcado). `fixed` es el director de cámara en su plataforma: pase lo que pase en escena, siempre lo ves en el mismo lugar de la ventana. `sticky` es el maestro de ceremonias que avanza con la fila y, al llegar al borde del escenario, se queda pegado ahí hasta que el show termina.

### Cómo se ve en la práctica

Tres usos que verás en cualquier sitio:

**1. Menú fijo (fixed):**

```css
.barra {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
body { padding-top: 60px; }
```

En pantalla: la barra queda pegada al borde superior de la ventana. Al hacer scroll, el contenido se mueve por debajo y la barra no se mueve. El `padding-top` del body evita que el inicio de la página quede escondido debajo de la barra.

**2. Insignia pegada a una tarjeta (relative + absolute):**

```css
.tarjeta { position: relative; }
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
}
```

El badge se asoma por la esquina superior derecha de la tarjeta. Funciona porque la tarjeta es el ancestro posicionado: el badge no mira a la ventana, mira a la tarjeta.

**3. Encabezado que se pega (sticky):**

```css
.titulo-seccion {
  position: sticky;
  top: 0;
}
```

El encabezado de la sección avanza con el scroll y, al tocar el borde superior de la ventana, se pega y acompaña mientras recorres la sección; al terminar la sección, se va con ella.

### Díselo a la IA

> "Necesito un menú superior que se quede fijo al hacer scroll, y una insignia 'NUEVO' pegada en la esquina de una tarjeta de producto. Usa position: fixed para el menú y relative + absolute para la insignia, y explícame en una línea por qué cada uno mira a una referencia distinta. No uses sticky todavía."

### Ejercicios

1. **[relacionar]** Une el valor con su comportamiento:
   - static ↔ El valor por defecto: vive en el flujo normal
   - relative ↔ Se desplaza desde su lugar y conserva su espacio
   - absolute ↔ Se sale del flujo y se ancla a su ancestro posicionado
   - fixed ↔ Se ancla a la ventana: no se mueve con el scroll
   - sticky ↔ Fluye con la página y se pega al llegar a un límite

2. **[opción múltiple]** ¿Qué valor de position deja un elemento clavado en la pantalla aunque hagas scroll?
   - a) relative
   - b) absolute
   - c) fixed ✔
   - d) static

3. **[completar]** "Con position: ____ el elemento se sale del flujo y se posiciona respecto a su ancestro ____ más cercano."
   - Banco: `absolute` · `posicionado` · `static` · `flotante`
   - Respuesta: absolute / posicionado

4. **[verdadero/falso]** "Con position: relative, el espacio original del elemento queda libre para que otro lo ocupe."
   - Respuesta: FALSO — relative desplaza la vista pero conserva su espacio en el flujo: nadie más lo ocupa.

5. **[qué hace]** El badge se asoma en la esquina de la tarjeta. ¿Por qué funciona?
   ```css
   .tarjeta { position: relative; }
   .badge { position: absolute; top: -10px; right: -10px; }
   ```
   - a) El badge se ancla a la ventana del navegador
   - b) La tarjeta es el ancestro posicionado, así que el badge se ubica respecto a ella ✔
   - c) relative y absolute se ignoran mutuamente
   - d) El badge se ubica respecto al primer elemento de la página

---

## A24 — Responsive I: media queries y breakpoints

### Concepto

**Responsive design** es que tu página se vea bien en cualquier pantalla: del celular de 360px al monitor de 1920px. La base es una etiqueta que va en el `head` y sin la cual los móviles asumen un ancho de escritorio:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Con eso, la herramienta principal son las **media queries**:

```css
@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}
```

Traducción: "si la pantalla mide **768px o menos**, aplica estas reglas". Dentro del bloque metes las reglas que sobreescriben el diseño base. Y los **breakpoints** son los anchos donde cambia el diseño — los clásicos: `768px` (tablet) y `1024px` (desktop chico). No son mágicos: los eliges tú según donde se rompa tu layout.

Este bloque con `max-width` es el enfoque **desktop-first**: escribes el diseño grande primero y lo vas colapsando para pantallas chicas. En la siguiente lección (A25) verás el enfoque opuesto. Por ahora: reconocer `@media` y saber que dentro de esos corchetes **el diseño cambia según el tamaño de la pantalla**.

### Analogía

Es la **mesa que se acomoda a los comensales**. En la mesa de 8 puestos (desktop) caben 3 columnas de platos; si llegan 4 personas (tablet), la mesera cambia la disposición a 2 columnas; si llega una sola persona (celular), todo se acomoda en una fila. Los platos son los mismos — solo cambia cómo se acomodan según el espacio. La media query es la instrucción "si la mesa mide menos de X, cambia la disposición". Y el breakpoint es esa X: el ancho en el que la mesa deja de caber cómoda y hay que reacomodar.

### Cómo se ve en la práctica

El ejemplo que resume todo: la cuadrícula de Grid I (A21) que se colapsa.

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 1024px) {
  .galeria { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .galeria { grid-template-columns: 1fr; }
}
```

En pantalla: en un monitor ancho verás **3 columnas**; al bajar la ventana por debajo de 1024px, la cuadrícula pasa a **2 columnas**; por debajo de 600px, a **1 columna** apilada. Redimensiona la ventana del navegador y verás el cambio en vivo: los mismos seis elementos, tres disposiciones distintas según el ancho. Eso es responsive design en su forma más visible: **un grid de 3 columnas que colapsa**.

### Díselo a la IA

> "Mi galería de 3 columnas se ve apretada en el celular. Agrégale media queries: 3 columnas en pantallas mayores a 1024px, 2 columnas hasta 1024px y 1 columna hasta 600px. Pon también la meta viewport en el head. Explícame en una línea qué condición cumple cada @media."

### Ejercicios

1. **[completar]** "En @media (____: 768px) las reglas se aplican cuando la pantalla mide 768px o ____."
   - Banco: `max-width` · `menos` · `min-width` · `más`
   - Respuesta: max-width / menos

2. **[opción múltiple]** ¿Qué es un breakpoint?
   - a) Un error del CSS que rompe el layout
   - b) El ancho de pantalla donde cambia el diseño ✔
   - c) La velocidad de carga de una página
   - d) Un tipo de letra para pantallas chicas

3. **[verdadero/falso]** "Sin la meta viewport, un celular puede mostrar tu página como si fuera un monitor de escritorio: diminuta y sin zoom."
   - Respuesta: VERDADERO — la meta viewport le dice al navegador móvil que use el ancho real del dispositivo.

4. **[relacionar]** Une el concepto con su significado:
   - `max-width: 1024px` ↔ Aplica en pantallas de 1024px o menos
   - `max-width: 600px` ↔ Aplica en pantallas de 600px o menos
   - `@media` ↔ La regla que activa estilos condicionales
   - meta viewport ↔ Habilita el diseño responsive en móvil

5. **[qué hace]** ¿Qué verá un usuario con un celular de 390px?
   ```css
   @media (max-width: 600px) {
     .galeria { grid-template-columns: 1fr; }
   }
   ```
   - a) Tres columnas de la galería
   - b) Una sola columna apilada ✔
   - c) La galería oculta por completo
   - d) Dos columnas de la galería

---

## A25 — Responsive II: mobile-first de verdad

### Concepto

En A24 hiciste desktop-first: diseño grande primero y `max-width` para colapsar. **Mobile-first** invierte la lógica: escribes **primero los estilos de la pantalla más chica**, sin media query, y luego agregas estilos con `min-width` para las pantallas más grandes.

```css
.plan {
  display: grid;
  grid-template-columns: 1fr;  /* base: el celular */
  gap: 12px;
}

@media (min-width: 768px) {
  .plan { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .plan { grid-template-columns: repeat(3, 1fr); }
}
```

`min-width` se lee "desde este ancho en adelante": a 768px sumas la segunda columna, a 1024px la tercera. La base ya funciona en el celular tal cual; las media queries solo **agregan** en pantallas grandes.

¿Por qué "de verdad"? Porque el tráfico real de la web es mayoritariamente móvil, el CSS base es más corto y simple, y te obliga a decidir qué es esencial antes de adornar. Además el orden importa: los bloques de `min-width` van de menor a mayor, porque el último que se cumple es el que gana. En el desktop-first de A24 sobreescribes para hacer pequeño; aquí construyes de chico a grande.

### Analogía

Mobile-first es **cocinar la base primero**. Primero preparas el caldo (la pantalla chica): con solo el caldo ya hay sopa completa y rica. Cuando llegan más invitados (tablet), agregas verduras. Cuando llega la mesa llena (desktop), agregas la carne. Nunca quitas nada para adaptarte a una mesa chica: **creces hacia arriba**. El desktop-first de A24 era al revés: cocinar el banquete grande y luego, si llegan pocos, retirar platos. Las dos sirven, pero la mayoría del mundo llega a tu página desde el plato chico — así que conviene que el plato chico sea perfecto desde el inicio.

### Cómo se ve en la práctica

Los planes de precio en mobile-first, con su base y sus dos crecimientos:

```css
.planes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 768px) {
  .planes { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .planes { grid-template-columns: repeat(3, 1fr); }
}
```

En un celular de 390px verás los tres planes **apilados en una columna**, cómodos de leer y tocar — y esa disposición es la base, sin ninguna media query. En una tablet de 900px verás **2 columnas**: dos planes arriba y el tercero abajo. En un monitor de 1280px verás **3 columnas** lado a lado. El flujo es siempre agregar, nunca colapsar: escribe la base para el celular, prueba redimensionando, y añade `min-width` solo donde el layout lo pida.

### Díselo a la IA

> "Voy a mostrar mis 3 planes de precio. Házmelo en mobile-first: la base sin media query para que apilen en 1 columna en el celular, y con min-width pasen a 2 columnas a partir de 768px y a 3 a partir de 1024px. Explícame por qué la base no lleva media query y qué diferencia hay con usar max-width."

### Ejercicios

1. **[opción múltiple]** En mobile-first, ¿dónde escribes los estilos base del celular?
   - a) Dentro de un @media (min-width: 1024px)
   - b) Al inicio, sin media query ✔
   - c) Dentro de un @media (max-width: 768px)
   - d) En un archivo aparte para escritorio

2. **[verdadero/falso]** "Mobile-first usa min-width: los estilos de pantallas grandes se agregan encima de la base del celular."
   - Respuesta: VERDADERO — creces hacia arriba: cada media query suma reglas a partir de un ancho.

3. **[completar]** "Desktop-first usa ____; mobile-first usa ____."
   - Banco: `max-width` · `min-width` · `gap` · `fr`
   - Respuesta: max-width / min-width

4. **[relacionar]** Une el enfoque con su técnica:
   - Base sin media query ↔ Mobile-first: el estilo del celular
   - `min-width: 768px` ↔ Se activa desde 768px en adelante
   - `max-width: 768px` ↔ Se activa hasta 768px (desktop-first)
   - `min-width: 1024px` ↔ Se activa solo en pantallas grandes

5. **[qué hace]** ¿Qué verá un usuario en una laptop de 1280px?
   ```css
   .plan { display: grid; grid-template-columns: 1fr; }
   @media (min-width: 1024px) {
     .plan { grid-template-columns: repeat(3, 1fr); }
   }
   ```
   - a) Una sola columna
   - b) Tres columnas lado a lado ✔
   - c) Dos columnas
   - d) Las tarjetas se desbordan

---

## A26 — Transiciones y animaciones: movimiento con criterio

### Concepto

El movimiento en una página no es decoración: es **información**. Una transición le dice al ojo "este botón está vivo, responde"; una animación le dice "algo está pasando aquí". CSS te da dos herramientas, y cada una responde a una pregunta distinta.

**transition** — el cambio *entre* dos estados. Lo activa un cambio de estado (hover, focus, una clase nueva) y suaviza el salto entre el estado original y el nuevo:

```css
.boton {
  background: #2d6cdf;
  transition: background 0.3s ease;
}
.boton:hover {
  background: #1b4fae;
}
```

Traducción: "cuando algo cambie el `background`, tómate 0.3 segundos y hazlo suave (`ease`)". Sin la transición, el color cambiaría de golpe, como un flash; con ella, se desliza. El atajo `transition: all 0.3s ease` anima cualquier propiedad que cambie.

**animation + @keyframes** — el movimiento *autónomo*: no necesita que pase nada. Defines los fotogramas y el elemento los recorre solo:

```css
@keyframes pulso {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1); }
}
.badge { animation: pulso 2s infinite; }
```

Un badge con `animation: pulso 2s infinite` crece y encoge suavemente por siempre, sin que el usuario toque nada.

La regla del criterio: **si algo cambia porque el usuario hizo algo, es transition; si se mueve solo, es animation**. El movimiento bueno es breve (0.2–0.4s) y con propósito. Y guarda el nombre `prefers-reduced-motion`: hay usuarios que piden menos movimiento, y la buena práctica es respetarlos (lo retomamos en A29).

### Analogía

Las transiciones son una **puerta automática**: se abre suave porque te acercaste — la acción es tuya. Las animaciones son el **neón del letrero**: parpadea solo, sin que nadie lo pida, para atraer miradas. Un edificio bien diseñado no llena el pasillo de luces parpadeantes: usa puertas que responden con elegancia y apenas un letrero que invite. Eso es la diferencia entre transición y animación — y por qué el "movimiento con criterio" es casi siempre poca transición y menos animación.

### Cómo se ve en la práctica

La combinación clásica: una tarjeta que se levanta al pasar el mouse.

```css
.tarjeta {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.tarjeta:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.18);
}
```

En pantalla: la tarjeta descansa con una sombra ligera. Cuando el mouse entra, se **eleva 4px** y la sombra se hace más grande y profunda — como si se acercara a ti. El movimiento dura un cuarto de segundo: lo notas, pero no te cansa. Cambio pequeño, rápido y con propósito: esa es la diferencia entre una página que se siente viva y una que se siente mareante.

### Díselo a la IA

> "Voy a añadir movimiento a mi página con criterio. Primero dime dónde el movimiento aporta y dónde estorba. Después agrega transiciones suaves (0.25s) a los botones y tarjetas, y respeta prefers-reduced-motion: si el usuario prefiere menos movimiento, que los cambios sean instantáneos. Explícame cada regla que agregues."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la diferencia clave entre transition y animation?
   - a) transition se usa para imágenes y animation para texto
   - b) transition responde a un cambio de estado; animation se mueve sola ✔
   - c) transition solo funciona en hover y animation en click
   - d) Son lo mismo, solo cambia la sintaxis

2. **[completar]** "En transition: background 0.3s ease, el ____ es la propiedad que cambia, 0.3s es la ____ y ease es la ____."
   - Banco: `background` · `duración` · `curva` · `pantalla`
   - Respuesta: background / duración / curva

3. **[verdadero/falso]** "animation con @keyframes necesita que el usuario haga hover para moverse."
   - Respuesta: FALSO — la animación se mueve sola; la transición es la que responde a un cambio de estado.

4. **[relacionar]** Une la herramienta con su papel:
   - transition ↔ Suaviza el cambio entre dos estados
   - animation + @keyframes ↔ Movimiento autónomo que se repite solo
   - prefers-reduced-motion ↔ Respeta a quienes prefieren menos movimiento
   - transition: all 0.3s ease ↔ Atajo para animar cualquier propiedad en 0.3s

5. **[qué hace]** Al pasar el mouse por el botón, ¿qué verás?
   ```css
   .boton { transition: background 0.3s ease; }
   .boton:hover { background: #1b4fae; }
   ```
   - a) El color cambia de golpe, sin suavizado
   - b) El fondo cambia a azul oscuro de forma suave en 0.3 segundos ✔
   - c) El botón se mueve hacia arriba
   - d) No pasa nada

---

## A27 — Sombras, bordes y radios: el detalle que se nota

### Concepto

Hay un 90% de la "calidad visual" de una página que no viene de las fuentes ni de los colores: viene de tres propiedades discretas que le dan **profundidad, marco y amabilidad** a cualquier caja:

- **box-shadow** — la sombra que da profundidad. Sintaxis: `box-shadow: desplazamiento-x desplazamiento-y desenfoque color;`. `box-shadow: 0 4px 12px rgba(0,0,0,0.15)` es una sombra suave que "levanta" la caja del fondo. Sin desenfoque (0), la sombra se vuelve un anillo sólido — otra herramienta útil para bordes que no ocupan espacio.
- **border** — el marco. Tres partes: grosor, estilo y color. `border: 1px solid #d0d0d0;` es el clásico: un borde fino y discreto. No lo confundas con `outline`: el outline no ocupa espacio y es el rey del foco visible (A29).
- **border-radius** — qué tan redondeadas son las esquinas. `border-radius: 8px` suaviza apenas; `50%` convierte una caja cuadrada en círculo; `999px` hace píldoras — el clásico de botones y badges.

Las tres juntas sobre una caja:

```css
.caja {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 1px solid #d0d0d0;
  border-radius: 8px;
}
```

En pantalla: una caja con borde fino, esquinas suaves y una sombra que la eleva del fondo. La regla mental para recordar el papel de cada una: **la sombra dice qué tan alto está, el borde dice dónde termina, y el radio dice qué tan amigable es**.

### Analogía

Son los **tres acabados de un mueble de madera**. El borde (border) es el marco que delimita la pieza. El radio (border-radius) es el lijado de las esquinas: una esquina a 90 grados se ve ruda y fría; lijada, se ve cómoda y pensada. Y la sombra (box-shadow) es la elevación: un mueble pegado al suelo se ve plano; con una sombra proyectada, se ve que está a 10 cm del piso — que flota, que tiene presencia. Una caja sin estos tres acabados es madera cruda; con ellos, es mobiliario terminado.

### Cómo se ve en la práctica

La tarjeta de producto que ves en cualquier tienda:

```css
.tarjeta {
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 16px;
}
```

En pantalla: un recuadro blanco con un borde casi invisible (`#e2e2e2`), esquinas suavemente redondeadas (12px) y una sombra discreta que lo separa del fondo. El conjunto: la tarjeta **no toca** la página — parece flotar a unos centímetros. Quítale la sombra y el borde y verás un bloque blanco plano flotando en el vacío. Esa es la diferencia que el ojo nota aunque no sepa nombrarla: profundidad y marco.

### Díselo a la IA

> "Estiliza esta tarjeta para que se vea terminada: borde fino, esquinas redondeadas y una sombra suave. Explícame qué le aporta cada propiedad (box-shadow, border, border-radius) al resultado visual, y dame dos variantes: una sutil para contenido y una con más sombra para elementos destacados."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace border-radius: 50% en una caja cuadrada?
   - a) La convierte en un círculo ✔
   - b) Le agrega un marco dorado
   - c) La achica a la mitad
   - d) Redondea solo una esquina

2. **[completar]** "En box-shadow: 0 4px 12px rgba(0,0,0,0.15), el 0 es el desplazamiento ____, el 4px el desplazamiento ____ y el 12px es el ____."
   - Banco: `horizontal` · `vertical` · `desenfoque` · `radio`
   - Respuesta: horizontal / vertical / desenfoque

3. **[verdadero/falso]** "border y outline son exactamente lo mismo."
   - Respuesta: FALSO — el borde ocupa espacio en el layout; el outline no, y se usa para el foco visible (A29).

4. **[relacionar]** Une la propiedad con lo que aporta:
   - box-shadow ↔ Da profundidad: eleva la caja
   - border ↔ El marco que delimita la caja
   - border-radius ↔ Redondea las esquinas
   - padding ↔ El aire entre el borde y el contenido

5. **[qué hace]** ¿Cómo se verá la tarjeta en pantalla?
   ```css
   .tarjeta {
     border: 1px solid #e2e2e2;
     border-radius: 12px;
     box-shadow: 0 4px 12px rgba(0,0,0,0.08);
   }
   ```
   - a) Plana, sin bordes ni sombra
   - b) Con borde fino, esquinas redondeadas y una sombra suave que la levanta del fondo ✔
   - c) Con un marco grueso y negro
   - d) Redonda por completo

---

## A28 — Dark mode y `prefers-color-scheme`

### Concepto

El **dark mode** no es "poner el fondo negro": es cambiar la paleta de luz según la preferencia del sistema del usuario. La herramienta es una media query que lee esa preferencia:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --fondo: #1a1a1a;
    --texto: #eaeaea;
  }
}
```

El navegador le pregunta al sistema operativo: "¿este usuario prefiere tema oscuro?". Si la respuesta es sí, se aplican esas reglas. La palabra clave es **prefers**: no es que el usuario esté "en modo oscuro" por decreto — es que lo *prefiere*.

Aquí es donde las variables CSS (A16) dejan de ser un lujo: si tus colores viven en variables, activar el dark mode es **sobreescribir las variables** en una sola media query. El mismo HTML, el mismo CSS base — solo cambia el contenido de los botes de pintura. Sin variables, tendrías que reescribir el color en cada regla que lo use: un dolor que no quieres.

El patrón completo: defines los valores claros en `:root` (el light mode es la base, sin media query, igual que mobile-first en A25) y dentro de la media query sobreescribes solo lo que cambia. Trampa común: creer que en dark mode "todo se vuelve negro". No: el texto también cambia (claro en vez de oscuro), los bordes se suavizan y el **contraste se mantiene** (A29). Dark mode no es diseño oscuro: es *iluminación distinta con la misma legibilidad*.

### Analogía

Es la **misma cafetería en dos turnos**. De día: luz natural, mesas claras, tarjetas blancas — light mode. De noche: bajan las luces, encienden lámparas cálidas, y los manteles oscuros hacen que lo importante resalte sin cansar los ojos. No se rediseñó el local: solo cambió la **iluminación**. Las variables son los interruptores: cambias uno y toda la sala responde. Por eso el dark mode con variables toma cinco líneas, y sin variables es remodelar el local entero cada vez que un cliente pide la noche.

### Cómo se ve en la práctica

Una tarjeta que respeta la preferencia del sistema:

```css
:root {
  --fondo: #ffffff;
  --texto: #111111;
  --sombra: rgba(0, 0, 0, 0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --fondo: #1a1a1a;
    --texto: #eaeaea;
    --sombra: rgba(0, 0, 0, 0.5);
  }
}

.tarjeta {
  background: var(--fondo);
  color: var(--texto);
  box-shadow: 0 4px 12px var(--sombra);
}
```

En pantalla: si tu sistema está en tema claro verás una tarjeta blanca con texto oscuro. Cambia tu sistema a tema oscuro, recarga, y la misma tarjeta aparecerá con fondo `#1a1a1a` y texto claro. El HTML no se tocó: solo se sobreescribieron tres variables. Esa es la demostración más clara de por qué la paleta vive en `:root` (A16): el dark mode es literalmente **cambiar el contenido de tres botes**.

### Díselo a la IA

> "Voy a agregar dark mode a mi sitio. Usa variables CSS para la paleta: define light mode como base y agrega una media query prefers-color-scheme: dark que las sobreescriba. Asegúrate de que el contraste del texto se mantenga en ambos modos y dime qué colores cambiaste y por qué."

### Ejercicios

1. **[opción múltiple]** ¿Qué media query detecta la preferencia de tema del usuario?
   - a) @media (max-width: 768px)
   - b) @media (prefers-color-scheme: dark) ✔
   - c) @media (orientation: portrait)
   - d) @media (min-width: 1024px)

2. **[completar]** "El dark mode se logra ____ las variables CSS dentro de la media query; por eso conviene que la paleta viva en ____."
   - Banco: `sobreescribiendo` · `:root` · `borrando` · `el body`
   - Respuesta: sobreescribiendo / :root

3. **[verdadero/falso]** "En dark mode, el texto debe seguir teniendo buen contraste contra el fondo."
   - Respuesta: VERDADERO — dark mode es otra iluminación, no una excusa para bajar la legibilidad (A29).

4. **[relacionar]** Une el concepto con lo que hace:
   - `prefers-color-scheme` ↔ Lee si el usuario prefiere tema claro u oscuro
   - light ↔ El valor por defecto del tema
   - dark ↔ El tema de iluminación baja
   - `var(--fondo)` ↔ Lee el color de fondo desde :root

5. **[qué hace]** En un dispositivo con tema oscuro activado, ¿cómo se verá la página?
   ```css
   :root { --fondo: #fff; --texto: #111; }
   @media (prefers-color-scheme: dark) {
     :root { --fondo: #1a1a1a; --texto: #eaeaea; }
   }
   body { background: var(--fondo); color: var(--texto); }
   ```
   - a) Fondo blanco con texto oscuro
   - b) Fondo oscuro #1a1a1a con texto claro #eaeaea ✔
   - c) Sin colores definidos
   - d) Fondo azul con texto rojo

---

## A29 — Accesibilidad: contraste, foco visible y lectores de pantalla

### Concepto

La **accesibilidad** es que tu página la pueda usar **todas** las personas: con baja visión, sin mouse, con lector de pantalla. No es un extra: es parte de la maquetación. Tres piezas controlas desde CSS y HTML:

- **Contraste** — la diferencia entre texto y fondo. La pauta web (WCAG) pide **4.5:1** para texto normal y **3:1** para texto grande. El gris claro sobre blanco es bonito… e ilegible. La forma de no equivocarte: pídele a la IA los valores y que verifique la proporción.
- **Foco visible** — cuando navegas con el teclado (Tab), el navegador dibuja un anillo alrededor del elemento enfocado. Nunca lo borres: es la única pista del usuario de teclado sobre dónde está parado. La práctica moderna es estilizarlo bien con `:focus-visible`:

```css
button:focus-visible {
  outline: 3px solid #2d6cdf;
  outline-offset: 2px;
}
```

Ese anillo azul de 3px con una separación de 2px aparece al navegar con Tab y no molesta a quien usa mouse. **Nunca uses `outline: none` sin reemplazarlo** — eso es apagar la luz del pasillo.

- **Lectores de pantalla** — programas que leen la página en voz alta. Se apoyan en la semántica (A3), en el `alt` de las imágenes y en `aria-label` para nombrar lo que no tiene texto visible: `<button aria-label="Cerrar">×</button>`.

La mentalidad: la accesibilidad **no se ve** en una captura, pero se siente en quién puede usar tu página. Y no es caridad: es buen negocio — más personas pueden pagarte.

### Analogía

La accesibilidad son las **rampas y el braille de un edificio**. Se construyen al diseñar, no después. Y una rampa bien hecha no la usa solo alguien en silla de ruedas: la usa quien llega con maletas, quien empuja una carriola, quien carga cajas. El foco visible es la **luz de emergencia del pasillo**: nadie la piensa cuando hay luz de día, pero sin ella caminar de noche es imposible. El contraste es la **señalética legible**: no sirve un letrero que solo leen los de vista perfecta a mediodía. Diseñar accesible no limita tu página: la abre para todos — tú incluido.

### Cómo se ve en la práctica

El botón de icono que solo tiene un símbolo — el caso clásico donde fallan los lectores de pantalla:

```html
<button aria-label="Cerrar sesión">⏻</button>
```

```css
button {
  padding: 8px;
  border-radius: 8px;
}
button:focus-visible {
  outline: 3px solid #2d6cdf;
  outline-offset: 2px;
}
```

En pantalla: un botón pequeño con un símbolo de apagado. Si navegas con Tab hasta él, verás un **anillo azul de 3px** rodeándolo con un pequeño respiro — imposible perderlo. Y un lector de pantalla no dirá "símbolo raro": dirá "botón, cerrar sesión", gracias al `aria-label`. Los dos canales cubiertos: visual y sonoro.

### Díselo a la IA

> "Audita la accesibilidad de mi página: revisa el contraste de todo el texto (verifica la proporción WCAG 4.5:1), confirma que el foco visible exista en botones y enlaces, y dime qué imágenes faltan de alt y qué botones necesitan aria-label. Dame la lista de correcciones, no el sermón."

### Ejercicios

1. **[opción múltiple]** ¿Qué proporción de contraste pide la pauta web (WCAG) para texto normal?
   - a) 1:1
   - b) 2:1
   - c) 4.5:1 ✔
   - d) 10:1

2. **[verdadero/falso]** "Un botón que solo muestra un icono puede ser entendido por un lector de pantalla gracias a aria-label."
   - Respuesta: VERDADERO — aria-label le da un nombre legible a lo que no tiene texto visible.

3. **[completar]** "El ____ visible es la pista de dónde está parado el usuario de ____; se estiliza con :focus-visible."
   - Banco: `foco` · `teclado` · `mouse` · `tacto`
   - Respuesta: foco / teclado

4. **[relacionar]** Une la pieza con lo que logra:
   - Contraste 4.5:1 ↔ Texto legible sobre su fondo
   - `:focus-visible` ↔ El anillo que ves al navegar con Tab
   - `aria-label` ↔ Nombre para elementos sin texto visible
   - `alt` ↔ Descripción de una imagen

5. **[qué hace]** ¿Cuándo verás ese anillo azul?
   ```css
   button:focus-visible {
     outline: 3px solid #2d6cdf;
     outline-offset: 2px;
   }
   ```
   - a) Siempre que el botón esté en pantalla
   - b) Solo cuando el botón recibe foco por teclado ✔
   - c) Solo cuando haces clic con el mouse
   - d) Nunca: outline no se renderiza

---

## A30 — Repaso integrador de maquetación (mega-quiz jugable)

### Concepto

Treinta lecciones después tienes el mapa completo de la maquetación. Este repaso te lo devuelve en un solo vistazo — **reconocer, no memorizar**:

- **Estructura** — HTML semántico (A3): `header`, `nav`, `main`, `section`, `footer`. La página es un esqueleto con nombre.
- **Texto** — encabezados, listas y énfasis (A4); tipografía con jerarquía en `rem` (A15 y A17).
- **Cajas** — el box model (A14), `display` (A18) y los acabados: borde, radio y sombra (A27).
- **Layout** — flexbox para una dimensión (A19 y A20) y grid para dos (A21 y A22).
- **Respuesta** — colores y variables en `:root` (A16), responsive con media queries (A24 y A25) y dark mode con `prefers-color-scheme` (A28).
- **Vida** — transiciones y animaciones con criterio (A26) y accesibilidad para todos (A29).

Cada pieza responde a una pregunta concreta: ¿qué es esta caja? (semántica), ¿cómo se ve? (estilo), ¿dónde vive? (layout), ¿cómo se comporta al cambiar de pantalla? (responsive), ¿cómo lo percibe cada persona? (accesibilidad). El mega-quiz viene abajo: si lo resuelves sin ayuda, **ya sabes dirigir a la IA para maquetar** — solo falta que se lo pidas.

### Analogía

Este repaso es la **entrega de la casa**. Durante el mes construiste por habitaciones: el cimiento (HTML semántico), los muros (cajas y display), la distribución (flexbox y grid), las ventanas que se adaptan (responsive), la iluminación (dark mode), los acabados (sombra, borde, radio) y las rampas de entrada (accesibilidad). Ahora recorres la casa entera con el propietario: cada habitación que viste por separado cobra sentido en conjunto. El mega-quiz es ese recorrido: **no te preguntan cómo se hace una pared; te preguntan si la casa funciona**.

### Cómo se ve en la práctica

La mini-página que junta todo el mes — una cuadrícula de tarjetas responsive, accesible y con vida:

```css
:root {
  --fondo: #fff;
  --texto: #111;
  --sombra: rgba(0, 0, 0, 0.08);
}
@media (prefers-color-scheme: dark) {
  :root { --fondo: #1a1a1a; --texto: #eaeaea; --sombra: rgba(0, 0, 0, 0.5); }
}

body { background: var(--fondo); color: var(--texto); }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}

.tarjeta {
  background: var(--fondo);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--sombra);
  transition: transform 0.25s ease;
}
.tarjeta:hover { transform: translateY(-4px); }
.tarjeta:focus-visible { outline: 3px solid #2d6cdf; outline-offset: 2px; }
```

En pantalla: tres tarjetas con borde fino, esquinas redondeadas y sombra suave. Al pasar el mouse se elevan 4px; al navegar con Tab se iluminan con el anillo de foco; en una pantalla angosta se apilan en una columna; y si el sistema del usuario está en oscuro, toda la página cambia de iluminación sin tocar el HTML. Cada línea de ese bloque llegó de una lección distinta del mes — y ahora se lee como una sola cosa.

### Díselo a la IA

> "Hazme un examen de repaso de maquetación: 10 preguntas que mezclen semántica HTML, box model, flexbox, grid, responsive, dark mode, transiciones y accesibilidad. Sin opciones de respuesta: yo respondo libre, y al final dime en cuáles fallé y a qué lección debo volver. Quiero medir lo que ya sé, no memorizar."

Ese prompt convierte a la IA en tu **examinador personal** — y de paso mide tu habilidad de dirección: si puedes explicarle a la IA qué te pregunte, ya puedes explicarle qué maquete.

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estas es la estructura semántica correcta de una página?
   - a) header, footer, nav y main en cualquier orden
   - b) Un solo `<div>` que contiene todo
   - c) header, nav, un solo main y footer ✔
   - d) main repetido tres veces para tener más contenido

2. **[completar]** "El box model (A14) se compone de content + ____ + border + ____."
   - Banco: `padding` · `margin` · `gap` · `radio`
   - Respuesta: padding / margin

3. **[relacionar]** Une la propiedad con su función:
   - `justify-content` ↔ La alineación en el eje principal de flexbox
   - `grid-template-columns` ↔ El ancho de las columnas
   - `border-radius` ↔ Qué tan redondeadas están las esquinas
   - `prefers-color-scheme` ↔ Detecta la preferencia de tema del usuario

4. **[verdadero/falso]** "En mobile-first los estilos del celular van en la base, sin media query, y las media queries usan min-width."
   - Respuesta: VERDADERO — creces de chico a grande: la base es el celular y cada media query suma a partir de un ancho (A25).

5. **[ordenar]** Pasos para construir una página responsive y accesible:
   - Desordenado: `foco visible y aria-label` · `estilos base con variables en :root` · `media query para pantallas chicas` · `esqueleto semántico con header, nav, main y footer` · `grid con columnas flexibles (fr)`
   - Respuesta: esqueleto semántico → estilos base con variables en :root → grid con columnas flexibles (fr) → media query para pantallas chicas → foco visible y aria-label

6. **[qué hace]** Un usuario en un celular de 400px, ¿cuántas columnas verá?
   ```css
   .plan { display: grid; grid-template-columns: 1fr; }
   @media (min-width: 768px) {
     .plan { grid-template-columns: repeat(2, 1fr); }
   }
   ```
   - a) Dos columnas
   - b) Una columna ✔
   - c) Tres columnas
   - d) La página se desborda

7. **[opción múltiple]** Un texto gris claro sobre fondo blanco (contraste bajo) es un problema de…
   - a) Estética: solo se ve feo
   - b) Accesibilidad: la pauta pide 4.5:1 para texto normal ✔
   - c) Velocidad de carga
   - d) Responsive design

8. **[completar]** "El foco visible se estiliza con :focus-____ y le da la pista de navegación a quien usa ____."
   - Banco: `visible` · `teclado` · `mouse` · `tacto`
   - Respuesta: visible / teclado
