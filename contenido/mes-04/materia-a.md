# MES 4 · MATERIA A — Del navegador al servidor
## Lecciones A1–A30 (Mes 4)

> Formato de ejercicios: `[opción múltiple]`, `[completar]` (con banco de palabras), `[relacionar]`, `[verdadero/falso]`, `[ordenar]`, `[qué hace]`. La respuesta correcta va marcada con ✔ o indicada al final del ejercicio.

---

## A1 — ¿Qué pasa realmente cuando tu app pide datos?

### Concepto

Cuando presionas **Ver pedidos** en tu app no estás abriendo una pantalla: estás lanzando un viaje. Ese viaje tiene siete paradas y entenderlo es la diferencia entre *pedirle cosas a la IA* y *saber qué pedirle cuando algo falla*:

- **Tu código pide.** Un `fetch()` (lo viste en m3-b19) arma una petición HTTP: método, URL y headers.
- **El DNS traduce.** El dominio `api.mitienda.mx` se convierte en una dirección IP. Sin esa traducción, la petición no sabe a dónde ir.
- **Se abre el canal.** El navegador conecta con el servidor y, con HTTPS, cifra la conversación.
- **La petición viaja** al servidor con lo que pides y, si hace falta, los datos que mandas.
- **El servidor trabaja.** Valida quién eres, decide qué puedes ver y consulta la base de datos (m4-b9).
- **La respuesta regresa** con un código de estado, headers y un cuerpo — casi siempre JSON (m4-a7).
- **Tu app pinta.** El JSON se convierte en filas, tarjetas o totales en pantalla (m3-b10).

Todo eso pasa en 100 a 300 milisegundos. Dato memorable: **la pantalla no tiene los datos, los pide**. Por eso al recargar sin internet ves un error en vez de la lista: la copia vivía en el servidor, no en tu teléfono.

Una petición real se ve así:

```http
GET /api/pedidos?estado=pendiente HTTP/1.1
Host: api.mitienda.mx
Authorization: Bearer eyJhbGciOi...
Accept: application/json
```

Y la respuesta:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"pedidos":[{"id":42,"cliente":"Ana","total":350}]}
```

**Ojo con el token:** ese `Authorization` es la llave de tu sesión. Quien lo tenga puede actuar como tú hasta que expire. Nunca lo pegues en capturas, en un chat público ni en un repositorio (m4-a19).

### Analogía

Pides comida en un restaurante y ocurre exactamente el mismo viaje. Tú eres el **cliente**; el **mesero** es HTTP, que lleva tu pedido y trae la respuesta; la **cocina** es el servidor, que decide si hay ingredientes y cómo prepararlo; la **despensa** es la base de datos. El **menú** es la API: la lista de cosas que puedes pedir y cómo pedirlas.

Nunca entras a la cocina ni tomas tú la despensa. Pides por el mesero y esperas. Si el platillo no existe, vuelve un *no hay* (404); si no te identificaste, vuelve un *no puedes* (401); si la cocina se incendió, vuelve un *falló el sistema* (500). Y cuando la cocina tarda, tú ves el plato vacío con el tenedor en la mano: eso es el estado de *cargando* en tu interfaz.

El restaurante atiende a muchos clientes a la vez y no recuerda tu pedido de ayer: cada orden es una conversación nueva. Guardar la memoria (quién eres, qué pediste) es trabajo aparte — de eso se encargan las sesiones y los tokens (m4-a17).

### Cómo se ve en la práctica

Vas a ver el viaje con tus ojos. Abre tu proyecto, presiona **F12** y ve a la pestaña *Network* (Red). Deja la pestaña abierta, haz clic en el botón que carga datos y observa la fila que aparece.

El código que dispara todo suele ser tan corto como esto:

```js
const res = await fetch("/api/pedidos");
const datos = await res.json();
console.log(datos);
```

En Network verás columnas que cuentan la historia: **Name** (la ruta), **Status** (el código), **Type** (JSON), **Time** (cuánto tardó). Haz clic en la fila y revisa:

- **Headers** — método, URL, código de estado y headers de ida y vuelta.
- **Payload** — lo que tu app mandó (si mandó algo).
- **Response** — el JSON que devolvió el servidor. Ese es el dato real, no lo que la pantalla muestra.
- **Timing** — dónde se fue el tiempo. Si *Waiting (TTFB)* es alto, el cuello de botella está en el servidor o en la base, no en tu CSS.

**Advertencia:** si el Status es `401`, el problema no es de diseño ni de datos: tu sesión no está autenticada (m4-a5 y m4-a13). Cambiar colores no lo va a arreglar. Y si en *Response* ves un error con rutas de archivos o consultas SQL, no lo publiques: estás filtrando información interna (m4-a26).

### Díselo a la IA

> "Actúa como ingeniero de backend explicándole esto a alguien que dirige con IA. Tengo esta petición en la pestaña Network de DevTools: [pega método, URL, status y el cuerpo de la respuesta]. Explícame el viaje completo que ocurrió —cliente, DNS, servidor, base de datos y regreso—, dime en qué parada falló si el status no es 2xx, y qué debo revisar yo antes de pedirle un cambio a la IA. No escribas código todavía."

Pedir el diagnóstico antes de la solución es el hábito que separa al director del que solo copia y pega.

### Ejercicios

**1. [opción múltiple]** En el viaje de una petición, ¿quién consulta la base de datos?
   - a) El navegador del usuario
   - b) El servidor, después de validar la petición ✔
   - c) El CSS de la página
   - d) El DNS

**2. [ordenar]** Ordena el viaje de una petición de datos:
   - Orden correcto: Tu app llama a fetch() → El DNS traduce el dominio a una IP → La petición llega al servidor → El servidor consulta la base de datos → El servidor responde con JSON → Tu código pinta los datos en pantalla

**3. [verdadero/falso]** "Los datos que ves en pantalla viven en el teléfono del usuario, por eso siguen ahí sin internet."
   - Respuesta: FALSO — la pantalla solo muestra una respuesta; los datos viven en el servidor y en la base de datos. Sin conexión no llega una respuesta nueva.

**4. [completar]** "Tu app es el ____, la computadora que responde es el ____ y los datos viven en la ____."
   - Banco: `cliente` · `servidor` · `base de datos` · `navegador`
   - Respuesta: cliente / servidor / base de datos

**5. [qué hace]** ¿Qué está pidiendo esta petición?

```http
GET /api/pedidos?estado=pendiente HTTP/1.1
Host: api.mitienda.mx
Authorization: Bearer eyJhbGciOi...
Accept: application/json
```

   - a) Los pedidos pendientes, identificándose con un token ✔
   - b) Que se borren los pedidos pendientes
   - c) Que se cree un pedido nuevo
   - d) Una imagen del servidor

---

## A2 — Cliente y servidor: quién hace qué y por qué importa

### Concepto

**Cliente** es el programa que tienes enfrente: el navegador, la app del celular, la terminal. **Servidor** es la computadora remota que responde. La regla que ordena todo: **el cliente propone, el servidor decide**.

El cliente se encarga de lo que se ve y se toca: mostrar la interfaz, capturar lo que escribes, pedir datos y manejar los estados de cargando, vacío y error (m3-c15). El servidor se encarga de lo que no se puede confiar a nadie: verificar quién eres, decidir qué puedes hacer, validar los datos y guardarlos.

Mira las dos mitades de una misma función. En el navegador:

```js
const res = await fetch("/api/pedidos", {
  headers: { Authorization: "Bearer " + token }
});
const pedidos = await res.json();
```

En el servidor (Express, en concepto — m4-a24):

```js
app.get("/api/pedidos", verificarToken, async (req, res) => {
  const pedidos = await db.pedidos.find({ usuarioId: req.usuario.id });
  res.json(pedidos);
});
```

El cliente *pide*; el servidor *filtra por el usuario del token* y responde. Nota lo importante: el cliente no dice "dame los pedidos del usuario 7". El servidor saca el usuario del token y no le da opción de pedir los ajenos.

**Advertencia real:** todo lo que va al navegador es público — HTML, CSS, JavaScript, comentarios y llaves incluidas. Esconder un botón con CSS no protege nada: cualquiera puede llamar la ruta directamente. La protección vive en el servidor (m4-a15), en las reglas de la base de datos (m4-b22) y en las variables de entorno (m4-a19). Si encuentras una llave secreta en el código del cliente, considérala filtrada y cámbiala.

### Analogía

Es una **ventanilla bancaria**. Tú llenas la solicitud en el mostrador (cliente): escribes qué quieres, firmas y entregas. El cajero (servidor) revisa tu identidad, consulta la bóveda (base de datos) y decide si el movimiento procede. No entras a la bóveda, no tomas el dinero y no decides tu propio saldo.

Si el cajero solo creyera lo que dice el formulario, cualquiera escribiría "transferir un millón" y ya. Por eso el servidor vuelve a validar todo, aunque el cliente ya lo haya revisado. Y si el sistema se cae, el cajero te dice "no puedo atenderte ahora" (5xx): no es que tu solicitud esté mal, es que el banco falló.

### Cómo se ve en la práctica

Comprueba con tus ojos qué es público y qué no. Abre cualquier sitio y usa **Ctrl+U** (ver código fuente): verás HTML, CSS y JavaScript del cliente. Busca ahí el código del servidor: no está. El servidor nunca manda su receta, solo el resultado.

Ahora abre **F12 → Network**, recarga y haz clic en la petición principal. En *Response* verás lo que el servidor devolvió, por ejemplo:

```json
{"usuario":"ana","pedidos":[{"id":42,"total":350}]}
```

Eso es la respuesta, no la lógica. No puedes ver cómo decidió qué pedidos darte — y así debe ser.

Prueba con una API pública para ver el contraste: abre `https://api.github.com/users/octocat` en el navegador. Recibes JSON con datos del usuario, pero no el código de GitHub. Esa es la frontera cliente-servidor en una sola pantalla.

**Advertencia:** si en *Ctrl+U* o en el bundle de JavaScript encuentras algo como `sk_live_...`, `service_role` o una contraseña, no lo compartas ni lo subas a GitHub: rota la llave de inmediato (m4-a19).

### Díselo a la IA

> "Estoy decidiendo qué parte de mi app va en el cliente y qué parte en el servidor. La función es: [describe, por ejemplo: aplicar un cupón de descuento]. Hazme tres preguntas para detectar si hay una regla de negocio, un permiso o un secreto involucrado; después dime dónde debe vivir cada pieza y por qué. Si algo debe validarse en el servidor, dilo explícitamente aunque también se valide en el cliente."

Ese prompt evita el error clásico de "lo valido en el navegador y ya": te obliga a decidir con criterio de servidor.

### Ejercicios

**1. [relacionar]** Une cada elemento con su pareja:
   - Cliente ↔ Muestra la interfaz y captura los datos
   - Servidor ↔ Valida permisos y consulta la base de datos
   - Base de datos ↔ Guarda los registros que persisten
   - API ↔ El contrato de rutas entre cliente y servidor

**2. [opción múltiple]** Un usuario oculta con CSS el botón de eliminar. ¿Está protegido el borrado?
   - a) Sí, si el botón no se ve nadie puede borrar
   - b) No: cualquiera puede llamar la ruta directamente; el servidor debe verificar el permiso ✔
   - c) Sí, CSS cifra la acción
   - d) Solo si usa el modo incógnito

**3. [verdadero/falso]** "El código del servidor se puede leer con Ctrl+U desde el navegador."
   - Respuesta: FALSO — Ctrl+U muestra solo el código del cliente (HTML, CSS y JS); la lógica del servidor nunca viaja al navegador.

**4. [completar]** "El cliente ____ los datos; el servidor ____ si tienes permiso y los guarda."
   - Banco: `pide` · `decide` · `pinta` · `borra`
   - Respuesta: pide / decide

**5. [qué hace]** ¿Qué garantiza <code>verificarToken</code> en esta ruta?

```js
app.delete("/api/pedidos/:id", verificarToken, async (req, res) => {
  ...
});
```

   - a) Que solo un usuario autenticado pueda intentar borrar ✔
   - b) Que el botón se oculte en la interfaz
   - c) Que el borrado sea más rápido
   - d) Que se cree un pedido nuevo

---

## A3 — HTTP por dentro: la conversación completa

### Concepto

HTTP es un protocolo de **texto**: la conversación entre cliente y servidor se puede leer. Cada intercambio tiene dos mensajes, uno de ida y uno de vuelta, y ambos comparten la misma estructura de tres partes.

**La petición** (request):

```http
POST /api/pedidos HTTP/1.1
Host: api.mitienda.mx
Content-Type: application/json
Authorization: Bearer eyJhbGciOi...

{"cliente":"Ana","total":350}
```

**La respuesta** (response):

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/pedidos/43

{"id":43,"cliente":"Ana","total":350}
```

Las tres partes son:

- **Línea inicial.** En la petición: método, ruta y versión. En la respuesta: versión, código y frase.
- **Headers.** Metadatos en pares `Nombre: valor`: quién manda, qué formato trae, cuánto mide el cuerpo (m4-a6).
- **Cuerpo.** Los datos. En la petición es lo que mandas; en la respuesta es lo que recibes (m4-a7).

Entre headers y cuerpo hay una **línea en blanco**. No es decoración: es la señal que le dice al receptor "se acabaron los metadatos, empieza el contenido". Si esa línea falta, el cuerpo se interpreta como otro header.

Y el rasgo que explica media materia: HTTP es **stateless** (sin estado). Cada petición es independiente; el servidor no recuerda la anterior. Por eso existen las cookies y los tokens: para reenviar la identidad en cada mensaje (m4-a17).

### Analogía

Es una **carta certificada**. En el sobre escribes el destinatario, el remitente y el tipo de contenido (los headers); adentro va la hoja con el mensaje (el cuerpo). El cartero no lee la carta: solo usa el sobre para entregarla.

El servidor contesta con otra carta: la primera línea dice cómo le fue ("recibida", "rechazada", "no existe"), luego vienen sus sellos y por último el contenido. Y cada carta es independiente: el empleado de la ventanilla no recuerda la carta que mandaste ayer. Si quieres que sepa quién eres, tienes que volver a identificarte en cada envío. Esa falta de memoria es el *stateless* de HTTP.

### Cómo se ve en la práctica

La forma más rápida de ver HTTP crudo es pedirle a DevTools que te lo copie. En **F12 → Network**, haz clic derecho sobre una petición → *Copy* → *Copy as cURL*. Obtienes algo así:

```js
curl 'https://api.github.com/users/octocat' \
  -H 'Accept: application/vnd.github+json'
```

Pégalo en la terminal (en PowerShell usa `curl.exe`, no el alias `curl`) y agrega `-i` para ver también los headers de respuesta:

```json
HTTP/2 200
content-type: application/json; charset=utf-8
x-ratelimit-remaining: 59

{"login":"octocat","id":583231,...}
```

Lee la respuesta en orden: la primera línea te dice la versión y el resultado; los headers, el contexto; después de la línea en blanco, el cuerpo. Si ves `HTTP/2` o `HTTP/3`, no te asustes: cambia el transporte, no la estructura de la conversación.

**Advertencia:** *Copy as cURL* copia también tus cookies y tu header `Authorization`. Si pegas eso en un chat, un issue o una captura, regalas tu sesión. Borra esas líneas antes de compartir nada (m4-a19).

### Díselo a la IA

> "Te voy a pegar una petición HTTP cruda y su respuesta. Sepáralas en sus tres partes —línea inicial, headers y cuerpo—, explícame en una tabla qué hace cada header y dime si el cuerpo es JSON válido. Si ves un token o una cookie, no lo repitas en tu respuesta: solo señálalo para que yo lo borre antes de compartir la captura."

Pedir que no repita el secreto es tan importante como el análisis: un chat también es un lugar público para tus llaves.

### Ejercicios

**1. [relacionar]** Une cada elemento con su pareja:
   - Línea inicial de la petición ↔ Método, ruta y versión
   - Headers ↔ Metadatos en pares Nombre: valor
   - Línea en blanco ↔ Separa los headers del cuerpo
   - Cuerpo ↔ Los datos que se envían o se reciben

**2. [ordenar]** Ordena las partes de una petición HTTP de arriba a abajo:
   - Orden correcto: Línea inicial (método, ruta, versión) → Headers → Línea en blanco → Cuerpo

**3. [opción múltiple]** ¿Qué separa los headers del cuerpo en un mensaje HTTP?
   - a) Una coma
   - b) Una línea en blanco ✔
   - c) El símbolo #
   - d) Nada, van juntos

**4. [verdadero/falso]** "HTTP recuerda la petición anterior, así que el servidor ya sabe quién eres en la siguiente."
   - Respuesta: FALSO — HTTP es stateless: cada petición es independiente. La identidad se reenvía con cookies o tokens (m4-a17).

**5. [completar]** "La primera línea de la respuesta trae la ____ de HTTP y el código de ____; el cuerpo viaja después de una línea en ____."
   - Banco: `versión` · `estado` · `blanco` · `cifrado`
   - Respuesta: versión / estado / blanco

---

## A4 — Los métodos: GET, POST, PUT, PATCH y DELETE

### Concepto

El **método** HTTP es el verbo de la petición: dice qué intentas hacer con un recurso. No es decoración — el servidor, los navegadores, los cachés y los proxies lo usan para decidir cómo comportarse. Estos son los cinco que vas a usar todos los días:

- **GET** — leer. No lleva cuerpo y no debe modificar nada. Es *safe* (seguro) e *idempotente*: pedirlo una o diez veces deja el mismo estado.
- **POST** — crear o ejecutar una acción. Lleva cuerpo. **No** es idempotente: mandarlo dos veces crea dos registros.
- **PUT** — reemplazar el recurso completo. Si mandas solo un campo, los demás se pierden o se vacían. Es idempotente.
- **PATCH** — modificar una parte. Mandas solo lo que cambia. Es el método del "cambia este precio y deja lo demás igual".
- **DELETE** — borrar. Es idempotente: borrar dos veces deja el mismo estado final, aunque la segunda respuesta pueda ser 404.

**Idempotente** no significa "misma respuesta": significa "mismo estado final". Esa distinción te va a salvar en reintentos de red y en integraciones de pago.

En la práctica, contra `/api/productos/42`:

```http
GET    /api/productos/42                 → leer el producto
POST   /api/productos                    → crear uno nuevo
PUT    /api/productos/42                 → reemplazarlo completo
PATCH  /api/productos/42  {"precio":199} → cambiar solo el precio
DELETE /api/productos/42                 → borrarlo
```

**Advertencia:** nunca uses GET para borrar, cerrar sesión o cobrar. El navegador puede precargar enlaces, un crawler puede seguirlos y los parámetros quedan en el historial y en los logs. Y jamás pongas contraseñas o tokens en la URL: viajan visibles en logs y capturas (m4-a11).

### Analogía

Piensa en un almacén con un mostrador. **GET** es "muéstrame esa caja". **POST** es "agrega una caja nueva". **PUT** es "reemplaza esta caja por esta otra completa". **PATCH** es "cambia solo la etiqueta de esta caja". **DELETE** es "tira esta caja".

La diferencia entre POST y PUT se ve al repetir la orden: si pides dos veces "agrega una caja", terminas con dos cajas nuevas (POST). Si pides dos veces "reemplaza la caja 42 por esta", terminas con una sola caja 42 (PUT). Esa es la idempotencia: repetir no multiplica el efecto.

### Cómo se ve en la práctica

Vas a probar los métodos contra una API real sin escribir una app. Abre la terminal y usa `curl.exe` en Windows (o `curl` en Mac/Linux):

```json
curl.exe -i https://api.github.com/users/octocat
curl.exe -i -X PATCH https://api.tusitio.mx/api/productos/42 -H "Content-Type: application/json" -d "{\"precio\":199}"
```

El primero es un GET y debe devolver `200`. El segundo intenta un PATCH: si tu API no existe o no tienes token, devolverá `401`, `403` o `404` — y eso también es información útil (m4-a5). Lo que importa es leer el método en la primera línea y comprobar que la ruta responde como esperabas.

Después repite la misma llamada dos veces y observa el resultado en tu base de datos: con POST verás dos filas nuevas; con PUT o PATCH, una sola fila modificada. Esa prueba de cinco segundos te enseña más que memorizar la tabla.

**Ojo:** si en tu código aparece una ruta como `GET /api/pedidos/42/eliminar`, trátala como un foco rojo: un enlace, un prefetch del navegador o un bot podría borrar datos sin que nadie haya hecho clic en un botón de borrar.

### Díselo a la IA

> "Tengo estas rutas de mi API: [pega la lista]. Revísalas como arquitecto REST: dime si el método corresponde a la acción, marca cualquier GET que modifique datos, cualquier POST que en realidad sea una lectura y cualquier PUT que debería ser PATCH. Devuélveme la tabla corregida con método, ruta y qué regresa cada una, y explica en una línea cada cambio. No escribas la implementación todavía."

Auditar métodos antes de programar evita el bug que nadie encuentra: el que borra cuando solo quería consultar.

### Ejercicios

**1. [relacionar]** Une cada elemento con su pareja:
   - GET ↔ Leer sin modificar
   - POST ↔ Crear un recurso nuevo
   - PUT ↔ Reemplazar el recurso completo
   - PATCH ↔ Modificar solo una parte
   - DELETE ↔ Borrar el recurso

**2. [opción múltiple]** Quieres cambiar únicamente el precio de un producto. ¿Qué método corresponde?
   - a) PUT, porque reemplaza todo
   - b) PATCH, porque modifica solo una parte ✔
   - c) GET, porque es más rápido
   - d) POST, porque crea el precio

**3. [verdadero/falso]** "Enviar dos veces el mismo POST crea dos registros; enviar dos veces el mismo DELETE deja el mismo estado final."
   - Respuesta: VERDADERO — POST no es idempotente; DELETE sí: el estado final es el mismo aunque la segunda respuesta sea 404.

**4. [completar]** "____ lee sin modificar; ____ crea un recurso nuevo; ____ reemplaza el recurso completo."
   - Banco: `GET` · `POST` · `PUT` · `PATCH`
   - Respuesta: GET / POST / PUT

**5. [qué hace]** ¿Qué problema tiene esta ruta?

```http
GET /api/pedidos/42/eliminar
```

   - a) Usa GET para una acción destructiva: un enlace o un prefetch podría borrar el pedido sin confirmación ✔
   - b) Ninguno, GET es el método universal
   - c) Solo le falta un header Content-Type
   - d) Debería usar POST para leer mejor

---

## A5 — Códigos de estado: 200, 401, 404, 500 y los que vas a ver

### Concepto

Toda respuesta HTTP empieza con un **código de estado** de tres dígitos. El primer dígito es la familia y te dice de inmediato de quién es el problema:

- **1xx** — informativo. Raro en el día a día (ej. `101` al cambiar a WebSocket).
- **2xx** — salió bien. `200 OK`, `201 Created` (se creó algo), `204 No Content` (todo bien, sin cuerpo).
- **3xx** — redirección. `301`/`302` te mandan a otra URL; `304 Not Modified` le dice al navegador "usa tu copia en caché".
- **4xx** — el error es del cliente. `400` petición mal formada, `401` no autenticado, `403` sin permiso, `404` no existe, `409` conflicto (duplicado), `422` datos inválidos, `429` demasiadas peticiones.
- **5xx** — el error es del servidor. `500` falla interna, `502` pasarela con respuesta inválida, `503` servicio no disponible.

Regla memorable: **4xx = tú; 5xx = yo**. Si ves 4xx, revisa lo que mandaste; si ves 5xx, el problema está del lado del servidor y tú no lo arreglas cambiando el formulario.

La confusión número uno del principiante es **401 vs 403**. `401 Unauthorized` significa "no sé quién eres" (falta el token, expiró o es inválido). `403 Forbidden` significa "sé quién eres, pero no puedes hacer esto" (m4-a13 y m4-a15).

Así se ven en crudo:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer

{"error":"token inválido o expirado"}
```

```http
HTTP/1.1 403 Forbidden

{"error":"no tienes permiso para ver este pedido"}
```

**Advertencia:** no devuelvas `200 OK` con un error adentro. Rompe clientes, monitores y cachés, y hace que un fallo parezca éxito. Y nunca mandes al usuario el stack trace, la consulta SQL ni rutas internas en un 500: eso es material para atacantes (m4-a26). El detalle va en los logs del servidor (m4-a25), no en la respuesta.

### Analogía

Es el semáforo de una ventanilla. **2xx** es luz verde: "listo, aquí está". **3xx** es "pase a la ventanilla 4". **4xx** es "su papeleo está mal": falta una firma (400), no sé quién es usted (401), sé quién es pero no tiene permiso (403), ese trámite no existe (404), ya lo hizo dos veces (409), sus datos no son válidos (422), vino demasiadas veces hoy (429). **5xx** es "se nos rompió el sistema": no es culpa suya, regrese después (503) o es un fallo interno (500).

La distinción 401/403 es la del guardia: "no sé quién eres, identifícate" versus "ya sé quién eres, pero esta puerta no es para ti".

### Cómo se ve en la práctica

Provoca los códigos a propósito, uno por uno, y míralos en **F12 → Network**. Es la forma más rápida de reconocerlos para siempre:

