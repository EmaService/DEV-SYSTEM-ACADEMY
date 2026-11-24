# MES 4 · MATERIA C — Construye con IA IV
## Lecciones C1–C30 (Mes 4)

> Formato de ejercicios: `[opción múltiple]`, `[completar]` (con banco de palabras), `[relacionar]`, `[verdadero/falso]`, `[ordenar]`, `[qué hace]`. La respuesta correcta va marcada con ✔ o indicada al final del ejercicio.

---

## C1 — El brief de backend: describir un sistema que recuerda

### Concepto

En el Módulo 3, tu landing de **Tacos El Volcán** tomaba el pedido y lo mandaba por WhatsApp. Se veía completa, pero no recordaba nada: cerrabas la pestaña y del pedido solo quedaba un chat en el teléfono de alguien. Este mes el sitio cambia de naturaleza. Deja de ser un folleto con un botón y se convierte en un sistema que **recuerda**: cada pedido tendrá folio, estado y dueño; el cliente podrá volver a consultarlo; tú podrás saber cuántos platos vendiste el viernes.

Recordar trae tres cosas que una landing no tenía. **Usuarios**: alguien tiene que poder entrar y ser reconocido, aunque al principio sea solo el dueño. **Estados**: un pedido no está hecho o no hecho; está pendiente, en preparación, entregado o cancelado, y cada cambio importa. **Permisos**: no todos ven lo mismo. El empleado ve los pedidos del día; el dueño ve ventas, costos y clientes; el cliente ve solo lo suyo.

El **brief de backend** es un documento de una página que describe ese sistema antes de construirlo. Responde cuatro preguntas, siempre las mismas: **quién entra**, **qué se guarda**, **quién puede verlo** y **qué pasa si falla**. No lleva código ni colores. Lleva decisiones: el cliente pide sin crear cuenta; un pedido cancelado no se borra, se marca; si la base no responde, el sitio avisa y no promete un pedido que no guardó.

La segunda pregunta incluye lo que *no* se guarda. No guardas números de tarjeta, no guardas contraseñas en texto plano (m4-a16) y no usas el chat de WhatsApp como base de datos. Escribirlo evita que dentro de tres meses alguien, por si acaso, meta la tarjeta en un campo de texto.

Te importa aunque la IA escriba el código, porque la IA no estuvo en tu negocio. Sabe escribir SQL y sabe qué es una llave foránea, pero no sabe que en Tacos El Volcán un pedido puede cancelarse después de cobrar, ni que el sobrino del dueño no debe ver los márgenes. Cuando el brief tiene un hueco, la IA lo rellena con una suposición razonable, y esa suposición se convierte en un bug o en un hoyo de seguridad (m4-a19, m4-c11).

**Dato para recordar:** un sistema que recuerda sin permisos no es un sistema, es un archivo abierto.

### Analogía

El brief es el **rol de zarpe de un barco pesquero**. Antes de soltar amarras, el capitán llena una hoja: quién va a bordo con nombre y puesto, qué carga va en qué bodega, quién tiene llave de la bodega de víveres y a qué puerto se regresa si el motor falla. No es papeleo: en altamar no hay a quién preguntarle. Si el rol dice doce tripulantes y a bordo hay once, alguien se quedó en el muelle. El cuaderno de bitácora —lo que el barco recuerda— solo sirve si el rol dijo qué anotar y quién puede leerlo; si cualquiera escribe cualquier cosa, la bitácora miente. Y cuando el barco vuelve, ese rol es lo que permite explicar por qué se gastó el diésel y por qué faltó una caja.

### Cómo se ve en la práctica

Así se ve el brief de Tacos El Volcán, respondido en cuatro renglones:

- **Quién entra:** el cliente pide sin cuenta; el dueño y un empleado entran al panel con correo y contraseña (m4-c12).
- **Qué se guarda:** clientes, platillos, pedidos con sus renglones y reseñas. No se guardan tarjetas ni contraseñas en texto plano.
- **Quién puede verlo:** el cliente ve sus pedidos; el empleado, los del día; el dueño, ventas y márgenes. Eso se implementa con reglas en la base (m4-c11).
- **Qué pasa si falla:** el sitio muestra un aviso y no confirma el pedido; hay respaldo diario y una copia probada (m4-b20).

La diferencia técnica está en lo que pasa después del botón. Antes, el sitio construía un mensaje y lo entregaba a WhatsApp; el dato salía de tu control. Ahora el pedido se escribe en la base con un estado inicial y vuelve con folio:

```js
// Módulo 3: el pedido se va al chat y el sitio lo olvida
const texto = '2 al pastor, 1 horchata';
window.open('https://wa.me/5215512345678?text=' + encodeURIComponent(texto));

// Módulo 4: el pedido se guarda, tiene folio y estado
const { data, error } = await supabase
  .from('pedidos')
  .insert({ cliente_id: 7, estado: 'pendiente', total: 185.00 })
  .select('id, estado, creado_en')
  .single();

// data = { id: 41, estado: 'pendiente', creado_en: '2026-11-24T21:14:03+00:00' }
```

Ese `id: 41` es la diferencia entre un chat y un sistema. Con él puedes buscar el pedido, cambiar su estado, sumar el día y reclamar cuando algo no cuadra. Y la pregunta *qué pasa si falla* se vuelve concreta: si `error` no es nulo, el sitio no debe decir pedido recibido (m4-c8).

### Díselo a la IA

> "Actúa como analista de sistemas. Te describo mi negocio: Tacos El Volcán, una taquería con menú, pedidos por WhatsApp y un formulario de contacto. Hoy el sitio no guarda nada y quiero que empiece a recordar: pedidos con folio y estado, clientes, platillos y reseñas. Hazme un brief de backend de una página que responda exactamente cuatro cosas: 1) quién entra y cómo se identifica, 2) qué se guarda y qué no, 3) quién puede ver qué información, 4) qué pasa si algo falla o si el pedido llega a medias. Para cada respuesta dame una decisión concreta, no un menú de opciones. Después hazme cinco preguntas que mi brief todavía no responde y que podrían costarme dinero o un problema de seguridad. No escribas código ni SQL todavía."

### Ejercicios

**1. [opción múltiple]** Tu brief dice que el cliente puede ver sus pedidos y el empleado los del día. ¿Qué pieza del sistema hace cumplir esa diferencia?
   - a) El color y el tamaño de los botones del panel
   - b) Las reglas de permisos aplicadas en la base y en el servidor ✔
   - c) El logo de Tacos El Volcán en la esquina
   - d) El ancho de la pantalla desde donde se consulta

**2. [verdadero/falso]** "Si la IA va a escribir el backend, el brief puede quedarse en la cabeza del dueño."
   - Respuesta: FALSO — la IA no estuvo en el negocio: todo lo que no esté escrito lo va a suponer. Un brief que solo existe en la cabeza no se puede revisar, ni comparar contra lo entregado, ni corregir cuando cambie el negocio.

**3. [relacionar]** Une cada elemento con su pareja:
   - Quién entra ↔ Define usuarios y cómo se identifican
   - Qué se guarda ↔ Define entidades, estados y datos que se evitan
   - Quién puede verlo ↔ Define permisos por rol y por fila
   - Qué pasa si falla ↔ Define respaldos, avisos y qué hacer con un pedido a medias

**4. [completar]** "Un pedido que pasa de pendiente a preparando y luego a entregado tiene ____; la decisión de que el empleado no vea los costos es un ____."
   - Banco: `estados` · `permiso` · `respaldo` · `formulario`
   - Respuesta: estados / permiso

**5. [ordenar]** Ordena cómo se escribe un brief de backend antes de pedir código.
   - Orden correcto: Describir el negocio y el flujo actual, incluido lo que hoy se pierde → Responder las cuatro preguntas: quién entra, qué se guarda, quién lo ve, qué pasa si falla → Listar las entidades y los estados que el sistema necesita recordar → Pedirle a la IA que señale huecos y riesgos del brief → Congelar esa versión y usarla como contrato para el modelo de datos

---

## C2 — PRÁCTICA: diseñar el modelo de datos de tu negocio

### Concepto

Un **modelo de datos** es la lista de cosas que tu negocio necesita recordar y la forma en que se conectan. No empieza en Supabase ni en SQL: empieza en una hoja con preguntas.

Hazlas como si el sistema ya existiera y estuvieras platicando con él: ¿qué vendí hoy?, ¿quién hizo ese pedido?, ¿cuánto lleva gastado ese cliente?, ¿qué platillo tiene las peores reseñas?, ¿qué pedidos están pendientes desde ayer? Cada respuesta exige guardar algo. Los sustantivos que se repiten y tienen vida propia son las **entidades**: cliente, platillo, pedido, reseña.

Una entidad merece tabla propia cuando cumple tres condiciones: tiene datos que solo le pertenecen (un cliente tiene teléfono; un pedido no), aparece en varias operaciones (el mismo platillo se vende cien veces) y se conecta con otras entidades. Si no cumple las tres, probablemente es una columna.

El error más común es meter todo en una tabla. Al principio parece simple: `pedidos` con una columna `detalle` que dice 2 al pastor, 1 horchata. Funciona una semana. Después quieres saber cuántos platillos vendiste, cuánto dejó cada uno o qué se canceló, y no puedes: la información está escrita dentro de un texto, como una nota en una servilleta. Separar el pedido de sus renglones es lo que convierte esa nota en algo que se puede sumar.

Las relaciones se dibujan con cardinalidad: un cliente hace **muchos** pedidos; un pedido tiene **muchos** renglones; cada renglón apunta a **un** platillo. La parte de muchos se resuelve con una columna en la tabla del lado muchos, la llave foránea (m4-b8). Ese dibujo es lo que hoy vas a entregar, antes de escribir una línea de SQL.

Modelar es barato; remodelar con datos adentro es caro (m4-b27). Si te equivocas en el dibujo, corregirlo cuesta una tarde. Si te equivocas con dos mil pedidos reales, cuesta migraciones, copias y una noche sin dormir.

### Analogía

Modelar se parece al **gabinete de cajones de un relojero**. El relojero no echa todos los engranes, resortes y cristales en un mismo frasco: tiene un cajón rotulado para cada tipo de pieza, y cada reloj que entra al taller lleva una ficha con su número. La ficha de reparación no dice le puse un resorte; dice reloj 114, resortes del cajón 3. Así, cuando vuelve el mismo reloj, sabe qué le puso; si se acaba un resorte, sabe cuántos quedan; y si el cajón 3 se reordena, las fichas siguen apuntando al número correcto, no al tercer compartimento de la izquierda. Meter todo en un frasco ahorra cajones el primer día y arruina el taller el primer mes.

### Cómo se ve en la práctica

Estas son las cinco tablas que salen de las preguntas de Tacos El Volcán, con la pregunta que responde cada una:

- `clientes`: ¿quién pidió? Nombre, teléfono, correo.
- `platillos`: ¿qué vendes y a cuánto? Nombre, precio, si está disponible.
- `pedidos`: ¿qué orden se hizo, de quién y en qué estado va?
- `pedido_items`: ¿qué platillos lleva ese pedido y cuántos de cada uno?
- `resenas`: ¿qué opinó un cliente de un platillo?

El diagrama en texto, que es la entrega de esta práctica:

```js
clientes   1 ──── N  pedidos
pedidos    1 ──── N  pedido_items
platillos  1 ──── N  pedido_items
clientes   1 ──── N  resenas
platillos  1 ──── N  resenas

pedido_items es la tabla que une pedidos con platillos:
un renglón = un platillo dentro de un pedido.
```

Dos decisiones que el diagrama no muestra pero el brief sí. Primero, `pedido_items` guarda el `precio_unitario` del momento de la venta: si mañana sube el precio del pastor, los pedidos viejos deben seguir valiendo lo que valían. Segundo, `resenas` permite cliente vacío si la reseña es anónima, pero exige platillo: una reseña sin platillo no sirve para decidir qué quitar del menú.

Con ese dibujo, la pregunta *¿cuánto vendí de pastor esta semana?* se contesta con una consulta, no abriendo el chat:

```sql
select pl.nombre, sum(pi.cantidad) as vendidos
from pedido_items pi
join pedidos p    on p.id = pi.pedido_id
join platillos pl on pl.id = pi.platillo_id
where p.creado_en >= now() - interval '7 days'
  and p.estado <> 'cancelado'
group by pl.nombre
order by vendidos desc;
```

Si esa consulta se puede escribir sin adivinar nada, el modelo está bien. Si te obliga a partir textos o a cruzar dos hojas, falta una tabla.

### Díselo a la IA

> "Voy a modelar la base de datos de Tacos El Volcán, una taquería con menú, pedidos, clientes y reseñas. Primero te doy las preguntas del negocio: ¿qué se vendió hoy y cuánto?, ¿quién hizo cada pedido?, ¿qué platillos lleva un pedido y en qué estado va?, ¿qué opinan los clientes de cada platillo? Devuélveme: 1) las entidades que salen de esas preguntas, cada una con la razón por la que merece tabla propia; 2) lo que NO merece tabla propia y debería ser solo una columna; 3) las relaciones entre entidades con su cardinalidad; 4) un diagrama en texto que pueda pegar en mi documentación; 5) tres preguntas del negocio que mi modelo todavía no puede responder. No escribas SQL ni nombres de tipos de dato todavía."

### Ejercicios

**1. [opción múltiple]** En Tacos El Volcán, ¿por qué los platillos de un pedido van en `pedido_items` y no en una columna de texto dentro de `pedidos`?
   - a) Porque una columna de texto no puede guardar más de un platillo
   - b) Porque cada renglón necesita cantidad y precio propio, y así se puede sumar y consultar por platillo ✔
   - c) Porque las tablas con muchas columnas no se pueden respaldar
   - d) Porque Supabase prohíbe guardar texto libre

**2. [relacionar]** Une cada elemento con su pareja:
   - clientes ↔ Una persona que hace pedidos
   - platillos ↔ Un producto del menú con su precio
   - pedidos ↔ Una orden con fecha, estado y total
   - pedido_items ↔ Cuántos de qué platillo lleva una orden
   - resenas ↔ La opinión de un cliente sobre un platillo

**3. [ordenar]** Ordena el trabajo de modelar antes de pedir SQL.
   - Orden correcto: Escribir las preguntas que el negocio necesita responder → Marcar los sustantivos que se repiten y tienen datos propios → Decidir qué merece tabla propia y qué es solo una columna → Dibujar las relaciones y su cardinalidad → Pedirle a la IA el SQL de las tablas

**4. [completar]** "Cada pedido pertenece a ____ cliente y puede tener ____ renglones; por eso la llave foránea vive en la tabla ____."
   - Banco: `un` · `muchos` · `pedido_items` · `clientes` · `ninguno`
   - Respuesta: un / muchos / pedido_items

**5. [qué hace]** ¿Qué significa la segunda línea del diagrama?

```js
clientes   1 ──── N  pedidos
platillos  1 ──── N  pedido_items
```

   - a) Un platillo puede aparecer en muchos renglones de pedido, y cada renglón apunta a un solo platillo ✔
   - b) Un pedido puede tener un solo platillo y ese platillo se guarda dentro de pedidos
   - c) Cada renglón de pedido puede contener varios platillos a la vez
   - d) Los platillos se guardan como texto dentro de la tabla pedidos

---

## C3 — PRÁCTICA: crear tu proyecto en Supabase

### Concepto

**Supabase** es PostgreSQL administrado con un panel encima. Te da una base real, un editor de SQL, autenticación, almacenamiento de archivos y una API lista para tu sitio. No instalas nada ni rentas un servidor: creas un proyecto y trabajas.

Un proyecto es un paquete con cuatro cosas: una base de datos, una dirección web, un juego de llaves y una región. El nombre es para ti; la región decide qué tan lejos viven tus datos de tus usuarios; la contraseña de la base es un secreto distinto al de tu cuenta; las llaves son lo que usa el código para entrar.

Hay dos llaves que vas a oír todo el tiempo y no son intercambiables. La **anon key** (en proyectos nuevos aparece como *publishable key*) está hecha para el navegador: es pública, y lo que limita lo que puede hacer son las reglas por fila que activarás en m4-c11. La **service_role key** (o *secret key*) es la llave maestra: salta esas reglas y puede leer, escribir y borrar todo. Va solo en el servidor, nunca en el navegador ni en GitHub.

La contraseña de la base es un tercer secreto: sirve para conectarte directo a PostgreSQL con `psql` o con herramientas de migración. No es la llave de la API y no se vuelve a mostrar después de crear el proyecto. Si la pierdes, se resetea; si la compartes, cambias la base.

El plan gratuito tiene letra chica que conviene saber antes y no después: permite dos proyectos activos, alrededor de 500 MB de base y **pausa el proyecto tras siete días sin actividad**. Pausado no es borrado: los datos siguen ahí y se reactiva desde el panel, pero mientras está pausado tu sitio no puede leer ni guardar. Para el proyecto del curso alcanza; para un negocio que cobra, se paga.

**Dato para recordar:** la anon key es pública a propósito. Lo que protege tus datos no es el secreto de la llave, son las reglas de la base (m4-c11).

### Analogía

Crear el proyecto es **rentar una bodega en un edificio de almacenaje**. Te dan una dirección (la Project URL), un número de bodega (la referencia del proyecto) y pones tu propio candado. La llave de ese candado es la anon key: abre tu puerta, no la del vecino, y el reglamento del edificio decide qué puedes meter y sacar de tu cuarto. La service_role es la llave maestra del administrador: abre todas las bodegas y no le pide permiso a nadie; por eso no se la prestas a un visitante. La región es la ciudad donde está el edificio: si queda al otro lado del país, cada viaje tarda más. Y si dejas de pagar, no te tiran las cajas: te ponen un candado temporal en la puerta hasta que arregles la cuenta.

### Cómo se ve en la práctica

Los pasos, en orden. Antes de empezar, ten abierto tu gestor de contraseñas.

- Entra a `supabase.com` y crea la cuenta con GitHub o con correo. Verifica el correo.
- **New project**: elige la organización, ponle nombre (`tacos-el-volcan`), genera una contraseña de base de 24 caracteres o más y guárdala en el gestor. Selecciona la región más cercana a tus usuarios; desde México, normalmente el este de Estados Unidos. Deja el plan gratuito.
- Espera uno o dos minutos a que termine la provisión. El panel debe mostrar el proyecto como *Active*.
- Abre **Project Settings → API** (o *Data API*). Ahí están la **Project URL**, con la forma `https://tuproyecto.supabase.co`, y la **anon key**. Copia las dos.
- Pégalas en un archivo `.env` en la raíz de tu proyecto, no dentro del HTML.
- Agrega `.env` a `.gitignore` antes del primer commit.

```js
VITE_SUPABASE_URL=https://tuproyecto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

Y el cliente que usará tu sitio:

```js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
```

Para comprobar que la dirección y la llave sirven, pide la raíz de la API:

```js
curl "https://tuproyecto.supabase.co/rest/v1/" -H "apikey: TU_ANON_KEY"
```

Debe responder un JSON con la lista de endpoints. Si responde `401`, la llave está mal copiada; si no responde, revisa que el proyecto no esté pausado.

**Advertencia:** la service_role key no se pone en el navegador, ni en un archivo `config.js`, ni en una variable con prefijo `VITE_`. Todo lo que llega al navegador lo puede leer cualquiera con Ctrl+U, y esa llave ignora las reglas por fila: con ella se puede borrar tu base completa. Si crees que se filtró, revócala en el panel y genera otra (m4-c10).

**Advertencia:** el plan gratuito pausa el proyecto a los siete días sin uso. Si vas a entregar el sitio o enseñarlo en una demo, entra al panel esa semana o pasa a un plan de pago; un proyecto pausado se ve exactamente como un sitio descompuesto.

### Díselo a la IA

> "Voy a crear mi proyecto de Supabase para Tacos El Volcán y nunca lo he hecho. Guíame paso a paso sin saltarte nada: qué nombre ponerle, cómo elegir la región desde México, cómo generar y guardar la contraseña de la base, y en qué parte del panel veo la Project URL y la anon key. Explícame la diferencia entre anon key, service_role y contraseña de la base, y dime exactamente en qué archivo va cada una en un sitio con Vite. Al final dame un checklist de seis puntos para confirmar que el proyecto quedó bien, y una lista de las tres cosas que nunca debo subir a GitHub. Si algún paso depende de que el proyecto ya esté activo, dímelo."

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estas llaves puedes usar en el código que corre en el navegador?
   - a) La anon key (publishable key), porque está pensada para eso y queda limitada por las reglas de la base ✔
   - b) La service_role key, porque es más segura
   - c) La contraseña de la base de datos
   - d) Cualquiera, siempre que el archivo esté en una carpeta privada

**2. [verdadero/falso]** "La service_role key se puede usar en el frontend si la guardas en un archivo aparte del HTML."
   - Respuesta: FALSO — todo lo que el navegador descarga lo puede leer cualquiera, incluso si está en otro archivo. La service_role salta las reglas por fila y permite borrar la base; solo va en variables de entorno del servidor.

**3. [ordenar]** Ordena la creación y configuración del proyecto.
   - Orden correcto: Crear la cuenta en supabase.com y verificar el correo → Crear el proyecto con nombre, región y contraseña de base → Esperar a que el proyecto quede activo → Copiar la Project URL y la anon key desde Settings → API → Guardar los valores en .env y agregar .env a .gitignore

**4. [completar]** "La dirección del proyecto es la ____. La llave que puede ir al navegador es la ____. La llave que salta las reglas y solo vive en el servidor es la ____."
   - Banco: `Project URL` · `anon key` · `service_role` · `contraseña de la base`
   - Respuesta: Project URL / anon key / service_role

**5. [relacionar]** Une cada elemento con su pareja:
   - Project URL ↔ Dirección base a la que el sitio hace las peticiones
   - anon key ↔ Llave pública del navegador, limitada por las reglas por fila
   - service_role ↔ Llave administrativa que ignora esas reglas
   - Contraseña de la base ↔ Secreto para conexión directa a PostgreSQL
   - Región ↔ Ciudad del servidor; define latencia y no se cambia fácil

---

## C4 — PRÁCTICA: crear tus primeras tablas dirigiendo a la IA

### Concepto

Ya tienes el brief, el dibujo y el proyecto. Falta lo que convierte el dibujo en una base real: las tablas. No las vas a escribir de memoria. Vas a dirigir a la IA, y tu trabajo es dar el contrato y verificar la entrega.

Dirigir no es pedir. *Hazme las tablas de mi taquería* produce algo plausible: la IA inventa nombres, decide tipos y a veces mete datos de ejemplo. Cada corrida da un resultado distinto y ninguno es el tuyo. Un prompt de tablas incluye nombres exactos, columnas, tipos, qué es obligatorio, qué se conecta con qué y en qué orden se ejecuta.

El orden no es estilo, es una restricción. Una llave foránea no puede apuntar a una tabla que todavía no existe, así que `clientes` y `platillos` van primero, luego `pedidos`, luego `pedido_items` y al final `resenas`. Si corres todo de un jalón y falla a la mitad, el editor te deja tablas sueltas; por eso conviene ejecutar en ese orden y revisar.

Los tipos importan más de lo que parece: `bigint` para identificadores, `text` para nombres, `numeric(10,2)` para dinero —nunca `float`, que redondea centavos—, `integer` para cantidades, `boolean` para sí o no, `timestamptz` para fechas y `text` con `check` para estados.

Y las reglas: cada tabla necesita llave primaria; cada relación, llave foránea; `not null` donde el negocio no admite vacío; `default` donde hay un valor sensato; `check` para lo que el sistema debe rechazar. Todo eso se decide con el brief en la mano, no después.

**Advertencia:** define tipos y llaves antes de meter datos. Cambiar una columna de `text` a `numeric` con dos mil filas adentro exige convertir y limpiar; una tabla sin llave primaria no permite actualizar una fila con seguridad; una llave foránea mal puesta acepta renglones que apuntan a un pedido que no existe. Corregir eso con datos reales cuesta una migración (m4-b19), no un clic.

### Analogía

Es encargarle un mueble a un **carpintero**. No le dices hazme algo de madera: le das el alto, el ancho, cuántos cajones, de qué lado abren y para qué pared es. Él corta, arma y entrega. Cuando llega, tú no pagas y lo metes a la casa: revisas con cinta métrica que quepa en el hueco, que los cajones corran, que el fondo esté clavado y que las bisagras sean las que pediste. Si no revisas, el mueble ya está en tu sala y el error también. La IA es el carpintero: rápida, competente y sin idea de cómo es tu pared.

### Cómo se ve en la práctica

El flujo completo son seis pasos.

- Abre **SQL Editor → New query**.
- Pega el prompt de la siguiente sección. La IA debe devolver solo SQL, en orden y comentado.
- Lee los nombres de las tablas en voz alta: deben ser exactamente `clientes`, `platillos`, `pedidos`, `pedido_items` y `resenas`.
- Ejecuta. Si aparece `relation "clientes" does not exist`, el orden está mal: las llaves foráneas van después de las tablas que referencian.
- Verifica en el **Table Editor** que existen las cinco tablas y que cada una tiene su columna `id`.
- Solo cuando lo anterior esté bien, inserta datos (m4-c6).

El SQL que debes obtener, en orden, es este:

```sql
create table clientes (
  id        bigint generated always as identity primary key,
  nombre    text not null,
  telefono  text not null unique,
  correo    text,
  creado_en timestamptz not null default now()
);

create table platillos (
  id          bigint generated always as identity primary key,
  nombre      text not null,
  descripcion text,
  precio      numeric(10,2) not null check (precio > 0),
  disponible  boolean not null default true,
  creado_en   timestamptz not null default now()
);

create table pedidos (
  id         bigint generated always as identity primary key,
  cliente_id bigint not null references clientes(id),
  estado     text not null default 'pendiente'
             check (estado in ('pendiente','preparando','entregado','cancelado')),
  total      numeric(10,2) not null default 0,
  creado_en  timestamptz not null default now()
);

create table pedido_items (
  id              bigint generated always as identity primary key,
  pedido_id       bigint not null references pedidos(id) on delete cascade,
  platillo_id     bigint not null references platillos(id),
  cantidad        integer not null check (cantidad > 0),
  precio_unitario numeric(10,2) not null
);

create table resenas (
  id           bigint generated always as identity primary key,
  cliente_id   bigint references clientes(id),
  platillo_id  bigint not null references platillos(id),
  calificacion smallint not null check (calificacion between 1 and 5),
  comentario   text,
  creado_en    timestamptz not null default now()
);
```

Verificar no es mirar la pantalla. Pregúntale a la base qué quedó guardado:

```sql
select table_name
from information_schema.tables
where table_schema = 'public'
order by table_name;
```

```sql
select column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_name = 'pedidos'
order by ordinal_position;
```

```sql
select conname, contype, pg_get_constraintdef(oid) as definicion
from pg_constraint
where conrelid = 'pedidos'::regclass;
```

En la tercera consulta debes ver tres renglones: `pedidos_pkey` con tipo `p`, `pedidos_cliente_id_fkey` con tipo `f` y el `check` del estado con tipo `c`. Si falta la `p`, no hay llave primaria; si falta la `f`, la relación con clientes no existe aunque el SQL se haya ejecutado sin error.

### Díselo a la IA

> "Actúa como DBA de PostgreSQL en Supabase. Escribe el SQL para crear las tablas de Tacos El Volcán, en un solo script ordenado por dependencias. Estas son las tablas y columnas exactas: clientes (id, nombre, telefono, correo, creado_en); platillos (id, nombre, descripcion, precio, disponible, creado_en); pedidos (id, cliente_id, estado, total, creado_en); pedido_items (id, pedido_id, platillo_id, cantidad, precio_unitario); resenas (id, cliente_id, platillo_id, calificacion, comentario, creado_en). Reglas: identificadores bigint con identity y llave primaria; dinero en numeric(10,2); fechas en timestamptz con default now(); estados en text con check para pendiente, preparando, entregado y cancelado; calificación con check de 1 a 5; llaves foráneas con references y dime qué pasa al borrar el registro padre. Devuelve solo SQL comentado, sin datos de ejemplo, sin RLS y sin DROP ni TRUNCATE. Al final, cinco consultas de verificación para comprobar columnas, tipos, llave primaria y llaves foráneas."

### Ejercicios

**1. [opción múltiple]** ¿Qué le falta al prompt `Hazme las tablas de mi taquería` para que sirva?
   - a) Nada: mientras más corto, mejor entiende la IA
   - b) Nombres exactos de tablas y columnas, tipos, obligatoriedad, relaciones y orden de creación ✔
   - c) Indicarle el color del panel de Supabase
   - d) Pedirle que incluya datos de ejemplo de pedidos reales

**2. [ordenar]** Ordena la creación de las tablas para que cada llave foránea encuentre su tabla. Empieza por clientes.
   - Orden correcto: clientes → platillos → pedidos → pedido_items → resenas

**3. [qué hace]** ¿Qué queda en la columna estado después del insert?

```sql
create table pedidos (
  estado text not null default 'pendiente'
);

insert into pedidos (id) values (1);
```

   - a) NULL, porque no se envió
   - b) La palabra pendiente, porque el default se aplica cuando no se da valor ✔
   - c) Un error, porque estado es obligatorio
   - d) El texto 'estado', porque así se llama la columna

**4. [verdadero/falso]** "Si el SQL se ejecutó sin errores, las tablas quedaron como tu negocio las necesita."
   - Respuesta: FALSO — ejecutar sin errores solo prueba que la sintaxis es válida. Hay que verificar nombres, tipos, llave primaria y llaves foráneas con consultas; una tabla puede existir y aun así no guardar lo que el brief pide.

**5. [completar]** "Cada tabla necesita una llave ____ que identifique la fila; la columna que apunta a otra tabla es una llave ____ y exige que el valor exista allá."
   - Banco: `primaria` · `foránea` · `índice` · `única`
   - Respuesta: primaria / foránea

---

## C5 — Leer el SQL que la IA generó, línea por línea

### Concepto

El SQL corrió y las tablas existen. Eso prueba que la sintaxis es válida, no que el sistema haga lo que tu negocio necesita. Leer lo que la IA generó es el paso que separa dirigir de copiar.

Un `create table` se lee en cinco capas: el nombre, las columnas con sus tipos, la obligatoriedad (`not null`), los valores por defecto y las reglas (`default`, `check`, `unique`), y las llaves (primaria y foráneas). Al final, las marcas de tiempo.

Cada pieza responde una pregunta. La llave primaria dice quién es esa fila y prohíbe repetidos. La llave foránea dice a quién pertenece y obliga a que el otro exista. `not null` es una decisión de negocio: un pedido sin cliente no se puede cobrar. `default` dice qué pasa cuando nadie captura. `check` es lo que el sistema se niega a aceptar. Y `timestamptz` significa que la hora la pone el servidor con zona horaria, no el navegador del cliente.

Lo que hay que buscar con lupa: dinero en `float` o `real` en vez de `numeric`; fechas en `timestamp` sin zona; tablas sin llave primaria; llaves foráneas sin `on delete` cuando el brief pide un comportamiento; `text` para absolutamente todo; un `drop` o un `truncate` escondido entre las líneas; y datos de ejemplo que no pediste.

Si no puedes explicar una línea en voz alta, no la ejecutes. Pídele a la IA que te la explique como si tuvieras quince años, y luego verifícala en la documentación. La IA también se equivoca en cosas de seguridad, y un `on delete cascade` mal puesto borra pedidos cuando borras un cliente.

**Dato para recordar:** si no puedes explicar una línea en voz alta, esa línea no está lista para producción.

### Analogía

Leer el SQL es revisar el **tablero eléctrico de una casa antes de conectar todo**. El electricista no prende el interruptor principal y cruza los dedos: lee el diagrama. Qué breaker alimenta cada cuarto, cuál es el principal, qué cable va al tablero del vecino, qué circuito no puede quedar sin protección. Si un breaker dice 15 amperes y el cable es del 10, no hay margen: hay incendio. Cada línea del tablero se puede rastrear hasta un cuarto y un cable. El SQL es ese diagrama; cada línea es un circuito que debes poder seguir con el dedo antes de dar corriente.

### Cómo se ve en la práctica

Este es el `create table` real de `pedidos`, tal como salió en la práctica anterior:

```sql
create table pedidos (
  id         bigint generated always as identity primary key,
  cliente_id bigint not null references clientes(id),
  estado     text not null default 'pendiente'
             check (estado in ('pendiente','preparando','entregado','cancelado')),
  total      numeric(10,2) not null default 0,
  creado_en  timestamptz not null default now()
);
```

Línea por línea:

- `create table pedidos (` abre la tabla. El nombre va en minúsculas, sin acentos ni espacios. Si dice `Pedidos` o `pedido`, no es lo que pediste.
- `id bigint generated always as identity primary key` crea el identificador: número entero grande, lo genera la base, no se repite y no acepta vacío. Es la llave primaria.
- `cliente_id bigint not null references clientes(id)` es la llave foránea. `not null` significa que todo pedido tiene cliente; `references` obliga a que ese `id` exista en `clientes`.
- `estado text not null default 'pendiente'` dice que el estado es obligatorio y que, si nadie lo manda, queda en pendiente. El `check` de la línea siguiente limita los valores a cuatro; un `'entregadoo'` se rechaza.
- `total numeric(10,2) not null default 0` guarda dinero exacto: hasta diez dígitos y dos decimales. `float` habría redondeado centavos.
- `creado_en timestamptz not null default now()` guarda la fecha con zona horaria y la pone el servidor. El navegador no puede mentir ni adelantar la hora.
- `);` cierra. Si falta, el editor marca error hasta el final del archivo.

Ahora mira la diferencia entre lo que pediste y lo que la IA pudo escribir sin avisar:

```js
-- lo que pediste
cliente_id bigint not null references clientes(id)

