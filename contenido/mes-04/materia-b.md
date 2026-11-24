# MES 4 · MATERIA B — Bases de datos
## Lecciones B1–B30 (Mes 4)

> Formato de ejercicios: `[opción múltiple]`, `[completar]` (con banco de palabras), `[relacionar]`, `[verdadero/falso]`, `[ordenar]`, `[qué hace]`. La respuesta correcta va marcada con ✔ o indicada al final del ejercicio.

---

## B1 — ¿Qué es una base de datos? (y por qué no es un Excel grande)

### Concepto

Una **base de datos** es un programa que guarda datos de forma ordenada y responde preguntas sobre ellos. La diferencia con un archivo no es el tamaño: es que una base de datos es un **servicio**. Vive en una computadora —tu laptop mientras desarrollas, un servidor en producción— y atiende a quien se conecte. Un Excel es un archivo que se abre; una base de datos es un motor que escucha.

Las que vas a oír todo el tiempo: **PostgreSQL** (la que usaremos: gratis, de código abierto y el estándar de la industria), **MySQL**, **SQLite** (una base entera dentro de un archivo, para apps pequeñas) y las comerciales como SQL Server u Oracle. Todas hablan SQL (m1-b5) y todas resuelven los mismos cuatro problemas:

- **Persistencia.** El dato sobrevive a que cierres la laptop, se vaya la luz o se caiga el programa. Se escribe a disco y se puede respaldar.
- **Concurrencia.** Cincuenta personas leen y escriben al mismo tiempo sin pisarse. Cada operación queda ordenada; no existe “la última versión del archivo”.
- **Integridad.** La base rechaza datos imposibles: un pedido sin cliente, un total negativo, dos clientes con el mismo correo. Las reglas se cumplen aunque quien captura tenga prisa.
- **Consultas.** Encuentra un pedido entre doscientos mil en milisegundos, sin cargar los doscientos mil.

El ejemplo que lo aclara todo: 50 empleados cobrando a la vez. En un Excel sobre una carpeta compartida, alguien abre, otro abre, los dos escriben y al guardar gana el último. El trabajo del primero desaparece sin aviso. Excel en línea comparte celdas, pero sigue sin tener reglas que impidan un total en blanco, ni permisos por fila: todos ven todo, incluidos los costos y los márgenes. La base de datos no arregla eso por llamarse base; lo permite por diseño, con transacciones (m4-b18), llaves foráneas (m4-b8) y permisos.

**Un dato para recordarlo:** el archivo se abre; la base de datos se conecta. Esa sola frase explica por qué un negocio que crece termina mudando sus datos.

Te importa aunque la IA escriba el SQL, porque las decisiones caras no son de sintaxis: dónde vive el dato, quién puede leerlo, qué pasa si dos personas guardan a la vez, qué se respalda y cada cuánto (m4-b20). Eso lo decides tú. La IA lo ejecuta.

### Analogía

Una base de datos es el **archivo de actas del Registro Civil**, no la hoja de cuaderno donde un empleado apunta nombres. En el Registro hay varias ventanillas atendiendo a la vez y nadie se pisa: cada acta tiene folio propio. No se puede emitir un acta sin nombre ni fecha, porque el formato lo impide. Si pides “actas de 1998 del municipio de Puebla”, aparecen en minutos porque hay un índice por año y municipio, no porque alguien lea el libro completo. Y si se incendia la oficina, la copia de la bóveda sigue ahí. La hoja de cuaderno, en cambio, se moja, se pierde, dos empleados escriben encima del otro y para encontrar algo hay que leerla entera.

### Cómo se ve en la práctica

Una base de datos se usa por **conexión**, no con doble clic. Le entregas una cadena de conexión —usuario, contraseña, servidor, puerto y nombre de la base— y desde ahí hablas SQL:

```js
psql "postgresql://volcan:secreto@localhost:5432/tacos_el_volcan"
```

Adentro, la pregunta más simple del negocio se ve así:

```sql
SELECT count(*) AS pedidos_de_hoy
FROM pedidos
WHERE creado_en >= current_date;
```

```js
 pedidos_de_hoy
----------------
            137
(1 row)
```

Fíjate en lo que *no* pasó: la consulta no abrió 137 filas ni las contó a mano. El motor las contó en disco y devolvió un número. Con dos millones de pedidos tarda casi lo mismo, y de eso se encargan los índices (m4-b16).

La concurrencia se entiende mejor con dos terminales abiertas. En la primera:

```sql
BEGIN;
INSERT INTO pedidos (cliente_id, total) VALUES (7, 350.00);
-- todavía sin COMMIT
```

En la segunda, alguien consulta y no ve ese pedido: no está confirmado. Cuando la primera terminal ejecuta `COMMIT`, aparece. Si ejecuta `ROLLBACK`, nunca existió. Eso es exactamente lo que un archivo compartido no puede darte: dos escrituras simultáneas que no se pisan y un “todo o nada” verificable (m4-b18).

**Advertencia:** una base de datos sin respaldo probado no es una base de datos, es una promesa. El respaldo que nunca restauraste no cuenta (m4-b20).

### Díselo a la IA

> "Tengo los pedidos de Tacos El Volcán en un Excel compartido y ya somos cuatro personas capturando a la vez. Antes de escribir código, hazme un diagnóstico: qué problemas concretos tengo hoy por usar un archivo (piensa en dos personas guardando al mismo tiempo, totales que no cuadran y gente viendo costos), y qué gano y qué me cuesta mudarlo a PostgreSQL. Después propónme las tablas y columnas mínimas para platillos, pedidos y clientes, en texto, sin código. Dime también qué información NO debería guardar en la base y por qué."

### Ejercicios

**1. [opción múltiple]** ¿Qué diferencia de fondo separa una base de datos de un Excel compartido?
   - a) La base de datos guarda más filas que Excel
   - b) La base es un servicio que atiende varias conexiones y aplica reglas; el Excel es un archivo que se abre y se guarda ✔
   - c) Excel no puede guardar texto, solo números
   - d) La base de datos no necesita respaldos

**2. [verdadero/falso]** "Si dos personas escriben al mismo tiempo en un Excel compartido, las dos escrituras quedan guardadas y ordenadas."
   - Respuesta: FALSO — al guardar gana la última versión: la escritura de la otra persona se pierde sin aviso. Ordenar y conservar ambas es trabajo de un motor de base de datos.

**3. [relacionar]** Une cada elemento con su pareja:
   - Persistencia ↔ El dato sobrevive a apagones y cierres del programa
   - Concurrencia ↔ Muchas personas leen y escriben a la vez sin pisarse
   - Integridad ↔ La base rechaza datos imposibles según sus reglas
   - Consulta ↔ Encuentra un registro entre miles sin recorrerlos a mano

**4. [completar]** "El dato sobrevive al apagón por la ____; varias personas escriben a la vez sin pisarse gracias a la ____; y las reglas que rechazan un pedido sin cliente son la ____."
   - Banco: `persistencia` · `concurrencia` · `integridad` · `velocidad`
   - Respuesta: persistencia / concurrencia / integridad

**5. [qué hace]** ¿Qué devuelve esta consulta?

```sql
SELECT count(*) AS pedidos_de_hoy
FROM pedidos
WHERE creado_en >= current_date;
```

   - a) La lista completa de pedidos con todos sus datos
   - b) El número de pedidos registrados hoy ✔
   - c) Borra los pedidos anteriores a hoy
   - d) El total en dinero de los pedidos de hoy

---

## B2 — Relacional vs NoSQL: cuándo conviene cada una

### Concepto

Hay dos grandes familias de bases de datos y conviene entenderlas por lo que hacen, no por quién grita más. La **relacional** guarda todo en tablas con columnas fijas y conecta unas tablas con otras mediante llaves: `clientes`, `pedidos`, `platillos`. Es la familia de PostgreSQL, MySQL, SQLite y SQL Server. Nació en los años setenta y sigue siendo el estándar porque las preguntas de un negocio casi siempre cruzan datos: qué cliente compró qué, cuánto se vendió por mes, qué reseñas dejaron quienes pidieron algo.

**NoSQL** no es una tecnología, es una bolsa de familias distintas:

- **Documentos** (MongoDB, Firestore): cada registro es un JSON completo, con su propia forma, y casi siempre se lee entero.
- **Clave-valor** (Redis): guarda un valor bajo un nombre y lo devuelve en microsegundos. Se usa para sesiones y caché, no como archivo principal.
- **Grafos** (Neo4j): para redes de relaciones, tipo “quién conoce a quién”.
- **Columna ancha** (Cassandra): volúmenes enormes, escritura masiva, datos que no se cruzan mucho.

El criterio práctico no es cuál es mejor, sino qué forma tienen tus datos y tus preguntas. Si cada cosa tiene columnas estables y se relaciona con otras cosas (un cliente, un pedido, un platillo), relacional. Si cada registro es un documento que lees completo y cuya forma cambia (una ficha de producto con atributos distintos según la categoría, un evento con carga variable), documentos. Si lo que necesitas es velocidad para releer un valor ya calculado, clave-valor.

El 90% de los negocios pequeños y medianos van relacional, y Tacos El Volcán es el caso típico: hay clientes, platillos, pedidos y reseñas, y todas las preguntas interesantes cruzan tablas. Elegir documentos para un punto de venta con reportes mensuales es escoger a mano la parte difícil.

**Dato que evita discusiones:** NoSQL no significa “sin relaciones”, significa “no solo SQL”. Las relaciones existen igual; lo que cambia es dónde viven y quién las vigila. Hoy los dos mundos se prestan cosas: PostgreSQL guarda y consulta JSON, y MongoDB ya tiene transacciones. La guerra de 2012 terminó; tú llegas a la etapa de convivencia.

### Analogía

Es el **archivero de una escuela** contra el **folder personal de cada alumno**. En el archivero relacional hay tres cajones: alumnos, grupos e inscripciones. La ficha de inscripción dice “alumno 27, grupo 4B” y nada más; si el grupo 4B cambia de aula, corriges una ficha y los cuarenta alumnos lo ven al instante. En el esquema de documentos, cada alumno tiene su folder con todo copiado adentro, incluido el horario y el aula del grupo: entregarle su folder a un maestro es comodísimo, pero cuando el 4B cambia de aula hay que corregir cuarenta folders y el que se quede sin corregir empieza a mentir. Ninguno de los dos archivistas es tonto: uno está optimizado para preguntas que cruzan datos y el otro para entregar un paquete completo.

### Cómo se ve en la práctica

El mismo pedido, modelado en las dos familias. Relacional, con el cliente aparte y el pedido apuntando a él:

```sql
CREATE TABLE clientes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  telefono text
);

CREATE TABLE pedidos (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cliente_id uuid NOT NULL REFERENCES clientes(id),
  total numeric(10,2) NOT NULL,
  creado_en timestamptz NOT NULL DEFAULT now()
);
```

Documento, con todo dentro del mismo registro:

```json
{
  "_id": "ped_8271",
  "cliente": { "nombre": "Ana Ruiz", "telefono": "5512345678" },
  "items": [
    { "platillo": "Taco al pastor", "precio": 22.00, "cantidad": 3 }
  ],
  "total": 66.00
}
```

La diferencia se nota en la pregunta que el dueño hace cada lunes: “¿cuánto vendí por platillo este mes?”. En relacional es un `JOIN` con `GROUP BY` (m4-b13, m4-b15). En documentos hay que recorrer los pedidos y desarmar cada arreglo de items desde la aplicación. Al revés, “muéstrame este pedido completo en la pantalla del repartidor” es un solo documento en NoSQL y un JOIN de tres tablas en relacional. Cada familia hace fácil lo que su forma favorece.

Además, el documento duplica el nombre del cliente en cada pedido. El día que Ana corrija su apellido, habrá que decidir si se corrige solo hacia adelante —y los pedidos viejos mienten— o se reescriben dos mil documentos. En relacional el nombre vive en un solo lugar.

**Advertencia:** no elijas la familia por moda ni porque un tutorial la usa. Cambiar de modelo a medio proyecto cuesta más que haber pensado una tarde: hay que reescribir consultas, migrar datos y volver a probar todo (m4-b19).

### Díselo a la IA

> "Estoy por modelar [describe tu sistema: punto de venta, consultorio, taller]. Antes de recomendarme una base, hazme cinco preguntas sobre mis datos y mis consultas más frecuentes: si las cosas tienen columnas estables, si necesito cruzar información entre entidades y si los registros se leen completos o por partes. Con mis respuestas, dime si conviene relacional o documentos, justifica con dos consultas concretas que yo haría y muestra cómo se ven en cada modelo. Si crees que documentos es la mejor opción, dime qué pierdo en reportes y cómo evito duplicar datos que cambian."

### Ejercicios

**1. [relacionar]** Une cada elemento con su pareja:
   - PostgreSQL ↔ Relacional: tablas y llaves
   - MongoDB ↔ Documentos: un JSON por registro
   - Redis ↔ Clave-valor: caché y sesiones
   - Neo4j ↔ Grafos: redes de relaciones

**2. [opción múltiple]** ¿Cuál es la señal más clara de que te conviene una base relacional?
   - a) Tienes más de mil registros
   - b) Tus datos tienen columnas estables y necesitas cruzar entidades para responder preguntas ✔
   - c) Quieres usar la tecnología más nueva
   - d) Tu aplicación tiene usuarios que inician sesión

**3. [verdadero/falso]** "NoSQL significa que la base de datos no maneja relaciones entre datos."
   - Respuesta: FALSO — significa “no solo SQL”. Las relaciones existen; cambia dónde viven y quién las vigila (el motor o tu aplicación).

**4. [completar]** "En una base relacional, el nombre del cliente vive en ____ lugar; en un modelo de documentos puede quedar ____ dentro de cada pedido."
   - Banco: `un solo` · `copiado` · `ningún` · `encriptado`
   - Respuesta: un solo / copiado

**5. [qué hace]** ¿Qué riesgo tiene este documento cuando Ana corrige su apellido?

```json
{
  "_id": "ped_8271",
  "cliente": { "nombre": "Ana Ruiz", "telefono": "5512345678" },
  "total": 66.00
}
```

   - a) Ninguno: el documento se actualiza solo en todos los pedidos
   - b) El nombre quedó copiado en cada pedido, así que los viejos conservan el dato anterior y contradicen al cliente actual ✔
   - c) El pedido deja de ser válido porque cambió el total
   - d) MongoDB borra el documento automáticamente

---

## B3 — Tablas, filas y columnas: el vocabulario base

### Concepto

Toda base relacional se organiza con tres palabras que vas a usar todos los días. La **tabla** es el conjunto: `platillos`. La **fila** —también llamada **registro**— es una cosa de ese conjunto: el taco al pastor. La **columna** —o **campo**— es un dato de esa cosa: el precio. Donde se cruzan, la **celda**. En inglés: table, row o record, column o field. En los libros viejos verás “tupla” y “atributo”; son los mismos conceptos con corbata.

La cuarta palabra es la que hace la diferencia: el **esquema**. Es la definición previa de la tabla —cómo se llaman sus columnas, qué tipo de dato acepta cada una y qué reglas cumple— y vive en la base, no en tu cabeza. El esquema es el contrato de la tabla (m4-a8), ahora aplicado a los datos y no a la API.

Eso es justo lo que Excel no tiene. En una hoja, cualquier celda acepta cualquier cosa: hoy un precio, mañana la palabra “pendiente”, pasado un espacio en blanco. En una tabla, la columna `precio` es `numeric` y rechaza “trescientos” con un error. La base no es exigente por molestar: es exigente para que dentro de seis meses puedas sumar esa columna sin limpiar basura primero.

Tres reglas de diseño que se aprenden tarde y duelen: una tabla guarda **un solo tipo de cosa** (no mezcles clientes con platillos); cada columna guarda **un dato atómico** (no “nombre y teléfono” en el mismo campo); y nada de columnas numeradas tipo `platillo_1`, `platillo_2`, `platillo_3`. Si necesitas numerarlas, tu modelo pide otra tabla (m4-b6, m4-b7).

Y una celda vacía no es cero ni es texto vacío: en SQL se llama **NULL** y significa “no lo sé” o “no aplica”. La diferencia importa cuando sumas promedios y cuando muestras “sin teléfono” en pantalla.

### Analogía

Una tabla es el **machote de una solicitud de empleo**. La hoja en blanco trae los campos impresos: nombre, fecha de nacimiento, puesto, teléfono. Ese formato impreso es el esquema: define qué existe y en qué orden, antes de que llegue nadie. Cada solicitud llenada es un registro: una persona, una hoja. Si el de Recursos Humanos decide agregar “contacto de emergencia”, no basta con escribirlo en las nuevas: hay que reimprimir el machote y decidir qué poner en ese campo de las cinco mil solicitudes viejas, que no lo traen. Ese trámite de reimprimir es una migración (m4-b19), y es la razón por la que conviene pensar el formato antes de llenar la primera hoja.

### Cómo se ve en la práctica

Así se declara una tabla con su esquema completo:

```sql
CREATE TABLE platillos (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre text NOT NULL,
  precio numeric(10,2) NOT NULL CHECK (precio >= 0),
  disponible boolean NOT NULL DEFAULT true,
  creado_en timestamptz NOT NULL DEFAULT now()
);
```

Léelo como el machote: cinco columnas, cada una con nombre y tipo. `NOT NULL` prohíbe dejar el campo vacío; `CHECK` prohíbe precios negativos; `DEFAULT` llena el valor si no lo mandas. La llave `id` se explica en m4-b5 y los tipos en m4-b4.

Un registro se inserta y se ve así:

```sql
INSERT INTO platillos (nombre, precio) VALUES ('Taco al pastor', 22.00);

SELECT id, nombre, precio, disponible FROM platillos;
```

```js
 id |     nombre      | precio | disponible
----+-----------------+--------+------------
  1 | Taco al pastor  |  22.00 | t
```

Una fila, cinco celdas. Nada más. La gracia es que la fila dos mil tendrá exactamente la misma forma, y por eso una consulta puede sumar la columna `precio` sin sorpresas.

Y así se ve el error de diseño que mencionamos, para reconocerlo de vista:

```sql
-- así no
CREATE TABLE pedidos (
  mesa text,
  platillo1 text,
  platillo2 text,
  platillo3 text
);
```

El cliente que pide cuatro cosas ya no cabe. No puedes preguntar “cuántos tacos se vendieron” sin revisar tres columnas. Y no guardas el precio del momento, así que si mañana sube el taco, los pedidos viejos mienten.

**Advertencia:** nunca reutilices una columna para otra cosa. Si `telefono` empieza a guardar notas del cliente, el día que alguien lance un envío masivo de WhatsApp va a escribir a números que son frases. Renombrar o cambiar una columna con datos encima se hace con migración, no a mano (m4-b19).

### Díselo a la IA

> "Voy a crear la tabla [nombre] en PostgreSQL. Antes de darme el CREATE TABLE, hazme una tabla de tres columnas —columna, tipo y para qué sirve— y dime cuáles deben ser NOT NULL y por qué. Revisa dos cosas: que cada columna guarde un solo dato (si ves 'nombre_completo' o 'direccion', sepáralas) y que no haya columnas numeradas tipo campo_1, campo_2. Si mi diseño tiene una lista de cosas dentro de una fila, dime qué tabla adicional necesito en lugar de repetir columnas."

### Ejercicios

**1. [completar]** "El conjunto de todos los platillos es la ____; cada platillo es una ____; el precio es una ____ de esa fila."
   - Banco: `tabla` · `fila` · `columna` · `celda`
   - Respuesta: tabla / fila / columna

**2. [relacionar]** Une cada elemento con su pareja:
   - Tabla ↔ El conjunto: platillos
   - Fila o registro ↔ Un elemento: el taco al pastor
   - Columna o campo ↔ Un dato: precio
   - Esquema ↔ La definición de columnas, tipos y reglas

**3. [opción múltiple]** ¿Qué ventaja da el esquema frente a una hoja de cálculo?
   - a) Permite más filas
   - b) Impide guardar en una columna un dato que no corresponde a su tipo o regla ✔
   - c) Hace que la tabla se vea más ordenada en pantalla
   - d) Elimina la necesidad de respaldos

**4. [verdadero/falso]** "Una celda vacía y un cero son lo mismo en una base de datos."
   - Respuesta: FALSO — vacío es NULL (“no lo sé” o “no aplica”); cero es un valor conocido. Confundirlos altera promedios y reportes.

**5. [qué hace]** ¿Qué impide la regla <code>CHECK (precio &gt;= 0)</code>?

```sql
CREATE TABLE platillos (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre text NOT NULL,
  precio numeric(10,2) NOT NULL CHECK (precio >= 0)
);
```

   - a) Que se repita el mismo platillo
   - b) Que se guarde un platillo con precio negativo ✔
   - c) Que el precio tenga decimales
   - d) Que se borre la tabla

---

## B4 — Tipos de datos: elegir bien desde el principio

### Concepto

Cada columna declara un **tipo de dato**: qué clase de valor acepta y qué operaciones permite. No es un detalle burocrático; es lo que decide si puedes sumar una columna, si puedes comparar dos fechas o si el total de la caja cuadra al centavo. Los que vas a usar el 90% del tiempo:

- **text** — cualquier cadena: nombres, correos, notas. Sin límite arbitrario de caracteres.
- **integer / bigint** — números enteros: cantidades, existencias, contadores. `bigint` cuando pueden pasar de dos mil millones.
- **numeric(p,s)** (o decimal) — número exacto con decimales: `numeric(10,2)` son diez dígitos totales y dos decimales. Es el tipo del dinero.
- **boolean** — verdadero o falso, nada más: `disponible`, `pagado`, `enviado`.
- **date** y **timestamptz** — una fecha de calendario (un cumpleaños) y un instante con zona horaria (cuándo se hizo el pedido).
- **uuid** — identificador de 128 bits, casi imposible de repetir o adivinar (m4-b5).
- **jsonb** — un documento JSON dentro de una columna. Útil para datos realmente variables; peligroso cuando se usa para no modelar.

La regla que evita el error más caro: **el dinero nunca se guarda en float**. `float` y `double` guardan aproximaciones binarias; 0.1 no existe exacto en binario, igual que un tercio no existe exacto en decimal. Al sumar cientos de totales, el error se acumula, las comparaciones fallan y la caja cierra con centavos fantasma. `numeric` guarda decimales exactos y es más lento por una razón: hace bien el trabajo.

Las fechas tienen su propia trampa. `timestamp` sin zona guarda “las 3 de la tarde” sin decir de dónde; si el servidor está en UTC y el cliente en Monterrey, alguien verá el pedido a otra hora. `timestamptz` guarda el instante absoluto y lo muestra en la zona que pidas: el mismo pedido es 21:00 en CDMX y 03:00 en Madrid, y ambos son verdad. Para cumpleaños usa `date`: nadie cumple años “a las 14:32 UTC”.

¿Y por qué no cambiar el tipo después, cuando ya tengas datos? Porque se puede, pero duele: PostgreSQL reescribe la tabla, la bloquea mientras lo hace y falla si algún valor no se puede convertir. Pasar una columna `text` con “$350.00” a `numeric` no convierte: revienta. Elegir bien desde el principio cuesta cinco minutos; corregirlo en producción cuesta una madrugada (m4-b19).

### Analogía

Elegir el tipo de dato es el trabajo del **sastre**: primero mide, luego corta. Para un disfraz de fiesta basta la talla “M”. Para un traje de boda se toma en centímetros: 42 de pecho, 103 de manga, y se anota el número, no “más o menos mediano”. El float es la talla M: se acerca, nunca queda exacta, y si coses cuarenta trajes “a ojo” los errores se acumulan hasta que en el último la chaqueta no cierra. El numeric es la cinta métrica en centímetros. Y cambiar la tela después no es descoser un rato: es desarmar el traje con el cliente ya adentro.

### Cómo se ve en la práctica

Una tabla de pedidos con los tipos en su lugar:

```sql
CREATE TABLE pedidos (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cliente_id uuid NOT NULL,
  total numeric(10,2) NOT NULL CHECK (total >= 0),
  pagado boolean NOT NULL DEFAULT false,
  creado_en timestamptz NOT NULL DEFAULT now()
);
```

Ahora la prueba de por qué el dinero no va en float. Misma operación, dos tipos:

```sql
SELECT 0.1::float + 0.2::float   AS con_float,
       0.1::numeric + 0.2::numeric AS con_numeric;
```

```js
      con_float      | con_numeric
---------------------+-------------
 0.30000000000000004 |        0.30
```

Con dos números no parece grave. Multiplícalo por diez mil pedidos y por cada resta de inventario, y tendrás un reporte que no cuadra con el banco. Peor: `WHERE total = 350.00` puede no encontrar un pedido que sí vale 350, porque internamente vale 349.99999999.

La fecha también se puede guardar mal. Si el campo se declara `text`, el orden alfabético miente:

```sql
SELECT * FROM pedidos ORDER BY fecha_texto;
-- '2026-10-9' queda DESPUÉS de '2026-10-10'
```

Y así se ve el intento de arreglarlo cuando ya hay datos sucios:

```sql
ALTER TABLE pedidos ALTER COLUMN total TYPE numeric(10,2);

ERROR:  column "total" cannot be cast automatically to type numeric
HINT:  Specify a USING expression to perform the conversion.
```

El error no es capricho: la columna tiene valores como `'$350.00'` y la base no sabe si eso es dinero, texto o basura. Alguien tiene que limpiar fila por fila.

**Advertencia:** nunca guardes dinero en `float`, `double` ni en `text`, y nunca guardes fechas como texto. Son los dos errores de tipos que más caro se pagan y los dos más fáciles de evitar.

### Díselo a la IA

> "Revisa este CREATE TABLE y actúa como revisor de tipos: [pega tu tabla]. Para cada columna dime si el tipo es correcto y por qué, con especial cuidado en dinero (debe ser numeric, nunca float), fechas (timestamptz si es un instante, date si es un día de calendario) y banderas (boolean, no texto con 'sí' y 'no'). Señala cualquier columna que guarde datos variables y propón si conviene jsonb o una tabla aparte. Al final, dime qué columnas serían un problema de migrar dentro de un año y qué valor quedaría en las filas viejas."

### Ejercicios

**1. [opción múltiple]** ¿Qué tipo debes usar para guardar el total de un pedido en pesos?
   - a) float, porque es más rápido
   - b) text, para que acepte el signo de pesos
   - c) numeric(10,2), porque guarda decimales exactos ✔
   - d) integer, porque el dinero no tiene decimales

**2. [qué hace]** ¿Por qué esta consulta devuelve 0.30000000000000004 y no 0.3?

```sql
SELECT 0.1::float + 0.2::float;
```

   - a) Porque PostgreSQL está mal configurado
   - b) Porque float guarda aproximaciones binarias y 0.1 no tiene representación exacta ✔
   - c) Porque falta multiplicar por 100
   - d) Porque el resultado se redondea solo al mostrarlo

**3. [verdadero/falso]** "timestamptz guarda la hora tal como la escribió el usuario, sin convertir nada."
   - Respuesta: FALSO — guarda el instante absoluto; la zona horaria solo se aplica al mostrarlo. Por eso el mismo pedido puede verse a distinta hora en CDMX y en Madrid.

