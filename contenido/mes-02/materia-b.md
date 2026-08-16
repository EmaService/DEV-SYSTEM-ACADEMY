# MES 2 · MATERIA B — GitHub: la plaza pública del código
## Lecciones B1–B5 (Lote 1)

---

## B1 — ¿Qué es GitHub? La red social del código

### Concepto

Primero, la confusión que hay que matar de entrada: **Git y GitHub no son lo mismo.**

- **Git** es el programa que vive en tu computadora y registra los cambios (Materia A). Funciona sin internet. Lo creó Linus Torvalds en 2005.
- **GitHub** es un sitio web donde puedes guardar tus repositorios de Git en la nube y compartirlos. Es una empresa (de Microsoft desde 2018). Necesita internet.

Analogía rápida: Git es como el correo electrónico (el protocolo); GitHub es como Gmail (un servicio que lo usa). Existen alternativas a GitHub — GitLab, Bitbucket — igual que existe Outlook además de Gmail. Pero GitHub es el dominante: **más de 100 millones de desarrolladores** tienen cuenta ahí.

Qué hace GitHub por ti:

1. **Respaldo:** si tu computadora se muere, tu proyecto vive
2. **Portafolio público:** tu perfil ES tu currículum técnico hoy en día
3. **Colaboración:** varias personas trabajando en el mismo proyecto sin caos
4. **Biblioteca infinita:** millones de proyectos open source que puedes leer, copiar y aprender
5. **Publicación gratis:** GitHub Pages hospeda tu sitio web sin costo

Y el punto que te toca directamente: **casi todas las herramientas de IA para programar se conectan a GitHub.** Cuando tú (o una IA ejecutora) trabajen en un proyecto, el repositorio de GitHub es el punto de encuentro. Es la dirección donde todos —humanos e IAs— van a buscar la verdad del proyecto.

### Analogía

Si tu repositorio local es tu **cuaderno de trabajo**, GitHub es la **biblioteca pública donde depositas una copia**. Ahí está segura aunque se te queme la casa, cualquiera a quien le des permiso puede consultarla, y si la dejas pública, cualquier persona del mundo puede leerla, aprender de ella o proponerte mejoras.

### Cómo se ve en la práctica

Un repositorio en GitHub se ve así:

```
EmaService / DEV-SYSTEM-ACADEMY                 ⭐ 12  🍴 3

📄 README.md
📁 contenido/
📁 netlify/
📄 index.html
📄 portal.html

Últimos commits:
  7acbe46  fix: closure de loop dejaba opacity:0    hace 2 horas
  4cf99d3  fix: unificar sistema de tabs            hace 3 horas
```

El nombre del dueño, el nombre del repo, sus archivos, y el historial completo — visible desde cualquier navegador del mundo.

### Díselo a la IA

> "Explícame la diferencia entre Git y GitHub con un ejemplo cotidiano. Después dime qué cosas puedo hacer SOLO con Git y qué cosas necesitan GitHub."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la diferencia entre Git y GitHub?
   - a) Son lo mismo con distinto nombre
   - b) **Git es el programa local; GitHub es el servicio web donde se guardan los repos** ✔
   - c) Git es gratis y GitHub de paga
   - d) Git es para Windows y GitHub para Mac

2. **[verdadero/falso]** "Necesitas GitHub para poder usar Git."
   - Respuesta: FALSO — Git funciona perfectamente solo y sin internet.

3. **[relacionar]** Une el beneficio con lo que resuelve:
   - Respaldo ↔ Si tu computadora muere, el proyecto vive
   - Portafolio ↔ Tu perfil es tu currículum técnico
   - Colaboración ↔ Varias personas en un proyecto sin caos
   - GitHub Pages ↔ Publicar tu sitio gratis

4. **[completar]** "Git es como el correo electrónico (el protocolo); GitHub es como ____ (un servicio que lo usa). Alternativas a GitHub son ____ y Bitbucket."
   - Banco: `Gmail` · `GitLab` · `Outlook` · `Git`
   - Respuesta: Gmail / GitLab

5. **[opción múltiple]** ¿Por qué GitHub importa especialmente si trabajas con IA?
   - a) Porque la IA cobra menos ahí
   - b) **Porque es el punto de encuentro donde humanos e IAs trabajan sobre el mismo proyecto** ✔
   - c) Porque GitHub entrena a las IAs
   - d) Porque sin GitHub la IA no puede escribir código

---

## B2 — Tu cuenta y tu perfil: la nueva carta de presentación

### Concepto

Tu perfil de GitHub es lo primero que va a ver un cliente, un socio o un empleador que quiera saber si sabes lo que dices que sabes. No es opcional: **es tu currículum técnico**.

**Crear la cuenta** (es gratis) en `github.com`:
- Elige un **username** con cuidado: va a ser tu URL pública (`github.com/tuusuario`) y es difícil de cambiar después. Usa algo profesional — tu nombre, tu marca, tu apodo serio. No `xXdarkcoderXx`.
- Usa el **mismo correo** que configuraste en Git (lección A2), así tus commits se vinculan a tu perfil automáticamente.
- **Activa 2FA** (autenticación de dos factores). GitHub lo exige para cuentas activas y te protege de que alguien secuestre tu trabajo.

**Los elementos de un perfil que se ve serio:**

1. **Foto real** — no el avatar gris por default. Un perfil sin foto se lee como cuenta abandonada.
2. **Nombre completo y bio** — una línea que diga qué haces: "Construyo sistemas web con IA · Fundador de DEV SYSTEM"
3. **Ubicación y enlaces** — tu sitio, tu WhatsApp de negocio, tu LinkedIn
4. **Repositorios fijados (pinned)** — puedes destacar hasta 6 proyectos. Estos son tu portafolio.
5. **El README de perfil** — un truco: si creas un repositorio con EXACTAMENTE tu nombre de usuario y le pones un `README.md`, ese contenido aparece como portada de tu perfil. Es la carta de presentación que casi nadie usa y te distingue de inmediato.

**El gráfico de contribuciones** (los cuadritos verdes) muestra tu actividad diaria. No lo persigas obsesivamente — pero un perfil con actividad constante transmite algo que ningún texto transmite: **que esto lo haces en serio**.

### Analogía

Tu perfil de GitHub es el **escaparate de tu taller**. Un cliente que pasa por la calle no entra a preguntar tu currículum: mira la vitrina. Si ve trabajos terminados, orden y actividad reciente, entra. Si ve una cortina bajada y polvo, sigue de largo. Lo que expones ahí decide si te toman en serio antes de que hables.

### Cómo se ve en la práctica

Un perfil bien armado:

```
👤 Raymundo Flores
   @rayflores

   Construyo sistemas web con IA
   🏢 DEV SYSTEM ACADEMY
   📍 Ciudad de México
   🔗 devsystemacademy.com

   📌 Repositorios destacados
   ┌─────────────────────┐  ┌─────────────────────┐
   │ mi-primera-pagina   │  │ tienda-el-guero     │
   │ Landing responsive  │  │ Sitio de negocio    │
   │ ● HTML  ⭐ 2        │  │ ● HTML  ⭐ 1        │
   └─────────────────────┘  └─────────────────────┘
```

Eso, para quien lo ve, dice: esta persona construye y publica cosas reales.

### Díselo a la IA

> "Voy a crear mi perfil de GitHub. Escríbeme una bio profesional de una línea (máximo 160 caracteres) para alguien que construye sistemas web dirigiendo IA y tiene [describe tu negocio]. Dame 3 opciones con distinto tono."

### Ejercicios

1. **[opción múltiple]** ¿Qué username conviene elegir en GitHub?
   - a) El más creativo posible
   - b) **Uno profesional, porque será tu URL pública y es difícil de cambiar** ✔
   - c) Uno con números para que sea único
   - d) Da igual, nadie lo ve

2. **[verdadero/falso]** "Conviene usar el mismo correo en Git y en GitHub."
   - Respuesta: VERDADERO — así tus commits se vinculan automáticamente a tu perfil.

3. **[completar]** "Si creas un repositorio con exactamente tu ____ de usuario y le pones un ____, ese contenido aparece como portada de tu perfil."
   - Banco: `nombre` · `README.md` · `correo` · `index.html`
   - Respuesta: nombre / README.md

4. **[opción múltiple]** ¿Cuántos repositorios puedes destacar (pin) en tu perfil?
   - a) 3 · b) **6** ✔ · c) 10 · d) Ilimitados

5. **[relacionar]** Une el elemento del perfil con lo que comunica:
   - Foto real ↔ Cuenta activa y seria
   - Bio de una línea ↔ Qué haces exactamente
   - Repos fijados ↔ Tu portafolio
   - Gráfico de contribuciones ↔ Constancia en el tiempo

---

## B3 — Repositorio remoto: la copia que vive en internet

### Concepto

Ya tienes un repositorio local (Materia A): la carpeta con su `.git`. Un **repositorio remoto** es una copia de ese mismo repositorio que vive en un servidor — típicamente GitHub.

Lo importante de entender: **son dos copias completas e independientes**. Cada una tiene TODO el historial. No es que GitHub tenga "el proyecto" y tú una versión parcial: los dos tienen el proyecto entero. Se sincronizan cuando tú se lo pides, con dos comandos que verás en B5 y B6:

- **`git push`** — empujar: subir tus commits locales al remoto
- **`git pull`** — jalar: bajar los commits del remoto a tu local

Esa independencia es lo que hace a Git tan resistente: si GitHub se cae mañana, tu trabajo sigue completo en tu máquina. Si tu máquina se muere, tu trabajo sigue completo en GitHub.

**Cómo se crea un repositorio remoto:**

1. En GitHub, botón **New repository** (o el `+` arriba a la derecha)
2. Le pones nombre (idealmente igual que tu carpeta local: `mi-tienda`)
3. Eliges **público** o **privado** (lección B8)
4. **NO marques** "Add a README" si ya tienes un repo local con contenido — eso crea un commit inicial que después choca con el tuyo. Créalo vacío.
5. GitHub te muestra las instrucciones para conectarlo (eso es B4)

**El vocabulario que confunde:** al remoto principal se le llama por convención **`origin`**. No es una palabra mágica de Git, es solo el nombre estándar que todos usan. Cuando leas `git push origin main`, traduce: "sube la rama main al remoto llamado origin".

### Analogía

Tener repo local y remoto es como tener **tu cuaderno y una copia idéntica en una caja fuerte del banco**. Los dos tienen todo. Trabajas en el tuyo con libertad, y cada tanto vas al banco a actualizar la copia. Si pierdes el cuaderno, sacas la copia y sigues. Si el banco se incendia, tu cuaderno está intacto. La sincronización es manual y a tu ritmo: tú decides cuándo vas al banco.

### Cómo se ve en la práctica

```
   TU COMPUTADORA                    GITHUB (origin)
   ┌────────────────┐                ┌────────────────┐
   │ mi-tienda/     │  --- push -->  │ mi-tienda      │
   │  .git/         │                │  (historial    │
   │  index.html    │  <-- pull ---  │   completo)    │
   │  styles.css    │                │                │
   └────────────────┘                └────────────────┘
      Repo local                       Repo remoto
```

Dos copias completas, sincronizadas cuando tú lo ordenas.

### Díselo a la IA

> "Ya tengo un repositorio local con mi proyecto. Explícame paso a paso cómo creo el repositorio remoto en GitHub y por qué NO debo marcar la opción de 'Add a README' al crearlo si mi carpeta local ya tiene archivos."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un repositorio remoto?
   - a) Un repositorio al que accedes por WiFi
   - b) **Una copia completa de tu repositorio que vive en un servidor** ✔
   - c) Un repositorio de otra persona
   - d) Una carpeta comprimida

2. **[relacionar]** Une el comando con lo que hace:
   - `git push` ↔ Subir tus commits al remoto
   - `git pull` ↔ Bajar commits del remoto
   - `origin` ↔ El nombre convencional del remoto principal

3. **[verdadero/falso]** "El repositorio remoto tiene el proyecto completo y el local solo una parte."
   - Respuesta: FALSO — ambos tienen el historial COMPLETO; son copias independientes.

4. **[completar]** "Si GitHub se cae, tu trabajo sigue en tu ____. Si tu computadora muere, tu trabajo sigue en ____."
   - Banco: `computadora` · `GitHub` · `USB` · `la nube de Apple`
   - Respuesta: computadora / GitHub

5. **[qué hace]** Al crear el repo en GitHub marcas "Add a README" aunque tu carpeta local ya tiene archivos. ¿Qué problema causa?
   - a) Ninguno
   - b) **Crea un commit inicial en el remoto que choca con tu historial local** ✔
   - c) Borra tus archivos locales
   - d) Hace el repo privado automáticamente

---

## B4 — `git remote`: conectar tu carpeta local con GitHub

### Concepto

Tienes el repo local (A4) y creaste el repo remoto vacío en GitHub (B3). Ahora hay que **presentarlos**: decirle a tu Git local dónde vive su copia en la nube.

El comando:

```
git remote add origin https://github.com/tuusuario/mi-tienda.git
```

Desglosado:
- `git remote add` — "agrega un repositorio remoto"
- `origin` — el nombre con el que lo vas a llamar (la convención universal)
- `https://...` — la URL que GitHub te dio al crear el repo

Se hace **una sola vez por proyecto**. A partir de ahí, tu Git local ya sabe a dónde mandar las cosas.

**Verificar que quedó:**

```
git remote -v
```

Responde:
```
origin  https://github.com/tuusuario/mi-tienda.git (fetch)
origin  https://github.com/tuusuario/mi-tienda.git (push)
```

Dos líneas: una para bajar (fetch) y otra para subir (push). Es normal, es el mismo remoto.

**HTTPS vs SSH:** vas a ver dos formas de URL. `https://github.com/...` te va a pedir usuario y contraseña (en realidad un token, ver B28). `git@github.com:...` usa llaves SSH, se configura una vez y ya no pide nada. Para empezar, **usa HTTPS** — es más simple. Cuando te canses de autenticarte, cambias a SSH.

**Errores comunes:**
- `remote origin already exists` — ya habías conectado un remoto. Míralo con `git remote -v`; si está mal, cámbialo con `git remote set-url origin <nueva-url>`.
- URL con typo — el push va a fallar con "repository not found". Copia la URL directo de GitHub, no la escribas a mano.

### Analogía

`git remote add origin` es **guardar el número de la sucursal en tu agenda**. Tu cuaderno (repo local) ahora sabe a qué banco pertenece su copia. No manda nada todavía — solo registra la dirección para poder mandar después. Se hace una vez y queda anotado para siempre.

### Cómo se ve en la práctica

Flujo completo de conexión:

```
C:\...\mi-tienda> git remote add origin https://github.com/rayflores/mi-tienda.git

C:\...\mi-tienda> git remote -v
origin  https://github.com/rayflores/mi-tienda.git (fetch)
origin  https://github.com/rayflores/mi-tienda.git (push)

C:\...\mi-tienda> git branch -M main
C:\...\mi-tienda> git push -u origin main
```

Esas últimas dos líneas son las que GitHub te muestra literalmente cuando creas un repo vacío. La primera asegura que tu rama se llame `main`; la segunda sube todo por primera vez (lección B5).

### Díselo a la IA

> "Tengo mi repositorio local listo y acabo de crear el repo vacío en GitHub. Dame los comandos exactos para conectarlos y subir mi código por primera vez, explicando qué hace cada uno. Uso HTTPS."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace `git remote add origin <url>`?
   - a) Sube tu código a GitHub
   - b) **Registra en tu repo local la dirección de su copia remota** ✔
   - c) Descarga el proyecto de GitHub
   - d) Crea el repositorio en GitHub

2. **[completar]** "Por convención universal, al remoto principal se le llama ____, y para verificar la conexión se usa `git remote ____`."
   - Banco: `origin` · `-v` · `main` · `--check`
   - Respuesta: origin / -v

3. **[verdadero/falso]** "`git remote add` hay que correrlo cada vez que quieres subir cambios."
   - Respuesta: FALSO — se hace UNA vez por proyecto; después solo usas push/pull.

4. **[relacionar]** Une la forma de URL con su característica:
   - HTTPS (`https://github.com/...`) ↔ Pide credenciales, más simple para empezar
   - SSH (`git@github.com:...`) ↔ Se configura una vez con llaves, no pide nada después

5. **[qué hace]** Git responde `remote origin already exists`. ¿Qué significa?
   - a) El repo de GitHub ya tiene dueño
   - b) **Ya habías conectado un remoto con ese nombre en este proyecto** ✔
   - c) Tu internet está caído
   - d) Falta instalar Git

---

## B5 — `git push`: subir tu trabajo al mundo

### Concepto

`git push` es el comando que toma tus commits locales y los sube al repositorio remoto. Es el momento en que tu trabajo deja de vivir solo en tu computadora.

**La primera vez** (y solo la primera) se usa así:

```
git push -u origin main
```

- `push` — subir
- `-u` — "recuerda esta conexión" (upstream). Gracias a esta bandera, las siguientes veces basta con `git push` a secas
- `origin` — a qué remoto
- `main` — qué rama

**Las siguientes veces:**