-- lo que pudo escribir
cliente_id bigint references clientes(id) on delete cascade
```

Sin `not null` puedes tener pedidos huérfanos, sin cliente. Con `on delete cascade`, borrar un cliente borra todo su historial de compras: quizá quieras eso para `pedido_items`, casi nunca para `pedidos`.

**Antes de aceptar, revisa:** que el nombre de la tabla sea el del brief; que exista `primary key`; que cada `references` apunte a la tabla y columna correctas; que `not null` esté donde el negocio lo exige; que el dinero sea `numeric`; que las fechas sean `timestamptz`; que los `check` cubran los estados reales; que no haya `drop`, `truncate` ni datos de ejemplo; y que el comportamiento al borrar sea el que quieres. Lo que falte se decide ahora, no con la base llena.

**Advertencia:** un `timestamp` sin zona horaria en la Ciudad de México se guarda como si fuera UTC y aparece seis horas corrido. Si vas a mostrar horas de pedidos, usa `timestamptz` y deja que la base haga la conversión.

### Díselo a la IA

> "Te pego el SQL que generaste para la tabla pedidos de Tacos El Volcán. Explícamelo línea por línea, en español llano, sin dar por sabido nada: qué pieza crea cada línea, qué dato acepta y cuál rechaza, y qué pasaría si la quito. Después hazme seis preguntas de verificación que pueda contestar mirando el esquema, y una lista de los errores típicos que debo buscar en un create table generado por IA: tipos de dinero, fechas sin zona horaria, llaves primarias ausentes, llaves foráneas sin comportamiento al borrar y columnas de texto sin reglas. No reescribas el SQL todavía; primero quiero entenderlo. Aquí va: [pega tu SQL]."

### Ejercicios

**1. [opción múltiple]** ¿Qué significa `total numeric(10,2)`?
   - a) Un número decimal exacto de hasta diez dígitos, dos de ellos decimales ✔
   - b) Un texto de diez caracteres con dos comas
   - c) Un número flotante que redondea a dos decimales al mostrarse
   - d) Diez columnas de dos dígitos cada una

**2. [qué hace]** ¿Qué impide exactamente esa línea?

```js
cliente_id bigint not null references clientes(id)
```

   - a) Que se repita el mismo cliente en dos pedidos
   - b) Que un pedido se guarde sin cliente o con un cliente que no existe en clientes ✔
   - c) Que se borre un cliente con pedidos
   - d) Que el cliente cambie de teléfono

**3. [verdadero/falso]** "Una columna `estado text` sin `check` acepta cualquier texto, incluido 'entregadoo'."
   - Respuesta: VERDADERO — el tipo text no valida contenido. Sin una regla check, la base acepta cualquier cadena y los errores de captura se vuelven datos válidos.

**4. [relacionar]** Une cada elemento con su pareja:
   - primary key ↔ Identifica la fila y prohíbe repetidos o vacíos
   - not null ↔ Obliga a capturar un valor
   - default now() ↔ Si nadie manda fecha, usa la hora del servidor
   - check (...) ↔ Rechaza valores fuera de una lista o rango
   - references ↔ Exige que el valor exista en otra tabla

**5. [completar]** "El tipo ____ guarda dinero exacto; el tipo ____ guarda fecha con zona horaria; el tipo ____ guarda texto libre y no valida su contenido."
   - Banco: `numeric` · `timestamptz` · `text` · `float`
   - Respuesta: numeric / timestamptz / text

---

## C6 — PRÁCTICA: insertar y consultar tus primeros datos

### Concepto

Ya tienes tablas, pero una tabla vacía no prueba nada: es una repisa nueva, limpia y sin un solo frasco. Hasta que no escribes una fila, lees lo escrito, corriges un valor y borras algo, no sabes si tu base funciona o solo si el panel se ve bonito. Esta unidad es eso: cuatro operaciones y una costumbre.

Las cuatro operaciones se llaman **INSERT** (agregar), **SELECT** (leer), **UPDATE** (modificar) y **DELETE** (borrar). Son las mismas cuatro de cualquier base relacional desde los años setenta, y son las que tu sitio va a disparar todo el tiempo: el formulario hace INSERT, el menú hace SELECT, el panel del dueño hace UPDATE, y cuando alguien cancela un pedido de prueba, DELETE.

Tienes dos puertas para hacerlo y conviene usar las dos. La **Table Editor** de Supabase es una hoja de cálculo: das clic, escribes, guardas. El **SQL Editor** es una consola donde escribes la instrucción completa. La Table Editor es más rápida para tres filas; el SQL Editor es más honesto, porque te muestra exactamente qué instrucción se ejecutó y te obliga a decir *cuál* fila, no solo *qué* valor. En esta práctica usas el SQL Editor y compruebas en la Table Editor: escribir en una puerta y verificar en la otra es el hábito que te va a salvar cuando algo salga raro.

Dos detalles técnicos que te ahorran media hora de confusión. Primero: tu tabla tiene columnas con *default*, como `id` y `creado_en`; no las escribas, la base las llena sola. Segundo: los tipos importan. `18.00` es un número y `'18.00'` es texto; si la columna es `numeric`, el segundo puede fallar o guardarse raro. Y si tu tabla tiene `not null` en una columna que olvidaste, el INSERT no se guarda a medias: se rechaza completo.

La quinta operación no está en ningún manual y es la más importante: **volver a leer**. Después de cada escritura, haz un SELECT. No porque desconfíes de la base, sino porque así distingues "creo que se guardó" de "se guardó". Un negocio que no puede comprobar sus datos vive de suposiciones, y las suposiciones no cuadran al final del mes.

Esto te importa aunque la IA escriba el código: cuando el formulario de tu landing falle, el error puede estar en el HTML, en el JavaScript, en la política RLS o en el dato. Si tú sabes insertar tres platillos a mano y leerlos, puedes aislar el problema en dos minutos. Si no, dependes de que la IA adivine.

### Analogía

Esto es la repisa de frascos del laboratorio de tu secundaria. Cada frasco lleva su etiqueta de cinta adhesiva con el nombre y la fecha escritos con plumón. **INSERT** es poner un frasco nuevo y pegarle su etiqueta; **SELECT** es recorrer la repisa leyendo etiquetas; **UPDATE** es despegar una etiqueta, corregir el precio con thinner y volver a escribir; **DELETE** es tirar un frasco caducado. Y la regla del laboratorio es la misma que la de la base: después de mover algo, vuelves a leer la repisa, porque el plumón se corre y el frasco que creías en el tercer lugar está en el segundo. Nadie vacía la repisa completa para quitar un frasco: se toma el frasco correcto, se revisa la etiqueta y se tira ese.

### Cómo se ve en la práctica

Vas a hacer el ciclo completo sobre `platillos` de Tacos El Volcán. Abre **SQL Editor** en Supabase y ejecuta un paso a la vez; no corras los cuatro de golpe.

- **Inserta tres platillos** y pide que te devuelva lo insertado.
- **Lee** la tabla ordenada para comprobar que están los tres.
- **Cambia un precio** y vuelve a leer esa fila.
- **Borra una fila de prueba** (no un platillo real) y confirma que quedaron dos.
- **Verifica en la Table Editor** que la tabla coincide con lo que dijeron tus consultas.

```sql
insert into platillos (nombre, precio, categoria, activo)
values
  ('Taco al pastor', 18.00, 'tacos', true),
  ('Volcán', 42.00, 'especiales', true),
  ('Agua de horchata', 25.00, 'bebidas', true)
returning id, nombre, precio;
```

Ese `returning` es el dato memorable de la unidad: la base te devuelve las filas que acaba de escribir, con el `id` que ella generó. Sin él, insertas a ciegas. Ahora lee y luego modifica:

```sql
select id, nombre, precio, categoria
from platillos
order by categoria, nombre;

update platillos
set precio = 45.00
where nombre = 'Volcán'
returning nombre, precio;
```

Y el borrado de prueba, siempre con `where`:

```sql
insert into platillos (nombre, precio, categoria)
values ('Platillo de prueba', 1.00, 'pruebas')
returning id;

delete from platillos
where nombre = 'Platillo de prueba'
returning nombre, categoria;
```

**Qué deberías ver:** tres filas tras el primer insert, el precio de Volcán en 45.00 después del update, y un solo renglón devuelto por el delete. En la Table Editor, un clic en *Refresh* debe mostrar exactamente eso. Si el update devuelve cero filas, el `where` no encontró nada: revisa acentos y mayúsculas, porque `'Volcan'` no es `'Volcán'`.

El mismo ciclo desde tu JavaScript, que es lo que hará el sitio:

```js
const { data, error } = await db
  .from('platillos')
  .insert({ nombre: 'Taco al pastor', precio: 18.00, categoria: 'tacos' })
  .select()
  .single();
```

**Advertencia:** `delete from platillos;` sin `where` borra todas las filas, y `update platillos set precio = 0;` sin `where` deja el menú gratis. El SQL Editor no tiene papelera ni deshacer: ejecuta y ya. Antes de un DELETE o un UPDATE masivo, corre el mismo filtro como `select count(*)` para ver cuántas filas vas a tocar, y ten un respaldo (m4-b20).

Si el insert falla desde JavaScript con `new row violates row-level security policy`, la sintaxis está bien y el problema es la política, no el código (m4-c11).

### Díselo a la IA

> "Mi tabla platillos tiene estas columnas: id uuid, nombre text not null, precio numeric(10,2) not null, categoria text, activo boolean default true, creado_en timestamptz default now(). Escríbeme cuatro bloques de SQL para el SQL Editor de Supabase, en este orden: (1) insertar tres platillos de tacos con returning, (2) un select ordenado por categoria y nombre, (3) un update de un solo platillo filtrando por nombre con returning, (4) un delete de un platillo de prueba con returning. No uses delete ni update sin where en ningún bloque. Al final, dime qué debo ver en cada paso para saber que funcionó y qué error esperaría si la política RLS bloquea el insert."

La frase "qué debo ver en cada paso" convierte a la IA en instructora, no solo en generadora. Y pedir el error esperado te prepara para reconocerlo en vez de asustarte.

### Ejercicios

**1. [opción múltiple]** ¿Para qué sirve la cláusula returning al final de un INSERT?
   - a) Para que la base devuelva las filas que acaba de escribir, con sus valores generados ✔
   - b) Para repetir el insert si falla la primera vez
   - c) Para ordenar las filas antes de guardarlas
   - d) Para evitar que se ejecute el insert hasta confirmarlo

**2. [verdadero/falso]** "Un UPDATE sin cláusula where modifica todas las filas de la tabla."
   - Respuesta: VERDADERO — Sin where no hay filtro: la base aplica el cambio a cada fila. Por eso se prueba primero con un select count(*) y se ejecuta con respaldo a la mano (m4-b20).

**3. [completar]** "Después de un UPDATE conviene usar ____ para ver qué filas cambiaron, y para borrar solo una fila nunca olvido la cláusula ____."
   - Banco: `RETURNING` · `WHERE` · `ORDER BY` · `LIMIT`
   - Respuesta: RETURNING / WHERE

**4. [relacionar]** Une cada elemento con su pareja:
   - INSERT ↔ Agrega filas nuevas
   - SELECT ↔ Lee filas sin modificarlas
   - UPDATE ↔ Cambia valores de filas existentes
   - DELETE ↔ Elimina filas
   - RETURNING ↔ Devuelve las filas afectadas por la escritura

**5. [qué hace]** ¿Qué pasa exactamente al ejecutar esta instrucción?

```sql
delete from platillos
where categoria = 'bebidas'
returning nombre;
```

   - a) Borra todas las filas de categoría bebidas y devuelve el nombre de cada una ✔
   - b) Borra solo la primera bebida que encuentre
   - c) Borra la tabla platillos completa
   - d) Marca las bebidas como inactivas sin borrarlas

---

## C7 — PRÁCTICA: conectar tu sitio del Módulo 3 a la base

### Concepto

Tu landing de Tacos El Volcán es un conjunto de archivos que el navegador ya sabe leer: HTML, CSS y JavaScript. La base de datos vive en otro edificio, en los servidores de Supabase. Para que se hablen hacen falta tres cosas: un **cliente**, una **dirección** y una **llave**.

El cliente es una biblioteca de JavaScript llamada `@supabase/supabase-js`. No la vas a escribir: la descargas. Hay dos formas. Con `npm` si tu proyecto tiene un paso de compilación, o por **CDN** (Content Delivery Network, un servidor público que sirve archivos) con una etiqueta ``. Para tu landing del Módulo 3, que es HTML puro, el CDN es el camino corto: una línea y ya tienes el cliente disponible.

La dirección es la URL de tu proyecto, algo como `https://abcdefgh.supabase.co`. La llave es la `anon key`, un texto largo que empieza con `eyJ`. Las dos están en **Project Settings → API**. Juntas le dicen al cliente a qué proyecto llamar y con qué identidad presentarse.

Aquí viene la decisión que separa a quien entiende de quien copia: **esas dos variables van en un archivo aparte**, `js/config.js`, no enterradas en cada página. Tienes seis u ocho páginas en el sitio; si la URL cambia o migras a otro proyecto, quieres tocar un archivo y no ocho. Además, cuando llegues a un panel de administración (m4-c19), la misma configuración alimenta todas las pantallas.

¿Y no es peligroso que la llave esté en un archivo que cualquiera descarga? La `anon key` es pública *por diseño*: identifica a tu proyecto y al rol "visitante sin sesión". No es una contraseña, es un identificador. Lo que decide qué puede leer o escribir ese visitante es **RLS** (m4-b22). Con RLS encendido y políticas escritas, la llave pública abre solo lo que debe abrir. Con RLS apagado, esa misma llave es la puerta abierta de tu negocio.

El día que conectas esto, tu landing deja de ser un folleto. El menú que hasta ahora estaba escrito a mano empieza a poder venir de la base, y el formulario de contacto empieza a poder guardar de verdad. La conexión es una sola vez; lo que construyes encima es todo el módulo.

### Analogía

Conectar tu sitio a Supabase es instalar la impresora compartida del pasillo. Primero consigues el **driver** (esa es la biblioteca que baja por CDN), luego escribes la **dirección IP de la impresora** en tu computadora (la URL del proyecto) y por último usas la **contraseña del wifi que está anotada en un post-it junto al router** (la anon key): está a la vista de todos y no pasa nada, porque lo que decide quién imprime qué es el cupo asignado a tu usuario en el servidor de impresión (RLS). Lo que jamás se pega en el pasillo es la llave maestra del edificio, la que abre el cuarto de servidores y todas las oficinas: esa se queda con el administrador (service_role, en el servidor).

### Cómo se ve en la práctica

Vas a dejar el sitio conectado y con una consulta de prueba funcionando. No toques todavía el menú ni el formulario: primero comprueba la tubería.

- En Supabase, entra a **Project Settings → API** y copia *Project URL* y *anon public key*.
- Crea `js/config.js` con esas dos variables.
- En cada página, carga primero el CDN, luego `config.js`, luego tu cliente y al final tu lógica.
- Inicializa el cliente una sola vez, en `js/supabase-client.js`.
- Abre el sitio con un servidor local (no con doble clic) y corre una consulta de prueba en la consola.

```json
// js/config.js — público a propósito: NO contiene secretos
window.CONFIG = {
  SUPABASE_URL: 'https://abcdefgh.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

```html
<!-- al final de menu.html, en este orden exacto -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="js/config.js"></script>
<script src="js/supabase-client.js"></script>
<script src="js/app.js"></script>
```

```js
// js/supabase-client.js
const { createClient } = supabase; // el global que dejó el CDN

const db = createClient(
  window.CONFIG.SUPABASE_URL,
  window.CONFIG.SUPABASE_ANON_KEY
);
```

Prueba de humo en la consola del navegador (F12):

```js
const { data, error } = await db.from('platillos').select('nombre').limit(1);
console.log({ data, error });
```

**Qué deberías ver:** un objeto `{ data: [...], error: null }`. En la pestaña *Network* aparece una petición a `https://tu-proyecto.supabase.co/rest/v1/platillos?select=nombre&limit=1`. Si `error` trae `relation "public.platillos" does not exist`, el nombre de la tabla o el proyecto están mal; si trae `permission denied`, la tubería funciona y falta la política RLS.

**Advertencia:** abre el sitio con un servidor local (`npx serve` o la extensión Live Server), no con `file://`. Varios navegadores bloquean las peticiones desde archivos locales y vas a culpar a Supabase de un problema que es del protocolo.

**Advertencia:** la `service_role` key jamás va en `config.js` ni en ninguna parte del navegador, porque se salta RLS por completo. Si necesitas una operación que la anon no permite, la respuesta es una función de servidor (m4-c16), no pegar la llave maestra.

### Díselo a la IA

> "Estoy conectando una landing estática (HTML, CSS y JavaScript sin build) a Supabase. Revisa mi integración y dime si el orden de los scripts es correcto: [pega las etiquetas script]. Mi config.js es este: [pega config.js con la URL real y la anon key reemplazada por ANON_KEY_AQUI]. Quiero que (1) confirmes que no hay ninguna service_role en el frontend, (2) me des un supabase-client.js que inicialice el cliente una sola vez y falle con un mensaje claro si falta una variable, (3) me des una consulta de prueba que distinga entre error de red, tabla inexistente y permiso denegado por RLS. No inventes nombres de tablas: solo existe platillos, con las columnas nombre, precio, categoria y activo."

Fíjate que la llave se pega como marcador, no real. Esa costumbre se explica en m4-c10, y adoptarla desde hoy te evita el susto de después.

### Ejercicios

**1. [opción múltiple]** ¿Por qué la anon key puede vivir en un archivo público del sitio?
   - a) Porque identifica al rol de visitante y RLS decide qué filas puede ver o escribir ✔
   - b) Porque Supabase la cifra automáticamente al publicarla
   - c) Porque solo funciona desde localhost
   - d) Porque caduca a las 24 horas y deja de servir

**2. [verdadero/falso]** "Guardar la anon key en un archivo config.js separado la mantiene secreta frente a los visitantes."
   - Respuesta: FALSO — El archivo se sirve al navegador igual que el HTML. La anon key es pública por diseño; separarla sirve para mantener el código ordenado, no para esconderla. Lo que protege los datos es RLS (m4-b22).

**3. [completar]** "El cliente de Supabase se descarga por ____, se inicializa con la ____ del proyecto y la llave ____, que es pública."
   - Banco: `CDN` · `URL` · `anon` · `service_role`
   - Respuesta: CDN / URL / anon

**4. [relacionar]** Une cada elemento con su pareja:
   - URL del proyecto ↔ Dirección a la que el cliente manda cada consulta
   - anon key ↔ Identificador público; los permisos los decide RLS
   - service_role ↔ Secreto de servidor; nunca en el navegador
   - config.js ↔ Archivo público con la URL y la anon key

**5. [qué hace]** El sitio carga en blanco y la consola dice que no puede leer SUPABASE_URL. ¿Cuál es la causa?

```js
&lt;script src="js/app.js"&gt;&lt;/script&gt;
&lt;script src="js/config.js"&gt;&lt;/script&gt;

// dentro de app.js
const db = supabase.createClient(
  window.CONFIG.SUPABASE_URL,
  window.CONFIG.SUPABASE_ANON_KEY
);
```

   - a) config.js se carga después de app.js, así que window.CONFIG todavía no existe cuando se inicializa el cliente ✔
   - b) La anon key está mal copiada
   - c) El CDN de Supabase no permite usarse en HTML estático
   - d) Falta declarar la variable como const global

---

## C8 — PRÁCTICA: un formulario que guarda de verdad

### Concepto

En el Módulo 3 tu formulario de contacto era una promesa: el visitante escribía, le dabas las gracias y el mensaje se perdía en el aire (o abría WhatsApp con un texto prellenado). Hoy esa promesa se cumple: el formulario escribe una fila en la base y esa fila sigue ahí mañana, cuando el dueño abra su panel.

El recorrido de un envío tiene seis estaciones y el orden no es negociable: **detener el envío del navegador** con `preventDefault()`, **leer** los valores, **validar**, **bloquear el botón**, **insertar** y **decidir el mensaje según la respuesta**. Si te saltas una, el formulario miente: dice "enviado" cuando no lo está, o guarda basura que después nadie puede usar.

La validación vive en dos capas y las dos hacen falta. La del navegador (atributos `required`, `maxlength`, `type`) es **experiencia de usuario**: evita que alguien mande el formulario vacío y le avisa antes de esperar. La de la base (columnas `not null`, restricciones `check`, tipos) es la que **protege los datos**, porque nadie garantiza que la petición venga de tu formulario: se puede mandar con curl o desde la consola (m4-a21). Valida en el HTML para ayudar, valida en la base para dormir tranquilo.

El botón tiene tres estados y la mayoría de los tutoriales solo implementa dos. *Listo*: dice "Enviar" y se puede pulsar. *Enviando*: está deshabilitado y dice "Enviando...", porque sin esto un usuario impaciente manda el mismo pedido tres veces y tú tienes tres tacos de más en la cocina. *Terminado*: vuelve a estar disponible y el mensaje aparece al lado. Si el insert falla, el botón regresa a *listo* y el mensaje dice qué hacer, no "error 500".

Y el pecado que hay que nombrar: **guardar sin validar y avisar antes de saber**. Un formulario que hace `insert()` y luego muestra "¡Gracias!" sin esperar la respuesta no está guardando: está esperando que nadie revise. El usuario se va contento, el pedido no existe, y el negocio se enteró una semana después.

Cuando esto funcione, tendrás la primera prueba de que tu landing ya es un sistema: alguien fuera de tu computadora escribió, y tú lo puedes leer en Supabase sin que te avise por WhatsApp.

### Analogía

Esto es la máquina de boletos del metro. Metes las monedas y la máquina las cuenta antes de darte nada: una moneda doblada o de otro país la rechaza y te la devuelve con un aviso en pantalla (la validación). Mientras cuenta, el botón de "agregar otra moneda" se bloquea, porque si lo aprietas a media cuenta el mecanismo se atora y pagas dos veces (el botón deshabilitado). Solo cuando el total cuadra escupe el boleto (el éxito), y solo después de que el boleto salió puedes soltar la palanca del torniquete. Lo que nadie hace es empujar el torniquete y *luego* meter las monedas: eso es guardar sin validar, y el de la caseta te regresa a la fila.

### Cómo se ve en la práctica

Toma el formulario de contacto de tu landing y conviértelo en un formulario de reseñas que escribe en `resenas`. Empieza por el HTML, sin estilos nuevos, para no mezclar problemas.

```sql
<form id="form-resena">
  <input id="nombre" name="nombre" maxlength="60" required>
  <select id="calificacion" name="calificacion" required>
    <option value="">Elige 1 a 5</option>
    <option value="5">5</option>
    <option value="4">4</option>
    <option value="3">3</option>
    <option value="2">2</option>
    <option value="1">1</option>
  </select>
  <textarea id="comentario" name="comentario" maxlength="400" required></textarea>
  <button id="btn-enviar" type="submit">Enviar reseña</button>
  <p id="mensaje" role="status" aria-live="polite"></p>
</form>
```

Los atributos `required` y `maxlength` son la primera capa; el JavaScript es la segunda y la que decide el mensaje. Y el manejador, con las seis estaciones en orden:

```js
const form = document.querySelector('#form-resena');
const btn = document.querySelector('#btn-enviar');
const msg = document.querySelector('#mensaje');

function avisar(texto, tipo) {
  msg.textContent = texto;
  msg.dataset.tipo = tipo; // 'error' o 'exito', para el color
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const calificacion = Number(form.calificacion.value);
  const comentario = form.comentario.value.trim();

  if (nombre.length < 2) return avisar('Escribe tu nombre.', 'error');
  if (!Number.isInteger(calificacion) || calificacion < 1 || calificacion > 5) {
    return avisar('Elige de 1 a 5 estrellas.', 'error');
  }
  if (comentario.length < 10) {
    return avisar('Cuéntanos un poco más (mínimo 10 caracteres).', 'error');
  }

  btn.disabled = true;
  btn.textContent = 'Enviando...';
  avisar('', '');

  try {
    const { error } = await db.from('resenas').insert({
      nombre,
      calificacion,
      comentario
    });

    if (error) {
      console.error('insert resenas:', error);
      avisar('No pudimos guardar tu reseña. Intenta de nuevo.', 'error');
      return;
    }

    form.reset();
    avisar('¡Gracias! Tu reseña ya quedó guardada.', 'exito');
  } catch (falla) {
    console.error('falla de red:', falla);
    avisar('Se cayó la conexión. Revisa tu internet e intenta otra vez.', 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Enviar reseña';
  }
});
```

**Qué deberías ver:** al enviar, el botón se apaga un instante y luego aparece el mensaje verde; en la Table Editor hay una fila nueva con los acentos intactos y la calificación como número. Si dejas el nombre vacío, el navegador ni siquiera deja enviar (primera capa); si escribes un comentario de cinco letras, el navegador lo acepta y tu validación lo rechaza con el aviso rojo (segunda capa). En ninguno de los dos casos se crea una fila. Si apagas el wifi y envías, el mensaje es de conexión y el botón vuelve a estar disponible.

Para el mismo formulario guardando pedidos, el patrón es idéntico; solo cambia la tabla y el objeto: `db.from('pedidos').insert({ estado: 'pendiente', notas: comentario }).select().single()`. Si necesitas el `cliente_id`, primero busca o crea el cliente por teléfono y usa el `id` que regrese (m4-b27).

**Advertencia:** el `try/finally` no es decoración. Si la petición lanza una excepción de red (wifi caído, DNS), sin `finally` el botón se queda deshabilitado para siempre y el visitante cree que tu sitio se rompió.

**Advertencia:** no muestres `error.message` al visitante. Ahí vienen nombres de tablas, columnas y políticas; es información gratis para quien esté probando. Regístralo en la consola para ti y muestra una frase humana.

**Advertencia:** que la tabla exista no significa que el formulario pueda escribir en ella. Si el insert responde `permission denied`, falta una política de INSERT para el rol que envía (visitante o usuario con sesión); escríbela antes de culpar al JavaScript (m4-c11).

**Advertencia:** la base debe rechazar lo que tu formulario no atrapó. Agrega `check (calificacion between 1 and 5)` y `not null` a las columnas de `resenas`; sin eso, un script puede guardar "999 estrellas" y tu promedio queda inservible.

### Díselo a la IA

> "Tengo este formulario HTML de contacto y quiero que guarde en la tabla resenas de Supabase (columnas: id, nombre, calificacion int, comentario, creado_en). Reescribe el JavaScript con este orden obligatorio: preventDefault, leer con trim, validar nombre de 2 a 60 caracteres, calificacion entera de 1 a 5 y comentario de 10 a 400; deshabilitar el botón y cambiar su texto mientras espera; insertar; revisar error antes de mostrar éxito; volver a habilitar el botón en un finally. Muéstrame un mensaje distinto para error de validación, error de la base y falla de red, sin exponer error.message al usuario. No uses innerHTML en ningún lado. Al final, dime qué restricciones check y not null debo agregar a la tabla para que la base rechace lo mismo que el formulario."

La última frase es la que cierra el círculo: la IA te devuelve la validación en los dos lados, y tú ya sabes por qué hacen falta las dos.

### Ejercicios

**1. [opción múltiple]** ¿Dónde debe vivir la validación que de verdad protege los datos?
   - a) En la base, con restricciones not null y check, además de la validación del formulario ✔
   - b) Solo en los atributos required del HTML
   - c) En el CSS, ocultando el botón cuando falta un campo
   - d) En el botón, que se deshabilita hasta que todo esté lleno

**2. [verdadero/falso]** "Mostrar el mensaje de éxito antes de que termine el insert es aceptable si la conexión es rápida."
   - Respuesta: FALSO — La velocidad no cambia el hecho: si el insert falla, el usuario ya se fue con una mentira. El éxito solo se muestra cuando error es null (m4-a21).

**3. [completar]** "Mientras el insert viaja, el botón debe quedar ____ y solo después de revisar ____ puedo mostrar el mensaje de éxito."
   - Banco: `deshabilitado` · `error` · `habilitado` · `data`
   - Respuesta: deshabilitado / error

**4. [ordenar]** Ordena lo que ocurre cuando un visitante envía una reseña válida:
   - Orden correcto: El visitante pulsa Enviar → El código detiene el envío del navegador con preventDefault → Se leen y se validan los valores del formulario → El botón se deshabilita y cambia a Enviando... → El insert viaja a la tabla resenas → La respuesta llega sin error y se muestra el mensaje de éxito → El formulario se limpia y el botón vuelve a estar disponible

**5. [qué hace]** ¿Qué problema tiene este manejador?

```sql
form.addEventListener('submit', (e) =&gt; {
  e.preventDefault();
  db.from('resenas').insert({ nombre, comentario });
  avisar('¡Gracias!', 'exito');
});
```

   - a) Anuncia el éxito antes de saber la respuesta y no revisa el error del insert ✔
   - b) Le falta el preventDefault
   - c) Inserta en la tabla equivocada
   - d) No puede usar insert sin un select previo

