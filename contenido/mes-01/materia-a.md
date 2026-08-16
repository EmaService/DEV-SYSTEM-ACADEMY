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

---

## A11 — Dependencias y librerías: nadie construye desde cero

### Concepto

Nadie construye software moderno desde cero. Los programadores — y las IAs — reutilizan **piezas de código ya hechas** llamadas **librerías** (en inglés, *library*). Una librería es código listo que resuelve una tarea concreta: formatear fechas, comprimir imágenes, aceptar pagos, dibujar una gráfica. No tienes que escribirla: la descargas y la usas.

Cada librería que tu proyecto usa se llama una **dependencia** — tu proyecto *depende* de ella para funcionar. Suena técnico, pero es simple: si tu página usa una librería de pagos y esa librería no está, tu botón de "Pagar" deja de funcionar.

Cuando diriges a una IA, ella toma decisiones de dependencias por ti, pero tú vas a verlas en sus reportes: "instalé `express` para el servidor" o "agregué la librería de pagos `stripe`". Que no te sorprenda: un proyecto sencillo puede tener cientos de dependencias, porque cada una resuelve un pedacito del rompecabezas.

Tu trabajo no es memorizarlas, es **entender la conversación**: ¿qué pieza se está agregando y para qué? Cuando la IA te diga "agregué una dependencia", ya sabes que está colocando una pieza de Lego que no tuvo que fabricar.

### Analogía

Construir software es como **armar una casa con material ya fabricado**: nadie funde su propio acero ni hace sus propios clavos. Compras ladrillos, cables y bombillas de proveedores especializados, y tu trabajo es el diseño y el ensamble. Las librerías son esos proveedores: te dan la pieza probada y lista, y tú decides dónde va.

### Cómo se ve en la práctica

Cuando una IA instala una librería, te lo reporta así:

```
instalé express v4.18.2
  → maneja las rutas del servidor (qué hacer en /, /productos, etc.)

instalé morgan
  → registra cada petición que llega (log del servidor)
```

Cada línea es una pieza que tu proyecto ahora usa. Sin escribir una línea de código, tu proyecto ya tiene un servidor y un registro de actividad — gracias a piezas prestadas.

### Díselo a la IA

> "Estoy construyendo [mi proyecto] con IA. ¿Qué librerías me recomiendas para [la función principal]? Explícame qué hace cada una en una línea, cuáles son las más confiables, y cuál agregarías primero."

Ese prompt te entrena para leer sus reportes de dependencias como quien lee una lista de compras.

### Ejercicios

1. **[opción múltiple]** ¿Qué es una librería?
   - a) Un programa que borra archivos
   - b) Una pieza de código ya hecha que resuelve una tarea ✔
   - c) Un tipo de disco duro
   - d) Una carpeta de imágenes

2. **[completar]** "Las ____ son las piezas de código listo que tu proyecto usa; tu proyecto ____ de ellas para funcionar."
   - Banco: `librerías` · `depende` · `imágenes` · `recuerda`
   - Respuesta: librerías / depende

3. **[relacionar]** Une la librería con lo que resuelve:
   - express ↔ Rutas del servidor
   - morgan ↔ Registro de peticiones (log)
   - stripe ↔ Pagos con tarjeta
   - chart.js ↔ Gráficas

4. **[verdadero/falso]** "Es normal que un proyecto moderno use cientos de librerías."
   - Respuesta: VERDADERO — cada una resuelve un pedacito del rompecabezas.

5. **[qué hace]** Una IA reporta: "instalé `express`". ¿Qué significa?
   - a) Desinstaló el servidor
   - b) Agregó una librería para manejar las rutas del servidor ✔
   - c) Borró la base de datos
   - d) Actualizó el navegador

---

## A12 — Versiones: por qué 2.0 puede romper lo que 1.9 hacía bien

### Concepto

Todo software tiene un número de versión, y ese número no es un capricho: es un código. El clásico formato es **1.9.2** — tres números separados por puntos, cada uno con un significado:

- El **primero** (major, "la mayor"): cambios grandes. **Aquí es donde se puede romper algo.** De 1.9 a 2.0 no es "un poquito más nuevo": es un cambio de fondo, y el código que funcionaba con 1.9 puede dejar de funcionar.
- El **segundo** (minor, "la menor"): funciones nuevas, pero compatibles. De 1.8 a 1.9 se agregan cosas sin romper lo que ya había.
- El **tercero** (patch, "el parche"): corrección de errores pequeña. De 1.9.1 a 1.9.2 se arregla un bug sin cambiar nada más.

¿Por qué una actualización rompe cosas? Porque los creadores de la librería cambiaron reglas: renombraron funciones, cambiaron cómo se llaman, o quitaron funciones viejas. Tu código — o el de la IA — le hablaba a la librería "en el idioma de la 1.9"; la 2.0 habla distinto.

Cuando diriges a una IA verás esto en vivo: "actualicé la librería y se rompió el login". La solución profesional casi nunca es reescribir todo: es **fijar la versión** que sí funcionaba, o pedirle a la IA que adapte el código al idioma nuevo. Por eso los proyectos "congelan" versiones en el `package.json` (lo verás en A13).

Dato memorable: si el número de versión cambia en la primera posición, espera problemas. Si cambia en la última, solo es una corrección. Leer versiones te da radar.

### Analogía

Las versiones son como **los modelos de un celular**: el modelo 2019 (1.9) y el modelo 2026 (2.0) tienen accesorios incompatibles. El cargador del teléfono viejo ya no entra en el nuevo. No es que el nuevo esté mal — es que cambió el estándar. El patch (de 1.9.1 a 1.9.2) es como un parche de tela: el mismo pantalón, solo arreglado.

### Cómo se ve en la práctica

Error típico al actualizar una dependencia:

```
npm install mi-libreria
→ warning: mi-libreria@2.0.0 ya no incluye createApp()
   usa createApplication() en su lugar

Tu app:  mi-libreria.createApp()  ✘ (ya no existe)
Arreglo: mi-libreria.createApplication()  ✔
```

La librería cambió el nombre de una función entre la 1.9 y la 2.0. El código que la usaba se rompe hasta que se adapta. Leer el aviso es la mitad del trabajo.

### Díselo a la IA

> "Actualicé [librería] y mi app se rompió. ¿Qué cambió entre la versión que tenía y la nueva? Dime si conviene volver a la versión anterior (y cómo fijarla) o adaptar el código, y qué riesgos tiene cada opción."

### Ejercicios

1. **[opción múltiple]** ¿Qué cambio de versión es más probable que rompa tu código?
   - a) De 1.9.1 a 1.9.2
   - b) De 1.9 a 2.0 ✔
   - c) De 1.8 a 1.9
   - d) Ninguna versión puede romper nada

2. **[completar]** "En la versión 2.3.1, el 2 es la versión ____ (puede romper), el 3 es la ____ (agrega funciones) y el 1 es el ____ (arregla bugs)."
   - Banco: `mayor` · `menor` · `parche` · `inicial`
   - Respuesta: mayor / menor / parche

3. **[verdadero/falso]** "El tercer número de una versión (el patch) solo corrige errores pequeños sin cambiar las reglas."
   - Respuesta: VERDADERO — el parche arregla sin romper.

4. **[ordenar]** Pasos para resolver una dependencia rota por una actualización:
   - Desordenado: `identificar qué versión funcionaba` · `volver a esa versión o adaptar el código` · `leer el aviso de la librería` · `probar que todo siga funcionando`
   - Respuesta: leer el aviso → identificar qué versión funcionaba → volver o adaptar → probar

5. **[relacionar]** Une la parte de la versión con su función:
   - Primer número ↔ Cambio mayor que puede romper
   - Segundo número ↔ Funciones nuevas compatibles
   - Tercer número ↔ Corrección de errores

---

## A13 — npm: la tienda de piezas de JavaScript (y package.json)

### Concepto

Ya sabes qué son las librerías (A11). Ahora, ¿de dónde salen? **npm** — *Node Package Manager*, "el administrador de paquetes de Node" — es la tienda de piezas de JavaScript más grande del mundo: millones de librerías listas para descargar. Se usa con un comando:

```
npm install express
```

Ese comando baja la librería `express`, la coloca en la carpeta `node_modules` de tu proyecto, y registra en una lista llamada **`package.json`** que tu proyecto ahora depende de ella. El `package.json` es el recibo de compras: la lista exacta de dependencias y sus versiones (lo de A12).

Tres lugares que verás en cada proyecto:

- **`package.json`** — la lista de dependencias y la configuración del proyecto. Si se pierde, tu proyecto "olvida" qué piezas necesita.
- **`node_modules`** — donde viven las piezas descargadas. Puede pesar cientos de MB o gigas (¿te acuerdas de A2?). Nadie la toca a mano: se regenera con un `npm install`.
- **`npm install`** — el comando que, leyendo el `package.json`, descarga todo lo que falta. Es el "trae todo lo de la lista".

Cuando la IA te diga "corre `npm install`", está diciendo "reponte las piezas según la lista". Cuando te diga "corre `npm install express`", está agregando una pieza nueva a la lista. Eso es todo. No hay misterio.

### Analogía

npm es el **mercado de abastos de JavaScript**: miles de puestos con piezas probadas. El `package.json` es tu lista de compras escrita; `node_modules` es el bolsón lleno que cargas a casa; y `npm install` es el mandado: caminas el mercado con tu lista y llenas el bolsón.

### Cómo se ve en la práctica

Un `package.json` recién creado, con una dependencia:

```json
{
  "name": "mi-tienda",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

Se lee: "mi proyecto se llama mi-tienda, es versión 1.0.0, y depende de express en su versión 4.18.2". Si esta computadora se pierde, otro `npm install` reconstruye todo desde esta lista.

### Díselo a la IA

> "Necesito [funcionalidad] en mi proyecto. ¿Qué paquete de npm me recomiendas? Verifica que sea popular, activamente mantenido y seguro antes de instalarlo, y explícame en una línea para qué sirve."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `npm install express`?
   - a) Instala el navegador Express
   - b) Descarga la librería express y la registra en el package.json ✔
   - c) Borra todas las dependencias
   - d) Crea una página web

2. **[relacionar]** Une la pieza con su papel:
   - package.json ↔ La lista de dependencias del proyecto
   - node_modules ↔ La carpeta donde viven las piezas descargadas
   - npm install ↔ El comando que baja todo lo de la lista

3. **[completar]** "Al correr `npm install`, el proyecto lee su ____ y descarga las piezas a la carpeta ____."
   - Banco: `package.json` · `node_modules` · `navegador` · `escritorio`
   - Respuesta: package.json / node_modules

4. **[verdadero/falso]** "La carpeta node_modules se regenera sola con un `npm install`; no hace falta copiarla a mano."
   - Respuesta: VERDADERO — con el package.json basta para reconstruirla.

5. **[qué hace]** Ves `npm install` (sin nombre de paquete) en un tutorial. ¿Qué hace?
   - a) Instala todos los paquetes que faltan según el package.json ✔
   - b) Crea un proyecto nuevo
   - c) Borra el proyecto
   - d) Actualiza el navegador

---

## A14 — La memoria caché: por qué "borrar caché" arregla cosas

### Concepto

La **caché** (se pronuncia "cash", del inglés *cache*) es una copia guardada para no repetir trabajo. Tu navegador guarda en caché las imágenes, los estilos y los archivos de las páginas que visitas, para que la siguiente vez carguen al instante. En vez de descargar todo de nuevo, saca la copia que ya tiene.

Aquí viene el problema del que habla todo el mundo: si el servidor cambió la página pero tu navegador guarda la copia vieja, **te sigue mostrando lo viejo**. Ya cambiaste el código, ya guardaste, pero la pantalla "no se actualiza". No es que tu código esté mal: es que tu navegador te está sirviendo el recuerdo, no la realidad.

Por eso "borrar caché" arregla cosas: le quitas al navegador la copia vieja y lo obligas a bajar la nueva. El atajo más usado es la **recarga forzada**: `Ctrl + F5` (o `Cmd + Shift + R` en Mac).

¿Cuándo te tocará esto a ti? Todo el tiempo. Le pides a la IA que cambie el color del botón, guardas, recargas… y el botón sigue rojo. Antes de entrar en pánico, prueba la recarga forzada o borrar la caché. Es el 90% de los "no cambió nada" de este oficio. El otro 10% es un error de ruta (¿te acuerdas de A4?).

### Analogía

La caché es tu **despensa de emergencia**: compras de más lo que usas seguido para no ir al súper cada vez. Pero si el súper cambió la receta del producto, tú sigues consumiendo la caja vieja hasta que limpias tu despensa. Borrar caché es tirar lo viejo para ir por lo nuevo.

### Cómo se ve en la práctica

Cuando recargas tu página y la versión nueva no aparece:

```
1. Prueba la recarga normal (F5)        → sigue la vieja
2. Prueba la recarga forzada (Ctrl+F5)  → ya cambió ✔
3. Si sigue: borra la caché del navegador o abre en ventana de incógnito
```

La ventana de incógnito es tu mejor amiga para diagnosticar: casi siempre arranca sin caché. Si en incógnito tu página nueva se ve, el problema era la caché, no tu código.

### Díselo a la IA

> "Cambié mi página pero al recargar sigo viendo la versión vieja. ¿Cómo sé si es problema de caché y cómo la borro en [mi navegador]? Dame el atajo exacto y los pasos para confirmar que ya se ve la nueva."

### Ejercicios

1. **[opción múltiple]** ¿Para qué sirve la caché del navegador?
   - a) Para guardar contraseñas de todos los sitios
   - b) Para cargar páginas más rápido guardando copias de lo que ya viste ✔
   - c) Para borrar archivos viejos
   - d) Para bloquear anuncios

2. **[verdadero/falso]** "Si cambiaste el código de tu página pero el navegador muestra la versión vieja, puede ser la caché y no un error de código."
   - Respuesta: VERDADERO — la caché guarda copias viejas que a veces tardan en actualizarse.

3. **[completar]** "Borrar caché es ____ la copia vieja y ____ la página desde el servidor."
   - Banco: `eliminar` · `recargar` · `esconder` · `adivinar`
   - Respuesta: eliminar / recargar

4. **[ordenar]** Pasos para confirmar que el problema es la caché:
   - Desordenado: `abrir la página en ventana de incógnito` · `ver si la versión nueva aparece` · `si aparece, borrar la caché del navegador normal`
   - Respuesta: abrir incógnito → ver si aparece → borrar caché del navegador normal

5. **[qué hace]** `Ctrl + F5` en un navegador — ¿qué hace?
   - a) Cierra la pestaña
   - b) Fuerza la recarga ignorando la caché ✔
   - c) Abre la consola
   - d) Baja la página al final

---

## A15 — Procesos: qué está corriendo en tu compu ahora mismo

### Concepto

Un **proceso** es un programa que está corriendo ahorita mismo. Cada pestaña del navegador, cada app, cada servicio del sistema: todos son procesos. Tu computadora los administra a todos (¿el gerente del A8?) y les reparte RAM y CPU (¿te acuerdas de A1?).

En Windows lo ves en el **Administrador de tareas** (Ctrl + Shift + Esc); en Mac, en el **Monitor de actividad**. Ahí verás decenas de procesos con su uso de memoria y procesador. No los conozcas todos: reconoce el patrón. Un proceso que come el 90% de la CPU explica por qué tu compu va lenta.

El detalle que te va a salvar en este oficio: un proceso **puede seguir corriendo sin ventana visible**. Esos "fantasmas" son la causa clásica de uno de los errores más comunes al desarrollar: "**el puerto ya está en uso**" (los puertos son tema del A25). Corres tu proyecto, se apaga mal, y el proceso quedó vivo agarrando el puerto. La solución no es reiniciar la computadora: es encontrar el proceso y cerrarlo (o "matarlo").

Cuando dirijas a una IA, ella te dirá "cierra el proceso del puerto 3000" o "reinicia el servidor". Ahora sabes que te está hablando de estos fantasmas de los que nadie te había hablado.

### Analogía

Los procesos son **el personal de la cocina a media noche de servicio**: cada quien cocinando algo, usando la mesa (RAM) y el chef (CPU). Un proceso fantasma es el cocinero que terminó su turno pero no se fue: sigue ocupando la estación y el siguiente (tu app nueva) no encuentra lugar. No hay que apagar todo el restaurante — basta con decirle a ese cocinero que se vaya.

### Cómo se ve en la práctica

El error que vas a ver mil veces:

```
Error: listen EADDRINUSE: address already in use 127.0.0.1:3000
```

Traducción: "ya hay un proceso usando el puerto 3000, no puedo". En la terminal puedes ver los procesos que corren:

```
tasklist                 ← lista de procesos en Windows
tasklist | findstr node  ← filtra solo los de Node
```

Y cerrar uno: `taskkill /PID 1234 /F` (en Mac/Linux: `kill 1234`). Antes de matar algo, asegúrate de qué es — nunca mates un proceso sin saberlo (la regla del A5 sigue vigente).

### Díselo a la IA

> "Al correr mi proyecto me dice que el puerto 3000 ya está en uso. Guíame paso a paso en [Windows/Mac] para ver qué proceso lo está usando, confirmar que es seguro cerrarlo, y cerrarlo sin dañar nada."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un proceso?
   - a) Un archivo guardado
   - b) Un programa que está corriendo en este momento ✔
   - c) Una carpeta del sistema
   - d) Una contraseña de acceso

2. **[completar]** "Un proceso puede seguir ____ sin ventana visible; los ____ así son la causa clásica del error 'puerto en uso'."
   - Banco: `corriendo` · `fantasmas` · `borrados` · `abiertos`
   - Respuesta: corriendo / fantasmas

3. **[qué hace]** Ves este error: `EADDRINUSE: address already in use 127.0.0.1:3000`. ¿Qué está pasando?
   - a) Tu internet se cayó
   - b) Ya hay un proceso usando el puerto 3000 ✔
   - c) La computadora no tiene RAM
   - d) El proyecto no existe

4. **[verdadero/falso]** "Cuando un programa 'se apaga' mal, su proceso puede quedar vivo ocupando recursos."
   - Respuesta: VERDADERO — por eso el puerto queda en uso y hay que cerrar el proceso.

5. **[relacionar]** Une la herramienta con su papel:
   - Administrador de tareas ↔ Ver procesos y su uso de RAM/CPU en Windows
   - tasklist ↔ Listar procesos desde la terminal
   - taskkill ↔ Cerrar un proceso desde la terminal

---

## A16 — Internet I: ¿qué pasa cuando escribes google.com?

### Concepto

Cuando escribes `google.com` y presionas Enter, en fracciones de segundo ocurre una cadena de eventos. Ahora la vas a entender completa; las piezas se detallan en A17 y A18, pero el viaje es este:

1. Tu navegador pregunta al **DNS** (el directorio telefónico de internet, tema de A17): "¿en qué dirección vive `google.com`?"
2. El DNS responde con la **IP**: una dirección numérica, por ejemplo `142.250.190.78` (también A17).
3. Tu navegador manda un **pedido** (una petición) a esa dirección, usando el lenguaje **HTTP** (A19).
4. El **servidor** de Google — una computadora lejana prendida 24/7 — recibe el pedido y responde con la página (A20).
5. Tu navegador **recibe el código** (HTML, CSS, JavaScript) y lo convierte en la página que ves (A21).

Todo eso, de ida y vuelta, en un abrir y cerrar de ojos. Cuando algo falla, el viaje se corta en algún punto: el DNS no respondió, la red se cayó, el servidor está caído, o tu navegador no pudo interpretar lo que recibió. Diagnosticar internet es descubrir en cuál de los cinco pasos se rompió el viaje.

¿Por qué te importa como director de IA? Porque publicarás páginas y apps (en la Materia C y en el Mes 9), y cuando un usuario diga "no me carga", tú vas a saber qué preguntas hacer: ¿es el dominio, el servidor, o su internet? Reconocer el mapa del viaje convierte el caos en diagnóstico.

### Analogía

Es como **pedir un platillo en un restaurante por teléfono**: miras el menú (escribes la URL), buscas el número del restaurante (DNS), marcas (petición HTTP), en la cocina contestan y preparan (servidor), y te llevan el platillo (respuesta). Si el platillo no llega, puede ser que no encontrabas el número, que la línea estaba ocupada, o que la cocina estaba cerrada.

### Cómo se ve en la práctica

Cada error en pantalla te dice en qué punto se cortó el viaje:

```
Error: No se pudo encontrar el servidor    → el DNS o el dominio falló (pasos 1-2)
Error: El sitio tardó demasiado en responder → la red o el servidor (pasos 3-4)
Error 500: El servidor tuvo un problema    → el servidor falló (paso 4)
```

Leer estos mensajes ya no es "no sé qué pasó": es saber en qué paso del viaje está el atasco.

### Díselo a la IA

> "Mi página no carga en [navegador]. Guíame para diagnosticar en qué paso del viaje falla: DNS, red, servidor o navegador. Dame los pasos en orden y qué vería en pantalla en cada caso."

### Ejercicios

1. **[ordenar]** Acomoda en orden lo que pasa cuando escribes google.com:
   - Desordenado: `el servidor responde con la página` · `el navegador pregunta al DNS la IP` · `el navegador convierte el código en imagen` · `el navegador manda una petición HTTP`
   - Respuesta: DNS → petición HTTP → servidor responde → navegador convierte

2. **[opción múltiple]** ¿Qué hace el navegador justo después de que escribes la URL?
   - a) Muestra un anuncio
   - b) Pregunta al DNS dónde vive ese dominio ✔
   - c) Apaga el servidor
   - d) Guarda la página en el disco

3. **[completar]** "El servidor de Google es una ____ lejana prendida ____ que recibe pedidos y responde con la página."
   - Banco: `computadora` · `24/7` · `tableta` · `de vez en cuando`
   - Respuesta: computadora / 24/7

4. **[verdadero/falso]** "Todo el viaje desde escribir la URL hasta ver la página tarda típicamente menos de un par de segundos."
   - Respuesta: VERDADERO — el viaje completo es de ida y vuelta en fracciones de segundo.

5. **[relacionar]** Une el error con el paso del viaje donde se corta:
   - "No se pudo encontrar el servidor" ↔ El DNS o el dominio falló
   - "El sitio tardó demasiado en responder" ↔ La red o el servidor
   - "Error 500: problema del servidor" ↔ El servidor falló

---

## A17 — Internet II: direcciones IP y DNS (el directorio telefónico de internet)

### Concepto

Cada dispositivo conectado a internet tiene una **dirección IP**: una dirección numérica única, como `142.250.190.78`, que identifica dónde está. Es el equivalente del número de teléfono de tu computadora. Los servidores tienen IPs públicas; tu teléfono en casa tiene una IP privada que tu módem le asigna (los detalles en A24).

¿Y el problema? Nadie recuerda `142.250.190.78` cuando quiere buscar algo. Ahí nace el **DNS** — *Domain Name System*, "el sistema de nombres de dominio": el directorio telefónico de internet. Traduce los nombres que sí podemos recordar (`google.com`, `facebook.com`) a las IPs que la red necesita.

Cuando escribes una URL, tu computadora no sabe dónde está `google.com`: se lo pregunta al DNS, igual que marcas a información para pedir un número. El DNS no es una sola computadora: es un sistema de directorios en cascada por todo el mundo, enorme y rapidísimo.

¿Cuándo te tocará a ti? Cuando la IA te pida configurar el **dominio** de tu página (en el Mes 9 publicarás una): el proveedor de dominios te dará "registros DNS" para apuntar tu dominio al servidor. Ahora sabes qué es eso: le estás diciendo al directorio mundial "cuando busquen `mitienda.com`, llévalos a esta IP".

### Analogía

El DNS es la **agenda de contactos de tu teléfono**: no marcas el número de tu hermano, marcas "Hermano". Tú pides por nombre y el teléfono traduce al número real. El DNS es esa traducción, a escala planetaria: tu navegador dice "google.com" y el directorio contesta "marca a 142.250.190.78".

### Cómo se ve en la práctica

Desde la terminal puedes consultar el directorio tú mismo:

```
C:\Users\Ray> nslookup google.com
Servidor:  dns.google
Nombre:    google.com
Address:   142.250.190.78
```

Traducción: "le pregunté al directorio y me dijo que google.com vive en 142.250.190.78". Ese número es la **IP** — la dirección real donde vive el sitio.

### Díselo a la IA

> "Voy a apuntar mi dominio [mitienda.com] a mi servidor [dirección]. Explícame qué registro DNS necesito configurar, dónde, y cómo verifico desde mi terminal que ya quedó listo."

### Ejercicios

1. **[relacionar]** Une el concepto con su papel:
   - Dirección IP ↔ La dirección numérica única de un dispositivo en internet
   - DNS ↔ El directorio que traduce nombres a IPs
   - Dominio ↔ El nombre fácil de recordar (google.com)

2. **[completar]** "El ____ traduce nombres como google.com a ____ numéricas que la red usa."
   - Banco: `DNS` · `IP` · `wifi` · `caché`
   - Respuesta: DNS / IP

3. **[opción múltiple]** ¿Por qué existen los dominios si ya existen las IPs?
   - a) Porque las IPs son lentas
   - b) Porque los números son difíciles de recordar para las personas ✔
   - c) Porque los dominios son más baratos
   - d) No existe razón real

4. **[verdadero/falso]** "El DNS es una sola computadora enorme ubicada en un solo país."
   - Respuesta: FALSO — es un sistema de directorios en cascada repartido por todo el mundo.

5. **[qué hace]** Corres `nslookup google.com` y la terminal devuelve `Address: 142.250.190.78`. ¿Qué pasó?
   - a) La terminal se conectó a Google
   - b) El DNS respondió la IP donde vive google.com ✔
   - c) Se descargó la página de Google
   - d) La terminal borró la caché

---

## A18 — Internet III: la URL por partes (dominio, ruta, parámetros)

### Concepto

Toda URL (el enlace que ves en la barra del navegador) está hecha de partes, y cada parte le dice algo distinto a la red. Tomemos un ejemplo:

```
https://www.mitienda.mx/productos/celulares?id=5&color=negro
```

Partes:

- **`https`** — el protocolo: "habla conmigo con candado" (A19). El `http://` sin la `s` es el mismo idioma pero sin candado.
- **`www.mitienda.mx`** — el **dominio**: qué sitio es. El `www.` es un subdominio común (un "departamento" del sitio).
- **`/productos/celulares`** — la **ruta**: qué página o sección. Igual que las rutas de archivos (A4), pero en un servidor remoto.
- **`?id=5&color=negro`** — los **parámetros** (o query): datos que se envían al servidor con la petición. Empiezan con `?`, se separan con `&`, y vienen en pares `clave=valor`.