**4. [completar]** "Para dinero usa ____; para un instante con zona horaria usa ____; para una bandera de sí o no usa ____."
   - Banco: `numeric` · `timestamptz` · `boolean` · `float`
   - Respuesta: numeric / timestamptz / boolean

**5. [relacionar]** Une cada elemento con su pareja:
   - text ↔ Nombres, correos y notas
   - numeric(10,2) ↔ Precios y totales exactos
   - boolean ↔ Pagado o no pagado
   - date ↔ Un cumpleaños
   - uuid ↔ Identificador único difícil de adivinar

---

## B5 — Llave primaria: la identidad de cada registro

### Concepto

La **llave primaria** (primary key) es la columna que identifica de forma única cada fila. Cumple tres condiciones: no se repite, nunca está vacía y **no cambia**. Las dos primeras son obvias; la tercera es la que se olvida y la que provoca los desastres. Una llave primaria no describe al registro: lo identifica. Esa frase resuelve el 80% de las dudas.

Hay dos formas de fabricarla. La **natural** usa un dato del mundo real: el correo del cliente, el nombre del platillo, la CURP. La **subrogada** inventa un número sin significado: `id`. En la práctica, casi siempre quieres la subrogada, por una razón simple: los datos del mundo cambian. La gente corrige su correo, se casa y cambia de apellido, el negocio renombra “Taco al pastor” a “Taco al pastor con piña”. Si ese dato es la llave, cambiarlo obliga a actualizar todas las filas que lo referencian, y si alguna se queda atrás, la relación se rompe (m4-b8).

Dos sabores de `id`, y sí importa cuál eliges:

- **Autoincremental** (`bigint GENERATED ALWAYS AS IDENTITY`): el motor asigna 1, 2, 3. Compacto, rápido, legible al depurar. Contra: revela cuántos registros tienes y es fácil de adivinar en una URL.
- **uuid** (`gen_random_uuid()`): 128 bits generados al azar. No revela volumen, no se adivina y se puede crear en dos sistemas distintos sin coordinar. Contra: ocupa más, es feo en una URL y no dice nada al leerlo.

Regla práctica: **uuid para lo que sale al mundo** (clientes, pedidos que viajan en un enlace), **enteros para lo interno** (platillos, categorías, tablas de catálogo). Y hay un tercer caso válido: las tablas que unen dos cosas —por ejemplo qué platillos van en qué pedido— usan una llave **compuesta**, formada por las dos llaves juntas (m4-b7).

**Un dato para recordarlo:** si la llave puede cambiar en la vida real, no es llave. Es un dato más.

### Analogía

Es el **gafete numerado de una fábrica**. Al entrar te asignan el número 0471, no tu nombre. Si te casas y cambias de apellido, el gafete sigue diciendo 0471. Si te mudas de colonia, sigue siendo 0471. Si te pasas de línea de producción, sigues siendo 0471, y la nómina no tiene que reescribir tu historial completo. En cambio, si la fábrica te identificara por tu nombre, el día que entrara un segundo “Juan Pérez” el sistema no sabría a quién pagarle, y el día que alguien corrigiera un acento habría que repintar todos los expedientes. El talonario consecutivo de la oficina de personal es el autoincremental: cómodo, pero cualquiera puede deducir cuántos empleados hay y en qué orden entraron. El folio largo que imprime una máquina es el uuid: nadie lo adivina y dos plantas pueden emitirlo sin ponerse de acuerdo.

### Cómo se ve en la práctica

Las dos formas, en la misma línea de la definición:

```sql
CREATE TABLE clientes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  correo text NOT NULL UNIQUE
);

CREATE TABLE platillos (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre text NOT NULL UNIQUE
);
```

`UNIQUE` en `nombre` y `correo` no los convierte en llave: solo impide duplicados. La llave sigue siendo `id`, que no cambia nunca. Esa distinción es la que permite corregir un nombre sin tocar los pedidos.

La versión que parece inofensiva y no lo es:

```sql
CREATE TABLE pedidos (
  platillo text PRIMARY KEY,
  total numeric(10,2)
);
```

Funciona hasta el día que el menú tiene dos “Taco al pastor” —uno con cebolla y uno sin— y la base rechaza el segundo. O hasta que corriges un acento en el nombre del platillo y tienes que actualizar los ocho mil pedidos que lo referencian, o la base te lo impide porque hay una llave foránea apuntando ahí (m4-b8).

**Advertencia:** los ids consecutivos son adivinables. Si tu API expone `GET /api/v1/pedidos/42` sin verificar quién pregunta, cualquiera recorre 41, 43, 44 y ve pedidos ajenos. Eso se cierra con autorización y Row Level Security (m4-a15, m4-b22), no escondiendo el número; pero conviene saber que el id no protege nada por sí solo. Y una regla más: nunca reutilices el id de un registro borrado. Ese número ya fue, y reasignarlo mezcla historiales.

### Díselo a la IA

> "Estoy diseñando las tablas de [tu sistema] y necesito definir la llave primaria de cada una: [lista tus tablas]. Para cada tabla dime si conviene id autoincremental o uuid, considerando si el id va a aparecer en URLs o APIs públicas y si los datos se van a crear desde más de un sistema. Después revisa si en mi diseño hay alguna llave natural tentadora —nombre, correo, teléfono, folio de factura— y explícame qué se rompe el día que ese dato cambie. Si alguna tabla une dos entidades, dime si debe llevar llave compuesta."

### Ejercicios

**1. [opción múltiple]** ¿Por qué es mala idea usar el nombre de un platillo como llave primaria?
   - a) Porque los nombres ocupan más espacio en disco
   - b) Porque los nombres se repiten y cambian: corregir uno obligaría a actualizar todos los pedidos que lo referencian ✔
   - c) Porque PostgreSQL no acepta texto como llave
   - d) Porque los nombres no se pueden mostrar en pantalla

**2. [relacionar]** Une cada elemento con su pareja:
   - Llave primaria ↔ Identifica cada fila y nunca cambia
   - Autoincremental ↔ 1, 2, 3: compacto y legible, pero adivinable
   - uuid ↔ 128 bits al azar: no revela volumen ni se adivina
   - UNIQUE ↔ Impide duplicados sin convertir el campo en llave

**3. [verdadero/falso]** "Una llave primaria puede quedar vacía (NULL) si el registro todavía no tiene id asignado."
   - Respuesta: FALSO — la llave primaria es NOT NULL por definición: sin identidad, la fila no se puede referenciar ni actualizar sin ambigüedad.

**4. [completar]** "La llave primaria debe ser única, nunca ____ y sobre todo no debe ____; si puede cambiar en la vida real, es solo un ____ más."
   - Banco: `nula` · `cambiar` · `dato` · `numérica`
   - Respuesta: nula / cambiar / dato

**5. [qué hace]** ¿Qué pasa con el segundo INSERT?

```sql
CREATE TABLE pedidos (
  platillo text PRIMARY KEY,
  total numeric(10,2)
);

INSERT INTO pedidos VALUES ('Taco al pastor', 66.00);
INSERT INTO pedidos VALUES ('Taco al pastor', 44.00);
```

   - a) Se guarda como un pedido distinto con id 2
   - b) Falla: la llave primaria ya existe, porque el nombre del platillo se repite ✔
   - c) Se actualiza el primer pedido con el nuevo total
   - d) Se guarda solo si el total es menor

---

## B6 — Relaciones uno a muchos

### Concepto

La relación **uno a muchos** es la más común de todas: un cliente hace muchos pedidos, una categoría agrupa muchos platillos, un proveedor surte muchos ingredientes. En el lado del “uno” hay una sola fila; en el lado de los “muchos”, muchas filas que le pertenecen.

Lo que decide si la relación está bien modelada no es el dibujo en el pizarrón, sino **dónde vive la llave foránea**. En uno a muchos, vive en la tabla de los muchos: cada fila de `pedidos` guarda el `cliente_id` del cliente al que pertenece. Una columna, un valor, sin listas. Ese es el único dato que necesitas recordar de esta unidad.

No es una convención arbitraria. Un pedido pertenece a **exactamente un** cliente, así que cabe en una columna. Un cliente puede tener **cualquier número** de pedidos, y “cualquier número” no cabe en una columna: si intentas guardarlo, terminas metiendo una lista dentro de un campo de texto, que es justo el problema de la siguiente unidad (m4-b7).

Fíjate en la asimetría: la columna `cliente_id` se repite —siete pedidos de Ana llevan siete veces el mismo número— y eso no es un error, es el diseño. El `id` de cada pedido, en cambio, nunca se repite: es su identidad (m4-b5).

Un cliente con cero pedidos es perfectamente válido: existe en `clientes` y nadie lo referencia. Lo que no debería existir es un pedido que apunte a un cliente que no está; de eso se encarga la llave foránea (m4-b8).

En el trabajo diario esta decisión se ve en dos preguntas. “Los pedidos de Ana”: `WHERE cliente_id = 7`. “Cada pedido con el nombre de su cliente”: eso ya necesita unir las dos tablas (m4-b13). Y cuando le pidas a la IA el modelo de datos de tu negocio, revisa justo esto: si te propone una columna con pedidos dentro de `clientes`, o un campo con ids separados por comas, detente. Ahí empieza uno de los errores de modelado que se pagan caro (m4-b28).

### Analogía

Es una **familia con varios coches y una calcomanía en cada parabrisas**. La calcomanía dice a qué familia pertenece el coche; la familia no anda en la bolsa con una lista escrita de sus coches. Si mañana compran un cuarto, pegas otra calcomanía; si venden uno, la despegas; si un coche aparece sin calcomanía, el estacionamiento no sabe de quién es. Y la familia puede tener cero coches sin dejar de existir: simplemente no hay parabrisas que apunten a ella. Toda la relación cabe en un número pegado del lado de los muchos.

### Cómo se ve en la práctica

Así se ve la relación en SQL. Primero las dos tablas; la línea que importa para esta unidad es la de `cliente_id`.

```sql
CREATE TABLE clientes (
  id       bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre   text NOT NULL,
  telefono text
);

CREATE TABLE pedidos (
  id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cliente_id bigint REFERENCES clientes(id),
  fecha      timestamptz NOT NULL DEFAULT now(),
  total      numeric(10,2) NOT NULL,
  estado     text NOT NULL DEFAULT 'pendiente'
);
```

Mira las filas resultantes: el mismo `cliente_id` aparece varias veces; cada `id` de pedido, una sola vez.

```js
id  | cliente_id | fecha       | total
----+------------+-------------+-------
41  |          7 | 2026-11-18  | 350.00
42  |          7 | 2026-11-19  | 180.00
43  |          7 | 2026-11-21  |  95.00
44  |          9 | 2026-11-21  | 220.00
```

Y las dos consultas que se derivan de ahí:

```sql
-- los pedidos de un cliente
SELECT id, fecha, total
FROM pedidos
WHERE cliente_id = 7;

-- el cliente de cada pedido (une las tablas, m4-b13)
SELECT p.id, c.nombre
FROM pedidos p
JOIN clientes c ON c.id = p.cliente_id
WHERE p.id = 42;
```

La segunda consulta existe porque el nombre del cliente *no está* en `pedidos`: está en `clientes`, en un solo lugar. Si Ana cambia de nombre, lo cambias una vez y sus cuarenta pedidos quedan bien.

### Díselo a la IA

> "Voy a modelar clientes y pedidos en PostgreSQL. Confirma si la relación es uno a muchos y en qué tabla debe ir la llave foránea, y muéstrame el CREATE TABLE de las dos tablas con esa columna marcada con REFERENCES. Después dame tres consultas: los pedidos de un cliente, un pedido con el nombre de su cliente, y los clientes que todavía no tienen pedidos. Si un cliente puede comprar sin registrarse, dime cómo modelarlo y qué pasa con la llave foránea en ese caso."

La última pregunta es la que separa un modelo escolar de uno real: la venta de mostrador existe, y hay que decidir si se permite un `cliente_id` vacío o si se crea un cliente genérico para esos tickets.

### Ejercicios

**1. [opción múltiple]** En una relación uno a muchos entre clientes y pedidos, ¿dónde va la llave foránea?
   - a) En clientes, con una columna que guarde una lista de ids de pedidos
   - b) En pedidos, con una columna cliente_id que apunte al id del cliente ✔
   - c) En una tercera tabla obligatoria, siempre
   - d) En las dos tablas a la vez, para que no se pierda

**2. [verdadero/falso]** "Para relacionar a un cliente con sus pedidos, lo correcto es guardar en la tabla clientes una columna con la lista de ids de sus pedidos."
   - Respuesta: FALSO — La llave foránea vive del lado de los muchos: cada pedido carga el id de su cliente. Una lista dentro de un campo es exactamente lo que hay que evitar (m4-b7).

**3. [completar]** "En la relación uno a muchos entre clientes y pedidos, la llave foránea se llama ____ y vive en la tabla ____."
   - Banco: `cliente_id` · `clientes_id` · `pedidos` · `clientes`
   - Respuesta: cliente_id / pedidos

**4. [relacionar]** Une cada elemento con su pareja:
   - clientes ↔ El lado “uno” de la relación
   - pedidos ↔ El lado “muchos” de la relación
   - pedidos.cliente_id ↔ La llave foránea que apunta al cliente
   - clientes.id ↔ La llave primaria que se referencia

**5. [qué hace]** ¿Qué devuelve esta consulta?

```sql
SELECT id, fecha, total
FROM pedidos
WHERE cliente_id = 7;
```

   - a) Todos los pedidos de la tabla, con tres columnas
   - b) Los pedidos del cliente 7, con tres columnas ✔
   - c) El cliente 7 con su total acumulado
   - d) Un error, porque falta un JOIN con clientes

---

## B7 — Relaciones muchos a muchos

### Concepto

Hay relaciones que ninguna de las dos tablas puede guardar sola. Un pedido lleva muchos platillos y un platillo aparece en muchos pedidos. Si pones `platillo_id` en `pedidos`, cada pedido se queda con un solo platillo. Si pones `pedido_id` en `platillos`, cada platillo pertenece a un solo pedido. Las dos opciones son mentira, y la base de datos no tiene forma de avisarte.

La solución tiene nombre: **tabla intermedia** (en inglés, *junction table*). Una tercera tabla, `pedido_items`, con una fila por cada platillo dentro de un pedido: `pedido_id`, `platillo_id` y los datos propios de esa línea. El muchos a muchos se convierte en dos uno a muchos (m4-b6) que se encuentran en el medio.

La tentación de evitarla es fuerte: guardar en `pedidos` una columna llamada `platillos` con el texto “taco al pastor, taco al pastor, agua”. Funciona para imprimir el ticket y falla para todo lo demás. No puedes contar cuántos tacos vendiste sin partir texto. No puedes sumar el total sin volver a leer los precios uno por uno. No hay llave foránea: nada impide escribir un platillo que no existe o comerte una letra. Y para cambiar un renglón tienes que reescribir la celda completa, con el riesgo de pisar lo que otro escribió hace un segundo.

La tabla intermedia no es un trámite: es donde vive información que no cabe en ningún otro lado. `cantidad` —cuántas piezas—, `precio_unitario` —el precio al momento de la venta— y `notas` —sin cebolla, para llevar—. El precio histórico importa: si mañana sube el taco, los pedidos de ayer deben seguir costando lo que costaron.

En las consultas se nota la diferencia. “¿Qué llevó el pedido 42?” une tres tablas (m4-b13). “¿Cuántos tacos al pastor se vendieron en noviembre?” suma la columna `cantidad` agrupando por platillo (m4-b14, m4-b15). Con una lista en un campo de texto, esas dos preguntas se contestan con scripts frágiles, si acaso.

Cuando la IA te proponga un campo de tipo arreglo o `jsonb` “para no complicar el modelo”, hazle la pregunta de negocio: ¿vas a necesitar contar, cobrar, filtrar o reportar esos elementos? Si la respuesta es sí, tabla intermedia. Un arreglo sirve para datos que se leen completos y nunca se consultan por dentro; el contenido de un pedido no es eso. Es el mismo principio que ordena la normalización (m4-b17).

### Analogía

Es la **hoja de inscripción de un gimnasio**. Un socio toma muchas clases y una clase la toman muchos socios, así que el gimnasio no archiva la ficha del socio con las clases apuntadas a mano al margen, ni la hoja de la clase con nombres amontonados: lleva una hoja de inscripciones con una línea por socio y clase, y en esa misma línea anota cuántas sesiones compró y cuánto pagó. La hoja parece burocracia hasta el día que quieres saber cuántas personas vienen al taller de las 7 — y entonces es el único papel del archivo que tiene la respuesta.

### Cómo se ve en la práctica

La tabla intermedia de Tacos El Volcán, con sus datos propios:

```sql
CREATE TABLE pedido_items (
  id              bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  pedido_id       bigint NOT NULL REFERENCES pedidos(id),
  platillo_id     bigint NOT NULL REFERENCES platillos(id),
  cantidad        integer NOT NULL CHECK (cantidad > 0),
  precio_unitario numeric(10,2) NOT NULL
);
```

Cada fila es un renglón real del ticket. El pedido 42 llevó dos tacos, cuatro sopes y un agua:

```js
pedido_id | platillo_id | cantidad | precio_unitario
----------+-------------+----------+-----------------
42        |           3 |        2 |           18.00
42        |           7 |        4 |           32.00
42        |          12 |        1 |           25.00
```

El detalle del ticket se lee uniendo las tres tablas:

```sql
SELECT p.id AS pedido, pl.nombre AS platillo, i.cantidad, i.precio_unitario
FROM pedido_items i
JOIN pedidos  p  ON p.id  = i.pedido_id
JOIN platillos pl ON pl.id = i.platillo_id
WHERE p.id = 42
ORDER BY pl.nombre;
```

Y el total del pedido, que con una lista de texto habría que calcular a mano:

```sql
SELECT SUM(cantidad * precio_unitario) AS total
FROM pedido_items
WHERE pedido_id = 42;
```

Nota lo que `pedido_items` guarda y ninguna otra tabla podría: la **cantidad** de cada platillo y el **precio congelado** al momento de la venta. Si el taco sube a 20 pesos, el pedido 42 sigue costando lo que costó.

### Díselo a la IA

> "Necesito modelar pedidos con varios platillos en PostgreSQL. Propón la tabla intermedia pedido_items: columnas, tipos, llaves foráneas y una restricción que impida cantidades en cero o negativas. Explícame por qué no conviene guardar los platillos en una sola columna de texto y dame tres consultas: el detalle del pedido 42 con nombre y precio de cada platillo, el total del pedido 42, y los cinco platillos más vendidos del mes. Si en algún caso crees que un arreglo o jsonb es mejor, justifícalo con la consulta que se volvería difícil de escribir."

Pedir el argumento en contra es lo que evita que aceptes un atajo sin ver su costo. Si la IA no puede nombrar una sola consulta que se dificulte, la tabla intermedia gana.

### Ejercicios

**1. [opción múltiple]** ¿Por qué un pedido con varios platillos necesita una tabla intermedia?
   - a) Porque ninguna de las dos tablas puede guardar varios valores por fila sin convertirlos en una lista de texto ✔
   - b) Porque PostgreSQL no permite más de dos tablas por consulta
   - c) Porque así el pedido pesa menos en la base de datos
   - d) Porque las llaves foráneas solo funcionan entre tres tablas

**2. [verdadero/falso]** "Guardar los platillos de un pedido como “taco al pastor, taco al pastor, agua” en una columna de texto es aceptable mientras el pedido tenga pocos platillos."
   - Respuesta: FALSO — El problema no es el tamaño sino la forma: en un texto no puedes contar, sumar, filtrar ni validar contra la tabla de platillos, y cada cambio obliga a reescribir la celda completa (m4-b17).

**3. [completar]** "La tabla ____ guarda una fila por cada platillo dentro de un pedido, junto con la ____ y el precio al momento de la venta."
   - Banco: `pedido_items` · `platillos` · `cantidad` · `cliente_id`
   - Respuesta: pedido_items / cantidad

**4. [relacionar]** Une cada elemento con su pareja:
   - pedidos → pedido_items ↔ Una relación uno a muchos
   - platillos → pedido_items ↔ La otra relación uno a muchos
   - pedido_items ↔ La tabla que resuelve el muchos a muchos
   - precio_unitario ↔ El precio histórico que la línea conserva

**5. [qué hace]** El pedido 42 tiene tres líneas con cantidades 2, 4 y 1. ¿Qué devuelve la consulta?

```sql
SELECT SUM(cantidad) AS piezas
FROM pedido_items
WHERE pedido_id = 42;
```

   - a) 3, porque hay tres líneas en el pedido
   - b) 7, la suma de las cantidades de esas tres líneas ✔
   - c) 42, el id del pedido consultado
   - d) NULL, porque cantidad no está indexada

---

## B8 — Llaves foráneas y la integridad de tus datos

### Concepto

Una llave foránea (*foreign key*) es una promesa que la base de datos hace cumplir sola: **el valor de esta columna tiene que existir en aquella tabla**. Se declara con `REFERENCES` y no es documentación para humanos: si intentas insertar un pedido con `cliente_id = 77` y el cliente 77 no existe, la operación falla. Sin esa promesa, el pedido entra y tu reporte de ventas por cliente empieza a tener un renglón huérfano que nadie sabe de quién es.

Lo que compra la integridad referencial es aburrido y vale oro: no hay pedidos de clientes fantasma, no sobreviven los errores de dedo, los totales cuadran y borrar algo no deja basura apuntando al vacío. En una app que crece, esas tres cosas son la diferencia entre un reporte confiable y una tarde de reconciliación manual.

El problema aparece al borrar. Si eliminas al cliente 7 y tiene doce pedidos, ¿qué debe pasar? La base no adivina: se lo dices con `ON DELETE`. La opción por omisión es **NO ACTION**, que en la práctica se comporta como **RESTRICT**: la base *rechaza* el borrado mientras existan pedidos que lo referencien. No es un obstáculo: es un alto. Te obliga a decidir si desactivas al cliente, si reasignas sus pedidos o si de verdad quieres borrar historia.

Las otras opciones son tentadoras y hay que usarlas con intención. **CASCADE** borra en cascada: al eliminar el cliente se borran sus pedidos, y si esos pedidos tienen líneas, también las líneas. **SET NULL** deja el pedido sin cliente (la columna debe aceptar vacío), útil para referencias opcionales de verdad. **SET DEFAULT** lo manda a un valor por omisión y casi nunca es lo que quieres.

**Advertencia:** `ON DELETE CASCADE` no borra “lo que le pides”: borra lo que le pides y todo lo que dependía de eso, sin confirmación, sin papelera y sin vuelta atrás. En Tacos El Volcán, si `pedidos.cliente_id` apunta a `clientes` con CASCADE y `pedido_items.pedido_id` apunta a `pedidos` con CASCADE, un `DELETE FROM clientes WHERE id = 7` se lleva al cliente, sus doce pedidos y las cuarenta líneas de esos pedidos. La venta de noviembre desaparece del reporte y la base responde “DELETE 1”, como si hubiera sido un trámite. Antes de aprobar una migración con CASCADE, pregunta exactamente qué se lleva por delante y pruébala en una copia (m4-b19, m4-b20).

La regla práctica que le pido a la IA: CASCADE solo para partes que no tienen vida propia —las líneas de un pedido no existen sin el pedido—; RESTRICT para todo lo que representa dinero, historia o personas; SET NULL cuando la referencia es opcional de verdad. Y para clientes, la salida elegante casi nunca es borrar: es una columna `activo boolean` y un filtro. Se llama borrado lógico y conserva la facturación (m4-b12).

### Analogía

Es el **edificio de departamentos con contratos de renta**. Mientras un inquilino tiene contrato vigente, el administrador no puede demoler el edificio: el registro se lo impide (RESTRICT) y lo obliga a resolver el contrato primero. Con CASCADE la regla cambia: demueles el edificio y los contratos se cancelan solos, junto con todo lo que había adentro. En el papel no suena distinto; se siente distinto el lunes, cuando llegas y hay un terreno vacío donde vivía gente.

### Cómo se ve en la práctica

Así se declara la política explícita, que es como debería quedar siempre, aunque RESTRICT sea el comportamiento por omisión:

```sql
ALTER TABLE pedidos
  ADD CONSTRAINT pedidos_cliente_fk
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
  ON DELETE RESTRICT;
```

Con eso, intentar borrar un cliente que tiene pedidos produce un error, no un desastre:

```http
DELETE FROM clientes WHERE id = 7;
-- ERROR: update or delete on table "clientes" violates foreign key constraint "pedidos_cliente_fk" on table "pedidos"
-- DETAIL: Key (id)=(7) is still referenced from table "pedidos".
```

Y así se ve la cascada encadenada, que es donde se pierde la facturación:

```http
-- pedidos.cliente_id    → clientes(id)    ON DELETE CASCADE
-- pedido_items.pedido_id → pedidos(id)     ON DELETE CASCADE

DELETE FROM clientes WHERE id = 7;
-- DELETE 1  ...pero también se fueron 12 pedidos y 40 líneas
```

Para revisar lo que ya tienes en la base, pide la estructura de la tabla:

```js
\d pedidos
```

Ahí aparece cada llave foránea con su regla de borrado. En una migración generada por IA, la línea que hay que leer con lupa es justo la de `ON DELETE`: es la que decide si un clic borra un cliente o borra un año de ventas.

### Díselo a la IA

> "Revisa estas tablas y dime, para cada llave foránea, qué pasa si borro la fila padre: si la base lo impide, si borra hijos o si los deja sin padre. [pega tu SQL]. Después propón la política que recomiendas para clientes→pedidos y pedidos→pedido_items, justificando cada una por el negocio, y escríbeme el ALTER TABLE necesario. Si alguna política implica CASCADE, lístame exactamente qué filas se borrarían en cascada antes de que yo apruebe el cambio."

La última frase convierte una migración peligrosa en una decisión informada. Si la IA no puede enumerar lo que se borra, todavía no entendió tu modelo.

### Ejercicios

**1. [opción múltiple]** ¿Qué hace ON DELETE RESTRICT cuando intentas borrar un cliente que tiene pedidos?
   - a) Impide el borrado mientras existan pedidos que lo referencien ✔
   - b) Borra al cliente y deja los pedidos sin dueño
   - c) Borra al cliente y todos sus pedidos
   - d) Cambia el cliente_id de sus pedidos por NULL

**2. [verdadero/falso]** "Con ON DELETE CASCADE, borrar un cliente elimina también sus pedidos y las líneas de esos pedidos, sin posibilidad de deshacerlo desde SQL."
   - Respuesta: VERDADERO — La cascada se propaga por cada llave foránea que la declare. La base responde que borró una fila, aunque hayan desaparecido cientos (m4-b20).

**3. [completar]** "____ impide borrar un cliente que tiene pedidos; ____ los borra junto con él."
   - Banco: `RESTRICT` · `CASCADE` · `SET NULL` · `REFERENCES`
   - Respuesta: RESTRICT / CASCADE

