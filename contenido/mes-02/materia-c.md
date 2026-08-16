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

---

## C6 — PRÁCTICA: crear tu cuenta de GitHub y tu perfil

### Concepto

Tienes un repositorio local con la página de Tortas El Güero (lecciones C3–C4). Ese repo vive SOLO en tu computadora. Para respaldarlo, mostrarlo y publicarlo necesitas GitHub — la plaza pública del código que conociste en B1. Hoy consigues tu casa ahí.

**Paso 1 — Crea tu cuenta.** Ve a `github.com` y pulsa **Sign up**. Elige un nombre de usuario que te represente bien (es tu firma profesional: "rayflores" dice más que "raycoder88"). Importante: **usa el mismo correo que configuraste en Git** (lección C2). Si no coinciden, más adelante Git y GitHub no se reconocen y te vas a pelear con errores raros.

**Paso 2 — Verifica tu correo.** GitHub te envía un mensaje de confirmación. Verifícalo antes de seguir: sin eso, nada funciona.

**Paso 3 — Elige el plan.** Al terminar te pregunta qué plan quieres. Elige **Free** (gratis). Todo lo de este curso se hace con el plan gratis.

**Paso 4 — Construye tu perfil.** Entra a tu foto (esquina superior derecha) → **Settings** → **Profile**. Pónle tu nombre real, tu ubicación y sobre todo tu **bio**: una línea que diga qué haces. Ejemplo: "Aprendo a construir software dirigiendo IA." Ese perfil es tu carta de presentación profesional (B2).

**Paso 5 — Crea tu portada (opcional, vale oro).** Un repositorio con el MISMO nombre que tu usuario (`tu-usuario/tu-usuario`) con un `README.md` se muestra como portada de tu perfil. Ahí va tu presentación. Escribir un README bien lo ves en B9.

Un perfil vacío se ve como local abandonado; uno con bio y portada invita a que te lean.

### Analogía

Es como **conseguir tu local en la plaza del código**. La caja fuerte (tu repo local) ya la instalaste en C3. Hoy consigues la vitrina física: el lugar donde la gente verá tu mercancía y el letrero con tu nombre. Todo lo que guardes ahí a partir de la C7 queda a la vista de quien pase por la plaza.

### Cómo se ve en la práctica

```
github.com → Sign up
Username:  rayflores
Email:     rayfg96@gmail.com     ← el mismo que usaste en git config (C2)
Password:  ********

[Verifica el correo que te llega]

Plan:  (•) Free

Settings → Profile
Name:      Raymundo Flores
Bio:       Aprendo a construir software dirigiendo IA 🛠️
Location:  CDMX, México
```

Tu cuenta está lista. En la C7 le conectas tu repo local y subes Tortas El Güero.

### Díselo a la IA

> "Acabo de crear mi cuenta en GitHub. Escríbeme una bio para mi perfil (máximo 160 caracteres) que comunique que aprendo a construir software dirigiendo IA, y un texto corto para el README de mi perfil. Tono profesional pero cercano."

### Ejercicios

1. **[opción múltiple]** ¿Qué correo debes usar al crear tu cuenta de GitHub?
   - a) Uno nuevo solo para GitHub
   - b) **El mismo que configuraste en Git con `git config --global user.email`** ✔
   - c) El de un amigo
   - d) Cualquiera, no importa
   - Nota: si no coinciden, Git y GitHub no se reconocen al hacer push.

2. **[ordenar]** Acomoda los pasos de la práctica:
   - Desordenado: `verificar el correo` · `elegir el plan Free` · `crear la cuenta en github.com` · `configurar tu perfil (nombre, bio)`
   - Respuesta: crear la cuenta en github.com → verificar el correo → elegir el plan Free → configurar tu perfil (nombre, bio)

3. **[completar]** "Un repositorio que se llama exactamente como tu ____ de GitHub, con un ____, se muestra como portada de tu perfil."
   - Banco: `usuario` · `README.md` · `contraseña` · `index.html`
   - Respuesta: usuario / README.md

4. **[relacionar]** Une el elemento con su función:
   - Username ↔ Tu firma profesional en la plaza
   - Bio ↔ Una línea que dice qué haces
   - Repo `usuario/usuario` ↔ Portada de tu perfil
   - Verificación de correo ↔ Requisito para que la cuenta funcione

5. **[qué hace]** Creas un repositorio llamado `rayflores/rayflores` con un `README.md` que dice quién eres. ¿Qué sucede?
   - a) Se publica como sitio web automáticamente
   - b) **Se muestra como portada de tu perfil de GitHub** ✔
   - c) La cuenta deja de ser gratuita
   - d) Solo tú puedes verlo

---

## C7 — PRÁCTICA: subir tu proyecto a GitHub

### Concepto

Tu repo local de Tortas El Güero está encerrado en tu computadora. Si se daña el disco, se pierde. Hoy lo subes a GitHub: queda respaldado en internet y visible para quien quieras. Son cuatro comandos.

**Paso 1 — Crea el repositorio VACÍO en GitHub.** Botón **+** (esquina superior) → **New repository**. Nombre: `tortas-el-guero` (minúsculas, sin espacios). Visibilidad: **Público**. **NO marques** "Add a README file" ni "Add .gitignore" — tú ya los tienes localmente desde C3, y crearlos aquí te generaría un conflicto. Pulsa **Create repository**.

**Paso 2 — Copia la URL.** GitHub te muestra tres bloques de comandos. Usa el del "…or push an existing repository from the command line": contiene la URL de tu repo, que termina en `.git`.

**Paso 3 — Conecta tu repo local con el remoto.** En tu terminal, dentro de `mi-primera-pagina`:

```
git remote add origin https://github.com/tu-usuario/tortas-el-guero.git
```

`remote` = "lugar remoto". `origin` es el nombre que le das por convención a ese lugar: tu repo en GitHub. Lo de B3–B4.

**Paso 4 — Sube tu historial.**

```
git push -u origin main
```

- `push` — envía tus commits al remoto
- `-u` — deja grabado que local `main` sigue a `origin/main`, para que después solo escribas `git push`
- `origin main` — "al lugar remoto `origin`, la rama `main`"

La primera vez, Git te pide identificarte. Puede abrirte el navegador o pedirte usuario y token (B28 explica qué es el token): completa el paso y listo.

**Paso 5 — Verifica.** Recarga tu repo en GitHub. Debes ver tus archivos Y tu historial de commits. Ya no eres un local suelto: eres parte de la plaza.

### Analogía

Es **mudar la caja fuerte del sótano a la vitrina del local**. Los registros (commits) no cambian: cambia el lugar donde están guardados. Antes solo tú podías abrirlos; ahora están en la plaza pública, respaldados y visibles. Y como cualquier mudanza, el paso que más errores causa es escribir mal la dirección — de ahí que la URL venga copiada y pegada, no tecleada.

### Cómo se ve en la práctica

```
C:\...\mi-primera-pagina> git remote add origin https://github.com/rayflores/tortas-el-guero.git

C:\...\mi-primera-pagina> git remote -v
origin  https://github.com/rayflores/tortas-el-guero.git (fetch)
origin  https://github.com/rayflores/tortas-el-guero.git (push)

C:\...\mi-primera-pagina> git push -u origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
...
To https://github.com/rayflores/tortas-el-guero.git
 * [new branch]      main -> main
```

`remote -v` te muestra las direcciones registradas: buena costumbre antes de hacer push, igual que confirmar con `ls` antes de `git init` (C3).

### Díselo a la IA

> "Al hacer `git push -u origin main` me salió este error: [pega el error]. Explícame en español qué significa, si es de credenciales o de configuración, y guíame paso a paso para resolverlo sin borrar nada."

### Ejercicios

1. **[opción múltiple]** Al crear el repo en GitHub, ¿por qué NO debes marcar "Add a README file"?
   - a) Porque GitHub no soporta READMEs
   - b) **Porque ya tienes uno local (o archivos con historial) y se generarían conflictos con tu historial** ✔
   - c) Porque ocuparía mucho espacio
   - d) Porque el README se crea solo

2. **[completar]** "El comando `git remote add origin URL` conecta tu repo local con tu repo en ____, y `origin` es solo el ____ que le pones a esa conexión."
   - Banco: `GitHub` · `nombre` · `correo` · `servidor`
   - Respuesta: GitHub / nombre

3. **[ordenar]** Acomoda los pasos para subir tu proyecto:
   - Desordenado: `git push -u origin main` · `git remote add origin URL` · `crear repo vacío en GitHub` · `verificar en GitHub que aparezcan tus archivos`
   - Respuesta: crear repo vacío en GitHub → git remote add origin URL → git push -u origin main → verificar en GitHub que aparezcan tus archivos

4. **[qué hace]** `git remote -v` — ¿para qué lo usas?
   - a) Para subir los archivos
   - b) **Para ver las direcciones remotas configuradas (fetch y push) de tu repo** ✔
   - c) Para borrar el repositorio
   - d) Para crear una rama nueva

5. **[verdadero/falso]** "Una vez que subes tu proyecto con `git push`, tu repo local y el de GitHub se sincronizan solos para siempre."
   - Respuesta: FALSO — el push solo envía el estado actual; si editas localmente después, tienes que hacer push de nuevo (o pull si los cambios vinieron de GitHub).

---

## C8 — PRÁCTICA: publicar tu página con GitHub Pages

### Concepto

Tu repo ya está en GitHub. Ahora lo publicas: GitHub Pages hospeda tu sitio gratis, directo desde el repositorio. No pagas hosting ni configuras servidores — tu repo ES la fuente del sitio. La teoría completa está en B20; aquí el procedimiento.

**Paso 1 — Asegúrate de que el repo sea público.** GitHub Pages gratis en una cuenta normal requiere repo público. Si lo hiciste privado: **Settings** → **General** → **Danger Zone** → **Change repository visibility** → público.

**Paso 2 — Abre la configuración de Pages.** **Settings** → en el menú lateral izquierdo, **Pages**.

**Paso 3 — Configura la fuente.** En **Source** elige **Deploy from a branch**, **Branch**: `main`, carpeta: **/ (root)**. Pulsa **Save**.

**Paso 4 — Espera y verifica.** GitHub tarda uno o dos minutos en construir el sitio. Recarga la página hasta que aparezca el aviso verde:

```
✔ Your site is live at https://tu-usuario.github.io/tortas-el-guero/
```

Ábrela. Tu página del Mes 1, ahora en internet, con dirección propia. Esa URL es un activo: la pones en tu README (B9) y se la mandas a quien quieras.

**Paso 5 — Cierra el círculo.** Cambia algo con IA, haz commit y push (el flujo de C9). Unos minutos después, tu sitio publicado ya muestra el cambio. **Cada push a main actualiza la página sola.**

Límite honesto: GitHub Pages sirve sitios estáticos (HTML, CSS y JS puro) — exactamente lo que construiste. No es para apps con servidor o base de datos detrás, pero tu caso es perfecto para esto.

### Analogía

Es **colgar tu letrero a la calle, gratis, y que un impresor lo repinte solo cada vez que cambias el diseño**. No alquilas local ni contratas rotulista: pones tu diseño en la vitrina (el repo) y el letrero se actualiza solo en la fachada. Todo el mundo que pase por esa dirección lo ve.

### Cómo se ve en la práctica

```
Settings → Pages
Source:    (•) Deploy from a branch
Branch:    main  •  / (root)
[Save]

✔ Your site is live at https://rayflores.github.io/tortas-el-guero/

# más tarde, cambias el menú con IA y subes:
$ git add index.html
$ git commit -m "feat: actualizar precios del menú"
$ git push origin main
# en unos minutos el sitio ya muestra los precios nuevos
```

Ese ciclo — editar, commitear, push, verlo publicado — es el flujo diario de la C9, con recompensa pública.

### Díselo a la IA

> "Publico mi sitio con GitHub Pages. Ábrelo en [URL] y dime: qué se ve bien, qué se ve mal en [móvil/escritorio], y dame 3 mejoras concretas para la página de Tortas El Güero, cada una con el cambio exacto de HTML/CSS que necesito."

### Ejercicios

1. **[opción múltiple]** ¿Dónde configuras GitHub Pages?
   - a) En la terminal con un comando
   - b) **En Settings → Pages, eligiendo branch y carpeta** ✔
   - c) En tu perfil
   - d) En un archivo de configuración del repo

2. **[completar]** "Cada vez que haces push a la rama ____, GitHub Pages ____ tu sitio automáticamente."
   - Banco: `main` · `actualiza` · `borra` · `feature`
   - Respuesta: main / actualiza

3. **[verdadero/falso]** "GitHub Pages puede servir cualquier aplicación que necesite base de datos o servidor por detrás."
   - Respuesta: FALSO — Pages sirve sitios estáticos (HTML, CSS y JS puro), exactamente lo que construyes tú.

4. **[ordenar]** Acomoda el flujo para publicar tu sitio:
   - Desordenado: `ver el aviso "Your site is live at..."` · `configurar Source en Settings → Pages` · `tener el repo con la página` · `hacer push a main`
   - Respuesta: tener el repo con la página → configurar Source en Settings → Pages → hacer push a main → ver el aviso "Your site is live at..."

5. **[qué hace]** Tu repo se llama `tortas-el-guero` y tu usuario es `rayflores`. Terminas de configurar Pages. ¿Dónde queda tu sitio?
   - a) https://github.com/tortas-el-guero
   - b) **https://rayflores.github.io/tortas-el-guero/** ✔
   - c) https://rayflores.com/tortas
   - d) https://tortas-el-guero.netlify.app

---

## C9 — El flujo diario: pedir → probar → commitear

### Concepto

Trabajar con IA sin método es un chisme: pides, te responden, cambias a otra cosa. El método del que construye software es un **ciclo de tres tiempos**: PEDIR, PROBAR, COMMITEAR. Lo repetirás cientos de veces; memorízalo.

**PEDIR.** Le pides a la IA UN cambio pequeño y específico. No "mejórame la página": "cambia el fondo a crema y el título a naranja" o "agrega una sección de testimonios con dos reseñas". Un pedido atómico produce un cambio atómico — y un commit limpio (C5). Los pedidos grandes se dividen en varios ciclos.

**PROBAR.** Abres el archivo en tu navegador y compruebas con tus ojos: ¿cambió lo que pediste? ¿se rompió algo más? Aquí no hay atajos: **la IA no prueba por ti**. Tú eres el dueño del negocio probando el platillo antes de servirlo.

**COMMITEAR.** Si funciona, tomas la foto: `git add .`, mensaje claro (C5), `git commit`, y si ya tienes `origin` (C7), `git push`. Si NO funciona, tienes dos salidas: pedirle corrección, o volver atrás (C11). Nunca commiteas un cambio que no probaste.

Ese ciclo convierte tu día en una serie de entregas pequeñas y verificadas en vez de un borrón. Y le paga a todo lo de Materia A: cada commit es un punto de retorno verificado.

Hay una versión para cuando el cambio es grande: lo divides en ciclos pequeños. "Agregar formulario de pedidos" se convierte en: (1) agregar el HTML del formulario, (2) darle estilo, (3) conectar el botón de WhatsApp. Tres ciclos, tres commits, tres pruebas. Cero caos.

### Analogía

Es **cocinar en una taquería: pedir → probar → anotar en el recetario**. No te llevas al comensal la salsa sin probarla, ni anotas la receta antes de que salga bien. Cada platillo bueno queda registrado en el recetario (el commit); cada platillo malo se corrige o se desecha. El recetario crece un platillo a la vez, todos probados.

### Cómo se ve en la práctica

```
PEDIR:     "IA, cambia el fondo a crema y el título a naranja"
PROBAR:    abres index.html en el navegador... se ve bien
COMMITEAR: git add . && git commit -m "style: cambiar paleta a crema y naranja"

[repite]

PEDIR:     "IA, agrega una sección de testimonios con 2 reseñas"
PROBAR:    ... en móvil se ve descolocado
DECIDIR:   le pido corregir el layout, o vuelvo atrás con C11
```

Tres comandos y una prueba por ciclo. Eso es un día de trabajo bien hecho.

### Díselo a la IA

> "Voy a trabajar en [Tortas El Güero] por ciclos pequeños: pedir un cambio, probarlo y commitearlo. Dame una lista de 5 mejoras concretas para la página, ordenadas de mayor a menor impacto, para ir una por una en ciclos separados."

### Ejercicios