```
git push
```

Y ya. Git recuerda a dónde y qué rama.

**Qué NO hace push:** no sube lo que no has commiteado. Si editaste archivos pero no hiciste `git add` + `git commit`, esos cambios se quedan en tu computadora. **Push sube commits, no archivos sueltos.** Este es el malentendido número uno de los principiantes: "hice push y no aparece mi cambio" — casi siempre es que faltó el commit.

**Autenticación:** la primera vez, GitHub te va a pedir identificarte. Ya NO acepta tu contraseña normal: necesitas un **Personal Access Token** (una contraseña especial de un solo uso para herramientas). Se genera en GitHub → Settings → Developer settings → Personal access tokens. Guárdalo en tu gestor de contraseñas: no lo vuelves a ver. (Más sobre tokens y seguridad en B28.)

**Errores comunes:**
- `rejected — non-fast-forward`: alguien (o tú desde otra compu) subió cambios que tú no tienes. Solución: `git pull` primero, resuelve, y vuelve a hacer push.
- `Authentication failed`: tu token expiró o está mal. Genera uno nuevo.

### Analogía

`git push` es **llevar las fotos reveladas al álbum del banco**. Solo puedes llevar fotos ya reveladas (commits), no negativos sueltos (cambios sin commitear). Y si mientras estabas fuera alguien más agregó fotos al álbum, el banco te dice "espera, primero mira lo que se agregó" — eso es el error de non-fast-forward.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git push -u origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1.24 KiB | 634.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0)
To https://github.com/rayflores/mi-tienda.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

Esa última línea (`set up to track`) es la magia del `-u`: de aquí en adelante, `git push` solo.

Y en GitHub, refrescando la página, tus archivos ya están ahí. Visible desde cualquier parte del mundo.

### Díselo a la IA

> "Hice `git push` y en GitHub no aparecen mis cambios. Ayúdame a diagnosticar: dime qué comandos correr para revisar si el problema es que falta commitear, si el remoto está mal conectado, o si hay otro motivo."

### Ejercicios

1. **[opción múltiple]** ¿Qué sube `git push`?
   - a) Todos los archivos de la carpeta
   - b) **Solo los commits que ya hiciste** ✔
   - c) Solo los archivos modificados hoy
   - d) La carpeta .git completa

2. **[completar]** "La primera vez se usa `git push -u origin main`; la bandera `-u` sirve para que las siguientes veces baste con `git ____`."
   - Banco: `push` · `pull` · `commit` · `remote`
   - Respuesta: push

3. **[verdadero/falso]** "Si editas un archivo y haces push, el cambio sube aunque no hayas hecho commit."
   - Respuesta: FALSO — push sube commits; sin commit, el cambio no viaja.

4. **[ordenar]** Acomoda el flujo completo desde editar hasta que esté en GitHub:
   - Desordenado: `git push` · `git commit` · `editar el archivo` · `git add`
   - Respuesta: editar el archivo → git add → git commit → git push

5. **[qué hace]** Git responde `rejected — non-fast-forward`. ¿Qué pasó y qué haces?
   - a) Tu internet falló; reintenta
   - b) **El remoto tiene commits que tú no tienes; haz `git pull` primero** ✔
   - c) Tu token expiró; genera otro
   - d) El repo es privado; hazlo público

---

## B6 — `git pull` y `git fetch`: traer los cambios de otros

### Concepto

En B5 aprendiste a subir tu trabajo con `git push`. Ahora el flujo inverso: **traer a tu computadora los cambios que otros hicieron en el remoto**. Esto no es teoría para equipos gigantes: te pasa apenas tienes dos copias del mismo repo — por ejemplo, si commiteas desde tu laptop y luego desde tu escritorio, o si una IA ejecutora hizo commits mientras tú dormías.

Hay dos comandos, y la confusión entre ellos es normal:

- **`git fetch`** — baja la información del remoto y la guarda, SIN tocar tu trabajo. Es el comando "explora": te dice "el remoto tiene 3 commits nuevos que tú no tienes", y ya. Tu carpeta no cambia.
- **`git pull`** — baja Y fusiona: hace un `fetch` seguido de un `merge` de esos cambios a tu rama actual (A19). Es el comando "tráelos y aplícalos".

La regla práctica: si estás solo y quieres actualizarte, usa `git pull`. Si quieres ver qué hay antes de decidir, usa `git fetch` y revisa con `git log origin/main` (A10) o `git status`.

Cuando haces `git pull`, Git te puede responder de tres maneras: que todo estaba al día ("Already up to date"), que hubo un merge rápido y sin fricción, o que hubo conflictos — esos se resuelven como aprendiste en A20, y son la señal de que dos personas cambiaron las mismas líneas.

**El error más común del principiante:** hacer `git push` y que Git responda `rejected — non-fast-forward` (lo viste en B5). Eso significa exactamente que el remoto tiene commits que tú no tienes. La solución es casi siempre un `git pull` primero, y luego intentar el push de nuevo. Esos dos comandos, `push` y `pull`, son el pulso diario del trabajo con Git.

### Analogía

`git fetch` es **asomarte a la ventana de la oficina** para ver si hay documentos nuevos sobre el escritorio; `git pull` es **entrar, tomarlos y pegarlos en tu libreta**. El primero no altera nada, solo te informa. El segundo trae el cambio a tu mano. Si entras a pegarlos y notas que tú ya habías escrito en la misma línea, tienes que decidir qué versión queda — eso es el conflicto.

### Cómo se ve en la práctica

```
C:\...\mi-tienda> git fetch
C:\...\mi-tienda> git status
Your branch is behind 'origin/main' by 2 commits, and can be updated.

C:\...\mi-tienda> git pull
Updating 3f4a2c1..9b8d7e6
Fast-forward
 index.html | 12 +++++++-------
 1 file changed, 8 insertions(+), 4 deletions(-)
```

El `git status` te avisa que tu rama está **detrás** de la del remoto. `git pull` baja esos 2 commits y actualiza `index.html`. Si editaste desde el navegador o una IA ejecutora commiteó por ti, `git pull` es cómo tu computadora se entera.

### Díselo a la IA

> "Hice `git push` y me salió `rejected — non-fast-forward`. Explica por qué pasa y muéstrame la secuencia exacta de comandos para resolverlo: qué revisar antes de hacer `git pull` y qué hacer si aparecen conflictos."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la diferencia entre `git fetch` y `git pull`?
   - a) Son lo mismo con distinto nombre
   - b) **`fetch` solo baja información; `pull` la baja y la fusiona a tu rama** ✔
   - c) `fetch` es para subir y `pull` para bajar
   - d) `fetch` funciona sin internet

2. **[completar]** "Cuando tu rama está ____ con respecto al remoto, es que hay commits que tú no tienes; el comando para traerlos y aplicarlos es `git ____`."
   - Banco: `detrás` · `pull` · `push` · `adelante`
   - Respuesta: detrás / pull

3. **[verdadero/falso]** "`git fetch` modifica los archivos de tu carpeta de trabajo."
   - Respuesta: FALSO — `fetch` solo descarga la información del remoto; no toca tu trabajo.

4. **[relacionar]** Une la situación con el comando adecuado:
   - "Quiero ver si el remoto cambió, sin que se me mueva nada" ↔ `git fetch`
   - "Quiero actualizar mi rama con lo último del remoto" ↔ `git pull`
   - "Quiero subir mis commits locales" ↔ `git push`

5. **[qué hace]** Corres `git pull` y Git responde `Already up to date`. ¿Qué significa?
   - a) Que tu internet está lento
   - b) **Que tu rama local ya tiene todo lo del remoto; no hay nada que traer** ✔
   - c) Que borraste tus commits locales
   - d) Que el remoto está caído

---

## B7 — `git clone`: copiar un proyecto ajeno completo

### Concepto

`git clone` toma un repositorio que vive en GitHub y **baja una copia completa a tu computadora**. Con "completa" no me refiero solo a los archivos actuales: te traes también TODO el historial, todas las ramas, toda la máquina del tiempo del proyecto (Materia A).

El comando:

```
git clone https://github.com/usuario/proyecto.git
```

Al ejecutarlo, Git crea una carpeta con el nombre del proyecto y la deja lista para trabajar. Detalle que confunde a muchos: **el `origin` ya queda conectado automáticamente**. En B4 tuviste que configurar el remoto a mano con `git remote add`; aquí no — el clon nace sabiendo de dónde vino.

¿Para qué lo usas?

1. **Para aprender:** clona proyectos interesantes y lee su código (B25 te enseña a buscarlos). Ver cómo un proyecto profesional organiza sus archivos es una clase gratuita.
2. **Para contribuir:** clonar es el primer paso de cualquier aportación a open source (B17 y B18).
3. **Para tener tu propio proyecto en otra computadora:** clonas tu repo desde tu laptop y tienes todo, sin copiar archivos sueltos.

La diferencia clave con "Descargar ZIP": el ZIP solo trae los archivos actuales, sin `.git`, sin historial, sin ramas. El clon te trae la máquina del tiempo completa. Y una aclaración importante: clonar un repo ajeno NO afecta al dueño original — es una copia independiente, como fotocopiar un libro sin modificar el original.

### Analogía

Clonar es **fotocopiar un cuaderno entero, incluyendo todas sus correcciones anteriores y sus páginas arrancadas** — no solo la última página. Tú haces tus anotaciones en la copia; el dueño del original ni se entera. Si alguien más clona el mismo cuaderno, cada quien tiene su copia con su propio ritmo.

### Cómo se ve en la práctica

```
C:\...\> git clone https://github.com/rayflores/dev-system-academy.git
Cloning into 'dev-system-academy'...
remote: Enumerating objects: 145, done.
Receiving objects: 100% (145/145), 3.2 MiB | 1.5 MiB/s, done.
Resolving deltas: 100% (45/45), done.

C:\...\> cd dev-system-academy
C:\...\dev-system-academy> git remote -v
origin  https://github.com/rayflores/dev-system-academy.git (fetch)
origin  https://github.com/rayflores/dev-system-academy.git (push)
```

En un segundo tienes el proyecto entero, con historial, y el remoto `origin` ya apuntando al lugar correcto. Puedes abrirlo en tu editor y trabajar sobre él como si fuera tuyo — porque ahora lo es: una copia tuya.

### Díselo a la IA

> "Explícame la diferencia entre clonar un repositorio con `git clone` y descargar el código con el botón 'Download ZIP'. ¿Qué gano con el clon que no obtengo con el ZIP? Dame un ejemplo práctico de cuándo conviene cada opción."

### Ejercicios

1. **[opción múltiple]** ¿Qué obtienes con `git clone`?
   - a) Solo los archivos actuales del proyecto
   - b) **El código, TODO el historial de commits y las ramas, con el remoto ya conectado** ✔
   - c) El proyecto completo pero sin poder editar archivos
   - d) Una copia del código que se actualiza sola

2. **[completar]** "Al clonar, Git ya deja conectado el remoto llamado ____, así que no hace falta usar `git remote ____` como en B4."
   - Banco: `origin` · `add` · `main` · `init`
   - Respuesta: origin / add

3. **[verdadero/falso]** "Si clono el repositorio de otra persona y hago commits, esos cambios afectan al proyecto original."
   - Respuesta: FALSO — el clon es una copia independiente; el original no cambia.

4. **[ordenar]** Acomoda los pasos para trabajar con el código de un proyecto ajeno:
   - Desordenado: `hacer cambios` · `git clone <url>` · `abrir en el editor` · `cd nombre-del-proyecto`
   - Respuesta: git clone <url> → cd nombre-del-proyecto → abrir en el editor → hacer cambios

5. **[qué hace]** Clonas un repo y notas que no aparece ningún archivo `.git` en la carpeta. ¿Qué pasó?
   - a) El proyecto es privado
   - b) **Descargaste el ZIP en vez de clonar: sin `.git` no hay historial ni Git** ✔
   - c) Git borra el `.git` al clonar
   - d) Eso es normal; el `.git` solo aparece en GitHub

---

## B8 — Público vs privado: qué exponer y qué proteger

### Concepto

Al crear un repositorio en GitHub (B3), eliges entre dos tipos de visibilidad, y esa decisión tiene consecuencias reales:

- **Público:** cualquier persona del mundo puede ver tu código, descargarlo, clonarlo (B7), dejar una estrella y proponer cambios. Es tu vitrina, tu portafolio (B2).
- **Privado:** solo tú y la gente que invites pueden verlo. Nadie más lo encuentra ni por búsqueda.

La primera regla de seguridad es brutal y la tienes que internalizar hoy: **todo lo que subes a un repositorio público queda en el historial para siempre.** Si por error subes un archivo con una contraseña o una API key, borrar el archivo no basta — ese secreto sigue viviendo en los commits anteriores, y cualquiera puede verlo con `git log` (A10) o desde el historial en la web. Por eso B28 ("lo que NUNCA debes subir") es de las lecciones más importantes del curso.

Reglas prácticas para decidir:

1. **Proyectos de clientes → privado.** El código de un negocio ajeno no es tuyo para exhibirlo. Trabaja siempre en repos privados; si después el cliente quiere mostrarlo, se decide en conjunto.
2. **Tu portafolio → público.** Un repo público con README bueno (B9) es prueba viva de lo que sabes hacer. Nadie contrata al que "dice" que sabe; contratan al que tiene evidencia visible.
3. **Cuando tengas duda → privado primero.** Puedes cambiar la visibilidad después (Settings → General → Danger Zone → Change visibility). Hacer un repo privado público es trivial; recuperar un secreto filtrado es doloroso.
4. **Antes de hacer público algo, escanea** el historial en busca de secretos. La IA te puede ayudar a revisar (Díselo a la IA).

No confundas "público" con "sin dueño": aunque el repo sea público, la licencia decide qué puede hacer la gente con tu código (B27). Publicar tu trabajo no te despoja de la autoría — te da visibilidad.

### Analogía

El repo público es **el escaparate de tu tienda**; el privado es **el almacén de atrás**. En el escaparate pones lo mejor y lo que quieres mostrar: ahí vives. En el almacén guardas el inventario de clientes, tus notas y lo que no quieres que ande rondando la calle. El error clásico del novato es dejar la caja registradora (los secretos) en el escaparate porque "nomás para que se vea bonito".

### Cómo se ve en la práctica

```
CREAR REPOSITORIO
Nombre:  tienda-el-guero
Visibilidad:  (•) Público   ( ) Privado

⚠  RIESGO REAL:
$ git commit -am "configuracion con credenciales"
$ git push
# ↑ subiste tu password en el commit.
# Borrarlo del archivo después NO lo borra del historial.

LO CORRECTO:
$ echo ".env" >> .gitignore      # los secretos ni se acercan (A11)
$ git add .env                   # ❌ no
$ git commit -am "configuración segura"
$ git push
```

Lo correcto desde el inicio: los archivos con secretos ni siquiera entran al repositorio. `.gitignore` (lección A11) es tu mejor amigo para eso.

### Díselo a la IA

> "Voy a hacer público un repositorio que trabajé con un cliente. Dime qué cosas debo revisar antes para asegurarme de que no hay contraseñas, API keys ni datos personales expuestos, y qué comandos de Git puedo correr para inspeccionar el historial en busca de secretos."

### Ejercicios

1. **[opción múltiple]** ¿Qué visibilidad conviene para el proyecto de un cliente?
   - a) Público, para que el cliente tenga visibilidad
   - b) **Privado: el código de un cliente no es tuyo para exhibirlo** ✔
   - c) Privado solo hasta la primera versión, luego público
   - d) Da igual, la visibilidad no importa

2. **[verdadero/falso]** "Si subí un archivo con una contraseña por error y lo borré en un commit posterior, el riesgo desapareció."
   - Respuesta: FALSO — el secreto sigue en el historial de commits anteriores y cualquiera puede verlo.

3. **[completar]** "Un repositorio ____ lo ve cualquier persona del mundo; un repositorio ____ solo lo ven quienes invites. En caso de duda, empieza ____."
   - Banco: `público` · `privado` · `público primero` · `privado primero`
   - Respuesta: público / privado / privado primero

4. **[relacionar]** Une la situación con la visibilidad recomendada:
   - Proyecto para un cliente → Privado
   - Tu portafolio personal → Público
   - Proyecto con API keys dentro → Privado
   - Proyecto open source para la comunidad → Público

5. **[qué hace]** Quieres mostrar tu trabajo y aún no hay secretos de por medio. Haces el repo público. ¿Qué implica de inmediato?
   - a) Cualquiera puede editar tu código
   - b) **Cualquiera puede ver, clonar y descargar tu código, y ver su historial completo** ✔
   - c) El repo deja de ser tuyo
   - d) Ya no puedes agregar colaboradores

---

## B9 — README.md: la portada de tu proyecto

### Concepto

Cuando alguien entra a tu repositorio en GitHub, lo primero que ve no es tu código: ve un archivo llamado `README.md` en la lista de archivos. Si existe, GitHub lo renderiza y lo muestra como portada. Si no existe, el visitante ve una página vacía. **El README es la diferencia entre "subió una carpeta" y "entregó un proyecto".**