**4. [relacionar]** Une cada elemento con su pareja:
   - REFERENCES ↔ Declara a qué tabla y columna apunta la llave foránea
   - ON DELETE RESTRICT ↔ Rechaza el borrado del padre si hay hijos
   - ON DELETE CASCADE ↔ Borra los hijos junto con el padre
   - ON DELETE SET NULL ↔ Deja los hijos sin referencia, si la columna lo permite

**5. [qué hace]** El cliente 7 tiene 12 pedidos y esos pedidos suman 40 líneas. ¿Qué queda después de ejecutar el DELETE?

```http
-- pedidos.cliente_id      → clientes(id) ON DELETE CASCADE
-- pedido_items.pedido_id   → pedidos(id)  ON DELETE CASCADE

DELETE FROM clientes WHERE id = 7;
```

   - a) Nada del cliente 7: se borran el cliente, sus 12 pedidos y las 40 líneas ✔
   - b) El cliente, pero sin pedidos
   - c) Los pedidos, pero sin líneas
   - d) Un error: la base impide borrar porque hay hijos

---

## B9 — SELECT: traer exactamente lo que necesitas

### Concepto

`SELECT` es el verbo que más vas a usar: pregunta y recibe una tabla como respuesta. Su forma mínima es `SELECT columnas FROM tabla`, y la diferencia entre una consulta buena y una cara no está en la sintaxis, sino en **qué columnas pides**.

`SELECT *` significa “todas las columnas”. Es la herramienta correcta para explorar: abrir una tabla que no conoces, ver dos filas, entender qué hay. Es la herramienta incorrecta para el código de una app, y casi siempre es la que aparece cuando alguien tiene prisa.

Lo que cuesta el asterisco no se ve en la pantalla, se ve en la cuenta:

- **Viaja de más.** Una pantalla que muestra nombre y precio de 20 platillos no necesita las 18 columnas de la tabla, ni las 10,000 filas del catálogo. Todo lo que sale de la base viaja por la red y se paga en tiempo y, en Supabase, en egreso (m4-b21).
- **Ocupa de más.** Cada columna extra se lee, se guarda en memoria y se serializa a JSON. Multiplícalo por cada visita a la página.
- **Expone de más.** La tabla `clientes` puede tener `password_hash`, notas internas o el costo del proveedor. Un `SELECT *` en un endpoint público manda todo eso al navegador, donde cualquiera lo lee (m4-a15, m4-b22).
- **Se rompe sola.** El asterisco significa “todo lo que exista hoy”. El día que alguien agrega una columna, tu respuesta cambia sin que hayas tocado el código, y el frontend recibe un campo que no esperaba.

Especificar columnas es firmar un contrato con la pantalla: esto es lo que necesita, esto es lo que devuelvo. Y cuando el nombre técnico no se entiende, `AS` lo renombra en la salida: `precio AS precio_mxn`. El alias no cambia la tabla, solo la etiqueta del resultado, que además se convierte en la llave del JSON que consume tu frontend.

Por eso, cuando dirijas a la IA, no pidas “la consulta para el menú”: pídele la lista de columnas que la pantalla necesita y que las nombre como las va a leer el código. Un `SELECT *` en producción no es un pecado mortal, es una bandera roja: alguien no decidió qué datos salen.

### Analogía

Es la **mudanza que cobra por kilo**. Con `SELECT *` subes el ropero, la caja fuerte y el sillón para llevar una camisa: el camión arranca, pesa, cobra y descarga todo en tu sala. Y como la caja fuerte viaja abierta, de paso el chofer ve tus papeles. Con columnas explícitas mandas una caja con la camisa: mismo destino, una fracción del costo, y nadie más se entera de lo que guardabas.

### Cómo se ve en la práctica

La versión cómoda y la versión que debería ir a producción, lado a lado:

```sql
-- cómodo para explorar, caro para una app
SELECT * FROM platillos;

-- lo que esta pantalla necesita, y nada más
SELECT id, nombre, precio
FROM platillos
WHERE disponible = true
ORDER BY nombre
LIMIT 20;
```

La segunda consulta declara tres columnas, filtra los platillos agotados, ordena y corta en 20 (m4-b10, m4-b11). La primera trae la tabla entera, con costo de proveedor y notas internas incluidas.

Los alias son la otra mitad de la claridad. Esta consulta calcula el precio con IVA y lo nombra como lo va a leer el frontend:

```sql
SELECT
  nombre        AS platillo,
  precio        AS precio_mxn,
  precio * 1.16 AS precio_con_iva
FROM platillos
WHERE id = 3;
```

El resultado sale ya listo para la pantalla:

```js
platillo        | precio_mxn | precio_con_iva
----------------+------------+---------------
Taco al pastor  |      18.00 |          20.88
```

Y si ese resultado se responde como JSON, los alias se vuelven las llaves del objeto:

```json
{ "platillo": "Taco al pastor", "precio_mxn": 18.00, "precio_con_iva": 20.88 }
```

Renombrar en la consulta evita renombrar en tres lugares del frontend. Es una línea de SQL que ahorra una tarde de ajustes.

### Díselo a la IA

> "Tengo esta consulta: SELECT * FROM pedidos WHERE cliente_id = 7; Mi pantalla muestra folio, fecha, total y estado. Convierte el asterisco en la lista exacta de columnas que necesita esa pantalla, renombra con AS las que no se entiendan en el JSON y dime cuáles columnas de la tabla NO deben salir nunca en una respuesta al cliente. Si te falta algún dato para decidir, pregúntame en vez de incluirlo por si acaso."

“Por si acaso” es la frase que llena las respuestas de datos que nadie pidió. Prohibirla en el prompt es una medida de seguridad, no de estilo.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es el riesgo principal de dejar SELECT * en el código de producción?
   - a) Devuelve todas las columnas, incluidas las que no necesitas o no deberías exponer ✔
   - b) Bloquea la tabla para los demás usuarios
   - c) Solo funciona en la computadora del desarrollador
   - d) Impide usar WHERE en la misma consulta

**2. [verdadero/falso]** "SELECT * siempre devuelve las mismas columnas, aunque la tabla cambie después."
   - Respuesta: FALSO — El asterisco significa “todas las columnas que existan al momento de ejecutar”. Si alguien agrega una, tu respuesta cambia sin tocar el código (m4-b19).

**3. [completar]** "Para que una columna salga con otro nombre en el resultado se usa ____; eso no cambia el nombre en la ____."
   - Banco: `AS` · `tabla` · `WHERE` · `FROM`
   - Respuesta: AS / tabla

**4. [relacionar]** Une cada elemento con su pareja:
   - SELECT * ↔ Trae todas las columnas de la tabla
   - SELECT id, nombre, precio ↔ Trae solo lo que la pantalla necesita
   - AS ↔ Renombra la columna en el resultado
   - FROM platillos ↔ Indica de qué tabla se leen los datos

**5. [ordenar]** Ordena las cláusulas de esta consulta, de arriba abajo, para que sea válida:
   - Orden correcto: SELECT id, nombre → FROM clientes → WHERE activo = true → ORDER BY nombre → LIMIT 20

---

## B10 — WHERE: filtrar con precisión

### Concepto

`SELECT` decide *qué columnas* ves; `WHERE` decide *qué filas* ves. Sin filtro, una consulta devuelve la tabla completa, y en producción eso casi nunca es lo que quieres: la pantalla de un cliente no debe traer los pedidos de los demás, y un reporte del mes no debe traer los últimos tres años.

Los operadores son pocos y se leen casi en español: `=` igual, `<>` distinto (también se escribe `!=`), `>` y `=` y `= '2026-11-01'`. Los números van sin comillas.

Hay tres operadores que hacen el trabajo pesado. `LIKE` busca patrones de texto: `'taco%'` empieza con “taco”, `'%pastor%'` lo contiene, `'_aco'` tiene exactamente un carácter antes de “aco”. En PostgreSQL, `ILIKE` hace lo mismo sin distinguir mayúsculas. `IN` compara contra una lista: `estado IN ('pendiente', 'en_camino')` es más corto y más legible que tres `OR`. `BETWEEN` comprueba un rango cerrado: `total BETWEEN 100 AND 300` incluye el 100 y el 300.

Cuando combinas condiciones, los paréntesis no son adorno. `AND` ata más fuerte que `OR`, así que `WHERE estado = 'pendiente' AND total > 200 OR cliente_id = 7` devuelve los pendientes caros *y además* todo lo del cliente 7, barato o no. Si querías “pendientes o caros, pero solo del cliente 7”, hay que escribirlo: `WHERE cliente_id = 7 AND (estado = 'pendiente' OR total > 200)`.

Y queda el caso que más consultas tronadas produce: **NULL**. NULL no es cero, no es texto vacío y no es falso: es la ausencia de dato. Por eso `WHERE telefono = NULL` no devuelve las filas sin teléfono —devuelve **cero filas, siempre**, sin error—. Comparar algo contra “no hay dato” da un resultado desconocido, y una fila desconocida no pasa el filtro. Para eso existe `IS NULL` y `IS NOT NULL`.

Este es el punto donde un filtro mal escrito se vuelve caro: un `WHERE` con el operador equivocado en un reporte da números falsos que nadie cuestiona, y en un `UPDATE` o un `DELETE` toca filas que no debía (m4-b12). Antes de aprobar una consulta generada por IA, traduce el filtro a una frase y compárala: “los pedidos pendientes del cliente 7” tiene que verse exactamente así en el SQL.

### Analogía

Es el **portero de un salón de eventos con un portapapeles**. “Pasa si tu nombre es Ana” (=), “pasa si no vienes de parte de la competencia” (<>), “si llegaste entre 8 y 9” (BETWEEN), “si vienes de cualquiera de estas cinco empresas” (IN), “si tu apellido empieza con Vic” (LIKE). Y hay invitados sin identificación: al portero no le sirve preguntar “¿tu credencial es igual a la credencial de nadie?”, porque esa pregunta no tiene respuesta; para ellos tiene otra casilla en el portapapeles: IS NULL.

### Cómo se ve en la práctica

Cinco filtros reales de Tacos El Volcán, cada uno con su operador:

```sql
-- platillos caros
SELECT id, nombre, precio FROM platillos WHERE precio > 100;

-- clientes a los que les falta el teléfono
SELECT id, nombre FROM clientes WHERE telefono IS NULL;

-- pedidos de noviembre que siguen abiertos
SELECT id, fecha, total
FROM pedidos
WHERE fecha >= '2026-11-01' AND fecha < '2026-12-01'
  AND estado IN ('pendiente', 'en_camino');

-- pedidos con total entre 100 y 300, extremos incluidos
SELECT id, total FROM pedidos WHERE total BETWEEN 100 AND 300;

-- clientes cuyo nombre empieza con “Ana”
SELECT id, nombre FROM clientes WHERE nombre LIKE 'Ana%';

-- reseñas que no son de cinco estrellas
SELECT id, comentario FROM resenas WHERE calificacion <> 5;
```

Ahora el caso de los paréntesis, con las dos versiones del mismo intento:

```sql
-- mal: pendientes caros de cualquiera, MÁS todo lo del cliente 7
SELECT id, total
FROM pedidos
WHERE estado = 'pendiente' AND total > 200 OR cliente_id = 7;

-- bien: del cliente 7, lo pendiente o lo caro
SELECT id, total
FROM pedidos
WHERE cliente_id = 7 AND (estado = 'pendiente' OR total > 200);
```

Y la prueba de que NULL no se compara con nada:

```sql
SELECT COUNT(*) FROM clientes WHERE telefono = NULL;   -- 0, siempre
SELECT COUNT(*) FROM clientes WHERE telefono IS NULL;  -- los que de verdad faltan
```

La primera consulta no falla, no avisa y no sirve. La segunda es la que querías. **Advertencia:** si ese mismo `= NULL` aparece en un `UPDATE` o un `DELETE`, el resultado es peor que inútil: la operación “no encuentra nada” y parece que funcionó (m4-b12).

### Díselo a la IA

> "Tengo la tabla pedidos con las columnas id, cliente_id, fecha, total y estado. Escríbeme un SELECT por cada pregunta: pedidos pendientes de más de 200 pesos, pedidos de la última semana, pedidos con estado pendiente o en_camino del cliente 7, y clientes sin teléfono. Usa WHERE con los operadores adecuados, pon paréntesis donde mezcles AND y OR, y explícame en una línea qué filas excluye cada condición. Si alguna condición puede devolver cero resultados por comparar con NULL, avísame y corrígela."

Pedir la explicación de lo que excluye cada condición es la forma más rápida de detectar un filtro que hace lo contrario de lo que crees.

### Ejercicios

**1. [opción múltiple]** ¿Qué devuelve WHERE telefono = NULL?
   - a) Ninguna fila, porque NULL no es igual ni a NULL ✔
   - b) Todas las filas donde el teléfono está vacío
   - c) Un error de sintaxis de SQL
   - d) Las filas donde el teléfono vale cero

**2. [verdadero/falso]** "La condición total BETWEEN 100 AND 300 incluye los pedidos con total exactamente 100 y exactamente 300."
   - Respuesta: VERDADERO — BETWEEN es un rango cerrado: equivale a total >= 100 AND total <= 300.

**3. [completar]** "Para buscar nombres que empiecen con “Vic” se usa ____ 'Vic%'; para saber si un campo no tiene dato se usa ____."
   - Banco: `LIKE` · `IS NULL` · `= NULL` · `IN`
   - Respuesta: LIKE / IS NULL

**4. [relacionar]** Une cada elemento con su pareja:
   - = ↔ Igual a un valor exacto
   - <> ↔ Distinto de un valor
   - IN ↔ Igual a cualquiera de una lista
   - BETWEEN ↔ Dentro de un rango, extremos incluidos
   - IS NULL ↔ El dato no existe

**5. [qué hace]** ¿Qué filas devuelve esta consulta?

```sql
SELECT id, total
FROM pedidos
WHERE cliente_id = 7
  AND (estado = 'pendiente' OR total &gt; 200);
```

   - a) Los pedidos del cliente 7 que están pendientes o cuestan más de 200 ✔
   - b) Todos los pedidos pendientes de más de 200, de cualquier cliente
   - c) Los pedidos del cliente 7 y además todos los pendientes de más de 200
   - d) Los pedidos del cliente 7 que están pendientes y además cuestan más de 200

---

## B11 — ORDER BY y LIMIT: ordenar y acotar

### Concepto

Un `SELECT` sin `ORDER BY` no promete ningún orden. La base te devuelve las filas en el orden que le resulta más barato: el físico en disco, el de algún índice, el que quedó después de una actualización. Ese orden puede cambiar mañana sin que tú toques una línea. Si tu panel dice "últimos pedidos" y no ordenaste, en realidad estás mostrando pedidos al azar que además cambian entre recargas.

`ORDER BY fecha DESC` ordena de mayor a menor; `ASC` es el valor por omisión y va de menor a mayor. Puedes ordenar por varias columnas y el segundo criterio rompe los empates: `ORDER BY estado ASC, fecha DESC`. Con los valores vacíos (`NULL`) hay una regla que sorprende: en PostgreSQL, un `ORDER BY ... ASC` los manda al final y un `DESC` los manda al principio. Si eso no es lo que quieres, se declara: `ORDER BY fecha DESC NULLS LAST`.

`LIMIT 10` corta el resultado a diez filas y `OFFSET 20` salta las primeras veinte. Juntos son la base de la paginación: la página 3 de un listado de diez es `LIMIT 10 OFFSET 20`, porque `(3 - 1) × 10 = 20`. El detalle que casi todos olvidan es el desempate: si dos pedidos tienen la misma fecha y no agregas `id` como segundo criterio, la base puede ponerlos en distinto orden en cada consulta y una fila aparece en dos páginas mientras otra no aparece nunca.

El dato que hay que tatuarse: **`LIMIT` no acelera la consulta, solo deja de entregar filas**. El trabajo pesado ya se hizo. Si ordenas por una columna sin índice, la base tiene que leer todas las filas que pasaron el `WHERE`, ordenarlas —en memoria y, si no caben, en disco— y apenas entonces quedarse con las diez primeras. En una tabla de cien mil pedidos eso son decenas de milisegundos; en un millón, segundos. Con un índice sobre la columna de orden, la base ya tiene los datos ordenados y lee solo las últimas diez entradas: el mismo resultado en menos de un milisegundo (m4-b16).

Por eso te importa aunque la IA escriba el SQL. La consulta más repetida de tu panel —"muéstrame los últimos pedidos"— es también la que se cae primero cuando la tabla crece, y la diferencia entre una app fluida y una que "se traba" suele ser un índice y un desempate. Si sabes pedirlos, los pides en el primer prompt en vez de descubrirlo con el negocio ya operando.

### Analogía

Es una baraja revuelta sobre la mesa. Si pides "dame diez cartas" sin ordenar, recibes diez cartas cualesquiera: no son las diez más altas ni las diez más recientes, son las que estaban encima. Para que la mano signifique algo hay que extender la baraja y acomodarla por palo y por número, y eso toma tiempo proporcional a cuántas cartas haya. Si además repites la operación en cada turno, estás reacomodando las cincuenta y dos cartas para usar solo diez. El índice es tener un mazo ya separado en orden dentro de su estuche: sacas las últimas diez sin tocar el resto. Y `OFFSET` es contar diez, apartarlas, contar otras diez y tirarlas: para llegar a la página veinte hay que pasar por encima de las diecinueve anteriores aunque no las mires.

### Cómo se ve en la práctica

La consulta del panel de Tacos El Volcán, la que alimenta la lista de "últimos pedidos":

```sql
SELECT id, fecha, total
FROM pedidos
ORDER BY fecha DESC
LIMIT 10;
```

La misma lista, pero en la página 3, con desempate para que ninguna fila se repita ni se pierda:

```sql
SELECT id, fecha, total
FROM pedidos
ORDER BY fecha DESC, id DESC
LIMIT 10 OFFSET 20;
```

Ahora mira el costo. `EXPLAIN ANALYZE` ejecuta la consulta y te enseña el plan real con tiempos:

```sql
EXPLAIN ANALYZE
SELECT id, fecha
FROM pedidos
ORDER BY fecha DESC
LIMIT 10;

Limit  (cost=8421.33..8421.35 rows=10 width=16) (actual time=87.412..87.415 rows=10 loops=1)
  ->  Sort  (cost=8421.33..8671.33 rows=100000 width=16) (actual time=87.401..87.404 rows=10 loops=1)
        Sort Key: fecha DESC
        Sort Method: top-N heapsort  Memory: 27kB
        ->  Seq Scan on pedidos  (cost=0.00..6631.00 rows=100000 width=16)
```

Ochenta y siete milisegundos para entregar diez filas. El culpable está en la última línea: `Seq Scan`, o sea que recorrió la tabla completa, y luego un `Sort` de todo ese conjunto. Con un índice sobre la columna de orden, el plan cambia de naturaleza:

```js
CREATE INDEX idx_pedidos_fecha ON pedidos (fecha);

Limit  (cost=0.29..0.78 rows=10 width=16) (actual time=0.041..0.058 rows=10 loops=1)
  ->  Index Scan Backward using idx_pedidos_fecha on pedidos  (cost=0.29..4871.12 rows=100000 width=16)
```

Mismo resultado, 0.06 ms. La base caminó el índice al revés y leyó diez entradas. Esa es la diferencia entre "funciona" y "funciona con cien mil pedidos".

**Advertencia:** paginar con `OFFSET` sobre datos que cambian tiene un riesgo silencioso. Si entra un pedido nuevo mientras el usuario va en la página 2, todo se recorre una posición y ese pedido puede aparecer dos veces, o uno puede quedar invisible. Para listados infinitos y tablas grandes se usa paginación por llave: `WHERE fecha < '2026-11-20' ORDER BY fecha DESC LIMIT 10`, guardando la fecha de la última fila vista. Pídele eso a la IA cuando el listado sea de verdad grande.

### Díselo a la IA

> "Tengo esta consulta en mi panel: [pega la consulta completa, con ORDER BY y LIMIT]. Explícame en lenguaje simple qué plan usa la base y por qué puede volverse lenta cuando la tabla crezca. Después dame: (1) el `CREATE INDEX` exacto que la haría rápida, justificando el orden de las columnas; (2) la versión con desempate para que la paginación no repita ni pierda filas; y (3) si conviene cambiar de `OFFSET` a paginación por llave, con el `WHERE` que usaría. Muéstrame el `EXPLAIN ANALYZE` antes y después para comprobar la mejora."

Si la IA te propone un índice sin explicar el orden de sus columnas, pídele que lo justifique: un índice mal ordenado puede no servir para esta consulta.

### Ejercicios

**1. [opción múltiple]** ¿Qué garantiza exactamente <code>LIMIT 10</code> cuando la consulta no lleva <code>ORDER BY</code>?
   - a) Los diez registros más recientes de la tabla
   - b) Los diez registros más importantes según la llave primaria
   - c) Diez filas cualesquiera, en un orden que la base no promete ✔
   - d) Los diez registros con menos valores nulos

**2. [verdadero/falso]** "Agregar LIMIT 10 hace que la consulta sea rápida porque la base solo procesa diez filas."
   - Respuesta: FALSO — el LIMIT se aplica al final. Si hay que ordenar, la base primero lee y ordena todo el conjunto que pasó el WHERE y solo después recorta. La mejora real viene de un índice sobre la columna de orden (m4-b16).

**3. [completar]** "Para traer la tercera página de un listado de diez por página se escribe LIMIT 10 ____ 20, y conviene ordenar también por ____ para romper empates."
   - Banco: `OFFSET` · `id` · `ORDER` · `DESC`
   - Respuesta: OFFSET / id

**4. [ordenar]** Ordena las cláusulas tal como se escriben en la consulta:
   - Orden correcto: SELECT id, fecha, total → FROM pedidos → WHERE estado = 'entregado' → ORDER BY fecha DESC → LIMIT 10

**5. [qué hace]** ¿Qué devuelve esta consulta?

```sql
SELECT id, fecha, total
FROM pedidos
ORDER BY fecha DESC
LIMIT 10 OFFSET 20;
```

   - a) Los 10 pedidos más recientes de todos
   - b) Los pedidos del 20 al 29 en orden de fecha descendente ✔
   - c) Los 20 pedidos más recientes y luego 10 más
   - d) Todos los pedidos menos los últimos 10

---

## B12 — INSERT, UPDATE, DELETE: modificar con cuidado

### Concepto

Hasta aquí solo leíste datos. Los tres verbos que los modifican son `INSERT` (crear filas), `UPDATE` (cambiarlas) y `DELETE` (borrarlas). La sintaxis es corta, y justo por eso es peligrosa: no hay confirmación, no hay papelera, no hay Ctrl+Z.

`INSERT INTO clientes (nombre, telefono) VALUES ('Ana Ramírez', '5512345678');` crea una fila. Puedes insertar varias de golpe separándolas con comas, y puedes pedir que la base te devuelva lo que escribió: `RETURNING id` te entrega el identificador que generó, que es lo que necesitas para ligar el pedido con su cliente. `UPDATE platillos SET precio = 120 WHERE id = 7;` cambia columnas de las filas que cumplan la condición. `DELETE FROM pedidos WHERE id = 42;` borra las que cumplan.

Fíjate en la palabra que comparten los tres peligrosos: `WHERE`. Sin él, `UPDATE platillos SET precio = 0` pone en cero el precio de **todos** los platillos, y `DELETE FROM pedidos` deja la tabla de pedidos vacía. No es un error de sintaxis: la base lo ejecuta sin quejarse, porque le pediste exactamente eso. `DELETE FROM pedidos` y `DELETE FROM pedidos WHERE id = 42` se distinguen por dos tokens; el resultado se distingue por el historial completo de tu negocio.

Los tres aceptan `RETURNING`, y ahí está tu red de seguridad: `DELETE ... RETURNING id, total` te dice exactamente qué filas se borraron, en vez de un "listo" a ciegas. Combinado con transacciones (m4-b18) tienes la única forma real de deshacer: `BEGIN`, ejecutas, revisas cuántas filas salieron, y decides `COMMIT` o `ROLLBACK`. Sin transacción y sin respaldo (m4-b20), lo borrado no vuelve.

El reflejo profesional, y el que te pido memorizar: **primero escribe el `WHERE`, pruébalo con un `SELECT`, y solo cuando las filas que ves son las que quieres tocar, cambia el `SELECT` por `UPDATE` o `DELETE`**. Nunca al revés. También existe el borrado lógico: en vez de `DELETE`, una columna `activo` o `eliminado_en`; la fila desaparece de las vistas y el dato sigue ahí para auditoría o para deshacer un error humano.

### Analogía

Es podar un árbol con motosierra. La herramienta hace en dos segundos lo que la podadora manual tarda media hora, y por eso mismo no perdona: no distingue una rama seca del tronco. El profesional no enciende la máquina y "ve qué sale". Primero marca con cinta la rama exacta, luego pasa la hoja apagada por el trazo para confirmar que el recorrido es el correcto, y solo entonces la enciende. Ese trazo apagado es el `SELECT` con el mismo `WHERE`: te enseña exactamente qué se va a cortar antes de que haya corte. Y si no marcaste nada, la motosierra no se detiene "por sentido común": el árbol completo se viene abajo y la base tampoco te pregunta si estabas seguro.

### Cómo se ve en la práctica

El procedimiento completo para limpiar los pedidos cancelados de Tacos El Volcán, en el orden en que se hace:

```http
-- 1. marca la rama: ¿qué filas cumplen la condición?
SELECT id, fecha, total
FROM pedidos
WHERE estado = 'cancelado';

-- 2. cuenta, para tener una expectativa exacta
SELECT COUNT(*) FROM pedidos WHERE estado = 'cancelado';

-- 3. corta dentro de una transacción y mira qué salió
BEGIN;

DELETE FROM pedidos
WHERE estado = 'cancelado'
RETURNING id, fecha, total;

-- 4. si las filas son las esperadas:
COMMIT;
-- si no:
ROLLBACK;
```

Insertar y actualizar siguen la misma lógica, con `RETURNING` como comprobante:

```sql
INSERT INTO clientes (nombre, telefono, correo)
VALUES ('Ana Ramírez', '5512345678', 'ana@ejemplo.mx')
RETURNING id, nombre;
```

```sql
UPDATE platillos
SET precio = ROUND(precio * 1.10, 2)
WHERE categoria = 'bebidas'
RETURNING nombre, precio;
```

Y así se ve el accidente, en su forma más común. Esta consulta no tiene `WHERE`:

```sql
UPDATE platillos SET disponible = false;
```

No deshabilitó un platillo agotado: cerró el menú entero. La siguiente es peor:

```http
DELETE FROM pedidos;
```

No borró un pedido de prueba: borró todos los pedidos de todos los clientes, incluidos los de la semana en curso. Y si hay llaves foráneas con `ON DELETE CASCADE` (m4-b8), también se llevó sus `pedido_items` y sus `resenas`.

**Advertencia:** un `UPDATE` o un `DELETE` sin `WHERE` afecta **toda la tabla**, y la base no lo considera un error. No hay mensaje de confirmación, no hay copia automática, no hay "deshacer". Antes de ejecutar cualquiera de los dos, confirma tres cosas: que el `WHERE` está escrito, que el `SELECT` con ese mismo `WHERE` te devolvió el número de filas que esperabas, y que tienes respaldo o una transacción abierta. En producción, además, nunca corras estas sentencias sin `LIMIT` de prueba ni fuera de una transacción revisada.

