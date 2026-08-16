# MES 1 · MATERIA A — La Máquina
## Lecciones A1–A5 (Lote 1)

> Formato de ejercicios: `[opción múltiple]`, `[completar]` (con banco de palabras), `[relacionar]`, `[verdadero/falso]`, `[ordenar]`, `[qué hace]`. La respuesta correcta va marcada con ✔ o indicada al final del ejercicio.

---

## A1 — ¿Qué es una computadora en realidad?

### Concepto

Una computadora no es magia: es una máquina que hace tres cosas, millones de veces por segundo — recibe información, la procesa siguiendo instrucciones, y entrega un resultado. Todo lo demás (pantalla, teclado, bocinas) son solo puertas de entrada y salida para esa información.

Por dentro, tres piezas hacen el trabajo pesado:

- El **CPU** (procesador) ejecuta las instrucciones. Cada clic que das se convierte en miles de operaciones que el CPU resuelve una por una, a una velocidad absurda.
- La **RAM** (memoria) es donde la computadora tiene "a la mano" lo que está usando en este momento. Es rapidísima, pero se vacía cuando apagas el equipo.
- El **disco** (almacenamiento) es donde viven tus archivos de forma permanente: fotos, programas, documentos. Más lento que la RAM, pero no olvida.

Cuando abres un programa, la computadora lo copia del disco a la RAM para trabajar rápido. Cuando "se traba" tu compu, casi siempre es porque la RAM está llena o el CPU está saturado.

¿Por qué te importa esto si la IA va a programar por ti? Porque cuando un programa "consume mucha memoria" o "el servidor se quedó sin RAM", tú vas a entender exactamente de qué habla la IA — y vas a poder decidir: pagar un servidor más grande, o pedirle a la IA que optimice.

### Analogía

Una computadora es una **cocina de restaurante**. El CPU es el chef: el único que realmente cocina. La RAM es la mesa de trabajo: ahí pones los ingredientes que estás usando ahorita — entre más grande, más platillos a la vez. El disco es la alacena y el refri: todo se guarda ahí, pero tienes que ir por ello. Si la mesa está llena, el chef pierde tiempo yendo a la alacena a cada rato — y todo se hace lento.

### Cómo se ve en la práctica

Cuando compres una laptop o rentes un servidor verás:

```
CPU: 8 núcleos · RAM: 16 GB · Disco: 512 GB SSD
```

Traducción: 8 chefs en paralelo, una mesa de 16 GB, y una alacena de 512 GB de las rápidas (SSD). En el Mes 9 rentarás servidores en la nube y estas tres cifras decidirán cuánto pagas.

### Díselo a la IA

> "Mi aplicación se está poniendo lenta. ¿Me ayudas a revisar si el problema es de CPU, de RAM o de disco? Explícame cómo verificarlo y qué opciones tengo en cada caso."

### Ejercicios

1. **[opción múltiple]** ¿Qué componente ejecuta las instrucciones de un programa?
   - a) La RAM
   - b) El CPU ✔
   - c) El disco
   - d) La pantalla

2. **[completar]** "Cuando abres un programa, se copia del ____ a la ____ para trabajar más rápido."
   - Banco de palabras: `RAM` · `disco` · `CPU` · `navegador`
   - Respuesta: disco → RAM

3. **[relacionar]** Une cada pieza con su papel en la cocina:
   - CPU ↔ El chef que cocina
   - RAM ↔ La mesa de trabajo
   - Disco ↔ La alacena y el refri
   - Pantalla ↔ La ventanilla donde sale el platillo

4. **[verdadero/falso]** "La información en la RAM se conserva aunque apagues la computadora."
   - Respuesta: FALSO — la RAM se vacía al apagar; lo permanente vive en el disco.

5. **[opción múltiple]** Tu compu "se traba" cuando tienes 40 pestañas abiertas. ¿Cuál es la causa más probable?
   - a) El disco está lleno
   - b) La RAM está saturada ✔
   - c) El internet es lento
   - d) La pantalla es chica

---

## A2 — Bits y bytes: el idioma de los unos y ceros

### Concepto

Toda la información digital — fotos, videos, este texto, tu app favorita — está hecha de lo mismo: **unos y ceros**. Cada uno o cero es un **bit**, la unidad mínima de información. ¿Por qué unos y ceros? Porque los circuitos solo distinguen dos estados: pasa corriente (1) o no pasa (0). Con millones de esos interruptores, se representa cualquier cosa.