---

## C9 — PRÁCTICA: mostrar datos reales en tu interfaz

### Concepto

Hasta el Módulo 3, tu menú era HTML escrito a mano: doce platillos, doce bloques, y el precio copiado en dos lugares porque también aparecía en la sección de promociones. Cambiar el precio del Volcán eran tres ediciones y un deploy. Peor: si se te olvidaba una, el sitio decía dos precios distintos y el cliente elegía el más barato.

Mostrar datos reales significa invertir la dirección. El HTML ya no *contiene* el menú: contiene un **hueco** y las instrucciones para llenarlo. Al cargar la página, un SELECT trae las filas de `platillos` y un ciclo crea un elemento por cada una. El HTML se vuelve una plantilla; la base se vuelve la única verdad.

Ese cambio trae tres estados que tu sitio del Módulo 3 no tenía y que ahora son obligatorios. **Cargando**: la consulta tarda, y mientras tanto no muestras "no hay platillos" (el visitante se va). **Vacío**: la consulta funcionó y devolvió `[]`, que es un dato legítimo —el dueño no ha publicado el menú de hoy—. **Error**: la consulta falló, y ahí sí hay que ofrecer un teléfono o un botón de reintento. Cero filas no es un error; confundirlos es el bug más común de esta lección.

El tercer tema es la seguridad al pintar. Los datos vienen de tu base, pero también de un formulario que cualquiera pudo llenar. Si escribes `elemento.innerHTML = platillo.nombre`, un nombre como `` se ejecuta en el navegador de tus visitantes. La regla es simple: `textContent` para texto, `createElement` para estructura, `innerHTML` solo con cadenas que tú escribiste.

Y la razón de fondo para dejar de editar el HTML a mano no es la elegancia: es que la base se va a llenar desde otros lados. El panel de administración (m4-c19) va a cambiar precios, marcar platillos agotados y subir fotos. Si el menú está hardcodeado, cada cambio del panel necesita además un programador. Si el menú se pinta desde la base, el dueño cambia el precio y el sitio ya dice la verdad.

El día que edites una fila en Supabase, recargues tu landing y veas el precio nuevo sin tocar una línea de código, vas a entender de qué se trataba todo el módulo.

### Analogía

Tu menú es el marcador de un partido de básquetbol. Nadie sube a pintar los números en el tablero: el tablero solo **muestra** lo que la mesa de anotación registra, y cuando el anotador suma dos puntos, el número cambia en la cancha y en la transmisión al mismo tiempo. Mientras arranca el cuarto, el tablero muestra guiones porque todavía no hay marcador (cargando); un 0 a 0 al minuto uno es un marcador real, no una falla (vacío); y si se va la luz del tablero, el sonido anuncia el marcador por bocina en vez de dejar a todos adivinando (error). El que pinta los números a mano cada partido termina con dos tableros distintos en el mismo gimnasio.

### Cómo se ve en la práctica

Deja el diseño de tu landing intacto y cambia solo el contenido de la sección del menú. Primero el hueco:

```html
<section id="menu">
  <p id="menu-estado">Cargando menú...</p>
  <div id="menu-lista"></div>
</section>
```

Luego la función que consulta, distingue los tres estados y pinta:

```js
async function pintarMenu() {
  const estado = document.querySelector('#menu-estado');
  const lista = document.querySelector('#menu-lista');

  estado.textContent = 'Cargando menú...';

  const { data, error } = await db
    .from('platillos')
    .select('nombre, precio, categoria')
    .eq('activo', true)
    .order('categoria')
    .order('nombre');

  if (error) {
    console.error('select platillos:', error);
    estado.textContent = 'No pudimos cargar el menú. Llámanos al 55 1234 5678.';
    return;
  }

  if (data.length === 0) {
    estado.textContent = 'Hoy no hay platillos publicados. Vuelve más tarde.';
    return;
  }

  estado.textContent = '';
  lista.replaceChildren(...data.map(crearTarjeta));
}

function crearTarjeta(platillo) {
  const tarjeta = document.createElement('article');
  const titulo = document.createElement('h3');
  const precio = document.createElement('p');

  titulo.textContent = platillo.nombre;
  precio.textContent = '$' + Number(platillo.precio).toFixed(2);

  tarjeta.append(titulo, precio);
  return tarjeta;
}

pintarMenu();
```

**Qué deberías ver:** el texto "Cargando menú..." aparece y desaparece en menos de un segundo; luego, una tarjeta por platillo activo, ordenadas por categoría. Si marcas un platillo como `activo = false` en Supabase y recargas, desaparece sin que toques el código. Si borras todos los platillos, aparece el mensaje de menú vacío y *no* un error.

Para probar el estado de error, cambia el nombre de la tabla a `platillosx` por un minuto: debe salir el mensaje con el teléfono, no una pantalla en blanco. Regrésalo después.

**Advertencia:** no filtres ni ordenes en JavaScript lo que la base puede filtrar. Traer las 200 filas para quedarte con 12 activas gasta datos del visitante y se vuelve lento cuando crezca el menú (m4-b9, m4-b11). `.eq('activo', true)` y `.order()` hacen ese trabajo antes de que los datos salgan del servidor.

**Advertencia:** `innerHTML` con datos de la base es una puerta abierta a XSS. Aunque hoy solo tú escribas en `platillos`, mañana el formulario de reseñas o el panel de un empleado escriben ahí. Usa `textContent` siempre.

### Díselo a la IA

> "Este es el HTML actual de mi sección de menú, con los platillos escritos a mano: [pega el HTML]. Conviértelo para que se pinte desde Supabase, tabla platillos (nombre, precio, categoria, activo), sin cambiar el diseño ni agregar librerías. Requisitos: (1) un solo SELECT que filtre activo = true y ordene por categoria y nombre; (2) estados separados de cargando, vacío y error, con un mensaje distinto para cada uno; (3) construir el DOM con createElement y textContent, nunca innerHTML con datos de la base; (4) precio formateado a dos decimales; (5) un botón de reintento solo en el estado de error. Al final, dime qué parte del HTML viejo debo borrar y qué debo conservar."

El punto 5 es el que casi nadie pide y el que salva la venta: cuando la consulta falla, el visitante necesita una salida, no un mensaje bonito.

### Ejercicios

**1. [opción múltiple]** La consulta responde sin error y data es un arreglo vacío. ¿Qué significa?
   - a) La consulta funcionó y no hay filas que mostrar: es el estado vacío ✔
   - b) La tabla no existe
   - c) RLS bloqueó la lectura por falta de permisos
   - d) El navegador no pudo conectarse a Supabase

**2. [verdadero/falso]** "Pintar el nombre de un platillo con innerHTML es seguro porque los datos vienen de tu propia base."
   - Respuesta: FALSO — La base también recibe datos de formularios y paneles. Un nombre con etiquetas HTML se ejecuta en el navegador del visitante. Usa textContent.

**3. [completar]** "Que la consulta devuelva ____ filas no es una falla: es el estado ____, que es distinto del estado de ____."
   - Banco: `cero` · `vacío` · `error` · `cargando`
   - Respuesta: cero / vacío / error

**4. [ordenar]** Ordena lo que hace la página al cargar el menú:
   - Orden correcto: El navegador ejecuta pintarMenu() → Se muestra el texto Cargando menú... → El SELECT viaja a la tabla platillos con filtro y orden → Llega la respuesta y se revisa error → Se revisa si data está vacío → Se crea una tarjeta por platillo y se inserta en el contenedor

**5. [qué hace]** La consulta falla por un problema de red. ¿Qué ocurre?

```js
const { data } = await db.from('platillos').select('nombre');
if (data.length === 0) {
  estado.textContent = 'Error al cargar el menú';
}
```

   - a) Si la tabla está vacía muestra Error, y si la consulta falla truena porque data es null ✔
   - b) Muestra Error al cargar el menú en los dos casos, sin distinguirlos
   - c) Muestra el menú vacío correctamente en ambos casos
   - d) Reintenta la consulta automáticamente

---

## C10 — Seguridad con IA: lo que nunca debes compartirle

### Concepto

La IA que te ayuda a programar es un colaborador extraordinario y un desconocido. No tiene mala fe: tiene una libreta donde apunta todo lo que le pegas, y esa libreta vive en servidores que no controlas. Puede quedar en registros, en el historial de tu equipo, en la memoria de la herramienta o en un reporte de incidentes. Por eso la pregunta correcta no es "¿me va a robar?", sino "¿qué pasa si esto se filtra?".

Hay tres cosas que nunca se comparten, y las tres caben en una frase: **la llave maestra, la contraseña de la base y los datos de tus clientes**. La llave maestra es la `service_role` key. Se ve casi igual que la anon, pero su contenido dice `service_role` y su poder es distinto: **se salta RLS por completo**. Quien la tenga lee, escribe y borra todas las tablas, incluidas las de usuarios y pedidos. No es "una llave más": es el edificio entero.

La segunda es la contraseña de la base de datos y su cadena de conexión (`postgresql://postgres:...@db....supabase.co:5432/postgres`). Con ella no pasas por la API ni por RLS: entras directo al motor. La tercera son los datos personales de tus clientes: nombres, teléfonos, direcciones, correos, historial de pedidos. En México son datos personales protegidos por la LFPDPPP, y regalarlos a un chat es una fuga, aunque el chat sea privado y aunque la IA sea amable.

Lo que **sí** puedes compartir es casi todo lo demás. El esquema de tus tablas (`create table platillos (...)`) describe la forma, no el contenido. Tu código, con las llaves reemplazadas por marcadores, es necesario para que te ayude. El mensaje de error es oro puro para depurar, siempre que quites tokens, correos y teléfonos. La consulta SQL y la forma de la respuesta también. La regla: **forma sí, contenido no**.

Y la forma de pedir las cosas cambia el resultado. Si le dices "pon la llave aquí", la IA te va a escribir la llave en el archivo, porque es lo que le pediste. Si le dices "asume que la llave viene de `process.env.SUPABASE_SERVICE_ROLE_KEY` y nunca la escribas en el código", te va a dar código que sobrevive a un repo público. Esa instrucción debería ser automática en cada prompt que toque un secreto (m4-a19).

Esto te importa porque el error no se comete por descuido de principiante: se comete por prisa. Pegas el archivo completo "para que la IA vea el contexto", y con él se van la llave y tres teléfonos. La prisa cuesta más que la revisión.

### Analogía

Es llevar la laptop al taller de reparación. Le muestras el modelo, la pantalla con el error y qué programa se cierra solo: eso es el esquema, y sin ello el técnico no puede trabajar. Le dejas la máquina y hasta le dices qué tanto la usas. Lo que no le entregas es la contraseña de tu correo, la sesión abierta del banco ni la carpeta con los expedientes de tus clientes; y no porque el técnico sea ladrón, sino porque para cambiar el ventilador no necesita nada de eso. Si un día descubres que dejaste la contraseña anotada en un papel debajo del teclado, no arrancas el papel y sigues: la cambias esa misma tarde.

### Cómo se ve en la práctica

Compara dos formas de pedir lo mismo. La primera ya está comprometida en el momento en que la escribes:

```js
// MAL: esto ya no es un secreto
const admin = createClient(
  'https://abcdefgh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIn0.FIRMA'
);
```

La segunda es la misma funcionalidad, sin regalar nada:

```js
// BIEN: el secreto vive fuera del código
const admin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
```

Y así se ve el archivo que nunca se sube al repositorio:

```js
# .env — NO se sube a git
SUPABASE_URL=https://abcdefgh.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...service_role...llave_inventada
```

Y la línea que lo excluye del repositorio:

```js
# .gitignore
.env
```

**Qué deberías ver:** `git status` no lista `.env`, y si buscas `eyJ` en tu repositorio solo aparece la anon key (que es pública) o ningún resultado. Si aparece la service_role, tienes trabajo hoy, no mañana.

Antes de pegar un error en el chat, redáctalo. Así viene:

```http
POST /rest/v1/pedidos 401
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmEifQ.firma
body: {"telefono":"5567891234","nombre":"Ana Ruiz"}
```

Y así se comparte, con la misma información útil y sin el contenido sensible:

```http
POST /rest/v1/pedidos 401
Authorization: Bearer [REDACTADO]
body: {"telefono":"[TELÉFONO]","nombre":"[NOMBRE]"}
El error dice: new row violates row-level security policy
```

**Qué deberías ver:** la IA puede diagnosticar exactamente igual —es un problema de política en el insert— sin haber visto ni un dato real.

**Advertencia:** borrar el mensaje donde pegaste una llave *no* la vuelve secreta. Ya viajó, ya quedó en registros y pudo quedar en caché. La única respuesta es **rotarla**: genera una nueva en el panel, actualiza donde vive y desactiva la anterior. Y si compartiste la contraseña de la base, cámbiala y revisa los logs de acceso.

**Advertencia:** en un sitio estático no existen las variables de entorno del servidor. Si tu landing es HTML puro, no hay dónde esconder un secreto: cualquier operación que necesite la service_role va en una función de servidor (m4-c16). Poner el secreto en el navegador "para no montar backend" es exactamente cómo se filtran las bases.

**Advertencia:** no pegues volcados completos de una tabla "para dar contexto". Pega el `create table` y, si necesitas un ejemplo, inventa uno con la misma forma: `('Cliente de ejemplo', '5500000000')`.

### Díselo a la IA

> "Voy a pegarte el esquema de tres tablas y un mensaje de error de Supabase. Antes de analizarlo, revísalo y dime si contiene algo que no debería compartir: llaves que empiecen con eyJ, cadenas postgresql://, correos, teléfonos o nombres de clientes. Si encuentras algo, no lo repitas en tu respuesta: nómbralo como [REDACTADO]. Después, dame el código que necesito asumiendo que la URL y la service_role vienen de process.env.SUPABASE_URL y process.env.SUPABASE_SERVICE_ROLE_KEY; nunca escribas el valor de una llave en el código ni en un ejemplo, ni siquiera como comentario. Y si esta operación se puede hacer con la anon key y una política RLS, dímelo antes de proponer la service_role."

Esa última frase es la más valiosa del curso: la IA deja de asumir que necesitas la llave maestra y te propone la ruta segura primero.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estos SÍ puedes pegar en un chat de IA sin comprometer nada?
   - a) El create table de tus tablas, con nombres de columnas y tipos ✔
   - b) La service_role key de tu proyecto
   - c) La contraseña de la base y su cadena de conexión
   - d) Un CSV con los teléfonos de tus últimos 50 clientes

**2. [verdadero/falso]** "Si borras el mensaje donde pegaste la service_role key, la llave queda a salvo."
   - Respuesta: FALSO — El mensaje ya viajó y pudo quedar en registros o caché. La única respuesta es rotar la llave y actualizar donde vive (m4-a19).

**3. [completar]** "Los secretos se leen de ____ y el archivo que los contiene se excluye del repositorio con una línea en ____."
   - Banco: `process.env` · `.gitignore` · `.env` · `config.js`
   - Respuesta: process.env / .gitignore

**4. [relacionar]** Une cada elemento con su pareja:
   - service_role key ↔ Se salta RLS: acceso total a la base
   - Contraseña de la base ↔ Entra directo al motor, sin pasar por la API
   - Esquema de tablas ↔ Seguro de compartir: describe la forma, no el contenido
   - Datos personales de clientes ↔ Nunca se comparten; usa datos inventados con la misma forma

**5. [ordenar]** Descubres que pegaste la service_role en un chat. Ordena tu respuesta:
   - Orden correcto: Detener cualquier uso de esa llave en tus scripts → Generar una llave nueva en el panel de Supabase → Actualizar la llave en el servidor y verificar que todo siga funcionando → Cambiar la contraseña de la base y revisar los logs de acceso → Desactivar la llave vieja y documentar lo ocurrido

---

## C11 — PRÁCTICA: activar RLS y comprobar qué protege

### Concepto

Tu base de datos ya responde. Ese es justo el problema. En Supabase, una tabla recién creada es legible por cualquiera que tenga la URL del proyecto y la llave `anon`, y esa llave viaja dentro del JavaScript de tu sitio (m4-b26). Si `pedidos` quedó sin protección, un visitante abre la consola con F12, escribe dos líneas y se lleva nombre, teléfono y dirección de todos tus clientes. En esta práctica vas a cerrar esa puerta y a comprobar con tus propios ojos qué quedó protegido.

Activar RLS es una línea de SQL y cambia el valor por defecto de la tabla: deja de responderle a todo el mundo. Row Level Security significa que **cada fila decide quién la ve**, y mientras no exista una política, la respuesta es nadie. Vas a vivir el momento incómodo: activas RLS, recargas tu menú y aparece vacío. No se rompió nada; acabas de instalar la reja.

Las políticas son las llaves. Cada una contesta tres cosas: para qué operación aplica (`select`, `insert`, `update`, `delete`), para quién (`anon` es el visitante sin sesión, `authenticated` es el usuario con sesión) y con qué condición sobre la fila (`using` para leer o filtrar, `with check` para lo que se escribe). Para el menú quieres lectura pública de los platillos activos; para los pedidos, que cada usuario vea solo los suyos comparando `cliente_id` con `auth.uid()`, el id del usuario que trae el token.

Aquí va el detalle que más tardes cuesta: cuando RLS filtra, **no lanza error**. Un visitante sin sesión que consulta `pedidos` recibe `[]` y un código 200, como si la tabla estuviera vacía. En cambio, un `insert` que ninguna política permite sí falla, con el mensaje `new row violates row-level security policy` y código 42501. Vacío no es lo mismo que prohibido, y confundirlos te va a hacer pensar que la política no sirve cuando en realidad sí está trabajando.

Y una trampa de laboratorio que hay que decir en voz alta: el editor SQL de Supabase entra como dueño del proyecto y se salta RLS. Ahí tus pruebas siempre pasan, incluso cuando la tabla está abierta al mundo. La prueba válida se hace desde afuera, con la llave `anon`: una vez sin sesión y otra con la sesión de dos clientes distintos.

Te importa aunque la IA escriba el SQL porque la IA te va a decir «listo, RLS activado» y puede dejarte dos desastres silenciosos: tablas con RLS y cero políticas (nada funciona y parece que tu código está roto) o una política `using (true)` en `pedidos` (todo abierto y parece que funciona). Leer las políticas y probar con `anon` es lo único que distingue una cosa de la otra.

### Analogía

Activar RLS es instalar la reja del almacén de una obra. Hasta ese día el material estaba sobre el pasillo y lo tomaba quien pasara; el día que llega la reja, nadie entra, ni tú, hasta que exista una llave. Cada política es una llave con su etiqueta escrita: «esta abre la puerta de herramienta, solo para el maestro de obra, solo de siete a seis». Y ojo con el ingeniero que vive dentro de la obra: ese tiene llave maestra y te va a jurar que todo está abierto. La prueba de verdad es pararte en la calle con la llave que le das a los visitantes y empujar la reja.

### Cómo se ve en la práctica

Vas a proteger dos tablas con criterios distintos: `platillos` se lee sin sesión, `pedidos` solo con sesión y solo lo propio. Guarda esta convención del proyecto: `pedidos.cliente_id` guarda el id del usuario de Supabase Auth, el mismo que devuelve `auth.uid()`.

- Entra al **SQL Editor** de Supabase y ejecuta el bloque de abajo completo. No ejecutes solo la primera línea: si activas RLS y te vas a comer, tu sitio se queda sin menú.
- Recarga la página del menú de Tacos El Volcán. Debe salir vacía.
- Vuelve a ejecutar solo la política de `platillos` y recarga. Debe salir el menú, pero sin los platillos marcados como inactivos.
- Haz las pruebas de la segunda caja, primero sin sesión y luego con la sesión de dos clientes.

```sql
-- 1) Cerrar las dos tablas
alter table public.platillos enable row level security;
alter table public.pedidos  enable row level security;

-- 2) El menú es público, pero solo lo que está a la venta
create policy menu_publico_activos
  on public.platillos for select
  to anon, authenticated
  using (activo = true);

-- 3) Cada cliente ve solo sus pedidos
create policy cliente_ve_sus_pedidos
  on public.pedidos for select
  to authenticated
  using (cliente_id = auth.uid());

-- 4) Y puede crear los suyos, sin ponerse el nombre de otro
create policy cliente_crea_sus_pedidos
  on public.pedidos for insert
  to authenticated
  with check (cliente_id = auth.uid());
```

Ahora la prueba que importa, desde una terminal. Sin sesión, la primera consulta debe traer el menú y la segunda debe venir vacía:

```sql
# Menú, sin sesión: 200 y los platillos activos
curl "https://tu-proyecto.supabase.co/rest/v1/platillos?select=nombre,precio" \
  -H "apikey: TU_ANON_KEY" \
  -H "Authorization: Bearer TU_ANON_KEY"

# Pedidos, sin sesión: 200 y []  (no es un 403)
curl "https://tu-proyecto.supabase.co/rest/v1/pedidos?select=id,total" \
  -H "apikey: TU_ANON_KEY" \
  -H "Authorization: Bearer TU_ANON_KEY"

# Pedidos, con la sesión del cliente A: solo los de A
curl "https://tu-proyecto.supabase.co/rest/v1/pedidos?select=id,total" \
  -H "apikey: TU_ANON_KEY" \
  -H "Authorization: Bearer TOKEN_DEL_CLIENTE_A"
```

El token de la sesión lo sacas en la consola del navegador con `(await supabase.auth.getSession()).data.session.access_token`. Repite con el cliente B y compara: los dos ven su propio arreglo, con distinto contenido y el mismo código 200. Si el cliente A ve el pedido de B, tu política no está comparando la columna correcta o la tabla sigue sin RLS.

**Advertencia:** RLS activo sin políticas deja la tabla cerrada para todos, incluido tu panel, y la tentación va a ser apagarlo «solo un momento» en producción. No lo hagas: ese momento es el que un visitante aprovecha. Si tu panel necesita ver todo, se le da una política con su rol de administrador (m4-c19), no se abre la tabla. Y nunca dejes una política `using (true)` en `pedidos`, `clientes` o `resenas`: esa línea es exactamente lo mismo que no tener RLS, con la falsa tranquilidad de verlo activado.

### Díselo a la IA

> "Audita y activa RLS en mi proyecto de Supabase de Tacos El Volcán. Tablas: platillos, pedidos, pedido_items, clientes y resenas. (1) Dame el SQL para activar RLS en las cinco y dime en qué orden ejecutarlo sin tumbar el sitio. (2) Para platillos, una política de lectura pública solo de los activos. (3) Para pedidos, una política de select y una de insert donde cliente_id = auth.uid(), y para pedido_items una que herede del pedido. (4) Ninguna tabla puede quedar con using (true) sin que me expliques por qué es seguro. (5) Escribe tres pruebas con curl usando solo la anon key: sin sesión, con la sesión del cliente A y con la del cliente B; para cada una dime el código HTTP y el cuerpo que debo esperar. Si alguna tabla no debería ser legible sin sesión, dímelo antes de darme el SQL."

La última frase es la que convierte a la IA en auditora en vez de generadora. Sin ella, casi siempre te entrega políticas que copian el ejemplo de la documentación, y el ejemplo de la documentación suele ser `using (true)`.

### Ejercicios

**1. [opción múltiple]** Acabas de ejecutar alter table pedidos enable row level security; y no creaste ninguna política. Tu sitio consulta pedidos con la anon key, sin sesión. ¿Qué recibes?
   - a) Un error 500 del servidor
   - b) Un arreglo vacío con código 200 ✔
   - c) Todos los pedidos, porque falta la política que los prohíba
   - d) Un 401 que pide usuario y contraseña

**2. [qué hace]** ¿Qué logra exactamente esta política?

```sql
create policy cliente_ve_sus_pedidos
  on public.pedidos for select
  to authenticated
  using (cliente_id = auth.uid());
```

   - a) Que cualquier visitante lea todos los pedidos
   - b) Que un usuario con sesión lea solo las filas cuyo cliente_id coincide con su id ✔
   - c) Que un usuario inserte pedidos a nombre de otro
   - d) Que se active RLS en la tabla

**3. [verdadero/falso]** "Si consultas pedidos con la anon key y recibes un arreglo vacío, puedes concluir que RLS está protegiendo la tabla."
   - Respuesta: FALSO — Vacío puede significar tres cosas: RLS activo sin políticas, una política que no coincide con ninguna fila, o simplemente que no hay pedidos. Para distinguirlas hay que probar con la sesión de un cliente que sí tenga pedidos y revisar las políticas en el panel (m4-b22).

**4. [completar]** "La política de pedidos compara la columna ____ de cada fila con ____, que devuelve el id del usuario del token."
   - Banco: `cliente_id` · `auth.uid()` · `id` · `auth.email()` · `service_role`
   - Respuesta: cliente_id / auth.uid()

**5. [ordenar]** Ordena los pasos para dejar pedidos protegido y comprobarlo:
   - Orden correcto: Activar RLS en platillos y en pedidos → Crear la política de lectura pública de platillos activos → Crear la política de pedidos por usuario → Probar sin sesión con la anon key → Probar con la sesión de dos clientes distintos y comparar

---

## C12 — PRÁCTICA: login de usuarios en tu sitio

### Concepto

Un login son tres llamadas y un aviso. Crear la cuenta, entrar y salir. Todo lo difícil de un sistema de contraseñas —guardar el hash, emitir el token, mandar el correo de confirmación, refrescar la sesión antes de que caduque— ya lo hace Supabase Auth (m4-b24). Tú solo llamas a las funciones y decides qué se ve en pantalla.

`signUp` crea la cuenta. Si tu proyecto tiene activada la confirmación por correo, que es lo que viene por defecto, no te devuelve una sesión: te devuelve un usuario pendiente y manda un correo. Hasta que la persona abra ese enlace no puede entrar. Ese «no pasa nada» es la causa número uno de que un login parezca roto, y no lo está.

`signInWithPassword` valida correo y contraseña y guarda la sesión en el navegador. Desde ese momento el cliente manda el token en cada petición, y del lado de la base `auth.uid()` ya tiene un valor. `signOut` hace lo contrario: borra la sesión local, avisa al servidor y deja al usuario como visitante. Ninguna de las tres toca la contraseña más allá de pasarla; si tu código la guarda en una variable global, en un log o en una tabla, el problema es tuyo y es grave.

El cuarto elemento no es una llamada, es un aviso: `onAuthStateChange`. Se dispara cuando la persona entra, cuando sale y cuando el token se refresca solo. Si pintas el estado una única vez al cargar la página, tu botón «Salir» va a dejar la pantalla mintiendo hasta que alguien recargue. Suscríbete al aviso y pinta siempre desde ahí.

Los errores tienen nombre y conviene traducirlos: `Invalid login credentials` significa que el correo o la contraseña están mal, y a propósito no dice cuál de los dos; `Email not confirmed` significa que falta abrir el correo; `User already registered` aparece al registrarse con un correo que ya existe, aunque según la configuración Supabase puede devolver un usuario fantasma sin error para no revelar quién está dado de alta. Regla de oro: mensajes claros para el usuario legítimo, información cero para quien está adivinando.

Te importa aunque la IA escriba el código porque el caso feliz siempre funciona. Lo que tú revisas es lo otro: que la sesión sobreviva a un refresco, que dos pestañas se enteren del cambio, que la contraseña equivocada muestre un mensaje útil, que el correo sin confirmar se explique, y que no haya ni una contraseña ni la llave `service_role` en el JavaScript (m4-a19).

### Analogía

El login de tu sitio es el brazalete de un balneario. En la entrada te registran y te ponen uno en la muñeca; con él entras y sales del agua todas las veces que quieras sin volver a formarte, y el guardia del torniquete solo mira la muñeca, no tu cara. Cuando te lo cortan al salir, vuelves a ser visitante aunque sigas en el estacionamiento. Y el brazalete no se puede falsificar desde la alberca: lo puso la caseta, no tú.

### Cómo se ve en la práctica

El login de Tacos El Volcán cabe en un archivo. Fíjate en tres cosas: la sesión inicial llega por el primer evento, la interfaz se pinta desde el aviso y el botón de salir no recarga la página.

```js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(URL, ANON_KEY);

// 1) Registro: puede requerir confirmar el correo
async function registrarme(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return mostrarError(traducir(error.message));

  // session === null cuando falta confirmar el correo
  if (!data.session) return mostrarAviso('Revisa tu correo para activar la cuenta');
  pintarSesion(data.session);
}

// 2) Entrada
async function entrar(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return mostrarError('Correo o contraseña incorrectos');
  pintarSesion(data.session);
}

// 3) Salida
async function salir() {
  await supabase.auth.signOut();
  // no hace falta pintar aqui: el evento SIGNED_OUT lo hace
}

// 4) El aviso que mantiene la pantalla honesta
supabase.auth.onAuthStateChange((evento, sesion) => {
  const correo = document.querySelector('#correo');
  const btnSalir = document.querySelector('#btn-salir');

  if (sesion) {
    correo.textContent = sesion.user.email;
    btnSalir.hidden = false;
  } else {
    correo.textContent = '';
    btnSalir.hidden = true;
  }
});
```

El resultado esperado, en orden: al entrar, el evento `SIGNED_IN` dispara y el correo del usuario aparece con el botón de salir; al refrescar la página, la sesión sigue ahí y el correo sigue puesto sin volver a escribir la contraseña; al pulsar salir, `SIGNED_OUT` limpia la pantalla y la persona queda como visitante. Si al refrescar se pierde la sesión, revisa que no estés creando el cliente dos veces con opciones distintas.

**Advertencia:** nunca guardes la contraseña en tu base, en `localStorage` ni en una variable global «para no pedirla otra vez». Y no intentes validar el login en el frontend: cualquier `if (password === ...)` que escribas es visible con F12 y no protege nada. La validación ocurre en el servidor de Auth; tu trabajo es mostrar el resultado (m4-a15).

### Díselo a la IA

> "Implementa el login con Supabase Auth en mi landing de Tacos El Volcán, en este archivo: [pega el HTML o el componente]. Necesito `signUp`, `signInWithPassword`, `signOut` y una suscripción a `onAuthStateChange` que sea la única fuente de verdad para pintar la interfaz. Estados obligatorios: cargando, sin sesión, con sesión. Con sesión se muestra el correo y un botón Salir; sin sesión, el formulario. Traduce los errores al español y usa el mismo mensaje para correo inexistente y contraseña incorrecta. Explica qué pasa cuando la confirmación por correo está activada y qué configuración debo revisar en Authentication → URL Configuration. No uses service_role, no guardes la contraseña en ningún lado y no valides credenciales en el frontend."

Si no le pides explícitamente el estado «cargando», la IA casi siempre pinta el formulario durante medio segundo y luego lo cambia por el panel: el usuario ve un parpadeo y cree que lo sacó.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es la forma correcta de mantener la interfaz al día cuando el usuario inicia o cierra sesión?
   - a) Llamar a getSession() cada segundo con un temporizador
   - b) Suscribirse a onAuthStateChange y pintar según la sesión que llega ✔
   - c) Guardar el correo en una variable global al cargar la página y confiar en ella
   - d) Leer localStorage a mano en cada clic del usuario

**2. [ordenar]** Ordena lo que ocurre al iniciar sesión:
   - Orden correcto: El usuario escribe correo y contraseña → signInWithPassword envía las credenciales → Supabase valida y guarda la sesión en el navegador → onAuthStateChange dispara el evento SIGNED_IN → La interfaz muestra el correo y el botón Salir

