# EXAMEN DEL MÓDULO 4 — El motor por dentro

**40 preguntas · Teoría y práctica · Aprobatorio: 70/100**
**Cada pregunta vale 2.5 puntos.**

> Notación: `✔` = respuesta correcta · `👤` = respuesta del alumno.
> Cuando ambas marcas están en la misma opción, el alumno acertó.

**Resultado de rayfg96@gmail.com — presentado el 14 de noviembre de 2026: 38/40 aciertos = 95/100 · APROBADO**

---

## BCK-401 — Del navegador al servidor (14 preguntas)

**1.** En el viaje de una petición, ¿quién consulta realmente la base de datos?
- a) El navegador del usuario
- b) El servidor, después de recibir y validar la petición ✔ 👤
- c) El CSS de la página
- d) El DNS

**2.** ¿Cuál método HTTP se usa para **reemplazar por completo** un recurso existente?
- a) `GET`
- b) `PATCH`
- c) `PUT` ✔ 👤
- d) `POST`

**3.** **[qué hace]** Esta petición:

```
DELETE /api/v1/pedidos/42
Authorization: Bearer <token>
```

- a) Borra el pedido 42, si el token tiene permiso ✔ 👤
- b) Borra todos los pedidos del usuario
- c) Marca el pedido 42 como cancelado sin borrarlo
- d) Devuelve el pedido 42 para eliminarlo desde el navegador

**4.** Un usuario ya inició sesión, pero intenta abrir el pedido de otro cliente y el servidor responde **403**. ¿Qué significa?
- a) Que no mandó credenciales: falta autenticarse
- b) Que está autenticado, pero no tiene permiso para ese recurso ✔ 👤
- c) Que el servidor se cayó
- d) Que el pedido no existe

**5.** **[qué hace]** El header `Content-Type: application/json` en una petición. ¿Qué indica?
- a) Que la respuesta debe ser una imagen
- b) Que el cuerpo de la petición está escrito en formato JSON ✔ 👤
- c) Que la petición no lleva cuerpo
- d) Que el servidor debe comprimir la respuesta

**6.** En `GET /api/v1/pedidos/42?estado=pendiente`, ¿qué parte es la **query string**?
- a) `/api/v1/pedidos`
- b) `/42`
- c) `?estado=pendiente` ✔ 👤
- d) `GET`

**7.** El servidor crea un recurso nuevo y responde **201 Created**. ¿Qué diferencia tiene con un 200?
- a) Ninguna: son sinónimos
- b) El 201 confirma que se creó un recurso nuevo y suele incluir la ubicación ✔ 👤
- c) El 201 indica un error del cliente
- d) El 201 significa que la petición quedó en cola

**8.** ¿Qué diferencia hay entre `PUT` y `PATCH`?
- a) `PUT` reemplaza el recurso completo; `PATCH` cambia solo los campos enviados ✔ 👤
- b) `PUT` crea y `PATCH` borra
- c) Son idénticos, solo cambia el nombre
- d) `PATCH` solo funciona con archivos

**9.** **[error]** En la consola del navegador aparece:

```
Access to fetch at 'https://api.miescuela.com/pedidos' from origin
'https://mitaquería.com' has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

¿Cuál es la causa y dónde se arregla?
- a) El navegador tiene un virus: hay que reinstalarlo
- b) Falta JavaScript en el frontend: hay que agregar un `fetch` distinto
- c) El servidor de la API debe permitir el origen `https://mitaquería.com`; se arregla en el servidor ✔ 👤
- d) La base de datos está pausada

**10.** ¿Por qué el archivo `.env` **nunca** se sube al repositorio?
- a) Porque ocupa demasiado espacio
- b) Porque contiene llaves y contraseñas que darían acceso a tu sistema ✔ 👤
- c) Porque Git no acepta archivos con punto
- d) Porque ralentiza el `build`