Ocho bits juntos forman un **byte**, suficiente para guardar una letra. Y de ahí, la escalera que ves todos los días:

- **1 KB (kilobyte)** ≈ mil bytes — un párrafo de texto
- **1 MB (megabyte)** ≈ mil KB — una foto de celular ligera
- **1 GB (gigabyte)** ≈ mil MB — una película en calidad normal
- **1 TB (terabyte)** ≈ mil GB — el disco de una laptop moderna

Detalle que confunde a todos: la velocidad de internet se mide en **megabits** (Mb) y los archivos en **megabytes** (MB). Un megabyte son 8 megabits — por eso con "100 megas" de internet no bajas 100 MB por segundo, sino unos 12.5.

### Analogía

Los bits son **letras del alfabeto**: una sola letra dice poco, pero combinadas forman palabras (bytes), párrafos (KB), libros (MB) y bibliotecas enteras (GB, TB). El idioma tiene solo dos letras — 0 y 1 — pero con suficientes combinaciones escribes cualquier cosa que exista digitalmente.

### Cómo se ve en la práctica

```
foto-playa.jpg        3.2 MB
video-boda.mp4        1.8 GB
proyecto-tienda/      45 MB
respaldo-2026.zip     120 GB
```

Con la escalera en mente, ya sabes: la foto pesa poco, el video es pesado, y ese respaldo no cabe en una USB de 64 GB.

### Díselo a la IA

> "Mi página web pesa 8 MB y tarda en cargar. ¿Qué archivos suelen pesar más y cómo los reduzco sin que se vea mal?"

(Spoiler: casi siempre son las imágenes. La IA te va a enseñar a comprimirlas.)

### Ejercicios

1. **[ordenar]** Acomoda de menor a mayor:
   - Desordenado: GB · bit · MB · byte · KB · TB
   - Respuesta: bit → byte → KB → MB → GB → TB

2. **[opción múltiple]** ¿Cuántos bits tiene un byte?
   - a) 2
   - b) 8 ✔
   - c) 100
   - d) 1000

3. **[completar]** "Un circuito representa un 1 cuando ____ corriente y un 0 cuando ____."
   - Banco: `pasa` · `no pasa` · `se calienta` · `se apaga`
   - Respuesta: pasa / no pasa

4. **[relacionar]** Une el tamaño con su ejemplo típico:
   - 1 KB ↔ Un párrafo de texto
   - 3 MB ↔ Una foto de celular
   - 1 GB ↔ Una película
   - 1 TB ↔ El disco de una laptop

5. **[verdadero/falso]** "Con internet de 100 megas descargas un archivo de 100 MB en un segundo."
   - Respuesta: FALSO — 100 megabits ≈ 12.5 megabytes por segundo; tardaría unos 8 segundos.

---

## A3 — Archivos y extensiones: todo es un archivo

### Concepto

Todo lo que existe en una computadora es un archivo: tus fotos, los programas, las páginas web, hasta la configuración del sistema. Un archivo es información guardada con un nombre. 

La **extensión** es el apellido del archivo: las letras después del punto. Le dicen a la computadora (y a ti) qué tipo de información contiene y con qué programa abrirlo:

- `foto.png`, `foto.jpg` — imágenes
- `index.html` — página web
- `app.js` — código JavaScript
- `datos.json` — datos estructurados
- `documento.pdf` — documento
- `programa.exe` — ejecutable de Windows (¡ojo con los .exe desconocidos!)

Cuando una IA programa por ti, se la vive creando y modificando archivos. Sus reportes dicen "modifiqué `checkout.js` y creé `styles.css`". Si reconoces las extensiones, entiendes qué tipo de pieza tocó: lógica, estilo, datos o estructura.

### Analogía

La extensión es el **uniforme** de cada archivo: ves a alguien con filipina blanca y sabes que es cocinero; ves un `.js` y sabes que es lógica de programa. Nadie confunde al doctor con el bombero por el uniforme — y tú ya no vas a confundir una imagen con un código.

### Cómo se ve en la práctica

Reporte típico de una IA ejecutora:

```
Archivos modificados:
  ✏ checkout.js      ← lógica de pago
  ✏ styles.css       ← estilos visuales
  + gracias.html     ← página nueva
  + logo.png         ← imagen agregada
```

Sin abrir nada, ya sabes qué tipo de cambio hizo en cada pieza.

### Díselo a la IA

