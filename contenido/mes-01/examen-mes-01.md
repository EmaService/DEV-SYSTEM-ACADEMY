# EXAMEN DEL MES 1 — Fundamentos del mundo digital

**40 preguntas · Teoría y práctica · Aprobatorio: 70/100**
**Cada pregunta vale 2.5 puntos.**

> Notación de este archivo:
> - `✔` = respuesta correcta
> - `👤` = respuesta que dio el alumno
> - Cuando `✔` y `👤` están en la misma opción, el alumno acertó.

**Resultado del alumno rayfg96@gmail.com — presentado el 10 de agosto de 2026: 35/40 aciertos = 88/100 · APROBADO**

---

## BLOQUE A — La Máquina (14 preguntas)

**1.** ¿Qué componente ejecuta las instrucciones de un programa?
- a) La RAM
- b) El CPU ✔ 👤
- c) El disco duro
- d) La tarjeta de red

**2.** Un archivo de 4 GB, ¿cuántos MB son aproximadamente?
- a) 400 MB
- b) 4,000 MB ✔ 👤
- c) 40 MB
- d) 40,000 MB

**3.** Tu aplicación web se pone lenta cuando muchos usuarios entran al mismo tiempo. El servidor reporta 98% de uso de procesador. ¿Cuál es el cuello de botella?
- a) El disco
- b) La RAM
- c) El CPU ✔ 👤
- d) El ancho de banda

**4.** ¿Qué significa que la información de la RAM sea "volátil"?
- a) Que cambia de tamaño
- b) Que se borra al apagar el equipo ✔ 👤
- c) Que se corrompe con facilidad
- d) Que solo la lee el sistema operativo

**5.** Tienes internet de 200 megabits. ¿Cuánto tarda aproximadamente en descargar un archivo de 100 megabytes?
- a) Medio segundo
- b) 4 segundos ✔ 👤
- c) 100 segundos
- d) 2 minutos

*(200 megabits ÷ 8 = 25 megabytes por segundo; 100 ÷ 25 = 4 s)*

**6.** ¿Cuál de estos archivos contiene datos estructurados que viajan entre sistemas?
- a) logo.png
- b) datos.json ✔ 👤
- c) manual.pdf
- d) app.exe

**7.** `C:\Proyectos\tienda\imagenes\logo.png` — ¿qué tipo de ruta es?
- a) Relativa
- b) Absoluta ✔ 👤
- c) Simbólica
- d) Remota

**8.** Estás parado en `C:\Proyectos\tienda`. ¿Qué comando te lleva a `C:\Proyectos`?
- a) `cd tienda`
- b) `cd ..` ✔ 👤
- c) `cd /`
- d) `ls ..`

**9.** ¿Qué hace exactamente `rm -rf carpeta`?
- a) Renombra la carpeta
- b) Borra la carpeta y todo su contenido, sin confirmación ni papelera ✔ 👤
- c) Comprime la carpeta
- d) Mueve la carpeta a la papelera de reciclaje

**10.** Un tutorial te pide correr un comando que no reconoces. ¿Qué haces?
- a) Lo corres, para eso es el tutorial
- b) Lo corres con permisos de administrador para evitar errores
- c) Le pides a la IA que te explique qué hace antes de correrlo ✔ 👤
- d) Lo copias a un archivo de texto para después

**11.** ¿Por qué la mayoría de los servidores del mundo corren Linux?
- a) Porque es el único con terminal
- b) Porque es gratuito, estable y ligero ✔ 👤
- c) Porque Windows no soporta sitios web
- d) Porque lo exigen los navegadores

**12.** En `Ubuntu 24.04 LTS`, ¿qué implica el sufijo LTS?
- a) Que es una versión de prueba
- b) Que tiene soporte de largo plazo (varios años) ✔ 👤
- c) Que es de licencia comercial
- d) Que solo corre en servidores

**13.** Un proyecto declara `"react": "18.2.0"` en su `package.json`. ¿Qué significa ese archivo?
- a) La configuración del servidor
- b) La lista de dependencias y versiones que el proyecto necesita ✔ 👤
- c) El historial de cambios
- d) Las credenciales de acceso

**14.** ¿Qué comando descarga las dependencias declaradas en un proyecto de JavaScript?
- a) `git pull`
- b) `npm install` ✔ 👤
- c) `node start`
- d) `apt update`