Eso último es lo que más te va a sorprender: **una misma página puede mostrar cosas distintas según los parámetros**, aunque el dominio y la ruta no cambien. `?id=5` le dice al servidor "muéstrame el producto 5". Cambias `id=6` y ves el 6. Los parámetros son las preguntas que le haces a la página.

Cuando dirijas a una IA, verás parámetros en las **URLs de las APIs** (a fondo en el Mes 9) y en los enlaces de tu página. Saber leer la barra del navegador es como saber leer el tablero de un auto: todo el mundo puede conducir, pero tú entiendes qué dice.

### Analogía

La URL es una **dirección completa de oficina**: el país y la ciudad (dominio), el edificio y el piso (ruta), y el número de oficina (parámetros). Dos personas pueden ir al mismo edificio y al mismo piso, pero al cuarto 5 en vez del 4 — y eso cambia con quién se encuentran.

### Cómo se ve en la práctica

En la barra del navegador de una tienda:

```
mitienda.mx/productos?id=5   → muestra el producto 5
mitienda.mx/productos?id=6   → muestra el producto 6
mitienda.mx/productos        → muestra la lista de todos
```

El dominio y la ruta son los mismos; solo cambió el parámetro `id`. Por eso un enlace "con datos" viaja literalmente en la barra del navegador.

### Díselo a la IA

> "Descompón esta URL para mí: [pega una URL real]. Dime cuál es el dominio, la ruta y los parámetros, y qué pasaría si cambio cada parte. Úsalo como ejercicio para enseñarme a leer URLs."

### Ejercicios