### Díselo a la IA

> "Necesito [borrar los pedidos cancelados / actualizar los precios de una categoría / insertar un cliente] en mi base PostgreSQL. No me des la sentencia todavía. Primero escríbeme el `SELECT` con el `WHERE` exacto que identifica las filas afectadas, y dime cuántas filas debería devolver según mi descripción. Después dame la sentencia envuelta en `BEGIN` y `COMMIT`, con `RETURNING` para ver qué cambió, y un `ROLLBACK` explícito para el caso de que el número de filas no coincida. Al final lístame qué llaves foráneas podrían borrar filas en cascada y qué respaldo debo tener antes de correrlo."

Y si la IA te entrega un `DELETE` sin `WHERE` "porque así es más rápido", no es una optimización: es un incidente esperando la hora de comer.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es la forma correcta de preparar un <code>DELETE</code> sobre pedidos cancelados?
   - a) Escribir el DELETE y revisar después cuántas filas borró
   - b) Escribir primero un SELECT con el mismo WHERE, confirmar las filas y luego convertirlo en DELETE ✔
   - c) Ejecutar el DELETE sin WHERE y restaurar desde el respaldo si algo sale mal
   - d) Poner LIMIT 1 para que solo borre una fila

**2. [verdadero/falso]** "Si olvidas el WHERE en un UPDATE, la base de datos lo rechaza y no modifica nada."
   - Respuesta: FALSO — la base ejecuta la sentencia tal como se la pediste: sin WHERE, el UPDATE se aplica a todas las filas de la tabla. No hay confirmación ni deshacer; solo un respaldo o una transacción te salvan (m4-b18, m4-b20).

**3. [completar]** "Para ver exactamente qué filas se borraron se agrega ____ a la sentencia; y para poder deshacer el cambio se ejecuta dentro de una ____."
   - Banco: `RETURNING` · `transacción` · `WHERE` · `vista`
   - Respuesta: RETURNING / transacción

**4. [qué hace]** ¿Qué hace esta sentencia?

```sql
UPDATE platillos
SET precio = ROUND(precio * 1.10, 2)
WHERE categoria = 'bebidas'
RETURNING nombre, precio;
```

   - a) Sube 10% el precio de todas las bebidas y devuelve el nombre y el precio nuevo de cada una ✔
   - b) Sube 10% el precio de todos los platillos y devuelve solo las bebidas
   - c) Crea una bebida nueva con 10% de descuento
   - d) Cambia la categoría de los platillos que cuestan 10% más

**5. [ordenar]** Ordena el procedimiento seguro antes de un DELETE en producción:
   - Orden correcto: Escribir el WHERE con la condición exacta → Probarlo con un SELECT y contar las filas → Convertir el SELECT en DELETE conservando el WHERE → Revisar las filas que reporta RETURNING → Cerrar con COMMIT o deshacer con ROLLBACK

---

## B13 — JOIN: unir tablas para responder preguntas reales

### Concepto

Los datos de un negocio no caben en una tabla. Los pedidos viven en `pedidos`, el nombre de quien pidió en `clientes`, y qué se pidió en `pedido_items`. Esa separación es sana (m4-b17): evita repetir el teléfono del cliente en cada pedido. Pero el día que quieres responder "¿qué cliente pidió qué?", la respuesta está partida en dos tablas y necesitas unirlas. Eso es un `JOIN`.

La forma es siempre la misma: nombras la segunda tabla y declaras la condición que empareja sus filas con las de la primera, en `ON`. Los alias hacen legible el resto: `FROM clientes c JOIN pedidos p ON p.cliente_id = c.id`. La condición no es magia: es una igualdad entre una llave foránea y una llave primaria (m4-b8). La base recorre las filas y va pegando cada pedido junto al cliente que le corresponde.

Hay dos sabores y la diferencia decide si tu reporte dice la verdad. **`INNER JOIN`** (el `JOIN` a secas) devuelve solo las filas que encuentran pareja en ambas tablas. **`LEFT JOIN`** conserva todas las filas de la tabla de la izquierda, aunque no tengan pareja; donde falta, rellena con `NULL`. Con `clientes LEFT JOIN pedidos`, un cliente que nunca ha pedido aparece con sus columnas de pedido en `NULL`. Con `INNER JOIN`, ese cliente desaparece del reporte sin avisar. Si tu pregunta era "cuánto gasta cada cliente", el `INNER` te esconde exactamente a los que gastan cero, que suelen ser los que más te interesa recuperar.

El error clásico es **`ON` contra `WHERE`**. `ON` describe cómo se emparejan las filas; `WHERE` filtra el resultado ya unido. Si pones la condición de la tabla derecha en el `WHERE` después de un `LEFT JOIN`, las filas sin pareja —que tienen `NULL` en esa columna— fallan el filtro y desaparecen: tu `LEFT JOIN` se comportó como un `INNER` sin que lo notes. La condición va en el `ON`.

Puedes encadenar varios: `pedidos` con `pedido_items`, y `pedido_items` con `platillos`, para saber no solo quién pidió, sino qué platillos. Y ahí te importa aunque la IA escriba el SQL: los reportes de ventas se construyen con `JOIN`, y un `JOIN` mal condicionado no da error, da cifras infladas o clientes faltantes. Saber si pediste `INNER` o `LEFT` es saber qué pregunta estás respondiendo de verdad.

### Analogía

Es la mesa de registro de una boda, con dos listas: la de invitados confirmados y la de mesas asignadas. `INNER JOIN` es leer solo los renglones donde el nombre aparece en las dos listas: obtienes una lista impecable de personas sentadas, y sin darte cuenta borras a los invitados que confirmaron pero todavía no tienen mesa; no aparecen, no dan error, simplemente no existen en tu hoja. `LEFT JOIN` es recorrer primero la lista de invitados y, para cada uno, buscar su mesa: si no la encuentra, escribes "sin asignar" y sigues. Ahí sí ves el problema. Y `ON` contra `WHERE` es la diferencia entre buscar la mesa de cada invitado y, al final, tirar a la basura todas las hojas donde la mesa quedó en blanco.

### Cómo se ve en la práctica

Primero el reporte que parece correcto y no lo es: cuántos pedidos hizo cada cliente, con `INNER JOIN`.

```sql
SELECT c.nombre, COUNT(p.id) AS pedidos
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nombre
ORDER BY pedidos DESC;
```

Devuelve solo a quienes ya pidieron. Los clientes registrados sin pedidos no existen en el resultado. Cambia una palabra y aparece la lista completa:

```sql
SELECT c.nombre, COUNT(p.id) AS pedidos
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nombre
ORDER BY pedidos ASC;
```

```js
      nombre      | pedidos
------------------+---------
 Laura Méndez     |       0
 Iván Soto        |       0
 Ana Ramírez      |       4
 Luis Herrera     |       7
```

Nota el `COUNT(p.id)` en vez de `COUNT(*)`: con `LEFT JOIN`, la fila del cliente sin pedidos existe pero su `p.id` es `NULL`, y `COUNT` de una columna ignora los nulos (m4-b14). Con `COUNT(*)` ese cliente contaría como 1 pedido inexistente.

El caso del `ON` contra el `WHERE`, con la condición de estado:

```sql
-- Correcto: conserva a todos los clientes; solo empareja pedidos entregados
SELECT c.nombre, p.id, p.total
FROM clientes c
LEFT JOIN pedidos p
  ON p.cliente_id = c.id AND p.estado = 'entregado'
ORDER BY c.nombre;

-- Trampa: el WHERE vuelve a esconder a los clientes sin pedidos entregados
SELECT c.nombre, p.id, p.total
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
WHERE p.estado = 'entregado'
ORDER BY c.nombre;
```

Y el encadenado de tres tablas, que responde "qué se pidió en el pedido 42":

```sql
SELECT p.id AS pedido, pl.nombre AS platillo, pi.cantidad, pi.precio_unitario
FROM pedidos p
JOIN pedido_items pi ON pi.pedido_id = p.id
JOIN platillos pl ON pl.id = pi.platillo_id
WHERE p.id = 42;
```

**Advertencia:** un `JOIN` mal condicionado casi nunca lanza un error: devuelve filas de más. Si olvidas una parte de la condición, cada pedido se empareja con varios clientes y tu suma de ventas se multiplica; el reporte se ve perfecto y está mal. Antes de confiar en una cifra que salió de un `JOIN`, compara el total con el de la tabla sola: si no coincide, la condición está incompleta.

### Díselo a la IA

> "Necesito responder esta pregunta con mi base PostgreSQL: [por ejemplo, qué clientes registrados no han hecho ningún pedido este mes]. Mis tablas son `clientes(id, nombre)` y `pedidos(id, cliente_id, fecha, estado, total)`. Antes de escribir SQL, dime si la pregunta necesita conservar filas sin pareja y por qué eliges `INNER` o `LEFT JOIN`. Escribe la consulta con alias, explica qué hace cada condición del `ON` y dime si alguna condición debería ir en el `WHERE`. Al final dame una consulta de control que cuente las filas de cada lado, para comprobar que no perdí ni dupliqué registros."

Esa última petición —la consulta de control— es la que separa un reporte que se puede presentar de uno que solo se ve bonito.

### Ejercicios

**1. [opción múltiple]** Con <code>FROM clientes c LEFT JOIN pedidos p ON p.cliente_id = c.id</code>, ¿qué pasa con un cliente que nunca ha pedido?
   - a) No aparece en el resultado
   - b) Aparece una vez, con las columnas de pedido en NULL ✔
   - c) Aparece una vez por cada pedido de otros clientes
   - d) La consulta falla porque no hay pareja

**2. [relacionar]** Une cada elemento con su pareja:
   - INNER JOIN ↔ Solo las filas que tienen pareja en ambas tablas
   - LEFT JOIN ↔ Todas las filas de la izquierda, con NULL donde no hay pareja
   - ON ↔ Condición que decide cómo se emparejan las filas
   - WHERE ↔ Filtro que se aplica después de unir

**3. [verdadero/falso]** "Si después de un LEFT JOIN agregas WHERE p.estado = 'entregado', los clientes sin pedidos entregados siguen apareciendo en el resultado."
   - Respuesta: FALSO — esas filas tienen p.estado en NULL, el WHERE las descarta y el LEFT JOIN termina comportándose como un INNER JOIN. La condición debe ir en el ON si quieres conservarlas.

**4. [qué hace]** ¿Por qué se usa COUNT(p.id) y no COUNT(*)?

```sql
SELECT c.nombre, COUNT(p.id) AS pedidos
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nombre;
```

   - a) Porque COUNT(*) es más lento en todas las bases
   - b) Porque COUNT(*) contaría la fila del cliente sin pedidos como si tuviera uno ✔
   - c) Porque COUNT(p.id) ordena los resultados automáticamente
   - d) Porque COUNT(*) no funciona con LEFT JOIN

**5. [completar]** "El ____ JOIN devuelve solo las filas que coinciden en ambas tablas; el ____ JOIN conserva todas las de la izquierda y rellena con ____ donde no hay pareja."
   - Banco: `INNER` · `LEFT` · `NULL` · `OUTER`
   - Respuesta: INNER / LEFT / NULL

---

## B14 — Agregación: COUNT, SUM, AVG

### Concepto

Hasta ahora cada fila producía una fila. Las funciones de agregación rompen esa regla: toman muchas filas y devuelven un solo número. `COUNT` cuenta, `SUM` suma, `AVG` promedia; también existen `MIN` y `MAX`. Son la materia prima de cualquier tablero: cuántos pedidos hubo, cuánto se vendió, cuál es el ticket promedio.

La primera distinción que hay que dominar es `COUNT(*)` contra `COUNT(columna)`. `COUNT(*)` cuenta filas, punto. `COUNT(columna)` cuenta cuántas filas tienen un valor no nulo en esa columna. Si tienes cien clientes y veinte no dejaron teléfono, `COUNT(*)` devuelve 100 y `COUNT(telefono)` devuelve 80. No es un detalle académico: es la diferencia entre decirle a tu jefe "tenemos cien clientes" y "ochenta con teléfono". Como `SUM` y `AVG` también ignoran los `NULL`, ese vacío se propaga a los promedios.

Aquel detalle muerde en `AVG`, y vale la pena verlo con números. Si tres pedidos costaron 100, 200 y `NULL` (porque uno quedó sin total), `AVG(total)` devuelve 150, no 100: divide entre dos, no entre tres. El promedio de una columna con nulos es el promedio de los que sí tienen dato. Si lo que quieres es tratar el nulo como cero, se escribe `AVG(COALESCE(total, 0))`. Y el otro comportamiento que sorprende: sobre cero filas, `COUNT` devuelve 0 pero `SUM` y `AVG` devuelven `NULL`, no cero. En un tablero eso se ve como una celda vacía; se arregla con `COALESCE(SUM(total), 0)`.

Con dinero hay una regla aparte. Los totales se guardan en `NUMERIC` o `DECIMAL`, nunca en `float`, porque el punto flotante no representa los centavos con exactitud y los errores se acumulan al sumar miles de filas (m4-b4). Y el redondeo se hace al final, sobre el resultado: `ROUND(SUM(total), 2)`. Redondear cada fila antes de sumar produce diferencias de centavos que, en un corte de caja, alguien va a reclamar.

Sin `GROUP BY`, un agregado resume la tabla completa en una sola fila. Eso ya es útil —el total vendido del mes— pero casi nunca es lo que necesitas; normalmente quieres el total por día, por cliente o por platillo. Para eso está `GROUP BY` (m4-b15), que es el siguiente paso natural.

### Analogía

Es el embarque de cajas que llega a una bodega. `COUNT(*)` cuenta cuántas cajas bajaron del camión, incluidas las que llegaron sin etiqueta de peso. `COUNT(peso)` cuenta solo las etiquetadas: las otras existen, pero no aportan número. `SUM(peso)` suma únicamente las etiquetas legibles, y `AVG(peso)` divide entre las etiquetadas, no entre todas las cajas; por eso el promedio sale más alto de lo que esperabas si justo las cajas pesadas llegaron sin etiqueta. Y nadie promedia los promedios de cada tarima para obtener el promedio del camión: una tarima con dos cajas pesaría lo mismo que una con cuarenta. El promedio se calcula una vez, sobre el total de cajas y el total de kilos.

### Cómo se ve en la práctica

El tablero de Tacos El Volcán empieza con tres números que deben coincidir con la realidad del negocio:

```sql
SELECT COUNT(*)                              AS pedidos,
       COUNT(cliente_id)                     AS con_cliente,
       COUNT(*) - COUNT(cliente_id)          AS sin_cliente
FROM pedidos;
```

Si el tercer número no es cero, hay pedidos huérfanos: se registraron sin cliente asociado. Esa resta es una auditoría de un segundo.

Lo vendido y el ticket promedio, con el redondeo en el lugar correcto:

```sql
SELECT COUNT(*)                          AS pedidos,
       ROUND(SUM(total), 2)              AS ingresos,
       ROUND(AVG(total), 2)              AS ticket_promedio,
       ROUND(MIN(total), 2)              AS pedido_minimo,
       ROUND(MAX(total), 2)              AS pedido_maximo
FROM pedidos
WHERE estado = 'entregado';
```

Y la suma calculada desde el detalle, que es la que vale cuando hay promociones o precios históricos: el precio se toma del renglón del pedido, no del menú de hoy.

```sql
SELECT SUM(cantidad * precio_unitario) AS vendido_en_platillos
FROM pedido_items;
```

El contraste de `COUNT` con nulos, en la tabla de reseñas:

```sql
SELECT COUNT(*)          AS resenas,
       COUNT(comentario) AS con_texto,
       ROUND(AVG(estrellas), 1) AS promedio_estrellas
FROM resenas;
```

Y el caso vacío, que rompe tableros:

```sql
-- Devuelve NULL, no 0
SELECT SUM(total) FROM pedidos WHERE fecha = '1900-01-01';

-- Devuelve 0 y el tablero no se rompe
SELECT COALESCE(SUM(total), 0) FROM pedidos WHERE fecha = '1900-01-01';
```

**Advertencia:** nunca guardes precios ni totales en `float` ni en `double precision`. `0.1 + 0.2` no da exactamente `0.3` en punto flotante, y al sumar diez mil renglones la diferencia deja de ser invisible. Usa `NUMERIC(10,2)`, suma en esa precisión y redondea solo al presentar. Un centavo por pedido parece nada hasta que el contador te pide explicaciones por una diferencia de trescientos pesos.

### Díselo a la IA

> "Necesito tres números para el tablero de mi taquería, en PostgreSQL: pedidos del mes, ingresos del mes y ticket promedio. Las columnas son `pedidos(id, fecha, estado, total NUMERIC(10,2))`. Para cada número dime: qué función usas, si los pedidos cancelados entran o no y por qué, y qué devuelve la consulta si no hubo ningún pedido en el rango (quiero 0, no una celda vacía). Usa `COALESCE` donde haga falta y redondea solo el resultado final, nunca cada fila. Al final dame una consulta de verificación que calcule el promedio como `SUM(total) / COUNT(*)` para comprobar que `AVG` no me está escondiendo nulos."

Ese último control detecta el error más común de los tableros: un promedio que divide entre menos filas de las que crees.

### Ejercicios

**1. [opción múltiple]** Hay 50 reseñas y 12 no tienen comentario escrito. ¿Qué devuelven <code>COUNT(*)</code> y <code>COUNT(comentario)</code>?
   - a) 50 y 50, porque los nulos cuentan como texto vacío
   - b) 50 y 38 ✔
   - c) 38 y 50
   - d) 50 y 12

**2. [verdadero/falso]** "Si una consulta con SUM no encuentra ninguna fila, devuelve 0."
   - Respuesta: FALSO — SUM y AVG devuelven NULL sobre un conjunto vacío; solo COUNT devuelve 0. Para un tablero se usa COALESCE(SUM(total), 0).

**3. [completar]** "Para que un promedio trate los valores nulos como cero se escribe AVG(____(total, 0)); y para redondear el resultado a dos decimales, ____(SUM(total), 2)."
   - Banco: `COALESCE` · `ROUND` · `CAST` · `COUNT`
   - Respuesta: COALESCE / ROUND

**4. [qué hace]** Si la primera columna da 120 y la segunda 117, ¿qué significa?

```sql
SELECT COUNT(*) AS pedidos,
       COUNT(cliente_id) AS con_cliente
FROM pedidos;
```

   - a) Que hay 3 pedidos cancelados
   - b) Que 3 pedidos no tienen cliente asociado (cliente_id es NULL) ✔
   - c) Que 3 clientes hicieron más de un pedido
   - d) Que la consulta está mal escrita y no debería correr

**5. [relacionar]** Une cada elemento con su pareja:
   - COUNT(*) ↔ Cuenta filas, incluidas las que tienen nulos
   - COUNT(columna) ↔ Cuenta solo las filas con valor no nulo en esa columna
   - SUM(columna) ↔ Suma los valores no nulos; NULL si no hay filas
   - AVG(columna) ↔ Divide la suma entre la cantidad de valores no nulos

---

## B15 — GROUP BY: resumir información

### Concepto

`GROUP BY` parte las filas en montones según el valor de una o varias columnas y devuelve **una fila por montón**. Es el paso que convierte una lista de pedidos en un reporte: ventas por día, pedidos por cliente, platillos más vendidos. Sin él, un agregado resume toda la tabla en una sola línea; con él, resume cada grupo.

La regla que hay que respetar es sencilla y la base te la hace cumplir: en el `SELECT` solo puedes poner columnas que estén en el `GROUP BY` y funciones de agregación. Si agrupas por `platillo_id`, no puedes pedir `nombre` a menos que también lo agrupes. No es capricho: dentro de un grupo hay muchos nombres posibles y la base no sabe cuál mostrarte. El error típico es `column must appear in the GROUP BY clause`, y la solución casi siempre es agregar la columna al `GROUP BY`, no quitarla del `SELECT`.

Ahora la distinción que separa a quien entiende reportes de quien los copia: **`WHERE` filtra filas antes de agrupar; `HAVING` filtra grupos después de agregar**. `WHERE estado = 'entregado'` decide qué pedidos entran al cálculo. `HAVING SUM(total) > 5000` decide qué grupos sobreviven al resultado. Por eso `WHERE SUM(total) > 5000` es un error: en ese momento la suma todavía no existe. El orden real de evaluación es `FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` → `LIMIT`, y entenderlo explica casi todos los errores de SQL de una vez.

Dos ejemplos reales del negocio. Ventas por día: agrupas por `DATE(fecha)`, porque la fecha completa incluye hora y cada pedido caería en su propio grupo. Platillo más vendido: agrupas por platillo, sumas cantidades, ordenas de mayor a menor y cortas con `LIMIT 1`. Ese `ORDER BY ... LIMIT 1` sobre un agregado es el patrón del "top N", y sirve para lo mismo con clientes, días o categorías.

Te importa porque todo reporte que le prometas al dueño del negocio es un `GROUP BY`. Cuando pidas "un tablero de ventas", la IA va a escribir uno; si no distingues `WHERE` de `HAVING` ni sabes qué se agrupa, no vas a poder detectar el reporte que suma pedidos cancelados o que agrupa por la columna equivocada. Y esos errores no truenan: dan cifras elegantes y falsas.

### Analogía

Es el reparto del correo en una oficina postal. Llega un costal con cientos de sobres y el primer paso es hacer pilas por código postal: eso es `GROUP BY`. Después, de cada pila sacas un número: cuántos sobres son y cuánto pesan en total; eso son `COUNT` y `SUM`, y por eso solo puedes reportar el código postal y los totales, no el nombre de un destinatario cualquiera de la pila. El `WHERE` es el filtro de la entrada: solo dejamos pasar los sobres con estampilla, antes de formar pilas. El `HAVING` es la decisión de la salida: de las pilas ya formadas, solo despachamos las que tienen veinte sobres o más. Filtrar antes de separar y filtrar después de contar son operaciones distintas, y confundirlas te hace preguntar por el peso de un sobre que todavía no existe.

### Cómo se ve en la práctica

Ventas por día en Tacos El Volcán. El `WHERE` deja fuera lo cancelado y el `GROUP BY` usa `DATE(fecha)` para que la hora no fragmente los grupos:

```sql
SELECT DATE(fecha)              AS dia,
       COUNT(*)                 AS pedidos,
       ROUND(SUM(total), 2)     AS ingresos,
       ROUND(AVG(total), 2)     AS ticket_promedio
FROM pedidos
WHERE estado = 'entregado'
GROUP BY DATE(fecha)
ORDER BY dia;
```

```js
    dia     | pedidos | ingresos | ticket_promedio
------------+---------+----------+-----------------
 2026-11-17 |      34 |  4820.50 |          141.78
 2026-11-18 |      41 |  5975.00 |          145.73
 2026-11-19 |      29 |  4102.00 |          141.45
```

El platillo más vendido, con el `JOIN` que traduce el id a nombre (m4-b13) y el `ORDER BY ... LIMIT` del top:

```sql
SELECT pl.nombre,
       SUM(pi.cantidad)                          AS piezas,
       ROUND(SUM(pi.cantidad * pi.precio_unitario), 2) AS ingresos
FROM pedido_items pi
JOIN platillos pl ON pl.id = pi.platillo_id
GROUP BY pl.id, pl.nombre
ORDER BY piezas DESC
LIMIT 3;
```

Y `HAVING` en acción: clientes frecuentes, es decir, grupos que superan un umbral.

```sql
SELECT c.nombre, COUNT(p.id) AS pedidos
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
WHERE p.estado <> 'cancelado'
GROUP BY c.id, c.nombre
HAVING COUNT(p.id) >= 5
ORDER BY pedidos DESC;
```

El mismo reporte con las dos piezas separadas se lee así: `WHERE` quitó los cancelados antes de contar; `GROUP BY` hizo un montón por cliente; `HAVING` tiró los montones con menos de cinco; `ORDER BY` los puso del más frecuente al menos.

**Advertencia:** si tu `WHERE` no excluye los pedidos cancelados, el reporte de ingresos los va a sumar y el total no va a cuadrar con la caja. Ese error no da mensaje de error: da un número más alto, y se descubre semanas después cuando alguien intenta conciliar. Antes de presentar cualquier cifra, pregúntate qué filas entraron al cálculo y cuáles debieron quedar fuera.

### Díselo a la IA

> "Necesito un reporte de ventas por día de mi taquería en PostgreSQL: fecha, número de pedidos, ingresos y ticket promedio. Mis tablas son `pedidos(id, fecha, estado, total NUMERIC(10,2))` y los estados posibles son `pendiente`, `entregado` y `cancelado`. Escribe la consulta agrupando por día y explícame qué filas deja entrar el `WHERE` y por qué. Después agrégale un `HAVING` para quedarte solo con los días de más de 20 pedidos, y dime en una frase la diferencia entre ese `HAVING` y el `WHERE`. Al final dame una segunda consulta que devuelva el platillo más vendido del mes, agrupando por platillo y ordenando por piezas."

Pide siempre el "por qué" del filtro: es donde se esconden los reportes que suman lo que no deben.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es la diferencia entre <code>WHERE</code> y <code>HAVING</code>?
   - a) Son sinónimos; solo cambia el orden en que se escriben
   - b) WHERE filtra filas antes de agrupar; HAVING filtra grupos después de agregar ✔
   - c) WHERE funciona con texto y HAVING solo con números
   - d) HAVING se usa sin GROUP BY y WHERE con GROUP BY

**2. [ordenar]** Ordena las etapas en el orden real en que la base las evalúa:
   - Orden correcto: FROM y JOIN arman el conjunto → WHERE filtra filas → GROUP BY forma los grupos → HAVING filtra grupos → SELECT calcula columnas y agregados → ORDER BY ordena el resultado → LIMIT recorta

**3. [verdadero/falso]** "Para quedarte solo con los días cuyos ingresos superan 5000, puedes escribir WHERE SUM(total) > 5000."
   - Respuesta: FALSO — el WHERE se evalúa antes de agrupar, cuando la suma todavía no existe. Ese filtro va en HAVING SUM(total) > 5000, después del GROUP BY.

**4. [completar]** "Para agrupar pedidos por día se escribe GROUP BY ____(fecha); para conservar solo los grupos con más de 20 pedidos se usa ____ COUNT(*) > 20."
   - Banco: `DATE` · `HAVING` · `WHERE` · `ROUND`
   - Respuesta: DATE / HAVING

**5. [qué hace]** ¿Qué devuelve esta consulta?

```sql
SELECT platillo_id, SUM(cantidad) AS piezas
FROM pedido_items
GROUP BY platillo_id
ORDER BY piezas DESC
LIMIT 1;
```

   - a) El pedido con más platillos distintos
   - b) El platillo que se vendió en más piezas, sin importar en cuántos pedidos ✔
   - c) La cantidad de platillos distintos que se vendieron
   - d) El precio unitario más alto del menú

---

## B16 — Índices: por qué tu consulta tarda y cómo se arregla

### Concepto