- **200** — abre cualquier página que cargue bien.
- **401** — intenta entrar a tu app sin sesión, o con un token vencido. Mira el header `WWW-Authenticate`.
- **403** — entra con una cuenta normal a una ruta de administrador.
- **404** — escribe una ruta que no exista: `/api/no-existe`.
- **500** — rompe algo a propósito en desarrollo (una variable indefinida) y observa la respuesta. Debe ser un mensaje genérico, sin stack trace.

Una respuesta típica de error bien hecha:

```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json

{"error":"el correo no tiene formato válido","campo":"correo"}
```

Fíjate en lo que *no* trae: ni SQL, ni rutas del servidor, ni la versión de la base de datos. Mensaje útil para el usuario, detalle completo en los logs.

**Dato que ahorra horas:** un error de **CORS** en la consola (m4-a18) muchas veces no es un código de estado: el navegador bloquea la respuesta antes de que puedas leerla. No confundas "failed to fetch" con un 500.

### Díselo a la IA

> "Estoy revisando los códigos de estado de mi API. Te pego estos casos: [lista de situaciones]. Para cada uno dime el código correcto, si el cuerpo debe llevar algo y qué mensaje es seguro mostrarle al usuario. Marca especialmente dónde estoy devolviendo 200 con un error dentro o exponiendo detalles internos, y explícame cómo corregirlo sin revelar información del servidor."

Revisar códigos con la IA es barato; descubrir en producción que tu API decía "ok" mientras fallaba, no.

### Ejercicios

**1. [relacionar]** Une cada elemento con su pareja:
   - 200 ↔ La petición salió bien
   - 201 ↔ Se creó un recurso
   - 401 ↔ No sé quién eres
   - 403 ↔ Sé quién eres, pero no tienes permiso
   - 404 ↔ El recurso no existe
   - 500 ↔ Falló el servidor

**2. [opción múltiple]** Escribes mal la contraseña al iniciar sesión. ¿Qué código es el correcto?
   - a) 403, porque no tienes permiso
   - b) 401, porque no se pudo autenticar ✔
   - c) 404, porque el usuario no existe
   - d) 500, porque el login falló

**3. [verdadero/falso]** "Un 500 significa que el usuario mandó datos inválidos."
   - Respuesta: FALSO — los datos inválidos son 400 o 422; el 500 es una falla interna del servidor (4xx = cliente, 5xx = servidor).

**4. [completar]** "Los códigos ____ son errores del cliente; los ____ son errores del servidor."
   - Banco: `4xx` · `5xx` · `2xx` · `3xx`
   - Respuesta: 4xx / 5xx

**5. [qué hace]** ¿Qué está mal en esta respuesta?

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"ok": false, "error": "no autorizado"}
```

   - a) Usa 200 para un fallo de autorización: debería ser 401 (o 403) para que el cliente y los monitores lo detecten ✔
   - b) Nada, el JSON explica el error
   - c) Falta el header Content-Type
   - d) Debería usar 500 porque el usuario se equivocó

---

## A6 — Headers: los metadatos de cada petición

### Concepto

Los **headers** son los metadatos de la petición: pares `Nombre: valor` que van antes de la línea en blanco y describen el mensaje sin ser el mensaje. El cuerpo lleva el *qué*; los headers llevan *cómo leerlo, quién lo manda y qué espera de vuelta* (m4-a3).

Estos son los que vas a ver en casi todas partes:

- **Host** — a qué dominio va dirigida la petición. Obligatorio en HTTP/1.1.
- **Content-Type** — el formato del cuerpo que mandas: `application/json`, `application/x-www-form-urlencoded` o `multipart/form-data` si son archivos.
- **Accept** — el formato que aceptas de vuelta. Si pides JSON y el servidor solo sabe dar XML, lo correcto es un `406`.
- **Authorization** — la credencial: `Bearer `. Es el header más delicado de todos (m4-a13).
- **Content-Length** — cuántos bytes mide el cuerpo.
- **Cookie** — lo que el navegador reenvía solo en cada petición al mismo dominio (m4-a17).

En la respuesta aparecen otros que también cuentan la historia:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Cache-Control: no-store
Access-Control-Allow-Origin: https://mitienda.mx
Set-Cookie: sesion=abc123; HttpOnly; Secure; SameSite=Lax
```

Dos detalles que evitan confusiones. Primero: los **nombres** de los headers no distinguen mayúsculas — `Content-Type` y `content-type` son el mismo header; los **valores** sí distinguen. Segundo: un header puede repetirse (`Set-Cookie` suele venir varias veces), y ahí el orden importa.

**Advertencia real:** nunca uses un header que manda el cliente como prueba de identidad. Si tu servidor lee `X-Usuario-Id: 7` y confía en él, cualquiera lo cambia con curl y entra como el usuario 7. La identidad sale del token verificado en el servidor (m4-a15), no de una etiqueta que el visitante escribió.

### Analogía

Una petición HTTP es un **paquete con guía de envío**. La caja es el cuerpo: adentro va lo que realmente quieres mandar. La guía pegada por fuera dice qué contiene, cuánto pesa, quién lo manda y qué debe hacer el repartidor si no encuentra a nadie: eso son los headers. El repartidor no abre la caja; usa la guía para manejarla.

Si la guía dice "frágil" y la caja trae piedras, el problema no es el contenido: es que la etiqueta miente. Lo mismo pasa con `Content-Type: application/json` sobre un cuerpo que no es JSON: el servidor intenta tratarlo como tal y falla.

### Cómo se ve en la práctica

Abre **F12 → Network**, haz clic en cualquier petición y quédate en la pestaña *Headers*. Verás dos bloques: **Request Headers** (lo que mandó tu navegador: `Accept`, `User-Agent`, `Cookie` y `Authorization` si hay sesión) y **Response Headers** (lo que contestó el servidor: `Content-Type`, `Cache-Control`, `Set-Cookie`). Ese panel es la verdad de la conversación: si tu app "no manda el token", aquí lo compruebas en dos segundos.

Para verte a ti mismo del otro lado, pide una API que refleje tus headers:

```js
curl.exe -i https://httpbin.org/headers -H "Accept: application/json"
```

La respuesta te devuelve tu `User-Agent`, tu `Accept` y todo lo que mandaste. Agrega uno propio y vuelve a correrlo:

```js
curl.exe -i https://httpbin.org/headers -H "X-Cliente: mi-app" -H "Accept: application/json"
```

Ahí aparece el par nuevo en el espejo. Eso es todo lo que es un header: una etiqueta que viaja con el mensaje. Y si copias una petición con *Copy as cURL*, verás los headers escritos como `-H "Nombre: valor"` (m4-a3).

**Advertencia:** ese *Copy as cURL* arrastra tu `Authorization` y tus cookies. No lo pegues en un chat, un issue ni una captura: un token filtrado es una sesión regalada (m4-a19). HTTPS cifra el mensaje completo, headers incluidos, pero no lo salva de tus propias capturas.

### Díselo a la IA

> "Actúa como ingeniero de backend revisando mi API. Te pego los headers de una petición y su respuesta: [pégalos aquí, borrando el valor real del token]. Explícame qué hace cada uno, marca los que exponen información sensible o interna, dime cuáles son obligatorios para que mi API funcione y cuáles debería agregar para caché y seguridad. Si algún header de la petición se está usando para decidir permisos, señálalo como riesgo: el cliente puede escribir lo que quiera ahí."

Ese último punto es el que evita la falla más común: creer que un header que manda el cliente es una prueba de identidad.

### Ejercicios

**1. [opción múltiple]** ¿Qué header declara el formato del cuerpo que estás enviando?
   - a) Accept
   - b) Content-Type ✔
   - c) Authorization
   - d) Host

**2. [relacionar]** Une cada elemento con su pareja:
   - Content-Type ↔ Formato del cuerpo que envías
   - Accept ↔ Formato que esperas de vuelta
   - Authorization ↔ La credencial de la sesión
   - Host ↔ El dominio al que va dirigida la petición
   - Cache-Control ↔ Reglas sobre guardar la respuesta en caché

**3. [verdadero/falso]** "Los nombres de los headers distinguen mayúsculas de minúsculas, así que Content-Type y content-type son headers distintos."
   - Respuesta: FALSO — los nombres de los headers son case-insensitive: Content-Type y content-type son el mismo header. Los valores sí distinguen mayúsculas.

**4. [completar]** "El header ____ declara el formato del cuerpo que envías; el header ____ declara el formato que aceptas de vuelta."
   - Banco: `Content-Type` · `Accept` · `Host` · `Cookie`
   - Respuesta: Content-Type / Accept

**5. [qué hace]** El servidor usa X-Usuario-Id para decidir de quién es el pedido. ¿Cuál es el riesgo?

```http
POST /api/pedidos HTTP/1.1
Host: api.mitienda.mx
X-Usuario-Id: 7
Content-Type: application/json

{"total":350}
```

   - a) Ninguno, el header viaja cifrado con HTTPS
   - b) Cualquiera puede cambiar ese header con curl y crear pedidos a nombre de otro usuario: la identidad debe salir de un token verificado ✔
   - c) Solo es un problema si el usuario usa el modo incógnito
   - d) El riesgo es que el pedido se cree dos veces

---

## A7 — El cuerpo de la petición: JSON en acción

### Concepto

El **cuerpo** (body) es la parte del mensaje que lleva los datos. En una petición es lo que mandas —el formulario convertido en JSON—; en una respuesta es lo que recibes —la lista de pedidos o el usuario recién creado—. Los headers dicen *cómo* leerlo; el cuerpo es *lo que se lee* (m4-a3).

El formato que domina la web es **JSON** (JavaScript Object Notation). No es un lenguaje ni una base de datos: es texto con una forma acordada. Con estas seis reglas dejas de equivocarte:

- Los objetos van entre llaves `{ }` y los arreglos entre corchetes `[ ]`.
- Las claves **siempre** van entre comillas dobles: `"cliente"`, no `cliente`.
- Los textos también van entre comillas dobles. Las comillas simples no son JSON válido.
- Los números y los booleanos van sin comillas: `350`, `true`.
- No hay coma después del último elemento ni comentarios.
- El valor vacío se escribe `null`, no `undefined` ni `None`.

Así se ve una petición que crea un pedido:

```http
POST /api/pedidos HTTP/1.1
Host: api.mitienda.mx
Content-Type: application/json
Authorization: Bearer eyJhbGciOi...
Content-Length: 45

{"cliente":"Ana","total":350,"urgente":false}
```

Y la respuesta:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{"id":43,"cliente":"Ana","total":350,"urgente":false,"creadoEn":"2026-10-20T18:04:00Z"}
```

El header `Content-Type: application/json` no es opcional. Sin él, el servidor puede leer el cuerpo como texto plano y contestarte `400` o guardar basura. Si el cuerpo y el header no coinciden, gana el header: el servidor intenta parsear como JSON algo que no lo es y falla.

**Advertencia real:** el cuerpo llega desde el cliente, y el cliente es territorio enemigo. Que tu formulario valide no significa que el servidor deba confiar: cualquiera manda `"total": -500` o un campo de 40 MB con curl (m4-a21). Valida tipo, rango y tamaño en el servidor, y ponle un límite al cuerpo. Y nunca metas contraseñas, datos de tarjeta ni tokens de terceros en un JSON que se loguea: los logs son el lugar más común donde se filtran.

### Analogía

El mensaje HTTP es un **paquete con guía de envío**. La guía por fuera dice qué contiene y cuánto pesa: los headers. Lo que va adentro de la caja es el cuerpo. JSON es el **empaque estándar**: una caja con divisiones donde cada etiqueta va entre comillas y cada valor tiene su lugar.

Si metes una etiqueta sin comillas o dejas una coma colgando, la caja no cierra y quien la recibe no puede abrirla. El JSON no queda "más o menos bien": está roto, y el servidor responde `400` sin siquiera mirar tu lógica.

### Cómo se ve en la práctica

Manda tu primer cuerpo real contra una API de prueba:

```json
curl.exe -i -X POST https://httpbin.org/post -H "Content-Type: application/json" -d '{"cliente":"Ana","total":350}'
```

La respuesta te devuelve en `"json"` exactamente lo que mandaste. Ahora quita una llave o agrega una coma al final y vuelve a correrlo: recibes un `400`. Ese es el error de JSON más común del mundo, y ya lo reconoces cuando lo ves.

Mira el mismo cuerpo desde el navegador. Abre **F12 → Network**, haz clic en un POST de tu app y entra a la pestaña *Payload*. Ahí está el JSON tal como viajó, no como lo ves en tu código. Si el servidor dice que falta un campo, compara ese panel con lo que creías estar mandando: casi siempre el bug vive en esa diferencia.

En JavaScript, el viaje de ida y vuelta son dos funciones: `JSON.stringify()` convierte un objeto en texto para enviarlo y `JSON.parse()` convierte el texto recibido en objeto. Prueba esto en la consola:

```json
JSON.parse('{"cliente":"Ana",}')
// SyntaxError: Unexpected token } in JSON
```

El error te dice algo muy concreto: sobra una coma. **Advertencia:** nunca uses `eval()` para leer JSON. `JSON.parse()` solo acepta datos, no ejecuta código; `eval()` sí lo ejecuta, y eso es una puerta abierta a ejecución remota (m4-a29).

### Díselo a la IA

> "Tengo este JSON que manda mi frontend: [pégalo aquí, sin datos reales de clientes]. Valídalo: dime si es JSON válido, qué campos deberían ser obligatorios, qué tipos conviene exigir en el servidor y qué datos no deberían viajar nunca en el cuerpo (contraseñas en claro, tokens de terceros, datos de tarjeta). Devuélveme el esquema de validación en lenguaje simple y una lista de casos de prueba con los que yo pueda romperlo a propósito. No implementes todavía."

Pedir los casos de prueba antes del código te convierte en el que audita, no en el que reza para que funcione.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estos cuerpos es JSON válido?
   - a) {"cliente":"Ana","total":350} ✔
   - b) {cliente:"Ana", total:350}
   - c) {"cliente":"Ana","total":350,}
   - d) {'cliente':'Ana','total':350}

**2. [qué hace]** ¿Qué le pasa a este cuerpo?

```json
{
  "cliente": "Ana",
  "total": 350,
}
```

   - a) Es válido, JSON permite comas finales
   - b) No es JSON válido: sobra una coma después del último campo ✔
   - c) Falta el header Authorization
   - d) Los números deben ir entre comillas

**3. [verdadero/falso]** "GET puede llevar cuerpo, por eso se usa para mandar filtros complejos."
   - Respuesta: FALSO — el cuerpo de GET no tiene semántica definida y muchos servidores y proxies lo ignoran. Los filtros van en la query string (m4-a11).

**4. [completar]** "En JSON, las claves y los textos van entre comillas ____, y los números van ____ comillas."
   - Banco: `dobles` · `sin` · `simples` · `con`
   - Respuesta: dobles / sin

**5. [ordenar]** Ordena lo que pasa al enviar un formulario como JSON:
   - Orden correcto: Reúnes los datos en un objeto de JavaScript → Los conviertes a texto con JSON.stringify() → Envías el POST con Content-Type: application/json → El servidor valida el cuerpo y lo guarda → Responde 201 con el objeto creado

---

## A8 — ¿Qué es una API? (y por qué hoy todo es una API)

### Concepto

Una **API** (Application Programming Interface) es un **contrato**: la lista de cosas que un programa puede pedirle a otro, cómo pedirlas y qué va a recibir. No es una base de datos, no es un servidor y no es magia. Es una interfaz, igual que la pantalla de un cajero automático es la interfaz entre tú y el banco.

Hoy casi todo es una API porque los sistemas dejaron de ser islas. Tu app no guarda los pagos: le pide a la API de Stripe que cobre. No manda WhatsApp: llama a la API de WhatsApp. No calcula el mapa: consulta la API de Google Maps. En cada caso hay un contrato con nombres, formatos y límites.

La diferencia que más te va a servir es **sitio web vs API**:

- Un **sitio web** responde HTML pensado para ojos humanos. `GET https://mitienda.mx/pedidos` te devuelve la página con la tabla.
- Una **API web** responde datos pensados para programas, casi siempre JSON. `GET https://api.mitienda.mx/pedidos` te devuelve `[{"id":42,"total":350}]`.

El mismo backend alimenta los dos: el sitio pinta el HTML y la app móvil consume la API. Por eso "todo es una API": es la puerta única a los datos y a las reglas de un negocio.

Una llamada real a una API pública:

```http
GET https://api.github.com/users/octocat HTTP/1.1
Accept: application/vnd.github+json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"login":"octocat","name":"The Octocat","public_repos":8,"created_at":"2011-01-25T18:44:36Z"}
```

Fíjate en lo que *no* viene: ni el HTML del perfil, ni el código de GitHub. Solo el dato. Ese recorte es la API.

**Advertencia real:** una API key que viaja al navegador ya no es secreta. Si la pones en tu JavaScript, cualquiera la lee con Ctrl+U y te cobra la factura (m4-a19, m4-c18). Las llaves van en el servidor, en variables de entorno. Y CORS no protege una API: es una regla del navegador que un script con curl ignora por completo (m4-a18).

### Analogía

Ya viste el menú del restaurante en m4-a1. Aquí importa la otra cara: el **menú es el contrato**. Dice qué platillos existen, cómo se llaman y qué incluye cada uno. No dice cómo se cocinan ni te deja entrar a la cocina.

Una API es ese menú para programas. Tú (o tu app) pides del menú, la cocina (el servidor) trabaja y recibes el platillo (los datos). Si pides algo que no está en el menú, recibes un `404`; si no te identificaste, un `401`. Y el menú cambia cuando el restaurante quiere: por eso existe el versionado (m4-a28).

### Cómo se ve en la práctica

Compara las dos caras del mismo servicio. Abre en el navegador `https://github.com/octocat` y después `https://api.github.com/users/octocat`. El primero te da una página con botones y tipografía; el segundo, un bloque de JSON crudo. Mismo dueño, mismo dato, distinto consumidor.

Ahora mira cómo una app real consume una API. Abre **F12 → Network**, filtra por *Fetch/XHR* y recarga cualquier sitio moderno. Verás peticiones a rutas como `/api/...` cuyo *Response* es JSON. Lo que la pantalla muestra llegó por ahí.

Prueba una API pública con la terminal y lee los headers de límite:

```js
curl.exe -i https://api.github.com/users/octocat
```

En la respuesta aparece algo como `x-ratelimit-remaining: 59`: el contrato también incluye cuántas veces puedes llamar (m4-a20). Si lo ignoras, un día recibes `429 Too Many Requests` y no sabrás por qué.

**Advertencia:** cuando una API te pida una llave, pregúntate siempre dónde va a vivir. Si la pegas en el frontend, publícala. Si la llamada necesita secreto, hazla desde una función de servidor (m4-c16).

### Díselo a la IA

> "Actúa como arquitecto de APIs. Voy a conectar mi frontend con [servicio externo o backend propio]. Explícame en lenguaje simple: qué endpoints necesito, qué datos entran y salen de cada uno, dónde debe vivir la llave o el token (navegador o servidor) y qué pasa si alguien lee mi JavaScript. Si detectas una operación que no se puede hacer de forma segura desde el navegador, dímelo antes de escribir código."

Ese prompt te obliga a decidir el lugar de cada secreto antes de que la IA te lo esconda en un archivo del cliente.

### Ejercicios

**1. [opción múltiple]** ¿Qué distingue una API web de un sitio web?
   - a) La API devuelve datos para programas; el sitio devuelve HTML para personas ✔
   - b) La API no usa HTTP
   - c) El sitio web no puede usar JSON
   - d) La API solo funciona sin internet

**2. [relacionar]** Une cada elemento con su pareja:
   - API ↔ Contrato de qué puedes pedir y qué recibes
   - Sitio web ↔ HTML pensado para ojos humanos
   - API key ↔ Credencial de la aplicación
   - Token de usuario ↔ Identidad de una persona con sesión
   - JSON ↔ Formato habitual de los datos que viajan

**3. [verdadero/falso]** "Si una API key está en el JavaScript del navegador, sigue siendo secreta porque el código está ofuscado."
   - Respuesta: FALSO — todo lo que llega al navegador es público: la ofuscación solo estorba un rato. Una llave en el cliente se considera filtrada (m4-a19).

**4. [completar]** "Un sitio web devuelve ____ para personas; una API devuelve ____ para programas."
   - Banco: `HTML` · `JSON` · `CSS` · `código`
   - Respuesta: HTML / JSON

**5. [qué hace]** ¿Qué problema tiene este código en el frontend?

```json
fetch("https://api.stripe.com/v1/charges", {
  method: "POST",
  headers: { Authorization: "sk_live_51H..." }
});
```

   - a) Ninguno, HTTPS cifra la llave
   - b) Expone una llave secreta en el navegador: cualquiera la lee y cobra a tu cuenta. Esa llamada debe salir de un servidor ✔
   - c) Falta el header Accept
   - d) Stripe no usa JSON

---

## A9 — REST: el estilo que domina la web

### Concepto

**REST** (Representational State Transfer) no es un protocolo ni una librería: es un **estilo de arquitectura** que Roy Fielding describió en su tesis del año 2000. No se instala ni se importa; se sigue o no se sigue. Una API que lo sigue se llama *RESTful*.

De sus restricciones, estas cuatro son las que vas a notar todos los días:

- **Recursos, no acciones.** La URL nombra *cosas* (sustantivos en plural): `/pedidos`, `/clientes`, `/productos`. El verbo no va en la URL: va en el método HTTP (m4-a4).
- **Un recurso, una URL.** `/pedidos/42` es el pedido 42 y siempre será el mismo, se consulte, se modifique o se borre.
- **Representaciones.** El recurso vive en el servidor; lo que viaja es una representación, normalmente JSON, aunque podría ser XML o CSV.
- **Stateless.** Cada petición lleva todo lo necesario para entenderse, incluida la identidad. El servidor no guarda el hilo de la conversación (m4-a17).

Compara las dos columnas:

```http
RESTful                              No RESTful
GET  /api/pedidos                    GET  /api/getPedidos
GET  /api/pedidos/42                 GET  /api/pedido?id=42&accion=ver
POST /api/pedidos                    POST /api/crearPedido
PATCH /api/pedidos/42                POST /api/pedidos/42/modificar
DELETE /api/pedidos/42               GET  /api/pedidos/42/borrar
```

La columna izquierda se lee sola: *en pedidos, dame el 42*. La derecha obliga a inventar un verbo nuevo por cada operación y crece sin control.

**Advertencia:** REST no es una ley y no todo encaja. Acciones que no son CRUD —cobrar, enviar un correo, generar un reporte— suelen necesitar rutas como `POST /api/pedidos/42/pagar`, y está bien. Lo que sí es obligatorio es la consistencia: si tu API mezcla `/crearPedido`, `/pedidos/nuevo` y `/api/v1/orders`, quien la consuma —o la IA que la programe— va a adivinar mal. Y jamás pongas acciones destructivas en GET: un crawler o un prefetch puede ejecutarlas sin que nadie haga clic (m4-a4).

### Analogía

Es una **biblioteca**. Cada libro es un recurso y su ubicación es la URL: `/estantes/novela/42`. Para consultarlo, lo lees (GET); para reemplazarlo por otra edición, lo cambias completo (PUT); para arreglar una página, la corriges (PATCH); para darlo de baja, lo retiras (DELETE). Nunca pides "el libro que se lee" ni "la acción de leer el 42": pides el libro.

La bibliotecaria no recuerda qué pediste ayer. Si vuelves, te identificas otra vez. Esa falta de memoria es el *stateless*, y es lo que permite atender a miles de personas a la vez sin confusiones.

### Cómo se ve en la práctica

La API de GitHub es un buen museo de REST. Prueba estas rutas y lee la forma de la URL antes de mirar el resultado:

```js
curl.exe -i https://api.github.com/users/octocat/repos
curl.exe -i https://api.github.com/repos/vercel/next.js/issues/1/comments
```

En la primera, los repositorios de un usuario son un recurso dentro de un usuario. En la segunda, los comentarios de un issue. Todo son sustantivos en plural, anidados como máximo un par de niveles, y el método decide la acción.

Ahora observa lo que *no* hace: no hay `/getRepos` ni `/users/octocat/repos/crear`. Para crear un repo, GitHub usa `POST /user/repos`. Esa coherencia es lo que permite que cualquiera use la API sin leer veinte páginas de instrucciones.

**Ojo con el pragmatismo:** GitHub también tiene `GET /search/code`, que es más una acción que un recurso. Los estilos puros existen en los libros; en producción se mezclan con criterio. Lo que no se negocia es que la API sea predecible y que las acciones destructivas nunca viajen en un GET.

### Díselo a la IA

> "Actúa como revisor de APIs REST. Te paso estas rutas: [lista]. Reescríbelas en estilo REST: recursos en plural, sin verbos en la URL, con el método HTTP correcto. Para cada cambio dime qué método queda, qué regresa y qué código de estado usa al crear, al borrar y cuando falta permiso. Si alguna operación no encaja en REST, dímelo y propón la excepción más clara en lugar de forzarla."

Pedir la excepción explícita evita que la IA invente un híbrido silencioso que después nadie entiende.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estas rutas es RESTful para leer el pedido 42?
   - a) GET /api/pedidos/42 ✔
   - b) GET /api/getPedido?id=42
   - c) GET /api/pedidos/ver/42
   - d) GET /api/pedido/42/leer

