# EXAMEN DEL MÓDULO 3 — La web por dentro

**40 preguntas · Teoría y práctica · Aprobatorio: 70/100**
**Cada pregunta vale 2.5 puntos.**

> Notación: `✔` = respuesta correcta · `👤` = respuesta del alumno.
> Cuando ambas marcas están en la misma opción, el alumno acertó.

**Resultado de rayfg96@gmail.com — presentado el 12 de octubre de 2026: 36/40 aciertos = 90/100 · APROBADO**

---

## BCK-301 — Maquetación: HTML y CSS (14 preguntas)

**1.** ¿Qué etiqueta HTML es la correcta para agrupar los enlaces de navegación principal de un sitio?
- a) `<div>`
- b) `<nav>` ✔ 👤
- c) `<section>`
- d) `<aside>`

**2.** **[qué hace]** `display: flex;` en un contenedor. ¿Qué logra?
- a) Coloca los hijos en una fila (o columna) y permite alinearlos ✔ 👤
- b) Los apila verticalmente ignorando el ancho
- c) Los convierte en texto
- d) Los oculta hasta hacer clic

**3.** En el modelo de caja, ¿qué controla `padding`?
- a) El espacio externo que separa el elemento de otros
- b) El espacio interno entre el contenido y el borde ✔ 👤
- c) El grosor del borde
- d) La posición del elemento

**4.** **[qué hace]** Con `p { color: gray; }` y `.aviso { color: orange; }`, un `<p class="aviso">` se ve…
- a) Gris, porque `p` se declaró primero
- b) Naranja, porque la clase tiene más especificidad que el selector de etiqueta ✔ 👤
- c) Depende del navegador
- d) Con los dos colores mezclados

**5.** ¿Qué unidad de medida es relativa al tamaño de letra de la raíz del documento?
- a) `px`
- b) `em`
- c) `rem` ✔ 👤
- d) `vh`

**6.** **[qué hace]** `@media (max-width: 600px) { ... }`. ¿Cuándo se aplica ese bloque?
- a) Solo en pantallas de más de 600px
- b) Cuando el ancho del viewport es de 600px o menos ✔ 👤
- c) Siempre, sin importar el tamaño
- d) Solo al imprimir

**7.** **[qué hace]** Dados `#menu { color: blue; }`, `.activo { color: green; }` y un `<ul id="menu" class="activo">`, ¿de qué color se ve?
- a) Verde, porque la clase se declaró después
- b) Azul, porque un `#id` tiene mayor especificidad que una `.clase` ✔
- c) El último estilo que cargue en el navegador
- d) Ninguno, hay un empate y gana el fondo
- 👤 *(Falló: eligió "c". La especificidad no depende del orden sino del peso del selector: un `#id` pesa más que una `.clase`, así que gana el azul.)*

**8.** **[qué hace]** `justify-content: center;` en un contenedor flex con dirección por defecto. ¿Qué hace?
- a) Centra los hijos a lo largo del eje principal (horizontal) ✔ 👤
- b) Centra el texto de cada hijo
- c) Los alinea al fondo del contenedor
- d) Los pega a los extremos

**9.** **[qué hace]** `grid-template-columns: repeat(3, 1fr);`. ¿Qué produce?
- a) Una columna que ocupa tres filas
- b) Tres columnas de igual ancho ✔ 👤
- c) Tres filas de igual alto
- d) Una cuadrícula de 3×3

**10.** ¿Qué valor de `position` mantiene el elemento pegado mientras haces scroll, hasta que su contenedor sale de vista?
- a) `static`
- b) `relative`
- c) `sticky` ✔ 👤
- d) `absolute`

**11.** **[qué hace]** `@media (prefers-color-scheme: dark) { ... }`. ¿Cuándo se aplica?
- a) Siempre que el sitio tenga un botón de modo oscuro
- b) Cuando el sistema operativo del usuario está en modo oscuro ✔ 👤
- c) Solo en celulares
- d) Nunca, esa regla no existe

**12.** ¿Cuál práctica mejora directamente la accesibilidad de una imagen?
- a) Ponerla como `background-image`
- b) Usar un atributo `alt` descriptivo ✔ 👤
- c) Convertirla a WebP
- d) Centrarla con flexbox

**13.** **[qué hace]** `* { box-sizing: border-box; }`. ¿Qué cambia?
- a) Elimina el `padding` de todos los elementos
- b) El ancho declarado incluye el `padding` y el borde ✔ 👤
- c) Fuerza a todos los elementos a ser bloques
- d) Quita los márgenes por defecto

**14.** En un enfoque *mobile-first*, ¿qué media query usas para escalar desde el móvil hacia pantallas más grandes?
- a) `max-width`
- b) `min-width` ✔ 👤
- c) `prefers-color-scheme`
- d) `orientation`

## DAT-302 — JavaScript en el navegador (14 preguntas)

