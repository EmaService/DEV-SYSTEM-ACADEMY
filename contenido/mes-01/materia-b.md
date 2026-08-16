# MES 1 · MATERIA B — El Idioma del Código
## Lecciones B1–B5 (Lote 1)

---

## B1 — ¿Qué es programar?

### Concepto

Programar es escribir instrucciones para que una computadora haga algo. Punto. Todo lo demás es detalle.

La parte importante es entender **a quién** le escribes: la computadora es infinitamente obediente e infinitamente tonta. Hace EXACTAMENTE lo que le dices — no lo que quisiste decir. Si le pides "manda el correo a todos los clientes" y en tu lista hay un cliente duplicado, le llegará dos veces. La máquina no "entiende" la intención; ejecuta la instrucción.

Un **programa** es una lista de instrucciones guardada en archivos (¿recuerdas A3?). Cuando "corres" o **ejecutas** el programa, la computadora lee esas instrucciones y las cumple en orden, millones por segundo.

Aquí está el giro de tu época: antes, escribir esas instrucciones requería años de práctica, porque había que escribirlas en lenguajes rígidos donde una coma mal puesta rompe todo. Hoy, la IA traduce tus intenciones al lenguaje rígido. Pero la computadora sigue siendo igual de literal — por eso tu trabajo es dar **instrucciones claras y completas a la IA**, y el de la IA es traducirlas sin errores de coma. La habilidad que este programa te construye es la primera.

### Analogía

Programar es escribirle una **receta a un cocinero que no improvisa jamás**. Si la receta dice "hornea 40 minutos" y se te olvidó decir "saca el pastel", el cocinero lo deja adentro hasta quemarse. No es rebeldía — es obediencia perfecta. El buen programador (y el buen director de IA) piensa en TODOS los pasos, incluyendo los obvios.

### Cómo se ve en la práctica

Instrucciones para humano vs. para computadora:

```
Humano:  "Avísame si el cliente ya pagó"

Programa: SI pago_recibido ES verdadero
          ENTONCES enviar_mensaje("Cliente pagó ✔")
          SI NO, no hacer nada
```

Mismo objetivo, pero el programa define cada caso: qué revisar, qué hacer si sí, qué hacer si no. Esa precisión es programar.

### Díselo a la IA

> "Quiero que mi sistema haga esto: [tu idea en palabras normales]. Antes de escribir código, hazme las preguntas que necesites para cubrir los casos que no estoy considerando."

Esa última frase es oro puro: obliga a la IA a pensar en los "¿y si...?" que a ti se te escapan.

### Ejercicios

1. **[opción múltiple]** ¿Cuál describe mejor a una computadora?
   - a) Inteligente y creativa
   - b) Obediente y literal ✔
   - c) Intuitiva pero lenta
   - d) Impredecible

2. **[completar]** "La computadora hace exactamente lo que le ____, no lo que quisiste ____."
   - Banco: `dices` · `decir` · `pides por favor` · `muestras`
   - Respuesta: dices / decir

3. **[verdadero/falso]** "Un programa es una lista de instrucciones guardada en archivos."
   - Respuesta: VERDADERO.

4. **[qué hace]** Este pseudo-programa: `SI stock ES 0 ENTONCES mostrar("Agotado")` — ¿qué hace?
   - a) Vende el producto
   - b) Muestra "Agotado" cuando no hay stock ✔
   - c) Compra más stock
   - d) Borra el producto

5. **[opción múltiple]** En la era de la IA, ¿cuál es TU habilidad principal como constructor?
   - a) Escribir código sin errores de sintaxis
   - b) Memorizar comandos
   - c) Dar instrucciones claras y completas ✔
   - d) Escribir rápido

---

## B2 — Los lenguajes de programación: por qué hay tantos

### Concepto

Un **lenguaje de programación** es un idioma con reglas estrictas para escribir instrucciones que la computadora entiende. Hay cientos. ¿Por qué no uno solo? Por lo mismo que no hay una sola herramienta en la caja: cada lenguaje se inventó para resolver mejor cierto tipo de problema.

El mapa que te interesa (los conocerás a fondo uno por uno):

- **JavaScript** — el idioma de la web. Corre en todos los navegadores del planeta.
- **Python** — el idioma de la IA, los datos y la automatización. Famoso por ser legible.
- **SQL** — el idioma para hablar con bases de datos. No construye apps; pregunta y guarda datos.
- **HTML y CSS** — estructura y estilo de páginas web (técnicamente no son "de programación", ya verás por qué en B7).
- **Java, C, C++, C#** — lenguajes de sistemas grandes: bancos, videojuegos, Android, Windows.

¿Cuál "debes aprender"? Ninguno de memoria — la IA los escribe todos. Pero vas a **reconocerlos y leerlos**, porque cada proyecto que dirijas estará escrito en alguno, y saber cuál es te dice qué tipo de proyecto tienes enfrente.

### Analogía

Los lenguajes son **idiomas humanos con propósito**: el italiano nació para la ópera, el alemán para la filosofía, el inglés para los negocios (es broma… más o menos). JavaScript es el inglés de internet: no es el más bonito, pero lo hablan en todas partes. Python es como el español neutro: clarito y fácil de leer. SQL es como el lenguaje de los archivistas: solo sabe preguntar y archivar, pero nadie archiva mejor.

### Cómo se ve en la práctica

La misma idea — "saluda a Ray" — en tres lenguajes:

```javascript
// JavaScript
console.log("Hola, Ray");
```

```python
# Python
print("Hola, Ray")
```

```sql
-- SQL (no saluda: pregunta a la base de datos)
SELECT nombre FROM clientes WHERE nombre = 'Ray';
```

Fíjate: JavaScript y Python se parecen bastante. SQL es otra cosa — no da órdenes generales, hace preguntas a los datos.

### Díselo a la IA

> "¿En qué lenguaje(s) está escrito este proyecto y por qué se habrá elegido ese? ¿Es una buena elección para lo que el proyecto hace?"

### Ejercicios

1. **[relacionar]** Une el lenguaje con su territorio:
   - JavaScript ↔ La web y los navegadores
   - Python ↔ IA, datos y automatización
   - SQL ↔ Bases de datos
   - C++ ↔ Videojuegos y sistemas de alto rendimiento

2. **[opción múltiple]** ¿Por qué existen tantos lenguajes de programación?
   - a) Por moda
   - b) Cada uno resuelve mejor cierto tipo de problema ✔
   - c) Porque los viejos dejan de funcionar
   - d) Por derechos de autor

3. **[qué hace]** `print("Hola, Ray")` — ¿qué lenguaje es y qué hace?
   - a) JavaScript; borra un archivo
   - b) Python; muestra el texto "Hola, Ray" ✔
   - c) SQL; busca a Ray en la base de datos
   - d) HTML; crea un botón

4. **[completar]** "No necesitas escribir los lenguajes de memoria, pero sí ____ y ____ el código que la IA genera."
   - Banco: `reconocer` · `leer` · `memorizar` · `recitar`
   - Respuesta: reconocer / leer

5. **[verdadero/falso]** "SQL sirve para construir la parte visual de una página web."
   - Respuesta: FALSO — SQL habla con bases de datos; lo visual es HTML/CSS/JavaScript.

---

## B3 — JavaScript: el idioma de la web

### Concepto

**JavaScript (JS)** es el único lenguaje que corre dentro de todos los navegadores del mundo. Cada botón que responde, cada carrito que suma, cada formulario que valida — eso es JavaScript trabajando en tu pantalla.

Nació en 1995, escrito en 10 días (y se nota, dicen los programadores entre risas), y hoy es el lenguaje más usado del planeta. Su superpoder no es la elegancia: es la **ubicuidad**. Está en todas partes:

- **En el navegador** — la interactividad de cada página que visitas
- **En el servidor** — gracias a **Node.js**, un programa que permite correr JS fuera del navegador (así el mismo idioma sirve para el frontend y el backend)
- **En las apps** — muchas apps de celular y escritorio están hechas con JS por debajo

Dato para no quedar mal en una conversación: **Java y JavaScript NO son lo mismo** — el nombre fue una jugada de marketing de los 90. Es como jamón y jamaica: empiezan igual y ahí se acaba el parecido. (Lección completa de esto en B6.)

### Analogía

JavaScript es el **inglés de internet**: no es el idioma más puro ni el más bonito, tiene rarezas que hacen reír a los lingüistas… pero se habla en todos lados, y quien lo entiende puede trabajar en cualquier parte del mundo digital. Aprendiste a "leerlo" y el 80% de los proyectos web te abren las puertas.

### Cómo se ve en la práctica

JavaScript real de una tienda:

```javascript
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

const total = calcularTotal(7000, 12);
console.log("Total del programa: $" + total);
```

Aunque no lo escribas tú, ya puedes seguir la historia: hay una "receta" llamada `calcularTotal` que multiplica precio por cantidad, se usa con 7000 y 12, y muestra el resultado. (Variables y funciones a fondo en B9 y B13.)

### Díselo a la IA

> "Este archivo .js es parte de mi proyecto. Explícame en español, bloque por bloque, qué hace — como si me lo contara un colega, no un manual."

### Ejercicios

1. **[opción múltiple]** ¿Dónde corre JavaScript de forma nativa?
   - a) Solo en Windows
   - b) En todos los navegadores del mundo ✔
   - c) Solo en servidores
   - d) Solo en Mac

2. **[completar]** "____ es el programa que permite correr JavaScript fuera del navegador, por ejemplo en un ____."
   - Banco: `Node.js` · `servidor` · `Photoshop` · `celular`
   - Respuesta: Node.js / servidor

3. **[verdadero/falso]** "Java y JavaScript son el mismo lenguaje con nombre corto y largo."
   - Respuesta: FALSO — solo comparten nombre por marketing de los 90.

4. **[qué hace]** `calcularTotal(7000, 12)` usando la función de la lección — ¿qué regresa?
   - a) 7012
   - b) 84000 ✔
   - c) 7000
   - d) Un error

5. **[opción múltiple]** El carrito de una tienda online suma los productos al instante, sin recargar la página. ¿Quién hace eso?
   - a) HTML
   - b) La base de datos
   - c) JavaScript ✔
   - d) El sistema operativo

---

## B4 — Python: el idioma de la IA y los datos

### Concepto

**Python** es el segundo lenguaje que debes reconocer, y el favorito de dos mundos gigantes: la **inteligencia artificial** y el **análisis de datos**. Cuando lees que "entrenaron un modelo de IA" o que "automatizaron un reporte", casi seguro hay Python detrás.

Su fama viene de una virtud: es el lenguaje más parecido a leer inglés. Compara mentalmente: donde otros lenguajes usan símbolos y llaves por todos lados, Python usa palabras y orden visual. Por eso es el lenguaje con el que las universidades enseñan, y por eso los científicos (que no son programadores) lo adoptaron.

Dónde manda Python:

- **IA y machine learning** — las herramientas para crear modelos están en Python
- **Análisis de datos** — leer un Excel de 500,000 filas y sacarle conclusiones en segundos
- **Automatización** — "cada lunes descarga el reporte, filtra, y mándalo por correo": Python clásico
- **Backends** — también construye servidores, aunque ahí compite con JavaScript

Curiosidad: se llama Python por el grupo de comedia **Monty Python**, no por la serpiente. Los programadores son así.

### Analogía

Si JavaScript es el inglés de internet, Python es el **español neutro de los documentales**: claro, ordenado, agradable de leer, y entendible aunque no sea tu idioma. Por eso es el idioma de la ciencia: cuando el tema es complejo (IA, datos), lo último que quieres es que el idioma también lo sea.

### Cómo se ve en la práctica

```python
ventas = [7000, 7000, 7900, 9100]

total = sum(ventas)
promedio = total / len(ventas)

print(f"Vendiste ${total} con un promedio de ${promedio}")
```

Casi se lee solo: una lista de ventas, la suma, el promedio (total entre cuántas hay), y el mensaje final. Eso es Python: legible incluso para quien va en el Mes 1.

### Díselo a la IA

> "Quiero automatizar esto que hago a mano cada semana: [describe tu tarea repetitiva]. ¿Se puede con Python? Dime qué necesitaría y arma el script paso a paso."

### Ejercicios

1. **[opción múltiple]** ¿En qué dos mundos es Python el rey?
   - a) Videojuegos y diseño
   - b) IA y análisis de datos ✔
   - c) Páginas web y estilos
   - d) Sistemas operativos y drivers

2. **[completar]** "Python es famoso por ser el lenguaje más ____ — casi como leer ____."
   - Banco: `legible` · `inglés` · `rápido` · `binario`
   - Respuesta: legible / inglés

3. **[qué hace]** `sum(ventas)` en el ejemplo de la lección — ¿qué hace?
   - a) Cuenta cuántas ventas hay
   - b) Suma todos los montos de la lista ✔
   - c) Borra las ventas
   - d) Ordena las ventas de mayor a menor

4. **[verdadero/falso]** "Python se llama así por la serpiente pitón."
   - Respuesta: FALSO — es por el grupo de comedia Monty Python.

5. **[relacionar]** Une la tarea con el lenguaje que típicamente la hace:
   - Botón interactivo en una página ↔ JavaScript
   - Entrenar un modelo de IA ↔ Python
   - Preguntar datos a una base ↔ SQL
   - Automatizar un reporte semanal ↔ Python

---

## B5 — SQL: el idioma de las bases de datos

### Concepto

**SQL** (se pronuncia "es-cu-ele" o "síquel") es un lenguaje distinto a todos: no construye páginas ni apps. Hace una sola cosa, y la hace desde hace 50 años mejor que nadie: **hablar con bases de datos**.

Una base de datos (la verás a fondo en B26) es donde viven los datos de cualquier sistema: clientes, ventas, alumnos, pagos. Y SQL es el idioma para preguntarle y ordenarle cosas. Sus cuatro verbos sagrados:

- **SELECT** — dame datos ("dame todos los alumnos que ya pagaron")
- **INSERT** — guarda esto nuevo ("registra este alumno")
- **UPDATE** — modifica algo existente ("cámbiale el estado a aprobado")
- **DELETE** — borra ("elimina este registro de prueba")

¿Por qué te importa? Porque **tu negocio son tus datos**. La página se puede rehacer en una tarde con IA; los datos de tus clientes y ventas no. Cuando dirijas proyectos, las decisiones serias — respaldos, quién puede borrar qué, qué se guarda — son decisiones sobre la base de datos. Y SQL es su idioma.