> "Lista los archivos de mi proyecto agrupados por tipo (código, estilos, imágenes, datos, configuración) y dime en una línea para qué sirve cada uno."

### Ejercicios

1. **[relacionar]** Une la extensión con lo que contiene:
   - .html ↔ Estructura de una página web
   - .js ↔ Código JavaScript
   - .png ↔ Imagen
   - .json ↔ Datos estructurados
   - .pdf ↔ Documento

2. **[opción múltiple]** Una IA reporta que modificó `styles.css`. ¿Qué cambió?
   - a) La lógica del programa
   - b) Los estilos visuales ✔
   - c) La base de datos
   - d) Las imágenes

3. **[completar]** "La extensión son las letras después del ____ y le dicen a la computadora qué ____ de información contiene."
   - Banco: `punto` · `tipo` · `nombre` · `tamaño`
   - Respuesta: punto / tipo

4. **[verdadero/falso]** "Es seguro abrir cualquier archivo .exe que te llegue por correo."
   - Respuesta: FALSO — un .exe es un programa ejecutable; uno desconocido puede ser un virus.

5. **[qué hace]** Ves este archivo en un proyecto: `productos.json`. ¿Qué esperas encontrar dentro?
   - a) Una foto de los productos
   - b) Datos estructurados de productos (nombres, precios…) ✔
   - c) El diseño visual de la página
   - d) Un video promocional

---

## A4 — Carpetas y rutas: la dirección exacta de cada cosa

### Concepto

Las carpetas (los programadores les dicen **directorios**) organizan los archivos. Y la **ruta** (path) es la dirección exacta de un archivo dentro de esas carpetas:

```
C:\Proyectos\mi-tienda\imagenes\logo.png
```

Se lee: "en el disco C, carpeta Proyectos, carpeta mi-tienda, carpeta imagenes, está logo.png". En Windows las rutas usan `\`; en Mac, Linux y en la web usan `/` — mismo concepto, distinto separador.

Dos rutas especiales que verás mil veces:

- **Ruta absoluta:** desde el inicio del disco — `C:\Proyectos\mi-tienda\index.html`
- **Ruta relativa:** desde donde estás parado — si ya estás en `mi-tienda`, basta con `imagenes/logo.png`

Los proyectos se dibujan como **árbol de archivos**:

```
mi-tienda/
├── index.html
├── styles.css
└── imagenes/
    └── logo.png
```

Ese dibujito es el mapa de cualquier proyecto: las IAs lo usan constantemente para mostrarte qué hay y dónde.

### Analogía

La ruta es una **dirección postal**: país → estado → ciudad → calle → número. `C:\Proyectos\mi-tienda\logo.png` es exactamente eso: disco → carpeta → subcarpeta → archivo. La ruta relativa es como decir "aquí a la vuelta, casa 12" — solo funciona si ya sabes dónde estás parado.

### Cómo se ve en la práctica

Dentro del código, las rutas conectan los archivos entre sí:

```html
<img src="imagenes/logo.png">
<link href="styles.css">
```

Esa página está diciendo: "mi logo está en la carpeta imagenes, y mis estilos aquí junto". Si alguien mueve `logo.png` a otra carpeta sin actualizar la ruta, la imagen se rompe — el clásico cuadrito de imagen rota es casi siempre una ruta equivocada.

### Díselo a la IA

> "Muéstrame el árbol de archivos de mi proyecto. Después dime si hay rutas rotas: imágenes o archivos que se referencian pero no existen donde se espera."

### Ejercicios

1. **[opción múltiple]** ¿Qué es una ruta?
   - a) El tamaño de un archivo
   - b) La dirección exacta de un archivo dentro de las carpetas ✔
   - c) El tipo de un archivo
   - d) La velocidad de lectura

2. **[completar]** "La ruta ____ empieza desde el inicio del disco; la ruta ____ empieza desde donde estás parado."
   - Banco: `absoluta` · `relativa` · `principal` · `secundaria`
   - Respuesta: absoluta / relativa

3. **[qué hace]** En una página ves `<img src="imagenes/logo.png">` pero la imagen aparece rota. ¿Causa más probable?
   - a) La imagen pesa mucho
   - b) El archivo no está en esa ruta ✔
   - c) El internet está lento
   - d) La imagen es muy grande

4. **[ordenar]** Acomoda la ruta de lo general a lo específico:
   - Desordenado: `logo.png` · `C:` · `mi-tienda` · `Proyectos` · `imagenes`
   - Respuesta: C: → Proyectos → mi-tienda → imagenes → logo.png

5. **[verdadero/falso]** "En la web y en Linux las rutas usan / en lugar de \."
   - Respuesta: VERDADERO — el `\` es cosa de Windows; todo lo demás usa `/`.

---

## A5 — La terminal I: qué es, por qué existe y cómo abrirla

### Concepto

Antes de las ventanas y el mouse, a las computadoras se les hablaba escribiendo órdenes en una pantalla negra. Esa pantalla sigue existiendo, se llama **terminal** (también consola o línea de comandos), y es la herramienta favorita de los programadores — y de las IAs que programan.

¿Por qué sigue viva? Porque es directa y precisa: en vez de abrir 4 ventanas y dar 10 clics, escribes una línea y listo. Las órdenes escritas se llaman **comandos**.

Cómo abrirla en tu equipo:

- **Windows:** tecla Windows → escribe "PowerShell" o "Terminal" → Enter
- **Mac:** Cmd + Espacio → escribe "Terminal" → Enter
- **Dentro de VS Code** (lo verás en la Materia C): menú Terminal → Nueva terminal

Al abrirla verás algo como `C:\Users\TuNombre>` parpadeando. Eso se llama **prompt** — la terminal diciéndote "estoy lista, ordena". (Sí, igual que el prompt de la IA: en ambos casos es "el lugar donde escribes lo que quieres".)

No necesitas dominar la terminal: necesitas **perderle el miedo**. Cuando la IA te diga "abre la terminal y corre este comando", sabrás exactamente qué hacer.

### Analogía

La terminal es el **walkie-talkie del ejército**: sin adornos, sin menús, pura orden directa. Las ventanas y botones son como pedir por WhatsApp con stickers — más bonito, pero más lento. El chef experimentado no pide del menú con fotos: le habla directo a la cocina con las palabras exactas.

### Cómo se ve en la práctica

Abriste la terminal en Windows y ves:

```
Windows PowerShell
Copyright (C) Microsoft Corporation.