**15.** ¿Qué método del DOM selecciona el primer elemento que coincide con un selector CSS?
- a) `getElementById`
- b) `querySelector` ✔ 👤
- c) `createElement`
- d) `addEventListener`

**16.** **[qué hace]** `contenedor.innerHTML = textoDelUsuario;` con texto que escribe un visitante. ¿Cuál es el riesgo principal?
- a) Que el texto se muestre en mayúsculas
- b) Que se inyecte HTML o JavaScript malicioso (XSS) ✔ 👤
- c) Que la página cargue más lento
- d) Que el texto se borre al recargar

**17.** ¿Cómo se registra una función que se ejecute cuando el usuario hace clic en un botón?
- a) `boton.onClick(fn)`
- b) `boton.addEventListener("click", fn)` ✔ 👤
- c) `boton.click(fn)`
- d) `boton.bind("click")`

**18.** **[qué hace]** Sobre un arreglo `nums`, `nums.filter(n => n > 10)`. ¿Qué devuelve?
- a) Un arreglo nuevo solo con los números mayores a 10 ✔ 👤
- b) La suma de los números mayores a 10
- c) El primer número mayor a 10
- d) Modifica `nums` quitando los menores a 10

**19.** **[qué hace]** Un `<div>` contiene un `<button>`, cada uno con su propio listener de clic. El usuario hace clic en el botón. ¿Qué ocurre con el evento?
- a) Solo se dispara el listener del botón; el del `<div>` nunca corre
- b) Se dispara primero el del botón y luego burbujea hacia el `<div>` padre ✔
- c) El `<div>` captura el clic antes que el botón, en todos los casos
- d) El evento se cancela automáticamente al haber dos listeners
- 👤 *(Falló: eligió "a". El evento burbujea hacia arriba: pasa del botón a su contenedor, salvo que llames a `stopPropagation()`.)*

**20.** ¿Dónde se guarda un dato en el navegador para que persista entre visitas, aunque cierres la pestaña?
- a) `sessionStorage`
- b) Una variable global
- c) `localStorage` ✔ 👤
- d) En el propio DOM

**21.** **[qué hace]** `const r = await fetch("/api/productos"); const data = await r.json();`. ¿Qué contiene `data`?
- a) El código de estado de la respuesta
- b) El cuerpo de la respuesta convertido a objeto de JavaScript ✔ 👤
- c) Una promesa todavía sin resolver
- d) El HTML completo de la página

**22.** ¿Para qué sirve envolver código en `try { ... } catch (e) { ... }`?
- a) Para que el código se ejecute más rápido
- b) Para capturar y manejar un error sin que todo el script se detenga ✔ 👤
- c) Para repetir el código varias veces
- d) Para declarar una función nueva

**23.** **[qué hace]** `form.addEventListener("submit", (e) => e.preventDefault());`. ¿Qué logra?
- a) Envía el formulario dos veces
- b) Evita que la página se recargue al enviar el formulario ✔ 👤
- c) Valida los campos automáticamente
- d) Borra el formulario del DOM

**24.** **[qué hace]** La expresión `` const saludo = `Hola, ${nombre}`; ``. ¿Qué es `nombre` aquí?
- a) Una variable cuyo valor se incrusta en el texto ✔ 👤
- b) Una etiqueta HTML
- c) El nombre de la función
- d) Un error de sintaxis

**25.** ¿Qué diferencia clave tiene una función flecha frente a una declarada con `function` respecto a `this`?
- a) La flecha no tiene su propio `this`; hereda el del contexto donde se define ✔ 👤
- b) La flecha no puede recibir parámetros
- c) `function` no permite usar `return`
- d) Son idénticas en todos los casos

**26.** Al pedir datos a una API, ¿qué tres estados debería manejar siempre la interfaz?
- a) Claro, oscuro y automático
- b) Cargando, vacío y error ✔ 👤
- c) Móvil, tablet y escritorio
- d) GET, POST y PUT

**27.** **[qué hace]** `const { nombre, precio } = producto;`. ¿Qué hace esta línea?
- a) Crea una copia del objeto con otro nombre
- b) Extrae las propiedades `nombre` y `precio` del objeto en variables ✔ 👤
- c) Convierte el objeto en un arreglo
- d) Borra esas propiedades del objeto original

**28.** **[qué hace]** `JSON.parse(texto)`. ¿Qué hace?
- a) Convierte un objeto en un texto JSON
- b) Convierte un texto con formato JSON en un objeto de JavaScript ✔ 👤
- c) Valida un formulario
- d) Descarga un archivo del servidor

## PRA-303 — Construye con IA III (12 preguntas)

**29.** ¿Qué debe incluir un buen brief de interfaz antes de pedirle una pantalla a la IA?
- a) Solo una idea vaga para que la IA sea creativa
- b) Contexto, objetivo, restricciones y formato esperado ✔ 👤
- c) El código completo escrito a mano
- d) Una captura de otro sitio sin explicación