1. **[ordenar]** Acomoda el ciclo diario:
   - Desordenado: `commitear` · `probar en el navegador` · `pedirle el cambio a la IA`
   - Respuesta: pedirle el cambio a la IA → probar en el navegador → commitear

2. **[opción múltiple]** ¿Cuándo haces commit según el flujo diario?
   - a) Antes de probar, para no perder el cambio
   - b) **Después de probar que funciona** ✔
   - c) Cada vez que la IA responde
   - d) Solo una vez al día

3. **[completar]** "Un pedido ____ produce un cambio atómico y un commit ____. Los pedidos grandes se dividen en varios ____."
   - Banco: `pequeño` · `limpio` · `ciclos` · `lentos`
   - Respuesta: pequeño / limpio / ciclos

4. **[relacionar]** Une el paso del ciclo con su acción:
   - PEDIR ↔ Pedir un cambio pequeño y específico a la IA
   - PROBAR ↔ Abrir el sitio y verificar con tus ojos
   - COMMITEAR ↔ Tomar la foto con mensaje claro
   - Si no funciona ↔ Pedir corrección o volver atrás (C11)

5. **[qué hace]** El cambio que pediste quedó horrible y aun no lo commiteas. Según el flujo, ¿qué haces?
   - a) Lo commiteas igual "para no perderlo"
   - b) **Le pides corrección a la IA o vuelves atrás con `git restore` (C11)** ✔
   - c) Borras la carpeta entera
   - d) Subes el sitio igual a GitHub

---

## C10 — PRÁCTICA: trabajar en una rama nueva con IA

### Concepto

Hasta ahora todo tu trabajo cayó en `main`. Funciona, pero el trabajo de verdad se hace en **ramas**: copias de tu proyecto donde experimentas sin tocar lo que ya funciona. Si el experimento sale bien, lo fusionas; si sale mal, la descartas y `main` ni se entera. La teoría está en A16–A18; aquí la práctica con IA.

**Paso 0 — Estado limpio.** Antes de crear la rama, verifica que no tengas cambios sin commitear:

```
git status
```

Si algo está pendiente, commitealo primero (C4). Las ramas se crean sobre un punto limpio.

**Paso 1 — Crea la rama.**

```
git switch -c feature/testimonios
```

`switch` te mueve de rama, `-c` la crea. Nace una copia de tu proyecto con un nombre: `feature/testimonios`.

**Paso 2 — Pide el cambio a la IA.** "IA, agrega una sección de testimonios con dos reseñas de clientes." La IA edita `index.html` y tal vez el CSS.

**Paso 3 — Prueba.** Ábrelo en el navegador (C9). ¿Funciona y se ve bien? Entonces:

**Paso 4 — Commitea en la rama.**

```
git add .
git commit -m "feat: agregar sección de testimonios"
```

**Paso 5 — Regresa a main y compara.**

```
git switch main
```

Ábrelo: tu página está SIN testimonios, intacta. Mientras tanto, en `feature/testimonios` están los testimonios. La misma carpeta, dos mundos, cero conflicto. Esa es la magia.

Cuando quieras unir el trabajo, lo haces con un merge (A19) o, mejor aún, con un Pull Request (C12). Por ahora solo acostúmbrate a que main es tu versión estable y las ramas son tus laboratorios.

### Analogía

Es **trabajar con un duplicado del local**. El local principal (main) sigue atendiendo clientes con el menú que funciona. En la bodega de atrás montas la mesa de pruebas (la rama) con el platillo nuevo. Lo pruebas, lo afinas, y solo cuando está bueno lo sacas al comedor. Si el platillo sale mal, se queda en la bodega y el comedor jamás se entera.

### Cómo se ve en la práctica

```
C:\...\tortas-el-guero> git status
On branch main
nothing to commit, working tree clean        ← estado limpio, listo

C:\...\tortas-el-guero> git switch -c feature/testimonios
Switched to a new branch 'feature/testimonios'

# le pides a la IA que agregue los testimonios, pruebas, y funciona:

C:\...\tortas-el-guero> git add .
C:\...\tortas-el-guero> git commit -m "feat: agregar sección de testimonios"
[feature/testimonios 7b2e4f0] feat: agregar sección de testimonios

C:\...\tortas-el-guero> git switch main
Switched to branch 'main'     ← aquí NO hay testimonios, todo intacto

C:\...\tortas-el-guero> git switch feature/testimonios
Switched to branch 'feature/testimonios'     ← aquí SÍ están los testimonios
```

Ve cómo el historial queda separado: el commit `7b2e4f0` existe solo en la rama.

### Díselo a la IA

> "Voy a trabajar en una rama llamada `feature/testimonios` de mi repo Tortas El Güero. Agrega una sección de testimonios con dos reseñas de clientes al `index.html`. No toques nada más: solo esa sección, y dime exactamente qué archivos y líneas cambiaste para que pueda revisar el diff."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git switch -c feature/testimonios`?
   - a) Cambia el nombre del repositorio
   - b) **Crea una rama nueva llamada `feature/testimonios` y te mueve a ella** ✔
   - c) Sube la rama a GitHub
   - d) Borra la rama actual

2. **[ordenar]** Acomoda los pasos de la práctica:
   - Desordenado: `git add .` y `git commit` en la rama · `git switch -c feature/...` · `verificar que main quedó intacto con git switch main` · `pedir el cambio a la IA y probarlo`
   - Respuesta: git switch -c feature/... → pedir el cambio a la IA y probarlo → git add . y git commit en la rama → verificar que main quedó intacto con git switch main

3. **[completar]** "Las ramas se crean sobre un punto ____: antes de `git switch -c` debes verificar con `git status` que no tengas cambios ____."
   - Banco: `limpio` · `sin commitear` · `sucios` · `subidos`
   - Respuesta: limpio / sin commitear

4. **[verdadero/falso]** "Si el experimento en una rama sale mal, `main` ya quedó dañado."
   - Respuesta: FALSO — main no se toca; el daño queda aislado en la rama y puedes descartarla sin afectar lo que funciona.

5. **[qué hace]** Haces `git switch main` después de commitear en `feature/testimonios`. ¿Qué esperas ver en tu carpeta?
   - a) Los testimonios, porque ya los agregaste
   - b) **La página sin testimonios, tal como estaba antes de crear la rama** ✔
   - c) Un error de conflicto
   - d) La rama `feature/testimonios` borrada

---

## C11 — Cuando la IA rompe algo: volver atrás con Git

### Concepto

Va a pasar, es normal, y por eso aprendiste Git. La IA te cambió algo y el resultado quedó peor: colores que no combinan, un layout roto, una sección que desapareció. Lo que NO haces es entrar en pánico ni reescribir a mano el archivo de memoria. Tienes una máquina del tiempo (A13–A15): eliges el caso y deshaces.

**Caso 1 — La IA rompió archivos y aún NO has commiteado.** Tus cambios viven solo en el área de trabajo; el último commit sigue intacto. Restaura los archivos a como estaban en el último commit:

```
git restore index.html
```

Esto descarta los cambios sin commitear de ese archivo. Con punto restaura todo: `git restore .` (cuidado: eso bota TODO lo que no esté commiteado).

**Caso 2 — Ya commiteaste el desastre, pero NO lo has subido a GitHub.** El commit malo está en tu historial local. La forma honesta es un *revert*: crea un commit nuevo que deshace el anterior, sin borrar historia (A14):

```
git log --oneline        # ve el commit que quieres deshacer
git revert HEAD --no-edit
```

`git revert HEAD` deshace el último commit; `--no-edit` usa el mensaje que genera solo. Resultado: tu código vuelve a como estaba, y el historial registra que volviste (eso también es historia útil).

**Caso 3 — Ya lo subiste a GitHub.** Mismo remedio, más el push:

```
git revert <hash-del-commit>
git push origin main
```

El *revert* es seguro incluso subido: crea un commit nuevo en lugar de reescribir el pasado, así que no rompe el historial compartido.

**Y si quieres ir más lejos:** `git reset` (A15) te deja "deshacer" commits borrándolos, pero es más riesgoso y casi nunca lo necesitas al principio. Regla de bolsillo: **sin commitear → `git restore`; commiteado → `git revert`.**

Un truco que te ahorra la mitad de estas situaciones: antes de pedirle un cambio grande a la IA, ya tienes tu punto de retorno asegurado en el último commit. Si no lo tienes (cambios sin commitear), commitea primero — eso es lo que aprendiste en C9.

### Analogía

Es el **borrador de la libreta, pero por niveles**. El borrador borra lo que escribiste en el minuto (lo sin commitear, `git restore`). Si ya lo pasaste en tinta (commit) y no te gusta, no rasgas la página: agregas una nota al margen que dice "esto quedó cancelado" (`git revert`) — la página muestra la corrección Y deja constancia de que existió el error. Rasgar la hoja (`git reset`) es legal pero deja evidencia y confunde.

### Cómo se ve en la práctica

```
# Caso 1 — la IA te cambió archivos y aún no commiteas
C:\...\tortas-el-guero> git restore index.html

# Caso 2 — ya commiteaste el desastre
C:\...\tortas-el-guero> git log --oneline
b3f9c1d feat: agregar sección de promociones     ← este quedó mal
a3f9c1d feat: actualizar menú

C:\...\tortas-el-guero> git revert b3f9c1d --no-edit
[main 9d1e2a0] Revert "feat: agregar sección de promociones"

C:\...\tortas-el-guero> git log --oneline
9d1e2a0 Revert "feat: agregar sección de promociones"
b3f9c1d feat: agregar sección de promociones     ← sigue en la historia
a3f9c1d feat: actualizar menú
```

El sitio vuelve a como estaba, y el historial cuenta la historia completa.

### Díselo a la IA

> "La IA me rompió algo y necesito volver atrás sin perder trabajo. Mi situación es: [ya commiteé / no he commiteado / ya subí a GitHub], y el cambio que quiero deshacer es [describe]. Dime exactamente qué comandos correr y qué debería ver en pantalla en cada paso."

### Ejercicios

1. **[relacionar]** Une la situación con el comando correcto:
   - Cambios sin commitear ↔ `git restore index.html`
   - Commit malo sin subir ↔ `git revert HEAD --no-edit`
   - Commit malo ya subido ↔ `git revert <hash>` y `git push origin main`
   - Ver qué commit está mal ↔ `git log --oneline`

2. **[opción múltiple]** Ya commiteaste un cambio que salió mal. ¿Cuál es la forma más segura de volver atrás?
   - a) Borrar el repo y empezar de nuevo
   - b) **`git revert` del commit, que crea un commit nuevo deshaciéndolo sin borrar historia** ✔
   - c) `git rm` de todos los archivos
   - d) Editar el archivo a mano sin registro

3. **[completar]** "Sin commitear, usas ____. Una vez commiteado, usas ____. El primero ____ los cambios; el segundo crea un commit nuevo que los ____."
   - Banco: `git restore` · `git revert` · `descarta` · `deshace`
   - Respuesta: git restore / git revert / descarta / deshace

4. **[verdadero/falso]** "`git revert` es seguro incluso cuando el commit malo ya se subió a GitHub, porque no reescribe el pasado: agrega un commit nuevo."
   - Respuesta: VERDADERO — por eso es el remedio recomendado para historial compartido.

5. **[qué hace]** Corres `git restore index.html` con cambios sin commitear en ese archivo. ¿Qué pasa?
   - a) El archivo se borra del disco
   - b) **El archivo vuelve a como estaba en el último commit, perdiendo los cambios sin commitear** ✔
   - c) Se crea un commit de respaldo
   - d) La IA se entera de que la corregiste

---

## C12 — PRÁCTICA: tu primer Pull Request (a tu propio repo)

### Concepto

En C10 dejaste los testimonios en la rama `feature/testimonios`, esperando. Hoy los unes a `main` por la vía profesional: un Pull Request (PR). El PR es una propuesta de cambio con su título, su descripción y su revisión, antes de fusionar (B13–B14). Aunque trabajes solo, este es el flujo real del software en equipo — y el requisito del proyecto final del mes.

**Paso 1 — Sube tu rama.** Dentro de `feature/testimonios`:

```
git push -u origin feature/testimonios
```

Nota: empujas la rama, no main. `-u` deja registrado el seguimiento.

**Paso 2 — Abre el PR.** En tu repo de GitHub verás un botón amarillo **Compare & pull request**. (Si no aparece: pestaña **Pull requests** → **New pull request**, base `main`, compare `feature/testimonios`.)

**Paso 3 — Escríbelo.** Título claro: "feat: agregar sección de testimonios". Descripción breve: qué cambia, por qué, y qué deberías revisar tú mismo. No escribas "cambios" — el título del PR es el resumen ejecutivo (C5 aplicado a nivel PR).

**Paso 4 — Revísalo antes de fusionar.** Pestaña **Files changed**: ahí ves el diff completo — lo que agregaste, lo que quitaste. Revisarlo bien es la lección C13; por ahora confirma que solo tocó lo que pediste.

**Paso 5 — Fusiona.** Botón **Merge pull request** → **Confirm merge**. Los testimonios ya están en `main`.

**Paso 6 — Borra la rama.** GitHub te ofrece **Delete branch**: acéptalo. La rama cumplió su función; borrarla mantiene limpio el repo. Y cierra el círculo local:

```
git switch main
git pull origin main
```

Tu `main` local ahora tiene los testimonios.

Ese flujo — rama → push → PR → merge → delete branch — es la máquina de producción del software mundial. Acabas de operarla.

### Analogía

Es **llevar el platillo terminado al comedor con su carta de presentación**: "Coctel de camarón — camarón fresco, aguacate y salsa de la casa". El comensal (tú, en modo cliente) lee la carta, prueba el platillo, y si está bien, lo acepta. El título y la descripción del PR son esa carta: deciden si el platillo se recibe con confianza o con sospecha. Y el "Delete branch" es lavar los trastes de la mesa de pruebas: ya no los necesitas.

### Cómo se ve en la práctica

```
C:\...\tortas-el-guero> git switch feature/testimonios
C:\...\tortas-el-guero> git push -u origin feature/testimonios
Enumerating objects: 5, done.
...
 * [new branch]      feature/testimonios -> feature/testimonios

GitHub muestra:
  Compare & pull request      ← botón amarillo

  PR:  feature/testimonios → main
  Título:  feat: agregar sección de testimonios
  Descripción:  Sección con dos reseñas de clientes, estilo
  responsive. No toca el menú ni los precios.

  [Merge pull request] → [Confirm merge] → [Delete branch]
```

Después, en tu terminal:

```
C:\...\tortas-el-guero> git switch main
C:\...\tortas-el-guero> git pull origin main
Already up to date.               ← o el pull trae el merge
```

Y tu `main` local ya contiene los testimonios.

### Díselo a la IA

> "Terminé una función nueva en la rama `feature/testimonios` de mi repo Tortas El Güero y la subí a GitHub. Escríbeme el título y la descripción del Pull Request a `main`: qué agregué, por qué importa, y qué puntos debería revisar yo en el diff antes de hacer merge."

### Ejercicios

1. **[ordenar]** Acomoda el flujo del PR de principio a fin:
   - Desordenado: `Merge pull request` · `git push -u origin feature/...` · `escribir título y descripción del PR` · `borrar la rama` · `abrir Compare & pull request en GitHub`
   - Respuesta: git push -u origin feature/... → abrir Compare & pull request en GitHub → escribir título y descripción del PR → Merge pull request → borrar la rama

2. **[opción múltiple]** ¿Qué rama empujas cuando subes tu PR?
   - a) `main`, siempre
   - b) **La rama de feature que quieres fusionar, no main** ✔
   - c) Una rama temporal que borra GitHub
   - d) La rama `origin`

3. **[completar]** "Después del merge, GitHub te ofrece ____ la rama: acéptalo, porque la rama ya ____ su función."
   - Banco: `borrar` · `cumplió` · `renombrar` · `empezó`
   - Respuesta: borrar / cumplió

4. **[qué hace]** Abres un PR y GitHub te avisa que tu rama no tiene cambios respecto a main (PR vacío). ¿Qué significa?
   - a) Tu código se borró; reescríbelo
   - b) **Tu rama está atrasada respecto a main; actualízala con `git pull origin main` y vuelve a hacer push** ✔
   - c) El PR ya está fusionado
   - d) El repositorio es privado

5. **[verdadero/falso]** "Crear un PR a tu propio repositorio es un desperdicio de tiempo si no trabajas con nadie."
   - Respuesta: FALSO — es el entrenamiento del flujo real (y requisito del proyecto final); a solas o en equipo, el PR es la vía profesional para unir ramas.

---

## C13 — Revisar el código que la IA generó, en el PR

### Concepto

Antes de fusionar tu PR, haces code review (B15): leer el diff con ojos de auditor. La diferencia entre un alumno que deja que la IA maneje y uno que dirige es exactamente esto — revisar antes de dar el visto bueno. La pestaña **Files changed** del PR es tu mesa de revisión.

Una checklist honesta para cada PR:

**1. ¿Tocó lo que le pediste?** Mira la lista de archivos modificados. Si pediste "agregar testimonios" y tocó el `index.html` y el CSS, va bien. Si además modificó el menú o el `.gitignore`, sospecha: la IA se salió del encargo. Cada archivo inesperado es una bandera roja.

**2. ¿Inventó algo?** Revisa textos y datos: nombres de clientes, precios, teléfonos. Las alucinaciones (Mes 1, C5) también ocurren en código: la IA puede inventar una reseña de "cliente" que no existe o un número de teléfono falso. Los datos de tu negocio real NO se los inventa la IA: se los das tú.

**3. ¿Quedó raro o roto?** Busca contenido de relleno como `Lorem ipsum`, enlaces con `#` o `example.com`, estilos que chocan con tu paleta. Si el diff es muy grande y no entiendes una parte, pídele a la IA que te la explique línea por línea antes de aprobar. Pedir explicación no es debilidad: es el trabajo.

