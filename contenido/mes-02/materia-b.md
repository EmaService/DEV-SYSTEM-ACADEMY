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