**2. [relacionar]** Une cada elemento con su pareja:
   - Recursos ↔ Sustantivos en plural en la URL
   - Métodos ↔ Verbos HTTP que indican la acción
   - Stateless ↔ Cada petición lleva su propia identidad
   - Representación ↔ El JSON que viaja en el cuerpo

**3. [verdadero/falso]** "REST es un protocolo que se instala en el servidor."
   - Respuesta: FALSO — REST es un estilo de arquitectura descrito por Fielding; no se instala ni se importa. HTTP sí es el protocolo que suele usarse para implementarlo.

**4. [completar]** "En REST la URL nombra ____ y el método HTTP indica la ____ sobre ese recurso."
   - Banco: `recursos` · `acción` · `tablas` · `velocidad`
   - Respuesta: recursos / acción

**5. [qué hace]** ¿Qué tiene de malo esta ruta?

```http
GET /api/pedidos/42/borrar HTTP/1.1
Host: api.mitienda.mx
```

   - a) Nada, es una forma válida de borrar
   - b) Usa GET para una acción destructiva y pone un verbo en la URL: debería ser DELETE /api/pedidos/42 ✔
   - c) Le falta el header Content-Type
   - d) Debería usar POST para leer

---

## A10 — Endpoints: diseñar las ventanillas de tu sistema

### Concepto

Un **endpoint** es una ventanilla de tu sistema: la combinación exacta de **método + ruta** que atiende una operación. `GET /api/v1/pedidos` es una ventanilla; `POST /api/v1/pedidos` es otra, en la misma dirección pero para otra cosa. Diseñarlas bien separa una API que se puede usar de una que hay que descifrar.

Estas son las reglas que uso y que le pido a la IA:

- **Sustantivos en plural y en minúsculas**: `/pedidos`, `/clientes`. Si el nombre es compuesto, guion: `/ordenes-compra`. Nada de `/Pedidos` ni `/orden_compra`.
- **Sin verbos en la ruta.** El método ya dice qué pasa (m4-a4): `POST /pedidos`, no `/pedidos/crear`.
- **El identificador va en la ruta**: `/pedidos/42`. Los filtros van en la query (m4-a11): `/pedidos?estado=pendiente`.
- **Anida como máximo dos niveles**: `/clientes/7/pedidos` se entiende; `/clientes/7/pedidos/42/items/3/descuentos` es un laberinto.
- **Versión desde el día uno**: `/api/v1/...` (m4-a28).
- **Una sola forma de error** para toda la API: mismo JSON, mismo campo.

El CRUD completo de un recurso, en seis líneas:

```http
GET    /api/v1/pedidos              → lista (con paginación)
GET    /api/v1/pedidos/42           → uno
POST   /api/v1/pedidos              → crea, responde 201 + Location
PATCH  /api/v1/pedidos/42           → modifica los campos enviados
PUT    /api/v1/pedidos/42           → reemplaza completo
DELETE /api/v1/pedidos/42           → borra, responde 204
```

Y una respuesta de lista que no se rompe al crecer:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"datos":[{"id":42,"total":350}],"pagina":1,"total":137}
```

**Advertencia real:** una URL difícil de adivinar no protege nada. `/api/v1/pedidos/42` se prueba con 41, 43 y 44 en un bucle de tres líneas. Cada endpoint debe verificar permiso por sí mismo (m4-a15), idealmente con reglas en la base (m4-b22). Y no devuelvas la fila completa "por si acaso": si la tabla tiene `costo_interno` o `notas_privadas`, acabas de filtrar tu negocio.

### Analogía

Es una **oficina de trámites**. Hay una ventanilla para pagar, otra para recoger documentos y otra para dar de baja un servicio. Cada una tiene un número y atiende una sola cosa. Si mezclas trámites en la misma ventanilla, la fila se detiene y nadie sabe qué entregar.

El endpoint es esa ventanilla con su letrero: *método + ruta*. Y el letrero debe decir qué trámite es, no "ventanilla número 7". Si el usuario (o la IA) tiene que preguntar qué hace cada ventanilla, el diseño falló.

### Cómo se ve en la práctica

Diseña las ventanillas de un negocio de pedidos antes de escribir una línea de código. Empieza por la lista y verifica cada una con curl:

```js
curl.exe -i https://api.tusitio.mx/api/v1/pedidos
curl.exe -i https://api.tusitio.mx/api/v1/pedidos/42
curl.exe -i https://api.tusitio.mx/api/v1/pedidos/999999
curl.exe -i -X DELETE https://api.tusitio.mx/api/v1/pedidos/42
```

Lee los códigos, no solo el cuerpo: la lista debe dar `200`; el pedido inexistente, `404`; el borrado sin token, `401`; y un método que la ruta no admite, `405 Method Not Allowed`. Ese último código es el que casi nadie configura, y es el que le dice a un integrador que se equivocó de ventanilla.

Después abre **F12 → Network** en tu propia app y compara las rutas que llama el frontend con la tabla que diseñaste. Si aparece una ruta que no está en la tabla, o hay dos formas de hacer lo mismo, ya tienes deuda técnica visible.

**Advertencia:** no expongas los nombres internos de tus tablas ni IDs autoincrementales en la documentación pública sin pensar en la enumeración. Y recuerda: ocultar una ruta no es autorizar; el permiso se verifica en cada endpoint (m4-a15).

### Díselo a la IA

> "Actúa como diseñador de APIs. Mi sistema es [describe el negocio] y necesito estas operaciones: [lista]. Propón la tabla de endpoints: método, ruta versionada, qué recibe, qué devuelve, código de estado en éxito y en error, y quién puede llamarlo. Usa sustantivos en plural, sin verbos en la ruta y máximo dos niveles de anidación. Antes de la tabla, hazme las preguntas que te falten sobre permisos y datos sensibles."

Si la IA empieza por la tabla sin preguntar por permisos, ya sabes qué le falta: la parte que protege el negocio.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es el endpoint correcto para crear un pedido nuevo?
   - a) POST /api/v1/pedidos ✔
   - b) GET /api/v1/pedidos/crear
   - c) POST /api/v1/pedidos/crear
   - d) PUT /api/v1/pedidos

**2. [relacionar]** Une cada elemento con su pareja:
   - GET /api/v1/pedidos ↔ Listar pedidos
   - POST /api/v1/pedidos ↔ Crear un pedido
   - PATCH /api/v1/pedidos/42 ↔ Modificar campos del pedido 42
   - DELETE /api/v1/pedidos/42 ↔ Borrar el pedido 42

**3. [completar]** "En un endpoint los ____ van en plural y los filtros van en la ____, no en la ruta."
   - Banco: `sustantivos` · `query` · `métodos` · `cabecera`
   - Respuesta: sustantivos / query

**4. [verdadero/falso]** "Una URL impredecible como /api/v1/pedidos/9f3a2 es suficiente para proteger los pedidos de otros usuarios."
   - Respuesta: FALSO — la oscuridad no es seguridad: los IDs se enumeran o se filtran, y cada endpoint debe verificar permiso por sí mismo (m4-a15).

**5. [qué hace]** ¿Qué está mal en este endpoint?

```http
POST /api/v1/pedidos/42/crear HTTP/1.1
Host: api.mitienda.mx
Content-Type: application/json

{"cliente":"Ana","total":350}
```

   - a) Nada, es la forma estándar de crear
   - b) Pone un verbo en la ruta y apunta a un recurso que ya existe: para crear debería ser POST /api/v1/pedidos ✔
   - c) Falta el header Accept
   - d) Debería usar GET porque envía un cuerpo

---

## A11 — Parámetros: query, path y body

### Concepto

Una petición HTTP puede llevar datos en tres lugares distintos, y confundirlos es la causa número uno de APIs que "no encuentran" lo que les pides. Los tres:

- **Path** (ruta): identifica *cuál* recurso. En `/api/v1/pedidos/42`, el `42` es un parámetro de ruta. Es obligatorio y forma parte de la dirección.
- **Query string**: lo que va después del signo `?`. Filtra, ordena o pagina: `/api/v1/pedidos?estado=pendiente&limite=20`. Es opcional y cada par es `clave=valor` unido por `&`.
- **Body** (cuerpo): el contenido que creas o cambias. Va en JSON con `POST`, `PUT` o `PATCH` (m4-a4), nunca en un `GET`.

La regla para decidir: **path = cuál; query = cuáles de esos y cómo los quiero; body = qué contiene**. Si el dato identifica un recurso, va en la ruta. Si solo ajusta la consulta, va en la query. Si es el contenido de una creación o un cambio, va en el cuerpo.

Así se ve una petición que usa los tres a la vez:

```http
PATCH /api/v1/pedidos/42?notificar=true HTTP/1.1
Host: api.mitienda.mx
Content-Type: application/json
Authorization: Bearer eyJhbGciOi...

{"estado":"enviado","guia":"MX-7781"}
```

El `42` dice cuál pedido; `?notificar=true` ajusta el comportamiento; el cuerpo lleva lo que cambia. En Express se leen como `req.params.id`, `req.query.notificar` y `req.body.estado`.

Dos detalles que muerden. Primero: **todo lo que llega por URL es texto**. `?limite=20` llega como la cadena `"20"`; si tu código compara con `=== 20`, falla. Conviértelo y valídalo (m4-a21). Segundo: los caracteres especiales se codifican — un espacio se vuelve `%20` y una `&` dentro de un valor, `%26` —, porque si no, rompen la estructura de la URL.

**Advertencia real:** nunca pongas contraseñas, tokens ni datos personales en la query string. Aunque HTTPS cifre el viaje, la URL completa queda en el historial del navegador, en los logs del servidor y del proxy, y en el header `Referer` cuando el usuario hace clic en un enlace. Un token en la URL es un token filtrado (m4-a19). Y del otro lado: el `id` de la ruta no prueba que el recurso sea tuyo; el servidor debe verificar propiedad en cada petición (m4-a15).

### Analogía

Es un **trámite de archivo**. El **path** es el número de expediente: *expediente 42*. Sin él no sabes de qué hablas. La **query** es cómo pides la copia: *solo las hojas de este año, en orden, las primeras 20*. Y el **body** es el formulario que entregas cuando quieres agregar o corregir algo: ahí va el contenido nuevo.

Si metes el contenido del formulario en el número de expediente, el archivista no sabe qué hacer. Si pides "expediente 42, año 2026, color azul" mezclado en el identificador, tampoco. Cada dato tiene su casilla, y elegir la casilla correcta es la mitad del trabajo.

### Cómo se ve en la práctica

Vas a verlo en vivo. Primero, un path puro:

```js
curl.exe -i "https://jsonplaceholder.typicode.com/posts/1"
```

Cambia el `1` por `2` y obtienes otro recurso. Ese número es el path param: si lo quitas, la ruta deja de tener sentido y responde `404`.

Ahora una query con dos parámetros:

```js
curl.exe -i "https://jsonplaceholder.typicode.com/posts?userId=1&_limit=3"
```

Las comillas importan en PowerShell: sin ellas, `&` se interpreta como un operador y el comando se rompe. La respuesta trae solo los posts del usuario 1, máximo 3. Cambia `userId` y observa cómo cambia el conjunto, no la ruta.

Para el body, usa `httpbin.org`, que devuelve exactamente lo que recibió. Guarda este JSON en un archivo `pedido.json`:

```json
{"cliente":"Ana","total":350}
```

Y mándalo así:

```js
curl.exe -i -X POST "https://httpbin.org/post" -H "Content-Type: application/json" -d "@pedido.json"
```

En la respuesta verás un campo `json` con tus datos y un campo `headers` con el `Content-Type` que mandaste. Si olvidas ese header, el servidor recibe texto plano y no JSON: por eso el body y su header viajan juntos (m4-a6).

Por último, abre **F12 → Network**, haz una búsqueda en tu app y revisa la petición: en *Payload* verás la query desglosada en una tabla y, si hubo body, el JSON enviado. Ahí compruebas en qué casilla quedó cada dato.

**Advertencia:** los ejemplos públicos son de lectura. No mandes datos reales de clientes a servicios de prueba y no pruebes `DELETE` contra producción para ver qué pasa. Los logs del servidor guardan la URL completa, con query incluida (m4-a25).

### Díselo a la IA

> "Tengo este endpoint: [método y ruta]. Necesito mandar estos datos: [lista de campos]. Dime cuáles van en el path, cuáles en la query y cuáles en el body, y justifica cada uno en una línea. Después escríbeme la petición completa en curl para Windows PowerShell y el objeto JSON del body. Si algún campo es un identificador de usuario, un token o un dato sensible, adviérteme antes de ponerlo en la URL."

Ese último filtro es el que evita que tu propio prompt te enseñe a filtrar secretos.

### Ejercicios

**1. [opción múltiple]** En <code>GET /api/v1/pedidos/42?incluir=items</code>, ¿qué es cada parte?
   - a) 42 es un parámetro de ruta e incluir=items es un parámetro de query ✔
   - b) Los dos son parámetros de query
   - c) 42 es un parámetro de body e incluir=items es de ruta
   - d) Los dos son parámetros de ruta

**2. [relacionar]** Une cada elemento con su pareja:
   - Path ↔ Identifica cuál recurso, por ejemplo /pedidos/42
   - Query string ↔ Filtra, ordena o pagina la respuesta
   - Body ↔ Lleva el contenido que se crea o se modifica
   - Content-Type ↔ Declara el formato del cuerpo enviado

**3. [completar]** "El ____ identifica cuál recurso; la ____ filtra u ordena la lista; el ____ lleva el contenido que se crea o se modifica."
   - Banco: `path` · `query` · `body` · `header`
   - Respuesta: path / query / body

**4. [verdadero/falso]** "Puedes mandar la contraseña en la query string porque HTTPS cifra la URL y nadie más la ve."
   - Respuesta: FALSO — HTTPS cifra el tránsito, pero la URL completa queda en el historial, en los logs y en el header Referer. Las credenciales van en el body y nunca en la URL (m4-a19).

**5. [qué hace]** ¿Qué está pidiendo esta petición?

```http
PATCH /api/v1/pedidos/42?notificar=true HTTP/1.1
Host: api.mitienda.mx
Content-Type: application/json

{"estado":"enviado"}
```

   - a) Cambiar el estado del pedido 42 y solicitar una notificación ✔
   - b) Crear el pedido 42 con estado enviado
   - c) Borrar el pedido 42 y notificar al cliente
   - d) Leer el pedido 42 sin modificarlo

---

## A12 — Probar una API sin escribir código

### Concepto

Para saber si una API funciona no necesitas la interfaz. Ni un formulario, ni un botón, ni una línea de JavaScript. Necesitas mandar la petición y leer la respuesta tal como llega. Eso se hace con una herramienta de cliente HTTP, y hay tres que vas a ver en cualquier equipo: **curl** (un comando que ya viene en Windows, Mac y Linux), **Postman** (una aplicación de escritorio) y **Thunder Client** (una extensión dentro de VS Code).

Las tres hacen lo mismo: arman una petición HTTP —método, URL, headers y cuerpo (m4-a3)—, la envían y te muestran la respuesta en crudo: el **status**, los headers y el **body**. La diferencia es la comodidad. curl escribe la petición en una línea; Postman y Thunder Client la muestran en campos con nombre y te dejan guardarla.

¿Por qué probar sin la interfaz? Porque separa dos problemas que en pantalla se ven idénticos. Si el botón de “ver pedidos” no muestra nada, no sabes si falló el servidor o si tu frontend está leyendo mal la respuesta. Si llamas al endpoint directamente y recibes `200` con datos, el servidor está bien y el problema vive en la interfaz. Si recibes `401`, el problema es la credencial. Esa separación te ahorra horas.

Tres piezas hacen que la prueba sea repetible:

- **Request guardada.** En Postman y Thunder Client, una petición se guarda con nombre dentro de una colección (“Pedidos / listar”). Mañana la abres y la repites sin reconstruirla.
- **Variables de entorno.** La URL base y el token se guardan aparte, como `{{baseUrl}}` y `{{token}}`. Cambias de local a producción con un clic y no vuelves a pegar el token en cada request.
- **La pestaña de auth.** Ahí eliges “Bearer token” y la herramienta arma el header `Authorization` por ti, sin que lo escribas a mano (m4-a6).

Un detalle que casi todos ignoran al principio: mira el **body crudo**, no solo la vista bonita. Postman colorea el JSON y lo formatea; si el servidor devolvió una página de error en HTML o un texto que empieza con `<`, la vista bonita puede confundirte. La pestaña *Raw* es la única versión sin maquillaje.

**Dato que se queda:** si la pantalla dice una cosa y el body crudo dice otra, la verdad es el body crudo.

Te importa aunque la IA escriba el código porque probar es tu forma de auditar. Cuando la IA te entregue un endpoint nuevo, tu primer paso no es conectarlo al frontend: es llamarlo con curl y ver el status. Y cuando algo falle, el texto exacto de la petición es lo mejor que le puedes pegar a la IA para que diagnostique sin adivinar.

### Analogía

Es el **banco de pruebas de un taller de motos**. Antes de montar el motor en la moto, el mecánico lo fija en una bancada, le conecta la manguera de gasolina y los cables del encendido, y lo enciende ahí solo, con el medidor de revoluciones a la vista. No necesita la moto armada, ni las llantas, ni el asiento: necesita saber si el motor prende y qué sale por el escape. Si falla en la bancada, el problema es del motor; si prende bien pero la moto no avanza, el problema está en la transmisión. El status es el medidor; el body es lo que sale por el escape; la petición guardada es la tarjeta con los ajustes clavada en la pared, para repetir la misma prueba mañana; y el pase del técnico es el token: sin él, el motor prende pero el sistema no te deja tocar nada.

### Cómo se ve en la práctica

Empieza contra un servicio que devuelve un espejo de lo que mandaste, así ves la mecánica completa sin depender de tu propia API:

```js
curl.exe -i "https://httpbin.org/get?negocio=tacos&ciudad=puebla"
```

La bandera `-i` es la importante: incluye los headers de la respuesta, así que ves la primera línea con el status (`200`) y el `Content-Type`. Sin `-i` solo verías el cuerpo y te perderías la mitad de la historia (m4-a5).

Ahora un POST con cuerpo, en Windows PowerShell:

```json
curl.exe -i -X POST https://httpbin.org/post -H "Content-Type: application/json" -d '{"correo":"ana@ejemplo.mx"}'
```

Las comillas simples del cuerpo son a propósito: en PowerShell evitan pelear con el escapado de las comillas dobles del JSON. Y si tu URL lleva `&`, enciérrala en comillas dobles o PowerShell la corta ahí mismo.

El salto a tu API es el mismo comando con el header de autorización:

```js
curl.exe -i https://api.tacoselevolcan.mx/api/v1/pedidos
curl.exe -i https://api.tacoselevolcan.mx/api/v1/pedidos -H "Authorization: Bearer eyJhbGciOi..."
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"datos":[{"id":42,"total":350,"estado":"pendiente"}],"pagina":1,"total":137}
```

El primero debe dar `401`: no mandaste credencial. El segundo, `200` con la lista. Ese par de comandos, guardado en un archivo de texto, es tu prueba de humo cada vez que tocas el backend.

En Postman o Thunder Client el flujo es: nueva request, método y `{{baseUrl}}/api/v1/pedidos`, pestaña *Auth*, *Bearer token*, `{{token}}`, *Send*. Guarda la request en una colección y el token en un entorno, nunca dentro de la request. Después revisa el status en la esquina y el body en la pestaña *Raw*.

**Advertencia:** una colección exportada se lleva los tokens que guardaste dentro, y una captura de pantalla de Postman muestra tu `Authorization` completo. No compartas colecciones ni pantallazos con sesión activa, y usa un entorno de pruebas con datos falsos en lugar de tu token de producción (m4-a19).

### Díselo a la IA

> "Voy a probar este endpoint antes de conectar el frontend: [método y ruta]. Escríbeme la petición exacta en curl para Windows PowerShell, con headers y un cuerpo de ejemplo con datos falsos. Después dime qué debo ver, campo por campo, para considerarla exitosa: qué status, qué headers y qué forma debe tener el body. Agrega tres peticiones de error a propósito —sin token, con token vencido y con un id inexistente— y qué status espero en cada una. Si en mi ejemplo el token o algún dato sensible queda en la URL o en un log, señálalo."

Con esas cuatro peticiones ya tienes una prueba de humo que puedes repetir cada vez que la IA cambie el backend.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es la ventaja principal de probar un endpoint con curl o Postman antes de conectar el frontend?
   - a) Que la respuesta llega más rápido
   - b) Que separas si el problema está en el servidor o en la interfaz ✔
   - c) Que evita tener que usar HTTPS
   - d) Que reemplaza la necesidad de una base de datos

**2. [relacionar]** Une cada elemento con su pareja:
   - curl ↔ Comando de terminal que envía la petición
   - Postman ↔ Aplicación con colecciones de requests guardadas
   - Thunder Client ↔ Extensión para probar APIs dentro del editor
   - Variables de entorno ↔ Guardan la URL base y el token fuera de la request

**3. [verdadero/falso]** "Si Postman muestra la respuesta con colores y formato, ya no hace falta revisar el body crudo."
   - Respuesta: FALSO — la vista bonita formatea y puede ocultar que el servidor devolvió HTML o texto plano; la pestaña Raw muestra lo que llegó de verdad.

**4. [completar]** "El ____ dice qué pasó (200, 401, 500) y el ____ trae los datos exactos que respondió el servidor."
   - Banco: `status` · `body` · `header` · `token`
   - Respuesta: status / body

**5. [qué hace]** ¿Qué te dice este resultado?

```http
curl.exe -i -X DELETE https://api.tacoselevolcan.mx/api/v1/pedidos/42

HTTP/1.1 401 Unauthorized

{"error":"falta el token"}
```

   - a) Que el pedido 42 no existe
   - b) Que falta la credencial: la petición viajó sin token, así que el servidor no sabe quién eres ✔
   - c) Que el método DELETE está prohibido en toda la API
   - d) Que hay que cambiar DELETE por GET para que funcione

---

## A13 — Autenticación I: demostrar quién eres

### Concepto

**Autenticar** es comprobar que eres quien dices ser. Nada más. No es decidir qué puedes hacer, no es darte acceso a todo y no es lo mismo que tener permiso. Esa segunda pregunta —qué puedes hacer— se llama **autorización** y es la unidad siguiente (m4-a15). Confundirlas es el error que produce la mayoría de las fugas de datos pequeñas.

Hay tres familias de pruebas de identidad, y conviene conocerlas porque cada una falla distinto:

- **Algo que sabes**: usuario y contraseña, un PIN. Falla cuando se filtra, se reutiliza o se adivina.
- **Algo que tienes**: un código **OTP** (one-time password, contraseña de un solo uso) que llega por SMS, WhatsApp o una app autenticadora; también una llave física.
- **Algo que eres**: huella, Face ID. Falla si el sensor falla, y no se puede cambiar como una contraseña.

Cuando pides dos familias distintas —contraseña más código al teléfono— eso es **MFA** (autenticación multifactor). Dos contraseñas no son MFA: son dos veces el mismo factor.

La tercera vía que ya usaste mil veces es **“Continuar con Google”**. Ahí tu app no ve la contraseña: manda al usuario a Google, Google lo autentica y regresa un comprobante firmado que tu servidor verifica. Ese modelo se llama **OAuth** (y con la capa de identidad encima, OpenID Connect, aunque en la práctica todo el mundo le dice OAuth). La ventaja es que tu sistema nunca toca la contraseña de Google; la desventaja es que dependes de un tercero y de que el usuario tenga cuenta ahí.

Y aquí está la parte que hay que memorizar: **la autenticación no dice qué puedes hacer**. Un cliente y el dueño del negocio pueden entrar por el mismo formulario, con la misma contraseña válida. Lo que los separa no es el login: es lo que cada endpoint decida después. “Ya inicié sesión” no significa “puedo ver todo”; significa “el sistema sabe quién soy”.

Por eso los códigos de estado se separan: `401` es “no sé quién eres” (falta la credencial o es inválida) y `403` es “sé quién eres, pero no puedes hacer esto” (m4-a5). Un login mal construido es el que responde `200` con un usuario y luego deja pasar cualquier petición.

Te importa porque el login es la puerta de tu negocio y las decisiones no las toma la IA: si aceptas registro libre, si exiges teléfono verificado, si permites Google para clientes pero no para empleados, cuántos intentos toleras antes de bloquear (m4-a20). Eso es política del negocio, y solo tú la puedes definir.

### Analogía

Es el **mostrador de documentación antes de abordar**. Ahí no te preguntan a dónde vas: te piden el pasaporte y lo cotejan con tu cara. Eso es autenticarte. Si además piden el segundo documento o el código que llegó a tu teléfono, es el segundo factor. Con eso te imprimen un **pase de abordar**: un comprobante que dice quién eres y a qué vuelo entraste, válido solo para ese vuelo y esa fecha. “Continuar con Google” es presentar un pasaporte emitido por otro país que el mostrador ya reconoce: no tuvo que investigarte, confió en la autoridad que te emitió el documento. Y el pase no te deja entrar a la cabina del piloto: te deja subir a tu asiento. La identidad quedó probada; los permisos son otra puerta, con otro mostrador.

### Cómo se ve en la práctica

El login completo son dos peticiones: la que falla y la que funciona. Esta es la que falla:

```http
POST /api/v1/auth/login HTTP/1.1
Host: api.tacoselevolcan.mx
Content-Type: application/json