Cuando una consulta tarda, casi nunca es que "la base de datos sea lenta". Es que el motor está leyendo filas que no necesita. Si `pedidos` tiene 200 mil filas y buscas las del cliente 42, sin índice el motor las revisa una por una hasta encontrar las que coinciden. Ese recorrido completo se llama *full table scan*, y es lo mismo que buscar un tema en un manual de 900 páginas hojeando hoja por hoja.

Un **índice** es una estructura aparte, ordenada, que guarda el valor de una columna junto con la ubicación de su fila. El motor consulta esa lista corta, encuentra la ubicación y salta directo. En PostgreSQL el índice más común es un **B-tree**, que mantiene los valores en orden; por eso también sirve para `ORDER BY` y para rangos, no solo para igualdades.

La herramienta para ver qué está haciendo el motor es `EXPLAIN`. Te muestra el **plan**: si leyó la tabla completa (`Seq Scan`) o usó un índice (`Index Scan`), cuántas filas estimó y cuánto costó. Con `EXPLAIN ANALYZE` además lo ejecuta y te da tiempos reales. Ese es el paso que casi todos se saltan: agregar índices a ciegas es recetar sin ver al paciente.

Hay casos en los que el índice existe y aun así no se usa: cuando envuelves la columna en una función (`WHERE lower(correo) = ...`), cuando buscas con comodín al inicio (`LIKE '%volcan'`), cuando comparas tipos distintos (texto contra número) o cuando la columna tiene tan pocos valores distintos que leerla completa sale más barato. Dato para recordar: **un índice sobre una columna con dos valores posibles casi no acelera nada**; el motor gana más leyendo la tabla entera.

Y nada es gratis. Cada índice es una estructura más que hay que actualizar en cada `INSERT`, `UPDATE` y `DELETE`, y ocupa disco y memoria. Una tabla con diez índices hace diez veces más trabajo de escritura por fila. La regla práctica: indexa lo que de verdad filtras, ordenas o usas para unir tablas (m4-b13), y después revisa si ese índice se está usando.

Los **índices compuestos** cubren varias columnas y el orden importa. Un índice sobre `(cliente_id, creado_en)` sirve para buscar por cliente y ordenar por fecha; no sirve para buscar solo por fecha, porque la fecha está debajo del cliente en la estructura. Es como un directorio ordenado por apellido y luego por nombre: si solo sabes el nombre, no puedes saltar directo.

Cuando diriges a la IA, la diferencia entre decirle "haz que sea rápido" y decirle "mide con EXPLAIN, muéstrame el plan y propón el índice" es la diferencia entre esperar y saber. Tú no escribes el índice: tú pides la medición y verificas que el número bajó.

### Analogía

Es el **índice de un manual de taller** de 900 páginas. Buscas cómo cambiar el termostato: sin índice, hojeas hasta encontrarlo; con índice, vas a la letra T y saltas a la página 412. El índice no tiene el contenido, solo la pista de dónde está. Y trae sus letras chiquitas: está ordenado por marca y modelo, así que si llegas preguntando solo por el año, no te sirve y vuelves a hojear. Además, cada vez que el fabricante mete un capítulo nuevo, alguien tiene que rehacer el índice: ese es el costo de escritura, y por eso no se indexa todo.

### Cómo se ve en la práctica

Este es el diagnóstico completo, con SQL real. Primero mides:

```sql
EXPLAIN ANALYZE
SELECT id, total, creado_en
FROM pedidos
WHERE cliente_id = 42
ORDER BY creado_en DESC
LIMIT 10;

-- Seq Scan on pedidos  (cost=0.00..5310.00 rows=14 width=32)
--                      (actual time=0.028..46.910 rows=12 loops=1)
-- Planning Time: 0.180 ms
-- Execution Time: 47.203 ms
```

Cuarenta y siete milisegundos para doce filas, con un recorrido completo de la tabla. Creas el índice compuesto y vuelves a medir:

```sql
CREATE INDEX CONCURRENTLY idx_pedidos_cliente_fecha
  ON pedidos (cliente_id, creado_en DESC);

EXPLAIN ANALYZE
SELECT id, total, creado_en
FROM pedidos
WHERE cliente_id = 42
ORDER BY creado_en DESC
LIMIT 10;

-- Index Scan using idx_pedidos_cliente_fecha on pedidos
--   (actual time=0.021..0.038 rows=12 loops=1)
-- Execution Time: 0.061 ms
```

La misma consulta pasó de 47 ms a 0.06 ms. Y ojo con lo que `EXPLAIN ANALYZE` hace de verdad: ejecuta la consulta. Si le pones un `DELETE` o un `UPDATE` adelante, lo ejecuta en serio.

**Advertencia:** nunca crees un índice en producción sin `CONCURRENTLY` (en PostgreSQL) o sin ventana de mantenimiento, porque bloquea las escrituras mientras se construye. Y no borres un índice "porque nadie lo usa" sin revisar los planes de las consultas que corren: lo que se rompe es el reporte que nadie mira hasta el cierre de mes.

### Díselo a la IA

> "Esta consulta tarda [X] segundos en producción: [pega la consulta]. La tabla [nombre] tiene [N] filas. Antes de proponer nada, pídeme el resultado de EXPLAIN (ANALYZE, BUFFERS) y léelo conmigo: dime si hay Seq Scan, cuántas filas estima contra cuántas devuelve, y si el problema es falta de índice o una consulta mal escrita. Después propón el índice exacto, con columnas y orden, dame el CREATE INDEX CONCURRENTLY listo para correr, el costo de escritura que agrega y cómo verificamos la mejora con el mismo EXPLAIN. No agregues índices que no estén justificados por esta consulta."

Con eso la IA deja de adivinar y tú tienes una medición antes y después para comprobar que sirvió.

### Ejercicios

**1. [opción múltiple]** ¿Qué hace un índice en la práctica?
   - a) Comprime la tabla para que ocupe menos disco
   - b) Guarda valores ordenados con la ubicación de su fila, para no leer la tabla completa ✔
   - c) Cachea el resultado de todas las consultas
   - d) Obliga a la base a usar menos memoria

**2. [verdadero/falso]** "Agregar un índice acelera las lecturas y no tiene ningún costo."
   - Respuesta: FALSO — cada índice se actualiza en cada INSERT, UPDATE y DELETE, y ocupa disco y memoria. El costo se paga en escrituras.

**3. [completar]** "Para saber si una consulta usó un índice se revisa el ____, y en PostgreSQL un recorrido completo de la tabla aparece como ____ Scan."
   - Banco: `plan` · `Seq` · `índice` · `Index` · `caché`
   - Respuesta: plan / Seq

**4. [ordenar]** Ordena el proceso para arreglar una consulta lenta sin adivinar:
   - Orden correcto: Medir la consulta con EXPLAIN ANALYZE → Leer el plan y detectar si hay Seq Scan → Crear el índice que corresponde al filtro y al orden → Volver a medir con el mismo EXPLAIN → Revisar el costo de escritura que agregó

**5. [qué hace]** Devuelve 12 filas, pero el plan dice Seq Scan sobre 200 mil. ¿Qué significa?

```sql
EXPLAIN ANALYZE
SELECT * FROM pedidos WHERE cliente_id = 42;

-- Seq Scan on pedidos  (cost=0.00..5310.00 rows=12 width=88)
--                       (actual time=0.031..48.220 rows=12 loops=1)
```

   - a) Que la base está caída y respondió en caché
   - b) Que no hay un índice usable en cliente_id y el motor leyó la tabla completa ✔
   - c) Que el cliente 42 no existe
   - d) Que falta un ORDER BY para que use el índice

---

## B17 — Normalización sin dolor

### Concepto

Normalizar suena a tema de escuela, pero en la práctica es una sola pregunta: **¿este dato vive en un solo lugar?** Si el teléfono de un cliente está escrito en cada uno de sus pedidos, tu base tiene cuarenta versiones de la verdad y ninguna es la buena. El día que el cliente cambia de número actualizas treinta y nueve filas, o ninguna, o la mitad.

Eso es todo el problema. La normalización es el conjunto de reglas que evita que el mismo dato se guarde en dos lados y se separe con el tiempo. Se explica con tres pasos, y cada uno resuelve un tipo de desorden distinto.

**Primera forma normal (1FN):** una celda, un valor. Nada de `platillos: "pastor, suadero, tripa"` en una columna. Si necesitas varios valores, esos valores son filas en otra tabla, no una lista dentro de un campo. También implica que cada fila se pueda identificar sola, con su llave (m4-b5).

**Segunda forma normal (2FN):** cada columna depende de *toda* la llave, no de una parte. En una tabla de detalle con llave `(pedido_id, platillo_id)`, el nombre del platillo depende solo de `platillo_id`: si el platillo se llama distinto, tendrías que corregirlo en cien pedidos. Ese nombre pertenece a la tabla `platillos`, y aquí solo va la referencia.

**Tercera forma normal (3FN):** ninguna columna depende de otra que no sea la llave. Si en `clientes` guardas colonia y código postal, y la colonia ya determina el código postal, tienes un dato derivado que puede contradecirse. Se saca a su propia tabla o se calcula, pero no se copia.

Hay una excepción que conviene entender, no memorizar: en una factura sí se copia el precio al momento de la venta. No es un error de normalización, es historia: el precio de hoy no debe reescribir lo que se cobró ayer. La regla no es "nunca dupliques", es "no dupliques lo que debe cambiar junto". Un dato, un lugar; y cuando el dato es histórico, se congela a propósito.

Más tablas no es automáticamente mejor. Cada división agrega un `JOIN` (m4-b13) y cada unión cuesta. Normaliza hasta que cada hecho viva en un solo sitio y luego mide; si un reporte se vuelve lentísimo, se resuelve con una vista o una tabla de resumen, no desordenando el modelo. Cuando la IA te entregue un esquema, pregúntale dónde vive cada dato y qué pasa cuando cambia.

### Analogía

Es la **bodega de refacciones de un taller** donde cada mecánico guarda lo que usa en su propia caja. El mismo filtro de aceite vive en cinco cajas distintas, con cantidades anotadas en papeles diferentes: nadie sabe cuántos hay de verdad y cuando llega el proveedor nadie sabe qué pedir. Normalizar es mudar todo a un solo estante por número de parte: un cajón, una etiqueta, una tarjeta de existencia. Cuesta un fin de semana de mudanza y, a partir de ahí, cualquiera encuentra la pieza y el inventario cuadra.

### Cómo se ve en la práctica

Así crece una tabla que nadie normalizó. Cada pedido arrastra los datos del cliente:

```sql
SELECT id, cliente_nombre, cliente_telefono, cliente_colonia, total
FROM pedidos LIMIT 3;

 id | cliente_nombre | cliente_telefono | cliente_colonia | total
----+----------------+------------------+-----------------+-------
  1 | Ana Ruiz       | 555-1020         | Roma Norte      |   180
  2 | Ana Ruiz       | 555-1020         | Roma Norte      |   240
  3 | Beto Salas     | 555-8891         | Del Valle       |    95
```

El teléfono de Ana aparece dos veces y va a seguir apareciendo. Se parte en dos tablas, en una sola transacción (m4-b18) para que no quede a medias:

```sql
BEGIN;

CREATE TABLE clientes (
  id       bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre   text NOT NULL,
  telefono text,
  colonia  text
);

INSERT INTO clientes (nombre, telefono, colonia)
SELECT DISTINCT cliente_nombre, cliente_telefono, cliente_colonia
FROM pedidos;

ALTER TABLE pedidos ADD COLUMN cliente_id bigint;

UPDATE pedidos p
SET cliente_id = c.id
FROM clientes c
WHERE c.nombre = p.cliente_nombre
  AND c.telefono IS NOT DISTINCT FROM p.cliente_telefono;

-- antes de seguir: nadie se quedó sin cliente_id
SELECT count(*) FROM pedidos WHERE cliente_id IS NULL;

ALTER TABLE pedidos ALTER COLUMN cliente_id SET NOT NULL;
ALTER TABLE pedidos
  ADD CONSTRAINT fk_pedidos_cliente
  FOREIGN KEY (cliente_id) REFERENCES clientes(id);

ALTER TABLE pedidos
  DROP COLUMN cliente_nombre,
  DROP COLUMN cliente_telefono,
  DROP COLUMN cliente_colonia;

COMMIT;
```

El `SELECT DISTINCT` es el paso que hay que vigilar: si dos clientes distintos se llaman igual y escribieron el mismo teléfono, se fusionan en uno. Cuenta los clientes antes y después, y revisa los casos raros antes de borrar columnas.

**Advertencia:** la parte peligrosa de normalizar no es crear tablas, es **mover y borrar datos**. Nunca corras ese bloque por primera vez en producción: pruébalo en una copia, compara cuántas filas había y cuántas quedaron, y ten un respaldo reciente (m4-b20). Un `DROP COLUMN` no tiene deshacer.

### Díselo a la IA

> "Te paso este esquema: [pega el CREATE TABLE]. Normalízalo hasta tercera forma normal y muéstrame el antes y el después con las tablas nuevas, sus llaves y las foráneas. Para cada columna que muevas, dime qué hecho representa y dónde vivirá. Después dame el script de migración completo dentro de una transacción, que incluya: creación de tablas, llenado desde la tabla vieja, verificación de que ninguna fila quedó sin referencia, y el borrado de columnas al final. Antes de proponer el borrado, dime qué datos podrían perderse o fusionarse por error y qué consulta debo correr para detectarlo en una copia."

Ese último punto es el que separa una migración de un accidente: la IA te dice qué revisar antes de destruir, no después.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es el objetivo real de normalizar?
   - a) Tener la mayor cantidad de tablas posible
   - b) Que cada dato viva en un solo lugar para que no existan versiones contradictorias ✔
   - c) Que las consultas siempre sean más rápidas
   - d) Cumplir un requisito de la base de datos

**2. [relacionar]** Une cada elemento con su pareja:
   - 1FN ↔ Un solo valor por celda, sin listas dentro de un campo
   - 2FN ↔ Cada columna depende de toda la llave, no de una parte
   - 3FN ↔ Ninguna columna depende de otra que no sea llave
   - Llave foránea ↔ Conecta el registro con su tabla de origen

**3. [verdadero/falso]** "Mientras más se normaliza, mejor es el diseño en todos los casos."
   - Respuesta: FALSO — normalizar reduce contradicciones pero agrega JOIN; en reportes pesados a veces conviene una vista o tabla de resumen, decidida con medición.

**4. [completar]** "Si el teléfono del cliente está escrito en cada pedido, el mismo dato vive en ____ lugares; al normalizar, ese dato pasa a la tabla ____."
   - Banco: `muchos` · `clientes` · `uno` · `pedidos` · `dos`
   - Respuesta: muchos / clientes

**5. [ordenar]** Ordena los pasos para separar los datos del cliente de la tabla de pedidos:
   - Orden correcto: Detectas las columnas que se repiten en cada pedido → Creas la tabla clientes con su llave primaria → Insertas una sola vez cada cliente distinto → Agregas cliente_id a pedidos y lo llenas → Verificas que nadie quedó sin cliente y eliminas las columnas repetidas

---

## B18 — Transacciones: todo o nada

### Concepto

Un pedido toca varias tablas: se crea en `pedidos`, se guarda su detalle, se descuenta el inventario y se marca al cliente. Si el descuento de inventario falla después de crear el pedido, tu base queda diciendo que vendiste tres órdenes de pastor que no tienes. Nadie lo nota ese día; se nota cuando el cliente llega y no hay.

Una **transacción** es un bloque de operaciones que se confirma completo o no se confirma nada. Se abre con `BEGIN`, se cierra con `COMMIT` y se deshace con `ROLLBACK`. Entre el principio y el final, la base puede estar en un estado intermedio, pero nadie más lo ve y, si algo se rompe, ese estado intermedio se tira a la basura.

Lo que garantiza se resume en cuatro palabras que vas a escuchar: **atomicidad** (todo o nada), **consistencia** (las reglas se respetan, incluidas las llaves foráneas de m4-b8), **aislamiento** y **durabilidad** (si el `COMMIT` respondió, el dato sobrevive a un apagón).

El **aislamiento** merece una explicación sin academia: mientras tu transacción está abierta, las demás sesiones no ven tus cambios a medias. Si estás moviendo 20 cajas, nadie ve 10. PostgreSQL trabaja por defecto en *read committed*: cada consulta ve lo que ya estaba confirmado, nunca lo que está en curso. Los niveles más estrictos existen para casos contables, y se eligen cuando el problema lo pide, no por precaución general.

Cuando algo falla, no tienes que deshacer a mano: si la conexión se cae, si el proceso muere o si el servidor se reinicia antes del `COMMIT`, la base revierte sola. Por eso la frase clave es **una transacción no terminó hasta que viste el COMMIT**. Lo que hiciste antes no está guardado, está pendiente.

El precio es que mientras una transacción está abierta, las filas que tocó quedan bloqueadas. Una transacción que espera a que un humano apruebe algo, o que hace una llamada HTTP lenta en medio, puede tumbar el sistema completo: los demás se forman detrás. Regla de oficio: transacciones cortas, sin llamadas externas adentro, y si de verdad necesitas varios pasos con pausa, se modelan como estados (pendiente, pagado, enviado), no como una transacción eterna.

Cuando la IA te escriba el flujo de un pedido, revisa una cosa antes que el estilo: **¿las escrituras que deben ir juntas están dentro del mismo BEGIN y COMMIT?** Ese es el bug que aparece una vez cada mil pedidos, que nadie puede reproducir y que te cuesta clientes.

### Analogía

Es el **traspaso de 20 cajas entre dos andenes de carga** con un montacargas. El inventario dice que están en el andén A y tienen que quedar en el B. No existe un estado válido donde las cajas salieron de A pero no llegaron a B: si el turno se corta a la mitad, se devuelven a A y el conteo sigue cuadrando. Mientras el montacargas trabaja, el auditor no puede contar mitades: o ve las 20 en A, o las 20 en B. Y el traspaso no se da por hecho hasta que el responsable firma la hoja al final; si no hay firma, no pasó nada.

### Cómo se ve en la práctica

Este es el flujo de un pedido real, con la condición de inventario dentro del mismo `UPDATE` para que nunca baje de cero:

```sql
BEGIN;

UPDATE inventario
SET existencia = existencia - 3
WHERE platillo_id = 7
  AND existencia >= 3;
-- si respondió UPDATE 0, no había suficiente: ROLLBACK y avisa

INSERT INTO pedidos (cliente_id, total, estado)
VALUES (42, 180, 'pendiente')
RETURNING id;                    -- supongamos que devuelve 913

INSERT INTO pedido_detalle (pedido_id, platillo_id, cantidad)
VALUES (913, 7, 3);

COMMIT;
```

Entre el `BEGIN` y el `COMMIT`, otra sesión que consulte `pedidos` no ve el pedido 913, y si tu proceso muere en ese instante, tampoco queda. Así se ve el camino de error:

```sql
BEGIN;
UPDATE inventario
SET existencia = existencia - 3
WHERE platillo_id = 7
  AND existencia >= 3;          -- UPDATE 0: no alcanzaba
ROLLBACK;
-- la base queda exactamente como estaba

```

El detalle de oficio: verifica cuántas filas afectó cada paso (`UPDATE 0` es una respuesta, no un error) y no mandes correos ni cobros dentro de la transacción. Si el cobro tarda, la fila sigue bloqueada y todos esperan.

**Advertencia:** nunca dejes una transacción abierta esperando algo externo. Un `BEGIN` olvidado en un script, o una transacción que espera la respuesta de un humano, mantiene filas bloqueadas y puede congelar la app. Y si abres una transacción en la consola para "probar", acuérdate de cerrarla: el `ROLLBACK` también es una salida.

### Díselo a la IA

> "Voy a implementar este flujo: [describe, por ejemplo, crear pedido, descontar inventario y registrar el detalle]. Escríbelo como una sola transacción con BEGIN y COMMIT, y dime exactamente qué debe pasar si cualquiera de los pasos afecta cero filas. Incluye la condición de inventario suficiente en el UPDATE, el manejo de error con ROLLBACK, y una nota de qué pasa si la conexión se cae a la mitad. No metas llamadas a servicios externos dentro de la transacción: si hace falta cobrar o mandar un correo, propón cómo hacerlo después del COMMIT y qué pasa si esa parte falla."

Ese prompt convierte una idea suelta en un flujo que no vende tacos inexistentes.

### Ejercicios

**1. [opción múltiple]** ¿Qué garantiza una transacción?
   - a) Que las consultas sean más rápidas
   - b) Que un grupo de operaciones se confirme completo o no se confirme ninguna ✔
   - c) Que se pueda deshacer un COMMIT ya confirmado
   - d) Que la base nunca se bloquee

**2. [ordenar]** Ordena el flujo correcto de un pedido con inventario:
   - Orden correcto: BEGIN → Descontar inventario verificando que alcanza → Insertar el pedido → Insertar el detalle del pedido → COMMIT

**3. [verdadero/falso]** "Si el proceso se cae después de un UPDATE pero antes del COMMIT, los cambios quedan guardados porque el UPDATE ya se ejecutó."
   - Respuesta: FALSO — sin COMMIT la transacción se revierte al cerrarse la conexión; el cambio estaba pendiente, no confirmado.

**4. [completar]** "La orden ____ abre el bloque, ____ lo confirma y ____ lo deshace por completo."
   - Banco: `BEGIN` · `COMMIT` · `ROLLBACK` · `SAVEPOINT` · `GRANT`
   - Respuesta: BEGIN / COMMIT / ROLLBACK

**5. [qué hace]** ¿Qué queda guardado en la base?

```sql
BEGIN;
UPDATE inventario SET existencia = existencia - 3 WHERE platillo_id = 7;
-- el proceso se cae antes del COMMIT
```

   - a) El descuento de 3, porque el UPDATE ya corrió
   - b) Nada: sin COMMIT la transacción se revierte al cerrarse la conexión ✔
   - c) Solo el pedido, pero no el inventario
   - d) La tabla queda bloqueada para siempre

---

## B19 — Migraciones: cambiar la estructura sin romper lo que existe

### Concepto

El primer día tu tabla `pedidos` tenía cuatro columnas. Un año después tiene notas, estado de pago, descuento, canal de venta y una foránea nueva. Nada de eso se decidió de golpe: cada cambio respondió a algo que el negocio pidió. El problema no es cambiar la estructura; es cambiarla sin dejar la base en un estado que nadie sabe explicar.

Una **migración** es un archivo con los cambios de estructura, numerado, que se aplica en orden y queda registrado. Se guarda en el repositorio junto al código, se prueba primero en local, luego en una copia y al final en producción. La tabla `schema_migrations` (o la que use tu herramienta) anota qué archivos ya se aplicaron, para no correrlos dos veces.

Dato para recordar: **la estructura también es código**. Si un cambio no está en un archivo versionado, no existe: existe solo en la cabeza de quien lo hizo y en una base que va a divergir de las demás. El día que alguien reconstruya el proyecto desde cero, ese cambio se pierde.

Por eso la regla más importante: **nunca edites producción a mano sin registrarlo**. Un `ALTER TABLE` en el panel del proveedor a las 11 de la noche puede salvar la noche, pero si no lo conviertes en migración esa misma semana, el siguiente deploy asume una estructura que no está. Y el error aparece semanas después, en otro entorno, sin relación aparente.

El patrón seguro para agregar una columna obligatoria tiene tres pasos. Primero la agregas **nullable**, porque las filas que ya existen no tienen valor y un `NOT NULL` inmediato falla. Segundo, llenas las filas existentes con un valor razonable. Tercero, aplicas la restricción. Si lo haces de un golpe, o falla, o bloquea la tabla mientras reescribe todo.

Para renombrar o eliminar también hay un patrón: *expandir y contraer*. Agregas lo nuevo, haces que el código escriba en ambos lados, migras lecturas, y solo cuando nada usa lo viejo lo eliminas. Son dos deploys, no uno. El deploy de un solo paso se ve elegante hasta que el código viejo y el nuevo conviven treinta segundos y uno de los dos se cae.

Cuando diriges a la IA, pídele la migración, no el cambio suelto. "Agrega una columna" produce un `ALTER`; "escribe la migración 004 con este cambio, el llenado de datos y el rollback" produce algo que puedes revisar, versionar y repetir. La diferencia se nota el día que hay que hacerlo otra vez en otro ambiente.

### Analogía

Es **remodelar un edificio que sigue habitado**, con planos fechados y bitácora de obra. No cierras el edificio para cambiar el piso: lo haces por etapas, avisas qué área queda fuera de servicio y anotas en el libro qué se movió y en qué fecha. El que llega después abre el plano 004 y sabe exactamente en qué versión está el edificio. Si alguien tumba un muro sin registrarlo, el siguiente plano ya no cuadra y el problema aparece cuando menos lo esperas.

### Cómo se ve en la práctica

Agregar notas a los pedidos de Tacos El Volcán se hace en tres archivos, no en uno. Cada uno es una migración con número y nombre:

```sql
-- migrations/004_pedidos_notas.sql
ALTER TABLE pedidos ADD COLUMN notas text;

-- migrations/005_pedidos_notas_backfill.sql
UPDATE pedidos SET notas = '' WHERE notas IS NULL;

-- migrations/006_pedidos_notas_obligatorio.sql
ALTER TABLE pedidos ALTER COLUMN notas SET DEFAULT '';
ALTER TABLE pedidos ALTER COLUMN notas SET NOT NULL;
```

La tabla de control es lo que evita aplicar dos veces el mismo archivo:

```sql
CREATE TABLE IF NOT EXISTS schema_migrations (
  version    text PRIMARY KEY,
  applied_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO schema_migrations (version) VALUES ('004_pedidos_notas');
```

El ciclo completo es siempre el mismo: escribes la migración, la corres en local, la corres en una copia de producción con datos reales, revisas que la app siga funcionando, respaldas (m4-b20) y recién entonces la aplicas en producción. Si algo salió mal, no "arreglas" a mano: escribes la migración que corrige, con su número.

**Advertencia:** en tablas grandes cada `ALTER TABLE` toma un candado y puede dejar la app esperando; algunos cambios reescriben la tabla completa. No los lances en hora pico ni sin respaldo, y no borres una columna en el mismo deploy en que dejaste de usarla: primero comprueba que nada la lee (m4-b16 ayuda a ver qué consultas corren).

### Díselo a la IA

> "Necesito este cambio de estructura: [describe, por ejemplo, agregar notas obligatorias a pedidos]. Escríbelo como migraciones numeradas y separadas, no como un solo ALTER: una para agregar la columna nullable, otra para llenar las filas existentes y otra para aplicar la restricción. Incluye la sentencia para registrar la versión en schema_migrations, dime qué pasa con las filas que ya existen, cuánto puede tardar y qué se bloquea mientras corre. Agrégame el plan de reversa y una consulta para verificar antes y después que no se perdió nada."

Así la IA te entrega una obra con planos, no un muro tumbado a medianoche.

### Ejercicios

**1. [opción múltiple]** ¿Por qué se agrega primero la columna como nullable?
   - a) Porque ocupa menos espacio en disco
   - b) Porque las filas existentes no tienen valor y un NOT NULL inmediato fallaría ✔
   - c) Porque las columnas nullable son más rápidas
   - d) Porque así lo exige la llave primaria