C:\Users\Ray>
```

Ese `C:\Users\Ray>` te dice dos cosas: la terminal está lista, y estás "parado" en la carpeta del usuario Ray (¡una ruta! — lección A4). Todo comando que escribas se ejecuta desde ahí.

### Díselo a la IA

> "Voy a seguir tus instrucciones desde la terminal de Windows (PowerShell). Antes de cada comando, dime qué hace en una línea. Si un comando es riesgoso, adviérteme antes."

Regla de oro DEV SYSTEM: **nunca corras un comando que no entiendes**. Un comando puede instalar algo… o borrar algo.

### Ejercicios

1. **[opción múltiple]** ¿Qué es la terminal?
   - a) Un lenguaje de programación
   - b) Una forma de darle órdenes escritas a la computadora ✔
   - c) Un tipo de archivo
   - d) Un programa de diseño

2. **[completar]** "Las órdenes que se escriben en la terminal se llaman ____, y el símbolo parpadeante que espera tu orden se llama ____."
   - Banco: `comandos` · `prompt` · `clics` · `cursor web`
   - Respuesta: comandos / prompt

3. **[ordenar]** Pasos para abrir la terminal en Windows:
   - Desordenado: `presionar Enter` · `tecla Windows` · `escribir "PowerShell"`
   - Respuesta: tecla Windows → escribir "PowerShell" → presionar Enter

4. **[verdadero/falso]** "Hay que dominar la terminal de memoria antes de poder construir con IA."
   - Respuesta: FALSO — necesitas reconocerla y perderle el miedo; la IA te da los comandos exactos.

5. **[qué hace]** Ves `C:\Users\Ray>` en la pantalla negra. ¿Qué significa?
   - a) La computadora tiene un error
   - b) La terminal está lista y estás parado en la carpeta del usuario Ray ✔
   - c) Falta instalar un programa
   - d) El usuario Ray no tiene permisos

---

## A6 — La terminal II: moverte con cd y ver con ls/dir

### Concepto

Ya sabes qué es la terminal (A5). Ahora los dos comandos que vas a usar antes que cualquier otro: los que te dejan **moverte** entre carpetas y **ver** qué hay en cada una. Sin ellos, la terminal es una caja negra; con ellos, ya la navegas.

- `cd` — **Change Directory**: cambia a otra carpeta. `cd Proyectos` te mete a Proyectos. `cd ..` te saca (los dos puntos son "sube un nivel"). `cd \` (Windows) o `cd /` (Mac/Linux) te lleva a la raíz del disco.
- `ls` (Mac/Linux) o `dir` (Windows) — **List**: muestra el contenido de la carpeta donde estás parado. Archivos y subcarpetas en pantalla.

En la moderna PowerShell de Windows, `ls` también funciona (Microsoft se rindió y agregó el alias). Así que en cualquier terminal actual, puedes usar `ls`.

Notación que verás en instrucciones:

- `.` → "la carpeta actual"
- `..` → "un nivel arriba"
- `~` → "mi carpeta de usuario" (en Mac/Linux)
- `/` o `\` → separador de carpetas (según el OS)

Con esos dos comandos y esa notación, ya puedes seguir cualquier tutorial de programación que aparezca este año.

### Analogía

`cd` es **entrar y salir de habitaciones**; `ls` es **prender la luz para ver qué hay**. Cuando entras a una casa que no conoces, haces exactamente eso: entras a la sala, ves qué hay, pasas a la cocina, ves qué hay. En la terminal es idéntico — solo que en vez de habitaciones son carpetas.

### Cómo se ve en la práctica

```
C:\Users\Ray> cd Proyectos
C:\Users\Ray\Proyectos> ls
    mi-tienda/
    barberia/
    porfolio/