¿Qué tiene que lograr? En menos de 30 segundos, un visitante debe entender:
- **Qué es** este proyecto
- **Para qué sirve** (qué problema resuelve)
- **Cómo se ve** (capturas de pantalla)
- **Cómo se usa** (instalación, cómo correrlo)
- **Quién lo hizo** y cómo contactarlo

Para ti, que estás armando portafolio (B2), el README es además una **herramienta de venta**: es la primera impresión que un cliente o empleador se lleva de tu trabajo. Un repo con capturas y una demo publicada (B20) vende solo.

La estructura típica de un README:

```
# Nombre del proyecto
> descripción de una línea

## ✨ Características
## 📸 Capturas / Demo
## 🚀 Cómo usarlo
## 🛠 Stack / Tecnologías
## 📄 Licencia
```

No hace falta que sea gigante. Un README claro, corto y con capturas le gana a uno extenso y vacío. Y el dato que te ahorra horas: **escríbelo con IA, pero con contexto**. La IA no sabe qué hace tu proyecto a menos que se lo digas — el prompt del final es el que usarás para tu primer README.

### Analogía

El README es **la fachada de tu tienda**. Puedes tener el mejor producto del mundo, pero si la fachada es un portón oxidado sin letrero, nadie entra. Si la fachada dice qué vendes, muestra el producto y da una prueba gratuita, la gente entra sola. Tu código es el producto; el README decide si alguien llega a verlo.

### Cómo se ve en la práctica

Un README que sí funciona, en versión resumida:

```markdown
# Tienda El Güero

Sitio web de negocio para ferretería: catálogo, cotizador y
WhatsApp directo. Construido dirigiendo IA.

## Características
- Catálogo con filtros por categoría
- Cotizador en vivo por WhatsApp
- Diseño responsive (móvil + escritorio)

## Demo
🔗 https://tienda-el-guero.netlify.app

## Cómo usarlo
1. Clona el repo: `git clone https://github.com/rayflores/tienda-el-guero.git`
2. Abre `index.html` en tu navegador

## Stack
HTML · CSS · JavaScript

## Licencia
MIT
```

Cuando entras al repo, esto aparece como la portada: nombre, captura del proyecto real y cómo probarlo. Cualquier persona —y cualquier IA— entiende el proyecto en 30 segundos.

### Díselo a la IA

> "Este es mi proyecto: [describe qué hace, para quién, y pega la URL de la demo]. Escríbeme un README.md en español que: 1) explique qué hace en una línea, 2) incluya una sección de características con viñetas, 3) tenga instrucciones de uso, 4) cierre con stack y licencia. Sé claro y breve, sin relleno."

### Ejercicios

1. **[opción múltiple]** ¿Qué muestra GitHub en la portada de tu repositorio?
   - a) El archivo más reciente del repo
   - b) **El contenido de `README.md`, si existe** ✔
   - c) El gráfico de contribuciones
   - d) El último commit

2. **[completar]** "Un visitante debe entender en ____ segundos qué es tu proyecto, para qué sirve y cómo se ____."
   - Banco: `30` · `usa` · `10 minutos` · `instala automáticamente`
   - Respuesta: 30 / usa

3. **[verdadero/falso]** "Un README extenso y lleno de texto es mejor que uno corto con capturas de pantalla."
   - Respuesta: FALSO — un README claro, corto y con capturas comunica mejor que uno extenso y vacío.

4. **[relacionar]** Une la sección del README con su propósito:
   - Características ↔ Qué puede hacer el proyecto
   - Demo ↔ Prueba viva de que funciona
   - Cómo usarlo ↔ Pasos para correrlo
   - Stack ↔ Con qué tecnologías está hecho

5. **[ordenar]** Acomoda la estructura de un buen README:
   - Desordenado: `Características` · `Nombre + descripción` · `Cómo usarlo` · `Capturas/Demo`
   - Respuesta: Nombre + descripción → Capturas/Demo → Características → Cómo usarlo

---

## B10 — Markdown: el idioma con el que se documenta el software

### Concepto

Markdown es un **formato de texto plano con reglas simples para darle formato**: títulos, negritas, listas, enlaces, código. Se escribe en cualquier editor y termina en `.md`. Lo distingues en la práctica porque parece texto normal con algunos símbolos raros: `#`, `**`, `-`, `` ` ``.

GitHub está construido sobre Markdown: tu README (B9), los Issues (B11), los Pull Requests (B13 y B14), los comentarios y las descripciones — todo se escribe en Markdown. Si sabes Markdown, sabes comunicarte dentro de GitHub y en la mayoría de las plataformas de desarrolladores del mundo.

Lo esencial que necesitas:

```
# Título grande        →  escribe  #  antes del texto
## Subtítulo           →  escribe  ##
**negritas**           →  envuelve el texto entre **
- lista con viñetas    →  escribe  -  antes de cada elemento
[texto](https://url)   →  enlace
`código`               →  código en línea, entre acentos graves
```

¿Por qué el software documenta en texto plano y no en Word o Google Docs? Porque es texto: se versiona con Git (Materia A), los cambios entre versiones se comparan línea por línea (A12), se puede escribir con IA y nadie pelea por formatos incompatibles. Un `.md` es un archivo de texto como un `.txt`, pero con superpoderes de presentación.

Tu meta no es memorizar todas las reglas: es poder leerlo, entenderlo y editar lo que una IA te genere. Cuando pidas documentación (B9 y C16), la IA la produce en Markdown sin que lo pidas — y tú necesitas reconocer qué está diciendo y ajustar detalles sin romper el formato.

### Analogía

Markdown es como **la taquigrafía de un mesero de toda la vida**: pocos símbolos, todos los cocineros del mundo los entienden, y en la cocina nadie usa formalidades de restaurante fino. En vez de abrir un programa pesado y elegir "Título 1" en un menú, escribes `#` y listo. Menos ruido, más velocidad, y la receta (el texto) sigue siendo legible en cualquier parte.

### Cómo se ve en la práctica

Esto es lo que escribes:

```markdown
# Mi tienda

## Características
- Catálogo responsive
- **Cotizador** en vivo

Corre a `npm start` para ver la demo.

Código de ejemplo:

    function saludar(nombre) {
      return "Hola, " + nombre;
    }
```

Y esto es lo que el visitante ve renderizado en GitHub: un título grande "Mi tienda", un subtítulo, una lista, la palabra **Cotizador** en negritas, el texto `npm start` en fuente de código, y el bloque de código con colores. Mismo archivo, dos caras: texto plano por dentro, documento bonito por fuera.

### Díselo a la IA

> "Enséñame Markdown en 10 minutos con ejemplos: qué significa cada símbolo (`#`, `**`, `-`, `` ` ``, `[texto](url)`), cómo hacer tablas y cómo se ve cada cosa renderizada. Dame un mini-cheat sheet que pueda consultar."

### Ejercicios

1. **[opción múltiple]** ¿Qué es Markdown?
   - a) Un lenguaje de programación
   - b) **Un formato de texto plano con reglas simples para dar formato, terminado en `.md`** ✔
   - c) Un programa para hacer documentos con IA
   - d) Un editor de código

2. **[completar]** "Para hacer un título grande se escribe ____ antes del texto; para negritas se envuelve el texto entre ____; y el código en línea se envuelve entre acentos graves (`` ` ``)."
   - Banco: `#` · `**` · `###` · `--`
   - Respuesta: # / **

3. **[relacionar]** Une el símbolo con lo que produce:
   - `# Hola` ↔ Título grande
   - `**Hola**` ↔ Texto en negritas
   - `- Hola` ↔ Elemento de lista
   - `[Hola](url)` ↔ Enlace

4. **[verdadero/falso]** "Markdown solo sirve dentro de GitHub."
   - Respuesta: FALSO — se usa en GitHub, foros, chats, documentación y casi toda la industria del software.

5. **[qué hace]** Escribes esto en un README: `# Bienvenido`, luego `## Sección`, luego `- item`. ¿Qué ve el visitante en GitHub?
   - a) Un error de formato
   - b) **Un título grande, un subtítulo y un elemento de lista** ✔
   - c) Un bloque de código
   - d) Un enlace roto

---

## B11 — Issues: el sistema de tickets del mundo real

### Concepto

Un **Issue** (problema, incidencia) es un ticket dentro de tu repositorio: una tarea por hacer, un error por corregir o una idea por desarrollar. Cada issue tiene su número (`#12`), un título, una descripción, etiquetas, personas asignadas y una conversación en comentarios. Es el equivalente de la libreta de pendientes, pero viva, con historial y colaborativa.

En el mundo real del software, el trabajo NO se organiza en tu cabeza ni en WhatsApp: se organiza en issues. Cuando un usuario encuentra un error, lo reporta como issue. Cuando un equipo decide qué construir, cada tarea es un issue. Cuando una IA ejecutora trabaja contigo (C17), los issues son los briefs que le pasas.

Un issue bien escrito responde tres preguntas:

1. **Qué pasa** — descripción clara del problema o tarea
2. **Cómo reproducirlo** — los pasos exactos (crucial para bugs)
3. **Qué se esperaba** — el comportamiento deseado

Ejemplo de un buen issue de bug:

```
#12  El botón "Cotizar" no responde en móvil

En un iPhone con Safari, al tocar "Cotizar" no pasa nada.
Se ve el botón pero no abre el WhatsApp.

Pasos para reproducirlo:
1. Abrir tienda-el-guero.netlify.app en iPhone
2. Ir a la sección de productos
3. Tocar "Cotizar"

Esperado: abrir WhatsApp con el mensaje del producto.
```

**El truco que te va a encantar:** si en un mensaje de commit escribes `fixes #12`, GitHub **cierra el issue automáticamente** cuando ese commit llega a la rama principal. Tú (o tu IA ejecutora) resuelven, y el ticket se cierra solo. Dejar un rastro, no solo arreglar.

Los issues no son solo para proyectos de equipo: en tu repo personal son tu lista de pendientes pública, con la ventaja de que también funcionan como prueba de que sabes detectar, reportar y resolver problemas — exactamente lo que un cliente quiere ver.

### Analogía

El issue es **el ticket del taller de reparación**: el cliente llega y dice "el coche hace un ruido al girar" (qué pasa), el mecánico anota los pasos para reproducirlo y el objetivo ("debe girar en silencio"), y le pega una etiqueta de color según la gravedad. Sin el ticket, todo se resuelve por gritos y se olvida. Con el ticket, el trabajo queda registrado, asignado y se puede rastrear hasta su cierre.

### Cómo se ve en la práctica

```
Issues  (3 abiertos · 12 cerrados)
─────────────────────────────────────────────
#12  El botón "Cotizar" no responde en móvil    [bug]  [móvil]
#11  Agregar sección de reseñas                 [mejora]
#10  Título de la página se corta en 2 líneas   [bug]
```

Cada línea es un pendiente con número, título y etiquetas. Puedes abrir issues desde la pestaña **Issues** de tu repo, o desde el propio código en GitHub: al ver un archivo, seleccionas unas líneas y creas el issue desde ahí, con el contexto incluido.

### Díselo a la IA

> "Voy a reportar un error en mi proyecto: [describe el bug]. Escríbeme el texto de un issue de GitHub que siga el formato: qué pasa, pasos para reproducirlo, y qué se esperaba. Que sea claro y directo, para que lo pegue tal cual."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un Issue en GitHub?
   - a) Un error en el servidor de GitHub
   - b) **Un ticket de trabajo: tarea, bug o idea, con número, título y conversación** ✔
   - c) Una rama del repositorio
   - d) Un correo interno de Microsoft

2. **[verdadero/falso]** "Los issues solo sirven si trabajas con un equipo."
   - Respuesta: FALSO — en un repo personal son tu lista de pendientes pública y tu prueba de trabajo.

3. **[completar]** "Un buen issue de bug responde tres cosas: ____ qué pasa, cómo ____ el error, y qué se ____."
   - Banco: `describe` · `reproducir` · `esperaba` · `cobrar`
   - Respuesta: describe / reproducir / esperaba

4. **[relacionar]** Une el elemento del issue con su función:
   - Número (#12) ↔ Identificador único para referenciarlo
   - Etiquetas ↔ Clasificarlo por tipo o prioridad
   - Comentarios ↔ La conversación alrededor del ticket
   - Asignados ↔ Quién se hace responsable de resolverlo

5. **[qué hace]** Escribes `fixes #12` en un mensaje de commit y haces push a la rama principal. ¿Qué ocurre?
   - a) El commit se rechaza
   - b) **GitHub cierra el issue #12 automáticamente al llegar el commit** ✔
   - c) Se crea un issue nuevo
   - d) Nada; es texto decorativo

---

## B12 — Labels, milestones y proyectos: organizar el trabajo

### Concepto

Un solo issue (B11) es un pendiente. Cuando tienes veinte, necesitas organización. GitHub te da tres herramientas que se combinan:

1. **Labels (etiquetas)** — etiquetas de colores que clasifican los issues: `bug`, `mejora`, `urgente`, `documentación`. Son los filtros: "muéstrame solo los bugs" se vuelve un clic. Además, los labels te sirven para marcar tareas buenas para empezar: GitHub hasta tiene un label llamado `good first issue` (buen primer issue), usado por proyectos open source para señalar tareas amigables para principiantes (B18).

2. **Milestones (hitos)** — objetivos con fecha de entrega que agrupan issues hacia una meta: "Versión 1.0", "Lanzamiento de la tienda", "Rediseño del catálogo". El milestone te dice en una pantalla cuántos issues lleva completados y cuántos faltan para la meta.

3. **Projects (proyectos)** — tableros estilo kanban con columnas: `To do`, `In progress`, `Done` (por hacer, en curso, hecho). Arrastras los issues entre columnas y ves el flujo del trabajo de un vistazo.

La combinación es así: los **labels** clasifican, los **milestones** fijan la meta con fecha, y los **projects** muestran el estado del flujo. No es burocracia: es que tu yo de la semana que viene (y una IA ejecutora) sepan exactamente qué falta y qué sigue.

Para un proyecto dirigido con IA, esto es oro: en lugar de explicar todo de nuevo, le dices a la IA "trabaja en el issue #11, que está en el milestone Lanzamiento". El estado del proyecto vive en GitHub, no en tu cabeza.

### Analogía

El project es **el tablero de corcho de la cocina**, los labels son **las etiquetas de colores** (verde = falta verdura, rojo = urgencia), y el milestone es **el compromiso pegado en grande**: "Cena del sábado". Nadie grita qué falta: todo está en el tablero, clasificado y con su meta a la vista. Y cualquier cocinero nuevo (o una IA) que llegue sabe qué toca hoy.

### Cómo se ve en la práctica

```
PROJECT:  Lanzamiento Tienda El Güero
┌────────────────┬────────────────┬────────────────┐
│ To do          │ In progress    │ Done           │
│ #13 SEO        │ #12 Cotizar    │ #10 Título     │
│ #14 Reseñas    │ #11 Contacto   │ #9  Catálogo   │
│ [bug] [urgente]│ [mejora]       │                │
└────────────────┴────────────────┴────────────────┘

MILESTONE: Lanzamiento v1.0  (3 de 6 completados · 30 junio)
```

Un vistazo y sabes: quedan 3 pendientes, uno está en curso, y la meta es el 30 de junio. Eso se ve desde el navegador y se comparte con cualquier colaborador o IA.

### Díselo a la IA

> "Tengo un proyecto con estas tareas por hacer: [pégalas]. Organízame los issues en GitHub: propón títulos claros, qué labels usar de los estándar (bug, mejora, documentación), cómo agruparlos en milestones y cómo distribuirlos en las columnas del project."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es la función de un Milestone?
   - a) Clasificar issues por tipo
   - b) **Agrupar issues hacia una meta con fecha de entrega** ✔
   - c) Mostrar el flujo de trabajo en columnas
   - d) Asignar personas a los issues

2. **[relacionar]** Une la herramienta con lo que resuelve:
   - Labels ↔ Clasificar y filtrar issues por tipo o prioridad
   - Milestones ↔ Agrupar issues hacia una meta con fecha
   - Projects ↔ Ver el flujo del trabajo en un tablero

3. **[completar]** "Un label llamado ____ se usa en proyectos open source para señalar tareas amigables para quienes quieren hacer su primera contribución."
   - Banco: `good first issue` · `bug` · `urgente` · `no estoy seguro`
   - Respuesta: good first issue

4. **[verdadero/falso]** "Labels, milestones y projects sirven igual aunque trabajes solo."
   - Respuesta: VERDADERO — son tu agenda pública del proyecto, útil para ti y para cualquier IA ejecutora.

5. **[ordenar]** Acomoda el flujo de trabajo de un issue en un project:
   - Desordenado: `In progress` · `Done` · `crear el issue` · `To do`
   - Respuesta: crear el issue → To do → In progress → Done

---

## B13 — Pull Requests I: qué son y por qué existen

### Concepto

Ya sabes moverte entre ramas (A16–A18) y subir commits (B5). El **Pull Request (PR)** — solicitud de cambios — es el mecanismo formal para llevar los cambios de una rama a otra, normalmente a la rama principal `main`.

