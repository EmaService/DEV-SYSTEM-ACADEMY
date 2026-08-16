# MES 2 · MATERIA A — Git: la máquina del tiempo
## Lecciones A1–A5 (Lote 1)

---

## A1 — ¿Qué problema resuelve Git?

### Concepto

Antes de entender qué es Git, entiende el dolor que lo hizo nacer. Cualquiera que haya trabajado en una computadora conoce esta carpeta:

```
propuesta.doc
propuesta_v2.doc
propuesta_v2_corregida.doc
propuesta_FINAL.doc
propuesta_FINAL_ok.doc
propuesta_FINAL_ok_ESTA_SI.doc
```

Ese caos tiene tres problemas graves: no sabes qué cambió entre versiones, no sabes cuál es la buena, y si dos personas editan al mismo tiempo, alguien pierde su trabajo. Con documentos es molesto. **Con software es catastrófico.**

**Git** es un sistema de control de versiones: un programa que vigila una carpeta y registra cada cambio que ocurre dentro de ella. En vez de guardar copias del archivo completo, guarda **qué cambió, cuándo, quién lo hizo y por qué**. Y puede devolverte a cualquier punto del pasado, en segundos.

Lo que Git te da desde hoy:

- **Historial completo:** cada versión de tu proyecto, para siempre
- **Volver atrás:** rompiste algo, regresas a antes de romperlo
- **Trabajo paralelo:** probar una idea sin tocar lo que ya funciona
- **Colaboración:** varias personas (o varias IAs) trabajando sin pisarse

Este último punto es el que te importa como constructor con IA: cuando le pides cambios a una IA y el resultado empeora las cosas, Git es tu botón de deshacer infinito. **Sin Git, dirigir IA es trabajar sin red.**

### Analogía

Git es la **máquina del tiempo de tu proyecto**. Cada vez que guardas un avance importante, la máquina toma una fotografía completa del estado del mundo. Si mañana todo explota, viajas a la foto de ayer y sigues desde ahí, como si nada hubiera pasado. Y a diferencia de las películas, aquí viajar al pasado no tiene consecuencias raras: es gratis, instantáneo y reversible.

### Cómo se ve en la práctica

Un historial real de Git se ve así:

```
a3f9c1  Agregar botón de WhatsApp        (hace 2 horas)
7d2b84  Cambiar colores a paleta nueva   (ayer)
1e8a05  Corregir precios de productos    (hace 3 días)
9c4f21  Versión inicial de la página     (hace 5 días)
```

Cuatro fotografías del proyecto. Puedes ver qué cambió en cada una, y regresar a cualquiera con un comando. Ese código de letras y números (`a3f9c1`) es el identificador único de cada foto.

### Díselo a la IA

> "Le voy a pedir cambios grandes a mi proyecto y tengo miedo de romperlo. Explícame paso a paso cómo uso Git para poder volver atrás si algo sale mal, como si nunca lo hubiera usado."

### Ejercicios

1. **[opción múltiple]** ¿Qué es Git?
   - a) Un lenguaje de programación
   - b) **Un sistema que registra cada cambio de un proyecto** ✔
   - c) Una red social de programadores
   - d) Un editor de código

2. **[completar]** "Git no guarda copias completas: guarda ____ cambió, cuándo, quién y por ____."
   - Banco: `qué` · `qué` · `dónde` · `cuánto`
   - Respuesta: qué / qué

3. **[verdadero/falso]** "Con Git puedes volver a cualquier versión anterior de tu proyecto."
   - Respuesta: VERDADERO — es su superpoder principal.

4. **[relacionar]** Une el problema con la solución que da Git:
   - "No sé qué cambió" ↔ Historial detallado
   - "Rompí algo" ↔ Volver atrás
   - "Quiero probar una idea sin arriesgar" ↔ Ramas
   - "Somos varios trabajando" ↔ Colaboración sin pisarse

5. **[opción múltiple]** ¿Por qué Git es especialmente importante trabajando con IA?
   - a) Porque la IA lo exige
   - b) **Porque si la IA empeora el código, puedes deshacer todo** ✔
   - c) Porque hace la IA más rápida
   - d) Porque reduce el costo de los tokens

---

## A2 — Instalar Git y configurarlo por primera vez

### Concepto

Git es un programa que se instala UNA vez en tu computadora y sirve para todos tus proyectos, para siempre. No es una app con ventanas: vive en la terminal (¿recuerdas el Mes 1?) y también dentro de editores como VS Code.

**Instalación según tu sistema:**

- **Windows:** descarga de `git-scm.com` y siguiente-siguiente. O por terminal: `winget install --id Git.Git`
- **Mac:** viene preinstalado en muchos casos. Si no: `brew install git`
- **Linux/Ubuntu:** `sudo apt install git`

**Verificar que quedó:**

```
git --version
```

Si responde algo como `git version 2.47.0`, ya está. Si dice "comando no encontrado", no se instaló.

**La configuración obligatoria de la primera vez.** Git firma cada cambio con tu nombre y correo, para que el historial diga quién hizo qué. Se configura una sola vez:

```
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@ejemplo.com"
```

Ese `--global` significa "para todos mis proyectos". Usa el mismo correo que vayas a usar en GitHub (Materia B) para que todo quede vinculado.

Detalle que evita dolores: Git usa un editor de texto para ciertas operaciones, y por default en algunos sistemas abre `vim`, un editor legendario del que **es famoso que la gente no sabe cómo salir**. Cámbialo a algo humano:

```
git config --global core.editor "code --wait"
```

(Eso usa VS Code. Si no lo tienes instalado todavía, déjalo así por ahora.)

### Analogía

Instalar y configurar Git es como **darte de alta en el registro civil de tu proyecto**: le dices al sistema cómo te llamas y cómo contactarte, para que cada acta (commit) que firmes tenga tu nombre. Se hace una vez en la vida y después todos los trámites ya te reconocen.

### Cómo se ve en la práctica

Sesión completa de primera configuración:

```
C:\Users\Ray> git --version
git version 2.47.0.windows.1

C:\Users\Ray> git config --global user.name "Raymundo Flores"
C:\Users\Ray> git config --global user.email "rayfg96@gmail.com"

C:\Users\Ray> git config --global --list
user.name=Raymundo Flores
user.email=rayfg96@gmail.com
```

Tres comandos y ya estás listo para versionar cualquier proyecto del resto de tu vida.

### Díselo a la IA

> "Estoy en [Windows/Mac/Linux] y quiero instalar Git desde cero. Dame los comandos exactos, uno por uno, incluyendo cómo verificar que quedó bien instalado y la configuración inicial de nombre y correo. Explícame qué hace cada comando antes de que lo corra."

### Ejercicios

1. **[opción múltiple]** ¿Qué comando verifica que Git quedó instalado?
   - a) `git check`
   - b) **`git --version`** ✔
   - c) `git status`
   - d) `git test`

2. **[completar]** "Git firma cada cambio con tu ____ y tu ____, para que el historial diga quién hizo qué."
   - Banco: `nombre` · `correo` · `contraseña` · `dirección`
   - Respuesta: nombre / correo

3. **[qué hace]** `git config --global user.email "ray@ejemplo.com"` — ¿qué hace?
   - a) Crea una cuenta de GitHub
   - b) **Configura el correo con el que se firmarán tus cambios en todos tus proyectos** ✔
   - c) Envía un correo de prueba
   - d) Recupera tu contraseña

4. **[verdadero/falso]** "Git se instala una vez por proyecto."
   - Respuesta: FALSO — se instala una vez en tu computadora y sirve para todos tus proyectos.

5. **[opción múltiple]** ¿Qué significa la bandera `--global` en la configuración?
   - a) Que se sube a internet
   - b) **Que aplica a todos tus proyectos, no solo al actual** ✔
   - c) Que es visible públicamente
   - d) Que funciona en todos los idiomas

---

## A3 — El repositorio: la carpeta con memoria fotográfica

### Concepto

Un **repositorio** (o "repo", como le dice todo el mundo) es una carpeta normal de tu computadora que Git está vigilando. Por fuera se ve idéntica a cualquier otra carpeta: tiene tus archivos, tus subcarpetas, todo igual.

La diferencia está en una carpeta oculta llamada **`.git`** que aparece adentro. Ahí vive TODO el historial: cada versión de cada archivo, cada cambio, cada mensaje, cada autor, desde el primer día del proyecto. Esa carpeta oculta es la máquina del tiempo.

Consecuencias prácticas de esto:

- Si copias la carpeta del proyecto a una USB, **el historial va incluido** (porque `.git` viaja con ella)
- Si borras la carpeta `.git`, pierdes TODO el historial pero conservas los archivos actuales — la carpeta vuelve a ser una carpeta normal
- Un repo funciona **sin internet**. Git es local; GitHub (Materia B) es lo que le agrega la nube

Vocabulario que vas a escuchar todo el tiempo:

- **Repositorio local:** el que está en tu computadora
- **Repositorio remoto:** una copia que vive en internet (GitHub)
- **Clonar:** descargar una copia completa de un repo remoto

Cuando una IA te diga "haz commit en tu repo" o "el repositorio tiene 3 branches", ya sabes exactamente de qué habla: de la carpeta con memoria.

### Analogía

Un repositorio es una **carpeta con cámara de seguridad interna**. Por fuera, un archivero común. Pero adentro tiene una grabación completa de todo lo que ha pasado ahí: quién entró, qué movió, qué sacó, a qué hora. Puedes rebobinar la cinta a cualquier momento y ver — o restaurar — cómo estaba todo.

### Cómo se ve en la práctica

Una carpeta normal:

```
mi-tienda/
├── index.html
├── styles.css
└── logo.png
```

La misma carpeta convertida en repositorio:

```
mi-tienda/
├── .git/          ← ¡AQUÍ vive el historial completo!
├── index.html
├── styles.css
└── logo.png
```

Un solo directorio de diferencia — y ese directorio contiene toda la historia del proyecto. (La carpeta `.git` está oculta por default: en Windows tienes que activar "Elementos ocultos" en el explorador para verla.)

### Díselo a la IA

> "Tengo una carpeta con mi proyecto. Explícame qué le pasa exactamente cuando la convierto en repositorio de Git: qué se crea, qué NO cambia de mis archivos, y qué pasaría si borro la carpeta .git."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un repositorio?
   - a) Un servidor en internet
   - b) **Una carpeta que Git está vigilando** ✔
   - c) Un tipo de archivo
   - d) Una cuenta de GitHub

2. **[completar]** "Todo el historial de un repositorio vive en una carpeta oculta llamada ____."
   - Banco: `.git` · `.historial` · `.repo` · `.version`
   - Respuesta: .git

3. **[verdadero/falso]** "Git necesita internet para funcionar."
   - Respuesta: FALSO — Git es local; GitHub es lo que agrega internet.

4. **[relacionar]** Une el término con su significado:
   - Repositorio local ↔ El que está en tu computadora
   - Repositorio remoto ↔ La copia que vive en internet
   - Clonar ↔ Descargar una copia completa de un repo
   - `.git` ↔ La carpeta oculta con todo el historial

5. **[qué hace]** Borras la carpeta `.git` de tu proyecto. ¿Qué pasa?
   - a) Se borran todos tus archivos
   - b) **Pierdes el historial pero conservas los archivos actuales** ✔
   - c) No pasa nada, se regenera sola
   - d) El proyecto deja de funcionar

---

## A4 — `git init`: convertir una carpeta normal en repo

### Concepto

El comando que enciende la máquina del tiempo es uno solo:

```
git init
```

Se ejecuta **dentro** de la carpeta que quieres versionar, y hace exactamente una cosa: crea la carpeta oculta `.git`. A partir de ese momento, Git está observando.

El flujo completo desde cero:

```
cd Proyectos              ← te mueves a donde guardas tus cosas
mkdir mi-tienda           ← creas la carpeta del proyecto
cd mi-tienda              ← entras a ella
git init                  ← la conviertes en repositorio
```

(Todos esos comandos son del Mes 1 — `cd`, `mkdir`. Ya los conocías; ahora los usas de verdad.)

Git responde algo como:

```
Initialized empty Git repository in C:/Users/Ray/Proyectos/mi-tienda/.git/
```

"Empty" (vacío) significa que todavía no has guardado ninguna fotografía. La cámara está instalada pero no ha disparado.

**Errores comunes que vas a evitar por saber esto:**

1. **Correr `git init` en la carpeta equivocada.** Si lo corres en `C:\Users\Ray` conviertes TU CARPETA DE USUARIO ENTERA en un repositorio — con miles de archivos que no querías. Si te pasa: borra el `.git` que se creó ahí y vuelve a empezar en la carpeta correcta. Antes de hacer `git init`, corre `ls` (o `dir`) y confirma que estás donde crees.

2. **Hacer `git init` dentro de un repo que ya existe.** No es catastrófico, pero es señal de que te perdiste. Verifica con `git status`: si responde información del repo, ya era un repo.

Nota de 2026: el nombre de la rama principal por default es `main` (antes era `master`). Si tu Git es viejo y crea `master`, actualízalo o renómbrala — todo el mundo usa `main` hoy.

### Analogía

`git init` es **instalar la cámara de seguridad en el local**. El local ya existía, tus cosas ya estaban ahí, nada se mueve. Pero desde el momento en que la instalas, empieza la capacidad de grabar. Lo que hubo ANTES de instalarla no queda registrado: el historial arranca hoy.

### Cómo se ve en la práctica

```
C:\Users\Ray\Proyectos> mkdir mi-tienda
C:\Users\Ray\Proyectos> cd mi-tienda
C:\Users\Ray\Proyectos\mi-tienda> git init
Initialized empty Git repository in C:/Users/Ray/Proyectos/mi-tienda/.git/

C:\Users\Ray\Proyectos\mi-tienda> git status
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

Git te está diciendo, en su idioma: "estás en la rama main, no hay ninguna foto todavía, y no hay nada que fotografiar — crea archivos".

### Díselo a la IA

> "Voy a crear un proyecto nuevo desde cero y quiero versionarlo con Git. Dame la secuencia exacta de comandos desde crear la carpeta hasta tener el repositorio listo, y dime cómo verifico en cada paso que voy bien."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git init`?
   - a) Sube el proyecto a internet
   - b) **Crea la carpeta .git y convierte la carpeta en repositorio** ✔
   - c) Descarga un proyecto ajeno
   - d) Guarda una fotografía del proyecto

2. **[ordenar]** Acomoda la secuencia para crear un proyecto versionado desde cero:
   - Desordenado: `git init` · `cd mi-tienda` · `mkdir mi-tienda`
   - Respuesta: mkdir mi-tienda → cd mi-tienda → git init

3. **[verdadero/falso]** "`git init` guarda automáticamente una primera versión de tus archivos."
   - Respuesta: FALSO — solo instala la cámara; todavía no hay ninguna foto tomada.

4. **[completar]** "En 2026 la rama principal por default se llama ____, aunque antes se llamaba ____."
   - Banco: `main` · `master` · `origin` · `head`
   - Respuesta: main / master

5. **[qué hace]** Corriste `git init` por error en `C:\Users\Ray`. ¿Qué debes hacer?
   - a) Nada, es inofensivo
   - b) **Borrar la carpeta .git que se creó ahí y repetirlo en la carpeta correcta** ✔
   - c) Reinstalar Git
   - d) Formatear la computadora