**4. ¿Subió algo que no debía?** Confirma que ningún secreto entró al diff (C3, el `.env`). En un proyecto simple de HTML/CSS es improbable, pero el hábito se entrena ahora.

**5. ¿El mensaje del commit/PR es honesto?** El diff debe corresponder con lo que dice el título. Si el PR dice "agregar testimonios" y el diff incluye precios, separe los cambios (C5).

Regla de oro: **si no entiendes el diff, no apruebes el PR.** Pide explicación, ajusta, y cuando lo entiendas y se vea bien, fusiona. Ese criterio te convierte en alguien que dirige código, no en alguien que lo padece.

### Analogía

Es **probar la cuenta antes de pagar en el restaurante**: no revisas el total, revisas cada renglón. "Una torta, dos refrescos" — ¿y este "extra queso" que no pedí? Ese renglón inesperado es un archivo modificado que no pediste. Pagar sin revisar la cuenta es cómodo, hasta que aparece lo que no pediste. Y devolver el platillo es más fácil si notaste el error al leer la carta (el diff) que al morderlo.

### Cómo se ve en la práctica

```
Files changed (2)                    ← dos archivos: pediste uno... ¿por qué dos?

index.html
-  <p>Lorem ipsum dolor sit amet...</p>
+  <section class="testimonios">
+    <h2>Lo que dicen nuestros clientes</h2>
+    <blockquote>"La mejor torta de la colonia" — Lupita</blockquote>
+    <blockquote>"Siempre llegan a tiempo" — Don Chuy</blockquote>
+  </section>

styles.css
+  .testimonios { background: #fdf6e3; border-radius: 12px; }
```

Revisas: agregó la sección (bien), dio estilo coherente (bien), y los dos archivos son razonables para "agregar testimonios". Los nombres de los "clientes" son inventados — si tu negocio real tiene reseñas reales, se los das tú en un segundo ciclo. Apruebas y fusionas.

### Díselo a la IA

> "Te voy a pegar el diff de mi Pull Request en `Files changed`. Revísalo con ojos de auditor y dime: 1) si toca algo que no le pedí, 2) si hay textos o datos inventados, 3) si hay contenido de relleno o enlaces falsos, 4) si el estilo choca con mi paleta. Puntos extra si me explicas las líneas que no entienda."

### Ejercicios

1. **[opción múltiple]** Pides "agregar testimonios" y el PR modifica `index.html`, `styles.css` y el `.gitignore`. ¿Qué haces?
   - a) Apruebas sin mirar, la IA sabrá por qué
   - b) **Sospechas: el `.gitignore` no era parte del encargo, y lo revisas antes de aprobar** ✔
   - c) Borras el repo
   - d) Le pides otro PR más grande

2. **[completar]** "Los ____ de datos (nombres, precios, teléfonos) también ocurren en código: la IA puede inventar reseñas de ____ que no existen. Los datos reales se los ____ tú."
   - Banco: `alucinaciones` · `clientes` · `das` · `roban`
   - Respuesta: alucinaciones / clientes / das

3. **[verdadero/falso]** "Si no entiendes una parte del diff, lo correcto es fusionar de todos modos porque la IA seguramente la hizo bien."
   - Respuesta: FALSO — si no entiendes el diff, no apruebes: pide explicación línea por línea. Ese es el trabajo de dirigir código.

4. **[relacionar]** Une la bandera roja con la acción:
   - Archivo modificado que no pediste ↔ Revisarlo y cuestionar por qué está ahí
   - Textos inventados (reseñas, teléfonos) ↔ Corregirlos con datos reales o quitarlos
   - `Lorem ipsum`, `#`, `example.com` ↔ Contenido de relleno que debe salir
   - Diff que no entiendes ↔ Pedirle a la IA que te lo explique línea por línea

5. **[qué hace]** Tu PR dice "feat: agregar testimonios" pero el diff también cambia los precios del menú. ¿Cuál es el problema y qué haces?
   - a) Ninguno, mientras funcione
   - b) **El PR mezcla dos temas; lo correcto es separarlos en commits/PRs distintos (C5) o al menos justificarlos** ✔
   - c) El problema es que no usaste Conventional Commits en el título
   - d) Borras el README

---

## C14 — PRÁCTICA: escribir un README que venda tu proyecto

### Concepto

Tu repo de Tortas El Güero ya vive en GitHub (C7) y está publicado (C8). Hoy le pones la portada: el `README.md`. Es lo primero que ve quien llega a tu repo — un cliente, un reclutador o una IA que va a trabajar contigo. Un repo sin README es un local sin letrero: existe, pero nadie sabe qué vende. La teoría está en B9 y B10 (Markdown); aquí lo escribes.

Un README que vende tiene esta estructura:

1. **Nombre y una línea que explica qué es.** No "Mi proyecto". "Tortas El Güero — Tortas y jugos en la colonia Centro, pedidos por WhatsApp." Si en cinco segundos no se entiende qué es, perdiste al lector.
2. **Captura de pantalla.** La imagen del sitio. En Markdown: `![vista previa](img/captura-sitio.png)`. La gente confía más en lo que ve que en lo que le prometen.
3. **Enlace al sitio publicado.** La URL de GitHub Pages (C8). El lector prueba tu trabajo con un clic.
4. **Tabla de archivos.** Qué contiene tu repo y para qué sirve cada archivo. Un futuro tú — o una IA — se orienta sin abrir nada.
5. **Cómo correrlo localmente.** Para un sitio estático es: descargar y abrir `index.html`. Aunque parezca obvio, escríbelo: es el primer paso de cualquiera que quiera usarlo.
6. **Secciones extra cuando crezcas:** tecnologías, cómo contribuir, licencia. No las inventes hoy si tu proyecto no las justifica — el README se edita, no es una piedra.

Paso a paso: (1) crea `README.md` en la carpeta local de tu proyecto, (2) escribe la estructura con datos reales, (3) toma una captura de tu sitio y guárdala en una carpeta `img/`, (4) revisa que se renderice bien en GitHub (Markdown se convierte solo), (5) `git add .`, commit con buen mensaje (C5), y `git push` (C7).

Regla de redacción: escribe para quien no conoce tu negocio, no para ti. La primera frase responde "¿qué es esto?" y la segunda "¿para qué sirve?". El resto es apoyo.

### Analogía

Es el **letrero de la fachada y el menú pegado a la puerta** del restaurante. El platillo ya está bueno (tu sitio publicado), pero nadie entra a un restaurante sin letrero ni menú. El letrero dice qué es, el menú dice qué ofrece, y una foto del platillo convence al que duda. En GitHub la decisión se toma en segundos — y tu README decide por ti.

### Cómo se ve en la práctica

```
# Tortas El Güero

Tortas y jugos en la colonia Centro. Pedidos por WhatsApp,
entrega a domicilio en un radio de 2 km.

![Vista previa](img/captura-sitio.png)

## Sitio publicado

https://rayflores.github.io/tortas-el-guero/

## Archivos

| Archivo      | Qué es                       |
|--------------|------------------------------|
| index.html   | La página (una sola sección) |
| styles.css   | Colores, tipografía y layout |
| README.md    | Esta portada                 |

## Cómo correrlo localmente

1. Descarga o clona el repositorio.
2. Abre `index.html` en tu navegador.

Hecho en HTML, CSS y JavaScript puro, publicado con GitHub Pages.
```

Fíjate en la tabla: Markdown la hace con `|` y `-`. Se ve profesional y se lee en segundos. Ese README, junto al sitio vivo, convierte tu repo de "carpeta subida" en "proyecto presentable".

### Díselo a la IA

> "Voy a escribir el README de mi repositorio [Tortas El Güero], que publica el sitio en [URL]. El negocio vende [tortas y jugos, pedidos por WhatsApp, colonia Centro]. Escríbeme un README completo en Markdown: título, frase de venta en una línea, descripción, cómo correrlo localmente y tabla de archivos. Tono directo, sin relleno, en español."

### Ejercicios

1. **[opción múltiple]** ¿Qué decide en segundos si alguien revisa tu repo a fondo?
   - a) La cantidad de estrellas
   - b) **El README: si no se entiende qué es, el lector se va** ✔
   - c) La tipografía del código
   - d) El `.gitignore`

2. **[completar]** "La primera línea del README, con un `#`, debe responder ____ es el proyecto y para qué ____. En cinco segundos."
   - Banco: `qué` · `sirve` · `cómo` · `cuesta`
   - Respuesta: qué / sirve

3. **[relacionar]** Une el elemento con su propósito:
   - Captura de pantalla ↔ Confianza visual: lo que se ve, se cree
   - Enlace al sitio publicado ↔ Probar el proyecto con un clic
   - Tabla de archivos ↔ Orientar a un futuro tú o a la IA sin abrir todo
   - "Cómo correrlo localmente" ↔ El primer paso de quien quiera usarlo

4. **[verdadero/falso]** "El README se escribe una vez y no se vuelve a tocar."
   - Respuesta: FALSO — es un archivo más del proyecto: se edita, se commitea y crece con él.

5. **[ordenar]** Acomoda los pasos de la práctica:
   - Desordenado: `hacer git commit y git push` · `crear README.md con la estructura` · `tomar la captura y subirla a img/` · `revisar que se vea bien en GitHub`
   - Respuesta: crear README.md con la estructura → tomar la captura y subirla a img/ → revisar que se vea bien en GitHub → hacer git commit y git push

---

## C15 — El brief para la IA cuando hay repo de por medio

### Concepto

Hasta ahora le pedías cambios a la IA sobre archivos sueltos y ella improvisaba el contexto. Ahora tu trabajo vive en un repo (C18): el encargo cambia de forma. En vez de "cambia el título", le das un **brief**: un encargo escrito con contexto, reglas y criterios de aceptación. Con repo de por medio, el brief tiene cuatro bloques.

**1. Contexto del proyecto.** Qué es, para quién, cuál es la paleta, qué secciones tiene, qué archivos lo componen. La IA no conoce tu negocio: todo lo que no le dices lo adivina — y adivinar es la fuente del relleno que corregiste en C13.

**2. La tarea.** Qué cambio exacto y en qué archivo. "Agrega la sección de precios en `index.html`, entre el hero y el contacto." Especificidad = previsibilidad (C9).

**3. Restricciones.** Qué NO debe tocar. "No cambies el `styles.css` salvo que sea indispensable", "no inventes precios", "trabaja en la rama `feature/precios`". Las restricciones evitan el problema #1 que encontraste al revisar PRs (C13): que la IA se salga del encargo.

**4. Criterios de aceptación.** Cómo sabrás que quedó hecho. "Hecho cuando: la sección muestra los 5 productos con su precio real, se ve bien en celular y no rompe el hero." Un criterio claro convierte tu revisión (C13) en marcar casillas, no en adivinar.

Un brief completo cabe en ocho líneas. No es burocracia: es lo que separa a quien improvisa de quien dirige. El mismo encargo sin brief produce una sección inventada; con brief, produce lo que pediste. Y el brief se guarda: un archivo `BRIEF.md` o un Issue (C17) hace que el contexto esté siempre a la mano — documentas una vez, diriges muchas veces.

### Analogía

Es **hacer el pedido en la taquería como se debe**: "una de pastor, sin cebolla, con piña, para llevar". Si dices solo "un taquero", el taquero decide por ti — y a veces te sale con cebolla. La IA es el mejor taquero del mundo: brillante con el encargo completo y creativa sin pedirlo. El brief es la diferencia entre "un taquero" y "una de pastor, sin cebolla, con piña, para llevar".

### Cómo se ve en la práctica

```
BRIEF — Sección de precios (Tortas El Güero)

1. CONTEXTO: sitio de una página, tortas y jugos en la colonia
   Centro. Paleta crema y naranja. Vende por WhatsApp. Repo en la
   rama main, archivos: index.html, styles.css.

2. TAREA: agregar la sección "Precios" en index.html, entre el
   hero y el contacto. Cinco productos con precio real en MXN.

3. RESTRICCIONES: no tocar el hero ni el contacto. No inventar
   productos: usa la lista de abajo. No cambiar el styles.css
   salvo que sea indispensable para que se vea bien.

4. PRODUCTOS: Torta de pastor $45 · Torta cubana $65 · Torta de
   suadero $50 · Jugo de naranja $25 · Refresco $18

5. CRITERIO DE ACEPTACIÓN: la sección muestra los 5 productos
   con su precio, se ve bien en celular, y el resto de la página
   no cambió.
```

Ese brief no deja espacio a la improvisación. Y la sección 5 es la misma lista que vas a revisar en el PR (C13).

### Díselo a la IA

> "Te voy a dar un brief para un cambio en mi repositorio. Complétalo conmigo: primero pregúntame qué hace el proyecto, qué cambio quiero y qué no debe tocarse; después escríbeme el brief completo con contexto, tarea, restricciones y criterios de aceptación para que yo lo revise antes de ejecutar nada."

### Ejercicios

1. **[completar]** "Un brief con repo de por medio tiene cuatro bloques: ____ (qué es el proyecto), ____ (qué cambio exacto), ____ (qué no tocar) y criterios de ____ (cómo sabrás que quedó hecho)."
   - Banco: `contexto` · `tarea` · `restricciones` · `aceptación`
   - Respuesta: contexto / tarea / restricciones / aceptación

2. **[opción múltiple]** ¿Qué pasa cuando le pides un cambio a la IA sin brief ni contexto?
   - a) Se niega a trabajar
   - b) **Improvisa: inventa datos, toca archivos de más y se sale del encargo** ✔
   - c) Trabaja solo en una rama
   - d) Espera tu autorización para todo

3. **[relacionar]** Une el bloque con su función:
   - Contexto ↔ Qué es el proyecto, para quién, paleta, archivos
   - Tarea ↔ Qué cambio exacto y en qué archivo
   - Restricciones ↔ Qué NO tocar y qué NO inventar
   - Criterios de aceptación ↔ Cómo sabrás que quedó hecho

4. **[qué hace]** En el brief: "RESTRICCIONES: no inventar productos, usa la lista de abajo." ¿Para qué sirve ese bloque?
   - a) Para que la IA trabaje más lento
   - b) **Para evitar el relleno que después tendrías que corregir en el PR (C13)** ✔
   - c) Para que el código sea más corto
   - d) Para que Git no genere conflictos

5. **[verdadero/falso]** "Un buen brief debe ser largo, con muchas palabras técnicas."
   - Respuesta: FALSO — un brief completo cabe en ocho líneas; vale por cubrir contexto, tarea, restricciones y criterios, no por su extensión.

---

## C16 — PRÁCTICA: documentar tu proyecto con IA

### Concepto

Documentar es hacer tu proyecto legible para tu yo del futuro y para la próxima IA que trabaje contigo. Hoy lo haces delegando la redacción a la IA, en dos piezas: el README completo (C14 fue el arranque) y la explicación del propio código.

**Paso 1 — Prepara el material.** Copia el contenido de tu `index.html` y tu `styles.css`, o si tu IA trabaja con repos, dale la ruta del archivo. Sin material, la IA documenta al aire.

