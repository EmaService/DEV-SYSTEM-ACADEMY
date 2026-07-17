window.DEV_SYSTEM_LECCIONES = {
  "m1": {
    materias: {
      "a": {
        nombre: "La Máquina",
        icono: "🖥",
        lecciones: [
          {
            id: "m1-a1",
            titulo: "¿Qué es una computadora en realidad? (CPU, RAM, disco)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Una computadora no es magia: es una máquina que hace tres cosas, millones de veces por segundo — recibe información, la procesa siguiendo instrucciones, y entrega un resultado. Todo lo demás (pantalla, teclado, bocinas) son solo puertas de entrada y salida para esa información.</p><p>Por dentro, tres piezas hacen el trabajo pesado:</p><ul><li>El <strong>CPU</strong> (procesador) ejecuta las instrucciones. Cada clic que das se convierte en miles de operaciones que el CPU resuelve una por una, a una velocidad absurda.</li><li>La <strong>RAM</strong> (memoria) es donde la computadora tiene \"a la mano\" lo que está usando en este momento. Es rapidísima, pero se vacía cuando apagas el equipo.</li><li>El <strong>disco</strong> (almacenamiento) es donde viven tus archivos de forma permanente: fotos, programas, documentos. Más lento que la RAM, pero no olvida.</li></ul><p>Cuando abres un programa, la computadora lo copia del disco a la RAM para trabajar rápido. Cuando \"se traba\" tu compu, casi siempre es porque la RAM está llena o el CPU está saturado.</p><p>¿Por qué te importa esto si la IA va a programar por ti? Porque cuando un programa \"consume mucha memoria\" o \"el servidor se quedó sin RAM\", tú vas a entender exactamente de qué habla la IA — y vas a poder decidir: pagar un servidor más grande, o pedirle a la IA que optimice.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Una computadora es una <strong>cocina de restaurante</strong>. El CPU es el chef: el único que realmente cocina. La RAM es la mesa de trabajo: ahí pones los ingredientes que estás usando ahorita — entre más grande, más platillos a la vez. El disco es la alacena y el refri: todo se guarda ahí, pero tienes que ir por ello. Si la mesa está llena, el chef pierde tiempo yendo a la alacena a cada rato — y todo se hace lento.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cuando compres una laptop o rentes un servidor verás:</p><pre><code>CPU: 8 núcleos · RAM: 16 GB · Disco: 512 GB SSD</code></pre><p>Traducción: 8 chefs en paralelo, una mesa de 16 GB, y una alacena de 512 GB de las rápidas (SSD). En el Mes 9 rentarás servidores en la nube y estas tres cifras decidirán cuánto pagas.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Mi aplicación se está poniendo lenta. ¿Me ayudas a revisar si el problema es de CPU, de RAM o de disco? Explícame cómo verificarlo y qué opciones tengo en cada caso.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué componente ejecuta las instrucciones de un programa?", opciones: ["La RAM", "El CPU", "El disco", "La pantalla"], correcta: 1 },
              { tipo: "completar", frase: "Cuando abres un programa, se copia del ____ a la ____ para trabajar más rápido.", banco: ["RAM", "disco", "CPU", "navegador"], respuestas: ["disco", "RAM"] },
              { tipo: "relacionar", pares: [["CPU", "El chef que cocina"], ["RAM", "La mesa de trabajo"], ["Disco", "La alacena y el refri"], ["Pantalla", "La ventanilla donde sale el platillo"]] },
              { tipo: "vf", afirmacion: "La información en la RAM se conserva aunque apagues la computadora.", correcta: false, explicacion: "la RAM se vacía al apagar; lo permanente vive en el disco." },
              { tipo: "multiple", pregunta: "Tu compu \"se traba\" cuando tienes 40 pestañas abiertas. ¿Cuál es la causa más probable?", opciones: ["El disco está lleno", "La RAM está saturada", "El internet es lento", "La pantalla es chica"], correcta: 1 }
            ]
          },
          {
            id: "m1-a2",
            titulo: "Bits y bytes: el idioma de los unos y ceros (KB, MB, GB, TB)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Toda la información digital — fotos, videos, este texto, tu app favorita — está hecha de lo mismo: <strong>unos y ceros</strong>. Cada uno o cero es un <strong>bit</strong>, la unidad mínima de información. ¿Por qué unos y ceros? Porque los circuitos solo distinguen dos estados: pasa corriente (1) o no pasa (0). Con millones de esos interruptores, se representa cualquier cosa.</p><p>Ocho bits juntos forman un <strong>byte</strong>, suficiente para guardar una letra. Y de ahí, la escalera que ves todos los días:</p><ul><li><strong>1 KB (kilobyte)</strong> ≈ mil bytes — un párrafo de texto</li><li><strong>1 MB (megabyte)</strong> ≈ mil KB — una foto de celular ligera</li><li><strong>1 GB (gigabyte)</strong> ≈ mil MB — una película en calidad normal</li><li><strong>1 TB (terabyte)</strong> ≈ mil GB — el disco de una laptop moderna</li></ul><p>Detalle que confunde a todos: la velocidad de internet se mide en <strong>megabits</strong> (Mb) y los archivos en <strong>megabytes</strong> (MB). Un megabyte son 8 megabits — por eso con \"100 megas\" de internet no bajas 100 MB por segundo, sino unos 12.5.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Los bits son <strong>letras del alfabeto</strong>: una sola letra dice poco, pero combinadas forman palabras (bytes), párrafos (KB), libros (MB) y bibliotecas enteras (GB, TB). El idioma tiene solo dos letras — 0 y 1 — pero con suficientes combinaciones escribes cualquier cosa que exista digitalmente.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>foto-playa.jpg        3.2 MB\nvideo-boda.mp4        1.8 GB\nproyecto-tienda/      45 MB\nrespaldo-2026.zip     120 GB</code></pre><p>Con la escalera en mente, ya sabes: la foto pesa poco, el video es pesado, y ese respaldo no cabe en una USB de 64 GB.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Mi página web pesa 8 MB y tarda en cargar. ¿Qué archivos suelen pesar más y cómo los reduzco sin que se vea mal?\"</p></blockquote><p>(Spoiler: casi siempre son las imágenes. La IA te va a enseñar a comprimirlas.)</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda de menor a mayor:", elementos: ["bit", "byte", "KB", "MB", "GB", "TB"] },
              { tipo: "multiple", pregunta: "¿Cuántos bits tiene un byte?", opciones: ["2", "8", "100", "1000"], correcta: 1 },
              { tipo: "completar", frase: "Un circuito representa un 1 cuando ____ corriente y un 0 cuando ____.", banco: ["pasa", "no pasa", "se calienta", "se apaga"], respuestas: ["pasa", "no pasa"] },
              { tipo: "relacionar", pares: [["1 KB", "Un párrafo de texto"], ["3 MB", "Una foto de celular"], ["1 GB", "Una película"], ["1 TB", "El disco de una laptop"]] },
              { tipo: "vf", afirmacion: "Con internet de 100 megas descargas un archivo de 100 MB en un segundo.", correcta: false, explicacion: "100 megabits ≈ 12.5 megabytes por segundo; tardaría unos 8 segundos." }
            ]
          },
          {
            id: "m1-a3",
            titulo: "Archivos y extensiones: todo es un archivo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Todo lo que existe en una computadora es un archivo: tus fotos, los programas, las páginas web, hasta la configuración del sistema. Un archivo es información guardada con un nombre.</p><p>La <strong>extensión</strong> es el apellido del archivo: las letras después del punto. Le dicen a la computadora (y a ti) qué tipo de información contiene y con qué programa abrirlo:</p><ul><li><code>foto.png</code>, <code>foto.jpg</code> — imágenes</li><li><code>index.html</code> — página web</li><li><code>app.js</code> — código JavaScript</li><li><code>datos.json</code> — datos estructurados</li><li><code>documento.pdf</code> — documento</li><li><code>programa.exe</code> — ejecutable de Windows (¡ojo con los .exe desconocidos!)</li></ul><p>Cuando una IA programa por ti, se la vive creando y modificando archivos. Sus reportes dicen \"modifiqué <code>checkout.js</code> y creé <code>styles.css</code>\". Si reconoces las extensiones, entiendes qué tipo de pieza tocó: lógica, estilo, datos o estructura.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La extensión es el <strong>uniforme</strong> de cada archivo: ves a alguien con filipina blanca y sabes que es cocinero; ves un <code>.js</code> y sabes que es lógica de programa. Nadie confunde al doctor con el bombero por el uniforme — y tú ya no vas a confundir una imagen con un código.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Reporte típico de una IA ejecutora:</p><pre><code>Archivos modificados:\n  ✏ checkout.js      ← lógica de pago\n  ✏ styles.css       ← estilos visuales\n  + gracias.html     ← página nueva\n  + logo.png         ← imagen agregada</code></pre><p>Sin abrir nada, ya sabes qué tipo de cambio hizo en cada pieza.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Lista los archivos de mi proyecto agrupados por tipo (código, estilos, imágenes, datos, configuración) y dime en una línea para qué sirve cada uno.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [[".html", "Estructura de una página web"], [".js", "Código JavaScript"], [".png", "Imagen"], [".json", "Datos estructurados"], [".pdf", "Documento"]] },
              { tipo: "multiple", pregunta: "Una IA reporta que modificó <code>styles.css</code>. ¿Qué cambió?", opciones: ["La lógica del programa", "Los estilos visuales", "La base de datos", "Las imágenes"], correcta: 1 },
              { tipo: "completar", frase: "La extensión son las letras después del ____ y le dicen a la computadora qué ____ de información contiene.", banco: ["punto", "tipo", "nombre", "tamaño"], respuestas: ["punto", "tipo"] },
              { tipo: "vf", afirmacion: "Es seguro abrir cualquier archivo .exe que te llegue por correo.", correcta: false, explicacion: "un .exe es un programa ejecutable; uno desconocido puede ser un virus." },
              { tipo: "quehace", codigo: "productos.json", pregunta: "Ves este archivo en un proyecto: <code>productos.json</code>. ¿Qué esperas encontrar dentro?", opciones: ["Una foto de los productos", "Datos estructurados de productos (nombres, precios…)", "El diseño visual de la página", "Un video promocional"], correcta: 1 }
            ]
          },
          {
            id: "m1-a4",
            titulo: "Carpetas y rutas: la dirección exacta de cada cosa",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Las carpetas (los programadores les dicen <strong>directorios</strong>) organizan los archivos. Y la <strong>ruta</strong> (path) es la dirección exacta de un archivo dentro de esas carpetas:</p><pre><code>C:\\Proyectos\\mi-tienda\\imagenes\\logo.png</code></pre><p>Se lee: \"en el disco C, carpeta Proyectos, carpeta mi-tienda, carpeta imagenes, está logo.png\". En Windows las rutas usan <code>\\</code>; en Mac, Linux y en la web usan <code>/</code> — mismo concepto, distinto separador.</p><p>Dos rutas especiales que verás mil veces:</p><ul><li><strong>Ruta absoluta:</strong> desde el inicio del disco — <code>C:\\Proyectos\\mi-tienda\\index.html</code></li><li><strong>Ruta relativa:</strong> desde donde estás parado — si ya estás en <code>mi-tienda</code>, basta con <code>imagenes/logo.png</code></li></ul><p>Los proyectos se dibujan como <strong>árbol de archivos</strong>:</p><pre><code>mi-tienda/\n├── index.html\n├── styles.css\n└── imagenes/\n    └── logo.png</code></pre><p>Ese dibujito es el mapa de cualquier proyecto: las IAs lo usan constantemente para mostrarte qué hay y dónde.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La ruta es una <strong>dirección postal</strong>: país → estado → ciudad → calle → número. <code>C:\\Proyectos\\mi-tienda\\logo.png</code> es exactamente eso: disco → carpeta → subcarpeta → archivo. La ruta relativa es como decir \"aquí a la vuelta, casa 12\" — solo funciona si ya sabes dónde estás parado.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Dentro del código, las rutas conectan los archivos entre sí:</p><pre><code>&lt;img src=\"imagenes/logo.png\"&gt;\n&lt;link href=\"styles.css\"&gt;</code></pre><p>Esa página está diciendo: \"mi logo está en la carpeta imagenes, y mis estilos aquí junto\". Si alguien mueve <code>logo.png</code> a otra carpeta sin actualizar la ruta, la imagen se rompe — el clásico cuadrito de imagen rota es casi siempre una ruta equivocada.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Muéstrame el árbol de archivos de mi proyecto. Después dime si hay rutas rotas: imágenes o archivos que se referencian pero no existen donde se espera.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una ruta?", opciones: ["El tamaño de un archivo", "La dirección exacta de un archivo dentro de las carpetas", "El tipo de un archivo", "La velocidad de lectura"], correcta: 1 },
              { tipo: "completar", frase: "La ruta ____ empieza desde el inicio del disco; la ruta ____ empieza desde donde estás parado.", banco: ["absoluta", "relativa", "principal", "secundaria"], respuestas: ["absoluta", "relativa"] },
              { tipo: "quehace", codigo: "&lt;img src=\"imagenes/logo.png\"&gt;", pregunta: "En una página ves <code>&lt;img src=\"imagenes/logo.png\"&gt;</code> pero la imagen aparece rota. ¿Causa más probable?", opciones: ["La imagen pesa mucho", "El archivo no está en esa ruta", "El internet está lento", "La imagen es muy grande"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Acomoda la ruta de lo general a lo específico:", elementos: ["C:", "Proyectos", "mi-tienda", "imagenes", "logo.png"] },
              { tipo: "vf", afirmacion: "En la web y en Linux las rutas usan / en lugar de \\.", correcta: true, explicacion: "el \\ es cosa de Windows; todo lo demás usa /." }
            ]
          },
          {
            id: "m1-a5",
            titulo: "La terminal I: qué es, por qué existe y cómo abrirla en tu compu",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Antes de las ventanas y el mouse, a las computadoras se les hablaba escribiendo órdenes en una pantalla negra. Esa pantalla sigue existiendo, se llama <strong>terminal</strong> (también consola o línea de comandos), y es la herramienta favorita de los programadores — y de las IAs que programan.</p><p>¿Por qué sigue viva? Porque es directa y precisa: en vez de abrir 4 ventanas y dar 10 clics, escribes una línea y listo. Las órdenes escritas se llaman <strong>comandos</strong>.</p><p>Cómo abrirla en tu equipo:</p><ul><li><strong>Windows:</strong> tecla Windows → escribe \"PowerShell\" o \"Terminal\" → Enter</li><li><strong>Mac:</strong> Cmd + Espacio → escribe \"Terminal\" → Enter</li><li><strong>Dentro de VS Code</strong> (lo verás en la Materia C): menú Terminal → Nueva terminal</li></ul><p>Al abrirla verás algo como <code>C:\\Users\\TuNombre&gt;</code> parpadeando. Eso se llama <strong>prompt</strong> — la terminal diciéndote \"estoy lista, ordena\". (Sí, igual que el prompt de la IA: en ambos casos es \"el lugar donde escribes lo que quieres\".)</p><p>No necesitas dominar la terminal: necesitas <strong>perderle el miedo</strong>. Cuando la IA te diga \"abre la terminal y corre este comando\", sabrás exactamente qué hacer.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La terminal es el <strong>walkie-talkie del ejército</strong>: sin adornos, sin menús, pura orden directa. Las ventanas y botones son como pedir por WhatsApp con stickers — más bonito, pero más lento. El chef experimentado no pide del menú con fotos: le habla directo a la cocina con las palabras exactas.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Abriste la terminal en Windows y ves:</p><pre><code>Windows PowerShell\nCopyright (C) Microsoft Corporation.\n\nC:\\Users\\Ray&gt;</code></pre><p>Ese <code>C:\\Users\\Ray&gt;</code> te dice dos cosas: la terminal está lista, y estás \"parado\" en la carpeta del usuario Ray (¡una ruta! — lección A4). Todo comando que escribas se ejecuta desde ahí.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a seguir tus instrucciones desde la terminal de Windows (PowerShell). Antes de cada comando, dime qué hace en una línea. Si un comando es riesgoso, adviérteme antes.\"</p></blockquote><p>Regla de oro DEV SYSTEM: <strong>nunca corras un comando que no entiendes</strong>. Un comando puede instalar algo… o borrar algo.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es la terminal?", opciones: ["Un lenguaje de programación", "Una forma de darle órdenes escritas a la computadora", "Un tipo de archivo", "Un programa de diseño"], correcta: 1 },
              { tipo: "completar", frase: "Las órdenes que se escriben en la terminal se llaman ____, y el símbolo parpadeante que espera tu orden se llama ____.", banco: ["comandos", "prompt", "clics", "cursor web"], respuestas: ["comandos", "prompt"] },
              { tipo: "ordenar", instruccion: "Pasos para abrir la terminal en Windows:", elementos: ["tecla Windows", "escribir \"PowerShell\"", "presionar Enter"] },
              { tipo: "vf", afirmacion: "Hay que dominar la terminal de memoria antes de poder construir con IA.", correcta: false, explicacion: "necesitas reconocerla y perderle el miedo; la IA te da los comandos exactos." },
              { tipo: "quehace", codigo: "C:\\Users\\Ray&gt;", pregunta: "Ves <code>C:\\Users\\Ray&gt;</code> en la pantalla negra. ¿Qué significa?", opciones: ["La computadora tiene un error", "La terminal está lista y estás parado en la carpeta del usuario Ray", "Falta instalar un programa", "El usuario Ray no tiene permisos"], correcta: 1 }
            ]
          },
          {
            id: "m1-a6",
            titulo: "La terminal II: moverte con cd, ver con ls/dir",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya sabes qué es la terminal (A5). Ahora los dos comandos que vas a usar antes que cualquier otro: los que te dejan <strong>moverte</strong> entre carpetas y <strong>ver</strong> qué hay en cada una. Sin ellos, la terminal es una caja negra; con ellos, ya la navegas.</p><ul><li><code>cd</code> — <strong>Change Directory</strong>: cambia a otra carpeta. <code>cd Proyectos</code> te mete a Proyectos. <code>cd ..</code> te saca (los dos puntos son \"sube un nivel\"). <code>cd \\</code> (Windows) o <code>cd /</code> (Mac/Linux) te lleva a la raíz del disco.</li><li><code>ls</code> (Mac/Linux) o <code>dir</code> (Windows) — <strong>List</strong>: muestra el contenido de la carpeta donde estás parado. Archivos y subcarpetas en pantalla.</li></ul><p>En la moderna PowerShell de Windows, <code>ls</code> también funciona (Microsoft se rindió y agregó el alias). Así que en cualquier terminal actual, puedes usar <code>ls</code>.</p><p>Notación que verás en instrucciones:</p><ul><li><code>.</code> → \"la carpeta actual\"</li><li><code>..</code> → \"un nivel arriba\"</li><li><code>~</code> → \"mi carpeta de usuario\" (en Mac/Linux)</li><li><code>/</code> o <code>\\</code> → separador de carpetas (según el OS)</li></ul><p>Con esos dos comandos y esa notación, ya puedes seguir cualquier tutorial de programación que aparezca este año.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>cd</code> es <strong>entrar y salir de habitaciones</strong>; <code>ls</code> es <strong>prender la luz para ver qué hay</strong>. Cuando entras a una casa que no conoces, haces exactamente eso: entras a la sala, ves qué hay, pasas a la cocina, ves qué hay. En la terminal es idéntico — solo que en vez de habitaciones son carpetas.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\Users\\Ray&gt; cd Proyectos\nC:\\Users\\Ray\\Proyectos&gt; ls\n    mi-tienda/\n    barberia/\n    porfolio/\nC:\\Users\\Ray\\Proyectos&gt; cd mi-tienda\nC:\\Users\\Ray\\Proyectos\\mi-tienda&gt; ls\n    index.html\n    styles.css\n    app.js\nC:\\Users\\Ray\\Proyectos\\mi-tienda&gt; cd ..\nC:\\Users\\Ray\\Proyectos&gt;</code></pre><p>Toda esa secuencia es: \"entra a Proyectos → mira qué hay → entra a mi-tienda → mira qué hay → sal a Proyectos otra vez\". Fluido, sin abrir una sola ventana.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a seguir tus pasos desde la terminal en Windows. Dame los comandos <code>cd</code> exactos para llegar a mi carpeta del proyecto, y después <code>ls</code> para confirmar que estoy en el lugar correcto antes de continuar.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace <code>cd ..</code>?", opciones: ["Borra la carpeta actual", "Sube un nivel (sale de la carpeta actual)", "Copia la carpeta", "Cierra la terminal"], correcta: 1 },
              { tipo: "relacionar", pares: [[".", "La carpeta actual"], ["..", "Un nivel arriba"], ["~", "Mi carpeta de usuario (Mac/Linux)"], ["/", "Separador de carpetas"]] },
              { tipo: "completar", frase: "____ te lleva a otra carpeta; ____ te muestra qué hay dentro de la carpeta donde estás.", banco: ["cd", "ls", "mkdir", "rm"], respuestas: ["cd", "ls"] },
              { tipo: "ordenar", instruccion: "Pasos para entrar a Proyectos/mi-tienda desde C:\\Users\\Ray:", elementos: ["cd Proyectos", "ls", "cd mi-tienda"] },
              { tipo: "vf", afirmacion: "En la PowerShell moderna de Windows también puedes usar <code>ls</code>.", correcta: true, explicacion: "Microsoft agregó el alias hace años." }
            ]
          },
          {
            id: "m1-a7",
            titulo: "La terminal III: crear y borrar (mkdir, rm) y por qué hay que tener cuidado",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cuatro comandos más y ya dominas el 80% de la terminal que verás en tu carrera:</p><ul><li><code>mkdir</code> — <strong>Make Directory</strong>: crea una carpeta. <code>mkdir mi-proyecto</code> crea una carpeta con ese nombre donde estás parado.</li><li><code>touch</code> (Mac/Linux) o <code>New-Item</code> (PowerShell) — crea un archivo vacío. Menos común: normalmente los archivos los crean los editores.</li><li><code>rm</code> (Mac/Linux) o <code>Remove-Item</code> (PowerShell) — <strong>Remove</strong>: borra. <code>rm archivo.txt</code> borra ese archivo.</li><li><code>cp</code> / <code>Copy-Item</code> — copia. <code>mv</code> / <code>Move-Item</code> — mueve o renombra.</li></ul><p>Y aquí viene la parte que te tienes que grabar en la frente: <strong>la terminal no tiene bote de reciclaje</strong>. Lo que borras con <code>rm</code> desaparece de verdad, sin ventana de \"¿estás seguro?\", sin ir a la papelera. Esto es un riesgo real:</p><ul><li><code>rm archivo.txt</code> — borra un archivo (recuperable a veces con software especial)</li><li><code>rm -rf carpeta</code> — borra una carpeta ENTERA con TODO adentro, sin preguntar (casi imposible de recuperar)</li><li><code>rm -rf /</code> — el meme legendario: intenta borrar TODO el disco. NO lo escribas ni de broma.</li></ul><p>Regla de oro de este programa: <strong>ANTES de correr un <code>rm</code>, dile a la IA exactamente qué vas a borrar y pídele que confirme</strong>. Un segundo de pausa te ha salvado el proyecto miles de veces.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La terminal es una <strong>cocina profesional sin señales de \"cuidado, cuchillo\"</strong>: todo está a la mano, todo corta rapidísimo, y no hay avisos. Un cocinero experimentado es cuidadoso PRECISAMENTE porque sabe lo filosa que está la herramienta. El que corre <code>rm</code> sin pensar es el que se corta el dedo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\Users\\Ray&gt; mkdir nuevo-proyecto        ← crea carpeta\nC:\\Users\\Ray&gt; cd nuevo-proyecto\nC:\\Users\\Ray\\nuevo-proyecto&gt; mkdir imagenes\nC:\\Users\\Ray\\nuevo-proyecto&gt; ls\n    imagenes/\nC:\\Users\\Ray\\nuevo-proyecto&gt; rm imagenes  ← intento borrar\n    rm: no se puede borrar 'imagenes':\n        es una carpeta (usa -r)</code></pre><p>La terminal te avisa: para borrar una carpeta hay que pedirlo explícitamente con <code>-r</code> (recursive). Eso es una barrera de seguridad diminuta pero real.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito borrar esto: [describe qué]. Antes de darme el comando, dime exactamente qué se va a borrar, si es reversible, y qué debo tener respaldado por si me equivoco.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué comando crea una carpeta nueva?", opciones: ["rm", "mkdir", "cd", "ls"], correcta: 1 },
              { tipo: "vf", afirmacion: "La terminal tiene bote de reciclaje: lo que borras con <code>rm</code> se puede recuperar como en Windows.", correcta: false, explicacion: "<code>rm</code> borra en serio, sin papelera intermedia." },
              { tipo: "relacionar", pares: [["mkdir", "Crear carpeta"], ["rm", "Borrar"], ["cp", "Copiar"], ["mv", "Mover o renombrar"]] },
              { tipo: "completar", frase: "La regla de oro antes de correr <code>rm</code> es preguntarle a la ____ exactamente qué se va a ____.", banco: ["IA", "borrar", "terminal", "guardar"], respuestas: ["IA", "borrar"] },
              { tipo: "quehace", codigo: "rm -rf carpeta-vieja", pregunta: "Ves este comando en un tutorial: <code>rm -rf carpeta-vieja</code>. ¿Qué debes hacer?", opciones: ["Correrlo sin pensar, es un tutorial", "Entender que borra la carpeta entera sin retorno; confirmar que es la correcta", "Cambiar <code>rm</code> por <code>del</code>", "Escribirlo dos veces por seguridad"], correcta: 1 }
            ]
          },
          {
            id: "m1-a8",
            titulo: "Sistemas operativos: Windows, macOS, Linux",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>El <strong>sistema operativo</strong> (OS) es el programa jefe: arranca cuando prendes el equipo y administra todo lo demás — archivos, memoria, programas, pantalla. Sin sistema operativo, una computadora es un ladrillo caro.</p><p>Los tres que importan:</p><ul><li><strong>Windows</strong> — el rey de casas y oficinas. Probablemente lo estás usando ahorita.</li><li><strong>macOS</strong> — el de las Mac. Popular entre diseñadores y programadores.</li><li><strong>Linux</strong> — gratuito, de código abierto, y <strong>corre en la inmensa mayoría de los servidores del mundo</strong>. Cuando tu app viva \"en la nube\", vivirá en Linux (así trabajes desde Windows).</li></ul><p>Este último punto es el que te cambia el mapa. Los comandos de terminal que usan las IAs tienden a ser \"estilo Linux\" (<code>ls</code>, <code>mkdir</code>, rutas con <code>/</code>) porque el destino final del código es un servidor Linux. Por eso vale la pena reconocer sus comandos aunque no lo uses tú.</p><p>Dato importante: <strong>Android está basado en Linux</strong>. Miles de millones de celulares corren una versión de Linux por debajo. Así de dominante es.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El sistema operativo es el <strong>gerente general del restaurante</strong>: no cocina, pero decide quién usa la cocina, a qué hora, con cuánto gas, y qué pasa si dos meseros piden lo mismo al mismo tiempo. Windows, Mac y Linux son tres gerentes con estilos distintos administrando el mismo tipo de restaurante. Linux es el gerente que trabaja gratis, nunca duerme y por eso lo contratan todos los servidores del mundo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cuando rentes tu primer servidor (Mes 9), verás algo así:</p><pre><code>Elige la imagen de tu servidor:\n○ Ubuntu 24.04 LTS      ← Linux (el más común)\n○ Debian 12             ← Linux\n○ Amazon Linux 2023     ← Linux\n○ Windows Server 2022   ← más caro y raro para apps web</code></pre><p>Tres de cuatro opciones son Linux. Y en el Mes 9 vas a entender por qué Ubuntu es casi siempre la respuesta correcta.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a deployar mi aplicación en un servidor. ¿Qué sistema operativo me recomiendas y por qué? Soy principiante, quiero el estándar de la industria y evitar sorpresas.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué sistema operativo corre en la mayoría de los servidores de internet?", opciones: ["Windows", "macOS", "Linux", "iOS"], correcta: 2 },
              { tipo: "vf", afirmacion: "Android está basado en Linux.", correcta: true, explicacion: "miles de millones de celulares corren Linux por debajo." },
              { tipo: "relacionar", pares: [["Windows", "Casas y oficinas"], ["macOS", "Las computadoras Mac"], ["Linux", "Servidores y Android"], ["iOS", "Los iPhone"]] },
              { tipo: "completar", frase: "El sistema operativo es el ____ jefe: administra archivos, memoria y ____.", banco: ["programa", "programas", "usuario", "internet"], respuestas: ["programa", "programas"] },
              { tipo: "multiple", pregunta: "¿Por qué Linux domina los servidores?", opciones: ["Es el más bonito", "Es gratuito, estable y eficiente", "Windows no funciona en servidores", "Es el único con terminal"], correcta: 1 }
            ]
          },
          {
            id: "m1-a9",
            titulo: "Ubuntu y el reino de los servidores: por qué internet corre en Linux",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>Ubuntu</strong> es la versión de Linux más popular del mundo, la que casi todo servidor de la nube usa por default. Su nombre viene de una palabra africana que significa \"humanidad hacia los demás\" — un guiño a la filosofía del código abierto.</p><p>¿Por qué internet corre en Linux y específicamente en Ubuntu?</p><ol><li><strong>Gratuito</strong> — un servidor con Windows cuesta la licencia; uno con Ubuntu, cero.</li><li><strong>Estable</strong> — se puede dejar prendido meses sin reiniciar. Los reinicios sorpresa de Windows serían impensables en un servidor productivo.</li><li><strong>Ligero</strong> — usa poca RAM y CPU. En un servidor, cada megabyte importa (pagas por él).</li><li><strong>Auditable</strong> — el código de Linux es público. Miles de programadores lo revisan. Los bugs de seguridad se descubren y arreglan rapidísimo.</li></ol><p>Otras \"distribuciones\" de Linux que verás (todas primas hermanas): <strong>Debian</strong> (Ubuntu está basada en Debian), <strong>Amazon Linux</strong> (la variante de AWS), <strong>CentOS/RHEL</strong> (más corporativo), <strong>Alpine</strong> (súper ligera, usada en contenedores).</p><p>Para ti, en 2026: si te preguntan qué sistema poner en un servidor y no sabes, di \"Ubuntu 24.04 LTS\". La sigla LTS es <strong>Long Term Support</strong>: soporte por 5 años. Es la opción segura.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Ubuntu es el <strong>Toyota Corolla de los servidores</strong>: no es el más lujoso ni el más rápido, pero es confiable, barato de mantener, y hay refacciones (documentación, tutoriales, respuestas en foros) en cada esquina. Cuando dudes, es la respuesta correcta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cuando abras la terminal de un servidor Ubuntu recién rentado, verás algo como:</p><pre><code>Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.5.0-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/pro\n\nLast login: Fri Jul 18 03:14:22 2026\n\nray@servidor:~$</code></pre><p>Ese <code>ray@servidor:~$</code> es el prompt (¿te acuerdas de A5?). El <code>~</code> te dice que estás en tu carpeta de usuario, y ya estás listo para dar órdenes.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Acabo de rentar un servidor Ubuntu 24.04. Guíame paso a paso para dejarlo listo para mi proyecto: qué actualizar primero, qué instalar, qué asegurar. Explícame qué hace cada comando antes de que lo corra.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es Ubuntu?", opciones: ["Un lenguaje de programación", "La versión de Linux más popular", "Una marca de servidores físicos", "Un editor de código"], correcta: 1 },
              { tipo: "completar", frase: "En un servidor, la versión de Ubuntu con soporte largo se llama ____ y su duración típica es de ____ años.", banco: ["LTS", "5", "Pro", "10"], respuestas: ["LTS", "5"] },
              { tipo: "vf", afirmacion: "Un servidor con Windows es siempre más barato que uno con Ubuntu.", correcta: false, explicacion: "Ubuntu es gratis; Windows Server cuesta licencia." },
              { tipo: "relacionar", pares: [["Gratuito", "No pagas licencia por servidor"], ["Estable", "Meses sin reiniciar"], ["Ligero", "Usa poca RAM y CPU"], ["Auditable", "Su código lo revisan miles de personas"]] },
              { tipo: "quehace", codigo: "ray@servidor:~$", pregunta: "Ves <code>ray@servidor:~$</code> en la terminal de un servidor. ¿Qué te dice?", opciones: ["Hay un error de red", "Estás conectado como usuario <code>ray</code>, en tu carpeta personal, listo para dar órdenes", "El servidor está apagado", "Falta pagar la mensualidad"], correcta: 1 }
            ]
          },
          {
            id: "m1-a10",
            titulo: "¿Qué es instalar algo? Programas, ejecutables e instaladores",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>Instalar</strong> un programa es copiar sus archivos a tu computadora y dejarlos listos para ejecutarse. Suena simple porque lo es. Pero hay tres formas comunes de hacerlo, y saber la diferencia te ahorra líos:</p><ol><li><strong>Instalador gráfico</strong> (<code>.exe</code>, <code>.msi</code> en Windows; <code>.dmg</code> en Mac) — descargas un archivo, doble clic, siguiente-siguiente-listo. Photoshop, Chrome, VS Code.</li><li><strong>Portable</strong> — descargas un <code>.zip</code>, lo descomprimes en una carpeta, y ya. No \"instala\" nada en el sistema: solo vive ahí.</li><li><strong>Por terminal</strong> — el favorito de los programadores. En Mac: <code>brew install algo</code>. En Ubuntu: <code>apt install algo</code>. En Windows moderno: <code>winget install algo</code>. Un solo comando, y listo — sin ventanas ni siguientes.</li></ol><p>Un archivo <strong>ejecutable</strong> es uno que la computadora puede correr como programa (<code>.exe</code> en Windows, sin extensión o <code>.sh</code> en Linux, <code>.app</code> en Mac). Cuando descargas algo de internet, la primera pregunta debe ser: ¿de quién viene? Un <code>.exe</code> de una fuente desconocida puede ser un virus. Regla: descarga solo de la página oficial del programa.</p><p>Cuando la IA te diga \"instala Node.js\" o \"instala Python\", te va a dar la instrucción — pero tú vas a saber que hay tres caminos y por qué eligió uno.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Instalar es como <strong>traer un mueble nuevo a casa</strong>: puedes contratar quien te lo lleve armado (instalador gráfico), traer las piezas y armarlo tú (portable), o pedirlo por app y que llegue solo a tu recámara (terminal). El resultado es el mismo mueble — cambia el esfuerzo y la ceremonia.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Instalación por terminal, la que verás más seguido:</p><pre><code>C:\\Users\\Ray&gt; winget install --id OpenJS.NodeJS\n    Found Node.js LTS\n    Downloading...\n    Installing...\n    Successfully installed</code></pre><p>En 30 segundos, sin cerrar una sola ventana, ya tienes Node.js instalado. Este flujo es el que hace que los programadores prefieran la terminal para todo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito instalar [nombre del programa] en mi computadora (Windows / Mac / Linux). Dame las 3 formas de hacerlo (instalador gráfico, portable, terminal) y recomiéndame cuál me conviene por mi nivel. Antes de darme comandos de terminal, dime qué hace cada uno.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Instalador gráfico", "Doble clic, siguiente-siguiente-listo"], ["Portable", "Descargas un zip y descomprimes"], ["Por terminal", "Un solo comando y listo"]] },
              { tipo: "multiple", pregunta: "¿Cuál es un ejecutable de Windows?", opciones: ["documento.pdf", "foto.png", "programa.exe", "datos.csv"], correcta: 2 },
              { tipo: "completar", frase: "Descarga programas solo desde su ____; un ejecutable de una fuente ____ puede ser un virus.", banco: ["página oficial", "desconocida", "USB", "favorita"], respuestas: ["página oficial", "desconocida"] },
              { tipo: "vf", afirmacion: "Instalar por terminal siempre es más peligroso que con instalador gráfico.", correcta: false, explicacion: "es igual de seguro si el comando viene de una fuente confiable; es solo un método más rápido." },
              { tipo: "quehace", codigo: "winget install --id OpenJS.NodeJS", pregunta: "<code>winget install --id OpenJS.NodeJS</code> — ¿qué logra?", opciones: ["Desinstala Node.js", "Instala Node.js desde el gestor de paquetes de Windows", "Actualiza Windows", "Reinicia la computadora"], correcta: 1 }
            ]
          },
          { id: "m1-a11", titulo: "Dependencias y librerías: nadie construye desde cero", proximamente: true },
          { id: "m1-a12", titulo: "Versiones: por qué 2.0 puede romper lo que 1.9 hacía bien", proximamente: true },
          { id: "m1-a13", titulo: "npm: la tienda de piezas de JavaScript (y package.json)", proximamente: true },
          { id: "m1-a14", titulo: "La memoria caché: por qué \"borrar caché\" arregla cosas", proximamente: true },
          { id: "m1-a15", titulo: "Procesos: qué está corriendo en tu compu ahora mismo", proximamente: true },
          { id: "m1-a16", titulo: "Internet I: ¿qué pasa cuando escribes google.com?", proximamente: true },
          { id: "m1-a17", titulo: "Internet II: direcciones IP y DNS (el directorio telefónico de internet)", proximamente: true },
          { id: "m1-a18", titulo: "Internet III: la URL por partes (dominio, ruta, parámetros)", proximamente: true },
          { id: "m1-a19", titulo: "HTTP y HTTPS: el candadito y por qué importa", proximamente: true },
          { id: "m1-a20", titulo: "Cliente y servidor: el restaurante de internet", proximamente: true },
          { id: "m1-a21", titulo: "El navegador por dentro: qué hace con lo que recibe", proximamente: true },
          { id: "m1-a22", titulo: "La nube: la computadora de alguien más", proximamente: true },
          { id: "m1-a23", titulo: "Descargar, subir y el ancho de banda", proximamente: true },
          { id: "m1-a24", titulo: "Redes: wifi, datos, módem y por qué \"se cae el sistema\"", proximamente: true },
          { id: "m1-a25", titulo: "Puertos: las puertas numeradas de un servidor (80, 443, 3000)", proximamente: true },
          { id: "m1-a26", titulo: "localhost: el servidor que vive en tu propia compu", proximamente: true },
          { id: "m1-a27", titulo: "Servidores de verdad: qué estás rentando cuando rentas uno", proximamente: true },
          { id: "m1-a28", titulo: "Seguridad básica I: contraseñas, gestores y 2FA", proximamente: true },
          { id: "m1-a29", titulo: "Seguridad básica II: phishing, enlaces trampa y sentido común", proximamente: true },
          { id: "m1-a30", titulo: "Repaso integrador de La Máquina (mega-quiz jugable)", proximamente: true }
        ]
      },
      "b": {
        nombre: "El Idioma del Código",
        icono: "🗣",
        lecciones: [
          {
            id: "m1-b1",
            titulo: "¿Qué es programar? Instrucciones para una máquina obediente y tonta",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Programar es escribir instrucciones para que una computadora haga algo. Punto. Todo lo demás es detalle.</p><p>La parte importante es entender <strong>a quién</strong> le escribes: la computadora es infinitamente obediente e infinitamente tonta. Hace EXACTAMENTE lo que le dices — no lo que quisiste decir. Si le pides \"manda el correo a todos los clientes\" y en tu lista hay un cliente duplicado, le llegará dos veces. La máquina no \"entiende\" la intención; ejecuta la instrucción.</p><p>Un <strong>programa</strong> es una lista de instrucciones guardada en archivos (¿recuerdas A3?). Cuando \"corres\" o <strong>ejecutas</strong> el programa, la computadora lee esas instrucciones y las cumple en orden, millones por segundo.</p><p>Aquí está el giro de tu época: antes, escribir esas instrucciones requería años de práctica, porque había que escribirlas en lenguajes rígidos donde una coma mal puesta rompe todo. Hoy, la IA traduce tus intenciones al lenguaje rígido. Pero la computadora sigue siendo igual de literal — por eso tu trabajo es dar <strong>instrucciones claras y completas a la IA</strong>, y el de la IA es traducirlas sin errores de coma. La habilidad que este programa te construye es la primera.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Programar es escribirle una <strong>receta a un cocinero que no improvisa jamás</strong>. Si la receta dice \"hornea 40 minutos\" y se te olvidó decir \"saca el pastel\", el cocinero lo deja adentro hasta quemarse. No es rebeldía — es obediencia perfecta. El buen programador (y el buen director de IA) piensa en TODOS los pasos, incluyendo los obvios.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Instrucciones para humano vs. para computadora:</p><pre><code>Humano:  \"Avísame si el cliente ya pagó\"\n\nPrograma: SI pago_recibido ES verdadero\n          ENTONCES enviar_mensaje(\"Cliente pagó ✔\")\n          SI NO, no hacer nada</code></pre><p>Mismo objetivo, pero el programa define cada caso: qué revisar, qué hacer si sí, qué hacer si no. Esa precisión es programar.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero que mi sistema haga esto: [tu idea en palabras normales]. Antes de escribir código, hazme las preguntas que necesites para cubrir los casos que no estoy considerando.\"</p></blockquote><p>Esa última frase es oro puro: obliga a la IA a pensar en los \"¿y si...?\" que a ti se te escapan.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál describe mejor a una computadora?", opciones: ["Inteligente y creativa", "Obediente y literal", "Intuitiva pero lenta", "Impredecible"], correcta: 1 },
              { tipo: "completar", frase: "La computadora hace exactamente lo que le ____, no lo que quisiste ____.", banco: ["dices", "decir", "pides por favor", "muestras"], respuestas: ["dices", "decir"] },
              { tipo: "vf", afirmacion: "Un programa es una lista de instrucciones guardada en archivos.", correcta: true, explicacion: "VERDADERO." },
              { tipo: "quehace", codigo: "SI stock ES 0 ENTONCES mostrar(\"Agotado\")", pregunta: "Este pseudo-programa: <code>SI stock ES 0 ENTONCES mostrar(\"Agotado\")</code> — ¿qué hace?", opciones: ["Vende el producto", "Muestra \"Agotado\" cuando no hay stock", "Compra más stock", "Borra el producto"], correcta: 1 },
              { tipo: "multiple", pregunta: "En la era de la IA, ¿cuál es TU habilidad principal como constructor?", opciones: ["Escribir código sin errores de sintaxis", "Memorizar comandos", "Dar instrucciones claras y completas", "Escribir rápido"], correcta: 2 }
            ]
          },
          {
            id: "m1-b2",
            titulo: "Los lenguajes de programación: por qué hay tantos",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un <strong>lenguaje de programación</strong> es un idioma con reglas estrictas para escribir instrucciones que la computadora entiende. Hay cientos. ¿Por qué no uno solo? Por lo mismo que no hay una sola herramienta en la caja: cada lenguaje se inventó para resolver mejor cierto tipo de problema.</p><p>El mapa que te interesa (los conocerás a fondo uno por uno):</p><ul><li><strong>JavaScript</strong> — el idioma de la web. Corre en todos los navegadores del planeta.</li><li><strong>Python</strong> — el idioma de la IA, los datos y la automatización. Famoso por ser legible.</li><li><strong>SQL</strong> — el idioma para hablar con bases de datos. No construye apps; pregunta y guarda datos.</li><li><strong>HTML y CSS</strong> — estructura y estilo de páginas web (técnicamente no son \"de programación\", ya verás por qué en B7).</li><li><strong>Java, C, C++, C#</strong> — lenguajes de sistemas grandes: bancos, videojuegos, Android, Windows.</li></ul><p>¿Cuál \"debes aprender\"? Ninguno de memoria — la IA los escribe todos. Pero vas a <strong>reconocerlos y leerlos</strong>, porque cada proyecto que dirijas estará escrito en alguno, y saber cuál es te dice qué tipo de proyecto tienes enfrente.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Los lenguajes son <strong>idiomas humanos con propósito</strong>: el italiano nació para la ópera, el alemán para la filosofía, el inglés para los negocios (es broma… más o menos). JavaScript es el inglés de internet: no es el más bonito, pero lo hablan en todas partes. Python es como el español neutro: clarito y fácil de leer. SQL es como el lenguaje de los archivistas: solo sabe preguntar y archivar, pero nadie archiva mejor.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La misma idea — \"saluda a Ray\" — en tres lenguajes:</p><pre><code>// JavaScript\nconsole.log(\"Hola, Ray\");\n\n# Python\nprint(\"Hola, Ray\")\n\n-- SQL (no saluda: pregunta a la base de datos)\nSELECT nombre FROM clientes WHERE nombre = 'Ray';</code></pre><p>Fíjate: JavaScript y Python se parecen bastante. SQL es otra cosa — no da órdenes generales, hace preguntas a los datos.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"¿En qué lenguaje(s) está escrito este proyecto y por qué se habrá elegido ese? ¿Es una buena elección para lo que el proyecto hace?\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["JavaScript", "La web y los navegadores"], ["Python", "IA, datos y automatización"], ["SQL", "Bases de datos"], ["C++", "Videojuegos y sistemas de alto rendimiento"]] },
              { tipo: "multiple", pregunta: "¿Por qué existen tantos lenguajes de programación?", opciones: ["Por moda", "Cada uno resuelve mejor cierto tipo de problema", "Porque los viejos dejan de funcionar", "Por derechos de autor"], correcta: 1 },
              { tipo: "quehace", codigo: "print(\"Hola, Ray\")", pregunta: "<code>print(\"Hola, Ray\")</code> — ¿qué lenguaje es y qué hace?", opciones: ["JavaScript; borra un archivo", "Python; muestra el texto \"Hola, Ray\"", "SQL; busca a Ray en la base de datos", "HTML; crea un botón"], correcta: 1 },
              { tipo: "completar", frase: "No necesitas escribir los lenguajes de memoria, pero sí ____ y ____ el código que la IA genera.", banco: ["reconocer", "leer", "memorizar", "recitar"], respuestas: ["reconocer", "leer"] },
              { tipo: "vf", afirmacion: "SQL sirve para construir la parte visual de una página web.", correcta: false, explicacion: "SQL habla con bases de datos; lo visual es HTML/CSS/JavaScript." }
            ]
          },
          {
            id: "m1-b3",
            titulo: "JavaScript: el idioma de la web",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>JavaScript (JS)</strong> es el único lenguaje que corre dentro de todos los navegadores del mundo. Cada botón que responde, cada carrito que suma, cada formulario que valida — eso es JavaScript trabajando en tu pantalla.</p><p>Nació en 1995, escrito en 10 días (y se nota, dicen los programadores entre risas), y hoy es el lenguaje más usado del planeta. Su superpoder no es la elegancia: es la <strong>ubicuidad</strong>. Está en todas partes:</p><ul><li><strong>En el navegador</strong> — la interactividad de cada página que visitas</li><li><strong>En el servidor</strong> — gracias a <strong>Node.js</strong>, un programa que permite correr JS fuera del navegador (así el mismo idioma sirve para el frontend y el backend)</li><li><strong>En las apps</strong> — muchas apps de celular y escritorio están hechas con JS por debajo</li></ul><p>Dato para no quedar mal en una conversación: <strong>Java y JavaScript NO son lo mismo</strong> — el nombre fue una jugada de marketing de los 90. Es como jamón y jamaica: empiezan igual y ahí se acaba el parecido. (Lección completa de esto en B6.)</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>JavaScript es el <strong>inglés de internet</strong>: no es el idioma más puro ni el más bonito, tiene rarezas que hacen reír a los lingüistas… pero se habla en todos lados, y quien lo entiende puede trabajar en cualquier parte del mundo digital. Aprendiste a \"leerlo\" y el 80% de los proyectos web te abren las puertas.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>JavaScript real de una tienda:</p><pre><code>function calcularTotal(precio, cantidad) {\n  return precio * cantidad;\n}\n\nconst total = calcularTotal(7000, 12);\nconsole.log(\"Total del programa: $\" + total);</code></pre><p>Aunque no lo escribas tú, ya puedes seguir la historia: hay una \"receta\" llamada <code>calcularTotal</code> que multiplica precio por cantidad, se usa con 7000 y 12, y muestra el resultado. (Variables y funciones a fondo en B9 y B13.)</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Este archivo .js es parte de mi proyecto. Explícame en español, bloque por bloque, qué hace — como si me lo contara un colega, no un manual.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Dónde corre JavaScript de forma nativa?", opciones: ["Solo en Windows", "En todos los navegadores del mundo", "Solo en servidores", "Solo en Mac"], correcta: 1 },
              { tipo: "completar", frase: "____ es el programa que permite correr JavaScript fuera del navegador, por ejemplo en un ____.", banco: ["Node.js", "servidor", "Photoshop", "celular"], respuestas: ["Node.js", "servidor"] },
              { tipo: "vf", afirmacion: "Java y JavaScript son el mismo lenguaje con nombre corto y largo.", correcta: false, explicacion: "solo comparten nombre por marketing de los 90." },
              { tipo: "quehace", codigo: "calcularTotal(7000, 12)", pregunta: "<code>calcularTotal(7000, 12)</code> usando la función de la lección — ¿qué regresa?", opciones: ["7012", "84000", "7000", "Un error"], correcta: 1 },
              { tipo: "multiple", pregunta: "El carrito de una tienda online suma los productos al instante, sin recargar la página. ¿Quién hace eso?", opciones: ["HTML", "La base de datos", "JavaScript", "El sistema operativo"], correcta: 2 }
            ]
          },
          {
            id: "m1-b4",
            titulo: "Python: el idioma de la IA y los datos",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>Python</strong> es el segundo lenguaje que debes reconocer, y el favorito de dos mundos gigantes: la <strong>inteligencia artificial</strong> y el <strong>análisis de datos</strong>. Cuando lees que \"entrenaron un modelo de IA\" o que \"automatizaron un reporte\", casi seguro hay Python detrás.</p><p>Su fama viene de una virtud: es el lenguaje más parecido a leer inglés. Compara mentalmente: donde otros lenguajes usan símbolos y llaves por todos lados, Python usa palabras y orden visual. Por eso es el lenguaje con el que las universidades enseñan, y por eso los científicos (que no son programadores) lo adoptaron.</p><p>Dónde manda Python:</p><ul><li><strong>IA y machine learning</strong> — las herramientas para crear modelos están en Python</li><li><strong>Análisis de datos</strong> — leer un Excel de 500,000 filas y sacarle conclusiones en segundos</li><li><strong>Automatización</strong> — \"cada lunes descarga el reporte, filtra, y mándalo por correo\": Python clásico</li><li><strong>Backends</strong> — también construye servidores, aunque ahí compite con JavaScript</li></ul><p>Curiosidad: se llama Python por el grupo de comedia <strong>Monty Python</strong>, no por la serpiente. Los programadores son así.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Si JavaScript es el inglés de internet, Python es el <strong>español neutro de los documentales</strong>: claro, ordenado, agradable de leer, y entendible aunque no sea tu idioma. Por eso es el idioma de la ciencia: cuando el tema es complejo (IA, datos), lo último que quieres es que el idioma también lo sea.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>ventas = [7000, 7000, 7900, 9100]\n\ntotal = sum(ventas)\npromedio = total / len(ventas)\n\nprint(f\"Vendiste ${total} con un promedio de ${promedio}\")</code></pre><p>Casi se lee solo: una lista de ventas, la suma, el promedio (total entre cuántas hay), y el mensaje final. Eso es Python: legible incluso para quien va en el Mes 1.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero automatizar esto que hago a mano cada semana: [describe tu tarea repetitiva]. ¿Se puede con Python? Dime qué necesitaría y arma el script paso a paso.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿En qué dos mundos es Python el rey?", opciones: ["Videojuegos y diseño", "IA y análisis de datos", "Páginas web y estilos", "Sistemas operativos y drivers"], correcta: 1 },
              { tipo: "completar", frase: "Python es famoso por ser el lenguaje más ____ — casi como leer ____.", banco: ["legible", "inglés", "rápido", "binario"], respuestas: ["legible", "inglés"] },
              { tipo: "quehace", codigo: "sum(ventas)", pregunta: "<code>sum(ventas)</code> en el ejemplo de la lección — ¿qué hace?", opciones: ["Cuenta cuántas ventas hay", "Suma todos los montos de la lista", "Borra las ventas", "Ordena las ventas de mayor a menor"], correcta: 1 },
              { tipo: "vf", afirmacion: "Python se llama así por la serpiente pitón.", correcta: false, explicacion: "es por el grupo de comedia Monty Python." },
              { tipo: "relacionar", pares: [["Botón interactivo en una página", "JavaScript"], ["Entrenar un modelo de IA", "Python"], ["Preguntar datos a una base", "SQL"], ["Automatizar un reporte semanal", "Python"]] }
            ]
          },
          {
            id: "m1-b5",
            titulo: "SQL: el idioma de las bases de datos",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>SQL</strong> (se pronuncia \"es-cu-ele\" o \"síquel\") es un lenguaje distinto a todos: no construye páginas ni apps. Hace una sola cosa, y la hace desde hace 50 años mejor que nadie: <strong>hablar con bases de datos</strong>.</p><p>Una base de datos (la verás a fondo en B26) es donde viven los datos de cualquier sistema: clientes, ventas, alumnos, pagos. Y SQL es el idioma para preguntarle y ordenarle cosas. Sus cuatro verbos sagrados:</p><ul><li><strong>SELECT</strong> — dame datos (\"dame todos los alumnos que ya pagaron\")</li><li><strong>INSERT</strong> — guarda esto nuevo (\"registra este alumno\")</li><li><strong>UPDATE</strong> — modifica algo existente (\"cámbiale el estado a aprobado\")</li><li><strong>DELETE</strong> — borra (\"elimina este registro de prueba\")</li></ul><p>¿Por qué te importa? Porque <strong>tu negocio son tus datos</strong>. La página se puede rehacer en una tarde con IA; los datos de tus clientes y ventas no. Cuando dirijas proyectos, las decisiones serias — respaldos, quién puede borrar qué, qué se guarda — son decisiones sobre la base de datos. Y SQL es su idioma.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>SQL es el <strong>archivista perfecto de una bodega infinita</strong>: no diseña la tienda, no atiende clientes, no cobra. Pero pídele \"todas las facturas de marzo de clientes de Tlalpan mayores a $5,000\" y te las trae en un segundo, sin equivocarse jamás. Cuatro cosas sabe hacer — buscar, guardar, modificar, borrar — y con esas cuatro sostiene el mundo entero de los datos.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>SELECT nombre, correo\nFROM alumnos\nWHERE mes_pagado = 1 AND examen_aprobado = true;</code></pre><p>Léelo como pregunta: \"Dame el nombre y correo, de la tabla de alumnos, donde hayan pagado el mes 1 Y aprobado el examen\". SQL es de los lenguajes más leíbles que existen — es casi una oración en inglés.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito saber [tu pregunta de negocio, ej. 'cuántos alumnos pagaron este mes y cuánto sumó']. Escribe la consulta SQL, explícame qué hace cada línea, y dime si es segura de correr (que no modifique nada).\"</p></blockquote><p>Esa última parte importa: SELECT solo lee (seguro); UPDATE y DELETE modifican (cuidado).</p>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["SELECT", "Traer datos"], ["INSERT", "Guardar algo nuevo"], ["UPDATE", "Modificar lo existente"], ["DELETE", "Borrar"]] },
              { tipo: "multiple", pregunta: "¿Cuál de estos comandos SQL es de solo lectura (no modifica nada)?", opciones: ["DELETE", "UPDATE", "SELECT", "INSERT"], correcta: 2 },
              { tipo: "quehace", codigo: "SELECT nombre FROM alumnos WHERE examen_aprobado = true;", pregunta: "<code>SELECT nombre FROM alumnos WHERE examen_aprobado = true;</code> — ¿qué trae?", opciones: ["Todos los datos de todos los alumnos", "Los nombres de los alumnos que aprobaron el examen", "Borra a los alumnos reprobados", "Aprueba a todos los alumnos"], correcta: 1 },
              { tipo: "completar", frase: "La página se puede rehacer en una tarde; los ____ de tus clientes y ventas ____.", banco: ["datos", "no", "colores", "sí"], respuestas: ["datos", "no"] },
              { tipo: "vf", afirmacion: "SQL sirve para diseñar la parte visual de las páginas.", correcta: false, explicacion: "SQL solo habla con bases de datos: busca, guarda, modifica y borra." }
            ]
          },
          {
            id: "m1-b6",
            titulo: "Java NO es JavaScript (y los primos confusos: C, C++, C#)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Vamos a poner orden en el lío de nombres más grande del mundo del software. <strong>Java</strong> y <strong>JavaScript</strong> no son parientes: solo comparten nombre porque en 1995, cuando JavaScript era nuevo, sus creadores decidieron aprovechar la fama de Java para llamar la atención. Puro marketing. Desde entonces, medio mundo se confunde.</p><p>Lo importante: son lenguajes distintos, para propósitos distintos.</p><ul><li><strong>Java</strong> — creado en 1995. Corre en cualquier sistema (esa era su gracia: \"escribe una vez, corre en todos lados\"). Reina de sistemas grandes: bancos, aplicaciones Android, sistemas gubernamentales. Verboso, formal, estable.</li><li><strong>JavaScript</strong> — creado también en 1995, en 10 días. Vive en los navegadores (y en servidores gracias a Node.js — B3). Flexible, rápido de escribir, dominante en la web.</li></ul><p>Los otros primos confusos (para que los reconozcas):</p><ul><li><strong>C</strong> — el abuelo de todos. De los años 70. Rápido, pegado al hardware. Corre sistemas operativos, drivers, cosas críticas de rendimiento.</li><li><strong>C++</strong> — C con más features. Videojuegos, motores gráficos, software de alto rendimiento. Unreal Engine y Unity están escritos en C++.</li><li><strong>C#</strong> — se pronuncia \"si-sharp\". De Microsoft. Es el \"Java de Microsoft\". Videojuegos con Unity, apps de Windows, backends corporativos.</li><li><strong>TypeScript</strong> — JavaScript con tipos estrictos. No es distinto lenguaje: es JavaScript con guardarríeles. Muy usado en proyectos serios.</li></ul><p>Regla mnemotécnica: <strong>si trae \"Java\" en el nombre, es Java. Si trae \"Script\" en el nombre, es JavaScript. No se cruzan.</strong></p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Java y JavaScript son como <strong>jamón y jamaica</strong>: los dos empiezan con J-A-M, uno es carne y el otro flor. Nadie ordena \"jamón de jamaica\" en el mercado; nadie debería confundir Java con JavaScript en una junta. Ahora tú tampoco.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La misma idea — \"muestra hola\" — en cinco lenguajes de la familia:</p><pre><code>// Java\nSystem.out.println(\"Hola\");\n\n// JavaScript\nconsole.log(\"Hola\");\n\n// C\nprintf(\"Hola\");\n\n// C++\nstd::cout &lt;&lt; \"Hola\";\n\n// C#\nConsole.WriteLine(\"Hola\");</code></pre><p>Todos hacen lo mismo. Cada uno lo dice a su modo. Reconocerlos de vista es el objetivo — la IA los escribe todos.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Este proyecto que me pasaron está en [lenguaje]. En una tabla: qué tipo de proyectos suelen usar este lenguaje, qué debería aprender a reconocer, y qué NO debo confundir con lenguajes de nombre parecido.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "Java es la versión larga de JavaScript.", correcta: false, explicacion: "son lenguajes distintos que solo comparten nombre por marketing." },
              { tipo: "relacionar", pares: [["Java", "Bancos y Android"], ["JavaScript", "Web y navegadores"], ["C++", "Videojuegos de alto rendimiento"], ["C#", "Unity y apps de Windows"]] },
              { tipo: "multiple", pregunta: "¿Cómo se pronuncia C#?", opciones: ["\"ce numeral\"", "\"si-sharp\"", "\"ce menor\"", "\"hashtag ce\""], correcta: 1 },
              { tipo: "completar", frase: "TypeScript no es un lenguaje distinto: es ____ con ____ estrictos.", banco: ["JavaScript", "tipos", "Java", "bugs"], respuestas: ["JavaScript", "tipos"] },
              { tipo: "quehace", codigo: "System.out.println(\"Hola\");", pregunta: "Ves esto: <code>System.out.println(\"Hola\");</code>. ¿Qué lenguaje es?", opciones: ["JavaScript", "Java", "Python", "C++"], correcta: 1 }
            ]
          },
          {
            id: "m1-b7",
            titulo: "HTML: el esqueleto (y por qué técnicamente no es \"programar\")",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>HTML</strong> (HyperText Markup Language, \"lenguaje de marcado de hipertexto\") es el que define QUÉ hay en una página web y en qué orden: encabezados, párrafos, imágenes, botones, formularios. Sin HTML, no hay página. Con HTML solo, tienes una página funcional pero sin estilos ni interactividad — texto negro sobre fondo blanco, como Wikipedia en modo minimalista.</p><p>Un archivo HTML es texto con <strong>etiquetas</strong> entre <code>&lt;</code> y <code>&gt;</code> que le dicen al navegador cómo interpretar cada pedazo:</p><ul><li><code>&lt;h1&gt;Título&lt;/h1&gt;</code> — un encabezado grande</li><li><code>&lt;p&gt;Párrafo de texto&lt;/p&gt;</code> — un párrafo</li><li><code>&lt;img src=\"foto.png\"&gt;</code> — una imagen</li><li><code>&lt;a href=\"tienda.com\"&gt;Compra aquí&lt;/a&gt;</code> — un enlace</li><li><code>&lt;button&gt;Click&lt;/button&gt;</code> — un botón</li></ul><p>Detalle nerd que sí importa: HTML técnicamente <strong>no es un lenguaje de programación</strong>, es un lenguaje de <strong>marcado</strong>. No tiene variables ni condicionales ni funciones — no le puedes decir \"si el usuario está logueado, muestra X\". Solo describe estructura. La lógica la pone JavaScript (B3). El estilo lo pone CSS (B8). Esos tres — HTML, CSS y JavaScript — son la santísima trinidad de la web, y desde este mes vas a dirigir IA que los combina.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>HTML es el <strong>esqueleto del cuerpo</strong>: define dónde va la cabeza, dónde los brazos, dónde las piernas. No es la piel (eso es CSS), ni los músculos que mueven (eso es JavaScript). Sin esqueleto no hay cuerpo. Con puro esqueleto no ganas concursos de belleza, pero ya se para y funciona.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Una página HTML mínima:</p><pre><code>&lt;!doctype html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;title&gt;Mi negocio&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Bienvenidos&lt;/h1&gt;\n    &lt;p&gt;Somos la mejor tortería de Tlalpan.&lt;/p&gt;\n    &lt;a href=\"https://wa.me/5512345678\"&gt;Pídenos por WhatsApp&lt;/a&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><p>Ese archivo, guardado como <code>index.html</code> y abierto en cualquier navegador del mundo, muestra una página real. Fea, pero real. Y así arrancan <strong>todos</strong> los sitios de internet.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Explícame el archivo index.html de mi proyecto, etiqueta por etiqueta, en una tabla: qué elemento es y qué muestra en la página.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué define HTML en una página web?", opciones: ["Los colores y estilos", "La interactividad (clicks, animaciones)", "La estructura: qué hay y en qué orden", "La velocidad de carga"], correcta: 2 },
              { tipo: "vf", afirmacion: "HTML es técnicamente un lenguaje de programación con variables y funciones.", correcta: false, explicacion: "es un lenguaje de MARCADO; describe estructura, no lógica." },
              { tipo: "relacionar", pares: [["<h1>", "Un encabezado grande"], ["<p>", "Un párrafo"], ["<img>", "Una imagen"], ["<a>", "Un enlace"]] },
              { tipo: "completar", frase: "En la santísima trinidad de la web, ____ pone estructura, ____ pone estilo, y JavaScript pone ____.", banco: ["HTML", "CSS", "interactividad", "imágenes"], respuestas: ["HTML", "CSS", "interactividad"] },
              { tipo: "quehace", codigo: "<a href=\"https://wa.me/5512345678\">Escríbenos</a>", pregunta: "<code>&lt;a href=\"https://wa.me/5512345678\"&gt;Escríbenos&lt;/a&gt;</code> — ¿qué crea en la página?", opciones: ["Un botón que envía correo", "Un enlace que dice \"Escríbenos\" y abre WhatsApp al número indicado", "Una imagen del logo de WhatsApp", "Una alerta que muestra el número"], correcta: 1 }
            ]
          },
          {
            id: "m1-b8",
            titulo: "CSS: el estilista de la web",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>CSS</strong> (Cascading Style Sheets, \"hojas de estilo en cascada\") es el que decide cómo se ve el HTML: colores, tamaños, tipografías, posiciones, animaciones. Si HTML es el esqueleto, CSS es la piel, el corte de pelo y el guardarropa.</p><p>CSS se escribe con reglas que dicen \"a este elemento, aplícale estos estilos\":</p><pre><code>h1 {\n  color: purple;\n  font-size: 48px;\n  text-align: center;\n}</code></pre><p>Esa regla se lee: \"a todos los <code>&lt;h1&gt;</code> de la página, píntalos morado, con letra de 48 píxeles, centrados\". Se puede escribir dentro del HTML o (mejor) en un archivo aparte <code>.css</code>.</p><p>Lo de \"cascading\" es un concepto clave: las reglas se APILAN. Si una regla general dice \"todos los párrafos son negros\" y una específica dice \"los párrafos del footer son grises\", la específica gana en el footer. Así se controla algo tan visualmente rico como una página moderna con reglas ordenadas.</p><p>En 2026, CSS también hace cosas que antes solo JavaScript hacía: animaciones, cambios al pasar el mouse, layouts adaptables (responsive). Cuando la IA construya páginas para ti, va a escribir muchísimo CSS. Y tu chamba será decirle: \"más grande el título\", \"los colores más oscuros\", \"que se vea bien en celular\" — y CSS será lo que la IA toque para hacerlo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Si HTML es el esqueleto, CSS es <strong>el estilista y el sastre</strong>: recibe un cuerpo funcional y decide el peinado, el maquillaje, la ropa, la postura. Dos personas idénticas por dentro pueden verse radicalmente distintas por fuera solo cambiando de estilista.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Mismo HTML con y sin CSS:</p><pre><code>&lt;h1&gt;DEV SYSTEM ACADEMY&lt;/h1&gt;\n&lt;p&gt;Aprende a construir con IA.&lt;/p&gt;</code></pre><p>Sin CSS: título negro tamaño default, párrafo negro alineado a la izquierda. Feo pero funcional.</p><p>Con este CSS:</p><pre><code>body { background: #0a0a1f; color: white; font-family: sans-serif; }\nh1 { color: #7c3aed; font-size: 64px; text-align: center; }\np { font-size: 20px; text-align: center; opacity: 0.8; }</code></pre><p>Fondo azul noche, título morado enorme centrado, párrafo blanco tenue. La misma información, otra sensación completa.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"El diseño actual de mi página se ve genérico. Sin cambiar la estructura HTML, ajusta el CSS para que se vea moderno: colores [X y Y], tipografía sans-serif con carácter, y que respire (más espacios y menos densidad).\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué controla CSS?", opciones: ["La estructura de la página", "La apariencia visual: colores, tamaños, posiciones", "La conexión a la base de datos", "La velocidad del internet"], correcta: 1 },
              { tipo: "quehace", codigo: "h1 { color: red; font-size: 48px; }", pregunta: "Esta regla CSS: <code>h1 { color: red; font-size: 48px; }</code>. ¿Qué hace?", opciones: ["Pone todos los textos rojos", "A todos los <code>&lt;h1&gt;</code> los pinta rojos con letra de 48 píxeles", "Borra los encabezados", "Cambia el fondo a rojo"], correcta: 1 },
              { tipo: "completar", frase: "En CSS, cuando hay varias reglas para el mismo elemento, la regla más ____ le gana a la más ____.", banco: ["específica", "general", "nueva", "vieja"], respuestas: ["específica", "general"] },
              { tipo: "vf", afirmacion: "En 2026, CSS también puede hacer animaciones y diseños adaptables sin JavaScript.", correcta: true, explicacion: "CSS moderno hace muchísimo más que colores." },
              { tipo: "relacionar", pares: [["color", "Color del texto"], ["background", "Color de fondo"], ["font-size", "Tamaño de la letra"], ["text-align", "Alineación (izquierda, centro, derecha)"]] }
            ]
          },
          {
            id: "m1-b9",
            titulo: "Variables: cajitas con nombre",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Una <strong>variable</strong> es una cajita con nombre donde un programa guarda un dato para usarlo después. Es el concepto más básico y más importante de la programación — todos los lenguajes lo tienen, y todo lo demás se construye encima.</p><p>En JavaScript se ven así:</p><pre><code>let precio = 7000;\nlet nombreAlumno = \"Ray\";\nlet examenAprobado = true;</code></pre><p>Traducido: \"crea una cajita llamada <code>precio</code> y guárdale el número 7000; una llamada <code>nombreAlumno</code> con el texto \"Ray\"; una llamada <code>examenAprobado</code> con verdadero\". Después, cualquier parte del programa puede usar <code>precio</code> y automáticamente vale 7000.</p><p>Tres palabras que verás en JavaScript para crear variables:</p><ul><li><code>let</code> — variable que puede cambiar después</li><li><code>const</code> — variable que NO va a cambiar (constante). Es el default preferido: si no vas a cambiarla, usa <code>const</code></li><li><code>var</code> — la forma vieja. Todavía funciona pero ya casi nadie la usa</li></ul><p>Reglas de nombres (importantes cuando dirijas a la IA):</p><ul><li>Sin espacios: <code>nombreAlumno</code>, no <code>nombre alumno</code></li><li>Empiezan con letra (o <code>_</code>), nunca con número</li><li>Sensibles a mayúsculas: <code>precio</code> y <code>Precio</code> son cajitas DISTINTAS</li><li>Estilo convencional: <strong>camelCase</strong> — primera palabra minúscula, siguientes con mayúscula: <code>precioTotal</code>, <code>fechaDePago</code>, <code>examenAprobado</code></li></ul><p>Este es el vocabulario mínimo para leer cualquier código que la IA genere para ti.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Una variable es una <strong>caja etiquetada en una bodega</strong>: le pones un nombre, adentro pones algo (un número, un texto, un <code>sí/no</code>), y después la buscas por nombre para ver qué tiene. Si mañana cambias su contenido, la caja sigue llamándose igual pero adentro hay otra cosa.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un pedazo real de un checkout:</p><pre><code>const emailAlumno = \"ray@ejemplo.com\";\nconst mesAPagar = 1;\nconst precioMensualidad = 7000;\n\nconst mensaje = \"Cobrar \" + precioMensualidad + \" a \" + emailAlumno;\nconsole.log(mensaje);\n// muestra: Cobrar 7000 a ray@ejemplo.com</code></pre><p>Fíjate cómo se usan las variables: se crean, se combinan (<code>+</code>), y aparecen en el resultado. Casi se lee como oración.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"En este archivo JavaScript, hazme una tabla con TODAS las variables: nombre, qué guarda, y si cambia o no durante la ejecución. Márcame las que podrían ser problemáticas (nombres poco claros o valores mágicos).\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una variable?", opciones: ["Un error del programa", "Una cajita con nombre donde el programa guarda un dato", "Un tipo de bug", "Una función especial"], correcta: 1 },
              { tipo: "relacionar", pares: [["let", "Variable que puede cambiar"], ["const", "Variable que NO va a cambiar"], ["var", "La forma vieja, casi en desuso"]] },
              { tipo: "completar", frase: "El estilo estándar de nombres en JavaScript se llama ____: primera palabra en minúscula y las siguientes con ____.", banco: ["camelCase", "mayúscula", "snake_case", "guiones"], respuestas: ["camelCase", "mayúscula"] },
              { tipo: "vf", afirmacion: "En JavaScript, <code>precio</code> y <code>Precio</code> son la misma variable porque solo cambia una letra.", correcta: false, explicacion: "son sensibles a mayúsculas; son variables DISTINTAS." },
              { tipo: "quehace", codigo: "const precioTotal = 7000 * 12;", pregunta: "<code>const precioTotal = 7000 * 12;</code> — ¿qué guarda en la variable?", opciones: ["El texto \"7000 * 12\"", "El número 84000 (resultado de la multiplicación)", "Un error de sintaxis", "La palabra \"precioTotal\""], correcta: 1 }
            ]
          },
          {
            id: "m1-b10",
            titulo: "Tipos de datos: texto, números, booleanos",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Todo dato que guardes en una variable es de un <strong>tipo</strong>. Los tres básicos, que verás todos los días:</p><ul><li><strong>String (texto)</strong> — cualquier cosa entre comillas: <code>\"Ray\"</code>, <code>\"correo@ejemplo.com\"</code>, <code>\"7000\"</code>. Ojo: <code>\"7000\"</code> entre comillas ES TEXTO, no número. Si sumas <code>\"7000\" + 1</code> en JavaScript, te sale <code>\"70001\"</code> — porque JavaScript pega el 1 al final del texto. Esa clase de sorpresas se llaman <strong>bugs</strong>, y todos las hemos sufrido.</li><li><strong>Number (número)</strong> — sin comillas: <code>7000</code>, <code>3.14</code>, <code>-5</code>. Se pueden sumar, restar, multiplicar. En JavaScript no hay \"enteros\" y \"decimales\" separados: son todos <code>number</code>.</li><li><strong>Boolean (booleano)</strong> — solo dos valores posibles: <code>true</code> o <code>false</code>. Verdadero o falso. Es el tipo detrás de todas las decisiones: <code>examenAprobado</code>, <code>estaLogueado</code>, <code>esFinDeSemana</code>.</li></ul><p>Hay otros tipos que verás pronto (los detallamos más adelante):</p><ul><li><code>null</code> — \"aquí no hay nada, a propósito\". Un campo vacío deliberadamente.</li><li><code>undefined</code> — \"esto no se definió nunca\". Una variable que existe pero sin valor asignado.</li><li><code>array</code> — lista de cosas (B15).</li><li><code>object</code> — ficha con datos agrupados (B16).</li></ul><p>Saber el tipo de cada dato es la mitad de leer código. Si ves <code>precio</code> y sabes que es <code>number</code>, entiendes las operaciones. Si ves <code>nombre</code> y sabes que es <code>string</code>, entiendes los mensajes. Y si ves <code>pagoConfirmado</code> y sabes que es <code>boolean</code>, entiendes las decisiones del programa.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Los tipos de dato son las <strong>categorías del mercado</strong>: la fruta se vende por peso, los huevos por pieza, la leche por litro. No mezclas — no pides \"medio kilo de huevos\" ni \"3 piezas de leche\". El tipo define qué operaciones tienen sentido: sumas números, concatenas textos, decides con booleanos. Confundir tipos es como pedir \"medio kilo de sí\".</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>const nombreAlumno = \"Ray Fernández\";    // string\nconst precioMensual = 7000;              // number\nconst examenAprobado = true;             // boolean\nconst fechaPago = null;                  // null: aún no ha pagado\n\nif (examenAprobado === true) {\n  console.log(\"Tarifa preferente: $\" + precioMensual);\n}\n// Muestra: Tarifa preferente: $7000</code></pre><p>Cuatro tipos distintos, trabajando juntos. Y esa es cualquier app real.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"En este archivo, dame una tabla de cada variable con su nombre, su valor y su tipo (string, number, boolean, null, undefined). Márcame donde haya conversiones raras o riesgo de mezclar tipos.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["\"Hola\"", "string (texto)"], ["7000", "number"], ["true", "boolean"], ["null", "null (nada intencional)"]] },
              { tipo: "multiple", pregunta: "En JavaScript, ¿qué resulta de <code>\"7000\" + 1</code>?", opciones: ["7001", "\"70001\" (texto)", "Un error", "8000"], correcta: 1 },
              { tipo: "completar", frase: "Un booleano solo puede tener dos valores: ____ o ____.", banco: ["true", "false", "1", "sí"], respuestas: ["true", "false"] },
              { tipo: "vf", afirmacion: "<code>null</code> y <code>undefined</code> son exactamente lo mismo.", correcta: false, explicacion: "<code>null</code> es \"nada, a propósito\"; <code>undefined</code> es \"esto no se definió nunca\"." },
              { tipo: "quehace", codigo: "const activo = true; if (activo === true) { pagar(); }", pregunta: "<code>const activo = true; if (activo === true) { pagar(); }</code> — ¿qué hace este código?", opciones: ["Nunca ejecuta <code>pagar()</code>", "Ejecuta <code>pagar()</code> porque <code>activo</code> es verdadero", "Genera un error", "Cambia <code>activo</code> a false"], correcta: 1 }
            ]
          },
          { id: "m1-b11", titulo: "Condicionales: if/else, el código que toma decisiones", proximamente: true },
          { id: "m1-b12", titulo: "Ciclos: repetir sin cansarse (for, while)", proximamente: true },
          { id: "m1-b13", titulo: "Funciones I: recetas reutilizables", proximamente: true },
          { id: "m1-b14", titulo: "Funciones II: ingredientes que entran (parámetros) y platillo que sale (return)", proximamente: true },
          { id: "m1-b15", titulo: "Listas y arreglos: muchas cosas en una sola variable", proximamente: true },
          { id: "m1-b16", titulo: "Objetos: fichas con datos (nombre, precio, teléfono…)", proximamente: true },
          { id: "m1-b17", titulo: "JSON: el formato en el que viajan los datos por internet", proximamente: true },
          { id: "m1-b18", titulo: "Comentarios: las notas que el código ignora pero los humanos leen", proximamente: true },
          { id: "m1-b19", titulo: "Errores I: leer un mensaje de error sin entrar en pánico", proximamente: true },
          { id: "m1-b20", titulo: "Errores II: sintaxis vs lógica vs runtime", proximamente: true },
          { id: "m1-b21", titulo: "¿Qué es un bug? (y la polilla real de 1947)", proximamente: true },
          { id: "m1-b22", titulo: "Librerías y frameworks: la diferencia entre piezas y esqueletos", proximamente: true },
          { id: "m1-b23", titulo: "Frontend, Backend y Base de datos: las tres capas de toda app", proximamente: true },
          { id: "m1-b24", titulo: "¿Qué es un algoritmo? (la receta paso a paso)", proximamente: true },
          { id: "m1-b25", titulo: "¿Qué es una API? Primer vistazo al mesero de los datos", proximamente: true },
          { id: "m1-b26", titulo: "Bases de datos: tablas, filas, columnas y el Excel con esteroides", proximamente: true },
          { id: "m1-b27", titulo: "Open source: el código abierto y por qué medio mundo es gratis", proximamente: true },
          { id: "m1-b28", titulo: "Leer código I: descifrar un archivo JavaScript simple (con IA de copiloto)", proximamente: true },
          { id: "m1-b29", titulo: "Leer código II: descifrar un HTML + CSS real", proximamente: true },
          { id: "m1-b30", titulo: "Repaso integrador del Idioma (mega-quiz jugable)", proximamente: true }
        ]
      },
      "c": {
        nombre: "Construye con IA",
        icono: "🤖",
        lecciones: [
          {
            id: "m1-c1",
            titulo: "¿Qué es un LLM? La IA que habla (y programa)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un <strong>LLM</strong> (Large Language Model, \"modelo grande de lenguaje\") es el tipo de inteligencia artificial detrás de ChatGPT, Claude y Gemini. Es un programa entrenado leyendo cantidades inimaginables de texto — libros, artículos, conversaciones, y millones de líneas de código — hasta volverse extraordinariamente bueno en una cosa: <strong>predecir qué palabra sigue</strong>.</p><p>Suena simple, pero de ahí sale todo: para predecir bien la siguiente palabra de \"la capital de Francia es…\", el modelo tuvo que aprender geografía. Para completar código, tuvo que aprender a programar. Esa habilidad de predicción, a escala gigante, se convierte en algo que conversa, explica, traduce y construye software.</p><p>Lo que un LLM ES:</p><ul><li>Una herramienta que entiende y genera lenguaje (humano y de programación)</li><li>Tu traductor entre \"lo que quieres\" y \"el código que lo hace\"</li></ul><p>Lo que un LLM NO es:</p><ul><li>No es una base de datos de hechos (puede equivocarse con total confianza — lección C5)</li><li>No \"piensa\" como humano ni tiene intenciones</li><li>No sabe lo que pasó después de su fecha de entrenamiento, salvo que se le conecte a internet o a herramientas</li></ul><p>Este programa completo — DEV SYSTEM — existe porque los LLMs cambiaron quién puede construir software: ya no gana el que teclea más rápido, gana el que <strong>dirige mejor</strong>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un LLM es como un <strong>asistente políglota que leyó todas las bibliotecas del mundo</strong>: habla todos los idiomas (incluidos JavaScript, Python y SQL), leyó de todos los temas, y trabaja a velocidad sobrehumana. Pero leyó, no vivió: a veces mezcla recuerdos, no sabe qué pasó esta mañana, y necesita que TÚ le digas exactamente qué quieres. Genio disponible, dirección requerida.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Tú escribes:</p><pre><code>Hazme una página simple que diga \"Tortas El Güero\"\ncon fondo amarillo y un botón de WhatsApp.</code></pre><p>El LLM responde con el archivo HTML completo, listo para guardar y abrir. Eso que antes costaba contratar a alguien, hoy es una instrucción bien dada. Lo harás tú mismo en la práctica C7.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>Tu primera conversación de reconocimiento — pregúntale al LLM sobre sí mismo:</p><blockquote><p>\"Explícame qué eres, qué haces bien, en qué te equivocas seguido, y cómo debería pedirte las cosas para obtener los mejores resultados.\"</p></blockquote><p>La respuesta te va a sorprender: la IA es muy buena explicando cómo usarla.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué significa LLM?", opciones: ["Lenguaje Lógico de Máquinas", "Modelo Grande de Lenguaje", "Librería Libre de Módulos", "Lector Literal de Memoria"], correcta: 1 },
              { tipo: "completar", frase: "Un LLM está entrenado para predecir la siguiente ____, y de esa habilidad a escala gigante sale su capacidad de conversar y ____.", banco: ["palabra", "programar", "imagen", "calcular"], respuestas: ["palabra", "programar"] },
              { tipo: "vf", afirmacion: "Un LLM es una base de datos de hechos que nunca se equivoca.", correcta: false, explicacion: "puede equivocarse con total confianza; no es una base de datos." },
              { tipo: "relacionar", pares: [["ChatGPT", "OpenAI"], ["Claude", "Anthropic"], ["Gemini", "Google"]] },
              { tipo: "multiple", pregunta: "En la era de los LLMs, ¿quién tiene ventaja construyendo software?", opciones: ["El que teclea más rápido", "El que memoriza más lenguajes", "El que dirige mejor", "El que tiene la computadora más cara"], correcta: 2 }
            ]
          },
          {
            id: "m1-c2",
            titulo: "ChatGPT, Claude, Gemini: quién es quién en el mundo de la IA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Los tres grandes asistentes de IA que vas a usar (o ya usas):</p><ul><li><strong>ChatGPT</strong> (de OpenAI) — el que hizo famosa a la IA en 2022. El más conocido del público.</li><li><strong>Claude</strong> (de Anthropic) — reconocido por su calidad escribiendo y programando; muy usado por profesionales del código.</li><li><strong>Gemini</strong> (de Google) — integrado al mundo Google: Gmail, Docs, búsqueda.</li></ul><p>Detrás de cada asistente hay <strong>modelos</strong> con versiones — como los coches: mismo fabricante, distintos motores según el año y la gama. Cada empresa saca versiones nuevas cada pocos meses, más capaces que las anteriores.</p><p>Lo que importa entender:</p><ol><li><strong>Todos funcionan igual por dentro</strong> (son LLMs — lección C1). Lo que cambia es el entrenamiento, la personalidad y las herramientas conectadas.</li><li><strong>Gratis vs. de paga:</strong> todos tienen versión gratuita con el modelo chico; pagar (~$20 USD/mes) te da el modelo grande. Para construir en serio, el modelo grande se nota muchísimo — es tu herramienta de trabajo, como la maquinaria de un taller.</li><li><strong>No te cases con uno:</strong> son herramientas, no equipos de futbol. Los profesionales prueban el mismo problema en dos y comparan.</li></ol><p>En este programa usaremos ejemplos con varios — tu habilidad de dirigirlos funciona igual en todos.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Son <strong>tres talleres mecánicos de primera</strong>: los tres arreglan tu coche. Uno es el más famoso, otro el favorito de los expertos para el trabajo fino, otro viene integrado con la agencia. Vale más saber explicar la falla — \"hace un ruidito al frenar en frío\" — que el logo del taller. Tu habilidad de explicar viaja contigo a donde vayas.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El mismo prompt en dos asistentes distintos:</p><pre><code>\"Hazme la página de una barbería con precios y botón de WhatsApp\"</code></pre><p>Los dos la generan bien, con estilos distintos. Uno quizá más sobrio, otro más creativo. Ninguno está \"mal\" — son estilos, como dos arquitectos con el mismo encargo. Con la práctica descubrirás cuál te acomoda para cada tipo de tarea.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te voy a dar una tarea que también le di a otra IA. Dame tu versión y después dime qué fortalezas tendría tu enfoque comparado con otros posibles.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["ChatGPT", "El que hizo famosa a la IA con el público"], ["Claude", "Favorito de profesionales para escribir y programar"], ["Gemini", "Integrado al ecosistema de Google"]] },
              { tipo: "multiple", pregunta: "¿Qué diferencia principal hay entre la versión gratis y la de paga de estos asistentes?", opciones: ["La de paga no tiene anuncios", "La de paga usa modelos más grandes y capaces", "La gratis no guarda conversaciones", "Son idénticas"], correcta: 1 },
              { tipo: "vf", afirmacion: "Debes elegir un solo asistente de IA y usarlo para todo, siempre.", correcta: false, explicacion: "son herramientas; los profesionales comparan y usan la mejor para cada tarea." },
              { tipo: "completar", frase: "Detrás de cada asistente hay ____ con versiones, como los coches: mismo fabricante, distintos ____.", banco: ["modelos", "motores", "precios", "colores"], respuestas: ["modelos", "motores"] },
              { tipo: "multiple", pregunta: "¿Qué habilidad tuya funciona igual en ChatGPT, Claude y Gemini?", opciones: ["Los atajos de teclado", "Saber dirigir con instrucciones claras", "La memoria de conversaciones", "La configuración de la cuenta"], correcta: 1 }
            ]
          },
          {
            id: "m1-c3",
            titulo: "Tu primer prompt: la diferencia entre pedir y pedir bien",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un <strong>prompt</strong> es lo que le escribes a la IA. Es tu herramienta número uno, y la diferencia entre resultados mediocres y resultados profesionales casi nunca está en la IA — está en el prompt.</p><p>Compara:</p><ul><li>Prompt flojo: <em>\"hazme una página para mi negocio\"</em></li><li>Prompt DEV SYSTEM: <em>\"Hazme una página para mi negocio de postres 'Dulce Hogar'. Debe tener: nombre grande arriba, 3 fotos de productos, precios, botón de WhatsApp al 55-1234-5678, colores rosa y blanco, y que se vea bien en celular.\"</em></li></ul><p>El primero obliga a la IA a adivinar 10 decisiones. El segundo se las da. Misma IA, resultado radicalmente distinto.</p><p>Las 4 piezas de un buen prompt (memorízalas, son tu navaja suiza):</p><ol><li><strong>Contexto</strong> — quién eres y de qué es el proyecto (\"mi negocio de postres Dulce Hogar\")</li><li><strong>Objetivo</strong> — qué quieres exactamente (\"una página con estas 5 cosas: …\")</li><li><strong>Restricciones</strong> — límites y gustos (\"colores rosa y blanco, que cargue rápido\")</li><li><strong>Formato</strong> — cómo quieres la respuesta (\"dame el archivo HTML completo, listo para guardar\")</li></ol><p>No necesitas prompts kilométricos — necesitas prompts <strong>completos</strong>. Tres líneas con las 4 piezas valen más que dos párrafos de rodeos.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Pedir a la IA es como <strong>encargar un pastel</strong>: llegas a la pastelería y dices \"hágame un pastel\"… y recibes lo que sea. O dices: \"pastel de chocolate para 20 personas, que diga Felicidades Marta, sin nuez porque hay alérgicos, para el sábado a las 4\". El pastelero es el mismo. El resultado, no. La IA es el mejor pastelero del mundo — dale la orden completa.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Plantilla que usarás todo el programa:</p><pre><code>[CONTEXTO] Tengo un/a ________ llamado/a ________.\n[OBJETIVO] Necesito que ________.\nDebe incluir: 1) ____ 2) ____ 3) ____\n[RESTRICCIONES] Estilo: ________. Evita: ________.\n[FORMATO] Entrégame ________.</code></pre><p>Guárdala. En la práctica C7 la usarás para crear tu primera página real.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>La jugada maestra — pedirle a la IA que mejore tu propio prompt:</p><blockquote><p>\"Quiero pedirte esto: [tu prompt]. Antes de hacerlo, dime qué información te falta para darme el mejor resultado posible.\"</p></blockquote><p>Con esa línea, la IA te entrevista a ti. De ahí salen los detalles que no sabías que importaban.</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda las 4 piezas del buen prompt en orden:", elementos: ["Contexto", "Objetivo", "Restricciones", "Formato"] },
              { tipo: "multiple", pregunta: "¿Cuál de estos prompts dará mejor resultado?", opciones: ["\"hazme un logo\"", "\"hazme algo bonito para mi negocio\"", "\"Logo para taquería 'El Primo': letras rojas, estilo retro, fondo transparente, formato PNG\"", "\"necesito un logo urgente por favor\""], correcta: 2 },
              { tipo: "completar", frase: "La diferencia entre resultados mediocres y profesionales casi nunca está en la ____, está en el ____.", banco: ["IA", "prompt", "computadora", "suerte"], respuestas: ["IA", "prompt"] },
              { tipo: "quehace", codigo: "\"Antes de responder, dime qué información te falta\"", pregunta: "Tu compañero escribe: \"Antes de responder, dime qué información te falta\". ¿Qué está logrando?", opciones: ["Confundir a la IA", "Que la IA lo entreviste y descubra los detalles faltantes", "Ahorrar tokens", "Que la IA responda más rápido"], correcta: 1 },
              { tipo: "vf", afirmacion: "Un buen prompt debe ser lo más largo posible.", correcta: false, explicacion: "debe ser completo (las 4 piezas), no largo." }
            ]
          },
          {
            id: "m1-c4",
            titulo: "El contexto: por qué la IA \"olvida\" y cómo evitarlo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Te ha pasado o te pasará: llevas una conversación larga con la IA, todo va perfecto, y de repente… se le olvida algo que le dijiste hace rato. No está fallando: te topaste con la <strong>ventana de contexto</strong>.</p><p>El contexto es la memoria de trabajo de la conversación: todo lo que se ha dicho (tus mensajes y sus respuestas). Esa memoria tiene un límite de tamaño, medido en <strong>tokens</strong> — pedacitos de palabra (una palabra son ~1-2 tokens). Cuando la conversación excede el límite, lo más viejo se resume o se pierde.</p><p>Consecuencias prácticas:</p><ul><li>En conversaciones largas, la IA puede \"olvidar\" acuerdos del inicio</li><li>Cada conversación nueva <strong>empieza de cero</strong>: la IA no recuerda la de ayer (salvo funciones especiales de memoria)</li><li>Pegar documentos enormes se come el contexto rapidísimo</li></ul><p>Las 3 reglas del constructor para manejarlo:</p><ol><li><strong>Una conversación, una misión.</strong> ¿Cambias de tema? Abre conversación nueva.</li><li><strong>Re-ancla lo importante.</strong> En conversaciones largas, re-pega el acuerdo clave: \"Recuerda: colores rosa/blanco, WhatsApp 55-1234-5678\".</li><li><strong>El resumen puente.</strong> Antes de cerrar una sesión larga: <em>\"Resume todo lo acordado en esta conversación para pegarlo mañana en una nueva\"</em>. Ese resumen es tu memoria portátil.</li></ol>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La IA es un <strong>consultor brillante con memoria de pizarrón</strong>: todo lo que hablan se va anotando en un pizarrón enorme, y mientras esté ahí, lo usa todo. Pero el pizarrón se llena — y para seguir escribiendo hay que borrar lo de arriba. Y cada nueva reunión, pizarrón limpio. El cliente listo llega a cada reunión con el resumen de la anterior y lo pega en la esquina.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Fin de una sesión de trabajo bien cerrada:</p><pre><code>Tú: Resume en una lista: qué construimos hoy, qué decisiones\n    tomamos, y qué falta. Lo usaré para continuar mañana.\n\nIA: RESUMEN DE SESIÓN — Página \"Dulce Hogar\":\n    ✔ Hecho: estructura, colores rosa/blanco, botón WhatsApp\n    ✔ Decidido: 3 productos con foto, precios visibles\n    ⏳ Falta: sección de pedidos y publicarla en internet</code></pre><p>Mañana pegas eso en una conversación nueva y sigues como si nada. Ese hábito te separa de los amateurs desde la semana 1.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Resume todo lo acordado en esta conversación en una lista breve, para que mañana pueda pegarla en una conversación nueva y continuar donde nos quedamos.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es la ventana de contexto?", opciones: ["El navegador donde corre la IA", "La memoria de trabajo de la conversación, con límite de tamaño", "La velocidad de respuesta", "El historial de todas tus conversaciones"], correcta: 1 },
              { tipo: "completar", frase: "El contexto se mide en ____, y cuando se llena, lo más ____ se resume o se pierde.", banco: ["tokens", "viejo", "pixeles", "nuevo"], respuestas: ["tokens", "viejo"] },
              { tipo: "vf", afirmacion: "La IA recuerda automáticamente todas tus conversaciones anteriores.", correcta: false, explicacion: "cada conversación empieza de cero (salvo funciones especiales de memoria)." },
              { tipo: "ordenar", instruccion: "El flujo del \"resumen puente\":", elementos: ["pedir resumen al final de la sesión", "abrir conversación nueva al día siguiente", "pegar el resumen en la conversación nueva", "continuar donde te quedaste"] },
              { tipo: "multiple", pregunta: "Llevas 2 horas en una conversación y la IA \"olvidó\" el color que acordaron al inicio. ¿Qué haces?", opciones: ["Regañarla hasta que recuerde", "Re-anclar: repetir el acuerdo clave en un mensaje", "Borrar tu cuenta", "Esperar a que recuerde sola"], correcta: 1 }
            ]
          },
          {
            id: "m1-c5",
            titulo: "Alucinaciones: cuando la IA inventa con toda seguridad",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Una <strong>alucinación</strong> es cuando la IA da información falsa con total confianza: cita un libro que no existe, inventa una función de programación, asegura un precio que nunca fue. No es mentira (mentir requiere intención) — es el efecto secundario de cómo funciona: predice la respuesta más <em>plausible</em>, y lo plausible no siempre es lo <em>cierto</em>.</p><p>Cuándo alucinan más:</p><ul><li>Datos muy específicos: cifras, fechas, nombres, artículos de leyes, precios</li><li>Temas recientes (posteriores a su entrenamiento)</li><li>Cuando la pregunta presupone algo falso (\"¿por qué Netlify cobra por cada visita?\" — la IA puede seguirte la corriente aunque la premisa sea falsa)</li></ul><p>Tu protocolo anti-alucinación (3 reglas):</p><ol><li><strong>Dato crítico se verifica.</strong> Si un número o hecho va a una decisión de dinero, salud o legal: buscar la fuente original, siempre.</li><li><strong>Pregunta sin cargar los dados.</strong> Mejor \"¿Netlify cobra por visitas? ¿cómo funciona su cobro?\" que asumir la respuesta en la pregunta.</li><li><strong>Pide el nivel de certeza.</strong> \"¿Qué tan seguro estás? ¿Qué debería verificar por mi cuenta?\" — la IA es sorprendentemente honesta sobre sus dudas cuando le preguntas.</li></ol><p>En código las alucinaciones existen pero se delatan solas: código inventado truena al ejecutarse. Por eso construir con IA es más seguro que pedirle datos — el código se prueba, el dato hay que verificarlo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La IA a veces es como el <strong>amigo que nunca dice \"no sé\"</strong>: le preguntas una dirección y te la da con seguridad total… aunque no la conozca. No es mala fe — es que su cerebro completa el hueco con lo que \"suena correcto\". Con ese amigo aprendiste a hacer lo mismo que harás con la IA: para llegar a la boda, confirmas por otro lado.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Tú:  ¿Cuánto cobra Netlify por hosting?\n\nIA:  El plan gratuito de Netlify incluye 100 GB de ancho\n     de banda al mes [...]\n\nTú:  ¿Qué tan seguro estás de esas cifras? ¿Dónde las verifico?\n\nIA:  Los precios pueden haber cambiado desde mi entrenamiento.\n     Verifica en netlify.com/pricing — esa es la fuente oficial.</code></pre><p>Segunda pregunta: 10 segundos. Decisión de negocio con dato verificado: no tiene precio.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"¿Qué partes de tu respuesta son hechos verificables y cuáles son tu mejor estimación? Dame los enlaces o fuentes donde puedo confirmar los datos importantes.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una alucinación de IA?", opciones: ["Un error de conexión", "Información falsa dicha con total confianza", "Una respuesta lenta", "Cuando la IA se niega a responder"], correcta: 1 },
              { tipo: "relacionar", pares: [["Cifras y fechas específicas", "Riesgo alto"], ["Temas posteriores a su entrenamiento", "Riesgo alto"], ["Explicar un concepto general", "Riesgo bajo"], ["Generar código (que se puede probar)", "Se delata solo al ejecutar"]] },
              { tipo: "completar", frase: "La IA predice la respuesta más ____, y lo plausible no siempre es lo ____.", banco: ["plausible", "cierto", "rápida", "barato"], respuestas: ["plausible", "cierto"] },
              { tipo: "vf", afirmacion: "Si un dato de la IA va a una decisión de dinero, basta con que la IA suene segura.", correcta: false, explicacion: "dato crítico se verifica en la fuente original, siempre." },
              { tipo: "quehace", codigo: "\"¿por qué Netlify cobra por cada visita?\"", pregunta: "Preguntas \"¿por qué Netlify cobra por cada visita?\" (premisa falsa). ¿Cuál es el riesgo?", opciones: ["La IA se ofende", "La IA puede seguirte la corriente y \"explicar\" algo que no es cierto", "La IA bloquea tu cuenta", "Ninguno, la IA siempre corrige premisas falsas"], correcta: 1 }
            ]
          },
          {
            id: "m1-c6",
            titulo: "El prompt de código perfecto: contexto, objetivo, restricciones, formato",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En C3 aprendiste las 4 piezas del buen prompt (Contexto, Objetivo, Restricciones, Formato). Ahora las adaptas al caso más importante de tu carrera: pedir CÓDIGO. Los prompts de código tienen su propia anatomía, y dominarla es la habilidad que te va a devolver el $7,000 de este mes multiplicado por mil.</p><p>Anatomía del prompt de código PERFECTO:</p><ol><li><strong>Rol y stack</strong> — dile a la IA qué es y con qué herramientas trabajas.<br><blockquote>\"Eres un desarrollador senior de frontend. El proyecto usa HTML, CSS y JavaScript vanilla, sin frameworks.\"</blockquote></li><li><strong>Contexto del código existente</strong> — qué hay ya (así no te reinventa el mundo).<br><blockquote>\"Ya tengo <code>index.html</code> con la estructura básica y <code>styles.css</code> con los estilos. Aquí van los archivos: [pegas o describes].\"</blockquote></li><li><strong>Lo que quieres construir</strong> — en presente, específico.<br><blockquote>\"Necesito agregar un botón 'Contáctanos' en el header, que abra WhatsApp al número +52 55 1234 5678 con un mensaje predefinido.\"</blockquote></li><li><strong>Restricciones</strong> — los límites, los NO importantes.<br><blockquote>\"No agregues librerías nuevas. No cambies los colores existentes. Que funcione bien en celular.\"</blockquote></li><li><strong>Formato de entrega</strong> — cómo quieres la respuesta.<br><blockquote>\"Dame los cambios exactos: qué línea agregar y en qué archivo. Al final, un resumen en 3 bullets de qué cambió.\"</blockquote></li><li><strong>Los 'tests' finales</strong> — cómo saber que quedó bien.<br><blockquote>\"Antes de darme el código, dime cómo voy a probar que funciona correctamente.\"</blockquote></li></ol><p>Guarda esta plantilla mental. Es tu superpoder para el resto del programa.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un prompt de código es como el <strong>brief de un director a un artista</strong>: no le dices \"hazme algo bonito\"; le dices el estilo, el mensaje, el formato de entrega, el tamaño, la fecha, y qué se considera \"listo\". El artista bueno con brief bueno = magia. Sin brief = decepción.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Rol: Eres un desarrollador senior de frontend.\nStack: HTML/CSS/JS vanilla, sin frameworks.\nContexto: Ya tengo index.html y styles.css. Los pego abajo.\nObjetivo: Agregar un botón \"Contáctanos\" en el header con\n          enlace a WhatsApp (+52 55 1234 5678) y mensaje\n          predefinido \"Hola, vi tu página\".\nRestricciones: No librerías nuevas. Que se vea bien en móvil.\nFormato: Muéstrame las líneas exactas a agregar y en qué archivo.\nTests: Antes del código, dime cómo compruebo que quedó bien.\n\n[pego los archivos]</code></pre><p>Le acabas de dar a la IA todo lo que un buen colega necesita. Lo que devuelva será casi siempre correcto a la primera.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>Un metaprompt (un prompt para mejorar prompts):</p><blockquote><p>\"Te voy a pedir algo. Antes de que respondas, evalúa mi prompt: ¿tiene rol y stack claros? ¿contexto suficiente? ¿objetivo específico? ¿restricciones? ¿formato de entrega? Si le falta algo, pídemelo antes de responder.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda las 6 piezas del prompt de código en orden natural:", elementos: ["Rol y stack", "Contexto", "Objetivo", "Restricciones", "Formato", "Tests"] },
              { tipo: "multiple", pregunta: "¿Cuál pieza le dice a la IA con qué herramientas trabajas?", opciones: ["Objetivo", "Restricciones", "Rol y stack", "Tests"], correcta: 2 },
              { tipo: "completar", frase: "Las restricciones son los ____ y los ____ importantes: qué NO debe hacer la IA.", banco: ["límites", "NO", "estilos", "datos"], respuestas: ["límites", "NO"] },
              { tipo: "vf", afirmacion: "Pedirle a la IA \"los tests\" antes del código es perder tiempo.", correcta: false, explicacion: "te dice cómo comprobar que quedó bien; si no puede decirlo, es señal de que el prompt está incompleto." },
              { tipo: "quehace", codigo: "\"evalúa mi prompt antes de responder; si le falta algo, pídemelo\"", pregunta: "Le dices a la IA: \"evalúa mi prompt antes de responder; si le falta algo, pídemelo.\" ¿Qué logras?", opciones: ["Que la IA se enoje", "Que la IA descubra las piezas faltantes antes de generar código malo", "Que la IA responda más rápido", "Que la IA use menos tokens"], correcta: 1 }
            ]
          },
          {
            id: "m1-c7",
            titulo: "PRÁCTICA: tu primera página HTML creada con IA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hoy no lees teoría. Hoy <strong>construyes</strong>. Al terminar esta lección vas a tener un archivo HTML real, hecho por IA dirigida por ti, corriendo en tu navegador. No leído, no visto — construido.</p><p>Los pasos, secos:</p><ol><li><strong>Abre tu asistente de IA</strong> (ChatGPT, Claude o Gemini — el que uses).</li><li><strong>Copia este prompt</strong> (o adáptalo con TUS datos):</li></ol><pre><code>Rol: Eres un desarrollador senior de frontend.\nStack: HTML puro, CSS embebido en el mismo archivo. Sin frameworks\n       ni librerías externas. Un solo archivo `index.html`.\nObjetivo: Crea la página de un negocio ficticio llamado\n          \"Tortas El Güero\". Debe tener:\n          - Un encabezado grande con el nombre\n          - Una descripción corta (2 líneas)\n          - 3 productos con nombre y precio (invéntalos)\n          - Un botón grande al final que dice \"Pídenos por WhatsApp\"\n            y abre https://wa.me/5512345678\nRestricciones: Colores amarillo (#f59e0b) y café oscuro (#1a0f0a).\n               Que se vea bien en celular (responsive). Sin imágenes\n               (usa emojis 🌮 🥪 🌯 en los productos).\nFormato: Dame el archivo `index.html` completo, listo para\n         guardar y abrir. Nada de explicaciones antes del código.\nTests: Al final del código, dime cómo lo pruebo en mi computadora.</code></pre><ol start=\"3\"><li><strong>Guarda la respuesta</strong>: crea una carpeta <code>mi-primera-pagina</code> en tu escritorio y dentro un archivo <code>index.html</code>. Pega el código que te dio la IA. Guarda.</li><li><strong>Ábrelo</strong>: doble clic en <code>index.html</code>. Tu navegador abre. Ahí está tu página. Hecha por ti dirigiendo a una IA.</li><li><strong>Prueba el botón de WhatsApp</strong>: si tienes WhatsApp Web o la app, debe abrir un chat con el número.</li></ol><p>Si algo salió mal, no toques el código — vuelve al chat y di: \"Este es el archivo que me diste [pega]. Al abrirlo pasa esto: [describe]. ¿Qué falta?\".</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es tu <strong>primer plato cocinado</strong>. No es el más elegante ni sabes por qué cada ingrediente va — pero salió, se sirve, se come. La chispa de \"sí puedo\" que sientes hoy es la misma que te va a llevar 12 meses. Guarda esta página; en el Mes 12 la vas a comparar con tu SaaS final y no vas a creerlo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Al abrir el archivo verás algo tipo:</p><pre><code>    🌮 Tortas El Güero 🥪\n\n  La torta que tu día necesita.\n  Hechas al momento, con amor.\n\n  🌮 Torta Clásica ......... $65\n  🥪 Torta Cubana .......... $85\n  🌯 Torta Especial ........ $95\n\n     [ Pídenos por WhatsApp ]</code></pre><p>Colores amarillo y café. Todo centrado. Botón grande que abre WhatsApp al tocarlo. Y todo eso lo dirigiste tú.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>Después de tener la página, para entenderla:</p><blockquote><p>\"Ahora explícame el archivo que me acabas de dar, sección por sección, como si me lo contara un colega, no un manual. Quiero saber qué hace cada bloque.\"</p></blockquote><p>Esa es la Lección C8. Sigue después de terminar esta.</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda los pasos de la práctica en orden:", elementos: ["Copiar el prompt al asistente", "Guardar en index.html", "Doble clic para abrirlo en el navegador", "Probar el botón de WhatsApp"] },
              { tipo: "multiple", pregunta: "Si algo sale mal al abrir tu página, ¿qué debes hacer PRIMERO?", opciones: ["Editar el código a mano", "Volver al chat y describir el problema a la IA", "Descargar otro navegador", "Reiniciar la computadora"], correcta: 1 },
              { tipo: "completar", frase: "Guardas el archivo con extensión ____ dentro de una carpeta como <code>mi-primera-pagina</code>, y para verlo le das ____ clic.", banco: [".html", "doble", ".txt", "derecho"], respuestas: [".html", "doble"] },
              { tipo: "vf", afirmacion: "Esta primera página tiene que verse profesional para considerar la lección aprobada.", correcta: false, explicacion: "el objetivo es TENER una página real hecha por ti; el pulido viene después." },
              { tipo: "quehace", codigo: "\"sin imágenes, usa emojis\"", pregunta: "Le pides a la IA \"sin imágenes, usa emojis 🌮 🥪 🌯 en los productos\". ¿Por qué?", opciones: ["Porque las imágenes son ilegales", "Para tener una primera página completa sin necesitar archivos extra", "Porque los emojis cargan más rápido", "Porque HTML no soporta imágenes"], correcta: 1 }
            ]
          },
          {
            id: "m1-c8",
            titulo: "Leer lo que la IA generó: entender tu propia página",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Regla no negociable de este programa: <strong>no publicas código que no entiendes</strong>. La IA no es un oráculo — es un colaborador. Y tú, como director, revisas antes de firmar. Esa disciplina te separa del 90% de los \"vibe coders\" del mundo.</p><p>Cómo se lee el <code>index.html</code> que generó la IA en C7 (aplicable a cualquier archivo web):</p><ol><li><strong>Empieza por la estructura general</strong>. Todo HTML tiene esta forma:<br><pre><code>&lt;!doctype html&gt;\n&lt;html&gt;\n  &lt;head&gt; ← metadata: título de la pestaña, estilos ← &lt;/head&gt;\n  &lt;body&gt; ← lo que se ve en pantalla ← &lt;/body&gt;\n&lt;/html&gt;</code></pre>Sin memorizar: reconoce. Head = \"detrás del escenario\"; Body = \"lo que ve el público\".</li><li><strong>Localiza los pedazos que ya conoces</strong> (B7): <code>&lt;h1&gt;</code> (título grande), <code>&lt;p&gt;</code> (párrafo), <code>&lt;a&gt;</code> (enlace), <code>&lt;button&gt;</code> (botón). Si la IA usó <code>&lt;div&gt;</code> o <code>&lt;section&gt;</code>, esas son \"cajas\" agrupadoras — puedes pensar en ellas como carpetas dentro del body.</li><li><strong>Encuentra el CSS</strong>. Suele estar dentro de <code>&lt;style&gt;...&lt;/style&gt;</code> en el head. Ahí ves los colores, tamaños, alineaciones. Reglas de la forma <code>elemento { propiedad: valor; }</code> (B8).</li><li><strong>Pregúntale a la IA lo que no entiendas.</strong> Copia el bloque que no captas y di: \"Explícame estas líneas específicas\".</li></ol>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Recibir el código de la IA es como recibir un <strong>mueble armado por otro</strong>: se ve bonito, funciona… hasta que se afloja un tornillo y no sabes cuál. Entender la estructura mientras funciona es tu manual de mantenimiento futuro. El día que se rompa (y algún día se romperá), vas a saber dónde apretar.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un fragmento del <code>index.html</code> de C7 que ya puedes leer casi solo:</p><pre><code>&lt;body&gt;\n  &lt;h1&gt;🌮 Tortas El Güero 🥪&lt;/h1&gt;\n  &lt;p&gt;La torta que tu día necesita.&lt;/p&gt;\n  &lt;div class=\"productos\"&gt;\n    &lt;p&gt;🌮 Torta Clásica — $65&lt;/p&gt;\n    &lt;p&gt;🥪 Torta Cubana — $85&lt;/p&gt;\n  &lt;/div&gt;\n  &lt;a href=\"https://wa.me/5512345678\" class=\"btn\"&gt;\n    Pídenos por WhatsApp\n  &lt;/a&gt;\n&lt;/body&gt;</code></pre><p>Léelo en voz alta: \"en el body, hay un h1 con el título, un párrafo con la descripción, una caja de productos con dos párrafos adentro, y un enlace estilo botón que abre WhatsApp\". Acabas de leer código.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Este es mi index.html [pegas el archivo]. Explícamelo así:</p><ol><li>Una tabla con cada sección del <code>&lt;body&gt;</code> y qué muestra en pantalla.</li><li>Una lista de las reglas CSS y qué controla cada una.</li><li>Un párrafo final con lo que este archivo NO tiene todavía (por ejemplo, meta tags de SEO, favicon).\"</li></ol></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["<head>", "Metadata (título de pestaña, estilos)"], ["<body>", "Lo que se ve en la pantalla"], ["<style>", "El CSS embebido"], ["<div>", "Una caja agrupadora"]] },
              { tipo: "vf", afirmacion: "En este programa, es aceptable publicar código que no entiendes si funciona.", correcta: false, explicacion: "nunca publicas código que no entiendes; esa es la disciplina que te separa del promedio." },
              { tipo: "completar", frase: "Head es 'detrás del ____' y body es 'lo que ve el ____'.", banco: ["escenario", "público", "código", "programador"], respuestas: ["escenario", "público"] },
              { tipo: "quehace", codigo: "<a href=\"https://wa.me/5512345678\" class=\"btn\">Pídenos</a>", pregunta: "Ves esta línea: <code>&lt;a href=\"https://wa.me/5512345678\" class=\"btn\"&gt;Pídenos&lt;/a&gt;</code>. ¿Qué muestra?", opciones: ["Una imagen del logo de WhatsApp", "Un enlace con texto \"Pídenos\" (con estilo de botón por su class) que abre WhatsApp al número indicado", "Un formulario para ingresar el número", "Un video promocional"], correcta: 1 },
              { tipo: "multiple", pregunta: "No entiendes 4 líneas del código. ¿Qué haces?", opciones: ["Las borras y ves qué pasa", "Le pides a la IA que te las explique una por una", "Las ignoras", "Publicas la página sin mirar"], correcta: 1 }
            ]
          },
          {
            id: "m1-c9",
            titulo: "PRÁCTICA: cambiar colores y textos dirigiendo a la IA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu página de C7 existe. Ahora vas a <strong>iterar</strong> — la palabra sagrada de este programa. Iterar es cambiar-probar-cambiar-probar hasta que quede como tú quieres. Los amateurs se paralizan buscando la versión perfecta a la primera; los profesionales sueltan versiones rápido y las mejoran a la vuelta.</p><p>Los pasos:</p><ol><li><strong>Ábrela otra vez</strong> en el navegador para tenerla al ojo.</li><li><strong>Vuelve al chat</strong> donde la creaste. La IA todavía tiene el contexto (¿te acuerdas C4?) — puedes pedir cambios sin volver a describir el proyecto.</li><li><strong>Pide UN cambio a la vez.</strong> Ejemplos reales:</li></ol><pre><code>Cambia el color amarillo por un naranja más profundo (#ea580c),\ny agrega un cuarto producto: \"🌮 Torta Vegetariana\" a $70.\nDame el archivo completo actualizado.</code></pre><p>O:</p><pre><code>El título se ve muy pequeño. Hazlo mucho más grande, y agrégale\nuna sombra suave que le dé un toque premium. Mismo archivo.</code></pre><p>O:</p><pre><code>El botón de WhatsApp está muy tímido. Que sea grande, en un color\nverde WhatsApp (#25D366), con letras blancas y bordes redondeados.</code></pre><ol start=\"4\"><li><strong>Actualiza tu archivo</strong>: copia el nuevo <code>index.html</code>, pégalo reemplazando el viejo, guarda, y refresca el navegador (F5 o Ctrl+R). El cambio aparece.</li><li><strong>Repite</strong> hasta que la página te guste. Cada iteración toma menos de 60 segundos.</li></ol><p>Este loop — pedir, pegar, refrescar — es cómo se construye software con IA. Vas a hacerlo miles de veces.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Iterar con IA es como <strong>probarse ropa en tienda</strong>: te pruebas, te ves al espejo, cambias, te ves al espejo. Nadie compra la primera prenda sin verse en el espejo. Y nadie construye software sin refrescar el navegador entre cambios.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un ciclo real:</p><pre><code>Tú:  El precio de las tortas se ve chico y disperso. Alinéalos\n     a la derecha del nombre, en negrita.\n\nIA:  Listo, aquí el CSS actualizado. Solo cambiaron 4 líneas\n     dentro del &lt;style&gt;: agregué display: flex a .productos p\n     y justify-content: space-between. Los precios ahora en\n     &lt;span&gt; con font-weight: bold.\n     [código nuevo]\n\nTú:  [pega, guarda, refresca] Perfecto. Ahora quiero que al\n     pasar el mouse sobre un producto, se ilumine ligeramente.</code></pre><p>Ese ida-y-vuelta es la vida real de un constructor con IA. Y cada refresh te enseña algo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>Prompt de oro para iterar sin romper:</p><blockquote><p>\"Voy a pedirte cambios. Antes de darme código, contéstame en una línea: ¿este cambio va a afectar SOLO lo que pedí, o puede romper algo más? Si hay riesgo, dime qué probar después.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es \"iterar\"?", opciones: ["Escribir el código a mano", "Cambiar-probar-cambiar-probar hasta que quede bien", "Cerrar el navegador y abrirlo", "Cambiar de asistente de IA"], correcta: 1 },
              { tipo: "completar", frase: "El loop de trabajo con IA es: ____ el cambio → pegar el código → ____ el navegador → repetir.", banco: ["pedir", "refrescar", "cerrar", "imprimir"], respuestas: ["pedir", "refrescar"] },
              { tipo: "vf", afirmacion: "Debes pedir todos los cambios en un solo mensaje gigante.", correcta: false, explicacion: "pide UN cambio a la vez; los mensajes atómicos se corrigen más fácil si algo sale mal." },
              { tipo: "ordenar", instruccion: "El ciclo de iteración:", elementos: ["pedir el cambio en el chat", "pegar y guardar", "refresh en el navegador", "ver el resultado"] },
              { tipo: "quehace", codigo: "\"antes de darme código, dime si el cambio puede romper algo más\"", pregunta: "Le pides a la IA: \"antes de darme código, dime si el cambio puede romper algo más\". ¿Qué buscas?", opciones: ["Ahorrar tokens", "Que la IA piense en efectos secundarios antes de generar", "Que la IA se disculpe", "Confundir a la IA"], correcta: 1 }
            ]
          },
          {
            id: "m1-c10",
            titulo: "Guardar tu proyecto: archivos, carpeta y orden",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya tienes una página iterada (C9). Ahora vas a hacer algo aburrido y crítico: <strong>guardar tu proyecto como lo hacen los profesionales</strong>. Un proyecto es más que un archivo — es una carpeta con estructura, y esa estructura te ahorra caos en 6 meses.</p><p>Estructura mínima recomendada, ya para tu primera página:</p><pre><code>mi-primera-pagina/\n├── index.html      ← el archivo principal\n├── README.md       ← qué es esto y cómo abrirlo\n└── .gitignore      ← lista de archivos que Git ignorará (Mes 2)</code></pre><p>Reglas de nombre para carpetas y archivos (te van a ahorrar dolores):</p><ul><li><strong>Sin espacios</strong>: <code>mi-primera-pagina</code>, no <code>Mi Primera Página</code>. Los espacios en rutas son un dolor de cabeza en la terminal.</li><li><strong>Sin acentos</strong>: <code>contrasenas.js</code>, no <code>contraseñas.js</code>. Los servidores a veces los cambian por caracteres raros.</li><li><strong>Todo en minúsculas</strong> (excepto abreviaturas famosas como <code>README</code>).</li><li><strong>Guiones para separar palabras</strong>: <code>mi-tienda-online</code> o <code>mi_tienda_online</code> (elige un estilo y sé consistente).</li></ul><p>Tres archivos que aparecen en todo proyecto profesional:</p><ul><li><strong>README.md</strong> — la carta de presentación: \"esto es X, se abre así, hace esto\". El primer archivo que abre cualquiera que herede tu proyecto (incluido tú mismo en 3 meses).</li><li><strong>.gitignore</strong> — le dice a Git (Mes 2) qué archivos no debe rastrear (contraseñas, dependencias pesadas). No lo vamos a usar hoy, pero acostúmbrate a verlo.</li><li><strong>index.html</strong> — nombre estándar para \"la página principal de un sitio\". Los servidores web buscan este nombre por default cuando alguien visita tu dominio.</li></ul><p>Guarda todo así desde el día 1, y en el Mes 2 (Git) todo va a fluir naturalmente.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un proyecto sin estructura es un <strong>cuarto de adolescente</strong>: todo funciona hasta que necesitas encontrar una calceta específica. Un proyecto ordenado es una <strong>tienda organizada</strong>: cualquiera que entra sabe dónde está cada cosa. La diferencia en esfuerzo es de 5 minutos hoy, y 5 horas en 6 meses.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Tu README.md más básico:</p><pre><code># Mi Primera Página\n\nLanding page para \"Tortas El Güero\", hecha con HTML y CSS.\n\n## Cómo abrirla\n1. Descarga esta carpeta.\n2. Doble clic en `index.html`.\n3. Se abre en tu navegador.\n\n## Estado\n- [x] Estructura básica\n- [x] Botón de WhatsApp\n- [ ] Sección de horarios\n- [ ] Publicar en Netlify (Lección C16)</code></pre><p>Ese archivo no es opcional en el mundo profesional. Es tu firma.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Genera un README.md profesional para mi proyecto [descríbelo]. Incluye: título, descripción en 2 líneas, cómo abrirlo, estado del proyecto con checklist, y una sección 'Notas' donde apunte pendientes. Formato markdown.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["index.html", "La página principal (el nombre estándar)"], ["README.md", "Carta de presentación del proyecto"], [".gitignore", "Lista de archivos que Git ignorará"]] },
              { tipo: "multiple", pregunta: "¿Cuál es el mejor nombre para una carpeta de proyecto?", opciones: ["Mi Proyecto Nuevo", "mi-proyecto-nuevo", "Mi Proyecto Nuevo (final)", "proyectoNuevoVersión_2"], correcta: 1 },
              { tipo: "vf", afirmacion: "Los espacios en nombres de carpetas y archivos siempre son buena idea porque se leen bonito.", correcta: false, explicacion: "causan dolores de cabeza en terminal y servidores; usa guiones o guiones bajos." },
              { tipo: "completar", frase: "Los servidores web buscan por default el archivo llamado ____ cuando alguien visita tu dominio.", banco: ["index.html", "home.html", "main.html", "default.html"], respuestas: ["index.html"] },
              { tipo: "quehace", codigo: "\"genera un README.md profesional con checklist de estado\"", pregunta: "Le pides a la IA \"genera un README.md profesional con checklist de estado\". ¿Qué ganas?", opciones: ["Un archivo bonito para presumir", "Documentación viva de tu proyecto que te salva la memoria en meses", "Un archivo de configuración obligatorio", "Que la página cargue más rápido"], correcta: 1 }
            ]
          },
          { id: "m1-c11", titulo: "PRÁCTICA: agregar una sección con imagen", proximamente: true },
          { id: "m1-c12", titulo: "Cuando la IA se equivoca: el arte de pedir correcciones", proximamente: true },
          { id: "m1-c13", titulo: "Iterar: la conversación como herramienta de construcción", proximamente: true },
          { id: "m1-c14", titulo: "PRÁCTICA: hacer tu página responsive (que se vea bien en celular)", proximamente: true },
          { id: "m1-c15", titulo: "Publicar I: qué es hosting y qué opciones existen", proximamente: true },
          { id: "m1-c16", titulo: "PRÁCTICA: Netlify Drop — tu página EN VIVO en internet", proximamente: true },
          { id: "m1-c17", titulo: "Tu URL en el mundo: qué pasa por detrás cuando alguien la abre", proximamente: true },
          { id: "m1-c18", titulo: "PRÁCTICA: página para un negocio I — escribir el brief", proximamente: true },
          { id: "m1-c19", titulo: "PRÁCTICA: página para un negocio II — dirigir la construcción", proximamente: true },
          { id: "m1-c20", titulo: "PRÁCTICA: página para un negocio III — publicar y presumir", proximamente: true },
          { id: "m1-c21", titulo: "El mapa de herramientas: Copilot, Cursor, Claude Code, v0, Bolt", proximamente: true },
          { id: "m1-c22", titulo: "¿Qué es un editor de código? VS Code sin miedo", proximamente: true },
          { id: "m1-c23", titulo: "PRÁCTICA: abrir tu proyecto en VS Code", proximamente: true },
          { id: "m1-c24", titulo: "La IA dentro del editor: autocompletado y chat integrado", proximamente: true },
          { id: "m1-c25", titulo: "Versiones de tu trabajo: copias, respaldos y el problema que Git resolverá (Mes 2)", proximamente: true },
          { id: "m1-c26", titulo: "PRÁCTICA: rehacer tu página personal, versión mejorada", proximamente: true },
          { id: "m1-c27", titulo: "Pedirle a la IA que explique código ajeno (tu superpoder de lectura)", proximamente: true },
          { id: "m1-c28", titulo: "Los límites: qué NO puede hacer la IA (todavía) y dónde entras tú", proximamente: true },
          { id: "m1-c29", titulo: "Tu flujo personal de trabajo con IA para todo el programa", proximamente: true },
          { id: "m1-c30", titulo: "Repaso + arranque del proyecto final del mes", proximamente: true }
        ]
      }
    }
  }
};