## BLOQUE B — El Idioma del Código (14 preguntas)

**15.** ¿Cuál es la característica que mejor define a una computadora ejecutando instrucciones?
- a) Interpreta la intención del programador
- b) Hace exactamente lo que se le indica, sin interpretar ✔ 👤
- c) Corrige errores de lógica automáticamente
- d) Prioriza las instrucciones más importantes

**16.** ¿Qué lenguaje corre de forma nativa dentro de todos los navegadores?
- a) Python
- b) Java
- c) JavaScript ✔ 👤
- d) C++

**17.** ¿Cuál es la relación entre Java y JavaScript?
- a) JavaScript es la versión web de Java
- b) Son lenguajes distintos que solo comparten parte del nombre ✔ 👤
- c) Java es la versión moderna de JavaScript
- d) Son el mismo lenguaje con dos compiladores

**18.** ¿Para qué se usa Python principalmente hoy?
- a) Diseño gráfico y edición de video
- b) Inteligencia artificial, datos y automatización ✔ 👤
- c) Estilos y maquetación web
- d) Controladores de hardware

**19.** ¿Cuál de estas consultas SQL **no modifica** la base de datos?
- a) `DELETE FROM clientes WHERE id = 3`
- b) `UPDATE clientes SET activo = false`
- c) `SELECT nombre FROM clientes WHERE activo = true` ✔ 👤
- d) `INSERT INTO clientes (nombre) VALUES ('Ana')`

**20.** Lee esta consulta: `SELECT nombre, correo FROM alumnos WHERE mes_pagado = 1 AND examen_aprobado = true;` — ¿qué devuelve?
- a) Todos los alumnos del sistema
- b) El nombre y correo de los alumnos que pagaron el mes 1 **y** aprobaron el examen ✔ 👤
- c) El nombre y correo de los que pagaron el mes 1 **o** aprobaron el examen
- d) Solo la cantidad de alumnos que cumplen ambas condiciones

**21.** ¿Qué hace HTML en una página web?
- a) Define colores y tipografías
- b) Define la estructura: qué elementos hay y en qué orden ✔ 👤
- c) Ejecuta la lógica al hacer clic
- d) Conecta con la base de datos

**22.** ¿Por qué se dice que HTML no es un lenguaje de programación?
- a) Porque es muy fácil de aprender
- b) Porque no tiene variables, condicionales ni funciones ✔ 👤
- c) Porque no se compila
- d) Porque solo funciona en navegadores

**23.** Esta regla CSS: `h1 { color: red; font-size: 48px; }` — ¿qué hace?
- a) Pinta toda la página de rojo
- b) Aplica color rojo y tamaño 48px a todos los elementos `<h1>` ✔ 👤
- c) Crea un encabezado nuevo
- d) Cambia el fondo del encabezado

**24.** En CSS, si una regla general dice que los párrafos son negros y otra más específica dice que los del pie de página son grises, ¿cuál gana en el pie de página?
- a) La general, porque se declaró primero
- b) La más específica ✔ 👤
- c) Ninguna, se genera un conflicto
- d) La que tenga `!important`, siempre

**25.** ¿Qué palabra clave declara en JavaScript una variable que no va a cambiar?
- a) `let`
- b) `var`
- c) `const` ✔ 👤
- d) `static`

**26.** ¿Cuál es el resultado de `"7000" + 1` en JavaScript?
- a) `7001`
- b) `"70001"` ✔
- c) `NaN` 👤
- d) Error de sintaxis

*(Falló: `"7000"` es texto, así que JavaScript concatena en vez de sumar.)*

**27.** Observa: `const total = calcularTotal(7000, 12);` donde `calcularTotal` multiplica sus dos parámetros. ¿Cuánto vale `total`?
- a) 7012
- b) 84000 ✔ 👤
- c) 700012
- d) 583.33

**28.** ¿Qué tipo de dato es apropiado para guardar si un alumno aprobó o no un examen?
- a) String
- b) Number
- c) Boolean ✔ 👤
- d) Array

## BLOQUE C — Construye con IA (12 preguntas)