1. **[relacionar]** Une la parte de la URL con su ejemplo:
   - Dominio ↔ www.mitienda.mx
   - Ruta ↔ /productos/celulares
   - Parámetros ↔ ?id=5&color=negro
   - Protocolo ↔ https

2. **[completar]** "En `https://tienda.mx/productos?id=5`, el dominio es ____, la ruta es ____ y los parámetros empiezan con ____."
   - Banco: `tienda.mx` · `/productos` · `?` · `https`
   - Respuesta: tienda.mx / /productos / ?

3. **[opción múltiple]** ¿Para qué sirven los parámetros de una URL?
   - a) Para hacerla más larga
   - b) Para enviar datos al servidor con la petición ✔
   - c) Para ocultar el dominio
   - d) Para acelerar la carga

4. **[ordenar]** Partes de la URL en el orden en que aparecen:
   - Desordenado: `ruta` · `parámetros` · `protocolo` · `dominio`
   - Respuesta: protocolo → dominio → ruta → parámetros

5. **[verdadero/falso]** "Cambiar `?id=5` por `?id=6` en una tienda muestra un producto distinto con la misma página."
   - Respuesta: VERDADERO — los parámetros cambian lo que el servidor devuelve.

---

## A19 — HTTP y HTTPS: el candadito y por qué importa

### Concepto

Ya viste el viaje de la petición (A16) y que empieza con `https` (A18). Ahora, ¿qué es eso? **HTTP** (*HyperText Transfer Protocol*) es el idioma de comunicación entre tu navegador y los servidores: un conjunto de reglas para pedir y entregar contenido en la web. Cuando tu navegador pide una página, habla en HTTP; el servidor responde en HTTP.

El problema: HTTP puro transmite la información **como está, sin proteger** — como mandar una carta postal abierta. Si introduces tu contraseña o los datos de tu tarjeta en un sitio con `http://`, cualquier persona en el camino (el wifi de la cafetería, tu proveedor) podría leer lo que viaja.

Ahí entra **HTTPS**: es el mismo idioma, pero **cifrado**. La `S` es de *Secure* (seguro). La información se codifica de tal forma que solo tu navegador y el servidor pueden leerla — el famoso **candadito** que ves junto a la URL. El cifrado técnico se llama SSL/TLS (solo necesitas reconocer el nombre).

La regla de seguridad que no se negocia: **nunca pongas contraseñas ni datos de pago en una página sin el candado**. El navegador te avisa: verás "No seguro" en la barra cuando el sitio es HTTP. Cuando publiques tu propia página (Materia C, Mes 9), lo estándar es que quede con HTTPS — hoy hasta la herramienta más básica lo regala.

### Analogía

HTTP es **hablar en voz alta en un pasillo lleno de gente**; HTTPS es hablar en un **cuarto blindado con la puerta cerrada**. El mensaje es el mismo — el problema es quién más lo escucha. El candadito de la barra del navegador es la etiqueta "cuarto blindado" en la puerta.

### Cómo se ve en la práctica

En la barra del navegador:

```
🔒 https://www.bancomex.mx        → cifrado, seguro
⚠  http://www.bancomex-promo.mx   → sin cifrar, "No seguro"
```

Esa segunda dirección es la típica de una trampa: parece banco, pero el candado no está. El candado no es un adorno — es la diferencia entre hablar por un cuarto blindado y por un pasillo público.

### Díselo a la IA

> "Mi sitio todavía usa HTTP y quiero pasar a HTTPS. Explícame qué opciones tengo, cuál es la más fácil para un principiante, y qué riesgos corro si lo dejo en HTTP."

### Ejercicios

1. **[verdadero/falso]** "HTTPS cifra los datos que viajan entre tu navegador y el servidor."
   - Respuesta: VERDADERO — la S de Secure es cifrado.

2. **[opción múltiple]** ¿Qué significa el candadito en la barra del navegador?
   - a) El sitio es oficial y confiable
   - b) La conexión con el servidor está cifrada ✔
   - c) La página no tiene virus
   - d) El sitio es gratis

3. **[completar]** "HTTP es el ____ de comunicación; HTTPS agrega ____ a lo que viaja."
   - Banco: `idioma` · `cifrado` · `velocidad` · `música`
   - Respuesta: idioma / cifrado

4. **[relacionar]** Une la etiqueta con lo que es seguro hacer:
   - https:// + candadito ↔ Poner contraseñas y datos de pago
   - http:// + "No seguro" ↔ No poner datos sensibles

5. **[qué hace]** Un sitio te pide tu contraseña y en la barra del navegador dice "No seguro". ¿Qué haces?
   - a) La escribo, es el sitio correcto
   - b) No la escribo: la conexión no está cifrada y podría ser una trampa ✔
   - c) La escribo pero rápido
   - d) Cambio la contraseña en ese sitio

---

## A20 — Cliente y servidor: el restaurante de internet

### Concepto

Cuando ves una página, hay dos computadoras haciendo el trabajo: la tuya (la que pide) y la remota (la que responde). La que pide se llama **cliente**; la que responde se llama **servidor**. Ese par es el modelo de casi todo internet.

- **Cliente** — tu navegador (Chrome, Edge, Safari). Pide páginas, envía formularios, muestra lo que recibe. Es "el que tiene hambre".
- **Servidor** — una computadora lejana, prendida 24/7, con la página guardada. Recibe pedidos de millones de clientes y les responde. Es "la cocina".

Un servidor puede atender a muchísimos clientes a la vez — cuando tu app "se cae por mucha gente", es que la cocina no dio abasto (en el Mes 9 verás cómo se escala).

Esto te importa porque define dónde vive cada cosa en un proyecto. La parte que ves y tocas (botones, textos, imágenes) corre en el **cliente**; la parte que procesa datos, guarda información y decide, corre en el **servidor**. Cuando la IA te hable de *frontend* y *backend* (a fondo en B23), te estará hablando exactamente de esto: lo que el cliente muestra y lo que el servidor hace.

### Analogía

Internet es un **restaurante**: el cliente (tú, con el menú del navegador) pide; el mesero lleva el pedido (petición); la cocina — que nunca cierra — lo prepara y lo saca (servidor); el mesero lo lleva a tu mesa (respuesta). Un restaurante sirve a cientos de comensales a la vez, y nadie se confunde de mesa: cada pedido va etiquetado con su mesa.

### Cómo se ve en la práctica

Cuando la IA te describa tu propio proyecto:

```
Cliente (tu navegador):  la página de bienvenida, los botones, los formularios
Servidor (la nube):      guarda los pedidos, revisa el inventario, manda el correo
```

Tú ves el lado cliente; el servidor hace el trabajo que nadie ve. Si mañana dices "quiero que los pedidos se guarden en una base de datos", le estás pidiendo trabajo del lado servidor.

### Díselo a la IA

> "Muéstrame mi proyecto dividido en dos columnas: qué corre en el cliente (navegador) y qué corre en el servidor. Explícame en una línea qué pasa en cada lado cuando un usuario hace [acción principal]."

### Ejercicios

1. **[relacionar]** Une el lado con su papel:
   - Cliente ↔ El navegador que pide y muestra
   - Servidor ↔ La computadora remota que responde 24/7

2. **[opción múltiple]** En el modelo cliente-servidor, ¿quién es el cliente al abrir una página web?
   - a) El servidor
   - b) Tu navegador ✔
   - c) El proveedor de internet
   - d) El DNS

3. **[completar]** "El ____ pide la página; el ____ la guarda y la responde. Un servidor atiende a muchos ____ a la vez."
   - Banco: `cliente` · `servidor` · `clientes` · `dominios`
   - Respuesta: cliente / servidor / clientes

4. **[verdadero/falso]** "Un mismo servidor puede atender a millones de clientes al mismo tiempo."
   - Respuesta: VERDADERO — por eso se cae cuando no da abasto.

5. **[ordenar]** Acomoda en orden lo que pasa al hacer clic en "Comprar":
   - Desordenado: `el servidor guarda el pedido y responde` · `el navegador envía la petición de compra` · `el navegador muestra la confirmación`
   - Respuesta: navegador envía → servidor guarda y responde → navegador muestra confirmación

---

## A21 — El navegador por dentro: qué hace con lo que recibe

### Concepto

El navegador es un programa como cualquier otro (es un proceso, ¿te acuerdas del A15?) — pero con un trabajo especial: **recibe el código de una página y lo convierte en la imagen que ves**. No "muestra" la página: la construye, pieza por pieza, en milisegundos.

Cuando el servidor responde (A20), envía tres tipos de archivos, y el navegador los usa distinto:

- **HTML** — el esqueleto: la estructura y los textos (es el tema de B7).
- **CSS** — el estilista: colores, tamaños, acomodo (el B8).
- **JavaScript** — el cerebro: comportamiento, botones que responden, datos que cambian (el B3).

El orden es clave: primero lee el HTML y arma la estructura; luego aplica el CSS para estilizarla; y al final ejecuta el JavaScript, que puede modificar la estructura ya mostrada. Por eso "mover una etiqueta de HTML rompe la página" — el esqueleto cambió.

Tu superpoder para dirigir a la IA: las **herramientas de desarrollador** (tecla F12, o clic derecho → "Inspeccionar"). Ahí puedes ver el HTML, los estilos, la red (qué peticiones se hacen) y la consola (errores de JavaScript). La IA te va a pedir a menudo que le copies un error de la consola: ahora sabes de qué te habla.

### Analogía

El navegador es como **el director de una obra de teatro**: recibe el guion (HTML), dirige la iluminación y el vestuario (CSS), y coordina a los actores que responden en vivo (JavaScript). El público (tú) solo ve la obra terminada; el director ve todo el andamiaje detrás del telón.