{"correo":"ana@ejemplo.mx","contrasena":"incorrecta"}
```

```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json

{"error":"correo o contraseña incorrectos"}
```

Fíjate en el mensaje: no dice “esa contraseña no es” ni “el correo no existe”. Es el mismo para los dos casos a propósito. Si el servidor responde “el correo no está registrado”, acabas de regalar una lista de clientes: se prueba un correo a la vez y se anota cuáles existen. Eso se llama enumeración de usuarios.

La que funciona:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"access_token":"eyJhbGciOi...","expira_en":900,"usuario":{"id":7,"nombre":"Ana","rol":"cliente"}}
```

Ese `access_token` es lo que vas a mandar en cada petición siguiente, y de eso trata **m4-a14**. Si tu negocio pide segundo factor, la respuesta del login sería un paso intermedio: `{"requiere_otp":true,"reto":"r_8f2"}`, y el cliente manda el código en una segunda llamada.

Con “Continuar con Google” el flujo cambia de forma. El navegador sale hacia Google con un `client_id`, un `redirect_uri` y un `scope`; Google regresa a tu `redirect_uri` con un `code` de un solo uso; y tu **servidor** cambia ese código por el perfil del usuario. Ese último paso va en el servidor y no en el navegador, porque incluye un secreto de tu aplicación (m4-a19).

**Advertencia:** nunca registres en logs la contraseña ni el código OTP, y no los pongas en la URL: las URLs quedan en el historial del navegador, en los logs del servidor y en el header `Referer` (m4-a25). Tampoco reveles en el login si el correo existe. Y aunque la IA te entregue un formulario que “ya funciona”, exige HTTPS: sin él, la contraseña viaja legible por la red.

### Díselo a la IA

> "Voy a implementar el login de [describe el sistema: clientes, empleados, administradores]. Antes de escribir código, hazme un diagrama de pasos de la autenticación que propones: qué prueba de identidad usa, si pide segundo factor, cómo maneja la sesión y qué recibe el frontend. Después dime: qué mensajes de error exactos debo mostrar para no revelar si un correo está registrado, qué datos NO deben quedar en logs, y qué endpoints tendrían que distinguir entre cliente y administrador —sin implementar todavía la autorización, solo marcándolos para la unidad m4-a15—. Si mi diseño acepta un código OTP de seis dígitos, dime cuántos intentos debo permitir y por qué."

El último punto separa un login de juguete de uno real: un código de seis dígitos sin límite de intentos se adivina en una tarde.

### Ejercicios

**1. [opción múltiple]** Un usuario con sesión iniciada intenta ver el pedido de otra persona y el servidor lo permite. ¿Qué falló?
   - a) La autenticación: no se validó la contraseña
   - b) La autorización: se comprobó quién es, pero no si podía ver ese pedido ✔
   - c) El cifrado de la conexión
   - d) El código de estado, que debería ser 201

**2. [relacionar]** Une cada elemento con su pareja:
   - Contraseña ↔ Algo que sabes
   - Código OTP ↔ Algo que tienes
   - Huella o Face ID ↔ Algo que eres
   - Continuar con Google ↔ Identidad confirmada por un tercero de confianza

**3. [verdadero/falso]** "Pedir la contraseña dos veces es autenticación de dos factores."
   - Respuesta: FALSO — MFA exige dos familias distintas: algo que sabes, algo que tienes o algo que eres. Dos contraseñas son el mismo factor repetido.

**4. [completar]** "La ____ comprueba quién eres; la ____ decide qué puedes hacer con esa identidad."
   - Banco: `autenticación` · `autorización` · `sesión` · `encriptación`
   - Respuesta: autenticación / autorización

**5. [qué hace]** ¿Qué problema tiene este mensaje de error?

```http
HTTP/1.1 401 Unauthorized

{"error":"el correo ana@ejemplo.mx no está registrado"}
```

   - a) Ninguno, es más útil para el usuario
   - b) Revela si un correo existe en el sistema y permite enumerar clientes; debería ser un mensaje genérico ✔
   - c) Debería ser 403 porque es un problema de permisos
   - d) Le falta indicar cuál era la contraseña correcta

---

## A14 — Autenticación II: tokens y JWT explicados sin misterio

### Concepto

Un **token** es una cadena de texto que el servidor te entrega al autenticarte y que presentas en cada petición siguiente como prueba de que ya te identificaste. Viaja en el header `Authorization: Bearer ` (m4-a6). “Bearer” significa literalmente portador: quien lo traiga, entra. Por eso un token es tan delicado como una contraseña, y a veces más, porque da acceso sin pedir nada más.

El formato más común es **JWT** (JSON Web Token). Se ve como tres bloques de letras separados por puntos:

```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsInJvbCI6ImNsaWVudGUiLCJleHAiOjE3NjQwMDAwMDB9.3f9c1a7b8e2d4c6f0a9b1d3e5f7
```

Son exactamente tres partes, y cada una tiene un trabajo:

- **Header** — cómo está hecho el token: el algoritmo de firma y el tipo (`{"alg":"HS256","typ":"JWT"}`).
- **Payload** — los datos: quién eres y qué aplica a esta sesión. Los campos estándar se llaman *claims*: `sub` (el id del usuario), `rol`, `iat` (cuándo se emitió), `exp` (cuándo expira).
- **Signature** — la firma: el servidor calcula un hash del header y del payload con una llave secreta. Si alguien cambia un solo carácter del payload, la firma deja de cuadrar y el servidor rechaza el token.

Aquí está el malentendido que hay que desactivar de una vez: **un JWT está firmado, no cifrado**. Las tres partes son base64url, que es una codificación, no un cifrado. Cualquiera que tenga el token puede pegar el payload en un decodificador y leer tu id, tu rol y tu fecha de expiración. La firma garantiza *integridad* (nadie lo modificó), no *confidencialidad* (nadie lo leyó). Conclusión práctica: nunca metas datos sensibles en el payload, ni contraseñas, ni números de tarjeta, ni datos personales que no necesitas.

Segundo malentendido: **dónde guardarlo**. La tentación es `localStorage`, porque es fácil. Pero `localStorage` es legible por cualquier JavaScript de tu página: un solo XSS —un comentario, un script de terceros, una librería comprometida— y el atacante se lleva el token (m4-a29). Si puedes evitarlo, guárdalo en una cookie `HttpOnly; Secure; SameSite`, que el JavaScript de la página no puede leer (m4-a17). Si tu arquitectura no te deja usar cookies, al menos mantenlo en memoria y acorta su vida.

Tercer punto: **expiración**. Todo token debe caducar, y pronto: quince minutos es una cifra razonable para uno de acceso, con un *refresh token* de vida más larga para renovarlo. La razón es que un JWT no se puede cancelar fácilmente: el servidor no lleva una lista de tokens vivos, así que un token robado sirve hasta que expira. Cuanto más corto, menos daño. Si necesitas revocar de inmediato, necesitas estado en el servidor: ahí entras al mundo de las sesiones (m4-a17).

**Dato que se queda:** un JWT no es una caja fuerte, es una carta con sello. Se puede leer completa, pero no se puede alterar sin que se note.

Te importa porque la IA te va a entregar un login que devuelve un token, y las tres preguntas que debes hacer son siempre las mismas: ¿qué lleva dentro?, ¿cuánto dura? y ¿dónde lo guarda el frontend? Si no te sabes las respuestas, no sabes qué tan expuesto está tu negocio.

### Analogía

Es un **boleto de cine con tres cuerpos desprendibles**. El primero dice cómo está hecho el boleto y con qué tinta se selló. El segundo trae tus datos y la función para la que vale. El tercero es el **sello en seco de la taquilla**: un relieve que no se puede copiar sin el cuño. La puerta no descifra el sello, lo compara con el suyo; si alguien borra tu nombre del segundo cuerpo y escribe otro, el sello deja de coincidir y el de la puerta lo nota de inmediato. Pero nadie te prometió privacidad: el boleto va en la mano, a la vista, y cualquiera en la fila lee a qué función entraste y a qué hora vence. Y si te lo roban, el ladrón entra con tu boleto, porque en la puerta no preguntan por tu cara: piden boleto.

### Cómo se ve en la práctica

Así se ve un login que devuelve un JWT y una petición que lo usa:

```http
POST /api/v1/auth/login HTTP/1.1
Content-Type: application/json

{"correo":"ana@ejemplo.mx","contrasena":"..."}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsInJvbCI6ImNsaWVudGUiLCJleHAiOjE3NjQwMDAwMDB9.3f9c1a7b...","token_type":"Bearer","expira_en":900}
```

Decodifica el payload con la terminal, sin instalar nada:

```js
node -e "const p='eyJzdWIiOiI0MiIsInJvbCI6ImNsaWVudGUiLCJleHAiOjE3NjQwMDAwMDB9'; console.log(Buffer.from(p,'base64url').toString())"
{"sub":"42","rol":"cliente","exp":1764000000}
```

Ahí lo tienes: legible, sin llave, sin misterio. Ese `exp` es una fecha Unix en segundos; cuando pase, el servidor debe responder `401` con “token expirado”. Y date cuenta de algo: el payload dice `rol: cliente`, pero el rol no lo decide el boleto, lo decide el servidor cuando consulta tus permisos (m4-a15).

Así se usa el token:

```js
curl.exe -i https://api.tacoselevolcan.mx/api/v1/pedidos -H "Authorization: Bearer eyJhbGciOi..."
```

En el navegador, ese header aparece en **F12 → Network → Headers → Request Headers**. Si abres el sitio y no lo ves, el frontend no está mandando la sesión; si lo ves con un token de hace tres días, el problema es la renovación. Copiar una petición con *Copy as cURL* se lleva el token incluido (m4-a12).

**Advertencia:** pegar un token real en jwt.io o en cualquier decodificador en línea es publicarlo: el payload se lee completo y el token sigue siendo válido hasta que expire. Para revisar uno, decodifícalo en tu máquina con el comando de arriba. Y si tu código guarda el token en `localStorage`, trátalo como una decisión consciente con riesgo de XSS, no como el camino por defecto (m4-a29).

### Díselo a la IA

> "Estoy implementando autenticación con JWT en [describe la app: Next.js, Supabase, Express, etc.]. Antes de escribir código, respóndeme: 1) qué claims debe llevar el payload y cuáles NO debo meter porque serían datos sensibles o innecesarios; 2) cuánto debe durar el access token y cómo se renueva; 3) dónde debo guardarlo en mi caso concreto y qué riesgo asumo con cada opción (cookie HttpOnly, localStorage o memoria); 4) qué debe pasar cuando expira y qué cuando el usuario cierra sesión, si un JWT no se puede revocar. Señala cualquier parte de mi diseño donde un token pudiera terminar en un log, en una URL o en el código del cliente."

La cuarta pregunta es la que casi nadie hace, y es la que explica por qué “cerrar sesión” a veces no cierra nada.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de las tres partes de un JWT impide que alguien cambie el rol de “cliente” a “admin”?
   - a) El header
   - b) El payload
   - c) La firma ✔
   - d) Los puntos que separan las partes

**2. [ordenar]** Ordena las tres partes de un JWT, de izquierda a derecha:
   - Orden correcto: Header: algoritmo y tipo de token → Payload: claims como sub, rol y exp → Signature: firma calculada por el servidor

**3. [verdadero/falso]** "Un JWT está cifrado, así que nadie puede leer su contenido sin la llave secreta."
   - Respuesta: FALSO — está firmado, no cifrado. Las partes son base64url y cualquiera las decodifica; la firma solo impide modificarlo.

**4. [completar]** "El JWT está ____ pero no ____: cualquiera puede leer el payload, pero no alterarlo sin romper la firma."
   - Banco: `firmado` · `cifrado` · `comprimido` · `hasheado`
   - Respuesta: firmado / cifrado

**5. [qué hace]** ¿Qué riesgo tiene esta línea?

```js
localStorage.setItem("token", data.access_token);
```

   - a) Ninguno, localStorage es privado del sitio
   - b) Cualquier JavaScript inyectado en la página (XSS) puede leer el token y usarlo; conviene una cookie HttpOnly si es posible ✔
   - c) El token se borra cada vez que se recarga la página
   - d) localStorage solo funciona en sitios con HTTPS

---

## A15 — Autorización: una cosa es quién eres y otra qué puedes hacer

### Concepto

Si la autenticación responde “¿quién eres?”, la **autorización** responde “¿qué puedes hacer tú, siendo quien eres?”. Son dos preguntas, dos momentos y dos capas de código. Un sistema puede autenticar perfecto y estar abierto de par en par: el login funciona, y cualquier cliente con sesión puede leer los pedidos de todos.

Se implementa con dos piezas que conviene no confundir:

- **Rol**: una etiqueta que agrupa capacidades. `admin`, `empleado`, `cliente`. El modelo se llama RBAC (role-based access control) y es el que usa la mayoría de los negocios pequeños.
- **Permiso**: la acción concreta sobre un recurso. `pedidos:leer`, `pedidos:borrar`, `precios:editar`. Los roles son paquetes de permisos.

La regla que evita desastres es el **mínimo privilegio**: cada quien tiene exactamente lo que necesita para su trabajo, nada más. Un empleado que toma pedidos no necesita borrar clientes; un contador no necesita cambiar precios. Cada permiso de más es una puerta que alguien va a dejar abierta.

Y ahora el clásico, el error más común de las aplicaciones hechas con prisa: el **IDOR** (Insecure Direct Object Reference). El usuario está logueado, la API verifica su sesión, y la petición `GET /api/v1/pedidos/42` devuelve el pedido 42 sin preguntar de quién es. Cambias el número a 43 y ves el pedido de otra persona. No hay hackeo sofisticado: es cambiar un número en la URL (m4-a11).

La causa no es la falta de login: es que el endpoint comprobó *identidad* y no *propiedad*. La consulta fue `WHERE id = 42` cuando debía ser `WHERE id = 42 AND cliente_id = 7`. En un panel de administración el mismo descuido deja ver la facturación completa de la empresa desde una cuenta de cliente.

De ahí la regla que hay que tatuarse: **el servidor decide, no la interfaz**. Ocultar el botón de borrar en el HTML no protege nada: cualquiera puede llamar al endpoint con curl y sin botón (m4-a12). La interfaz es una cortesía para el usuario; el permiso es una verificación en el servidor, endpoint por endpoint. Y si además usas una base con RLS, esa es una segunda capa, no un reemplazo (m4-b22).

Detalle fino: cuando un recurso existe pero no es tuyo, muchos sistemas responden `404` en lugar de `403` para no confirmar que el pedido 43 existe. Es una decisión legítima: informa menos. Lo que nunca es legítimo es responder `200` con los datos ajenos.

### Analogía

Es el **guardarropa de un club**. Al entrar dejas el abrigo y te dan una ficha con un número: la 12. Para recogerlo entregas la ficha. Un buen encargado no se limita a leer el número y buscar el abrigo: coteja la ficha con tu número de socio, porque si solo compara números, cualquiera que memorice un 12 —o que traiga una ficha dibujada— se lleva el abrigo de otro. Eso es exactamente un IDOR: el número de la ficha es el id de la URL. Y el club tiene roles: el socio deja abrigo y pasa al salón, el invitado deja abrigo pero no pasa, el personal entra a la trastienda donde están todos los abrigos. Estar dentro del club no te da la trastienda; ser socio no te convierte en encargado.

### Cómo se ve en la práctica

Este es el bug en su forma más pequeña y más común:

```http
GET /api/v1/pedidos/42 HTTP/1.1
Authorization: Bearer <token de Ana>

HTTP/1.1 200 OK
{"id":42,"cliente_id":7,"total":350}
```

Y este es el mismo request cambiando un dígito:

```http
GET /api/v1/pedidos/43 HTTP/1.1
Authorization: Bearer <token de Ana>

HTTP/1.1 200 OK
{"id":43,"cliente_id":9,"total":1280,"direccion":"..."}
```

Ana nunca debió ver el pedido 43. El endpoint sí verificó que el token fuera válido; lo que no verificó es que el pedido le perteneciera. En SQL la diferencia es una línea:

```sql
-- vulnerable: cualquiera con sesión lee cualquier pedido
SELECT * FROM pedidos WHERE id = 43;

-- correcto: el dueño va en la condición
SELECT * FROM pedidos WHERE id = 43 AND cliente_id = 7;
```

En código, la verificación se ve así (pseudo, para que la reconozcas cuando la IA la escriba):

```js
const pedido = await db.pedido.findFirst({
  where: { id, cliente_id: req.usuario.id }
});
if (!pedido) return res.status(404).json({ error: "no encontrado" });
```

Prueba tu propio sistema con dos cuentas: entra con la cuenta A, copia el id de un pedido, sal, entra con la cuenta B y pide ese id con curl (m4-a12). Si recibes datos, tienes IDOR. La prueba toma dos minutos y encuentra fallas que una revisión de pantallas nunca ve.

**Advertencia:** cualquier endpoint que reciba un `id` por la URL y lo use como única condición de búsqueda es sospechoso, aunque el botón esté oculto y la ruta sea difícil de adivinar. Ocultar no es autorizar, y una URL “rara” no es un permiso: los ids se filtran en correos, capturas de pantalla y logs. Si tus endpoints solo comprueban que hay sesión, no tienes autorización; tienes autenticación con una puerta abierta.

### Díselo a la IA

> "Actúa como auditor de autorización. Te paso la lista de endpoints de mi API: [método, ruta y qué hace cada uno]. Para cada uno dime: 1) qué roles pueden llamarlo; 2) qué condición de propiedad debe cumplirse además del rol (por ejemplo, que el pedido pertenezca al cliente que llama); 3) qué debe responder cuando el recurso existe pero es de otro usuario, y por qué elegirías 403 o 404. Marca en rojo cualquier endpoint que hoy solo verifique que hay sesión. No escribas código: quiero la tabla de reglas primero, para revisarla con el dueño del negocio."

Esa tabla es el documento que después le pides implementar a la IA y que tú puedes probar, endpoint por endpoint.

### Ejercicios

**1. [opción múltiple]** Cambias /api/v1/pedidos/42 por /api/v1/pedidos/43 con tu propia sesión y ves el pedido de otro cliente. ¿Cómo se llama esa falla?
   - a) XSS
   - b) IDOR: referencia directa insegura a un objeto ✔
   - c) Rate limiting insuficiente
   - d) Error de CORS

**2. [relacionar]** Une cada elemento con su pareja:
   - Rol ↔ Agrupa capacidades: admin, empleado, cliente
   - Permiso ↔ Acción concreta sobre un recurso: pedidos:borrar
   - IDOR ↔ Pedir el recurso de otro cambiando el id
   - Mínimo privilegio ↔ Dar solo lo necesario para el trabajo
   - 403 ↔ Sé quién eres, pero no puedes hacer esto

**3. [verdadero/falso]** "Si el botón de eliminar pedido solo se muestra a los administradores, la operación queda protegida."
   - Respuesta: FALSO — la interfaz es solo una cortesía; cualquiera puede llamar el endpoint directamente con curl. El permiso se verifica en el servidor, en cada endpoint (m4-a12).

**4. [completar]** "La ____ dice quién eres; la ____ decide qué puedes hacer. Un endpoint que comprueba lo primero pero no lo segundo es vulnerable a ____."
   - Banco: `autenticación` · `autorización` · `IDOR` · `XSS`
   - Respuesta: autenticación / autorización / IDOR

**5. [qué hace]** ¿Qué le falta a este endpoint?

```js
app.get("/api/v1/pedidos/:id", async (req, res) => {
  const pedido = await db.pedido.findUnique({
    where: { id: Number(req.params.id) }
  });
  res.json(pedido);
});
```

   - a) Nada: el token ya garantiza que el pedido es suyo
   - b) Verificar que el pedido pertenezca al usuario que llama (o que sea admin): busca solo por id ✔
   - c) Cambiar el 200 por un 201
   - d) Agregar el header Content-Type

---

## A16 — Contraseñas: por qué nunca se guardan tal cual

### Concepto

Cada vez que alguien se registra, tu sistema recibe una contraseña. La pregunta no es si guardarla, sino cómo. Y la respuesta corta es: **no se guarda**. Se guarda una huella de ella, calculada con una función de una sola vía, de modo que el sistema pueda comprobar más tarde si la contraseña coincide sin tener nunca la contraseña.

Esa función se llama **hash**. Toma cualquier texto y devuelve una cadena de longitud fija. Es determinista (el mismo texto da el mismo hash) y es irreversible: no existe una operación que te devuelva el texto original. El **cifrado** es lo contrario: se puede revertir con la llave correcta. Por eso guardar contraseñas “cifradas” es un error: si tu sistema puede descifrarlas, cualquiera que robe la llave también puede.

Un hash solo no basta. Si dos usuarios eligen la misma contraseña, tendrían el mismo hash, y una tabla precalculada de millones de contraseñas comunes —una *rainbow table*— los delataría al instante. La solución es el **salt**: un valor aleatorio distinto para cada usuario que se mezcla con la contraseña antes de calcular el hash y se guarda junto a él. Así, dos contraseñas idénticas producen hashes distintos y la tabla precalculada deja de servir. El salt no es secreto; su trabajo es hacer cada hash único.

Y falta la velocidad. Un algoritmo como SHA-256 está diseñado para ser rapidísimo: una tarjeta gráfica prueba miles de millones de combinaciones por segundo. Para contraseñas necesitas lo opuesto: **bcrypt** o **argon2** son lentos a propósito y su costo es configurable. Un bcrypt con costo 12 tarda una fracción de segundo; parece poco, pero multiplicado por millones de intentos convierte un ataque de horas en uno de siglos. Nunca uses MD5, SHA-1 ni SHA-256 solos para contraseñas, por muy “seguro” que suene el nombre.

Ahora la parte que a la gente le cuesta aceptar: **ni el dueño del sistema puede ver las contraseñas, y eso es una virtud**. Si no puedes verlas, no puedes filtrarlas por accidente, no puedes venderlas, no te las pueden robar de un correo y no puedes usarlas como excusa. Cuando un cliente dice “olvidé mi contraseña”, el sistema no la recupera: le ofrece **restablecerla** con un enlace de un solo uso que expira en minutos. El soporte nunca pregunta “¿cuál era tu contraseña?”; eso no es soporte, es una vulnerabilidad con teléfono.

**Dato que se queda:** tu sistema no debe poder decirte la contraseña de nadie. Solo puede decir “coincide” o “no coincide”.

Te importa porque esto es una decisión de arquitectura, no de estilo. Si la IA te entrega un login que guarda la columna `contrasena` en la tabla, todo funciona igual de bien y es una bomba de tiempo. Revisar esa columna toma un minuto y evita el día en que te roben la base completa.

### Analogía

Es la **trituradora de papel de una oficina**. Cuando un empleado entrega su hoja con la clave, no la guardas en un cajón: la metes a la trituradora. Lo que queda no se puede volver a armar, ni con paciencia ni con cinta. Para comprobar mañana que la hoja era la correcta, no buscas el original: pides una copia, la trituras con la misma mezcla y comparas el montón con el que guardaste en la bolsa etiquetada. La bolsa es el hash; los recortes de periódico que echaste junto con la hoja son el salt, y por eso dos empleados con la misma clave generan montones diferentes. La trituradora es lenta a propósito, porque si tritura un millón de hojas por segundo, quien robe las bolsas puede probar un millón de claves por segundo. Y nadie en la oficina, ni el dueño del edificio, puede leer lo que quedó: esa es la razón por la que las bolsas no sirven de nada si se las llevan.

### Cómo se ve en la práctica

Así se ve el error y la corrección en la base de datos:

```sql
-- MAL: la contraseña tal cual, legible para cualquiera con acceso
INSERT INTO usuarios (correo, contrasena)
VALUES ('ana@ejemplo.mx', 'Tacos2026!');

-- BIEN: solo el hash, con algoritmo y salt incluidos en la cadena
INSERT INTO usuarios (correo, contrasena_hash)
VALUES ('ana@ejemplo.mx', '$2b$12$K9xQ1r7...');
```

Ese `$2b$12$...` no es basura: dice que es bcrypt (`2b`), que el costo es 12 y que los siguientes caracteres son el salt; el resto es el hash. Toda la información necesaria para verificar está en esa cadena, y ninguna parte permite reconstruir la contraseña.

En código, el registro y el login son dos llamadas:

```js
const hash = await bcrypt.hash(contrasena, 12);   // al registrarse
await db.usuarios.create({ correo, contrasena_hash: hash });

// al entrar
const ok = await bcrypt.compare(contrasena, usuario.contrasena_hash);
if (!ok) return res.status(401).json({ error: "correo o contraseña incorrectos" });
```

Nunca compares hashes con `===` a mano ni escribas tu propia función de hash: `bcrypt.compare` hace la comparación en tiempo constante y maneja el salt por ti. Y no hashees la contraseña en el navegador “para mayor seguridad”: ese hash viajaría y se convertiría en la nueva contraseña. El hash se calcula en el servidor.