**2. [verdadero/falso]** "Si haces un cambio urgente directo en el panel de producción, no hace falta convertirlo en migración mientras la app funcione."
   - Respuesta: FALSO — el siguiente deploy o la reconstrucción en otro ambiente asume una estructura que no está; el cambio debe quedar versionado esa misma semana.

**3. [relacionar]** Une cada elemento con su pareja:
   - ALTER TABLE ... ADD COLUMN ↔ Cambia la estructura de una tabla existente
   - Archivo 004_...sql ↔ Migración versionada que se aplica en orden
   - schema_migrations ↔ Registro de qué cambios ya se aplicaron
   - Columna nullable ↔ Paso intermedio para no romper las filas existentes

**4. [completar]** "Para agregar una columna obligatoria: primero la creas como ____, llenas las filas existentes y solo entonces aplicas la restricción ____."
   - Banco: `nullable` · `NOT NULL` · `UNIQUE` · `DROP` · `INDEX`
   - Respuesta: nullable / NOT NULL

**5. [ordenar]** Ordena el ciclo correcto para aplicar una migración:
   - Orden correcto: Escribes la migración numerada → La pruebas en local → La pruebas en una copia con datos reales → Respaldas la base → La aplicas en producción y registras la versión

---

## B20 — Respaldos: la lección que casi nadie aprende a tiempo

### Concepto

Te lo cuento en primera persona porque me pasó a mí, no lo leí en un caso de estudio. Mi proyecto de Supabase **se pausó dos veces por inactividad**: la app seguía en línea y la base, simplemente, no respondía. Y antes de eso **borré por accidente la cuenta de hosting completa**. Lo que me salvó fue tener el código en GitHub: cloné, volví a desplegar y en una tarde estaba arriba.

De esa historia salieron dos lecciones. La primera: **el código en GitHub no es un respaldo de tus datos**. Es un respaldo del código y vale oro, pero la base, las fotos que subieron tus clientes y los usuarios con sus contraseñas no viven en el repositorio. Aquella vez la base estaba en otro proveedor y sobrevivió por suerte; si hubiera estado dentro de la cuenta que borré, no habría habido GitHub que me salvara.

La segunda: **que el proveedor tenga tus datos no significa que tú tengas una copia**. Un respaldo es una copia que puedes restaurar sin depender del original, guardada en otro lugar y hecha antes de necesitarla. No es una función que se activa y ya: es una rutina con fecha, destino y prueba.

Aquí está la confusión que sale más caro: **una réplica no es un respaldo**. La réplica copia cada cambio en segundos, incluido el `DELETE FROM pedidos` que corriste sin `WHERE` (m4-b12). Te salva de que se muera un disco; no te salva de ti. Para el error humano existe la **recuperación a un punto en el tiempo** (PITR): volver la base a las 14:32, treinta segundos antes del desastre.

Dos preguntas definen cada cuánto respaldas: ¿cuánto dato puedo perder? (si respaldas cada 24 horas, hasta 24 horas) y ¿cuánto puedo tardar en volver? La primera se llama RPO y la segunda RTO, pero en el fondo son decisiones de negocio, no técnicas. Un negocio de tacos puede perder un día de pedidos; no puede perder su lista de clientes.

Y la parte que casi nadie hace: **restaurar**. Un respaldo que nunca se ha restaurado no es un respaldo, es una esperanza. Se prueba en una base aparte, se cuentan las filas, se abre una imagen, se revisa que el login funcione. La regla **3-2-1** resume el estándar: tres copias de los datos, en dos medios distintos, con una fuera del sitio. Si tu proyecto de Tacos El Volcán solo existe en el panel de un proveedor, hoy es el día de cambiar eso.

### Analogía

Es el **fotógrafo de bodas** al terminar la sesión. La tarjeta de la cámara es el original; si se le cae al agua, no hay boda que entregar. Por eso copia a dos discos y deja uno en casa de su mamá: tres copias, dos medios, una fuera del estudio. Su segunda cámara grabando en vivo no cuenta como respaldo: si él borra la sesión por accidente, la copia se borra igual en las dos. Y antes de la siguiente boda abre un disco viejo y confirma que las fotos se ven, porque un disco que nunca se ha abierto puede estar vacío y nadie lo sabe hasta el día del reclamo.

### Cómo se ve en la práctica

Un plan realista para Tacos El Volcán, con Supabase. El código ya vive en GitHub (m2-a1); eso cubre la app, no los datos. Para los datos: respaldo diario del proveedor si el plan lo incluye, PITR si el volumen de pedidos lo justifica, y un `pg_dump` semanal que sale del proveedor hacia otro lado:

```js
pg_dump "$DATABASE_URL" \
  --format=custom --no-owner \
  --file="respaldo-tacos-$(date +%Y-%m-%d).dump"

# restaurar en una base de prueba, NUNCA encima de producción
pg_restore --dbname="$DATABASE_URL_PRUEBA" \
  --clean --if-exists "respaldo-tacos-2026-11-24.dump"
```

El archivo se sube a un almacenamiento distinto del proveedor de la base (otro servicio, otro disco, otra cuenta) y se revisa que abra. En Supabase hay tres cosas que el dump de la base **no** necesariamente cubre y hay que planear aparte: los archivos de Storage (las fotos del menú), los usuarios de Auth y las variables de entorno de las funciones. Un respaldo que solo cubre tablas te devuelve la mitad del negocio.

La prueba mensual es corta y no negociable: restauras el último respaldo en un proyecto de prueba, corres `SELECT count(*) FROM pedidos;`, comparas contra producción, abres una imagen de Storage y haces login con un usuario de prueba. Si algo falla, acabas de descubrir el problema en el mejor momento posible.

**Advertencia:** hay datos que **no se pueden recuperar**. Un proyecto eliminado definitivamente, una tabla borrada sin PITR, fotos que solo existían en el celular de un cliente, conversaciones que nunca se guardaron, un `DELETE` sin `WHERE` sobre la única copia. El proveedor no tiene obligación de rescatar lo que tú borraste, y el soporte no es un botón de deshacer. Si tu base vive en un solo lugar, en el plan gratis, y nunca has restaurado una copia, no tienes respaldo: tienes la esperanza de que nada pase. Y esa esperanza se cobra una sola vez.

### Díselo a la IA

> "Actúa como responsable de continuidad de un negocio pequeño. Mi stack es [Supabase/Postgres] y la app está en [GitHub + hosting]. Hazme un plan de respaldos con: qué se respalda y qué NO cubre el respaldo automático (archivos, usuarios, variables de entorno), cada cuánto, cuántas versiones se conservan, dónde vive cada copia según la regla 3-2-1, y cuánto dato puedo perder en el peor caso. Incluye los comandos de pg_dump y pg_restore, un simulacro de restauración mensual paso a paso con consultas de verificación, y una lista de los datos de mi negocio que serían irrecuperables si hoy se borraran. Sé explícito con lo que no se puede deshacer."

Si la respuesta no menciona una prueba de restauración, no es un plan: es una lista de buenas intenciones.

### Ejercicios

**1. [opción múltiple]** ¿Por qué una réplica no te salva de un DELETE sin WHERE?
   - a) Porque la réplica solo guarda datos de lectura
   - b) Porque la réplica copia el borrado en segundos, igual que cualquier otro cambio ✔
   - c) Porque las réplicas se actualizan una vez al mes
   - d) Porque el DELETE no se replica nunca

**2. [opción múltiple]** ¿Cuál de estas cosas NO es un respaldo de tus datos?
   - a) Un pg_dump semanal en un disco externo
   - b) La réplica de lectura en otra zona del proveedor ✔
   - c) Una copia cifrada en un servicio de almacenamiento distinto
   - d) Un dump descargado y restaurado en una base de prueba

**3. [verdadero/falso]** "Si un proyecto de Supabase se pausa por inactividad, los datos se borran para siempre en ese instante."
   - Respuesta: FALSO — el proyecto se pausa y se puede reactivar durante un plazo; pasado ese plazo sí se elimina. No es instantáneo, pero tampoco es un respaldo: no dependas de ello.

**4. [completar]** "La regla 3-2-1 pide ____ copias de los datos, en ____ medios distintos, con ____ copia fuera del sitio."
   - Banco: `tres` · `dos` · `una` · `cuatro` · `cinco`
   - Respuesta: tres / dos / una

**5. [ordenar]** Ordena la respuesta correcta al descubrir que alguien borró una tabla por error:
   - Orden correcto: Detener las escrituras sobre la parte afectada → Anotar la hora exacta del incidente → Restaurar una copia en una base aparte → Verificar que los datos recuperados son los correctos → Recuperar solo lo borrado hacia producción

---

## B21 — Supabase por dentro: qué te da exactamente

### Concepto

Supabase no es "otra base de datos". Es **Postgres** —la base relacional de código abierto más usada del mundo— con una capa de servicios ya montada encima. Cuando creas un proyecto, no rentas un terreno vacío: rentas el edificio con la instalación eléctrica, el agua y la vigilancia ya conectadas. Tú llegas con tus muebles, que en este caso son tus tablas y tu código.

El edificio trae seis piezas que vas a usar todo el resto del módulo:

- **Base de datos**: un Postgres real y completo (no una versión recortada). Todo lo que aprendiste de SQL en las unidades B1 a B20 aplica tal cual.
- **Auth**: registro, login, sesiones, verificación por correo y recuperación de contraseña, sin que tú construyas nada.
- **Storage**: un lugar para archivos e imágenes con permisos y CDN.
- **Realtime**: avisos automáticos al navegador cuando una fila cambia.
- **Edge Functions**: funciones que corren en el servidor (Deno) para la lógica que no debe vivir en el navegador.
- **Panel (Studio)**: una interfaz web donde ves tus tablas, corres SQL, revisas usuarios, archivos y logs.

Hay una séptima pieza que casi nadie nombra y que explica la mitad de la magia: **PostgREST**. Es un servicio que lee tu esquema y convierte automáticamente cada tabla en un endpoint REST. Por eso, sin escribir backend, puedes hacer `supabase.from('platillos').select('*')` y recibir el menú en JSON. Entenderlo te ahorra la pregunta "¿y dónde está el servidor?": el servidor ya está, exponiendo tus tablas (m4-b26).

**Qué es gratis y qué se paga.** El plan gratuito alcanza para aprender y para el proyecto del curso: dos proyectos activos, alrededor de 500 MB de base, 1 GB de archivos y hasta 50 mil usuarios activos al mes. El plan Pro cuesta cerca de 25 dólares al mes por proyecto y agrega respaldos automáticos, más cómputo y proyectos que no se pausan. Los números exactos cambian con el tiempo: la fuente de verdad es tu panel, en *Settings → Usage*. Y sí, hay un detalle que muerde: **en el plan gratuito el proyecto se pausa si pasa una semana sin actividad**. No pierdes datos, pero tu landing responde error de conexión hasta que entres al panel y le des *Restore*; tarda unos minutos en volver. Un sitio que debe estar siempre arriba no va en el plan gratuito, punto.

¿Por qué te importa si la IA escribe el código? Porque cuando te diga "usa Supabase" necesitas saber tres cosas: qué llaves existen (y cuál nunca sale del servidor, m4-a19), qué servicio toca cada parte de tu app, y qué te puede tumbar el sistema sin que hayas tocado una línea. Eso es criterio de dueño, no de programador.

### Analogía

Es rentar un **departamento amueblado en un edificio con servicios incluidos**. Llegas con tu ropa y ya hay agua, luz, gas, internet, vigilancia en la entrada y un boiler propio que calienta el agua de tu casa (ese boiler es Postgres: la pieza que de verdad hace el trabajo). Los muebles son Auth, Storage, Realtime y las Edge Functions: no los compraste, pero están y funcionan. La administración te da dos llaves: una que puedes prestar a cualquiera para que entre a la sala (la *anon key*) y una maestra que abre todas las puertas, incluida la bodega (la *service_role key*). Y viene con letra chica: si dejas el departamento solo más de una semana, la administración corta los servicios y sella la puerta; cuando vuelves, llamas y te la abren, pero mientras tanto nadie puede entrar. Comparado con comprar terreno y construir, es rapidísimo; comparado con tener casa propia, dependes de que la administración no te falle.

### Cómo se ve en la práctica

Todo empieza con dos datos que copias del panel (*Settings → API*): la URL del proyecto y la *anon key*. Con eso ya consultas la base desde el navegador:

```js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://tuproyecto.supabase.co',   // URL del proyecto
  'eyJhbGciOiJIUzI1NiIs...'           // anon key: es pública, va en el frontend
)

const { data, error } = await supabase
  .from('platillos')
  .select('nombre, precio')
  .order('nombre')

console.log(error ? error.message : data)
```

Ese `from('platillos').select(...)` no lo inventó la librería: PostgREST lo tradujo a un `SELECT nombre, precio FROM platillos ORDER BY nombre`. Y este es el mapa del panel, que conviene tener a mano:

- **Table Editor**: ver y editar filas como si fuera una hoja de cálculo.
- **SQL Editor**: pegar SQL directo, crear tablas y políticas.
- **Authentication**: usuarios registrados, plantillas de correo, proveedores.
- **Storage**: buckets y archivos.
- **Database → Replication**: qué tablas se publican para Realtime.
- **Edge Functions**: funciones desplegadas.
- **Logs**: qué peticiones llegaron y con qué error.
- **Settings → Usage**: cuánto llevas consumido y cuándo te toca pagar.

Si un día el panel te recibe con un aviso de **Project paused**, ya sabes qué pasó y qué botón buscar. Y si algún día te quieres ir, te vas con tu Postgres: un `pg_dump` y listo (m4-b20). Esa portabilidad es parte del argumento, no un detalle.

### Díselo a la IA

> "Voy a construir [describe tu app] con Supabase. Antes de escribir código, hazme un mapa: qué servicio de Supabase cubre cada parte (datos, login, imágenes, avisos en vivo, lógica privada) y qué tabla o bucket le corresponde. Después dime qué llaves existen en un proyecto de Supabase, cuál se puede exponer en el frontend y cuál jamás, y qué configuraciones del plan gratuito me pueden tumbar el sitio (pausa por inactividad, límites de almacenamiento y de usuarios). Si algo depende de mi plan o de mi configuración actual, pregúntame en vez de asumirlo."

Al final vas a poder decir, sin adivinar, qué pieza se rompe cuando algo falla. Si la app no carga datos, el problema está en PostgREST o en RLS; si nadie puede entrar, es Auth; si las fotos no aparecen, es Storage.

### Ejercicios

**1. [opción múltiple]** ¿Qué es Supabase, exactamente?
   - a) Una base de datos NoSQL con un panel bonito
   - b) Postgres real con servicios encima: Auth, Storage, Realtime, Edge Functions y panel ✔
   - c) Un servicio de hosting de páginas estáticas
   - d) Una librería de JavaScript que simula una base de datos

**2. [verdadero/falso]** "Si tu proyecto gratuito de Supabase se pausa por inactividad, los datos se borran y hay que empezar de cero."
   - Respuesta: FALSO — La pausa detiene el proyecto, no lo borra: los datos siguen ahí y se restauran desde el panel. Lo que sí pasa es que tu app queda caída con error de conexión hasta que restauras, y un proyecto pausado mucho tiempo puede terminar eliminado.

**3. [completar]** "La base de datos de Supabase es ____, y las ____ permiten correr lógica en el servidor sin montar un backend propio."
   - Banco: `Postgres` · `MySQL` · `Edge Functions` · `Storage` · `Realtime`
   - Respuesta: Postgres / Edge Functions

**4. [relacionar]** Une cada elemento con su pareja:
   - Auth ↔ Usuarios, sesiones y contraseñas
   - Storage ↔ Archivos e imágenes con permisos
   - Realtime ↔ Avisos al navegador cuando una fila cambia
   - PostgREST ↔ Convierte tus tablas en endpoints REST
   - Studio ↔ El panel donde ves tablas, usuarios y logs

**5. [ordenar]** El lunes tu landing gratuita lleva una semana sin visitas y los clientes ven error de conexión. Ordena lo que haces:
   - Orden correcto: Entras al panel y ves el aviso de que el proyecto está pausado → Presionas Restore y esperas a que arranque → Verificas que la app vuelva a responder → Decides si ese sitio puede seguir en el plan gratuito

---

## B22 — Row Level Security: quién puede ver cada fila

### Concepto

Hasta aquí, tu base responde a quien traiga la *anon key*. Y esa llave viaja en el navegador: cualquiera la puede copiar abriendo DevTools. Entonces la pregunta deja de ser "¿quién puede entrar?" y se vuelve **"¿qué filas puede ver cada quien?"**. De eso se encarga **Row Level Security** (RLS): una función de Postgres que decide, fila por fila y operación por operación, si el usuario actual puede verla o tocarla.

RLS se activa **por tabla**, con una línea: `alter table pedidos enable row level security;`. Y aquí viene la parte que sorprende a todos: al activarlo, la tabla queda **cerrada por completo**. No hay acceso parcial ni modo intermedio. Si no escribes políticas, nadie ve nada — ni tú desde la app, ni el cliente, ni el admin. Cero filas.

Para abrir rendijas se escriben **políticas**, y cada una cubre una operación concreta: `for select`, `for insert`, `for update` o `for delete`. Una política de SELECT no da permiso de borrar. Si quieres que se pueda leer y escribir, son dos (o más) políticas. La lógica de cada una es una condición SQL normal: si se cumple, la fila pasa.

La pieza que hace todo esto posible es `auth.uid()`. Cuando alguien inicia sesión, Supabase le entrega un token que incluye su identificador de usuario; dentro de una política, `auth.uid()` te devuelve ese identificador. Por eso la política más importante de tu sistema es casi siempre la misma:

```js
cliente_id = auth.uid()
```

"Solo las filas cuyo dueño sea yo". Y dos palabras que tienes que distinguir o vas a sufrir: `using` decide *qué filas existentes ves o alcanzas*; `with check` valida *lo que estás escribiendo*. En un INSERT no hay fila previa, así que solo se usa `with check`. En un UPDATE puedes necesitar las dos: una para encontrar la fila y otra para que no la muevas a nombre de otro.

**Advertencia:** una tabla con RLS *apagado* y la anon key en el frontend es una base abierta al mundo. Cualquiera con DevTools puede leer todos los pedidos, los teléfonos de tus clientes y borrar lo que quiera. Es la fuga número uno de las apps hechas con IA: el código se ve impecable y la base está sin candado. La prueba es de un minuto: consulta la tabla desde la consola del navegador, *sin sesión*. Si regresa filas, las filas son públicas. Y una nota final: la *service_role key* ignora RLS por diseño, así que solo vive en el servidor (m4-a19).

### Analogía

Es un **estadio con boletos numerados**. El estadio está abierto y cualquiera entra a la explanada: la tabla existe y responde. Pero tu boleto dice exactamente **fila y asiento**, y el portero lo revisa contra el mapa antes de dejarte pasar. Ese portero es la política, y el número impreso en tu boleto es `auth.uid()`: no importa cuántas veces lo intentes, tu boleto no abre la puerta del palco de al lado. Un estadio con RLS apagado es un estadio *sin portero*: entra quien sea, se sienta donde quiera, incluso en la silla del dueño, y de paso se lleva las cosas que encuentra. Y si activas RLS pero no escribes ninguna política, es un estadio con todas las puertas cerradas con llave: ni tú entras.

### Cómo se ve en la práctica

Así se protege la tabla `pedidos` para que cada cliente vea solo lo suyo. Primero se cierra la tabla, luego se abren las rendijas necesarias:

```sql
alter table pedidos enable row level security;

create policy "cliente ve sus pedidos"
  on pedidos for select
  to authenticated
  using (cliente_id = auth.uid());

create policy "cliente crea sus pedidos"
  on pedidos for insert
  to authenticated
  with check (cliente_id = auth.uid());

create policy "cliente actualiza sus pedidos"
  on pedidos for update
  to authenticated
  using (cliente_id = auth.uid())
  with check (cliente_id = auth.uid());
```

Fíjate en lo que *no* hay: ninguna política de DELETE, así que desde la app nadie borra pedidos. Si el admin necesita borrar, se le da una política extra que revise su rol, no se abre la tabla entera. Y para el menú, que sí es público, la política es deliberadamente permisiva:

```sql
alter table platillos enable row level security;

create policy "menu visible para todos"
  on platillos for select
  to anon, authenticated
  using (true);
```

Ahora la prueba real. Abre la consola del navegador, sin haber iniciado sesión, y ejecuta:

```js
const { data } = await supabase.from('pedidos').select('*')
console.log(data)   // []  ← sin sesión no hay filas

const { data: menu } = await supabase.from('platillos').select('nombre')
console.log(menu)   // el menú sí, porque su política lo permite
```

Si ese primer `console.log` te devuelve pedidos, no tienes un sistema: tienes una fuga. Y un detalle de rendimiento: en tablas grandes conviene escribir `(select auth.uid())` en lugar de `auth.uid()` para que Postgres lo evalúe una sola vez por consulta en vez de una vez por fila.

### Díselo a la IA

> "Tengo estas tablas: pedidos (cliente_id, total, estado), platillos (nombre, precio, activo), resenas (usuario_id, platillo_id, texto) y clientes (id, nombre, telefono). Activa RLS en todas y escribe las políticas mínimas para que: (1) cada cliente solo vea, cree y edite sus propios pedidos; (2) el menú lo lea cualquiera pero solo un admin lo modifique; (3) las reseñas se lean en público y solo se inserten con sesión iniciada. Usa `to authenticated` y `to anon` donde corresponda, explica en cada política por qué usaste `using`, `with check` o ambos, y al final dame una consulta de prueba para correr en la consola sin sesión y comprobar que no se filtra nada."

La última frase es la que separa una política escrita de una política *verificada*. Pídesela siempre.

### Ejercicios

**1. [opción múltiple]** Activas RLS en la tabla pedidos y no escribes ninguna política. ¿Qué pasa?
   - a) Todos pueden leer, pero nadie puede escribir
   - b) Nadie puede leer ni escribir: cero filas y cero inserciones ✔
   - c) Solo el dueño del proyecto puede leer
   - d) La tabla se borra por seguridad

**2. [verdadero/falso]** "Si una tabla tiene RLS apagado y tu app usa la anon key en el navegador, cualquiera puede leer y borrar esas filas."
   - Respuesta: VERDADERO — La anon key es pública y viaja en el frontend. Sin RLS no hay filtro por fila: la API responde a cualquiera que copie la llave y la URL, y puede leer, insertar o borrar todo lo que el rol permita.

**3. [completar]** "En una política, ____ decide qué filas existentes puedes ver y ____ valida lo que estás escribiendo."
   - Banco: `using` · `with check` · `select` · `grant`
   - Respuesta: using / with check

**4. [relacionar]** Une cada elemento con su pareja:
   - for select ↔ Qué filas puedes leer
   - for insert ↔ Qué filas puedes crear (with check)
   - for update ↔ Qué filas puedes modificar y en qué estado pueden quedar
   - for delete ↔ Qué filas puedes borrar
   - auth.uid() ↔ El identificador del usuario con sesión

**5. [qué hace]** ¿Qué logra esta política?

```sql
create policy "mis resenas"
  on resenas for select
  to authenticated
  using (usuario_id = auth.uid());
```

   - a) Cualquiera puede leer todas las reseñas
   - b) Cada usuario con sesión solo lee las reseñas que él escribió ✔
   - c) Impide que se inserten reseñas de otros usuarios
   - d) Borra las reseñas de los demás usuarios

---

## B23 — Storage: guardar archivos e imágenes

### Concepto

Una imagen no es un dato: es un archivo de cientos de kilobytes que necesita servirse rápido, en varios tamaños y con permisos propios. Por eso Supabase tiene **Storage**: un servicio aparte, con sus buckets, sus políticas y su CDN, para guardar lo que no cabe (ni debe caber) en una columna.

El contenedor se llama **bucket**. Dentro, cada archivo tiene una ruta —un *path*, como `platillos/taco-al-pastor.jpg`— igual que los recursos de una API (m4-a11). Y hay dos tipos de bucket:

- **Público**: cualquiera con la URL ve el archivo. Perfecto para las fotos del menú o el logo, que de todos modos quiere ver todo el mundo.
- **Privado**: nadie lo abre sin permiso. Aquí van recibos, contratos, fotos de identificación o cualquier cosa de un cliente. Para mostrarlo se genera una **URL firmada**: un enlace temporal que caduca.

Los permisos se escriben con el mismo mecanismo que ya conoces: RLS sobre la tabla `storage.objects` (m4-b22). La convención que te va a salvar es guardar cada archivo dentro de una carpeta con el id del usuario (`{uid}/recibo.pdf`) y escribir la política para que cada quien solo escriba en su carpeta. Ahí es donde brilla una función de Postgres: `(storage.foldername(name))[1]` te devuelve el primer segmento del path, y lo comparas con `auth.uid()`.

**Advertencia:** no guardes imágenes en la tabla como texto ni en base64. Es un error clásico y caro: cada fila crece a cientos de kilobytes, un `SELECT *` arrastra megabytes, no hay caché ni CDN, no puedes redimensionar, los respaldos se inflan y las consultas se vuelven lentas. En la tabla va **la ruta** (`imagen_path`, texto corto); el archivo va en Storage. Y ponle límite de tamaño y de tipo al bucket: sin límite, tarde o temprano alguien sube un video de 200 MB.

¿Por qué te importa dirigiendo a la IA? Porque "que el dueño pueda subir fotos desde el panel" es una de las peticiones más comunes, y la IA puede resolverla de tres formas: bien (Storage), mal (base64 en la tabla) o peor (guardar en el navegador, donde se pierde al limpiar caché). Tú decides cuál.

### Analogía

Es el **guardarropa de un teatro**. Al llegar entregas el abrigo y te dan una **ficha numerada**; esa ficha es la ruta del archivo. Junto a la entrada hay un perchero abierto: cualquiera toma lo que está ahí (bucket público, el menú y el logo). El guardarropa de verdad está detrás de una ventanilla: solo entregas el abrigo que corresponde a tu ficha, y la ficha caduca a cierta hora, así que al día siguiente ya no sirve (URL firmada con expiración). Y lo que nadie hace es meter el abrigo doblado dentro del programa del teatro para no cargarlo: eso es guardar la imagen en base64 dentro de la tabla.

### Cómo se ve en la práctica

Subir una foto desde el panel y mostrarla en el menú son cuatro líneas. Nota que en la tabla solo se guarda la ruta:

```js
// 1) subir el archivo al bucket publico 'platillos'
const { error } = await supabase.storage
  .from('platillos')
  .upload(`platillos/${Date.now()}-pastor.jpg`, archivo)

// 2) obtener la URL publica para pintarla en la landing
const { data } = supabase.storage
  .from('platillos')
  .getPublicUrl('platillos/1700000000-pastor.jpg')

console.log(data.publicUrl)

// 3) guardar solo la ruta en la tabla
await supabase.from('platillos').insert({
  nombre: 'Taco al pastor',
  precio: 28,
  imagen_path: 'platillos/1700000000-pastor.jpg'
})
```