C:\Users\Ray\Proyectos> cd mi-tienda
C:\Users\Ray\Proyectos\mi-tienda> ls
    index.html
    styles.css
    app.js
C:\Users\Ray\Proyectos\mi-tienda> cd ..
C:\Users\Ray\Proyectos>
```

Toda esa secuencia es: "entra a Proyectos → mira qué hay → entra a mi-tienda → mira qué hay → sal a Proyectos otra vez". Fluido, sin abrir una sola ventana.

### Díselo a la IA

> "Voy a seguir tus pasos desde la terminal en Windows. Dame los comandos `cd` exactos para llegar a mi carpeta del proyecto, y después `ls` para confirmar que estoy en el lugar correcto antes de continuar."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `cd ..`?
   - a) Borra la carpeta actual
   - b) Sube un nivel (sale de la carpeta actual) ✔
   - c) Copia la carpeta
   - d) Cierra la terminal

2. **[relacionar]** Une el símbolo con lo que significa:
   - `.` ↔ La carpeta actual
   - `..` ↔ Un nivel arriba
   - `~` ↔ Mi carpeta de usuario (Mac/Linux)
   - `/` ↔ Separador de carpetas

3. **[completar]** "____ te lleva a otra carpeta; ____ te muestra qué hay dentro de la carpeta donde estás."
   - Banco: `cd` · `ls` · `mkdir` · `rm`
   - Respuesta: cd / ls

4. **[ordenar]** Pasos para entrar a `Proyectos/mi-tienda` desde `C:\Users\Ray`:
   - Desordenado: `cd mi-tienda` · `ls` · `cd Proyectos`
   - Respuesta: cd Proyectos → ls → cd mi-tienda

5. **[verdadero/falso]** "En la PowerShell moderna de Windows también puedes usar `ls`."
   - Respuesta: VERDADERO — Microsoft agregó el alias hace años.

---

## A7 — La terminal III: crear, borrar y por qué hay que tener cuidado

### Concepto

Cuatro comandos más y ya dominas el 80% de la terminal que verás en tu carrera:

- `mkdir` — **Make Directory**: crea una carpeta. `mkdir mi-proyecto` crea una carpeta con ese nombre donde estás parado.
- `touch` (Mac/Linux) o `New-Item` (PowerShell) — crea un archivo vacío. Menos común: normalmente los archivos los crean los editores.
- `rm` (Mac/Linux) o `Remove-Item` (PowerShell) — **Remove**: borra. `rm archivo.txt` borra ese archivo.
- `cp` / `Copy-Item` — copia. `mv` / `Move-Item` — mueve o renombra.

Y aquí viene la parte que te tienes que grabar en la frente: **la terminal no tiene bote de reciclaje**. Lo que borras con `rm` desaparece de verdad, sin ventana de "¿estás seguro?", sin ir a la papelera. Esto es un riesgo real:

- `rm archivo.txt` — borra un archivo (recuperable a veces con software especial)
- `rm -rf carpeta` — borra una carpeta ENTERA con TODO adentro, sin preguntar (casi imposible de recuperar)
- `rm -rf /` — el meme legendario: intenta borrar TODO el disco. NO lo escribas ni de broma.

Regla de oro de este programa: **ANTES de correr un `rm`, dile a la IA exactamente qué vas a borrar y pídele que confirme**. Un segundo de pausa te ha salvado el proyecto miles de veces.

### Analogía

La terminal es una **cocina profesional sin señales de "cuidado, cuchillo"**: todo está a la mano, todo corta rapidísimo, y no hay avisos. Un cocinero experimentado es cuidadoso PRECISAMENTE porque sabe lo filosa que está la herramienta. El que corre `rm` sin pensar es el que se corta el dedo.

### Cómo se ve en la práctica

```
C:\Users\Ray> mkdir nuevo-proyecto        ← crea carpeta
C:\Users\Ray> cd nuevo-proyecto
C:\Users\Ray\nuevo-proyecto> mkdir imagenes
C:\Users\Ray\nuevo-proyecto> ls
    imagenes/