**30.** ¿Por qué conviene separar los datos de la presentación?
- a) Para que el HTML pese menos
- b) Para cambiar los datos sin reescribir el HTML y poder pintarlos con `map` ✔ 👤
- c) Porque la IA lo exige
- d) Para no usar CSS

**31.** Tienes la landing de un negocio con 5 secciones, sin más interacción que un menú y un formulario de contacto. ¿Qué conviene usar?
- a) React con Next.js y un backend propio desde el inicio
- b) HTML, CSS y JavaScript planos, sin framework ✔
- c) Un framework distinto por cada sección
- d) Esperar a tener 10,000 usuarios para decidirlo
- 👤 *(Falló: eligió "d". Aplazar la decisión no es una arquitectura; y para una landing simple un framework solo añade peso y complejidad sin beneficio: HTML plano basta.)*

**32.** Al agregar *dark mode* a un sitio, ¿qué enfoque es el más robusto?
- a) Duplicar todo el CSS con colores oscuros a mano
- b) Usar variables CSS y `prefers-color-scheme`, con un toggle opcional ✔ 👤
- c) Poner un filtro invertido a toda la página
- d) Cambiar solo el fondo del `body`

**33.** ¿Cuál es la forma correcta de conectar el botón de un formulario de contacto a WhatsApp?
- a) Un `mailto:` que abra el cliente de correo
- b) Construir un enlace `https://wa.me/<numero>` con el mensaje predefinido ✔ 👤
- c) Un `alert()` que muestre el número
- d) Guardar el texto en `localStorage`

**34.** **[qué hace]** Tu galería se pinta con `productos.map(...)` pero la base tarda en responder. ¿Qué debe mostrar la interfaz mientras llegan los datos?
- a) Nada, dejar la pantalla en blanco
- b) Un estado de carga visible (skeleton o spinner) ✔ 👤
- c) Un error de inmediato
- d) Los productos de ejemplo escritos a mano en el HTML

**35.** ¿Cuál acción mejora más el tiempo de carga de un sitio con muchas fotografías?
- a) Comprimir y convertir las imágenes a WebP y usar `lazy loading` ✔ 👤
- b) Subir las fotos en su tamaño original
- c) Poner todas las imágenes como fondo
- d) Cargar todas las imágenes a la vez al inicio

**36.** ¿Para qué sirven las meta tags `description` y el `title` de una página?
- a) Para estilizar la página
- b) Para que buscadores y previsualizaciones entiendan de qué va el sitio ✔ 👤
- c) Para conectar la base de datos
- d) Para cargar fuentes

**37.** ¿Qué es lo que más suele hacer lento a un sitio web?
- a) Imágenes pesadas sin optimizar y scripts que bloquean la carga ✔
- b) Tener mucho texto en la página
- c) Usar tipografías del sistema
- d) Tener pocas secciones
- 👤 *(Falló: eligió "b". El texto pesa muy poco; lo que frena la carga son las imágenes sin comprimir y los scripts que retrasan el render.)*

**38.** ¿Qué hacen las etiquetas Open Graph (`og:title`, `og:image`)?
- a) Cambian el idioma del sitio
- b) Controlan cómo se ve el enlace al compartirlo en redes sociales ✔ 👤
- c) Bloquean el acceso a la página
- d) Generan un favicon

**39.** ¿Qué es un componente reutilizable?
- a) Un archivo CSS con muchos estilos
- b) Una pieza de interfaz que se puede repetir con distintos datos ✔ 👤
- c) Un plugin del navegador
- d) Una imagen vectorial

**40.** Usas una herramienta como v0 para generar una interfaz. ¿Cuál es el siguiente paso más sensato?
- a) Publicarla tal cual como versión final
- b) Revisar y adaptar el código generado a tu proyecto y tus datos ✔ 👤
- c) Borrar el proyecto anterior
- d) Copiarla a mano sin mirar

---

## Resultado

| Bloque | Aciertos |
|---|---|
| BCK-301 — Maquetación: HTML y CSS | 13 / 14 |
| DAT-302 — JavaScript en el navegador | 13 / 14 |
| PRA-303 — Construye con IA III | 10 / 12 |
| **Total** | **36 / 40** |

**Calificación: 90 / 100 — APROBADO**

**Preguntas falladas:** 7 (especificidad de selectores), 19 (burbujeo de eventos), 31 (framework vs HTML plano) y 37 (qué hace lento a un sitio).

**Observación del sistema:** dominio sólido de maquetación y JavaScript; las cuatro fallas caen en distinciones finas que solo se afianzan con el uso —peso de selectores (A13), propagación de eventos (B8), cuándo un framework sobra (C23) y qué frena la carga (C25)—. Se recomienda repasar A13, B8, C23 y C25. Progresión respecto a los módulos anteriores: 88 → 93 → 90.