### Analogía

SQL es el **archivista perfecto de una bodega infinita**: no diseña la tienda, no atiende clientes, no cobra. Pero pídele "todas las facturas de marzo de clientes de Tlalpan mayores a $5,000" y te las trae en un segundo, sin equivocarse jamás. Cuatro cosas sabe hacer — buscar, guardar, modificar, borrar — y con esas cuatro sostiene el mundo entero de los datos.

### Cómo se ve en la práctica

```sql
SELECT nombre, correo
FROM alumnos
WHERE mes_pagado = 1 AND examen_aprobado = true;
```

Léelo como pregunta: "Dame el nombre y correo, de la tabla de alumnos, donde hayan pagado el mes 1 Y aprobado el examen". SQL es de los lenguajes más leíbles que existen — es casi una oración en inglés.

### Díselo a la IA

> "Necesito saber [tu pregunta de negocio, ej. 'cuántos alumnos pagaron este mes y cuánto sumó']. Escribe la consulta SQL, explícame qué hace cada línea, y dime si es segura de correr (que no modifique nada)."

Esa última parte importa: SELECT solo lee (seguro); UPDATE y DELETE modifican (cuidado).

### Ejercicios

1. **[relacionar]** Une el verbo SQL con lo que hace:
   - SELECT ↔ Traer datos
   - INSERT ↔ Guardar algo nuevo
   - UPDATE ↔ Modificar lo existente
   - DELETE ↔ Borrar

2. **[opción múltiple]** ¿Cuál de estos comandos SQL es de solo lectura (no modifica nada)?
   - a) DELETE
   - b) UPDATE
   - c) SELECT ✔
   - d) INSERT

3. **[qué hace]** `SELECT nombre FROM alumnos WHERE examen_aprobado = true;` — ¿qué trae?
   - a) Todos los datos de todos los alumnos
   - b) Los nombres de los alumnos que aprobaron el examen ✔
   - c) Borra a los alumnos reprobados
   - d) Aprueba a todos los alumnos

4. **[completar]** "La página se puede rehacer en una tarde; los ____ de tus clientes y ventas ____."
   - Banco: `datos` · `no` · `colores` · `sí`
   - Respuesta: datos / no

5. **[verdadero/falso]** "SQL sirve para diseñar la parte visual de las páginas."
   - Respuesta: FALSO — SQL solo habla con bases de datos: busca, guarda, modifica y borra.

---

## B6 — Java NO es JavaScript (y los primos confusos)

### Concepto

Vamos a poner orden en el lío de nombres más grande del mundo del software. **Java** y **JavaScript** no son parientes: solo comparten nombre porque en 1995, cuando JavaScript era nuevo, sus creadores decidieron aprovechar la fama de Java para llamar la atención. Puro marketing. Desde entonces, medio mundo se confunde.

Lo importante: son lenguajes distintos, para propósitos distintos.

- **Java** — creado en 1995. Corre en cualquier sistema (esa era su gracia: "escribe una vez, corre en todos lados"). Reina de sistemas grandes: bancos, aplicaciones Android, sistemas gubernamentales. Verboso, formal, estable.
- **JavaScript** — creado también en 1995, en 10 días. Vive en los navegadores (y en servidores gracias a Node.js — B3). Flexible, rápido de escribir, dominante en la web.

Los otros primos confusos (para que los reconozcas):

- **C** — el abuelo de todos. De los años 70. Rápido, pegado al hardware. Corre sistemas operativos, drivers, cosas críticas de rendimiento.
- **C++** — C con más features. Videojuegos, motores gráficos, software de alto rendimiento. Unreal Engine y Unity están escritos en C++.
- **C#** — se pronuncia "si-sharp". De Microsoft. Es el "Java de Microsoft". Videojuegos con Unity, apps de Windows, backends corporativos.
- **TypeScript** — JavaScript con tipos estrictos. No es distinto lenguaje: es JavaScript con guardarríeles. Muy usado en proyectos serios.

Regla mnemotécnica: **si trae "Java" en el nombre, es Java. Si trae "Script" en el nombre, es JavaScript. No se cruzan.**

### Analogía

Java y JavaScript son como **jamón y jamaica**: los dos empiezan con J-A-M, uno es carne y el otro flor. Nadie ordena "jamón de jamaica" en el mercado; nadie debería confundir Java con JavaScript en una junta. Ahora tú tampoco.

### Cómo se ve en la práctica

La misma idea — "muestra hola" — en cinco lenguajes de la familia:

```java
// Java
System.out.println("Hola");
```

```javascript
// JavaScript
console.log("Hola");
```

```c
// C
printf("Hola");
```

```cpp
// C++
std::cout << "Hola";
```

```csharp
// C#
Console.WriteLine("Hola");
```

Todos hacen lo mismo. Cada uno lo dice a su modo. Reconocerlos de vista es el objetivo — la IA los escribe todos.

### Díselo a la IA

> "Este proyecto que me pasaron está en [lenguaje]. En una tabla: qué tipo de proyectos suelen usar este lenguaje, qué debería aprender a reconocer, y qué NO debo confundir con lenguajes de nombre parecido."

### Ejercicios

1. **[verdadero/falso]** "Java es la versión larga de JavaScript."
   - Respuesta: FALSO — son lenguajes distintos que solo comparten nombre por marketing.

2. **[relacionar]** Une el lenguaje con su territorio típico:
   - Java ↔ Bancos y Android
   - JavaScript ↔ Web y navegadores
   - C++ ↔ Videojuegos de alto rendimiento
   - C# ↔ Unity y apps de Windows

3. **[opción múltiple]** ¿Cómo se pronuncia C#?
   - a) "ce numeral"
   - b) "si-sharp" ✔
   - c) "ce menor"
   - d) "hashtag ce"

4. **[completar]** "TypeScript no es un lenguaje distinto: es ____ con ____ estrictos."
   - Banco: `JavaScript` · `tipos` · `Java` · `bugs`
   - Respuesta: JavaScript / tipos

5. **[qué hace]** Ves esto: `System.out.println("Hola");`. ¿Qué lenguaje es?
   - a) JavaScript
   - b) Java ✔
   - c) Python
   - d) C++

---

## B7 — HTML: el esqueleto (y por qué no es "programar")

### Concepto

**HTML** (HyperText Markup Language, "lenguaje de marcado de hipertexto") es el que define QUÉ hay en una página web y en qué orden: encabezados, párrafos, imágenes, botones, formularios. Sin HTML, no hay página. Con HTML solo, tienes una página funcional pero sin estilos ni interactividad — texto negro sobre fondo blanco, como Wikipedia en modo minimalista.

Un archivo HTML es texto con **etiquetas** entre `<` y `>` que le dicen al navegador cómo interpretar cada pedazo:

- `<h1>Título</h1>` — un encabezado grande
- `<p>Párrafo de texto</p>` — un párrafo
- `<img src="foto.png">` — una imagen
- `<a href="tienda.com">Compra aquí</a>` — un enlace
- `<button>Click</button>` — un botón

Detalle nerd que sí importa: HTML técnicamente **no es un lenguaje de programación**, es un lenguaje de **marcado**. No tiene variables ni condicionales ni funciones — no le puedes decir "si el usuario está logueado, muestra X". Solo describe estructura. La lógica la pone JavaScript (B3). El estilo lo pone CSS (B8). Esos tres — HTML, CSS y JavaScript — son la santísima trinidad de la web, y desde este mes vas a dirigir IA que los combina.

### Analogía

HTML es el **esqueleto del cuerpo**: define dónde va la cabeza, dónde los brazos, dónde las piernas. No es la piel (eso es CSS), ni los músculos que mueven (eso es JavaScript). Sin esqueleto no hay cuerpo. Con puro esqueleto no ganas concursos de belleza, pero ya se para y funciona.

### Cómo se ve en la práctica

Una página HTML mínima:

```html
<!doctype html>
<html>
  <head>
    <title>Mi negocio</title>
  </head>
  <body>
    <h1>Bienvenidos</h1>
    <p>Somos la mejor tortería de Tlalpan.</p>
    <a href="https://wa.me/5512345678">Pídenos por WhatsApp</a>
  </body>
</html>
```

Ese archivo, guardado como `index.html` y abierto en cualquier navegador del mundo, muestra una página real. Fea, pero real. Y así arrancan **todos** los sitios de internet.

### Díselo a la IA

> "Explícame el archivo index.html de mi proyecto, etiqueta por etiqueta, en una tabla: qué elemento es y qué muestra en la página."

### Ejercicios

1. **[opción múltiple]** ¿Qué define HTML en una página web?
   - a) Los colores y estilos
   - b) La interactividad (clicks, animaciones)
   - c) La estructura: qué hay y en qué orden ✔
   - d) La velocidad de carga

2. **[verdadero/falso]** "HTML es técnicamente un lenguaje de programación con variables y funciones."
   - Respuesta: FALSO — es un lenguaje de MARCADO; describe estructura, no lógica.

3. **[relacionar]** Une la etiqueta con lo que crea:
   - `<h1>` ↔ Un encabezado grande
   - `<p>` ↔ Un párrafo
   - `<img>` ↔ Una imagen
   - `<a>` ↔ Un enlace

4. **[completar]** "En la santísima trinidad de la web, ____ pone estructura, ____ pone estilo, y JavaScript pone ____."
   - Banco: `HTML` · `CSS` · `interactividad` · `imágenes`
   - Respuesta: HTML / CSS / interactividad

5. **[qué hace]** `<a href="https://wa.me/5512345678">Escríbenos</a>` — ¿qué crea en la página?
   - a) Un botón que envía correo
   - b) Un enlace que dice "Escríbenos" y abre WhatsApp al número indicado ✔
   - c) Una imagen del logo de WhatsApp
   - d) Una alerta que muestra el número

---

## B8 — CSS: el estilista de la web

### Concepto

**CSS** (Cascading Style Sheets, "hojas de estilo en cascada") es el que decide cómo se ve el HTML: colores, tamaños, tipografías, posiciones, animaciones. Si HTML es el esqueleto, CSS es la piel, el corte de pelo y el guardarropa.

CSS se escribe con reglas que dicen "a este elemento, aplícale estos estilos":

```css
h1 {
  color: purple;
  font-size: 48px;
  text-align: center;
}
```

Esa regla se lee: "a todos los `<h1>` de la página, píntalos morado, con letra de 48 píxeles, centrados". Se puede escribir dentro del HTML o (mejor) en un archivo aparte `.css`.

Lo de "cascading" es un concepto clave: las reglas se APILAN. Si una regla general dice "todos los párrafos son negros" y una específica dice "los párrafos del footer son grises", la específica gana en el footer. Así se controla algo tan visualmente rico como una página moderna con reglas ordenadas.

En 2026, CSS también hace cosas que antes solo JavaScript hacía: animaciones, cambios al pasar el mouse, layouts adaptables (responsive). Cuando la IA construya páginas para ti, va a escribir muchísimo CSS. Y tu chamba será decirle: "más grande el título", "los colores más oscuros", "que se vea bien en celular" — y CSS será lo que la IA toque para hacerlo.

### Analogía

Si HTML es el esqueleto, CSS es **el estilista y el sastre**: recibe un cuerpo funcional y decide el peinado, el maquillaje, la ropa, la postura. Dos personas idénticas por dentro pueden verse radicalmente distintas por fuera solo cambiando de estilista.

### Cómo se ve en la práctica

Mismo HTML con y sin CSS:

```html
<h1>DEV SYSTEM ACADEMY</h1>
<p>Aprende a construir con IA.</p>
```

Sin CSS: título negro tamaño default, párrafo negro alineado a la izquierda. Feo pero funcional.

Con este CSS:

```css
body { background: #0a0a1f; color: white; font-family: sans-serif; }
h1 { color: #7c3aed; font-size: 64px; text-align: center; }
p { font-size: 20px; text-align: center; opacity: 0.8; }
```

Fondo azul noche, título morado enorme centrado, párrafo blanco tenue. La misma información, otra sensación completa.

### Díselo a la IA

> "El diseño actual de mi página se ve genérico. Sin cambiar la estructura HTML, ajusta el CSS para que se vea moderno: colores [X y Y], tipografía sans-serif con carácter, y que respire (más espacios y menos densidad)."

### Ejercicios

1. **[opción múltiple]** ¿Qué controla CSS?
   - a) La estructura de la página
   - b) La apariencia visual: colores, tamaños, posiciones ✔
   - c) La conexión a la base de datos
   - d) La velocidad del internet

2. **[qué hace]** Esta regla CSS: `h1 { color: red; font-size: 48px; }`. ¿Qué hace?
   - a) Pone todos los textos rojos
   - b) A todos los `<h1>` los pinta rojos con letra de 48 píxeles ✔
   - c) Borra los encabezados
   - d) Cambia el fondo a rojo

3. **[completar]** "En CSS, cuando hay varias reglas para el mismo elemento, la regla más ____ le gana a la más ____."
   - Banco: `específica` · `general` · `nueva` · `vieja`
   - Respuesta: específica / general

4. **[verdadero/falso]** "En 2026, CSS también puede hacer animaciones y diseños adaptables sin JavaScript."
   - Respuesta: VERDADERO — CSS moderno hace muchísimo más que colores.

5. **[relacionar]** Une la propiedad CSS con lo que controla:
   - `color` ↔ Color del texto
   - `background` ↔ Color de fondo
   - `font-size` ↔ Tamaño de la letra
   - `text-align` ↔ Alineación (izquierda, centro, derecha)

---

## B9 — Variables: cajitas con nombre

### Concepto

Una **variable** es una cajita con nombre donde un programa guarda un dato para usarlo después. Es el concepto más básico y más importante de la programación — todos los lenguajes lo tienen, y todo lo demás se construye encima.

En JavaScript se ven así:

```javascript
let precio = 7000;
let nombreAlumno = "Ray";
let examenAprobado = true;
```

Traducido: "crea una cajita llamada `precio` y guárdale el número 7000; una llamada `nombreAlumno` con el texto "Ray"; una llamada `examenAprobado` con verdadero". Después, cualquier parte del programa puede usar `precio` y automáticamente vale 7000.

Tres palabras que verás en JavaScript para crear variables:

- `let` — variable que puede cambiar después
- `const` — variable que NO va a cambiar (constante). Es el default preferido: si no vas a cambiarla, usa `const`
- `var` — la forma vieja. Todavía funciona pero ya casi nadie la usa