### Cómo se ve en la práctica

Con la página abierta, presionas F12 y ves pestañas:

```
Elementos   ← el HTML de la página, editable en vivo
Consola     ← los errores de JavaScript y mensajes
Red         ← cada petición que hace la página y cuánto tardó
```

Esa pestaña de **Consola** es la que te pedirá la IA: "pégame el error que sale en rojo". Copiar y pegar ese texto es un diagnóstico instantáneo para ella.

### Díselo a la IA

> "Abrí las herramientas de desarrollador (F12) de mi página. Explícame qué veo en cada pestaña (Elementos, Consola, Red) y qué información quieres que te copie cuando algo no funcione."

### Ejercicios

1. **[relacionar]** Une el archivo con su papel en el navegador:
   - HTML ↔ El esqueleto y los textos
   - CSS ↔ Los estilos y colores
   - JavaScript ↔ El comportamiento que responde

2. **[completar]** "El navegador recibe ____, ____ y ____ del servidor y los convierte en la página visual."
   - Banco: `HTML` · `CSS` · `JavaScript` · `fotos impresas`
   - Respuesta: HTML / CSS / JavaScript

3. **[opción múltiple]** ¿Qué hace el navegador con el JavaScript que recibe?
   - a) Lo guarda sin ejecutar
   - b) Lo ejecuta, dando comportamiento a la página ✔
   - c) Lo borra al instante
   - d) Lo convierte en imagen

4. **[verdadero/falso]** "Las herramientas de desarrollador (F12) solo sirven a programadores expertos."
   - Respuesta: FALSO — copiar un error de la Consola es un diagnóstico útil para cualquier director de IA.

5. **[ordenar]** Acomoda en orden cómo construye el navegador una página:
   - Desordenado: `ejecutar el JavaScript` · `leer el HTML y armar la estructura` · `aplicar los estilos CSS` · `mostrar la página final`
   - Respuesta: leer HTML → aplicar CSS → ejecutar JS → mostrar la página

---

## A22 — La nube: la computadora de alguien más

### Concepto

Cuando alguien dice "la nube", no hay magia en el cielo: hay **computadoras de alguien más**, en edificios gigantes (los centros de datos), que rentas por internet. *Cloud* es la jerga para "servidores ajenos que uso sin tener que comprarlos". El meme es exacto: "no hay nube, solo es la computadora de otra persona".

¿Por qué rentar en vez de comprar? Porque comprar un servidor cuesta dinero y desvelo: hardware, electricidad, espacio, mantenimiento, técnicos. Rentarlo te da el mismo poder por hora y sin responsabilidades — y si mañana necesitas 10 veces más, lo pides con un clic.

Los tres grandes proveedores: **Amazon Web Services (AWS)**, **Microsoft Azure** y **Google Cloud**. Todos tienen la misma idea: te prestan máquinas (las de A1: CPU, RAM, disco), sistemas operativos (A8, A9) y servicios (bases de datos, almacenamiento, correos) por minutos o por mes.

Para ti, en este programa: la nube es donde **vivirá tu proyecto final**. En el Mes 9 rentarás tu primer servidor y entenderás por qué "subir a la nube" significa copiar tu código a una de esas computadoras lejanas. Cuando la IA te diga "deploya" o "publica en producción", te estará hablando de esto: llevar tu app a una computadora ajena que estará prendida 24/7 para recibir clientes.

### Analogía

La nube es como **rentar un departamento amueblado** en vez de construir tu casa: no te preocupas por los muros, el drenaje ni la electricidad — pagas la mensualidad y ya. Si necesitas más espacio, te mudas a uno más grande con un clic. Construir tu propio centro de datos sería como construirte la casa: posible, pero carísimo y lentísimo.

### Cómo se ve en la práctica

El panel de un proveedor de nube (lo verás en el Mes 9):

```
Crear servidor
  Sistema operativo:  Ubuntu 24.04 LTS      ← elegiste el A9
  Plan:               VPS · 2 vCPU · 4 GB RAM   ← las cifras del A1
  Región:             us-east (Virginia) / México Central
  Costo:              $8 USD/mes
  [Crear]
```

En minutos, tienes una computadora prendida en un edificio lejano, accesible desde tu terminal. Eso es "la nube" en su forma más pura.

### Díselo a la IA

> "Quiero publicar [mi proyecto] en la nube. ¿Qué proveedor me conviene para empezar, qué plan (considerando que soy principiante), y qué ventajas tiene cada uno de los grandes: AWS, Azure o Google Cloud?"

### Ejercicios

1. **[verdadero/falso]** "La nube son computadoras físicas de alguien más que rentas por internet."
   - Respuesta: VERDADERO — "no hay nube, solo la computadora de otra persona".

2. **[completar]** "En la nube ____ los servidores en vez de ____ el hardware."
   - Banco: `rentas` · `comprar` · `rompes` · `olvidar`
   - Respuesta: rentas / comprar

3. **[opción múltiple]** ¿Cuáles son los tres grandes proveedores de nube?
   - a) Chrome, Edge y Safari
   - b) AWS, Azure y Google Cloud ✔
   - c) Netflix, Disney y HBO
   - d) npm, pip y apt

4. **[relacionar]** Une el enfoque con su descripción:
   - Comprar tu servidor ↔ Pagas hardware, luz y mantenimiento
   - Rentar en la nube ↔ Pagas por hora o mes, sin responsabilidades

5. **[qué hace]** En el panel de nube ves: "Plan: VPS · 2 vCPU · 4 GB RAM". ¿Qué estás viendo?
   - a) El tamaño de la página web
   - b) Los recursos de CPU y RAM de la máquina que vas a rentar ✔
   - c) El costo del internet
   - d) La versión de Linux

---

## A23 — Descargar, subir y el ancho de banda

### Concepto

**Descargar** es recibir datos de internet a tu dispositivo (una película, una página). **Subir** es enviarlos (un video a TikTok, un formulario, una copia de seguridad). Todo lo que haces en internet es una mezcla de las dos.

El **ancho de banda** es el tamaño de la tubería que te conecta a internet: cuánta información puede pasar por segundo. Se mide en megas (`Mbps` — megabits por segundo, ¿te acuerdas de A2?). "100 megas de internet" significa que tu tubería permite 100 megabits por segundo — que, ojo, son unos 12.5 megabytes por segundo reales. La gente se confunde todos los días pensando que baja 100 MB por segundo.

Un detalle del mundo real: en la mayoría de los planes de casa, **subir es mucho más lento que bajar**. Descargas a 300 megas, pero subes a 30. Por eso "subir un video tarda el triple que descargarlo". Y cuando muchos dispositivos usan la tubería a la vez (tele en streaming, videojuego, tu compu), se reparte y todo se siente lento.

¿Y en tu vida de director de IA? Cuando tu página carga lento, las causas típicas son tres: el archivo es pesado (imágenes — el tema de A2), el ancho de banda del usuario es chico, o el servidor es lento (recursos del A1). Saber separar las tres es diagnosticar de verdad, y le da dirección a la IA: comprime, o cambia de plan, o sube el servidor.

### Analogía

El ancho de banda es el **número de carriles de una autopista**: 100 megas son 100 carriles de información a la vez. Subir y descargar son los dos sentidos de la vía — y en tu casa, la carretera de ida (subida) tiene muchos menos carriles que la de vuelta (bajada). Eso explica por qué "mandar" siempre tarda más que "recibir".

### Cómo se ve en la práctica

Resultado de una prueba de velocidad:

```
Descarga: 98.4 Mbps   ← la tubería de bajada
Subida:   22.7 Mbps   ← la tubería de subida, más chica
Ping:     12 ms        ← la demora del viaje (A16)
```

"Tengo 100 megas" → bajada ≈ 98. La subida, en cambio, ronda los 22: normal en planes de casa. Con esa lectura ya sabes qué esperar de cada dirección.

### Díselo a la IA

> "Mi página tarda en cargar. Ayúdame a diagnosticar cuál de las tres causas es: tamaño de archivos, ancho de banda del usuario, o recursos del servidor. Dame cómo medir cada una y qué arreglar en cada caso."

### Ejercicios

1. **[verdadero/falso]** "Subir y descargar siempre van a la misma velocidad en tu plan de internet."
   - Respuesta: FALSO — en la mayoría de los planes de casa, subir es más lento que bajar.

2. **[opción múltiple]** ¿Qué es el ancho de banda?
   - a) La fuerza de la señal wifi
   - b) Cuánta información puede pasar por tu conexión por segundo ✔
   - c) El número de dispositivos conectados
   - d) El tamaño de tu disco duro

3. **[completar]** "____ es recibir datos; ____ es enviarlos. El ____ es el tamaño de la tubería que los transporta."
   - Banco: `Descargar` · `Subir` · `ancho de banda` · `procesador`
   - Respuesta: Descargar / Subir / ancho de banda

4. **[relacionar]** Une la dirección con su ejemplo:
   - Descargar ↔ Ver una película en streaming
   - Subir ↔ Publicar un video en TikTok

5. **[qué hace]** La prueba de velocidad marca "Subida: 22.7 Mbps". ¿Qué te está diciendo?
   - a) Tu bajada es de 22.7
   - b) Tu tubería de envío maneja 22.7 megabits por segundo ✔
   - c) Tu disco está lleno
   - d) Tu señal wifi es débil

---

## A24 — Redes: wifi, datos, módem y por qué "se cae el sistema"

### Concepto