**Paso 2 — Pide el mapa del código.** "Explícame qué hace cada sección y qué archivo es responsable de qué." La IA lee tu HTML y te devuelve un mapa: esta sección es el hero, esta es el menú, este archivo controla los colores. Eso que te devuelve es documentación de valor inmediato: entiendes tu propio proyecto.

**Paso 3 — Pide el README profesional.** Con el mapa en mano, le pides las secciones de uso, instalación y solución de problemas. Aquí usas el brief de C15: contexto, tarea y restricciones ("no inventes secciones que no tengo").

**Paso 4 — Revisa con ojos de auditor (C13).** La IA describe bien tu código, pero puede inventar: secciones que no existen, nombres técnicos que no aplican, o llamar "API" a algo que es un archivo estático. Los datos reales del negocio van de tu lado (C15).

**Paso 5 — Commit con mensaje claro (C5) y push (C7).** Documentación nueva = `docs:` en Conventional Commits: `docs: agregar README completo y mapa del código`.

Regla que te ahorra tiempo: no documentes todo de golpe. Una sesión corta por archivo o por sección produce mejor documentación que un monstruo de una sola vez (C9 aplicado a escribir).

### Analogía

Es **escribir la receta del restaurante para el siguiente cocinero**. La cocina funciona hoy porque alguien más anotó cómo se hace la salsa: el negocio no depende de que el cocinero actual se acuerde. Tu código es la cocina; el README y el mapa son la receta. Sin receta, cada cocinero nuevo (tu yo del futuro, otra IA) vuelve a adivinar — y a adivinar se equivoca.

### Cómo se ve en la práctica

```
TÚ: (pegando index.html)
"Explícame qué hace cada sección de este archivo, en máximo
5 líneas por sección."

IA:
- Hero: encabezado con nombre del negocio y botón de WhatsApp.
- Menú: lista de productos con precios, es la sección principal.
- Contacto: teléfono, horario y mapa de ubicación.
- El color de fondo y la tipografía viven en styles.css.

TÚ:
"Con esto, escríbeme el README completo: descripción, secciones
del sitio, cómo correrlo localmente y cómo se estructura el
código. No inventes funcionalidades."

IA:  [README de 20 líneas, coherente con el código real]

TÚ:
git add README.md
git commit -m "docs: agregar README y mapa del proyecto"
```

Fíjate en la última instrucción: "no inventes funcionalidades" es la restricción del brief (C15). Sin ella, la IA suele escribir que tu página "tiene base de datos" cuando no la tiene.

### Díselo a la IA

> "Te voy a pegar el código de mi proyecto [index.html y styles.css]. Primero explícame qué hace cada sección en máximo 5 líneas. Después escríbeme un README profesional con descripción, estructura y cómo correrlo localmente. No inventes funcionalidades ni datos: solo documenta lo que el código realmente hace."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la división de trabajo correcta al documentar con IA?
   - a) La IA conoce el negocio, tú conoces el código
   - b) **La IA redacta la documentación y tú aportas los datos reales y revisas (C13)** ✔
   - c) La IA documenta y commitea directo a main sin revisión
   - d) Documentar es inútil: el código se explica solo

2. **[completar]** "Documentar no es escribir ____: es hacer tu proyecto ____ para tu yo del futuro y para la próxima ____."
   - Banco: `más` · `legible` · `IA` · `bonito`
   - Respuesta: más / legible / IA

3. **[relacionar]** Une el paso con su resultado:
   - Pide el mapa del código ↔ Entender qué hace cada archivo y sección
   - Pide el README profesional ↔ Documentación de uso, instalación y estructura
   - Aporta datos reales ↔ Lo único que la IA no conoce de tu negocio (C15)
   - Revisa el resultado ↔ Confirmar que no inventó funcionalidades (C13)

4. **[qué hace]** Pegas tu `index.html` a la IA y le pides "explica qué hace cada sección". ¿Qué esperas?
   - a) Que lo borre y lo reescriba mejor
   - b) **Un mapa del código: qué sección es responsable de qué, para entender tu propio proyecto** ✔
   - c) Que cree un PR a tu repo
   - d) Que te cobre por la sesión

5. **[verdadero/falso]** "La IA puede describir tu código con precisión, pero también puede inventar secciones o nombres técnicos que no existen en tu proyecto."
   - Respuesta: VERDADERO — por eso el paso de revisión (C13) es obligatorio al documentar.

---

## C17 — Issues como lista de tareas dirigida a la IA

### Concepto

Un Issue (B11) es un ticket del proyecto. Para ti ahora es algo más concreto: **la lista de tareas con formato**. Cada Issue es una tarea atómica (C9) escrita para que la IA la entienda y tú la verifiques. La estructura que funciona:

- **Título en imperativo.** "Agregar sección de precios", "Corregir botón de WhatsApp que no abre". Como un buen mensaje de commit (C5): qué y por qué.
- **Descripción con contexto y criterio.** Usa el formato del brief de C15: qué se quiere, restricciones, y cómo sabrás que quedó hecho.
- **Un label.** `enhancement` para funciones nuevas, `bug` para errores. Sirve para filtrar tu lista de pendientes.

El flujo de dirección con Issues: (1) escribes el Issue en GitHub, (2) GitHub te ofrece crear una rama desde el Issue — así la rama queda ligada a la tarea, (3) le dices a la IA "lee el Issue #4 e impleméntalo", (4) abres el PR con la frase mágica `Closes #4` en la descripción, (5) al hacer merge, el Issue se cierra solo (C12).

Por qué es la mejor lista de tareas para dirigir IA: porque convierte el trabajo en **entregables verificables**. "Implementa el issue #4" es un encargo completo (contexto + criterios adentro del ticket); "mejórame la página" no es un encargo, es una oración a la suerte. El repo deja de ser una carpeta y se convierte en un sistema: los Issues dicen QUÉ falta, las ramas lo implementan (C19), los PR lo cierran (C12).

Además, los Issues son historial de decisiones: dentro de un mes, el registro "creé este issue, se resolvió con este PR" te cuenta cómo pensabas. Igual que el historial de commits (C1), es un diario que no pide tu permiso para escribirse.

### Analogía

Es el **pedido de la comanda en el restaurante**. El cliente (tú) anota qué quiere, con detalles y sin ambigüedad: "una de pastor, sin cebolla". La comanda pasa a la cocina (la rama), se cocina (la IA), y se sirve (el PR). Si algo sale mal, la comanda dice exactamente qué se pidió. Un restaurante sin comandas es puro griterío: "¡la orden!" — que nadie sabe de qué. Tu proyecto sin Issues es ese restaurante.

### Cómo se ve en la práctica

```
Issue #4  [enhancement]

Título:   Agregar sección de precios

Descripción:
  El sitio necesita una sección "Precios" entre el hero y el
  contacto. Mostrar los 5 productos con precio en MXN (usar la
  lista real del negocio). No cambiar el hero ni el contacto.

  CRITERIO: la sección se ve bien en celular, muestra los 5
  productos con su precio real, y el resto de la página no cambió.

[Create branch: feature/4-precios]   ← GitHub lo ofrece aquí

TÚ (a la IA): "Implementa el Issue #4 del repo. Crea la rama
feature/4-precios y trabaja ahí."

IA: [lee el issue, implementa, deja la rama lista]

TÚ: [pruebas, push, PR con "Closes #4" en la descripción, merge]
#4  Agregar sección de precios          ← cerrado automáticamente
```

Ese Issue es a la vez instrucción para la IA y checklist para tu revisión (C13). Doble trabajo con una sola escritura.

### Díselo a la IA

> "Tengo esta lista de pendientes para mi sitio: [lista de 5 tareas]. Convierte cada una en un Issue de GitHub con título en imperativo, descripción con contexto y restricciones, y criterio de aceptación. Después dime qué label pondría a cada una. No los crees todavía: primero me los muestras para que los revise."

### Ejercicios

1. **[completar]** "Cada Issue = una tarea ____ (C9), con título en ____ y descripción con contexto, restricciones y criterio de ____."
   - Banco: `atómica` · `imperativo` · `aceptación` · `verde`
   - Respuesta: atómica / imperativo / aceptación

2. **[opción múltiple]** ¿Cómo cierras un Issue automáticamente al fusionar el PR que lo resuelve?
   - a) No se puede: siempre se cierra a mano
   - b) **Escribiendo `Closes #4` en la descripción del PR** ✔
   - c) Borrando el issue
   - d) Reiniciando GitHub

3. **[ordenar]** Acomoda el flujo de una tarea dirigida:
   - Desordenado: `crear la rama desde el Issue` · `escribir el Issue` · `PR con "Closes #N"` · `que la IA implemente el Issue`
   - Respuesta: escribir el Issue → crear la rama desde el Issue → que la IA implemente el Issue → PR con "Closes #N"

4. **[relacionar]** Une el elemento con su papel en el flujo:
   - Issue ↔ El QUÉ: la tarea atómica descrita
   - Rama `feature/4-precios` ↔ El DÓNDE: el laboratorio aislado (C10)
   - PR ↔ El CÓMO SE UNE: revisión y merge (C12)
   - `Closes #N` ↔ El cierre automático del issue al fusionar

5. **[qué hace]** Le dices a la IA: "Implementa el Issue #4." ¿Qué tienes asegurado?
   - a) Que la IA trabajará sola para siempre
   - b) **Un encargo completo: contexto, restricciones y criterio de aceptación escritos en el ticket** ✔
   - c) Que el código no tendrá errores
   - d) Que el issue se cierra sin revisión

---

## C18 — PRÁCTICA: proyecto nuevo — sitio de un negocio real

### Concepto

Hoy arrancas EL proyecto del resto del mes — y del proyecto final (C30): el sitio de un negocio real. El Mes 1 fue práctica con páginas de prueba; esto es trabajo de verdad, con datos de verdad. Tres reglas del juego:

**1. Negocio real.** El de un familiar, un amigo, el de tu barrio, o tu propio emprendimiento. No un negocio ficticio: uno que existe, con gente detrás. Eso te obliga a conseguir datos reales, que es justo lo que la IA no te da (C15).

**2. Datos reales, conseguidos por ti.** Nombre, productos o servicios, precios, teléfono, horario, dirección. Visita, pregunta, anota. Cada dato real que consigues es un error menos en la revisión (C13). Un precio inventado no es un detalle menor: es mentira publicada en tu repo.

**3. Una sola página.** El foco es dominar el flujo completo (rama → IA → prueba → PR → merge), no construir un portal. Una página, bien hecha, con todo el flujo encima, vale más para tu portafolio que diez páginas a medias.

Paso a paso:

**Paso 1 — Define el negocio y consigue los datos.** Este paso no se delega. Abre un archivo `datos.txt` (o un Issue, C17) con: nombre del negocio, giro, productos/servicios con precios, teléfono/WhatsApp, horario, dirección, y una frase que lo describa.

**Paso 2 — Crea la carpeta y el repo.** `git init`, `.gitignore` (C3), un `index.html` mínimo (título y estructura vacía de secciones). El esqueleto del proyecto.

**Paso 3 — Primer commit (C4).** La primera foto del negocio real.

**Paso 4 — Repo en GitHub y push (C7).** El respaldo existe desde el día uno. Si se daña tu disco, el proyecto vive.

**Paso 5 — Publica con GitHub Pages (C8).** Sí, aunque esté en construcción: cada push actualiza la URL. Ahorita mismo tu negocio tiene dirección en internet.

**Paso 6 — Escribe la lista de secciones.** Hero, productos/servicios, precios, contacto y WhatsApp, testimonios (si hay reseñas reales). Esa lista son tus Issues (C17) y tus ramas (C19).

Por qué versionado desde el día uno: porque lo que se hace versionado desde el inicio no necesita "ponerse profesional después" (C28). El proyecto final del mes (C30) pide repo con README, 10+ commits, rama mergeada vía PR y sitio publicado. Tú ya lo estás haciendo desde la lección de hoy.

### Analogía

Es **dejar de cocinar de práctica y abrir tu propio puesto**. En los ejercicios cocinabas platillos de ejemplo para aprender; ahora el platillo lleva tu letrero y lo come gente real. La diferencia no es la receta: es la responsabilidad. Cada precio, cada horario, cada teléfono que pongas en la vitrina tiene que ser real — porque si alguien llega pidiendo la torta del menú, la torta debe existir.

### Cómo se ve en la práctica

```
datos.txt
---------
Nombre:     Tortas El Güero
Giro:       Comida (tortas y jugos)
Dirección:  Av. Juárez 45, Centro
Teléfono:   55 1234 5678 (WhatsApp)
Horario:    Lunes a sábado, 9:00–18:00
Productos:  Torta de pastor $45 · Torta cubana $65
            Torta de suadero $50 · Jugo de naranja $25
Descripción: "Las tortas de la colonia, desde hace 15 años."

C:\...\negocio-real> git init
C:\...\negocio-real> git status
C:\...\negocio-real> git add .
C:\...\negocio-real> git commit -m "feat: esqueleto del sitio de Tortas El Güero"

GitHub → New repository → `tortas-el-guero`
C:\...\negocio-real> git remote add origin https://github.com/tu-usuario/tortas-el-guero.git
C:\...\negocio-real> git push -u origin main

Settings → Pages → Deploy from a branch → main
✔ Your site is live at https://tu-usuario.github.io/tortas-el-guero/

Siguiente paso (C19): cada sección de la lista va en su propia rama.
```

Ese `datos.txt` es tu mina de oro: se lo das a la IA en cada brief (C15) para que nunca invente. Ya tienes el proyecto del mes en marcha.

### Díselo a la IA

> "Voy a construir el sitio de un negocio real en un repositorio nuevo. Estos son los datos reales: [pega los de tu datos.txt]. Escríbeme el `index.html` inicial con la estructura de secciones (hero, productos, precios, contacto/WhatsApp), usando estos datos y nada más. No inventes información. Dime qué archivos voy a tener y qué cambia en cada sección."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el requisito más importante del proyecto de C18?
   - a) Que tenga muchas secciones
   - b) **Que sea un negocio real con datos reales que TÚ consigues** ✔
   - c) Que use la IA más avanzada del mercado
   - d) Que se parezca a otro proyecto famoso

2. **[completar]** "El proyecto se crea ____ desde el día uno (git init, .gitignore, commit), porque así no necesita ponerse profesional ____ (C28)."
   - Banco: `versionado` · `después` · `bonito` · `remoto`
   - Respuesta: versionado / después

3. **[verdadero/falso]** "Los datos del negocio (precios, teléfono, horario) se los pides a la IA y ella los inventa si no los tienes."
   - Respuesta: FALSO — la IA no conoce el negocio (C15); los datos reales los consigues tú. Inventarlos es el error que corregiste en C13.

4. **[ordenar]** Acomoda el arranque del proyecto:
   - Desordenado: `git init + .gitignore` · `crear index.html mínimo` · `primer commit` · `definir el negocio y conseguir datos reales` · `crear repo en GitHub y push`
   - Respuesta: definir el negocio y conseguir datos reales → git init + .gitignore → crear index.html mínimo → primer commit → crear repo en GitHub y push

5. **[qué hace]** Publicas tu sitio del negocio real con GitHub Pages aunque esté en construcción. ¿Qué ganas?
   - a) Nada: mejor esperar a que esté perfecto
   - b) **Una URL pública desde el día uno que se actualiza sola con cada push (C8)** ✔
   - c) Que la IA deje de tocar el proyecto
   - d) Un dominio gratis para siempre

---

## C19 — PRÁCTICA: iterar el proyecto en ramas

### Concepto

El proyecto del negocio real (C18) ya existe: esqueleto en `main`, datos reales en `datos.txt`, publicándose en Pages. Ahora lo construyes como lo construye un equipo de verdad: **una rama por sección**. La regla de oro de este mes: **una rama = un Issue = un cambio atómico (C9)**. Nada de acumular cambios en `main`; `main` siempre es la versión estable (C10).

El ciclo de cada sección (lo repites tantas veces como secciones tenga tu lista):

**Paso 1 — El Issue (C17).** Cada sección es un Issue con su criterio de aceptación.

**Paso 2 — Parte de lo más nuevo.** `git switch main` y `git pull origin main`. Así trabajas sobre la versión más reciente y te ahorras conflictos (C20).

**Paso 3 — Crea la rama.** `git switch -c feature/nombre-seccion` (C10). Nombre claro: `feature/hero`, `feature/precios`, `feature/contacto`.

**Paso 4 — El cambio con IA y brief (C15).** Le pegas el Issue o el brief a la IA, con los datos reales de `datos.txt`. Un cambio a la vez (C9).