Reglas de nombres (importantes cuando dirijas a la IA):

- Sin espacios: `nombreAlumno`, no `nombre alumno`
- Empiezan con letra (o `_`), nunca con número
- Sensibles a mayúsculas: `precio` y `Precio` son cajitas DISTINTAS
- Estilo convencional: **camelCase** — primera palabra minúscula, siguientes con mayúscula: `precioTotal`, `fechaDePago`, `examenAprobado`

Este es el vocabulario mínimo para leer cualquier código que la IA genere para ti.

### Analogía

Una variable es una **caja etiquetada en una bodega**: le pones un nombre, adentro pones algo (un número, un texto, un `sí/no`), y después la buscas por nombre para ver qué tiene. Si mañana cambias su contenido, la caja sigue llamándose igual pero adentro hay otra cosa.

### Cómo se ve en la práctica

Un pedazo real de un checkout:

```javascript
const emailAlumno = "ray@ejemplo.com";
const mesAPagar = 1;
const precioMensualidad = 7000;

const mensaje = "Cobrar " + precioMensualidad + " a " + emailAlumno;
console.log(mensaje);
// muestra: Cobrar 7000 a ray@ejemplo.com
```

Fíjate cómo se usan las variables: se crean, se combinan (`+`), y aparecen en el resultado. Casi se lee como oración.

### Díselo a la IA

> "En este archivo JavaScript, hazme una tabla con TODAS las variables: nombre, qué guarda, y si cambia o no durante la ejecución. Márcame las que podrían ser problemáticas (nombres poco claros o valores mágicos)."

### Ejercicios

1. **[opción múltiple]** ¿Qué es una variable?
   - a) Un error del programa
   - b) Una cajita con nombre donde el programa guarda un dato ✔
   - c) Un tipo de bug
   - d) Una función especial

2. **[relacionar]** Une la palabra clave con su uso:
   - `let` ↔ Variable que puede cambiar
   - `const` ↔ Variable que NO va a cambiar
   - `var` ↔ La forma vieja, casi en desuso

3. **[completar]** "El estilo estándar de nombres en JavaScript se llama ____: primera palabra en minúscula y las siguientes con ____."
   - Banco: `camelCase` · `mayúscula` · `snake_case` · `guiones`
   - Respuesta: camelCase / mayúscula

4. **[verdadero/falso]** "En JavaScript, `precio` y `Precio` son la misma variable porque solo cambia una letra."
   - Respuesta: FALSO — son sensibles a mayúsculas; son variables DISTINTAS.

5. **[qué hace]** `const precioTotal = 7000 * 12;` — ¿qué guarda en la variable?
   - a) El texto "7000 * 12"
   - b) El número 84000 (resultado de la multiplicación) ✔
   - c) Un error de sintaxis
   - d) La palabra "precioTotal"

---

## B10 — Tipos de datos: texto, números, booleanos

### Concepto

Todo dato que guardes en una variable es de un **tipo**. Los tres básicos, que verás todos los días:

- **String (texto)** — cualquier cosa entre comillas: `"Ray"`, `"correo@ejemplo.com"`, `"7000"`. Ojo: `"7000"` entre comillas ES TEXTO, no número. Si sumas `"7000" + 1` en JavaScript, te sale `"70001"` — porque JavaScript pega el 1 al final del texto. Esa clase de sorpresas se llaman **bugs**, y todos las hemos sufrido.
- **Number (número)** — sin comillas: `7000`, `3.14`, `-5`. Se pueden sumar, restar, multiplicar. En JavaScript no hay "enteros" y "decimales" separados: son todos `number`.
- **Boolean (booleano)** — solo dos valores posibles: `true` o `false`. Verdadero o falso. Es el tipo detrás de todas las decisiones: `examenAprobado`, `estaLogueado`, `esFinDeSemana`.

Hay otros tipos que verás pronto (los detallamos más adelante):

- **null** — "aquí no hay nada, a propósito". Un campo vacío deliberadamente.
- **undefined** — "esto no se definió nunca". Una variable que existe pero sin valor asignado.
- **array** — lista de cosas (B15).
- **object** — ficha con datos agrupados (B16).

Saber el tipo de cada dato es la mitad de leer código. Si ves `precio` y sabes que es `number`, entiendes las operaciones. Si ves `nombre` y sabes que es `string`, entiendes los mensajes. Y si ves `pagoConfirmado` y sabes que es `boolean`, entiendes las decisiones del programa.

### Analogía

Los tipos de dato son las **categorías del mercado**: la fruta se vende por peso, los huevos por pieza, la leche por litro. No mezclas — no pides "medio kilo de huevos" ni "3 piezas de leche". El tipo define qué operaciones tienen sentido: sumas números, concatenas textos, decides con booleanos. Confundir tipos es como pedir "medio kilo de sí".

### Cómo se ve en la práctica

```javascript
const nombreAlumno = "Ray Fernández";    // string
const precioMensual = 7000;              // number
const examenAprobado = true;             // boolean
const fechaPago = null;                  // null: aún no ha pagado

if (examenAprobado === true) {
  console.log("Tarifa preferente: $" + precioMensual);
}
// Muestra: Tarifa preferente: $7000
```

Cuatro tipos distintos, trabajando juntos. Y esa es cualquier app real.

### Díselo a la IA

> "En este archivo, dame una tabla de cada variable con su nombre, su valor y su tipo (string, number, boolean, null, undefined). Márcame donde haya conversiones raras o riesgo de mezclar tipos."

### Ejercicios

1. **[relacionar]** Une el valor con su tipo:
   - `"Hola"` ↔ string (texto)
   - `7000` ↔ number
   - `true` ↔ boolean
   - `null` ↔ null (nada intencional)

2. **[opción múltiple]** En JavaScript, ¿qué resulta de `"7000" + 1`?
   - a) 7001
   - b) "70001" (texto) ✔
   - c) Un error
   - d) 8000

3. **[completar]** "Un booleano solo puede tener dos valores: ____ o ____."
   - Banco: `true` · `false` · `1` · `sí`
   - Respuesta: true / false

4. **[verdadero/falso]** "`null` y `undefined` son exactamente lo mismo."
   - Respuesta: FALSO — `null` es "nada, a propósito"; `undefined` es "esto no se definió nunca".

5. **[qué hace]** `const activo = true; if (activo === true) { pagar(); }` — ¿qué hace este código?
   - a) Nunca ejecuta `pagar()`
   - b) Ejecuta `pagar()` porque `activo` es verdadero ✔
   - c) Genera un error
   - d) Cambia `activo` a false

---

## B11 — Condicionales: if/else, el código que toma decisiones

### Concepto

Un programa que no decide nada es un folleto estático. Las apps reales toman decisiones a cada segundo: ¿el usuario ya pagó? ¿hay stock? ¿es cliente nuevo? En código, esas decisiones se escriben con **condicionales** — la estructura `if/else`.

`if` significa "si": si una condición es verdadera, ejecuta este bloque. `else` significa "si no": el camino para cuando la condición es falsa. Y `else if` encadena varias opciones: "si pasa A haz esto; si no, si pasa B haz esto otro; si no..." (en JS se escribe `else if`, separado).

La condición siempre se evalúa a un **booleano** (lo viste en B10): `true` o `false`. Para construirla usas comparaciones: `===` (igual exacto), `!==` (distinto), `>`, `<`, `>=`, `<=`. Y ojo con el clásico: `=` ASIGNA un valor, `==` compara con trucos raros, `===` compara exacto. Un `=` de más o de menos es uno de los bugs más comunes del mundo (B20).

Para ti, director de IA, esto es oro: **cada regla de negocio que tienes en la cabeza es una serie de condicionales**. "Los clientes nuevos pagan la mitad el primer mes", "el envío es gratis arriba de $5,000" — le describes la regla a la IA en palabras, y ella la traduce a `if/else`. Tu trabajo es leer la traducción y cazar el caso que se le olvidó cubrir.

### Analogía

El **vigilante de la entrada de un edificio**. Alguien llega: "¿trae gafete?" (la condición). Si lo trae, pasa (`if`). Si no, firma el libro de visitas (`else`). Y si llega un directivo, ni siquiera firma (`else if`). Ese vigilante es un condicional con patas: revisa una condición y toma caminos distintos según el resultado. Cambia la regla del edificio y cambias los caminos — el vigilante solo obedece.

### Cómo se ve en la práctica

```javascript
const pagoRecibido = true;
const monto = 7000;

if (pagoRecibido === true) {
  console.log("Acceso concedido. Bienvenido.");
} else {
  console.log("Primero completa tu pago.");
}

if (monto >= 5000) {
  console.log("Tienes envío gratis.");
} else if (monto >= 1000) {
  console.log("Tienes 10% de descuento.");
} else {
  console.log("Sin beneficios.");
}
```

Primero se evalúa la condición entre paréntesis. Si da `true`, entra al primer bloque; si da `false`, va al `else` (o revisa el siguiente `else if`). Con `monto = 7000` verás dos mensajes: "Acceso concedido" y "Tienes envío gratis". Cambia el `monto` a 800 y el descuento desaparece — la misma estructura decide distinto.

### Díselo a la IA

> "Esta es mi regla de negocio: [descríbela con todos los casos que se te ocurran, ej. 'si el cliente es nuevo paga la mitad del primer mes; si ya pagó 6 meses seguidos, 15% menos; si no, precio normal']. Tradúcela a if/else en JavaScript. Hazme una tabla de cada caso que cubriste y dime qué casos NO cubriste."

Esa última línea convierte la IA en tu revisor de reglas: te obliga a llenar los huecos antes de que se conviertan en bugs.

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `else` en un condicional?
   - a) Ejecuta el código siempre, sin revisar nada
   - b) Define el camino cuando la condición es falsa ✔
   - c) Repite el bloque N veces
   - d) Borra la condición

2. **[completar]** "La condición de un `if` siempre se evalúa a un ____: `true` o ____."
   - Banco: `booleano` · `false` · `número` · `texto`
   - Respuesta: booleano / false

3. **[relacionar]** Une el operador con lo que hace:
   - `===` ↔ Igualdad estricta (mismo valor y tipo)
   - `!==` ↔ Distinto estricto
   - `>` ↔ Mayor que
   - `>=` ↔ Mayor o igual que

4. **[qué hace]** `if (monto >= 5000) { mostrar("Envío gratis"); } else { mostrar("Cobra envío"); }` con `monto = 7000` — ¿qué muestra?
   - a) "Cobra envío"
   - b) "Envío gratis" ✔
   - c) Ambos mensajes
   - d) Un error

5. **[verdadero/falso]** "En JavaScript, `=` y `===` hacen exactamente lo mismo."
   - Respuesta: FALSO — `=` asigna un valor; `===` compara si dos cosas son iguales.

---

## B12 — Ciclos: repetir sin cansarse (for, while)

### Concepto

Los programas repiten tareas sin cansarse, y sin equivocarse: mandar un correo a 500 clientes, sumar 10,000 ventas, revisar cada producto. En código, la repetición se llama **ciclo** (loop), y hay dos formas principales.

El **`for`** repite un número de veces conocido, con un contador: `for (let i = 0; i < 5; i++) { ... }`. Se lee así: "inicia el contador `i` en 0; mientras `i` sea menor que 5, ejecuta el bloque; al terminar, aumenta `i` en 1". Piensa en él como "haz esto exactamente 5 veces".

El **`while`** repite mientras una condición sea verdadera, sin contador fijo: `while (condicion) { ... }`. Se usa cuando no sabes de antemano cuántas vueltas harán falta: "reintenta la conexión hasta que funcione", "sigue leyendo líneas hasta que se acabe el archivo".

Peligro real: si la condición del `while` nunca se vuelve falsa, es un **ciclo infinito** — el programa se queda atrapado repitiendo y se cuelga. El botón de cerrar deja de responder. Todos los programadores lo han sufrido, y es la broma más vieja del oficio.

Cuando dirijas a la IA, la repetición es de tus mejores aliadas: en vez de escribir 500 veces lo mismo, le dices "haz esto para cada cliente" y la IA escribe un ciclo. Tú solo necesitas leerlo y verificar el inicio (el contador), la condición (cuándo para) y que algo la modifique.

### Analogía

La **tortillería**: la máquina de tortillas sale con un ritmo fijo — "haz 100 tortillas" es un `for`, con su contador y su tope. Pero la máquina que tortea hasta que se acaba la masa es un `while`: sigue mientras haya masa, sin saber cuántas tortillas saldrán. Tú nunca le dices a la máquina "otra, otra, otra": la máquina ya sabe repetir. En código pasa igual: le describes cuánto repetir, no cada repetición.

### Cómo se ve en la práctica

```javascript
const ventas = [7000, 7900, 9100, 5400];
let total = 0;

for (let i = 0; i < ventas.length; i++) {
  total = total + ventas[i];
}
console.log("Total: $" + total); // Total: $29400

let intentos = 0;
while (intentos < 3) {
  console.log("Reintentando conexión... intento " + intentos);
  intentos = intentos + 1; // esta línea evita el ciclo infinito
}
```

Fíjate en el patrón: el `for` recorre la lista de ventas y las va sumando; el `while` reintenta hasta completar 3 intentos. Y nota la última línea del `while`: si no aumentas `intentos`, la condición jamás se vuelve falsa y el programa se cuelga. Esa línea es la "válvula de escape".

### Díselo a la IA

> "Necesito repetir esta tarea para cada [cliente/producto/fila]: [describe la tarea]. Escríbela con un ciclo. Dime cuál usaste (for o while), por qué, y enséñame cómo verificar que no terminará en un ciclo infinito."

### Ejercicios

1. **[completar]** "El ciclo ____ repite un número fijo de veces; el ciclo ____ repite mientras una condición sea verdadera."
   - Banco: `for` · `while` · `if` · `else`
   - Respuesta: for / while

2. **[opción múltiple]** ¿Qué pasa si la condición de un `while` nunca se vuelve falsa?
   - a) El programa sigue normal
   - b) Ciclo infinito: el programa se cuelga ✔
   - c) La computadora se reinicia
   - d) El ciclo se salta y no ejecuta nada

3. **[relacionar]** Une la pieza con su papel en un `for`:
   - `let i = 0` ↔ El contador inicia en 0
   - `i < 5` ↔ La condición que se revisa cada vuelta
   - `i++` ↔ Aumenta el contador en 1
   - `ventas.length` ↔ Cuántos elementos hay en la lista