Cuando "el internet se cae", casi nunca se cayó *internet*: se cayó un pedacito de tu camino. Hay que distinguir las piezas de tu red local:

- **El wifi** — la señal de radio que conecta tus dispositivos al módem dentro de tu casa. Es local: solo funciona a unos metros.
- **El módem/router** — la caja que reparte esa señal (router) y se conecta con tu proveedor (módem). El **router** reparte el wifi y administra las conexiones de tu casa; el **módem** es la puerta que sale a la calle.
- **Tu proveedor (ISP)** — la empresa que te trae internet a la casa (la infraestructura de la calle).
- **El servidor remoto** — la computadora del sitio al que quieres llegar (A20).

"Se cae el sistema" puede significar: tu wifi se cayó (la señal), tu módem se reinició (la puerta), tu proveedor tiene problemas (la calle), o el sitio está caído (el restaurante cerró). Diagnosticar es descubrir cuál. El truco clásico: **reiniciar el módem** — apagar, esperar 30 segundos, prender. Arregla sorprendentemente seguido el problema, porque muchos routers se saturan con el tiempo.

Dato memorable: el wifi no es internet. Puedes tener "todo el internet" caído y tu wifi sigue "funcionando" — te conecta a una puerta que no sale a ningún lado.

### Analogía

Tu red es tu **calle y tu casa**: el wifi son los pasillos dentro de tu casa (señal local, se corta a pocos metros), el router es el guardia que organiza quién entra y sale, el módem es la puerta del edificio, y el ISP es la calle completa. Si el pasillo se bloquea, no es lo mismo que si cerraron la calle. Reiniciar el módem es tocar el timbre y que la puerta se "despierte".

### Cómo se ve en la práctica

Orden de diagnóstico cuando "no hay internet":

```
1. ¿Otros dispositivos también se quedaron sin wifi?   → ¿es señal o internet?
2. ¿La luz del módem parpadea en rojo?                 → reinicia el módem
3. Reinicia: apaga 30 s, prende, espera 2 min         → listo (9 de cada 10 veces)
4. Si sigue: ¿tu proveedor reporta fallas en tu zona?  → problema del ISP
5. Si solo un sitio falla: no es tu internet           → es el servidor de ese sitio
```

Seguir este orden convierte "se cayó todo" en "se cayó una pieza" — y casi siempre la arreglas tú solo.

### Díselo a la IA

> "Mi internet se cae seguido. Guíame un diagnóstico paso a paso para saber si el problema es mi wifi, mi módem, mi proveedor o el sitio al que intento entrar. Dame qué revisar en cada paso."

### Ejercicios

1. **[verdadero/falso]** "El wifi y el internet son exactamente lo mismo."
   - Respuesta: FALSO — el wifi es la señal local de tu casa; el internet es la red mundial a la que esa señal te conecta.

2. **[completar]** "El ____ reparte la señal en tu casa; el ____ conecta tu casa con el proveedor."
   - Banco: `router` · `módem` · `teclado` · `cable HDMI`
   - Respuesta: router / módem

3. **[ordenar]** Pasos de diagnóstico cuando no hay internet:
   - Desordenado: `revisar si otros dispositivos también fallan` · `reiniciar el módem` · `revisar si solo un sitio falla`
   - Respuesta: revisar otros dispositivos → reiniciar el módem → revisar si solo un sitio falla

4. **[opción múltiple]** "Se cae el sistema" en un solo sitio web, pero tu internet funciona. ¿Cuál es la causa más probable?
   - a) Tu wifi se cayó
   - b) El servidor de ese sitio tiene un problema ✔
   - c) Tu módem se reinició
   - d) No pagaste el internet

5. **[relacionar]** Une la pieza con su papel:
   - Wifi ↔ Señal local de radio en tu casa
   - Módem ↔ La puerta hacia tu proveedor
   - Router ↔ Reparte la conexión entre tus dispositivos
   - ISP ↔ La empresa que te da internet

---

## A25 — Puertos: las puertas numeradas de un servidor (80, 443, 3000)

### Concepto

Un servidor es como un edificio: tiene una dirección (la IP, del A17), pero también tiene **puertas numeradas** por donde entran las peticiones. Esas puertas son los **puertos** — números entre 0 y 65535 que le dicen al servidor qué tipo de servicio atender.

Los tres que vas a ver a diario:

- **80** — HTTP (el idioma sin candado del A19).
- **443** — HTTPS (el idioma con candado). Por eso el 443 es "la puerta principal cifrada" de cualquier sitio.
- **3000** — el puerto favorito de desarrollo: cuando corres un proyecto localmente, casi siempre abre en `localhost:3000`.

La regla: **IP + puerto = dirección completa**. `142.250.190.78:443` es "el edificio 142.250.190.78, puerta 443". Y un servidor tiene muchas puertas a la vez: la 443 para el sitio público, la 3000 para desarrollo, la 5432 para la base de datos (a fondo en el Mes 9).

Aquí viene el conflicto clásico que ya mencionamos en A15: **dos programas no pueden usar el mismo puerto al mismo tiempo**. Si abres dos proyectos y ambos quieren el 3000, el segundo falla con el famoso "port 3000 is already in use". No es un error del código: es que la puerta ya tiene quien la cuide. La solución: cerrar el proceso que la ocupa, o cambiar el puerto (pedirle a la IA que corra en el 3001).

### Analogía

Los puertos son **las puertas numeradas de un edificio**: el mismo edificio tiene entrada principal (443, con vigilancia y candado), entrada de servicio (80, sin candado) y puertas internas para oficinas (3000, la de desarrollo). Dos personas no pueden entrar por la misma puerta al mismo tiempo sin chocar — igual que dos programas no comparten puerto.

### Cómo se ve en la práctica

Cuando corres un proyecto y la terminal te dice:

```
Server running on http://localhost:3000
```

Traducción: "mi servidor está escuchando en la puerta 3000 de tu propia computadora" (lo de localhost es el tema de A26). Y el error de conflicto:

```
Error: listen EADDRINUSE: address already in use 127.0.0.1:3000
→ ya hay un proceso en esa puerta (A15): ciérralo o cambia a 3001.
```

### Díselo a la IA

> "Corrí mi proyecto y abrió en localhost:3000, pero quiero entender por qué 3000 y no otro número. Explícame qué es un puerto, por qué el 80 y el 443 son especiales, y qué hago si el 3000 está ocupado."

### Ejercicios

1. **[relacionar]** Une el puerto con su servicio:
   - 80 ↔ HTTP (sin candado)
   - 443 ↔ HTTPS (con candado)
   - 3000 ↔ Desarrollo local de proyectos

2. **[completar]** "La dirección completa de un servicio es ____ + ____. El puerto 443 atiende ____ y el 3000 sirve para ____."
   - Banco: `IP` · `puerto` · `HTTPS` · `desarrollo` · `películas`
   - Respuesta: IP / puerto / HTTPS / desarrollo

3. **[opción múltiple]** ¿Qué pasa si dos programas usan el mismo puerto a la vez?
   - a) Funcionan los dos normalmente
   - b) El segundo falla: el puerto ya está en uso ✔
   - c) El internet se cae
   - d) La computadora se apaga

4. **[qué hace]** La terminal dice: "Server running on http://localhost:3000". ¿Qué significa?
   - a) Tu servidor está escuchando en el puerto 3000 de tu propia computadora ✔
   - b) Tu servidor ya está en internet
   - c) El puerto 3000 está cerrado
   - d) Tu proyecto tiene un error

5. **[verdadero/falso]** "Un mismo servidor puede atender varios puertos a la vez (443, 3000, etc.)."
   - Respuesta: VERDADERO — cada puerto es una puerta distinta del mismo edificio.

---

## A26 — localhost: el servidor que vive en tu propia compu

### Concepto

Cuando la IA te dice "abre `localhost:3000`", te está diciendo: "abre la puerta 3000 de **tu propia computadora**". **localhost** es un nombre especial que siempre significa "esta máquina, yo mismo". No viaja a internet: el navegador se lo queda en casa.

Su dirección IP es **127.0.0.1** — la dirección reservada para "mí mismo" en toda computadora del mundo. En cualquier equipo, escribir `localhost` o `127.0.0.1` es lo mismo: hablar contigo.

¿Por qué existe? Porque antes de publicar algo, lo pruebas localmente: corres el servidor en tu compu (A25) y tu navegador lo visita por localhost. Es el ensayo general antes del estreno. La ventaja es enorme: puedes romper, arreglar y probar sin que nadie más lo vea.

La diferencia que tienes que grabar: **localhost solo existe en tu máquina**. Si le mandas a tu amigo en otra ciudad "entra a localhost:3000", va a entrar a SU propia computadora, no a la tuya. Para que otros te visiten, necesitas la nube (A22) o un túnel (lo verás en la Materia C al publicar). Este concepto te va a acompañar en todos tus proyectos: todo desarrollo empieza con un localhost.

### Analogía

localhost es **tu propia cocina de prueba**: cocinas y pruebas el platillo en tu casa antes de abrir el restaurante. Nadie más puede comer de tu cocina de prueba porque está en tu casa. Cuando abres el restaurante (publicas), la cocina se mueve a un lugar público — pero hasta entonces, el platillo es solo tuyo.

### Cómo se ve en la práctica

```
1. La IA te pide correr el proyecto
2. La terminal dice: "Server running on http://localhost:3000"
3. Abres tu navegador y visitas http://localhost:3000
4. Solo TÚ puedes ver esa página desde tu compu
```