---

## A5 — Los 3 estados de Git: trabajo, preparación, historial

### Concepto

Este es EL concepto que hace clic y de repente Git deja de ser confuso. Git no guarda tus cambios directamente: los mueve por **tres zonas**.

**1. Working Directory (área de trabajo)**
Tu carpeta tal cual la ves. Aquí editas archivos, creas, borras. Todo cambio nace aquí. Git lo nota pero no lo ha guardado.

**2. Staging Area (área de preparación)**
Una antesala. Aquí pones los cambios que quieres que entren en la PRÓXIMA fotografía. Es una lista de "esto sí va". Se llena con `git add`.

**3. Repository (historial)**
El álbum de fotos permanente. Lo que llega aquí queda registrado para siempre. Se guarda con `git commit`.

El flujo, siempre igual:

```
editas archivos  →  git add  →  git commit
(working)          (staging)     (historial)
```

**¿Por qué existe la zona intermedia?** Porque no siempre quieres guardar todo lo que tocaste. Imagina que trabajaste en dos cosas: arreglaste un bug Y cambiaste colores. Son cambios distintos que merecen fotos distintas. El staging te deja decir "primero fotografío el bug, luego los colores" — commits limpios y separados, en vez de un revoltijo.

Ese detalle es lo que separa un historial profesional (donde puedes encontrar exactamente cuándo se rompió algo) de un historial inútil (donde todo es un solo commit gigante llamado "cambios").

### Analogía

Es como **mandar un paquete por paquetería**:

1. **Tu casa (working):** tienes cosas regadas por toda la casa.
2. **La caja (staging):** eliges qué cosas SÍ van en este envío y las metes a la caja. Las demás se quedan en casa para el próximo envío.
3. **Enviado (historial):** sellas la caja y la mandas. Queda registrada con guía, fecha y destinatario. Ya no la puedes abrir.

Si metiste algo por error, todavía puedes sacarlo de la caja **antes** de sellarla. Después, ya no.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git status
On branch main
Changes not staged for commit:
        modified:   index.html      ← en working, sin preparar
        modified:   styles.css      ← en working, sin preparar

C:\...\mi-tienda> git add index.html    ← solo este va a la caja

C:\...\mi-tienda> git status
On branch main
Changes to be committed:
        modified:   index.html      ← ya en staging ✔
Changes not staged for commit:
        modified:   styles.css      ← sigue en working
```

Fíjate: tocaste dos archivos, pero solo preparaste uno. El próximo commit va a incluir SOLO `index.html`. Eso es control fino.

### Díselo a la IA

> "Trabajé en varias cosas a la vez en mi proyecto y quiero guardarlas en commits separados por tema. Explícame cómo uso el área de staging para lograrlo, con los comandos exactos."

### Ejercicios

1. **[ordenar]** Acomoda las 3 zonas de Git en el orden que recorre un cambio:
   - Desordenado: `Repository (historial)` · `Working Directory` · `Staging Area`
   - Respuesta: Working Directory → Staging Area → Repository

2. **[relacionar]** Une la zona con su comando o descripción:
   - Working Directory ↔ Tu carpeta donde editas
   - Staging Area ↔ Se llena con `git add`
   - Repository ↔ Se guarda con `git commit`

3. **[completar]** "El área de ____ existe para poder elegir QUÉ cambios entran en la próxima ____."
   - Banco: `staging` · `fotografía` · `trabajo` · `carpeta`
   - Respuesta: staging / fotografía

4. **[verdadero/falso]** "Si editas 5 archivos, obligatoriamente los 5 entran en el siguiente commit."
   - Respuesta: FALSO — con `git add` eliges cuáles; los demás se quedan esperando.

5. **[qué hace]** En la analogía del paquete, ¿qué representa "sellar la caja y mandarla"?
   - a) `git add`
   - b) `git init`
   - c) **`git commit`** ✔
   - d) `git status`

---

## A6 — git status: tu brújula, el comando que más vas a usar

### Concepto

`git status` es el comando que más vas a escribir en tu vida con Git. Y no por casualidad: responde la pregunta que te haces a cada rato — "¿dónde estoy y qué está pasando en mi proyecto?". Lo corres cuando no estás seguro de algo y te dice la verdad completa del estado actual de tu repo.

Lo que te reporta, en tres bloques:

- **En qué rama estás** (recuerda: `main` por default, de A4)
- **Qué cambios están en staging** (preparados para el próximo commit, de A5)
- **Qué cambios siguen en working** (editados pero no preparados), y qué archivos nuevos no se han rastreado todavía

Es un comando de solo lectura: **no cambia absolutamente nada**. Puedes correrlo cien veces seguidas y el proyecto queda igual. Por eso es tu refugio: cuando estés perdido, confundido o con miedo, `git status` te dice en qué punto estás.

Es también la herramienta para verificar antes de actuar. En A4 lo viste: corremos `git status` para confirmar que estamos en un repo. El flujo profesional repite el patrón todo el tiempo: status → entender → decidir → actuar.

Y cuando trabajes con IA dirigida, este comando se vuelve tu defensa: antes de que la IA toque tu proyecto, corres `git status` para saber cómo está; después, lo corres otra vez para verificar que todo quedó como se suponía. Puedes pedirle a la IA que interprete las líneas, pero el hábito de verlo tú es tuyo.

### Analogía

Es el **tablero del coche**. Cuando manejas no memorizas cuánta gasolina había hace una hora: miras el tablero y ya. El tablero no mueve el coche, solo te informa — pero sin él manejas a ciegas. `git status` es tu tablero: te dice si hay luz de reserva (cambios sin preparar), qué tienes en el tanque (staging) y hacia dónde vas (rama).

### Cómo se ve en la práctica

```
C:\Users\Ray\Proyectos\mi-tienda> git status
On branch main
Changes to be committed:
        new file:   index.html

Changes not staged for commit:
        modified:   styles.css

Untracked files:
        logo.png
```

Tres bloques, tres mensajes: `index.html` ya está preparado para la próxima foto; `styles.css` fue modificado pero sigue en working; `logo.png` es nuevo y Git no lo ha visto antes. Si no hubiera nada, Git responde el equivalente a "todo limpio": `nothing to commit, working tree clean`.

Fíjate en el detalle: no necesitas memorizar nada. El comando te dice con palabras exactas dónde está cada cosa.

### Díselo a la IA

> "Voy a correr `git status` en mi repositorio y me va a salir una lista de archivos modificados, preparados y sin rastrear. Dime cómo interpretar cada línea como si me la explicaras a mí, y qué debería hacer con cada bloque según las buenas prácticas."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git status`?
   - a) Guarda los cambios en el historial
   - b) **Muestra el estado actual del repo sin cambiar nada** ✔
   - c) Sube el proyecto a internet
   - d) Borra los archivos que no se usan

2. **[qué hace]** Ves esta salida:

   ```
   On branch main
   Changes not staged for commit:
           modified:   index.html
   ```

   ¿Qué significa?
   - a) `index.html` ya está guardado en el historial
   - b) **`index.html` fue modificado pero aún no está preparado para el commit** ✔
   - c) El archivo se borró del repo
   - d) Hay un error de código en `index.html`

3. **[completar]** "`git status` es un comando de solo ____: no cambia ____ de tu proyecto."
   - Banco: `lectura` · `nada` · `escritura` · `algo`
   - Respuesta: lectura / nada

4. **[verdadero/falso]** "Corres `git status` con miedo de romper algo y es legítimo: el comando puede modificar archivos."
   - Respuesta: FALSO — `git status` no modifica nada; es tu comando seguro para orientarte.

5. **[relacionar]** Une la línea de `git status` con su significado:
   - `Changes to be committed` ↔ Ya está en staging, listo para la próxima foto
   - `Changes not staged for commit` ↔ Modificado pero todavía en working
   - `Untracked files` ↔ Archivo nuevo que Git no ha visto antes
   - `working tree clean` ↔ No hay nada pendiente, todo está guardado

---

## A7 — git add: elegir qué entra en la foto

### Concepto

`git add` es el comando que mueve tus cambios del área de trabajo (working) al área de preparación (staging) — los dos estados que viste en A5. Es tu manera de decirle a Git: "esto SÍ va en la próxima fotografía, esto no".

Las formas más usadas:

```
git add index.html        ← prepara ese archivo
git add styles.css logo   ← prepara varios archivos
git add src/              ← prepara toda una carpeta
git add .                 ← prepara TODO lo que cambió
```

El `.` es peligroso y útil a la vez. Útil porque ahorra teclear; peligroso porque arrastra a la foto cualquier cosa que esté modificada — incluido lo que no querías. Por eso primero corres `git status`, miras qué hay y luego decides.

La regla profesional: **un commit = una idea**. Si cambiaste el color del botón y además arreglaste un precio, son dos ideas, merecen dos commits. `git add` te da ese control fino: preparas solo el botón, haces commit; después solo el precio, otro commit.

Ojo con una trampa clásica: si editas un archivo DESPUÉS de prepararlo, Git lo marca como "staged y modified a la vez". La versión en staging es la vieja; tu nueva edición quedó en working. Hay que volver a correr `git add` para actualizar la versión preparada. (En A13 verás cómo deshacer un add antes de commitear.)

Cuando diriges una IA, este comando es tu filtro: la IA te devuelve cinco archivos modificados y tú decides cuáles entran a la foto. No es confiar o no en la IA — es control de calidad de lo que se guarda en el historial.

### Analogía

Preparar la mesa del banquete antes de la foto. El fotógrafo llega, pero antes tú eliges qué platos se ven: el pastel sí, la ensalada no. Y si después de acomodar mueves un plato, el acomodo cambió y hay que volver a colocarlo antes de disparar. `git add` es ese acomodo: decides qué entra al encuadre y en qué estado.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git status
Changes not staged for commit:
        modified:   index.html
        modified:   styles.css

C:\...\mi-tienda> git add index.html

C:\...\mi-tienda> git status
Changes to be committed:
        modified:   index.html
Changes not staged for commit:
        modified:   styles.css
```

`index.html` cambió de zona: ahora está en "to be committed". `styles.css` sigue esperando. Ese control archivo por archivo es lo que separa un historial profesional de un borrón.

### Díselo a la IA

> "Terminé de pedirle cambios a una IA y me modificó varios archivos, pero algunos no los quiero guardar todavía. Enséñame a usar `git add` de forma selectiva para preparar solo lo que sí va en el próximo commit, con ejemplos de nombres de archivos reales."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git add index.html`?
   - a) Guarda el archivo en el historial definitivamente
   - b) **Mueve el archivo al área de preparación para el próximo commit** ✔
   - c) Sube el archivo a GitHub
   - d) Crea una copia de seguridad del archivo

2. **[qué hace]** Corres `git add .` en una carpeta con 10 archivos modificados. ¿Qué pasa?
   - a) Nada, el comando es inválido
   - b) Solo prepara los archivos HTML
   - c) **Prepara los 10 archivos modificados** ✔
   - d) Borra los archivos modificados

3. **[completar]** "Editaste un archivo DESPUÉS de hacer `git add`. Para que el commit incluya tu nueva edición, debes correr ____ de nuevo."
   - Banco: `git add` · `git commit` · `git status` · `git init`
   - Respuesta: git add

4. **[verdadero/falso]** "La regla profesional dice: un commit = una idea. Por eso conviene preparar de forma selectiva con `git add`."
   - Respuesta: VERDADERO — commits limpios por tema son fáciles de entender y de deshacer.

5. **[ordenar]** Acomoda el flujo correcto para preparar solo un archivo:
   - Desordenado: `git add index.html` · Correr `git status` para ver qué hay · `git status` para confirmar
   - Respuesta: Correr `git status` para ver qué hay → git add index.html → git status para confirmar

---

## A8 — git commit: tomar la foto

### Concepto

`git commit` es el disparador de la cámara: toma la fotografía permanente de lo que está en staging y la mete al historial. Lo que se va con `git add` se queda con `git commit`.

Su forma más común:

```
git commit -m "mensaje"
```

El `-m` es "message": el mensaje que explica qué cambió en esta foto. No es opcional de facto — Git puede abrir un editor de texto, pero ahí empiezan los problemas (¿recuerdas `vim` en A2?). El hábito sano: siempre `-m`.

Cosas que debes saber:

- **El commit ya no se puede cambiar.** Una vez tomada, la foto queda en el historial. Si el mensaje tiene una erre o metiste algo de más, se corrige con otros comandos (A13–A15), no editando.
- **Todo commit necesita algo en staging.** Si no hay nada preparado, Git responde `nothing to commit`. La cámara no dispara sin película.
- **Cada commit es un punto de regreso.** Esa es la apuesta completa: mientras más fotos tomas, más puntos de viaje en el tiempo tienes. Nadie se queja de tener demasiados puntos de restauración.

El flujo completo que ya conoces de A5, ahora en acción:

```
editas → git status → git add → git commit -m "mensaje"
```

Fíjate: add y commit son inseparables pero distintos. `add` elige y prepara; `commit` guarda. Para alguien que dirige IA, el commit es el momento de "aprobé este trabajo y queda como referencia". La IA puede romper mil cosas; tus commits son los puntos donde el proyecto quedó bien y a donde puedes volver.

### Analogía

El botón del obturador de la cámara. Ya elegiste el encuadre con `git add`, ya compusiste; ahora presionas y la foto queda impresa en el álbum para siempre. No puedes "desimprimirla" — puedes sacar otra mejor después, pero la primera ya existe. Por eso te aseguras de que el encuadre esté bien ANTES de disparar.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git add index.html
C:\...\mi-tienda> git commit -m "Agregar botón de WhatsApp"
[main a3f9c1] Agregar botón de WhatsApp
 1 file changed, 12 insertions(+)
```

Git te confirma: la rama `main`, el identificador `a3f9c1`, y qué pasó dentro — un archivo, 12 líneas agregadas. Ese `a3f9c1` es la llave que usarás para viajar a este momento (A10 y más adelante).

Y ahora `git status` cambia de mensaje: `working tree clean`. Todo tu trabajo está a salvo en el historial. Esa frase — "árbol de trabajo limpio" — es la paz mental del desarrollador.

### Díselo a la IA

> "Voy a hacer mi primer commit y quiero hacerlo bien desde el inicio. Confirma mi secuencia de comandos, dime qué información debo incluir en el mensaje, y qué debería ver en la respuesta de Git para saber que todo salió bien."

### Ejercicios

1. **[completar]** "`git add` elige y prepara; `git commit` ____ en el historial."
   - Banco: `guarda la foto` · `borra el archivo` · `abre un editor` · `sube a internet`
   - Respuesta: guarda la foto

2. **[opción múltiple]** ¿Qué hace el `-m` en `git commit -m "mensaje"`?
   - a) Mueve el proyecto a otra rama
   - b) **Te deja escribir el mensaje del commit directamente en la terminal** ✔
   - c) Crea un archivo de mensajes
   - d) Silencia los errores

3. **[verdadero/falso]** "Si no hay nada en staging, `git commit` crea igualmente una foto vacía."
   - Respuesta: FALSO — Git responde `nothing to commit`; sin staging no hay foto.

4. **[qué hace]** En la respuesta `[main a3f9c1] Agregar botón de WhatsApp`, ¿qué es `a3f9c1`?
   - a) El nombre de la rama
   - b) El autor del commit
   - c) **El identificador único de este commit, para poder viajar a él** ✔
   - d) La contraseña del repositorio

5. **[ordenar]** Acomoda el flujo completo de guardar un cambio:
   - Desordenado: `git commit -m "..."` · `git add` · editar archivos · `git status` para confirmar
   - Respuesta: editar archivos → git add → git commit -m "..." → git status para confirmar

---

## A9 — Mensajes de commit: escribirle a tu yo del futuro

### Concepto

El mensaje de commit es lo único que le explica a otro humano — o a ti, dentro de seis meses — QUÉ pasó en esa foto y POR QUÉ. El código dice qué se hizo; el mensaje dice qué se quiso hacer. Sin buenos mensajes, tu historial es una caja de fotos sin anotaciones: nadie sabe qué hay dentro.

La receta corta: **verbo en imperativo + descripción corta**. Imperativo porque el mensaje ordena al código: "Agregar botón", "Corregir precio", "Actualizar colores". Funciona como si cada commit fuera una instrucción: "haz esto en el proyecto".

Buenos vs malos:

```
BAD:  "cambios"
BAD:  "arreglos v2 final"
BAD:  "sss"