4. **[qué hace]** `for (let i = 0; i < 3; i++) { console.log(i); }` — ¿qué imprime?
   - a) 1, 2, 3
   - b) 0, 1, 2 ✔
   - c) 0, 1, 2, 3
   - d) 3, 2, 1

5. **[ordenar]** Acomoda lo que pasa en cada vuelta de un `for`:
   - Pasos: inicia el contador en 0 → revisa la condición → si es verdadera, ejecuta el bloque → aumenta el contador y repite

---

## B13 — Funciones I: recetas reutilizables

### Concepto

Una **función** es un bloque de código con nombre que puedes ejecutar las veces que quieras. En vez de copiar el mismo código 10 veces, lo guardas una sola vez y lo "llamas" cada vez que lo necesitas.

En JavaScript se define así: `function saludar() { console.log("Hola"); }`. Eso solo la guarda. Para ejecutarla la **llamas**: `saludar();` — cada llamada corre el bloque de adentro. Los paréntesis vacíos significan "no necesita ingredientes" (eso llega en B14).

Los programadores tienen un principio sagrado: **DRY** (Don't Repeat Yourself, "no te repitas"). Si ves el mismo código copiado en tres lugares, es candidato a convertirse en función. El código repetido es una bomba de tiempo: cuando tengas que cambiar algo, olvidarás una de las copias y la app quedará a medias.

Dato que conecta con A11: las **librerías** son colecciones de funciones ya escritas por otros. Cuando usas `console.log(...)` o `sum(ventas)` de Python, estás llamando funciones que alguien más escribió. Reconocer "esto es una función" te deja leer cualquier código como una serie de recetas encadenadas.

Cuando dirijas a la IA, pedirle que "guarde la lógica en funciones" convierte tu proyecto en algo ordenado y mantenible. Y cuando leas lo que generó, cada `function algo() { }` te dice: aquí hay una receta con nombre, lista para usarse y reutilizarse.

### Analogía

La **tarjeta de receta de la abuela**. Cuando quieres torta de chocolate no le repites los ingredientes y los pasos cada vez: la receta ya está escrita en su tarjeta, y cada que la quieres "llamas" la receta — sacas la tarjeta y la sigues. Si mañana quieres cambiar el sabor, cambias UNA tarjeta, no las mil tortas. La función es esa tarjeta: un solo cambio, y todas las llamadas se benefician.

### Cómo se ve en la práctica

```javascript
function mostrarBienvenida() {
  const hora = new Date().getHours();
  if (hora < 12) {
    console.log("¡Buenos días, bienvenido!");
  } else {
    console.log("¡Bienvenido!");
  }
}

mostrarBienvenida(); // llama la receta por primera vez
mostrarBienvenida(); // y puedes llamarla mil veces
```

Lee la historia: hay una receta llamada `mostrarBienvenida` que decide qué mensaje mostrar según la hora (un condicional, B11). Después se llama dos veces. Si mañana cambias el mensaje de bienvenida, solo tocas la función — no cada llamada. Eso es el poder de la reutilización.

### Díselo a la IA

> "Este código repite el mismo bloque [N] veces: [pega el código]. Refactorízalo: crea una función que lo contenga, reemplaza las copias por llamadas a la función, y nómbrala con un verbo claro en inglés. Explícame qué ganamos con el cambio."

### Ejercicios

1. **[completar]** "Una función es un bloque de código con ____ que se puede ____ las veces que quieras."
   - Banco: `nombre` · `ejecutar` · `color` · `copiar`
   - Respuesta: nombre / ejecutar

2. **[verdadero/falso]** "Si ves el mismo código copiado varias veces, conviene convertirlo en función."
   - Respuesta: VERDADERO — es el principio DRY (no te repitas).

3. **[opción múltiple]** ¿Qué significa "llamar" una función?
   - a) Copiarla a otro archivo
   - b) Ejecutar su código ✔
   - c) Borrarla
   - d) Renombrarla

4. **[qué hace]** `function saludar() { console.log("Hola"); } saludar();` — ¿qué imprime?
   - a) Nada
   - b) "Hola" ✔
   - c) Un error
   - d) "saludar"

5. **[relacionar]** Une el fragmento con su papel:
   - `function saludar() {}` ↔ Define la receta
   - `saludar();` ↔ Ejecuta la receta
   - `console.log("Hola")` ↔ Una función ya hecha para mostrar
   - `// nota` ↔ Un comentario que la computadora ignora

---

## B14 — Funciones II: ingredientes que entran (parámetros) y platillo que sale (return)

### Concepto

Las funciones se vuelven poderosas cuando aceptan **ingredientes** de entrada y entregan un **resultado** de salida. Los ingredientes se llaman **parámetros**; el resultado se entrega con `return`.

```javascript
function sumar(a, b) {
  return a + b;
}
```

`a` y `b` son los parámetros: la función espera dos valores. Cuando la llamas con `sumar(3, 4)`, esos valores se llaman **argumentos**, y el `return a + b` entrega el resultado — que puedes guardar: `const r = sumar(3, 4);` deja `r` con el valor 7.

Dos cosas clave. Primera: si una función no tiene `return`, cuando la ejecutas no devuelve nada (técnicamente devuelve `undefined`, de B10) — hace su trabajo, pero no te entrega un platillo para usar fuera. Segunda: una función sin parámetros es una receta sin ingredientes: siempre sale el mismo platillo. Con parámetros, la misma receta produce platillos distintos según lo que le pases.

Lee cualquier función así: lo que está entre los paréntesis de la DEFINICIÓN son los ingredientes que espera; el `return` es el platillo que sale por la ventanilla. Si ves `function calcularTotal(precio, cantidad) { return ... }`, ya sabes que espera un precio y una cantidad, y que regresa algo.

### Analogía

La **taquería**: la receta es "taquear(proteína, salsa)". Le pasas los ingredientes (pastor, salsa verde) y te entrega el platillo terminado por la ventanilla. Si le pides un taco sin decirle la proteína, no hay taco — falta un ingrediente. Y el `return` es exactamente esa ventanilla: sin ella, la cocina hace el taco pero nunca te lo entrega.

### Cómo se ve en la práctica

```javascript
function calcularTotal(precio, cantidad, impuesto) {
  const subtotal = precio * cantidad;
  const total = subtotal + subtotal * impuesto;
  return total;
}

const pedido1 = calcularTotal(7000, 12, 0.16);
const pedido2 = calcularTotal(1500, 3, 0.16);
console.log("Pedido 1: $" + pedido1); // Pedido 1: $97440
console.log("Pedido 2: $" + pedido2); // Pedido 2: $5220
```

Una sola receta, tres ingredientes, y dos platillos distintos. Misma función, distintos argumentos, distintos resultados. Eso es reutilización con variantes: la función no sabe nada de tu negocio, solo recibe números y los procesa.

### Díselo a la IA

> "Crea una función que calcule [lo que necesitas, ej. 'el precio de un pedido con varios productos y su IVA']. Defínela con parámetros claros, devuelve el resultado con return, y dame 3 ejemplos de llamadas con resultados distintos para que yo verifique que hace lo correcto."

### Ejercicios

1. **[completar]** "Los ____ son los ingredientes que entran a la función; el ____ es el platillo que sale."
   - Banco: `parámetros` · `return` · `nombre` · `error`
   - Respuesta: parámetros / return

2. **[opción múltiple]** ¿Qué hace `return` en una función?
   - a) Detiene todo el programa
   - b) Entrega el resultado para usarse fuera de la función ✔
   - c) Imprime el resultado en pantalla
   - d) Agrega un parámetro nuevo

3. **[qué hace]** Si `function sumar(a, b) { return a + b; }`, ¿cuánto vale `const r = sumar(2, 5)`?
   - a) "25"
   - b) 7 ✔
   - c) "2 + 5"
   - d) Un error

4. **[verdadero/falso]** "Una función sin `return` devuelve el número 0."
   - Respuesta: FALSO — devuelve `undefined`: no entrega ningún valor (B10).

5. **[relacionar]** Une el término con su papel:
   - Parámetro ↔ El ingrediente que la receta espera
   - Argumento ↔ El valor concreto que le pasas al llamarla
   - `return` ↔ El platillo que entrega por la ventanilla
   - Función ↔ La receta

---

## B15 — Listas y arreglos: muchas cosas en una sola variable

### Concepto

Hasta ahora cada variable guardaba una sola cosa. Un **array** (arreglo) guarda una **lista ordenada** de cosas en una sola variable: `const productos = ["tenis", "playera", "gorra"];`. Los elementos van entre corchetes, separados por comas.

Para leer un elemento usas su **posición** (índice): `productos[0]` es "tenis". Y aquí está la trampa favorita del oficio: **los índices empiezan en 0, no en 1**. `productos[1]` es el segundo. Pedir `productos[3]` cuando solo hay 3 elementos es un error clásico — el famoso "off by one" (equivocarte por uno). Ese error es tan común que tiene nombre propio.

Dos ayudas constantes: `productos.length` te dice cuántos elementos hay, y `productos.push("chamarra")` agrega uno al final. Con `length` y un ciclo (B12) recorres toda la lista sin saber de antemano su tamaño.

Los arrays son el corazón de los datos: un catálogo, una lista de clientes, los mensajes de un chat — todo es una lista. Cuando le pidas a la IA "dame un listado", casi siempre estará trabajando con un array por detrás. Y la combinación estrella llega en B16: listas de objetos.

### Analogía

Los **casilleros numerados de un gimnasio**. El casillero 0, el 1, el 2 — cada uno guarda una cosa, y los conoces por su número. El conjunto de casilleros es el array; el número es el índice; y "casilleros.length" es cuántos hay. Si agregas un casillero al final (push), la fila crece pero los números de los que ya estaban no cambian.

### Cómo se ve en la práctica

```javascript
const carrito = ["tenis", "playera", "gorra", "calcetines"];

console.log(carrito[0]);      // "tenis" — el primero
console.log(carrito[2]);      // "gorra"
console.log(carrito.length);  // 4 — cuántos hay

carrito.push("chamarra");     // agrega al final

for (let i = 0; i < carrito.length; i++) {
  console.log("Artículo " + i + ": " + carrito[i]);
}
```

Fíjate en la combinación: un ciclo (B12) recorre el array usando `length` como tope y `i` como índice. Imprime "Artículo 0: tenis", "Artículo 1: playera", etc. Ese patrón — "recorrer una lista y hacer algo con cada elemento" — es probablemente el más repetido de toda la programación.

### Díselo a la IA

> "Necesito trabajar con una lista de [elementos]. Muéstrame cómo declararla como array, cómo agregar y quitar elementos, cómo obtener su tamaño, y cómo recorrerla con un ciclo para [hacer algo con cada uno]. Dame un ejemplo completo."

### Ejercicios

1. **[opción múltiple]** ¿En qué posición está el primer elemento de un array?
   - a) 1
   - b) 0 ✔
   - c) -1
   - d) No tiene posición

2. **[qué hace]** `const lista = ["a", "b", "c"]; console.log(lista[1]);` — ¿qué imprime?
   - a) "a"
   - b) "b" ✔
   - c) "c"
   - d) 1

3. **[completar]** "La propiedad ____ te dice cuántos elementos tiene un array, y el método ____ agrega uno al final."
   - Banco: `length` · `push` · `pop` · `width`
   - Respuesta: length / push

4. **[relacionar]** Une el fragmento con lo que hace:
   - `lista[0]` ↔ El primer elemento
   - `lista.length` ↔ Cuántos elementos hay
   - `lista.push("x")` ↔ Agregar "x" al final
   - `lista[2]` ↔ El tercer elemento

5. **[verdadero/falso]** "Los índices de un array empiezan en 1, como las posiciones de una carrera."
   - Respuesta: FALSO — empiezan en 0, y equivocarse por uno es el famoso "off by one".

---

## B16 — Objetos: fichas con datos (nombre, precio, teléfono…)

### Concepto

Las variables guardan un valor y los arrays guardan listas. Los **objetos** guardan **datos agrupados** de una misma cosa: un producto con su nombre, precio y disponibilidad; un cliente con su nombre, correo y teléfono. Un objeto es una ficha con campos.

```javascript
const producto = {
  nombre: "Tenis",
  precio: 1500,
  disponible: true
};
```

Los campos (claves) y sus valores van separados por dos puntos: `clave: valor`. Para leer un valor usas el punto: `producto.nombre` te da "Tenis". (También funciona con corchetes: `producto["nombre"]`, y a veces lo verás así.)

Y aquí está la combinación que mueve el mundo de los datos: **un array de objetos**. Un catálogo es una lista donde cada elemento es la ficha de un producto. Una tabla de clientes es una lista de fichas. Cada objeto es un renglón, cada clave es una columna (esto lo conectas directo con las bases de datos de B26).

Cuando la IA te muestre datos de tu negocio, los verás así: listas de objetos. Saber leer `producto.precio` o `cliente.correo` es saber leer la información misma de tu empresa.

### Analogía

La **agenda de tarjetas del taller mecánico**: una caja con fichas, y en cada ficha los campos del cliente — nombre, teléfono, modelo, fecha de la última visita. El objeto es la ficha; los campos son las claves; los datos escritos son los valores. Y toda la caja de fichas es el array de objetos. Sacar la ficha de un cliente y leer "nombre" y "teléfono" es exactamente `cliente.nombre` y `cliente.telefono`.

### Cómo se ve en la práctica

```javascript
const alumno = {
  nombre: "Ray Fernández",
  edad: 34,
  pagoAlDia: true,
  correo: "ray@ejemplo.com"
};

console.log(alumno.nombre);      // Ray Fernández
console.log(alumno["correo"]);   // ray@ejemplo.com

const catalogo = [
  { nombre: "Tenis", precio: 1500 },
  { nombre: "Playera", precio: 350 },
  { nombre: "Gorra", precio: 200 }
];

for (let i = 0; i < catalogo.length; i++) {
  console.log(catalogo[i].nombre + " — $" + catalogo[i].precio);
}
```

Lee la segunda parte con calma: hay una lista (array) de tres fichas (objetos). Un ciclo (B12) la recorre, y en cada vuelta accede a `.nombre` y `.precio`. Ese patrón — "recorrer una lista de fichas y leerles campos" — es el más común en apps de catálogos, clientes y pedidos.

### Díselo a la IA