**3. [completar]** "Para crear la cuenta se usa ____; para entrar con correo y contraseña, ____."
   - Banco: `signUp` · `signInWithPassword` · `signOut` · `getUser`
   - Respuesta: signUp / signInWithPassword

**4. [verdadero/falso]** "Después de llamar a signOut, la cuenta del usuario se elimina de la base de datos."
   - Respuesta: FALSO — signOut solo borra la sesión del navegador y revoca el token. La cuenta, sus pedidos y su historial siguen intactos. Borrar la cuenta es una operación distinta y mucho más delicada.

**5. [qué hace]** ¿Qué hace este fragmento?

```js
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
});

if (error) {
  mostrarError('Correo o contraseña incorrectos');
  return;
}
```

   - a) Crea una cuenta nueva y confirma el correo
   - b) Intenta iniciar sesión y, si falla, muestra un mensaje genérico sin revelar cuál dato está mal ✔
   - c) Cierra la sesión del usuario actual
   - d) Valida la contraseña contra una tabla propia de usuarios

---

## C13 — PRÁCTICA: contenido solo para usuarios registrados

### Concepto

La página «mis pedidos» parece una pantalla, pero en realidad es una pregunta a la base: dame los pedidos de esta persona. La trampa consiste en creer que esconder el enlace del menú o poner un `if (!user) return` protege algo. El navegador es del usuario: puede abrir las herramientas de desarrollo, copiar la llave `anon` de tu JavaScript y llamar a la API directamente, sin pasar por tu HTML ni por tu `if`.

Lo que protege de verdad es la política RLS que ya escribiste en m4-c11. Tu consulta puede pedir la tabla completa y la base te va a entregar solo las filas cuyo `cliente_id` coincide con el usuario del token. El `.eq('cliente_id', user.id)` que la IA suele agregar es una optimización y una cortesía: hace la consulta más chica y más clara, pero si lo quitas, RLS sigue filtrando igual.

De ahí sale la distinción que ordena todo este módulo: la interfaz decide qué **mostrar**; la base decide qué **entregar**. La primera capa es comodidad y experiencia; la segunda es seguridad. Si solo tienes la primera, tienes una cortina, no una puerta.

En la práctica la pantalla tiene tres estados y hay que diseñarlos antes de escribir código: sin sesión (invita a entrar), con sesión y pedidos (lista con estado, total y fecha), con sesión y sin pedidos (mensaje de «todavía no has pedido», que no es lo mismo que «no pudimos cargar»). Mezclar el estado vacío con el error es el bug más común de estas pantallas: el usuario cree que perdió su historial cuando en realidad se cayó la red.

Un detalle fino que la IA suele pasar por alto: las *views* de Postgres se ejecutan con los permisos de quien las creó. Si para «simplificar» creas una vista sobre `pedidos` y la consultas desde el frontend, esa vista puede saltarse RLS. En Supabase se corrige con `security_invoker = true` o se evita la vista. Es exactamente el tipo de atajo que suena a buena idea y abre la puerta completa.

La prueba de fuego es simple: cierra sesión, abre la consola y pide `pedidos` con la llave `anon`. Si sale algo, tu `if` no servía de nada y tu política tiene un hueco. Corre esa prueba cada vez que agregues una pantalla nueva, no solo la primera vez.

### Analogía

El `if` del frontend es la cortina del probador de una tienda de ropa: te da privacidad visual, pero cualquiera puede estirar la mano por arriba o entrar por el costado. RLS es la chapa de la puerta. Tú puedes decidir no anunciar el probador (esconder el enlace), y aun así la chapa es lo único que impide que el siguiente cliente abra y se lleve tu bolsa.

### Cómo se ve en la práctica

Así se ve la página `mis-pedidos.html`. La consulta no filtra por usuario a propósito, para que veas que el filtro real vive en la base:

```html
import { supabase } from './supabase-client.js';

const lista = document.querySelector('#lista');
const aviso = document.querySelector('#aviso');

async function cargarMisPedidos() {
  const { data: { user } } = await supabase.auth.getUser();

  // Capa 1: interfaz. Solo decide que se ve.
  if (!user) {
    lista.innerHTML = '';
    aviso.innerHTML = 'Entra a tu cuenta para ver tus pedidos.';
    return;
  }

  // Capa 2: la base. Aqui NO filtramos: RLS entrega solo lo del usuario.
  const { data, error } = await supabase
    .from('pedidos')
    .select('id, estado, total, created_at, pedido_items(cantidad, platillos(nombre))')
    .order('created_at', { ascending: false });

  if (error) {
    aviso.textContent = 'No pudimos cargar tus pedidos. Intenta de nuevo.';
    return;
  }

  if (data.length === 0) {
    aviso.textContent = 'Todavia no has hecho un pedido.';
    return;
  }

  aviso.textContent = '';
  lista.innerHTML = data.map(p => `
    <article>
      <h3>Pedido #${p.id.slice(0, 6)}</h3>
      <p>${p.estado} · $${p.total} · ${new Date(p.created_at).toLocaleDateString('es-MX')}</p>
      <ul>${p.pedido_items.map(i => `<li>${i.cantidad} × ${i.platillos.nombre}</li>`).join('')}</ul>
    </article>`).join('');
}
```

El `select` anidado trae los renglones del pedido y el nombre del platillo en una sola llamada, sin escribir SQL (m4-b13). Y como no hay `.eq`, la única razón por la que el cliente A no ve los pedidos del cliente B es la política:

```sql
create policy cliente_ve_sus_pedidos
  on public.pedidos for select
  to authenticated
  using (cliente_id = auth.uid());
```

Verificación con dos sesiones: entra como cliente A, anota cuántos pedidos ves y el id del primero. Cierra sesión, entra como cliente B y confirma que no aparece ninguno de A. Después, sin sesión, ejecuta en la consola `await supabase.from('pedidos').select('*')`: debe devolver `[]`. Si devuelve filas, el problema no está en tu JavaScript.

**Advertencia:** esconder el enlace en el menú, pedir contraseña en una pantalla intermedia o revisar el correo con un `if` son decisiones de diseño, no de seguridad. Cualquiera puede escribir la URL a mano. Y cuidado con los atajos: una vista sin `security_invoker`, una función con `security definer` o una consulta con `select('*, clientes(*))` pueden devolverte datos de otras personas aunque la tabla esté protegida. Si la IA te propone crear una vista «para simplificar», pídele que te explique cómo queda RLS antes de correrla.

### Díselo a la IA

> "Construye la página mis-pedidos.html de Tacos El Volcán sobre estos archivos: [pega tu cliente de Supabase y el HTML]. Reglas: (1) si no hay sesión, muestra una invitación a entrar y no consultes nada; (2) si hay sesión, trae pedidos con sus pedido_items y el nombre del platillo en un solo select, ordenados del más reciente al más viejo; (3) la seguridad la da RLS, no el frontend, así que no agregues filtros por cliente_id como si fueran protección y explícame qué política hace el trabajo; (4) distingue tres estados: error de red, sin pedidos y con pedidos, cada uno con su mensaje; (5) al final dame una prueba con curl usando el token de dos usuarios distintos y dime qué debo ver en cada caso. Si en algún punto usas una vista o un join que pueda saltarse RLS, avísame y justifícalo."

Pedirle que no agregue el filtro como si fuera seguridad obliga a la IA a nombrar la política. Si no puede nombrarla, es que no existe.

### Ejercicios

**1. [opción múltiple]** ¿Qué impide realmente que un visitante sin sesión lea los pedidos de otra persona?
   - a) El if que oculta el enlace de mis pedidos en el menú
   - b) El .eq('cliente_id', user.id) que la IA agregó a la consulta
   - c) La política RLS que compara cliente_id con auth.uid() ✔
   - d) Que la página se llame mis-pedidos y no pedidos

**2. [verdadero/falso]** "Si quitas el .eq('cliente_id', user.id) de la consulta y RLS está bien configurado, el usuario sigue viendo solo sus pedidos."
   - Respuesta: VERDADERO — El filtro del frontend es comodidad y optimización. La política RLS es la que decide fila por fila, así que la consulta puede pedir la tabla entera y aun así recibir solo lo propio (m4-b22).

**3. [qué hace]** ¿Qué garantiza este fragmento?

```js
const { data: { user } } = await supabase.auth.getUser();

if (!user) {
  return mostrarLogin();
}

const { data } = await supabase.from('pedidos').select('*');
```

   - a) Que nadie sin sesión pueda leer la tabla pedidos
   - b) Solo que la interfaz muestre el login; los datos quedan protegidos únicamente si hay una política RLS ✔
   - c) Que la consulta devuelva los pedidos de todos los usuarios
   - d) Que se cree una sesión nueva automáticamente

**4. [completar]** "La interfaz decide qué ____; la base decide qué ____."
   - Banco: `mostrar` · `entregar` · `guardar` · `cobrar`
   - Respuesta: mostrar / entregar

**5. [ordenar]** Ordena lo que hace la página mis-pedidos al abrirse:
   - Orden correcto: Revisar si hay sesión con getUser() → Mostrar la invitación a entrar si no hay usuario → Consultar pedidos y pedido_items con la sesión activa → Revisar error antes de usar data → Mostrar el estado vacío si el arreglo viene sin filas

---

## C14 — PRÁCTICA: subir imágenes a Storage

### Concepto

Las fotos de los platillos no van dentro de la base de datos. Cuando alguien intenta guardarlas ahí, casi siempre termina con una columna de texto gigante llena de base64: cada consulta del menú arrastra megabytes, el panel se pone lento y una foto de 4 MB puede tumbar la fila completa. Storage existe para separar las dos cosas: el archivo se guarda como archivo y la tabla guarda una ruta corta que apunta a él.

En Supabase Storage hay tres piezas. El **bucket** es el contenedor, se llama `platillos` y se configura una vez. El **objeto** es cada archivo, identificado por su ruta, algo como `platillos/8f3c....jpg`. Y las **políticas** son las mismas reglas de RLS que ya conoces, aplicadas a la tabla interna `storage.objects`: quién puede leer, quién puede subir, quién puede borrar.

Un bucket público no significa un bucket sin reglas. Significa que la lectura no pide token: cualquiera con la URL ve la imagen. Escribir sigue requiriendo una política. Esa distinción es la que hace que el menú funcione para visitantes y que un desconocido no pueda llenarte el almacenamiento con archivos.

El flujo tiene tres pasos y el tercero es el que más se olvida: subes el archivo con `upload()`, obtienes la URL con `getPublicUrl()` y guardas **la ruta** en la tabla. Guarda la ruta, no la URL completa: el día que cambies de dominio, de CDN o de proyecto, la ruta sigue sirviendo y la URL vieja se convierte en una lista de enlaces muertos.

Los límites se configuran en el bucket, no en el formulario: `file_size_limit` en bytes y `allowed_mime_types` con la lista de tipos aceptados. Validar en el navegador es cortesía para que el usuario no espere una subida que va a fallar; la única barrera que cuenta es la del bucket. Y el nombre del archivo lo generas tú: el nombre que trae la foto del celular puede repetirse, venir con acentos o con caracteres que rompen la ruta.

Te importa aunque la IA escriba el código porque la solución fácil que te va a proponer es base64 en la tabla, y porque «bucket público» suena a «sin configuración». Las dos decisiones se pagan caras y ninguna da error el primer día.

### Analogía

Un bucket público es el periódico mural de una escuela. Clavas ahí la foto del volcán y cualquiera que cruce el pasillo la ve, aunque no tenga llave del salón, y la puede fotografiar y reenviar. Por eso el mural es para fotos de platillos y no para actas de calificaciones. Y en la hoja de inscripción del alumno no pegas la foto otra vez: solo anotas en qué parte del mural quedó clavada, para poder encontrarla después.

### Cómo se ve en la práctica

Primero el bucket con sus límites y sus políticas. Este bloque se corre una vez en el SQL Editor:

```sql
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'platillos',
  'platillos',
  true,
  2097152,  -- 2 MB en bytes
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
  set public = true,
      file_size_limit = 2097152,
      allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];

-- Cualquiera ve las fotos del menu
create policy fotos_menu_lectura_publica
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'platillos');

-- Solo con sesion se sube, y solo a este bucket
create policy fotos_menu_subida_con_sesion
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'platillos');

-- Borrar: solo el dueno del archivo
create policy fotos_menu_borrado_propio
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'platillos' and owner = auth.uid());
```

Si tu panel de administración es solo para el dueño del negocio, cambia `to authenticated` por una condición que revise su rol (m4-c19). Con `authenticated` a secas, cualquier cliente registrado puede subir fotos.

Ahora la subida desde el panel, con nombre generado y ruta guardada en la tabla:

```js
async function subirFotoPlatillo(archivo, platilloId) {
  // 1) Validacion de cortesia (la real esta en el bucket)
  const MAX = 2 * 1024 * 1024;
  if (archivo.size > MAX) return alert('La imagen pasa de 2 MB');
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(archivo.type)) {
    return alert('Solo JPG, PNG o WebP');
  }

  // 2) Nombre propio: nada de confiar en el del celular
  const ext = archivo.name.split('.').pop().toLowerCase();
  const ruta = `platillos/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from('platillos')
    .upload(ruta, archivo, { contentType: archivo.type, upsert: false });

  if (error) return alert('No se pudo subir: ' + error.message);

  // 3) En la tabla va la RUTA, no la URL completa
  await supabase.from('platillos').update({ imagen_path: ruta }).eq('id', platilloId);

  return ruta;
}
```

Para pintarla en el menú, la URL se arma al vuelo. Ojo: `getPublicUrl` es síncrono, no lleva `await`:

```js
const { data } = supabase.storage
  .from('platillos')
  .getPublicUrl(platillo.imagen_path);

img.src = data.publicUrl;
// https://tu-proyecto.supabase.co/storage/v1/object/public/platillos/platillos/8f3c....jpg
```

Verificación: sube una foto de 1 MB y confirma que aparece en el menú; intenta subir un PDF y un archivo de 5 MB y confirma que el bucket los rechaza aunque tu validación del navegador esté desactivada; borra una fila de `platillos` y revisa en Storage si el archivo sigue ahí. Ese último punto es el que sorprende a todos.

**Advertencia:** un bucket público significa que cualquiera con la URL ve la imagen para siempre, sin sesión, y que la URL se puede compartir, pegar en un chat o indexar. Perfecto para tacos; catastrófico para INE, comprobantes de pago, contratos o fotos de clientes. Y borrar la fila de la tabla **no borra el archivo**: te quedan huérfanos ocupando espacio. Si el archivo es privado, el bucket es privado y se entrega con `createSignedUrl` que caduca (m4-b23).

### Díselo a la IA

> "Configura Supabase Storage para las fotos de platillos de Tacos El Volcán. (1) Crea el bucket platillos público, con límite de 2 MB y solo JPG, PNG y WebP, en un bloque SQL idempotente. (2) Escribe las políticas de storage.objects para que cualquiera lea las fotos de ese bucket, solo usuarios con sesión suban, y cada quien borre lo que subió. (3) Dame una función subirFotoPlatillo(archivo, platilloId) que valide tamaño y tipo antes de subir, genere un nombre único, suba con upload(), y guarde únicamente la ruta en platillos.imagen_path. (4) Dame el código para pintar la imagen desde esa ruta con getPublicUrl. (5) Al final, dime qué queda expuesto con un bucket público y qué pasa con el archivo cuando borro la fila. Si para mi caso conviene un bucket privado, propónmelo con su razón."

El punto 5 es obligatorio: sin él, la IA te entrega el código funcionando y ni una palabra sobre lo que acabas de hacer público.

### Ejercicios

**1. [opción múltiple]** ¿Dónde debe guardarse la foto de un platillo?
   - a) En una columna text de platillos, convertida a base64
   - b) En el bucket platillos, y en la tabla solo la ruta del archivo ✔
   - c) En el localStorage del visitante
   - d) En una variable de entorno del proyecto

**2. [verdadero/falso]** "Un bucket público permite que cualquiera lea los archivos, pero no que cualquiera suba archivos."
   - Respuesta: VERDADERO — Público se refiere a la lectura: no pide token. La escritura sigue dependiendo de una política sobre storage.objects, y sin ella el upload falla por RLS.

**3. [completar]** "El límite de tamaño se configura en el bucket como ____, y los tipos permitidos en ____."
   - Banco: `file_size_limit` · `allowed_mime_types` · `public` · `name`
   - Respuesta: file_size_limit / allowed_mime_types

**4. [relacionar]** Une cada elemento con su pareja:
   - upload() ↔ Sube el archivo al bucket
   - getPublicUrl() ↔ Construye la URL de lectura a partir de la ruta
   - file_size_limit ↔ Rechaza archivos que pasan del peso permitido
   - Borrar la fila de platillos ↔ Deja el archivo huérfano en el bucket

**5. [qué hace]** ¿Qué logra generar la ruta así?

```js
const ext = archivo.name.split('.').pop().toLowerCase();
const ruta = `platillos/${crypto.randomUUID()}.${ext}`;
```

   - a) Comprime la imagen antes de subirla
   - b) Evita que dos archivos se sobrescriban y descarta los caracteres raros del nombre original ✔
   - c) Verifica que el archivo sea realmente una imagen
   - d) Hace que el bucket deje de ser público

---

## C15 — Pedirle a la IA una función de servidor

### Concepto

Todo lo que pusiste en el navegador es público: el HTML, el JavaScript, la llave `anon` y cualquier URL que aparezca en el código. Eso está bien para el menú, para el login y para leer lo que RLS permite leer. Pero hay tres cosas que no pueden vivir ahí. Los **secretos**: la llave de la pasarela de pagos, la del servicio de WhatsApp, la del correo. Las **llamadas a terceros** que necesitan ese secreto. Y las **decisiones** que el cliente no debe poder cambiar: el total del pedido, el descuento aplicado, si hay inventario, si eres administrador.

Para eso existe la función de servidor. En Supabase se llama Edge Function: código que corre en su nube, no en el navegador, y al que llamas por HTTP. El navegador manda una petición con los datos mínimos, la función hace el trabajo con sus secretos guardados como variables de entorno (m4-a19) y devuelve un resultado. El usuario nunca ve la llave, ni el código, ni la consulta que se ejecutó.

La parte que casi nadie hace antes de pedir el código es definir el contrato: qué recibe y qué devuelve. Entrada, un JSON pequeño con lo indispensable, por ejemplo los platillos y cantidades, el teléfono y una nota. Salida, un JSON con `ok`, el id del pedido y el total, o con `ok: false`, un código de error y un mensaje para mostrar. Más el código HTTP: 201 si se creó, 400 si los datos están mal, 401 si no hay sesión válida, 500 si algo se rompió del lado del servidor (m4-a5).

Con el contrato escrito, el brief se escribe solo. Cuatro preguntas y listo: ¿qué dispara la llamada?, ¿qué datos necesita?, ¿qué debe validar?, ¿qué devuelve cuando algo falla? Sin esas cuatro respuestas la IA inventa un contrato, y luego no sabes si el error viene de tu formulario o de una suposición suya.

Y la regla que separa una función útil de una puerta trasera: la función no confía en lo que le mandan. Recalcula los precios leyendo la tabla, valida cantidades, revisa que el usuario del token sea quien dice ser. El precio que manda el navegador es una sugerencia, no un hecho. Si la función hace caso al precio recibido, cualquiera compra veinte volcanes por un peso editando el JSON.

Te importa aunque la IA escriba el código porque esta es la decisión de arquitectura que más dinero mueve en todo el módulo: qué se queda en el navegador y qué se va al servidor. La IA te puede escribir la función en dos minutos; decidir que hacía falta, y con qué contrato, es tu trabajo (m4-c18).

### Analogía

La función de servidor es el bodeguero de una ferretería. Tú pides desde el mostrador y él entra por la puerta marcada «solo personal» a buscar la pieza; tiene la llave del almacén, conoce el inventario y decide si te la puede vender. Tú nunca entras, nunca ves el libro de existencias y nunca tocas la llave. Y si le pides «dame veinte tornillos al precio de uno», revisa la lista antes de cobrar: lo que dijiste en el mostrador no es lo que dice el sistema.

### Cómo se ve en la práctica

El caso de Tacos El Volcán: el pedido por WhatsApp necesita mandar el mensaje con la llave de un proveedor, y el total no puede venir calculado del navegador. Ese es el brief. Primero el contrato, escrito antes de pedir código:

```json
FUNCION: crear-pedido

ENTRADA (body JSON)
{
  "items": [ { "platillo_id": "uuid", "cantidad": 2 } ],
  "telefono": "5551234567",
  "nota": "sin cebolla"
}

SALIDA 201
{ "ok": true, "pedido_id": "uuid", "total": 168.00 }

SALIDA 400
{ "ok": false, "error": "PLATILLO_NO_DISPONIBLE",
  "mensaje": "El volcán está agotado hoy" }

SALIDA 401
{ "ok": false, "error": "SIN_SESION" }

NO RECIBE: precios, totales ni cliente_id (se calculan o se leen del token)
```

Así se ve la función por dentro, en su forma mínima. No necesitas escribirla tú, pero sí reconocer las cinco partes: leer, identificar al usuario, validar, calcular y responder:

```js
Deno.serve(async (req) => {
  const { items, telefono, nota } = await req.json();

  if (!Array.isArray(items) || items.length === 0) {
    return Response.json({ ok: false, error: 'SIN_ITEMS' }, { status: 400 });
  }

  // 1) Quien es: el id sale del token, no del body
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');
  const { data: { user } } = await auth.getUser(token);
  if (!user) {
    return Response.json({ ok: false, error: 'SIN_SESION' }, { status: 401 });
  }

  // 2) Valida contra la base, no contra lo que mando el navegador
  const { data: platillos } = await db
    .from('platillos')
    .select('id, precio, activo')
    .in('id', items.map(i => i.platillo_id));

  if (platillos.some(p => !p.activo)) {
    return Response.json(
      { ok: false, error: 'PLATILLO_NO_DISPONIBLE' },
      { status: 400 }
    );
  }

  // 3) Recalcula el total aqui, jamas lo aceptes del cliente
  const total = items.reduce((suma, i) => {
    const p = platillos.find(x => x.id === i.platillo_id);
    return suma + p.precio * i.cantidad;
  }, 0);

  // 4) Inserta y responde
  const { data: pedido } = await db
    .from('pedidos')
    .insert({ cliente_id: user.id, total, telefono, nota })
    .select('id')
    .single();

  return Response.json({ ok: true, pedido_id: pedido.id, total }, { status: 201 });
});
```

Y así la llamas desde el sitio. Fíjate que el body no lleva ni precio ni total:

```js
const { data, error } = await supabase.functions.invoke('crear-pedido', {
  body: {
    items: carrito.map(i => ({ platillo_id: i.id, cantidad: i.cantidad })),
    telefono,
    nota
  }
});

if (error || !data.ok) {
  return mostrarError(data?.mensaje ?? 'No pudimos crear tu pedido');
}

mostrarConfirmacion(data.pedido_id, data.total);
```

**Advertencia:** los secretos de la función viven en sus variables de entorno, nunca en el código ni en el repositorio; si los pegas en el archivo, quedan en el historial de Git para siempre. Y si la función usa la llave `service_role` para escribir, se salta RLS por completo: eso significa que la validación de quién es el usuario la tienes que hacer tú dentro de la función, leyendo el token. Una función con `service_role` y sin validación es la puerta más grande que puedes abrir en un backend.

### Díselo a la IA

> "Necesito una Edge Function en Supabase llamada crear-pedido para Tacos El Volcán. Contrato: recibe { items: [{ platillo_id, cantidad }], telefono, nota } y devuelve 201 { ok: true, pedido_id, total }, 400 { ok: false, error, mensaje }, 401 { ok: false, error: 'SIN_SESION' }. Reglas: (1) no aceptes precios ni totales del body, recalcúlalos leyendo platillos; (2) verifica el token del usuario con el cliente de Supabase y usa su id, no un cliente_id recibido; (3) valida cantidades enteras entre 1 y 20 y que el platillo esté activo; (4) las llaves del proveedor de mensajes van en variables de entorno, y dime el nombre exacto de cada una; (5) no devuelvas stack traces al cliente, solo el código de error y un mensaje en español. Antes del código, escríbeme el contrato y las cuatro validaciones. Después, dame la llamada desde el frontend con functions.invoke y un ejemplo de respuesta de error."

Pedir el contrato antes del código evita el clásico «ya te la hice» con un body distinto al que tu formulario manda. Y pedir los nombres de las variables de entorno te obliga a configurarlas antes de la primera prueba.

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estas tareas NO es razón para mover lógica a una función de servidor?
   - a) Guardar la llave de la pasarela de pagos
   - b) Recalcular el total del pedido antes de guardarlo
   - c) Cambiar el color del botón según la hora del día ✔
   - d) Verificar que el usuario sea administrador

**2. [verdadero/falso]** "Si el navegador manda el precio de cada platillo, la función debe confiar en ese precio para no recalcular y ahorrar tiempo."
   - Respuesta: FALSO — El body lo controla el usuario. La función recalcula el total leyendo platillos en la base, y solo usa del body los ids y las cantidades. Aceptar el precio recibido equivale a regalar el inventario.

**3. [completar]** "Los secretos de la función viven en sus ____, nunca en el ____ del navegador."
   - Banco: `variables de entorno` · `código` · `header` · `body`
   - Respuesta: variables de entorno / código

**4. [relacionar]** Une cada elemento con su pareja:
   - Llave de un proveedor de pagos ↔ Va en la función, nunca en el navegador
   - Precio final del pedido ↔ Se recalcula en la función leyendo la tabla
   - Menú público de platillos ↔ Puede leerse directo del navegador con RLS
   - Verificar si eres administrador ↔ Se decide en el servidor, no con un if del frontend

**5. [qué hace]** ¿Qué hace este fragmento dentro de la función?

```js
const { items } = await req.json();

if (!Array.isArray(items) || items.length === 0) {
  return Response.json(
    { ok: false, error: 'SIN_ITEMS' },
    { status: 400 }
  );
}
```

   - a) Crea el pedido en la tabla y devuelve el total
   - b) Rechaza la petición con código 400 si no llegó una lista de artículos válida ✔
   - c) Verifica la contraseña del usuario
   - d) Sube una imagen al bucket platillos

---

## C16 — PRÁCTICA: tu primera función serverless

### Concepto

Tu sitio de Tacos El Volcán ya guarda pedidos y ya tiene login. Todo eso ocurre en el navegador del visitante, con la llave pública de Supabase y las reglas de RLS. Pero hay tres cosas que el navegador no puede hacer sin exponerse: guardar una llave privada, hablar con un servicio que cobra por llamada y decidir si alguien es administrador. Para eso existe la **función serverless**.

Una función serverless es un archivo de JavaScript que **no se descarga** al navegador: se ejecuta en una máquina de Netlify, recibe una petición HTTP y devuelve una respuesta. “Serverless” no significa que no haya servidor; significa que no lo administras tú. Netlify se encarga del sistema operativo, los parches, el escalado y de tenerla disponible. Tú entregas un archivo y una promesa: qué recibe y qué devuelve.

La ruta sale del nombre del archivo. Cualquier archivo dentro de `netlify/functions` se publica como endpoint: `netlify/functions/hola.js` responde en `/.netlify/functions/hola`. Recibe un objeto `event` con el método, los headers, los query params y el body (m4-a11), y devuelve `{ statusCode, headers, body }`. Es la misma conversación HTTP del módulo, solo que ahora el que contesta eres tú (m4-a2).

Los secretos no van en el archivo. Van en **variables de entorno**: valores que se configuran en Netlify y llegan al código como `process.env.NOMBRE`. En tu máquina viven en un archivo `.env` que Git ignora; en producción, en el panel del sitio. El mismo código funciona en los dos lados porque lee la misma variable (m4-a19).

Tu primera función probablemente solo diga “hola”. No importa: acabas de construir el lugar donde después van el cobro, la verificación de rol, la llamada a una API externa y el envío de correo. Sin ese lugar, tu sitio es un folleto; con ese lugar, es un sistema. La unidad siguiente lo usa para algo real (m4-c17), y la c18 te da la regla para decidir qué se queda de cada lado.

### Analogía

Es la **bomba presurizadora de un edificio**. No está encendida todo el día esperando a que alguien abra una llave: está instalada, conectada y dormida. En el segundo en que un departamento abre la regadera, arranca, empuja el agua que ese departamento necesita y se apaga. Nadie contrató a un operador para vigilarla y nadie paga la energía de una bomba corriendo sin uso: se paga el arranque y el agua que pasó. Así funciona una función serverless: instalada en la plataforma, dormida hasta que llega una petición, despierta, atiende a esa petición y vuelve a dormir. Si nadie la llama en un mes, no hay bomba encendida ni factura corriendo.

### Cómo se ve en la práctica

Vas a crear una función que saluda, probarla en local, desplegarla y llamarla desde tu página. Cada paso trae su verificación, porque “ya quedó” sin comprobación es la frase que precede a la tarde perdida.

- **Crea el archivo** `netlify/functions/hola.js` en la raíz de tu repositorio. La carpeta debe llamarse exactamente así; no va dentro de la carpeta que publicas, sino al lado.
- **Pega el código** y guarda. Fíjate en las tres piezas: de dónde sale el nombre, de dónde sale el saludo y qué forma tiene la respuesta.
- **Pruébala en local** con `npx netlify dev`. Abre la URL que imprime la terminal, agregando la ruta de la función.
- **Despliega**: si tu repositorio está conectado a Netlify, un `git push` basta; si no, usa `npx netlify deploy --prod`.
- **Llámala desde tu página** con `fetch` y pinta el resultado en un párrafo.

```js
// netlify/functions/hola.js
exports.handler = async (event) => {
  const nombre = event.queryStringParameters?.nombre || 'mundo';
  const saludo = process.env.SALUDO || 'Hola';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      mensaje: `${saludo}, ${nombre}.`,
      ejecutado_en: new Date().toISOString()
    })
  };
};
```

```js
npx netlify dev
# abre: http://localhost:8888/.netlify/functions/hola?nombre=Ana
```

```html
<p id="salida">…</p>
<script>
  fetch('/.netlify/functions/hola?nombre=Ana')
    .then((r) => r.json())
    .then((d) => {
      document.querySelector('#salida').textContent = d.mensaje;
    })
    .catch(() => {
      document.querySelector('#salida').textContent = 'La función no respondió.';
    });