C:\Users\Ray\nuevo-proyecto> rm imagenes  ← intento borrar
    rm: no se puede borrar 'imagenes':
        es una carpeta (usa -r)
```

La terminal te avisa: para borrar una carpeta hay que pedirlo explícitamente con `-r` (recursive). Eso es una barrera de seguridad diminuta pero real.

### Díselo a la IA

> "Necesito borrar esto: [describe qué]. Antes de darme el comando, dime exactamente qué se va a borrar, si es reversible, y qué debo tener respaldado por si me equivoco."

### Ejercicios

1. **[opción múltiple]** ¿Qué comando crea una carpeta nueva?
   - a) rm
   - b) mkdir ✔
   - c) cd
   - d) ls

2. **[verdadero/falso]** "La terminal tiene bote de reciclaje: lo que borras con `rm` se puede recuperar como en Windows."
   - Respuesta: FALSO — `rm` borra en serio, sin papelera intermedia.

3. **[relacionar]** Une el comando con su acción:
   - mkdir ↔ Crear carpeta
   - rm ↔ Borrar
   - cp ↔ Copiar
   - mv ↔ Mover o renombrar

4. **[completar]** "La regla de oro antes de correr `rm` es preguntarle a la ____ exactamente qué se va a ____."
   - Banco: `IA` · `borrar` · `terminal` · `guardar`
   - Respuesta: IA / borrar

5. **[qué hace]** Ves este comando en un tutorial: `rm -rf carpeta-vieja`. ¿Qué debes hacer?
   - a) Correrlo sin pensar, es un tutorial
   - b) Entender que borra la carpeta entera sin retorno; confirmar que es la correcta ✔
   - c) Cambiar `rm` por `del`
   - d) Escribirlo dos veces por seguridad

---

## A8 — Sistemas operativos: Windows, macOS y el reino de Linux

### Concepto

El **sistema operativo** (OS) es el programa jefe: arranca cuando prendes el equipo y administra todo lo demás — archivos, memoria, programas, pantalla. Sin sistema operativo, una computadora es un ladrillo caro.

Los tres que importan:

- **Windows** — el rey de casas y oficinas. Probablemente lo estás usando ahorita.
- **macOS** — el de las Mac. Popular entre diseñadores y programadores.
- **Linux** — gratuito, de código abierto, y **corre en la inmensa mayoría de los servidores del mundo**. Cuando tu app viva "en la nube", vivirá en Linux (así trabajes desde Windows).

Este último punto es el que te cambia el mapa. Los comandos de terminal que usan las IAs tienden a ser "estilo Linux" (`ls`, `mkdir`, rutas con `/`) porque el destino final del código es un servidor Linux. Por eso vale la pena reconocer sus comandos aunque no lo uses tú.

Dato importante: **Android está basado en Linux**. Miles de millones de celulares corren una versión de Linux por debajo. Así de dominante es.

### Analogía

El sistema operativo es el **gerente general del restaurante**: no cocina, pero decide quién usa la cocina, a qué hora, con cuánto gas, y qué pasa si dos meseros piden lo mismo al mismo tiempo. Windows, Mac y Linux son tres gerentes con estilos distintos administrando el mismo tipo de restaurante. Linux es el gerente que trabaja gratis, nunca duerme y por eso lo contratan todos los servidores del mundo.

### Cómo se ve en la práctica

Cuando rentes tu primer servidor (Mes 9), verás algo así:

```
Elige la imagen de tu servidor:
○ Ubuntu 24.04 LTS      ← Linux (el más común)
○ Debian 12             ← Linux
○ Amazon Linux 2023     ← Linux
○ Windows Server 2022   ← más caro y raro para apps web
```

Tres de cuatro opciones son Linux. Y en el Mes 9 vas a entender por qué Ubuntu es casi siempre la respuesta correcta.

### Díselo a la IA

> "Voy a deployar mi aplicación en un servidor. ¿Qué sistema operativo me recomiendas y por qué? Soy principiante, quiero el estándar de la industria y evitar sorpresas."

### Ejercicios

1. **[opción múltiple]** ¿Qué sistema operativo corre en la mayoría de los servidores de internet?
   - a) Windows
   - b) macOS
   - c) Linux ✔
   - d) iOS

2. **[verdadero/falso]** "Android está basado en Linux."
   - Respuesta: VERDADERO — miles de millones de celulares corren Linux por debajo.

3. **[relacionar]** Une el sistema con su territorio:
   - Windows ↔ Casas y oficinas
   - macOS ↔ Las computadoras Mac
   - Linux ↔ Servidores y Android
   - iOS ↔ Los iPhone

4. **[completar]** "El sistema operativo es el ____ jefe: administra archivos, memoria y ____."
   - Banco: `programa` · `programas` · `usuario` · `internet`
   - Respuesta: programa / programas

5. **[opción múltiple]** ¿Por qué Linux domina los servidores?
   - a) Es el más bonito
   - b) Es gratuito, estable y eficiente ✔
   - c) Windows no funciona en servidores
   - d) Es el único con terminal

---

## A9 — Ubuntu y el reino de los servidores

### Concepto

**Ubuntu** es la versión de Linux más popular del mundo, la que casi todo servidor de la nube usa por default. Su nombre viene de una palabra africana que significa "humanidad hacia los demás" — un guiño a la filosofía del código abierto.

¿Por qué internet corre en Linux y específicamente en Ubuntu?

1. **Gratuito** — un servidor con Windows cuesta la licencia; uno con Ubuntu, cero.
2. **Estable** — se puede dejar prendido meses sin reiniciar. Los reinicios sorpresa de Windows serían impensables en un servidor productivo.
3. **Ligero** — usa poca RAM y CPU. En un servidor, cada megabyte importa (pagas por él).
4. **Auditable** — el código de Linux es público. Miles de programadores lo revisan. Los bugs de seguridad se descubren y arreglan rapidísimo.

Otras "distribuciones" de Linux que verás (todas primas hermanas): **Debian** (Ubuntu está basada en Debian), **Amazon Linux** (la variante de AWS), **CentOS/RHEL** (más corporativo), **Alpine** (súper ligera, usada en contenedores).

Para ti, en 2026: si te preguntan qué sistema poner en un servidor y no sabes, di "Ubuntu 24.04 LTS". La sigla LTS es **Long Term Support**: soporte por 5 años. Es la opción segura.

### Analogía

Ubuntu es el **Toyota Corolla de los servidores**: no es el más lujoso ni el más rápido, pero es confiable, barato de mantener, y hay refacciones (documentación, tutoriales, respuestas en foros) en cada esquina. Cuando dudes, es la respuesta correcta.

### Cómo se ve en la práctica

Cuando abras la terminal de un servidor Ubuntu recién rentado, verás algo como:

```
Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.5.0-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