> "Necesito modelar [mi entidad: cliente, producto, pedido…] como objeto en JavaScript. Lista los campos que me conviene tener, el tipo de cada uno (string, number, boolean), y un ejemplo real. Después muéstrame cómo se ve una lista de 3 de estos objetos."

### Ejercicios

1. **[completar]** "En un objeto, la ____ es el nombre del campo y el ____ es el dato guardado."
   - Banco: `clave` · `valor` · `índice` · `archivo`
   - Respuesta: clave / valor

2. **[opción múltiple]** ¿Cómo accedes al campo `nombre` de un objeto `persona`?
   - a) `persona[nombre]`
   - b) `persona.nombre` ✔
   - c) `persona -> nombre`
   - d) `get persona.nombre`

3. **[qué hace]** `const p = { nombre: "Tenis", precio: 1500 }; console.log(p.precio);` — ¿qué imprime?
   - a) Tenis
   - b) 1500 ✔
   - c) Un error
   - d) precio

4. **[relacionar]** Une el símbolo con su significado:
   - `{ }` ↔ Objeto (ficha con campos)
   - `.campo` ↔ Acceder al valor del campo
   - `[ ]` ↔ Lista (array)
   - `:` ↔ Separa la clave del valor

5. **[verdadero/falso]** "Un array de objetos sirve para modelar un catálogo de productos."
   - Respuesta: VERDADERO — es la estructura de datos más usada del mundo real.

---

## B17 — JSON: el formato en el que viajan los datos por internet

### Concepto

**JSON** (JavaScript Object Notation, "notación de objetos de JavaScript") es un formato de texto para representar datos. Se parece muchísimo a un objeto de B16, pero con reglas más estrictas: las claves SIEMPRE van entre comillas dobles, no admite funciones ni comentarios, y todo es texto plano.

¿Por qué existe? Porque cuando una app le pide datos a un servidor, necesita un idioma que AMBOS entiendan — y que cualquier sistema del mundo pueda abrir, sin importar si está hecho con JavaScript, Python o Java. Ese idioma estándar es JSON. Respuestas de APIs (B25), archivos de configuración, exportaciones de datos: si algo viaja por internet como datos, casi seguro viaja en JSON.

En JavaScript tienes dos herramientas: `JSON.stringify(objeto)` convierte un objeto en texto JSON (para enviarlo), y `JSON.parse(texto)` convierte texto JSON en objeto real (para usarlo). Los verás en toda app que hable con un servidor.

Dato memorable: JSON lo popularizó **Douglas Crockford** a principios de los 2000. No inventó un lenguaje nuevo — tomó la forma de los objetos de JavaScript, la estandarizó, y el mundo entero la adoptó. Hoy casi todo el tráfico de datos de internet habla JSON.

### Analogía

El **contenedor estándar de un barco de carga**. Puedes meter adentro cualquier mercancía, pero el contenedor siempre tiene las mismas medidas y reglas, así cualquier puerto del mundo lo puede recibir, abrir y entender. JSON es el contenedor de los datos: el contenido cambia (tus productos, tus clientes), pero el formato es siempre el mismo, y cualquier sistema sabe cómo abrirlo.

### Cómo se ve en la práctica

```javascript
// Un objeto en JavaScript
const producto = { nombre: "Tenis", precio: 1500, disponible: true };

// Convertido a texto JSON (lo que viaja por internet)
const textoJSON = JSON.stringify(producto);
// '{"nombre":"Tenis","precio":1500,"disponible":true}'

// El texto JSON recibido se convierte de vuelta en objeto
const objetoDeNuevo = JSON.parse(textoJSON);
console.log(objetoDeNuevo.nombre); // Tenis
```

Compara los dos formatos de la pantalla: el objeto usa claves sin comillas, el JSON las lleva siempre con `"`. Esa diferencia es sutil pero crucial: el JSON es texto estricto que cualquier sistema puede leer; el objeto es algo que vive dentro del JavaScript.

### Díselo a la IA

> "Tengo estos datos: [pega tu estructura]. Conviértelos a JSON válido, revisa que las claves estén entre comillas dobles y que no haya comentarios, y pásame también la línea de JSON.stringify para usarlos en JavaScript."

### Ejercicios

1. **[verdadero/falso]** "En JSON, las claves deben ir entre comillas dobles."
   - Respuesta: VERDADERO — es la regla que lo hace entendible para cualquier sistema.

2. **[opción múltiple]** ¿Para qué sirve JSON?
   - a) Estilizar páginas web
   - b) Intercambiar datos entre sistemas en formato de texto estándar ✔
   - c) Conectar cables de red
   - d) Editar imágenes

3. **[relacionar]** Une la pieza con lo que hace:
   - `JSON.stringify()` ↔ Convierte un objeto a texto JSON
   - `JSON.parse()` ↔ Convierte texto JSON a objeto
   - `"clave"` ↔ Siempre entre comillas dobles
   - `{ }` ↔ La estructura de los datos

4. **[completar]** "Cuando una app le pide datos a un servidor, la respuesta típicamente viaja en formato ____."
   - Banco: `JSON` · `PDF` · `MP3` · `ZIP`
   - Respuesta: JSON

5. **[qué hace]** `JSON.parse('{"precio": 1500}')` — ¿qué devuelve?
   - a) Un error
   - b) Un objeto con la clave `precio` igual a 1500 ✔
   - c) El texto "1500"
   - d) El número 1500 suelto

---

## B18 — Comentarios: las notas que el código ignora pero los humanos leen

### Concepto

Los **comentarios** son texto que vives dentro del código pero que la computadora ignora por completo: solo los leen los humanos. En JavaScript se escriben con `//` (una línea) o `/* ... */` (varias líneas); en Python, con `#`. Puedes poner lo que quieras: no afecta el programa en nada.

¿Para qué sirven si la computadora no los lee? Para el humano del futuro — y ese humano del futuro muy probablemente eres tú, dentro de tres meses, cuando vuelvas a un proyecto sin recordar nada. El código explica el QUÉ (qué hace cada línea); el comentario bueno explica el PORQUÉ: por qué se hizo así, qué regla de negocio lo obliga, qué se espera de esa parte.

Hay comentarios malos y buenos. Malo: `// suma a y b` sobre una línea `a + b` — repite lo obvio. Bueno: `// El impuesto se redondea a centavos porque el recibo debe cuadrar con el SAT` — cuenta algo que el código no dice y que tú necesitas saber.

En la era de la IA esto cambia de nivel: cuando la IA genera código, pedirle que lo comente bien es una de las instrucciones más valiosas del mundo. Y tú también los usas en la dirección inversa: "esta parte NO la toques" se escribe en un comentario, y hasta la IA respeta las marcas claras.

### Analogía

Las **notas en la caja de recetas de tu abuela**: "esta masa, si hace frío, déjala reposar 10 minutos más". La masa no lee la nota — pero tú sí, y sin ella la receta se arruina cada invierno. El comentario es para el humano del futuro, nunca para la máquina.

### Cómo se ve en la práctica

```javascript
// Precio con IVA del 16% — NO tocar: lo usa el reporte mensual
const PRECIO_CON_IVA = 1.16;

function calcularIVA(monto) {
  // El impuesto se redondea a centavos para que el recibo cuadre
  return Math.round(monto * PRECIO_CON_IVA * 100) / 100;
}
```

Fíjate en lo que cuentan los comentarios: el primero marca una zona protegida ("no tocar") y la razón; el segundo explica una decisión rara (redondear) que sin el comentario parecería un error. Eso es un comentario de verdad: cuenta lo que el código no puede decir.

### Díselo a la IA

> "Agrega comentarios a este código: [pega el código]. Deben explicar el PORQUÉ (intención, reglas de negocio, decisiones raras) y NO repetir lo que el código ya dice. Marca con `// NO TOCAR` las partes que no se deben cambiar."

### Ejercicios

1. **[opción múltiple]** ¿Quién lee los comentarios del código?
   - a) La computadora, para optimizar
   - b) Los humanos ✔
   - c) Nadie, no sirven para nada
   - d) Solo el navegador

2. **[completar]** "En JavaScript un comentario de una línea empieza con ____; en Python, con ____."
   - Banco: `//` · `#` · `/*` · `--`
   - Respuesta: // / #

3. **[qué hace]** Este código: `// No borrar: lo pide contabilidad` y abajo `const topDescuento = 0.30;` — ¿qué hace la primera línea?
   - a) Da un error de sintaxis
   - b) Nada: es una nota para humanos, la computadora la ignora ✔
   - c) Descuenta 0.30 al total
   - d) Bloquea la línea siguiente

4. **[verdadero/falso]** "Los comentarios ralentizan el programa porque la computadora los procesa."
   - Respuesta: FALSO — la computadora los ignora por completo; solo los leen los humanos.

5. **[relacionar]** Une el símbolo con su uso:
   - `//` ↔ Comentario de una línea en JavaScript
   - `#` ↔ Comentario en Python
   - `/* ... */` ↔ Comentario de varias líneas en JS
   - "Explica el porqué" ↔ El mejor uso de un comentario

---

## B19 — Errores I: leer un mensaje de error sin entrar en pánico

### Concepto

Los **mensajes de error** son la computadora diciéndote qué no entendió o qué se rompió. Están en inglés, se ven feos y salen con un montón de ruido — pero casi siempre dicen exactamente dónde está el problema. Aprender a leerlos es de las habilidades que más tiempo te ahorran.

La anatomía típica: el **nombre** del error (`ReferenceError`, `TypeError`, `SyntaxError`...), una **descripción** ("x is not defined"), y el **stack trace** (la pila): una lista de `at ...` con archivos y líneas que muestra el camino completo — dónde empezó la cadena de llamadas y por dónde llegó al punto que falló.

Lo primero que debes buscar: la línea que dice `at algo (archivo.js:12:34)` — ese es el archivo y la línea exacta donde el programa se quejó. Lo segundo: la primera línea del mensaje, que casi siempre es la causa. El resto es ruido.

Dato tranquilizador: no necesitas entender TODO el mensaje. Tu superpoder de director es copiar el mensaje completo y pegárselo a la IA con el contexto ("esto pasó cuando hice X"). La IA lee errores a velocidad máquina; tú solo necesitas saber que ese texto vale oro y que nunca, nunca lo ignores.

### Analogía

La **luz del "check engine" del coche**. La primera vez da miedo, pero es información: no es que el coche esté enojado, es que hay algo específico que revisar. El conductor que pega el código de error en Google (o se lo da a la IA) llega a su destino; el que cierra los ojos y sigue manejando se queda varado. El error no es el enemigo: es el mapa del problema.

### Cómo se ve en la práctica

```
ReferenceError: precio is not defined
    at calcularTotal (checkout.js:12:9)
    at procesarPedido (checkout.js:28:5)
    at <anonymous> (app.js:3:1)
```

Lee la primera línea: "la variable `precio` no está definida". Luego el stack: el problema está en `checkout.js`, línea 12; esa función (`calcularTotal`) fue llamada desde `procesarPedido` en la línea 28; y esa desde `app.js` línea 3. Con esos tres datos, abres el archivo en la línea 12 y buscas por qué `precio` no existe ahí — casi siempre porque se llamó mal o se escribió distinto.

### Díselo a la IA

> "Este es el error que me sale al correr mi programa: [pega el mensaje completo]. No entiendo nada de lo que dice. Explícame en español qué falló, en qué archivo y línea exacta, qué línea de mi código lo causa y cómo lo arreglo."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la información más útil de un mensaje de error?
   - a) Los colores de la terminal
   - b) El archivo y la línea donde falló ✔
   - c) La hora en que falló
   - d) El tamaño de la pantalla

2. **[completar]** "El ____ trace es la pila de llamadas: dónde empezó el problema y por dónde llegó."
   - Banco: `stack` · `error` · `log` · `debug`
   - Respuesta: stack

3. **[qué hace]** `ReferenceError: precio is not defined at checkout.js:12` — ¿qué te dice?
   - a) Que la línea 12 funciona perfecto
   - b) Que en la línea 12 de checkout.js se usa la variable `precio`, que no existe ✔
   - c) Que la computadora no tiene memoria
   - d) Que el archivo se llama distinto

4. **[verdadero/falso]** "Los mensajes de error están para asustarte: si no entiendes el primero, el programa está roto para siempre."
   - Respuesta: FALSO — son pistas técnicas; casi siempre señalan archivo y línea exacta.

5. **[ordenar]** Pasos al recibir un error:
   - Pasos: lee la primera línea del mensaje → anota el archivo y la línea que señala → copia el mensaje completo → pégalo a la IA con contexto → aplica el arreglo y vuelve a probar

---

## B20 — Errores II: sintaxis vs lógica vs runtime

### Concepto

Los errores no son todos iguales, y saber cuál tienes enfrente te dice qué tan grave es. Hay tres familias.

**Sintaxis**: la "gramática" del código está mal — falta un paréntesis, una coma, una llave. El programa ni siquiera arranca; el motor te avisa de inmediato señalando la línea. Es el más fácil de arreglar: es como una carta con un error de puntuación, se ve al primer vistazo.

**Lógica**: el código corre perfecto, sin un solo error, pero hace lo incorrecto — restaste cuando debías sumar, la condición quedó invertida. Nadie te avisa: solo lo notas cuando el resultado no es lo que esperabas. Es el más traicionero, porque el programa "funciona" y puede correr meses con el error adentro.

**Runtime** (de ejecución): truena a mitad de camino, cuando ya está corriendo — leer una variable que no existe, conectarse a un servidor apagado, dividir entre cero. El programa arranca bien y se cae después, y el mensaje aparece en el peor momento.

Para el director de IA esto define tu papel: la IA arregla la sintaxis en segundos. Los errores de runtime también los diagnostica rápido. Pero los de **lógica son territorio tuyo**: son reglas de negocio mal traducidas, y solo tú sabes cómo debería comportarse el sistema. "El descuento se aplica al revés" es información que solo tú tienes.

### Analogía

En una **carta**: el error de sintaxis es la ortografía y la puntuación — se nota de inmediato y nadie la lee mal dos veces. El error de lógica es haber escrito "no vender" cuando querías "vender" — la carta está perfectamente escrita, pero hace lo contrario de lo que pediste. Y el error runtime es el cartero que llega a una casa que ya no existe: todo iba bien hasta el último momento.

### Cómo se ve en la práctica