</script>
```

La variable de entorno se configura en **Site configuration → Environment variables** del panel de Netlify, o desde la terminal con `npx netlify env:set SALUDO "Buenas tardes"`. Para local, agrega la misma línea a un archivo `.env` en la raíz. Después de cambiarla, vuelve a desplegar.

**Resultado esperado:** la URL local y la pública devuelven algo como `{"mensaje":"Buenas tardes, Ana.","ejecutado_en":"2026-11-24T18:02:11.482Z"}`, la fecha cambia en cada llamada y la página muestra el mensaje. En el panel, **Functions → hola** registra cada invocación.

**Advertencia:** nunca subas `.env` al repositorio. No es un archivo de configuración cualquiera: es la lista de tus llaves. Un `.env` en GitHub es una llave publicada, y los bots que buscan llaves tardan minutos, no días. Agrégalo a `.gitignore` antes del primer commit. Si ya lo subiste, borrarlo del último commit no basta: sigue en el historial, así que hay que **rotar la llave** —generar una nueva y desactivar la vieja—, no solo esconder el archivo (m4-a19). Y no imprimas `process.env` en la respuesta “para depurar”: eso mueve el secreto del servidor al navegador.

### Díselo a la IA

> "Voy a crear mi primera función serverless en Netlify. Dame el archivo completo `netlify/functions/hola.js` en JavaScript, con `exports.handler`, que reciba un parámetro `nombre` por query string, use la variable de entorno `SALUDO` con un valor por omisión y devuelva JSON con `mensaje` y `ejecutado_en`. Incluye el `Content-Type` correcto. Después dime, paso a paso: cómo probarla en local con `netlify dev`, cómo desplegarla y cómo llamarla desde una página con `fetch`. Cierra con una lista de verificación y recuérdame qué debe ir en `.gitignore` y por qué no debo imprimir `process.env` en la respuesta."

### Ejercicios

**1. [opción múltiple]** ¿Dónde debe vivir el archivo para que Netlify lo publique como función?
   - a) En la raíz del repositorio, junto a index.html
   - b) En una carpeta public/
   - c) En netlify/functions/ ✔
   - d) En src/api/

**2. [verdadero/falso]** "Una función serverless está encendida las 24 horas esperando peticiones; por eso hay que reiniciarla a mano cuando cambias el código."
   - Respuesta: FALSO — Se ejecuta cuando llega una petición y se apaga al responder. Un nuevo deploy publica la versión nueva; no se reinicia a mano.

**3. [completar]** "El nombre del ____ define la URL de la función, y una llave se lee con process.env desde una variable de ____."
   - Banco: `archivo` · `entorno` · `header` · `body`
   - Respuesta: archivo / entorno

**4. [ordenar]** Ordena el camino de tu primera función hasta verla responder en el sitio publicado.
   - Orden correcto: Crear netlify/functions/hola.js → Probar la URL en local con netlify dev → Hacer commit y desplegar → Abrir /.netlify/functions/hola en el sitio publicado

**5. [qué hace]** Si la función recibe una petición a /.netlify/functions/hola sin query string, ¿qué valor toma nombre?

```js
const nombre = event.queryStringParameters?.nombre || "mundo";
```

   - a) Lanza un error porque falta el parámetro
   - b) null
   - c) "mundo" ✔
   - d) El nombre del archivo: hola

---

## C17 — PRÁCTICA: consumir una API externa desde el servidor

### Concepto

Tu función ya responde. El siguiente paso es que salga a la calle: llamar al servicio de otra empresa. En Tacos El Volcán el caso es concreto: el menú tiene precios en pesos, pero parte de los insumos se compran en dólares; quieres mostrar el tipo de cambio del día sin que nadie tenga que buscarlo. Ese dato no vive en tu base: vive en una API externa que exige una llave y cobra por llamada (m4-a20).

El flujo es siempre el mismo. Llega la petición a tu función, la función lee la llave de una variable de entorno, llama a la API externa con `fetch`, revisa que la respuesta sea correcta, extrae **solo los campos que necesita** y responde a tu página. La llave nunca viaja al navegador y la API externa nunca ve a tu usuario. Tu función es un intermediario con criterio, no un tubo.

Revisar la respuesta no es opcional. `fetch` no lanza error cuando el servidor responde 404 o 500: te entrega la respuesta y tú decides. `respuesta.ok` es verdadero solo entre 200 y 299. Si la API responde 401, tu llave es inválida; 429, se agotó la cuota; 5xx, el proveedor está caído. Tu función traduce cada caso a un mensaje que la página puede mostrar, en vez de reventar con un stack trace. Y como el proveedor puede tardar, se pone un límite de tiempo: sin él, tu función espera hasta que Netlify la corte.

El tipo de cambio no cambia cada segundo. Guardar la respuesta una hora con `Cache-Control` reduce llamadas, cuota y latencia. Es la misma idea de los límites de una API (m4-a20): cada llamada cuesta, y la mayoría de las visitas no necesitan una nueva.

Devolver solo lo necesario también es contrato y seguridad. Si entregas el JSON completo del proveedor, tu frontend se acostumbra a campos que no controlas, y el día que el proveedor los cambie se rompe tu página. Devuelve tres campos con nombres tuyos; así puedes cambiar de proveedor sin tocar la interfaz.

### Analogía

Es la **central de radio de una flota de taxis**. Tú no tienes radio ni licencia de frecuencia: llamas a la central y preguntas por tu unidad. La central tiene el equipo, conoce el canal y habla con el chofer; a ti solo te devuelve lo que necesitas: “va sobre la avenida 5, llega en ocho minutos”. No te pasa la frecuencia, ni la conversación completa, ni el nombre del chofer si no hace falta. La llave de la API es esa frecuencia: vive en la central, no en la mano del pasajero. Y si la central detecta que la frecuencia está saturada, te dice que esperes en vez de dejarte escuchando estática.

### Cómo se ve en la práctica

Vas a mostrar el tipo de cambio USD a MXN en el sitio. Uso `exchangerate-api.com` como ejemplo porque su plan gratuito alcanza de sobra; el mismo patrón sirve para clima, WhatsApp o pagos.

- **Crea la cuenta** en el proveedor y copia la llave. No la pegues en el código ni en el chat de la IA.
- **Guárdala como variable de entorno**: `npx netlify env:set TIPO_CAMBIO_KEY "tu-llave"`. En local, agrega `TIPO_CAMBIO_KEY=tu-llave` a `.env`.
- **Crea** `netlify/functions/tipo-cambio.js` con el código de abajo. Observa que la función no devuelve la respuesta del proveedor: devuelve `base`, `mxn` y `actualizado`.
- **Prueba** con `curl.exe -i https://tu-sitio.netlify.app/.netlify/functions/tipo-cambio` y revisa status, headers y cuerpo.
- **Úsala en la página** con un `fetch` a tu propia función, nunca a la API externa.

```js
// netlify/functions/tipo-cambio.js
exports.handler = async () => {
  const llave = process.env.TIPO_CAMBIO_KEY;

  if (!llave) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Falta configurar TIPO_CAMBIO_KEY' })
    };
  }

  try {
    const respuesta = await fetch(
      `https://v6.exchangerate-api.com/v6/${llave}/latest/USD`,
      { signal: AbortSignal.timeout(5000) }
    );

    if (respuesta.status === 401 || respuesta.status === 403) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'La llave del servicio no es válida' })
      };
    }

    if (respuesta.status === 429) {
      return {
        statusCode: 503,
        body: JSON.stringify({ error: 'Se agotó la cuota del servicio' })
      };
    }

    if (!respuesta.ok) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'El servicio de tipo de cambio no respondió' })
      };
    }

    const datos = await respuesta.json();
    const mxn = datos.conversion_rates?.MXN;

    if (!mxn) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Respuesta inesperada del servicio' })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600'
      },
      body: JSON.stringify({
        base: 'USD',
        mxn: mxn,
        actualizado: datos.time_last_update_utc
      })
    };
  } catch (error) {
    return {
      statusCode: 504,
      body: JSON.stringify({ error: 'El servicio tardó demasiado o no hubo conexión' })
    };
  }
};
```

```js
const r = await fetch('/.netlify/functions/tipo-cambio');
const { mxn } = await r.json();
document.querySelector('#dolar').textContent =
  `1 USD = ${mxn.toFixed(2)} MXN`;
```

**Resultado esperado:** el navegador recibe `{"base":"USD","mxn":18.74,"actualizado":"..."}`. En la pestaña *Network* aparece una sola petición, a tu función, y en ningún lado aparece la llave. En los logs de Netlify se ven invocaciones y errores, pero no la URL completa con la llave dentro.

**Advertencia:** en este proveedor la llave viaja dentro de la ruta de la URL. Eso significa que un log que guarda la URL completa guarda la llave: registra el estado y el tiempo, nunca la URL entera. Si la llave se filtró —la pegaste en un commit, en un log o en un chat— no la borres: **rótala**. Generar una nueva y desactivar la anterior es el único arreglo. Y no la pongas “temporalmente” en el frontend para probar: lo que se prueba en el navegador ya está publicado.

### Díselo a la IA

> "Convierte esta necesidad en una función de Netlify: quiero mostrar el tipo de cambio USD a MXN en mi sitio. La llave está en la variable de entorno `TIPO_CAMBIO_KEY`; no la escribas en el código ni la devuelvas en la respuesta. La función debe llamar a la API con `fetch`, usar un timeout de 5 segundos, distinguir llave inválida (401/403), cuota agotada (429), error del proveedor (5xx) y tiempo agotado, y devolver únicamente `base`, `mxn` y `actualizado` con cache de una hora. Incluye el `fetch` del frontend y una prueba con `curl`. Al final dime qué debo revisar para comprobar que la llave no se filtró y cómo rotarla si se filtró."

### Ejercicios

**1. [opción múltiple]** ¿Por qué la llamada a la API externa se hace desde la función y no desde el navegador?
   - a) Porque la llave quedaría visible y cualquiera podría gastar tu cuota ✔
   - b) Porque el navegador no puede hacer fetch a otros dominios
   - c) Porque las funciones siempre son más rápidas que el navegador
   - d) Porque la API externa solo acepta JSON

**2. [verdadero/falso]** "Devolver al navegador la respuesta completa de la API externa es buena práctica: así el frontend tiene más datos por si los necesita."
   - Respuesta: FALSO — Acopla tu interfaz a un contrato ajeno y expone datos que no necesitas. Devuelve solo los campos que tu pantalla usa, con nombres tuyos.

**3. [completar]** "La llave se guarda en una variable de ____ y se lee con process.env; un 429 significa que se agotó la ____."
   - Banco: `entorno` · `cuota` · `sesión` · `caché`
   - Respuesta: entorno / cuota

**4. [relacionar]** Une cada elemento con su pareja:
   - 401 ↔ La llave es inválida o no tiene permiso
   - 429 ↔ Se agotó la cuota de llamadas
   - 504 ↔ La API externa no respondió a tiempo
   - Cache-Control ↔ Evita llamar a la API en cada visita

**5. [ordenar]** Ordena lo que hace tu función cuando la llama el navegador.
   - Orden correcto: Recibir la petición → Leer la llave de la variable de entorno → Llamar a la API externa con un límite de tiempo → Extraer solo los campos necesarios → Responder el JSON a la página

---

## C18 — Qué va en el navegador y qué va en el servidor

### Concepto

Esta unidad decide si puedes dirigir un sistema o solo copiar código. La regla cabe en una línea y se evalúa en el examen: **todo lo que sea secreto, costoso o verificable solo va al servidor**. Lo demás puede vivir en el navegador. Si te preguntan dónde se valida el precio de un pedido, la respuesta es el servidor; y la razón no es desconfianza en el cliente, es que el navegador es del usuario y puede modificarse.

**Secreto** es todo lo que da poder a quien lo tenga: una llave de API, la llave `service_role` de Supabase, la contraseña de la base, el token de otra persona. En el navegador no existen secretos: lo que se descarga se puede leer. El código del frontend se abre con Ctrl+U, con la pestaña *Sources* o con las herramientas de desarrollo; una llave escondida dentro de una variable sigue siendo texto en el archivo. Si el navegador la necesita para funcionar, es pública por definición.

**Costoso** es lo que consume dinero, cuota o cómputo: una consulta que recorre doscientas mil filas, una llamada a una API que cobra por uso, generar un PDF, procesar una imagen, mandar un WhatsApp. Si esa operación vive en el cliente, cualquier visitante puede repetirla en un bucle desde la consola y la factura llega a tu nombre. En el servidor puedes limitar, cachear y registrar quién lo pidió.

**Verificable** es todo lo que el sistema debe comprobar antes de creer: el precio, el total, el descuento, el rol, el stock, la identidad del dueño. No es que el usuario sea malicioso: es que el cliente es editable y también se equivoca. Un carrito con precios cacheados de ayer manda un total viejo sin mala intención. El servidor vuelve a leer el precio de la base y vuelve a calcular, aunque el número ya venga en la petición.

Del otro lado quedan las cosas que solo afectan cómo se ve o se siente: pintar HTML, formatear fechas y moneda, animaciones, validar el formato del correo para dar respuesta inmediata —y el servidor la repite—, recordar el tema claro u oscuro. La llave `anon` de Supabase también vive ahí, y eso no es un descuido: está diseñada para ser pública. Lo que protege los datos son las políticas de RLS, no el secreto de la llave (m4-b22); con RLS apagado, esa misma llave pública se vuelve una llave maestra. La que jamás toca el navegador es `service_role`: se salta RLS y da acceso total.

La frase para llevarte al examen: **el cliente propone, el servidor decide**. Si una decisión importante se toma leyendo `localStorage`, una línea en la consola la cambia. El panel de administración (m4-c19) y el buscador (m4-c20) viven o mueren por esta regla.

### Analogía

Es el **aparador de una joyería y la bóveda del fondo**. En el aparador de vidrio hay piezas de exhibición, letreros con precios y un cartel de horarios: cualquiera que pasa por la calle lo ve, y verlo no le da poder sobre nada. La bóveda es otra cosa: guarda el inventario real, la combinación y los registros de quién compró qué, y el empleado saca una charola a la vez, solo con lo que el cliente necesita ver. Si la combinación estuviera escrita en el vidrio del aparador, no importaría qué tan gruesa sea la puerta. En tu sistema, el aparador es el HTML y el JavaScript que se descarga; la bóveda es la base con RLS y las funciones del servidor.

### Cómo se ve en la práctica

Tres decisiones del mismo sistema, en su versión ingenua y en su versión correcta. La diferencia no es de estilo: es la que separa un pedido de 350 pesos de uno de 1 peso.

**1. El total del pedido.** Si el navegador lo calcula y lo manda, el servidor no tiene forma de saber si es cierto.

```js
// MAL: el navegador manda el total ya calculado
const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
await supabase.from('pedidos').insert({ cliente_id: 7, total });
```

```js
// BIEN: el servidor ignora el total del cliente y lo recalcula
const { data: precios } = await supabase
  .from('platillos')
  .select('id, precio')
  .in('id', items.map((i) => i.platillo_id));

const total = items.reduce((suma, item) => {
  const p = precios.find((x) => x.id === item.platillo_id);
  return suma + p.precio * item.cantidad;
}, 0);
```

**2. El rol de administrador.** Ocultar el botón es una cortesía visual; esconder el panel en el HTML es lo mismo con más pasos.

```js
// MAL: el rol se decide en el navegador
if (localStorage.getItem('rol') === 'admin') {
  document.querySelector('#panel').hidden = false;
}
```

```sql
-- BIEN: la base decide con el usuario del token (RLS encendido, m4-c11)
create policy "solo admin ve todos los pedidos"
on pedidos for select to authenticated
using (
  exists (
    select 1 from perfiles
    where perfiles.id = auth.uid()
      and perfiles.rol = 'admin'
  )
);
```

**3. La llave de una API externa.** Si aparece en un `fetch` del frontend, está publicada: se ve en *Network*, en el código y en cualquier captura de pantalla. Vive en una variable de entorno y se usa solo dentro de la función (m4-c17).

Esto es lo que pasaría si cada cosa viviera en el cliente:

- **Precio y total:** el cliente los cambia en DevTools y paga lo que quiera. El servidor debe recalcular con los precios de la base.
- **Rol:** `localStorage.setItem('rol','admin')` y entra al panel. El servidor debe consultar el rol en la base en cada petición.
- **Stock:** dos personas compran el último platillo a la vez y se venden dos. La validación y el descuento van en una transacción del servidor.
- **Dueño de los datos:** si el `cliente_id` lo manda el navegador, se cambia por otro y aparecen pedidos ajenos. El servidor usa el id del token, no el del body.
- **Envío de correo o WhatsApp:** cualquiera lo llama en bucle y tu dominio termina marcado como spam. Va en el servidor, con límite por usuario.

**Resultado esperado:** abre DevTools, intercepta la petición y cambia el total antes de enviarla; el pedido debe guardarse con el total correcto, no con el manipulado. Repite con una cuenta sin rol de administrador: debe recibir `403`, aunque el botón siga visible en su pantalla.

**Advertencia:** si alguna vez pegas la llave `service_role` en el frontend “para probar rápido”, estás publicando la base completa: esa llave se salta RLS y permite leer, escribir y borrar todo. No hay botón que lo esconda y no hay usuario que lo atenúe; si se filtró, se rota de inmediato. Y recuerda la trampa de esta unidad: ocultar un botón no es proteger una acción, es decorarla (m4-c19).

### Díselo a la IA

> "Actúa como revisor de seguridad de mi proyecto de Tacos El Volcán. Te voy a pasar las operaciones de mi sitio y quiero que clasifiques cada una en navegador o servidor usando esta regla: secreto, costoso o verificable va al servidor. Para cada operación dime qué pasa si se queda en el cliente, con el ataque o el error concreto, y muéstrame el antes y el después del código. Incluye precio total, rol de administrador, stock, filtro por cliente, llave de API externa y envío de mensajes. No me des teoría general: usa mis tablas `clientes`, `platillos`, `pedidos`, `pedido_items` y `resenas`, y termina con una prueba que pueda hacer en DevTools para comprobar que el servidor rechaza lo manipulado."

### Ejercicios

**1. [opción múltiple]** ¿Cuál de estas tareas puede quedarse en el navegador sin poner en riesgo el negocio?
   - a) Calcular el total final que se cobra
   - b) Decidir si el usuario es administrador
   - c) Leer la llave service_role para consultar la base
   - d) Avisar de inmediato si el correo parece inválido (sin sustituir la validación del servidor) ✔

**2. [verdadero/falso]** "La llave anon de Supabase debe mantenerse en secreto igual que la service_role."
   - Respuesta: FALSO — La anon está diseñada para el navegador; lo que protege los datos es RLS. La service_role sí es secreta y además se salta RLS: esa nunca toca el frontend.

**3. [completar]** "Todo lo que sea ____, costoso o ____ va al servidor; el navegador debe recibir solo lo necesario para ____."
   - Banco: `secreto` · `verificable` · `mostrar` · `guardar` · `firmar`
   - Respuesta: secreto / verificable / mostrar

**4. [relacionar]** Une cada elemento con su pareja:
   - Precio total del pedido ↔ Servidor: recalcular con los precios de la base
   - Formato de una fecha ↔ Navegador: solo presentación
   - Rol de administrador ↔ Servidor: verificar contra la tabla de perfiles
   - Llave de una API externa ↔ Servidor: variable de entorno

**5. [opción múltiple]** Un cliente cambia el total en la consola del navegador y el pedido se guarda en 1 peso. ¿Cuál es la causa?
   - a) Falta HTTPS en el sitio
   - b) La tabla pedidos no tiene índice
   - c) El servidor confió en un total calculado en el cliente ✔
   - d) RLS está encendido

---

## C19 — PRÁCTICA: panel de administración para tu negocio

### Concepto

El panel de administración es donde se opera el negocio: ver los pedidos que entraron, mover su estado, moderar una reseña. Es la pantalla más peligrosa de tu sistema, porque no solo lee: cambia y borra. Un clic equivocado deja a alguien sin pedido o borra una opinión que ya era evidencia de lo que pasó.

La tentación es esconder el botón. Eso sirve para que la interfaz no confunda, pero no protege nada: el panel es HTML y quien lo abre puede quitar el `hidden`, o llamar la función directamente con `curl`. La seguridad tiene tres capas y solo las dos últimas cuentan: la interfaz oculta (comodidad), la función verifica (no confía) y la base aplica RLS (última línea). Si la función falla, RLS sigue ahí; si RLS está mal, la función es el único filtro (m4-c11, m4-b22). **Ocultar un botón es diseño; negarlo en el servidor es seguridad.**

El rol no se guarda en el navegador ni en un campo que el usuario pueda editar. En Supabase, `user_metadata` lo puede cambiar el propio usuario: sirve para un apodo, no para permisos. El rol va en una tabla `perfiles` que tú controlas, o en `app_metadata`, que solo se edita con la llave de servicio. La verificación se hace en el servidor en cada petición: revisar al iniciar sesión no basta, porque el rol puede cambiar y la sesión sigue viva.

La “ruta protegida” es un malentendido útil de corregir. El archivo HTML del panel puede ser público: no contiene datos. Lo que se protege es la respuesta de la función y las filas de la base. Si tu única defensa es que “nadie sabe la URL”, alguien la encuentra en el historial, en un enlace compartido o en el código.

Borrar una reseña es la operación más delicada. Un `DELETE` no tiene papelera. Antes de ofrecerlo, pregúntate si quieres borrar o moderar: una columna `visible` conserva la evidencia y se puede revertir. Si de verdad vas a borrar, registra quién lo hizo, cuándo y qué decía, y ten un respaldo probado antes (m4-b20).

### Analogía

Es la **puerta del almacén de una tienda departamental**. El letrero de “solo personal autorizado” no detiene a nadie: es una sugerencia impresa. Lo que detiene es la chapa que solo abre con el gafete del empleado, y la lista de gafetes autorizados que vive en la oficina, no en el letrero. Si mañana ascienden a alguien, actualizan la lista en la oficina; el letrero no cambia. Ocultar el botón es el letrero; la función que revisa el rol es el lector de gafete; RLS es la chapa. Puedes quitar el letrero y la puerta sigue cerrada, pero si la chapa abre con cualquier tarjeta, el letrero más grande del mundo no te salva.

### Cómo se ve en la práctica

Vas a construir el panel de Tacos El Volcán con tres acciones: listar pedidos, cambiar estado y borrar una reseña. La regla de oro: cada acción vuelve a verificar el rol en el servidor, aunque la pantalla ya lo haya hecho.

- **Agrega el rol** a tu tabla de perfiles —ligada al usuario de Supabase; si la tuya se llama distinto, cambia el nombre en el SQL— y hazte administrador. El rol por omisión es `cliente`.
- **Crea la función `es_admin()`** y las políticas de RLS. Esta es la chapa: aunque alguien llame a Supabase directo con la llave anon, la base niega.
- **Crea la función** `netlify/functions/admin-pedidos.js`. Antes instala la dependencia con `npm install @supabase/supabase-js` y configura `SUPABASE_URL` y `SUPABASE_ANON_KEY` como variables de entorno. La función lee el token del header, valida la sesión, consulta el rol y solo entonces ejecuta.
- **Conecta el panel** mandando el token de la sesión en el header `Authorization`.
- **Prueba con dos cuentas**: la tuya con rol admin y una recién registrada. La segunda debe recibir `403` en todo.

```js
-- 0. RLS encendido: sin esto, las políticas no se aplican
alter table perfiles enable row level security;
alter table pedidos enable row level security;
alter table resenas enable row level security;

-- 1. el rol vive en una tabla que tú controlas
alter table perfiles
  add column rol text not null default 'cliente'
  check (rol in ('cliente', 'admin'));

update perfiles set rol = 'admin'
where id = 'uuid-de-tu-cuenta';

-- 2. consulta el rol sin recursión de RLS
create or replace function public.es_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from perfiles
    where id = auth.uid() and rol = 'admin'
  );
$$;

-- 3. la base niega lo que la interfaz esconde
create policy "solo admin ve todos los pedidos"
on pedidos for select to authenticated
using (es_admin());

create policy "solo admin actualiza pedidos"
on pedidos for update to authenticated
using (es_admin())
with check (es_admin());

create policy "solo admin borra resenas"
on resenas for delete to authenticated
using (es_admin());

-- 4. el panel también lee los datos del cliente
create policy "solo admin ve clientes"
on clientes for select to authenticated
using (es_admin());

-- 5. cada usuario puede leer su propio perfil
create policy "cada quien ve su perfil"
on perfiles for select to authenticated
using (id = auth.uid());
```

```js
// netlify/functions/admin-pedidos.js
const { createClient } = require('@supabase/supabase-js');

const ESTADOS = ['pendiente', 'en_camino', 'entregado', 'cancelado'];

async function requireAdmin(event) {
  const token = (event.headers.authorization || '').replace(/^Bearer /, '');
  if (!token) {
    return { error: { statusCode: 401, body: JSON.stringify({ error: 'Falta la sesión' }) } };
  }

  // Habla como el usuario: cada consulta pasa por RLS.
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      global: { headers: { Authorization: `Bearer ${token}` } },
      auth: { persistSession: false, autoRefreshToken: false }
    }
  );

  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    return { error: { statusCode: 401, body: JSON.stringify({ error: 'Sesión inválida' }) } };
  }

  const { data: perfil } = await supabase
    .from('perfiles')
    .select('rol')
    .eq('id', user.id)
    .maybeSingle();

  if (perfil?.rol !== 'admin') {
    return { error: { statusCode: 403, body: JSON.stringify({ error: 'No autorizado' }) } };
  }

  return { supabase, user };
}

exports.handler = async (event) => {
  const { supabase, error } = await requireAdmin(event);
  if (error) return error;

  if (event.httpMethod === 'GET') {
    const { data, error: dbError } = await supabase
      .from('pedidos')
      .select('id, estado, total, creado_en, clientes(nombre, telefono)')
      .order('creado_en', { ascending: false })
      .limit(100);

    if (dbError) {
      return { statusCode: 500, body: JSON.stringify({ error: 'No se pudieron leer los pedidos' }) };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ pedidos: data })
    };
  }

  if (event.httpMethod === 'PATCH') {
    const { pedido_id, estado } = JSON.parse(event.body || '{}');

    if (!pedido_id || !ESTADOS.includes(estado)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Pedido o estado inválido' }) };
    }

    const { data, error: dbError } = await supabase
      .from('pedidos')
      .update({ estado })
      .eq('id', pedido_id)
      .select('id, estado')
      .maybeSingle();

    if (dbError) {
      return { statusCode: 500, body: JSON.stringify({ error: 'No se pudo actualizar' }) };
    }
    if (!data) {
      return { statusCode: 404, body: JSON.stringify({ error: 'El pedido no existe' }) };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ pedido: data })
    };
  }

  if (event.httpMethod === 'DELETE') {
    const id = event.queryStringParameters?.resena_id;
    if (!id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Falta resena_id' }) };
    }

    const { data, error: dbError } = await supabase
      .from('resenas')
      .delete()
      .eq('id', id)
      .select('id');

    if (dbError) {
      return { statusCode: 500, body: JSON.stringify({ error: 'No se pudo borrar' }) };
    }
    if (!data.length) {
      return { statusCode: 404, body: JSON.stringify({ error: 'La reseña no existe' }) };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ borrada: id })
    };
  }

  return { statusCode: 405, body: JSON.stringify({ error: 'Método no permitido' }) };
};
```

```js
async function cargarPanel() {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    mostrar('Inicia sesión para ver el panel.');
    return;
  }

  const r = await fetch('/.netlify/functions/admin-pedidos', {
    headers: { Authorization: `Bearer ${session.access_token}` }
  });

  if (r.status === 401) mostrar('Tu sesión expiró. Vuelve a entrar.');
  else if (r.status === 403) mostrar('Esta cuenta no tiene permiso de administración.');
  else if (r.ok) pintarPedidos((await r.json()).pedidos);
}

cargarPanel();
```

**Resultado esperado:** con tu cuenta admin, `GET` devuelve los pedidos y `PATCH` cambia el estado. Con una cuenta nueva, las tres acciones devuelven `403`; sin token, `401`. Y si esa cuenta intenta leer `pedidos` directo desde Supabase con la llave anon, RLS le muestra solo los suyos.

**Advertencia:** esta función usa la llave anon y el token del usuario, así que RLS se aplica a cada consulta. Si la cambias por `service_role` “para que vea todo”, te saltas RLS y la verificación de la función queda como único filtro: un error ahí ya no tiene red. La `service_role` vive solo en el servidor cuando de verdad la necesitas, nunca en el HTML ni en el repositorio; si se filtra, hay que rotarla y revisar qué se leyó. Y borrar una reseña no se deshace: antes de dar ese botón, ten respaldo del día (m4-b20), registra quién borró y considera moderar con una columna `visible` en lugar de eliminar. Un `DELETE` sin `WHERE` en este panel borra todas las reseñas del negocio (m4-b12).

### Díselo a la IA

> "Constrúyeme el panel de administración de Tacos El Volcán con tres acciones: listar pedidos, cambiar estado y borrar una reseña. Requisitos que no se negocian: el rol se lee de la tabla `perfiles`, nunca de `user_metadata` ni de `localStorage`; la función de Netlify valida el token con `supabase.auth.getUser` y responde 401 sin sesión, 403 si el rol no es admin, 400 con datos inválidos y 405 con método incorrecto. Dame también las políticas RLS con una función `es_admin()` que no entre en recursión, y el `fetch` del frontend que manda el token. Al final incluye la prueba con dos cuentas y dime cómo comprobar que la base también niega el acceso directo con la llave anon. Si borro una reseña, muéstrame cómo registrar quién lo hizo y cómo recuperarla."

### Ejercicios

**1. [opción múltiple]** ¿Dónde debe verificarse que quien entra al panel es administrador?
   - a) En el CSS que oculta el botón
   - b) En localStorage al iniciar sesión
   - c) En un comentario del HTML
   - d) En el servidor, contra la base, en cada petición ✔

**2. [verdadero/falso]** "Guardar el rol en user_metadata de Supabase es seguro porque solo el servidor puede editarlo."
   - Respuesta: FALSO — El propio usuario puede modificar su user_metadata. El rol va en una tabla que tú controlas o en app_metadata, y se verifica en el servidor en cada petición.

**3. [completar]** "El token viaja en el header ____ con el prefijo ____; si no hay sesión, la función responde ____."
   - Banco: `Authorization` · `Bearer` · `401` · `403` · `Cookie`
   - Respuesta: Authorization / Bearer / 401

**4. [relacionar]** Une cada elemento con su pareja:
   - 401 ↔ No hay sesión o el token es inválido
   - 403 ↔ Hay sesión, pero el rol no es admin
   - 405 ↔ El método HTTP no está permitido
   - 500 ↔ La operación falló en la base

**5. [qué hace]** ¿Qué garantiza este bloque antes de ejecutar la acción del panel?

```js
const { data: perfil } = await supabase
  .from('perfiles')
  .select('rol')
  .eq('id', user.id)
  .maybeSingle();

