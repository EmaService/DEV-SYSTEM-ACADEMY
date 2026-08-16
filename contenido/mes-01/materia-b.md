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
