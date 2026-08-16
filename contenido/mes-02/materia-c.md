# MES 2 · MATERIA C — Construye con IA II: tu proyecto versionado
## Lecciones C1–C5 (Lote 1)

---

## C1 — Por qué versionar cambia cómo trabajas con IA

### Concepto

En el Mes 1 construiste páginas dirigiendo IA. Funcionó — pero trabajabas **sin red de seguridad**. Si le pedías un cambio y el resultado empeoraba todo, tu única salida era pedirle a la IA que lo revirtiera… y esperar que se acordara de cómo estaba antes.

Con Git, esa fragilidad desaparece. Y cambia tu forma de trabajar en tres formas concretas:

**1. Pierdes el miedo a experimentar.**
Antes: "¿y si le pido un rediseño completo y lo arruina?". Ahora: haces commit, pides el rediseño, y si no te gusta, vuelves atrás en 2 segundos. **El miedo era el freno, y Git lo quita.** Los alumnos que versionan piden cosas más ambiciosas.

**2. Puedes auditar lo que la IA hizo.**
`git diff` te muestra EXACTAMENTE qué líneas cambió la IA. No "confía en mí, lo arreglé": líneas concretas, en verde lo agregado y en rojo lo quitado. Es la diferencia entre revisar el trabajo y creer en el trabajo.

**3. Puedes trabajar con varias IAs sin caos.**
Una IA en una rama, otra en otra rama, tú comparando resultados. O el flujo profesional que ya conoces: una IA planea, otra ejecuta, y el repositorio es el punto de verdad donde ambas coinciden.

Hay un cuarto beneficio del que casi nadie habla: **el historial de commits es un diario de tu aprendizaje**. Dentro de un año vas a poder abrir tu repositorio del Mes 2 y ver, commit por commit, cómo pensabas cuando empezaste. Ese registro no lo da ninguna otra herramienta.

### Analogía

Trabajar con IA sin Git es **escalar sin arnés**: puedes llegar arriba, pero cada movimiento arriesgado te da pánico, así que te mueves poco. Con arnés (Git), pruebas la ruta difícil — porque si te caes, caes medio metro y vuelves a intentar. La red no te hace mejor escalador de golpe: te hace **atrevido**, y de ahí sale la mejora.

### Cómo se ve en la práctica

El flujo con red de seguridad:

```
1. git commit -m "versión que funciona"      ← punto seguro
2. "IA, rediseña toda la página con estilo
    minimalista y tipografía grande"
3. Abres el resultado... quedó horrible
4. git restore .                             ← todo vuelve al punto seguro
5. "IA, intentemos otra dirección: ..."
```

Cuatro segundos para deshacer un experimento fallido. Ese es el cambio.

### Díselo a la IA

> "Voy a pedirte un cambio grande a mi proyecto. Antes de empezar, dime qué comando de Git debo correr para tener un punto de retorno seguro, y cuál correría después si el resultado no me gusta."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el beneficio principal de versionar cuando trabajas con IA?
   - a) La IA responde más rápido
   - b) **Puedes experimentar sin miedo porque siempre puedes volver atrás** ✔
   - c) Los tokens cuestan menos
   - d) La IA comete menos errores

2. **[completar]** "El comando ____ te muestra exactamente qué líneas cambió la IA, en verde lo agregado y en ____ lo quitado."
   - Banco: `git diff` · `rojo` · `git log` · `azul`
   - Respuesta: git diff / rojo

3. **[verdadero/falso]** "Sin Git, la única forma de deshacer un cambio de la IA es pedirle que lo revierta de memoria."
   - Respuesta: VERDADERO — y es frágil, porque depende de que la IA recuerde el estado anterior.

4. **[relacionar]** Une el beneficio con lo que habilita:
   - Punto de retorno ↔ Perder el miedo a experimentar
   - `git diff` ↔ Auditar lo que la IA cambió
   - Ramas ↔ Varias IAs trabajando sin pisarse
   - Historial ↔ Diario de tu propio aprendizaje

5. **[qué hace]** En la analogía del escalador, ¿qué representa Git?
   - a) La montaña
   - b) **El arnés** ✔
   - c) El compañero de escalada
   - d) El mapa de la ruta

---

## C2 — PRÁCTICA: instalar Git y verificar que funciona

### Concepto