```javascript
// 1) SINTAXIS — falta un paréntesis: el programa no arranca
// const total = calcularTotal(7000, 12;

// 2) LÓGICA — corre perfecto, pero resta en vez de sumar
const saldo = pagos - cobros;  // ✘ debería ser pagos + cobros

// 3) RUNTIME — truena en ejecución si usuario no existe
console.log(usuario.nombre);   // TypeError si usuario es null
```

El primero se ve mal desde lejos y el motor lo señala al instante. El segundo no da ningún error: corre, y el saldo sale mal en silencio. El tercero pasa el arranque pero explota cuando el dato no está. Reconocer a cuál pertenece tu síntoma te dice por dónde empezar.

### Díselo a la IA

> "Mi programa corre pero hace algo incorrecto: [describe el comportamiento incorrecto y el esperado]. Revisa el código, dime si es un error de lógica, señala la línea donde la intención y el código no coinciden, y corrígelo."

### Ejercicios

1. **[relacionar]** Une el tipo de error con su síntoma:
   - Sintaxis ↔ El programa ni arranca: falta una coma o paréntesis
   - Lógica ↔ Corre perfecto pero hace lo incorrecto
   - Runtime ↔ Truena a mitad de la ejecución

2. **[completar]** "El error más traicionero es el de ____: nadie te avisa, solo notas que el resultado está ____."
   - Banco: `lógica` · `mal` · `sintaxis` · `rápido`
   - Respuesta: lógica / mal

3. **[opción múltiple]** Falta un paréntesis de cierre en una línea. ¿Qué tipo de error es?
   - a) De lógica
   - b) De sintaxis ✔
   - c) De runtime
   - d) De red

4. **[qué hace]** `const saldo = pagos - cobros;` cuando la regla del negocio es `saldo = pagos + cobros` — ¿qué pasa?
   - a) El programa no arranca
   - b) Corre sin errores, pero el saldo sale mal ✔
   - c) Se cae en la primera ejecución
   - d) Un mensaje de error lo explica

5. **[verdadero/falso]** "La IA puede detectar sola los errores de lógica de negocio porque conoce tu negocio."
   - Respuesta: FALSO — la lógica de negocio es tuya; tú le describes cómo debería comportarse el sistema.

---

## B21 — ¿Qué es un bug? (y la polilla real de 1947)

### Concepto

Un **bug** es un defecto en el software: el programa hace algo que no debía, o no hace lo que debía. Puede venir de un error de lógica (B20), de un caso que nadie previó, de un dato raro, de una suposición equivocada. No es un error de "que se cayó": es el comportamiento incorrecto que nadie notó.

La historia que le dio nombre es legendaria: en **1947**, en la computadora **Harvard Mark II**, el equipo de **Grace Hopper** encontró una **polilla real** atrapada en un relevador. La pegaron con cinta al libro de bitácora y anotaron: "First actual case of bug being found" — "primer caso real de bug encontrado". La palabra "bug" (bicho) ya se usaba para fallas técnicas, pero esa polilla pegada en un cuaderno la convirtió en leyenda. Esa bitácora todavía existe en un museo.

¿Dónde viven los bugs? Casi siempre en los **casos límite**: "¿qué pasa si el cliente compra 0 artículos?", "¿si escribe la contraseña con espacios?", "¿si paga exactamente con la tarjeta que acaba de vencer?", "¿si la lista está vacía?". El código funciona perfecto con datos normales y explota (o se comporta mal) justo en el caso raro.

Para ti, director de IA, la cacería de bugs es una habilidad de imaginación y de conocimiento de tu negocio, no de código: describir los "¿y si...?" que la IA no ve sola. Cada caso límite que imagines es un bug que no va a existir.

### Analogía

Una **receta perfecta que falla solo el día de lluvia**. No fue el cocinero ni el horno: fue un caso que nadie imaginó — la masa reacciona a la humedad. El bug es eso: no un error del cocinero, sino el caso que nadie previó. Por eso los bugs más caros del mundo han venido de datos que "nadie pensó que pasaría".

### Cómo se ve en la práctica

```javascript
function darDescuento(cantidad) {
  return cantidad >= 5 ? 0.15 : 0;
}

// Caso límite: el usuario escribe "5" como texto (del formulario)
darDescuento("5"); // "5" >= 5 es true... pero el 15% se aplica raro
```

El código funciona perfecto con números. El bug aparece cuando llega texto donde se esperaba número — un caso límite clásico de formularios. La solución sería verificar el tipo antes de comparar (recuerdas B10: `"5"` y `5` no son lo mismo). Ese es el patrón: funciona hasta que llega el dato raro.

### Díselo a la IA

> "Revisa este código buscando bugs, especialmente en casos límite: entradas vacías, valores extremos, texto en vez de número, cero, datos que no existen. Hazme una tabla: caso → qué hace el código hoy → qué debería hacer → cómo corregirlo."

### Ejercicios

1. **[verdadero/falso]** "En 1947 encontraron una polilla real atrapada en una computadora y la pegaron a la bitácora."
   - Respuesta: VERDADERO — pasó en la Harvard Mark II, con Grace Hopper.

2. **[completar]** "Los bugs se esconden casi siempre en los casos ____: entradas vacías, valores extremos, datos raros."
   - Banco: `límite` · `normales` · `felices` · `bonitos`
   - Respuesta: límite

3. **[opción múltiple]** ¿Qué es un bug?
   - a) Un virus de internet
   - b) Un defecto del software: hace algo que no debía ✔
   - c) Una actualización de seguridad
   - d) Un tipo de librería

4. **[relacionar]** Une el concepto con su historia:
   - Bug ↔ Defecto del software
   - 1947 ↔ El año de la polilla documentada
   - Grace Hopper ↔ La programadora que la encontró
   - Caso límite ↔ Donde se esconden los bugs

5. **[ordenar]** Cómo se resuelve un bug:
   - Pasos: imagina el caso raro → reproduce el error → confirma el comportamiento incorrecto → descríbelo a la IA → corrige y vuelve a probar

---

## B22 — Librerías y frameworks: la diferencia entre piezas y esqueletos

### Concepto

Ya conoces las **librerías** desde A11: piezas de código listo que tú (o la IA) llaman cuando las necesitan — una para fechas, otra para pagos, otra para gráficas. La regla clave: con una librería, **tu código tiene el control**; tú decides cuándo usarla.

Los **frameworks** son otro nivel. No son una pieza que tú tomas: son el **esqueleto** de todo el proyecto. Dictan la estructura, las convenciones y el flujo — y la regla se invierte: **el framework tiene el control y te llama a ti**. Ejemplos que verás mucho: **React** (interfaces web), **Vue** (lo mismo, distinto estilo), **Express** (servidores en Node), **Django** (servidores en Python).

La regla de oro para distinguirlos se llama **inversión de control**: con una librería, tú llamas a las funciones. Con un framework, él decide cuándo ejecutar el código que le diste. "Librería: tú la usas. Framework: él te usa."

¿Por qué te importa? Cuando dirijas a la IA, la conversación va a ser "¿lo hacemos con React o con HTML normal?" — y entender la diferencia te deja opinar con criterio. Además, cuando la IA diga "el framework hace X por ti", sabrás que no está siendo vaga: es que hay un esqueleto cargando el trabajo pesado.

### Analogía

La librería es tu **caja de herramientas**: tomas el desatornillador cuando lo necesitas y decides exactamente qué hacer con él. El framework es la **estructura de una casa en obra**: las paredes, puertas y ventanas ya vienen decididas; tu trabajo es llenar cada espacio, no preguntarte dónde van las paredes. Con herramientas decides todo; con el esqueleto, te adaptas a lo que ya está armado — y por eso construyes más rápido.

### Cómo se ve en la práctica

```javascript
// Con una LIBRERÍA: TU código llama a la pieza
const fecha = moment(fechaISO).format("DD/MM/YYYY");

// Con un FRAMEWORK: el framework llama a TU componente
function TarjetaProducto(props) {
  return <div>{props.nombre} — ${props.precio}</div>;
}
// React decide cuándo y cómo pintar tu TarjetaProducto
```

En el primer caso, tú usas `moment` como herramienta. En el segundo, escribes un componente y React lo ejecuta cuando corresponde. La diferencia es sutil en el código, pero cambia todo el flujo del proyecto: con el framework, tú escribes piezas que él encaja; con la librería, tú armas todo y solo tomas prestadas funciones.

### Díselo a la IA

> "Voy a construir [mi app] y estoy entre [opción A] y [opción B]. Explícame cuál es una librería y cuál un framework, qué tan difícil es cada una para alguien nuevo, y cuál me conviene para [mi objetivo]. No decidas tú solo: dame pros, contras y tu recomendación razonada."

### Ejercicios

1. **[completar]** "Con una librería, tú ____ la pieza cuando la necesitas; con un framework, el framework ____ a ti."
   - Banco: `llamas` · `te llama` · `olvidas` · `pagas`
   - Respuesta: llamas / te llama

2. **[relacionar]** Une el concepto con su definición:
   - Librería ↔ Pieza de código que tú tomas cuando la necesitas
   - Framework ↔ Esqueleto que dicta la estructura del proyecto
   - React ↔ Un framework de interfaces
   - moment ↔ Una librería de fechas

3. **[opción múltiple]** ¿Cuál es la diferencia clave entre ambos?
   - a) La librería es siempre más cara
   - b) Con la librería tu código controla; con el framework, él controla ✔
   - c) La librería solo sirve para diseño
   - d) No hay ninguna diferencia

4. **[verdadero/falso]** "Un framework solo sirve para proyectos gigantes de empresas."
   - Respuesta: FALSO — hay frameworks ligeros perfectos para proyectos pequeños y medianos.

5. **[qué hace]** En React, `function TarjetaProducto(props) { return <div>{props.nombre}</div>; }` — ¿qué es esto?
   - a) Un error de sintaxis
   - b) Un componente que el framework pintará cuando corresponda ✔
   - c) Una tabla de una base de datos
   - d) Un comando de terminal

---

## B23 — Frontend, Backend y Base de datos: las tres capas de toda app

### Concepto

Toda app moderna — desde tu página hasta Netflix — tiene **tres capas**. Entender cuál es cuál te dice qué estás viendo y dónde está cada problema.

El **frontend** es lo que el usuario ve y toca: los botones, las tarjetas, los colores. Vive en el navegador y está hecho de HTML (B7), CSS (B8) y JavaScript (B3). Es la cara.

El **backend** es la lógica que no se ve: recibe lo que el usuario hizo, lo valida, lo procesa y decide. Vive en un servidor (A20, A22) y puede estar hecho con Node.js, Python, Java. Es el cerebro: el frontend le dice "compró esto" y él responde "ok, cobra, guarda, confirma".

La **base de datos** (a fondo en B26) es el almacén: donde viven los datos de verdad — clientes, pedidos, precios. El backend le pregunta y le ordena con SQL (B5). Es la memoria permanente.

El flujo clásico: el frontend pide → el backend valida y consulta la base de datos → la base responde → el backend arma la respuesta → el frontend la muestra. Como director de IA, cada "está mal" que detectes pertenece a una capa: un color malo es frontend; "no guarda el pedido" puede ser backend o base de datos. Y al pedirle un arreglo a la IA, decirle la capa la enfoca al instante.

### Analogía

El **restaurante completo**: el frontend es el comedor con su menú — lo que el cliente ve y toca. El backend es la cocina — donde se procesa todo y no se ve. La base de datos es el refrigerador y la despensa — donde se guarda todo lo que hay. El mesero (la API, B25) conecta el comedor con la cocina. Si el cliente dice "la sopa está fría", nadie va a cambiar la mesa (frontend): hay que ir a la cocina o revisar el refri.

### Cómo se ve en la práctica

```
Cliente toca "Comprar" en el navegador     ← FRONTEND
        ↓ petición HTTP (A19)
Servidor procesa la orden y cobra           ← BACKEND
        ↓ consulta SQL (B5)
Base de datos guarda el pedido              ← BASE DE DATOS
        ↓ respuesta
El navegador muestra "¡Pedido confirmado!"  ← FRONTEND
```

Fíjate en el viaje redondo: empieza en el frontend, baja al backend, toca la base de datos, y sube de vuelta hasta la pantalla. Cada capa hace UNA cosa. Cuando alguien te diga "el sistema no funciona", esa secuencia es tu mapa de búsqueda: ¿en qué capa se cortó el viaje?

### Díselo a la IA

> "Mi app tiene un problema: [describe el síntoma]. Quiero saber en qué capa está el problema (frontend, backend o base de datos), qué archivo habría que tocar, y qué debo decirle a la IA para que lo arregle."

### Ejercicios

1. **[relacionar]** Une la capa con su papel:
   - Frontend ↔ Lo que el usuario ve y toca
   - Backend ↔ La lógica que procesa en el servidor
   - Base de datos ↔ El almacén de datos
   - Navegador ↔ Donde corre el frontend

2. **[completar]** "El ____ es lo que se ve en el navegador; el ____ corre en un servidor y procesa las peticiones."
   - Banco: `frontend` · `backend` · `firewall` · `motor`
   - Respuesta: frontend / backend

3. **[opción múltiple]** Un botón no responde al hacer clic. ¿En qué capa buscarías primero?
   - a) Backend
   - b) Frontend ✔
   - c) Base de datos
   - d) El sistema operativo

4. **[ordenar]** Flujo de un pedido:
   - Pasos: el usuario toca "Comprar" en el navegador → el backend recibe y valida → el backend consulta la base de datos → la base de datos guarda el pedido → el navegador muestra "Pedido confirmado"

5. **[verdadero/falso]** "La base de datos vive dentro del navegador, junto al frontend."
   - Respuesta: FALSO — es una capa aparte, normalmente en sus propios servidores.

---

## B24 — ¿Qué es un algoritmo? (la receta paso a paso)

### Concepto

Un **algoritmo** es una secuencia ordenada de pasos para resolver un problema. Eso es todo — y significa que ya conoces cientos: una receta de cocina, las indicaciones para llegar a un lugar, los pasos para sacar tu INE. Los seres humanos somos máquinas de algoritmos; solo que no les decíamos así.

En software, un algoritmo bien hecho tiene tres ingredientes: **pasos** en orden, **decisiones** (los condicionales de B11: "si pasa X, haz Y") y **repeticiones** (los ciclos de B12: "haz esto para cada uno"). Se puede describir sin escribir una sola línea de código — eso se llama **pseudocódigo**: instrucciones claras que cualquier humano entiende y que luego la IA convierte a código.