¿Por qué no hacer `git push` directo a `main` y ya? Porque el PR introduce tres cosas que el push directo no tiene:

1. **Protección:** nadie puede romper la rama principal a escondidas. Todo cambio pasa por una solicitud visible.
2. **Revisión:** antes de fusionar, alguien revisa el código (B15). Esa revisión es donde se atrapan los errores antes de que lleguen a producción.
3. **Registro:** el PR deja la conversación, los comentarios y las decisiones. Tu yo del futuro (y tus colaboradores) pueden ver por qué se hizo un cambio.

El flujo profesional es este:

```
rama feature (A16–A18) → commits (A8) → git push (B5) → Pull Request → code review (B15) → merge (B16)
```

En el PR hay dos protagonistas: la rama **base** (dónde llega el cambio, normalmente `main`) y la rama **compare** (de dónde vienen los commits). El título dice todo: "Agrega cotizador por WhatsApp a la tienda" le gana a "cambios" por kilómetros.

**Por qué esto es central para tu forma de trabajar:** cuando diriges IA (C12, C23), el flujo típico es que la IA ejecutora cree una rama, haga sus commits y abra un PR. Tú NO fusionas a ciegas: revisas el PR, pides cambios si hace falta, y solo cuando el código está bien le das el merge. El PR es el punto donde tú, como director, ejerces control real sobre lo que la IA produce.

### Analogía

El PR es **el comensal que pide la cuenta, pero antes el chef prueba el plato en la cocina**. El push directo sería el cocinero (tú o la IA) llevando el plato directo a la mesa sin que nadie lo probara: si está mal, el cliente (el usuario final) lo sufre. Con el PR, el plato pasa por una prueba antes de salir a la sala. Y si alguien pide "más sal", queda registrado quién lo pidió y por qué.

### Cómo se ve en la práctica

```
Pull Request #18
Título:  Agrega cotizador por WhatsApp a la tienda
De:      feature/cotizador-whatsapp  →  main

✔ 3 commits aprobados · 1 conversación abierta
   +214 líneas · −12 líneas

Comentario del revisor:
  "El botón no aparece en móvil. Revisa el breakpoint
   de 640px. Fuera de eso, todo bien. ✅"
```

El PR agrupa los commits, muestra cuántas líneas cambiaron, y concentra la conversación de la revisión. Todo antes de que `main` se toque.

### Díselo a la IA

> "Explícame con un ejemplo por qué un Pull Request es mejor que hacer push directo a la rama main cuando trabajo con una IA ejecutora. Enumera los pasos del flujo completo: rama, commits, push, PR, revisión y merge."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un Pull Request?
   - a) Un comando para borrar ramas
   - b) **La solicitud formal para llevar los cambios de una rama a otra, normalmente a main, con revisión incluida** ✔
   - c) Un fork de un proyecto ajeno
   - d) Un issue con código dentro

2. **[verdadero/falso]** "Hacer push directo a main es igual de seguro que un Pull Request."
   - Respuesta: FALSO — el push directo cambia main sin revisión; el PR protege la rama principal y deja registro.

3. **[completar]** "En un PR, la rama ____ es a donde llega el cambio (normalmente main), y la rama ____ es de donde vienen los commits."
   - Banco: `base` · `compare` · `origin` · `backup`
   - Respuesta: base / compare

4. **[ordenar]** Acomoda el flujo profesional completo:
   - Desordenado: `merge` · `Pull Request` · `rama feature` · `commits` · `code review` · `git push`
   - Respuesta: rama feature → commits → git push → Pull Request → code review → merge

5. **[qué hace]** Trabajas con una IA ejecutora que hizo commits en una rama y abrió un PR a main. ¿Cuál es tu papel?
   - a) Fusionar el PR sin mirarlo, la IA nunca falla
   - b) **Revisar el PR, pedir cambios si hace falta, y solo entonces fusionarlo** ✔
   - c) Borrar la rama de la IA
   - d) Hacer push directo a main para adelantar

---

## B14 — Pull Requests II: crear el tuyo paso a paso

### Concepto

En B13 viste la teoría del PR. Aquí el procedimiento, de principio a fin. Vas a crear tu primer PR — a tu propio repositorio, que es la mejor manera de practicar antes de tocar proyectos ajenos (B17 y B18).

**Paso a paso completo:**

1. **Crea una rama** (A17): `git switch -c feature/nueva-funcion`
2. **Trabaja y commitea** (A8): edita archivos, `git add`, `git commit` con mensaje claro.
3. **Sube la rama** (B5): `git push -u origin feature/nueva-funcion`. Fíjate que empujas la rama, no main.
4. **Abre el PR** en GitHub: con la rama recién subida, GitHub te muestra un botón amarillo **"Compare & pull request"**. Si no aparece, ve a la pestaña **Pull requests** → **New pull request**, elige `main` como base y tu rama como compare.
5. **Escribe el PR:** título claro ("Agrega cotizador por WhatsApp") y descripción breve: qué cambia, por qué, y qué deberías revisar tú mismo.
6. **Revisa y fusiona:** en la pestaña *Files changed* revisa tu propio cambio (B15), y cuando estés conforme, botón **Merge pull request** (B16 explica los tipos de merge).
7. **Borra la rama** con el botón que ofrece GitHub al terminar. Tu historial queda limpio.

**Los dos errores clásicos de los principiantes:**

- **El PR sale vacío:** significa que `main` ya está "adelante" de tu rama, es decir, tu rama no trae los cambios recientes de main. Se arregla actualizando tu rama con `git pull origin main` (B6) y volviendo a hacer push.
- **Título genérico:** "cambios" o "actualización" no le dicen nada a nadie. El título del PR es el resumen ejecutivo de tu cambio.

Crear tu propio PR aunque estés solo no es teatro: es entrenar el músculo que usarás en proyectos de equipo y con IAs ejecutoras. Es también el requisito del proyecto final del mes: una rama de feature mergeada vía PR.

### Analogía

Crear un PR es **llevar el platillo terminado al comedor con su carta de presentación**: "Coctel de camarón — camarón fresco, aguacate y salsa de la casa". El cliente (tu revisión) lee la carta, prueba el platillo, y si está bien, lo acepta. El título y la descripción del PR son esa carta: deciden si el platillo se recibe con confianza o con sospecha.

### Cómo se ve en la práctica

```
$ git switch -c feature/cotizador-whatsapp
$ git add index.html styles.css
$ git commit -m "Agrega botón de cotizador por WhatsApp"
$ git push -u origin feature/cotizador-whatsapp

GitHub muestra:
  Compare & pull request      ← botón amarillo

  Pull Request:  feature/cotizador-whatsapp → main
  Título:  Agrega cotizador por WhatsApp a la tienda
  Descripción:  Botón de cotización que abre WhatsApp con
  el mensaje del producto seleccionado. Estilo responsive
  para móvil.
```

Tras el merge, GitHub te ofrece "Delete branch" — acéptalo. La rama ya cumplió su función.

### Díselo a la IA

> "Ya terminé una función nueva en mi proyecto y la subí a una rama. Escríbeme el título y la descripción de un Pull Request: [describe qué cambiaste y por qué]. Quiero que diga qué se agregó, por qué importa, y qué puntos debería revisar yo antes de hacer merge."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el primer paso para abrir un PR desde tu computadora?
   - a) Hacer `git push` directo a main
   - b) **Crear una rama, commitear ahí y subir esa rama** ✔
   - c) Borrar tu repositorio local
   - d) Cerrar todos los issues

2. **[completar]** "Después del merge, GitHub te ofrece borrar la ____ que ya cumplió su función, para que tu historial quede ____."
   - Banco: `rama` · `limpio` · `carpeta` · `escondido`
   - Respuesta: rama / limpio

3. **[verdadero/falso]** "Un PR a tu propio repositorio es una mala práctica porque no trabajas con nadie."
   - Respuesta: FALSO — es la mejor práctica para entrenar el flujo antes de proyectos de equipo y con IA.

4. **[ordenar]** Acomoda los pasos de principio a fin:
   - Desordenado: `git push -u origin feature` · `crear rama` · `revisar y fusionar` · `git add + git commit` · `escribir título y descripción del PR`
   - Respuesta: crear rama → git add + git commit → git push -u origin feature → escribir título y descripción del PR → revisar y fusionar

5. **[qué hace]** Abres un PR y GitHub te dice que tu rama no tiene cambios comparada con main (el PR sale vacío). ¿Qué significa y qué haces?
   - a) Tu código se borró; reescríbelo
   - b) **Tu rama está atrasada respecto a main; actualízala con `git pull origin main` y vuelve a hacer push** ✔
   - c) El PR está listo para fusionarse
   - d) El repositorio es privado

---

## B15 — Code review: revisar código (tuyo, ajeno y de la IA)

### Concepto

El **code review** — la revisión de código — es leer el código de otra persona (o el tuyo) antes de que llegue a la rama principal, y comentar sobre lo que se puede mejorar. Es el momento en que el PR (B13 y B14) cobra su verdadero sentido.

¿Qué se revisa? No es "leer por leer"; es buscar respuestas concretas:

- **¿Hace lo que dice que hace?** El cambio cumple la tarea del issue (B11).
- **¿Rompe algo?** ¿Afecta a otras partes del proyecto?
- **¿Es legible?** ¿Lo entendería tu yo de dentro de 6 meses, o una IA que herede el proyecto?
- **¿Está el caso borde cubierto?** ¿Qué pasa si el usuario no llena el formulario, si la imagen no carga, si la pantalla es de 360px?
- **¿Hay secretos o riesgos?** Contraseñas, keys o datos sensibles (B8 y B28).

El tono importa: el code review es una **conversación constructiva, no una cacería**. Se comenta sobre el código, no sobre la persona. Frases como "¿qué pasa si el usuario toca el botón dos veces?" le ganan a "esto está mal hecho".

**Tu caso más importante:** revisar el código que genera una IA ejecutora (C13 y C24). La IA produce rápido y con confianza, pero no tiene un "sentido de negocio". Tú sí. El code review es exactamente donde tú, como director del proyecto, pones el sello: qué entra a tu código y qué no. Revisar no es desconfiar de la IA: es ser el responsable del resultado.

Y sí, también revisas el tuyo: antes de abrir un PR, vuelve a leer lo que escribiste como si fuera de otro. Ese autocontrol se llama revisar con ojos frescos, y atrapa la mitad de los errores.

### Analogía

El code review es **el control de calidad de la fábrica antes de empacar**. El producto (el código) pasa por una mesa donde alguien lo inspecciona: ¿tiene la pieza correcta? ¿está bien ensamblado? ¿se va a desarmar con el primer cliente que lo use? El inspector no odia al ensamblador: los dos quieren que el producto que sale a la calle no regrese. Tú eres el inspector, y la IA es el ensamblador veloz.

### Cómo se ve en la práctica

En la pestaña *Files changed* de tu PR, ves el diff (A12) con comentarios en línea:

```
@@ -34,6 +34,9 @@ function abrirCotizador() {

   const producto = document.querySelector('.producto');
   const url = `https://wa.me/52${numero}?text=${producto}`;

+  if (!producto) return;          ← ✔ bien: cubre el caso sin producto
-  window.open(url, '_blank');     ← ¡cuidado! si numero está vacío,
                                    ← se abre WhatsApp sin destinatario.
                                    → agregar validación de número
```

Tú apruebas el cambio, pides cambios, o dejas comentarios. Cada comentario queda enlazado al PR, para que la IA ejecutora (o tú) lo atienda puntual.

### Díselo a la IA

> "Te voy a dar un fragmento de código que generaste para mi proyecto. Revísalo como si fueras un senior haciendo code review: dime si cumple lo que promete, si hay casos borde sin cubrir, si hay problemas de rendimiento o seguridad, y sugiere mejoras concretas. Sé directo y específico."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es el objetivo principal del code review?
   - a) Encontrar errores de la persona que escribió el código
   - b) **Atrapar problemas antes de que lleguen a main, mejorando el código con una conversación** ✔
   - c) Hacer que los PRs tarden más
   - d) Sustituir los tests

2. **[verdadero/falso]** "Revisar el código que genera una IA es desconfiar de la IA."
   - Respuesta: FALSO — es asumir la responsabilidad del resultado; la IA propone, tú apruebas.

3. **[completar]** "El code review es una conversación ____: se comenta sobre el ____, no sobre la persona."
   - Banco: `constructiva` · `código` · `destructiva` · `presupuesto`
   - Respuesta: constructiva / código

4. **[relacionar]** Une la pregunta de revisión con lo que busca:
   - "¿Hace lo que dice que hace?" ↔ Que cumpla el issue
   - "¿Qué pasa si no llenan el formulario?" ↔ El caso borde
   - "¿Hay contraseñas en el código?" ↔ La seguridad
   - "¿Lo entendería mi yo del futuro?" ↔ La legibilidad

5. **[qué hace]** Estás revisando el PR de una IA ejecutora y ves que el botón de cotización se abre sin validar el número de teléfono. ¿Qué haces?
   - a) Hago merge: el número siempre viene
   - b) **Dejo un comentario pidiendo validación, porque es un caso borde real que puede romper la función** ✔
   - c) Borro la rama de la IA
   - d) Cierro el repositorio

---

## B16 — Merge de un PR: squash, rebase o merge commit

### Concepto

Llegaste al momento final del PR (B13 y B14): todo revisado, aprobado, y ahora el botón **Merge pull request**. Antes de oprimirlo, GitHub te ofrece tres formas de fusionar, y cada una deja un historial distinto. Elegir bien es elegir la historia que tu repo va a contar.

1. **Create a merge commit (merge commit):** une la rama con main creando un commit especial de unión. El historial conserva TODOS los commits de la rama, en orden y con sus autores, más ese commit de fusión. Es la opción más fiel: cuenta la historia completa del trabajo, incluidos los tropiezos.
2. **Squash and merge:** comprime todos los commits de la rama en UN solo commit. El historial de main queda limpio: un commit por función terminada, como capítulos de un libro. Se pierden los commits intermedios ("arreglo typo", "intento 2").
3. **Rebase and merge:** reescribe los commits de la rama para que se acomoden justo después de los de main, sin commit de fusión. El historial queda lineal y ordenado cronológicamente, como si la rama nunca hubiera existido por separado.

¿Cuál elegir? Para tu proyecto personal y el flujo con IA ejecutora: **squash es la recomendación estándar**. Cada función = un commit en main. El historial queda como la lista de lo que lograste, sin el ruido de los commits intermedios que la IA genera mientras itera.

¿Cuándo NO squash? Cuando el equipo necesita conservar la historia fina — por ejemplo, si cada commit es una unidad significativa que se revisó por separado. Ahí gana el merge commit o el rebase.

Un detalle honesto sobre el rebase: reescribe historia. Si la rama ya fue compartida con otros y la rebaseas, puedes crear commits duplicados para ellos. En el botón de GitHub no es un problema real porque aplica tus commits frescos sobre main — pero entiende que el rebase toca la línea del tiempo, y la línea del tiempo compartida no se borra.

### Analogía

Fusionar es pegar tus páginas al cuaderno principal. El merge commit pega las páginas tal cual, con todas tus anotaciones y un separador que dice "aquí se unió". El squash saca una sola página final limpia por cada capítulo que escribiste. El rebase reescribe tus páginas en el orden cronológico justo del cuaderno, como si siempre hubieran estado ahí. El cuaderno final se ve distinto según cómo pegues.

### Cómo se ve en la práctica

```
Merge pull request #18                    ▼ desplegable
┌───────────────────────────────────────────────┐
│ ▸ Create a merge commit   — conserva TODO     │
│ ▸ Squash and merge        — un solo commit ✔  │
│ ▸ Rebase and merge        — historia lineal   │
└───────────────────────────────────────────────┘