**11.** Una API responde **429 Too Many Requests**. ¿Qué está pasando?
- a) El recurso no existe
- b) Superaste el límite de peticiones permitido en un periodo ✔ 👤
- c) El token expiró
- d) El servidor está en mantenimiento

**12.** Un cliente envía el formulario de pedido con `cantidad: -5` y `precio: 0`. ¿Dónde debe rechazarse eso?
- a) Solo en el HTML, con el atributo `required`
- b) En el servidor, antes de escribir en la base de datos ✔ 👤
- c) En el CSS, con una regla de validación
- d) En la base de datos, después de guardarlo

**13.** ¿Qué es un **webhook**?
- a) Un aviso que tu servidor manda a la base de datos cada hora
- b) Una petición que un servicio externo hace a **tu** URL cuando ocurre un evento ✔ 👤
- c) Un tipo de cookie de sesión
- d) Una función que se ejecuta al cargar la página

**14.** ¿Qué contiene realmente un **JWT**?
- a) La identidad y los permisos del usuario, **firmados** para que no se alteren, pero legibles por cualquiera que tenga el token ✔
- b) La contraseña del usuario, cifrada con una llave privada del servidor
- c) Una sesión guardada en la memoria del servidor
- d) Los datos cifrados de extremo a extremo, ilegibles sin la llave privada
- 👤 *(Falló: eligió "d". Un JWT está firmado, no cifrado: cualquiera puede decodificar su contenido. La firma solo garantiza que nadie lo modificó, y por eso nunca se guarda información sensible dentro del token.)*

## DAT-402 — Bases de datos (14 preguntas)

**15.** ¿Para qué sirve una **llave primaria**?
- a) Para ordenar las filas alfabéticamente
- b) Para identificar de forma única cada fila de la tabla ✔ 👤
- c) Para conectar la base con el frontend
- d) Para cifrar los datos de la tabla

**16.** **[qué hace]** Esta consulta:

```sql
SELECT nombre, precio
FROM platillos
WHERE precio > 100
ORDER BY precio DESC;
```

- a) Devuelve nombre y precio de los platillos que cuestan más de 100, del más caro al más barato ✔ 👤
- b) Devuelve todos los platillos ordenados por nombre
- c) Suma los precios de los platillos
- d) Modifica el precio de los platillos mayores a 100

**17.** **[qué hace]** `SELECT * FROM pedidos WHERE estado = 'pendiente';`
- a) Devuelve todas las columnas de los pedidos pendientes ✔ 👤
- b) Devuelve solo la columna `estado`
- c) Cambia el estado de los pedidos a pendiente
- d) Borra los pedidos pendientes

**18.** **[qué hace]** Esta consulta:

```sql
SELECT c.nombre, COUNT(p.id) AS pedidos
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.nombre
ORDER BY pedidos DESC;
```

- a) Devuelve cada cliente con el número de pedidos, incluidos los que tienen cero ✔ 👤
- b) Devuelve solo los clientes que tienen al menos un pedido
- c) Devuelve los pedidos sin cliente
- d) Suma el total en pesos de cada pedido

**19.** ¿Qué devuelve `LIMIT 10 OFFSET 20`?
- a) Las primeras 10 filas
- b) Las filas 21 a 30 ✔ 👤
- c) Las filas 10 a 20
- d) 10 filas aleatorias

**20.** **[qué hace]** Esta sentencia:

```sql
UPDATE platillos SET precio = 0;
```

- a) Pone en cero el precio de **todos** los platillos de la tabla ✔ 👤
- b) Pone en cero el primer platillo
- c) Falla porque falta `WHERE`
- d) Pone en cero solo los platillos sin precio

**21.** **[qué hace]** `DELETE FROM pedidos WHERE id = 42;`
- a) Borra el pedido 42 de la tabla ✔ 👤
- b) Borra toda la tabla de pedidos
- c) Marca el pedido 42 como eliminado sin borrarlo
- d) Borra el pedido más reciente