Si otro dispositivo en la misma casa quiere entrar, no usará localhost: usará tu IP local (la del A24). Pero para probar solo, localhost es todo lo que necesitas.

### Díselo a la IA

> "Corrí mi proyecto y la terminal me dice que abra localhost:3000. Explícame en términos simples por qué 'localhost' funciona solo en mi máquina y qué tendría que hacer para que mi amigo vea mi proyecto desde su casa."

### Ejercicios

1. **[opción múltiple]** ¿Qué es localhost?
   - a) Un servidor de internet público
   - b) Tu propia computadora con una dirección especial ✔
   - c) Un navegador nuevo
   - d) Un proveedor de nube

2. **[completar]** "localhost siempre significa ____; su dirección IP reservada es ____."
   - Banco: `mi propia computadora` · `127.0.0.1` · `google.com` · `3000`
   - Respuesta: mi propia computadora / 127.0.0.1

3. **[verdadero/falso]** "Un amigo en otra ciudad puede abrir tu localhost desde su casa."
   - Respuesta: FALSO — localhost siempre apunta a la propia máquina; el tuyo no es visible fuera de tu compu.

4. **[ordenar]** Pasos típicos para probar un proyecto localmente:
   - Desordenado: `correr el proyecto` · `leer en la terminal qué puerto usó` · `abrir localhost:puerto en el navegador`
   - Respuesta: correr el proyecto → leer el puerto → abrir localhost:puerto

5. **[qué hace]** La terminal dice "Server running on http://localhost:3000". ¿A quién atiende ese servidor?
   - a) A todo internet
   - b) Solo a tu propia computadora ✔
   - c) A tu proveedor de internet
   - d) Al DNS

---

## A27 — Servidores de verdad: qué estás rentando cuando rentas uno

### Concepto

En el Mes 9 vas a rentar tu primer servidor. Antes de pagar, entendamos qué estás comprando exactamente. Al rentar un servidor (la nube del A22), pagas por una computadora remota con:

- **CPU y RAM** — el poder de cálculo (¿te acuerdas del A1?). Más núcleos y más RAM = atiende más clientes y procesa más rápido. Es lo que más sube el precio.
- **Disco** — dónde viven tu código y tus datos. Un SSD rápido cuesta más que uno normal.
- **IP pública** — la dirección por la que el mundo te encuentra (A17).
- **Sistema operativo** — casi siempre Ubuntu (el A9).
- **Ancho de banda** — cuántos datos puede transferir (A23). Ojo: suelen cobrarte el tráfico.
- **Uptime** — el porcentaje de tiempo que el servidor está prendido. Un 99.9% significa menos de 9 horas caídas al año. Eso es lo que pagas de verdad: disponibilidad.

Hay dos sabores principales. **Compartido**: varios clientes en la misma máquina — barato, pero si un vecino satura, te afecta (como departamento compartido). **VPS** (*Virtual Private Server*): una porción garantizada de una máquina grande — más caro, pero tu CPU y RAM son tuyas. Para tu primer proyecto, un VPS pequeño es el punto dulce.

Dato que aclara todo: **el servidor de tu app es una computadora que nunca duerme**. Mientras tu laptop se apaga, ese servidor está atendiendo peticiones. Cuando rentas, rentas eso: una máquina despierta para siempre, esperando tu código.

### Analogía

Rentar un servidor es **rentar un local comercial**: el compartido es un local en un mercado con muchos vendedores (barato, pero el vecino puede inundarte); el VPS es un local con puerta propia (tu espacio es tuyo). Y la ubicación importa: si tus clientes son de México, un servidor en la Ciudad de México responde más rápido que uno en Europa — cada milisegundo cuenta.

### Cómo se ve en la práctica

Comparación típica que verás en los proveedores:

```
Plan básico (VPS):     2 vCPU · 4 GB RAM · 80 GB SSD · 2 TB de tráfico → $8 USD/mes
Plan intermedio (VPS): 4 vCPU · 8 GB RAM · 160 GB SSD · 4 TB de tráfico → $16 USD/mes
Alojamiento compartido: sin CPU garantizada · "ilimitado" → $3 USD/mes
```

El básico es más que suficiente para tu primer proyecto. Los proveedores hacen dinero cuando te venden upgrades que no necesitas.

### Díselo a la IA

> "Voy a rentar mi primer servidor para [mi proyecto]. ¿Qué plan me conviene considerando que soy principiante? Compara VPS contra compartido y dime qué especificaciones necesito de verdad para no pagar de más."

### Ejercicios

1. **[relacionar]** Une la especificación con lo que resuelve:
   - CPU y RAM ↔ Atender clientes y procesar rápido
   - Disco ↔ Guardar tu código y tus datos
   - IP pública ↔ La dirección por la que el mundo te encuentra
   - Ancho de banda ↔ Cuántos datos puede transferir

2. **[completar]** "El 99.9% de ____ significa que el servidor está prendido casi todo el año; es lo que pagas de verdad: ____."
   - Banco: `uptime` · `disponibilidad` · `velocidad` · `memoria`
   - Respuesta: uptime / disponibilidad

3. **[opción múltiple]** ¿Cuál es la diferencia clave entre un VPS y un alojamiento compartido?
   - a) El VPS es gratis
   - b) En el VPS tu CPU y RAM son tuyas; en el compartido las compartes ✔
   - c) El compartido es siempre más rápido
   - d) No hay diferencia

4. **[verdadero/falso]** "El servidor de una app necesita estar prendido 24/7 para atender clientes en cualquier momento."
   - Respuesta: VERDADERO — es una computadora que nunca duerme.

5. **[ordenar]** Pasos para tener tu app en un servidor de verdad:
   - Desordenado: `rentar el servidor (plan, región, Ubuntu)` · `subir tu código y ejecutarlo` · `apuntar tu dominio al servidor` · `verificar que carga desde internet`
   - Respuesta: rentar → subir código → apuntar dominio → verificar

---

## A28 — Seguridad básica I: contraseñas, gestores y 2FA

### Concepto

La puerta de entrada de casi todos los hackeos no es la tecnología: son las **contraseñas**. El error número uno del mundo: reusar la misma contraseña en varios sitios. Si un sitio se filtra (pasa todo el tiempo) y usabas esa contraseña también en tu banco, el ladrón prueba "¿y si también es la del banco?" — y acierta. Una contraseña filtrada se vuelve la llave maestra de toda tu vida digital.

Las reglas que de verdad importan:

1. **Contraseñas largas y únicas por sitio.** Largas importan más que complejas: "gato-azul-2009-caminata" es más fuerte que "G4t0!x", porque es larga y no se adivina. Únicas: cada sitio, una distinta.
2. **Un gestor de contraseñas** — un programa que genera y guarda todas por ti, protegido por una sola contraseña maestra. No tienes que memorizar 40 contraseñas: memorizas una. Los navegadores traen uno integrado; los dedicados (1Password, Bitwarden, el de Apple/Google) son más completos.
3. **2FA (doble factor)** — además de la contraseña, un segundo paso: un código que cambia cada 30 segundos en una app de tu celular, o una notificación para aprobar. Aunque te roben la contraseña, no pueden entrar sin el código que solo está en tu teléfono.

Regla que duele pero funciona: si te llega un aviso "tu contraseña se filtró", no es broma — cámbiala en ese sitio **y en cualquier otro donde la hayas repetido**. Un gestor hace esto tolerable.

### Analogía

Tu contraseña es la **llave de tu casa**: reusarla en todos lados es usar la misma llave para tu casa, tu bodega y tu caja fuerte — y dejar copias colgadas en la calle. El gestor de contraseñas es el **llavero con bóveda**: una llave maestra (tu contraseña maestra) abre el estuche donde están todas las demás, cada una distinta. Y el 2FA es el **guardia adicional** que pregunta "¿tienes la contraseña? — bueno, ¿y el código de tu teléfono?"

### Cómo se ve en la práctica

El flujo cuando activas 2FA en una cuenta:

```
Contraseña: ********
2FA: [ 482913 ]   ← el código de tu app de autenticador
```

Aunque alguien robe tu contraseña, sin el código de 6 dígitos que cambia cada 30 segundos en tu celular, la cuenta no abre. Ese es el "segundo factor": algo que sabes (contraseña) + algo que tienes (tu teléfono).

### Díselo a la IA

> "Quiero asegurar mis cuentas importantes. Guíame para: 1) configurar un gestor de contraseñas, 2) generar contraseñas fuertes y únicas, y 3) activar 2FA en [tus cuentas]. Explícame por qué cada paso importa y qué errores evitar."

### Ejercicios

1. **[verdadero/falso]** "Reusar la misma contraseña en varios sitios es el riesgo de seguridad más común."
   - Respuesta: VERDADERO — si un sitio se filtra, la contraseña sirve para entrar a los demás.

2. **[opción múltiple]** ¿Qué es el 2FA?
   - a) Un antivirus gratis
   - b) Un segundo paso de verificación además de la contraseña ✔
   - c) Una contraseña más larga
   - d) Un tipo de red wifi

3. **[completar]** "Un gestor de contraseñas ____ contraseñas largas y únicas, y las ____ detrás de una contraseña maestra."
   - Banco: `genera` · `guarda` · `borra` · `vende`
   - Respuesta: genera / guarda

4. **[relacionar]** Une la medida con lo que te protege:
   - Contraseña única por sitio ↔ Que una filtración no abra todas tus cuentas
   - Gestor de contraseñas ↔ No tener que memorizar nada ni repetir
   - 2FA ↔ Que una contraseña robada no sea suficiente