Historial de main con SQUASH:
  f9c22a1  Agrega cotizador por WhatsApp (#18)
  3b7d901  Arregla el título en móvil
  88a9f00  Primer commit: página base

Historial de main con MERGE COMMIT:
  4c11e2f  Merge pull request #18
  2d90c33  ajuste final de estilo         (de la rama)
  1f88b34  agrega cotizador por WhatsApp  (de la rama)
  88a9f00  Primer commit: página base
```

En GitHub eliges la opción y el botón cambia de texto. Si trabajas con IA ejecutora y quieres historial limpio, tu opción por defecto es **squash and merge**.

### Díselo a la IA

> "Explica con ejemplos la diferencia entre merge commit, squash and merge y rebase and merge al fusionar un Pull Request. Para un proyecto personal en el que trabajo dirigiendo una IA, ¿cuál me conviene como opción por defecto y por qué? Muestra cómo se vería el historial de `git log` en cada caso."

### Ejercicios

1. **[opción múltiple]** ¿Qué hace "Squash and merge"?
   - a) Borra todos los commits de la rama
   - b) **Comprime todos los commits de la rama en uno solo, dejando limpio el historial de main** ✔
   - c) Duplica los commits en main
   - d) Crea un commit especial de unión conservando todos los commits

2. **[completar]** "La opción ____ conserva todos los commits de la rama y agrega un commit especial de ____; la opción squash los comprime en ____ solo."
   - Banco: `merge commit` · `unión` · `uno` · `dos`
   - Respuesta: merge commit / unión / uno

3. **[relacionar]** Une la opción de merge con el historial que deja:
   - Merge commit ↔ Conserva todos los commits + commit de fusión
   - Squash and merge ↔ Un solo commit por función
   - Rebase and merge ↔ Historial lineal, sin commit de fusión

4. **[verdadero/falso]** "Para un proyecto personal con IA ejecutora, squash and merge es la opción recomendada por defecto porque mantiene main como una lista de funciones terminadas."
   - Respuesta: VERDADERO — un commit limpio por función, sin el ruido de los commits intermedios.

5. **[qué hace]** Haces merge con "Squash and merge" y luego corres `git log`. ¿Qué ves?
   - a) Todos los commits de la rama más uno de fusión
   - b) **Un solo commit nuevo en main con los cambios completos de la rama** ✔
   - c) Los commits de la rama reordenados cronológicamente, sin commit de fusión
   - d) Ningún commit nuevo; el merge falló

---

## B17 — Forks: copiar el proyecto de alguien más

### Concepto

En B7 clonaste un proyecto ajeno a tu computadora. El **fork** es otra forma de copiar, pero con una diferencia clave: la copia vive en TU cuenta de GitHub, no en tu máquina. Es el botón **Fork** arriba a la derecha de cualquier repositorio público.

¿Qué cambia con un fork?

- La URL cambia: `github.com/el-autor/proyecto` se vuelve `github.com/tu-usuario/proyecto`. Ya no es el proyecto de otro: es TU copia, en TU cuenta, editable.
- Tu fork mantiene un vínculo con el original (llamado **upstream**): puedes traer los cambios nuevos que el autor publique.
- El original NO se afecta. Nadie ve tu fork ni tus cambios a menos que tú los compartas.

¿Para qué se usa? Principalmente para **contribuir a open source** (B18): haces fork del proyecto, clonas tu fork, creas una rama, haces tus cambios y se los propones al original con un Pull Request (B14). El PR no va de tu computadora al repo ajeno: va de tu fork al repo ajeno.

También sirve para **crear tu propia versión**: puedes tomar algo que alguien más hizo, adaptarlo a tu negocio y llevarlo por otro camino. Eso es legal y normal en open source (la licencia pone las reglas, B27).

La confusión más común: **fork vs clone**. El clon baja a tu computadora; el fork copia dentro de GitHub. Los usas en cadena: primero fork (la copia tuya en GitHub), luego clone de tu fork (la copia en tu computadora). Cuando el proyecto original avanza, te pones al día con `git fetch upstream` y `git merge upstream/main` (B6).

### Analogía

El fork es **hacerte de tu propia copia de un libro para anotarla y modificarla a tu gusto**, mientras el original sigue en la librería intacto. Si tu anotación es buena, se la puedes mandar al autor para que la incluya en la siguiente edición — eso es el Pull Request. El clon, en cambio, era solo leerte una copia en préstamo: no podías anotarla ni devolverla modificada.

### Cómo se ve en la práctica

```
github.com/luisperez/tienda-ejemplo      ← repo original
   └── [Fork]  (botón arriba a la derecha)

github.com/tu-usuario/tienda-ejemplo     ← tu fork (tu cuenta)

$ git clone https://github.com/tu-usuario/tienda-ejemplo.git
$ git remote add upstream https://github.com/luisperez/tienda-ejemplo.git

$ git fetch upstream                     ← bajar cambios del original
$ git merge upstream/main                ← aplicarlos a tu copia
```

Tu `origin` apunta a TU fork; `upstream` apunta al original. Con ese segundo remoto (B4) te mantienes al día con lo que el autor publique.

### Díselo a la IA

> "Explícame la diferencia entre fork y clone con un ejemplo concreto. Después dame los comandos exactos para: hacer fork de un proyecto en GitHub, clonar mi fork, conectar el repositorio original como upstream, y traer los cambios nuevos del original a mi copia."

### Ejercicios

1. **[opción múltiple]** ¿Dónde vive un fork?
   - a) En tu computadora
   - b) **En tu cuenta de GitHub, como una copia editable del proyecto ajeno** ✔
   - c) En el repositorio original
   - d) En un servidor de Microsoft

2. **[completar]** "El fork es la copia del proyecto en tu cuenta de ____; el clon es la copia en tu ____. El vínculo hacia el proyecto original se llama ____."
   - Banco: `GitHub` · `computadora` · `upstream` · `main`
   - Respuesta: GitHub / computadora / upstream

3. **[verdadero/falso]** "Cuando haces fork de un proyecto y haces cambios, esos cambios se reflejan automáticamente en el proyecto original."
   - Respuesta: FALSO — tu fork es independiente; para que el original reciba tus cambios debes proponer un Pull Request.

4. **[ordenar]** Acomoda el flujo para proponer un cambio a un proyecto ajeno:
   - Desordenado: `clonar tu fork` · `hacer fork en GitHub` · `Pull Request al original` · `rama + commits` · `push a tu fork`
   - Respuesta: hacer fork en GitHub → clonar tu fork → rama + commits → push a tu fork → Pull Request al original

5. **[qué hace]** Quieres tu propia versión de un proyecto ajeno, solo para adaptarla a tu negocio, sin proponérsela al autor. ¿Qué haces?
   - a) Hago push directo al repositorio del autor
   - b) **Hago fork del proyecto y trabajo sobre mi copia; el original no se toca** ✔
   - c) Borro el proyecto original
   - d) Hago un PR sin cambiar nada

---

## B18 — Tu primera contribución a open source

### Concepto

Llegó el momento de devolver al mundo: contribuir a **open source**. Un proyecto open source es un repo público donde cualquiera puede leer el código y —con el flujo correcto— proponer mejoras. Ya tienes todas las herramientas: fork (B17), ramas (A16–A18), PR (B14), issues (B11) y code review (B15). Aquí se juntan todas.

¿Por qué importa para ti? Porque un PR **aceptado en un proyecto real** es la prueba más fuerte de que sabes trabajar en el ecosistema real: seguiste convenciones, coordinaste con desconocidos y sobreviviste a una revisión. Es oro de portafolio (B2).

Cómo encontrar tu primera tarea:

1. Busca proyectos con el label **`good first issue`** (B12): tareas diseñadas para principiantes.
2. Lee el archivo **CONTRIBUTING.md**: las reglas del proyecto para contribuir. Muchos lo ignoran; tú no.
3. Elige tareas pequeñas y de bajo riesgo: errores en documentación, typos, traducciones, enlaces rotos, algún bug simple. NO intentes reescribir el motor del proyecto en tu primera vez.

El flujo: haces fork (B17) → clonas tu fork → creas rama → haces el cambio → push a tu fork → abres el PR al original describiendo qué arreglaste (referencia el issue con `fixes #12` si aplica, B11) → esperas la revisión.

La realidad que nadie te cuenta: tu PR puede esperar días, recibir comentarios pidiendo cambios (B15) y hasta ser rechazado. Eso no es fracaso: es el proceso. Responde con educación, aplica los cambios y aprende. La gente que mantiene proyectos respeta a quien insiste con calidad.

Lo que NO debes hacer jamás: abrir PRs sin leer CONTRIBUTING, mandar PRs vacíos o de "spam" para sumar actividad, ni tocar archivos que no entiendes sin preguntar. Un PR mal hecho pesa más que no hacer nada.

### Analogía

Contribuir a open source es **llegar a ayudar al comité de la plaza del pueblo**. No llegas a repavimentar la avenida de entrada: empiezas barriendo, arreglando el letrero que está caído, traduciendo los avisos. El comité ve que trabajas en serio y te va dando tareas más grandes. Tu primer PR es tu primera jornada de barrido: modesta, pero es como te abres camino.

### Cómo se ve en la práctica

```
PR #87 → luisperez/tienda-ejemplo
Título:  Corrige el enlace roto del README
De:      tu-usuario:fix/enlace-readme  →  main

Cambio:
 - "documentacion/guia.md"      (404)
 + "docs/guia.md"               (correcto)

Referencia: fixes #12
Descripción: El enlace de la guía apuntaba a una ruta
inexistente. Lo corregí según la estructura actual del repo.
```

Un PR pequeño, claro y que referencia el issue. Eso es todo lo que necesitas para tu primera contribución — y es exactamente lo que los mantenedores aceptan con gusto.

### Díselo a la IA

> "Quiero hacer mi primera contribución a open source. Dime: cómo encontrar proyectos con el label `good first issue`, qué cosas debo revisar en un proyecto antes de contribuir (como CONTRIBUTING.md), y escríbeme el texto de un Pull Request correcto para corregir un enlace roto en un README, que referencie el issue #12."

### Ejercicios

1. **[opción múltiple]** ¿Cuál es una buena primera contribución a open source?
   - a) Reescribir el motor del proyecto
   - b) **Arreglar un typo o un enlace roto en la documentación** ✔
   - c) Borrar archivos que no entiendes
   - d) Abrir varios PRs iguales para sumar actividad

2. **[ordenar]** Acomoda el flujo completo de una contribución:
   - Desordenado: `abrir el PR al original` · `rama + cambios` · `fork del proyecto` · `push a tu fork` · `clonar tu fork`
   - Respuesta: fork del proyecto → clonar tu fork → rama + cambios → push a tu fork → abrir el PR al original

3. **[verdadero/falso]** "Tu PR puede esperar días, recibir comentarios pidiendo cambios e incluso ser rechazado, y eso es señal de que debiste elegir otro proyecto."
   - Respuesta: FALSO — eso es el proceso normal de revisión; respondes, aplicas cambios y aprendes.

4. **[completar]** "El label ____ señala tareas amigables para principiantes, y el archivo ____ contiene las reglas del proyecto para contribuir."
   - Banco: `good first issue` · `CONTRIBUTING.md` · `README.md` · `main`
   - Respuesta: good first issue / CONTRIBUTING.md

5. **[qué hace]** Encuentras un proyecto con el label `good first issue`, haces el cambio en una rama de tu fork y lo empujas. ¿Qué sigue?
   - a) Hacer push a la rama main del proyecto original
   - b) **Abrir un Pull Request desde tu fork hacia el repo original** ✔
   - c) Borrar tu fork
   - d) Nada; el cambio ya quedó publicado

---

## B19 — GitHub Actions: cuando el robot trabaja por ti

### Concepto

**GitHub Actions** es el sistema de automatización de GitHub: tú defines "recetas" (llamadas **workflows**) que el servidor de GitHub ejecuta por ti cada vez que pasa algo en tu repo — un push, un PR abierto, una fecha programada. Mientras tú duermes o la IA commitea, el robot revisa el código.

¿Qué hacen los workflows en la práctica?

- Correr los tests automáticamente en cada push
- Revisar formato o estilo del código
- Construir (build) el proyecto y verificar que compila
- Desplegar (deploy) el sitio a producción
- Avisarte cuando algo falla

Los workflows viven en la carpeta `.github/workflows/` y se escriben en **YAML** (un formato de configuración de datos). No necesitas ser experto en YAML: esa es una tarea perfecta para tu IA (B15), que te lo genera y tú lo revisas.

La anatomía de un workflow: un **nombre**, los **eventos** que lo disparan (`on`), y uno o más **jobs** con **steps** (pasos). Cada paso usa una "action" (una receta ya hecha de la comunidad) o un comando que tú escribes.

Por qué importa: esto es **CI/CD** (integración y despliegue continuos). Significa que cada cambio pasa por control de calidad automático ANTES de fusionarse — y se enlaza directo con la protección de ramas (B22): puedes configurar que un PR no se fusione si el robot no pasó. La IA ejecutora hace commits; el robot los verifica; tú decides con datos.

Riesgo real: los workflows corren código en servidores de GitHub. Por eso usa solo **actions oficiales o de fuentes confiables**, no copies un workflow cualquiera que "hace magia" sin entenderlo (B28: misma lógica que con los secretos). Revisar qué acción estás dejando correr es parte de tu responsabilidad como director.

### Analogía

GitHub Actions es **el control de calidad de la fábrica que trabaja de noche**. Cada pieza que llega (un push) pasa por la banda automática: se pesa, se prueba y se mide. Si la pieza no cumple, se aparta y nadie la empaca (no hay merge). Tú llegas por la mañana, ves el reporte y decides. No tienes que estar parado en la banda viendo cada pieza: el robot hace la inspección repetitiva por ti.

### Cómo se ve en la práctica

Un workflow mínimo que revisa tu sitio en cada push:

```
.github/workflows/revisar.yml

name: Revisar página
on: [push, pull_request]

jobs:
  revisar:
    runs-on: ubuntu-latest
    steps:
      - name: Bajar el código
        uses: actions/checkout@v4
      - name: Verificar que el HTML existe
        run: |
          test -f index.html && echo "index.html OK"
          test -f styles.css && echo "styles.css OK"
```

En la pestaña **Actions** de tu repo ves cada ejecución: ✓ verde si pasó, ✗ rojo si falló, con el detalle de cuál paso falló y por qué. Si configuras B22 para exigir este check, un PR con fallo no se puede fusionar.

### Díselo a la IA

> "Tengo un sitio estático con HTML, CSS y JS en un repositorio de GitHub. Escríbeme un workflow de GitHub Actions en .github/workflows/ que se ejecute en cada push y en cada pull request, que descargue el código y verifique que los archivos principales existen y que el HTML tiene estructura válida. Explícame cada línea del YAML."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un workflow de GitHub Actions?
   - a) Un juego dentro de GitHub
   - b) **Una receta de automatización que GitHub ejecuta cuando pasa algo en tu repo** ✔
   - c) Una rama especial del repositorio
   - d) Un tipo de issue

2. **[completar]** "Los workflows viven en la carpeta ____ y se escriben en formato ____. Verificar cada cambio automáticamente se llama ____."
   - Banco: `.github/workflows/` · `YAML` · `CI/CD` · `.git/`
   - Respuesta: .github/workflows/ / YAML / CI/CD

3. **[relacionar]** Une el concepto del workflow con su función:
   - `on` ↔ Qué evento dispara el workflow
   - `jobs` ↔ Los trabajos que se ejecutan
   - `steps` ↔ Los pasos concretos de cada trabajo
   - `uses` ↔ La acción de la comunidad que se reutiliza

4. **[verdadero/falso]** "Cualquier workflow que encuentres en internet es seguro de copiar tal cual."
   - Respuesta: FALSO — los workflows corren código en servidores de GitHub; solo usa actions oficiales o confiables.

5. **[qué hace]** Configuras un workflow y proteges la rama main (B22) para que exija ese check. La IA ejecutora sube un PR con un error en index.html. ¿Qué pasa?
   - a) El PR se fusiona automáticamente
   - b) **El robot falla y el PR NO se puede fusionar hasta que el check pase** ✔
   - c) GitHub borra el PR
   - d) El error se corrige solo

---

## B20 — GitHub Pages: publicar tu sitio gratis desde el repo

### Concepto

Recuerda la página que construiste en el Mes 1 (C16) y cómo la publicaste. Hay otra forma de publicar, y es la más directa de todas: **GitHub Pages** hospeda tu sitio gratis, directamente desde tu repositorio. No pagas hosting, no configuras servidores: tu repo ES la fuente del sitio.

Cómo funciona: eliges una rama (normalmente `main`), y GitHub toma los archivos de esa rama y los publica en una URL pública automática:

```
https://tu-usuario.github.io/nombre-del-repo/
```

Configuración en 3 pasos: Settings → Pages → **Source**: Deploy from a branch → eliges `main` y carpeta `/ (root)` → Save. En un par de minutos tu sitio está vivo. Y lo mejor: **cada vez que haces push a esa rama, el sitio se actualiza solo.** Tu flujo queda circular: editas → commiteas → push → el mundo ve la versión nueva.

Límites honestos: GitHub Pages sirve **sitios estáticos** (HTML, CSS, JS puro) — exactamente lo que construyes tú. No es para aplicaciones que necesitan un servidor por detrás, bases de datos o lógica de back end. Para eso hay otros servicios.

Detalles útiles:

- El repo debe ser **público** para usar Pages gratis en una cuenta normal — pero eso es una ventaja para ti: tu sitio publicado y tu código visible son tu portafolio (B2).
- Si el nombre del repo coincide con tu usuario (`tu-usuario/tu-usuario`), la URL es `https://tu-usuario.github.io/` — tu página principal.
- Puedes ponerle tu propio dominio (por ejemplo `tusitio.com`) desde la misma sección Pages.

Cuando tengas el sitio vivo, **ponle el enlace en tu README** (B9): "Demo: https://tu-usuario.github.io/tienda". Esa es la portada completa que un visitante o un cliente necesita ver.

### Analogía

GitHub Pages es **colgar tu propio letrero a la calle, gratis, y que un impresor lo vuelva a pintar solo cada vez que cambias el diseño**. No alquilas el local ni contratas al rotulista: pones tu diseño en la vitrina (el repo), y el letrero se actualiza automáticamente en la fachada. Todo el mundo que pase por esa dirección lo ve.

### Cómo se ve en la práctica