**Paso 5 — Prueba (C9).** Abre en el navegador. ¿Se ve bien en celular? ¿Rompió algo? Antes de commitear, probaste.

**Paso 6 — Commit claro (C5) y push (C12).** `git add .`, `git commit -m "feat: agregar sección de precios"`, `git push -u origin feature/precios`.

**Paso 7 — PR, revisión y merge (C12, C13).** Abres el PR a `main`, revisas el diff con la checklist de C13, fusionas y borras la rama.

Si una sección queda mal, la descartas y `main` ni se entera (C10). Si queda bien, entra a `main` con registro (el PR) y la página publicada se actualiza sola (C8). Ese ciclo convierte tu proyecto en una secuencia de entregas pequeñas y verificadas — el flujo diario de C9, ahora con ramas encima.

Un detalle que te va a ahorrar dolores: **nunca construyas sobre una rama vieja**. Si haces la sección 3 mientras la sección 1 aún no se mergea, cuando la merges los caminos se separan de más. El orden: mergea rápido, baja lo nuevo (`git pull`), y crea la siguiente rama desde lo más actual.

### Analogía

Es **montar el local sección por sección, con mesas de prueba aparte**. No construyes el comedor sobre la caja registradora mientras los clientes comen. Cada platillo nuevo (cada sección) se prueba en la mesa de atrás (la rama) y solo pasa al comedor (main) cuando está aprobado por ti (el PR). Y como el comedor nunca se cierra (el sitio sigue publicado y funcionando), nadie nota la construcción.

### Cómo se ve en la práctica

```
# Issue #5: Agregar sección "Precios"

C:\...\tortas-el-guero> git switch main
C:\...\tortas-el-guero> git pull origin main
Already up to date.

C:\...\tortas-el-guero> git switch -c feature/precios
Switched to a new branch 'feature/precios'

# Le pegas a la IA el Issue #5 + datos.txt, ella edita index.html

# Pruebas en el navegador... se ve bien

C:\...\tortas-el-guero> git add .
C:\...\tortas-el-guero> git commit -m "feat: agregar sección de precios"
[feature/precios 8c1a2b3] feat: agregar sección de precios
C:\...\tortas-el-guero> git push -u origin feature/precios

# GitHub: PR feature/precios → main, revisas el diff (C13), merge, delete branch
# Cierras el Issue #5 (Closes #5), y el sitio publicado ya muestra los precios
```

Tres comandos de Git y un PR por sección. Repites el ciclo hasta completar tu lista de Issues (C17).

### Díselo a la IA

> "Voy a iterar mi proyecto en ramas: una rama por sección. Ahora voy a crear la rama `feature/[seccion]` para agregar [sección]. Los datos reales del negocio están en `datos.txt` — úsalos, no inventes nada. Trabaja solo en `index.html` y dime exactamente qué líneas cambiaste para que revise el diff antes de commitear."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la regla de oro de C19?
   - a) Hacer todo el trabajo en `main` para ir más rápido
   - b) **Una rama = un Issue = un cambio atómico (C9)** ✔
   - c) Crear una rama por archivo
   - d) Nunca borrar ramas

2. **[ordenar]** Acomoda el ciclo de una sección:
   - Desordenado: `git switch main + git pull` · `PR, revisión y merge` · `crear la rama feature/...` · `pedir el cambio con brief y probarlo` · `git add, commit y push`
   - Respuesta: git switch main + git pull → crear la rama feature/... → pedir el cambio con brief y probarlo → git add, commit y push → PR, revisión y merge

3. **[completar]** "Antes de crear cada rama haces `git switch main` y `git pull` para partir de la versión más ____. Así evitas ____ a la hora del merge (C20)."
   - Banco: `nueva` · `conflictos` · `vieja` · `tokens`
   - Respuesta: nueva / conflictos

4. **[verdadero/falso]** "En el flujo de C19, `main` debe quedar siempre como la versión estable y probada del sitio."
   - Respuesta: VERDADERO — el trabajo experimental vive en ramas; `main` se actualiza solo vía PR después de revisar (C12, C13).

5. **[qué hace]** Terminas la sección de precios en `feature/precios`, todo probado. ¿Cuál es el siguiente paso?
   - a) `git switch main` y construir la siguiente sección ahí
   - b) **`git push -u origin feature/precios`, abrir el PR, revisarlo y mergearlo (C12)** ✔
   - c) Borrar la rama local
   - d) Hacer `git merge` directo sin PR

---

## C20 — PRÁCTICA: resolver tu primer conflicto de merge

### Concepto

Un conflicto pasa cuando dos versiones del proyecto cambiaron **las mismas líneas** y Git no puede decidir cuál conservar (A20). Hoy lo provocas a propósito, en tu proyecto del negocio real (C18), para quitarte el miedo. Un conflicto no es una catástrofe: es Git siendo honesto y pidiéndote tu decisión.

**Paso 1 — Estado limpio.** En `main`, `git status` sin cambios pendientes (C10).

**Paso 2 — Rama 1 cambia el título.** `git switch -c feature/lema`. Le pides a la IA que cambie el título del hero a un lema del negocio ("Tortas que saben a casa"). Pruebas, `git add`, `git commit`. La rama tiene su cambio.

**Paso 3 — `main` cambia el MISMO título.** `git switch main`. Le pides a la IA que cambie el mismo título, pero a otro texto ("Las mejores tortas de la colonia"). Pruebas, commit, push.

**Paso 4 — El choque.** Ahora las dos versiones partieron del mismo punto y cada una cambió la misma línea. Intenta unir:

```
git merge feature/lema
```

Git responde: `CONFLICT (content): Merge conflict in index.html`. No es un error: es una pregunta.

**Paso 5 — Mira el parte de guerra.** `git status` muestra `both modified: index.html`. Ese es el único archivo en conflicto.

**Paso 6 — Abre el archivo y decide.** Encontrarás los marcadores:

```
<<<<<<< HEAD
Tortas que saben a casa
=======
Las mejores tortas de la colonia
>>>>>>> feature/lema
```

`HEAD` es tu rama actual (main), `feature/lema` es la otra. Tu trabajo: decidir qué título queda, **borrar las marcas** (`<<<<<<<`, `=======`, `>>>>>>>`) y guardar. También puedes mezclar: "Tortas que saben a casa — las mejores de la colonia".

**Paso 7 — Sella la decisión.**

```
git add index.html
git commit -m "merge: resolver conflicto del título del hero"
```

Conflicto resuelto. `git log` muestra el merge con su historia completa.

Dos reflexiones que te convierten en profesional: primero, los PR te avisan del conflicto ANTES de mergear (C12 te muestra el botón "Resolve conflicts") — ese aviso es un regalo, no un error. Segundo, la prevención: cambios atómicos (C9), y bajar `main` antes de cada rama (C19) reducen los conflictos a casi cero.

### Analogía

Es **cuando dos cocineros anotaron la misma receta por su lado**: uno escribió "tres cucharadas de azúcar" y el otro "media taza de miel" en el mismo renglón. La receta no está rota: está marcada en ese renglón para que el jefe de cocina (tú) decida. Tachas lo que no va, dejas lo que sí, y firmas la receta (el commit del merge). El restaurante sigue abierto todo el tiempo.

### Cómo se ve en la práctica

```
C:\...\tortas-el-guero> git merge feature/lema
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.

C:\...\tortas-el-guero> git status
Unmerged paths:
  both modified:   index.html

# Abres index.html:
<<<<<<< HEAD
Tortas que saben a casa
=======
Las mejores tortas de la colonia
>>>>>>> feature/lema

# Decides: te quedas con el lema y borras las marcas:
Tortas que saben a casa — las mejores de la colonia

C:\...\tortas-el-guero> git add index.html
C:\...\tortas-el-guero> git commit -m "merge: resolver conflicto del título del hero"
[main 3f6d9e0] Merge branch 'feature/lema'
```

La clave está en los tres marcadores: `<<<<<<<` abre tu versión, `=======` la separa de la otra, `>>>>>>>` cierra. Borras los tres y quedas con tu decisión.

### Díselo a la IA

> "Me salió un conflicto de merge en [archivo] entre las ramas [main] y [rama]. Te pego el contenido del archivo con los marcadores `<<<<<<<`, `=======` y `>>>>>>>`. Explícame qué cambio propone cada lado, recomiéndame cuál conservar considerando que el proyecto es [describe] y dime qué pasos exactos correr para terminar el merge sin romper nada."

### Ejercicios

1. **[opción múltiple]** ¿Cuándo aparece un conflicto de merge?
   - a) Cada vez que haces merge
   - b) **Cuando dos versiones cambiaron las MISMAS líneas y Git no puede decidir cuál conservar** ✔
   - c) Cuando la IA escribe el código
   - d) Cuando el repo es privado

2. **[completar]** "Git marca cada zona del conflicto con ____, `=======` y ____. Tu trabajo es decidir qué texto queda y ____ las marcas."
   - Banco: `<<<<<<<` · `>>>>>>>` · `borrar` · `copiar`
   - Respuesta: <<<<<<< / >>>>>>> / borrar

3. **[ordenar]** Acomoda la resolución del conflicto:
   - Desordenado: `git commit` · `abrir el archivo y elegir el texto correcto` · `git status para ver el archivo en conflicto` · `git add index.html`
   - Respuesta: git status para ver el archivo en conflicto → abrir el archivo y elegir el texto correcto → git add index.html → git commit

4. **[verdadero/falso]** "Un conflicto de merge es una señal de que hiciste algo mal y rompiste el proyecto."
   - Respuesta: FALSO — es normal y esperado cuando dos líneas de trabajo tocan lo mismo (A20); se resuelve eligiendo y el proyecto queda intacto.

5. **[qué hace]** En GitHub, tu PR muestra: "This branch has conflicts". ¿Qué significa y qué haces?
   - a) El repo está corrupto: hay que clonarlo de nuevo
   - b) **Dos ramas cambiaron las mismas líneas; resuélvelo antes de mergear (con el botón de GitHub o localmente como en esta lección)** ✔
   - c) La IA no puede trabajar ahí
   - d) Borra el PR y crea otro

---

## C21 — Herramientas IA que trabajan con Git directamente

### Concepto

Hasta aquí la IA te escribía código y TÚ corrías Git. Las herramientas de esta lección cambian eso: están **integradas con tu repo**. Leen tus archivos, tu historial y tu estado de Git, y pueden crear ramas, hacer commits y hasta abrir PRs. Ejemplos que vas a conocer: GitHub Copilot (B24), Cursor, Claude Code, Windsurf, Codeium. Todas trabajan sobre tu carpeta local y respetan Git — todo lo que aprendiste sigue aplicando.

El cambio real no es la herramienta: es el flujo. Con ellas, el ciclo PEDIR → PROBAR → COMMITEAR (C9) tiene dos modos:

**Modo 1 — La IA propone, tú commiteas.** Ella edita los archivos; tú pruebas y corres `git add` y `git commit`. Control total: nada entra a la historia sin tu mano. Ideal mientras confías a medias.

**Modo 2 — La IA commitea, tú revisas.** Le das permiso para correr `git add` y `git commit`. Ella edita, prueba mentalmente, y sella. Tú revisas después el `git diff` y el `git log` (C13, C5). Más velocidad, más responsabilidad: tu única red es tu revisión.

La regla que salva tu trabajo: **nunca dejes que haga push de lo que no probaste** (C9). El push es público: ensucia tu repo y tu historial ante el mundo. Un commit sin probar lo reviertes en dos comandos (C11); un push sin probar es tu error colgado en la plaza.

Otra consecuencia práctica: como estas herramientas hacen commits por ti, tu disciplina de mensajes (C5) se vuelve más importante, no menos. La herramienta te propone el mensaje del commit leyendo el diff — apruebas el mensaje como apruebas el código. Y como pueden crear ramas, respeta la regla de C19: una rama, un cambio atómico, para que el diff que revises sea pequeño y comprensible.

### Analogía

Es **pasar de dictar por teléfono a tener un ayudante con las llaves de la bodega**. Antes le describías qué agarrar y tú abrías el candado (todos los comandos Git). Ahora el ayudante entra solo, toma lo que le pides, y lo pone en la mesa. El riesgo sube un poco — puede tomar más de lo que pediste, o meter las manos donde no debía — pero la velocidad no tiene comparación. Tu trabajo cambia de "abrir candados" a "supervisar qué sale de la bodega".

### Cómo se ve en la práctica

```
Modo 1 (tú commiteas):
TÚ:    "Cambia el color del botón de WhatsApp a naranja."
IA:    [edita styles.css]
TÚ:    [pruebas en el navegador] → git add . → git commit -m "style: ..."

Modo 2 (ella commitea, tú revisas):
TÚ:    "Crea la rama feature/hero, agrega un hero con el nombre del
        negocio y el teléfono, haz commit."
IA:    git switch -c feature/hero
       [edita index.html]
       git add .
       git commit -m "feat: agregar hero con nombre y teléfono"
TÚ:    git diff feature/hero → reviso líneas → git log --oneline
       → si está bien, sigo; si no, git revert (C11)
```

En el Modo 2, tu `git diff` es el detector de mentiras: lo que la IA dice que hizo y lo que realmente hizo deben coincidir (C13).

### Díselo a la IA

> "Voy a dejarte hacer commits en mi repositorio (Modo 2). Antes de trabajar: dime qué cambios vas a hacer, en qué archivos y en qué rama. Después de cada tarea muéstrame el `git diff` antes de cerrar el commit, y propón el mensaje siguiendo Conventional Commits (C5). No hagas push a `main` sin pedirme permiso."

### Ejercicios

1. **[opción múltiple]** ¿Qué diferencia a las herramientas de C21 de tu flujo anterior?
   - a) No usan Git
   - b) **Están integradas con tu repo: leen archivos, historial y estado, y pueden crear ramas, commits y PRs** ✔
   - c) Solo funcionan en GitHub
   - d) No necesitan instrucciones

2. **[relacionar]** Une el modo o acción con su control:
   - La IA propone, tú commiteas ↔ Control total: nada entra a la historia sin tu mano (C9)
   - La IA commitea, tú revisas ↔ Más velocidad; tu revisión del diff es tu única red (C13)
   - Push de algo sin probar ↔ Ensucia el repo y el historial: prohibido (C9)
   - `git diff` + `git log` ↔ Tu auditoría después de que ella trabajó (C5)

3. **[verdadero/falso]** "Con herramientas integradas a Git, la disciplina que aprendiste (probar antes de commitear, revisar el diff) deja de ser necesaria."
   - Respuesta: FALSO — la velocidad no elimina la revisión: probar y revisar siguen siendo el trabajo de dirección (C9, C13).

4. **[completar]** "La regla que salva tu trabajo: nunca dejes que haga ____ de lo que no ____. El push es ____; el commit sin probar se puede revertir (C11)."
   - Banco: `push` · `probaste` · `público` · `secreto`
   - Respuesta: push / probaste / público

5. **[qué hace]** Dejas que la IA haga commit en el Modo 2. Antes de aprobar, ¿qué revisas?
   - a) Nada: si ella lo hizo, debe estar bien
   - b) **El `git diff` del cambio y el mensaje del commit (C13, C5)** ✔
   - c) Que la rama se llame `main`
   - d) Que el repo tenga estrellas

---

## C22 — Claude Code, Cursor y el flujo con repositorio

### Concepto

Dos herramientas concretas del flujo con repo (C21). **Claude Code**: una IA que corre en tu terminal, abre tu repositorio, lee archivos, los edita, crea ramas y hace commits — le hablas y trabaja sobre tu proyecto real. **Cursor**: un editor (primo de VS Code) con IA integrada que conoce todo tu repo: autocompleta, explica y refactoriza con el contexto completo, no con lo que le pegaste.

El flujo con repositorio — el título de esta lección — es lo que ambas tienen en común: **la IA ve tu proyecto completo, no solo lo que le dictas**. Eso la vuelve más útil y más peligrosa a la vez. Más útil porque no adivina el contexto (C15); más peligrosa porque puede tocar más de lo que pediste, y en silencio. Por eso los hábitos de las lecciones anteriores son el requisito de esta.

Las reglas de oro del flujo con repo:

1. **Estado limpio antes de cada tarea grande (C10).** Si no, no puedes distinguir lo que hizo ella de lo que ya estaba.
2. **Pedidos atómicos (C9).** Una tarea a la vez, un commit a la vez, un diff chico que puedas revisar.
3. **Revisa el diff después de cada cambio (C13).** La velocidad no sustituye la revisión; la velocidad multiplica el daño si no revisas.
4. **Ramas para lo experimental (C10).** Que proponga rama antes de tocar `main`. Tú decides cuándo se fusiona (C12).
5. **Tu criterio es el jefe.** Si no entiendes el cambio, no lo apruebas (C13). La herramienta propone; tú dispones.

Práctica de hoy: (1) abre tu proyecto del negocio real (C18) en Claude Code o Cursor, (2) pídele que te explique la estructura del repo — es tu primera prueba de que "ve" tu proyecto, (3) pídele UNA mejora pequeña, (4) revisa el diff (C13), (5) decide quién commitea (C21, Modo 1 o 2). El siguiente paso (C23) es dejarla trabajar con más autonomía sobre el repo.

El patrón mental que te hace crecer: estas herramientas no te quitan trabajo de dirección, te lo devuelven más grande. Tu trabajo sube de nivel — de teclear Git a decidir qué entra al proyecto y por qué. Eso es exactamente lo que separa a quien dirige software de quien lo padece.

### Analogía

Es **contratar a un cocinero que ve la cocina completa**, en lugar de dictarle por teléfono. Antes describías cada ingrediente (le pegabas el archivo); ahora el cocinero está parado en la cocina: ve los ingredientes, las ollas, la receta pegada en la pared (tu repo, tu historial, tu README). Cocina mejor y más rápido — pero ahora tiene cuchillos a la mano. Tú defines qué puede tocar, cuándo debe pedir permiso, y qué platillo sale a la mesa. La receta, la decisión y el visto bueno son tuyos.

### Cómo se ve en la práctica

```
Claude Code:
$ claude
> Explícame qué hace este repo, archivo por archivo, en 3 líneas cada uno.
> [IA responde con el mapa real del proyecto: index.html, styles.css, README]

> Cambia el color de fondo a crema y el título a naranja.
> [IA edita index.html y styles.css]
> Muéstrame el diff de lo que cambiaste.
> [IA muestra las líneas agregadas y quitadas]

TÚ: [revisas el diff (C13), pruebas en el navegador]
TÚ: "Haz commit con Conventional Commits."
IA: git add . && git commit -m "style: cambiar paleta a crema y naranja"

Cursor:
TÚ: [seleccionas el hero en el editor]
> "Refactoriza esta sección para que sea responsive."
> [Cursor usa el contexto del repo y propone el cambio con preview]
TÚ: [aceptas o rechazas el cambio como un PR en miniatura]
```

Fíjate en lo que pediste al final de la sesión de Claude Code: el diff ANTES de commitear. Ese hábito — diff antes de sellar — es el corazón del flujo con repo.

### Díselo a la IA

> "Voy a usar [Claude Code/Cursor] en mi repositorio de [negocio real]. Antes de empezar: explícame la estructura del proyecto en 3 líneas por archivo. Después te iré pidiendo cambios de UNO en uno; en cada uno muéstrame el diff antes de cualquier commit, propón el mensaje con Conventional Commits y no hagas push a main sin mi permiso."

### Ejercicios

1. **[opción múltiple]** ¿Qué tienen en común Claude Code y Cursor?
   - a) Son los únicos editores de texto que existen
   - b) **Trabajan sobre tu repositorio completo: leen tus archivos, tu historial y tu estado de Git** ✔
   - c) No soportan HTML
   - d) Reemplazan a GitHub

2. **[completar]** "El flujo con repositorio hace a la IA más ____ (porque no adivina el contexto, C15) y a la vez más ____ (porque puede tocar más de lo que pediste)."
   - Banco: `útil` · `peligrosa` · `lenta` · `barata`
   - Respuesta: útil / peligrosa

3. **[relacionar]** Une la regla de oro con su motivo:
   - Estado limpio antes de cada tarea ↔ Distinguir lo que ella hizo de lo que ya estaba (C10)
   - Pedidos atómicos ↔ Un tema por commit, diffs chicos que revisas (C9)
   - Revisar el diff después de cada cambio ↔ La velocidad no sustituye la revisión (C13)
   - Rama para lo experimental ↔ No dejar que commitee directo a `main` sin tu OK (C10)

4. **[ordenar]** Acomoda tu primera sesión con herramienta de repo:
   - Desordenado: `revisar el diff de lo que cambió` · `abrir el proyecto (C18) en Claude Code o Cursor` · `pedir UNA mejora pequeña` · `decidir quién commitea`
   - Respuesta: abrir el proyecto (C18) en Claude Code o Cursor → pedir UNA mejora pequeña → revisar el diff de lo que cambió → decidir quién commitea

5. **[qué hace]** La IA de tu editor propone un refactor grande de tu `styles.css` y dice: "puedo hacerlo en una rama". ¿Cómo respondes?
   - a) "Déjalo en `main`, es más rápido."
   - b) **"Acepta, en una rama (C10), como cambio atómico (C9); después reviso el diff (C13) antes de fusionar."** ✔
   - c) "Borra el repo y vuelve a empezar."
   - d) "Acepta y haz push directo a `main` sin revisar."

---

## C23 — PRÁCTICA: dejar que una IA trabaje sobre tu repo

### Concepto

La C22 fue la entrada: hoy es la práctica real. Le das autonomía a una IA sobre tu repositorio: ella lee el proyecto, crea la rama, edita y hace commits — y tú revisas al final. La diferencia con C19 es el reparto: antes tú hacías el ciclo completo (pedir, probar, commitear); ahora delegas la ejecución y conservas la dirección.

Las condiciones para delegar son todo lo que ya aprendiste: estado limpio (C10), rama propia (C10/C19), y un encargo completo — el brief de C15 o el Issue de C17 con restricciones y criterio de aceptación. Si falta una, no delegues: la autonomía sin guardarraíl es la forma más rápida de romper un repo.

Cómo se ve la sesión: le das el encargo, ella crea la rama, hace commits atómicos con Conventional Commits (C5), no toca `main`, y al terminar te resume qué hizo y qué archivos cambió. Tú no estás mirando cada minuto: estás definiendo el encargo y preparando la revisión final (C24). Ese es el trabajo de dirección.

La prueba de fuego: al terminar, la IA debe decirte exactamente qué cambió y mostrarte el diff. Si se salió del encargo, lo regresas (C13); si inventó datos, lo corriges. La autonomía no mueve el poder: la revisión sigue siendo tuya. Delegas el trabajo, no la decisión.

Regla de oro de la sesión: una tarea por sesión. No le encargues "arregla todo el sitio": encárgale una sección, un Issue, un cambio atómico (C9). La autonomía multiplica la velocidad de ejecución y también multiplica el daño si el encargo es borroso.

### Analogía

Es contratar al maestro albañil para remodelar el cuarto de atrás. Le das el plano (el brief), las llaves de la bodega (el repo) y te retiras. Trabaja solo, toma sus decisiones dentro del plan, y te avisa cuando termina. No estás encima de él en cada ladrillo — pero no pagas ni aceptas la obra (no haces merge) sin inspeccionar el resultado. Si tapó una ventana que no iba, lo regresas a arreglarla antes de firmar. El maestro ejecuta; tú apruebas.

### Cómo se ve en la práctica

```
Claude Code, sobre tu proyecto de Tortas El Güero:

TÚ: "Implementa el Issue #5 (sección de precios). Crea la rama
     feature/precios desde main, usa los datos de datos.txt,
     trabaja SOLO en index.html (styles.css solo si hace falta).
     No hagas push a main. Haz commits con Conventional Commits.
     Al terminar, resúmeme qué hiciste y qué archivos tocaste."

IA:  [crea la rama, edita, commitea]
     git switch -c feature/precios
     feat: agregar sección de precios

     Resumen:
     - Creé la rama feature/precios desde main.
     - Agregué la sección "Precios" con los 5 productos de
       datos.txt, entre el hero y el contacto.
     - 1 commit: feat: agregar sección de precios.
     - No toqué main ni otros archivos.

TÚ:  git switch feature/precios
     git diff main...feature/precios    ← revisión (C24)
     [pruebas en el navegador] → si está bien, push + PR (C12)
```

Fíjate que la autonomía es la parte pequeña de la sesión: el encargo, las restricciones y la revisión son el trabajo de dirección. La IA ejecutó; tú definiste y decides si entra a `main`.

### Díselo a la IA

> "Voy a dejarte trabajar con autonomía en mi repositorio. Este es el encargo: [Issue #5]. Crea la rama feature/precios desde main, usa los datos reales de datos.txt, no inventes nada, no toques main, haz commits con Conventional Commits, y al terminar dame un resumen de qué cambiaste y en qué archivos. Antes de cerrar cada commit, muéstrame el diff."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la diferencia entre C19 y C23?
   - a) **En C23 la IA también crea la rama y hace commits; tú revisas al final** ✔
   - b) En C23 ya no se usan ramas
   - c) En C23 la IA trabaja sin encargo ni brief
   - d) En C23 tú haces todos los commits a mano

2. **[ordenar]** Acomoda una sesión delegada:
   - Desordenado: `dar el encargo con brief o Issue (C15)` · `revisar el diff y probar (C24)` · `estado limpio en main (C10)` · `pedirle que cree la rama feature/...`
   - Respuesta: estado limpio en main (C10) → pedirle que cree la rama feature/... → dar el encargo con brief o Issue (C15) → revisar el diff y probar (C24)

3. **[completar]** "Delegas la ejecución pero conservas la ____: defines el encargo (C15), pones las ____ y al final ____ el resultado (C24)."
   - Banco: `dirección` · `restricciones` · `revisas` · `olvidas`
   - Respuesta: dirección / restricciones / revisas

4. **[verdadero/falso]** "Cuando delegas una tarea a una IA ejecutora, tu trabajo es esperar a que termine sin involucrarte."
   - Respuesta: FALSO — delegas la ejecución, no la dirección: defines el encargo, las restricciones y revisas el resultado (C24) antes de aceptar nada.

5. **[qué hace]** La IA te anuncia: "Hice el Issue #5 y además dejé el código más limpio: refactoricé todo styles.css y actualicé el README." ¿Qué haces?
   - a) Le agradeces y apruebas todo
   - b) **La regresas: se salió del encargo atómico; revisas qué tocó de más antes de aceptar nada (C13)** ✔
   - c) Borras el repo y empiezas de nuevo
   - d) Le pides que refactorice también el resto

---

## C24 — Revisar el trabajo de una IA ejecutora

### Concepto

La IA trabajó sola (C23): dejó commits en su rama. Ahora tu revisión cambia de forma: ya no revisas un cambio, revisas un trabajo completo. Es el momento en que se paga el boleto de la delegación. La velocidad que ganas al delegar se paga con auditoría — quien no revisa no está dirigiendo, está apostando.

Tu caja de herramientas de auditoría son cuatro cosas que ya conoces: `git log --oneline` (los commits que hizo y sus mensajes, C10), `git diff main...rama` (todo lo que separa la rama de main), la pestaña **Files changed** del PR (C13) y `git show <hash>` (el detalle de un commit puntual). Cuatro herramientas; ahora las usas como revisor, no como autor.

La checklist de C13 aplica, ampliada: (1) ¿cada commit corresponde al encargo? (2) ¿tocó archivos fuera del brief? (3) ¿inventó datos? (4) ¿entró algún secreto (C25)? (5) ¿los mensajes son honestos con su propio diff? La regla no cambia: si no entiendes un commit, no lo apruebas.

La regla del zoom: primero el resumen (`git log`), después el todo (`git diff main...rama`), y por último el detalle (`git show` del commit que te genere duda). De afuera hacia adentro. No relees 40 líneas de corrido: lees el mapa y entras a fondo solo donde haya dudas. Así se lee trabajo ajeno en minutos, no en horas.

La consecuencia honesta: a mayor autonomía que diste, mayor responsabilidad de revisión. Si no quieres revisar, no delegues (C21, Modo 1). La revisión no es desconfianza: es el trabajo que justifica tu sueldo como director del proyecto.

### Analogía

Es inspeccionar la obra terminada del albañil con tu plano en la mano, cuarto por cuarto. No revisas cada ladrillo: confirmas que el cuarto que pediste existe (`git log`), que no movió la pared que no debía (`git diff`), y entras a revisar a fondo solo las esquinas que te generan duda (`git show`). Firmas la obra cuando cada renglón de tu lista está cubierto — y si algo no cuadra, no firmas: lo regresas.

### Cómo se ve en la práctica

```
# La IA terminó su rama. Auditas:

$ git switch feature/precios

$ git log --oneline
8a1b2c3 feat: agregar sección de precios
7b2e4f0 style: ajustar contraste de los precios   ← ¿por qué 2 commits?

$ git diff main...feature/precios   ← todo lo que separa la rama de main
# [se ve limpio: solo toca index.html y styles.css, nada más]

$ git show 7b2e4f0   ← el commit que no entendías por qué existía
# Resultado: ajustó el contraste para que los precios se lean en móvil.
# Razonable: era parte del criterio "que se vea bien" del Issue. Apruebas.

$ git push -u origin feature/precios → PR → revisión (C13) → merge (C12)
```

La auditoría te llevó dos minutos y te evitó fusionar un cambio que no entendías. Ese zoom — resumen, todo, detalle — es la forma profesional de leer trabajo ajeno. Ahí se detecta la diferencia entre lo que la IA dice que hizo y lo que realmente hizo (C21).

### Díselo a la IA

> "Una IA ejecutora terminó la rama feature/precios de mi repo y voy a auditar su trabajo antes del PR. Estos son los commits que hizo: [pega la salida de git log]. Revísalos uno por uno contra este encargo: [Issue #5]. Dime si algún commit se sale del encargo, si ves algo inventado o fuera de lugar, y qué debo verificar con git show antes de fusionar."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el orden correcto del "zoom" de revisión?
   - a) `git show` → `git log` → `git diff`
   - b) **`git log` (resumen) → `git diff main...rama` (todo) → `git show` (detalle donde haya dudas)** ✔
   - c) `git diff` → `git show` → `git log`
   - d) Solo la pestaña Files changed, sin más

2. **[completar]** "A mayor ____ que diste a la IA, mayor ____ requiere su trabajo (C13). Si no quieres revisar, no ____ (C21)."
   - Banco: `autonomía` · `revisión` · `delegues` · `corras`
   - Respuesta: autonomía / revisión / delegues

3. **[relacionar]** Une la herramienta con lo que responde:
   - `git log --oneline` ↔ Cuántos commits hizo y con qué mensajes
   - `git diff main...feature/precios` ↔ Todo lo que separa la rama de main
   - `git show <hash>` ↔ El detalle de un commit puntual
   - Files changed del PR ↔ La vista del diff en GitHub (C13)

4. **[verdadero/falso]** "Revisar el trabajo de una IA ejecutora significa leer el diff completo línea por línea, sin atajos."
   - Respuesta: FALSO — se lee con zoom: resumen (log), vista completa (diff) y detalle solo donde haya dudas (show). Leer todo a ciegas es ruido, no revisión.

5. **[qué hace]** En `git log` ves 3 commits de la rama: uno del Issue #5, otro que "limpia styles.css" y otro que "actualiza el README". ¿Qué haces?
   - a) Apruebas: entre más commits, mejor
   - b) **Cuestionas los dos de más: el encargo era atómico (C9); revisas si estaban justificados o si la IA se salió del brief (C13)** ✔
   - c) Borras la rama y vuelves a delegar
   - d) Pides un cuarto commit para compensar

---

## C25 — Seguridad: qué nunca le compartes a una IA

### Concepto

La regla de oro: **la IA no necesita tu información personal; necesita tu código y tu encargo.** Cada cosa que le pegas — en un prompt, en un archivo, en un repo — sale de tu control. Tus chats se guardan, se indexan, se usan para entrenar y se comparten con equipos. No decides tú qué pasa con lo que escribiste después de mandarlo. Esa es la premisa; todo lo demás se deriva.

Lo que NUNCA le pegas a una IA: contraseñas, tokens y llaves de API (B28), el contenido de un `.env`, credenciales de bases de datos, números de tarjeta y datos bancarios, tu CURP, tu INE y documentos personales, y datos de clientes o pacientes. Y una regla que casi nadie recuerda: si el archivo que vas a pegar contiene un secreto adentro (una URL de API con llave, un archivo de configuración con contraseña), lo limpias ANTES de pegarlo. No "por si acaso": siempre.