Para algo privado, como el recibo de un pedido, el flujo cambia: bucket privado y URL firmada que caduca en segundos.

```js
const { data, error } = await supabase.storage
  .from('recibos')
  .createSignedUrl('cliente-42/recibo-001.pdf', 60)  // válida 60 segundos

console.log(data.signedUrl)
```

Y así se limita a cada quien a su carpeta, con RLS sobre `storage.objects`:

```sql
create policy "cada quien sube a su carpeta"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'recibos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
```

Sin esa política, cualquier usuario con sesión podría escribir en la carpeta de otro. Con ella, el path deja de ser un detalle y se vuelve parte de la seguridad.

### Díselo a la IA

> "En mi app necesito que el dueño suba fotos de platillos desde el panel y que los clientes las vean, y además que cada cliente pueda subir un comprobante de pago que solo él y el admin vean. Usa Supabase Storage con dos buckets: uno público para fotos y uno privado para comprobantes. En las tablas guarda solo la ruta, nunca la imagen ni base64. Dame el código de subida con validación de tipo y tamaño máximo (2 MB, solo jpg y png), la URL pública para las fotos, la URL firmada de 60 segundos para los comprobantes, y las políticas SQL de `storage.objects` para que cada usuario solo escriba en su propia carpeta. Explícame qué pasa si alguien intenta subir a la carpeta de otro."

Si la IA te propone guardar la imagen en una columna `text`, ya sabes qué contestar: que no.

### Ejercicios

**1. [verdadero/falso]** "Guardar las fotos del menú como base64 en una columna de texto es una solución válida y eficiente."
   - Respuesta: FALSO — Funciona técnicamente, pero cada fila crece cientos de kilobytes: las consultas se vuelven lentas, no hay caché ni redimensionado, los respaldos se inflan y un SELECT * arrastra megabytes. El archivo va a Storage y en la tabla solo la ruta.

**2. [opción múltiple]** Tienes los comprobantes de pago en un bucket privado. ¿Cómo los muestras al cliente dueño del pedido?
   - a) Poniendo el bucket en público temporalmente
   - b) Generando una URL firmada con expiración corta ✔
   - c) Descargando el archivo y guardándolo en base64 en la tabla
   - d) Copiando el archivo al frontend con un fetch sin token

**3. [completar]** "El archivo vive en un ____ y en la tabla se guarda solo su ____; para lo privado se genera una URL ____."
   - Banco: `bucket` · `ruta` · `firmada` · `columna` · `pública`
   - Respuesta: bucket / ruta / firmada

**4. [relacionar]** Une cada elemento con su pareja:
   - Bucket público ↔ Cualquiera con la URL ve el archivo
   - Bucket privado ↔ Requiere permiso o URL firmada
   - URL firmada ↔ Enlace temporal que caduca
   - storage.objects ↔ La tabla donde viven las políticas de archivos
   - imagen_path ↔ La columna donde guardas solo la ruta

**5. [qué hace]** ¿Qué impide esta política?

```sql
create policy "solo mi carpeta"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'recibos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
```

   - a) Que se suban archivos de más de 2 MB
   - b) Que un usuario suba archivos a la carpeta de otro usuario ✔
   - c) Que se lean los archivos del bucket privado
   - d) Que se borren los archivos del bucket público

---

## B24 — Auth de Supabase: usuarios sin construirlo tú

### Concepto

Construir login desde cero es una de esas tareas donde el 90% del trabajo es invisible y el 10% restante puede arruinarte. Hay que hashear contraseñas, emitir sesiones, refrescarlas, mandar correos de confirmación, manejar la recuperación, cerrar sesiones en todos los dispositivos. **Supabase Auth** ya hace todo eso: tú solo lo conectas.

El flujo tiene cuatro piezas. **Registro**: `signUp` crea al usuario y, por defecto, manda un correo de confirmación; hasta que la persona lo abre, su cuenta no está verificada. **Entrada**: `signInWithPassword` valida correo y contraseña y devuelve una sesión con dos tokens, un *access token* de vida corta (alrededor de una hora) y un *refresh token* de vida larga. **Sesión persistente**: la librería guarda esa sesión en el navegador y renueva el access token sola; por eso al recargar la página sigues dentro. **Recuperación**: `resetPasswordForEmail` manda un enlace, y el enlace regresa a tu sitio con un token que la librería detecta para dejarte poner la nueva contraseña.

El detalle que más confunde: las contraseñas viven en `auth.users`, una tabla del esquema `auth` que **no tocas**. Ahí se guardan hasheadas (m4-a16), no en texto. Tú nunca ves la contraseña de nadie, ni la necesitas: para saber quién está conectado usas `supabase.auth.getSession()` y, del lado de la base, `auth.uid()`, que es el mismo identificador que usaste en las políticas de RLS (m4-b22).

Para los datos extra —nombre, teléfono, dirección— se crea una tabla propia, normalmente `perfiles`, con una columna `id` que apunta a `auth.users(id)` como llave foránea (m4-b8). Esa tabla sí es tuya, y por eso también necesita RLS: cada quien lee y edita su perfil.

**Advertencia:** nunca guardes contraseñas tú. Ni en una tabla `usuarios`, ni "temporalmente" en una variable, ni en un mensaje de WhatsApp para que el cliente "no la olvide". Tampoco inventes preguntas secretas ni mandes contraseñas por correo en texto claro. Si algún tutorial te enseña a comparar contraseñas con `==`, cierra la pestaña: ese sistema ya está comprometido.

¿Por qué te importa? Porque el login es la puerta de tu negocio y el punto donde un error deja de ser un bug y se vuelve una nota de prensa. Y porque cuando la IA te ofrezca construir la autenticación desde cero, tu respuesta por defecto debe ser: no, usa la que ya existe.

### Analogía

Es la **caseta de vigilancia de un fraccionamiento**. La caseta ya tiene el procedimiento completo: te registra, te toma la foto para la credencial, te reconoce al volver, avisa a la casa cuando llegas y, si pierdes la credencial, te la repone con una llamada de verificación. Tú, como dueño, no reconstruyes la caseta: le dices quién vive ahí. Y hay algo que la caseta hace y tú no debes hacer: no se queda con la llave de tu casa, se queda con una **marca que sirve para comparar cuando llegas, no para abrir**; por eso ni el vigilante puede entrar a tu casa. Si tú llevaras la libreta con las llaves de todos los vecinos, un robo en tu casa expondría al fraccionamiento entero.

### Cómo se ve en la práctica

El registro y la entrada son dos llamadas. Fíjate que en ningún momento tu código toca la contraseña más allá de pasarla:

```js
// Registro: por defecto manda correo de confirmación
const { data, error } = await supabase.auth.signUp({
  email: 'dueno@tacoselvolcan.mx',
  password: 'una-frase-larga-y-unica'
})

// Entrada
const { data: sesion, error: e } = await supabase.auth.signInWithPassword({
  email: 'dueno@tacoselvolcan.mx',
  password: 'una-frase-larga-y-unica'
})

// Quién está conectado ahora mismo
const { data: { session } } = await supabase.auth.getSession()
console.log(session?.user.id)   // este id es el que ve auth.uid()
```

Para que la interfaz reaccione al login y al logout sin recargar, se escucha el cambio de estado. Y para recuperar la contraseña:

```js
supabase.auth.onAuthStateChange((evento, sesion) => {
  if (sesion) mostrarPanel(sesion.user)
  else mostrarLogin()
})

await supabase.auth.resetPasswordForEmail('cliente@correo.com', {
  redirectTo: 'https://tacoselvolcan.mx/nueva-clave'
})
```

Ese `redirectTo` tiene que estar dado de alta en el panel (*Authentication → URL Configuration*), si no, el enlace del correo te rebota. Y los datos extra van en una tabla tuya, con su llave foránea y su RLS:

```sql
create table perfiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nombre text,
  telefono text
);

alter table perfiles enable row level security;

create policy "mi perfil"
  on perfiles for select
  to authenticated
  using (id = auth.uid());
```

Para pruebas puedes desactivar la confirmación por correo en el panel, pero nunca en producción: sin confirmación, cualquiera puede registrarse con el correo de otro.

### Díselo a la IA

> "Quiero login con correo y contraseña en mi app, usando Supabase Auth. No construyas hashing, ni tabla de contraseñas, ni sesiones propias. Dame: signUp con confirmación por correo, signInWithPassword, persistencia de sesión con onAuthStateChange, cerrar sesión, y recuperación de contraseña con redirectTo a /nueva-clave. Explícame qué pasa paso a paso, incluido qué trae el enlace del correo. Dime también qué debo configurar en el panel (Site URL, Redirect URLs y plantillas de correo) y cómo crear una tabla perfiles ligada a auth.users con RLS para que cada quien edite solo la suya. Si algo de esto depende de mi configuración actual, pregúntame antes de asumirlo."

Guarda ese prompt: es el mismo que vas a reusar en cada proyecto, cambiando solo el nombre de la tabla de perfiles.

### Ejercicios

**1. [opción múltiple]** ¿Dónde se guardan las contraseñas de tus usuarios en Supabase?
   - a) En una tabla usuarios que tú creas, en texto para poder recordarlas
   - b) En auth.users, hasheadas, y tú nunca las ves ✔
   - c) En el localStorage del navegador
   - d) En la anon key del proyecto

**2. [verdadero/falso]** "Como ya tienes Supabase Auth, puedes guardar una copia de la contraseña en tu tabla de perfiles para dar soporte a los clientes."
   - Respuesta: FALSO — Nunca. Si guardas la contraseña en texto, cualquier fuga de esa tabla expone a todos tus usuarios, y ya no puedes decir que están hasheadas. Para soporte no necesitas la contraseña: usas la recuperación por correo.

**3. [completar]** "Al iniciar sesión, Supabase devuelve un access token de vida corta y un ____ que permite renovarlo; la librería guarda la sesión y la mantiene viva sola."
   - Banco: `refresh token` · `hash` · `cookie de sesión` · `api key`
   - Respuesta: refresh token

**4. [relacionar]** Une cada elemento con su pareja:
   - signUp ↔ Crea la cuenta y manda el correo de confirmación
   - signInWithPassword ↔ Valida correo y contraseña y abre sesión
   - onAuthStateChange ↔ Avisa a la interfaz cuando alguien entra o sale
   - resetPasswordForEmail ↔ Manda el enlace para poner una contraseña nueva
   - auth.uid() ↔ El id del usuario conectado, del lado de la base

**5. [ordenar]** Ordena el flujo de recuperación de contraseña:
   - Orden correcto: El usuario pide recuperar su contraseña con su correo → Supabase manda un correo con un enlace temporal → El usuario abre el enlace y llega a tu página con un token → El usuario escribe la nueva contraseña y se actualiza su cuenta → El usuario inicia sesión con la contraseña nueva

---

## B25 — Realtime: datos que se actualizan solos

### Concepto

Hasta ahora, tu app pregunta y la base responde. **Realtime** invierte la dirección: la base avisa. Supabase escucha los cambios que ocurren en Postgres y los empuja al navegador por un *websocket* —una conexión que se queda abierta— para que la pantalla se actualice sin recargar y sin que nadie presione nada.

El mecanismo tiene dos pasos. Primero, la tabla debe estar **publicada**: Supabase solo transmite las tablas que están en la publicación `supabase_realtime`. En el panel se activa desde *Database → Replication*, o con una línea de SQL. Segundo, el cliente abre un **canal** y se suscribe a un evento concreto: INSERT, UPDATE, DELETE o todos. El canal queda escuchando hasta que lo cierras.

¿Cuándo vale la pena? Cuando el retraso cuesta dinero o rompe la operación: el panel de la taquería donde el pedido nuevo tiene que aparecer mientras el taquero mira la pantalla; un chat; un tablero donde varias personas ven el mismo estado. ¿Cuándo es exagerado? Cuando el dato cambia poco: el menú que se actualiza una vez al mes, una landing informativa, un reporte que se consulta a diario. Ahí un *fetch* al cargar la página, o un refresco cada 30 segundos, es más simple, más barato y más fácil de depurar.

**Costo y conexiones.** Realtime no es gratis en recursos: cada pestaña abierta, en cada dispositivo, mantiene una conexión viva. El plan tiene topes de conexiones simultáneas y de mensajes al mes; si el panel está abierto en cinco computadoras todo el día, son cinco conexiones permanentes. Los números exactos están en *Settings → Usage*. Y una advertencia que se pasa por alto: **Realtime respeta RLS** (m4-b22), pero solo si RLS está bien configurado. Si publicas una tabla sin políticas y sin RLS, estás transmitiendo cada insert a todos los navegadores conectados. Publicar una tabla es abrir un micrófono: revisa quién puede oír.

Por último, la verdad incómoda: las conexiones se caen. El wifi del local falla, la laptop se suspende, hay un deploy, el token se renueva. Por eso Realtime nunca es la fuente de verdad: al montar la pantalla cargas el estado completo con una consulta normal y usas los eventos solo para los cambios que llegan después. Si el canal se reconecta, vuelves a cargar todo. Así, un evento perdido no deja tu panel mintiendo.

### Analogía

Es el **tablero de salidas de un aeropuerto**. Las letras voltean solas cuando cambia la puerta de un vuelo: nadie camina a la ventanilla a preguntar, la información llega a la pantalla. Ese tablero hay que pagarlo: electricidad, un sistema que alimenta cada letra y una red que lo mantiene conectado; y si la red falla, se congela mostrando una puerta que ya cambió, así que también existen los anuncios por altavoz y la app del vuelo para volver a consultar. Por eso no instalas un tablero de aeropuerto para anunciar la junta de vecinos: si el dato cambia dos veces al año, un cartel en la pared alcanza y sale más barato.

### Cómo se ve en la práctica

Primero se publica la tabla; si no, el canal se suscribe y nunca recibe nada (el error más común y el más silencioso):

```js
alter publication supabase_realtime add table pedidos;
```

Después, el canal en el cliente. Nota el patrón: cargar todo, luego escuchar, y limpiar al salir.

```js
// 1) estado inicial: la fuente de verdad es una consulta normal
const { data: pedidos } = await supabase
  .from('pedidos')
  .select('*')
  .eq('estado', 'pendiente')

// 2) escuchar solo los cambios que llegan después
const canal = supabase
  .channel('pedidos-nuevos')
  .on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'pedidos' },
      (payload) => {
        console.log('nuevo pedido', payload.new)
        agregarAlPanel(payload.new)
      })
  .subscribe((estado) => {
    if (estado === 'CHANNEL_ERROR' || estado === 'TIMED_OUT') recargarTodo()
  })

// 3) al salir de la pantalla
supabase.removeChannel(canal)
```

Ese `removeChannel` no es opcional: si no lo llamas, cada visita a la pantalla deja un canal abierto y en una hora tienes diez conexiones fantasma consumiendo tu cuota. Y como RLS aplica, el taquero solo recibe los pedidos que su rol puede leer; si el panel del repartidor debe ver otro subconjunto, se resuelve con políticas, no con filtros en el cliente.

Para comparar costos, así se ve la alternativa sin Realtime, que para un menú es perfectamente razonable:

```js
setInterval(async () => {
  const { data } = await supabase.from('platillos').select('nombre, precio')
  pintarMenu(data)
}, 30000)   // cada 30 segundos: simple, barato, suficiente
```

La regla práctica: si un humano tiene que ver el cambio en menos de cinco segundos, Realtime; si puede esperar medio minuto, un refresco periódico; si cambia una vez al mes, nada.

### Díselo a la IA

> "Quiero que en mi panel de pedidos los pedidos nuevos aparezcan sin recargar, usando Supabase Realtime con postgres_changes en INSERT sobre la tabla pedidos. Dame: la línea SQL para publicar la tabla, el código del canal con limpieza en el desmontaje, el manejo de CHANNEL_ERROR y TIMED_OUT con una recarga completa, y la carga inicial del estado por consulta normal antes de suscribirme. Recuérdame que RLS aplica y que el taquero solo debe recibir los pedidos que su rol puede ver. Al final dime si para mi volumen conviene más un refresco cada 30 segundos y en qué caso me ahorraría esa complejidad."

Pedirle el "en qué caso NO usarlo" es lo que te salva de un panel con veinte canales abiertos y cero pedidos.

### Ejercicios

**1. [opción múltiple]** ¿Cuándo Realtime es la herramienta correcta?
   - a) Para un menú que se actualiza una vez al mes
   - b) Para un panel donde los pedidos entrantes deben verse en segundos ✔
   - c) Para cualquier tabla, porque siempre es más moderno
   - d) Para los respaldos automáticos de la base

**2. [verdadero/falso]** "Realtime ignora RLS y manda todos los cambios a cualquier cliente suscrito."
   - Respuesta: FALSO — Realtime respeta RLS: solo llegan las filas que el usuario podría leer con una consulta normal. Pero si publicas una tabla sin RLS ni políticas, efectivamente estás transmitiendo todo a todos.

**3. [completar]** "Para recibir cambios en vivo, la tabla debe estar en la publicación ____ y el cliente debe abrir un ____ y suscribirse al evento."
   - Banco: `supabase_realtime` · `canal` · `bucket` · `trigger`
   - Respuesta: supabase_realtime / canal

**4. [relacionar]** Une cada elemento con su pareja:
   - supabase_realtime ↔ La publicación que habilita qué tablas se transmiten
   - postgres_changes ↔ El tipo de evento al que te suscribes
   - payload.new ↔ La fila que acaba de cambiar
   - removeChannel ↔ Cierra la conexión al salir de la pantalla
   - CHANNEL_ERROR ↔ Señal de que hay que recargar el estado completo

**5. [ordenar]** Ordena cómo se monta un panel de pedidos en vivo sin quedarte con eventos perdidos:
   - Orden correcto: Cargas el estado completo con una consulta normal → Publicas la tabla pedidos en supabase_realtime → Abres el canal y te suscribes a los INSERT → Recibes los pedidos nuevos y los agregas al panel → Al salir de la pantalla, cierras el canal

---

## B26 — Consultar la base desde el frontend

### Concepto

Hasta ahora le hablaste a la base desde el panel de Supabase, escribiendo SQL en una caja de texto. En el momento en que tu landing necesita mostrar el menú actualizado, ese diálogo cambia de manos: ya no eres tú quien escribe la consulta, es el navegador del visitante. En Supabase eso se hace con su cliente de JavaScript, que traduce una línea legible a una petición HTTP contra la API que Supabase genera sola sobre tus tablas (m4-b21).

La línea central se lee de izquierda a derecha: `supabase.from('platillos').select('*')` significa "entra al cliente, elige la tabla platillos, pide todas sus columnas". Esa llamada es **asíncrona**: sale del navegador, viaja por la red y tarda. Por eso se escribe con `await`, que le dice a la función "no sigas hasta que llegue la respuesta". Mientras espera, la página sigue viva —JavaScript presta el turno a otras tareas—, así que el menú no se congela ni el usuario cree que se rompió.

¿Qué devuelve? Un objeto con dos llaves: `data` y `error`. Es el detalle que separa a quien dirige de quien solo copia. Un problema de permisos o una tabla inexistente **no lanzan una excepción**: llegan en `error`. Si todo salió bien, `data` es un arreglo de objetos, uno por fila; si no hay filas, es `[]`, que no es lo mismo que un error. El orden correcto de revisión es siempre `error` primero y `data` después: si pintas datos cuando hubo error, pintas nada o pintas basura.

Y aquí está la pieza que hace segura esa consulta: la llave `anon` viaja dentro del JavaScript y cualquiera puede verla con F12. Eso no es un descuido, es el diseño. Lo que decide qué filas salen es la **política RLS** (m4-b22), que compara cada fila con el usuario del token. Cuando escribes `select('*')` no estás pidiendo "toda la tabla": pides "todo lo que la política me permita ver". Si RLS está apagado, esa misma línea entrega la tabla completa a cualquier visitante.

Por eso te importa aunque la IA escriba el código. Te va a entregar esta consulta funcionando en diez segundos, y no te va a decir si la tabla está protegida. Saber leer `data` y `error`, y saber que la llave es pública, te permite hacer las dos preguntas que evitan el desastre: ¿qué política protege esta tabla? y ¿qué pasa si `data` viene vacío?

### Analogía

Consultar la base desde el frontend es llamar a la central de taxis por radio. Aprietas el botón, dices tu dirección y sueltas: no puedes seguir hablando como si la unidad ya estuviera afuera. Esperas el "cambio" —eso es `await`—. La central responde con una unidad y su número (`data`) o con un "negativo, no hay servicio en tu zona" (`error`); las dos son respuestas, no fallas del radio. Y la central no te manda cualquier unidad: revisa que la zona esté a tu nombre y tu turno, y solo entonces la despacha (RLS). Tú tienes una antena pública que cualquiera puede escuchar; el control de quién recibe qué viaje está del otro lado.

### Cómo se ve en la práctica

Así se ve una consulta real del menú de Tacos El Volcán desde el navegador:

```js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tu-proyecto.supabase.co',
  'eyJhbGciOi...anon...'   // pública a propósito
);

async function cargarMenu() {
  const { data, error } = await supabase
    .from('platillos')
    .select('nombre, precio, categoria')
    .eq('activo', true)
    .order('nombre');

  if (error) {
    console.error('No se pudo cargar el menú:', error.message);
    return [];
  }

  return data; // [] si no hay platillos, nunca null
}
```

Lo que llega en `data` es un arreglo de objetos, uno por fila, con exactamente las columnas que pediste:

```json
[
  { nombre: 'Taco al pastor', precio: 18.00, categoria: 'tacos' },
  { nombre: 'Volcán', precio: 42.00, categoria: 'especiales' }
]
```

La misma línea sobre una tabla protegida cambia de resultado según quién pregunte: si consultas `pedidos` con la sesión de un cliente, `data` trae solo sus pedidos; si la consulta la hace un visitante sin sesión, trae `[]` (m4-b24). No cambió el código: cambió la política.

**Advertencia:** la llave `anon` puede vivir en el frontend solo porque RLS está encendido y con políticas escritas. La llave `service_role` se salta RLS por completo: si la pegas en el navegador, cualquier visitante puede leer, modificar y borrar todo. Esa llave vive únicamente en el servidor (m4-a19).

### Díselo a la IA

> "Revisa esta consulta de Supabase para mi frontend: [pega la consulta y el componente]. Quiero que (1) pida solo las columnas que la pantalla usa, (2) filtre en la base y no en JavaScript, (3) revise error antes de usar data y muestre un estado vacío cuando data sea un arreglo vacío. Además dime qué política RLS necesita esta tabla y escríbeme el SQL de la política, con la condición exacta que compara la fila con el usuario. Si esta tabla no debería ser legible por visitantes sin sesión, dímelo antes de darme el código."

Fíjate en el orden: primero el código, luego la política, y la última frase convierte a la IA en revisora de seguridad en vez de generadora de consultas.

### Ejercicios

**1. [opción múltiple]** Si la consulta sale bien, ¿qué contiene exactamente data?
   - a) Un arreglo de objetos, uno por cada fila que la política permitió leer ✔
   - b) Un texto con la tabla completa en formato JSON
   - c) true si la consulta funcionó
   - d) El número de filas encontradas, siempre

**2. [verdadero/falso]** "La llave anon puede viajar en el JavaScript del frontend porque la seguridad real la decide RLS, no el secreto de la llave."
   - Respuesta: VERDADERO — La llave anon es pública por diseño. Lo que impide leer filas ajenas es la política RLS que compara cada fila con el usuario del token (m4-b22).

**3. [completar]** "La palabra ____ hace que la función espere la respuesta, y esa respuesta siempre trae ____ y ____."
   - Banco: `await` · `data` · `error` · `then`
   - Respuesta: await / data / error

**4. [qué hace]** El usuario tiene sesión y RLS solo le permite ver sus propios pedidos. ¿Qué devuelve data.length?

```js
const { data, error } = await supabase
  .from('pedidos')
  .select('*')
  .eq('estado', 'pendiente');

if (error) return [];
return data.length;
```

   - a) El total de pedidos pendientes del negocio
   - b) Solo la cantidad de pedidos pendientes de ese usuario ✔
   - c) Siempre 0, porque RLS bloquea la tabla
   - d) Un error 403 que detiene la ejecución

**5. [ordenar]** Ordena el recorrido de una consulta desde el navegador hasta la pantalla:
   - Orden correcto: El visitante abre la página del menú → El código ejecuta supabase.from('platillos').select(...) → La petición viaja con la llave anon y el token de la sesión → La base aplica la política RLS y decide qué filas devuelve → Llega el objeto con data y error → La página pinta las filas en pantalla

---

## B27 — Modelar tu primer sistema de principio a fin

### Concepto

Modelar es decidir la forma de los datos antes de escribir la primera línea de código. Se hace con lápiz y preguntas, no con el teclado. Son cuatro pasos y el orden importa: **preguntas del negocio, entidades, relaciones y tablas con llaves**.

**1. Preguntas.** No empieces con "¿qué tablas necesito?", empieza con "¿qué quiero poder responder o hacer?". Para Tacos El Volcán: ¿cuánto se vendió hoy?, ¿qué platillo se vende más?, ¿quién es cliente frecuente?, ¿qué pedidos están pendientes?, ¿qué opinan los clientes? Cada pregunta que el modelo no pueda contestar es una tabla o una columna que falta.

**2. Entidades.** Son los sustantivos de esas preguntas que tienen vida propia: platillo, cliente, pedido, reseña. La prueba es simple: si el objeto tiene varios datos propios (un platillo tiene nombre, precio, categoría y si está activo), merece tabla; si es un valor suelto (una cantidad, un color), es columna.

**3. Relaciones.** Un cliente hace muchos pedidos: uno a muchos (m4-b6). Un pedido incluye muchos platillos y un platillo aparece en muchos pedidos: muchos a muchos, y eso **no se resuelve con una columna**, se resuelve con una tabla intermedia llamada `pedido_items` (m4-b7). Una reseña pertenece a un cliente y, si quieres medirla, a un pedido.

**4. Tablas con llaves y tipos.** Cada tabla lleva su llave primaria (m4-b5), cada relación se materializa con una llave foránea (m4-b8) y cada columna su tipo (m4-b4). El detalle que casi todos olvidan: `pedido_items` guarda el `precio_unitario` copiado en el momento de la venta. No se consulta el precio actual del platillo, porque el precio cambia y el recibo de hace un mes tiene que seguir diciendo la verdad.

El modelo es la decisión más cara de revertir de todo el proyecto. Un color se cambia en un minuto; una tabla mal partida se arrastra durante años y cada reporte nuevo la vuelve a sufrir (m4-b19). Dirigir a la IA aquí significa darle las preguntas del negocio y exigirle que las traduzca; tú validas que ninguna quedó sin respuesta.

### Analogía

Modelar es el trabajo del sastre antes de cortar la tela. Toma medidas (las preguntas del negocio), dibuja el patrón en papel (las entidades), decide dónde van las costuras y qué pieza se une con cuál (las relaciones) y solo entonces corta (las tablas). Nadie corta primero y cose después "a ver qué sale". Y cuando la tela ya está cortada, mover una costura significa deshacer, y a veces comprar tela nueva: por eso el patrón se revisa dos veces. La IA puede cortar rapidísimo; el patrón sigue siendo tuyo.