```
Settings → Pages
Source:     (•) Deploy from a branch
Branch:     main  •  / (root)
[Save]

Después de unos minutos:
✔ Your site is live at https://tu-usuario.github.io/tienda-el-guero/

Y en el README (B9):
## Demo
🔗 https://tu-usuario.github.io/tienda-el-guero/
```

Cada `git push` a main publica la versión nueva. Tu página del Mes 1, versionada (Materia A) y publicada gratis desde el repo.

### Díselo a la IA

> "Tengo un sitio estático (HTML, CSS, JS) en un repositorio de GitHub y quiero publicarlo con GitHub Pages. Dame los pasos exactos en la interfaz, qué configuración elegir, cómo se ve la URL resultante, y qué le pongo en el README para enlazar la demo."

### Ejercicios

1. **[opción múltiple]** ¿Qué es GitHub Pages?
   - a) Un editor de código dentro de GitHub
   - b) **Hospedaje gratuito de sitios estáticos directamente desde tu repositorio** ✔
   - c) Un servicio de pago para bases de datos
   - d) Una red social de programadores

2. **[ordenar]** Acomoda el flujo para publicar tu sitio:
   - Desordenado: `hacer push a main` · `elegir branch y carpeta en Settings → Pages` · `ver el sitio en tu-usuario.github.io/repo/` · `tener el repo con el sitio`
   - Respuesta: tener el repo con el sitio → elegir branch y carpeta en Settings → Pages → hacer push a main → ver el sitio en tu-usuario.github.io/repo/

3. **[verdadero/falso]** "Cada vez que haces push a la rama configurada, GitHub Pages actualiza tu sitio automáticamente."
   - Respuesta: VERDADERO — tu flujo queda circular: editas, commiteas, push, y el mundo ve la versión nueva.

4. **[completar]** "GitHub Pages sirve sitios ____ (HTML, CSS, JS puro), no aplicaciones que necesitan un ____ por detrás. En una cuenta normal el repo debe ser ____."
   - Banco: `estáticos` · `servidor` · `público` · `dinámicos`
   - Respuesta: estáticos / servidor / público

5. **[qué hace]** Terminas de configurar GitHub Pages y tu repo se llama `tienda-el-guero`. Tu usuario es `rayflores`. ¿Dónde queda tu sitio?
   - a) https://github.com/tienda-el-guero
   - b) **https://rayflores.github.io/tienda-el-guero/** ✔
   - c) https://rayflores.com
   - d) https://tienda-el-guero.netlify.app

---

## B21 — Colaboradores y permisos: quién puede hacer qué

### Concepto

Cuando tu proyecto crece, tienes que decidir quién puede hacer qué. GitHub organiza eso con **roles**, ordenados de menor a mayor poder:

- **Read (lectura):** solo puede ver y clonar el repo. Para espectadores: clientes, curiosos, gente que quiere aprender.
- **Triage:** puede administrar issues y PRs (etiquetas, cerrar, asignar) pero NO tocar el código.
- **Write (escritura):** puede empujar commits a ramas y abrir/fusionar PRs. Ya es poder de edición real.
- **Maintain:** administra casi todo del repo, salvo las decisiones más sensibles (permisos).
- **Admin:** control total: cambia permisos, borra el repo, configura todo. El poder máximo.

Cómo invitas: Settings → Collaborators → Add people, y eliges el rol. El dueño (owner) de la cuenta tiene más poder que cualquier rol.

Ahora los riesgos reales, que importan más que la teoría:

1. **Write es poder de edición.** Quien tiene Write puede hacer push directo a main (si no hay protección, B22) y romper el proyecto sin pedir permiso. Solo a quien confíes de verdad.
2. **Admin es casi total.** Un Admin puede borrar el repo, eliminar colaboradores y cambiar la visibilidad. Nunca se lo des a un "colaborador casual" ni a un cliente.
3. **Tokens de IA:** cuando una IA ejecutora (C23) trabaja sobre tu repo, se conecta con un token. Regla de oro: dale el **mínimo permiso necesario** para la tarea, nunca un token con acceso a todo tu GitHub (B28).

La regla se llama **privilegio mínimo**: cada persona o herramienta recibe el permiso más pequeño con el que puede hacer su trabajo. Un cliente necesita ver (Read), quizá reportar issues (Triage); no necesita llaves del taller. Y si alguien deja de colaborar: Settings → Collaborators → retiras el acceso. Retirar acceso es normal y no es personal.

Para tu caso típico: tu repo, tú Admin; un cliente o socio, Read (o Triage); una IA ejecutora, un token limitado al repo. Así proteges el trabajo y duermes tranquilo.

### Analogía

Los roles son las **llaves de tu casa**. Read es asomarse por la ventana: ves sin tocar. Triage es revisar el buzón y apartar el correo, sin entrar. Write es tener la llave del taller: entras, trabajas, pero no decides sobre la propiedad. Admin son las llaves maestras y la escritura: con ellas se puede vender la casa. Le entregas las llaves maestras al que vino a pintar una pared, y el problema no lo trae la pintura: lo trae tu decisión.

### Cómo se ve en la práctica

```
Settings → Collaborators

Nombre           Rol actual       Acceso
Mariana V.       Maintain         ✓
Ing. Torres      Read             (solo ve, no toca)
IA-ejecutora     token (write)    limitado al repo

Rol            Puede hacer
─────────────────────────────────────────────
Read           ver y clonar
Triage         issues y PRs, sin tocar código
Write          push y merge de PRs
Maintain       casi todo el repo
Admin          todo, incluido borrar y permisos
```

Antes de invitar a alguien, pregúntate: ¿cuál es el mínimo rol con el que puede hacer su trabajo? Esa es la respuesta correcta.

### Díselo a la IA

> "Voy a agregar colaboradores a mi repositorio de GitHub. Los roles posibles son Read, Triage, Write, Maintain y Admin. Dame una guía de a quién le conviene cada rol para estos casos: un cliente que quiere ver avances, una IA ejecutora que hará commits, un socio que administra el proyecto, y un amigo que solo reporta errores. Incluye los riesgos de cada permiso."

### Ejercicios

1. **[opción múltiple]** ¿Qué puede hacer alguien con rol Read?
   - a) Hacer push a main
   - b) **Ver y clonar el repositorio, sin tocar el código** ✔
   - c) Borrar el repositorio
   - d) Cambiar permisos de otros

2. **[relacionar]** Une el rol con su poder:
   - Read ↔ Ver y clonar
   - Triage ↔ Administrar issues y PRs sin tocar código
   - Write ↔ Hacer push y fusionar PRs
   - Admin ↔ Control total, incluido borrar el repo

3. **[verdadero/falso]** "Dar rol Admin a un cliente que solo quiere ver avances es una práctica segura."
   - Respuesta: FALSO — Admin puede borrar el repo y cambiar permisos; un cliente que solo ve necesita Read.

4. **[completar]** "La regla se llama privilegio ____: cada persona o herramienta recibe el permiso más ____ con el que puede hacer su trabajo."
   - Banco: `mínimo` · `pequeño` · `máximo` · `grande`
   - Respuesta: mínimo / pequeño

5. **[qué hace]** Una IA ejecutora va a trabajar sobre tu repo con un token. ¿Cuál es la configuración correcta?
   - a) Un token con acceso a todas tus cuentas y repos
   - b) **Un token limitado solo al repositorio de la tarea, con el menor permiso necesario** ✔
   - c) Tu contraseña normal de GitHub
   - d) El token de administrador de tu cuenta

---

## B22 — Protección de ramas: candados que evitan desastres

### Concepto

La **protección de ramas** (branch protection) son reglas que GitHub impone ANTES de aceptar un cambio en una rama — normalmente `main`. Sin protección, cualquiera con Write (B21) puede hacer push directo a main y romper el proyecto. Con protección, main se defiende sola.

La configuración está en Settings → Branches → **Add branch protection rule**, y las reglas clave son:

- **Require a pull request before merging:** prohíbe el push directo a la rama; todo cambio debe pasar por un PR (B13). Puedes exigir además que **un revisor apruebe** (B15), con un revisor asignado o incluso dos.
- **Require status checks to pass:** el PR no se fusiona si un check falla — por ejemplo el workflow de GitHub Actions (B19). "No se fusiona el rojo."
- **Require linear history:** obliga a usar rebase o squash (B16), historial sin commits de fusión.
- **Block force pushes:** prohíbe el `git push --force`, que escribe sobre la historia y puede borrar commits ajenos.
- **Block deletions:** nadie puede borrar la rama protegida.

¿Por qué esto te importa aunque trabajes solo? Porque es la red de seguridad de tu proyecto con IA (C23). Una IA ejecutora con permiso de Write podría empujar un cambio roto directo a main. Con la protección activa, es **imposible**: todo pasa por PR y por tu revisión. La regla te obliga a ser el director que ya decidiste ser.

Riesgo real que evita: un colaborador (o tú mismo en un mal día) hace `git push` con un error grave a main; la página publicada (B20) se actualiza al instante y el mundo ve tu sitio roto. Con protección, ese push ni siquiera se acepta: el error queda atrapado en el PR, en la rama, fuera de producción.

Matices honestos: la protección no es para impedirte trabajar, es para ordenar cómo entra el trabajo. Tú mismo tendrás que abrir un PR para cambiar main — y eso es bueno: es el flujo profesional (B13) y el que tu repo demuestra. Y un detalle: el administrador puede configurar si él mismo se salta la regla o no; decide tú qué tan estricto es tu candado.

### Analogía

La protección de ramas es **el candado de la bodega principal**, donde guardas el inventario que sale a la calle. Antes era libre: cualquiera con llave entraba, acomodaba y a veces rompía cosas sin avisar. Ahora la puerta tiene reglas escritas: todo lo que entra lleva su nota de autorización (PR), pasa por inspección (revisión) y cumple los controles de calidad (checks). Ni el dueño entra sin pasar por la regla — y es precisamente por eso que la bodega ya no se desordena.

### Cómo se ve en la práctica

```
Settings → Branches → Add branch protection rule

Branch name pattern:  main

☑ Require a pull request before merging
   ☑ Require approvals         (1)
☑ Require status checks to pass before merging
   ☑ revisar-pagina            (el workflow de B19)
☑ Block force pushes
☑ Block deletions
```

Desde ahora, intentar `git push` directo a main responde con un rechazo: los cambios solo entran vía PR, con revisor aprobado y checks en verde. El candado está puesto.

### Díselo a la IA

> "Trabajo con una IA ejecutora que tiene permiso de escritura en mi repositorio. Explícame por qué debo proteger la rama main y qué reglas conviene activar: pull requests obligatorios, aprobación de revisor, checks de GitHub Actions, bloqueo de force push y de borrado. Muéstrame los pasos en Settings y un ejemplo de qué pasa si alguien intenta hacer push directo a main."

### Ejercicios

1. **[opción múltiple]** ¿Qué logra "Require a pull request before merging" en la rama protegida?
   - a) Que nadie pueda ver la rama
   - b) **Que todo cambio a esa rama pase sí o sí por un PR, prohibiendo el push directo** ✔
   - c) Que la rama se borre sola
   - d) Que solo el dueño pueda clonar

2. **[verdadero/falso]** "Con protección activa, un push directo a main que contiene un error grave se publica igual y rompe el sitio."
   - Respuesta: FALSO — la protección rechaza el push directo; el error queda atrapado en el PR, fuera de producción.

3. **[completar]** "Las reglas de protección viven en Settings → ____. La opción de exigir que un ____ apruebe antes del merge se llama Require ____."
   - Banco: `Branches` · `revisor` · `approvals` · `main`
   - Respuesta: Branches / revisor / approvals

4. **[relacionar]** Une la regla con lo que impide o exige:
   - Require a pull request ↔ Prohíbe el push directo
   - Require status checks ↔ No fusiona si el check falla (B19)
   - Block force pushes ↔ No escribe sobre la historia
   - Block deletions ↔ Nadie borra la rama protegida

5. **[qué hace]** La rama main está protegida. Una IA ejecutora hace `git push` directo a main con un cambio roto. ¿Qué ocurre?
   - a) El cambio se publica y el sitio se rompe
   - b) **GitHub rechaza el push; la IA debe abrir un PR y pasar la revisión y los checks** ✔
   - c) GitHub borra el repositorio
    - d) El cambio se sube a otra rama automáticamente

---

## B23 — Releases y changelogs: comunicar qué cambió

### Concepto

Ya sabes marcar versiones con tags (A23). Los **Releases** son la vitrina pública de esas versiones en GitHub: un release toma un tag y le agrega notas, un título, y si el proyecto lo requiere, archivos adjuntos. Es el "comunicado oficial" de cada versión de tu proyecto.

El **changelog** es el documento donde se lista qué cambió en cada versión: funciones nuevas, errores corregidos, cambios que rompen. No es para la máquina: es para las personas (y las IAs) que usan tu proyecto y necesitan saber si una versión nueva les da algo o les rompe algo.

La estructura estándar (el formato llamado *Keep a Changelog*) usa cuatro secciones:

- **Added** — funciones nuevas
- **Changed** — cambios en lo que ya existía
- **Fixed** — errores corregidos
- **Removed** — cosas que se quitaron

Regla de oro: el changelog se escribe desde la perspectiva del **usuario**, no del código interno. "Corrige el botón de cotizar en iPhone" le gana a "refactoriza el handler de eventos". Y va de arriba hacia abajo: la versión más reciente primero.

Por qué te importa como director de IA: cada release es un hito cumplido (B12). Cuando tu IA ejecutora termina una iteración, tú decides si merece release, le pones las notas y comunicas. El release es tu acta de entrega: el documento público de que esto avanzó.

### Analogía

El release es la **nota de prensa de tu producto**, y el changelog es la **libreta de cambios en la entrada de la tienda**: "Hoy: nueva sección de reseñas · Se arregló el bug de pago en móvil · Ya no existe el descuento del lunes". El cliente lee la libreta para saber qué cambió antes de entrar. Tu changelog es esa libreta, y el release es el anuncio con bocina de que la versión nueva ya está aquí.

### Cómo se ve en la práctica

```
Releases
─────────
v1.2.0  ·  hace 3 días  ·  [Latest]
  Qué hay de nuevo:
  - Agrega sección de reseñas de clientes
  - Cambia el diseño del cotizador
  - Corrige el botón de WhatsApp en iPhone

v1.1.0  ·  hace 2 semanas
v1.0.0  ·  hace 1 mes  ·  [Primera publicación]
```

En la pestaña **Releases** de tu repo: botón **Create a new release**, eliges el tag (A23) o creas uno nuevo, escribes el título y las notas, y publicas. GitHub hasta genera el changelog automáticamente a partir de los mensajes de commit entre un tag y otro — después tú lo pulís para que hable en lenguaje de usuario.

### Díselo a la IA

> "Voy a publicar la versión v1.2.0 de mi proyecto. Estos son mis commits desde v1.1.0: [pégalos]. Escríbeme las notas del release y la entrada del changelog en formato Keep a Changelog (Added, Changed, Fixed, Removed), en lenguaje de usuario final, no de código interno."

### Ejercicios

1. **[opción múltiple]** ¿Qué es un Release en GitHub?
   - a) Un tipo de issue urgente
   - b) **La vitrina pública de una versión: toma un tag y le agrega notas y título** ✔
   - c) Una rama que no se puede borrar
   - d) Un backup de tu repositorio

2. **[completar]** "Un changelog se escribe desde la perspectiva del ____, no del código interno. La versión más reciente va ____ en el documento."
   - Banco: `usuario` · `arriba` · `programador` · `abajo`
   - Respuesta: usuario / arriba

3. **[relacionar]** Une la sección del changelog con lo que registra:
   - Added ↔ Funciones nuevas
   - Changed ↔ Cambios en lo que ya existía
   - Fixed ↔ Errores corregidos
   - Removed ↔ Cosas que se quitaron

4. **[verdadero/falso]** "Las notas del release se escriben con tecnicismos internos, porque quien las lee son los desarrolladores del proyecto."
   - Respuesta: FALSO — se escriben desde la perspectiva del usuario final, claras y sin jerga de código.

5. **[qué hace]** Abres la pestaña Releases, creas un release nuevo y GitHub te pide elegir un tag (A23). ¿Qué estás haciendo?
   - a) Borrando una versión
   - b) **Publicando una versión marcada con tag, con sus notas de cambios** ✔
   - c) Abriendo un issue de versión
   - d) Fusionando una rama

---

## B24 — GitHub Copilot: la IA que vive dentro del editor

### Concepto

**GitHub Copilot** es el asistente de código de GitHub: una IA que vive dentro de tu editor (VS Code y otros) y te sugiere código mientras escribes. Es la integración más famosa entre IA y repositorios, y su lógica es la misma que ya dominas como director de IA: tú describes, la IA propone, tú revisas (B15).

Cómo se usa en la práctica:

- **Autocompletado:** mientras escribes, te sugiere la siguiente línea o bloque; con Tab lo aceptas.
- **Chat:** le preguntas "¿cómo valido un número de teléfono en este formulario?" y te responde con contexto de tu proyecto.
- **Copilot Edits:** le pides un cambio y te propone la edición concreta, que tú revisas antes de aceptar.