Dato memorable: los algoritmos son más viejos que las computadoras. **Euclides**, hace más de 2,300 años, describió su famoso algoritmo para calcular el máximo común divisor — sin que existiera una sola computadora en el planeta. La lógica vino primero; las máquinas llegaron después.

Para ti, director de IA, el algoritmo es TU parte del trabajo: describir el proceso en pasos claros, con sus decisiones y repeticiones, es exactamente el input que la IA necesita. "Toma cada pedido, si supera $1000 aplícale 15%, suma todo, mándalo al correo" — tú pones el algoritmo en palabras, la IA lo vuelve código.

### Analogía

La **ruta de tu casa al mercado**: pasos en orden (salir, caminar dos cuadras, doblar a la izquierda), una decisión (si la avenida está cerrada, dar la vuelta), y una repetición (lo haces cada semana igual). Eso es un algoritmo que llevas años ejecutando sin saberlo. La única diferencia es que la computadora no puede improvisar: necesita que le escribas la ruta completa, con todos los "si" y todos los "repite".

### Cómo se ve en la práctica

```
PSEUDOCÓDIGO: calcular el descuento de un carrito
1. Toma la lista de productos del carrito
2. Suma todos los precios → subtotal
3. SI subtotal >= $1000:
     descuento = 15% del subtotal
   SI NO:
     descuento = 0
4. total = subtotal - descuento
5. Muestra el total y el descuento
```

Ese texto no es código de ningún lenguaje: es el algoritmo, describible por cualquier persona. Nota las decisiones (el SI) y los pasos en orden. Cuando la IA lo convierta a JavaScript, cada línea tendrá un equivalente directo. Practicar esta forma de pensar es el entrenamiento base de director.

### Díselo a la IA

> "Necesito un algoritmo para [describe tu proceso de negocio]. Escríbelo primero en pseudocódigo paso a paso, con pasos, decisiones y repeticiones claras. Revísalo conmigo, y solo cuando te diga 'OK' conviértelo a [lenguaje]. No lo conviertas antes."

Ese "solo cuando te diga OK" es importante: separa el diseño (tú) del código (la IA), y te permite revisar la lógica antes de que se vuelva incomprensible.

### Ejercicios

1. **[completar]** "Un algoritmo es una ____ ordenada de pasos para ____ un problema."
   - Banco: `secuencia` · `resolver` · `adivinar` · `borrar`
   - Respuesta: secuencia / resolver

2. **[verdadero/falso]** "Los algoritmos solo existen dentro de las computadoras."
   - Respuesta: FALSO — Euclides describió uno hace más de 2,300 años, sin computadoras.

3. **[opción múltiple]** ¿Qué elementos suele tener un algoritmo?
   - a) Pasos, decisiones y repeticiones ✔
   - b) Colores y fuentes
   - c) Solo números
   - d) Archivos y carpetas

4. **[ordenar]** Algoritmo para el descuento:
   - Pasos: suma los precios del carrito → revisa si el subtotal supera $1000 → aplica el 15% si aplica → calcula el total

5. **[qué hace]** Este pseudocódigo: "SI pago >= 5000 ENTONCES envío gratis SI NO cobrar envío" — ¿qué hace?
   - a) Siempre cobra envío
   - b) Cobra envío solo si el pago es menor a 5000 ✔
   - c) Nunca cobra envío
   - d) Suma 5000 al pago

---

## B25 — ¿Qué es una API? Primer vistazo al mesero de los datos

### Concepto

Cuando tu app necesita información de otro sistema, no entra a su base de datos directamente: habla con su **API**. Una API (Application Programming Interface) es el intermediario oficial entre dos programas — la regla escrita de qué puedes pedir y qué te van a responder.

Lo verás en todas partes: tu página cobra con tarjeta a través de la API de pagos; la app del clima pide datos a la API meteorológica; el tipo de cambio que muestra tu app viene de una API bancaria. Ninguno de esos sistemas te deja tocar su base de datos: te dejan hablar con su API.

La API define **endpoints**: rutas exactas como `/productos` o `/clima/cdmx`. Y define los verbos: **GET** para pedir datos ("dame los productos"), **POST** para enviar/guardar ("registra este pedido"). Nota el parecido con los verbos de SQL de B5 — el mundo repite la misma idea: leer, escribir, modificar, borrar.

La respuesta de una API casi siempre viaja en **JSON** (B17), que ya sabes leer. Cuando la IA conecte tu página con servicios externos, el flujo será: tu frontend pide → la API responde con JSON → tu app lo muestra. Tú no escribes APIs de entrada: describes qué necesitas ("quiero que la página muestre el clima de cada ciudad") y la IA hace el puente.

### Analogía

El **cajero del banco**. No puedes entrar a la bóveda (la base de datos del banco) a sacar tu dinero tú mismo. Le pides al cajero por la ventanilla: "retira $500 de mi cuenta" (una petición con reglas), y él hace el trámite y te entrega el resultado. Tú no sabes cómo lo hizo, solo sigues el protocolo: fila, identificación, y lo que se te permite pedir. La API es ese cajero — la barrera amable que te da lo que pides sin dejarte meter las manos.

### Cómo se ve en la práctica

```javascript
// Pedirle datos del clima a una API (fetch, la herramienta de peticiones)
const respuesta = await fetch("https://api.clima.com/ciudades/cdmx");
const datos = await respuesta.json();

console.log(datos.temperatura);  // 22
console.log(datos.condicion);    // "despejado"
```

Dos líneas y media hacen el milagro: se pide la URL del endpoint (una petición GET), la respuesta llega en JSON y se convierte con `.json()`, y ya puedes leer los datos como objeto (B16). Sin saber los secretos de la meteorología, tu app ya muestra el clima. Eso es lo que las APIs hacen por el mundo.

### Díselo a la IA

> "Quiero que mi [app] obtenga [dato, ej. 'el clima', 'el tipo de cambio'] de una API pública. Investiga cuál es la mejor opción gratuita, muéstrame cómo se ve la respuesta en JSON, y dime qué le tengo que pedir a la IA para conectarla a mi página."

### Ejercicios

1. **[completar]** "Una API es el ____ entre dos programas: define qué puedes ____ y qué te responde."
   - Banco: `intermediario` · `pedir` · `inventar` · `cobrar`
   - Respuesta: intermediario / pedir

2. **[relacionar]** Une el verbo con su acción:
   - GET ↔ Pedir datos
   - POST ↔ Guardar o enviar datos nuevos
   - Endpoint ↔ La ruta exacta (ej. /productos)
   - JSON ↔ El formato típico de la respuesta

3. **[opción múltiple]** Tu página cobra con tarjeta sin manejar tarjetas directamente. ¿Con quién habla?
   - a) Con la base de datos local
   - b) Con la API de pagos ✔
   - c) Con el sistema operativo
   - d) Con el navegador

4. **[qué hace]** `fetch("https://api.clima.com/ciudades/cdmx")` — ¿qué hace?
   - a) Guarda el clima en tu disco
   - b) Pide datos del clima de CDMX a esa API ✔
   - c) Borra los datos del clima
   - d) Instala una librería

5. **[verdadero/falso]** "Una API te da acceso directo a la base de datos de otro sistema, sin reglas."
   - Respuesta: FALSO — la API ES la regla: solo puedes pedir lo que sus endpoints permiten.

---

## B26 — Bases de datos: tablas, filas, columnas y el Excel con esteroides

### Concepto

Una **base de datos** (BD) es donde vive la información estructurada de un sistema: clientes, productos, pedidos, pagos. Es un Excel gigante con superpoderes, y se organiza igual: **tablas**, **columnas** y **filas**.

Una **tabla** es una hoja de un tema: la tabla `clientes`, la tabla `productos`. Las **columnas** son los campos — `nombre`, `correo`, `precio`. Las **filas** son cada registro — cada cliente, cada producto. La **clave primaria** (normalmente `id`) es el número de serie que identifica cada fila de forma única.

¿Por qué no usar un Excel de plano? Por tres razones: maneja millones de filas sin despeinarse; varios usuarios pueden escribir al mismo tiempo sin pisarse; y protege los datos — no cualquiera borra una fila sin permiso. Un Excel es tu libreta personal; una base de datos es un sistema con guardias.

Hablas con ella con **SQL** (B5): `SELECT` para leer, `INSERT` para guardar, `UPDATE` para modificar, `DELETE` para borrar. Cuando la IA te diga "ya guarda el pedido en la base de datos", todo esto está por detrás.

Para ti, la idea clave es esta: **la página se puede rehacer en una tarde; los datos no**. Las decisiones serias de tu negocio — respaldos, quién puede borrar qué, qué se guarda y qué no — son decisiones sobre la base de datos. Por eso te interesa saber leerla, aunque nunca escribas una consulta a mano.

### Analogía

Un **almacén con pasillos, estantes y etiquetas**: cada pasillo es una tabla (clientes, productos), cada estante una fila (un cliente concreto), cada etiqueta una columna (correo, teléfono). El Excel es tu libreta en el escritorio; la base de datos es el almacén con empleados que nunca se equivocan, trabajan 24/7, y solo dejan entrar a quien tiene permiso. Si se incendia la libreta, pierdes todo; por eso el almacén hace respaldos.

### Cómo se ve en la práctica

```sql
CREATE TABLE clientes (
  id         INTEGER PRIMARY KEY,
  nombre     TEXT,
  correo     TEXT,
  mes_pagado INTEGER
);

INSERT INTO clientes (id, nombre, correo, mes_pagado)
VALUES (1, 'Ray Fernández', 'ray@ejemplo.com', 1);

SELECT nombre FROM clientes WHERE mes_pagado = 1;
```

Lee las tres frases: se crea la tabla con sus columnas y sus tipos; se inserta un cliente; se pregunta quién pagó el mes 1. Nota cómo el `id` marca a cada cliente de forma única — ese es el sistema de numeración del almacén. Y nota cómo la consulta final responde una pregunta de negocio: "¿a quién le activo el acceso este mes?".

### Díselo a la IA

> "Necesito guardar [mis datos: clientes, pedidos…]. Muéstrame cómo modelarlos en una tabla: qué columnas, qué tipo de dato en cada una, y cuál sería la clave primaria. Después dame las consultas SQL para registrar, consultar y actualizar, y dime cuáles son de solo lectura (seguras) y cuáles modifican datos."

### Ejercicios

1. **[completar]** "En una tabla de base de datos, las ____ son los campos (nombre, correo) y las ____ son cada registro."
   - Banco: `columnas` · `filas` · `puertas` · `páginas`
   - Respuesta: columnas / filas

2. **[relacionar]** Une el concepto con su descripción:
   - Tabla ↔ La hoja de datos de un tema
   - Columna ↔ Un campo (ej. correo)
   - Fila ↔ Un registro completo (un cliente)
   - Clave primaria ↔ Identifica cada fila de forma única

3. **[opción múltiple]** ¿Por qué una base de datos es mejor que un Excel para una app real?
   - a) Es más bonita
   - b) Maneja millones de filas, varios usuarios a la vez y protege los datos ✔
   - c) Ocupa menos internet
   - d) No necesita servidor

4. **[qué hace]** `SELECT nombre FROM clientes WHERE mes_pagado = 1;` — ¿qué trae?
   - a) Todos los datos de todos los clientes
   - b) Los nombres de los clientes que pagaron el mes 1 ✔
   - c) Borra a los que no pagaron
   - d) Actualiza el mes pagado

5. **[verdadero/falso]** "La clave primaria (id) garantiza que cada fila se identifica de forma única."
   - Respuesta: VERDADERO — por eso cada cliente tiene un id distinto.

---

## B27 — Open source: el código abierto y por qué medio mundo es gratis

### Concepto

**Open source** ("código abierto") es software cuyo código fuente es público: cualquiera lo puede ver, estudiar, usar y modificar. No es lo mismo que "gratis" — es que el plano completo está a la vista de todos. El software de pago es un club privado: pagas para entrar, pero el plano de la casa es secreto.

La filosofía detrás: muchas manos, mejor revisado. Cuando el código es público, miles de programadores lo leen, encuentran errores y proponen arreglos. Recuerdas de A9 que Linux corre los servidores del mundo y que una de sus ventajas es ser auditable — esa es la lógica del open source funcionando.

Los ejemplos que ya usaste son la mayoría del mundo digital: **Linux** (A9), **Python** (B4), **Git** (tu materia del Mes 2), **React**, **Node.js**, **Firefox**, **WordPress**. La infraestructura de internet es, en su enorme mayoría, open source.

Cada proyecto define qué puedes hacer con su código mediante una **licencia**: la **MIT** es permisiva (usa y modifica casi sin restricciones), la **GPL** es "contagiosa" — si modificas y distribuyes, tu versión también debe ser abierta. Leer la licencia antes de adoptar una pieza es sentido común profesional.

Dato memorable: **Linus Torvalds** publicó Linux gratis en 1991, a los 21 años, con un mensaje donde decía que era "solo un pasatiempo, nada grande". Hoy es el sistema operativo que sostiene internet, mantenido por miles de personas que no cobran un centavo. Y sí: esta escuela misma corre sobre herramientas open source.

### Analogía

Un **parque público** construido y mantenido por la comunidad: todos lo usan, cualquiera puede proponer una mejora, y los planos están en internet para quien quiera verlos. El software de pago es un club privado: puedes entrar como cliente, pero los planos de la casa son secretos y las mejoras las decide solo el dueño.

### Cómo se ve en la práctica

```
Un proyecto open source en GitHub (lo dominarás en el Mes 2):

README.md       ← qué hace y cómo instalarlo
LICENSE         ← MIT / Apache / GPL: qué puedes hacer con él
src/            ← el código, abierto para todos
issues/         ← los bugs y mejoras que cualquiera reporta
```

Sin abrir un solo archivo, ese árbol de carpetas te cuenta la historia: hay documentación para humanos (README), las reglas de uso (LICENSE), el código abierto (src) y la plaza pública de reportes (issues). Cuando la IA te recomiende una librería, saber pedirle esta información te convierte en un consumidor informado.

### Díselo a la IA

> "Necesito elegir una librería open source para [mi necesidad]. Investiga las 2-3 más populares, muéstrame qué licencia tiene cada una (MIT, Apache, GPL), qué tan activa está su comunidad y si hay reportes de bugs graves. Dime cuál me recomiendas y por qué."

### Ejercicios