Last login: Fri Jul 18 03:14:22 2026

ray@servidor:~$
```

Ese `ray@servidor:~$` es el prompt (¿te acuerdas de A5?). El `~` te dice que estás en tu carpeta de usuario, y ya estás listo para dar órdenes.

### Díselo a la IA

> "Acabo de rentar un servidor Ubuntu 24.04. Guíame paso a paso para dejarlo listo para mi proyecto: qué actualizar primero, qué instalar, qué asegurar. Explícame qué hace cada comando antes de que lo corra."

### Ejercicios

1. **[opción múltiple]** ¿Qué es Ubuntu?
   - a) Un lenguaje de programación
   - b) La versión de Linux más popular ✔
   - c) Una marca de servidores físicos
   - d) Un editor de código

2. **[completar]** "En un servidor, la versión de Ubuntu con soporte largo se llama ____ y su duración típica es de ____ años."
   - Banco: `LTS` · `5` · `Pro` · `10`
   - Respuesta: LTS / 5

3. **[verdadero/falso]** "Un servidor con Windows es siempre más barato que uno con Ubuntu."
   - Respuesta: FALSO — Ubuntu es gratis; Windows Server cuesta licencia.

4. **[relacionar]** Une la razón con lo que aporta:
   - Gratuito ↔ No pagas licencia por servidor
   - Estable ↔ Meses sin reiniciar
   - Ligero ↔ Usa poca RAM y CPU
   - Auditable ↔ Su código lo revisan miles de personas

5. **[qué hace]** Ves `ray@servidor:~$` en la terminal de un servidor. ¿Qué te dice?
   - a) Hay un error de red
   - b) Estás conectado como usuario `ray`, en tu carpeta personal, listo para dar órdenes ✔
   - c) El servidor está apagado
   - d) Falta pagar la mensualidad

---

## A10 — ¿Qué es "instalar" algo? Programas, ejecutables e instaladores

### Concepto

**Instalar** un programa es copiar sus archivos a tu computadora y dejarlos listos para ejecutarse. Suena simple porque lo es. Pero hay tres formas comunes de hacerlo, y saber la diferencia te ahorra líos:

1. **Instalador gráfico** (`.exe`, `.msi` en Windows; `.dmg` en Mac) — descargas un archivo, doble clic, siguiente-siguiente-listo. Photoshop, Chrome, VS Code.
2. **Portable** — descargas un `.zip`, lo descomprimes en una carpeta, y ya. No "instala" nada en el sistema: solo vive ahí.
3. **Por terminal** — el favorito de los programadores. En Mac: `brew install algo`. En Ubuntu: `apt install algo`. En Windows moderno: `winget install algo`. Un solo comando, y listo — sin ventanas ni siguientes.

Un archivo **ejecutable** es uno que la computadora puede correr como programa (`.exe` en Windows, sin extensión o `.sh` en Linux, `.app` en Mac). Cuando descargas algo de internet, la primera pregunta debe ser: ¿de quién viene? Un `.exe` de una fuente desconocida puede ser un virus. Regla: descarga solo de la página oficial del programa.

Cuando la IA te diga "instala Node.js" o "instala Python", te va a dar la instrucción — pero tú vas a saber que hay tres caminos y por qué eligió uno.

### Analogía

Instalar es como **traer un mueble nuevo a casa**: puedes contratar quien te lo lleve armado (instalador gráfico), traer las piezas y armarlo tú (portable), o pedirlo por app y que llegue solo a tu recámara (terminal). El resultado es el mismo mueble — cambia el esfuerzo y la ceremonia.

### Cómo se ve en la práctica

Instalación por terminal, la que verás más seguido:

```
C:\Users\Ray> winget install --id OpenJS.NodeJS
    Found Node.js LTS
    Downloading...
    Installing...
    Successfully installed