La clave que nadie te dice: Copilot lee el código de tu repositorio para darte contexto. Por eso tu repo importa: mientras mejor documentado y organizado esté (README, B9; ramas, A16–A18), mejores sugerencias obtienes. Basura entra, sugerencias basura salen.

No te confundas: Copilot NO es la única forma de dirigir IA, ni necesariamente la mejor para ti. Tú construyes dirigiendo IA desde prompts (Materia C). Copilot es un complemento que te acelera dentro del editor, igual que otras herramientas de IA que trabajan con Git directamente (C21 y C22). Es una herramienta más de tu arsenal de director.

Y una advertencia real: Copilot escribe con confianza, pero no siempre es correcto. Cada sugerencia aceptada es código del que tú te haces responsable. Exactamente el mismo principio del code review (B15): la IA propone, tú apruebas.

### Analogía

Copilot es **el aprendiz veloz que vive en tu taller y te pasa las herramientas antes de pedirlas**. Lleva horas mirando cómo trabajas (tu repo) y adivina qué vas a necesitar. A veces acierta y te ahorra segundos; a veces te pasa un desarmador cuando pediste una llave. El jefe del taller eres tú: usas lo que sirve y devuelves lo que no, sin ofender al aprendiz.

### Cómo se ve en la práctica

```
function calcularTotal(productos) {
  const total = productos.reduce((suma, p) => {
    // ← Copilot sugiere aquí, en gris:
    //   return suma + p.precio * p.cantidad;
    //   Tab para aceptar, Esc para ignorar
  }, 0);
  return total;
}
```

La sugerencia aparece gris mientras escribes. Tab para aceptarla, Esc para ignorarla. Después de aceptar, lee lo que quedó como si lo hubieras escrito tú — porque en el historial de commits (A9) tu nombre va a firmarlo.

### Díselo a la IA

> "Voy a empezar a usar GitHub Copilot en VS Code. Explícame cómo funciona el autocompletado, el chat y las ediciones, y dame 5 buenas prácticas para sacarle provecho como persona que dirige IA sin que el código aceptado se me escape del control. Incluye qué debo revisar antes de aceptar cada sugerencia."

### Ejercicios

1. **[opción múltiple]** ¿Qué es GitHub Copilot?
   - a) Un robot que revisa tus PRs
   - b) **Una IA dentro del editor que sugiere código con contexto de tu repositorio** ✔
   - c) Un servicio de hosting
   - d) Un antivirus para tu código

2. **[verdadero/falso]** "Las sugerencias de Copilot son siempre correctas, por eso puedo aceptarlas sin revisar."
   - Respuesta: FALSO — Copilot escribe con confianza pero no siempre acierta; aceptar una sugerencia te hace responsable del código.

3. **[completar]** "Copilot lee el código de tu ____ para darte contexto, por eso un proyecto bien documentado y organizado produce mejores ____."
   - Banco: `repositorio` · `sugerencias` · `commits` · `releases`
   - Respuesta: repositorio / sugerencias

4. **[relacionar]** Une la función de Copilot con lo que hace:
   - Autocompletado ↔ Sugiere la siguiente línea mientras escribes
   - Chat ↔ Responde preguntas con contexto del proyecto
   - Copilot Edits ↔ Propone una edición concreta para revisar

5. **[qué hace]** Mientras escribes código, Copilot te sugiere un bloque completo en gris. ¿Cómo lo aceptas con criterio?
   - a) Acepto con Tab y hago commit al instante
   - b) **Reviso la sugerencia como si fuera mía, y si está bien la acepto con Tab** ✔
   - c) Ignoro todas las sugerencias siempre
   - d) Le pido a otro chatbot que la revise primero

---

## B25 — Buscar código en GitHub: tu biblioteca infinita

### Concepto

GitHub no es solo donde guardas tus repos: es **la biblioteca de código más grande del planeta**. Todo lo que puedas imaginar ya existe, es público y es gratis de leer. Saber buscar ahí te convierte en mejor director de IA: en vez de inventar desde cero, encuentras cómo otros resolvieron el mismo problema.

La búsqueda de repositorios (la barra de arriba en github.com, o la página **Search**):

- Buscas por nombre o palabra clave: `cotizador`, `landing page`, `bot whatsapp`
- Filtras por **lenguaje** (`language:javascript`), por **estrellas** (B26) para encontrar los más usados, por fecha de actualización
- Ves el repo, lees el README (B9), y si te sirve lo clonas (B7) o le haces fork (B17)

La búsqueda de **código dentro de los repos** (Code Search): buscas una función, un error o un patrón en millones de repos a la vez. ¿Cómo validan el RFC los demás? Buscas y ves cómo lo hizo el mundo real, con su código completo y su contexto.

Estrategia de lector profesional: no busques "la solución perfecta"; busca **la solución que otros ya depuraron**. Un proyecto con miles de estrellas (B26), issues activos (B11) y PRs fusionados (B13) es código que muchos ojos ya revisaron. Leer cómo un proyecto grande organiza sus archivos es una clase gratuita de arquitectura (B7 lo adelantó).

Y esto es oro para tu flujo: cuando le pides a la IA que construya algo, dile "mira cómo lo hace [nombre del proyecto famoso]" o pega fragmentos reales que encontraste. La IA trabaja mejor con ejemplos concretos que con descripciones vagas. Tú eres el bibliotecario que le lleva el material correcto.

### Analogía

GitHub como biblioteca es la **hemeroteca gigante del oficio**: millones de artesanos dejaron sus libretas abiertas. No eres el primer herrero del mundo; el oficio tiene mil años y las mejores técnicas ya están escritas. Tu trabajo no es inventar el martillo: es encontrar la libreta del mejor herrero, leer cómo lo hizo y adaptarlo a tu taller.

### Cómo se ve en la práctica

```
Búsqueda en github.com/search:
  cotizador whatsapp language:javascript
  ➤ 1,847 resultados   Filtrar por estrellas: 500+

  ▸ cotizador-whatsapp  ⭐ 1.2k   (JavaScript)
      Genera cotizaciones y las manda por WhatsApp
    ▸ validar-telefono-mx  ⭐ 340   (JavaScript)
      Validación de números telefónicos de México
```

Entras, lees el README, clonas el que te sirva y estudias cómo validan un teléfono. Media hora después, ya sabes cómo lo hace el mundo real — y se lo puedes decir a tu IA.

### Díselo a la IA

> "Quiero aprender a [hacer/validar/construir X] leyendo código real. Ayúdame a buscar en GitHub: qué palabras clave y filtros usar (lenguaje, estrellas, fecha), cómo reconocer un repositorio de buena calidad, y qué archivos conviene leer primero en un proyecto para entender su arquitectura."

### Ejercicios

1. **[opción múltiple]** ¿Qué puedes hacer con la búsqueda de GitHub?
   - a) Solo buscar tus propios repos
   - b) **Buscar repositorios y código en millones de proyectos públicos para aprender** ✔
   - c) Solo buscar personas
   - d) Buscar solo repos de paga

2. **[completar]** "Para buscar solo repos en JavaScript usas el filtro ____; para encontrar los más usados filtras por número de ____."
   - Banco: `language:javascript` · `estrellas` · `watchers` · `language:html`
   - Respuesta: language:javascript / estrellas

3. **[verdadero/falso]** "Leer cómo un proyecto popular resuelve un problema es inútil porque tu proyecto siempre es distinto."
   - Respuesta: FALSO — los problemas (validar, pagar, mostrar) son universales; las soluciones depuradas de otros son la mejor referencia.

4. **[relacionar]** Une la búsqueda con lo que encuentras:
   - Buscar por nombre o palabra clave ↔ Repositorios candidatos
   - Filtrar por estrellas ↔ Los más usados y validados por la comunidad
   - Code Search ↔ Código específico dentro de millones de repos
   - Leer el README ↔ Entender el proyecto en 30 segundos

5. **[qué hace]** Encuentras un proyecto popular con 5,000 estrellas, issues activos y PRs fusionados. ¿Qué representa ese repo?
   - a) Un código probablemente abandonado
   - b) **Código que muchos ojos ya revisaron y depuraron; buena referencia para estudiar** ✔
   - c) Un proyecto de paga
   - d) Un virus disfrazado

---

## B26 — Estrellas, forks y watchers: las métricas sociales del código

### Concepto

En GitHub, cada repositorio tiene tres contadores que son el "termómetro" del proyecto: **stars** (estrellas), **forks** y **watchers** (observadores). Leerlos juntos te dice si un proyecto está vivo, muerto o en camino.

- **Estrellas:** es el "me gusta" del código. Cuando le das estrella a un repo, lo marcas para encontrarlo fácil (tu lista de favoritos) y le das un voto de aprobación público. Para el autor, las estrellas son la métrica de fama del proyecto.
- **Forks:** copias del proyecto en otras cuentas (B17). Un fork NO es un "me gusta": es alguien que se llevó el código para usarlo o contribuir. Muchos forks = mucho uso real.
- **Watchers:** personas suscritas para recibir notificación de cada conversación y cambio del repo. Poco famoso, pero valiosísimo: cada watcher es alguien que sigue de cerca tu proyecto.

¿Cómo leer esas cifras sin dejarte engañar? La regla de la lectura profesional:

- **Muchas estrellas + sin commits recientes** = famoso pero quizá abandonado. Lee la fecha del último commit y su changelog (B23) antes de confiar tu proyecto a ese código.
- **Estrellas altas + actividad reciente + issues resueltos** = proyecto sano: mucha gente lo usa y sigue vivo.
- **Forks altos con pocas estrellas** = se usa en la práctica pero no se promueve tanto.
- Un repo **con 2 estrellas pero de un autor serio y actualizado** puede servirte más que uno famoso y muerto.

Estas métricas también son tu termómetro personal: tu repo con 0 estrellas no significa que fracasaste — la gente no encuentra repos por casualidad. Comparte tu trabajo (B2, B29) y las estrellas llegan. Y cuando un repo te enseñó algo, dale estrella y watcher: además de ser justo, construyes tu biblioteca personal de aprendizaje (B25).

### Analogía

Las métricas son las **señales del local en la plaza**: las estrellas son las reseñas pegadas en la puerta, los forks son la gente que se llevó la receta para hacerla en su casa, y los watchers son los parroquianos que se asoman cada vez que cambian el menú. Un local con muchas reseñas pero con la persiana abajo desde hace un año no te sirve: lee la fecha, no solo el conteo.

### Cómo se ve en la práctica

```
devsystem / guia-html-desde-cero        ⭐ 3,240  🍴 412  👁 184

  Último commit:  hace 2 días
  Issues: 45 abiertos · 120 cerrados    ← proyecto vivo

  ⭐ 3,240 estrellas  = fama y aprobación
  🍴 412 forks       = usos reales del código
  👁 184 watchers    = gente siguiendo de cerca
```

Tres cifras más una fecha de último commit. Eso es todo lo que necesitas para decidir si vale la pena estudiarlo, clonarlo o contribuir.

### Díselo a la IA

> "Explícame qué significan las estrellas, los forks y los watchers de un repositorio de GitHub, y cómo se interpretan JUNTOS con la fecha del último commit y el estado de los issues para saber si un proyecto está sano o abandonado. Dame un mini-método de 4 pasos para evaluar cualquier repo en un minuto."

### Ejercicios

1. **[opción múltiple]** ¿Qué representa darle una estrella a un repositorio?
   - a) Un pago al autor
   - b) **Marcarlo como favorito y darle un voto de aprobación público** ✔
   - c) Hacerte dueño del repo
   - d) Suscribirte para recibir correos

2. **[relacionar]** Une la métrica con su significado:
   - Estrellas ↔ Aprobación y favoritos
   - Forks ↔ Copias reales que se usan o contribuyen (B17)
   - Watchers ↔ Gente siguiendo de cerca cada cambio

3. **[completar]** "Un proyecto con ____ estrellas pero sin commits ____ puede estar famoso pero abandonado; antes de confiar en él, revisa su ____."
   - Banco: `muchas` · `recientes` · `changelog` · `pocas`
   - Respuesta: muchas / recientes / changelog

4. **[verdadero/falso]** "Un repo con 2 estrellas siempre es peor referencia que uno con 3,000."
   - Respuesta: FALSO — un repo famoso pero muerto puede servirte menos que uno pequeño, serio y actualizado; lee la fecha y la actividad.

5. **[qué hace]** Evaluando un repo para tu proyecto, ves ⭐ 8,000 pero el último commit fue hace 14 meses y hay 200 issues abiertos sin respuesta. ¿Qué concluyes?
   - a) Es la mejor opción posible
   - b) **Fue popular pero puede estar abandonado; busca alternativas con actividad reciente** ✔
   - c) Las estrellas no existen
   - d) Debo comprar una licencia

---

## B27 — Licencias explicadas simple: MIT, Apache, GPL

### Concepto

La **licencia** de un repositorio es el documento que dice qué puede hacer la gente con tu código: ¿lo pueden usar en sus negocios? ¿lo pueden modificar? ¿tienen que publicar sus cambios? Sin licencia, la respuesta legal por defecto es: **"nadie puede hacer nada más que mirarlo"**. Un repo sin licencia NO es "libre de usar" — es todo lo contrario.

Las tres licencias que vas a ver en el 90% de los repos:

- **MIT:** la más simple y permisiva. "Usa esto, cópialo, modifícalo, véndelo — solo conserva el aviso de copyright". Ideal para proyectos personales y de negocio: cero fricción para quien lo adopte.
- **Apache 2.0:** permisiva como MIT, pero con dos extras: una cláusula explícita sobre **patentes** y la protección de que no pueden usar tu nombre para promocionar cosas. La favorita de las empresas grandes.
- **GPL (GPL-3.0):** la "copyleft". Permite usar y modificar, PERO si distribuyes el código, el tuyo también debe quedar open source bajo la misma licencia. Protege a la comunidad: lo que se tomó de la comunidad, se devuelve. ¿Para negocios? Depende: si tu producto es un sitio que corre en tu servidor, normalmente no hay problema; si vendes el software como producto, GPL puede obligarte a liberar tu versión.

Elegir licencia para tus repos: si no sabes por dónde empezar, **MIT es la elección por defecto** para portafolio y proyectos personales. Es corta, la entiende todo el mundo y no espanta a clientes ni contribuyentes. Apache si vas a trabajar con empresas. GPL solo si tu intención es explícitamente copyleft. Se agrega con un archivo `LICENSE` en la raíz: GitHub te lo genera con **Add file → Create new file → "LICENSE"** y eliges la plantilla.

Regla de director que te evita pleitos: antes de clonar y usar código ajeno (B17, B25), **lee su licencia**. Si no tiene, pregúntate si lo necesitas de verdad o si hay una alternativa con MIT. Y nunca copies código de un repo con GPL dentro de un proyecto privado de cliente sin entender la obligación. Leer dos líneas hoy te ahorra un abogado mañana.

### Analogía

La licencia es el **letrero de reglas del taller prestado**: "MIT — usa las herramientas, llévatelas y modifícalas, solo deja la placa de quién las hizo. GPL — usa las herramientas pero deja las tuyas también para el que venga". Quien entra a tu taller (clona tu repo) juega según ese letrero. Sin letrero, nadie está seguro de qué se puede tocar — y en el mundo legal, el que duda, no toca.

### Cómo se ve en la práctica

```
LICENSE (MIT)  ← un solo archivo en la raíz

MIT License
Copyright (c) 2026 Raymundo Flores

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software... to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies...
The above copyright notice and this permission notice shall
be included in all copies...
```

Y en GitHub, el repo muestra en la columna derecha: **License: MIT**. Una línea que le dice al mundo entero: esto se puede usar, copiar y adaptar, con un solo requisito: conservar el aviso.

### Díselo a la IA

> "Tengo un proyecto personal que voy a publicar en GitHub y quiero ponerle licencia. Explícame en lenguaje simple la diferencia entre MIT, Apache 2.0 y GPL, para qué tipo de proyecto conviene cada una, y cuál me recomiendas para un portafolio de un negocio que vende servicios de desarrollo con IA. Incluye cómo agregar el archivo LICENSE."

### Ejercicios

1. **[opción múltiple]** ¿Qué pasa con un repositorio público que NO tiene licencia?
   - a) Es libre de usar para lo que quieras
   - b) **Legalmente nadie puede hacer mucho más que mirarlo** ✔
   - c) Se vuelve GPL automáticamente
   - d) Pasa a ser de Microsoft

2. **[relacionar]** Une la licencia con su regla principal:
   - MIT ↔ Úsalo, modifícalo y véndelo; solo conserva el aviso
   - Apache 2.0 ↔ Permisiva + cláusula de patentes y protección de nombre
   - GPL ↔ Si distribuyes, tu código también debe ser open source

3. **[completar]** "Para un portafolio personal, la licencia por defecto recomendada es ____. El archivo que la contiene se llama ____."
   - Banco: `MIT` · `LICENSE` · `Apache` · `README`
   - Respuesta: MIT / LICENSE