5. **[qué hace]** Un aviso dice: "Se filtró tu contraseña del sitio X. ¿La usaste en otro sitio?" ¿Qué debes hacer?
   - a) Ignorarlo, seguro es spam
   - b) Cambiar la contraseña de X y de cualquier sitio donde la hayas repetido ✔
   - c) Cambiar solo la contraseña del correo
   - d) Borrar el navegador

---

## A29 — Seguridad básica II: phishing, enlaces trampa y sentido común

### Concepto

La otra puerta de entrada de los criminales digitales no rompe tecnología: te **engaña a ti**. Eso se llama **phishing** (pesca): mandan mensajes que fingen ser tu banco, tu empresa o una tienda, para que les des tu contraseña o caigas en un enlace trampa.

Cómo se ve la trampa de verdad:

- **La urgencia falsa** — "¡tu cuenta será suspendida en 24 horas!" El pánico apaga tu pensamiento crítico a propósito.
- **La identidad falsa** — logos, nombres y colores que imitan a la marca real. El logo se puede copiar; no es prueba de nada.
- **El dominio falso** — aquí está el truco que tienes que dominar: la dirección real. `bancomex-mx.com`, `bancomex.verify.co`, `bancomex.com.evilsite.net` — ninguno es `bancomex.com`. Antes de hacer clic o escribir datos, **pasa el mouse sobre el enlace y mira la dirección** (la barra de estado te la muestra sin hacer clic).
- **El pedido imposible** — ningún banco real te pide tu contraseña por mensaje, ni "confirma tus datos" por un link. Regla de oro: **nunca entres a tu banco por un enlace que te mandaron; escríbelo tú en la barra.**

¿Y el sentido común? Una oferta "ganaste un iPhone" de alguien que no conoces, un paquete que "no pudimos entregar" con enlace, un "jefe" que pide transferencias urgentes por mensaje: pausa, revisa el dominio, llama por el teléfono oficial, pregunta en persona. El phishing existe porque funciona; deja de funcionar cuando tú pausas.

### Analogía

El phishing es un **policía falso**: se viste igual, trae placa, pero no es el de verdad. Cualquiera puede imprimir un logo o una placa; la prueba no es el uniforme, es la credencial verificable. En internet, tu credencial es el **dominio escrito por ti**, no el que te llega en un mensaje.

### Cómo se ve en la práctica

Un mensaje de "tu banco":

```
⚠ "BancoMex: detectamos actividad inusual.
   Confirma tus datos AHORA o tu cuenta se suspenderá:
   → banco-mex.com.mx/confirmar"    ← el dominio es falso

✔ El banco real jamás te pide datos por un mensaje.
✔ Y su dominio sería: bancomex.mx (sin guiones raros)
```

El enlace se ve parecido, pero no es. Ese guion o esa terminación extra son la firma de la trampa.

### Díselo a la IA

> "Prepárame una lista de señales de phishing para revisar antes de hacer clic en cualquier mensaje. Incluye: la urgencia, el remitente, el dominio del enlace y los pedidos imposibles. Después dame ejemplos reales de enlaces trampa y cómo examinarlos sin hacer clic."

### Ejercicios

1. **[opción múltiple]** ¿Qué es el phishing?
   - a) Un virus que borra el disco
   - b) Mensajes que fingen ser una entidad real para robarte datos ✔
   - c) Un ataque que apaga internet
   - d) Un tipo de contraseña

2. **[verdadero/falso]** "Si tu banco te pide tu contraseña por mensaje de texto, es legítimo."
   - Respuesta: FALSO — ningún banco real pide contraseñas por mensaje; es phishing.

3. **[completar]** "Antes de hacer clic en un enlace sospechoso, pasa el ____ sobre él y revisa el ____ real, no el texto que se ve."
   - Banco: `mouse` · `dominio` · `teclado` · `color`
   - Respuesta: mouse / dominio

4. **[relacionar]** Une la señal con la trampa que esconde:
   - "¡Actúa en 24 horas o se suspende!" ↔ Urgencia falsa para que no pienses
   - Logo del banco copiado ↔ Identidad falsa
   - "Confirma tu contraseña" ↔ Pedido imposible
   - Dominio con guiones y terminación rara ↔ Enlace trampa

5. **[qué hace]** Te llega un enlace "para entrar a tu banco" por WhatsApp. ¿Cuál es la conducta correcta?
   - a) Hacer clic y entrar, se ve oficial
   - b) Escribir el sitio del banco tú mismo en la barra y entrar desde ahí ✔
   - c) Hacer clic pero rápido
   - d) Contestar el mensaje confirmando

---

## A30 — Repaso integrador de La Máquina (mega-quiz jugable)

### Concepto

Bienvenido a la meta de La Máquina. En 29 lecciones armaste el mapa completo de cómo funciona el mundo digital: cómo trabaja una computadora por dentro (A1, A2), cómo se organizan archivos y carpetas (A3, A4), cómo hablarle por terminal (A5, A6, A7), qué sistema la controla (A8, A9), qué es instalar (A10), cómo se construye software con piezas (A11, A12, A13), cómo se equivoca la memoria (A14), qué procesos viven en tu máquina (A15), cómo viajan las peticiones por internet (A16-A20), cómo el navegador lo convierte en imagen (A21), dónde viven las apps (A22-A27) y cómo protegerte (A28, A29).

Ese mapa no se memoriza para un examen: se usa como herramienta de dirección de IA. Cuando la IA te diga "instala la dependencia", "revisa si el puerto está en uso", "sube el ancho de banda" o "apunta tu dominio", tú ya no escuchas palabras raras: escuchas piezas de un rompecabezas que entiendes.

Esta lección es el examen jugable: ocho ejercicios que mezclan todo lo de la materia. Si fallas alguno, la respuesta te dice a qué lección volver — así el repaso se convierte en mapa, no en memorización. El objetivo no es sacar 10: es detectar tu punto más débil y cerrarlo.

### Analogía

Este repaso es el **recorrido final de la obra**: en las 29 lecciones instalaste tubería, electricidad y acabados; ahora enciendes todas las luces y recorres la casa de punta a punta para ver qué funciona. Cada ejercicio es un cuarto encendido. Los que no prenden son los que hay que arreglar antes de entregar la llave.

### Cómo se ve en la práctica

Estrategia para el mega-quiz: respóndelo completo, y por cada falla escribe en una hoja el número de la lección que se te indica al pie de la respuesta. Ese papel es tu plan de repaso personal — las lecciones que repites no son castigo, son tu plan de entrenamiento para la siguiente semana.

### Díselo a la IA

> "Quiero hacer un repaso del Mes 1 de La Máquina. Hazme un examen oral: hazme preguntas de a una, espera mi respuesta, y según cómo responda dime si estoy listo o qué lección repasar. Cubre: hardware, archivos y rutas, terminal, sistemas operativos, dependencias y npm, caché, procesos, internet y DNS, URLs, HTTP/HTTPS, cliente-servidor, navegador, nube, puertos, localhost, servidores y seguridad."

### Ejercicios

1. **[opción múltiple]** Tu compu se traba con muchas pestañas abiertas. ¿Cuál es la causa más probable, y qué pieza del A1 está saturada?
   - a) El disco está lleno
   - b) La RAM está saturada ✔
   - c) El CPU está apagado
   - d) La pantalla es pequeña

2. **[completar]** "Al correr `npm install`, el proyecto lee su ____ y descarga las piezas a ____; y si el puerto está en uso, hay un ____ que lo ocupa."
   - Banco: `package.json` · `node_modules` · `proceso` · `navegador`
   - Respuesta: package.json / node_modules / proceso

3. **[relacionar]** Une la parte del mundo digital con su valor:
   - 127.0.0.1 ↔ localhost
   - Puerta 443 ↔ HTTPS
   - puerto 3000 ↔ Desarrollo local
   - ?id=5 ↔ Parámetros de URL

4. **[verdadero/falso]** "Si cambiaste tu código pero el navegador muestra la versión vieja, puede ser la caché; borrarla o forzar la recarga suele arreglarlo."
   - Respuesta: VERDADERO — la caché guarda copias viejas y la recarga forzada las ignora.

5. **[ordenar]** Acomoda en orden lo que pasa cuando escribes una URL:
   - Desordenado: `el servidor responde con la página` · `el navegador ejecuta HTML, CSS y JavaScript` · `el navegador consulta el DNS por la IP` · `el navegador manda una petición HTTPS`
   - Respuesta: consultar DNS → mandar petición HTTPS → servidor responde → navegador ejecuta

6. **[qué hace]** La terminal dice: `EADDRINUSE: address already in use 127.0.0.1:3000`. ¿Qué está pasando y cómo lo resuelves?
   - a) Tu internet se cayó; reinicia el módem
   - b) El puerto 3000 ya está ocupado; cierra el proceso que lo usa o cambia de puerto ✔
   - c) El DNS no encuentra tu dominio
   - d) La caché está llena; borra el historial

7. **[opción múltiple]** Un mensaje "de tu banco" te pide confirmar tu contraseña con urgencia por un enlace. ¿Qué es y qué haces?
   - a) Es phishing; no hagas clic y entra al banco escribiendo el dominio tú mismo ✔
   - b) Es real; haz clic y confirma rápido
   - c) Es una actualización del sistema; acéptala
   - d) Es tu proveedor de internet; ignóralo y listo

8. **[completar]** "En la nube ____ servidores en vez de comprar hardware; tu app vive en una computadora ajena prendida ____, y la encuentras por su ____ pública."
   - Banco: `rentas` · `24/7` · `IP` · `caché`
   - Respuesta: rentas / 24/7 / IP