Hoy no lees: **instalas**. Al terminar esta lección vas a tener Git funcionando en tu computadora, configurado con tu nombre, listo para versionar cualquier proyecto del resto de tu vida.

**Paso 1 — Verifica si ya lo tienes.** Abre la terminal (Mes 1, lección A5) y escribe:

```
git --version
```

Si responde con un número de versión, ya lo tienes: salta al Paso 3. Si dice "no se reconoce el comando" o "command not found", sigue al Paso 2.

**Paso 2 — Instálalo.**

En **Windows**, la forma rápida por terminal:
```
winget install --id Git.Git -e
```
O descarga el instalador de `git-scm.com/download/win` y dale siguiente a todo (las opciones por default están bien).

En **Mac**:
```
brew install git
```
Si no tienes Homebrew, al escribir `git --version` macOS te ofrece instalar las Command Line Tools: acepta.

En **Linux/Ubuntu**:
```
sudo apt update && sudo apt install git
```

**Importante en Windows:** después de instalar, **cierra y vuelve a abrir la terminal**. Si no, sigue sin reconocer el comando (el sistema necesita recargar las rutas).

**Paso 3 — Configúrate.** Los tres comandos de la lección A2:

```
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tucorreo@ejemplo.com"
git config --global init.defaultBranch main
```

El tercero asegura que tus repos nuevos usen `main` (el estándar actual) en vez de `master`.

**Paso 4 — Verifica todo:**

```
git --version
git config --global --list
```

Debes ver tu versión, tu nombre y tu correo. **Si eso aparece, ya está.** Acabas de instalar la herramienta más importante del desarrollo de software.

### Analogía

Es como **estrenar la caja de herramientas**. Todavía no arreglaste nada, pero ya tienes el martillo, el desarmador y la llave, con tu nombre grabado. Todo lo que viene el resto del programa asume que esta caja ya está en tu banco de trabajo.

### Cómo se ve en la práctica

Sesión completa exitosa:

```
C:\Users\Ray> git --version
'git' no se reconoce como un comando...

C:\Users\Ray> winget install --id Git.Git -e
Found Git [Git.Git] Version 2.47.0
Successfully installed

[cierras y reabres la terminal]

C:\Users\Ray> git --version
git version 2.47.0.windows.1

C:\Users\Ray> git config --global user.name "Raymundo Flores"
C:\Users\Ray> git config --global user.email "rayfg96@gmail.com"
C:\Users\Ray> git config --global init.defaultBranch main

C:\Users\Ray> git config --global --list
user.name=Raymundo Flores
user.email=rayfg96@gmail.com
init.defaultbranch=main
```

Listo. Herramienta instalada y firmada con tu nombre.

### Díselo a la IA

> "Estoy en [Windows/Mac/Linux]. Guíame paso a paso para instalar Git y configurarlo. Después de cada comando, dime qué debería ver en pantalla si salió bien, para poder confirmar antes de continuar."

### Ejercicios

1. **[ordenar]** Acomoda los pasos de la práctica:
   - Desordenado: `configurar nombre y correo` · `verificar con git --version` · `instalar Git` · `verificar con git config --list`
   - Respuesta: verificar con git --version → instalar Git → configurar nombre y correo → verificar con git config --list

2. **[opción múltiple]** En Windows, después de instalar Git el comando sigue sin reconocerse. ¿Qué haces?
   - a) Reinstalar
   - b) **Cerrar y volver a abrir la terminal** ✔
   - c) Reiniciar la computadora
   - d) Instalar Linux

3. **[completar]** "El comando `git config --global init.defaultBranch main` asegura que tus repos nuevos usen ____ en vez de ____."
   - Banco: `main` · `master` · `origin` · `trunk`
   - Respuesta: main / master

4. **[qué hace]** `git config --global --list` — ¿qué muestra?
   - a) Los archivos de tu proyecto
   - b) **Tu configuración global: nombre, correo y demás ajustes** ✔
   - c) El historial de commits
   - d) Los repositorios en GitHub

5. **[verdadero/falso]** "Git hay que instalarlo en cada carpeta de proyecto."
   - Respuesta: FALSO — se instala una vez en la computadora y sirve para todos los proyectos.

---

## C3 — PRÁCTICA: convertir tu página del Mes 1 en un repositorio

### Concepto

Recupera la carpeta de tu proyecto del Mes 1 (`mi-primera-pagina` o como la hayas llamado). Hoy la conviertes en un proyecto versionado de verdad.