GOOD: "Agregar botón de WhatsApp al header"
GOOD: "Corregir precio incorrecto del producto 3"
GOOD: "Cambiar paleta de colores a la nueva marca"
```

La regla de oro: si tu mensaje podría servir para CUALQUIER commit, no sirve para ninguno. "Cambios" no dice nada. "Corregir precio incorrecto del producto 3" dice exactamente qué pasó.

¿Cuánto escribir? Una línea de máximo 50 caracteres suele bastar para el 95% de los casos. Si necesitas más contexto, la buena práctica es una línea corta + cuerpo después. Para empezar, una línea clara ya te pone por encima de la mayoría.

Extra que te va a encantar como director de IA: los mensajes de commit son el lugar perfecto para delegar. Puedes pedirle a una IA que te proponga el mensaje a partir de tu `git status` y tu `git diff` — eso lo practicas en C5. Pero pídeselo con tu idea clara, no en automático: tú decides qué historia se cuenta.

### Analogía

El álbum de fotos de la familia. Una foto de la playa sin anotación es un misterio en 2035: ¿quién está? ¿de qué año? La misma foto con "Verano 2026, playa de Acapulco, primer viaje juntos" cuenta una historia. Tu historial de commits es el álbum de tu proyecto; cada mensaje es la anotación que evita que el futuro se quede en blanco.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git commit -m "Corregir precio incorrecto del producto 3"
[main 7d2b84] Corregir precio incorrecto del producto 3
 1 file changed, 1 insertion(+), 1 deletion(-)
```

Meses después, en `git log`, esa línea te dirá exactamente qué se tocó y por qué. El mensaje es tan importante como el cambio mismo: un cambio bien hecho con un mal mensaje se pierde en la historia; un cambio mediano con un buen mensaje al menos se entiende.

### Díselo a la IA

> "Voy a preparar un commit y quiero un buen mensaje. Te daré mi `git status` y mi `git diff`. Propón 3 opciones de mensaje con verbo en imperativo, y dime cuál recomiendas y por qué."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el mejor mensaje de commit?
   - a) "cambios"
   - b) "nuevo"
   - c) **"Corregir precio incorrecto del producto 3"** ✔
   - d) "v2 final bueno"

2. **[completar]** "Un buen mensaje de commit usa verbo en ____ y una descripción ____."
   - Banco: `imperativo` · `corta` · `pasado` · `larga`
   - Respuesta: imperativo / corta

3. **[verdadero/falso]** "El mensaje 'cambios' es un mensaje de commit perfectamente válido."
   - Respuesta: FALSO — sirve para cualquier commit, o sea no describe ninguno.

4. **[relacionar]** Une el estilo de mensaje con su efecto:
   - "Cambios" ↔ No dice nada, inútil para el futuro
   - "Agregar botón de WhatsApp al header" ↔ Cuenta exactamente qué pasó
   - Verbo en imperativo ↔ El mensaje ordena qué hacer ("Agregar", "Corregir")
   - Una línea de máximo 50 caracteres ↔ Clara y rápida de leer en el historial

5. **[qué hace]** ¿Para qué sirve un buen mensaje de commit, más allá de registrar el cambio?
   - a) Para que Git funcione más rápido
   - b) **Para que tú o cualquier persona entienda QUÉ y POR QUÉ cambió el proyecto, incluso meses después** ✔
   - c) Para subir el proyecto a GitHub
   - d) Para que la IA entienda mejor el código

---

## A10 — git log: leer la historia de tu proyecto

### Concepto

`git commit` toma fotos; `git log` es el álbum. Este comando despliega el historial de tu proyecto: cada commit con su identificador, su autor, su fecha y su mensaje, del más reciente al más antiguo.

Formas de leerlo:

```
git log              ← la historia completa
git log --oneline    ← una línea por commit (la versión rápida)
git log --graph      ← el árbol visual con ramas
```

`--oneline` es la que vas a usar casi siempre: muestra el identificador corto + el mensaje, y de un vistazo ves la historia completa del proyecto. `--graph` lo verás en serio cuando llegues a las ramas (A16 y siguientes).

Leer el historial no es curiosidad: es la forma de encontrar respuestas. "¿Cuándo se rompió esto?" → buscas el commit donde cambió la línea. "¿Qué le pedí a la IA la última vez?" → el historial lo tiene todo, incluidas tus decisiones. Un buen historial es memoria externa: no tienes que recordar nada, solo leerlo.

Cruza esto con lo que ya sabes: el mensaje del commit (A9) es lo que hace útil a `git log`. Historial con buenos mensajes = biografía clara. Historial con "cambios" = libro en blanco. Y cuando llegues a GitHub (B13 y más allá), `git log` también te muestra qué vas a proponer en un Pull Request.

Dato extra de poder: `git log` tiene filtros que parecen magia. Por ejemplo, `git log --oneline -- index.html` te muestra solo los commits que tocaron ese archivo. Ese tipo de comando puedes pedirlo con IA, pero entender qué te está diciendo es tuyo.

### Analogía

Leer el diario de un viaje ya terminado. Cada entrada (commit) tiene fecha, autor y qué pasó ese día. En vez de preguntarte "¿qué hice la semana pasada?", abres el diario en la fecha y está todo escrito. `git log` es abrir el diario de tu proyecto, hojeado de la entrada más reciente a la más antigua.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git log --oneline
a3f9c1 Agregar botón de WhatsApp
7d2b84 Corregir precio incorrecto del producto 3
1e8a05 Cambiar paleta de colores a la nueva marca
9c4f21 Versión inicial de la página
```

Cuatro commits, cuatro momentos. El más reciente arriba. Cada línea te dice qué pasó y con qué llave (`a3f9c1`) puedes volver a ese momento. Esa lista, en este punto de tu aprendizaje, ya es tu superpoder: la historia de tu proyecto legible de un vistazo.

### Díselo a la IA

> "Tengo un proyecto con varios commits y quiero entender mi historial. Explícame cómo usar `git log` con `--oneline` y `--graph`, y muéstrame un ejemplo de cómo se ve cada uno. También dime cómo ver solo los commits que tocaron un archivo específico."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git log`?
   - a) Registra nuevos cambios en el historial
   - b) **Muestra el historial de commits del proyecto, del más reciente al más antiguo** ✔
   - c) Sube el proyecto a GitHub
   - d) Borra commits viejos

2. **[completar]** "La variante `git log ____` muestra una línea por commit: identificador corto + mensaje."
   - Banco: `--oneline` · `--graph` · `--foto` · `--todo`
   - Respuesta: --oneline

3. **[qué hace]** `git log --oneline -- index.html` — ¿qué hace?
   - a) Muestra el historial completo de todos los archivos
   - b) Crea un nuevo archivo de historial
   - c) **Muestra solo los commits que tocaron `index.html`** ✔
   - d) Elimina los commits de `index.html`

4. **[verdadero/falso]** "El orden de `git log` va del commit más reciente al más antiguo."
   - Respuesta: VERDADERO — la entrada más nueva siempre aparece arriba.

5. **[relacionar]** Une el comando con lo que muestra:
   - `git log` ↔ La historia completa con autor y fecha
   - `git log --oneline` ↔ Una línea por commit, la versión rápida
   - `git log --graph` ↔ El árbol visual con ramas
   - `git log --oneline -- index.html` ↔ Solo los commits que tocaron index.html

---

## A11 — .gitignore: lo que Git NUNCA debe rastrear

### Concepto

Git vigila todo lo que está dentro de tu repositorio. Pero no todo lo que vive en un proyecto de software es tuyo, ni debería guardarse en la historia. Hay archivos que se generan solos, archivos que pesan toneladas y archivos que contienen secretos. Versionarlos es ensuciar el historial y, peor, regalar tus contraseñas.

Para eso existe **`.gitignore`**: un archivo de texto que le dice a Git exactamente qué debe ignorar. Es un "no me mires" por lista: cada línea es un patrón de lo que no se rastrea.

Lo que casi siempre va ahí:

- `node_modules/` — carpetas de dependencias de JavaScript. Pesan cientos de megabytes y se regeneran con un comando. Guardarlas es absurdo: son de otro, no tuyas.
- `.env` — archivos de configuración con contraseñas, API keys y secretos. (Los secretos se tratan en serio en B28; por ahora: nunca, jamás los versiones.)
- `*.log` — registros que cambian cada segundo, inútiles en el historial.
- `.vscode/` — preferencias personales de tu editor.

La pregunta clave para cada archivo es: **¿es generado o es propio?** Si lo puede regenerar la máquina (dependencias, builds, logs), no se versiona. Si es tu código, se versiona.

Bonus para tu flujo con IA: cuando le pides a una IA que cree un proyecto desde cero, incluye el `.gitignore` en la petición. Los frameworks generan basura nueva cada vez; un `.gitignore` bueno desde el día uno te ahorra un `git status` gritándote con archivos que no te importan.

### Analogía

El letrero de "NO TOCAR" en el archivero del proyecto. Hay un cajón con los documentos reales que todos firman y guardan, y una caja al lado con recibos viejos, basura y un sobre con la contraseña de la bóveda. El letrero sobre esa caja es el `.gitignore`: la regla escrita que dice "esto no entra al registro oficial, nunca".

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git status
Untracked files:
        .env
        index.html
        node_modules/

C:\...\mi-tienda> # creas .gitignore y escribes:
node_modules/
.env
*.log

C:\...\mi-tienda> git status
Untracked files:
        index.html
```

`.env` y `node_modules/` desaparecieron del radar de Git. Ya no los ve, ya no los cuenta, ya no los molestará en ningún `git add .` futuro — ¿recuerdas el riesgo de `git add .` en A7? El `.gitignore` es su antídoto.

### Díselo a la IA

> "Voy a crear un proyecto con [tu tecnología/framework] y quiero que me generes el archivo .gitignore correcto. Explícame qué archivos voy a ignorar y por qué, y qué debería pasar si algún día subo el .env por error."

### Ejercicios

1. **[opción múltiple]** ¿Qué es `.gitignore`?
   - a) Un comando que borra archivos
   - b) **Un archivo que le dice a Git qué NO debe rastrear** ✔
   - c) Un antivirus para tu repo
   - d) Una carpeta oculta del sistema

2. **[completar]** "Los archivos que la máquina puede ____ (como `node_modules/`) no se versionan."
   - Banco: `regenerar` · `borrar` · `leer` · `comprimir`
   - Respuesta: regenerar

3. **[verdadero/falso]** "Es buena idea versionar el archivo `.env` que contiene tus contraseñas."
   - Respuesta: FALSO — los secretos jamás van al historial; por eso van al .gitignore.

4. **[qué hace]** Escribiste `*.log` en tu `.gitignore`. ¿Qué significa?
   - a) Borra todos los archivos .log del proyecto
   - b) **Git ignora cualquier archivo que termine en .log** ✔
   - c) Solo ignora un archivo llamado .log
   - d) Los archivos .log se suben primero

5. **[relacionar]** Une el elemento con el motivo para ignorarlo:
   - `node_modules/` ↔ Generado automáticamente, pesa cientos de MB
   - `.env` ↔ Contiene contraseñas y API keys
   - `*.log` ↔ Cambia cada segundo, no aporta al historial
   - `index.html` ↔ NO se ignora: es código propio, se versiona

---

## A12 — git diff: ver exactamente qué cambió, línea por línea

### Concepto

`git status` te dice qué archivos cambiaron (A6). `git diff` te dice EXACTAMENTE qué cambió dentro de ellos, línea por línea. Es pasar del titular al detalle: status responde "¿qué se tocó?", diff responde "¿qué dice la línea exacta que se tocó?".

Su salida muestra dos versiones lado a lado: las líneas que se quitaron empiezan con `-` y las que se agregaron con `+`. Por eso las ves en rojo y verde en los editores. Con eso lees el cambio sin abrir ningún archivo: sabes qué se quitó, qué se puso y en qué línea.

Por default, `git diff` te muestra los cambios que están en el área de trabajo (working), o sea los que aún no preparaste. Para ver los que ya metiste a staging (A5), existe su versión:

```
git diff                    ← cambios sin preparar
git diff --staged           ← cambios ya preparados
git diff index.html         ← un solo archivo
```

Como `git status`, es de **solo lectura**: no modifica nada. Puedes usarlo sin miedo cien veces.

Este es el comando de la confianza con IA: antes de aprobar lo que una IA ejecutora te dejó en el repo, corres `git diff` y revisas línea por línea. No es desconfianza, es revisión — el mismo músculo de code review que se practica en serio en C13 y B15.

### Analogía

El corrector del profesor con dos tintas. El alumno entregó una redacción: en tinta roja está lo que se borró, en tinta verde lo que se agregó. Tú no tienes que adivinar nada: el documento mismo te muestra el antes y el después, palabra por palabra. `git diff` es ese documento corregido.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git diff
diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@ -14,6 +14,7 @@
 <h1>Bienvenido</h1>
+<p>Envíos gratis a todo el país</p>
 <button>Comprar</button>
```

Una línea nueva (`+`) apareció entre el título y el botón. La señal `@@` te dice en qué zona del archivo ocurrió. Sin abrir `index.html`, ya sabes exactamente qué cambió la IA — y si ese cambio no te gusta, decidirás en las próximas lecciones qué hacer.

### Díselo a la IA

> "Voy a correr `git diff` en mi proyecto después de que una IA hiciera cambios. Explícame cómo leer cada parte de la salida: las líneas con +, las líneas con -, y el encabezado @@. Muéstrame con un ejemplo real."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git diff`?
   - a) Guarda los cambios en el historial
   - b) **Muestra, línea por línea, qué cambió en tus archivos** ✔
   - c) Compara tu proyecto con GitHub
   - d) Borra las líneas que no usas

2. **[completar]** "En la salida de `git diff`, las líneas con ____ fueron agregadas y las líneas con ____ fueron eliminadas."
   - Banco: `+` · `-` · `#` · `@`
   - Respuesta: + / -

3. **[qué hace]** `git diff --staged` — ¿qué muestra?
   - a) Los cambios que ya están en el historial
   - b) **Los cambios que ya preparaste con `git add`** ✔
   - c) Los cambios del último commit
   - d) Los archivos que aún no existen