Subir secretos a GitHub es la misma fuga, en otro formato: cualquiera puede clonar tu repo y cualquier IA puede leerlo. Ya lo viste en C3: el `.env` va al `.gitignore`. Y ojo con la trampa del borrado: **si un secreto entró a un commit, queda en el historial para siempre** — borrar el archivo después no basta. Por eso el momento de proteger es antes del primer commit, no después.

La regla de lo mínimo necesario: compartes solo lo que la tarea necesita. ¿La IA necesita tu contraseña para maquetar el sitio? No. ¿Necesita el número de WhatsApp del negocio para el botón? Sí, y ese número es público de todos modos. Distingue entre información pública del negocio (dirección, teléfono, precios) y credenciales (llaves, tokens, contraseñas). Las primeras se comparten; las segundas, jamás.

Higiene en tres pasos: (1) revisa antes de pegar — ¿qué contiene este texto? (2) reemplaza los secretos por marcadores como `API_KEY_AQUI` antes de pegarlos; (3) si algo te da duda, no lo pegues. La duda es la respuesta. Ese hábito de dos segundos evita el error más caro de tu carrera.

### Analogía

Contratas a un ayudante muy capaz — y muy conversador. Le das las llaves del local para que trabaje (el repo), pero no le das la combinación de la caja fuerte, ni tus tarjetas, ni los documentos de los clientes. No es desconfianza: es que nada de eso lo necesita para hacer su trabajo, y una vez que se lo cuentas, no puedes des-contárselo. La llave del local, sí; la caja fuerte, no.

### Cómo se ve en la práctica

```
# MAL — pegar el archivo con la llave adentro:

TÚ: "Aquí está mi .env para que veas cómo está configurado:
     API_KEY=sk-6f2b9c1d4e8a7f3b0c5d2e6a9f8b1c4d..."   ← NUNCA
     SECRET=3f7a9b2c4d6e8f1a3b5c7d9e0f2a4b6c8d..."      ← NUNCA

# BIEN — el secreto se queda fuera del prompt:

TÚ: "En mi archivo .env tengo la variable API_KEY. Para el widget
     usa esa variable; en el código deja la referencia a API_KEY.
     Nunca pongas la llave en el código ni en un commit. Si necesitas
     probar, dime qué debo correr yo para darte el valor solo si es
     indispensable."

# Y en Git:
# .gitignore contiene .env desde el día uno (C3)
# git status nunca muestra secretos
```

Nota la diferencia: la IA puede trabajar sin ver la llave — solo necesita saber que existe y cómo referenciarla. En Git la regla es más estricta aún: lo que entra a un commit entra al historial para siempre (C3). Higiene simple: secretos nunca en prompts, nunca en archivos del repo, nunca en commits.

### Díselo a la IA

> "Voy a pedirte ayuda con un proyecto que usa credenciales y API keys. Antes de pegar nada, dime: ¿qué partes de mi proyecto NO debo compartir contigo? ¿Cómo represento las variables secretas en el código para no exponerlas? Y dame tu checklist para revisar antes de subir cualquier archivo a GitHub."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estas cosas SÍ puedes pegarle a la IA con tranquilidad?
   - a) Tu contraseña de Gmail
   - b) El token de tu cuenta de GitHub (B28)
   - c) **El número de WhatsApp del negocio, que es público y va en el sitio** ✔
   - d) El `.env` con las llaves de API

2. **[completar]** "Una vez que un secreto entra a un ____, queda en el ____ para siempre (C3): ____ después no basta."
   - Banco: `commit` · `historial` · `borrarlo` · `pedirlo`
   - Respuesta: commit / historial / borrarlo

3. **[verdadero/falso]** "Pegarle mi contraseña a la IA en un chat privado es seguro porque nadie más la ve."
   - Respuesta: FALSO — lo que pegas sale de tu control (los chats se guardan, se indexan y se comparten); los secretos solo viven donde deben: en tu configuración, protegidos (C25).

4. **[relacionar]** Une la práctica con su porqué:
   - Revisar antes de pegar ↔ Saber qué contiene el texto que compartes
   - Reemplazar secretos por marcadores ↔ La IA trabaja sin ver la llave
   - `.env` en `.gitignore` y fuera de commits ↔ Lo que entra al historial queda para siempre (C3)
   - Si te da duda, no lo pegues ↔ La duda es la respuesta

5. **[qué hace]** La IA te pide: "Pégame tu `.env` para revisar la configuración." ¿Qué haces?
   - a) Se lo pegas: lo pidió la herramienta
   - b) **Le preguntas qué necesita ver exactamente; si no requiere las llaves, le das el esquema con marcadores y los secretos se quedan contigo** ✔
   - c) Se lo mandas por un chat "más seguro"
   - d) Lo subes a GitHub y le pasas el enlace

---

## C26 — PRÁCTICA: limpiar tu repo antes de mostrarlo

### Concepto

Tu repo ya tiene la función completa (C23–C24). Antes de mostrarlo — a un cliente, a un reclutador, al proyecto final (C30) — lo limpias. La limpieza no es remodelar: es que lo que ya está se vea intencional. Nadie lee tu código antes de formarse una opinión: la opinión se forma con lo que se ve, y eso se limpia en minutos.

La checklist de limpieza: (1) `git status` en limpio — nada sin commitear; (2) archivos: sin restos de trabajo — `test.html`, copias con `final`, carpetas "nueva", basura del sistema (C3); (3) `.gitignore` correcto y sin secretos rastreados (C25); (4) README actualizado con captura y URL del sitio vivo (C14); (5) ramas de feature mergeadas y borradas (C12); (6) mensajes de commit coherentes — los mensajes "cambios" se quedan en tu historial como tatuajes.

El orden práctico: primero borras la basura y commiteas la limpieza (`chore: quitar archivos de prueba`); después actualizas README y captura (`docs: actualizar portada`); al final revisas el historial con `git log` y, si hay mensajes vergonzosos, decides con calma si vale la pena arreglarlos (C11) o dejarlos — una historia honesta también vende, y un repo no se vuelve profesional borrando su pasado.

La prueba final: mira tu repo como lo vería un desconocido. Abre el repo en una pestaña de incógnito, sin tu sesión. ¿Se entiende qué es? ¿El README vende? ¿El sitio publicado funciona? ¿Algún nombre de archivo delata desorden? Esa mirada de cliente es el último filtro — y es la misma que aplicará el evaluador del proyecto final.

Limpiar también es normalizar: nada de `mi-pagina-final-2`. Nombres claros, estructura simple y documentada (C16), y un solo lugar para cada cosa. Un repo limpio comunica que sabes lo que haces antes de que lean una línea de código — y lo hace en los primeros diez segundos.

### Analogía

Es barrer el local antes de que llegue el cliente. No remodelas la cocina: ordenas el mostrador, quitas las cajas vacías del pasillo, pones el letrero derecho y el menú al frente. El local es el mismo de ayer — pero ahora comunica negocio, no bodega. El cliente no entró a la cocina: entró a un lugar que se ve intencional. Tu repo es ese local.

### Cómo se ve en la práctica

```
$ git status                      # 1. ¿algo sin commitear?
nothing to commit, working tree clean

$ ls                              # 2. ¿restos de trabajo?
index.html  styles.css  README.md  img/  test.html   ← basura
$ git rm test.html
$ git commit -m "chore: quitar archivo de prueba"

$ git log --oneline               # 3. mensajes: ¿comunican? (C5)
8a1b2c3 feat: agregar sección de precios
e4f5a6b cambios                    ← tatuaje del pasado
c7d8e9f feat: esqueleto del sitio

# 4. README actualizado + captura nueva → git add, commit:
$ git commit -m "docs: actualizar captura y descripción"

$ git branch                       # 5. ramas vivas: ¿cuáles deben existir?
* main                             # perfecto: solo main
```

Cada renglón de la checklist es un mensaje al que mira: "soy cuidadoso", "sé lo que estoy haciendo". El historial de commits es público — es tu expediente. Un repo limpio se nota en los primeros diez segundos, y un repo sucio también.

### Díselo a la IA

> "Voy a mostrar mi repositorio [URL] como mi carta de presentación. Audítalo con ojos de cliente: revisa el README, los nombres de archivos, los mensajes de commit y la estructura. Dime exactamente qué haría que un desconocido lo cierre en 10 segundos, y qué hay que limpiar o mejorar antes de mostrarlo. Prioriza la lista."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estos archivos delata un repo sucio?
   - a) `index.html`
   - b) **`test-final-2.html`** ✔
   - c) `styles.css`
   - d) `README.md`

2. **[completar]** "La limpieza no es remodelar: es que lo que ya ____ se vea ____. Cada renglón de la checklist es un mensaje al que ____."
   - Banco: `está` · `intencional` · `mira` · `cocina`
   - Respuesta: está / intencional / mira

3. **[ordenar]** Acomoda la sesión de limpieza:
   - Desordenado: `actualizar README y captura` · `ver el repo como cliente (incógnito)` · `quitar archivos de prueba y commitear` · `revisar mensajes de commit`
   - Respuesta: quitar archivos de prueba y commitear → actualizar README y captura → revisar mensajes de commit → ver el repo como cliente (incógnito)

4. **[verdadero/falso]** "Un mensaje de commit vergonzoso del pasado ('cambios') se arregla solo, sin esfuerzo, y deja de verse."
   - Respuesta: FALSO — el historial queda; puedes revertirlo/resetearlo con cuidado (C11) o dejarlo como historia honesta, pero no desaparece solo.

5. **[qué hace]** Tu repo tiene una carpeta `copia-segura` con versiones de `index.html` (`index_final.html`, `index_2.html`). ¿Qué haces?
   - a) La dejas: documenta tu progreso
   - b) **La borras: Git ya guarda el historial (C1); esas copias manuales son basura del sistema pre-Git que confunden** ✔
   - c) La subes a GitHub aparte
   - d) La renombras a `archivo`

---

## C27 — Tu portafolio: 3 proyectos que demuestran nivel

### Concepto

Tu perfil de GitHub (C6) es tu portafolio profesional (B2, B29). La lección de hoy: no muestras todo — eliges. Tres proyectos bien presentados ganan contra treinta carpetas a medias. Menos, pero con nivel. La cantidad no es una señal de calidad; es un ruido que tapa lo que sí vale.

Los 3 que demuestran nivel en tu caso: (1) **el sitio del negocio real** (C18–C26): prueba que construyes algo con datos reales y con el flujo completo encima — ramas, PRs, Pages. Es tu pieza principal. (2) **tu página personal del Mes 1**: prueba quién eres y que construyes desde cero. (3) **un proyecto libre** que muestre la habilidad que quieras destacar: una página con interacción (JS), una mini-herramienta, un diseño del que estés orgulloso. Aquí experimentas (C1) sin la presión del negocio real.

Qué hace cada repo "demostrar nivel": README que vende (C14), sitio publicado y funcionando (C8), historial limpio (C26), ramas de feature mergeadas vía PR (C12) y datos reales donde los haya (C18). Un reclutador o un cliente no lee tu código primero: mira tu README, abre tu sitio y hojea tus commits. Ahí está tu nivel — no en la cantidad de repos.

Tu perfil como vitrina: bio que dice qué haces (C6), fija (pin) los 3 proyectos con el botón **Pinned** de GitHub, y en cada README enlaza a los otros dos. El recorrido del visitante: perfil → repo → README → sitio vivo → vuelve a leerte. Ese recorrido lo construyes tú, y cada eslabón debe invitar al siguiente.

El criterio de selección: cada proyecto debe responder "¿qué demuestra?". Si uno no tiene respuesta, no está listo para la vitrina — trabájalo o déjalo fuera. No necesitas producir más: los proyectos del Mes 1 y del Mes 2 te dan más que suficiente. Lo que falta es presentación, no producción.

### Analogía

Es la vitrina de la plaza con 3 piezas. No pones 30 figuras amontonadas — nadie ve ninguna; pones 3, cada una con su etiqueta clara y una luz encima. El que pasa decide en segundos si entra. Tu portafolio es esa vitrina: 3 piezas que se explican solas y cada una invita a mirar la siguiente.

### Cómo se ve en la práctica

```
Tu perfil (rayflores):

Bio:  Construyo sitios web dirigiendo IA. Tortas El Güero,
      mi sitio de un negocio real, vive aquí.

Pinned:
  1. tortas-el-guero     ← el negocio real (C18): README que vende,
                            sitio publicado, historial de ramas/PRs.
  2. mi-primera-pagina   ← tu página personal del Mes 1: quién eres.
  3. (proyecto libre)    ← el que muestre la habilidad que quieras
                            destacar (JS, diseño, herramientas).

Cada README enlaza a los otros dos. El recorrido:
perfil → repo → README → sitio vivo → regresa a leerte.
```

Los tres cuentan una historia: "empecé desde cero (2), construí un negocio real con el flujo completo (1) y me gusta experimentar (3)". Eso es un perfil con nivel — no una lista de tareas.

### Díselo a la IA

> "Esta es mi lista de proyectos en GitHub: [lista con URLs]. Ayúdame a elegir los 3 para fijar en mi perfil según lo que quiero comunicar: [soy alguien que construye sitios web dirigiendo IA y que trabaja con un flujo profesional de Git]. Para cada uno escríbeme: qué demuestra, qué debería decir su README en una línea y qué falta pulir antes de fijarlo."

### Ejercicios

1. **[opción múltiple]** ¿Cuántos proyectos se fijan (pin) en la estrategia de C27 y por qué?
   - a) Todos los que tengas, para mostrar variedad
   - b) **3, porque cada uno demuestra algo específico; pocos, bien presentados, ganan** ✔
   - c) Solo 1, el más reciente
   - d) Ninguno: el perfil se explica solo

2. **[completar]** "Un visitante no lee tu ____ primero: mira tu ____, abre tu sitio ____ y hojea tus ____ (C26)."
   - Banco: `código` · `README` · `publicado` · `commits`
   - Respuesta: código / README / publicado / commits

3. **[relacionar]** Une el proyecto con lo que demuestra:
   - Sitio del negocio real ↔ El flujo completo: datos reales, ramas, PRs, Pages (C18)
   - Página personal del Mes 1 ↔ Que construyes desde cero; quién eres
   - Proyecto libre con una habilidad destacada ↔ Que experimentas y vas más allá del encargo (C1)
   - README + sitio publicado en cada repo ↔ La presentación profesional (C14)

4. **[verdadero/falso]** "Para que tu portafolio se vea lleno, conviene subir todos los ejercicios que has hecho, aunque estén a medias."
   - Respuesta: FALSO — menos pero con nivel: 3 proyectos presentados ganan contra 30 carpetas; lo que no demuestra algo claro no va a la vitrina (C27).

5. **[qué hace]** Te preguntan en una entrevista: "¿Qué proyecto te representa y por qué?" ¿Cómo respondes?
   - a) "El más difícil técnicamente, aunque no está publicado"
   - b) **"El sitio del negocio real: con datos reales, publicado y con historial profesional — demuestra el flujo completo que sé dirigir"** ✔
   - c) "Todos, igual que cualquier candidato"
   - d) "Ninguno: todo lo hizo la IA"

---

## C28 — Cómo se ve un repo profesional vs uno de principiante

### Concepto

Ya sabes qué hace profesional a un repo (C14, C26, C27). Ahora lo ves en comparación directa: dos repos, el mismo tipo de proyecto, y las diferencias saltan en diez segundos. Aprender a detectarlas en repos ajenos es aprender a producirlas en los tuyos. La mirada del revisor se entrena igual que la del autor.

El repo de principiante: README genérico o inexistente ("Mi primer proyecto", sin captura ni URL), mensajes de commit como `cambios`, `update`, `final`, archivos como `index_final2.html`, todo amontonado en `main` sin ramas ni PRs, archivos de prueba y basura rastreando, un `.env` o secretos expuestos, y nada publicado. No es falta de código: es falta de comunicación.

El repo profesional: README que dice qué es, para quién y cómo correrlo, con captura y enlace al sitio vivo (C14); commits atómicos con mensajes claros (C5, C9); ramas de feature mergeadas vía PR (C12); `.gitignore` correcto y sin secretos (C3, C25); estructura ordenada y documentada (C16); historial que cuenta una historia (C26). Cada detalle es una decisión visible.

La mirada del revisor: un reclutador o un cliente forma su opinión en segundos y en este orden — README → sitio vivo → commits → archivos. Si el README no vende, quizá ni abra el código. Tu nivel se lee en la vitrina antes que en la mercancía; el código es lo último que mira alguien que apenas te conoce.

