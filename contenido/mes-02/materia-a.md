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