**Advertencia:** una contraseña no debe viajar nunca por correo, ni por WhatsApp, ni en un mensaje de soporte, ni en la URL, ni en un log. Un `console.log(req.body)` en el login escribe la contraseña en claro en tus logs, y los logs se comparten, se exportan y se filtran (m4-a25). Tampoco la mandes en un correo de bienvenida: el usuario la elige, no se la asignas tú. Y si tu base permite consultar la columna `contrasena` de un usuario, esa columna no debería existir.

### Díselo a la IA

> "Revisa cómo estoy guardando las contraseñas en [describe el stack: Supabase, Express + Postgres, etc.]. Te pego el código de registro, login y recuperación, sin contraseñas reales. Dime: 1) si estoy usando hash o cifrado, y qué algoritmo exactamente; 2) si el costo o las rondas son adecuados hoy; 3) si el salt es único por usuario; 4) todos los lugares donde una contraseña podría terminar en logs, correos, URLs o en el frontend; 5) cómo debería ser el flujo de “olvidé mi contraseña” para que nadie pueda recuperarla, solo restablecerla. Si mi tabla tiene una columna que guarda la contraseña en claro, dímelo primero y con todas sus letras."

Ese último punto parece obvio hasta que ves cuántos proyectos pequeños tienen esa columna “temporal” que se quedó para siempre.

### Ejercicios

**1. [opción múltiple]** ¿Cómo debe guardarse una contraseña?
   - a) Cifrada con una llave que solo el administrador conoce
   - b) Con un hash lento y salt único, como bcrypt o argon2 ✔
   - c) Con SHA-256, que es más seguro que bcrypt
   - d) En texto plano, pero en una tabla con permisos restringidos

**2. [relacionar]** Une cada elemento con su pareja:
   - Hash ↔ Una sola vía: no se puede revertir
   - Cifrado ↔ Reversible con la llave correcta
   - Salt ↔ Valor único por usuario que hace distinto cada hash
   - bcrypt / argon2 ↔ Lentos a propósito para frenar los ataques
   - Restablecer ↔ La única forma correcta de “recuperar” una contraseña

**3. [verdadero/falso]** "El administrador de la base debe poder ver las contraseñas para ayudar a un cliente que olvidó la suya."
   - Respuesta: FALSO — si puede verlas, puede filtrarlas o usarlas. El olvido se resuelve con un enlace de restablecimiento de un solo uso, no con la contraseña original.

**4. [completar]** "El ____ es irreversible, el ____ es reversible con la llave, y el ____ hace que dos contraseñas iguales produzcan hashes distintos."
   - Banco: `hash` · `cifrado` · `salt` · `token`
   - Respuesta: hash / cifrado / salt

**5. [qué hace]** ¿Qué problema tiene este código?

```js
app.post("/api/v1/auth/login", (req, res) => {
  console.log("intento:", req.body.correo, req.body.contrasena);
  // ...
});
```

   - a) Ninguno, es solo para depurar
   - b) Escribe la contraseña en claro en los logs, donde cualquiera con acceso los lee ✔
   - c) Le falta el header Content-Type
   - d) Debería usar console.error en lugar de console.log

---

## A17 — Sesiones vs tokens: dos formas de recordarte

### Concepto

HTTP no tiene memoria (m4-a3): cada petición llega sola y el servidor no sabe si la anterior venía del mismo cliente. Pero tu panel de administración necesita saber quién eres en cada clic. Para eso existen dos estrategias, y casi todas las apps usan una de las dos: **sesiones** y **tokens**.

**La sesión vive en el servidor.** Cuando inicias sesión, el servidor crea un registro —usuario 7, entró a las 9:14, expira mañana— y le manda al navegador una cookie con un identificador opaco: `sesion=8f3a1c9e7b2d4a6f`. Ese valor no significa nada por sí solo; es un número de ficha. En cada petición siguiente el navegador reenvía la cookie y el servidor busca el registro para saber quién eres. El estado está en el servidor; el cliente solo carga la ficha.

**El token vive en el cliente.** El servidor firma un paquete con tus datos —usuario, rol, expiración— y te lo entrega. En cada petición lo mandas en `Authorization: Bearer ...` y el servidor solo verifica la firma; no consulta ninguna tabla. Eso es *stateless*: cualquier servidor de tu flota puede atenderte porque no necesita recordar nada. El precio es que el token, una vez emitido, es válido hasta que expira.

La diferencia se nota el día que quieres **cerrar una sesión**. Con sesión en servidor, revocar es borrar la fila: la siguiente petición con esa cookie recibe `401` y se acabó. Con token, el servidor ya no tiene dónde borrar: el token sigue siendo matemáticamente válido. Las salidas son dos, y conviene saberlas antes de necesitarlas: expiraciones cortas (15 minutos) con un refresh token que sí se puede revocar, o una lista de tokens quemados que el servidor consulta en cada petición.

¿Cuál usar en tu proyecto? Si es una app web con panel de administración, un solo servidor y necesitas poder sacar a alguien al instante, la sesión con cookie `HttpOnly` es la opción aburrida y correcta. Si vas a servir una app móvil, varios servicios o una API para terceros, el token gana porque no obliga a compartir una tabla de sesiones entre todos. Lo que nunca funciona es mezclar las dos a medias: cookie para entrar y token que nadie revoca para salir.

Te importa aunque la IA escriba el código porque el bug clásico no se ve en pantalla: el botón "Cerrar sesión" borra el token del navegador, la interfaz te manda al login y la sesión sigue viva en el servidor. Si alguien copió esa cookie o ese token, entra sin problema. Tú vas a ser quien pregunte: "¿esto revoca de verdad del lado del servidor?" (m4-a15).

### Analogía

Es el guardarropa de un salón de baile contra el boleto de un concierto. En el salón dejas el abrigo y te dan una ficha de plástico con un número: la ficha no describe el abrigo, solo apunta a un perchero que el guardarropa controla. Si la pierdes, pides otra; si el guardarropa cierra, tu abrigo deja de existir para todos — así se revoca una sesión. El boleto de concierto es lo contrario: lleva un sello holográfico y el portero lo mira al trasluz para dejarte pasar, sin llamar a taquilla. Funciona en cualquier puerta y no necesita lista, pero si te lo roban, esa persona entra contigo hasta que termine el evento; para anularlo antes tendrías que repartir a cada portero una lista de boletos quemados.

### Cómo se ve en la práctica

Así se ve una sesión. El login responde con una cookie y el navegador la reenvía solo en cada petición al mismo dominio:

```http
HTTP/1.1 200 OK
Set-Cookie: sesion=8f3a1c9e7b2d4a6f; HttpOnly; Secure; SameSite=Lax; Max-Age=86400

{"ok":true,"usuario":"ana"}
```

```http
GET /api/mis-pedidos HTTP/1.1
Host: api.tacoselvolcan.mx
Cookie: sesion=8f3a1c9e7b2d4a6f
```

Y así se ve un token. La diferencia de fondo es que aquí el servidor no guarda nada: solo comprueba la firma.

```http
POST /api/login
Content-Type: application/json

{"correo":"ana@tacoselvolcan.mx","password":"..."}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"token":"eyJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvIjo3LCJyb2wiOiJhZG1pbiIsImV4cCI6MTc2MTg0fQ.7sK2..."}
```

Abre DevTools y decodifica la parte de en medio de un JWT (con `atob()` o en jwt.io) para ver su contenido. El contenido del token es algo así: `{"usuario":7,"rol":"admin","exp":1761840000}`. Eso es todo: el token **no está cifrado, está firmado**. Cualquiera puede leerlo; solo el servidor puede alterarlo sin que la firma se rompa. Por eso jamás metas contraseñas, datos de tarjeta ni información privada de tus clientes dentro de un token.

**Advertencia:** guardar el token en `localStorage` lo deja al alcance de cualquier script inyectado en la página. Una cookie `HttpOnly` no se puede leer desde JavaScript, y esa es justamente su ventaja (m4-a29). Y si tu logout solo borra el token del navegador sin avisar al servidor, la sesión sigue abierta del otro lado.

### Díselo a la IA

> "Estoy decidiendo entre sesiones con cookie y tokens JWT para [describe tu app: panel web, app móvil, API para terceros]. Hazme una tabla comparativa con estas filas: dónde vive el estado, cómo se revoca una sesión activa, qué pasa si hay varios servidores, qué pasa si roban la credencial y cuánto trabajo da implementarlo. Después recomiéndame una opción para mi caso y dime exactamente qué configuración de cookie necesito (HttpOnly, Secure, SameSite) o, si eliges token, cuánto debe durar y cómo se refresca. No escribas código todavía: primero quiero entender la decisión y sus riesgos."

La pregunta que separa una respuesta buena de una copiada es "cómo se revoca": si la IA no la contesta, el diseño está incompleto.

### Ejercicios

**1. [opción múltiple]** En una sesión clásica con cookie, ¿dónde vive el estado de quién eres y qué puedes hacer?
   - a) En la cookie del navegador, que guarda el rol y los permisos
   - b) En un registro del servidor; la cookie solo lleva un identificador ✔
   - c) En el HTML de la página, en un campo oculto
   - d) En la URL, para que el servidor la lea más rápido

**2. [relacionar]** Une cada elemento con su pareja:
   - Cookie de sesión ↔ El servidor guarda el estado y el cliente lleva un identificador
   - Token firmado ↔ El cliente lleva el estado y el servidor solo verifica la firma
   - Revocar una sesión ↔ Borrar el registro en el servidor
   - Revocar un token ↔ Expiración corta o lista de tokens bloqueados

**3. [verdadero/falso]** "Un JWT está cifrado, así que nadie puede leer los datos que lleva dentro."
   - Respuesta: FALSO — un JWT está firmado, no cifrado: cualquiera puede decodificar su contenido. La firma impide alterarlo, no leerlo; por eso no debe llevar contraseñas ni datos sensibles (m4-a16).

**4. [completar]** "En una sesión, el ____ guarda el estado y el navegador solo lleva un ____; en un token, el estado viaja ____ dentro de la credencial."
   - Banco: `servidor` · `identificador` · `firmado` · `cifrado`
   - Respuesta: servidor / identificador / firmado

**5. [qué hace]** ¿Qué impide la bandera <code>HttpOnly</code> en esta cookie?

```js
Set-Cookie: sesion=8f3a1c9e7b2d4a6f; HttpOnly; Secure; SameSite=Lax
```

   - a) Que la cookie viaje sin cifrar por la red
   - b) Que JavaScript en la página pueda leer la cookie con document.cookie ✔
   - c) Que la cookie se guarde más de un día
   - d) Que el usuario pueda cerrar sesión

---

## A18 — CORS: el error que todo principiante sufre

### Concepto

Estás probando tu primer formulario conectado a una API. El código se ve bien, el servidor está prendido, y la consola escupe esto:

```js
Access to fetch at 'https://api.tacoselvolcan.mx/api/platillos' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

Lo primero que hay que entender: **CORS lo aplica el navegador**, no el servidor. Tu página vive en un *origen* —la combinación de protocolo, dominio y puerto: `http://localhost:5173`. La API vive en otro: `https://api.tacoselvolcan.mx`. Por la política de mismo origen, JavaScript no puede leer respuestas de otro origen a menos que ese otro origen lo autorice explícitamente. Esa autorización se llama CORS (Cross-Origin Resource Sharing).

El detalle que desarma la confusión: **la petición sí llegó**. El servidor la procesó y contestó; incluso puede haber creado el pedido. Lo que pasa es que el navegador, al ver la respuesta, revisa si trae el header `Access-Control-Allow-Origin` con tu origen. Si no viene, no te entrega el cuerpo y lo reporta como error. Por eso en la pestaña Network puedes ver un `200` que la consola marca como fallido. No es contradicción: es el navegador protegiéndote.

La solución no está en el frontend. Se arregla en el servidor, agregando el header correcto:

```js
Access-Control-Allow-Origin: http://localhost:5173
```

Si además mandas cookies, no puedes usar `*`: el servidor debe nombrar el origen exacto y agregar `Access-Control-Allow-Credentials: true`. Y si la petición "no es simple" —lleva `Content-Type: application/json`, usa `PUT` o `DELETE`, o manda `Authorization`— el navegador primero hace una pregunta con el método `OPTIONS`. Eso es el **preflight**: "¿me dejas mandar un POST con JSON desde este origen?". Si el servidor no contesta esa pregunta con los headers de permiso, la petición real nunca sale.

Y una advertencia que vale oro: **CORS no protege tu API**. Cualquiera con `curl` ignora CORS por completo, porque no hay navegador de por medio. CORS protege al usuario de que una página ajena lea datos con su sesión; la seguridad de tus datos depende de autenticación, autorización y validación (m4-a13, m4-a21). Confundir las dos cosas es el segundo error más caro después de creer que se arregla en el frontend.

### Analogía

Es la ventanilla de una paquetería. El paquete con tu pedido sí llegó y está sobre el mostrador, pero la ventanilla no te lo entrega si el remitente no anotó a tu empresa como destinataria autorizada. La ventanilla no opina sobre el contenido: solo compara tu nombre con la lista. Y aquí la ventanilla es el navegador, no el servidor: el servidor ya armó el paquete y lo dejó listo; quien se niega a dártelo es la ventanilla. Por eso gritarle al mostrador no sirve de nada: hay que pedirle al remitente que agregue tu nombre a la lista.

### Cómo se ve en la práctica

Reproduce el error en dos minutos y compruébalo tú mismo. Abre la consola de cualquier página en `https://ejemplo.com` y ejecuta:

```js
fetch("https://api.github.com/users/octocat")
  .then(r => r.json())
  .then(d => console.log(d))
  .catch(e => console.error("falló:", e))
```

Verás el bloqueo por CORS en la consola. Ahora haz la misma petición desde la terminal:

```js
curl.exe -i https://api.github.com/users/octocat
```

Responde `200` sin quejarse. Esa diferencia es la prueba de que el problema no es el servidor ni tu código de red: es el navegador aplicando una regla que solo existe dentro de él.

El arreglo del lado del servidor, en Express, se ve así:

```js
const cors = require("cors");

app.use(cors({
  origin: ["http://localhost:5173", "https://tacoselvolcan.mx"],
  credentials: true
}));
```

Y así se ve el preflight en Network: primero un `OPTIONS` con `Access-Control-Request-Method: POST`, y la respuesta que lo autoriza:

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET, POST, PATCH, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400
```

**Advertencia:** no "arregles" esto desactivando la seguridad del navegador, instalando extensiones que la apagan ni poniendo `Access-Control-Allow-Origin: *` con cookies en producción. Lo primero esconde el síntoma en tu máquina y explota en la del cliente; lo segundo es imposible (el navegador rechaza el comodín con credenciales) o, si lo combinas mal, abre la puerta a que cualquier sitio lea datos con la sesión de tus usuarios (m4-a19).

### Díselo a la IA

> "Tengo este error de CORS en la consola: [pega el mensaje completo]. Mi frontend corre en [URL y puerto] y mi API está en [URL]. Antes de darme código, explícame quién bloquea qué y confírmame si la petición llegó al servidor. Después dame la configuración exacta del lado del servidor para [framework: Express, FastAPI, Next.js...], nombrando mi origen real, sin usar comodín si hay cookies, y muéstrame cómo debería verse el preflight OPTIONS en la pestaña Network. Si mi problema no es CORS sino otro, dímelo en vez de inventar una solución."

Ese último renglón te salva de la IA que "arregla" CORS cuando el error real era un 500 camuflado.

### Ejercicios

**1. [opción múltiple]** ¿Quién aplica la política de CORS?
   - a) El servidor de la API, antes de procesar la petición
   - b) El navegador, al decidir si entrega la respuesta a la página ✔
   - c) El proveedor de internet
   - d) El framework del frontend

**2. [qué hace]** La misma petición funciona con curl pero falla con CORS en el navegador. ¿Qué confirma eso?

```http
curl.exe -i https://api.tacoselvolcan.mx/api/platillos

HTTP/1.1 200 OK
Content-Type: application/json

[{"id":1,"nombre":"Volcán Especial"}]
```

   - a) Que el servidor está caído y curl usa caché
   - b) Que el servidor responde bien y es el navegador quien bloquea la lectura por falta de permiso del origen ✔
   - c) Que curl tiene permisos especiales que el navegador no puede tener
   - d) Que hace falta cambiar el método a POST

**3. [verdadero/falso]** "El error de CORS se corrige agregando el header Access-Control-Allow-Origin en el fetch del frontend."
   - Respuesta: FALSO — ese header lo debe enviar el servidor en su respuesta. Si el frontend pudiera autorizarse a sí mismo, la política no serviría de nada.

**4. [completar]** "Antes de un POST con JSON o un header Authorization, el navegador manda una petición ____ al servidor; el header ____ indica qué orígenes pueden leer la respuesta."
   - Banco: `OPTIONS` · `Access-Control-Allow-Origin` · `HEAD` · `Authorization`
   - Respuesta: OPTIONS / Access-Control-Allow-Origin

**5. [relacionar]** Une cada elemento con su pareja:
   - Origin ↔ Protocolo, dominio y puerto desde donde sale la petición
   - Preflight ↔ Petición OPTIONS que pregunta si se permite la petición real
   - Access-Control-Allow-Origin ↔ Lista de orígenes que pueden leer la respuesta
   - Access-Control-Allow-Credentials ↔ Permite que la petición incluya cookies

---

## A19 — Variables de entorno: dónde viven los secretos

### Concepto

Tu código y tu configuración son dos cosas distintas, aunque vivan en la misma carpeta. El código es la receta: cómo se calcula un total, cómo se valida un correo. La configuración son los datos del ambiente: la contraseña de la base de datos, la llave de Supabase, la del servicio de IA, la URL de la API. Mezclarlos parece cómodo hasta el día que compartes el proyecto.

La solución estándar es un archivo `.env`: texto plano con pares `NOMBRE=valor`, uno por línea. El runtime lo carga al arrancar y tu código lo lee por nombre, casi siempre con `process.env.NOMBRE` en Node. Nunca escribes la llave en el código; escribes "dame la llave que se llama SUPABASE_SERVICE_KEY" y el ambiente te la entrega.

De ahí salen tres reglas que no se negocian:

- **El `.env` real nunca se sube al repositorio.** Va en `.gitignore` desde el primer commit, antes de que exista.
- **Se versiona el `.env.example`**: el mismo archivo con valores falsos o vacíos. Sirve para que otro —o tú en otra máquina— sepa qué variables necesita el proyecto sin ver ninguna llave.
- **En producción no hay `.env` en tu laptop.** Las variables se configuran en el panel del proveedor: Netlify, Vercel, Supabase, Railway. El deploy las inyecta al construir o al arrancar.

El detalle que más se pasa por alto: en el frontend no existen secretos. Todo lo que compile hacia el navegador es público, incluidas las variables. En Vite solo se exponen las que empiezan con `VITE_`; en Next.js, las que empiezan con `NEXT_PUBLIC_`. Ese prefijo no es un candado: es un letrero que dice "esto lo va a leer cualquiera con Ctrl+U". La llave de servicio de Supabase, la de OpenAI o la de Stripe van en el servidor, siempre (m4-a8).

¿Por qué te importa si la IA escribe el código? Porque el primer prompt de muchas personas es "pégame la llave aquí para que funcione" y la IA, obediente, la escribe en un archivo que luego se sube a GitHub. Un repositorio público con una llave de AWS o de Supabase es una invitación con fecha. Los bots que rastrean GitHub no duermen, y una llave filtrada se cosecha en minutos: alguien levanta servidores a tu nombre, descarga tu base completa o te consume el saldo de IA en una noche.

### Analogía

Es una tienda de renta de autos. El contrato con tarifas, modelos y horarios se puede pegar en la vitrina: es información que cualquiera puede leer sin consecuencias, igual que tu código. Las llaves físicas de cada auto no se pegan en el parabrisas: viven en la caja fuerte del mostrador y solo el encargado las saca cuando hacen falta. Una variable de entorno es esa caja fuerte: el código pide "la llave del auto 3" por su nombre y el sistema se la pasa por dentro, sin que la llave aparezca nunca en la vitrina. El que pega la llave en el parabrisas "para no perderla" no está organizando nada: está regalando el auto al primer visitante.

### Cómo se ve en la práctica

Así se ve un proyecto sano. El `.env` real se queda en tu máquina; el `.env.example` es el que se commitea, con los nombres y sin los valores:

```js
# .env  (NO se sube al repo)
SUPABASE_URL=https://xyzcompany.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
OPENAI_API_KEY=sk-proj-abc123def456...
PORT=3000
```

```js
# .env.example  (SÍ se sube)
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SERVICE_KEY=tu_service_key_aqui
OPENAI_API_KEY=tu_api_key_aqui
PORT=3000
```

Y así se ve el `.gitignore` que impide el accidente. El orden importa: esto se crea antes del primer commit, no después del primer susto.

```js
.env
.env.local
.env.*.local
node_modules/
```

En el código, lee la variable y falla fuerte si no existe. Es mejor un servidor que no arranca que uno que arranca sin llave y falla a la primera venta:

```js
const llave = process.env.SUPABASE_SERVICE_KEY;
if (!llave) {
  console.error("Falta SUPABASE_SERVICE_KEY en el entorno");
  process.exit(1);
}
```

Si la olvidas, el error típico es `Error: supabaseUrl is required.` o un `undefined` que viaja hasta la consulta. Ahora la prueba de fuego: `git check-ignore -v .env`. Si responde con la regla que lo ignora, estás bien; si no responde nada, tu archivo está a un `git add .` de distancia del mundo.

**Advertencia:** si una llave ya se subió, borrar el commit no la borra. Queda en el historial, en los forks, en los cachés y en los mirrors. El orden correcto es: **rotar la llave en el proveedor** (generar una nueva y desactivar la vieja), revisar el consumo y los accesos de esos días, sacar el secreto del código y limpiar el historial. Y si la pegaste en un chat con IA, una captura o un issue, trátala como filtrada aunque el repo sea privado (m4-a3).

### Díselo a la IA

> "Voy a conectar [servicio: Supabase, OpenAI, Stripe] a mi proyecto de [stack]. Antes de escribir código, dime: 1) qué variables de entorno necesito y qué nombre exacto debe tener cada una; 2) en qué archivo del proyecto se leen y si ese archivo corre en el servidor o en el navegador; 3) si algún prefijo tipo VITE_ o NEXT_PUBLIC_ haría que la llave termine expuesta en el bundle; 4) qué debo poner en .gitignore y en .env.example. No escribas ningún valor real en el código ni en tus ejemplos: usa placeholders. Al final, dame los pasos para configurar esas variables en el panel de [Netlify/Supabase/Vercel]."

Pedir explícitamente los placeholders evita que la IA te devuelva un archivo con una llave inventada que luego alguien pega tal cual en producción.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estos archivos debe estar en .gitignore desde el primer commit?
   - a) .env.example
   - b) .env ✔
   - c) README.md
   - d) package.json

**2. [verdadero/falso]** "Si subiste una llave por accidente, basta con borrar ese commit del repositorio para que quede segura."
   - Respuesta: FALSO — la llave sigue en el historial, en forks, cachés y mirrors. Lo primero es rotarla en el proveedor; limpiar el historial es el segundo paso, no el único.

**3. [completar]** "El archivo ____ guarda los valores reales y no se sube; el código los lee con ____; el archivo ____ documenta los nombres con valores falsos."
   - Banco: `.env` · `process.env` · `.env.example` · `package.json`
   - Respuesta: .env / process.env / .env.example

**4. [ordenar]** Ordena la respuesta correcta al descubrir que filtraste una llave en GitHub:
   - Orden correcto: Rotar la llave en el proveedor y desactivar la vieja → Revisar consumo y accesos de los últimos días → Quitar el secreto del código y agregar .env a .gitignore → Limpiar el historial del repositorio y avisar si hubo datos expuestos

**5. [qué hace]** ¿Qué está mal en este código?

```js
// en un componente del frontend
const key = import.meta.env.VITE_SUPABASE_SERVICE_KEY;
const supabase = createClient(url, key);
```

   - a) Nada, las variables de entorno siempre son privadas
   - b) La llave de servicio queda dentro del bundle que descarga el navegador: cualquiera la lee y salta las reglas de la base de datos ✔
   - c) Falta el header Content-Type
   - d) VITE_ hace que la llave se cifre automáticamente

---

## A20 — Rate limiting: protegerte del abuso

### Concepto

**Rate limiting** es poner un techo al número de peticiones que un cliente puede hacer en un periodo. No es un castigo: es una regla de la casa, como el máximo de boletos por persona. Se define con tres datos: *quién* (una IP, un usuario, una llave de API), *cuánto* (5 intentos, 100 peticiones) y *en qué ventana* (por minuto, por 15 minutos, por día).

Sin ese techo pasan cuatro cosas, y las cuatro cuestan dinero. Primero, **fuerza bruta**: un script prueba 10,000 contraseñas contra `/api/login` en un rato; si tu contraseña es "Tacos2026", no importa qué tan bien la hayas hasheado (m4-a16). Segundo, **scraping**: alguien se lleva tu menú completo, tus precios y tu lista de clientes. Tercero, **facturas**: cada llamada a un modelo de IA, cada SMS o cada consulta a un servicio externo se cobra; un endpoint abierto es una tarjeta sin PIN. Cuarto, **bucles**: tu propio frontend con un `useEffect` mal escrito puede mandar 40 peticiones por segundo sin que nadie sea malintencionado.

Cuando el límite se rebasa, la respuesta correcta es `429 Too Many Requests`, no un `403` ni un `500`. Y viene con un header que casi nadie usa y que cambia la experiencia: `Retry-After`, los segundos que hay que esperar. Un cliente bien hecho lo lee y espera; uno mal hecho reintenta en loop y se queda bloqueado más tiempo.

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 847
RateLimit-Limit: 5
RateLimit-Remaining: 0

{"error":"demasiados intentos de inicio de sesión","reintentaEn":847}
```