La buena noticia: entre el repo de principiante y el profesional no hay talento — hay hábitos, y son exactamente los que has practicado todo el mes. El mismo proyecto con y sin estos hábitos es la diferencia entre "carpeta subida a GitHub" y "proyecto de software". Y pasar de un lado al otro no requiere reescribir código: requiere aplicar el flujo (C29).

### Analogía

Son dos puestos de comida al lado del otro, con el mismo menú. Uno: letrero torcido sin precios a la vista, trastes amontonados, y el cliente no sabe qué vende. El otro: letrero claro, menú con precios, mostrador limpio y una foto del platillo. La receta puede ser idéntica — la confianza que genera no tiene comparación. Tu repo es tu puesto, y la calle decide en diez segundos.

### Cómo se ve en la práctica

```
REPO DE PRINCIPIANTE:
  Mi-Pagina-Web/
    index_final.html
    index_final2.html
    estilo.css
    test.html
    .env                ← ¡expuesto!
  Commits: "cambios", "update", "final", "asdf"
  Sin README. Sin ramas. Sin PRs. Sin publicar.

REPO PROFESIONAL:
  tortas-el-guero/
    index.html
    styles.css
    README.md           ← qué es, captura, URL del sitio
    img/captura.png
    .gitignore          ← .env dentro, sin rastrear
  Commits: feat:/fix:/style:/docs:/chore: atómicos (C5)
  Rama feature/precios mergeada vía PR (C12). Pages publicado (C8).
```

Los dos hacen lo mismo — una página — pero uno comunica y el otro esconde. La lista del lado derecho no se logra con un truco: se logra con el ciclo completo que ya dominas (C29). Entre ambos lados están todos tus hábitos del mes.

### Díselo a la IA

> "Muéstrame mi repositorio [URL] como lo vería un reclutador en 10 segundos: dime qué delata que soy principiante (README, commits, archivos, estructura, secretos) y qué debo cambiar para que comunique nivel profesional. Hazme una lista priorizada, cada punto con el cambio exacto."

### Ejercicios

1. **[opción múltiple]** ¿Cuál de estas señales delata a un repo de principiante?
   - a) README con captura y URL del sitio
   - b) **Un archivo `index_final2.html` junto a `test.html`** ✔
   - c) Commits atómicos con prefijos (C5)
   - d) Una rama mergeada vía PR

2. **[completar]** "Un revisor forma su opinión en segundos y en este orden: ____ → ____ → ____ → archivos (C14, C26)."
   - Banco: `README` · `sitio vivo` · `commits` · `contraseñas`
   - Respuesta: README / sitio vivo / commits

3. **[relacionar]** Une la señal con su tipo:
   - "cambios" como mensaje de commit ↔ Principiante
   - Rama mergeada vía PR con revisión ↔ Profesional (C12, C13)
   - `.env` visible en el repo ↔ Principiante y peligroso (C25)
   - README que vende con captura y URL ↔ Profesional (C14)

4. **[verdadero/falso]** "La diferencia entre un repo de principiante y uno profesional es la cantidad de código: los profesionales escriben más líneas."
   - Respuesta: FALSO — la diferencia son los hábitos de comunicación (README, commits, ramas, .gitignore, limpieza), no la cantidad de código.

5. **[qué hace]** Te piden "muestra tu GitHub" en una entrevista. Minutos antes, ¿qué revisas de cada repo que vas a enseñar?
   - a) Solo que compile sin errores
   - b) **README, sitio publicado funcionando, historial limpio y sin secretos — la vitrina de C28** ✔
   - c) Nada: el reclutador ya lo vio
   - d) El número de estrellas

---

## C29 — Tu flujo de trabajo completo, de idea a publicación

### Concepto

Este es el día que juntas todo el mes en un solo sistema: de idea a publicación. Lo que eran lecciones sueltas — Issue, rama, brief, IA, prueba, commit, PR, merge, Pages, limpieza — ahora es un flujo único que repites para cualquier función nueva. Es tu manera de trabajar, no una lista de pendientes.

El flujo de una función: (1) **IDEA** → la escribes como Issue con criterio de aceptación (C17); (2) **RAMA** → partes de `main` actualizado (C19) y creas `feature/...` (C10); (3) **ENCARGO** → le pasas el brief a la IA, con datos reales y restricciones (C15, C18); (4) **EJECUCIÓN** → la IA trabaja en su rama (C23); (5) **PRUEBA** → tú abres el sitio y verificas (C9); (6) **REVISIÓN** → auditas commits y diff (C24) en el PR (C13); (7) **MERGE** → fusionas y cierras el Issue con `Closes` (C12, C17); (8) **PUBLICACIÓN** → Pages actualiza el sitio solo (C8); (9) **LIMPIEZA** → repo presentable en todo momento (C26). Y repetir.

Las tres constantes que lo sostienen: `main` siempre estable (C10); cambios atómicos (C9); tu revisión como filtro final (C13, C24). Si algo del flujo te hace ruido, el problema no es el flujo: es que te saltaste una constante. Cuando un paso se siente inútil, suele ser porque el anterior se hizo mal.

La velocidad aparece sola. Al principio cada función te cuesta; al repetir el flujo, los pasos se vuelven reflejos y tu tiempo va a la decisión, no al teclear. Eso es dirigir software: el flujo es el vehículo y tus decisiones el conductor. El mes empezó con esa promesa (C1) y hoy la cumples.

Y recuerda el beneficio que abrió el mes: con el flujo, experimentas sin miedo. Cada función nueva es un ciclo completo con red de seguridad — y al final del día tu sitio crece, tu historial lo cuenta y tu portafolio sube de nivel (C27).

### Analogía

Es la receta completa del restaurante, del mercado a la mesa. No es un plato: es la cadena — comprar, preparar, probar, servir y anotar en el recetario. El restaurante funciona porque la cadena se repite igual cada día, sin improvisar un eslabón. Tú ya tienes la cadena; hoy la escribiste completa, y de aquí en adelante cualquier platillo nuevo entra por el mismo tubo.

### Cómo se ve en la práctica

```
UNA FUNCIÓN NUEVA, DE IDEA A PUBLICACIÓN:

IDEA      → Issue #7: "Agregar sección de horarios con los datos
            reales del negocio." (C17)
RAMA      → git switch main && git pull (C19)
            git switch -c feature/horarios (C10)
ENCARGO   → pegas Issue #7 + datos.txt a la IA (C15)
EJECUCIÓN → la IA trabaja en su rama, commits atómicos (C23)
PRUEBA    → abres el sitio en el navegador (C9)
REVISIÓN  → git log + git diff + git show (C24) + PR (C13)
MERGE     → Merge pull request + Delete branch (C12)
            "Closes #7" en el PR (C17)
PUBLICACIÓN → Pages actualiza el sitio solo (C8)
LIMPIEZA  → repo presentable en todo momento (C26)
```

De la idea al sitio publicado sin inventar un solo eslabón. Ese flujo es tu firma de trabajo: cualquier cosa que quieras construir — ahora y en los próximos meses — entra por ese tubo. Domínalo y ningún proyecto te queda grande.

### Díselo a la IA

> "Voy a estandarizar mi forma de trabajar: cada función nueva va por un flujo de idea a publicación (Issue → rama → brief → IA → prueba → revisión → PR → merge → Pages). Escríbeme una checklist para pegar en cada sesión de trabajo, y dime qué parte del flujo suele saltarse un principiante para que yo la verifique siempre."

### Ejercicios

1. **[ordenar]** Acomoda el flujo de idea a publicación:
   - Desordenado: `merge del PR y cierre del Issue` · `escribir el Issue (C17)` · `la IA ejecuta en la rama (C23)` · `crear la rama feature/... (C10)` · `revisar el diff y probar (C24, C9)`
   - Respuesta: escribir el Issue (C17) → crear la rama feature/... (C10) → la IA ejecuta en la rama (C23) → revisar el diff y probar (C24, C9) → merge del PR y cierre del Issue

2. **[opción múltiple]** ¿Cuáles son las tres constantes que sostienen el flujo de C29?
   - a) Velocidad, cantidad y estrellas
   - b) **`main` siempre estable (C10), cambios atómicos (C9) y tu revisión como filtro final (C13)** ✔
   - c) Poder, ramas y PRs
   - d) Issues, labels y milestones

3. **[completar]** "Si algo del flujo te hace ruido, el problema no es el flujo: es que te ____ una constante — `main` estable (C10), cambios ____ (C9) o tu ____ como filtro final (C13)."
   - Banco: `saltaste` · `atómicos` · `revisión` · `peinaste`
   - Respuesta: saltaste / atómicos / revisión

4. **[relacionar]** Une la etapa del flujo con su lección:
   - Idea → C17 (Issue con criterio de aceptación)
   - Rama → C10 y C19 (partir de main actualizado)
   - Encargo → C15 (brief) + C18 (datos reales)
   - Revisión → C24 y C13 (auditoría antes del merge)
   - Publicación → C8 (Pages actualiza solo)

5. **[qué hace]** Terminas una función: todo probado, mergeado y publicado. ¿Cuál es el siguiente paso del flujo?
   - a) **Empezar la siguiente idea con el mismo ciclo (C29)** ✔
   - b) Tomar un descanso permanente
   - c) Borrar el historial para empezar limpio
   - d) Publicar sin revisar para ir más rápido

---

## C30 — Repaso + arranque del proyecto final del mes

### Concepto

Repaso de la Materia C: empezaste entendiendo por qué versionar te hace atrevido (C1), instalaste Git (C2), convertiste tu página en repo (C3–C4), escribiste commits que comunican (C5), abriste tu perfil (C6), subiste (C7) y publicaste (C8). Siguió el flujo diario pedir → probar → commitear (C9), ramas (C10), deshacer con calma (C11), PRs (C12), revisión de auditor (C13), README que vende (C14), briefs (C15), documentar (C16), Issues (C17), el negocio real (C18), iterar en ramas (C19), conflictos (C20), herramientas integradas (C21–C22), delegar con autonomía (C23–C24), seguridad (C25), limpiar (C26), portafolio (C27–C28) y el flujo completo (C29). Construiste un sistema, no un montón de trucos.

El proyecto final del mes — lo que cierra el Mes 2 — es un repositorio público en GitHub que cumpla 4 requisitos: (1) README profesional (C14); (2) al menos 10 commits con mensajes claros (C5); (3) una rama de feature mergeada vía Pull Request (C12); (4) el sitio publicado con GitHub Pages (C8). Entregas: la URL del repo y la URL del sitio vivo.

La buena noticia: tu proyecto del negocio real (C18) ya es la base. Si lo construiste con el flujo (C29), ya tienes más de 10 commits, ramas mergeadas y Pages funcionando. El trabajo de hoy es el arranque formal y el cierre de cabos: revisar que cada requisito esté cumplido y pulir lo que falte — no empezar de cero.

El plan de hoy: (1) verifica los 4 requisitos con la checklist de abajo; (2) abre un Issue por cada cosa que falte (C17); (3) define la última sección que va a cerrar el proyecto con nivel — la que muestre tu mejor trabajo; (4) ejecútala con el flujo completo (C29); (5) haz la auditoría final con la mirada de C26 y C28. Sin prisas: el cierre lo tienes en esta semana.

El criterio que se evalúa no es "código perfecto": es dirección. Un repo con historia honesta, ramas, PRs y README que vende demuestra exactamente lo que aprendiste a hacer este mes — construir software dirigiendo IA, con un flujo profesional encima. El código imperfecto con flujo profesional demuestra más que el código perfecto sin flujo.

### Analogía

Hoy cierras la caja del mes y empiezas a empacar la entrega final. El producto (tu proyecto) ya existe; hoy armas el empaque que lo presenta al mundo: el README es la etiqueta, los commits el registro de fabricación, el PR la prueba de que dominas el flujo, y la URL publicada la vitrina. Empaque bien hecho, producto que se vende solo.

### Cómo se ve en la práctica

```
PROYECTO FINAL DEL MES — CHECKLIST DE LOS REQUISITOS

□ Repositorio PÚBLICO en GitHub (C6, C7)
□ README profesional: qué es, captura, URL del sitio (C14)
□ 10+ commits con mensajes claros (C5, C9)
□ Una rama de feature mergeada vía Pull Request (C12)
□ Sitio publicado con GitHub Pages (C8)
□ Historias limpias: sin secretos (C25), sin basura (C26)

ENTREGAS:  URL del repo  +  URL del sitio vivo

Plan de hoy:
  1. Pasa la checklist a tu repo del negocio real (C18).
  2. Abre un Issue por cada requisito que falte (C17).
  3. Ejecuta lo que falte con el flujo completo (C29).
  4. Auditoría final con la mirada de C26 y C28.
```

Fíjate que los requisitos no piden nada nuevo: piden lo que llevas un mes practicando. El proyecto final no es un examen de código: es la demostración pública de tu sistema de trabajo. Si la checklist está toda verde, ya lo entregaste — hoy solo lo confirmas y lo rematas con nivel.

### Díselo a la IA

> "Autoevaluación antes de entregar: ¿mi repo es público y tiene un README que vende (C14)? ¿Tengo 10+ commits con mensajes claros (C5)? ¿Puedo señalar la rama que mergeé vía PR (C12) y explicar qué hacía? ¿Mi sitio publicado se ve y funciona (C8)? ¿Mi historial está limpio y sin secretos (C25, C26)? ¿Puedo explicar cada decisión de mi proyecto con el vocabulario del mes? Si todo es 'sí', entrego. Si algo es 'no', lo resuelvo con el flujo (C29), no con prisa."

### Ejercicios

1. **[opción múltiple]** ¿Cuáles son los requisitos del proyecto final del mes?
   - a) **README profesional, 10+ commits con mensajes claros, una rama de feature mergeada vía PR y el sitio publicado con GitHub Pages** ✔
   - b) 100 commits, muchos repos, estrellas y seguidores
   - c) Todo el código en un solo archivo, sin README ni PRs
   - d) Repo privado, sin publicar y sin documentar

2. **[ordenar]** Acomoda el cierre del mes:
   - Desordenado: `verificar la checklist de requisitos` · `entregar URLs del repo y del sitio` · `abrir Issue por lo que falte` · `ejecutar lo que falte con el flujo (C29)` · `auditoría final (C26)`
   - Respuesta: verificar la checklist de requisitos → abrir Issue por lo que falte → ejecutar lo que falte con el flujo (C29) → auditoría final (C26) → entregar URLs del repo y del sitio

3. **[completar]** "El proyecto final no es un examen de ____: es la demostración pública de tu ____ de trabajo (C29)."
   - Banco: `código` · `sistema` · `memoria` · `red`
   - Respuesta: código / sistema

4. **[relacionar]** Une el requisito con la lección que lo preparó:
   - README profesional ↔ C14
   - 10+ commits con mensajes claros ↔ C5 y C9
   - Rama de feature mergeada vía PR ↔ C12 y C13
   - Sitio publicado con Pages ↔ C8
   - Repo limpio y sin secretos ↔ C25 y C26

5. **[verdadero/falso]** "Para el proyecto final, lo que se evalúa es que el código sea perfecto y sin errores."
   - Respuesta: FALSO — se evalúa la dirección: repo público, README, historial, PR y publicación. El código imperfecto con flujo profesional demuestra más que el código perfecto sin flujo.

6. **[qué hace]** Cuentas tus commits y tienes 7, todos en `main`, sin PRs y sin README. ¿Qué haces para el proyecto final?
   - a) Lo entregas así: al menos cumple algún requisito
   - b) **Aplicas el flujo: escribes el README (C14), divides el trabajo en ramas (C19) con PRs (C12) hasta pasar de 10 commits con un historial que cuenta una historia** ✔
   - c) Borras el repo y creas uno nuevo vacío
   - d) Le pides a otra persona que te "preste" commits

7. **[opción múltiple]** En la autoevaluación te das cuenta de que no puedes explicar por qué una sección de tu sitio es como es. ¿Qué haces?
   - a) La dejas: nadie la va a ver
   - b) **La documentas o la ajustas con el flujo hasta poder explicarla — si no entiendes tu propio proyecto, no lo entregues (C13)** ✔
   - c) Borras la sección sin explicación
   - d) Pides que otra persona la explique por ti

8. **[verdadero/falso]** "Después de entregar el proyecto final, el Mes 2 terminó: tu repo queda congelado y nunca más lo tocas."
   - Respuesta: FALSO — es tu portafolio vivo (C27): crece, se mejora y se vuelve a publicar; su historial seguirá contando tu avance (C1).

---