if (perfil?.rol !== 'admin') {
  return { statusCode: 403, body: 'No autorizado' };
}
```

   - a) Que el usuario autenticado tenga rol admin en la base ✔
   - b) Que el token sea válido y no haya expirado
   - c) Que el pedido que se quiere cambiar exista
   - d) Que RLS esté apagado para esa tabla

---

## C20 — PRÁCTICA: buscador que consulta la base de datos

### Concepto

El buscador es la función que más rápido juzga un sitio. El cliente escribe “pastor” y espera ver el taco antes de levantar el dedo del teclado. Detrás de esa caja de texto hay una decisión de arquitectura: ¿el filtro ocurre en la base o en el navegador? La respuesta correcta casi nunca es “en el navegador”.

La solución ingenua es traer toda la tabla al navegador y filtrar con JavaScript. Con veinte platillos funciona y parece elegante. Con veinte mil pedidos, la primera visita descarga varios megabytes, el teléfono del cliente calienta, la memoria se llena de filas que nadie va a mirar y, de paso, expones columnas que no debían salir de la base. Además, filtrar en JavaScript no usa índices: recorres todo lo que bajaste, ya tarde.

En el servidor el filtro ocurre antes de transferir. La consulta lleva `WHERE`, un patrón y un `LIMIT`; la base filtra y, cuando el patrón lo permite, usa su índice para devolver veinte filas. El navegador recibe solo lo que va a pintar. Ese es el mismo principio de `SELECT` con columnas explícitas y `LIMIT` que ya viste (m4-b10).

Para texto hay dos herramientas. `ILIKE '%pastor%'` es simple y suficiente para un menú de cien platillos, pero el comodín al inicio impide usar un índice B-tree: la base tiene que revisar la tabla. Para búsquedas de verdad se usa **texto completo**: una columna `tsvector`, un índice GIN y `plainto_tsquery`, que entiende palabras y no solo pedazos de letra (m4-b16).

En el navegador quedan dos tareas. La primera es el **debounce**: esperar 300 milisegundos después de la última tecla antes de pedir, para no lanzar una petición por cada letra. La segunda es cancelar la petición anterior si el usuario siguió escribiendo. Después vienen los estados: cargando, resultados, sin resultados y error. Un estado vacío que dice “no hay datos” deja al usuario sin saber si escribió mal o si el negocio no tiene eso.

El buscador es un contrato de tres pasos: qué escribe el usuario, qué consulta se ejecuta y qué se muestra. Si el paso del medio trae la tabla completa, los otros dos no importan.

### Analogía

Es el **mostrador de equipaje perdido de un aeropuerto**. No vacían la bodega en la sala de espera para que tú revises maleta por maleta: describes la tuya —“verde, con ruedas, etiqueta roja”— y el empleado entra, consulta el registro y te trae tres candidatas. Si hablas a medias, espera a que termines la frase antes de caminar a la bodega; eso es el debounce. Si mientras tanto llegas con otra descripción, aborta la búsqueda anterior y empieza de nuevo. Y si no hay ninguna maleta que coincida, te lo dice con tus palabras: “no hay ninguna verde con ruedas”, no un “sin resultados” a secas. Traer la tabla completa al navegador sería vaciar la bodega en la sala de espera.

### Cómo se ve en la práctica

Vas a buscar platillos por nombre. Primero la consulta, después la función que la ejecuta y al final el comportamiento del input.

- **Escribe la consulta** con columnas explícitas, filtro y límite. Si algún día la escribes a mano, el valor del usuario va como parámetro (`$1`), nunca concatenado.
- **Crea** `netlify/functions/buscar-platillos.js`; instala `@supabase/supabase-js` si aún no está en tu `package.json` y configura `SUPABASE_URL` y `SUPABASE_ANON_KEY` en Netlify. Como el menú es público, usa la llave anon y deja que RLS decida; si la tabla tuviera datos privados, la búsqueda iría con verificación de sesión (m4-c19).
- **Conecta el input** con debounce de 300 ms, mínimo dos caracteres y cancelación de la petición anterior.
- **Distingue los estados**: “escribe al menos 2 letras”, “buscando”, resultados, “no encontramos X” y error de red.

```sql
SELECT id, nombre, precio
FROM platillos
WHERE disponible = true
  AND nombre ILIKE '%' || $1 || '%'
ORDER BY nombre
LIMIT 20;
```

Cuando el menú crezca, cambia a texto completo. La columna se calcula sola y el índice GIN hace la búsqueda por palabras:

```sql
ALTER TABLE platillos
  ADD COLUMN busqueda tsvector
  GENERATED ALWAYS AS (
    to_tsvector('spanish', nombre)
  ) STORED;

CREATE INDEX idx_platillos_busqueda
  ON platillos USING GIN (busqueda);

SELECT id, nombre, precio
FROM platillos
WHERE busqueda @@ plainto_tsquery('spanish', $1)
ORDER BY ts_rank(busqueda, plainto_tsquery('spanish', $1)) DESC
LIMIT 20;
```

El vector usa solo `nombre` para que la migración funcione con el esquema actual; si tu tabla tiene una columna de descripción, agrégala dentro del `to_tsvector`.

```js
// netlify/functions/buscar-platillos.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

exports.handler = async (event) => {
  const q = (event.queryStringParameters?.q || '').trim();
  const limpio = q.replace(/[%_]/g, '');

  if (limpio.length < 2) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ resultados: [], motivo: 'consulta_corta' })
    };
  }

  const { data, error } = await supabase
    .from('platillos')
    .select('id, nombre, precio')
    .eq('disponible', true)
    .ilike('nombre', `%${limpio}%`)
    .order('nombre')
    .limit(20);

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'No se pudo buscar' })
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      resultados: data,
      motivo: data.length ? 'ok' : 'sin_resultados'
    })
  };
};
```

```js
const input = document.querySelector('#buscar');
const lista = document.querySelector('#resultados');
let temporizador;
let controlador;

function estado(texto) {
  lista.replaceChildren();
  const li = document.createElement('li');
  li.textContent = texto;
  lista.append(li);
}

function pintar(resultados, q) {
  if (!resultados.length) {
    estado(`No encontramos platillos para "${q}".`);
    return;
  }

  lista.replaceChildren();
  for (const p of resultados) {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} — $${p.precio}`;
    lista.append(li);
  }
}

input.addEventListener('input', () => {
  const q = input.value.trim();
  clearTimeout(temporizador);
  controlador?.abort();

  if (q.length < 2) {
    estado('Escribe al menos 2 letras.');
    return;
  }

  estado('Buscando…');
  temporizador = setTimeout(() => buscar(q), 300);
});

async function buscar(q) {
  controlador = new AbortController();
  try {
    const r = await fetch(
      `/.netlify/functions/buscar-platillos?q=${encodeURIComponent(q)}`,
      { signal: controlador.signal }
    );
    const { resultados } = await r.json();
    pintar(resultados, q);
  } catch (error) {
    if (error.name !== 'AbortError') {
      estado('No se pudo buscar. Intenta de nuevo.');
    }
  }
}
```

**Resultado esperado:** al escribir “ta” aparece la petición en *Network*; al seguir escribiendo rápido hasta “taco”, solo sale una petición, la de la pausa final. La respuesta trae máximo veinte filas y tres campos. “xyz” muestra “No encontramos platillos para xyz”, no una lista vacía sin explicación. Escribir `%` no devuelve la tabla entera.

**Advertencia:** nunca armes la consulta concatenando lo que escribe el usuario: `"... where nombre like '%" + q + "%'"` es una puerta abierta a inyección SQL (m4-a21). Usa parámetros o el cliente de Supabase, que los usa por ti. Tampoco devuelvas `select('*')`: puedes estar mandando el costo del proveedor o notas internas a cualquiera que abra *Network*. Y no quites el `LIMIT` “para que salgan todos”: una búsqueda sin límite es una descarga de la tabla con otro nombre.

### Díselo a la IA

> "Implementa un buscador de platillos para Tacos El Volcán. El filtro va en la base, no en el navegador: consulta `platillos` por nombre con `ILIKE` y `LIMIT` 20, devolviendo solo `id`, `nombre` y `precio` de los disponibles. Dame la función de Netlify completa y el JavaScript del input con debounce de 300 ms, mínimo 2 caracteres, cancelación con `AbortController` y estados separados para consulta corta, cargando, sin resultados y error. Explícame por qué un `ILIKE '%texto%'` no usa un índice B-tree y muéstrame la migración a texto completo con `tsvector` e índice GIN para cuando el menú crezca. Cierra con una prueba en Network y un `EXPLAIN ANALYZE` que compare las dos versiones."

### Ejercicios

**1. [opción múltiple]** ¿Por qué no conviene traer toda la tabla platillos al navegador y filtrar con JavaScript?
   - a) Porque el navegador no puede filtrar arreglos
   - b) Porque Supabase prohíbe hacer SELECT *
   - c) Porque transfiere y expone toda la tabla, no usa índices y empeora al crecer ✔
   - d) Porque JSON es más lento que SQL en cualquier caso

**2. [verdadero/falso]** "Un filtro ILIKE '%texto%' aprovecha el índice B-tree de la columna nombre."
   - Respuesta: FALSO — El comodín al inicio impide usar el índice B-tree: la base revisa la tabla. Para eso existe el texto completo con índice GIN o los índices de trigramas.

**3. [completar]** "El ____ espera unos milisegundos después de la última tecla; ____ cancela la petición anterior si el usuario sigue escribiendo."
   - Banco: `debounce` · `AbortController` · `timeout` · `LIMIT`
   - Respuesta: debounce / AbortController

**4. [relacionar]** Une cada elemento con su pareja:
   - ILIKE ↔ Coincidencia simple por patrón de texto
   - tsvector + GIN ↔ Búsqueda por palabras con índice
   - debounce ↔ Evita una petición por cada tecla
   - LIMIT 20 ↔ Corta el resultado a veinte filas

**5. [qué hace]** ¿Para qué sirve esta limpieza antes de buscar?

```js
const limpio = q.replace(/[%_]/g, '');
const patron = `%${limpio}%`;
```

   - a) Para quitar acentos y mayúsculas
   - b) Para limitar el resultado a veinte filas
   - c) Para convertir la búsqueda en texto completo
   - d) Para que % y _ no actúen como comodines del usuario ✔

---

## C21 — Depurar errores de backend con IA

### Concepto

Cuando algo falla en el backend, el error casi nunca dice dónde está el problema: dice **qué alcanzó a ver la última capa que se ejecutó**. Un 500 puede venir de una variable mal escrita o de una consulta a una columna que no existe; un 403, de una política de RLS que rechazó una escritura. Si le pides a la IA que lo arregle con esa información, va a adivinar. Y las adivinanzas en backend se pagan caras: desactivar RLS, meter la `service_role` en el navegador o reescribir algo que ya funcionaba.

Depurar es un trabajo de **ubicación**, no de creatividad. Antes de tocar una línea hay que responder una pregunta: ¿en qué capa se rompió? Estas son las cinco, con la señal que deja cada una:

- **Red**: la petición no llegó. URL mal escrita, DNS, CORS (m4-a18), timeout o internet del cliente. Señal: `Failed to fetch`, status 0, preflight bloqueado.
- **Autenticación**: no sabemos quién eres. Token ausente, vencido o de otro proyecto. Señal: 401.
- **Autorización y RLS**: sabemos quién eres, pero no puedes. Señal: 403, o un 200 con `[]` cuando esperabas filas (m4-b22).
- **SQL y base**: la consulta no se pudo ejecutar. Columna inexistente, tipo equivocado, `not null`, llave foránea, sintaxis. Señal: un `code` de Postgres como `23502`, `23503` o `42P01`.
- **Código**: la base respondió bien y tu función se cayó después. Un `undefined`, un JSON con otra forma, una variable que cambió de nombre. Señal: stack trace en los logs (m4-a25).

El mensaje completo importa más de lo que parece. Un error de Supabase trae `message`, `code`, `details`, `hint` y `status`; una línea de log trae hora, ruta, método, duración y un identificador de la petición. Cada campo descarta capas. Si copias solo la primera línea, la IA tiene que inventar el resto del diagnóstico.

Y hay una parte que ningún error trae: **el contexto**. Qué esperabas que pasara, qué pasó en su lugar, qué probaste, qué no tocaste, si estás en local o en producción y qué cambiaste justo antes. Esa información convierte una respuesta genérica en un diagnóstico. La IA es muy buena encontrando patrones; si le das medio patrón, encuentra el patrón equivocado.

Tres señales que conviene memorizar: un **401** dice *no sé quién eres*; un **403** dice *sé quién eres y no puedes*; un **200 con []** suele decir *te conozco, pero no te dejo ver estas filas*. Con eso ya descartaste media base de datos antes de abrir el chat.

Esto te importa aunque la IA escriba el código, porque tú decides si el arreglo es aceptable. Si sabes que el error está en RLS, una respuesta que empieza con *cambia el frontend* la rechazas sin discusión. Si sabes que es un `not null`, no aceptas que te propongan borrar la columna. El criterio es tuyo; la escritura puede ser de la IA.

### Analogía

Es llamar al plomero y decirle **se inunda la cocina**. Con eso llega con el material completo y empieza a romper pared a ver qué encuentra. Si en cambio le dices: sale agua por la pared detrás del calentador, solo cuando pongo la lavadora, es agua limpia, ya cerré la llave de paso y sigue, y no he tocado el baño, llega directo a la unión que falla. La fuga es el error; la pared es la capa; la lavadora es la condición que lo dispara; lo que ya probaste es el descarte. Y cuidado con el plomero que, para que deje de salir agua, te propone cortar la tubería principal: ese es el que desactiva RLS.

### Cómo se ve en la práctica

Este es un error real de Supabase al insertar un pedido. Léelo completo antes de pedir ayuda:

```json
{
  code: '42501',
  message: 'new row violates row-level security policy for table "pedidos"',
  details: null,
  hint: null,
  status: 403
}
```

El `42501` no es un problema de sesión: la petición llegó, el usuario está autenticado y Postgres la rechazó porque la tabla tiene RLS y no hay una política de `INSERT` que cubra esa fila. El arreglo es escribir la política que falta, no apagar RLS ni usar la llave maestra. Ahora compara con este otro resultado, que no trae error:

```http
GET /rest/v1/pedidos?select=id,total,estado
Status: 200 OK
Body: []
```

Si en el panel hay pedidos y la API devuelve una lista vacía, el problema tampoco es de sintaxis: es una política de `SELECT`, un filtro de más o la sesión equivocada. El código funcionó; el permiso no.

Con eso claro, el reporte se arma en seis pasos:

- Reproduce el fallo con la acción más pequeña posible: un clic, una petición, un registro.
- Copia el error **como texto**, no como captura: status, code, message, details, hint, stack y request id.
- Escribe en una línea qué esperabas y en otra qué pasó.
- Anota lo que ya probaste y lo que revertiste. *Ya revisé la llave* no es un dato; *cambié la llave y el error siguió* sí.
- Agrega entorno (local o producción) y el último cambio que hiciste antes del fallo.
- Pide hipótesis y una prueba que las descarte antes de pedir código.

**Verificación.** Una buena respuesta de la IA empieza nombrando la capa y el dato que la sostiene, y propone una prueba pequeña antes del arreglo. Si empieza con un bloque de código sin explicar por qué, pídele el diagnóstico primero.

**Resultado esperado.** Dos hipótesis ordenadas por probabilidad, una prueba para cada una y un cambio mínimo que puedas revertir. Nada de reescribir el archivo completo.

**Advertencia:** si la solución que te dan para un error de permisos es desactivar RLS, cambiar a `service_role` o abrir la tabla a todos, no es una solución: es cambiar un error visible por una fuga silenciosa (m4-a29).

### Díselo a la IA

> "Estoy depurando un error en el backend de Tacos El Volcán (Supabase + Netlify Functions). No me des código todavía. Primero ayúdame a ubicar la capa.
>
> Síntoma: [qué acción hice y qué vi]. Error exacto: [pega status, code, message, details, hint y el stack completo]. Petición: [método, ruta y body sin datos personales]. Esperaba: [qué debía pasar]. Pasó: [qué pasó]. Ya probé: [lista de cosas, con resultado]. No he tocado: [lo que sigue igual]. Entorno: [local o producción]. Último cambio antes del fallo: [qué cambié].
>
> Dime en qué capa está el problema (red, autenticación, RLS, SQL o código) y qué dato exacto del error te lo indica. Después dame las dos hipótesis más probables, ordenadas, y para cada una una prueba pequeña que la confirme o la descarte. Solo cuando una hipótesis quede confirmada, dame el cambio mínimo y cómo verificarlo. No desactives RLS, no uses la llave service_role en el frontend y no reescribas archivos completos."

Si la IA te hace preguntas antes de responder, es buena señal: está buscando el dato que falta en vez de rellenarlo con una suposición.

### Ejercicios

**1. [opción múltiple]** Tu función inserta un pedido y recibe <code>status 403</code> con <code>code 42501</code>. ¿Qué capa falló?
   - a) Red: la petición nunca salió del navegador
   - b) Autenticación: el token no existe o venció
   - c) Permisos de la base: una política de RLS rechazó la escritura ✔
   - d) SQL: la consulta tiene un error de sintaxis

**2. [verdadero/falso]** "Si la API responde 200 con una lista vacía, la consulta tiene un error de sintaxis y hay que reescribirla."
   - Respuesta: FALSO — Un 200 con [] significa que la consulta se ejecutó bien y no devolvió filas. Las causas típicas son una política de RLS que filtra, un WHERE de más o una sesión distinta a la que crees. La sintaxis está bien; el permiso o el filtro no (m4-b22).

**3. [completar]** "El código ____ indica que falta una sesión válida o que venció; el ____ indica que la sesión existe pero la operación no está permitida."
   - Banco: `401` · `403` · `404` · `500` · `42501`
   - Respuesta: 401 / 403

**4. [relacionar]** Une cada elemento con su pareja:
   - Failed to fetch o status 0 ↔ La petición no salió: red o CORS
   - 401 ↔ No hay sesión válida o el token venció
   - 403 con code 42501 ↔ RLS rechazó la operación
   - 23502 ↔ Falta un valor obligatorio (not null)
   - TypeError: undefined ↔ El código recibió otra forma de datos

**5. [ordenar]** Ordena el procedimiento para depurar un fallo de backend sin adivinar:
   - Orden correcto: Reproducir el fallo con la acción más pequeña → Copiar el error completo como texto → Identificar la capa con el status y el code → Armar el reporte con esperado, obtenido y lo ya probado → Pedir dos hipótesis y una prueba para cada una → Aplicar el cambio mínimo y verificar

---

## C22 — PRÁCTICA: leer logs y encontrar la causa real

### Concepto

Un log es una línea que el sistema escribe solo cada vez que pasa algo. No es una opinión ni un resumen: es un registro con hora. En Netlify ves los logs de tus Functions (cada invocación, su status, su duración y lo que imprimió tu `console.log`); en Supabase ves los logs de la API, de Postgres, de Auth, de Storage y de las Edge Functions. Son dos vistas del mismo viaje: una desde la puerta y otra desde la cocina.

Una línea útil responde **cuándo, dónde y a quién**. Para eso necesita hora con zona, nivel (`INFO`, `WARN`, `ERROR`), función o ruta, método, status, duración y un `request_id` que permita pegar todas las líneas de la misma petición. Si tu función no imprime nada, el log de plataforma te dice que hubo un 500 pero no te dice por qué.

El error que ves en pantalla es un **síntoma**. El 500 es la respuesta final; la causa casi siempre está una o dos líneas antes, con el mismo `request_id`: la consulta que violó una restricción, el fetch que regresó 401, el objeto que llegó `undefined`. Y hay síntomas que ni parecen errores: una página que tarda cuatro segundos es síntoma; la causa puede ser una consulta sin índice (m4-b16) o una imagen de tres megas (m4-c25).

La hora engaña. Casi todos los logs de plataforma están en **UTC**, y en México son seis horas menos: un error a las 02:14 UTC es de las 20:14 del día anterior en CDMX. Si buscas en la ventana equivocada, concluyes que no hay logs cuando en realidad estabas mirando otro día.

**Lo que nunca debe aparecer en un log:** contraseñas, tokens completos, llaves, números de tarjeta, CURP, direcciones, teléfonos completos ni cuerpos de request con datos personales. Los logs los lee el equipo, los guarda el proveedor y, si los pegas en un chat de IA, los lee un tercero. Registra el id del cliente, no su historial. Y no confundas logs con respaldo: la retención es de días, no de años, y desaparecen con el proyecto (m4-c23).

Leer logs es lo que separa *ya funciona otra vez* de *sé qué lo tumbó y no va a volver a pasar*. La diferencia entre esas dos frases es la diferencia entre un negocio que aprende y uno que reza.

### Analogía

Es la **caja negra de un camión de reparto**. Cuando el camión llega con la puerta abollada, la caja negra no escribe *choqué*: escribe que a las 14:31:58 se abrió la puerta trasera, a las 14:32:03 se detuvo el motor y a las 14:32:05 se encendió la alarma. El golpe es el síntoma; la puerta mal cerrada es la causa, y quedó registrada dos minutos antes. El mecánico no adivina: lee la caja en orden, con reloj en mano. Y la caja tampoco guarda la clave del chofer ni el número de la tarjeta con la que cargó diésel: si eso aparece ahí, el problema ya no es el golpe.

### Cómo se ve en la práctica

Estas cuatro líneas son de dos peticiones a la misma función. Lee primero las horas y después el contenido:

```sql
02:14:07.512Z INFO  [crear-pedido] POST /api/pedidos 202 412ms req=8f3c
02:14:08.990Z WARN  [crear-pedido] body sin cliente_id req=a91d
02:14:09.003Z ERROR [crear-pedido] insert pedidos: null value in column "cliente_id" violates not-null constraint req=a91d
02:14:09.004Z ERROR [crear-pedido] POST /api/pedidos 500 1870ms req=a91d
```

La petición `8f3c` salió bien: 202 en 412 ms. La petición `a91d` falló: el `WARN` de las 08.990 avisó que el cuerpo llegó sin `cliente_id`, el `ERROR` de las 09.003 dice que Postgres rechazó el insert y el 500 de las 09.004 es solo la respuesta final. La causa es el dato faltante; el 500 es el síntoma. Arreglarlo en la base (quitando el `not null`) sería tapar el problema: el formulario debe validar antes (m4-a21).

Así se investiga, en orden:

- Define la ventana en hora local y conviértela a UTC. *Ayer de 20:00 a 21:00 en CDMX* es *02:00 a 03:00 UTC*.
- En Netlify entra a **Logs → Functions**, elige la función `crear-pedido` y filtra por esa ventana.
- Toma el `request_id` de la petición que falló y sigue todas sus líneas.
- En Supabase entra a **Logs** y revisa **API** y **Postgres** en el mismo minuto: ahí ves si la petición llegó a la base y qué dijo.
- Arma una línea de tiempo, de la primera a la última línea, con hora UTC y hora local.
- Marca la primera línea anómala y escribe la causa en una frase. Si no puedes, falta un log: agrégalo con `request_id` y sin datos personales, y vuelve a reproducir.

**Verificación.** Después del arreglo, repite la misma acción: debe aparecer un 201 o 202 con duración parecida a las peticiones sanas, y ninguna línea `ERROR` de esa ruta en los siguientes diez minutos. Si el status cambió pero la duración se disparó, todavía hay algo.

**Resultado esperado.** Una línea de tiempo de una petición y una frase que explique la causa, no un *lo arreglé y ya*. Esa frase es lo que evita que el mismo error vuelva en tres semanas.

**Advertencia:** los logs no son un lugar privado y tampoco son un respaldo. Antes de pegarlos en una IA, quita correos, teléfonos, tokens y direcciones; y no cuentes con encontrar los de la semana pasada, porque la retención del plan gratuito es corta. Si necesitas auditoría, guarda un extracto propio en un lugar seguro.

### Díselo a la IA

> "Te pego un extracto de logs de una función de Netlify y de Supabase, ya redactado: sin tokens, correos, teléfonos ni direcciones. Quiero que: (1) agrupes las líneas por request_id y por minuto; (2) ordenes la línea de tiempo en UTC y en hora de CDMX; (3) marques la primera línea anómala; (4) separes el síntoma de la causa; (5) me digas qué dato falta para confirmar la causa y cómo obtenerlo. No propongas ningún cambio de código hasta que la causa esté sustentada por una línea del log.
>
> Contexto: la acción era [crear un pedido desde el formulario], esperaba [201] y ocurrió [500]. Logs: [pega aquí]."

Si la IA te responde *el error es el 500*, corrígela: el 500 es el reporte del accidente, no el accidente. Pídele que nombre la línea exacta donde empieza el problema.

### Ejercicios

**1. [qué hace]** ¿Cuál es la causa y cuál el síntoma?

```sql
02:14:08.990Z WARN  [crear-pedido] body sin cliente_id req=a91d
02:14:09.003Z ERROR [crear-pedido] insert pedidos: null value in column &quot;cliente_id&quot; violates not-null constraint req=a91d
02:14:09.004Z ERROR [crear-pedido] POST /api/pedidos 500 1870ms req=a91d
```

   - a) La causa es la falta de cliente_id; el síntoma es el 500 ✔
   - b) La causa es el 500; el síntoma es el WARN
   - c) La causa es la duración de 1870 ms; el síntoma es el POST
   - d) La causa es el request_id; el síntoma es el nivel ERROR

**2. [verdadero/falso]** "El status 500 que aparece al final del log es la causa del fallo."
   - Respuesta: FALSO — El 500 es la respuesta final, o sea el síntoma. La causa está en una línea anterior de la misma petición: el WARN del cuerpo incompleto o el ERROR del insert. Leer de abajo hacia arriba sin ordenar por hora es la forma más común de confundirlos.

**3. [completar]** "Para reconstruir una petición se usa el ____ que aparece en cada línea; y los logs de la plataforma suelen estar en hora ____, seis horas adelante de CDMX."
   - Banco: `request_id` · `UTC` · `status` · `nivel` · `local`
   - Respuesta: request_id / UTC

**4. [relacionar]** Une cada elemento con su pareja:
   - request_id ↔ Une las líneas de una misma petición
   - UTC ↔ Hora base de los logs; CDMX va seis horas atrás
   - 500 ↔ Síntoma: la petición terminó mal
   - WARN previo ↔ Pista de la causa antes del error final
   - Retención ↔ Días que el proveedor conserva los logs

**5. [ordenar]** Ordena la investigación de un error que solo conoces por el reporte del cliente:
   - Orden correcto: Elegir la ventana de tiempo y pasarla a UTC → Filtrar por la función o ruta que falló → Agrupar las líneas por request_id → Ordenar la línea de tiempo y ubicar la primera línea anómala → Separar el síntoma de la causa → Comprobar la causa con una reproducción controlada

---

## C23 — PRÁCTICA: dejar tus respaldos automatizados

### Concepto

Un respaldo no es un archivo que existe: es una copia de la que puedes **volver a levantar el negocio**. La diferencia se nota el día del problema. La idea general ya la trabajaste en (m4-b20); aquí la conviertes en algo que corre solo. Tener un archivo de 40 MB en una carpeta no sirve si al restaurarlo faltan las políticas de RLS, las fotos o la mitad de los pedidos. Lo que se prueba no es que el respaldo se creó, sino que **se restauró y la app volvió a funcionar**.

En Tacos El Volcán hay tres cosas que respaldar, y solo una vive en la base: las cinco tablas (`clientes`, `platillos`, `pedidos`, `pedido_items`, `resenas`), las fotos del bucket de Storage y la configuración (variables de entorno, funciones desplegadas, dominio). `pg_dump` baja la base completa, con esquema y datos, pero **no baja las imágenes**: en la tabla solo queda la ruta del archivo. Si restauras la base y no las fotos, el menú aparece con imágenes rotas.

La frecuencia se decide con dos preguntas: cuántos datos puedes perderte (RPO) y cuánto puedes tardar en volver (RTO). Para una taquería que recibe pedidos todo el día, perder un día de pedidos es grave; perder una hora, tolerable. Un respaldo diario a las 03:00 deja un RPO de 24 horas. Si cobras en línea, necesitas más frecuencia o point-in-time recovery, que es una función de planes pagados.

La retención importa tanto como la frecuencia. Si guardas solo la última copia y un error de borrado ocurre el lunes pero lo descubres el jueves, tus tres últimas copias ya traen el daño. Una política sana para un negocio pequeño: **7 diarios, 4 semanales y 12 mensuales**. La copia mensual te salva de errores silenciosos; la diaria te salva del accidente de ayer.

Y hay una regla que no se negocia: la copia tiene que vivir **fuera del proveedor**. Si tu único respaldo está en el mismo proyecto de Supabase, una suspensión de cuenta, un problema de facturación o un borrado del proyecto se lleva todo junto. La regla clásica es 3-2-1: tres copias, en dos lugares, una fuera. En la práctica: la base en Supabase, el dump en un bucket de AWS S3, Cloudflare R2 o Backblaze, y una copia mensual en un disco externo o en Drive. Automatizar es lo que separa un plan de una intención. Un workflow de GitHub Actions con un `cron` corre todos los días sin que nadie se acuerde; las credenciales viven en secretos, nunca en el repositorio. Los respaldos automáticos de Supabase Pro ayudan, pero su retención es corta y viven dentro del mismo proveedor: son la primera línea, no el plan completo.

**Advertencia:** un respaldo que nunca restauraste no es un respaldo, es una esperanza. Y si el respaldo, la base y las fotos están en la misma cuenta, no tienes tres copias: tienes una sola con tres nombres.

### Analogía

Es la **llave de repuesto de tu casa**. Si la guardas en el mismo llavero, el día que te quedes afuera tienes dos llaves adentro y ninguna en la mano: por eso la copia vive en casa del vecino, que es otro proveedor. Y si nunca la metiste en la cerradura, no sabes si la copiaron mal, si es de otra puerta o si la cerradura cambió desde entonces. La revisas cada tanto: abres, cierras, la devuelves. El día del apuro no estás aprendiendo a usar la llave; ya sabes que gira.

### Cómo se ve en la práctica

El respaldo mínimo de Tacos El Volcán son tres piezas: el volcado de la base, los archivos de Storage y la lista de variables de entorno (nombres, no valores). Empieza por la base, en PowerShell:

```js
# La cadena de conexión se toma de Database → Connection string
# y NO se escribe en un archivo del repositorio
$fecha = Get-Date -Format 'yyyy-MM-dd'
$env:DB_URL = 'postgresql://postgres.xxxx:TU_PASSWORD@aws-0-us-east-1.pooler.supabase.com:5432/postgres'

pg_dump $env:DB_URL --no-owner --no-privileges --format=custom --file=respaldo-volcan-$fecha.dump
```

`--format=custom` permite restaurar tablas sueltas con `pg_restore`; `--no-owner` evita que el dump exija los mismos roles de Supabase al restaurar en otro lado. Verifica que el archivo tenga las cinco tablas:

```sql
pg_restore --list respaldo-volcan-$fecha.dump | Select-String 'TABLE DATA'
```

Deben aparecer `clientes`, `platillos`, `pedidos`, `pedido_items` y `resenas`. Súbelo fuera de Supabase:

```js
aws s3 cp respaldo-volcan-$fecha.dump s3://respaldos-volcan/postgres/$fecha/ --sse AES256
```

Si usas Cloudflare R2 o Backblaze en vez de S3, agrega `--endpoint-url` con el que te den y el cifrado que soporte tu proveedor; el resto del flujo es igual.

Ahora automatízalo. Este workflow corre a las 09:00 UTC, que son las 03:00 en CDMX:

```sql
name: Respaldo diario de Tacos El Volcan
on:
  schedule:
    - cron: '0 9 * * *'
  workflow_dispatch:

jobs:
  respaldo:
    runs-on: ubuntu-latest
    steps:
      - name: Instalar cliente de Postgres
        run: sudo apt-get update && sudo apt-get install -y postgresql-client
      - name: Volcar la base
        env:
          DB_URL: ${{ secrets.SUPABASE_DB_URL }}
        run: pg_dump $DB_URL --no-owner --no-privileges --format=custom --file=volcan-$(date +%F).dump
      - name: Subir fuera de Supabase
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.S3_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.S3_SECRET }}
          AWS_DEFAULT_REGION: us-east-1
        run: aws s3 cp volcan-$(date +%F).dump s3://respaldos-volcan/postgres/ --sse AES256
```

La retención se configura con una regla de ciclo de vida del bucket: 90 días en la carpeta diaria, y una copia mensual que se queda un año en otra carpeta. No borres a mano la copia vieja hasta que la nueva esté verificada.

Si no usas GitHub, el Programador de tareas de Windows puede correr el mismo comando cada día; GitHub Actions es más confiable porque no depende de que tu computadora esté encendida.

