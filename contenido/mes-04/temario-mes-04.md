# MES 4 — El motor por dentro: backend, datos y seguridad
## Temario completo (90 lecciones)

**Estructura:** 3 materias en paralelo, 1 lección de cada una por día (3 diarias ≈ 2 horas), 30 días + examen del módulo + proyecto final.

**Qué cambia este mes:** en el Mes 3 el alumno aprendió a construir lo que se ve. Este mes aprende lo que **no** se ve: dónde viven los datos, quién tiene permiso de tocarlos, y qué pasa entre que alguien aprieta un botón y la información aparece en pantalla.

Hasta ahora todo lo que construyó vivía en el navegador: si el visitante cerraba la pestaña, no quedaba nada. A partir de este módulo construye sistemas que **recuerdan**: con usuarios, con login, con información que persiste. Es el salto de "hacer páginas" a "hacer software".

Y es el módulo donde entiende por dentro lo que ya ha estado usando sin saber: por qué una base de datos se pausa, qué significa que una tabla tenga permisos, por qué una llave secreta nunca va en el código.

**Materias del Mes 4:**
- **BCK-401 — Del navegador al servidor** (HTTP, APIs, autenticación, seguridad)
- **DAT-402 — Bases de datos** (modelado, SQL, Supabase, permisos)
- **PRA-403 — Construye con IA IV** (práctica: un sistema completo de principio a fin)

---

## BCK-401 — Del navegador al servidor (30 lecciones)

| # | Lección |
|---|---|
| A1 | ¿Qué pasa realmente cuando tu app pide datos? |
| A2 | Cliente y servidor: quién hace qué y por qué importa |
| A3 | HTTP por dentro: la conversación completa |
| A4 | Los métodos: GET, POST, PUT, PATCH y DELETE |
| A5 | Códigos de estado: 200, 401, 404, 500 y los que vas a ver |
| A6 | Headers: los metadatos de cada petición |
| A7 | El cuerpo de la petición: JSON en acción |
| A8 | ¿Qué es una API? (y por qué hoy todo es una API) |
| A9 | REST: el estilo que domina la web |
| A10 | Endpoints: diseñar las ventanillas de tu sistema |
| A11 | Parámetros: query, path y body |
| A12 | Probar una API sin escribir código |
| A13 | Autenticación I: demostrar quién eres |
| A14 | Autenticación II: tokens y JWT explicados sin misterio |
| A15 | Autorización: una cosa es quién eres y otra qué puedes hacer |
| A16 | Contraseñas: por qué nunca se guardan tal cual |
| A17 | Sesiones vs tokens: dos formas de recordarte |
| A18 | CORS: el error que todo principiante sufre |
| A19 | Variables de entorno: dónde viven los secretos |
| A20 | Rate limiting: protegerte del abuso |
| A21 | Validación: nunca confíes en lo que manda el cliente |
| A22 | Webhooks: cuando el servidor te busca a ti |
| A23 | Serverless: backend sin administrar servidores |
| A24 | Node.js y Express en concepto |
| A25 | Logs: los ojos de tu servidor |
| A26 | Errores: cómo responder cuando algo falla |
| A27 | Documentar tu API para que otros (y tu IA) la entiendan |
| A28 | Versionado: cambiar sin romperle a nadie |
| A29 | Seguridad: las 5 fallas que más dinero cuestan |
| A30 | Repaso integrador del servidor (mega-quiz jugable) |

## DAT-402 — Bases de datos (30 lecciones)