```

En 30 segundos, sin cerrar una sola ventana, ya tienes Node.js instalado. Este flujo es el que hace que los programadores prefieran la terminal para todo.

### Díselo a la IA

> "Necesito instalar [nombre del programa] en mi computadora (Windows / Mac / Linux). Dame las 3 formas de hacerlo (instalador gráfico, portable, terminal) y recomiéndame cuál me conviene por mi nivel. Antes de darme comandos de terminal, dime qué hace cada uno."

### Ejercicios

1. **[relacionar]** Une la forma de instalar con su descripción:
   - Instalador gráfico ↔ Doble clic, siguiente-siguiente-listo
   - Portable ↔ Descargas un zip y descomprimes
   - Por terminal ↔ Un solo comando y listo

2. **[opción múltiple]** ¿Cuál es un ejecutable de Windows?
   - a) documento.pdf
   - b) foto.png
   - c) programa.exe ✔
   - d) datos.csv

3. **[completar]** "Descarga programas solo desde su ____; un ejecutable de una fuente ____ puede ser un virus."
   - Banco: `página oficial` · `desconocida` · `USB` · `favorita`
   - Respuesta: página oficial / desconocida

4. **[verdadero/falso]** "Instalar por terminal siempre es más peligroso que con instalador gráfico."
   - Respuesta: FALSO — es igual de seguro si el comando viene de una fuente confiable; es solo un método más rápido.

5. **[qué hace]** `winget install --id OpenJS.NodeJS` — ¿qué logra?
   - a) Desinstala Node.js
   - b) Instala Node.js desde el gestor de paquetes de Windows ✔
   - c) Actualiza Windows
   - d) Reinicia la computadora