4. **[verdadero/falso]** "Puedo copiar libremente código de un repo sin licencia porque está público en GitHub."
   - Respuesta: FALSO — público no significa libre; sin licencia no hay permiso de uso, y copiar código ajeno puede ser un problema legal.

5. **[qué hace]** Antes de clonar un repo con GPL para reutilizar su código en el proyecto privado de un cliente, ¿qué debes revisar?
   - a) Nada, todo es open source
   - b) **Si la GPL te obliga a liberar tu proyecto, que puede chocar con la confidencialidad del cliente** ✔
   - c) Solo el número de estrellas (B26)
   - d) Que el autor tenga más de 1,000 seguidores

---

## B28 — Seguridad: secretos, tokens y lo que NUNCA debes subir

### Concepto

Esta es, sin discusión, la lección más importante de todo el curso de GitHub. Repítelo hasta que duela: **UN SECRETO QUE SE SUBE A GITHUB YA NO ES UN SECRETO.** No importa que el repo sea privado, no importa que lo borres después, no importa que lo quites del archivo. Una vez que algo toca el historial de Git, vive ahí para siempre (B8 lo advirtió; aquí va a fondo).

¿Qué son los secretos? Todo dato que, en manos equivocadas, te puede robar, cobrar o destruir:

- **API keys y tokens** — llaves que dan acceso a servicios: WhatsApp, pagos, correos, almacenamiento. Con tu API key de pago, un desconocido puede gastar tu dinero.
- **Contraseñas y contraseñas de app**
- **Tokens de IA** — las credenciales con las que tu IA ejecutora (C23) se conecta a tu repo. Quien las tenga, controla lo que la IA controla.
- **Números de tarjeta y datos personales de clientes**

¿Qué puede pasar en el mundo real? Personas y robots rastrean GitHub por secretos filtrados las 24 horas. En minutos, una API key filtrada se usa, se vende o se explota. Empresas han perdido millones por esto; personas han visto vaciadas sus cuentas. No es alarmismo: es el incidente más común de la industria.

Las reglas que te salvan la vida:

1. **Los secretos NO van en el código, ni siquiera de broma ni en pruebas.** Ni el `.env` commiteado. El archivo `.env` va en `.gitignore` (A11), siempre.
2. **Los secretos van en variables de entorno o en el gestor de secretos de la plataforma** (GitHub → Settings → Secrets and variables, o en el panel de tu hosting). Ahí no entran al historial.
3. **Los tokens se crean con el mínimo permiso posible** (B21: privilegio mínimo) y con **fecha de expiración**. Uno que expira es un accidente menos.
4. **Si sospechas que algo se filtró: ROTA YA.** Ve a la plataforma que emitió el token o la key y revócalo, y genera uno nuevo. No "esperes a ver si pasa algo".
5. **Escanea antes de publicar** (B8): revisa el historial, busca `password`, `key`, `token`, `.env` en los diffs. La IA te ayuda a revisar (Díselo a la IA).

La pregunta que te haces antes de cada commit y de cada push: **¿esto que voy a subir le daría poder a un desconocido?** Si hay duda, no lo subas. Un commit de más nunca vale una cuenta perdida.

### Analogía

Subir un secreto a GitHub es **colgar las llaves de tu casa en el poste de anuncios de la cuadra**: para ti "nadie las va a encontrar", para el mundo son una invitación abierta. Puedes quitar el anuncio después, pero la foto ya se la tomaron todos. Y el token filtrado es la copia de esas llaves: no cambias el candado (revocar) hasta que ya es tarde. Las llaves no se cuelgan en la calle. Punto.

### Cómo se ve en la práctica

```
🚨 NUNCA hagas esto:
$ echo "API_KEY=12345-misecreto" > .env
$ git add .env
$ git commit -m "config"
$ git push
   # ↑ ese secreto ya vive en el historial PARA SIEMPRE.
   # Borrarlo después NO lo borra del historial.

✅ Lo correcto:
$ echo ".env" >> .gitignore        # el secreto ni se acerca (A11)
$ git add .gitignore
$ git commit -m "ignora .env"
$ git push

# El valor real va en: Settings → Secrets and variables
# (o en el panel del hosting), fuera del repo.
```

Y si un día el miedo se vuelve realidad — crees que algo se filtró —, el flujo no es negociable: **revisar** (¿está en el historial?) → **revocar** (Settings → Security → revoke el token o la key) → **rotar** (genera uno nuevo) → **prevenir** (`.gitignore` + variables de entorno). Sin excusas.

### Díselo a la IA

> "Antes de publicar mi repositorio quiero auditar que no haya secretos. Dame una lista de comandos de Git para revisar el historial en busca de passwords, tokens, API keys y archivos .env, y una checklist de qué revisar archivo por archivo. Además explícame con ejemplos cómo revocar un token que sospecho que se filtró."

### Ejercicios

1. **[opción múltiple]** Subiste un `.env` con una API key por error y ya lo borraste en un commit posterior. ¿Qué sigue siendo verdad?
   - a) El riesgo desapareció
   - b) **El secreto sigue en el historial de commits y cualquiera puede verlo; hay que revocarlo** ✔
   - c) GitHub lo borra solo después de 24 horas
   - d) Solo es problema si el repo es público

2. **[completar]** "Los secretos van en ____ de entorno o en el gestor de ____ de la plataforma, NUNCA en el código ni en el historial. El archivo `.env` se excluye con ____."
   - Banco: `variables` · `secretos` · `.gitignore` · `commits`
   - Respuesta: variables / secretos / .gitignore

3. **[verdadero/falso]** "Como mi repositorio es privado, puedo subir tokens y contraseñas sin problema."
   - Respuesta: FALSO — aunque sea privado, el secreto queda en el historial para siempre y basta un acceso accidental para que se filtre; los secretos nunca van al repo.

4. **[relacionar]** Une la situación con la acción correcta:
   - Sospechas que un token se filtró ↔ Revocarlo y generar uno nuevo ya
   - Un token para tu IA ejecutora ↔ Con mínimo permiso y fecha de expiración
   - Una API key que necesitas en el proyecto ↔ Variable de entorno o secretos de la plataforma
   - El archivo `.env` de tu proyecto ↔ Agregarlo a `.gitignore` y nunca commitearlo

5. **[qué hace]** Un mensaje en GitHub te avisa: "Commit histórico detectado — token API expuesto el [fecha]". ¿Qué haces PRIMERO?
   - a) Borrar el repositorio
   - b) **Revocar el token en la plataforma que lo emitió, AHORA** ✔
   - c) Esperar a ver si alguien lo usa
   - d) Cambiar tu contraseña de GitHub

---

## B29 — Tu portafolio en GitHub: cómo te ve un cliente

### Concepto

Cerramos el ciclo que abriste en B2: no basta con tener perfil y repos; hay que armar el portafolio como lo que es — **tu mejor vendedor**. Un cliente que contrata desarrollo no quiere tu currículum en PDF: quiere ver, en menos de 5 minutos, que eres capaz de entregar lo que prometes. Tu GitHub público es esa evidencia.

Qué revisa un cliente en tu perfil, en orden:

1. **Tu bio y tu README de perfil** (B2): si sabes decir en una línea qué haces, sabes comunicar con un cliente.
2. **Tus repos fijados (pinned)**: los 3–6 proyectos que eliges mostrar. Cada uno debe estar terminado, funcionando y con su README (B9).
3. **La demo viva**: un cliente NO lee tu código; entra a la URL (GitHub Pages, B20) y toca el sitio. Sin demo, tu repo es una promesa sin prueba.
4. **La calidad del trabajo**: commits claros (A9), README profesional, proyecto publicado (B20), ramas y PRs visibles (B13). Eso le grita "este sí sabe".
5. **La actividad**: contribuciones recientes (B2). Un perfil con actividad reciente transmite constancia; uno muerto desde hace un año, lo contrario.

Los tres proyectos que demuestran nivel (C27 lo amplía): **uno de negocio real** (un sitio que resolvió un problema de un comercio), **uno técnico** (algo con lógica interesante: un cotizador, una calculadora, un sistema) y **uno de colaboración** (tu contribución a open source, B18). Con esos tres, un cliente ve: entrego, resuelvo, colaboro.

Los errores que le quitan puntos a tu portafolio: repos vacíos con un README a medias, "trabajo en progreso" en todos lados, un solo repo con todo mezclado, sin demos vivas, o peor: repos que exponen datos reales de clientes (B28). Un cliente no contrata a quien no le cuida su información.

La regla final: tu portafolio es una **vitrina, no un baúl**. No se trata de subir TODO lo que has hecho: se trata de elegir lo que demuestra lo que quieres vender, terminarlo bien y mostrarlo con su mejor cara. Cada repo del portafolio responde "¿puedes entregar esto?" — y la respuesta tiene que ser un sí evidente.

### Analogía

Tu portafolio es la **galería de una tienda, no el almacén**. El cliente no entra al almacén a contar cajas: entra a la sala de exhibición, donde hay tres piezas perfectamente terminadas, con su etiqueta, su luz y su precio. Tú decides qué piezas llegan a la sala. Tres piezas brillantes venden más que un almacén lleno de cajas sin abrir.

### Cómo se ve en la práctica

```
👤 Raymundo Flores — Construyo sistemas web con IA
📌 Pinned (3):
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ tienda-el-guero     │  │ cotizador-whatsapp  │  │ mi-primera-contrib. │
│ Negocio real        │  │ Lógica + utilidad   │  │ Open source (B18)   │
│ README ✔  Demo ✔    │  │ README ✔  Demo ✔    │  │ README ✔            │
│ ⭐ 4   ● 22 commits │  │ ⭐ 3   ● 18 commits │  │ ⭐ 1                │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘

Cada repo con: README (B9) · demo viva (B20) · commits claros (A9)
```

Cinco minutos de navegación y el cliente ya sabe: entrega proyectos reales, los documenta, los publica y colabora con la comunidad. Eso se vende solo.

### Díselo a la IA

> "Voy a armar mi portafolio de GitHub para atraer clientes de [tu nicho: negocios, tiendas, sistemas]. Estos son mis proyectos: [lista con lo que hace cada uno]. Ayúdame a: 1) elegir cuáles mostrar como pinned y en qué orden, 2) escribir el título y la descripción de cada repo como si se los vendiera a un cliente, y 3) decirme qué le falta a cada proyecto para verse terminado (README, demo, capturas)."

### Ejercicios

1. **[opción múltiple]** ¿Qué es lo primero que un cliente va a ver y juzgar en tu portafolio?
   - a) El número de commits del mes
   - b) **Tu bio y README de perfil, y luego tus repos fijados con sus demos vivas** ✔
   - c) Tu configuración de SSH
   - d) Tus tags de releases

2. **[relacionar]** Une el elemento del portafolio con lo que demuestra:
   - Demo viva (B20) ↔ Prueba de que funciona de verdad
   - Repos fijados con README ↔ Que eliges y sabes presentar tu trabajo
   - Commits y PRs claros ↔ Que trabajas con orden profesional
   - Contribución a open source (B18) ↔ Que colaboras con otros

3. **[completar]** "Los tres proyectos que demuestran nivel son: uno de ____ real, uno ____ con lógica interesante, y uno de ____."
   - Banco: `negocio` · `técnico` · `colaboración` · `diseño`
   - Respuesta: negocio / técnico / colaboración

4. **[verdadero/falso]** "Mientras más repositorios suba, mejor se ve mi portafolio, aunque estén a medias."
   - Respuesta: FALSO — el portafolio es una vitrina, no un baúl; tres proyectos terminados y bien presentados venden más que veinte a medias.

5. **[qué hace]** Un cliente te pide el link de tu portafolio y en menos de un minuto ve: un repo con README sin terminar, sin demo y con "trabajo en progreso" en el título. ¿Qué le transmitiste sin querer?
   - a) Que eres perfeccionista
   - b) **Que no terminas lo que empiezas — el efecto contrario al que querías** ✔
   - c) Que eres muy activo
   - d) Que no sabes usar GitHub

---

## B30 — Repaso integrador de GitHub (mega-quiz jugable)

### Concepto

Esta es la última lección de Materia B. Desde B1 viste a GitHub como red social del código, y en el camino aprendiste: perfiles (B2), repos remotos (B3–B6), clones y forks (B7, B17), visibilidad (B8), documentación (B9–B10), issues y organización (B11–B12), PRs y revisión (B13–B16), contribución (B18), automatización (B19–B20), permisos y protección (B21–B22), versiones y comunicación (B23), la IA dentro del editor (B24), la búsqueda (B25), métricas (B26), licencias (B27), seguridad (B28) y portafolio (B29).

Todo eso es un solo sistema, y este repaso lo prueba: las preguntas mezclan lecciones a propósito, igual que las mezcla la vida real. No es un examen para reprobar a nadie: es el mapa para ver qué tienes dominado y qué vuelves a repasar antes de la Materia C y del proyecto final del mes.

Reglas del juego: contesta sin mirar primero. Cada respuesta trae su lección de referencia — si fallas una, esa es tu tarea de repaso de hoy. Al terminar, haz la autoevaluación del "Díselo a la IA" y sabrás exactamente dónde estás parado. La meta no es saberlo todo de memoria: es saber **dónde buscar** cuando lo necesites.

### Analogía

Este repaso es el **recorrido completo por la plaza que ya conoces, pero ahora tú eres el guía**. No te pregunto "¿qué calle hay?", te pido que lleves al visitante de la parada del camión al puesto de tacos sin dudar. Si dudas en una esquina, no fracasaste: te di el mapa para volver a recorrer esa calle mañana, y a partir de la Materia C la recorrerás todos los días.

### Cómo se ve en la práctica

Tu meta al terminar: poder explicar en menos de 60 segundos, sin ayuda, el ciclo completo:

```
editas (A) → commit (A) → push (B5) → PR (B13) → revisas (B15)
→ merge (B16) → publica solo (B20) → avisas al mundo (B23)
```

Si puedes decir ese ciclo en voz alta entendiendo cada eslabón, la Materia B está dominada. Si alguno te genera dudas, esa es tu lección de repaso de hoy. Los ejercicios que siguen te van a decir cuál.

### Díselo a la IA (autoevaluación)

> "Voy a hacer la autoevaluación de cierre de mi curso de GitHub. Pregúntame una a la vez, sin mostrarme todas: 1) ¿Qué diferencia hay entre Git y GitHub? 2) ¿Qué hace `git push` y qué NO sube? 3) ¿Para qué sirve un Pull Request y cuándo debo usarlo? 4) ¿Qué es un fork y para qué se usa? 5) ¿Cuál es la regla de oro de los secretos y tokens? 6) ¿Qué le pongo a un repo para que tenga licencia y cuál elijo por defecto? 7) ¿Qué tres proyectos debe tener mi portafolio? Después de cada respuesta, dime si estoy bien, qué lección repasar, y lleva el marcador."

### Ejercicios

1. **[opción múltiple]** ¿Qué comando baja los commits del remoto y los fusiona en tu rama actual?
   - a) `git push`
   - b) **`git pull`** ✔
   - c) `git clone`
   - d) `git fetch`

2. **[opción múltiple]** ¿Qué diferencia hay entre un fork y un clon?
   - a) Son exactamente lo mismo
   - b) **El fork copia dentro de tu cuenta de GitHub; el clon baja a tu computadora** ✔
   - c) El clon es solo para repos privados
   - d) El fork no se puede clonar

3. **[completar]** "La protección de ramas prohíbe el ____ directo a main: todo cambio pasa por un ____ con revisión."
   - Banco: `push` · `Pull Request` · `pull` · `release`
   - Respuesta: push / Pull Request

4. **[completar]** "Un secreto que se sube a GitHub ya ____ es un secreto, aunque borres el archivo después; por eso los tokens van en ____ de entorno o en el gestor de ____."
   - Banco: `no` · `variables` · `secretos` · `sí`
   - Respuesta: no / variables / secretos

5. **[relacionar]** Une la herramienta con lo que resuelve:
   - GitHub Pages ↔ Publicar tu sitio gratis desde el repo
   - GitHub Actions ↔ El robot que revisa cada push automáticamente
   - Releases ↔ Comunicar al mundo qué cambió en una versión
   - Issues ↔ El ticket de trabajo por hacer o por arreglar

6. **[relacionar]** Une la lección con su regla clave:
   - B28 Seguridad ↔ Los secretos NUNCA van al repo
   - B27 Licencias ↔ Sin licencia, nadie puede usar tu código
   - B24 Copilot ↔ La IA propone, tú apruebas
   - B26 Métricas ↔ Estrellas + actividad reciente = proyecto sano

7. **[verdadero/falso]** "Para un proyecto personal, `squash and merge` es la opción recomendada por defecto porque deja main como una lista de funciones terminadas."
   - Respuesta: VERDADERO — un commit limpio por función, sin el ruido de los commits intermedios.

8. **[qué hace]** Un cliente llega por el enlace de tu portafolio y al minuto te escribe "¿y dónde puedo ver cómo funciona?" ¿Qué le faltó a tu repo?
   - a) Más estrellas
   - b) **Una demo viva publicada (B20) y su enlace en el README** ✔
   - c) Una licencia MIT
   - d) Más colaboradores

---