**Paso 1 — Llega a la carpeta desde la terminal.**

```
cd Desktop
cd mi-primera-pagina
ls
```

El `ls` (o `dir`) debe mostrarte tu `index.html`. **Si no lo ves, estás en la carpeta equivocada** — no sigas hasta confirmarlo. Este es el error #1 de principiante: hacer `git init` donde no era.

**Paso 2 — Enciende la máquina del tiempo.**

```
git init
```

**Paso 3 — Mira el estado.**

```
git status
```

Vas a ver algo así:

```
On branch main
No commits yet
Untracked files:
        index.html
```

"Untracked" significa: "veo este archivo, pero todavía no lo estoy siguiendo". Git es explícito: **nada entra al historial sin que tú lo digas.**

**Paso 4 — Crea tu `.gitignore`** (aunque tu proyecto sea simple, es buen hábito). Crea un archivo llamado exactamente `.gitignore` (con el punto al inicio) con este contenido:

```
# Archivos del sistema
.DS_Store
Thumbs.db
desktop.ini

# Editores
.vscode/
.idea/

# Dependencias (por si acaso más adelante)
node_modules/

# Variables de entorno — NUNCA subir secretos
.env
```

Ese archivo le dice a Git: "estos archivos NUNCA los rastrees". El `.env` es especialmente importante — ahí es donde se guardan contraseñas y llaves de API. **Subir un `.env` a GitHub es el error más caro que comete un principiante.**

**Paso 5 — Confirma.**

```
git status
```

Ahora debe listar tu `index.html` Y tu `.gitignore` como untracked. Ya tienes un repositorio listo para su primer commit (lección C4).

### Analogía

Es el día que **le instalas la caja fuerte a tu local**. El local ya llevaba tiempo abierto, con mercancía adentro. Hoy llega el instalador, atornilla la caja, y a partir de este momento todo lo que decidas guardar queda protegido y registrado. Lo de antes no está registrado — la historia empieza hoy.

### Cómo se ve en la práctica

```
C:\Users\Ray> cd Desktop\mi-primera-pagina
C:\Users\Ray\Desktop\mi-primera-pagina> ls
    index.html

C:\Users\Ray\Desktop\mi-primera-pagina> git init
Initialized empty Git repository in .../mi-primera-pagina/.git/

C:\Users\Ray\Desktop\mi-primera-pagina> git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present
```

Git te habla claro: "veo tu index.html, no lo estoy rastreando todavía, usa `git add` cuando quieras incluirlo".

### Díselo a la IA

> "Tengo una carpeta con mi página web en el escritorio. Guíame para convertirla en repositorio de Git desde la terminal, incluyendo cómo verifico en cada paso que estoy en la carpeta correcta. También genérame un `.gitignore` apropiado para un proyecto de HTML/CSS/JS simple."

### Ejercicios

1. **[opción múltiple]** ¿Qué significa que un archivo esté "untracked"?
   - a) Que está dañado
   - b) **Que Git lo ve pero todavía no lo está siguiendo** ✔
   - c) Que ya se subió a GitHub
   - d) Que está en el .gitignore

2. **[completar]** "El archivo ____ le dice a Git qué archivos NUNCA debe rastrear, y el más importante de incluir es ____ porque guarda contraseñas y llaves."
   - Banco: `.gitignore` · `.env` · `.git` · `README.md`
   - Respuesta: .gitignore / .env

3. **[ordenar]** Acomoda los pasos de la práctica:
   - Desordenado: `git init` · `crear .gitignore` · `cd a la carpeta del proyecto` · `git status`
   - Respuesta: cd a la carpeta del proyecto → git init → git status → crear .gitignore

4. **[verdadero/falso]** "Antes de correr `git init` conviene confirmar con `ls` que estás en la carpeta correcta."
   - Respuesta: VERDADERO — el error #1 de principiante es inicializar un repo donde no era.

5. **[qué hace]** ¿Por qué es grave subir un archivo `.env` a GitHub?
   - a) Ocupa mucho espacio
   - b) **Contiene contraseñas y llaves de API que quedarían públicas** ✔
   - c) Git no lo soporta
   - d) Rompe el sitio web

---

## C4 — PRÁCTICA: tu primer commit real

### Concepto

Llegó el momento. Vas a tomar la primera fotografía de tu proyecto.