4. **[verdadero/falso]** "`git diff` modifica tus archivos."
   - Respuesta: FALSO — es de solo lectura, como `git status`; no cambia nada.

5. **[relacionar]** Une el comando con lo que muestra:
   - `git status` ↔ Qué archivos cambiaron
   - `git diff` ↔ Las líneas exactas de los cambios sin preparar
   - `git diff --staged` ↔ Las líneas exactas de los cambios preparados
   - `git diff index.html` ↔ Los cambios de un solo archivo

---

## A13 — Deshacer I: git restore (antes del commit)

### Concepto

Aquí arranca la sección más valiosa del mes: **deshacer**. Y la buena noticia: mientras un cambio no haya llegado al commit, deshacerlo es fácil, gratuito y sin dejar huella.

`git restore` es el comando para dos operaciones distintas, según a qué zona apunte:

- **`git restore <archivo>`** — descarta los cambios del área de trabajo y devuelve el archivo a su última versión guardada (la de staging o la del último commit). Perfecto cuando la IA te rompió algo y quieres la versión anterior.
- **`git restore --staged <archivo>`** — saca un archivo del área de preparación. Es el "deshacer un `git add`" que se mencionaba en A7. El archivo se queda modificado, pero ya no va en la próxima foto.

Esto completa el flujo de los 3 estados (A5): antes del commit todo es reversible con `git restore`. Después del commit, ya es otro partido (A14–A15).

**La advertencia que debes escuchar:** `git restore` sobre el working **destruye los cambios para siempre**. No hay "deshacer del deshacer". Si descartas algo que era útil, desapareció. Por eso el hábito es: primero `git diff` para ver qué vas a perder (A12), luego decides.

En el flujo con IA, este es tu comando de emergencia diario: la IA te devolvió 5 archivos, 3 son oro y 2 son basura. Uno por uno decides cuáles quedan con `git restore`.

### Analogía

El lápiz y el borrador antes de entregar el examen. Mientras sigue en tu pupitre (antes del commit), borras y vuelves a escribir las veces que quieras y nadie se entera. Pero atención: lo borrado con el borrador no regresa. Por eso miras bien qué estás borrando antes de mover la mano.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git status
Changes not staged for commit:
        modified:   index.html
        modified:   styles.css

C:\...\mi-tienda> git diff index.html
(ves que la IA arruinó el header)

C:\...\mi-tienda> git restore index.html

C:\...\mi-tienda> git status
Changes not staged for commit:
        modified:   styles.css
```

`index.html` volvió a como estaba antes. Y la otra cara: si lo que querías era sacar algo del staging, `git restore --staged index.html` lo devuelve a working sin tocar su contenido. Dos comandos, dos poderes.

### Díselo a la IA

> "Una IA ejecutora me dejó cambios en mi repo y algunos no los quiero conservar. Explícame la diferencia entre `git restore <archivo>` y `git restore --staged <archivo>`, y muéstrame cuándo usar cada uno según el estado que me muestre `git status`."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git restore index.html`?
   - a) Guarda los cambios de `index.html` en el historial
   - b) **Descarta los cambios sin preparar y devuelve el archivo a su última versión guardada** ✔
   - c) Sube el archivo a GitHub
   - d) Mueve el archivo al staging

2. **[qué hace]** `git restore --staged index.html` — ¿qué hace exactamente?
   - a) Borra el archivo
   - b) **Saca el archivo del área de preparación, sin tocar su contenido** ✔
   - c) Elimina el último commit
   - d) Crea una copia del archivo

3. **[completar]** "Los cambios que descartas con `git restore` se pierden ____."
   - Banco: `para siempre` · `hasta mañana` · `hasta el próximo add` · `en GitHub`
   - Respuesta: para siempre

4. **[verdadero/falso]** "Antes del commit, deshacer cambios es gratis y no deja rastro."
   - Respuesta: VERDADERO — esa es la ventaja de la zona de trabajo: todo es reversible.

5. **[ordenar]** Acomoda el flujo seguro para descartar un cambio:
   - Desordenado: `git restore index.html` · `git diff index.html` para ver qué perderás · `git status` para confirmar
   - Respuesta: git diff index.html → git restore index.html → git status para confirmar

---

## A14 — Deshacer II: git revert (después del commit, sin borrar historia)

### Concepto

Ya se hizo el commit: el cambio está en el historial (A8), tomó su foto y quedó firmado. ¿Se puede deshacer? Sí, pero ya no borrando: ahora se deshace **construyendo**.

`git revert` crea un commit NUEVO que hace exactamente lo contrario del commit que quieres deshacer. Si el commit agregó 12 líneas, el revert crea un commit que las quita. Y lo más importante: **ninguno de los dos desaparece de la historia**. Quedan las dos fotos: "Agregar botón" y, después, "Revert de agregar botón".

¿Por qué es mejor que borrar el commit? Porque la historia queda transparente. Cualquiera que abra `git log` ve la secuencia completa de decisiones: lo intentamos, no funcionó, lo revertimos. Eso es exactamente lo que quieres en un proyecto profesional o compartido: rastro, no mentira.

Cómo se usa:

```
git revert <id-del-commit>
```

Le das el identificador que viste en `git log` (A10) y Git arma el revert solo. Después te pide un mensaje de commit (A9) y listo.

Dato importante para tu vida con IA: revert es la herramienta de equipo. Cuando alguien más — o una IA — rompió algo que YA está en una rama compartida, no reescribes la historia, haces revert. En GitHub esto se ve todo el tiempo en los PRs (B13–B16).

### Analogía

El diario de viaje. No rasgas la página del día en que decidiste ir a la playa y llovió. Dejas esa entrada y al día siguiente escribes otra: "Revert del plan: nos quedamos en el hotel". La historia completa queda contada — la página borrada sería sospechosa; la página extra es honesta.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git log --oneline
a3f9c1 Agregar botón de WhatsApp
7d2b84 Corregir precio incorrecto del producto 3

C:\...\mi-tienda> git revert a3f9c1
[main 5b8e11] Revert "Agregar botón de WhatsApp"
 1 file changed, 12 deletions(-)

C:\...\mi-tienda> git log --oneline
5b8e11 Revert "Agregar botón de WhatsApp"
a3f9c1 Agregar botón de WhatsApp
7d2b84 Corregir precio incorrecto del producto 3
```

Los dos commits están ahí: el que agregó el botón y el que lo deshizo. Cualquiera que lea el historial entiende qué pasó. Y el código quedó como estaba antes — sin botón, sin drama.

### Díselo a la IA

> "Hice un commit que ya no quiero y no quiero borrar la historia. Explícame paso a paso cómo usar `git revert`, cómo elegir el identificador del commit que quiero revertir, y qué debería ver en la respuesta de Git."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git revert`?
   - a) Borra el commit del historial
   - b) **Crea un commit nuevo que deshace los cambios de otro, dejando ambos en la historia** ✔
   - c) Regresa el repo a antes de que existiera
   - d) Cambia el mensaje de un commit

2. **[completar]** "`git revert` no borra la historia: la ____ con un commit nuevo que hace lo contrario."
   - Banco: `continúa` · `rompe` · `cifra` · `ignora`
   - Respuesta: continúa

3. **[verdadero/falso]** "Después de un `git revert`, el commit original desaparece del historial."
   - Respuesta: FALSO — el original y el revert quedan los dos; la historia es transparente.

4. **[ordenar]** Acomoda el flujo para revertir un commit:
   - Desordenado: `git revert a3f9c1` · `git log --oneline` para encontrar el id · verificar en `git log` que el revert quedó
   - Respuesta: git log --oneline → git revert a3f9c1 → verificar en git log

5. **[qué hace]** ¿Cuándo conviene `git revert` en lugar de borrar el commit?
   - a) Nunca, borrar es siempre mejor
   - b) **Cuando el cambio ya está compartido o quieres dejar rastro de la decisión** ✔
   - c) Cuando estás en una rama privada que nadie verá
   - d) Cuando el mensaje del commit es feo

---

## A15 — Deshacer III: git reset y por qué da miedo

### Concepto

`git reset` es el martillo de los deshacer. Si `git restore` (A13) actúa sobre archivos y `git revert` (A14) sobre commits agregando otros nuevos, `git reset` **mueve el puntero del historial hacia atrás: los commits dejan de existir** como si nunca hubieran pasado.

Tiene tres niveles, de menor a mayor agresividad:

- **`git reset --soft`** — mueve el puntero, pero los cambios se quedan en staging. Nada se pierde.
- **`git reset` (o `--mixed`)** — mueve el puntero y saca los cambios del staging; quedan en working. Nada se pierde tampoco.
- **`git reset --hard`** — **destruye los cambios y los commits para siempre.** Aquí es donde la gente llora.

La regla que te salva la vida: **si el commit ya lo subiste o lo compartiste, NO uses `git reset`.** Reescribir historia compartida rompe la sincronización de todo el equipo — en GitHub se vuelve un caos de "mi historia no coincide con la tuya" (los `push` se ven en B5). Para eso existe `git revert`, que no reescribe: construye.

¿Entonces cuándo sirve reset? En tu terreno local, cuando el commit aún no sale de tu computadora y quieres borrar el error de raíz, como si nunca hubiera existido. Por ejemplo, un commit con un mensaje horrible o con algo que no debería estar.

El miedo a `git reset --hard` es legítimo y sano. Antes de correrlo: `git log` para ver qué vas a sacrificar, `git diff` para ver qué cambios vivos hay, y el pulso firme de saber que es irreversible.

### Analogía

La cinta de video que se regrababa. Cuando grabas encima, lo que había antes queda sobrescrito y no hay manera de recuperarlo. Con `--hard` estás regrabando: lo que estaba en esa sección de la cinta se fue para siempre. Por eso las videotecas serias jamás dejaban la cinta original en manos de cualquiera.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git log --oneline
a3f9c1 Agregar botón de WhatsApp   ← este es basura, lo metí por error
7d2b84 Corregir precio incorrecto del producto 3
1e8a05 Cambiar paleta de colores a la nueva marca

C:\...\mi-tienda> git reset --hard 7d2b84
HEAD is now at 7d2b84 Corregir precio incorrecto del producto 3

C:\...\mi-tienda> git log --oneline
7d2b84 Corregir precio incorrecto del producto 3
1e8a05 Cambiar paleta de colores a la nueva marca
```

`a3f9c1` ya no existe. Y ese es justo el punto: si ese commit ya lo hubieras subido a GitHub, estarías reescribiendo historia ajena. Local y privado = tu libertad. Compartido = tu sentencia.

### Díselo a la IA

> "Necesito borrar un commit que hice por error, pero tengo miedo de usar `git reset`. Explícame las diferencias entre `--soft`, `--mixed` y `--hard`, qué se pierde en cada uno, y las reglas exactas para saber cuándo está bien usarlo y cuándo debo usar `git revert` en su lugar."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git reset --hard`?
   - a) Agrega un commit nuevo que deshace cambios
   - b) **Mueve el historial hacia atrás y destruye los cambios para siempre** ✔
   - c) Solo saca archivos del staging
   - d) Cambia el mensaje del último commit

2. **[verdadero/falso]** "Si ya subiste un commit a GitHub, lo correcto es reescribir la historia con `git reset --hard`."
   - Respuesta: FALSO — nunca reescribes historia compartida; ahí se usa `git revert`.

3. **[completar]** "`git reset` ____ los commits del historial; `git revert` los ____ con un commit nuevo."
   - Banco: `elimina` · `conserva` · `duplica` · `cifra`
   - Respuesta: elimina / conserva

4. **[ordenar]** Acomoda los niveles de `git reset` de MENOS a MÁS agresivos:
   - Desordenado: `--hard` · `--mixed` · `--soft`
   - Respuesta: --soft → --mixed → --hard

5. **[relacionar]** Une el comando con lo que le pasa a tus cambios:
   - `git reset --soft` ↔ Los cambios se quedan en staging, nada se pierde
   - `git reset --mixed` ↔ Los cambios quedan en working, nada se pierde
   - `git reset --hard` ↔ Los cambios se destruyen para siempre
   - `git revert` ↔ Se conserva todo y se agrega un commit que deshace

---

## A16 — Ramas: qué son y por qué lo cambian todo

### Concepto

Hasta ahora trabajaste en una sola línea de desarrollo: `main`. Pero Git no está limitado a una línea: puedes tener varias líneas de historia en paralelo, saliendo de un mismo punto. Cada una de esas líneas es una **rama (branch)**.

¿Cómo se lee? Piensa en el historial como un árbol: hay un tronco principal y de él pueden salir ramas laterales. Cada rama tiene su propia vida: sus propios commits, sus propios archivos (en su versión), sus propios avances. **Lo que hagas en una rama no toca a las otras.**

Eso lo cambia todo por tres razones:

- **Seguridad:** pruebas una idea en una rama sin arriesgar lo que ya funciona en `main`. ¿Sale mal? Botas la rama y `main` ni se entera.
- **Paralelismo:** tú arreglas un bug en una rama mientras otra persona — o una IA — agrega una función en otra. Nadie pisa a nadie.
- **Historial limpio:** cada rama cuenta su historia. El proyecto principal no se llena de experimentos fallidos.

En tu flujo con IA esto es oro: el comando más poderoso del director de IA es decirle "trabaja en una rama nueva". Si su experimento sale mal, la rama se borra y tu `main` sigue intacto. Es literalmente jugar con red (se practica en C10 y C19).

El vocabulario que viene después (A21) lo amarra todo: HEAD, main y origin. Por ahora quédate con la imagen: ramas = líneas de historia paralelas que después se pueden unir.

### Analogía