El límite por IP es el más fácil de implementar y el más injusto: en una oficina, un café o una escuela, cientos de personas comparten una sola IP pública (NAT), y si bloqueas esa IP, bloqueas a todos. Por eso los endpoints sensibles se limitan por **cuenta** (el correo que intenta entrar) además de por IP, y las APIs serias limitan por **llave**. En producción, detrás de un proxy o balanceador, hay que configurar `trust proxy` para leer la IP real; si no, todos tus usuarios parecen uno solo.

Te importa porque es la diferencia entre un martes normal y un lunes con la cuenta de OpenAI en cero. Y porque el endpoint más atacado de cualquier app no es el catálogo: es el login. Pregúntale a la IA "¿qué pasa si alguien manda 10,000 peticiones aquí?" y si la respuesta es "nada", falta trabajo (m4-a19).

### Analogía

Es la taquilla de un cine con un solo empleado. Puede atender a mucha gente, pero no a cualquier ritmo: vende máximo cuatro boletos por persona y, si alguien insiste en comprar cincuenta para revenderlos, le dice "ahora no, regrese en treinta segundos". El empleado no cierra el cine ni se enoja: pone un límite por persona, por ventana de tiempo, y avisa cuándo volver — ese aviso es el `Retry-After`. Sin taquilla que cuente, el revendedor se lleva la función completa mientras tus clientes reales hacen fila y se van.

### Cómo se ve en la práctica

Prueba el abuso en tu propio login de desarrollo. Un ciclo de seis intentos con contraseña equivocada es suficiente para que un límite bien puesto se active:

```json
for ($i=1; $i -le 6; $i++) {
  curl.exe -s -o NUL -w "%{http_code}\n" -X POST https://api.tacoselvolcan.mx/api/login `
    -H "Content-Type: application/json" `
    -d '{"correo":"ana@tacoselvolcan.mx","password":"equivocada"}'
}
```

Sin límite verás seis `401`. Con límite verás cuatro o cinco `401` y luego un `429` con `Retry-After`. Ese cambio en la sexta línea es todo el objetivo de la unidad.

La implementación típica en Express ocupa tres líneas y va solo en las rutas sensibles, no en toda la app:

```js
const rateLimit = require("express-rate-limit");

const limiteLogin = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  message: { error: "demasiados intentos, espera unos minutos" }
});

app.post("/api/login", limiteLogin, intentarLogin);
```

Y del lado del cliente, la regla es igual de importante: cuando recibas `429`, **no reintentes de inmediato**. Lee `Retry-After`, espera ese tiempo y, si insistes, hazlo con *backoff* exponencial (1 s, 2 s, 4 s, 8 s) y un poco de aleatoriedad para que diez clientes no despierten al mismo tiempo.

**Advertencia:** un endpoint de IA sin límite es una factura abierta. Un solo script puede mandar miles de prompts por hora y tú lo descubres cuando llega el correo del proveedor. Pon límite por usuario y por día, y un tope de gasto en el panel del proveedor: el límite técnico y el financiero son dos cinturones distintos (m4-a19).

### Díselo a la IA

> "Audita mi API para abuso. Estas son mis rutas: [pega la lista con métodos]. Para cada una dime: qué daño causa alguien que la llama 10,000 veces, si debe llevar rate limiting, con qué identidad conviene contar (IP, usuario o llave), qué ventana y qué cupo recomiendas, y qué código de estado y headers debe devolver al excederse. Prioriza login, registro, recuperación de contraseña y cualquier ruta que llame a un servicio de pago o de IA. Al final dame la configuración para [framework] y un plan de backoff para el cliente, sin usar comodines ni bloqueos permanentes."

Pedir el daño concreto antes del cupo evita el límite decorativo: el que se pone en el catálogo y no en el login.

### Ejercicios

**1. [opción múltiple]** ¿Qué código de estado corresponde cuando un cliente rebasa el límite de peticiones?
   - a) 403 Forbidden
   - b) 429 Too Many Requests ✔
   - c) 500 Internal Server Error
   - d) 401 Unauthorized

**2. [qué hace]** Tu app recibe esta respuesta. ¿Qué debe hacer?

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 60

{"error":"demasiados intentos"}
```

   - a) Reintentar de inmediato hasta que pase
   - b) Esperar al menos 60 segundos antes de volver a intentar ✔
   - c) Cambiar el método a GET y repetir
   - d) Mostrar un error 500 al usuario

**3. [verdadero/falso]** "Limitar por dirección IP es suficiente, porque cada usuario tiene una IP única."
   - Respuesta: FALSO — muchas personas comparten una IP pública por NAT (oficinas, escuelas, cafés). Por eso se limita también por cuenta o por llave de API.

**4. [completar]** "Al rebasar el límite se responde ____; el header ____ indica cuántos segundos esperar antes de reintentar."
   - Banco: `429` · `Retry-After` · `503` · `Cache-Control`
   - Respuesta: 429 / Retry-After

**5. [ordenar]** Ordena cómo se diseña un límite para el endpoint de login:
   - Orden correcto: Identificar el daño: fuerza bruta y costo por intento → Elegir la identidad a contar: correo y IP → Definir ventana y cupo: 5 intentos cada 15 minutos → Responder 429 con Retry-After al excederse → Medir los bloqueos y ajustar el cupo

---

## A21 — Validación: nunca confíes en lo que manda el cliente

### Concepto

Tu formulario tiene `required`, `type="number"` y un `min="1"`. Se ve blindado. Pero el formulario no es la puerta: es un letrero. Cualquiera puede abrir DevTools, cambiar el HTML, y mandar la petición con `curl` sin pasar por tu página. El servidor recibe exactamente lo que el cliente quiso mandar, incluido un precio de `-500` o una cantidad de `99999`.

Por eso la regla es una sola: **valida en el servidor, siempre**. La validación del navegador es experiencia de usuario —evita que alguien escriba letras en un campo de teléfono y tenga que esperar un viaje de red para enterarse—, no seguridad. La del servidor es la que decide qué entra a tu base de datos.

Validar significa revisar, como mínimo, cinco cosas por campo: que **exista** (los obligatorios), que sea del **tipo** correcto (número, texto, booleano), que respete la **longitud** (un nombre de 2 a 80 caracteres), que esté en **rango** (cantidad entre 1 y 20, precio mayor a 0) y que cumpla el **formato** (correo, teléfono, fecha). Y una sexta que casi todos olvidan: rechazar campos que no esperabas, para que nadie te cuele un `rol: "admin"` en el cuerpo de un registro.

Hay dos ideas que se confunden y conviene separar. **Validar** es decidir si el dato se acepta o se rechaza; si no cumple, respondes `400` o `422` con el campo y el motivo. **Sanitizar** es neutralizar lo peligroso cuando el dato ya es válido pero se va a mostrar o a consultar: escapar HTML al pintarlo y usar consultas parametrizadas al buscar en la base. Un nombre como `alert(1)` es un nombre válido —letras y símbolos—; lo que no puede pasar es que el navegador lo ejecute (m4-a29).

Y hay una validación que no es de forma sino de negocio, y es la que más dinero salva: **el precio no lo pone el cliente**. Si tu API acepta el total que llega en el cuerpo, alguien manda `{"total":1}` por un pedido de 500 pesos. El servidor debe leer los precios de la base, multiplicar por la cantidad validada y calcular el total él mismo. Lo mismo con el `usuario_id`: sale del token verificado, nunca del cuerpo (m4-a15).

Te importa porque la IA genera validaciones incompletas con una facilidad enorme: revisa que el campo exista y sigue adelante. Tú eres quien pregunta "¿y si mando un negativo? ¿y si mando texto donde va un número? ¿y si mando el precio yo?". Esa pregunta, hecha antes del deploy, es la diferencia entre un bug y una pérdida (m4-a20).

### Analogía

Es la báscula de la Central de Abastos. Llega un camión con un manifiesto que dice "cinco toneladas de jitomate" y el guardia de la entrada no firma el manifiesto: sube el camión a la báscula y pesa. El manifiesto lo escribió el que trae la mercancía, así que es una promesa, no un hecho. Si el camión trae piedras envueltas en cajas de jitomate, la báscula lo delata antes de que entre al mercado. La validación del servidor es esa báscula: el cuerpo de la petición es el manifiesto del cliente, y por muy oficial que se vea, no se firma sin pesarlo.

### Cómo se ve en la práctica

Así se ve el agujero. Un pedido con cantidad negativa y precio negativo entra como si nada:

```json
curl.exe -i -X POST https://api.tacoselvolcan.mx/api/pedidos `
  -H "Content-Type: application/json" `
  -H "Authorization: Bearer ..." `
  -d '{"platilloId":12,"cantidad":-3,"precio":-500}'
```

```http
HTTP/1.1 201 Created
Content-Type: application/json

{"id":88,"total":1500,"estado":"pendiente"}
```

Un pedido con cantidad `-3` y precio `-500` acaba de generar un saldo a favor. Ese es el bug que no aparece en la demo y sí en la primera semana de producción.

Con validación en el servidor, la misma petición se rechaza antes de tocar la base:

```js
const Pedido = z.object({
  platilloId: z.number().int().positive(),
  cantidad: z.number().int().min(1).max(20)
});

const r = Pedido.safeParse(req.body);
if (!r.success) {
  return res.status(422).json({ error: "datos inválidos", campos: r.error.flatten().fieldErrors });
}
```

```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json

{"error":"datos inválidos","campos":{"cantidad":"debe ser un entero entre 1 y 20"}}
```

Fíjate en lo que ya no está en el cuerpo: el precio. No se valida porque no se recibe. El servidor lo busca en la tabla `platillos` y calcula el total. Esa es la validación que ninguna IA pone si no se la pides.

**Advertencia:** nunca confíes en un dato que el cliente eligió, ni siquiera si el campo está oculto o deshabilitado en el HTML: los dos se editan en un segundo. Tampoco en el `usuario_id`, el `rol` ni el `total`. Y si tu validación solo vive en el navegador, no tienes validación: tienes una sugerencia.

### Díselo a la IA

> "Revisa este endpoint como si fueras un atacante y luego como defensor. Ruta: [método y ruta]. Cuerpo que recibe: [pega el JSON de ejemplo]. 1) Dime qué campos acepta hoy y cuáles debería rechazar por tipo, longitud, rango y formato. 2) Señala cualquier dato que el cliente no debería poder decidir (precios, totales, ids de usuario, roles, estado) y de dónde debe salir en su lugar. 3) Escríbeme el esquema de validación en [Zod/Joi/Pydantic], con los mensajes de error en español. 4) Dame diez payloads maliciosos para probarlo, incluidos negativos, ceros, texto donde va un número y campos extra. 5) Explica qué se valida y qué se sanitiza al mostrar la respuesta."

Los diez payloads son el entregable más valioso: convierten la revisión en una prueba que puedes repetir después de cada cambio.

### Ejercicios

**1. [opción múltiple]** ¿Dónde debe vivir la validación que protege tus datos?
   - a) En el HTML, con required y min
   - b) En el servidor, antes de escribir en la base de datos ✔
   - c) En el CSS, marcando el campo en rojo
   - d) En el navegador, con JavaScript del frontend

**2. [qué hace]** ¿Qué riesgo concreto revela esta respuesta?

```http
POST /api/pedidos
Content-Type: application/json

{"platilloId":12,"cantidad":-3,"precio":-500}

HTTP/1.1 201 Created
{"id":88,"total":1500}
```

   - a) Ninguno, el total se calculó bien
   - b) La API aceptó cantidad y precio negativos: se puede generar saldo a favor o alterar el inventario ✔
   - c) Falta el header Authorization
   - d) El pedido debería responder 500

**3. [verdadero/falso]** "Si el campo tiene required y type="number" en el HTML, el servidor puede confiar en que el dato llegó bien."
   - Respuesta: FALSO — el HTML se edita en DevTools y la petición se puede hacer con curl. La validación del navegador es UX; la del servidor es la que protege la base (m4-c).

**4. [completar]** "Validar es decidir si el dato se ____ o se ____; sanitizar es ____ lo peligroso al mostrarlo o consultarlo."
   - Banco: `acepta` · `rechaza` · `neutralizar` · `cifrar`
   - Respuesta: acepta / rechaza / neutralizar

**5. [relacionar]** Une cada elemento con su pareja:
   - Validar tipo y rango ↔ Rechazar con 422 lo que no cumple el esquema
   - Sanitizar al mostrar ↔ Escapar HTML para que no se ejecute un script
   - Consulta parametrizada ↔ Evitar que el texto del usuario se interprete como SQL
   - Calcular el total en el servidor ↔ Impedir que el cliente decida el precio

---

## A22 — Webhooks: cuando el servidor te busca a ti

### Concepto

Hasta ahora tu app siempre ha hecho lo mismo: **preguntar**. Llama, espera y recibe. El **webhook** invierte la dirección. Tú le entregas al proveedor una URL tuya y el proveedor te manda un `POST` a esa URL en el instante en que pasa algo: un pago aprobado, un mensaje de WhatsApp entrante, un pedido nuevo en la tienda, un push a tu repositorio. El que avisa es el otro.

La alternativa se llama *polling*: preguntar cada 30 segundos "¿ya pagó?". Son casi tres mil preguntas al día para recibir un aviso que quizá nunca llega, y cuando llega puede llegar hasta medio minuto tarde. El webhook no es una tecnología nueva: es **HTTP al revés** (m4-a3). Sigue siendo un `POST` con headers y cuerpo JSON (m4-a7), solo que ahora el cliente es el proveedor y el servidor eres tú (m4-a2).

Recibir webhooks trae tres obligaciones que no se negocian:

- **Verificar la firma.** El proveedor firma cada envío con un secreto que solo ustedes dos conocen. Si no verificas, cualquiera que descubra tu URL manda un `POST` que dice "pago aprobado" y se lleva los tacos gratis.
- **Responder 200 rápido.** El proveedor espera unos segundos; si no contestas o contestas con error, reintenta. Tu respuesta no es para el usuario: es un acuse de recibo.
- **Ser idempotente.** El mismo evento puede llegar dos o tres veces —por un reintento, por una falla de red, porque el proveedor no vio tu `200`—. Recibirlo dos veces no debe cobrar dos veces ni mandar dos veces el pedido a la cocina.

La forma estándar de cumplir la tercera: cada evento trae un `id`. Antes de procesar, revisa si ese `id` ya existe en una tabla de eventos; si existe, respondes `200` y te retiras sin tocar nada. Si no existe, haces el trabajo y lo registras **en la misma transacción** (m4-b18): o quedan los dos, el cambio y el registro, o no queda ninguno.

Por qué te importa si la IA escribe el handler: los webhooks son la puerta por donde entra el dinero. "Recibe el webhook y marca el pedido como pagado" es una instrucción que la IA cumple al pie de la letra —sin firma, sin idempotencia y sin transacción, porque no se lo pediste—. Esa omisión se ve en producción como pedidos duplicados o comida regalada, y nunca aparece en la prueba feliz.

### Analogía

Es la **alarma de humo conectada a la estación de bomberos**. Sin alarma tendrías que llamar cada cinco minutos para preguntar si hay fuego: eso es polling. Con alarma, el sensor vive en tu bodega y, en el instante en que detecta humo, transmite el aviso. Tú no llamas a nadie; el aviso te busca.

Pero la central no se fía de cualquier llamada: cada sensor trae un **código de instalación** que se verifica antes de mover un camión —esa es la firma—. Y si el sensor repite el aviso tres veces porque no le llegó la confirmación, la central no manda tres camiones: anota "incendio en bodega 3" una sola vez y cierra el reporte. Eso es idempotencia. La central tampoco se queda veinte minutos al teléfono: confirma "recibido" y cuelga; el trabajo pesado lo hace después, con el parte en la mano.

### Cómo se ve en la práctica

Así llega un webhook de pago, en crudo:

```http
POST /webhooks/pagos HTTP/1.1
Host: api.tacoselvolcan.mx
Content-Type: application/json
X-Signature: t=1732485600,v1=9c1f4b7e...

{"id":"evt_8812","tipo":"pago.aprobado","datos":{"pedido_id":42,"monto":350}}
```

El handler mínimo verifica la firma antes de creer nada del cuerpo, revisa el `id` del evento, actualiza el pedido y responde `200`:

```js
const crypto = require("crypto");

app.post("/webhooks/pagos", express.raw({ type: "application/json" }), async (req, res) => {
  const firma = req.headers["x-signature"];              // viene como t=...,v1=...
  const esperada = crypto
    .createHmac("sha256", process.env.WEBHOOK_SECRET)
    .update(req.body)                                    // cuerpo crudo, sin parsear
    .digest("hex");

  if (!firma || !firma.includes(esperada)) return res.sendStatus(401);

  const evento = JSON.parse(req.body);
  const yaProcesado = await db.eventos.findOne({ id: evento.id });
  if (yaProcesado) return res.sendStatus(200);           // reintento: no hacer nada

  await db.transaccion(async (tx) => {
    await tx.pedidos.update(evento.datos.pedido_id, { estado: "pagado" });
    await tx.eventos.insert({ id: evento.id, tipo: evento.tipo });
  });

  res.sendStatus(200);                                   // acuse rápido
});
```

Dos detalles de producción: compara la firma con una función de tiempo constante en vez de un `includes` simple, y no mandes correos ni generes facturas antes de responder. Lo que tarde más de un par de segundos, a una cola; el webhook solo confirma.

**Advertencia:** nunca confíes en un webhook por su origen aparente ni por un parámetro en la URL como `?token=abc`. La única prueba válida es la firma calculada con el secreto. Y jamás pongas ese secreto en el código ni en el repositorio: si se filtra, cualquiera puede fabricar avisos de pago (m4-a19).

### Díselo a la IA

> "Voy a recibir webhooks de [proveedor] en la ruta /webhooks/[evento]. Genera el handler completo con: 1) verificación de firma HMAC usando el secreto de una variable de entorno, sobre el cuerpo crudo; 2) idempotencia con una tabla de eventos y el id del aviso; 3) transacción para que el cambio y el registro queden juntos; 4) respuesta 200 inmediata y trabajo pesado fuera de la respuesta; 5) log con id del evento y resultado, sin datos del cliente. Dime también qué tabla necesito crear y qué pruebas debo correr para simular un envío duplicado."

Ese prompt convierte "recibe el webhook" en un contrato verificable. Si la IA se salta la firma o la tabla de eventos, tienes con qué reclamarle.

### Ejercicios

**1. [opción múltiple]** ¿Por qué hay que verificar la firma de un webhook antes de procesarlo?
   - a) Para que el mensaje llegue más rápido
   - b) Porque sin firma cualquiera que conozca la URL puede mandar un aviso falso ✔
   - c) Porque el proveedor cobra menos si se verifica
   - d) Para comprimir el cuerpo JSON

**2. [ordenar]** Ordena lo que hace un handler de webhook bien construido:
   - Orden correcto: Llega el POST del proveedor → Verificas la firma con el secreto → Compruebas si el id del evento ya se procesó → Actualizas el pedido y registras el evento en una transacción → Respondes 200 para cerrar la conversación

**3. [verdadero/falso]** "Si tu handler responde 500, el proveedor puede reintentar el envío y tu lógica correr dos veces: por eso hay que ser idempotente."
   - Respuesta: VERDADERO — los reintentos existen justamente para los casos en que no respondiste 2xx; sin idempotencia, el reintento duplica el efecto.

**4. [completar]** "En un webhook la dirección se invierte: el ____ te avisa a ti, en lugar de que tu app ____ cada cierto tiempo."
   - Banco: `proveedor` · `pregunte` · `usuario` · `responda`
   - Respuesta: proveedor / pregunte

**5. [qué hace]** Tu handler acepta esta petición y marca el pedido 42 como pagado. ¿Qué falla?

```json
curl.exe -X POST https://api.tacoselvolcan.mx/webhooks/pagos -H "Content-Type: application/json" -d "{\"tipo\":\"pago.aprobado\",\"pedido_id\":42}"
```

   - a) Nada: es exactamente lo que manda el proveedor
   - b) Falta la firma: cualquiera puede mandar este POST y regalar pedidos ✔
   - c) El método debería ser GET
   - d) Falta el header Accept

---

## A23 — Serverless: backend sin administrar servidores

### Concepto

**Serverless** no significa que no haya servidores: significa que tú no los administras. Escribes una función, la subes a una plataforma y la plataforma se encarga de todo lo demás. Cuando llega una petición, levanta un entorno, mete tu código, lo ejecuta y lo apaga. Si nadie llama, no hay nada encendido y no pagas nada.

Los nombres que vas a escuchar: **AWS Lambda** (el original), **Netlify Functions** y **Vercel** (las que usarás en tus proyectos), **Cloudflare Workers** y **Supabase Edge Functions** (que corren cerca del usuario, no en un solo país). Todas ofrecen lo mismo con distinto envoltorio: una URL, un archivo con una función, un `deploy`.

El costo de ese arranque se llama **cold start**. Si tu función no se ha usado en un rato, la plataforma tiene que crear el contenedor, cargar el runtime y tu código: entre 200 milisegundos y un par de segundos antes de que tu primera línea corra. Las siguientes peticiones encuentran el entorno caliente y responden al instante. Dato memorable: **el servidor no desaparece; lo que desaparece es tu trabajo de administrarlo**.

El modelo de cobro también cambia: pagas por invocación y por tiempo de ejecución, no por tener una máquina prendida todo el mes. Una función que nadie llama cuesta cero. Una que se llama un millón de veces al mes ya es una línea en la factura que conviene calcular antes, no después.

Y hay límites que definen el diseño. Cada plataforma impone un **tiempo máximo por invocación** —10 segundos es el valor típico en Netlify, y AWS Lambda llega a 15 minutos—, una memoria fija y un paquete de código de tamaño acotado. Además, cada invocación es **sin estado**: lo que guardaste en una variable de memoria puede no existir en la siguiente llamada. Por eso **no conviene** serverless para procesos largos (generar un PDF de 200 páginas, procesar video, importar cincuenta mil filas), para conexiones que deben seguir abiertas (WebSocket, colas de horas), para cargas altas y constantes —donde un servidor fijo sale más barato— ni cuando necesitas control fino del sistema operativo o binarios pesados.

Para ti, que diriges a la IA, esto es el terreno donde va a vivir el webhook de la unidad anterior (m4-a22) y donde la IA te va a proponer media docena de soluciones distintas. Saber que existe un reloj corriendo y un estado que no persiste es lo que evita que apruebes un diseño que se corta a la mitad.

### Analogía

Es la **planta de luz de renta**. No la tienes encendida todo el año quemando diésel: está instalada, apagada, y en el segundo en que se va la luz arranca sola, alimenta la casa y se apaga cuando vuelve. Pagas por el tiempo que trabaja, no por tenerla ahí parada.

Ese arranque tiene un costo: entre que se va la luz y que el motor toma velocidad pasan unos segundos en los que la casa está a oscuras. Ese es el **cold start**: la primera petición después de un rato de silencio paga el precio de encender; las siguientes encuentran el motor caliente. Y como toda planta rentada, tiene el tanque limitado: si el trabajo dura más de lo que aguanta, se apaga a media tarea. Por eso no le pides que alimente una fábrica.

### Cómo se ve en la práctica

Una función de Netlify es un archivo dentro de `netlify/functions/`. La plataforma le da una URL pública y la ejecuta cuando alguien la llama:

```js
// netlify/functions/pagar.js
exports.handler = async (event) => {
  const { pedidoId, monto } = JSON.parse(event.body);

  if (!pedidoId || !monto) {
    return { statusCode: 400, body: JSON.stringify({ error: "faltan datos" }) };
  }

  const inicio = Date.now();
  await db.pedidos.update(pedidoId, { pagado: true });
  console.log(JSON.stringify({ fn: "pagar", ms: Date.now() - inicio }));

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
```

Después del deploy queda disponible en `https://tacoselvolcan.netlify.app/.netlify/functions/pagar` y la llamas con curl o con `fetch` como cualquier endpoint. Prueba dos veces seguidas y compara los tiempos en el panel de la función: la primera llamada del día suele tardar varias veces más que la segunda. Ese es el cold start medido con tus propios ojos, y es la razón por la que no pones una función detrás de cada clic de tu interfaz.

**Advertencia:** una función desplegada es una **URL pública**. Si no verifica quién llama, es un endpoint abierto que cualquiera puede usar para gastar tu cuota o mover tus datos. Y jamás metas llaves dentro del archivo: van en variables de entorno de la plataforma (m4-a19). Tampoco pongas ahí una llave de servicio de tu base si la función la puede llamar el navegador sin autenticación.

### Díselo a la IA

> "Tengo esta tarea de backend: [describe]. Antes de recomendarme serverless, hazme cuatro preguntas: cuánto puede tardar en el peor caso, cuántas veces se va a llamar al día, si necesita recordar algo entre llamadas y si depende de binarios o procesos del sistema. Con mis respuestas dime si conviene una función serverless o un servidor fijo, qué plataforma encaja (Netlify, Vercel, Supabase Edge), cuál es el límite de tiempo y memoria, y qué pasa exactamente si me paso. Si no conviene serverless, dilo sin adornos."

Ese prompt invierte la conversación: la IA deja de venderte la tecnología de moda y empieza a evaluar tu caso.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estas tareas NO conviene resolver con una función serverless?
   - a) Recibir un webhook de pago y actualizar un pedido
   - b) Generar un video de 40 minutos con ffmpeg ✔
   - c) Validar un formulario y guardar un registro
   - d) Responder un endpoint que consulta una tabla