**29.** ¿Qué es un LLM?
- a) Un lenguaje de programación para IA
- b) Un modelo grande de lenguaje, entrenado con enormes cantidades de texto ✔ 👤
- c) Una base de datos de conocimiento verificado
- d) Un tipo de servidor especializado

**30.** ¿Cuál es la tarea fundamental para la que se entrena un LLM?
- a) Buscar información en internet
- b) Predecir qué palabra sigue en un texto ✔ 👤
- c) Clasificar imágenes
- d) Ejecutar código

**31.** ¿Cuáles son las cuatro piezas de un prompt bien construido?
- a) Saludo, pregunta, ejemplo, despedida
- b) Contexto, objetivo, restricciones, formato ✔ 👤
- c) Rol, tono, longitud, idioma
- d) Tema, subtema, referencia, cierre

**32.** ¿Qué es la ventana de contexto de un LLM?
- a) El navegador donde se ejecuta
- b) La memoria de trabajo de la conversación, que tiene un límite ✔ 👤
- c) El tiempo máximo de respuesta
- d) El historial completo de todas tus conversaciones

**33.** Llevas dos horas conversando con la IA y "olvida" un acuerdo del inicio. ¿Cuál es la mejor acción?
- a) Reiniciar la conversación desde cero y volver a explicar todo
- b) Re-anclar el acuerdo clave en un mensaje nuevo ✔ 👤
- c) Cambiar a otro asistente de IA
- d) Reducir la velocidad de tus mensajes

**34.** ¿Qué es una alucinación de IA?
- a) Un error de conexión con el servidor
- b) Información falsa presentada con total seguridad ✔ 👤
- c) Una respuesta que tarda demasiado
- d) Un bloqueo por políticas de contenido

**35.** ¿En cuál de estos casos hay MAYOR riesgo de alucinación?
- a) Pedirle que explique qué es una variable
- b) Pedirle el precio exacto y actual de un servicio ✔
- c) Pedirle que genere código que después vas a ejecutar 👤
- d) Pedirle que resuma un texto que tú le pegaste

*(Falló: el código se delata solo al ejecutarse; los datos específicos y recientes son el terreno más riesgoso.)*

**36.** Vas a tomar una decisión de dinero con base en un dato que te dio la IA. ¿Qué haces?
- a) Le preguntas dos veces para confirmar
- b) Verificas el dato en la fuente original ✔ 👤
- c) Consultas el mismo dato en otra IA y comparas
- d) Confías si la IA se muestra segura

**37.** ¿Qué significa "iterar" al construir con IA?
- a) Repetir el mismo prompt hasta que funcione
- b) Cambiar, probar, ajustar y volver a probar hasta llegar al resultado ✔ 👤
- c) Usar varias IAs en paralelo para el mismo problema
- d) Automatizar el envío de prompts

**38.** Le pides a la IA: "antes de darme el código, dime si este cambio puede romper algo más". ¿Qué buscas con eso?
- a) Que la respuesta sea más corta
- b) Que evalúe efectos secundarios antes de generar ✔ 👤
- c) Que consuma menos tokens
- d) Que use un modelo más potente

**39.** ¿Cuál es el mejor nombre para la carpeta de un proyecto web?
- a) `Mi Proyecto (final)`
- b) `mi-proyecto` ✔ 👤
- c) `MiProyecto_v2_FINAL`
- d) `proyecto nuevo 2026`

**40.** Al visitar un dominio sin especificar ninguna ruta, ¿qué archivo busca por defecto un servidor web?
- a) `home.html`
- b) `index.html` ✔ 👤
- c) `main.html`
- d) `default.html`

---

## Resultado

| Bloque | Aciertos |
|---|---|
| A — La Máquina | 14 / 14 |
| B — El Idioma del Código | 13 / 14 |
| C — Construye con IA | 8 / 12 |
| **Total** | **35 / 40** |

**Calificación: 88 / 100 — APROBADO**

**Preguntas falladas:** 26 (concatenación de tipos en JavaScript) y 35 (dónde alucina más una IA).

**Observación del sistema:** dominio sólido de fundamentos de máquina y del vocabulario de código. Área de refuerzo: los detalles finos del comportamiento de tipos en JavaScript y el criterio de verificación frente a la IA. Ambos temas se retoman en el Mes 2 (materia C) y en el Mes 5 (LLMs a fondo).