Los caminos del pueblo. Del camino principal sale una vereda hacia la montaña y otra hacia el río. Cada vereda tiene su propio paisaje y sus propias sorpresas. Si la del río es un desastre, el camino principal sigue igual y los del pueblo ni se enteran. Cuando quieras, puedes traer lo bueno de la vereda al camino principal — eso es unir ramas (A19).

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git log --oneline --graph
* b9d31c (main) Agregar sección de testimonios
| * c4e77a (HEAD -> probar-colores) Cambiar paleta a la nueva marca
|/
* a3f9c1 Agregar botón de WhatsApp
* 7d2b84 Corregir precio incorrecto del producto 3
```

Dos líneas de historia que se separan desde `a3f9c1`. En `main` se está agregando una sección; en `probar-colores` se está experimentando con la paleta. La prueba de colores puede morir mañana y `main` sigue de pie. Eso es lo que las ramas hacen por ti.

### Díselo a la IA

> "Quiero probar un cambio grande en mi proyecto sin arriesgar lo que ya funciona. Explícame cómo las ramas me permiten hacerlo, qué significa cada parte de un `git log --graph`, y cuál es el flujo completo de probar en una rama y volver a la principal."

### Ejercicios

1. **[opción múltiple]** ¿Qué es una rama en Git?
   - a) Una copia del proyecto en otra carpeta
   - b) **Una línea de historia independiente que sale del historial principal** ✔
   - c) Una versión vieja de Git
   - d) Un archivo de configuración

2. **[verdadero/falso]** "Si pruebas una idea en una rama y sale mal, el proyecto principal queda dañado."
   - Respuesta: FALSO — las ramas son independientes; lo que pase en una no toca a las otras.

3. **[completar]** "Las ramas permiten trabajar en ____ sin pisar el trabajo de otros."
   - Banco: `paralelo` · `silencio` · `vacío` · `secreto`
   - Respuesta: paralelo

4. **[relacionar]** Une el beneficio con su razón:
   - Seguridad ↔ Pruebas ideas sin arriesgar lo que funciona
   - Paralelismo ↔ Varias personas o IAs trabajando a la vez
   - Historial limpio ↔ Los experimentos fallidos no ensucian main
   - Ramas ↔ Líneas de historia independientes

5. **[qué hace]** ¿Por qué una rama es el "jugar con red" del director de IA?
   - a) Porque la IA no comete errores en ramas
   - b) **Porque si el experimento sale mal, botas la rama y el main sigue intacto** ✔
   - c) Porque las ramas van más rápido
   - d) Porque las ramas se suben solas a GitHub

---

## A17 — git branch y git switch: crear y moverte entre ramas

### Concepto

Dos comandos, dos trabajos:

- **`git branch`** — muestra las ramas que existen y cuál es la tuya (marcada con `*`). Con un nombre extra (`git branch contacto`) crea una rama nueva.
- **`git switch`** — te mueve de una rama a otra. `git switch contacto` te lleva ahí. `git switch -c contacto` crea la rama Y te mueve en un solo paso — la versión que vas a usar todo el tiempo.

El flujo típico:

```
git switch -c nombre-de-la-rama   ← creas y entras
# trabajas, haces commits...
git switch main                   ← regresas al principal
```

Detalles que te ahorran horas:

- El `*` en `git branch` te dice dónde estás. Además `git status` (A6) siempre te dice tu rama actual — no te pierdes.
- Al cambiar de rama, **los archivos de tu carpeta cambian** para reflejar la rama. No es un truco: cada rama tiene su versión del proyecto. Si en una rama agregaste `contacto.html`, ese archivo existe ahí y no en main.
- **No cambies de rama con cambios sin commitear** si puedes evitarlo. Los cambios viajan contigo y pueden armar líos (A18 lo profundiza; el rescate oficial es `git stash` en A22). Hábito: commit antes de saltar.

Nombres de rama: cortos y descriptivos, con guiones: `arreglar-formulario`, `agregar-newsletter`, `nueva-paleta`. Si diriges una IA, el nombre de la rama es parte del brief: "crea la rama `agregar-carrito` y trabaja ahí".

### Analogía

El cambio de vía en el tren. El tren va sobre el camino principal y, en el cruce, decides: sigo de frente o me desvío a la vía secundaria. Ambas vías existen y ambas son del mismo tren. `git switch` es el cruce: te mueves a la otra vía en un instante — y con `-c`, la vía se construye al momento de desviarte.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git branch
* main

C:\...\mi-tienda> git switch -c arreglar-formulario
Switched to a new branch 'arreglar-formulario'

C:\...\mi-tienda> git branch
* arreglar-formulario
  main

C:\...\mi-tienda> git switch main
Switched to branch 'main'
```

Creas la rama, entras, y regresas cuando quieras. La rama no desapareció: sigue ahí, esperando con su historia. `git branch` te lo confirma cada vez.

### Díselo a la IA

> "Quiero organizar mi trabajo con ramas. Explícame la diferencia entre `git branch <nombre>` y `git switch -c <nombre>`, cómo sé en qué rama estoy, y qué precauciones debo tomar antes de cambiar de rama."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git switch -c pagina-contacto`?
   - a) Renombra la rama `pagina-contacto`
   - b) **Crea la rama `pagina-contacto` y te mueve a ella** ✔
   - c) Borra la rama `pagina-contacto`
   - d) Muestra el historial de la rama

2. **[completar]** "El símbolo ____ en la salida de `git branch` indica en qué rama estás."
   - Banco: `*` · `#` · `>` · `$`
   - Respuesta: *

3. **[qué hace]** `git branch` (sin nombre después) — ¿qué hace?
   - a) Crea una rama sin nombre
   - b) **Lista las ramas del repo y marca la actual** ✔
   - c) Cambia a la rama principal
   - d) Borra todas las ramas

4. **[verdadero/falso]** "Al cambiar de rama, los archivos de tu carpeta cambian para reflejar esa rama."
   - Respuesta: VERDADERO — cada rama tiene su propia versión del proyecto.

5. **[relacionar]** Une el comando con su efecto:
   - `git branch contacto` ↔ Crea la rama contacto (sin moverte)
   - `git switch contacto` ↔ Te mueve a la rama contacto
   - `git switch -c contacto` ↔ Crea la rama y te mueve
   - `git branch` ↔ Lista las ramas y marca la actual

---

## A18 — Trabajar en una rama sin romper lo que ya funciona

### Concepto

Ya sabes crear y moverte entre ramas (A17). Ahora el hábito que las vuelve poderosas: **hacer el trabajo sucio adentro de una rama, dejando `main` intacta**. Este es el patrón profesional del mundo entero, y el flujo es siempre el mismo:

1. `git switch -c nombre-de-la-tarea` — abres tu línea de trabajo
2. Trabajas (tú o la IA), editas, pruebas
3. Commiteas ahí, todo lo que quieras
4. Regresas a `main` y está EXACTAMENTE como lo dejaste

La clave mental: `main` no es "tu carpeta", es **la versión que funciona**. Cualquier experimento, corrección o función nueva nace en una rama. Mientras está en la rama, el `main` no corre riesgo: puede fallar la rama, romperse la rama, desaparecer la rama, y el mundo (tu página en producción) sigue igual.

El único error clásico de principiante: cambiar de rama con trabajo sin commitear. Si editaste archivos y saltas a `main`, tus cambios "viajan" contigo y el `main` ya no está limpio. Regla de hierro: **antes de `git switch`, deja la rama con todo commiteado** (o stashado, que ves en A22).

Con IA, el patrón se vuelve tu brief: "crea la rama `agregar-carrito`, implementa el carrito ahí, y no toques main". La IA trabaja en su laboratorio; tú decides si lo que salió merece llegar al producto (con el merge de A19). Así diriges sin miedo.

### Analogía

La cocina de pruebas del restaurante. En la cocina principal se sirven los platillos que ya funcionan (main). En la cocina de pruebas se experimenta con la receta nueva: se quema, se corrige, se reinicia — y nadie del comedor se entera. Cuando la receta queda, se lleva a la cocina principal (merge). Mientras tanto, los clientes siempre comen bien.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git switch -c arreglar-formulario
Switched to a new branch 'arreglar-formulario'

C:\...\mi-tienda> git add contact.html
C:\...\mi-tienda> git commit -m "Corregir envío del formulario de contacto"
[arreglar-formulario 6f2aa1] Corregir envío del formulario de contacto
 1 file changed, 4 insertions(+), 2 deletions(-)

C:\...\mi-tienda> git switch main
Switched to branch 'main'

C:\...\mi-tienda> git log --oneline
a3f9c1 Agregar botón de WhatsApp     ← main sigue SIN tu arreglo

C:\...\mi-tienda> git switch arreglar-formulario
C:\...\mi-tienda> git log --oneline
6f2aa1 Corregir envío del formulario de contacto
a3f9c1 Agregar botón de WhatsApp     ← tu rama SÍ lo tiene
```

Dos historias viviendo a la vez. Main no se enteró del arreglo; la rama lo guardó. El arreglo no molesta a nadie hasta que TÚ decidas unirlo.

### Díselo a la IA

> "Voy a pedirle a una IA que implemente un cambio en mi proyecto y no quiero que toque lo que ya funciona. Dame el patrón exacto: crear una rama, trabajar ahí, y verificar que la rama principal quedó intacta. Incluye las precauciones antes de cambiar de rama."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el patrón profesional para trabajar sin romper nada?
   - a) Trabajar siempre directo en `main`
   - b) **Crear una rama, trabajar ahí, y dejar `main` intacto** ✔
   - c) Borrar `main` y empezar de nuevo
   - d) Trabajar solo en GitHub

2. **[ordenar]** Acomoda el flujo de trabajo en rama:
   - Desordenado: `git switch main` · trabajar y commitear en la rama · `git switch -c mi-tarea`
   - Respuesta: git switch -c mi-tarea → trabajar y commitear en la rama → git switch main

3. **[verdadero/falso]** "Si cambias de rama con cambios sin commitear, esos cambios viajan contigo y ensucian la otra rama."
   - Respuesta: VERDADERO — por eso la regla de hierro es commitear antes de saltar.

4. **[qué hace]** `main` se describe mejor como:
   - a) El espacio para experimentar libremente
   - b) **La versión que funciona; el laboratorio es la rama** ✔
   - c) Una copia de seguridad semanal
   - d) El lugar donde se borran archivos

5. **[completar]** "Cuando una IA trabaja en una rama, tú decides si lo que hizo merece llegar al ____ con el merge."
   - Banco: `producto` · `borrador` · `staging` · `reciclaje`
   - Respuesta: producto

---

## A19 — git merge: unir tu trabajo con el principal

### Concepto

La rama cumplió su función: el experimento salió bien, el arreglo está listo, los commits están ahí. Ahora toca el momento de la verdad: **llevar ese trabajo de vuelta a `main`**. Eso es `git merge`.

El flujo es siempre el mismo:

```
git switch main                ← te paras en la rama destino
git merge nombre-de-la-rama    ← traes el trabajo de la otra
```

Al mergear, Git toma los commits de la rama y los incorpora a `main`. Hay dos escenarios:

- **Fast-forward:** `main` no avanzó mientras trabajabas en la rama. Entonces Git simplemente "adelanta" `main` hasta el último commit de la rama. Simple, sin fricción, historial en línea recta.
- **Merge commit:** `main` sí avanzó (otra persona, otra rama). Git junta las dos líneas en un commit nuevo de fusión — y ahí puede aparecer la joya que ves en A20: el conflicto.

Antes de mergear, el ritual de seguridad: `git status` para verificar que `main` esté limpio (A6), y `git switch main` para estar en el lugar correcto. Mergear es un acto deliberado: es el momento en que el trabajo de la rama se vuelve oficial.

Ojo con una confusión frecuente: **merge no borra la rama**. Después de unir, la rama sigue existiendo con su historia. Se puede borrar después si quieres (`git branch -d nombre`), pero Git no lo hace por ti.

En tu vida con IA este es el "decisión gate": la rama es la propuesta, el merge es la aprobación. En GitHub esto mismo se llama Pull Request (B13–B16) y es como colaboran los equipos reales.

### Analogía

Los dos ríos que se juntan. El río principal (main) y el afluente (rama) corren por caminos separados. En la confluencia, sus aguas se unen en un solo cauce: ya no hay manera de decir "esto era del afluente", ahora es un solo río. Cuando las aguas vienen con la misma fuerza no hay drama (fast-forward); cuando cada río trae su propia corriente, se arma remolino — ese es el conflicto de A20.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git switch main
Switched to branch 'main'

C:\...\mi-tienda> git merge arreglar-formulario
Updating a3f9c1..6f2aa1
Fast-forward
 contact.html | 6 +++++---
 1 file changed, 4 insertions(+), 2 deletions(-)

C:\...\mi-tienda> git log --oneline
6f2aa1 Corregir envío del formulario de contacto
a3f9c1 Agregar botón de WhatsApp
```

Fast-forward puro: `main` no había avanzado, así que solo se adelantó hasta el arreglo. El historial quedó en línea recta, y el arreglo del formulario ahora es parte oficial del proyecto.

### Díselo a la IA

> "Terminé una rama de trabajo y quiero llevarla al proyecto principal. Explícame el flujo exacto de `git merge`, la diferencia entre un fast-forward y un merge commit, y qué debo verificar con `git status` antes de mergear."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git merge`?
   - a) Crea una rama nueva desde main
   - b) **Une el trabajo de una rama con la rama donde estás parado** ✔
   - c) Borra la rama después de unirla
   - d) Compara dos archivos

2. **[ordenar]** Acomoda el flujo correcto para mergear:
   - Desordenado: `git merge arreglar-formulario` · `git switch main` · `git status` para verificar que main está limpio
   - Respuesta: git status → git switch main → git merge arreglar-formulario

3. **[completar]** "En un ____, `main` no avanzó mientras trabajabas en la rama, así que Git solo adelanta el puntero."
   - Banco: `fast-forward` · `conflicto` · `rebase` · `rollback`
   - Respuesta: fast-forward

4. **[verdadero/falso]** "Después de un merge, la rama se borra automáticamente."
   - Respuesta: FALSO — la rama sigue existiendo; borrarla es una decisión aparte.

5. **[relacionar]** Une el escenario con su resultado:
   - main no avanzó mientras trabajabas ↔ Fast-forward, historia en línea recta
   - main avanzó en paralelo ↔ Merge commit que junta las dos líneas
   - Las mismas líneas se cambiaron en ambas ↔ Conflicto (lo ves en A20)
   - Mergear en GitHub ↔ Se llama Pull Request

---

## A20 — Conflictos de merge: qué son, por qué pasan, cómo se resuelven

### Concepto

Todo merge sale bien... hasta que no. Cuando Git intenta unir dos ramas y **las dos cambiaron las mismas líneas de los mismos archivos**, no tiene forma de decidir cuál versión es la correcta. Ahí se detiene y te pide a ti: ese momento es un **conflicto de merge**.

Respira: un conflicto no es un error, ni un castigo, ni una señal de que algo se rompió para siempre. Es Git siendo honesto — "esto no lo puedo resolver yo, decide tú". Todo profesional los enfrenta; la diferencia es saber leerlos.

Cuando hay conflicto, Git deja marcadores dentro del archivo:

```
<<<<<<< HEAD
la versión de la rama donde estás (main)
=======
la versión de la rama que estás uniendo
>>>>>>> nombre-de-la-rama
```

Los pasos de la resolución, siempre iguales:

1. `git status` — te dice qué archivos tienen conflicto
2. Abres cada archivo y **editas**: te quedas con una versión, con la otra, o haces una combinación nueva
3. **Boras las marcas** `<<<<<<<`, `=======`, `>>>>>>>` — sin esto, el archivo es basura
4. `git add` del archivo resuelto
5. `git commit` — Git arma el merge

Un error de principiante típico: elegir siempre "mi versión" sin pensar. Las dos versiones existen por razones; la resolución buena es la que mezcla el contexto de ambas. Y en el flujo con IA, los conflictos son cotidianos: la IA te cambia una sección mientras otra rama (otra IA, otro compañero) cambia la misma. La regla: lee ambos lados antes de decidir. (La práctica en vivo llega en C20.)

### Analogía

Dos editores corrigiendo la misma frase del contrato. Uno escribió "el cliente pagará en 30 días" y el otro, "el cliente pagará en 60 días". El documento se traba: el sistema no puede firmar las dos. Alguien tiene que sentarse, leer las dos propuestas y decidir — o inventar una mejor: "en 45 días". Ese alguien eres tú en el conflicto: el editor jefe.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git merge arreglar-formulario
Auto-merging contact.html
CONFLICT (content): Merge conflict in contact.html
Automatic merge failed; fix conflicts and then commit the result.

C:\...\mi-tienda> git status
both modified:   contact.html

# Abres contact.html y ves:
<<<<<<< HEAD
<form action="/enviar-viejo">
=======
<form action="/enviar-nuevo">
>>>>>>> arreglar-formulario
```