**22.** ¿Qué impide una **llave foránea** (`FOREIGN KEY`)?
- a) Que se repita la llave primaria
- b) Que exista un pedido que apunte a un cliente inexistente ✔ 👤
- c) Que una tabla tenga más de mil filas
- d) Que se consulte la tabla sin índice

**23.** ¿Qué hace un **índice** sobre la columna `correo`?
- a) Acelera las búsquedas por esa columna, a cambio de escrituras un poco más lentas y espacio extra ✔ 👤
- b) Cifra los correos automáticamente
- c) Evita que se repitan correos
- d) Borra los correos duplicados

**24.** ¿Qué problema resuelve la **normalización**?
- a) Que el sitio cargue más rápido
- b) Evitar datos duplicados e inconsistentes repartidos en varias filas ✔ 👤
- c) Comprimir los archivos de la base
- d) Traducir los datos a otro idioma

**25.** Dentro de una **transacción**, después del `BEGIN` falla el segundo paso. ¿Qué ocurre con el primero?
- a) Se queda guardado para siempre
- b) Se revierte con `ROLLBACK`: o se guardan los dos pasos o ninguno ✔ 👤
- c) Se guarda a medias
- d) Se copia a otra tabla automáticamente

**26.** En Supabase, una tabla tiene **RLS activado** pero **ninguna política** creada. ¿Qué pasa cuando el frontend intenta leerla con la `anon key`?
- a) Devuelve todas las filas
- b) Devuelve cero filas: sin política que lo permita, nadie pasa ✔ 👤
- c) Borra la tabla
- d) Devuelve un error 500 del servidor

**27.** **[error]** Tu app recibe:

```json
{ "code": "42501", "message": "permission denied for table pedidos" }
```

¿Cuál es la causa más probable?
- a) La tabla `pedidos` no existe
- b) La política de RLS no permite esa operación para el usuario actual ✔ 👤
- c) El navegador bloqueó la petición por CORS
- d) La contraseña de la base de datos expiró

**28.** Tienes un catálogo con relaciones claras (clientes, pedidos, platillos) y necesitas reportes que crucen tablas. ¿Qué conviene?
- a) Una hoja de cálculo compartida
- b) Una base **relacional** con tablas y llaves foráneas ✔ 👤
- c) Un archivo JSON por pedido
- d) Un NoSQL sin estructura, para "ir viendo"

## PRA-403 — Construye con IA IV (12 preguntas)

**29.** Al conectar tu landing a Supabase, ¿qué **debe** quedarse en el servidor y no en el navegador?
- a) Las consultas `SELECT` públicas del menú
- b) La `service_role key`, que se salta RLS y da acceso total a la base ✔ ✔
- c) El HTML y el CSS de la página
- d) El logo y las fotos de la galería
- 👤 *(Falló: eligió "a". Las consultas públicas del menú sí pueden ir en el navegador: eso es justo lo que permite RLS. La que jamás puede viajar al cliente es la `service_role key`: quien la tenga puede leer y borrar toda la base saltándose los permisos.)*

**30.** ¿Cuál es el primer paso para conectar el sitio de "Tacos El Volcán" a una base real?
- a) Crear el proyecto en Supabase y obtener la URL y la `anon key` ✔ 👤
- b) Comprar un servidor físico
- c) Escribir todo el CSS del panel de administración
- d) Instalar MySQL en la computadora del taquero

**31.** Le pides a la IA las tablas de tu negocio. ¿Qué debes revisar antes de aceptarlas?
- a) Solo que los nombres estén en español
- b) Tipos de dato, llave primaria y relaciones entre tablas ✔ 👤
- c) Que el SQL tenga comentarios
- d) Que use mayúsculas

**32.** **[qué hace]** Este código en tu página:

```js
await supabase.from("pedidos").insert({
  cliente_id: cliente.id,
  platillo: "Volcán especial",
  cantidad: 2
});
```

- a) Inserta un pedido nuevo en la tabla `pedidos` ✔ 👤
- b) Lee todos los pedidos de la tabla
- c) Actualiza un pedido existente
- d) Borra el pedido del cliente