**2. [verdadero/falso]** "Serverless significa que ya no hay servidores de por medio."
   - Respuesta: FALSO — los servidores siguen existiendo: lo que desaparece es tu trabajo de administrarlos. Por eso hay cold start y límites.

**3. [completar]** "El retraso extra de la primera invocación después de un rato sin uso se llama ____, y cada ejecución es ____: la memoria no sobrevive entre llamadas."
   - Banco: `cold start` · `sin estado` · `warm start` · `con estado`
   - Respuesta: cold start / sin estado

**4. [ordenar]** Ordena lo que pasa en un cold start:
   - Orden correcto: Llega la primera petición después de un rato sin uso → La plataforma levanta un contenedor y arranca el runtime → Se carga tu código y se abre la conexión a la base → Tu función ejecuta y responde → La instancia queda disponible para la siguiente petición

**5. [qué hace]** ¿Cuál es el riesgo principal de esta función?

```js
exports.handler = async () =&gt; {
  const reporte = await generarPdfDe200Paginas();
  return { statusCode: 200, body: reporte };
};
```

   - a) Que el PDF salga con otro diseño
   - b) Que exceda el límite de tiempo de la plataforma y se corte a la mitad ✔
   - c) Que no se pueda llamar por HTTPS
   - d) Que consuma demasiada memoria del navegador

---

## A24 — Node.js y Express en concepto

### Concepto

**Node.js** es el motor de JavaScript fuera del navegador. El mismo lenguaje que usaste para pintar tarjetas (m3-b10) ahora corre en una computadora que puede abrir archivos, hablar con una base de datos y escuchar en un puerto para recibir peticiones. El navegador te da `window` y el DOM; Node te da el sistema de archivos y la red. Ninguno tiene lo del otro, y esa diferencia es la frontera entre cliente y servidor (m4-a2).

**Express** es un framework que va encima de Node y resuelve dos cosas: **rutas** y **middleware**. Sin Express tendrías que escribir a mano el servidor HTTP, leer el cuerpo, separar la URL y decidir qué hacer con cada combinación. Con Express eso se reduce a declarar: "cuando llegue un `GET` a esta ruta, ejecuta esta función".

La forma mínima de una ruta es siempre la misma: `app.get("/ruta", handler)`. El `handler` recibe dos objetos: `req`, la petición —con `req.params`, `req.query`, `req.body` y `req.headers`, justo las tres casillas de m4-a11— y `res`, la respuesta, con la que decides el código y el cuerpo: `res.json(datos)`, `res.status(404).json(...)`. Cambia `get` por `post`, `patch` o `delete` y tienes el resto de los métodos (m4-a4).

El **middleware** es la pieza que hay que entender. Es una función con tres argumentos —`req`, `res` y `next`— que corre *antes* de tu ruta y puede hacer tres cosas: mirar la petición, modificarla, o cortarla. Si llama a `next()`, la petición sigue al siguiente eslabón; si responde sin llamarlo, el viaje termina ahí. Parsear el JSON del cuerpo, escribir un log (m4-a25), limitar la cantidad de peticiones (m4-a20) o verificar el token son middlewares. Y el **orden importa**: se ejecutan en el orden en que los declaraste. Si pones la ruta antes del guardia, la ruta queda abierta.

No necesitas memorizar la sintaxis. Necesitas **reconocer la forma** para auditar lo que la IA escribe: ¿dónde está el guardia?, ¿el cuerpo se parsea antes de leerlo?, ¿el manejador de errores está al final y con cuatro argumentos? Con esas tres preguntas detectas la mayoría de los backends inseguros que se generan solos (m4-a26).

### Analogía

Es la **terminal de autobuses** de una ciudad. Cada boleto dice un destino, y el destino decide el andén: `/platillos` sale del andén 3, `/pedidos` del 5. Eso es el *routing* de Express: mirar la ruta y mandar la petición con quien le toca.

Antes de subir, todo pasajero cruza la misma fila de revisiones, en orden: boleto en mano, detector de metales, guardarropa. Si en la primera estación no trae boleto, no llega a la segunda. Cada estación puede dejarte pasar (`next()`) o devolverte; ese pasillo es el **middleware**, y su orden es la seguridad del edificio. Node, debajo, es el patio con los motores encendidos: la infraestructura que hace que todo se mueva.

### Cómo se ve en la práctica

Este es un servidor completo de verdad, con las cuatro piezas que siempre vas a encontrar:

```js
const express = require("express");
const app = express();

app.use(express.json());                    // 1. parsea el body JSON

app.use((req, res, next) => {               // 2. logger
  console.log(req.method, req.path);
  next();                                   // sin next() la petición se cuelga
});

function requiereSesion(req, res, next) {   // 3. guardia
  if (!req.headers.authorization) return res.status(401).json({ error: "falta token" });
  next();
}

app.get("/api/v1/platillos", async (req, res) => {   // 4. ruta
  const platillos = await db.platillos.findMany();
  res.json(platillos);
});

app.listen(3000);
```

Léelo de arriba abajo como se ejecuta: primero se registra el parser, después el logger, después el guardia y al final la ruta. Si mueves la línea de `app.get` arriba de `requiereSesion`, el endpoint queda público y la prueba sigue pasando: el error no se nota hasta que alguien lo encuentra. Ese es el tipo de bug que se audita leyendo el orden, no probando el final.

**Advertencia:** nunca pongas secretos en este archivo. Cadenas de conexión, llaves de servicio y contraseñas van en variables de entorno (m4-a19). Y si ves `app.get("/admin", ...)` sin ningún middleware de sesión delante, ya encontraste el hueco antes de que lo encuentre otro.

### Díselo a la IA

> "Te paso mi archivo server.js: [pégalo]. No lo reescribas todavía. 1) Explícame en orden qué hace cada línea y en qué orden se ejecutan los middlewares. 2) Marca cada ruta que quede sin verificación de sesión o sin validación de datos, y dime qué riesgo tiene. 3) Revisa si el manejador de errores está al final y con cuatro argumentos. 4) Al terminar, dame la lista de cambios ordenada por gravedad. No agregues dependencias nuevas."

Pedir la auditoría antes de la reescritura evita que la IA "arregle" el archivo borrando justo el middleware que te protegía.

### Ejercicios

**1. [relacionar]** Une cada elemento con su pareja:
   - Node.js ↔ Ejecuta JavaScript fuera del navegador
   - Express ↔ Framework de rutas y middleware
   - req ↔ Trae params, query, body y headers
   - res ↔ Decide el código de estado y el cuerpo
   - next ↔ Deja pasar la petición al siguiente eslabón

**2. [opción múltiple]** ¿Qué hace un middleware que responde sin llamar a next()?
   - a) Corta la cadena: la petición no llega a la ruta ✔
   - b) Duplica la petición para reintentarla
   - c) La manda al navegador para que la repita
   - d) La guarda para ejecutarla al final

**3. [ordenar]** Ordena los eslabones tal como deben declararse en Express:
   - Orden correcto: express.json() para parsear el cuerpo → Logger de peticiones → Verificación de sesión → La ruta que responde los datos → Manejador de errores al final

**4. [completar]** "En Express, ____ trae lo que llegó en la petición y ____ construye lo que se devuelve; ____ permite que la petición siga al siguiente middleware."
   - Banco: `req` · `res` · `next` · `app`
   - Respuesta: req / res / next

**5. [qué hace]** ¿Qué le falta a esta ruta antes de considerarla segura?

```js
app.get("/api/v1/pedidos/:id", async (req, res) =&gt; {
  const pedido = await db.pedidos.findOne(req.params.id);
  res.json(pedido);
});
```

   - a) Nada, con el id en la ruta ya está protegida
   - b) Verificar la sesión y que el pedido pertenezca a ese usuario ✔
   - c) Cambiar get por post
   - d) Agregar un header Content-Type

---

## A25 — Logs: los ojos de tu servidor

### Concepto

Un **log** es el registro escrito de lo que hizo tu servidor, en orden y con hora. No es el `console.log` que pusiste para depurar y olvidaste borrar: es la caja negra del sistema. Cuando un cliente dice "hice mi pedido y no llegó", el log es lo que te permite responder en dos minutos en vez de en dos horas.

Lo que sí se registra, en cada petición: el método y la ruta, el código de estado, cuánto tardó, qué usuario lo hizo (su id, nunca su contraseña) y un **identificador de petición** que puedas buscar después. Además, los eventos de negocio que importan —pedido creado, pago rechazado, webhook recibido (m4-a22)— y los errores con su detalle técnico (m4-a26).

Lo que **nunca** se registra: contraseñas (ni siquiera hasheadas), tokens o JWT completos, cookies, números de tarjeta, identificaciones oficiales, y el cuerpo entero de un formulario "por si acaso". La razón es simple y se olvida seguido: los logs se copian a Slack, se mandan a un servicio externo, se conservan meses y los lee más gente de la que puede entrar a la base de datos. Un secreto en un log es un secreto filtrado, aunque nadie lo haya abierto.

Los **niveles** existen para que puedas filtrar sin leerlo todo. `info`: pasó lo normal (petición atendida, pedido creado). `warn`: pasó algo raro pero seguimos (reintento, dato sospechoso, respuesta lenta). `error`: falló y alguien debe enterarse. `debug` es para desarrollo y se apaga en producción. Si todo es *error*, nada es error: la alerta se vuelve ruido y nadie la mira.

Y el detalle que separa un log útil de una línea inútil: el **contexto**. "error" no dice nada. "Hora exacta, ruta, usuario, identificador de petición, duración y qué se intentaba" te deja reconstruir la escena. Con ese identificador puedes pedirle al cliente una sola cosa —el folio de su error— y encontrar su caso entre cien mil líneas.

### Analogía

Es la **bitácora del velador**. Cada ronda queda anotada con hora: "23:40, portón norte, sin novedad". Cuando a la mañana siguiente alguien pregunta qué pasó, la bitácora responde en segundos: qué ronda, a qué hora, por dónde. Sin hora ni lugar, "hubo un ruido" no sirve para nada.

El velador anota lo normal, lo raro ("portón entreabierto, lo cerré") y lo grave ("se metieron por la bodega") en la misma libreta, con distinto énfasis: esos son los niveles *info*, *warn* y *error*. Y hay una regla que ningún velador rompe: **jamás escribe la combinación de la caja fuerte en la bitácora**. La libreta la lee el gerente, el de la limpieza y el de la aseguradora; un secreto ahí deja de ser secreto.

### Cómo se ve en la práctica

Compara dos líneas. La primera es la que se escribe sin pensar, y probablemente sea la más peligrosa de tu proyecto:

```json
console.log("login:", req.body);
// {"correo":"ana@correo.mx","password":"Taco1234"}
```

La segunda registra lo mismo —que alguien entró— sin guardar la llave de la casa:

```json
{"nivel":"info","hora":"2026-11-24T18:03:12Z","request_id":"req_7f2a",
 "metodo":"PATCH","ruta":"/api/v1/pedidos/42","status":200,
 "usuario":"u_881","duracion_ms":1240}
```

Esa forma se genera sola con un middleware. Nota que el cuerpo nunca se toca: solo se registra lo que necesitas para investigar:

```js
app.use((req, res, next) => {
  const inicio = Date.now();
  res.on("finish", () => {
    console.log(JSON.stringify({
      nivel: res.statusCode >= 500 ? "error" : "info",
      hora: new Date().toISOString(),
      request_id: req.id,
      metodo: req.method,
      ruta: req.originalUrl,
      status: res.statusCode,
      usuario: req.usuario?.id || null,
      duracion_ms: Date.now() - inicio
    }));
  });
  next();
});
```

Y cuando un cliente reporta un fallo, buscas por su `request_id`: `Select-String -Path logs\app.log -Pattern "req_7f2a"`. Ahí está la historia completa de esa petición, sin preguntarle nada más.

**Advertencia:** si descubres un token o una contraseña en tus logs, no basta con borrar la línea. El archivo ya se copió, se respaldó o se envió al servicio de monitoreo: trata ese secreto como filtrado y rótalo (m4-a19). Y recuerda que la URL completa, incluida la query (m4-a11), también queda registrada.

### Díselo a la IA

> "Revisa estos logs de mi API: [pega 10 o 15 líneas]. 1) Señala todo dato personal o secreto que aparezca y dime qué tan grave es. 2) Propón un formato JSON único con hora, request_id, método, ruta, status, id de usuario y duración. 3) Escríbeme el middleware de Express que lo genere sin tocar el cuerpo de la petición. 4) Dame una regla de qué sí y qué no loguear en mi negocio, con dos ejemplos de cada lado. No repitas en tu respuesta ningún token que veas en los logs."

La última línea es tan importante como el análisis: si pegas logs con secretos en un chat, ya los filtraste.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estos datos NUNCA debe aparecer en un log?
   - a) El código de estado de la respuesta
   - b) El identificador del usuario
   - c) La contraseña que llegó en el formulario ✔
   - d) La duración de la petición

**2. [verdadero/falso]** "Si un token aparece en un log, basta con borrar esa línea del archivo para que el problema quede resuelto."
   - Respuesta: FALSO — el log ya pudo copiarse, respaldarse o enviarse a un servicio externo: el secreto se considera filtrado y hay que rotarlo (m4-a19).

**3. [relacionar]** Une cada elemento con su pareja:
   - info ↔ Petición atendida sin novedad
   - warn ↔ Reintento o respuesta lenta: algo raro pero seguimos
   - error ↔ Falló algo y alguien debe enterarse
   - request_id ↔ Permite encontrar todas las líneas de una misma petición

**4. [completar]** "Un log sin ____ no sirve: debe decir la hora, la ruta, el usuario y cuánto ____ la operación."
   - Banco: `contexto` · `duró` · `contraseña` · `color`
   - Respuesta: contexto / duró

**5. [qué hace]** ¿Qué problema tiene esta línea de log?

```json
{"nivel":"info","mensaje":"login ok","body":{"correo":"ana@correo.mx","password":"Taco1234"}}
```

   - a) Ninguno, el login salió bien
   - b) Registra la contraseña en claro: cualquiera con acceso a los logs la puede leer ✔
   - c) Le falta el código de estado
   - d) Debería usar nivel error

---

## A26 — Errores: cómo responder cuando algo falla

### Concepto

El camino feliz es la mitad del backend. La otra mitad son los errores, y cada uno es una conversación con tres preguntas: qué pasó, de quién es la culpa y qué puede hacer la persona que está enfrente. Una API que responde bien cuando todo sale bien y responde basura cuando algo falla no está terminada.

En el código, la herramienta es `try/catch`: envuelves lo que puede fallar y decides qué hacer si falla. Dos trampas frecuentes: `try/catch` no atrapa una promesa que no esperaste con `await`, y Express no captura solo los errores de una función `async` —tienes que envolverla o delegar al manejador central—. Si el error se escapa, el proceso puede caerse y el cliente recibe un `500` sin explicación.

El código correcto depende de la causa, no del gusto (m4-a5): `400` cuando la petición está mal formada o le falta un campo obligatorio; `401` cuando no sé quién eres; `403` cuando sé quién eres pero no puedes hacer esto; `404` cuando el recurso no existe; `409` cuando choca con el estado actual —correo ya registrado—; `422` cuando la forma es válida pero los datos no —un correo sin arroba—; `429` cuando hay demasiadas peticiones (m4-a20); y `500` cuando falló algo que no esperabas. La confusión clásica es 400 contra 422: si el JSON ni siquiera se puede leer, es 400; si se leyó pero el contenido no cumple las reglas, es 422 (m4-a21).

Y una sola forma de error para toda la API:

```json
{"error":{"codigo":"correo_invalido",
         "mensaje":"Escribe un correo con formato válido, por ejemplo ana@correo.mx",
         "campo":"correo",
         "request_id":"req_7f2a"}}
```

Mismo envoltorio siempre, para que el cliente programe una vez. El mensaje debe ser **accionable**: "el correo ya está registrado, ¿quieres iniciar sesión?" sirve; "Error 23505" no. Lo que **nunca** viaja al cliente es el stack trace: el detalle técnico completo —rutas de archivos, versiones, consultas SQL, a veces credenciales de conexión— se queda en el log con su `request_id` (m4-a25), y al usuario le llega un mensaje seguro con ese folio para que puedas rastrear su caso.

Si la IA escribe tu backend, el camino feliz va a estar impecable y los errores van a ser un `catch` que imprime en consola y devuelve `500` para todo. Revisar eso no requiere programar: requiere leer si los códigos distinguen causas, si el formato es único y si el stack se está escapando por la puerta de enfrente.

### Analogía

Es el **taller mecánico**. Cuando recoges el carro, el mecánico no te pega el escáner completo en el parabrisas: te dice "se gastaron las balatas, son 800 pesos, está listo a las cinco". Eso es un mensaje accionable: qué pasó, cuánto cuesta y qué sigue.

El diagnóstico completo —códigos, voltajes, la ficha con el número de motor— se queda en el **expediente del taller**, donde lo lee quien va a reparar. Si el mecánico te entregara esa hoja, no te ayudaría a manejar: te daría un mapa del taller y de sus puntos flojos. Al cliente, el mensaje claro; al expediente, el detalle.

### Cómo se ve en la práctica

Así responde una API que no debería existir en producción:

```http
HTTP/1.1 500 Internal Server Error
Content-Type: text/html

Error: connect ECONNREFUSED 10.0.4.12:5432
    at Pool.<anonymous> (/app/node_modules/pg/lib/pool.js:14:9)
    at /app/src/db.js:22:5
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
```

Le acabas de contar al mundo la IP de tu base, el motor que usas, la versión de tu runtime y en qué archivo está el problema. Eso es un mapa para atacar. La misma falla, bien manejada:

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{"error":{"codigo":"interno","mensaje":"No pudimos completar la operación. Intenta de nuevo en unos minutos.","request_id":"req_9c31"}}
```

Y en el log queda todo lo que el cliente no necesita ver. El manejador central de Express se declara al final y con **cuatro** argumentos: si le quitas el cuarto, Express lo trata como middleware normal y nunca lo llama como manejador de errores.

```js
app.use((err, req, res, next) => {
  const id = crypto.randomUUID();

  console.error(JSON.stringify({
    nivel: "error", request_id: id, metodo: req.method, ruta: req.path,
    usuario: req.usuario?.id || null, mensaje: err.message, stack: err.stack
  }));

  res.status(err.status || 500).json({
    error: {
      codigo: err.codigo || "interno",
      mensaje: err.publico || "No pudimos completar la operación. Intenta de nuevo.",
      request_id: id
    }
  });
});
```

**Advertencia:** un stack trace en producción no es un detalle de estilo, es una fuga de información. Puede revelar rutas internas, versiones con vulnerabilidades conocidas y hasta la cadena de conexión de la base. Si hoy devuelves `err.stack` al cliente, quítalo antes de tu próximo deploy, y revisa que el `500` tampoco incluya el mensaje crudo de la base de datos (m4-a25).

### Díselo a la IA

> "Voy a estandarizar los errores de mi API. 1) Te paso este handler y estas rutas: [pega]. Dime en qué casos devuelvo un código equivocado y cuál corresponde (400, 401, 403, 404, 409, 422 o 500). 2) Define un formato JSON único de error con codigo, mensaje, campo opcional y request_id. 3) Reescribe los mensajes para que sean accionables para el usuario final, en español claro. 4) Marca cualquier lugar donde hoy se filtre un stack trace o un mensaje crudo de la base, y muévelo al log. 5) Entrégame las pruebas que debo correr para cada caso."

Con eso la IA no solo corrige: te deja la lista de verificación para que el siguiente error no vuelva a salir crudo.

### Ejercicios

**1. [relacionar]** Une cada elemento con su pareja:
   - 401 ↔ No sé quién eres: falta el token o expiró
   - 403 ↔ Sé quién eres, pero no puedes hacer esto
   - 404 ↔ El recurso que pides no existe
   - 422 ↔ Llegó bien formado, pero los datos no son válidos
   - 500 ↔ Falló algo inesperado en el servidor

**2. [opción múltiple]** El usuario manda un correo con formato inválido y todo lo demás correcto. ¿Qué código corresponde?
   - a) 400, porque la petición está mal formada
   - b) 422, porque el formato es válido pero el dato no cumple las reglas ✔
   - c) 500, porque el servidor no pudo guardarlo
   - d) 404, porque ese correo no existe

**3. [verdadero/falso]** "En producción, el stack trace debe guardarse en el log con un request_id, pero nunca enviarse en la respuesta al cliente."
   - Respuesta: VERDADERO — el detalle sirve para diagnosticar; exponerlo revela rutas, versiones y a veces credenciales de conexión.

**4. [completar]** "El manejador de errores de Express se declara al ____ y con ____ argumentos; si le falta el último, nunca se ejecuta como tal."
   - Banco: `final` · `cuatro` · `inicio` · `dos`
   - Respuesta: final / cuatro

**5. [qué hace]** ¿Qué está mal en esta respuesta?

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{"error":"SequelizeConnectionError: password authentication failed for user 'postgres' at /app/src/db.js:14"}
```

   - a) Nada, el 500 es el código correcto
   - b) El código está bien pero filtra el stack y el usuario de la base: eso va al log, no al cliente ✔
   - c) Debería ser 401 porque falló la autenticación
   - d) Le falta el header Location

---

## A27 — Documentar tu API para que otros (y tu IA) la entiendan

### Concepto

Documentar una API es dejar escrito, en un solo lugar, **qué endpoints existen, qué recibe cada uno, qué devuelve, qué errores puede dar y cómo se autentica quien llama**. No es un adorno para la galería: es el contrato de tu sistema (m4-a8) en versión legible para humanos. Sin él, cada persona que quiera usar tu API —otro desarrollador, tu yo de dentro de seis meses o la IA a la que le pidas un cambio— tiene que adivinar leyendo el código.

El estándar que domina se llama **OpenAPI**: un archivo en YAML o JSON que describe la API de forma que *también una máquina la entiende*. **Swagger** es el nombre histórico del estándar y hoy el de las herramientas que lo leen: le das tu archivo y te dibuja una página donde cada endpoint aparece con sus campos, sus ejemplos y un botón para probarlo. La diferencia en una línea: **OpenAPI es la especificación; Swagger es el visor**. Y como el archivo es legible por máquinas, sirve a tres consumidores a la vez: la persona que integra, la herramienta que genera la documentación y la IA que va a modificar el código.

Lo que separa una doc útil de una doc decorativa es justo lo que casi nadie escribe: **los errores y la autenticación**. Que `GET /v1/productos` devuelva una lista es la mitad del asunto. La otra mitad: qué header hay que mandar, qué pasa si el token expiró, qué código llega si el usuario no tiene permiso, cuántos resultados devuelve como máximo y cómo se pagina. Quien integra no se atora en el caso feliz; se atora en el `401` que no sabe interpretar (m4-a5).

Para la IA, la documentación es la diferencia entre ayudarte e *inventar*. Si le pides "agrega un filtro por categoría" sin contexto, va a suponer nombres de campos: escribirá `precio` cuando tu campo se llama `precio_mxn`, o `clienteId` cuando es `cliente_id`. Si le pegas el `openapi.yaml`, trabaja sobre los nombres reales y sus respuestas respetan el contrato. Documentar es, en la práctica, darle a la IA el manual del sistema en vez de dejarla adivinar cómo está armado.

**Advertencia:** la documentación casi siempre es pública. Nunca pongas en los ejemplos tokens reales, llaves de servicio, URLs internas ni datos de clientes. Un ejemplo con `Authorization: Bearer eyJhbGci...` copiado de producción es un secreto publicado con formato de manual (m4-a19). Usa valores falsos y evidentes: `Bearer TOKEN_DE_EJEMPLO`.

### Analogía

Es el **manual de servicio del taller**. Cuando llevas un coche a un mecánico que no conoce ese modelo, abre el manual: torque de cada tornillo, qué aceite lleva y —lo más útil— la tabla de **códigos de falla**: "luz 3 = sensor de oxígeno". Sin manual, el mecánico desarma para descubrir, cobra horas de diagnóstico y a veces rompe una pieza que no estaba mal. Con manual, va directo a la falla. Tu API es el coche y quien la integra es el mecánico: si no le dejas el manual con sus códigos de error, va a desarmar tu sistema a prueba y error, y esas horas las acabas pagando tú.

### Cómo se ve en la práctica

Una especificación mínima de OpenAPI se ve así. No la escribes a mano: se la pides a la IA y la revisas.

```json
openapi: 3.0.3
info:
  title: API Ferretería El Tornillo
  version: "1.0.0"
servers:
  - url: https://api.eltornillo.mx/v1
paths:
  /productos:
    get:
      summary: Lista los productos del catálogo
      security:
        - bearerAuth: []
      parameters:
        - name: categoria
          in: query
          schema: { type: string }
      responses:
        "200":
          description: Lista de productos
        "401":
          description: Token ausente o expirado
        "429":
          description: Demasiadas peticiones (m4-a20)
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
```