El plan completo, en orden:

- Generar el dump diario con `pg_dump`.
- Verificar que el archivo abre y lista las cinco tablas.
- Subirlo a un bucket fuera de Supabase.
- Programarlo con GitHub Actions y secretos, no con la contraseña escrita.
- Configurar retención de 7 diarios, 4 semanales y 12 mensuales.
- Restaurar cada mes en un proyecto de prueba y comparar conteos.

**La parte que casi nadie hace: restaurar.** Una vez al mes, baja el respaldo más reciente y levántalo en un proyecto de prueba, nunca en el de producción. Si tienes Postgres local también sirve, pero un dump de Supabase trae políticas que usan el esquema `auth` y pueden fallar donde ese esquema no existe; un segundo proyecto de Supabase es el banco de pruebas más fiel.

```sql
$env:PRUEBA_URL = 'postgresql://postgres.xxxx:TU_PASSWORD@aws-0-us-east-1.pooler.supabase.com:5432/postgres'
pg_restore --no-owner --no-privileges --dbname=$env:PRUEBA_URL respaldo-volcan-2026-11-18.dump
psql $env:PRUEBA_URL -c "select (select count(*) from clientes) as clientes, (select count(*) from platillos) as platillos, (select count(*) from pedidos) as pedidos, (select count(*) from pedido_items) as items, (select count(*) from resenas) as resenas;"
```

Los números deben coincidir con los de producción al momento del respaldo. Si el respaldo es de las 03:00 y ya hubo pedidos después, la diferencia debe ser exactamente esos pedidos, no cientos. Después abre la app apuntando a la base restaurada y confirma que el menú, el login y el panel funcionan.

El calendario queda así: **diario** a las 03:00, automático; **lunes**, revisar que el archivo de ayer existe y pesa lo esperado; **mensual**, restaurar y comparar conteos; **trimestral**, simular la caída total, medir cuánto tardas (RTO) y corregir el plan. Anota cada prueba con fecha y resultado.

**Verificación.** El respaldo está probado cuando puedes decir: restauré, conté las cinco tablas, abrí la app y tardé X minutos. Si solo puedes decir *el archivo está en el bucket*, todavía no tienes respaldo.

**Resultado esperado.** Un dump diario fuera de Supabase, una regla de retención, un recordatorio mensual y una restauración documentada con conteos que coinciden.

**Advertencia:** no pongas la cadena de conexión ni las llaves del bucket en el repositorio, ni siquiera en un archivo que después borras: el historial de Git las conserva. Y recuerda que las fotos no vienen en `pg_dump`; un plan que solo respalda la base deja el menú sin imágenes.

### Díselo a la IA

> "Actúa como DBA de un negocio pequeño. Mi proyecto es Tacos El Volcán en Supabase (plan [gratuito o Pro]) con las tablas clientes, platillos, pedidos, pedido_items y resenas, más un bucket de Storage con las fotos del menú. Diseña un plan de respaldo que cumpla 3-2-1: (1) el comando pg_dump para Windows, sin credenciales escritas; (2) un workflow de GitHub Actions con cron en UTC equivalente a las 03:00 de CDMX, usando secretos; (3) un destino fuera de Supabase y cifrado; (4) retención de 7 diarios, 4 semanales y 12 mensuales; (5) un procedimiento de restauración paso a paso con verificación de conteos y una prueba de la app. Dime qué NO cubre el plan, por ejemplo las imágenes, y cómo cubrirlo. Si algún límite depende de mi plan, pregúntame en vez de asumirlo."

Pídele también que te diga cuánto tarda una restauración completa. Ese número es tu RTO y es la diferencia entre negociar con calma y perder el fin de semana.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es la única prueba real de que un respaldo sirve?
   - a) Que el archivo exista en el bucket
   - b) Que pese más de 10 MB
   - c) Que lo hayas restaurado en otra base y la app funcione ✔
   - d) Que el proveedor diga que está completo

**2. [verdadero/falso]** "Un respaldo guardado dentro del mismo proyecto de Supabase protege contra la suspensión o el borrado de la cuenta."
   - Respuesta: FALSO — Si la cuenta o el proyecto desaparecen, el respaldo se va con ellos. La copia tiene que vivir fuera del proveedor; por eso la regla 3-2-1 pide al menos una copia en otro lugar.

**3. [completar]** "La regla 3-2-1 pide ____ copias de los datos, en ____ lugares distintos, y al menos una ____ del proveedor principal."
   - Banco: `tres` · `dos` · `fuera` · `dentro` · `cifrada`
   - Respuesta: tres / dos / fuera

**4. [relacionar]** Une cada elemento con su pareja:
   - RPO ↔ Cuántos datos puedes perderte
   - RTO ↔ Cuánto tardas en volver a operar
   - Retención ↔ Cuántas copias guardas y por cuánto tiempo
   - 3-2-1 ↔ Tres copias, dos lugares, una fuera
   - pg_restore ↔ Levantar un dump en otra base

**5. [ordenar]** Ordena un simulacro de restauración mensual:
   - Orden correcto: Elegir el respaldo más reciente que no esté corrupto → Crear un proyecto o base de prueba separada → Restaurar el dump con pg_restore → Comparar los conteos de las cinco tablas → Abrir la app apuntando a la base restaurada → Anotar el tiempo total y corregir el plan

---

## C24 — PRÁCTICA: exportar todos tus datos

### Concepto

Exportar y respaldar se parecen, pero no son lo mismo. Un respaldo existe para **volver** (m4-c23); un export existe para **llevarte** los datos a otro lado: a una hoja de cálculo, a otra plataforma o a las manos de un contador. Los dos tienen que estar completos, y los dos se prueban abriéndolos, no mirando que el archivo exista.

La confusión más cara es creer que un CSV por tabla es *tus datos*. Un CSV guarda **filas**; el esquema guarda las **reglas**: los tipos de cada columna, la llave primaria, las llaves foráneas, los índices, las restricciones y las políticas de RLS. Si solo te llevas los CSV, en el otro lado tienes cinco listas sueltas que no saben qué pedido pertenece a qué cliente. Reconstruir eso es arqueología, y se paga por hora.

Hay una tercera pieza que casi nadie exporta: las **imágenes**. En la base solo vive la ruta del archivo dentro del bucket; el archivo pesa megas y está en Storage. `pg_dump` no lo baja. Si te mudas con la base y sin las fotos, el menú queda con cuadros rotos y el respaldo se ve completo hasta que lo abres.

Los CSV tienen trampas de formato que sorprenden a todos. Excel convierte los teléfonos en números y les come el cero inicial, cambia las fechas según la configuración de la computadora y rompe los acentos si el archivo no está en UTF-8. Los campos con comas o saltos de línea necesitan comillas. Por eso: exporta en UTF-8, con encabezados, y revisa el resultado en un editor de texto antes de confiar en él. Abrirlo con doble clic no es revisarlo.

Exportar también es un derecho. Tus datos son tuyos y debes poder sacarlos sin pedir permiso ni esperar a que el proveedor te dé un botón. Y si un cliente te pide sus datos o su eliminación, tienes que poder encontrarlos en `clientes`, `pedidos`, `pedido_items` y `resenas`. Eso es parte de la Ley Federal de Protección de Datos Personales en México y de los derechos ARCO; en la práctica, es no tener datos regados en cinco lugares sin mapa.

Un export completo se reconoce por tres cosas: los conteos coinciden con la base, una muestra se puede reimportar sin errores y hay un manifiesto que dice qué contiene cada archivo, cuándo se generó y con qué hash. Sin eso, tienes una carpeta con archivos, no un export.

### Analogía

Es levantar la **cosecha de una parcela rentada**. Te llevas las cajas de jitomate, que son las filas en CSV, pero si no te llevas también el trazo de los surcos, las variedades sembradas y el calendario de riego, que son el esquema, el año siguiente tienes comida para un mes y ningún plan para volver a producir. Y hay una parte que no está en la parcela sino en el vivero: el injerto que compraste, que son las fotos en Storage. La cosecha es tuya y el dueño del terreno no te la puede retener, pero tampoco te la va a empacar.

### Cómo se ve en la práctica

El objetivo es una carpeta llamada `export-volcan-2026-11-18` que puedas entregar a otro proveedor sin pedir permiso. Usa la cadena de conexión en `$env:DB_URL`, igual que en la unidad m4-c23. Primero, una tabla por archivo, con encabezados y UTF-8:

```sql
psql $env:DB_URL -c "\copy (select * from clientes order by id) to 'clientes.csv' with (format csv, header true, encoding 'UTF8')"
psql $env:DB_URL -c "\copy (select * from platillos order by id) to 'platillos.csv' with (format csv, header true, encoding 'UTF8')"
psql $env:DB_URL -c "\copy (select * from pedidos order by id) to 'pedidos.csv' with (format csv, header true, encoding 'UTF8')"
psql $env:DB_URL -c "\copy (select * from pedido_items order by id) to 'pedido_items.csv' with (format csv, header true, encoding 'UTF8')"
psql $env:DB_URL -c "\copy (select * from resenas order by id) to 'resenas.csv' with (format csv, header true, encoding 'UTF8')"
```

Después, el esquema completo: tablas, tipos, llaves, índices, políticas RLS, funciones y triggers. Esto no incluye datos, y está bien: son las reglas.

```js
pg_dump $env:DB_URL --schema-only --no-owner --no-privileges --file=esquema-volcan.sql
```

Tercera pieza: las fotos. En el panel entra a **Storage → platillos** y descarga el bucket completo, o hazlo por código con la API de Storage. Guarda los archivos con la misma ruta que tienen en la base; si cambias los nombres, las URLs dejan de funcionar. Cuarta: el manifiesto con conteos y hash.

```sql
select (select count(*) from clientes) as clientes, (select count(*) from platillos) as platillos, (select count(*) from pedidos) as pedidos, (select count(*) from pedido_items) as items, (select count(*) from resenas) as resenas;
```

```js
Get-FileHash .\esquema-volcan.sql -Algorithm SHA256 | Format-List | Out-File manifiesto.txt
Get-ChildItem *.csv | ForEach-Object { $_.Name + ' ' + (Get-Content $_.FullName).Count } | Out-File manifiesto.txt -Append
```

Los usuarios de Auth no salen en esos CSV: se exportan desde **Authentication → Users** (o con la Admin API) a un archivo aparte. Ahí hay correos y metadatos personales, así que ese archivo lleva el mismo cuidado que la carpeta completa: cifrado y acceso limitado.

**Verificación.** Abre un CSV en un editor de texto: los acentos deben verse bien, los teléfonos deben conservar el cero inicial y las comas deben estar entre comillas. Compara los conteos del manifiesto con los de la base. Busca `POLICY` dentro de `esquema-volcan.sql` para confirmar que las políticas de RLS viajaron. Reimporta una tabla en una base de prueba y compara tres filas al azar. Cuenta las imágenes descargadas contra las rutas que aparecen en `platillos`.

**Resultado esperado.** Cinco CSV, un `esquema-volcan.sql`, una carpeta de imágenes y un `manifiesto.txt` con fecha, conteos y hash de cada archivo. Todo pesa lo que debe pesar y se puede abrir sin programas raros.

**Advertencia:** un CSV con clientes es datos personales. No lo dejes en Descargas, no lo mandes por correo y no lo subas a un repositorio público. Cifra la carpeta, guárdala en un lugar con acceso controlado y borra las copias de trabajo cuando termines. Exportar no es lo mismo que publicar.

### Díselo a la IA

> "Necesito exportar todo lo que hay en mi proyecto de Tacos El Volcán en Supabase para poder mudarme a otro proveedor sin perder nada. Dame: (1) comandos de PowerShell con psql para exportar clientes, platillos, pedidos, pedido_items y resenas a CSV en UTF-8 con encabezados; (2) el comando para el esquema completo, incluyendo políticas RLS, índices, funciones y triggers; (3) cómo exportar las imágenes del bucket y por qué no vienen dentro del dump; (4) un manifiesto con conteos y hash para verificar que el export está completo; (5) una lista de lo que NO queda en esos archivos, por ejemplo usuarios de Auth, secuencias y variables de entorno. Sin credenciales en los comandos y sin asumir nombres de tablas que no te di."

Cuando tengas el export, pídele que lo revise como si fuera el proveedor nuevo: si esa persona pudiera reconstruir el sistema solo con la carpeta, el export está completo.

### Ejercicios

**1. [opción múltiple]** Si solo exportas los CSV de tus tablas, ¿qué te falta para poder reconstruir el sistema en otro proveedor?
   - a) Nada: el CSV contiene todo
   - b) Las reglas: tipos, llaves, relaciones, índices y políticas RLS ✔
   - c) Los acentos, que se pierden siempre
   - d) El nombre del proyecto de Supabase

**2. [verdadero/falso]** "Un pg_dump de la base incluye las fotos guardadas en el bucket de Storage."
   - Respuesta: FALSO — El dump incluye las tablas y, dentro de ellas, la ruta del archivo; las imágenes viven en Storage y se descargan aparte. Si restauras solo la base, el menú queda con imágenes rotas.

**3. [completar]** "El CSV guarda las ____; el esquema guarda las ____; y las fotos del menú viven en ____, no dentro de Postgres."
   - Banco: `filas` · `reglas` · `Storage` · `llaves` · `funciones`
   - Respuesta: filas / reglas / Storage

**4. [relacionar]** Une cada elemento con su pareja:
   - clientes.csv ↔ Una fila por cliente, sin reglas ni relaciones
   - esquema-volcan.sql ↔ Tablas, llaves, índices y políticas RLS
   - bucket platillos ↔ Las fotos que el CSV no contiene
   - auth.users ↔ Correos y credenciales de los usuarios
   - manifiesto.txt ↔ Conteos y hash para comprobar el export

**5. [ordenar]** Ordena el export completo de Tacos El Volcán:
   - Orden correcto: Exportar cada tabla a CSV en UTF-8 → Exportar el esquema completo con pg_dump --schema-only → Descargar las imágenes del bucket → Contar filas y calcular el hash de cada archivo → Probar una muestra: reimportar una tabla y comparar → Guardar la carpeta cifrada fuera del equipo y del proveedor

---

## C25 — Costos: qué se paga realmente en un backend

### Concepto

Un backend no se cobra como una página: se cobra como un servicio. Hay una parte fija, que pagas aunque nadie entre, y una parte variable, que crece con el uso. Entender cuál es cuál te permite decidir si tu negocio aguanta el plan gratuito, si necesita el plan Pro o si el problema no es el plan sino una foto de tres megas que se sirve diez mil veces al mes.

En Supabase hay cinco medidores: **tamaño de la base**, **almacenamiento de archivos**, **egress** (los datos que salen hacia tus usuarios), **funciones** (invocaciones y tiempo de ejecución) y **usuarios activos**. En Netlify los medidores son parecidos: ancho de banda, minutos de build y uso de Functions. Los precios y los límites cambian; los que aparecen aquí son de referencia y hay que confirmarlos en la página de precios antes de firmar. Lo que no cambia es la lógica: alguien paga por lo que sale y por lo que se guarda.

El plan gratuito de Supabase alcanza para aprender y para un proyecto sin tráfico: alrededor de 500 MB de base, 1 GB de archivos, 5 GB de egress, 50 mil usuarios activos y dos proyectos, con pausa por inactividad. El Pro cuesta del orden de 25 dólares al mes por proyecto y sube los topes a 8 GB de base, 100 GB de archivos, 250 GB de egress y 100 mil usuarios, además de respaldos diarios y de quitar la pausa. Los excedentes se cobran por GB o por unidad, así que el Pro no es un techo infinito: es un plan con más margen.

Netlify cobra por banda ancha, builds y Functions. El plan gratuito trae del orden de 100 GB de banda al mes y 300 minutos de build; el Pro cuesta cerca de 19 dólares por persona y mes y multiplica esos topes. Si tu sitio es estático y las fotos salen de Supabase, el consumo de Netlify es bajo; si además sirve imágenes o corre muchas Functions, se suma.

Lo que crece con el uso no es parejo. Las filas de pedidos pesan kilobytes: mil pedidos son menos de un mega. Las fotos pesan cientos de kilobytes cada una y se descargan en cada visita. El egress es peso por visita: una foto de 2 MB servida 10,000 veces son 20 GB, y ahí se va el plan gratuito. Una función que se llama en cada tecla del buscador, o un bot que reintenta cada minuto, también inflan la factura sin que vendas más tacos.

Por eso conviene calcular el **costo por pedido**. Si el fijo son 44 dólares al mes y tienes 1,500 pedidos, cada pedido carga 3 centavos de infraestructura; con 3,000 pedidos carga la mitad. El fijo se diluye; el variable no perdona. Un negocio que cobra 150 pesos por pedido aguanta esos centavos sin problema, pero uno que regala el envío y sirve fotos sin optimizar puede pagar más de infraestructura que de margen. Vigilar la factura es una rutina, no un susto. Una revisión al mes, un límite de gasto configurado y una optimización a la vez bastan para no despertar con un cargo raro. Y ahí está la buena noticia: casi todo el costo evitable de un backend pequeño está en las imágenes y en las llamadas repetidas, no en la base de datos.

### Analogía

Es el **plan de datos de un celular**. Hay una renta fija, el plan, y un consumo que nadie mira hasta que se acaba: datos, minutos, roaming. El plan gratis es prepago con tope: no pagas, pero si se acaba el paquete te quedas sin servicio o te bajan la velocidad, y si no recargas te suspenden la línea. El Pro es renta mensual con paquete incluido y cobro por excedente. Y el consumo no lo hace la app: lo hacen las personas que la usan. Las fotos del menú son los videos que nadie cree que gastan datos hasta que llega el recibo.

### Cómo se ve en la práctica

Revisión mensual de Tacos El Volcán, con números de ejemplo. Así se ve un proyecto que ya se salió del plan gratuito, y no por la base:

- Base de datos: 620 MB. El tope gratuito es 500 MB; el Pro incluye 8 GB.
- Storage: 3.4 GB de fotos. El gratuito da 1 GB.
- Egress: 48 GB al mes. El gratuito da 5 GB; el Pro incluye 250 GB.
- Funciones: 220,000 invocaciones con 380 ms de promedio.
- Usuarios activos: 1,200 al mes, muy por debajo de cualquier tope.

El diagnóstico es claro: la base está apenas arriba, las fotos y la banda están muy arriba. Migrar a Pro resuelve el mes, pero no la tendencia. La cuenta queda así:

```js
Supabase Pro                  $25.00
Netlify Pro                   $19.00
Excedente de egress           variable
-------------------------------------
Fijo mensual                  $44.00

1,500 pedidos/mes  ->  $44 / 1,500 = $0.029 por pedido
3,000 pedidos/mes  ->  $44 / 3,000 = $0.015 por pedido
```

Ese cálculo es el costo fijo; los excedentes se suman aparte. Y si tu cuenta factura en México, al dólar hay que agregarle el impuesto y el tipo de cambio del día.

Las tres acciones que más bajan la factura, en orden:

- **Redimensionar las fotos antes de subirlas.** Un menú no necesita 4000 píxeles: con 1200 de ancho y formato WebP, una foto baja de 2 MB a 150-250 KB. Es el 90% del egress.
- **Servir la imagen transformada, no el original.** Con Storage puedes pedir una versión más chica: `https://tuproyecto.supabase.co/storage/v1/render/image/public/platillos/taco-pastor.jpg?width=800&quality=75`. La transformación es una función de planes pagados, pero aun así pesa mucho menos que el original.
- **Cachear y no repetir llamadas.** Encabezados de caché para las imágenes, `loading="lazy"` en la galería y un buscador con retraso (debounce) para no llamar a la función en cada tecla.

Para vigilar: en Supabase entra a **Settings → Usage** y revisa base, storage, egress y usuarios; en Netlify, a **Team → Usage** y a la configuración de facturación. Configura un límite de gasto o alerta para que el proveedor te avise antes de cobrar, no después. Aparta un proyecto para producción y otro para pruebas, y borra los experimentos que ya no uses: un proyecto olvidado también consume.

**Verificación.** Debes poder mostrar una hoja de una página con el fijo, el variable, el costo por pedido a 1,500 y a 5,000 pedidos, los tres rubros que más crecen y las tres acciones con su ahorro estimado. Si no sabes qué porcentaje del egress son imágenes, todavía estás adivinando.

**Resultado esperado.** Un número claro de cuánto cuesta operar un pedido, una alerta configurada y una optimización aplicada este mes. La factura deja de ser una sorpresa y se vuelve una decisión de diseño.

**Advertencia:** una tarjeta sin límite más un proyecto de prueba olvidado más fotos sin optimizar es la receta de la factura sorpresa. El plan gratuito tampoco es infinito: si lo rebasas, te suspenden o te cobran, y si el proyecto se pausa, tu app se cae aunque el código esté perfecto (m4-b21).

### Díselo a la IA

> "Estos son los números de mi backend este mes: base de datos [X MB], storage [X GB], egress [X GB], invocaciones de funciones [N] con duración promedio [X ms], y usuarios activos [N]. Mi negocio es Tacos El Volcán, espero 1,500 pedidos al mes y picos de 3,000 en diciembre. Estima la factura de Supabase y de Netlify separando costo fijo y costo variable, calcula el costo por pedido en los dos escenarios e identifica los tres rubros que más crecen. Propón tres acciones concretas para bajar el egress sin perder calidad de imagen y dime qué alerta o límite configurar. Si un precio o un límite depende del plan o cambió, dilo y pídeme el dato en vez de inventarlo."

Pídele que te muestre el cálculo, no solo el total. Un total sin desglose no se puede discutir; un desglose sí, y casi siempre revela que el problema son las fotos.

### Ejercicios

**1. [opción múltiple]** ¿Qué rubro suele crecer más rápido y con menos aviso en un sitio como el de Tacos El Volcán?
   - a) Las filas de pedidos, porque cada pedido pesa megabytes
   - b) El egress, porque cada visita descarga las fotos del menú ✔
   - c) Los usuarios de Auth, porque la base los cobra por hora
   - d) Los respaldos, porque se guardan dentro de la misma base

**2. [verdadero/falso]** "En el plan gratuito de Supabase puedes crecer sin límite de banda ancha; lo único que cambia al pasar a Pro es el número de proyectos."
   - Respuesta: FALSO — El plan gratuito tiene topes de base, storage, egress y usuarios. Al rebasarlos, el proyecto se degrada o se pausa, y la app deja de responder. Pro sube los topes y agrega respaldos y soporte, pero tampoco es ilimitado: los excedentes se cobran.

**3. [completar]** "El costo ____ se paga aunque nadie use la app; el costo ____ crece con el consumo, sobre todo con el ____ de las imágenes."
   - Banco: `fijo` · `variable` · `egress` · `storage` · `soporte`
   - Respuesta: fijo / variable / egress

**4. [relacionar]** Une cada elemento con su pareja:
   - Egress ↔ Peso de la imagen por veces que se sirve
   - Storage ↔ Fotos y archivos guardados
   - Funciones ↔ Invocaciones y tiempo de ejecución
   - Usuarios activos ↔ Personas que inician sesión al mes
   - Respaldos ↔ Copias retenidas y días de historial

**5. [ordenar]** Ordena la revisión mensual de costos:
   - Orden correcto: Entrar a Usage de Supabase y de Netlify → Anotar base, storage, egress, invocaciones y usuarios → Separar costo fijo de costo variable → Calcular el costo por pedido con el volumen del mes → Comparar con el mes anterior y detectar el rubro que creció → Aplicar una optimización y ajustar el límite de gasto

---

## C26 — PRÁCTICA: medir y arreglar una consulta lenta

### Concepto

«Está lento» no es un diagnóstico, es una queja. Un diagnóstico tiene número: 4,312 milisegundos, 18,234 filas revisadas para devolver 12. La diferencia importa porque solo lo segundo se puede arreglar y luego volver a medir para comprobar que el arreglo sirvió. Medir no es un paso de lujo del oficio: es lo que separa «creo que ya quedó» de «tardaba 4.3 segundos y ahora tarda 84 milisegundos».

La herramienta se llama `EXPLAIN ANALYZE`. Se escribe delante de la consulta y la base no solo la planea: la ejecuta y te devuelve el plan real, nodo por nodo, con el tiempo que se llevó cada uno y cuántas filas tocó. Dos palabras del resultado lo dicen casi todo: **Seq Scan** significa que la base recorrió la tabla completa, fila por fila, porque no tenía otra forma de encontrar lo que le pediste; **Index Scan** significa que fue directo por el índice, como quien busca en el índice de un libro (m4-b16).

El dato que conviene recordar: un Seq Scan no es un error. Es correcto cuando de verdad necesitas casi toda la tabla —doce filas de doce— y es un desperdicio cuando pides doce de doscientas mil. La base elige Seq Scan porque no hay índice útil, porque el índice existe pero la consulta lo inutiliza (por ejemplo `where date(creado_en) = current_date`, que envuelve la columna en una función y borra la ventaja), o porque el planificador calcula que así conviene. Leer el plan es preguntarle a la base por qué decidió eso.

El protocolo es de laboratorio y tiene cuatro pasos: **medir**, **leer el plan**, **cambiar una sola cosa**, **volver a medir con la misma consulta y los mismos datos**. Si cambias el índice, la consulta y el `select *` al mismo tiempo, el número nuevo no te dice qué funcionó. Y si mides con la tabla de prueba de cuarenta filas, el índice no se va a notar: hay que medir con un volumen parecido al real.

Aquí es donde dirigir a la IA se vuelve distinto de copiarle. Ella escribe el índice en dos segundos; el juicio de qué medir, con qué datos y si el resultado devuelto es el mismo de antes, es tuyo. Pedirle el *antes* y el *después* —no solo el después— es la diferencia entre una consulta rápida y una consulta rápida que devuelve otra cosa.

### Analogía

Arreglar una consulta lenta sin medir es entrenar a un corredor a ojo. El entrenador serio no dice «se ve más rápido»: cronometra los cien metros, graba el video y lo revisa fotograma por fotograma para ver en qué zancada se pierde el paso. Eso es `EXPLAIN ANALYZE`: el cronómetro y el video juntos. El Seq Scan es ese fotograma donde el pie cae mal y arrastra medio segundo. El índice es corregir la pisada: un cambio, no cinco. Y la comprobación final es volver a correr exactamente los mismos cien metros, con el mismo cronómetro, y poner los dos tiempos lado a lado. Si además cambiaste la distancia, el número nuevo no significa nada.

### Cómo se ve en la práctica

Este es el reporte de ventas de los últimos treinta días de Tacos El Volcán, uno de los que más pesa en el panel del dueño:

```sql
select p.id, p.creado_en, sum(i.cantidad * i.precio_unitario) as total
from pedidos p
join pedido_items i on i.pedido_id = p.id
where p.creado_en >= now() - interval '30 days'
  and p.estado <> 'cancelado'
group by p.id, p.creado_en
order by p.creado_en desc;
```

Antes de tocar nada, se mide. El plan recortado dice esto:

```js
Seq Scan on pedidos p  (cost=0.00..6180.00 rows=18234 width=24)
                       (actual time=0.041..512.907 rows=18234 loops=1)
  Filter: ((creado_en >= (now() - '30 days'::interval))
           AND (estado <> 'cancelado'))
  Rows Removed by Filter: 181766
Execution Time: 4312.114 ms
```

La frase que lo explica todo es `Rows Removed by Filter: 181766`: la base abrió doscientas mil filas para quedarse con dieciocho mil, y tardó cuatro segundos. El arreglo es un índice en la columna por la que filtra, creado de forma que no bloquee las escrituras:

```js
create index concurrently idx_pedidos_creado_en
  on pedidos (creado_en);

analyze pedidos;   -- actualiza las estadísticas del planificador
```

Y se vuelve a medir con la misma consulta:

```js
Index Scan using idx_pedidos_creado_en on pedidos p
  (cost=0.42..1120.30 rows=18234 width=24)
  (actual time=0.038..41.220 rows=18234 loops=1)
Execution Time: 84.603 ms
```

De 4,312 ms a 84 ms: cincuenta y una veces más rápido, con las mismas 18,234 filas devueltas. Ese último detalle no es adorno: es la prueba de que el índice no cambió la respuesta. Si el filtro fuerte fuera el estado —solo el 2% de los pedidos están pendientes—, un índice parcial como `where estado = 'pendiente'` serviría todavía mejor, porque solo indexa lo que buscas.

**Advertencia:** `create index` normal bloquea las escrituras de la tabla mientras se construye; en producción usa `concurrently`, que no puede correr dentro de una transacción. Y no indexees «por si acaso»: cada índice se paga en cada `insert` y en cada `update`, y una tabla con nueve índices se vuelve lenta para escribir (m4-b16).

### Díselo a la IA

> "Esta consulta tarda 4.3 s sobre una tabla de 200,000 pedidos: [pega la consulta]. Te pego también el EXPLAIN ANALYZE completo: [pégalo]. Quiero que (1) me digas qué nodo se lleva el tiempo y por qué, (2) si hay un Seq Scan, expliques qué condición lo provoca, (3) propongas UN solo cambio, (4) me des el SQL exacto para aplicarlo sin bloquear escrituras, y (5) me des una tabla de antes y después con filas devueltas, tiempo del plan y tiempo total. No cambies el resultado de la consulta: dime cómo comprobar que devuelve exactamente las mismas filas."

Si la IA contesta «agregué un índice» sin darte los dos tiempos, no terminó el trabajo. El entregable es la comparación, no el índice.

### Ejercicios

**1. [opción múltiple]** ¿Qué te da EXPLAIN ANALYZE que EXPLAIN a secas no te da?
   - a) Ejecuta la consulta y reporta tiempos y filas reales de cada nodo ✔
   - b) El contenido completo de las filas devueltas
   - c) La estructura de la tabla con sus índices
   - d) Un índice recomendado listo para copiar

**2. [verdadero/falso]** "Un Seq Scan siempre indica un problema que hay que arreglar agregando un índice."
   - Respuesta: FALSO — Un Seq Scan es correcto cuando la consulta necesita casi toda la tabla. Solo es un problema cuando abre miles de filas para devolver unas cuantas.

**3. [completar]** "El nodo ____ recorre la tabla completa; el nodo ____ va directo por el índice."
   - Banco: `Seq Scan` · `Index Scan` · `Full Join` · `Merge`
   - Respuesta: Seq Scan / Index Scan

**4. [ordenar]** Ordena el protocolo para arreglar una consulta lenta:
   - Orden correcto: Medir la consulta con un volumen de datos parecido al real → Leer el plan y ubicar el nodo que se lleva el tiempo → Hacer un solo cambio: índice o reescritura → Volver a medir con la misma consulta y los mismos datos → Comparar filas devueltas y tiempos de antes y después

**5. [qué hace]** ¿Por qué el índice no ayuda a esa consulta?

```sql
create index idx_pedidos_fecha on pedidos (creado_en);

select count(*) from pedidos
where date(creado_en) = current_date;
```

   - a) Porque date(creado_en) envuelve la columna en una función y el índice de la columna queda inutilizable ✔
   - b) Porque count(*) nunca usa índices
   - c) Porque el índice se creó con el nombre equivocado
   - d) Porque current_date no existe en Postgres

---

## C27 — Migrar datos de un lado a otro sin perder nada

### Concepto