**Paso 1 — Prepara los archivos (staging).**

```
git add .
```

Ese punto significa "todo lo que hay en esta carpeta". Git agrega tu `index.html`, tu `.gitignore`, y cualquier otra cosa que no esté ignorada.

(También puedes agregar archivo por archivo: `git add index.html`. El punto es el atajo cuando quieres todo.)

**Paso 2 — Verifica qué está preparado.**

```
git status
```

Ahora los archivos aparecen bajo "Changes to be committed" (cambios por confirmar), en verde. Están en la caja, listos para sellar.

**Paso 3 — Toma la foto.**

```
git commit -m "Versión inicial de mi página personal"
```

- `commit` — guarda la fotografía
- `-m` — "el mensaje viene aquí" (message)
- El texto entre comillas es tu mensaje: **la descripción de qué contiene esta foto**

Git responde algo como:

```
[main (root-commit) a3f9c1d] Versión inicial de mi página personal
 2 files changed, 47 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 index.html
```

Ese `a3f9c1d` es el identificador único de tu commit. **Ya existe el primer punto de retorno de tu vida como constructor.**

**Paso 4 — Mira tu historial.**

```
git log --oneline
```

```
a3f9c1d (HEAD -> main) Versión inicial de mi página personal
```

Una línea. Tu primera línea de historia. En seis meses vas a tener cientos.

**Paso 5 — Haz un segundo commit** para sentir el ciclo completo. Abre tu `index.html`, cambia algo (un texto, un color), guarda, y:

```
git add .
git commit -m "Cambiar título principal"
git log --oneline
```

Ahora tienes dos fotos. Y puedes viajar entre ellas.

### Analogía

Tu primer commit es la **primera página del acta de un negocio**. A partir de aquí, todo lo que pase queda registrado: quién, cuándo, qué. Antes de esta página no hay registro; después de ella, hay historia. Y como toda acta, vale por lo que dice el texto — un mensaje flojo hace inútil el registro (por eso la lección A9 es sobre escribir buenos mensajes).

### Cómo se ve en la práctica

El ciclo completo, que vas a repetir miles de veces:

```
C:\...\mi-primera-pagina> git add .

C:\...\mi-primera-pagina> git status
On branch main
Changes to be committed:
        new file:   .gitignore
        new file:   index.html

C:\...\mi-primera-pagina> git commit -m "Versión inicial de mi página personal"
[main (root-commit) a3f9c1d] Versión inicial de mi página personal
 2 files changed, 47 insertions(+)

C:\...\mi-primera-pagina> git log --oneline
a3f9c1d (HEAD -> main) Versión inicial de mi página personal
```

**add → commit → log.** Ese trío es el 80% de tu uso diario de Git.

### Díselo a la IA

> "Acabo de hacer mi primer commit. Explícame qué significa cada parte de la respuesta que me dio Git: el código a3f9c1d, la palabra root-commit, y '2 files changed, 47 insertions'."

### Ejercicios

1. **[ordenar]** Acomoda el ciclo básico de Git:
   - Desordenado: `git commit -m "mensaje"` · `editar archivos` · `git add .`
   - Respuesta: editar archivos → git add . → git commit -m "mensaje"

2. **[opción múltiple]** ¿Qué significa el punto en `git add .`?
   - a) Agregar solo archivos ocultos
   - b) **Agregar todo lo que hay en la carpeta actual** ✔
   - c) Agregar el último archivo modificado
   - d) Cancelar la operación

3. **[completar]** "La bandera `-m` en `git commit` sirve para escribir el ____ del commit directamente en la línea de comandos."
   - Banco: `mensaje` · `nombre` · `archivo` · `modo`
   - Respuesta: mensaje

4. **[qué hace]** `git log --oneline` — ¿qué muestra?
   - a) Los archivos sin rastrear
   - b) **El historial de commits, uno por línea** ✔
   - c) Los cambios de la última hora
   - d) La configuración de Git

5. **[verdadero/falso]** "Después de `git commit`, tus cambios ya están en GitHub."
   - Respuesta: FALSO — el commit es local; para que lleguen a GitHub falta `git push` (lección B5).

---

## C5 — Pedirle a la IA que escriba tus mensajes de commit

### Concepto

Escribir buenos mensajes de commit es una habilidad real, y es de las primeras que puedes delegar bien a la IA. Un buen mensaje responde **qué cambió y por qué**, no "cómo" (el código ya muestra el cómo).