**33.** Activaste RLS en `pedidos`. ¿Cómo compruebas que de verdad protege?
- a) Leyendo el código y confiando
- b) Consultando con la sesión de dos usuarios distintos y verificando que cada uno solo ve lo suyo ✔ 👤
- c) Apagando RLS para comparar resultados
- d) Reiniciando el proyecto de Supabase

**34.** **[qué hace]** `await supabase.auth.signInWithPassword({ email, password })`. ¿Qué hace?
- a) Crea un usuario nuevo
- b) Inicia sesión con correo y contraseña y devuelve la sesión ✔ 👤
- c) Cambia la contraseña del usuario
- d) Borra la cuenta

**35.** Quieres que la página de "pedidos del día" solo la vean empleados registrados. ¿Qué hace falta?
- a) Ocultar el enlace con CSS
- b) Verificar la sesión en la interfaz **y** tener una política de RLS que solo permita a los empleados ✔ 👤
- c) Poner la contraseña en el HTML
- d) Cambiar el color del botón

**36.** Vas a subir las fotos de los platillos. ¿Qué configuración de Storage es la correcta?
- a) Un bucket público para las fotos del menú y otro privado para los comprobantes de pago ✔ 👤
- b) Todo público: las fotos no son sensibles
- c) Todo privado, incluso el menú
- d) Guardar las fotos como texto en la tabla `platillos`

**37.** ¿Por qué la llave de OpenAI **no** puede viajar en el JavaScript del navegador?
- a) Porque el navegador no entiende esa llave
- b) Porque cualquiera puede leerla en DevTools y gastar tu crédito o robar tu cuenta ✔ 👤
- c) Porque las llaves solo funcionan en Python
- d) Porque pesa demasiado

**38.** El panel de administración debe permitir borrar reseñas. ¿Cómo se protege?
- a) Con una confirmación `alert()` en el navegador
- b) Con un rol de administrador verificado en el servidor y RLS que solo le permita borrar a él ✔ 👤
- c) Con una contraseña escrita en el código
- d) Ocultando el botón a los clientes

**39.** ¿Cuándo puedes considerar que tu respaldo sirve?
- a) Cuando lo programaste y aparece en la lista
- b) Cuando lo **restauraste** en un entorno de prueba y los datos volvieron completos ✔ 👤
- c) Cuando pesa más de 100 MB
- d) Cuando lo subiste al mismo servidor de la base

**40.** **[qué hace]** Esta consulta del buscador:

```sql
SELECT nombre, precio FROM platillos
WHERE nombre ILIKE '%volcán%';
```

- a) Busca platillos cuyo nombre contenga "volcán", sin distinguir mayúsculas ✔ 👤
- b) Busca el platillo llamado exactamente "volcán"
- c) Ordena los platillos por nombre
- d) Borra los platillos que contengan "volcán"

---

## Resultado

| Bloque | Aciertos |
|---|---|
| BCK-401 — Del navegador al servidor | 13 / 14 |
| DAT-402 — Bases de datos | 14 / 14 |
| PRA-403 — Construye con IA IV | 11 / 12 |
| **Total** | **38 / 40** |

**Calificación: 95 / 100 — APROBADO**

**Preguntas falladas:** 14 (qué contiene un JWT) y 29 (qué debe quedarse en el servidor).

**Observación del sistema:** bloque de datos perfecto —SQL, llaves, transacciones y RLS quedaron firmes—. Las dos fallas son del mismo tipo: qué información puede ver el cliente. En la 14 confundió *firmado* con *cifrado* (un JWT se puede leer; la firma solo impide alterarlo), y en la 29 subestimó la `service_role key`, que se salta todos los permisos. Antes de publicar el proyecto final, repasa A14 y C18, y verifica en DevTools que ninguna llave sensible viaje al navegador. Progresión respecto a los módulos anteriores: 88 → 93 → 90 → 95.