Migrar es mover datos que ya existen de un lugar o de una forma a otra: el Excel donde se llevaban los pedidos a la tabla `pedidos`, un proyecto de Supabase a otro, o una columna `telefono` con tres números dentro a una tabla de contactos. No es copiar y pegar. Es una operación con cuatro fases y un orden: **exportar, transformar, importar, verificar**.

**Exportar** es sacar el original sin tocarlo, en el formato más crudo posible: CSV, JSON, un dump. El original se queda quieto y sirve de referencia para comparar al final. **Transformar** es traducir: los encabezados del Excel a los nombres de tus columnas, el texto «$180.50» a `numeric(10,2)`, «12/03/2026» a una fecha real, «CDMX» a un id de catálogo. **Importar** es escribir en el destino. **Verificar** es demostrar que llegó todo.

La regla que evita desastres: se migra primero a un entorno de prueba —un proyecto aparte, una tabla de aterrizaje, una copia— y solo cuando los números cuadran se repite el procedimiento sobre producción, con respaldo verificado y una ventana de tiempo elegida (m4-b19, m4-c23). «Lo pruebo directo en producción porque son poquitos» es la frase que introduce la pérdida de datos.

Verificar no es que el script no marcó error. Un import puede terminar en «success» y haber perdido veinte filas porque un cliente no tenía teléfono y el `join` las descartó en silencio. Se verifica con números: cuántas filas había, cuántas llegaron, cuánto sumaban los totales de un lado y del otro, cuántos registros quedaron huérfanos, cuántos se duplicaron. Y con una muestra: veinte filas al azar, abiertas lado a lado.

Dos detalles técnicos que se cobran caro. Primero, el orden: las llaves foráneas obligan a importar padres antes que hijos —`clientes` y `platillos` antes de `pedidos`, y `pedidos` antes de `pedido_items` (m4-b8)—. Segundo, la idempotencia: si vuelves a correr el script, no debe duplicar. Se resuelve con una tabla de aterrizaje que se vacía, o con una llave de origen y `on conflict do nothing`. El dato memorable: los datos no se pierden en las filas que fallan, se pierden en las que se descartan sin que nadie las cuente.

### Analogía

Migrar datos es cambiar los peces de una pecera a otra. Nadie voltea la pecera sobre la nueva. Primero sacas agua a una cubeta limpia (exportar), aclimatas al pez y lo pasas con red (transformar), lo sueltas en la pecera nueva que ya está ciclada (importar) y vuelves a contar: entraron siete, hay siete (verificar). La pecera vieja sigue montada con su filtro encendido una semana más, por si algo salió mal. Y si al contar falta uno, no lo buscas en el piso: revisas la red, que es donde se quedan pegados.

### Cómo se ve en la práctica

El negocio tenía 1,200 pedidos en una hoja de cálculo y hay que llevarlos a las tablas de Tacos El Volcán. El primer paso es una tabla de aterrizaje: todo entra como texto, sin validar, para poder mirar lo que llegó antes de convertirlo.

```sql
create table pedidos_import (
  folio text,
  fecha text,
  telefono_cliente text,
  estado text,
  total text
);

\copy pedidos_import from 'pedidos.csv' with (format csv, header true);

select count(*) from pedidos_import;   -- 1200
```

Después se transforma y se importa, con una columna de folio de origen que sirve para rastrear cada fila y para no duplicarla si el script se corre dos veces:

```sql
alter table pedidos add column folio_origen text;
create unique index idx_pedidos_folio on pedidos (folio_origen);

insert into pedidos (folio_origen, cliente_id, estado, creado_en)
select i.folio,
       c.id,
       case lower(trim(i.estado))
         when 'pagado' then 'pagado'
         when 'entregado' then 'entregado'
         else 'pendiente'
       end,
       to_timestamp(i.fecha, 'DD/MM/YYYY HH24:MI')
from pedidos_import i
join clientes c on c.telefono = i.telefono_cliente
on conflict (folio_origen) do nothing;
```

Y esta es la parte que casi nadie escribe: la verificación. Cuatro números y una muestra, no un «ya quedó».

```sql
select
  (select count(*) from pedidos_import) as filas_origen,
  (select count(*) from pedidos where folio_origen is not null) as filas_destino,
  (select count(*) from pedidos_import i
     left join clientes c on c.telefono = i.telefono_cliente
     where c.id is null) as sin_cliente,
  (select count(*) from (
     select folio from pedidos_import group by folio having count(*) > 1
   ) d) as folios_repetidos;

-- esperado: 1200 | 1200 | 0 | 0
```

Si `sin_cliente` sale en 3, no lo arreglas en producción: esos tres clientes se crean antes o se corrige el CSV, y se vuelve a correr el mismo script. Como es idempotente, repetirlo no duplica nada. La suma del dinero se compara igual: el total del CSV contra `sum(cantidad * precio_unitario)` de los renglones migrados.

**Advertencia:** nunca corras una migración contra producción sin un respaldo que ya restauraste en algún lado (m4-b20, m4-c23); «tengo respaldo» sin restauración probada es una suposición. Y cuidado con el `truncate` de la tabla de aterrizaje: si escribes el nombre de la tabla real, no hay `where` que te salve. Prueba siempre en un proyecto aparte con una copia y, si los datos traen teléfonos o direcciones, usa una copia anonimizada.

### Díselo a la IA

> "Necesito migrar [N] registros de [origen: CSV de Excel / otro proyecto] a las tablas [nombres] de mi base. Trabaja en cuatro fases y no pases a la siguiente sin mi confirmación: (1) exportación y tabla de aterrizaje con todo como texto; (2) transformación con el mapeo columna por columna, incluyendo cómo convertir fechas y dinero; (3) importación idempotente, en el orden que exigen las llaves foráneas, con una columna de folio de origen para no duplicar; (4) verificación con consultas que comparen conteos, sumas, huérfanos y duplicados. Antes de ejecutar nada, dime qué filas se van a descartar y por qué. Asume que primero lo corro en un entorno de prueba, no en producción."

La frase de las filas descartadas es la que atrapa el error caro: un `join` que pierde registros no avisa, solo deja de contar.

### Ejercicios

**1. [opción múltiple]** ¿Cuál es el orden correcto de una migración?
   - a) Importar, exportar, verificar, transformar
   - b) Exportar, transformar, importar, verificar ✔
   - c) Verificar, importar, exportar, transformar
   - d) Transformar, verificar, exportar, importar

**2. [verdadero/falso]** "Si el script de importación terminó sin errores, puedes dar por hecho que todos los registros llegaron."
   - Respuesta: FALSO — Un join puede descartar filas en silencio y el script termina en success. Se verifica comparando conteos, sumas, huérfanos y duplicados.

**3. [completar]** "Antes de tocar producción, la migración se corre en un ____ con una copia; y el script debe ser ____ para que repetirlo no duplique filas."
   - Banco: `entorno de prueba` · `idempotente` · `respaldo` · `índice`
   - Respuesta: entorno de prueba / idempotente

**4. [relacionar]** Une cada elemento con su pareja:
   - Exportar ↔ Sacar el original sin tocarlo y guardarlo como referencia
   - Transformar ↔ Convertir formatos, nombres y tipos de dato
   - Importar ↔ Escribir en el destino respetando el orden de las llaves foráneas
   - Verificar ↔ Comparar conteos, sumas, huérfanos y duplicados

**5. [ordenar]** Ordena la importación para que ninguna llave foránea apunte a una fila que todavía no existe:
   - Orden correcto: clientes → platillos → pedidos → pedido_items

---

## C28 — Tu flujo completo de backend dirigido con IA

### Concepto

Ya tienes todas las piezas. Lo que falta no es otra herramienta: es el orden en que se usan. Un backend dirigido con IA se construye con un flujo de ocho pasos que se repite igual en cada proyecto, y ese flujo —no el código— es lo que te vuelve alguien capaz de construir el siguiente sistema sin empezar de cero.

Los ocho pasos: **brief**, qué debe recordar el sistema y qué preguntas del negocio debe contestar (m4-c1); **modelo**, entidades y relaciones en papel (m4-c2); **tablas**, SQL con tipos, llaves y restricciones (m4-c4); **RLS**, quién puede ver y escribir cada fila (m4-c11); **frontend**, conectar el sitio del Módulo 3 y mostrar datos reales (m4-c7); **función de servidor**, lo que necesita secreto o validación que el navegador no puede dar (m4-c15); **respaldo**, copia automática y restauración probada (m4-c23); **medición**, logs, tiempos y costo (m4-c22, m4-c26).

La regla que hace que funcione: **un paso por prompt, con su verificación, y no avanzar hasta que la verificación pase**. «Hazme el backend completo de una taquería» produce una avalancha de código que se ve impresionante y no puedes auditar: nadie sabe qué política quedó, ni si el respaldo existe, ni por qué el formulario guarda dos veces. Ocho prompts chicos con una prueba cada uno producen un sistema que entiendes y puedes defender.

Cada paso tiene además una pregunta distinta que hacerle a la IA. En el brief, que te haga preguntas a ti. En el modelo, que no escriba código todavía. En las tablas, que justifique cada tipo y cada restricción. En RLS, que te dé la política y la prueba con dos usuarios. En el frontend, que pida solo las columnas que la pantalla usa. En la función, que te diga dónde vive el secreto. En el respaldo, que te diga cómo restaurar, no solo cómo copiar. En la medición, que te diga qué número debe mejorar y cuánto es hoy.

El flujo también sirve para volver. Cuando algo se rompe seis meses después, no empiezas por el código: recorres los pasos hacia atrás hasta encontrar el primero que no cumple su verificación. Eso convierte un «se rompió todo» en una pregunta concreta: ¿el dato está?, ¿la política lo deja salir?, ¿la consulta lo pide bien?

### Analogía

Es la lista de verificación que el piloto canta antes de despegar. No importa que lleve diez mil horas: la lista está laminada, los pasos van siempre en el mismo orden, cada punto se dice en voz alta y se toca con el dedo. No es desconfianza del piloto, es que el orden es más confiable que la memoria. Saltarse «combustible» porque «ya lo revisé» es exactamente cómo se cae un avión que estaba bien. Y fíjate en la parte que casi nadie copia: la lista no dice «revisar», dice «verificar presión de aceite entre cuarenta y sesenta»: cada punto trae su número. Si un punto no cuadra, no se despega; se corrige ahí mismo.

### Cómo se ve en la práctica

Este es el flujo completo con su verificación al lado. La columna de la derecha es la que convierte el paso en algo terminado o no terminado:

```sql
BRIEF     qué debe recordar + 3 preguntas del negocio  → 1 página, cero código
MODELO    entidades, relaciones, cardinalidad         → cada pregunta tiene consulta
TABLAS    SQL con pk, fk, numeric(10,2), checks       → un insert inválido falla
RLS       políticas por tabla                         → A no ve lo de B
FRONTEND  conectar, formulario, estados vacío/error   → recargas y el dato sigue
FUNCIÓN   secretos, validación fuerte, API externa    → la llave no está en el bundle
RESPALDO  copia diaria + restauración probada         → restauraste y contaste filas
MEDICIÓN  logs, EXPLAIN ANALYZE, costo mensual        → número de antes y de después
```

Así se ve un prompt de un solo paso, el de RLS. Nota lo que pide y lo que prohíbe:

```sql
Paso 4 de 8: RLS. Tablas: pedidos y pedido_items.
Contexto: un cliente debe ver solo sus pedidos; el dueño ve todos.
Entrégame: las políticas de select, insert y update, y dos pruebas
con sesiones distintas (cliente A y cliente B). No avances al paso 5.
Si mi modelo no permite escribir esa política, dímelo antes.
```

En Tacos El Volcán ese flujo se ve así: el brief dice que el dueño necesita saber qué se vendió hoy; el modelo une `pedidos` con `pedido_items`; las tablas nacen con `precio_unitario` copiado; la política deja al cliente ver solo lo suyo; el formulario público inserta; una función de servidor manda el aviso por WhatsApp sin exponer la llave; el respaldo corre a las tres de la mañana; y el reporte se mide hasta bajar de cuatro segundos a menos de cien milisegundos.

**Advertencia:** la llave `service_role` no se pega en el chat, ni en el código del navegador, ni en una captura de pantalla (m4-a19, m4-c10): se salta RLS por completo. Y el respaldo no es el paso que se deja «para cuando haya tiempo»: es el único que se hace antes de tener algo que perder.

### Díselo a la IA

> "Actúa como mi arquitecto de backend y vamos a construir mi sistema en ocho pasos: brief, modelo, tablas, RLS, frontend, función de servidor, respaldo y medición. Reglas: en cada paso hazme máximo tres preguntas, espera mi confirmación, entrega solo el artefacto de ese paso y su verificación concreta, y no me des el paso siguiente hasta que yo escriba «verificado». Si detectas que un paso anterior quedó mal, detente y dímelo en vez de seguir. Empieza por el brief: pregúntame qué debe recordar el negocio y qué decisiones quiero poder tomar con esos datos."

Esa última instrucción —detenerse cuando un paso anterior está mal— es la que evita construir cuatro pisos sobre un cimiento flojo.

### Ejercicios

**1. [ordenar]** Ordena el flujo de construcción de un backend dirigido con IA:
   - Orden correcto: Brief: qué debe recordar el sistema → Modelo: entidades y relaciones → Tablas: tipos, llaves y restricciones → RLS: quién ve cada fila → Frontend: conectar y mostrar datos reales → Función de servidor para lo que necesita secreto → Respaldo automatizado y restauración probada → Medición: logs, tiempos y costo

**2. [opción múltiple]** ¿Cuál es la señal de que un paso del flujo terminó?
   - a) La IA dijo que ya quedó
   - b) El código compila sin errores
   - c) Su verificación pasó con datos reales ✔
   - d) La pantalla se ve bonita

**3. [verdadero/falso]** "Si el frontend esconde el botón de borrar para ciertos usuarios, ya no hace falta una política RLS en esa tabla."
   - Respuesta: FALSO — Esconder un botón es cosmético: cualquiera puede llamar a la API directamente. La política RLS es la que impide la operación en la base (m4-c11).

**4. [relacionar]** Une cada elemento con su pareja:
   - Brief ↔ Qué preguntas del negocio debe contestar el sistema
   - Tablas ↔ Tipos, llaves primarias, foráneas y restricciones
   - RLS ↔ Qué filas puede leer o escribir cada usuario
   - Función de servidor ↔ Secretos y validación que no pueden vivir en el navegador
   - Respaldo ↔ Copia automática y restauración comprobada

**5. [completar]** "Se avanza un ____ a la vez, con su ____, y no se pasa al siguiente hasta que pase."
   - Banco: `paso` · `verificación` · `deploy` · `índice`
   - Respuesta: paso / verificación

---

## C29 — El sistema completo: interfaz + servidor + datos

### Concepto

Un sistema completo son tres capas y un viaje de ida y vuelta. La **interfaz** es lo que la persona toca: el formulario de pedido, el botón, la lista del panel. El **servidor** es quien decide y valida: recibe la petición, comprueba quién eres, aplica las reglas y responde. Los **datos** son lo que sobrevive: las filas en las tablas, las imágenes en el bucket, el respaldo de anoche.

Sigue un pedido de Tacos El Volcán de principio a fin. Ana abre el sitio, arma su pedido y pulsa «Confirmar». Ese clic dispara un evento en el componente, y el componente llama al cliente de Supabase con un `insert` que lleva el id del cliente, el estado y los renglones. La petición sale con la llave `anon` y el token de su sesión (m4-b26). En el servidor, Postgres revisa la política RLS de `pedidos`: si el `cliente_id` del cuerpo no coincide con el usuario del token, la rechaza antes de escribir nada. Si pasa, inserta, un trigger calcula el total y el servidor devuelve `201 Created` con la fila nueva. La interfaz recibe ese objeto, muestra el folio y limpia el formulario. Diez segundos después, el panel del dueño —otra pantalla, otra sesión, otra política— ve el pedido aparecer (m4-c19). Y a las tres de la mañana, el respaldo se lleva una copia de todo (m4-c23).

Nombrar cada pieza es lo que te permite diagnosticar. «No guarda» puede ser: el componente no dispara el submit, el `insert` va a la tabla equivocada, la política lo rechaza, falta un `not null`, o el dato sí se guardó y la pantalla no se refrescó. Cinco causas, cinco lugares distintos. Si no sabes cómo se llama cada pieza, no puedes preguntar en cuál falló; si lo sabes, la pregunta se vuelve una prueba.

Antes de publicar se revisa el viaje completo, no las pantallas por separado: dos cuentas distintas (una no debe ver lo de la otra), una sesión cerrada (no debe ver nada), un formulario con datos malos (debe decirlo, no guardar), una imagen subida (debe servirse desde su bucket con su política) (m4-c14), y una restauración del respaldo (debe devolver los conteos). Ese recorrido es tu garantía; el diseño bonito es otra cosa.

La ventaja de pensar en capas es que el pánico se convierte en método: ante cualquier falla preguntas en qué capa se rompió, y esa pregunta tiene respuesta observable —un estado HTTP, un error en la consola, una fila que existe o no existe—.

### Analogía

Un sistema completo es un cajero automático. La pantalla y el teclado son la interfaz: te piden el monto y te muestran el recibo. El switch del banco es el servidor: verifica tu tarjeta, revisa tu saldo y autoriza o niega. La bóveda y el libro contable son los datos: el billete físico y el registro que dice que a las 19:42 retiraste quinientos. Si te quedas mirando la pantalla, no ves nada de lo que importa. Y la prueba de que el sistema está bien armado es la que casi nadie considera: si la red se cae justo entre «autorizado» y «entregar el billete», el cajero no puede haber descontado sin haber entregado, ni haber entregado dos veces. Cada capa sabe qué hacer cuando la de al lado falla, y todo queda anotado en el libro.

### Cómo se ve en la práctica

Esta es la pieza de interfaz que dispara el pedido. Fíjate en que pide de vuelta la fila creada y en que revisa el error antes de pintar nada:

```js
const { data, error } = await supabase
  .from('pedidos')
  .insert({ cliente_id: user.id, estado: 'pendiente' })
  .select('id, creado_en')
  .single();

if (error) {
  mostrar('No pudimos registrar tu pedido. Intenta de nuevo.');
  console.error(error.message);
  return;
}
mostrar('Pedido ' + data.id.slice(0, 6) + ' registrado');
```

Y este es el viaje completo cuando todo sale bien, con el nombre de cada pieza en su capa:

```sql
[UI]    click «Confirmar» → POST /rest/v1/pedidos
[SRV]   token válido · auth.uid() = 3f2a…
[DATA]  policy pedidos_insert: cliente_id = auth.uid()  ✓
[DATA]  insert → id 9c1e… · trigger total = 186.00
[SRV]   201 Created
[UI]    pinta folio 9c1e y limpia el formulario
```

Y así se ve el mismo viaje cuando la capa del servidor dice que no. La diferencia entre estos dos bloques es toda tu capacidad de depurar:

```js
[UI]    click «Confirmar» → POST /rest/v1/pedidos
[SRV]   401 Unauthorized · JWT expired
[UI]    «Tu sesión venció. Vuelve a entrar.»
```

Antes de publicar, esta es la revisión mínima. Cada punto se prueba, no se supone: entrar con una cuenta de cliente y crear un pedido; entrar con otra y comprobar que no lo ve; cerrar sesión y comprobar que la lista privada queda vacía; mandar el formulario con teléfono inválido; subir una foto de platillo y abrir su URL; y restaurar el respaldo en un proyecto aparte comparando los conteos.

**Advertencia:** probar con tu cuenta de dueño no prueba RLS: la política del dueño deja ver todo y todo va a parecer correcto. Prueba con dos cuentas de cliente y una sin sesión. Y si algo falla, no «arregles» apagando RLS (m4-c11): cambias un error visible por una fuga silenciosa.

### Díselo a la IA

> "Voy a recorrer un pedido de punta a punta en mi sistema y quiero el mapa de las tres capas con el nombre exacto de cada pieza: componente, evento, llamada al cliente, política RLS, tabla, trigger, función y bucket. Para cada paso dame el request y el response esperados, qué fila debe quedar en la base y qué error se ve si esa capa falla. Al final, una lista de verificación previa a publicar de diez puntos, cada uno con cómo se prueba y qué resultado es correcto. Si algo de mi diseño no cierra entre capas, dímelo antes de escribir código."

Pedir «qué error se ve si esta capa falla» es lo que te da un mapa de diagnóstico en lugar de un diagrama bonito.

### Ejercicios

**1. [ordenar]** Ordena el recorrido de un pedido por las tres capas:
   - Orden correcto: Ana llena el formulario y pulsa Confirmar → El componente llama a supabase.from('pedidos').insert(...) → La petición viaja con la llave anon y el token de su sesión → Postgres aplica la política RLS de pedidos → Se inserta la fila y el trigger calcula el total → El servidor responde 201 con la fila creada → La interfaz muestra el folio y el panel del dueño lo ve

**2. [relacionar]** Une cada elemento con su pareja:
   - Interfaz ↔ Componente, evento submit y estado de la pantalla
   - Servidor ↔ Política RLS, validación y función de servidor
   - Datos ↔ Tabla pedidos, bucket de imágenes y respaldo
   - Antes de publicar ↔ Probar con dos cuentas y una sin sesión

**3. [opción múltiple]** El pedido sí quedó en la tabla, pero la pantalla no lo muestra. ¿Dónde buscas primero?
   - a) En el render de la interfaz y en lo que devolvió la llamada, no en la base ✔
   - b) En el respaldo de la noche anterior
   - c) En la configuración de DNS del dominio
   - d) En los estilos del botón Confirmar

**4. [verdadero/falso]** "Si el panel del dueño ve todos los pedidos de todos los clientes, entonces RLS está mal configurado."
   - Respuesta: FALSO — La política del dueño puede permitir ver todo a propósito. Lo que se prueba es que un cliente no vea los pedidos de otro, y eso requiere dos cuentas de cliente.

**5. [qué hace]** La política exige que cliente_id = auth.uid(), pero otroId es de otro cliente. ¿Qué ocurre?

```js
const { data, error } = await supabase
  .from('pedidos')
  .insert({ cliente_id: otroId, estado: 'pendiente' })
  .select('id')
  .single();

if (error) return mostrar(error.message);
return mostrar(data.id);
```

   - a) El error llega en error, no se pinta ningún id y no se escribe la fila ✔
   - b) Se guarda la fila con cliente_id vacío
   - c) Se lanza una excepción que tumba la aplicación
   - d) Devuelve 201 sin fila y la interfaz muestra undefined

---

## C30 — Repaso + arranque del proyecto final del módulo

### Concepto

PRA-403 empezó con una pregunta que no tenía nada de técnica: ¿qué debería recordar tu negocio? De ahí salió todo lo demás. El brief definió qué se guarda y para qué (m4-c1); el modelo convirtió esa lista en tablas y relaciones (m4-c2); las tablas pusieron tipos, llaves y restricciones (m4-c4); RLS y el login decidieron quién ve qué (m4-c11, m4-c12); Storage guardó las imágenes (m4-c14); las funciones de servidor se quedaron con lo que no puede vivir en el navegador (m4-c15); el panel y el buscador le dieron al dueño una forma de trabajar (m4-c19, m4-c20). Después vinieron las partes que solo se valoran cuando fallan: leer logs (m4-c22), respaldar (m4-c23), exportar (m4-c24), migrar (m4-c27) y medir (m4-c26).

El proyecto final no es un examen de sintaxis: es la prueba de que el dato sobrevive al viaje. Un sistema de pedidos, citas o inventario para un negocio real, con seis cosas que ya sabes hacer: **login**, **RLS**, **panel**, **buscador**, **imágenes** y **respaldo**. Si esas seis están y se pueden demostrar, el proyecto está bien; si el diseño es espectacular y un cliente puede ver los pedidos de otro, no está.

«Demostrar» es la palabra clave. No se entrega una promesa. Se entrega: dos cuentas distintas donde cada una ve solo lo suyo, una cuenta sin sesión que no ve nada, un pedido creado desde la interfaz que aparece en la tabla y en el panel, una búsqueda que filtra en la base y no en el navegador (m4-c20), una imagen que se sirve desde su bucket, y un respaldo restaurado con los conteos intactos. Cada una de esas pruebas es una frase que puedes decir sin adjetivos.

El arranque es hoy y en este orden: una página de brief, el modelo de cuatro a seis tablas, el orden de construcción en seis sesiones y la checklist de entrega pegada donde la veas. No empieces por el diseño bonito ni por la pantalla que más te gusta: empieza por el dato que, si se pierde, te cuesta dinero.

Y una cosa más, la que de verdad te llevas del módulo: ya no dependes de que la IA acierte. Puedes pedirle, medirle, verificarlo y decirle que no. Eso es dirigir. El siguiente sistema que construyas —otro negocio, otro giro, otro país— va a usar este mismo flujo, y va a tardar la mitad.

### Analogía

Es entregar las llaves de una casa que construiste. No la entregas el día que tiene paredes: la entregas cuando abres y cierras cada puerta, pruebas cada llave en su cerradura, abres cada llave de paso y verificas que salga agua, y enciendes la luz de cada cuarto. Dejas una copia de las llaves con alguien de confianza y le muestras dónde están el registro de agua y el switch general: eso es el respaldo y la documentación. La casa puede tener los muebles que quieras; si una llave no abre, todavía no se entrega. Y el día que el nuevo dueño te llame porque algo gotea, no vas a adivinar: abres el plano y sabes qué tubería va a ese baño.

### Cómo se ve en la práctica

Esta es la checklist de entrega del proyecto final. Se marca con una prueba, no con una intención:

```sql
ENTREGA DEL PROYECTO FINAL · PRA-403

[ ] Brief de una página con las preguntas del negocio
[ ] Modelo de 4 a 6 tablas con pk, fk y tipos correctos
[ ] Login funcionando (registro, entrar, salir)
[ ] RLS activo en TODAS las tablas, con políticas de select/insert/update
[ ] Panel de administración con al menos un CRUD completo
[ ] Buscador que filtra en la base, no en el navegador
[ ] Imágenes en Storage con su política de lectura
[ ] Formulario público que valida y guarda de verdad
[ ] Respaldo automático + UNA restauración probada
[ ] Función de servidor para lo que necesita secreto
[ ] Prueba con 2 cuentas: A no ve lo de B
[ ] Prueba sin sesión: no ve nada privado
[ ] Datos de prueba borrados con WHERE, no con TRUNCATE
[ ] README de 10 líneas: qué hace, cómo se corre, cómo se restaura
```

Y estas son las consultas que respaldan las casillas más importantes. La primera encuentra renglones huérfanos; la segunda te da los números que vas a comparar antes y después de restaurar:

```sql
-- 1) integridad: ningún renglón apunta a un pedido inexistente
select count(*) as huerfanos
from pedido_items i
left join pedidos p on p.id = i.pedido_id
where p.id is null;          -- debe ser 0

-- 2) fotografía para comparar la restauración
select
  (select count(*) from clientes) as clientes,
  (select count(*) from pedidos) as pedidos,
  (select count(*) from pedido_items) as renglones,
  (select coalesce(sum(cantidad * precio_unitario), 0)
     from pedido_items) as vendido;
```

El plan de seis sesiones es el orden en que se construye, no una sugerencia. Cada sesión termina con su verificación:

```sql
S1  brief + modelo            → cada pregunta tiene su consulta
S2  tablas + datos de prueba  → un insert inválido falla
S3  login + RLS               → la cuenta B no ve lo de A
S4  panel + buscador          → el filtro corre en la base
S5  imágenes + función        → la URL sirve y la llave no se expone
S6  respaldo + pruebas + README → restauraste y los conteos cuadran
```

Hoy, antes de abrir el editor, escribe el brief. Una página, sin código, con tres preguntas que el negocio necesita contestar y una frase sobre quién puede ver qué. Ese documento es el que evita que las seis sesiones se conviertan en seis semanas de pantallas que no guardan nada.

**Advertencia:** un respaldo que nunca restauraste es una esperanza, no un respaldo (m4-b20). Antes de entregar, restaura en un proyecto aparte y compara los conteos. Y no borres los datos de prueba con un `delete` sin `where` ni con `truncate` sobre una tabla que ya tiene pedidos reales: usa un `where` que puedas leer en voz alta.

### Díselo a la IA

> "Actúa como jurado del proyecto final de PRA-403. Primero hazme doce preguntas de defensa, una a la vez, sobre mi sistema: modelo, RLS, login, panel, buscador, imágenes y respaldo. No me des la respuesta: anota mis fallas y al final dime a qué lección volver (por ejemplo m4-c11, m4-c20 o m4-c23). Después, con lo que fallé, ayúdame a escribir el brief de una página de mi proyecto y un plan de seis sesiones con un entregable verificable por sesión. No escribas código todavía: quiero el plan y la checklist."

Si el jurado te hace doce preguntas y contestas ocho con una prueba, ya tienes proyecto. Las otras cuatro son tu plan de la semana.

### Ejercicios

**1. [opción múltiple]** ¿Qué demuestra que RLS está bien configurado?
   - a) Que el botón de borrar no se vea para ciertos usuarios
   - b) Que con dos cuentas distintas cada una vea solo sus filas ✔
   - c) Que la tabla esté marcada como privada en el panel
   - d) Que la llave anon no aparezca en el código

**2. [verdadero/falso]** "Un respaldo es confiable cuando el archivo se generó sin errores."
   - Respuesta: FALSO — La confianza viene de haber restaurado ese respaldo y comparado los conteos. Un archivo que nunca se restauró es una esperanza (m4-b20).

**3. [completar]** "Antes de entregar se restaura el ____ en un proyecto aparte y se comparan los ____ de antes y después."
   - Banco: `respaldo` · `conteos` · `logs` · `índices`
   - Respuesta: respaldo / conteos

**4. [relacionar]** Une cada elemento con su pareja:
   - Login ↔ Quién eres
   - RLS ↔ Qué filas puedes ver o escribir
   - Panel ↔ Operar el negocio sin tocar SQL
   - Buscador ↔ Filtrar en la base, no en el navegador
   - Respaldo ↔ Recuperar el sistema después de una pérdida

**5. [ordenar]** Ordena el plan de seis sesiones del proyecto final:
   - Orden correcto: Brief y modelo → Tablas y datos de prueba → Login y RLS → Panel y buscador → Imágenes y función de servidor → Respaldo, pruebas y README

**6. [qué hace]** ¿Qué comprueba esta consulta?

```sql
select count(*) as huerfanos
from pedido_items i
left join pedidos p on p.id = i.pedido_id
where p.id is null;
```

   - a) Cuántos renglones apuntan a un pedido que no existe ✔
   - b) Cuánto se vendió en total
   - c) Qué clientes no han pedido nunca
   - d) Qué platillos están duplicados

**7. [opción múltiple]** El formulario público guarda bien y el panel del dueño funciona, pero un cliente puede ver el pedido de otro. ¿Cuál es la causa más probable?
   - a) Falta una política que compare cliente_id con auth.uid() ✔
   - b) Falta un índice en pedidos.cliente_id
   - c) El respaldo automático no corrió
   - d) El bucket de imágenes es privado

**8. [verdadero/falso]** "Si el proyecto se ve bien en pantalla y no marca errores en la consola, ya se puede entregar."
   - Respuesta: FALSO — Falta lo que no se ve: dos cuentas aisladas, sesión cerrada sin acceso, integridad sin huérfanos y un respaldo restaurado. Eso es lo que se entrega.

---