### Cómo se ve en la práctica

El modelo de pedidos de Tacos El Volcán cabe en una línea. Léela como un mapa: cada flecha es una llave foránea.

```js
clientes 1 ─── N pedidos 1 ─── N pedido_items N ─── 1 platillos
```

Y así se ve ese mapa en SQL real:

```sql
create table clientes (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  telefono text,
  activo boolean not null default true
);

create table platillos (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  precio numeric(10,2) not null check (precio >= 0),
  categoria text,
  activo boolean not null default true
);

create table pedidos (
  id uuid primary key default gen_random_uuid(),
  cliente_id uuid references clientes(id),
  estado text not null default 'pendiente',
  creado_en timestamptz not null default now()
);

create table pedido_items (
  id uuid primary key default gen_random_uuid(),
  pedido_id uuid not null references pedidos(id) on delete cascade,
  platillo_id uuid not null references platillos(id),
  cantidad int not null check (cantidad > 0),
  precio_unitario numeric(10,2) not null
);
```

Cuatro tablas, cuatro llaves primarias y cuatro foráneas. `pedidos.cliente_id` responde "¿quién pidió?"; `pedido_items.pedido_id` responde "¿qué llevaba ese pedido?"; `pedido_items.platillo_id` responde "¿de qué platillo hablamos?". Y `precio_unitario` responde "¿a cómo estaba ese día?", que es la pregunta que la tabla `platillos` ya no puede contestar cuando subes el precio. Con este modelo, las cinco preguntas del inicio se responden sin agregar una sola columna.

**Advertencia:** renombrar o borrar una columna que ya tiene datos no es un cambio de nombre, es una migración. Hazla con un script versionado y con respaldo verificado antes (m4-b19, m4-b20); desde el panel, un clic de más borra la columna y su contenido sin confirmación.

### Díselo a la IA

> "Estas son las preguntas que mi negocio necesita contestar: [pega la lista]. Tradúcelas a un modelo de datos: entidades, relaciones con su cardinalidad, y tablas con llave primaria, llaves foráneas y tipos. No escribas frontend ni consultas todavía. Para cada pregunta dime qué tabla o qué join la responde, y marca con una advertencia las decisiones que después serían caras de cambiar. Si una pregunta no se puede responder con tu modelo, dilo en vez de inventar una columna."

La última frase es la más útil: obliga a la IA a detectar huecos en lugar de rellenarlos con un campo comodín.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es el primer paso para modelar un sistema?
   - a) Elegir los nombres bonitos de las tablas
   - b) Responder qué preguntas del negocio debe poder contestar el sistema ✔
   - c) Crear el proyecto en Supabase y ver qué sale
   - d) Definir el color del panel de administración

**2. [verdadero/falso]** "Para saber cuánto costó un pedido de hace un mes, lo correcto es leer el precio actual del platillo en la tabla platillos."
   - Respuesta: FALSO — El precio cambia con el tiempo. pedido_items guarda el precio_unitario del momento de la venta; leer el precio actual reescribiría la historia.

**3. [completar]** "La tabla ____ resuelve el muchos a muchos entre pedidos y platillos y guarda el ____ con el que se vendió cada pieza."
   - Banco: `pedido_items` · `precio_unitario` · `platillos` · `total`
   - Respuesta: pedido_items / precio_unitario

**4. [relacionar]** Une cada elemento con su pareja:
   - ¿Cuánto se vendió hoy? ↔ pedidos unido con pedido_items
   - ¿Qué platillo se vende más? ↔ pedido_items unido con platillos
   - ¿Quién pide seguido? ↔ clientes unido con pedidos
   - ¿Qué opinan del servicio? ↔ La tabla resenas

**5. [ordenar]** Ordena los pasos para modelar de principio a fin:
   - Orden correcto: Responder qué preguntas debe contestar el negocio → Listar las entidades que aparecen en esas preguntas → Definir las relaciones y su cardinalidad → Crear las tablas con llave primaria, foráneas y tipos → Cargar datos de prueba y comprobar que cada pregunta se responde

---

## B28 — Los 6 errores de modelado que se pagan caro después

### Concepto

Un modelo no falla el día que lo haces. Falla seis meses después, cuando hay cuatro mil pedidos y alguien pide un reporte. Estos seis errores se repiten en casi todos los proyectos que empiezan con prisa, y ninguno avisa en el momento: la base acepta todo sin quejarse.

Entran por la misma puerta: la frase "ya luego lo arreglo". Guardar una lista en un campo parece más rápido que crear dos tablas; usar `float` parece inofensivo porque el número se ve bien en pantalla; no poner la llave foránea ahorra una línea. El costo no aparece al escribir, aparece al leer: el día del reporte, del cambio de precio o del cliente que pide su historial. Ahí ya hay datos encima y corregir implica migrar, no editar.

- **Guardar listas en un campo.** `ingredientes: "cebolla, cilantro, piña"` o `telefonos: "555-1234, 555-9876"`. *Consecuencia:* no puedes filtrar "platillos sin piña" sin trucos de texto, no puedes validar, no puedes contar. Cada reporte se vuelve adivinanza y el primer "sin cebolla, extra piña" corrompe el dato.
- **Dinero en float.** Un `float` no representa exactamente los decimales: 18.10 puede quedar guardado como 18.099999. *Consecuencia:* al sumar diez mil renglones el error se acumula, el corte de caja no cuadra y nadie sabe por qué. Se usa `numeric(10,2)` o centavos enteros (m4-b4).
- **No usar llaves foráneas.** `pedidos.cliente_id` como texto libre, sin `references`. *Consecuencia:* pedidos huérfanos que apuntan a clientes que no existen, clientes borrados con pedidos fantasma y joins que pierden filas en silencio. La base deja de poder defenderse (m4-b8).
- **Duplicar datos.** Repetir el nombre y el teléfono del cliente en cada pedido. *Consecuencia:* el cliente cambia de número y ahora hay cuarenta versiones distintas; nadie sabe cuál es la buena. Un dato, un lugar (m4-b17), salvo copias deliberadas como el precio histórico.
- **Columnas comodín.** `dato1`, `dato2`, `extra`, `observaciones` donde cada quien mete lo que quiere. *Consecuencia:* nadie sabe qué hay ahí, no se puede validar ni indexar, y el significado vive en la cabeza de quien la creó, que un día se va.
- **Borrar en vez de desactivar.** Un `DELETE` del platillo que ya no se vende. *Consecuencia:* los pedidos históricos pierden su referencia o cambian de sentido, los reportes del año pasado mienten y no hay vuelta atrás. Un campo `activo boolean` conserva la historia.

Todos comparten el mismo patrón: ahorran diez minutos hoy y cobran una semana de trabajo después. Y ninguno lanza un error cuando lo cometes, por eso nadie los corrige a tiempo. La IA cae con facilidad en el dos y en el cuatro si no se le dice explícitamente que no lo haga.

La defensa es la misma para los seis: preguntar "¿esto se podrá filtrar, sumar o explicar dentro de un año?" antes de crear la columna. Si el dato es una lista, necesita tabla; si es dinero, necesita precisión; si es una relación, necesita llave foránea; si tiene historia, no se borra: se desactiva.

### Analogía

Es empacar una mudanza con prisa. Metes cubiertos, tornillos del ropero y cargadores en una sola caja marcada "varios" (la lista en un campo); anotas el peso "a ojo" y al llegar no cuadra (el dinero en float); desarmas la cama y no marcas qué tornillos son suyos (sin llave foránea); escribes la dirección en tres cajas y dos dicen cosas distintas (datos duplicados); dejas una caja sin etiqueta "por si algo cabe" (columna comodín); y tiras lo que no cupo en vez de guardarlo en la bodega (borrar en vez de desactivar). El día de la mudanza todo cabe. El costo llega el día que armas la casa y no encuentras el tornillo.

### Cómo se ve en la práctica

Tres de los seis, en su versión mala y su versión buena. Primero, la lista dentro de un campo:

```sql
-- mal: los ingredientes viven como texto
create table platillos (
  id uuid primary key,
  nombre text,
  ingredientes text  -- 'cebolla, cilantro, piña'
);

-- bien: cada ingrediente es una fila y la unión tiene su tabla
create table ingredientes (
  id uuid primary key default gen_random_uuid(),
  nombre text not null unique
);
create table platillo_ingredientes (
  platillo_id uuid references platillos(id),
  ingrediente_id uuid references ingredientes(id),
  primary key (platillo_id, ingrediente_id)
);
```

Con la versión mala, "¿qué platillos llevan piña?" es una consulta de texto que confunde "piña" con "piñata". Con la buena es un join de una línea. Segundo, el dinero:

```js
precio float,        -- 18.10 se guarda como 18.099999...
precio numeric(10,2) not null check (precio >= 0)  -- exacto al centavo
```

Tercero, borrar contra desactivar, con la llave foránea que protege el historial:

```sql
alter table pedido_items
  add constraint fk_platillo
  foreign key (platillo_id) references platillos(id);

-- el platillo sale del menú, pero sigue existiendo en los recibos
update platillos set activo = false
where nombre = 'Taco de pulpo';
```

El `update` logra lo que el dueño quería —que ya no se ofrezca— sin romper un solo pedido del pasado. Y si alguien intenta borrar un platillo que ya se vendió, la llave foránea lo detiene: la base se defiende sola.

**Advertencia:** convertir una columna `float` a `numeric` en una tabla con datos no es cosmético: hay que decidir qué hacer con los centavos ya perdidos. Y un `drop column` no se deshace. Antes de cualquiera de los dos, verifica que el respaldo del día se puede restaurar (m4-b20), no solo que existe.

### Díselo a la IA

> "Revisa este esquema contra estos seis errores de modelado: listas guardadas en un campo, dinero en float, relaciones sin llave foránea, datos duplicados, columnas comodín y borrado en vez de desactivación. Para cada uno dime: si lo tengo, la tabla y columna exacta, qué se va a romper y en qué plazo, el arreglo con su migración (m4-b19) y si debo respaldar antes. No me des el arreglo sin decirme cómo comprobar después que no perdí filas."

La última condición evita el clásico "ya quedó" que en realidad borró la mitad de la tabla.

### Ejercicios

**1. [opción múltiple]** ¿Por qué el dinero no se guarda en una columna float?
   - a) Porque float ocupa demasiado espacio en disco
   - b) Porque no representa exactamente los decimales y el error se acumula al sumar ✔
   - c) Porque SQL no acepta números con decimales
   - d) Porque float solo funciona con dólares

**2. [verdadero/falso]** "Cuando un platillo deja de venderse, lo correcto es borrarlo de la tabla para que no aparezca en el menú."
   - Respuesta: FALSO — Borrarlo rompe la referencia con los pedidos históricos. Se marca activo = false: desaparece del menú y sigue existiendo en los recibos.

**3. [relacionar]** Une cada elemento con su pareja:
   - Lista de teléfonos en un solo campo ↔ No se puede filtrar ni validar cada teléfono
   - Precio guardado en float ↔ Centavos perdidos que descuadran el corte
   - pedidos.cliente_id sin references ↔ Pedidos huérfanos y joins que pierden filas
   - Nombre del cliente repetido en cada pedido ↔ Versiones contradictorias del mismo dato
   - Columna llamada dato2 ↔ Significado que solo vive en la cabeza de alguien

**4. [completar]** "El dinero se guarda en ____ y un registro que deja de usarse se marca con ____ en lugar de borrarse."
   - Banco: `numeric(10,2)` · `float` · `activo` · `eliminado`
   - Respuesta: numeric(10,2) / activo

**5. [qué hace]** ¿Cuál es el error de modelado en esa tabla?

```sql
create table clientes (
  id uuid primary key,
  nombre text,
  telefonos text
);

-- fila guardada:
-- '555-1234, 555-9876, avisar por WhatsApp'
```

   - a) Los teléfonos van en su propia tabla (o en columnas separadas con tipo y uso), porque así no se pueden filtrar ni validar ✔
   - b) El id debería ser texto en vez de uuid
   - c) Falta un índice en la columna nombre
   - d) Ninguno: es la forma recomendada de guardar contactos

---

## B29 — Cuándo NO necesitas una base de datos

### Concepto

No toda aplicación necesita una base de datos. Una base cobra una renta mensual en dinero y en atención: esquema, migraciones, permisos, respaldos, monitoreo y alguien que responda cuando se cae. Para veinte registros que cambian poco, esa renta cuesta más que el problema que resuelve.

Hay una escalera, de menor a mayor infraestructura:

- **JSON estático en el repositorio.** Datos que solo cambian cuando tú publicas: menú, catálogo, preguntas frecuentes. Cero infraestructura y cada cambio queda versionado en Git.
- **localStorage.** Lo que pertenece a una persona en un navegador: tema, último filtro, favoritos. No se comparte y se borra con el navegador.
- **Un archivo.** Un CSV o JSON que un humano edita y se publica: catálogo de sesenta productos, directorio interno, calendario de eventos.
- **Una hoja de cálculo compartida.** Varias personas de confianza escribiendo pocas filas al día: inventario de un taller, lista de asistencia. Tiene API, pero no es una base: sin transacciones, sin tipos, sin integridad.
- **Base de datos.** Cuando hay escritura simultánea, permisos por usuario, relaciones, historial, volumen o dinero de por medio.

¿Cuándo toca subir de escalón? Cuando dos personas escriben a la vez y se pisan; cuando necesitas saber quién cambió qué; cuando una pregunta exige cruzar tablas; cuando hay datos que no todos deben ver; cuando la hoja ya se rompe con filas duplicadas y fórmulas rotas. Esas son señales concretas, no modas.

El costo de mantener un backend para veinte registros es real y casi nunca se calcula: crear la cuenta, configurar auth, escribir políticas RLS, probar un respaldo, migrar cuando cambie un campo, actualizar dependencias, revisar que no se cayó. Son horas al mes que no producen nada nuevo. Y sin respaldos ni monitoreo, ese backend es peor que un JSON, porque falla en silencio.

Decidir no tener base es una decisión de arquitectura, no flojera. Y no es una condena: si el modelo está claro, pasar de un JSON a una tabla es un fin de semana (m4-b19). Lo que no se perdona es construir la catedral para guardar veinte nombres y abandonarla a los tres meses.

### Analogía

Contratar una base de datos para veinte registros es instalar un generador diésel de planta para cargar el celular. Funciona, y trae consigo combustible, mantenimiento, ruido, permiso y la obligación de revisarlo cada mes. El celular solo necesitaba un contacto en la pared. El día que montes un taller con soldadoras, el generador se justifica; antes, lo único que hace es distraerte de vender.

### Cómo se ve en la práctica

El menú de Tacos El Volcán son veinticinco platillos que cambian cada temporada. No necesita tabla, necesita un archivo en el repositorio:

```json
// datos/menu.json
[
  { "nombre": "Taco al pastor", "precio": 18, "categoria": "tacos" },
  { "nombre": "Volcán", "precio": 42, "categoria": "especiales" }
]
```

```js
const res = await fetch('/datos/menu.json');
const platillos = await res.json();
console.log(platillos.length); // 2
```

Y el tema que eligió el visitante no es un dato del negocio: es una preferencia de su navegador.

```js
localStorage.setItem('tema', 'oscuro');
const tema = localStorage.getItem('tema') ?? 'claro';
```

Esto aguanta perfecto hasta que se rompe, y conviene saber exactamente cuándo: el día que dos meseros editan el mismo archivo a la vez, o que quieres que cada cliente vea solo sus pedidos. Ahí ya no es un archivo publicado ni una preferencia local: es una tabla con permisos (m4-b22).

**Advertencia:** `localStorage` no es una base de datos. Se borra al limpiar el navegador, no se comparte entre dispositivos y el usuario puede editarlo desde DevTools. Nunca guardes ahí permisos, precios ni datos personales. Y un JSON en el repositorio es público: si el sitio es público, sus teléfonos también.

### Díselo a la IA

> "Ayúdame a decidir si necesito una base de datos. Te doy el contexto: son [N] registros, los edita [quién], cambian [cada cuánto], escriben [cuántas personas] a la vez, [sí/no] hay permisos distintos por usuario y [sí/no] hay dinero involucrado. Compárame JSON estático, archivo, hoja de cálculo y base de datos con el costo mensual de cada opción —infraestructura y mi tiempo de mantenimiento—, dime cuál es la proporcionada hoy y en qué señal concreta debería migrar. Si tu recomendación es no usar base de datos, dilo sin rodeos."

Pedir permiso para la respuesta simple es la mitad del ejercicio: la IA tiende a proponer la solución más completa, no la más barata.

### Ejercicios

**1. [opción múltiple]** El visitante elige tema oscuro y quieres recordarlo en su próxima visita. ¿Dónde va ese dato?
   - a) En una tabla de Supabase con RLS por usuario
   - b) En localStorage del navegador ✔
   - c) En un archivo JSON del repositorio
   - d) En la hoja de cálculo del negocio

**2. [verdadero/falso]** "Si los datos los edita una persona una vez al mes y el resto solo los lee, una base de datos con autenticación y RLS es la opción más proporcionada."
   - Respuesta: FALSO — Ese caso lo cubre un archivo o un JSON publicado. La base añade auth, políticas, respaldos y mantenimiento sin resolver ningún problema real (m4-b1).

**3. [completar]** "Un ____ en el repositorio sirve para datos que solo cambian al publicar; el ____ guarda preferencias de un solo navegador."
   - Banco: `JSON` · `localStorage` · `servidor` · `SQL`
   - Respuesta: JSON / localStorage

**4. [relacionar]** Une cada elemento con su pareja:
   - Menú de 25 platillos que cambia cada temporada ↔ JSON estático en el repositorio
   - Favoritos del visitante en su celular ↔ localStorage
   - Tres personas capturan pedidos al mismo tiempo ↔ Base de datos
   - Inventario de 40 piezas que el dueño edita los lunes ↔ Hoja de cálculo compartida

**5. [qué hace]** ¿Qué hace este código?

```js
const res = await fetch('/datos/menu.json');
const platillos = await res.json();
console.log(platillos.length);
```

   - a) Descarga el archivo menu.json y lo convierte en un arreglo de objetos ✔
   - b) Crea una tabla llamada menu en la base de datos
   - c) Guarda el menú en localStorage
   - d) Envía el menú al servidor para publicarlo

---

## B30 — Repaso integrador de datos (mega-quiz jugable)

### Concepto

Treinta lecciones después, DAT-402 ya no es una lista de temas: es un recorrido. Este repaso te lo devuelve en un solo mapa —**reconocer, no memorizar**:

- **Qué guardar** — el modelo nace de preguntas del negocio, no de tablas (m4-b1, m4-b27): entidades, relaciones y tipos de dato (m4-b3 a m4-b5).
- **Cómo se conecta** — llave primaria para identificar, llave foránea para unir, tabla puente para muchos a muchos, y normalización para que cada dato viva en un solo lugar (m4-b5 a m4-b8, m4-b17).
- **Cómo preguntar** — SELECT, WHERE, ORDER BY, JOIN, agregación y GROUP BY (m4-b9 a m4-b15); índices cuando la pregunta tarda (m4-b16).
- **Cómo no romperlo** — transacciones, migraciones y respaldos que se prueban, no que se suponen (m4-b18 a m4-b20).
- **Quién lo ve** — Supabase con RLS, storage, auth y realtime (m4-b21 a m4-b25).
- **Quién lo pide y si hacía falta** — la consulta desde el frontend y el criterio para no construir una base donde bastaba un archivo (m4-b26, m4-b29).

Cada bloque contesta una pregunta distinta sobre el mismo dato: ¿de dónde sale?, ¿cómo se conecta?, ¿cómo lo pregunto?, ¿cómo lo protejo?, ¿cómo lo recupero si se pierde?, ¿y de verdad lo necesitaba?

El mega-quiz de abajo no pide definiciones. Te da un esquema y te pide leerlo: identificar la llave, ver qué relación implica una foránea, distinguir la columna histórica de la actual y elegir la consulta que responde una pregunta de negocio. Ese es el examen real del módulo. Si sabes leer un esquema, puedes dirigir a la IA aunque no memorices sintaxis: ella escribe el SQL, tú decides si la respuesta tiene sentido.

Si resuelves los ocho ejercicios sin ayuda, ya puedes modelar, consultar y proteger un sistema pequeño de punta a punta. No memorizaste comandos: sabes qué preguntar y cómo comprobar la respuesta.

### Analogía

Este repaso es un taller de imprenta antes de un tiraje grande. El cliente llega con lo que quiere comunicar (las preguntas del negocio); el cajista compone una plancha por pieza, no una con todo encimado (el modelo y sus tablas); decide qué plancha va con qué pliego y en qué orden se cose el cuadernillo (las relaciones y las llaves); la prensa saca solo los pliegos del pedido (las consultas); el almacén entrega planchas con gafete y únicamente las del cliente que las mandó a hacer (RLS); y las matrices tienen copia en otro edificio, porque un incendio no puede borrar el catálogo (los respaldos). El mostrador que recibe el pedido y entrega el pliego es el frontend. Si una plancha está mal compuesta, no lo notas en la primera hoja: lo notas en el tiraje completo. Por eso el repaso no pregunta cómo se dibuja una letra; pregunta si el taller entrega el libro correcto.

### Cómo se ve en la práctica

Este es el esquema de Tacos El Volcán. Léelo antes de las preguntas: cada `references` te dice por dónde unir, y cada tipo te dice qué operación tiene sentido.

```js
clientes      (id pk, nombre, telefono, activo bool)
platillos     (id pk, nombre, precio numeric(10,2), categoria, activo bool)
pedidos       (id pk, cliente_id fk -> clientes, estado, creado_en)
pedido_items  (id pk, pedido_id fk -> pedidos, platillo_id fk -> platillos,
               cantidad, precio_unitario numeric(10,2))
```

Tres preguntas de negocio, tres consultas. Fíjate en las decisiones, no en la sintaxis:

```sql
-- 1) ¿Cuánto se vendió ayer?
select sum(i.cantidad * i.precio_unitario) as total
from pedido_items i
join pedidos p on p.id = i.pedido_id
where p.creado_en >= current_date - 1
  and p.creado_en < current_date
  and p.estado <> 'cancelado';

-- 2) ¿Qué cinco platillos se vendieron más en 30 días?
select pl.nombre, sum(i.cantidad) as piezas
from pedido_items i
join platillos pl on pl.id = i.platillo_id
join pedidos p on p.id = i.pedido_id
where p.creado_en >= now() - interval '30 days'
group by pl.nombre
order by piezas desc
limit 5;

-- 3) ¿Qué clientes activos no piden hace 30 días?
select c.nombre, max(p.creado_en) as ultimo_pedido
from clientes c
left join pedidos p on p.cliente_id = c.id
where c.activo = true
group by c.id, c.nombre
having max(p.creado_en) < now() - interval '30 days'
    or max(p.creado_en) is null;
```

La primera usa `precio_unitario`, no `platillos.precio`, porque el reporte debe reflejar lo que se cobró ese día; y excluye cancelados, porque una venta cancelada no es ingreso. La segunda agrupa por platillo y ordena por la suma, no por el precio. La tercera usa `left join` para incluir a quien nunca pidió —el más valioso para una campaña— y `having` porque el filtro es sobre un agregado, no sobre una fila. Tres consultas, tres decisiones de negocio distintas escondidas en el SQL.

### Díselo a la IA

> "Actúa como examinador de mi módulo de bases de datos (DAT-402). Hazme un examen de 10 preguntas que mezclen modelado, llaves, relaciones, tipos de dato, SELECT, WHERE, JOIN, agregación, GROUP BY, índices, transacciones, migraciones, respaldos, RLS y consultas desde el frontend. Una a la vez, sin darme opciones: yo respondo libre y tú no corriges hasta el final. Cuando termine, dame una tabla con: pregunta, si acerté, qué me faltó y a qué lección exacta de DAT-402 debo volver (por ejemplo m4-b13, m4-b17 o m4-b22). No me des el porcentaje: dame la ruta de regreso."

La autoevaluación es el cierre del módulo: no mide cuánto memorizaste, mide qué tan rápido encuentras el hueco y a dónde volver.

### Ejercicios

**1. [opción múltiple]** ¿Qué tabla resuelve la relación muchos a muchos entre pedidos y platillos?
   - a) platillos
   - b) pedidos
   - c) pedido_items ✔
   - d) clientes

**2. [completar]** "La llave ____ identifica cada fila y la llave ____ conecta una fila con otra tabla."
   - Banco: `primaria` · `foránea` · `puente` · `índice`
   - Respuesta: primaria / foránea

**3. [relacionar]** Une cada elemento con su pareja:
   - ¿Cuánto vendí este mes? ↔ SUM sobre pedido_items
   - ¿Qué platillo se vende más? ↔ GROUP BY con SUM de cantidad
   - ¿Quién no ha pedido en 30 días? ↔ LEFT JOIN con HAVING sobre la fecha
   - ¿Quién puede ver cada pedido? ↔ Políticas RLS

**4. [verdadero/falso]** "En un reporte de ventas de un pedido de hace un mes conviene leer el precio actual del platillo en la tabla platillos."
   - Respuesta: FALSO — El precio cambia; pedido_items guarda el precio_unitario del momento de la venta. Usar el actual reescribe la historia y descuadra el reporte (m4-b27).

**5. [ordenar]** Ordena el recorrido completo, del negocio a la pantalla:
   - Orden correcto: Las preguntas que el negocio necesita contestar → El modelo: entidades y relaciones → Las tablas con llave primaria y llaves foráneas → Las políticas RLS y el login de usuarios → El respaldo programado y probado → La consulta desde el frontend

**6. [qué hace]** ¿Qué devuelve esta consulta?

```sql
select c.nombre, max(p.creado_en) as ultimo_pedido
from clientes c
left join pedidos p on p.cliente_id = c.id
where c.activo = true
group by c.id, c.nombre
having max(p.creado_en) < now() - interval '30 days'
    or max(p.creado_en) is null;
```

   - a) Los clientes activos que no han pedido en los últimos 30 días, incluidos los que nunca pidieron ✔
   - b) Todos los clientes con su último pedido, sin importar la fecha
   - c) Los pedidos cancelados de los últimos 30 días
   - d) Los platillos que no se vendieron en 30 días

**7. [opción múltiple]** Una consulta desde el frontend devuelve data: [] y error: null. ¿Qué es lo más probable?
   - a) La tabla no existe en la base
   - b) La llave anon es inválida
   - c) No hay filas visibles para ese usuario: la tabla está vacía o la política RLS no le permite ver nada ✔
   - d) El servidor de la base está caído

**8. [opción múltiple]** Un reporte tarda 4 segundos sobre 200,000 pedidos porque filtra por creado_en. ¿Cuál es el primer paso razonable?
   - a) Agregar un índice en la columna por la que filtras y ordenas ✔
   - b) Mudar todo el sistema a NoSQL
   - c) Borrar los pedidos viejos para que la tabla sea más chica
   - d) Mover la consulta al frontend para que cargue más rápido

---