| # | Lección |
|---|---|
| B1 | ¿Qué es una base de datos? (y por qué no es un Excel grande) |
| B2 | Relacional vs NoSQL: cuándo conviene cada una |
| B3 | Tablas, filas y columnas: el vocabulario base |
| B4 | Tipos de datos: elegir bien desde el principio |
| B5 | Llave primaria: la identidad de cada registro |
| B6 | Relaciones uno a muchos |
| B7 | Relaciones muchos a muchos |
| B8 | Llaves foráneas y la integridad de tus datos |
| B9 | `SELECT`: traer exactamente lo que necesitas |
| B10 | `WHERE`: filtrar con precisión |
| B11 | `ORDER BY` y `LIMIT`: ordenar y acotar |
| B12 | `INSERT`, `UPDATE`, `DELETE`: modificar con cuidado |
| B13 | `JOIN`: unir tablas para responder preguntas reales |
| B14 | Agregación: `COUNT`, `SUM`, `AVG` |
| B15 | `GROUP BY`: resumir información |
| B16 | Índices: por qué tu consulta tarda y cómo se arregla |
| B17 | Normalización sin dolor |
| B18 | Transacciones: todo o nada |
| B19 | Migraciones: cambiar la estructura sin romper lo que existe |
| B20 | Respaldos: la lección que casi nadie aprende a tiempo |
| B21 | Supabase por dentro: qué te da exactamente |
| B22 | Row Level Security: quién puede ver cada fila |
| B23 | Storage: guardar archivos e imágenes |
| B24 | Auth de Supabase: usuarios sin construirlo tú |
| B25 | Realtime: datos que se actualizan solos |
| B26 | Consultar la base desde el frontend |
| B27 | Modelar tu primer sistema de principio a fin |
| B28 | Los 6 errores de modelado que se pagan caro después |
| B29 | Cuándo NO necesitas una base de datos |
| B30 | Repaso integrador de datos (mega-quiz jugable) |

## PRA-403 — Construye con IA IV (30 lecciones)

| # | Lección |
|---|---|
| C1 | El brief de backend: describir un sistema que recuerda |
| C2 | **PRÁCTICA:** diseñar el modelo de datos de tu negocio |
| C3 | **PRÁCTICA:** crear tu proyecto en Supabase |
| C4 | **PRÁCTICA:** crear tus primeras tablas dirigiendo a la IA |
| C5 | Leer el SQL que la IA generó, línea por línea |
| C6 | **PRÁCTICA:** insertar y consultar tus primeros datos |
| C7 | **PRÁCTICA:** conectar tu sitio del Módulo 3 a la base |
| C8 | **PRÁCTICA:** un formulario que guarda de verdad |
| C9 | **PRÁCTICA:** mostrar datos reales en tu interfaz |
| C10 | Seguridad con IA: lo que nunca debes compartirle |
| C11 | **PRÁCTICA:** activar RLS y comprobar qué protege |
| C12 | **PRÁCTICA:** login de usuarios en tu sitio |
| C13 | **PRÁCTICA:** contenido solo para usuarios registrados |
| C14 | **PRÁCTICA:** subir imágenes a Storage |
| C15 | Pedirle a la IA una función de servidor |
| C16 | **PRÁCTICA:** tu primera función serverless |
| C17 | **PRÁCTICA:** consumir una API externa desde el servidor |
| C18 | Qué va en el navegador y qué va en el servidor |
| C19 | **PRÁCTICA:** panel de administración para tu negocio |
| C20 | **PRÁCTICA:** buscador que consulta la base de datos |
| C21 | Depurar errores de backend con IA |
| C22 | **PRÁCTICA:** leer logs y encontrar la causa real |
| C23 | **PRÁCTICA:** dejar tus respaldos automatizados |
| C24 | **PRÁCTICA:** exportar todos tus datos |
| C25 | Costos: qué se paga realmente en un backend |
| C26 | **PRÁCTICA:** medir y arreglar una consulta lenta |
| C27 | Migrar datos de un lado a otro sin perder nada |
| C28 | Tu flujo completo de backend dirigido con IA |
| C29 | El sistema completo: interfaz + servidor + datos |
| C30 | Repaso + arranque del proyecto final del módulo |

---

## Cierre del Mes 4

- **Examen del Módulo 4:** 40 preguntas de teoría y práctica de las tres materias
- **Proyecto final:** un sistema real y funcional para un negocio —de pedidos, de citas o de inventario— con: modelo de datos propio, login de usuarios, permisos por fila (RLS), un panel de administración, un buscador contra la base, carga de imágenes, y respaldo automatizado. Se entrega la URL del sistema, la del repositorio y el diagrama del modelo de datos.

## Conexión con los módulos anteriores

El proyecto de este módulo **es** el sitio del Módulo 3, al que ahora se le conecta un cerebro. Vive en el repositorio del Módulo 2 y se publica como desde el Módulo 1. Cuatro meses, un solo proyecto que crece.

## Lo que el alumno podrá hacer al terminar

Diseñar el modelo de datos de un negocio real, levantarlo en Supabase, protegerlo con permisos, conectarlo a una interfaz y entender —no solo ejecutar— lo que la IA hace cuando le pide "guárdame esto en la base de datos". Es el módulo donde deja de construir páginas y empieza a construir sistemas.