1. **[verdadero/falso]** "Open source significa que el código del programa es público y cualquiera puede verlo."
   - Respuesta: VERDADERO — es más que gratis: está abierto a todos.

2. **[completar]** "La ____ define qué puedes hacer con el código; la licencia ____ obliga a que las versiones derivadas también sean abiertas."
   - Banco: `licencia` · `GPL` · `portada` · `MIT`
   - Respuesta: licencia / GPL

3. **[relacionar]** Une el nombre con su descripción:
   - Linux ↔ El sistema operativo abierto de los servidores
   - Python ↔ Lenguaje abierto (B4)
   - GitHub ↔ Donde vive el código abierto
   - MIT ↔ Licencia permisiva

4. **[opción múltiple]** ¿Qué diferencia a open source de simplemente "gratis"?
   - a) El código es público y modificable ✔
   - b) No se puede usar en empresas
   - c) Es más lento
   - d) No tiene comunidad

5. **[ordenar]** Cómo evaluar una librería open source:
   - Pasos: revisa la licencia → mira qué tan activa está la comunidad → busca reportes de bugs graves → decide si conviene para tu proyecto

---

## B28 — Leer código I: descifrar un archivo JavaScript simple (con IA de copiloto)

### Concepto

Ya tienes el vocabulario: variables (B9), tipos (B10), condicionales (B11), ciclos (B12), funciones (B13-B14), listas (B15) y objetos (B16). Ahora la práctica de todo director de IA: **leer un archivo JavaScript completo sin entrar en pánico**.

La estrategia es la de un detective, no la de un memorizador. **Primera leída**: busca las funciones y lee sus nombres — los nombres cuentan la historia ("si se llama `calcularTotal`, ya sé qué hace"). **Segunda**: sigue los datos — de dónde salen las variables, qué se guarda y qué se muestra. **Tercera**: identifica los condicionales y los ciclos — dónde decide el programa y dónde repite. Esas tres pasadas te dan el mapa.

Y cuando algo no cuadre, entra tu superpoder: la **IA de copiloto** (lo entrenas en C27). No es hacer trampa: es exactamente lo que hacen los programadores profesionales en 2026. Le pegas el archivo y le pides "explica esta función", "qué hace la línea 20", "¿por qué hay un while aquí?". Leer con copiloto es leer el doble de rápido con el doble de entendimiento.

La clave mental: no necesitas entender TODA la sintaxis. Necesitas entender la **historia**: qué datos entran, qué se decide, qué sale. El resto son detalles que la IA te aclara cuando se lo preguntas.

### Analogía

Leer una **receta de otro cocinero**: primero lees los nombres de los platillos (las funciones), luego los ingredientes (las variables), luego las instrucciones (la lógica). Y cuando no entiendes un paso, le preguntas al cocinero que la escribió. Tu copiloto es ese cocinero: siempre está disponible, nunca se molesta por la pregunta obvia, y te lo explica las veces que haga falta.

### Cómo se ve en la práctica

```javascript
const PRECIO_ENVIO = 120;

function calcularSubtotal(productos) {
  let suma = 0;
  for (let i = 0; i < productos.length; i++) {
    suma = suma + productos[i].precio;
  }
  return suma;
}

function calcularTotal(productos, envioGratis) {
  const subtotal = calcularSubtotal(productos);
  if (envioGratis === true) {
    return subtotal;
  }
  return subtotal + PRECIO_ENVIO;
}
```

Aplica las tres pasadas: hay dos funciones con nombres que lo dicen todo — una suma precios, otra decide sobre el envío. Hay un dato fijo (`PRECIO_ENVIO`), un ciclo (recorre la lista) y un condicional (si el envío es gratis, no lo suma). Sin saber cada detalle de sintaxis, ya puedes contarle a alguien qué hace este archivo. Eso es leer código.

### Díselo a la IA

> "Voy a pegarte el código de mi proyecto. Actúa como mi copiloto: primero dime en una tabla qué funciones existen y qué hace cada una en una línea; después señala las líneas que NO entiendo (te las pego debajo) y explícamelas como a un colega, no como a un manual."

### Ejercicios

1. **[ordenar]** Estrategia para leer código:
   - Pasos: busca las funciones y sus nombres → sigue los datos y las variables → identifica condicionales y ciclos → pregúntale a la IA lo que no cuadre

2. **[completar]** "Los ____ de las funciones cuentan la historia: si una se llama <code>calcularTotal</code>, ya sabes qué hace."
   - Banco: `nombres` · `colores` · `llaves` · `comas`
   - Respuesta: nombres

3. **[opción múltiple]** `calcularSubtotal(productos)` — leyendo solo el nombre, ¿qué esperas que haga?
   - a) Borrar los productos
   - b) Sumar los precios de los productos ✔
   - c) Guardar en la base de datos
   - d) Mandar un correo

4. **[qué hace]** En la función `calcularTotal` de la lección, si `envioGratis` es `true`, ¿qué devuelve?
   - a) El subtotal más el envío
   - b) Solo el subtotal, sin envío ✔
   - c) Un error
   - d) Solo el precio del envío

5. **[verdadero/falso]** "Pegar el código a la IA para que te lo explique es hacer trampa."
   - Respuesta: FALSO — es el método profesional: la IA es tu copiloto de lectura.

---

## B29 — Leer código II: descifrar un HTML + CSS real

### Concepto

Con JavaScript ya puedes leer la lógica de una app. Ahora falta la mitad visual: **HTML + CSS**, los otros dos de la trinidad de la web (B7, B8). Y se leen con una estrategia distinta, porque son otro tipo de archivo.

**Leer HTML es de afuera hacia adentro.** El `<html>` envuelve todo; dentro, `<head>` (metadatos) y `<body>` (lo visible). Las etiquetas se **anidan** como muñecas rusas: un `<div>` adentro de otro. La regla de oro: todo lo que abres lo cierras. Y cada elemento puede llevar **atributos** — los dos que más verás son `class` y `id`: son las manijas que conectan el HTML con el CSS.

**Leer CSS es identificar selectores.** Un selector dice A QUÉ le aplicas estilos: `h1` (la etiqueta), `.tarjeta` (todos los que tengan `class="tarjeta"`), `#boton-pagar` (el único con ese `id`). Entre llaves, los estilos: `{ color: red; padding: 12px; }`. Eso se lee: "a todos los elementos de la clase tarjeta, píntalos rojo y dales 12 píxeles de relleno".

Cuando la IA te arme una página, el HTML será el armazón y el CSS el look. Cuando le pidas "haz la tarjeta de precios más grande", ella buscará la clase `.precio` y la estilizará. Tú solo necesitas saber que esa conexión existe: `class` en HTML ↔ `.clase` en CSS. Es el puente de dos archivos que se hablan entre sí.

### Analogía

HTML es el **plano del arquitecto**: cada habitación es una etiqueta, y las habitaciones anidadas (la recámara adentro del pasillo, el pasillo adentro de la casa) son la estructura. CSS es la **carta de acabados**: "las recámaras en beige, los pisos de madera, las puertas altas". Dos documentos distintos, dos trabajos distintos — y el plano usa las etiquetas (las clases) para decirle a la carta de acabados qué habitación es cuál.

### Cómo se ve en la práctica

```html
<div class="tarjeta">
  <h1 class="titulo">Curso de Python</h1>
  <p class="precio">$7,000</p>
  <button class="boton" id="boton-comprar">Comprar</button>
</div>
```

```css
.tarjeta {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 24px;
}
.titulo { color: #7c3aed; }
.boton {
  background: #22c55e;
  color: white;
  border: none;
}
```

Lee la pareja: una tarjeta que contiene un título, un precio y un botón. El CSS le da borde redondeado a la tarjeta, morado al título y verde al botón. Fíjate cómo las clases del HTML (`.tarjeta`, `.titulo`, `.boton`) son exactamente los selectores del CSS. Sin esa conexión, los estilos no encuentran su elemento.

### Díselo a la IA

> "Voy a pegarte mi HTML y mi CSS. Hazme un mapa: qué etiquetas están anidadas dentro de qué, qué clases usa cada elemento, y qué regla CSS aplica a cada clase. Si hay un elemento sin clase ni id, dímelo — sería difícil de estilizar."

### Ejercicios

1. **[relacionar]** Une el archivo con su papel:
   - HTML ↔ La estructura (el plano)
   - CSS ↔ Los estilos (la carta de acabados)
   - `.clase` ↔ Manija para estilizar varios elementos
   - `#id` ↔ Manija única para un elemento

2. **[completar]** "En HTML las etiquetas se ____ como muñecas rusas, y todo lo que abres debes ____."
   - Banco: `anidan` · `cerrar` · `pintar` · `borrar`
   - Respuesta: anidan / cerrar

3. **[opción múltiple]** ¿A qué elementos afecta la regla `.tarjeta { color: red; }`?
   - a) A todos los `<p>` de la página
   - b) A todos los que tengan `class="tarjeta"` ✔
   - c) Al primer elemento de la página
   - d) A ningún elemento

4. **[qué hace]** `<p class="precio">$7,000</p>` con `.precio { color: green; }` — ¿cómo se ve el precio?
   - a) Rojo
   - b) Verde ✔
   - c) Sin estilo
   - d) Se borra de la página

5. **[verdadero/falso]** "El CSS siempre se escribe dentro del HTML, en la misma línea, sin archivos aparte."
   - Respuesta: FALSO — normalmente vive en un archivo `.css` aparte (B8).

---

## B30 — Repaso integrador del Idioma (mega-quiz jugable)

### Concepto

Cierra los ojos y mira todo lo que ya sabes leer. Hace 29 lecciones no sabías nada de esto; hoy reconoces las piezas del software como quien reconoce las herramientas de un taller. Ese es el verdadero logro del mes: no memorizaste código, **aprendiste a reconocer**.

Tu mapa mental de este mes:

- **Leer datos:** variables (B9), tipos (B10), listas (B15), objetos (B16), JSON (B17)
- **Leer lógica:** condicionales (B11), ciclos (B12), funciones (B13-B14)
- **Leer apps:** las tres capas (B23), API (B25), bases de datos (B26)
- **Leer mundos:** lenguajes (B2-B6), HTML/CSS (B7-B8), librerías y frameworks (B22), open source (B27)
- **Leer errores:** mensajes (B19), tipos de error (B20), bugs (B21), comentarios (B18)

Si hoy leyeras un archivo real de una app, podrías decir: aquí hay una variable, aquí decide, aquí repite, aquí guarda, y esto viaja como JSON. Hace un mes eso era griego. La Materia C ya viene: en ella construirás tu primera página dirigiendo a la IA — y cada concepto de este idioma te servirá para leer lo que ella produzca y corregirlo con criterio.

El quiz de esta lección es el ensayo general: no enseña nada nuevo, te dice dónde estás parado ANTES del escenario. Ve a por él.

### Analogía

El **ensayo general antes del concierto**: no aprendes canciones nuevas — repasas el setlist, descubres qué partes te fallan y las pules ANTES de que haya público. Ese es el papel de esta lección: detectar los huecos del idioma antes de la Materia C, donde vas a construir de verdad.

### Cómo se ve en la práctica

```
MAPA DEL IDIOMA — MES 1

Leer datos:   variables (B9) · tipos (B10) · listas (B15) · objetos (B16) · JSON (B17)
Leer lógica:  if/else (B11) · ciclos (B12) · funciones (B13-B14)
Leer apps:    frontend/backend/BD (B23) · API (B25) · BD (B26)
Leer mundos:  lenguajes (B2-B6) · HTML/CSS (B7-B8) · librerías (B22) · open source (B27)
Leer errores: mensajes (B19) · tipos (B20) · bugs (B21) · comentarios (B18)
```

Ese es tu mapa de referencia. Si algo se te olvida, el mapa te lleva directo a la lección. Eso es lo que te llevas del mes: un idioma completo, un mapa de dónde está cada concepto, y la seguridad de que los puedes volver a consultar las veces que quieras. Nadie lee un idioma de memoria — lo lee porque lo reconoce.

### Díselo a la IA

> "Soy estudiante del Mes 1 de un programa donde aprendí a leer código, no a escribirlo. Hazme un examen de autoevaluación de 10 preguntas sobre: variables, tipos de datos, condicionales, ciclos, funciones, JSON, APIs, bases de datos y lectura de código. Corrígeme cada respuesta, explícame por qué fallé cuando falle, y al final dime en qué 2 temas debo repasar."

Ese es tu prompt de autoevaluación: la IA te examina, te corrige con explicación, y te da un diagnóstico accionable. Los temas que te marque son exactamente las lecciones que debes releer antes de seguir.

### Ejercicios

1. **[opción múltiple]** ¿Qué describe mejor a una computadora?
   - a) Inteligente y creativa
   - b) Obediente y literal: hace lo que le dices, no lo que quisiste decir ✔
   - c) Rápida pero impredecible
   - d) Lenta y tonta

2. **[completar]** "En la era de la IA, la IA ____ el código y tú lo ____, lo ____ y lo corriges."
   - Banco: `escribe` · `lees` · `verificas` · `memorizas`
   - Respuesta: escribe / lees / verificas

3. **[relacionar]** Une el concepto con la lección donde lo viste:
   - Variable ↔ B9
   - Condicionales (if/else) ↔ B11
   - JSON ↔ B17
   - API ↔ B25

4. **[verdadero/falso]** "Java y JavaScript son versiones del mismo lenguaje."
   - Respuesta: FALSO — solo comparten el nombre por marketing (B6).

5. **[qué hace]** `for (let i = 0; i < 3; i++) { console.log(i); }` — ¿qué imprime?
   - a) 1, 2, 3
   - b) 0, 1, 2 ✔
   - c) 0, 1, 2, 3
   - d) Nada, es un error

6. **[ordenar]** Flujo para construir una app dirigiendo IA:
   - Pasos: describe qué quieres en palabras → pídele el código a la IA → lee y verifica cada parte → corrige iterando la conversación → prueba que funcione

7. **[opción múltiple]** La página muestra los precios mal: resta en vez de sumar, pero no da ningún error. ¿Qué tipo de error es?
   - a) De sintaxis
   - b) De lógica ✔
   - c) De runtime
   - d) De red

8. **[verdadero/falso]** "Un mensaje de error es una pista: casi siempre dice el archivo, la línea y qué no entendió."
   - Respuesta: VERDADERO — y por eso se lo pegas completo a la IA (B19).