Malos mensajes (los que todos escribimos al principio):
```
cambios
arreglos
update
asdf
ya quedó
```

Buenos mensajes:
```
Agregar botón de WhatsApp en el header
Corregir precios de productos que mostraban el costo
Cambiar paleta a naranja para mejorar contraste
```

**La convención profesional** que verás en proyectos serios se llama *Conventional Commits*: un prefijo que categoriza el cambio.

- `feat:` — funcionalidad nueva
- `fix:` — corrección de un error
- `docs:` — documentación
- `style:` — formato, colores, espaciado (sin cambiar lógica)
- `refactor:` — reorganizar código sin cambiar comportamiento
- `chore:` — mantenimiento, configuración

Ejemplos:
```
feat: agregar sección de testimonios
fix: corregir enlace roto de WhatsApp
style: aumentar tamaño de tipografía en móvil
```

**Cómo delegarlo a la IA.** El truco es darle el `git diff` — la IA no adivina, lee los cambios reales:

```
git diff --staged
```

Copias esa salida, se la pegas a la IA con el prompt de abajo, y te devuelve un mensaje preciso. En 20 segundos tienes un historial que parece de equipo profesional.

Y cuando uses herramientas de IA que trabajan directo con tu repo (Claude Code, Cursor), esto lo hacen solas: leen el diff y escriben el mensaje.

### Analogía

Un mensaje de commit es la **etiqueta de una caja de mudanza**. "Cosas" no sirve de nada cuando buscas el sacacorchos entre 40 cajas. "Cocina — utensilios y vajilla" te salva la tarde. El costo de escribir bien la etiqueta son 10 segundos; el costo de escribirla mal lo pagas dentro de tres meses, buscando cuándo se rompió algo.

### Cómo se ve en la práctica

El flujo completo con IA:

```
C:\...\mi-tienda> git add .
C:\...\mi-tienda> git diff --staged

diff --git a/index.html b/index.html
-  <h1>Mi Tienda</h1>
+  <h1>Tortas El Güero</h1>
+  <a href="https://wa.me/5512345678" class="btn-wa">
+    Pídenos por WhatsApp
+  </a>
```

Le pegas eso a la IA y responde:

```
feat: cambiar nombre a Tortas El Güero y agregar botón de WhatsApp
```

Y tú:

```
C:\...\mi-tienda> git commit -m "feat: cambiar nombre a Tortas El Güero y agregar botón de WhatsApp"
```

Historial profesional, sin esfuerzo mental.

### Díselo a la IA

> "Te voy a pegar la salida de `git diff --staged`. Escríbeme un mensaje de commit siguiendo Conventional Commits (feat/fix/docs/style/refactor/chore), en español, máximo 72 caracteres, que diga QUÉ cambió y POR QUÉ. Si los cambios son de temas distintos, avísame que convendría separarlos en commits diferentes."

Esa última frase es valiosa: la IA te va a avisar cuando estés mezclando cambios que merecen commits separados.

### Ejercicios

1. **[relacionar]** Une el prefijo de Conventional Commits con su uso:
   - `feat:` ↔ Funcionalidad nueva
   - `fix:` ↔ Corrección de un error
   - `docs:` ↔ Documentación
   - `style:` ↔ Formato y apariencia sin cambiar lógica

2. **[opción múltiple]** ¿Cuál es un buen mensaje de commit?
   - a) "cambios"
   - b) "ya quedó"
   - c) **"fix: corregir enlace roto de WhatsApp"** ✔
   - d) "update final v2"

3. **[completar]** "Un buen mensaje de commit responde qué cambió y ____, no el ____ — porque eso ya lo muestra el código."
   - Banco: `por qué` · `cómo` · `cuándo` · `quién`
   - Respuesta: por qué / cómo

4. **[qué hace]** `git diff --staged` — ¿para qué lo usas antes de pedirle el mensaje a la IA?
   - a) Para subir los cambios
   - b) **Para mostrarle a la IA exactamente qué líneas cambiaron** ✔
   - c) Para deshacer los cambios
   - d) Para crear una rama

5. **[verdadero/falso]** "Si la IA detecta que tus cambios son de temas distintos, conviene que te avise para separarlos en commits diferentes."
   - Respuesta: VERDADERO — commits atómicos (un tema por commit) hacen el historial útil.