Decides que la nueva ruta es la correcta: borras las marcas, dejas `<form action="/enviar-nuevo">`, corres `git add contact.html` y `git commit`. Conflicto resuelto — y te diste cuenta de que era un trámite, no un incendio.

### Díselo a la IA

> "Tuve un conflicto de merge en [archivo] y me salen las marcas <<<<<<<, ======= y >>>>>>>. Explícame qué significa cada sección, muéstrame las dos versiones en conflicto, y ayúdame a redactar la versión final correcta combinando ambas."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un conflicto de merge?
   - a) Un error que corrompe el repositorio
   - b) **Dos ramas cambiaron las mismas líneas y Git no decide por ti: te pide elegir** ✔
   - c) Una falla de internet en GitHub
   - d) Un virus en tu computadora

2. **[completar]** "Los marcadores del conflicto son `<<<<<<<`, ____ y `>>>>>>>`."
   - Banco: `=======` · `+++++++` · `-------` · `#######`
   - Respuesta: =======

3. **[ordenar]** Acomoda los pasos para resolver un conflicto:
   - Desordenado: `git add` del archivo · `git commit` · abrir el archivo y editar · `git status` para ver los archivos en conflicto
   - Respuesta: git status → abrir el archivo y editar → git add del archivo → git commit

4. **[qué hace]** Si dejas las marcas `<<<<<<<` y `=======` en el archivo al resolver:
   - a) Git las borra solo al commitear
   - b) **El archivo queda inválido; hay que borrarlas siempre** ✔
   - c) Son inofensivas, solo decoran
   - d) Git las ignora en el merge

5. **[verdadero/falso]** "Un conflicto significa que rompiste algo y el proyecto está perdido."
   - Respuesta: FALSO — es una decisión que Git te delega; se resuelve en pasos simples y es parte normal del trabajo.

---

## A21 — HEAD, main, origin: el vocabulario que confunde a todos

### Concepto

Tres palabras aparecen en casi todos los comandos y mensajes de Git, y al principio suenan a lo mismo: HEAD, main y origin. No lo son, y cada una apunta a un lugar distinto. Entenderlas de una vez te ahorra meses de confusión.

**HEAD** es "dónde estás parado ahora mismo". No es una rama ni un archivo: es un puntero que dice cuál es tu commit actual. Cuando corres `git log`, el commit que aparece arriba es donde apunta HEAD. Cuando haces un commit nuevo, HEAD avanza. Cuando cambias de rama con `git switch` (A17), HEAD se mueve a esa rama. Piensa en él como tu ubicación en la línea del tiempo.

**main** es la rama principal (la viste nacer en A4). Es una de las ramas de tu historial: la versión que consideras oficial. No es especial por magia: es especial por convención. Todo el mundo asume que `main` es lo que funciona. Por eso trabajamos en otras ramas (A18) y solo vuelve aquí lo aprobado.

**origin** es el nombre por default de tu repositorio remoto (A3): la copia en internet que verás en serio con GitHub en la Materia B (B4 es donde conectas el `origin`). Cuando hagas `git push` o `git pull`, estarás hablando con `origin`. En local, tu proyecto no tiene `origin` hasta que lo conectes — y eso está bien.

¿Cómo se leen juntos? En frases reales: `origin/main` significa "la rama main que está en la copia remota". `HEAD -> main` significa "estás parado en main". `git log` a veces los mezcla, y saber leer ese vocabulario es leer el mapa de tu proyecto sin pedir ayuda.

### Analogía

Imagina la sala de control de un edificio con varios pisos. `main` es el piso principal, donde está la recepción (la versión oficial). HEAD es el piso donde tú estás parado ahora — puedes estar en recepción o subir a un piso de oficinas (una rama). `origin` es la copia del edificio en otra ciudad: el mismo plano, pero físicamente en otro lugar. Preguntar "¿en qué piso estoy?" es HEAD; "¿cuál es el plano oficial?" es main; "¿dónde está la copia espejo?" es origin.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git log --oneline
a3f9c1 (HEAD -> main) Agregar botón de WhatsApp
7d2b84 Corregir precio incorrecto del producto 3

C:\...\mi-tienda> git switch -c probar-colores
C:\...\mi-tienda> git log --oneline
a3f9c1 (HEAD -> probar-colores) Agregar botón de WhatsApp
```

La primera línea te dice todo: `HEAD -> main` significa "estás parado en main". Después de crear y entrar a `probar-colores`, el mismo commit muestra `HEAD -> probar-colores`: tu ubicación cambió, el commit no. Cuando agregues `origin` en la Materia B, verás `origin/main` flotando ahí — y ya sabrás que es la versión remota, no la tuya.

### Díselo a la IA

> "Sigo confundiendo HEAD, main y origin. Explícame cada uno con un ejemplo de `git log` real, cómo se leen cuando aparecen juntos (como 'HEAD -> main' y 'origin/main'), y qué le pasa a cada uno cuando hago un commit o un push."

### Ejercicios

1. **[opción múltiple]** ¿Qué es HEAD?
   - a) El repositorio remoto
   - b) **El puntero que marca dónde estás parado en el historial** ✔
   - c) La rama principal del proyecto
   - d) El nombre del usuario de Git

2. **[completar]** "____ es la rama principal del proyecto y ____ es el nombre default del repositorio remoto."
   - Banco: `main` · `origin` · `HEAD` · `master`
   - Respuesta: main / origin

3. **[verdadero/falso]** "`HEAD -> main` en `git log` significa que estás parado en la rama main."
   - Respuesta: VERDADERO — HEAD es tu ubicación, y aquí apunta a la rama main.

4. **[relacionar]** Une el término con su significado:
   - HEAD ↔ Dónde estás parado ahora
   - main ↔ La rama principal y oficial
   - origin ↔ La copia remota del repo (en internet)
   - origin/main ↔ La rama main en la copia remota

5. **[qué hace]** Ves `a3f9c1 (HEAD -> probar-colores) Agregar botón de WhatsApp`. ¿Qué significa?
   - a) El commit a3f9c1 ya se subió a GitHub
   - b) **Estás parado en la rama probar-colores, en el commit a3f9c1** ✔
   - c) La rama main fue borrada
   - d) El commit a3f9c1 está en el repositorio remoto

---

## A22 — git stash: guardar temporalmente sin commitear

### Concepto

En A18 aprendiste la regla de hierro: antes de cambiar de rama, deja todo commiteado. Pero la vida real te lanza el caso que esa regla no cubre: estás a mitad de un cambio, NO está terminado, no quieres commitear basura — y necesitas saltar a otra rama ya. Ahí entra `git stash`.

`git stash` toma tus cambios sin commitear (working + staging, los estados de A5) y los guarda en un cajón aparte, dejando tu carpeta limpia como si nada hubiera pasado. Es un commit en miniatura que no toca el historial: tus cambios duermen en el cajón hasta que decidas sacarlos.

Los tres comandos que necesitas:

- `git stash` — guarda los cambios en el cajón y limpia tu carpeta
- `git stash pop` — saca los cambios del cajón y los aplica de vuelta
- `git stash list` — te muestra qué hay en el cajón

El flujo típico: estás en `agregar-carrito`, a mitad de trabajo. Llega una urgencia en `main`. Corres `git stash`, cambias a main, arreglas lo urgente, vuelves a tu rama, corres `git stash pop` — y ahí está tu trabajo a medio terminar, intacto, esperándote.

Advertencia real: el stash es un cajón, no un banco. Ahí no es el lugar para guardar tu vida durante semanas. Si algo vale, termínalo y commitea. Los stashes olvidados se acumulan y confunden. (¿Stash con nombre? Sí: `git stash save "mensaje"` para guardar y `git stash pop` para recuperar — pero para empezar, el básico te cubre el 90% de los casos.)

### Analogía

El botón de pausa del videojuego. Estás en medio de una misión (cambios a medio hacer), aparece una invasión urgente y necesitas atenderla sin perder tu progreso. Presionas pausa: la partida se congela y la pantalla se limpia. Atiendes lo urgente, vuelves, quitas pausa — y sigues exactamente donde estabas. El stash es el botón de pausa de tu trabajo: nada se pierde, nada se ensucia.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git stash
Saved working directory and index state WIP on agregar-carrito: 6f2aa1 ...

C:\...\mi-tienda> git status
On branch agregar-carrito
nothing to commit, working tree clean    ← la carpeta quedó limpia

C:\...\mi-tienda> git switch main
# haces lo urgente, haces tu commit...

C:\...\mi-tienda> git switch agregar-carrito
C:\...\mi-tienda> git stash pop
On branch agregar-carrito
Changes not staged for commit:
        modified:   carrito.js    ← tu trabajo a medio hacer, de regreso
```

El trabajo se fue al cajón y volvió intacto. La rama quedó limpia para saltar, y nadie se enteró de que estabas a la mitad. Eso es `git stash` en acción.

### Díselo a la IA

> "Estoy a mitad de un cambio que no quiero commitear y necesito cambiar de rama urgente. Explícame cómo usar `git stash` y `git stash pop` para guardar mi trabajo temporalmente y recuperarlo sin perder nada, y qué precauciones debo tomar para no perder lo guardado."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git stash`?
   - a) Commitea tus cambios a medias
   - b) **Guarda temporalmente tus cambios sin commitear y limpia la carpeta** ✔
   - c) Borra tus cambios para siempre
   - d) Sube tus cambios a GitHub

2. **[completar]** "Para recuperar los cambios del cajón y aplicarlos de vuelta usas `git stash ____`."
   - Banco: `pop` · `push` · `pull` · `open`
   - Respuesta: pop

3. **[verdadero/falso]** "El stash es un buen lugar para guardar trabajo importante durante semanas o meses."
   - Respuesta: FALSO — es un cajón temporal; si algo vale, termínalo y commitea.

4. **[ordenar]** Acomoda el flujo de la urgencia con stash:
   - Desordenado: `git stash pop` al volver · `git switch` a la rama de la urgencia · `git stash` · trabajar y commitear la urgencia
   - Respuesta: git stash → git switch a la rama de la urgencia → trabajar y commitear la urgencia → git stash pop al volver

5. **[qué hace]** Corres `git stash` y luego `git status` te dice `working tree clean`. ¿Qué significa?
   - a) Tu trabajo se perdió
   - b) **La carpeta quedó limpia y tus cambios están guardados en el cajón** ✔
   - c) El stash se subió a GitHub
   - d) Git se reinició

---

## A23 — Tags y versiones: marcar los momentos importantes

### Concepto

Tu historial de commits (A10) es un álbum con muchas fotos. Pero no todas valen igual: la mayoría son pasos intermedios, y algunas son momentos sagrados — "esto es la versión 1.0 que le entregué al cliente", "esto es lo que está publicado". Para marcar esos momentos existe el **tag**.

Un tag es una etiqueta con nombre pegada a un commit específico. A diferencia de una rama (que avanza con cada commit nuevo), un tag se queda clavado en ese punto para siempre. Es un marcador de libros en una fecha exacta de tu historia.

Los comandos:

```
git tag v1.0              ← marca el commit actual como v1.0
git tag v1.0 7d2b84       ← marca un commit específico
git tag                   ← lista tus tags
git show v1.0             ← muestra el commit de ese tag
```

¿Por qué importan? Porque "versión" es un concepto de negocio y de producto, no de código. Tú le dices a un cliente "te entrego la versión 1.0". Sin tag, ¿dónde está exactamente la 1.0 en tu historial? Con tag, es un clic: el commit exacto que le entregaste, siempre localizable. Y sobre la versión, el mensaje (A9) que la describe.

El flujo profesional: trabajas, haces commits atómicos (A28), y cuando el proyecto está completo y probado — la versión sale — la marcas con un tag. En GitHub esto se vuelve aún más visible: las releases (B23). El tag es el comienzo de la cultura de versiones, y los clientes y equipos hablan en versiones.

### Analogía

Los sellos del pasaporte. Cada sello (tag) marca un momento inolvidable del viaje: llegaste a tu destino, terminaste una etapa. No sellas cada paso del camino — solo los hitos que quieres recordar y poder mostrar. Años después abres el pasaporte y los sellos te dicen: aquí estuve, aquí llegué. Tu proyecto también tiene hitos que merecen sello.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git log --oneline
a3f9c1 Agregar botón de WhatsApp
7d2b84 Corregir precio incorrecto del producto 3

C:\...\mi-tienda> git tag v1.0

C:\...\mi-tienda> git tag
v1.0

C:\...\mi-tienda> git log --oneline
a3f9c1 (HEAD -> main, tag: v1.0) Agregar botón de WhatsApp
```

El tag `v1.0` quedó clavado en `a3f9c1`. Siguen pasando commits, siguen avanzando las ramas — y el tag no se mueve. Siempre sabrás exactamente qué código era "la versión 1.0". Ese es el poder del marcador.

### Díselo a la IA

> "Tengo un proyecto con varios commits y quiero empezar a marcarlo con versiones. Explícame cómo usar `git tag` para marcar el commit actual y un commit específico, cómo listar los tags, y cuál es el momento adecuado para crear una versión."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un tag?
   - a) Un nombre alternativo para una rama
   - b) **Una etiqueta fija pegada a un commit específico para marcar un hito** ✔
   - c) Un tipo de commit con contraseña
   - d) Un mensaje de commit obligatorio

2. **[completar]** "A diferencia de una rama, un tag no se ____: se queda clavado en el commit que marcaste."
   - Banco: `mueve` · `borra` · `duplica` · `renombra`
   - Respuesta: mueve

3. **[verdadero/falso]** "Un tag sirve para localizar siempre el código exacto que le entregaste a un cliente."
   - Respuesta: VERDADERO — el tag apunta al commit exacto, para siempre.

4. **[relacionar]** Une el comando con lo que hace:
   - `git tag v1.0` ↔ Marca el commit actual como v1.0
   - `git tag v1.0 7d2b84` ↔ Marca el commit 7d2b84 como v1.0
   - `git tag` ↔ Lista los tags del proyecto
   - `git show v1.0` ↔ Muestra el commit marcado por el tag

5. **[qué hace]** Estás en `main` con 3 commits nuevos después del tag v1.0. ¿Dónde apunta v1.0?
   - a) Al commit más reciente
   - b) **Al commit exacto donde fue creado; no se mueve** ✔
   - c) A la rama remota
   - d) Al siguiente commit que hagas

---

## A24 — El árbol de commits: leer el historial gráfico

### Concepto

`git log --oneline` (A10) te da la historia en línea recta — pero tu proyecto no es una línea recta desde que existen las ramas (A16). Cuando hay varias ramas y merges (A19), el historial se parece a un árbol con tronco y ramas. Leerlo de forma gráfica no es decoración: es ver el ADN de cómo se construyó tu proyecto.

El comando es:

```
git log --graph --oneline
```

Cada línea es un commit. Los símbolos son el idioma del árbol:

- `*` — un commit
- `|` — conexión vertical (el mismo camino de historia continúa)
- `\` y `/` — caminos que se unen o se separan (un merge o una rama que nace)
- Las etiquetas entre paréntesis — dónde están las ramas y HEAD (lo de A21)

Leer un árbol de commits responde preguntas que el log plano no puede: ¿cuántas ramas trabajaron en paralelo? ¿cuándo se unió cada una? ¿el merge fue directo o hubo conflictos? Es el mapa completo, no la lista de paradas.

Y hay una joya escondida para ti: este árbol es exactamente lo que una IA puede interpretar por ti (lo practicas en A25). Pero la diferencia entre "pedirle a la IA que lo lea" y "entenderlo" es que tú puedas verificar si la IA tiene razón. No dejes el mapa en manos de nadie más: el hábito de leer tu propio árbol es tuyo.

### Analogía

El árbol genealógico de tu proyecto. En una lista de nombres no ves cómo las ramas de la familia se unen; en el árbol genealógico sí: aquí se casaron dos familias (merge), aquí nació una rama nueva (branch), aquí quedó sola una línea (rama sin unir). `git log --graph` es el árbol genealógico de tu código: quién viene de quién y dónde se conecta todo.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git log --graph --oneline
*   8d2f71 (HEAD -> main) Fusionar rama de contacto
|\
| * 6f2aa1 (arreglar-formulario) Corregir envío del formulario
| * b9d31c Agregar sección de testimonios
* | c4e77a Agregar botón de WhatsApp
|/
* a3f9c1 Versión inicial de la página
```

Se lee así: la versión inicial (a3f9c1) fue el tronco. De ahí nació una rama (b9d31c, 6f2aa1 — el formulario) mientras en main avanzaba el botón de WhatsApp (c4e77a). Las dos líneas se juntaron en el merge 8d2f71. En tres segundos leíste la historia completa del proyecto — sin abrir un solo archivo.

### Díselo a la IA

> "Voy a correr `git log --graph --oneline` y quiero aprender a leerlo. Explícame qué significa cada símbolo (*, |, /, \) y cada etiqueta entre paréntesis, y muéstrame cómo interpretar un árbol con ramas y un merge paso a paso."

### Ejercicios

1. **[opción múltiple]** ¿Qué comando muestra el historial como árbol visual?
   - a) `git log --oneline`
   - b) **`git log --graph --oneline`** ✔
   - c) `git branch`
   - d) `git tag`

2. **[completar]** "En el árbol de commits, el símbolo ____ marca un commit y los símbolos \ y / indican caminos que se ____ o se separan."
   - Banco: `*` · `unen` · `#` · `borran`
   - Respuesta: * / unen

3. **[verdadero/falso]** "Un merge se ve en el árbol como dos líneas que se unen en un solo commit."
   - Respuesta: VERDADERO — el `\` y el `/` convergen en el commit de fusión.

4. **[qué hace]** En `* 8d2f71 (HEAD -> main) Fusionar rama de contacto`, ¿qué es `8d2f71`?
   - a) Un tag de versión
   - b) **El commit de merge donde se unieron las líneas** ✔
   - c) Una rama remota
   - d) El mensaje de un archivo

5. **[relacionar]** Une el símbolo con su significado:
   - `*` ↔ Un commit en el historial
   - `|` ↔ La historia continúa en el mismo camino
   - `\` y `/` ↔ Líneas que se unen o separan (branch/merge)
   - `(main)` ↔ Dónde está apuntando esa rama

---

## A25 — Git + IA: pedirle a la IA que interprete tu historial

### Concepto

Ya sabes leer `git log` (A10), los árboles (A24) y el vocabulario clave (A21). Ahora el truco que multiplica tu velocidad: **dejar que una IA lea tu historial por ti — y que te explique lo que no entiendas**. La IA es experta en interpretar texto, y tu historial es texto.

El patrón es simple: capturas la salida de un comando y se la pegas a la IA con una pregunta concreta. Los tres comandos que más vas a copiar y pegar:

- `git log --oneline --graph` — el árbol completo (A24)
- `git status` — el estado actual (A6)
- `git diff` — los cambios línea por línea (A12)

Cómo armarlo bien: primero ejecutas el comando en tu terminal, copias TODO lo que salió, y le das a la IA tres piezas de contexto: qué proyecto es, qué estabas haciendo y qué necesitas saber. Sin contexto, la IA adivina; con contexto, acierta. La fórmula del prompt de A2 a A20 aplica igual: comando + contexto + pregunta.

La regla de oro que ya practicaste: la IA interpreta, pero tú decides. Que la IA te diga "tu commit X rompió el header" es oro — pero verifica con tus ojos que dice la verdad. La IA no ve tu proyecto, solo ve lo que le pegaste. Puede malinterpretar un mensaje o un archivo. Tú eres el que conoce el proyecto; la IA es el traductor, no el juez.

Y el uso más poderoso con IA no es el historial bonito: es el diagnóstico. "Llevo días sin entender por qué mi proyecto se rompió" → le pasas tu árbol de commits y tu `git diff` → la IA te propone dónde buscar. Esa es la colaboración real con IA: ella lee a gran velocidad, tú entiendes el negocio.

### Analogía

El historiador que te acompaña en el archivo. Tú tienes el archivo del proyecto (tu historial) y el historiador (la IA) puede leer miles de páginas en segundos. Pero el historiador no vivió tu historia: solo lee lo que está escrito. Tú sabes por qué ese día cambiaste de opinión; él solo ve los registros. La mejor investigación se hace juntos: él procesa, tú decides qué significa.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git log --graph --oneline
* 8d2f71 (HEAD -> main) Fusionar rama de contacto
|\
| * 6f2aa1 Corregir envío del formulario
* | c4e77a Agregar botón de WhatsApp
|/
* a3f9c1 Versión inicial de la página
```

Esa salida va pegada al prompt, junto con el contexto y la pregunta. La IA responde algo como: "Tu historial muestra dos líneas de trabajo: en main agregaste el botón de WhatsApp mientras en otra rama arreglabas el formulario; el merge 8d2f71 las unió. No veo indicios de conflictos — el árbol es limpio."

Y si algo no cuadra, la segunda vuelta del prompt: "dices que el merge fue limpio, pero yo recuerdo que tuvimos conflicto. ¿Por qué el árbol no lo muestra?" Ahí aprendes más de Git que leyendo un manual.

### Díselo a la IA

> "Te voy a pegar la salida de `git log --graph --oneline`, `git status` y `git diff` de mi proyecto. Interprétamelas: dime qué ha pasado en la historia, si hay algo raro, dónde podría estar un error que quiero encontrar, y qué comandos podría correr para investigar más."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la forma correcta de que una IA interprete tu historial?
   - a) Ponerle el proyecto entero y que decida ella
   - b) **Pegarle la salida de `git log`/`git status`/`git diff` con contexto y una pregunta concreta** ✔
   - c) Decirle "revisa mi repo" sin más
   - d) Nunca compartir el historial con una IA

2. **[completar]** "La IA interpreta lo que le ____; no ve tu proyecto. Por eso el ____ que le das es lo que hace la diferencia."
   - Banco: `pegas` · `contexto` · `olvidas` · `código`
   - Respuesta: pegas / contexto

3. **[verdadero/falso]** "Como la IA lee tu historial a gran velocidad, puedes confiar ciegamente en su interpretación."
   - Respuesta: FALSO — la IA es el traductor, no el juez; tú verificas y decides.

4. **[relacionar]** Une la salida con lo que permite preguntarle a la IA:
   - `git log --graph --oneline` ↔ Cómo se construyó el proyecto y cuándo se unieron las ramas
   - `git status` ↔ Qué archivos están modificados y en qué zona
   - `git diff` ↔ Qué cambió exactamente en las líneas
   - Árbol + contexto + pregunta ↔ La fórmula para un buen prompt

5. **[qué hace]** Pegas tu árbol de commits y tu `git diff` a la IA con la pregunta "¿dónde se rompió esto?". ¿Qué está pasando?
   - a) La IA reescribe tu historial
   - b) **La IA propone hipótesis de dónde buscar; tú las verificas** ✔
   - c) La IA borra los commits sospechosos
   - d) La IA toma el control del repo

---

## A26 — Los 5 errores de principiante y cómo salir de cada uno

### Concepto

Aquí el mapa de las trampas que casi todos pisan en los primeros días con Git — y la salida de cada una. No para que no cometas ninguna (las vas a cometer, es normal), sino para que cuando pises, sepas exactamente cómo salir en menos de un minuto.

**Error 1: `git commit` sin `-m` y te atrapa en vim.** Lo viste en A2: el editor desconocido del que nadie sabe salir. Salida: tecla `Esc`, luego `:q!` y Enter (sale sin guardar), o escribe el mensaje, `Esc`, `:wq` y Enter (guarda y sale). Mejor aún: haz el hábito de siempre `-m "mensaje"` y este error muere solo.

**Error 2: `git add .` y metes a la foto basura o secretos.** La bomba de A7. Salida: si aún no commiteas, `git restore --staged` (A13) saca archivos del staging; si el commit ya existe, `git reset` local o `git revert` (A14–A15) según el caso. Y el antídoto de raíz: `.gitignore` (A11) desde el día uno.

**Error 3: cambiar de rama con trabajo sin commitear.** El lío de A18: tus cambios viajan contigo y ensucian todo. Salida: si el trabajo no vale, `git restore`; si vale y está a medias, `git stash` (A22). El reflejo correcto antes de cada `git switch`: `git status` (A6).

**Error 4: mensajes de commit que no dicen nada.** "cambios", "arreglo", "v2". Historial basura para siempre (A9). Salida: no hay comando que lo arregle bien si ya quedó — pero sí hay hábito nuevo para el futuro. Y los mensajes son perfectos para delegar a una IA (C5).

**Error 5: `git reset --hard` sobre trabajo compartido.** El martillo en el lugar equivocado (A15). Salida: si el commit ya se subió, nunca reset; `git revert`. Si el reset borró algo local que no querías perder... aquí la verdad incómoda: hay una ventana de recuperación con `git reflog`, pero no la conviertas en tu plan. La regla que te salva: reset local, revert compartido.

Cada error tiene la misma estructura: qué lo causa, cómo salir YA, y cómo evitar que vuelva. Los cinco juntos son el checklist que te hace parecer senior aunque lleves una semana.

### Analogía

Los hoyos del camino que todo conductor novato conoce. No eres mal conductor por caer en el bache: el bache está ahí, todos caen. La diferencia está en saber dónde está el hoyo, cómo salir sin descomponer el coche — y cuál carril tomar la próxima vez para no caer. Esta lección es el mapa de los baches de Git: señalados, con ruta de salida y con carril seguro.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git commit
# ...y te atrapa en vim. SALIDA:
Esc  :q!  Enter        ← sales sin guardar (el commit no se crea)
# o si quieres guardar el mensaje:
i   escribe tu mensaje   Esc  :wq  Enter

C:\...\mi-tienda> git add .
C:\...\mi-tienda> git status
# ¡el .env quedó en staging! SALIDA:
C:\...\mi-tienda> git restore --staged .env
```

Dos errores de la lista, dos salidas en dos líneas. La próxima vez que el prompt te atrape en algo raro, respira: este es un bache conocido, y ya tienes el mapa.

### Díselo a la IA

> "Estoy empezando con Git y quiero conocer los errores más comunes de principiante antes de cometerlos. Hazme un checklist de los 5 errores más graves que ves en gente nueva, con la causa, el síntoma exacto que vería en la terminal, y los comandos para salir de cada uno."

### Ejercicios

1. **[opción múltiple]** Te atrapó vim en un `git commit` sin `-m`. ¿Cómo sales sin crear el commit?
   - a) Cierras la ventana del terminal
   - b) **Presionas `Esc`, escribes `:q!` y Enter** ✔
   - c) Apagas la computadora
   - d) Presionas Enter varias veces

2. **[completar]** "El antídoto de raíz contra `git add .` que mete basura o secretos es tener un buen ____."
   - Banco: `.gitignore` · `README` · `commit` · `tag`
   - Respuesta: .gitignore

3. **[verdadero/falso]** "Cambiar de rama con cambios sin commitear es inofensivo: los cambios se quedan en la rama."
   - Respuesta: FALSO — los cambios viajan contigo y ensucian la otra rama.

4. **[relacionar]** Une el error con la salida correcta:
   - Commit sin `-m` → te atrapa en vim ↔ `Esc` + `:q!` (o `:wq`)
   - Metiste archivos de más al staging ↔ `git restore --staged`
   - Cambio a medias y necesitas saltar de rama ↔ `git stash`
   - Commit ya compartido que quieres deshacer ↔ `git revert`

5. **[qué hace]** Hiciste `git reset --hard` en un commit que YA habías subido a GitHub. ¿Cuál es la evaluación correcta?
   - a) Perfecto, así se hace siempre
   - b) **Error grave: nunca reescribes historia compartida; ahí se usa `git revert`** ✔
   - c) No pasa nada, GitHub lo ignora
   - d) Solo borra archivos de más, no el historial

---

## A27 — Git dentro de VS Code: la interfaz visual sin terminal

### Concepto

Todo lo que has aprendido en la terminal tiene una versión visual dentro de VS Code. La terminal sigue siendo la fuente de verdad (el motor), pero la interfaz del editor te deja ver, comparar y aprobar cambios con clics. No es "mejor" que la terminal — es la misma cosa con otra cara, y vas a usar ambas.

Los tres elementos que te importan:

- **El icono de ramas en la barra lateral** (Source Control, Ctrl+Shift+G): ahí ves el equivalente a `git status` (A6), con tus archivos modificados, staged y untracked, cada uno con botones para el `+` (add), el discard (restore) y el check (commit).
- **El botón de rama abajo a la izquierda**: te muestra en qué rama estás (A21) y te deja cambiar de rama con clics en vez de `git switch`.
- **El editor de cambios**: seleccionas un archivo y ves su `git diff` (A12) en verde y rojo, con botones para aceptar o descartar líneas.

El flujo visual es el mismo flujo de 3 estados (A5): editas, ves el archivo en "Changes", le das al `+` para stage, escribes el mensaje en el cuadro de arriba y presionas el check para commitear. Los conceptos no cambian; cambia la herramienta.

Advertencia real: la interfaz no te protege de los conceptos. `git restore` ahí adentro sigue destruyendo cambios para siempre (A13). Los botones de "discard" de VS Code son el mismo cuchillo: el clic es cómodo, la responsabilidad es la misma. Y cuando necesites comandos raros (`git stash`, tags, merges con conflicto), la terminal integrada de VS Code (Ctrl+Ñ) sigue ahí, con todo lo que ya sabes.

### Analogía

El tablero y el volante del mismo coche. La terminal es el motor: potente, directo, sin adornos. VS Code es el tablero moderno: pantalla táctil, indicadores visuales, botones amables. Es el mismo coche, misma mecánica, mismas reglas de manejo — pero con tablero, las marchas se cambian con menos miedo. Aprender ambos te hace conductor completo: tablero para lo cotidiano, volante y motor para lo delicado.

### Cómo se ve en la práctica

```
BARRA LATERAL (Source Control)                  ESQUINA INFERIOR IZQUIERDA
─────────────────────────────                  ─────────────────────────
Source Control                                   main ✔ ← clic para cambiar rama
✓ Cambios (2)
  M index.html        [discard] [staged]
  M styles.css        [discard] [staged]