Ese archivo, cargado en Swagger UI, se convierte en una página donde puedes probar el endpoint sin escribir código (m4-a12). Para el día a día, la versión corta en Markdown también funciona, y muchas veces comunica mejor:

```json
## GET /v1/productos
Requiere: Authorization: Bearer TOKEN_DE_EJEMPLO
Query: ?categoria=tornillos&limite=20   (limite máximo: 100)

200 → [{ "sku": "T-104", "nombre": "Tornillo 1/4", "precio_mxn": 3.5 }]
401 → { "error": "token_invalido", "mensaje": "El token expiró, vuelve a iniciar sesión" }
429 → { "error": "rate_limit", "mensaje": "Máximo 60 peticiones por minuto" }
```

Lo importante no es el formato sino la cobertura. Por cada endpoint: método, ruta, autenticación requerida, parámetros, un ejemplo de respuesta feliz y la tabla de errores con sus límites. Si un campo no está ahí, para quien integra no existe.

### Díselo a la IA

> "Tengo estos endpoints: [pega rutas y métodos]. Genera un archivo openapi.yaml en versión 3.0.3 que documente cada uno con: autenticación requerida, parámetros, ejemplo de respuesta 200 y los errores 400, 401, 403, 404, 429 y 500 con su mensaje. Usa exactamente los nombres de campos que aparecen en mi código; si te falta un dato, pregúntame en vez de inventarlo. Al final, dime qué endpoints quedaron incompletos y por qué."

La frase "pregúntame en vez de inventarlo" es la que evita que tu documentación se vuelva ficción bien formateada.

### Ejercicios

**1. [opción múltiple]** ¿Qué es OpenAPI?
   - a) Un archivo que describe tu API y que también pueden leer las máquinas ✔
   - b) Una base de datos donde se guardan los endpoints
   - c) Un método HTTP para documentar
   - d) Un servicio de hosting exclusivo para APIs

**2. [verdadero/falso]** "Si tu API funciona bien, documentarla es opcional, porque el código ya dice todo lo necesario."
   - Respuesta: FALSO — El código dice cómo está hecho, no cómo se usa. Sin un contrato legible cada integración se vuelve adivinanza, y la IA inventa nombres de campos cuando no tiene la especificación (m4-a8).

**3. [completar]** "____ es la especificación que describe los endpoints y ____ la herramienta que la convierte en una página para probarlos."
   - Banco: `OpenAPI` · `Swagger` · `Postman` · `REST`
   - Respuesta: OpenAPI / Swagger

**4. [relacionar]** Une cada elemento con su pareja:
   - OpenAPI ↔ El archivo que describe la API
   - Swagger UI ↔ La página interactiva para probarla
   - securitySchemes ↔ La sección que documenta cómo autenticarse
   - 429 documentado ↔ El límite de peticiones explicado a quien integra

**5. [qué hace]** ¿Qué está declarando este fragmento de OpenAPI?

```js
responses:
  "200":
    description: Lista de productos
  "401":
    description: Token ausente o expirado
```

   - a) Que ese endpoint puede responder con éxito o con un problema de token ✔
   - b) Que el endpoint solo acepta dos peticiones por minuto
   - c) Que el endpoint devuelve una lista de tokens
   - d) Que el endpoint no requiere autenticación

---

## A28 — Versionado: cambiar sin romperle a nadie

### Concepto

Versionar una API es ponerle un número a una promesa: la de que no la vas a romper. Ese número vive en la ruta —`/v1/productos`, `/v2/productos`— y significa que mientras alguien llame a `/v1`, tú te comprometes a responderle con los mismos campos y el mismo significado. Cuando necesitas cambiar algo que rompe esa promesa, no lo cambias: abres `/v2` y dejas las dos versiones conviviendo el tiempo necesario.

Un cambio es **compatible** cuando un cliente que ya funcionaba sigue funcionando sin tocar una línea: agregar un campo nuevo a la respuesta, agregar un endpoint, aceptar un parámetro opcional, sumar un valor a un filtro. Es **incompatible** todo lo que altera lo que el cliente ya recibía: borrar o renombrar un campo, cambiar su tipo (de número a texto), cambiar su significado, volver obligatorio un campo que era opcional, cambiar un código de estado o el formato de una fecha. La regla corta: **agregar es barato, quitar es caro**.

¿Por qué no borrar un campo "que ya nadie usa"? Porque no controlas a todos los que lo leen. Hay un frontend que se actualiza cuando quiere, apps móviles que viven meses en teléfonos sin actualizar, integraciones de terceros que no sabes que existen y scripts de alguien que corre cada noche. El error clásico: renombrar `total` a `total_mxn` un martes en la tarde. Tus pruebas pasan; el teléfono de un cliente falla tres días después y nadie relaciona una cosa con la otra.

De ahí el **periodo de convivencia**: `/v1` y `/v2` funcionan a la vez durante semanas o meses. Anuncias la fecha de retiro en un changelog, por correo y —sobre todo— en la respuesta misma, con los headers `Deprecation` y `Sunset`. Mides en los logs cuántas peticiones siguen entrando a `/v1` (m4-a25) y solo lo apagas cuando ese número llega a cero. Noventa días es un mínimo razonable para una API pública.

Y no es solo para terceros: **tu propio frontend es un cliente**. Cuando la app que tú mismo hiciste empieza a mostrar precios vacíos después de un deploy, casi siempre es un cambio que se hizo "directo en producción" sin versión ni aviso.

**Advertencia:** los cambios incompatibles no fallan con alarma. Fallan en silencio del lado de quien te consume: pantallas vacías, cobros mal calculados, integraciones que dejan de sincronizar. Si vas a cambiar o quitar un campo que ya devuelves, trátalo como un `DELETE` sin `WHERE` (m4-b12): primero mides a quién afecta, luego avisas, y solo después apagas.

### Analogía

Es una **obra vial con carril provisional**. No puedes cerrar la carretera para ponerle asfalto nuevo: hay gente que la usa todos los días. Entonces construyes la vialidad nueva al lado (`/v2`), dejas la vieja abierta con sus señalamientos intactos (`/v1`) y pones letreros con fecha: "esta ruta cierra el 31 de marzo, use la nueva". Nadie quita el puente el día que inaugura el otro: lo quita cuando el conteo de autos dice que ya nadie lo cruza. Si lo cierras antes, los que venían por la vieja se estrellan contra las vallas.

### Cómo se ve en la práctica

Así se ve un cambio incompatible hecho bien. En `/v1`, `total` es un número:

```http
GET /v1/pedidos/42

{
  "id": 42,
  "cliente": "Ana",
  "total": 350
}
```

En `/v2` el negocio ya necesita moneda y datos de contacto, así que `total` cambia de forma y `cliente` deja de ser texto:

```http
GET /v2/pedidos/42

{
  "id": 42,
  "cliente": { "nombre": "Ana", "telefono": "555-1234" },
  "total": { "monto": 350, "moneda": "MXN" }
}
```

Ese cambio **rompe** a cualquiera que haga `pedido.total * 1.16`: ahora `total` es un objeto. Por eso vive en otra versión. Cuando anuncias el retiro, lo dices en la respuesta misma:

```http
HTTP/1.1 200 OK
Deprecation: true
Sunset: Wed, 31 Mar 2027 23:59:59 GMT
Link: <https://api.eltornillo.mx/v2/pedidos/42>; rel="successor-version"
```

Mientras tanto, agregar `telefono` como campo nuevo dentro de `/v1` habría sido compatible y no obligaba a versionar nada. La versión se paga solo cuando el cambio de verdad rompe; usarla para cada detalle la vuelve ruido.

### Díselo a la IA

> "Voy a cambiar mi API así: [describe el cambio]. Dime si es compatible o incompatible con los clientes actuales y por qué. Si es incompatible, propón el plan completo: qué va en /v2, qué se queda en /v1, cuánto dura la convivencia, qué headers Deprecation y Sunset pongo con fecha concreta, qué texto va en el changelog y qué debo medir en los logs para saber cuándo apagar /v1 con seguridad."

Pídele también que te liste qué clientes podrían romperse: el frontend, una app móvil, un webhook (m4-a22) o una hoja de cálculo conectada. Ahí aparecen los que se te olvidan.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estos cambios es incompatible con tus clientes actuales?
   - a) Agregar un campo nuevo a la respuesta
   - b) Renombrar el campo total por total_mxn ✔
   - c) Agregar un endpoint nuevo
   - d) Agregar un parámetro de query opcional

**2. [relacionar]** Une cada elemento con su pareja:
   - Agregar un campo nuevo al response ↔ Compatible
   - Borrar un campo que ya devolvías ↔ Incompatible
   - Agregar un endpoint nuevo ↔ Compatible
   - Cambiar total de número a texto ↔ Incompatible

**3. [verdadero/falso]** "Puedes apagar /v1 el mismo día que publicas /v2 si lo avisaste en redes sociales."
   - Respuesta: FALSO — El aviso no alcanza a quien no lo lee. La convivencia existe para migrar y medir: sin headers Sunset, sin changelog y sin revisar los logs, apagar /v1 rompe a quien todavía lo usa (m4-a25).

**4. [completar]** "La versión viaja en la ____ de la ruta, el aviso se manda en el header ____ y la fecha de apagado en ____."
   - Banco: `URL` · `Deprecation` · `Sunset` · `CORS`
   - Respuesta: URL / Deprecation / Sunset

**5. [ordenar]** Ordena los pasos para retirar una versión sin romperle a nadie:
   - Orden correcto: Publicar /v2 con el cambio → Anunciar la fecha con los headers Deprecation y Sunset → Medir cuántos clientes siguen llamando /v1 → Migrar o avisar a los que quedan → Apagar /v1 cuando el tráfico sea cero

---

## A29 — Seguridad: las 5 fallas que más dinero cuestan

### Concepto

Hay cinco fallas que se repiten en casi todas las historias de datos filtrados, cobros duplicados y noches sin dormir. No son ataques sofisticados de película: son descuidos de configuración con consecuencias caras. Estas son, en orden de frecuencia:

- **Secretos en el código o en el repositorio.** Una llave de servicio pegada en el frontend, en un commit o en un `.env` que sí se subió. En cuanto toca un repo público, bots lo escanean y en minutos alguien ya la está usando (m4-a19).
- **RLS o permisos mal configurados.** La base con RLS apagado o con una política `using (true)`: con la llave pública del frontend cualquiera lee toda la tabla, con teléfonos y direcciones incluidos (m4-b22).
- **Inyección SQL.** Si pegas lo que escribe el usuario dentro de la consulta, ese usuario puede escribir instrucciones. Un `' OR '1'='1` en un login mal hecho devuelve la tabla completa (m4-a21).
- **Autenticación débil.** Contraseñas sin hash, login sin límite de intentos, tokens que nunca expiran, una sola contraseña compartida por todo el equipo (m4-a16, m4-a17, m4-a20).
- **Falta de respaldos.** No es un hack: es un `DELETE` sin `WHERE` (m4-b12), una migración que sale mal (m4-b19) o un proveedor que se cae. Sin copia, el incidente se vuelve permanente (m4-b20).

Cuatro de las cinco son **configuración**, no código: se detectan revisando, no programando. Y las cinco comparten el mismo patrón: el sistema hizo exactamente lo que le pediste, pero le pediste algo abierto.

**Advertencia:** estas fallas no se prueban en producción. Para saber si tu tabla está expuesta, abre una ventana de incógnito con la llave pública (`anon`) y consulta: si ves filas de otros usuarios, ya está abierta y cada minuto cuenta. Si una llave se filtró, **no basta borrar el archivo ni el commit**: hay que **rotarla** —revocarla y emitir otra—, porque el historial de Git conserva el commit anterior y los bots ya se llevaron una copia. Y antes de "arreglar" nada en la base, confirma que el respaldo del día existe (m4-b20).

¿Por qué te importa si tú diriges y no programas? Porque estas cinco preguntas son las que te va a hacer un cliente grande, un auditor o tu aseguradora antes de firmar. Y porque ninguna IA te va a decir "oye, tu RLS está apagado" si tú no se lo preguntas.

### Analogía

Es la **ronda de cierre de la casa antes de un viaje largo**. Revisas cinco puntos: la llave escondida en la maceta (el secreto en el repo), la ventana del baño que nadie cerró con pasador (RLS apagado), la libreta de visitas donde cualquiera escribe su nombre y, si agrega "y de paso abre la bodega", el guardia obediente lo hace (inyección), la cerradura de perilla que se abre con una tarjeta de plástico (autenticación débil) y la carpeta de escrituras y fotos que no tiene copia en ningún lado (respaldos). Los ladrones no buscan la puerta más difícil: prueban las cinco fáciles. Y el guardia no es tonto; está haciendo caso de una instrucción que nadie separó del dato.

### Cómo se ve en la práctica

La falla número tres, en su forma más común:

```js
// VULNERABLE: el texto del usuario se pega dentro de la consulta
const sql = "SELECT * FROM clientes WHERE email = '" + email + "'";
await db.query(sql);
```

Si `email` llega como `' OR '1'='1`, la consulta final queda así:

```sql
SELECT * FROM clientes WHERE email = '' OR '1'='1'
```

Y `'1'='1'` siempre es verdad: devuelve **todos** los clientes. La versión segura separa el dato de la instrucción:

```js
// SEGURO: la consulta es fija y el dato viaja aparte
const sql = "SELECT * FROM clientes WHERE email = $1";
await db.query(sql, [email]);
```

Con parámetros, `' OR '1'='1` se busca como texto literal y no encuentra a nadie. La misma idea aplica en Supabase: no armes filtros concatenando strings (m4-a21).

La falla número dos se ve así en SQL:

```sql
alter table pedidos enable row level security;

-- Sin políticas, nadie ve nada.
-- Con esta política, todos ven todo:
create policy "todos_ven_todo" on pedidos
  for select using (true);
```

Encender RLS no es suficiente: hay que escribir la política que compara la fila con el usuario. Y la número uno, en su versión más silenciosa:

```js
// Mal: la llave de servicio dentro del código
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6...";
```

Bien: la llave vive en una variable de entorno del servidor, el archivo `.env` está en `.gitignore` y el frontend nunca la ve (m4-a19).

### Díselo a la IA

> "Audita mi proyecto contra estas cinco fallas: secretos en el código o en el historial de Git, RLS o permisos mal configurados, inyección SQL en mis consultas, autenticación débil y respaldos inexistentes. Para cada una dime: si estoy expuesto, la evidencia exacta (archivo, línea o consulta), qué tan grave es en una escala de 1 a 5, el arreglo paso a paso y cómo compruebo que quedó cerrada. No me muestres llaves completas: nómbralas por ubicación. Si algo requiere tocar producción, dime primero qué respaldo debo verificar."

Ese prompt te da un informe de auditoría, no un susto. Y la última frase evita que el arreglo se convierta en el segundo incidente.

### Ejercicios

**1. [opción múltiple]** Tu tabla pedidos tiene RLS apagado y el frontend usa la llave pública anon. ¿Qué puede hacer alguien con esa llave?
   - a) Nada: la llave anon no tiene permisos por sí sola
   - b) Leer y posiblemente modificar todas las filas de la tabla ✔
   - c) Solo ver la estructura de la tabla, no los datos
   - d) Solo entrar si adivina la contraseña del administrador

**2. [relacionar]** Une cada elemento con su pareja:
   - Llave de servicio dentro de app.js ↔ Secreto filtrado
   - RLS apagado con llave anon ↔ Tabla completa expuesta
   - "SELECT ... WHERE id = " + id ↔ Inyección SQL
   - Login sin límite de intentos ↔ Autenticación débil
   - Nunca probar una restauración ↔ Respaldo que no sirve

**3. [verdadero/falso]** "Si borras el commit donde subiste una llave secreta, la llave queda segura."
   - Respuesta: FALSO — El historial de Git conserva el commit y los bots ya copiaron la llave. La única salida es rotarla: revocarla y emitir otra (m4-a19).

**4. [completar]** "Las consultas ____ mantienen la instrucción fija y mandan el dato aparte, que es la defensa contra la ____ SQL."
   - Banco: `parametrizadas` · `inyección` · `concatenadas` · `réplica`
   - Respuesta: parametrizadas / inyección

**5. [qué hace]** Si email llega con el valor ' OR '1'='1, ¿qué devuelve la consulta?

```js
const sql = "SELECT * FROM clientes WHERE email = '" + email + "'";
await db.query(sql);
```

   - a) Ningún cliente
   - b) Todos los clientes de la tabla ✔
   - c) Un error de sintaxis
   - d) Solo el cliente cuyo email es literalmente ' OR '1'='1

---

## A30 — Repaso integrador del servidor (mega-quiz jugable)

### Concepto

Treinta lecciones después, BCK-401 ya no es una lista de temas: es un recorrido. Este repaso te lo devuelve en un solo mapa —**reconocer, no memorizar**:

- **La conversación** — HTTP como diálogo, métodos, códigos, headers y body (m4-a3 a m4-a7). Una petición es una frase con verbo, destinatario y contenido.
- **El diseño** — API, REST, endpoints y parámetros (m4-a8 a m4-a11), más el versionado (m4-a28): qué ofreces y con qué reglas.
- **La puerta** — autenticación, tokens, autorización, contraseñas y sesiones (m4-a13 a m4-a17): quién eres y qué puedes hacer.
- **El blindaje** — CORS, secretos, rate limiting, validación e inyección (m4-a18 a m4-a21, m4-a29): lo que evita que el sistema haga lo que no debe.
- **La operación** — webhooks, serverless, Express, logs, errores y documentación (m4-a22 a m4-a27): cómo se mantiene vivo y entendible.
- **Los datos** — RLS y respaldos (m4-b22, m4-b20): la última línea, donde un error cuesta todo.

Cada bloque responde una pregunta distinta sobre el mismo viaje: ¿qué entra? (HTTP), ¿a dónde llega? (endpoints), ¿quién puede entrar? (autenticación), ¿qué se le permite hacer? (autorización y RLS), ¿qué pasa cuando falla? (errores y logs), ¿cómo lo entiende el siguiente? (documentación y versiones) y ¿qué pasa si se pierde? (respaldos).

El mega-quiz de abajo no te pide definir términos. Te pone situaciones: un `401` intermitente, un pedido duplicado, un campo que desapareció, una consulta que tarda. Diagnosticar es la habilidad real del módulo: la IA escribe el arreglo; tú decides qué arreglar y cómo comprobar que quedó bien.

Si resuelves los 8 ejercicios sin ayuda, ya sabes dirigir un backend. No memorizaste Express: sabes leer el sistema y hacer las preguntas correctas.

### Analogía

Es la **red de agua de una ciudad** en un día de mantenimiento. La planta potabilizadora es el servidor; cada toma con medidor es un endpoint; el contrato del medidor es la autenticación (solo pasa agua a quien tiene cuenta) y el reglamento de uso es la autorización. El filtro de la toma es la validación: atrapa lo que no debe pasar. El regulador de presión es el rate limiting: sin él, alguien abre diez llaves y deja sin agua a la colonia entera. Las cámaras y el libro de bitácora son los logs; el plano de la red es la documentación; cambiar una tubería sin dejar sin agua al barrio es el versionado; el rondín de fugas es la auditoría de las cinco fallas; y la cisterna de reserva son los respaldos, cuyo valor solo descubres el día que se corta la línea principal. Cuando hay una fuga, el buen ingeniero no abre más la llave: cierra la sección, mide la presión y consulta el plano.

### Cómo se ve en la práctica

Un caso completo, del tipo que llega por WhatsApp un viernes a las 6 de la tarde:

> "Se duplicaron 12 pedidos ayer, algunos clientes ven pedidos que no son suyos, y tres personas dicen que las saca la sesión cada rato."

Tres síntomas, tres lugares distintos. El diagnóstico va del más grave al más molesto:

- **Primero, los datos ajenos.** Si alguien ve pedidos de otro, es permisos, no suerte. Revisa RLS (m4-b22) y que el endpoint filtre por el usuario del token, no por un `cliente_id` que llega en la URL (m4-a15). Prueba con dos cuentas distintas, no con una.
- **Luego, los duplicados.** Casi siempre es un reintento: el celular perdió la respuesta, volvió a mandar el `POST` y el servidor lo trató como nuevo. Se arregla con idempotencia: el cliente manda una `Idempotency-Key` y el servidor no crea dos veces el mismo pedido (m4-a4, m4-a10).
- **Al final, las sesiones caídas.** Un token que expira en 15 minutos sin refresh, un `exp` mal calculado o varios servidores con secretos distintos (m4-a17, m4-a19).
- **Antes de tocar nada:** confirma el respaldo del día (m4-b20). Un diagnóstico que borra evidencia no sirve.

Los logs te dicen cuál es cuál:

```js
2026-11-20T18:04:12Z POST /v1/pedidos 201 312ms cliente:88
2026-11-20T18:04:13Z POST /v1/pedidos 201 289ms cliente:88
2026-11-20T18:05:41Z GET  /v1/pedidos 401  12ms token:expirado
2026-11-20T18:05:42Z GET  /v1/pedidos 401  10ms token:expirado
```

Dos `POST` con un segundo de diferencia: eso no es doble clic, es reintento. Los `401` en ráfaga son el token venciendo sin refresh. Y no aparece ni un `403`: el problema de datos ajenos no está en la autenticación, está en los permisos; por eso la revisión empieza en RLS y no en el login (m4-a5). Para medir el alcance: `select cliente_id, count(*) from pedidos group by cliente_id order by count desc limit 5;` — si un cliente acumula 12 pedidos en la misma hora, ahí está el patrón (m4-b15).

### Díselo a la IA

> "Actúa como examinador de mi módulo de backend (BCK-401). Hazme un examen de 8 preguntas sobre HTTP, APIs, autenticación, autorización, RLS, rate limiting, validación, errores, documentación, versionado y respaldos. Una a la vez, sin darme opciones: yo respondo libre y tú no corriges hasta el final. Al terminar, dame una tabla con: pregunta, si acerté, qué me faltó y a qué lección exacta de BCK-401 debo volver (por ejemplo m4-a15 o m4-b22). Empieza por la pregunta 1."

La última columna es la que vale: no un porcentaje, una ruta de regreso a la lección que te falta.

### Ejercicios

**1. [opción múltiple]** Un celular pierde la respuesta y reintenta el POST. Se crearon dos pedidos. ¿Qué falta?
   - a) Un código 404 en la respuesta
   - b) Idempotencia: que el mismo POST repetido no cree dos recursos ✔
   - c) El header CORS
   - d) Un Content-Type distinto

**2. [completar]** "La ____ prueba quién eres y la ____ decide qué puedes ver; en Supabase, esa segunda capa se implementa con ____."
   - Banco: `autenticación` · `autorización` · `RLS` · `CORS`
   - Respuesta: autenticación / autorización / RLS

**3. [relacionar]** Une cada elemento con su pareja:
   - 401 ↔ No demostró quién es
   - 403 ↔ Sí es quien dice, pero no puede
   - RLS ↔ Permisos fila por fila en la base
   - OpenAPI ↔ El contrato legible de la API
   - Sunset ↔ La fecha en que una versión deja de existir

**4. [verdadero/falso]** "Un 403 y un 401 significan lo mismo: el usuario no está registrado."
   - Respuesta: FALSO — 401 es "no sé quién eres" (falta o falló la credencial); 403 es "sé quién eres y no tienes permiso". Confundirlos manda a depurar el login cuando el problema es de permisos (m4-a5, m4-a15).

**5. [ordenar]** Ordena el viaje de una petición autenticada que crea un pedido:
   - Orden correcto: El navegador manda la petición con el token en Authorization → El servidor valida el token y obtiene el id del usuario → El servidor revisa si ese usuario tiene permiso para la acción → Se valida el body contra el esquema esperado → La base aplica RLS y devuelve solo las filas permitidas → El servidor responde 201 con el recurso creado

**6. [qué hace]** ¿Qué protege realmente que un usuario no vea pedidos ajenos?

```js
const { data, error } = await supabase
  .from("pedidos")
  .select("*")
  .eq("cliente_id", user.id);
```

   - a) Nada: el .eq solo filtra la consulta que tú escribiste
   - b) El .eq y, sobre todo, una política de RLS que compare cliente_id con auth.uid() ✔
   - c) El token JWT, porque viaja cifrado
   - d) La llave anon, porque es privada

**7. [opción múltiple]** Encuentras la llave service_role en un repositorio público. ¿Qué haces primero?
   - a) Borrar el archivo y seguir trabajando
   - b) Rotar la llave (revocarla y emitir otra) y revisar qué se accedió ✔
   - c) Cambiarle el nombre al archivo
   - d) Nada: si el repo es público, la llave ya es pública pero no sirve

**8. [opción múltiple]** Necesitas que total pase de número a objeto {monto, moneda}. ¿Qué haces?
   - a) Cambiarlo en /v1 y avisar por correo
   - b) Publicar /v2 con el nuevo formato y mantener /v1 con fecha de apagado ✔
   - c) Agregar el campo moneda y listo
   - d) Borrar total y que cada cliente lo calcule

---