Mensaje: "Corregir precio del producto 3"  →  [✓ Commit]
```

En el panel: dos archivos modificados, cada uno con sus botones. Escribes el mensaje en el cuadro y el check commitea. El nombre de la rama abajo con su menú. Todo lo que hiciste con varios comandos de terminal, aquí son clics — mismos conceptos, misma historia.

### Díselo a la IA

> "Quiero usar Git dentro de VS Code en vez de la terminal. Explícame cómo funciona la pestaña de Source Control, cómo hago stage, commit, cambio de rama y descarto de cambios con clics, y en qué momentos conviene seguir usando la terminal."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace el icono de Source Control en VS Code?
   - a) Solo muestra la versión del editor
   - b) **Te da la vista visual de tu estado Git: archivos modificados, staged y pendientes** ✔
   - c) Conecta tu VS Code a internet
   - d) Instala extensiones de Git

2. **[completar]** "En el flujo visual de VS Code: editas, ves el archivo en Changes, le das al ____ para stage y presionas el ____ para commitear."
   - Banco: `+` · `check` · `-` · `x`
   - Respuesta: + / check

3. **[verdadero/falso]** "Los botones de 'discard' en VS Code son más seguros que `git restore` en la terminal."
   - Respuesta: FALSO — es la misma operación con la misma consecuencia: descarta cambios para siempre.

4. **[relacionar]** Une el elemento visual con su equivalente en terminal:
   - Botón `+` del archivo ↔ `git add`
   - Check de commit ↔ `git commit -m`
   - Nombre de rama abajo a la izquierda ↔ `git branch` / `git switch`
   - Panel de "Changes" de un archivo ↔ `git diff`

5. **[qué hace]** Necesitas hacer un `git stash` (A22) y no encuentras el botón en VS Code. ¿Qué haces?
   - a) Dejas el trabajo sin guardar
   - b) **Usas la terminal integrada de VS Code: el stash es comando, y la terminal sigue ahí** ✔
   - c) Reinicias VS Code
   - d) Haces un commit a la fuerza

---

## A28 — Commits atómicos: la disciplina que te salva

### Concepto

"Un commit = una idea". Lo viste en A7 como regla del `git add` selectivo, y en A9 en los mensajes. Ahora le ponemos nombre técnico: **commit atómico** — la práctica de hacer commits pequeños y completos, donde cada uno hace UNA cosa y la hace bien. Pequeño no significa tonto: significa que un solo commit deja el proyecto funcionando y cubre un solo tema.

¿Por qué atómico? Porque el historial es para investigar (A10). Cuando algo se rompe, buscas "¿qué commit lo rompió?". Con commits gigantes de "cambios varios", esa búsqueda es imposible: la respuesta es "quién sabe". Con commits atómicos, el culpable aparece solo: el commit que tocó esa línea, con su mensaje claro.

La anatomía del commit bueno: un solo tema (¡un solo tema!), el mensaje imperativo de A9, y el proyecto funcionando después de aplicarlo. Si tu commit dice "agregar carrito y corregir logo y cambiar precios", son tres commits robando su lugar. Sepáralos con `git add` selectivo (A7) — para eso existe el staging.

La prueba del ácido: si tu commit hubiera pasado por un código malo, `git revert` (A14) lo deshace y el proyecto queda como antes. Con un commit gigante, revertirlo es deshacer tres cosas a la vez. El commit atómico es lo que hace que deshacer sea fácil — y deshacer fácil es lo que te da valor para experimentar con IA.

El flujo real no es más lento: es más rápido. Cambias una cosa, pruebas que funciona, la commiteas, cambias la siguiente. Pequeñas fotos, muchas fotos, historial legible. El hábito de A7–A9 se vuelve aquí segunda naturaleza.

### Analogía

Los cajones del taller. El mecánico no revuelve todas las herramientas en un solo cajón: cada llave va en su lugar, porque cuando necesita la 13 milímetros no quiere vaciar todo el taller. Tu historial es el taller: cada commit es un cajón etiquetado con UNA herramienta. El mecánico atómico encuentra la llave en segundos; el que revuelve todo, pierde horas buscando — y a veces la herramienta correcta ya no aparece.

### Cómo se ve en la práctica

```
# MAL (¿commit atómico? no):
git add .
git commit -m "agregar carrito, corregir logo y cambiar precios"
# ↑ 3 ideas en 1 foto: imposible de entender y de revertir

# BIEN (commits atómicos):
git add carrito.html carrito.js
git commit -m "Agregar carrito de compras"
git add logo.svg
git commit -m "Corregir proporciones del logo"
git add precios.js
git commit -m "Actualizar precios a la nueva lista"
# ↑ 3 fotos, cada una con una idea completa y reversible
```

Tres commits, tres ideas, tres reversiones posibles por separado. Si el logo queda feo, `git revert` del commit del logo y listo — el carrito y los precios no se tocan. Eso es poder de cirugía en tu historial.

### Díselo a la IA

> "Trabajé en tres cosas a la vez: un carrito, un logo y los precios. Ayúdame a separar mis cambios en commits atómicos, uno por idea, con el mensaje imperativo de cada uno y los comandos exactos de `git add` selectivo para lograrlo."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un commit atómico?
   - a) Un commit que incluye todos los cambios del día
   - b) **Un commit pequeño y completo que hace UNA sola cosa, bien hecha** ✔
   - c) Un commit con código peligroso
   - d) El primer commit de un proyecto

2. **[completar]** "La prueba del commit atómico: si lo reviertes con `git revert`, el proyecto queda ____."
   - Banco: `como antes` · `roto` · `en blanco` · `duplicado`
   - Respuesta: como antes

3. **[verdadero/falso]** "El staging existe precisamente para poder separar varios cambios en commits distintos."
   - Respuesta: VERDADERO — con `git add` selectivo eliges qué va en cada foto.

4. **[ordenar]** Acomoda el flujo para separar 3 ideas en 3 commits atómicos:
   - Desordenado: `git commit -m "Corregir logo"` · `git add logo.svg` · `git add carrito.html carrito.js` · `git commit -m "Agregar carrito"` · `git add precios.js` · `git commit -m "Actualizar precios"`
   - Respuesta: git add carrito.html carrito.js → git commit -m "Agregar carrito" → git add logo.svg → git commit -m "Corregir logo" → git add precios.js → git commit -m "Actualizar precios"

5. **[qué hace]** ¿Por qué un commit gigante hace difícil encontrar el culpable de un error?
   - a) Porque borra el historial
   - b) **Porque mezcla varias ideas en una sola foto: no puedes saber cuál la rompió** ✔
   - c) Porque Git no puede leerlo
   - d) Porque siempre es culpa de la última línea

---

## A29 — Cuándo NO usar Git (y qué usar en su lugar)

### Concepto

Git es la herramienta del siglo, pero no es la herramienta para todo. Saber cuándo NO versionar es tan profesional como saber versionar — y aquí va la verdad incómoda que casi nadie dice.

**Cuando no usar Git:**

- **Proyectos de un solo archivo que cambian por completo cada vez** — una tabla de precios en Excel, un PDF, una imagen que rediseñas. Git es brutal para código (texto) y miserable para archivos binarios (A11 ya los esquivaba). Para esos casos, el backup normal (copia en la nube) funciona mejor.
- **Archivos gigantes y binarios** — videos, bases de datos pesadas, fotos RAW. Versionarlos infla tu repositorio hasta hacerlo inmanejable. Para eso existen otras herramientas (Git LFS cuando sí lo necesitas, o simple almacenamiento en la nube).
- **Cuando nadie más necesita el historial** — el historial de Git es un activo cuando el código importa. Si es un archivo suelto que borras y recreas, el historial es peso muerto.

**Qué usar en su lugar:**

- **Backup tradicional** — copias en la nube (Drive, Dropbox) para documentos y archivos finales. No es historial, pero es respaldo.
- **Sincronización de archivos** — para carpetas de fotos o documentos: la nube sincroniza, Git versiona. Son trabajos distintos.
- **Bases de datos** — respaldos programados y herramientas de dump. Git NO es para bases de datos en vivo.

La regla de decisión en una frase: **¿Es texto que va a evolucionar por pasos y quieres poder volver a cualquier paso? → Git. ¿Es un archivo terminado o binario que solo necesitas respaldar? → nube y backup.**

Y el caso que te atañe a ti: los repos de proyectos de código — los tuyos incluidos — SÍ son territorio de Git, siempre. Tu página de negocio, tu app, tu sitio personal: Git desde el día uno (C3). El "no usar Git" es para el archivo suelto, no para el proyecto. No confundas las dos cosas.

### Analogía

El álbum de fotos vs. la caja de zapatos. Para las fotos que quieres recordar en orden, con su historia y sus etapas, usas el álbum (Git). Para los recibos que solo necesitas no perder, una caja de zapatos en el clóset (nube/backup) es perfecta — meterlos al álbum sería absurdo. El profesional sabe qué cosa va en qué lugar, y no usa el álbum para guardar los tickets del supermercado.

### Cómo se ve en la práctica

```
# SÍ USAR GIT:
Proyectos/carrito-app/        ← proyecto de código, evoluciona por pasos
    ├── .git/
    ├── src/
    └── package.json

# NO USAR GIT (solo backup en la nube):
Documentos/precios-2026.xlsx     ← archivo final binario
Fotos/vacaciones/RAW/            ← archivos binarios pesados
Respaldo-BD/produccion.sql       ← dump de base de datos
```

Misma computadora, dos mundos: el código va al álbum, el material terminado va a la caja. Usar la herramienta correcta para cada archivo es la diferencia entre un flujo sano y un repositorio monstruoso que nadie puede abrir.

### Díselo a la IA

> "Quiero ordenar mi carpeta y no sé qué debería versionar con Git y qué no. Dada esta lista de archivos y carpetas que te voy a pasar, dime cuáles deben ir a un repositorio de Git, cuáles solo a un backup de nube, y por qué en cada caso."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos SÍ debe estar en un repositorio de Git?
   - a) Una foto RAW de 80 MB
   - b) **Una app con código fuente que evoluciona por pasos** ✔
   - c) Un video de marketing final
   - d) Un Excel con la nómina del mes

2. **[completar]** "Git es para archivos de ____ que evolucionan por pasos; los archivos ____ se respaldan mejor en la nube."
   - Banco: `texto` · `binarios` · `audio` · `vacíos`
   - Respuesta: texto / binarios

3. **[verdadero/falso]** "Las bases de datos en vivo se versionan con Git igual que el código."
   - Respuesta: FALSO — las BD usan respaldos programados; Git no es para datos en vivo.

4. **[relacionar]** Une la situación con la herramienta correcta:
   - Proyecto de código con historia → Git
   - Archivo terminado que solo hay que respaldar → Backup en la nube
   - Fotos y videos pesados → Nube / sincronización
   - Base de datos de producción → Respaldos programados

5. **[qué hace]** ¿Cuándo conviene Git LFS o herramientas especiales para archivos pesados?
   - a) Nunca, Git sirve para todo
   - b) **Cuando un proyecto de código necesita versionar archivos binarios grandes** ✔
   - c) Cuando no hay internet
   - d) Cuando el archivo es pequeño

---

## A30 — Repaso integrador de Git (mega-quiz jugable)

### Concepto

Llegaste al final de la Materia A: 29 lecciones de Git — de "¿qué problema resuelve?" (A1) hasta "cuándo NO usar Git" (A29). Antes de pasar a GitHub en la Materia B, este repaso prueba que los conceptos no flotan sueltos sino que se conectan: el vocabulario (A21), los deshacer (A13–A15), las ramas (A16–A20), el stash (A22) y los tags (A23) son un solo sistema.

Haz el quiz de verdad: no abras las lecciones mientras respondes, marca tus errores, y al final revisa solo los que fallaste. El objetivo no es "saberlo todo", es saber EXACTAMENTE dónde están tus huecos — y esta es la última parada antes de subirte a la nube con GitHub.

La regla del juego: intenta primero con tu memoria, sin terminal y sin IA. Los fallos no son fracasos: son el mapa de lo que hay que repasar. Y si algo te falla feo, la lección indicada te espera.

### Analogía

El examen final de manejo, en auto de verdad. No es el test de teoría en papel: es manejar en una calle con semáforos, peatones y un bache (A26). Ya sabes todo por separado; el repaso te obliga a usar todo a la vez. Quien aprueba esto puede salir a la avenida — en tu caso, la avenida se llama GitHub.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git status
On branch probar-carrito
Changes not staged for commit:
        modified:   carrito.js

C:\...\mi-tienda> git stash
C:\...\mi-tienda> git switch main
C:\...\mi-tienda> git tag v1.1
C:\...\mi-tienda> git switch probar-carrito
C:\...\mi-tienda> git stash pop
# todo el vocabulario de A21–A23, conectado, en 4 líneas.
```

Ese mini-flujo usa stash (A22), switch de ramas (A17), tags (A23) y status (A6) — el sistema completo trabajando junto. Si puedes leerlo y decir qué pasa en cada línea, ya no estás memorizando comandos: estás dirigiendo un repositorio.

### Díselo a la IA

> "Terminé de estudiar Git y quiero evaluarme. Hazme 15 preguntas difíciles que mezclen los temas de: estados de Git, ramas, merges, conflictos, deshacer (restore, revert, reset), stash, tags y el vocabulario HEAD/main/origin. No me des las respuestas: espera a que responda, y califícame explicando mis errores y diciéndome qué tema debo repasar."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos es el flujo correcto para guardar un cambio por primera vez?
   - a) `git commit` → `git add` → `git init`
   - b) **`git init` → `git add` → `git commit`** ✔
   - c) `git add` → `git init` → `git commit`
   - d) `git commit` → `git push` → `git init`

2. **[ordenar]** Acomoda el flujo completo de experimento seguro con ramas:
   - Desordenado: `git switch main` · merge de la rama · trabajar y commitear en la rama · `git switch -c mi-idea`
   - Respuesta: git switch -c mi-idea → trabajar y commitear en la rama → git switch main → merge de la rama

3. **[verdadero/falso]** "Puedes hacer `git restore` de un cambio que ya commiteaste sin usar ningún otro comando."
   - Respuesta: FALSO — restore trabaja antes del commit; después del commit se usa revert o reset.

4. **[relacionar]** Une el concepto con su definición:
   - HEAD ↔ Tu ubicación actual en el historial
   - main ↔ La rama principal del proyecto
   - origin ↔ La copia remota del repositorio
   - Tag ↔ Un marcador fijo en un commit importante

5. **[qué hace]** Estás en `main` con 3 archivos modificados sin commitear y necesitas cambiar a otra rama sin perderlos. ¿Qué haces?
   - a) `git commit -m "cambios"` (todo junto, sin importar)
   - b) **`git stash`, cambias de rama, y al volver `git stash pop`** ✔
   - c) `git reset --hard` para limpiar
   - d) `git restore --staged` los tres

6. **[completar]** "Cuando el mismo archivo se cambió en dos ramas y haces merge, Git te pide resolver un ____."
   - Banco: `conflicto` · `tag` · `stash` · `reset`
   - Respuesta: conflicto

7. **[opción múltiple]** Tu commit ya está subido a GitHub y quieres deshacerlo sin borrar historia. ¿Qué usas?
   - a) `git reset --hard`
   - b) **`git revert`** ✔
   - c) `git restore`
   - d) `git stash`

8. **[completar]** "Un ____ commit hace una sola cosa: por eso se puede revertir y entender fácil."
   - Banco: `atómico` · `gigante` · `roto` · `remoto`
   - Respuesta: atómico
