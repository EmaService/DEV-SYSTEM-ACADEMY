window.DEV_SYSTEM_LECCIONES = {
  "m1": {
    titulo: "Cómo funciona el mundo digital",
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
          {
            id: "m1-a11",
            titulo: "Dependencias y librerías: nadie construye desde cero",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Nadie construye software moderno desde cero. Los programadores — y las IAs — reutilizan <strong>piezas de código ya hechas</strong> llamadas <strong>librerías</strong> (en inglés, <em>library</em>). Una librería es código listo que resuelve una tarea concreta: formatear fechas, comprimir imágenes, aceptar pagos, dibujar una gráfica. No tienes que escribirla: la descargas y la usas.</p><p>Cada librería que tu proyecto usa se llama una <strong>dependencia</strong> — tu proyecto <em>depende</em> de ella para funcionar. Suena técnico, pero es simple: si tu página usa una librería de pagos y esa librería no está, tu botón de \"Pagar\" deja de funcionar.</p><p>Cuando diriges a una IA, ella toma decisiones de dependencias por ti, pero tú vas a verlas en sus reportes: \"instalé <code>express</code> para el servidor\" o \"agregué la librería de pagos <code>stripe</code>\". Que no te sorprenda: un proyecto sencillo puede tener cientos de dependencias, porque cada una resuelve un pedacito del rompecabezas.</p><p>Tu trabajo no es memorizarlas, es <strong>entender la conversación</strong>: ¿qué pieza se está agregando y para qué? Cuando la IA te diga \"agregué una dependencia\", ya sabes que está colocando una pieza de Lego que no tuvo que fabricar.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Construir software es como <strong>armar una casa con material ya fabricado</strong>: nadie funde su propio acero ni hace sus propios clavos. Compras ladrillos, cables y bombillas de proveedores especializados, y tu trabajo es el diseño y el ensamble. Las librerías son esos proveedores: te dan la pieza probada y lista, y tú decides dónde va.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cuando una IA instala una librería, te lo reporta así:</p><pre><code>instalé express v4.18.2\n  → maneja las rutas del servidor (qué hacer en /, /productos, etc.)\n\ninstalé morgan\n  → registra cada petición que llega (log del servidor)</code></pre><p>Cada línea es una pieza que tu proyecto ahora usa. Sin escribir una línea de código, tu proyecto ya tiene un servidor y un registro de actividad — gracias a piezas prestadas.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Estoy construyendo [mi proyecto] con IA. ¿Qué librerías me recomiendas para [la función principal]? Explícame qué hace cada una en una línea, cuáles son las más confiables, y cuál agregarías primero.\"</p></blockquote><p>Ese prompt te entrena para leer sus reportes de dependencias como quien lee una lista de compras.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una librería?", opciones: ["Un programa que borra archivos", "Una pieza de código ya hecha que resuelve una tarea", "Un tipo de disco duro", "Una carpeta de imágenes"], correcta: 1 },
              { tipo: "completar", frase: "Las ____ son las piezas de código listo que tu proyecto usa; tu proyecto ____ de ellas para funcionar.", banco: ["librerías", "depende", "imágenes", "recuerda"], respuestas: ["librerías", "depende"] },
              { tipo: "relacionar", pares: [["express", "Rutas del servidor"], ["morgan", "Registro de peticiones (log)"], ["stripe", "Pagos con tarjeta"], ["chart.js", "Gráficas"]] },
              { tipo: "vf", afirmacion: "Es normal que un proyecto moderno use cientos de librerías.", correcta: true, explicacion: "cada una resuelve un pedacito del rompecabezas." },
              { tipo: "quehace", codigo: "instalé express", pregunta: "Una IA reporta: \"instalé <code>express</code>\". ¿Qué significa?", opciones: ["Desinstaló el servidor", "Agregó una librería para manejar las rutas del servidor", "Borró la base de datos", "Actualizó el navegador"], correcta: 1 }
            ]
          },
          {
            id: "m1-a12",
            titulo: "Versiones: por qué 2.0 puede romper lo que 1.9 hacía bien",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Todo software tiene un número de versión, y ese número no es un capricho: es un código. El clásico formato es <strong>1.9.2</strong> — tres números separados por puntos, cada uno con un significado:</p><ul><li>El <strong>primero</strong> (major, \"la mayor\"): cambios grandes. <strong>Aquí es donde se puede romper algo.</strong> De 1.9 a 2.0 no es \"un poquito más nuevo\": es un cambio de fondo, y el código que funcionaba con 1.9 puede dejar de funcionar.</li><li>El <strong>segundo</strong> (minor, \"la menor\"): funciones nuevas, pero compatibles. De 1.8 a 1.9 se agregan cosas sin romper lo que ya había.</li><li>El <strong>tercero</strong> (patch, \"el parche\"): corrección de errores pequeña. De 1.9.1 a 1.9.2 se arregla un bug sin cambiar nada más.</li></ul><p>¿Por qué una actualización rompe cosas? Porque los creadores de la librería cambiaron reglas: renombraron funciones, cambiaron cómo se llaman, o quitaron funciones viejas. Tu código — o el de la IA — le hablaba a la librería \"en el idioma de la 1.9\"; la 2.0 habla distinto.</p><p>Cuando diriges a una IA verás esto en vivo: \"actualicé la librería y se rompió el login\". La solución profesional casi nunca es reescribir todo: es <strong>fijar la versión</strong> que sí funcionaba, o pedirle a la IA que adapte el código al idioma nuevo. Por eso los proyectos \"congelan\" versiones en el <code>package.json</code> (lo verás en A13).</p><p>Dato memorable: si el número de versión cambia en la primera posición, espera problemas. Si cambia en la última, solo es una corrección. Leer versiones te da radar.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Las versiones son como <strong>los modelos de un celular</strong>: el modelo 2019 (1.9) y el modelo 2026 (2.0) tienen accesorios incompatibles. El cargador del teléfono viejo ya no entra en el nuevo. No es que el nuevo esté mal — es que cambió el estándar. El patch (de 1.9.1 a 1.9.2) es como un parche de tela: el mismo pantalón, solo arreglado.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Error típico al actualizar una dependencia:</p><pre><code>npm install mi-libreria\n→ warning: mi-libreria@2.0.0 ya no incluye createApp()\n   usa createApplication() en su lugar\n\nTu app:  mi-libreria.createApp()  ✘ (ya no existe)\nArreglo: mi-libreria.createApplication()  ✔</code></pre><p>La librería cambió el nombre de una función entre la 1.9 y la 2.0. El código que la usaba se rompe hasta que se adapta. Leer el aviso es la mitad del trabajo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Actualicé [librería] y mi app se rompió. ¿Qué cambió entre la versión que tenía y la nueva? Dime si conviene volver a la versión anterior (y cómo fijarla) o adaptar el código, y qué riesgos tiene cada opción.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué cambio de versión es más probable que rompa tu código?", opciones: ["De 1.9.1 a 1.9.2", "De 1.9 a 2.0", "De 1.8 a 1.9", "Ninguna versión puede romper nada"], correcta: 1 },
              { tipo: "completar", frase: "En la versión 2.3.1, el 2 es la versión ____ (puede romper), el 3 es la ____ (agrega funciones) y el 1 es el ____ (arregla bugs).", banco: ["mayor", "menor", "parche", "inicial"], respuestas: ["mayor", "menor", "parche"] },
              { tipo: "vf", afirmacion: "El tercer número de una versión (el patch) solo corrige errores pequeños sin cambiar las reglas.", correcta: true, explicacion: "el parche arregla sin romper." },
              { tipo: "ordenar", instruccion: "Pasos para resolver una dependencia rota por una actualización:", elementos: ["leer el aviso de la librería", "identificar qué versión funcionaba", "volver a esa versión o adaptar el código", "probar que todo siga funcionando"] },
              { tipo: "relacionar", pares: [["Primer número", "Cambio mayor que puede romper"], ["Segundo número", "Funciones nuevas compatibles"], ["Tercer número", "Corrección de errores"]] }
            ]
          },
          {
            id: "m1-a13",
            titulo: "npm: la tienda de piezas de JavaScript (y package.json)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya sabes qué son las librerías (A11). Ahora, ¿de dónde salen? <strong>npm</strong> — <em>Node Package Manager</em>, \"el administrador de paquetes de Node\" — es la tienda de piezas de JavaScript más grande del mundo: millones de librerías listas para descargar. Se usa con un comando:</p><pre><code>npm install express</code></pre><p>Ese comando baja la librería <code>express</code>, la coloca en la carpeta <code>node_modules</code> de tu proyecto, y registra en una lista llamada <strong><code>package.json</code></strong> que tu proyecto ahora depende de ella. El <code>package.json</code> es el recibo de compras: la lista exacta de dependencias y sus versiones (lo de A12).</p><p>Tres lugares que verás en cada proyecto:</p><ul><li><strong><code>package.json</code></strong> — la lista de dependencias y la configuración del proyecto. Si se pierde, tu proyecto \"olvida\" qué piezas necesita.</li><li><strong><code>node_modules</code></strong> — donde viven las piezas descargadas. Puede pesar cientos de MB o gigas (¿te acuerdas de A2?). Nadie la toca a mano: se regenera con un <code>npm install</code>.</li><li><strong><code>npm install</code></strong> — el comando que, leyendo el <code>package.json</code>, descarga todo lo que falta. Es el \"trae todo lo de la lista\".</li></ul><p>Cuando la IA te diga \"corre <code>npm install</code>\", está diciendo \"reponte las piezas según la lista\". Cuando te diga \"corre <code>npm install express</code>\", está agregando una pieza nueva a la lista. Eso es todo. No hay misterio.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>npm es el <strong>mercado de abastos de JavaScript</strong>: miles de puestos con piezas probadas. El <code>package.json</code> es tu lista de compras escrita; <code>node_modules</code> es el bolsón lleno que cargas a casa; y <code>npm install</code> es el mandado: caminas el mercado con tu lista y llenas el bolsón.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un <code>package.json</code> recién creado, con una dependencia:</p><pre><code>{\n  \"name\": \"mi-tienda\",\n  \"version\": \"1.0.0\",\n  \"dependencies\": {\n    \"express\": \"^4.18.2\"\n  }\n}</code></pre><p>Se lee: \"mi proyecto se llama mi-tienda, es versión 1.0.0, y depende de express en su versión 4.18.2\". Si esta computadora se pierde, otro <code>npm install</code> reconstruye todo desde esta lista.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito [funcionalidad] en mi proyecto. ¿Qué paquete de npm me recomiendas? Verifica que sea popular, activamente mantenido y seguro antes de instalarlo, y explícame en una línea para qué sirve.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace <code>npm install express</code>?", opciones: ["Instala el navegador Express", "Descarga la librería express y la registra en el package.json", "Borra todas las dependencias", "Crea una página web"], correcta: 1 },
              { tipo: "relacionar", pares: [["package.json", "La lista de dependencias del proyecto"], ["node_modules", "La carpeta donde viven las piezas descargadas"], ["npm install", "El comando que baja todo lo de la lista"]] },
              { tipo: "completar", frase: "Al correr <code>npm install</code>, el proyecto lee su ____ y descarga las piezas a la carpeta ____.", banco: ["package.json", "node_modules", "navegador", "escritorio"], respuestas: ["package.json", "node_modules"] },
              { tipo: "vf", afirmacion: "La carpeta node_modules se regenera sola con un <code>npm install</code>; no hace falta copiarla a mano.", correcta: true, explicacion: "con el package.json basta para reconstruirla." },
              { tipo: "quehace", codigo: "npm install", pregunta: "Ves <code>npm install</code> (sin nombre de paquete) en un tutorial. ¿Qué hace?", opciones: ["Instala todos los paquetes que faltan según el package.json", "Crea un proyecto nuevo", "Borra el proyecto", "Actualiza el navegador"], correcta: 0 }
            ]
          },
          {
            id: "m1-a14",
            titulo: "La memoria caché: por qué \"borrar caché\" arregla cosas",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>La <strong>caché</strong> (se pronuncia \"cash\", del inglés <em>cache</em>) es una copia guardada para no repetir trabajo. Tu navegador guarda en caché las imágenes, los estilos y los archivos de las páginas que visitas, para que la siguiente vez carguen al instante. En vez de descargar todo de nuevo, saca la copia que ya tiene.</p><p>Aquí viene el problema del que habla todo el mundo: si el servidor cambió la página pero tu navegador guarda la copia vieja, <strong>te sigue mostrando lo viejo</strong>. Ya cambiaste el código, ya guardaste, pero la pantalla \"no se actualiza\". No es que tu código esté mal: es que tu navegador te está sirviendo el recuerdo, no la realidad.</p><p>Por eso \"borrar caché\" arregla cosas: le quitas al navegador la copia vieja y lo obligas a bajar la nueva. El atajo más usado es la <strong>recarga forzada</strong>: <code>Ctrl + F5</code> (o <code>Cmd + Shift + R</code> en Mac).</p><p>¿Cuándo te tocará esto a ti? Todo el tiempo. Le pides a la IA que cambie el color del botón, guardas, recargas… y el botón sigue rojo. Antes de entrar en pánico, prueba la recarga forzada o borrar la caché. Es el 90% de los \"no cambió nada\" de este oficio. El otro 10% es un error de ruta (¿te acuerdas de A4?).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La caché es tu <strong>despensa de emergencia</strong>: compras de más lo que usas seguido para no ir al súper cada vez. Pero si el súper cambió la receta del producto, tú sigues consumiendo la caja vieja hasta que limpias tu despensa. Borrar caché es tirar lo viejo para ir por lo nuevo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cuando recargas tu página y la versión nueva no aparece:</p><pre><code>1. Prueba la recarga normal (F5)        → sigue la vieja\n2. Prueba la recarga forzada (Ctrl+F5)  → ya cambió ✔\n3. Si sigue: borra la caché del navegador o abre en ventana de incógnito</code></pre><p>La ventana de incógnito es tu mejor amiga para diagnosticar: casi siempre arranca sin caché. Si en incógnito tu página nueva se ve, el problema era la caché, no tu código.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Cambié mi página pero al recargar sigo viendo la versión vieja. ¿Cómo sé si es problema de caché y cómo la borro en [mi navegador]? Dame el atajo exacto y los pasos para confirmar que ya se ve la nueva.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Para qué sirve la caché del navegador?", opciones: ["Para guardar contraseñas de todos los sitios", "Para cargar páginas más rápido guardando copias de lo que ya viste", "Para borrar archivos viejos", "Para bloquear anuncios"], correcta: 1 },
              { tipo: "vf", afirmacion: "Si cambiaste el código de tu página pero el navegador muestra la versión vieja, puede ser la caché y no un error de código.", correcta: true, explicacion: "la caché guarda copias viejas que a veces tardan en actualizarse." },
              { tipo: "completar", frase: "Borrar caché es ____ la copia vieja y ____ la página desde el servidor.", banco: ["eliminar", "recargar", "esconder", "adivinar"], respuestas: ["eliminar", "recargar"] },
              { tipo: "ordenar", instruccion: "Pasos para confirmar que el problema es la caché:", elementos: ["abrir la página en ventana de incógnito", "ver si la versión nueva aparece", "si aparece, borrar la caché del navegador normal"] },
              { tipo: "quehace", codigo: "Ctrl + F5", pregunta: "<code>Ctrl + F5</code> en un navegador — ¿qué hace?", opciones: ["Cierra la pestaña", "Fuerza la recarga ignorando la caché", "Abre la consola", "Baja la página al final"], correcta: 1 }
            ]
          },
          {
            id: "m1-a15",
            titulo: "Procesos: qué está corriendo en tu compu ahora mismo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un <strong>proceso</strong> es un programa que está corriendo ahorita mismo. Cada pestaña del navegador, cada app, cada servicio del sistema: todos son procesos. Tu computadora los administra a todos (¿el gerente del A8?) y les reparte RAM y CPU (¿te acuerdas de A1?).</p><p>En Windows lo ves en el <strong>Administrador de tareas</strong> (Ctrl + Shift + Esc); en Mac, en el <strong>Monitor de actividad</strong>. Ahí verás decenas de procesos con su uso de memoria y procesador. No los conozcas todos: reconoce el patrón. Un proceso que come el 90% de la CPU explica por qué tu compu va lenta.</p><p>El detalle que te va a salvar en este oficio: un proceso <strong>puede seguir corriendo sin ventana visible</strong>. Esos \"fantasmas\" son la causa clásica de uno de los errores más comunes al desarrollar: \"<strong>el puerto ya está en uso</strong>\" (los puertos son tema del A25). Corres tu proyecto, se apaga mal, y el proceso quedó vivo agarrando el puerto. La solución no es reiniciar la computadora: es encontrar el proceso y cerrarlo (o \"matarlo\").</p><p>Cuando dirijas a una IA, ella te dirá \"cierra el proceso del puerto 3000\" o \"reinicia el servidor\". Ahora sabes que te está hablando de estos fantasmas de los que nadie te había hablado.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Los procesos son <strong>el personal de la cocina a media noche de servicio</strong>: cada quien cocinando algo, usando la mesa (RAM) y el chef (CPU). Un proceso fantasma es el cocinero que terminó su turno pero no se fue: sigue ocupando la estación y el siguiente (tu app nueva) no encuentra lugar. No hay que apagar todo el restaurante — basta con decirle a ese cocinero que se vaya.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El error que vas a ver mil veces:</p><pre><code>Error: listen EADDRINUSE: address already in use 127.0.0.1:3000</code></pre><p>Traducción: \"ya hay un proceso usando el puerto 3000, no puedo\". En la terminal puedes ver los procesos que corren:</p><pre><code>tasklist                 ← lista de procesos en Windows\ntasklist | findstr node  ← filtra solo los de Node</code></pre><p>Y cerrar uno: <code>taskkill /PID 1234 /F</code> (en Mac/Linux: <code>kill 1234</code>). Antes de matar algo, asegúrate de qué es — nunca mates un proceso sin saberlo (la regla del A5 sigue vigente).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Al correr mi proyecto me dice que el puerto 3000 ya está en uso. Guíame paso a paso en [Windows/Mac] para ver qué proceso lo está usando, confirmar que es seguro cerrarlo, y cerrarlo sin dañar nada.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es un proceso?", opciones: ["Un archivo guardado", "Un programa que está corriendo en este momento", "Una carpeta del sistema", "Una contraseña de acceso"], correcta: 1 },
              { tipo: "completar", frase: "Un proceso puede seguir ____ sin ventana visible; los ____ así son la causa clásica del error 'puerto en uso'.", banco: ["corriendo", "fantasmas", "borrados", "abiertos"], respuestas: ["corriendo", "fantasmas"] },
              { tipo: "quehace", codigo: "EADDRINUSE: address already in use 127.0.0.1:3000", pregunta: "Ves este error: <code>EADDRINUSE: address already in use 127.0.0.1:3000</code>. ¿Qué está pasando?", opciones: ["Tu internet se cayó", "Ya hay un proceso usando el puerto 3000", "La computadora no tiene RAM", "El proyecto no existe"], correcta: 1 },
              { tipo: "vf", afirmacion: "Cuando un programa \"se apaga\" mal, su proceso puede quedar vivo ocupando recursos.", correcta: true, explicacion: "por eso el puerto queda en uso y hay que cerrar el proceso." },
              { tipo: "relacionar", pares: [["Administrador de tareas", "Ver procesos y su uso de RAM/CPU en Windows"], ["tasklist", "Listar procesos desde la terminal"], ["taskkill", "Cerrar un proceso desde la terminal"]] }
            ]
          },
          {
            id: "m1-a16",
            titulo: "Internet I: ¿qué pasa cuando escribes google.com?",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cuando escribes <code>google.com</code> y presionas Enter, en fracciones de segundo ocurre una cadena de eventos. Ahora la vas a entender completa; las piezas se detallan en A17 y A18, pero el viaje es este:</p><ol><li>Tu navegador pregunta al <strong>DNS</strong> (el directorio telefónico de internet, tema de A17): \"¿en qué dirección vive <code>google.com</code>?\"</li><li>El DNS responde con la <strong>IP</strong>: una dirección numérica, por ejemplo <code>142.250.190.78</code> (también A17).</li><li>Tu navegador manda un <strong>pedido</strong> (una petición) a esa dirección, usando el lenguaje <strong>HTTP</strong> (A19).</li><li>El <strong>servidor</strong> de Google — una computadora lejana prendida 24/7 — recibe el pedido y responde con la página (A20).</li><li>Tu navegador <strong>recibe el código</strong> (HTML, CSS, JavaScript) y lo convierte en la página que ves (A21).</li></ol><p>Todo eso, de ida y vuelta, en un abrir y cerrar de ojos. Cuando algo falla, el viaje se corta en algún punto: el DNS no respondió, la red se cayó, el servidor está caído, o tu navegador no pudo interpretar lo que recibió. Diagnosticar internet es descubrir en cuál de los cinco pasos se rompió el viaje.</p><p>¿Por qué te importa como director de IA? Porque publicarás páginas y apps (en la Materia C y en el Mes 9), y cuando un usuario diga \"no me carga\", tú vas a saber qué preguntas hacer: ¿es el dominio, el servidor, o su internet? Reconocer el mapa del viaje convierte el caos en diagnóstico.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es como <strong>pedir un platillo en un restaurante por teléfono</strong>: miras el menú (escribes la URL), buscas el número del restaurante (DNS), marcas (petición HTTP), en la cocina contestan y preparan (servidor), y te llevan el platillo (respuesta). Si el platillo no llega, puede ser que no encontrabas el número, que la línea estaba ocupada, o que la cocina estaba cerrada.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cada error en pantalla te dice en qué punto se cortó el viaje:</p><pre><code>Error: No se pudo encontrar el servidor     → el DNS o el dominio falló (pasos 1-2)\nError: El sitio tardó demasiado en responder → la red o el servidor (pasos 3-4)\nError 500: El servidor tuvo un problema     → el servidor falló (paso 4)</code></pre><p>Leer estos mensajes ya no es \"no sé qué pasó\": es saber en qué paso del viaje está el atasco.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Mi página no carga en [navegador]. Guíame para diagnosticar en qué paso del viaje falla: DNS, red, servidor o navegador. Dame los pasos en orden y qué vería en pantalla en cada caso.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda en orden lo que pasa cuando escribes google.com:", elementos: ["el navegador pregunta al DNS la IP", "el navegador manda una petición HTTP", "el servidor responde con la página", "el navegador convierte el código en imagen"] },
              { tipo: "multiple", pregunta: "¿Qué hace el navegador justo después de que escribes la URL?", opciones: ["Muestra un anuncio", "Pregunta al DNS dónde vive ese dominio", "Apaga el servidor", "Guarda la página en el disco"], correcta: 1 },
              { tipo: "completar", frase: "El servidor de Google es una ____ lejana prendida ____ que recibe pedidos y responde con la página.", banco: ["computadora", "24/7", "tableta", "de vez en cuando"], respuestas: ["computadora", "24/7"] },
              { tipo: "vf", afirmacion: "Todo el viaje desde escribir la URL hasta ver la página tarda típicamente menos de un par de segundos.", correcta: true, explicacion: "el viaje completo es de ida y vuelta en fracciones de segundo." },
              { tipo: "relacionar", pares: [["No se pudo encontrar el servidor", "El DNS o el dominio falló"], ["El sitio tardó demasiado en responder", "La red o el servidor"], ["Error 500: problema del servidor", "El servidor falló"]] }
            ]
          },
          {
            id: "m1-a17",
            titulo: "Internet II: direcciones IP y DNS (el directorio telefónico de internet)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cada dispositivo conectado a internet tiene una <strong>dirección IP</strong>: una dirección numérica única, como <code>142.250.190.78</code>, que identifica dónde está. Es el equivalente del número de teléfono de tu computadora. Los servidores tienen IPs públicas; tu teléfono en casa tiene una IP privada que tu módem le asigna (los detalles en A24).</p><p>¿Y el problema? Nadie recuerda <code>142.250.190.78</code> cuando quiere buscar algo. Ahí nace el <strong>DNS</strong> — <em>Domain Name System</em>, \"el sistema de nombres de dominio\": el directorio telefónico de internet. Traduce los nombres que sí podemos recordar (<code>google.com</code>, <code>facebook.com</code>) a las IPs que la red necesita.</p><p>Cuando escribes una URL, tu computadora no sabe dónde está <code>google.com</code>: se lo pregunta al DNS, igual que marcas a información para pedir un número. El DNS no es una sola computadora: es un sistema de directorios en cascada por todo el mundo, enorme y rapidísimo.</p><p>¿Cuándo te tocará a ti? Cuando la IA te pida configurar el <strong>dominio</strong> de tu página (en el Mes 9 publicarás una): el proveedor de dominios te dará \"registros DNS\" para apuntar tu dominio al servidor. Ahora sabes qué es eso: le estás diciendo al directorio mundial \"cuando busquen <code>mitienda.com</code>, llévalos a esta IP\".</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El DNS es la <strong>agenda de contactos de tu teléfono</strong>: no marcas el número de tu hermano, marcas \"Hermano\". Tú pides por nombre y el teléfono traduce al número real. El DNS es esa traducción, a escala planetaria: tu navegador dice \"google.com\" y el directorio contesta \"marca a 142.250.190.78\".</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Desde la terminal puedes consultar el directorio tú mismo:</p><pre><code>C:\\Users\\Ray&gt; nslookup google.com\nServidor:  dns.google\nNombre:    google.com\nAddress:   142.250.190.78</code></pre><p>Traducción: \"le pregunté al directorio y me dijo que google.com vive en 142.250.190.78\". Ese número es la <strong>IP</strong> — la dirección real donde vive el sitio.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a apuntar mi dominio [mitienda.com] a mi servidor [dirección]. Explícame qué registro DNS necesito configurar, dónde, y cómo verifico desde mi terminal que ya quedó listo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Dirección IP", "La dirección numérica única de un dispositivo en internet"], ["DNS", "El directorio que traduce nombres a IPs"], ["Dominio", "El nombre fácil de recordar (google.com)"]] },
              { tipo: "completar", frase: "El ____ traduce nombres como google.com a ____ numéricas que la red usa.", banco: ["DNS", "IP", "wifi", "caché"], respuestas: ["DNS", "IP"] },
              { tipo: "multiple", pregunta: "¿Por qué existen los dominios si ya existen las IPs?", opciones: ["Porque las IPs son lentas", "Porque los números son difíciles de recordar para las personas", "Porque los dominios son más baratos", "No existe razón real"], correcta: 1 },
              { tipo: "vf", afirmacion: "El DNS es una sola computadora enorme ubicada en un solo país.", correcta: false, explicacion: "es un sistema de directorios en cascada repartido por todo el mundo." },
              { tipo: "quehace", codigo: "nslookup google.com", pregunta: "Corres <code>nslookup google.com</code> y la terminal devuelve <code>Address: 142.250.190.78</code>. ¿Qué pasó?", opciones: ["La terminal se conectó a Google", "El DNS respondió la IP donde vive google.com", "Se descargó la página de Google", "La terminal borró la caché"], correcta: 1 }
            ]
          },
          {
            id: "m1-a18",
            titulo: "Internet III: la URL por partes (dominio, ruta, parámetros)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Toda URL (el enlace que ves en la barra del navegador) está hecha de partes, y cada parte le dice algo distinto a la red. Tomemos un ejemplo:</p><pre><code>https://www.mitienda.mx/productos/celulares?id=5&amp;color=negro</code></pre><ul><li><strong><code>https</code></strong> — el protocolo: \"habla conmigo con candado\" (A19). El <code>http://</code> sin la <code>s</code> es el mismo idioma pero sin candado.</li><li><strong><code>www.mitienda.mx</code></strong> — el <strong>dominio</strong>: qué sitio es. El <code>www.</code> es un subdominio común (un \"departamento\" del sitio).</li><li><strong><code>/productos/celulares</code></strong> — la <strong>ruta</strong>: qué página o sección. Igual que las rutas de archivos (A4), pero en un servidor remoto.</li><li><strong><code>?id=5&amp;color=negro</code></strong> — los <strong>parámetros</strong> (o query): datos que se envían al servidor con la petición. Empiezan con <code>?</code>, se separan con <code>&amp;</code>, y vienen en pares <code>clave=valor</code>.</li></ul><p>Eso último es lo que más te va a sorprender: <strong>una misma página puede mostrar cosas distintas según los parámetros</strong>, aunque el dominio y la ruta no cambien. <code>?id=5</code> le dice al servidor \"muéstrame el producto 5\". Cambias <code>id=6</code> y ves el 6. Los parámetros son las preguntas que le haces a la página.</p><p>Cuando dirijas a una IA, verás parámetros en las <strong>URLs de las APIs</strong> (a fondo en el Mes 9) y en los enlaces de tu página. Saber leer la barra del navegador es como saber leer el tablero de un auto: todo el mundo puede conducir, pero tú entiendes qué dice.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La URL es una <strong>dirección completa de oficina</strong>: el país y la ciudad (dominio), el edificio y el piso (ruta), y el número de oficina (parámetros). Dos personas pueden ir al mismo edificio y al mismo piso, pero al cuarto 5 en vez del 4 — y eso cambia con quién se encuentran.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>En la barra del navegador de una tienda:</p><pre><code>mitienda.mx/productos?id=5   → muestra el producto 5\nmitienda.mx/productos?id=6   → muestra el producto 6\nmitienda.mx/productos        → muestra la lista de todos</code></pre><p>El dominio y la ruta son los mismos; solo cambió el parámetro <code>id</code>. Por eso un enlace \"con datos\" viaja literalmente en la barra del navegador.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Descompón esta URL para mí: [pega una URL real]. Dime cuál es el dominio, la ruta y los parámetros, y qué pasaría si cambio cada parte. Úsalo como ejercicio para enseñarme a leer URLs.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Dominio", "www.mitienda.mx"], ["Ruta", "/productos/celulares"], ["Parámetros", "?id=5&color=negro"], ["Protocolo", "https"]] },
              { tipo: "completar", frase: "En <code>https://tienda.mx/productos?id=5</code>, el dominio es ____, la ruta es ____ y los parámetros empiezan con ____.", banco: ["tienda.mx", "/productos", "?", "https"], respuestas: ["tienda.mx", "/productos", "?"] },
              { tipo: "multiple", pregunta: "¿Para qué sirven los parámetros de una URL?", opciones: ["Para hacerla más larga", "Para enviar datos al servidor con la petición", "Para ocultar el dominio", "Para acelerar la carga"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Partes de la URL en el orden en que aparecen:", elementos: ["protocolo", "dominio", "ruta", "parámetros"] },
              { tipo: "vf", afirmacion: "Cambiar <code>?id=5</code> por <code>?id=6</code> en una tienda muestra un producto distinto con la misma página.", correcta: true, explicacion: "los parámetros cambian lo que el servidor devuelve." }
            ]
          },
          {
            id: "m1-a19",
            titulo: "HTTP y HTTPS: el candadito y por qué importa",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya viste el viaje de la petición (A16) y que empieza con <code>https</code> (A18). Ahora, ¿qué es eso? <strong>HTTP</strong> (<em>HyperText Transfer Protocol</em>) es el idioma de comunicación entre tu navegador y los servidores: un conjunto de reglas para pedir y entregar contenido en la web. Cuando tu navegador pide una página, habla en HTTP; el servidor responde en HTTP.</p><p>El problema: HTTP puro transmite la información <strong>como está, sin proteger</strong> — como mandar una carta postal abierta. Si introduces tu contraseña o los datos de tu tarjeta en un sitio con <code>http://</code>, cualquier persona en el camino (el wifi de la cafetería, tu proveedor) podría leer lo que viaja.</p><p>Ahí entra <strong>HTTPS</strong>: es el mismo idioma, pero <strong>cifrado</strong>. La <code>S</code> es de <em>Secure</em> (seguro). La información se codifica de tal forma que solo tu navegador y el servidor pueden leerla — el famoso <strong>candadito</strong> que ves junto a la URL. El cifrado técnico se llama SSL/TLS (solo necesitas reconocer el nombre).</p><p>La regla de seguridad que no se negocia: <strong>nunca pongas contraseñas ni datos de pago en una página sin el candado</strong>. El navegador te avisa: verás \"No seguro\" en la barra cuando el sitio es HTTP. Cuando publiques tu propia página (Materia C, Mes 9), lo estándar es que quede con HTTPS — hoy hasta la herramienta más básica lo regala.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>HTTP es <strong>hablar en voz alta en un pasillo lleno de gente</strong>; HTTPS es hablar en un <strong>cuarto blindado con la puerta cerrada</strong>. El mensaje es el mismo — el problema es quién más lo escucha. El candadito de la barra del navegador es la etiqueta \"cuarto blindado\" en la puerta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>En la barra del navegador:</p><pre><code>🔒 https://www.bancomex.mx        → cifrado, seguro\n⚠  http://www.bancomex-promo.mx   → sin cifrar, \"No seguro\"</code></pre><p>Esa segunda dirección es la típica de una trampa: parece banco, pero el candado no está. El candado no es un adorno — es la diferencia entre hablar por un cuarto blindado y por un pasillo público.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Mi sitio todavía usa HTTP y quiero pasar a HTTPS. Explícame qué opciones tengo, cuál es la más fácil para un principiante, y qué riesgos corro si lo dejo en HTTP.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "HTTPS cifra los datos que viajan entre tu navegador y el servidor.", correcta: true, explicacion: "la S de Secure es cifrado." },
              { tipo: "multiple", pregunta: "¿Qué significa el candadito en la barra del navegador?", opciones: ["El sitio es oficial y confiable", "La conexión con el servidor está cifrada", "La página no tiene virus", "El sitio es gratis"], correcta: 1 },
              { tipo: "completar", frase: "HTTP es el ____ de comunicación; HTTPS agrega ____ a lo que viaja.", banco: ["idioma", "cifrado", "velocidad", "música"], respuestas: ["idioma", "cifrado"] },
              { tipo: "relacionar", pares: [["https:// + candadito", "Poner contraseñas y datos de pago"], ["http:// + \"No seguro\"", "No poner datos sensibles"]] },
              { tipo: "quehace", codigo: "http:// sin candado", pregunta: "Un sitio te pide tu contraseña y en la barra del navegador dice \"No seguro\". ¿Qué haces?", opciones: ["La escribo, es el sitio correcto", "No la escribo: la conexión no está cifrada y podría ser una trampa", "La escribo pero rápido", "Cambio la contraseña en ese sitio"], correcta: 1 }
            ]
          },
          {
            id: "m1-a20",
            titulo: "Cliente y servidor: el restaurante de internet",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cuando ves una página, hay dos computadoras haciendo el trabajo: la tuya (la que pide) y la remota (la que responde). La que pide se llama <strong>cliente</strong>; la que responde se llama <strong>servidor</strong>. Ese par es el modelo de casi todo internet.</p><ul><li><strong>Cliente</strong> — tu navegador (Chrome, Edge, Safari). Pide páginas, envía formularios, muestra lo que recibe. Es \"el que tiene hambre\".</li><li><strong>Servidor</strong> — una computadora lejana, prendida 24/7, con la página guardada. Recibe pedidos de millones de clientes y les responde. Es \"la cocina\".</li></ul><p>Un servidor puede atender a muchísimos clientes a la vez — cuando tu app \"se cae por mucha gente\", es que la cocina no dio abasto (en el Mes 9 verás cómo se escala).</p><p>Esto te importa porque define dónde vive cada cosa en un proyecto. La parte que ves y tocas (botones, textos, imágenes) corre en el <strong>cliente</strong>; la parte que procesa datos, guarda información y decide, corre en el <strong>servidor</strong>. Cuando la IA te hable de <em>frontend</em> y <em>backend</em> (a fondo en B23), te estará hablando exactamente de esto: lo que el cliente muestra y lo que el servidor hace.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Internet es un <strong>restaurante</strong>: el cliente (tú, con el menú del navegador) pide; el mesero lleva el pedido (petición); la cocina — que nunca cierra — lo prepara y lo saca (servidor); el mesero lo lleva a tu mesa (respuesta). Un restaurante sirve a cientos de comensales a la vez, y nadie se confunde de mesa: cada pedido va etiquetado con su mesa.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cuando la IA te describa tu propio proyecto:</p><pre><code>Cliente (tu navegador):  la página de bienvenida, los botones, los formularios\nServidor (la nube):      guarda los pedidos, revisa el inventario, manda el correo</code></pre><p>Tú ves el lado cliente; el servidor hace el trabajo que nadie ve. Si mañana dices \"quiero que los pedidos se guarden en una base de datos\", le estás pidiendo trabajo del lado servidor.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Muéstrame mi proyecto dividido en dos columnas: qué corre en el cliente (navegador) y qué corre en el servidor. Explícame en una línea qué pasa en cada lado cuando un usuario hace [acción principal].\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Cliente", "El navegador que pide y muestra"], ["Servidor", "La computadora remota que responde 24/7"]] },
              { tipo: "multiple", pregunta: "En el modelo cliente-servidor, ¿quién es el cliente al abrir una página web?", opciones: ["El servidor", "Tu navegador", "El proveedor de internet", "El DNS"], correcta: 1 },
              { tipo: "completar", frase: "El ____ pide la página; el ____ la guarda y la responde. Un servidor atiende a muchos ____ a la vez.", banco: ["cliente", "servidor", "clientes", "dominios"], respuestas: ["cliente", "servidor", "clientes"] },
              { tipo: "vf", afirmacion: "Un mismo servidor puede atender a millones de clientes al mismo tiempo.", correcta: true, explicacion: "por eso se cae cuando no da abasto." },
              { tipo: "ordenar", instruccion: "Acomoda en orden lo que pasa al hacer clic en \"Comprar\":", elementos: ["el navegador envía la petición de compra", "el servidor guarda el pedido y responde", "el navegador muestra la confirmación"] }
            ]
          },
          {
            id: "m1-a21",
            titulo: "El navegador por dentro: qué hace con lo que recibe",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>El navegador es un programa como cualquier otro (es un proceso, ¿te acuerdas del A15?) — pero con un trabajo especial: <strong>recibe el código de una página y lo convierte en la imagen que ves</strong>. No \"muestra\" la página: la construye, pieza por pieza, en milisegundos.</p><p>Cuando el servidor responde (A20), envía tres tipos de archivos, y el navegador los usa distinto:</p><ul><li><strong>HTML</strong> — el esqueleto: la estructura y los textos (es el tema de B7).</li><li><strong>CSS</strong> — el estilista: colores, tamaños, acomodo (el B8).</li><li><strong>JavaScript</strong> — el cerebro: comportamiento, botones que responden, datos que cambian (el B3).</li></ul><p>El orden es clave: primero lee el HTML y arma la estructura; luego aplica el CSS para estilizarla; y al final ejecuta el JavaScript, que puede modificar la estructura ya mostrada. Por eso \"mover una etiqueta de HTML rompe la página\" — el esqueleto cambió.</p><p>Tu superpoder para dirigir a la IA: las <strong>herramientas de desarrollador</strong> (tecla F12, o clic derecho → \"Inspeccionar\"). Ahí puedes ver el HTML, los estilos, la red (qué peticiones se hacen) y la consola (errores de JavaScript). La IA te va a pedir a menudo que le copies un error de la consola: ahora sabes de qué te habla.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El navegador es como <strong>el director de una obra de teatro</strong>: recibe el guion (HTML), dirige la iluminación y el vestuario (CSS), y coordina a los actores que responden en vivo (JavaScript). El público (tú) solo ve la obra terminada; el director ve todo el andamiaje detrás del telón.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Con la página abierta, presionas F12 y ves pestañas:</p><pre><code>Elementos   ← el HTML de la página, editable en vivo\nConsola     ← los errores de JavaScript y mensajes\nRed         ← cada petición que hace la página y cuánto tardó</code></pre><p>Esa pestaña de <strong>Consola</strong> es la que te pedirá la IA: \"pégame el error que sale en rojo\". Copiar y pegar ese texto es un diagnóstico instantáneo para ella.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Abrí las herramientas de desarrollador (F12) de mi página. Explícame qué veo en cada pestaña (Elementos, Consola, Red) y qué información quieres que te copie cuando algo no funcione.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["HTML", "El esqueleto y los textos"], ["CSS", "Los estilos y colores"], ["JavaScript", "El comportamiento que responde"]] },
              { tipo: "completar", frase: "El navegador recibe ____, ____ y ____ del servidor y los convierte en la página visual.", banco: ["HTML", "CSS", "JavaScript", "fotos impresas"], respuestas: ["HTML", "CSS", "JavaScript"] },
              { tipo: "multiple", pregunta: "¿Qué hace el navegador con el JavaScript que recibe?", opciones: ["Lo guarda sin ejecutar", "Lo ejecuta, dando comportamiento a la página", "Lo borra al instante", "Lo convierte en imagen"], correcta: 1 },
              { tipo: "vf", afirmacion: "Las herramientas de desarrollador (F12) solo sirven a programadores expertos.", correcta: false, explicacion: "copiar un error de la Consola es un diagnóstico útil para cualquier director de IA." },
              { tipo: "ordenar", instruccion: "Acomoda en orden cómo construye el navegador una página:", elementos: ["leer el HTML y armar la estructura", "aplicar los estilos CSS", "ejecutar el JavaScript", "mostrar la página final"] }
            ]
          },
          {
            id: "m1-a22",
            titulo: "La nube: la computadora de alguien más",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cuando alguien dice \"la nube\", no hay magia en el cielo: hay <strong>computadoras de alguien más</strong>, en edificios gigantes (los centros de datos), que rentas por internet. <em>Cloud</em> es la jerga para \"servidores ajenos que uso sin tener que comprarlos\". El meme es exacto: \"no hay nube, solo es la computadora de otra persona\".</p><p>¿Por qué rentar en vez de comprar? Porque comprar un servidor cuesta dinero y desvelo: hardware, electricidad, espacio, mantenimiento, técnicos. Rentarlo te da el mismo poder por hora y sin responsabilidades — y si mañana necesitas 10 veces más, lo pides con un clic.</p><p>Los tres grandes proveedores: <strong>Amazon Web Services (AWS)</strong>, <strong>Microsoft Azure</strong> y <strong>Google Cloud</strong>. Todos tienen la misma idea: te prestan máquinas (las de A1: CPU, RAM, disco), sistemas operativos (A8, A9) y servicios (bases de datos, almacenamiento, correos) por minutos o por mes.</p><p>Para ti, en este programa: la nube es donde <strong>vivirá tu proyecto final</strong>. En el Mes 9 rentarás tu primer servidor y entenderás por qué \"subir a la nube\" significa copiar tu código a una de esas computadoras lejanas. Cuando la IA te diga \"deploya\" o \"publica en producción\", te estará hablando de esto: llevar tu app a una computadora ajena que estará prendida 24/7 para recibir clientes.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La nube es como <strong>rentar un departamento amueblado</strong> en vez de construir tu casa: no te preocupas por los muros, el drenaje ni la electricidad — pagas la mensualidad y ya. Si necesitas más espacio, te mudas a uno más grande con un clic. Construir tu propio centro de datos sería como construirte la casa: posible, pero carísimo y lentísimo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El panel de un proveedor de nube (lo verás en el Mes 9):</p><pre><code>Crear servidor\n  Sistema operativo:  Ubuntu 24.04 LTS      ← elegiste el A9\n  Plan:               VPS · 2 vCPU · 4 GB RAM   ← las cifras del A1\n  Región:             us-east (Virginia) / México Central\n  Costo:              $8 USD/mes\n  [Crear]</code></pre><p>En minutos, tienes una computadora prendida en un edificio lejano, accesible desde tu terminal. Eso es \"la nube\" en su forma más pura.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero publicar [mi proyecto] en la nube. ¿Qué proveedor me conviene para empezar, qué plan (considerando que soy principiante), y qué ventajas tiene cada uno de los grandes: AWS, Azure o Google Cloud?\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "La nube son computadoras físicas de alguien más que rentas por internet.", correcta: true, explicacion: "\"no hay nube, solo la computadora de otra persona\"." },
              { tipo: "completar", frase: "En la nube ____ los servidores en vez de ____ el hardware.", banco: ["rentas", "comprar", "rompes", "olvidar"], respuestas: ["rentas", "comprar"] },
              { tipo: "multiple", pregunta: "¿Cuáles son los tres grandes proveedores de nube?", opciones: ["Chrome, Edge y Safari", "AWS, Azure y Google Cloud", "Netflix, Disney y HBO", "npm, pip y apt"], correcta: 1 },
              { tipo: "relacionar", pares: [["Comprar tu servidor", "Pagas hardware, luz y mantenimiento"], ["Rentar en la nube", "Pagas por hora o mes, sin responsabilidades"]] },
              { tipo: "quehace", codigo: "VPS · 2 vCPU · 4 GB RAM", pregunta: "En el panel de nube ves: \"Plan: VPS · 2 vCPU · 4 GB RAM\". ¿Qué estás viendo?", opciones: ["El tamaño de la página web", "Los recursos de CPU y RAM de la máquina que vas a rentar", "El costo del internet", "La versión de Linux"], correcta: 1 }
            ]
          },
          {
            id: "m1-a23",
            titulo: "Descargar, subir y el ancho de banda",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>Descargar</strong> es recibir datos de internet a tu dispositivo (una película, una página). <strong>Subir</strong> es enviarlos (un video a TikTok, un formulario, una copia de seguridad). Todo lo que haces en internet es una mezcla de las dos.</p><p>El <strong>ancho de banda</strong> es el tamaño de la tubería que te conecta a internet: cuánta información puede pasar por segundo. Se mide en megas (<code>Mbps</code> — megabits por segundo, ¿te acuerdas de A2?). \"100 megas de internet\" significa que tu tubería permite 100 megabits por segundo — que, ojo, son unos 12.5 megabytes por segundo reales. La gente se confunde todos los días pensando que baja 100 MB por segundo.</p><p>Un detalle del mundo real: en la mayoría de los planes de casa, <strong>subir es mucho más lento que bajar</strong>. Descargas a 300 megas, pero subes a 30. Por eso \"subir un video tarda el triple que descargarlo\". Y cuando muchos dispositivos usan la tubería a la vez (tele en streaming, videojuego, tu compu), se reparte y todo se siente lento.</p><p>¿Y en tu vida de director de IA? Cuando tu página carga lento, las causas típicas son tres: el archivo es pesado (imágenes — el tema de A2), el ancho de banda del usuario es chico, o el servidor es lento (recursos del A1). Saber separar las tres es diagnosticar de verdad, y le da dirección a la IA: comprime, o cambia de plan, o sube el servidor.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El ancho de banda es el <strong>número de carriles de una autopista</strong>: 100 megas son 100 carriles de información a la vez. Subir y descargar son los dos sentidos de la vía — y en tu casa, la carretera de ida (subida) tiene muchos menos carriles que la de vuelta (bajada). Eso explica por qué \"mandar\" siempre tarda más que \"recibir\".</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Resultado de una prueba de velocidad:</p><pre><code>Descarga: 98.4 Mbps   ← la tubería de bajada\nSubida:   22.7 Mbps   ← la tubería de subida, más chica\nPing:     12 ms        ← la demora del viaje (A16)</code></pre><p>\"Tengo 100 megas\" → bajada ≈ 98. La subida, en cambio, ronda los 22: normal en planes de casa. Con esa lectura ya sabes qué esperar de cada dirección.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Mi página tarda en cargar. Ayúdame a diagnosticar cuál de las tres causas es: tamaño de archivos, ancho de banda del usuario, o recursos del servidor. Dame cómo medir cada una y qué arreglar en cada caso.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "Subir y descargar siempre van a la misma velocidad en tu plan de internet.", correcta: false, explicacion: "en la mayoría de los planes de casa, subir es más lento que bajar." },
              { tipo: "multiple", pregunta: "¿Qué es el ancho de banda?", opciones: ["La fuerza de la señal wifi", "Cuánta información puede pasar por tu conexión por segundo", "El número de dispositivos conectados", "El tamaño de tu disco duro"], correcta: 1 },
              { tipo: "completar", frase: "____ es recibir datos; ____ es enviarlos. El ____ es el tamaño de la tubería que los transporta.", banco: ["Descargar", "Subir", "ancho de banda", "procesador"], respuestas: ["Descargar", "Subir", "ancho de banda"] },
              { tipo: "relacionar", pares: [["Descargar", "Ver una película en streaming"], ["Subir", "Publicar un video en TikTok"]] },
              { tipo: "quehace", codigo: "Subida: 22.7 Mbps", pregunta: "La prueba de velocidad marca \"Subida: 22.7 Mbps\". ¿Qué te está diciendo?", opciones: ["Tu bajada es de 22.7", "Tu tubería de envío maneja 22.7 megabits por segundo", "Tu disco está lleno", "Tu señal wifi es débil"], correcta: 1 }
            ]
          },
          {
            id: "m1-a24",
            titulo: "Redes: wifi, datos, módem y por qué \"se cae el sistema\"",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cuando \"el internet se cae\", casi nunca se cayó <em>internet</em>: se cayó un pedacito de tu camino. Hay que distinguir las piezas de tu red local:</p><ul><li><strong>El wifi</strong> — la señal de radio que conecta tus dispositivos al módem dentro de tu casa. Es local: solo funciona a unos metros.</li><li><strong>El módem/router</strong> — la caja que reparte esa señal (router) y se conecta con tu proveedor (módem). El <strong>router</strong> reparte el wifi y administra las conexiones de tu casa; el <strong>módem</strong> es la puerta que sale a la calle.</li><li><strong>Tu proveedor (ISP)</strong> — la empresa que te trae internet a la casa (la infraestructura de la calle).</li><li><strong>El servidor remoto</strong> — la computadora del sitio al que quieres llegar (A20).</li></ul><p>\"Se cae el sistema\" puede significar: tu wifi se cayó (la señal), tu módem se reinició (la puerta), tu proveedor tiene problemas (la calle), o el sitio está caído (el restaurante cerró). Diagnosticar es descubrir cuál. El truco clásico: <strong>reiniciar el módem</strong> — apagar, esperar 30 segundos, prender. Arregla sorprendentemente seguido el problema, porque muchos routers se saturan con el tiempo.</p><p>Dato memorable: el wifi no es internet. Puedes tener \"todo el internet\" caído y tu wifi sigue \"funcionando\" — te conecta a una puerta que no sale a ningún lado.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu red es tu <strong>calle y tu casa</strong>: el wifi son los pasillos dentro de tu casa (señal local, se corta a pocos metros), el router es el guardia que organiza quién entra y sale, el módem es la puerta del edificio, y el ISP es la calle completa. Si el pasillo se bloquea, no es lo mismo que si cerraron la calle. Reiniciar el módem es tocar el timbre y que la puerta se \"despierte\".</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Orden de diagnóstico cuando \"no hay internet\":</p><pre><code>1. ¿Otros dispositivos también se quedaron sin wifi?   → ¿es señal o internet?\n2. ¿La luz del módem parpadea en rojo?                 → reinicia el módem\n3. Reinicia: apaga 30 s, prende, espera 2 min         → listo (9 de cada 10 veces)\n4. Si sigue: ¿tu proveedor reporta fallas en tu zona?  → problema del ISP\n5. Si solo un sitio falla: no es tu internet           → es el servidor de ese sitio</code></pre><p>Seguir este orden convierte \"se cayó todo\" en \"se cayó una pieza\" — y casi siempre la arreglas tú solo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Mi internet se cae seguido. Guíame un diagnóstico paso a paso para saber si el problema es mi wifi, mi módem, mi proveedor o el sitio al que intento entrar. Dame qué revisar en cada paso.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "El wifi y el internet son exactamente lo mismo.", correcta: false, explicacion: "el wifi es la señal local de tu casa; el internet es la red mundial a la que esa señal te conecta." },
              { tipo: "completar", frase: "El ____ reparte la señal en tu casa; el ____ conecta tu casa con el proveedor.", banco: ["router", "módem", "teclado", "cable HDMI"], respuestas: ["router", "módem"] },
              { tipo: "ordenar", instruccion: "Pasos de diagnóstico cuando no hay internet:", elementos: ["revisar si otros dispositivos también fallan", "reiniciar el módem", "revisar si solo un sitio falla"] },
              { tipo: "multiple", pregunta: "\"Se cae el sistema\" en un solo sitio web, pero tu internet funciona. ¿Cuál es la causa más probable?", opciones: ["Tu wifi se cayó", "El servidor de ese sitio tiene un problema", "Tu módem se reinició", "No pagaste el internet"], correcta: 1 },
              { tipo: "relacionar", pares: [["Wifi", "Señal local de radio en tu casa"], ["Módem", "La puerta hacia tu proveedor"], ["Router", "Reparte la conexión entre tus dispositivos"], ["ISP", "La empresa que te da internet"]] }
            ]
          },
          {
            id: "m1-a25",
            titulo: "Puertos: las puertas numeradas de un servidor (80, 443, 3000)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un servidor es como un edificio: tiene una dirección (la IP, del A17), pero también tiene <strong>puertas numeradas</strong> por donde entran las peticiones. Esas puertas son los <strong>puertos</strong> — números entre 0 y 65535 que le dicen al servidor qué tipo de servicio atender.</p><p>Los tres que vas a ver a diario:</p><ul><li><strong>80</strong> — HTTP (el idioma sin candado del A19).</li><li><strong>443</strong> — HTTPS (el idioma con candado). Por eso el 443 es \"la puerta principal cifrada\" de cualquier sitio.</li><li><strong>3000</strong> — el puerto favorito de desarrollo: cuando corres un proyecto localmente, casi siempre abre en <code>localhost:3000</code>.</li></ul><p>La regla: <strong>IP + puerto = dirección completa</strong>. <code>142.250.190.78:443</code> es \"el edificio 142.250.190.78, puerta 443\". Y un servidor tiene muchas puertas a la vez: la 443 para el sitio público, la 3000 para desarrollo, la 5432 para la base de datos (a fondo en el Mes 9).</p><p>Aquí viene el conflicto clásico que ya mencionamos en A15: <strong>dos programas no pueden usar el mismo puerto al mismo tiempo</strong>. Si abres dos proyectos y ambos quieren el 3000, el segundo falla con el famoso \"port 3000 is already in use\". No es un error del código: es que la puerta ya tiene quien la cuide. La solución: cerrar el proceso que la ocupa, o cambiar el puerto (pedirle a la IA que corra en el 3001).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Los puertos son <strong>las puertas numeradas de un edificio</strong>: el mismo edificio tiene entrada principal (443, con vigilancia y candado), entrada de servicio (80, sin candado) y puertas internas para oficinas (3000, la de desarrollo). Dos personas no pueden entrar por la misma puerta al mismo tiempo sin chocar — igual que dos programas no comparten puerto.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cuando corres un proyecto y la terminal te dice:</p><pre><code>Server running on http://localhost:3000</code></pre><p>Traducción: \"mi servidor está escuchando en la puerta 3000 de tu propia computadora\" (lo de localhost es el tema de A26). Y el error de conflicto:</p><pre><code>Error: listen EADDRINUSE: address already in use 127.0.0.1:3000\n→ ya hay un proceso en esa puerta (A15): ciérralo o cambia a 3001.</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Corrí mi proyecto y abrió en localhost:3000, pero quiero entender por qué 3000 y no otro número. Explícame qué es un puerto, por qué el 80 y el 443 son especiales, y qué hago si el 3000 está ocupado.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["80", "HTTP (sin candado)"], ["443", "HTTPS (con candado)"], ["3000", "Desarrollo local de proyectos"]] },
              { tipo: "completar", frase: "La dirección completa de un servicio es ____ + ____. El puerto 443 atiende ____ y el 3000 sirve para ____.", banco: ["IP", "puerto", "HTTPS", "desarrollo", "películas"], respuestas: ["IP", "puerto", "HTTPS", "desarrollo"] },
              { tipo: "multiple", pregunta: "¿Qué pasa si dos programas usan el mismo puerto a la vez?", opciones: ["Funcionan los dos normalmente", "El segundo falla: el puerto ya está en uso", "El internet se cae", "La computadora se apaga"], correcta: 1 },
              { tipo: "quehace", codigo: "Server running on http://localhost:3000", pregunta: "La terminal dice: \"Server running on http://localhost:3000\". ¿Qué significa?", opciones: ["Tu servidor está escuchando en el puerto 3000 de tu propia computadora", "Tu servidor ya está en internet", "El puerto 3000 está cerrado", "Tu proyecto tiene un error"], correcta: 0 },
              { tipo: "vf", afirmacion: "Un mismo servidor puede atender varios puertos a la vez (443, 3000, etc.).", correcta: true, explicacion: "cada puerto es una puerta distinta del mismo edificio." }
            ]
          },
          {
            id: "m1-a26",
            titulo: "localhost: el servidor que vive en tu propia compu",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cuando la IA te dice \"abre <code>localhost:3000</code>\", te está diciendo: \"abre la puerta 3000 de <strong>tu propia computadora</strong>\". <strong>localhost</strong> es un nombre especial que siempre significa \"esta máquina, yo mismo\". No viaja a internet: el navegador se lo queda en casa.</p><p>Su dirección IP es <strong>127.0.0.1</strong> — la dirección reservada para \"mí mismo\" en toda computadora del mundo. En cualquier equipo, escribir <code>localhost</code> o <code>127.0.0.1</code> es lo mismo: hablar contigo.</p><p>¿Por qué existe? Porque antes de publicar algo, lo pruebas localmente: corres el servidor en tu compu (A25) y tu navegador lo visita por localhost. Es el ensayo general antes del estreno. La ventaja es enorme: puedes romper, arreglar y probar sin que nadie más lo vea.</p><p>La diferencia que tienes que grabar: <strong>localhost solo existe en tu máquina</strong>. Si le mandas a tu amigo en otra ciudad \"entra a localhost:3000\", va a entrar a SU propia computadora, no a la tuya. Para que otros te visiten, necesitas la nube (A22) o un túnel (lo verás en la Materia C al publicar). Este concepto te va a acompañar en todos tus proyectos: todo desarrollo empieza con un localhost.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>localhost es <strong>tu propia cocina de prueba</strong>: cocinas y pruebas el platillo en tu casa antes de abrir el restaurante. Nadie más puede comer de tu cocina de prueba porque está en tu casa. Cuando abres el restaurante (publicas), la cocina se mueve a un lugar público — pero hasta entonces, el platillo es solo tuyo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>1. La IA te pide correr el proyecto\n2. La terminal dice: \"Server running on http://localhost:3000\"\n3. Abres tu navegador y visitas http://localhost:3000\n4. Solo TÚ puedes ver esa página desde tu compu</code></pre><p>Si otro dispositivo en la misma casa quiere entrar, no usará localhost: usará tu IP local (la del A24). Pero para probar solo, localhost es todo lo que necesitas.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Corrí mi proyecto y la terminal me dice que abra localhost:3000. Explícame en términos simples por qué 'localhost' funciona solo en mi máquina y qué tendría que hacer para que mi amigo vea mi proyecto desde su casa.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es localhost?", opciones: ["Un servidor de internet público", "Tu propia computadora con una dirección especial", "Un navegador nuevo", "Un proveedor de nube"], correcta: 1 },
              { tipo: "completar", frase: "localhost siempre significa ____; su dirección IP reservada es ____.", banco: ["mi propia computadora", "127.0.0.1", "google.com", "3000"], respuestas: ["mi propia computadora", "127.0.0.1"] },
              { tipo: "vf", afirmacion: "Un amigo en otra ciudad puede abrir tu localhost desde su casa.", correcta: false, explicacion: "localhost siempre apunta a la propia máquina; el tuyo no es visible fuera de tu compu." },
              { tipo: "ordenar", instruccion: "Pasos típicos para probar un proyecto localmente:", elementos: ["correr el proyecto", "leer en la terminal qué puerto usó", "abrir localhost:puerto en el navegador"] },
              { tipo: "quehace", codigo: "Server running on http://localhost:3000", pregunta: "La terminal dice \"Server running on http://localhost:3000\". ¿A quién atiende ese servidor?", opciones: ["A todo internet", "Solo a tu propia computadora", "A tu proveedor de internet", "Al DNS"], correcta: 1 }
            ]
          },
          {
            id: "m1-a27",
            titulo: "Servidores de verdad: qué estás rentando cuando rentas uno",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En el Mes 9 vas a rentar tu primer servidor. Antes de pagar, entendamos qué estás comprando exactamente. Al rentar un servidor (la nube del A22), pagas por una computadora remota con:</p><ul><li><strong>CPU y RAM</strong> — el poder de cálculo (¿te acuerdas del A1?). Más núcleos y más RAM = atiende más clientes y procesa más rápido. Es lo que más sube el precio.</li><li><strong>Disco</strong> — dónde viven tu código y tus datos. Un SSD rápido cuesta más que uno normal.</li><li><strong>IP pública</strong> — la dirección por la que el mundo te encuentra (A17).</li><li><strong>Sistema operativo</strong> — casi siempre Ubuntu (el A9).</li><li><strong>Ancho de banda</strong> — cuántos datos puede transferir (A23). Ojo: suelen cobrarte el tráfico.</li><li><strong>Uptime</strong> — el porcentaje de tiempo que el servidor está prendido. Un 99.9% significa menos de 9 horas caídas al año. Eso es lo que pagas de verdad: disponibilidad.</li></ul><p>Hay dos sabores principales. <strong>Compartido</strong>: varios clientes en la misma máquina — barato, pero si un vecino satura, te afecta (como departamento compartido). <strong>VPS</strong> (<em>Virtual Private Server</em>): una porción garantizada de una máquina grande — más caro, pero tu CPU y RAM son tuyas. Para tu primer proyecto, un VPS pequeño es el punto dulce.</p><p>Dato que aclara todo: <strong>el servidor de tu app es una computadora que nunca duerme</strong>. Mientras tu laptop se apaga, ese servidor está atendiendo peticiones. Cuando rentas, rentas eso: una máquina despierta para siempre, esperando tu código.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Rentar un servidor es <strong>rentar un local comercial</strong>: el compartido es un local en un mercado con muchos vendedores (barato, pero el vecino puede inundarte); el VPS es un local con puerta propia (tu espacio es tuyo). Y la ubicación importa: si tus clientes son de México, un servidor en la Ciudad de México responde más rápido que uno en Europa — cada milisegundo cuenta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Comparación típica que verás en los proveedores:</p><pre><code>Plan básico (VPS):     2 vCPU · 4 GB RAM · 80 GB SSD · 2 TB de tráfico → $8 USD/mes\nPlan intermedio (VPS): 4 vCPU · 8 GB RAM · 160 GB SSD · 4 TB de tráfico → $16 USD/mes\nAlojamiento compartido: sin CPU garantizada · \"ilimitado\" → $3 USD/mes</code></pre><p>El básico es más que suficiente para tu primer proyecto. Los proveedores hacen dinero cuando te venden upgrades que no necesitas.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a rentar mi primer servidor para [mi proyecto]. ¿Qué plan me conviene considerando que soy principiante? Compara VPS contra compartido y dime qué especificaciones necesito de verdad para no pagar de más.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["CPU y RAM", "Atender clientes y procesar rápido"], ["Disco", "Guardar tu código y tus datos"], ["IP pública", "La dirección por la que el mundo te encuentra"], ["Ancho de banda", "Cuántos datos puede transferir"]] },
              { tipo: "completar", frase: "El 99.9% de ____ significa que el servidor está prendido casi todo el año; es lo que pagas de verdad: ____.", banco: ["uptime", "disponibilidad", "velocidad", "memoria"], respuestas: ["uptime", "disponibilidad"] },
              { tipo: "multiple", pregunta: "¿Cuál es la diferencia clave entre un VPS y un alojamiento compartido?", opciones: ["El VPS es gratis", "En el VPS tu CPU y RAM son tuyas; en el compartido las compartes", "El compartido es siempre más rápido", "No hay diferencia"], correcta: 1 },
              { tipo: "vf", afirmacion: "El servidor de una app necesita estar prendido 24/7 para atender clientes en cualquier momento.", correcta: true, explicacion: "es una computadora que nunca duerme." },
              { tipo: "ordenar", instruccion: "Pasos para tener tu app en un servidor de verdad:", elementos: ["rentar el servidor (plan, región, Ubuntu)", "subir tu código y ejecutarlo", "apuntar tu dominio al servidor", "verificar que carga desde internet"] }
            ]
          },
          {
            id: "m1-a28",
            titulo: "Seguridad básica I: contraseñas, gestores y 2FA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>La puerta de entrada de casi todos los hackeos no es la tecnología: son las <strong>contraseñas</strong>. El error número uno del mundo: reusar la misma contraseña en varios sitios. Si un sitio se filtra (pasa todo el tiempo) y usabas esa contraseña también en tu banco, el ladrón prueba \"¿y si también es la del banco?\" — y acierta. Una contraseña filtrada se vuelve la llave maestra de toda tu vida digital.</p><p>Las reglas que de verdad importan:</p><ol><li><strong>Contraseñas largas y únicas por sitio.</strong> Largas importan más que complejas: \"gato-azul-2009-caminata\" es más fuerte que \"G4t0!x\", porque es larga y no se adivina. Únicas: cada sitio, una distinta.</li><li><strong>Un gestor de contraseñas</strong> — un programa que genera y guarda todas por ti, protegido por una sola contraseña maestra. No tienes que memorizar 40 contraseñas: memorizas una. Los navegadores traen uno integrado; los dedicados (1Password, Bitwarden, el de Apple/Google) son más completos.</li><li><strong>2FA (doble factor)</strong> — además de la contraseña, un segundo paso: un código que cambia cada 30 segundos en una app de tu celular, o una notificación para aprobar. Aunque te roben la contraseña, no pueden entrar sin el código que solo está en tu teléfono.</li></ol><p>Regla que duele pero funciona: si te llega un aviso \"tu contraseña se filtró\", no es broma — cámbiala en ese sitio <strong>y en cualquier otro donde la hayas repetido</strong>. Un gestor hace esto tolerable.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu contraseña es la <strong>llave de tu casa</strong>: reusarla en todos lados es usar la misma llave para tu casa, tu bodega y tu caja fuerte — y dejar copias colgadas en la calle. El gestor de contraseñas es el <strong>llavero con bóveda</strong>: una llave maestra (tu contraseña maestra) abre el estuche donde están todas las demás, cada una distinta. Y el 2FA es el <strong>guardia adicional</strong> que pregunta \"¿tienes la contraseña? — bueno, ¿y el código de tu teléfono?\"</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El flujo cuando activas 2FA en una cuenta:</p><pre><code>Contraseña: ********\n2FA: [ 482913 ]   ← el código de tu app de autenticador</code></pre><p>Aunque alguien robe tu contraseña, sin el código de 6 dígitos que cambia cada 30 segundos en tu celular, la cuenta no abre. Ese es el \"segundo factor\": algo que sabes (contraseña) + algo que tienes (tu teléfono).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero asegurar mis cuentas importantes. Guíame para: 1) configurar un gestor de contraseñas, 2) generar contraseñas fuertes y únicas, y 3) activar 2FA en [tus cuentas]. Explícame por qué cada paso importa y qué errores evitar.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "Reusar la misma contraseña en varios sitios es el riesgo de seguridad más común.", correcta: true, explicacion: "si un sitio se filtra, la contraseña sirve para entrar a los demás." },
              { tipo: "multiple", pregunta: "¿Qué es el 2FA?", opciones: ["Un antivirus gratis", "Un segundo paso de verificación además de la contraseña", "Una contraseña más larga", "Un tipo de red wifi"], correcta: 1 },
              { tipo: "completar", frase: "Un gestor de contraseñas ____ contraseñas largas y únicas, y las ____ detrás de una contraseña maestra.", banco: ["genera", "guarda", "borra", "vende"], respuestas: ["genera", "guarda"] },
              { tipo: "relacionar", pares: [["Contraseña única por sitio", "Que una filtración no abra todas tus cuentas"], ["Gestor de contraseñas", "No tener que memorizar nada ni repetir"], ["2FA", "Que una contraseña robada no sea suficiente"]] },
              { tipo: "quehace", codigo: "Aviso: se filtró tu contraseña del sitio X", pregunta: "Un aviso dice: \"Se filtró tu contraseña del sitio X. ¿La usaste en otro sitio?\" ¿Qué debes hacer?", opciones: ["Ignorarlo, seguro es spam", "Cambiar la contraseña de X y de cualquier sitio donde la hayas repetido", "Cambiar solo la contraseña del correo", "Borrar el navegador"], correcta: 1 }
            ]
          },
          {
            id: "m1-a29",
            titulo: "Seguridad básica II: phishing, enlaces trampa y sentido común",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>La otra puerta de entrada de los criminales digitales no rompe tecnología: te <strong>engaña a ti</strong>. Eso se llama <strong>phishing</strong> (pesca): mandan mensajes que fingen ser tu banco, tu empresa o una tienda, para que les des tu contraseña o caigas en un enlace trampa.</p><p>Cómo se ve la trampa de verdad:</p><ul><li><strong>La urgencia falsa</strong> — \"¡tu cuenta será suspendida en 24 horas!\" El pánico apaga tu pensamiento crítico a propósito.</li><li><strong>La identidad falsa</strong> — logos, nombres y colores que imitan a la marca real. El logo se puede copiar; no es prueba de nada.</li><li><strong>El dominio falso</strong> — aquí está el truco que tienes que dominar: la dirección real. <code>bancomex-mx.com</code>, <code>bancomex.verify.co</code>, <code>bancomex.com.evilsite.net</code> — ninguno es <code>bancomex.com</code>. Antes de hacer clic o escribir datos, <strong>pasa el mouse sobre el enlace y mira la dirección</strong> (la barra de estado te la muestra sin hacer clic).</li><li><strong>El pedido imposible</strong> — ningún banco real te pide tu contraseña por mensaje, ni \"confirma tus datos\" por un link. Regla de oro: <strong>nunca entres a tu banco por un enlace que te mandaron; escríbelo tú en la barra.</strong></li></ul><p>¿Y el sentido común? Una oferta \"ganaste un iPhone\" de alguien que no conoces, un paquete que \"no pudimos entregar\" con enlace, un \"jefe\" que pide transferencias urgentes por mensaje: pausa, revisa el dominio, llama por el teléfono oficial, pregunta en persona. El phishing existe porque funciona; deja de funcionar cuando tú pausas.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El phishing es un <strong>policía falso</strong>: se viste igual, trae placa, pero no es el de verdad. Cualquiera puede imprimir un logo o una placa; la prueba no es el uniforme, es la credencial verificable. En internet, tu credencial es el <strong>dominio escrito por ti</strong>, no el que te llega en un mensaje.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un mensaje de \"tu banco\":</p><pre><code>⚠ \"BancoMex: detectamos actividad inusual.\n   Confirma tus datos AHORA o tu cuenta se suspenderá:\n   → banco-mex.com.mx/confirmar\"    ← el dominio es falso\n\n✔ El banco real jamás te pide datos por un mensaje.\n✔ Y su dominio sería: bancomex.mx (sin guiones raros)</code></pre><p>El enlace se ve parecido, pero no es. Ese guion o esa terminación extra son la firma de la trampa.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Prepárame una lista de señales de phishing para revisar antes de hacer clic en cualquier mensaje. Incluye: la urgencia, el remitente, el dominio del enlace y los pedidos imposibles. Después dame ejemplos reales de enlaces trampa y cómo examinarlos sin hacer clic.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es el phishing?", opciones: ["Un virus que borra el disco", "Mensajes que fingen ser una entidad real para robarte datos", "Un ataque que apaga internet", "Un tipo de contraseña"], correcta: 1 },
              { tipo: "vf", afirmacion: "Si tu banco te pide tu contraseña por mensaje de texto, es legítimo.", correcta: false, explicacion: "ningún banco real pide contraseñas por mensaje; es phishing." },
              { tipo: "completar", frase: "Antes de hacer clic en un enlace sospechoso, pasa el ____ sobre él y revisa el ____ real, no el texto que se ve.", banco: ["mouse", "dominio", "teclado", "color"], respuestas: ["mouse", "dominio"] },
              { tipo: "relacionar", pares: [["\"¡Actúa en 24 horas o se suspende!\"", "Urgencia falsa para que no pienses"], ["Logo del banco copiado", "Identidad falsa"], ["\"Confirma tu contraseña\"", "Pedido imposible"], ["Dominio con guiones y terminación rara", "Enlace trampa"]] },
              { tipo: "quehace", codigo: "Enlace \"de tu banco\" por WhatsApp", pregunta: "Te llega un enlace \"para entrar a tu banco\" por WhatsApp. ¿Cuál es la conducta correcta?", opciones: ["Hacer clic y entrar, se ve oficial", "Escribir el sitio del banco tú mismo en la barra y entrar desde ahí", "Hacer clic pero rápido", "Contestar el mensaje confirmando"], correcta: 1 }
            ]
          },
          {
            id: "m1-a30",
            titulo: "Repaso integrador de La Máquina (mega-quiz jugable)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Bienvenido a la meta de La Máquina. En 29 lecciones armaste el mapa completo de cómo funciona el mundo digital: cómo trabaja una computadora por dentro (A1, A2), cómo se organizan archivos y carpetas (A3, A4), cómo hablarle por terminal (A5, A6, A7), qué sistema la controla (A8, A9), qué es instalar (A10), cómo se construye software con piezas (A11, A12, A13), cómo se equivoca la memoria (A14), qué procesos viven en tu máquina (A15), cómo viajan las peticiones por internet (A16-A20), cómo el navegador lo convierte en imagen (A21), dónde viven las apps (A22-A27) y cómo protegerte (A28, A29).</p><p>Ese mapa no se memoriza para un examen: se usa como herramienta de dirección de IA. Cuando la IA te diga \"instala la dependencia\", \"revisa si el puerto está en uso\", \"sube el ancho de banda\" o \"apunta tu dominio\", tú ya no escuchas palabras raras: escuchas piezas de un rompecabezas que entiendes.</p><p>Esta lección es el examen jugable: ocho ejercicios que mezclan todo lo de la materia. Si fallas alguno, la respuesta te dice a qué lección volver — así el repaso se convierte en mapa, no en memorización. El objetivo no es sacar 10: es detectar tu punto más débil y cerrarlo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Este repaso es el <strong>recorrido final de la obra</strong>: en las 29 lecciones instalaste tubería, electricidad y acabados; ahora enciendes todas las luces y recorres la casa de punta a punta para ver qué funciona. Cada ejercicio es un cuarto encendido. Los que no prenden son los que hay que arreglar antes de entregar la llave.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Estrategia para el mega-quiz: respóndelo completo, y por cada falla escribe en una hoja el número de la lección que se te indica al pie de la respuesta. Ese papel es tu plan de repaso personal — las lecciones que repites no son castigo, son tu plan de entrenamiento para la siguiente semana.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero hacer un repaso del Mes 1 de La Máquina. Hazme un examen oral: hazme preguntas de a una, espera mi respuesta, y según cómo responda dime si estoy listo o qué lección repasar. Cubre: hardware, archivos y rutas, terminal, sistemas operativos, dependencias y npm, caché, procesos, internet y DNS, URLs, HTTP/HTTPS, cliente-servidor, navegador, nube, puertos, localhost, servidores y seguridad.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Tu compu se traba con muchas pestañas abiertas. ¿Cuál es la causa más probable, y qué pieza del A1 está saturada?", opciones: ["El disco está lleno", "La RAM está saturada", "El CPU está apagado", "La pantalla es pequeña"], correcta: 1 },
              { tipo: "completar", frase: "Al correr <code>npm install</code>, el proyecto lee su ____ y descarga las piezas a ____; y si el puerto está en uso, hay un ____ que lo ocupa.", banco: ["package.json", "node_modules", "proceso", "navegador"], respuestas: ["package.json", "node_modules", "proceso"] },
              { tipo: "relacionar", pares: [["127.0.0.1", "localhost"], ["Puerta 443", "HTTPS"], ["puerto 3000", "Desarrollo local"], ["?id=5", "Parámetros de URL"]] },
              { tipo: "vf", afirmacion: "Si cambiaste tu código pero el navegador muestra la versión vieja, puede ser la caché; borrarla o forzar la recarga suele arreglarlo.", correcta: true, explicacion: "la caché guarda copias viejas y la recarga forzada las ignora." },
              { tipo: "ordenar", instruccion: "Acomoda en orden lo que pasa cuando escribes una URL:", elementos: ["el navegador consulta el DNS por la IP", "el navegador manda una petición HTTPS", "el servidor responde con la página", "el navegador ejecuta HTML, CSS y JavaScript"] },
              { tipo: "quehace", codigo: "EADDRINUSE: address already in use 127.0.0.1:3000", pregunta: "La terminal dice: <code>EADDRINUSE: address already in use 127.0.0.1:3000</code>. ¿Qué está pasando y cómo lo resuelves?", opciones: ["Tu internet se cayó; reinicia el módem", "El puerto 3000 ya está ocupado; cierra el proceso que lo usa o cambia de puerto", "El DNS no encuentra tu dominio", "La caché está llena; borra el historial"], correcta: 1 },
              { tipo: "multiple", pregunta: "Un mensaje \"de tu banco\" te pide confirmar tu contraseña con urgencia por un enlace. ¿Qué es y qué haces?", opciones: ["Es phishing; no hagas clic y entra al banco escribiendo el dominio tú mismo", "Es real; haz clic y confirma rápido", "Es una actualización del sistema; acéptala", "Es tu proveedor de internet; ignóralo y listo"], correcta: 0 },
              { tipo: "completar", frase: "En la nube ____ servidores en vez de comprar hardware; tu app vive en una computadora ajena prendida ____, y la encuentras por su ____ pública.", banco: ["rentas", "24/7", "IP", "caché"], respuestas: ["rentas", "24/7", "IP"] }
            ]
          }
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
  },
  "m2": {
    titulo: "Git, GitHub y el trabajo real con código",
    materias: {
      "a": {
        nombre: "Git: la máquina del tiempo",
        icono: "⏳",
        lecciones: [
          {
            id: "m2-a1",
            titulo: "¿Qué problema resuelve Git? (el infierno de \"final_v2_FINAL_bueno.doc\")",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Antes de entender qué es Git, entiende el dolor que lo hizo nacer. Cualquiera que haya trabajado en una computadora conoce esta carpeta:</p><pre><code>propuesta.doc\npropuesta_v2.doc\npropuesta_v2_corregida.doc\npropuesta_FINAL.doc\npropuesta_FINAL_ok.doc\npropuesta_FINAL_ok_ESTA_SI.doc</code></pre><p>Ese caos tiene tres problemas graves: no sabes qué cambió entre versiones, no sabes cuál es la buena, y si dos personas editan al mismo tiempo, alguien pierde su trabajo. Con documentos es molesto. <strong>Con software es catastrófico.</strong></p><p><strong>Git</strong> es un sistema de control de versiones: un programa que vigila una carpeta y registra cada cambio que ocurre dentro de ella. En vez de guardar copias del archivo completo, guarda <strong>qué cambió, cuándo, quién lo hizo y por qué</strong>. Y puede devolverte a cualquier punto del pasado, en segundos.</p><p>Lo que Git te da desde hoy:</p><ul><li><strong>Historial completo:</strong> cada versión de tu proyecto, para siempre</li><li><strong>Volver atrás:</strong> rompiste algo, regresas a antes de romperlo</li><li><strong>Trabajo paralelo:</strong> probar una idea sin tocar lo que ya funciona</li><li><strong>Colaboración:</strong> varias personas (o varias IAs) trabajando sin pisarse</li></ul><p>Este último punto es el que te importa como constructor con IA: cuando le pides cambios a una IA y el resultado empeora las cosas, Git es tu botón de deshacer infinito. <strong>Sin Git, dirigir IA es trabajar sin red.</strong></p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Git es la <strong>máquina del tiempo de tu proyecto</strong>. Cada vez que guardas un avance importante, la máquina toma una fotografía completa del estado del mundo. Si mañana todo explota, viajas a la foto de ayer y sigues desde ahí, como si nada hubiera pasado. Y a diferencia de las películas, aquí viajar al pasado no tiene consecuencias raras: es gratis, instantáneo y reversible.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un historial real de Git se ve así:</p><pre><code>a3f9c1  Agregar botón de WhatsApp        (hace 2 horas)\n7d2b84  Cambiar colores a paleta nueva   (ayer)\n1e8a05  Corregir precios de productos    (hace 3 días)\n9c4f21  Versión inicial de la página     (hace 5 días)</code></pre><p>Cuatro fotografías del proyecto. Puedes ver qué cambió en cada una, y regresar a cualquiera con un comando. Ese código de letras y números (<code>a3f9c1</code>) es el identificador único de cada foto.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Le voy a pedir cambios grandes a mi proyecto y tengo miedo de romperlo. Explícame paso a paso cómo uso Git para poder volver atrás si algo sale mal, como si nunca lo hubiera usado.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es Git?", opciones: ["Un lenguaje de programación", "Un sistema que registra cada cambio de un proyecto", "Una red social de programadores", "Un editor de código"], correcta: 1 },
              { tipo: "completar", frase: "Git no guarda copias completas: guarda ____ cambió, cuándo, quién y por ____.", banco: ["qué", "qué", "dónde", "cuánto"], respuestas: ["qué", "qué"] },
              { tipo: "vf", afirmacion: "Con Git puedes volver a cualquier versión anterior de tu proyecto.", correcta: true, explicacion: "es su superpoder principal." },
              { tipo: "relacionar", pares: [["No sé qué cambió", "Historial detallado"], ["Rompí algo", "Volver atrás"], ["Quiero probar una idea sin arriesgar", "Ramas"], ["Somos varios trabajando", "Colaboración sin pisarse"]] },
              { tipo: "multiple", pregunta: "¿Por qué Git es especialmente importante trabajando con IA?", opciones: ["Porque la IA lo exige", "Porque si la IA empeora el código, puedes deshacer todo", "Porque hace la IA más rápida", "Porque reduce el costo de los tokens"], correcta: 1 }
            ]
          },
          {
            id: "m2-a2",
            titulo: "Instalar Git y configurarlo por primera vez",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Git es un programa que se instala UNA vez en tu computadora y sirve para todos tus proyectos, para siempre. No es una app con ventanas: vive en la terminal (¿recuerdas el Mes 1?) y también dentro de editores como VS Code.</p><p><strong>Instalación según tu sistema:</strong></p><ul><li><strong>Windows:</strong> descarga de <code>git-scm.com</code> y siguiente-siguiente. O por terminal: <code>winget install --id Git.Git</code></li><li><strong>Mac:</strong> viene preinstalado en muchos casos. Si no: <code>brew install git</code></li><li><strong>Linux/Ubuntu:</strong> <code>sudo apt install git</code></li></ul><p><strong>Verificar que quedó:</strong></p><pre><code>git --version</code></pre><p>Si responde algo como <code>git version 2.47.0</code>, ya está. Si dice \"comando no encontrado\", no se instaló.</p><p><strong>La configuración obligatoria de la primera vez.</strong> Git firma cada cambio con tu nombre y correo, para que el historial diga quién hizo qué. Se configura una sola vez:</p><pre><code>git config --global user.name \"Tu Nombre\"\ngit config --global user.email \"tucorreo@ejemplo.com\"</code></pre><p>Ese <code>--global</code> significa \"para todos mis proyectos\". Usa el mismo correo que vayas a usar en GitHub (Materia B) para que todo quede vinculado.</p><p>Detalle que evita dolores: Git usa un editor de texto para ciertas operaciones, y por default en algunos sistemas abre <code>vim</code>, un editor legendario del que <strong>es famoso que la gente no sabe cómo salir</strong>. Cámbialo a algo humano:</p><pre><code>git config --global core.editor \"code --wait\"</code></pre><p>(Eso usa VS Code. Si no lo tienes instalado todavía, déjalo así por ahora.)</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Instalar y configurar Git es como <strong>darte de alta en el registro civil de tu proyecto</strong>: le dices al sistema cómo te llamas y cómo contactarte, para que cada acta (commit) que firmes tenga tu nombre. Se hace una vez en la vida y después todos los trámites ya te reconocen.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Sesión completa de primera configuración:</p><pre><code>C:\\Users\\Ray&gt; git --version\ngit version 2.47.0.windows.1\n\nC:\\Users\\Ray&gt; git config --global user.name \"Raymundo Flores\"\nC:\\Users\\Ray&gt; git config --global user.email \"rayfg96@gmail.com\"\n\nC:\\Users\\Ray&gt; git config --global --list\nuser.name=Raymundo Flores\nuser.email=rayfg96@gmail.com</code></pre><p>Tres comandos y ya estás listo para versionar cualquier proyecto del resto de tu vida.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Estoy en [Windows/Mac/Linux] y quiero instalar Git desde cero. Dame los comandos exactos, uno por uno, incluyendo cómo verificar que quedó bien instalado y la configuración inicial de nombre y correo. Explícame qué hace cada comando antes de que lo corra.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué comando verifica que Git quedó instalado?", opciones: ["git check", "git --version", "git status", "git test"], correcta: 1 },
              { tipo: "completar", frase: "Git firma cada cambio con tu ____ y tu ____, para que el historial diga quién hizo qué.", banco: ["nombre", "correo", "contraseña", "dirección"], respuestas: ["nombre", "correo"] },
              { tipo: "quehace", codigo: "git config --global user.email \"ray@ejemplo.com\"", pregunta: "<code>git config --global user.email \"ray@ejemplo.com\"</code> — ¿qué hace?", opciones: ["Crea una cuenta de GitHub", "Configura el correo con el que se firmarán tus cambios en todos tus proyectos", "Envía un correo de prueba", "Recupera tu contraseña"], correcta: 1 },
              { tipo: "vf", afirmacion: "Git se instala una vez por proyecto.", correcta: false, explicacion: "se instala una vez en tu computadora y sirve para todos tus proyectos." },
              { tipo: "multiple", pregunta: "¿Qué significa la bandera <code>--global</code> en la configuración?", opciones: ["Que se sube a internet", "Que aplica a todos tus proyectos, no solo al actual", "Que es visible públicamente", "Que funciona en todos los idiomas"], correcta: 1 }
            ]
          },
          {
            id: "m2-a3",
            titulo: "El repositorio: la carpeta con memoria fotográfica",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un <strong>repositorio</strong> (o \"repo\", como le dice todo el mundo) es una carpeta normal de tu computadora que Git está vigilando. Por fuera se ve idéntica a cualquier otra carpeta: tiene tus archivos, tus subcarpetas, todo igual.</p><p>La diferencia está en una carpeta oculta llamada <strong><code>.git</code></strong> que aparece adentro. Ahí vive TODO el historial: cada versión de cada archivo, cada cambio, cada mensaje, cada autor, desde el primer día del proyecto. Esa carpeta oculta es la máquina del tiempo.</p><p>Consecuencias prácticas de esto:</p><ul><li>Si copias la carpeta del proyecto a una USB, <strong>el historial va incluido</strong> (porque <code>.git</code> viaja con ella)</li><li>Si borras la carpeta <code>.git</code>, pierdes TODO el historial pero conservas los archivos actuales — la carpeta vuelve a ser una carpeta normal</li><li>Un repo funciona <strong>sin internet</strong>. Git es local; GitHub (Materia B) es lo que le agrega la nube</li></ul><p>Vocabulario que vas a escuchar todo el tiempo:</p><ul><li><strong>Repositorio local:</strong> el que está en tu computadora</li><li><strong>Repositorio remoto:</strong> una copia que vive en internet (GitHub)</li><li><strong>Clonar:</strong> descargar una copia completa de un repo remoto</li></ul><p>Cuando una IA te diga \"haz commit en tu repo\" o \"el repositorio tiene 3 branches\", ya sabes exactamente de qué habla: de la carpeta con memoria.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un repositorio es una <strong>carpeta con cámara de seguridad interna</strong>. Por fuera, un archivero común. Pero adentro tiene una grabación completa de todo lo que ha pasado ahí: quién entró, qué movió, qué sacó, a qué hora. Puedes rebobinar la cinta a cualquier momento y ver — o restaurar — cómo estaba todo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Una carpeta normal:</p><pre><code>mi-tienda/\n├── index.html\n├── styles.css\n└── logo.png</code></pre><p>La misma carpeta convertida en repositorio:</p><pre><code>mi-tienda/\n├── .git/          ← ¡AQUÍ vive el historial completo!\n├── index.html\n├── styles.css\n└── logo.png</code></pre><p>Un solo directorio de diferencia — y ese directorio contiene toda la historia del proyecto. (La carpeta <code>.git</code> está oculta por default: en Windows tienes que activar \"Elementos ocultos\" en el explorador para verla.)</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo una carpeta con mi proyecto. Explícame qué le pasa exactamente cuando la convierto en repositorio de Git: qué se crea, qué NO cambia de mis archivos, y qué pasaría si borro la carpeta .git.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es un repositorio?", opciones: ["Un servidor en internet", "Una carpeta que Git está vigilando", "Un tipo de archivo", "Una cuenta de GitHub"], correcta: 1 },
              { tipo: "completar", frase: "Todo el historial de un repositorio vive en una carpeta oculta llamada ____.", banco: [".git", ".historial", ".repo", ".version"], respuestas: [".git"] },
              { tipo: "vf", afirmacion: "Git necesita internet para funcionar.", correcta: false, explicacion: "Git es local; GitHub es lo que agrega internet." },
              { tipo: "relacionar", pares: [["Repositorio local", "El que está en tu computadora"], ["Repositorio remoto", "La copia que vive en internet"], ["Clonar", "Descargar una copia completa de un repo"], [".git", "La carpeta oculta con todo el historial"]] },
              { tipo: "quehace", codigo: "borrar .git", pregunta: "Borras la carpeta <code>.git</code> de tu proyecto. ¿Qué pasa?", opciones: ["Se borran todos tus archivos", "Pierdes el historial pero conservas los archivos actuales", "No pasa nada, se regenera sola", "El proyecto deja de funcionar"], correcta: 1 }
            ]
          },
          {
            id: "m2-a4",
            titulo: "git init: convertir una carpeta normal en repo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>El comando que enciende la máquina del tiempo es uno solo:</p><pre><code>git init</code></pre><p>Se ejecuta <strong>dentro</strong> de la carpeta que quieres versionar, y hace exactamente una cosa: crea la carpeta oculta <code>.git</code>. A partir de ese momento, Git está observando.</p><p>El flujo completo desde cero:</p><pre><code>cd Proyectos              ← te mueves a donde guardas tus cosas\nmkdir mi-tienda           ← creas la carpeta del proyecto\ncd mi-tienda              ← entras a ella\ngit init                  ← la conviertes en repositorio</code></pre><p>(Todos esos comandos son del Mes 1 — <code>cd</code>, <code>mkdir</code>. Ya los conocías; ahora los usas de verdad.)</p><p>Git responde algo como:</p><pre><code>Initialized empty Git repository in C:/Users/Ray/Proyectos/mi-tienda/.git/</code></pre><p>\"Empty\" (vacío) significa que todavía no has guardado ninguna fotografía. La cámara está instalada pero no ha disparado.</p><p><strong>Errores comunes que vas a evitar por saber esto:</strong></p><ol><li><strong>Correr <code>git init</code> en la carpeta equivocada.</strong> Si lo corres en <code>C:\\Users\\Ray</code> conviertes TU CARPETA DE USUARIO ENTERA en un repositorio — con miles de archivos que no querías. Si te pasa: borra el <code>.git</code> que se creó ahí y vuelve a empezar en la carpeta correcta. Antes de hacer <code>git init</code>, corre <code>ls</code> (o <code>dir</code>) y confirma que estás donde crees.</li><li><strong>Hacer <code>git init</code> dentro de un repo que ya existe.</strong> No es catastrófico, pero es señal de que te perdiste. Verifica con <code>git status</code>: si responde información del repo, ya era un repo.</li></ol><p>Nota de 2026: el nombre de la rama principal por default es <code>main</code> (antes era <code>master</code>). Si tu Git es viejo y crea <code>master</code>, actualízalo o renómbrala — todo el mundo usa <code>main</code> hoy.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git init</code> es <strong>instalar la cámara de seguridad en el local</strong>. El local ya existía, tus cosas ya estaban ahí, nada se mueve. Pero desde el momento en que la instalas, empieza la capacidad de grabar. Lo que hubo ANTES de instalarla no queda registrado: el historial arranca hoy.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\Users\\Ray\\Proyectos&gt; mkdir mi-tienda\nC:\\Users\\Ray\\Proyectos&gt; cd mi-tienda\nC:\\Users\\Ray\\Proyectos\\mi-tienda&gt; git init\nInitialized empty Git repository in C:/Users/Ray/Proyectos/mi-tienda/.git/\n\nC:\\Users\\Ray\\Proyectos\\mi-tienda&gt; git status\nOn branch main\n\nNo commits yet\n\nnothing to commit (create/copy files and use \"git add\" to track)</code></pre><p>Git te está diciendo, en su idioma: \"estás en la rama main, no hay ninguna foto todavía, y no hay nada que fotografiar — crea archivos\".</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a crear un proyecto nuevo desde cero y quiero versionarlo con Git. Dame la secuencia exacta de comandos desde crear la carpeta hasta tener el repositorio listo, y dime cómo verifico en cada paso que voy bien.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace <code>git init</code>?", opciones: ["Sube el proyecto a internet", "Crea la carpeta .git y convierte la carpeta en repositorio", "Descarga un proyecto ajeno", "Guarda una fotografía del proyecto"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Acomoda la secuencia para crear un proyecto versionado desde cero:", elementos: ["mkdir mi-tienda", "cd mi-tienda", "git init"] },
              { tipo: "vf", afirmacion: "<code>git init</code> guarda automáticamente una primera versión de tus archivos.", correcta: false, explicacion: "solo instala la cámara; todavía no hay ninguna foto tomada." },
              { tipo: "completar", frase: "En 2026 la rama principal por default se llama ____, aunque antes se llamaba ____.", banco: ["main", "master", "origin", "head"], respuestas: ["main", "master"] },
              { tipo: "quehace", codigo: "git init en C:\\Users\\Ray", pregunta: "Corriste <code>git init</code> por error en <code>C:\\Users\\Ray</code>. ¿Qué debes hacer?", opciones: ["Nada, es inofensivo", "Borrar la carpeta .git que se creó ahí y repetirlo en la carpeta correcta", "Reinstalar Git", "Formatear la computadora"], correcta: 1 }
            ]
          },
          {
            id: "m2-a5",
            titulo: "Los 3 estados de Git: trabajo, preparación, historial",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Este es EL concepto que hace clic y de repente Git deja de ser confuso. Git no guarda tus cambios directamente: los mueve por <strong>tres zonas</strong>.</p><p><strong>1. Working Directory (área de trabajo)</strong><br>Tu carpeta tal cual la ves. Aquí editas archivos, creas, borras. Todo cambio nace aquí. Git lo nota pero no lo ha guardado.</p><p><strong>2. Staging Area (área de preparación)</strong><br>Una antesala. Aquí pones los cambios que quieres que entren en la PRÓXIMA fotografía. Es una lista de \"esto sí va\". Se llena con <code>git add</code>.</p><p><strong>3. Repository (historial)</strong><br>El álbum de fotos permanente. Lo que llega aquí queda registrado para siempre. Se guarda con <code>git commit</code>.</p><p>El flujo, siempre igual:</p><pre><code>editas archivos  →  git add  →  git commit\n(working)          (staging)     (historial)</code></pre><p><strong>¿Por qué existe la zona intermedia?</strong> Porque no siempre quieres guardar todo lo que tocaste. Imagina que trabajaste en dos cosas: arreglaste un bug Y cambiaste colores. Son cambios distintos que merecen fotos distintas. El staging te deja decir \"primero fotografío el bug, luego los colores\" — commits limpios y separados, en vez de un revoltijo.</p><p>Ese detalle es lo que separa un historial profesional (donde puedes encontrar exactamente cuándo se rompió algo) de un historial inútil (donde todo es un solo commit gigante llamado \"cambios\").</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es como <strong>mandar un paquete por paquetería</strong>:</p><ol><li><strong>Tu casa (working):</strong> tienes cosas regadas por toda la casa.</li><li><strong>La caja (staging):</strong> eliges qué cosas SÍ van en este envío y las metes a la caja. Las demás se quedan en casa para el próximo envío.</li><li><strong>Enviado (historial):</strong> sellas la caja y la mandas. Queda registrada con guía, fecha y destinatario. Ya no la puedes abrir.</li></ol><p>Si metiste algo por error, todavía puedes sacarlo de la caja <strong>antes</strong> de sellarla. Después, ya no.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git status\nOn branch main\nChanges not staged for commit:\n        modified:   index.html      ← en working, sin preparar\n        modified:   styles.css      ← en working, sin preparar\n\nC:\\...\\mi-tienda&gt; git add index.html    ← solo este va a la caja\n\nC:\\...\\mi-tienda&gt; git status\nOn branch main\nChanges to be committed:\n        modified:   index.html      ← ya en staging\nChanges not staged for commit:\n        modified:   styles.css      ← sigue en working</code></pre><p>Fíjate: tocaste dos archivos, pero solo preparaste uno. El próximo commit va a incluir SOLO <code>index.html</code>. Eso es control fino.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Trabajé en varias cosas a la vez en mi proyecto y quiero guardarlas en commits separados por tema. Explícame cómo uso el área de staging para lograrlo, con los comandos exactos.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda las 3 zonas de Git en el orden que recorre un cambio:", elementos: ["Working Directory", "Staging Area", "Repository (historial)"] },
              { tipo: "relacionar", pares: [["Working Directory", "Tu carpeta donde editas"], ["Staging Area", "Se llena con `git add`"], ["Repository", "Se guarda con `git commit`"]] },
              { tipo: "completar", frase: "El área de ____ existe para poder elegir QUÉ cambios entran en la próxima ____.", banco: ["staging", "fotografía", "trabajo", "carpeta"], respuestas: ["staging", "fotografía"] },
              { tipo: "vf", afirmacion: "Si editas 5 archivos, obligatoriamente los 5 entran en el siguiente commit.", correcta: false, explicacion: "con `git add` eliges cuáles; los demás se quedan esperando." },
              { tipo: "quehace", codigo: "sellar la caja y mandarla", pregunta: "En la analogía del paquete, ¿qué representa \"sellar la caja y mandarla\"?", opciones: ["git add", "git init", "git commit", "git status"], correcta: 2 }
            ]
          },
          { id: "m2-a6", titulo: "git status: tu brújula, el comando que más vas a usar", proximamente: true },
          { id: "m2-a7", titulo: "git add: elegir qué entra en la foto", proximamente: true },
          { id: "m2-a8", titulo: "git commit: tomar la foto", proximamente: true },
          { id: "m2-a9", titulo: "Mensajes de commit: escribirle a tu yo del futuro", proximamente: true },
          { id: "m2-a10", titulo: "git log: leer la historia de tu proyecto", proximamente: true },
          { id: "m2-a11", titulo: ".gitignore: lo que Git NUNCA debe rastrear", proximamente: true },
          { id: "m2-a12", titulo: "git diff: ver exactamente qué cambió, línea por línea", proximamente: true },
          { id: "m2-a13", titulo: "Deshacer I: git restore (antes del commit)", proximamente: true },
          { id: "m2-a14", titulo: "Deshacer II: git revert (después del commit, sin borrar historia)", proximamente: true },
          { id: "m2-a15", titulo: "Deshacer III: git reset y por qué da miedo", proximamente: true },
          { id: "m2-a16", titulo: "Ramas: qué son y por qué lo cambian todo", proximamente: true },
          { id: "m2-a17", titulo: "git branch y git switch: crear y moverte entre ramas", proximamente: true },
          { id: "m2-a18", titulo: "Trabajar en una rama sin romper lo que ya funciona", proximamente: true },
          { id: "m2-a19", titulo: "git merge: unir tu trabajo con el principal", proximamente: true },
          { id: "m2-a20", titulo: "Conflictos de merge: qué son, por qué pasan, cómo se resuelven", proximamente: true },
          { id: "m2-a21", titulo: "HEAD, main, origin: el vocabulario que confunde a todos", proximamente: true },
          { id: "m2-a22", titulo: "git stash: guardar temporalmente sin commitear", proximamente: true },
          { id: "m2-a23", titulo: "Tags y versiones: marcar los momentos importantes", proximamente: true },
          { id: "m2-a24", titulo: "El árbol de commits: leer el historial gráfico", proximamente: true },
          { id: "m2-a25", titulo: "Git + IA: pedirle a la IA que interprete tu historial", proximamente: true },
          { id: "m2-a26", titulo: "Los 5 errores de principiante y cómo salir de cada uno", proximamente: true },
          { id: "m2-a27", titulo: "Git dentro de VS Code: la interfaz visual sin terminal", proximamente: true },
          { id: "m2-a28", titulo: "Commits atómicos: la disciplina que te salva", proximamente: true },
          { id: "m2-a29", titulo: "Cuándo NO usar Git (y qué usar en su lugar)", proximamente: true },
          { id: "m2-a30", titulo: "Repaso integrador de Git (mega-quiz jugable)", proximamente: true }
        ]
      },
      "b": {
        nombre: "GitHub: la plaza pública del código",
        icono: "🐙",
        lecciones: [
          {
            id: "m2-b1",
            titulo: "¿Qué es GitHub? La red social del código",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Primero, la confusión que hay que matar de entrada: <strong>Git y GitHub no son lo mismo.</strong></p><ul><li><strong>Git</strong> es el programa que vive en tu computadora y registra los cambios (Materia A). Funciona sin internet. Lo creó Linus Torvalds en 2005.</li><li><strong>GitHub</strong> es un sitio web donde puedes guardar tus repositorios de Git en la nube y compartirlos. Es una empresa (de Microsoft desde 2018). Necesita internet.</li></ul><p>Analogía rápida: Git es como el correo electrónico (el protocolo); GitHub es como Gmail (un servicio que lo usa). Existen alternativas a GitHub — GitLab, Bitbucket — igual que existe Outlook además de Gmail. Pero GitHub es el dominante: <strong>más de 100 millones de desarrolladores</strong> tienen cuenta ahí.</p><p>Qué hace GitHub por ti:</p><ol><li><strong>Respaldo:</strong> si tu computadora se muere, tu proyecto vive</li><li><strong>Portafolio público:</strong> tu perfil ES tu currículum técnico hoy en día</li><li><strong>Colaboración:</strong> varias personas trabajando en el mismo proyecto sin caos</li><li><strong>Biblioteca infinita:</strong> millones de proyectos open source que puedes leer, copiar y aprender</li><li><strong>Publicación gratis:</strong> GitHub Pages hospeda tu sitio web sin costo</li></ol><p>Y el punto que te toca directamente: <strong>casi todas las herramientas de IA para programar se conectan a GitHub.</strong> Cuando tú (o una IA ejecutora) trabajen en un proyecto, el repositorio de GitHub es el punto de encuentro. Es la dirección donde todos —humanos e IAs— van a buscar la verdad del proyecto.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Si tu repositorio local es tu <strong>cuaderno de trabajo</strong>, GitHub es la <strong>biblioteca pública donde depositas una copia</strong>. Ahí está segura aunque se te queme la casa, cualquiera a quien le des permiso puede consultarla, y si la dejas pública, cualquier persona del mundo puede leerla, aprender de ella o proponerte mejoras.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un repositorio en GitHub se ve así:</p><pre><code>EmaService / DEV-SYSTEM-ACADEMY                 ⭐ 12  🍴 3\n\n📄 README.md\n📁 contenido/\n📁 netlify/\n📄 index.html\n📄 portal.html\n\nÚltimos commits:\n  7acbe46  fix: closure de loop dejaba opacity:0    hace 2 horas\n  4cf99d3  fix: unificar sistema de tabs            hace 3 horas</code></pre><p>El nombre del dueño, el nombre del repo, sus archivos, y el historial completo — visible desde cualquier navegador del mundo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Explícame la diferencia entre Git y GitHub con un ejemplo cotidiano. Después dime qué cosas puedo hacer SOLO con Git y qué cosas necesitan GitHub.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es la diferencia entre Git y GitHub?", opciones: ["Son lo mismo con distinto nombre", "Git es el programa local; GitHub es el servicio web donde se guardan los repos", "Git es gratis y GitHub de paga", "Git es para Windows y GitHub para Mac"], correcta: 1 },
              { tipo: "vf", afirmacion: "Necesitas GitHub para poder usar Git.", correcta: false, explicacion: "Git funciona perfectamente solo y sin internet." },
              { tipo: "relacionar", pares: [["Respaldo", "Si tu computadora muere, el proyecto vive"], ["Portafolio", "Tu perfil es tu currículum técnico"], ["Colaboración", "Varias personas en un proyecto sin caos"], ["GitHub Pages", "Publicar tu sitio gratis"]] },
              { tipo: "completar", frase: "Git es como el correo electrónico (el protocolo); GitHub es como ____ (un servicio que lo usa). Alternativas a GitHub son ____ y Bitbucket.", banco: ["Gmail", "GitLab", "Outlook", "Git"], respuestas: ["Gmail", "GitLab"] },
              { tipo: "multiple", pregunta: "¿Por qué GitHub importa especialmente si trabajas con IA?", opciones: ["Porque la IA cobra menos ahí", "Porque es el punto de encuentro donde humanos e IAs trabajan sobre el mismo proyecto", "Porque GitHub entrena a las IAs", "Porque sin GitHub la IA no puede escribir código"], correcta: 1 }
            ]
          },
          {
            id: "m2-b2",
            titulo: "Tu cuenta y tu perfil: la nueva carta de presentación profesional",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu perfil de GitHub es lo primero que va a ver un cliente, un socio o un empleador que quiera saber si sabes lo que dices que sabes. No es opcional: <strong>es tu currículum técnico</strong>.</p><p><strong>Crear la cuenta</strong> (es gratis) en <code>github.com</code>:</p><ul><li>Elige un <strong>username</strong> con cuidado: va a ser tu URL pública (<code>github.com/tuusuario</code>) y es difícil de cambiar después. Usa algo profesional — tu nombre, tu marca, tu apodo serio. No <code>xXdarkcoderXx</code>.</li><li>Usa el <strong>mismo correo</strong> que configuraste en Git (lección A2), así tus commits se vinculan a tu perfil automáticamente.</li><li><strong>Activa 2FA</strong> (autenticación de dos factores). GitHub lo exige para cuentas activas y te protege de que alguien secuestre tu trabajo.</li></ul><p><strong>Los elementos de un perfil que se ve serio:</strong></p><ol><li><strong>Foto real</strong> — no el avatar gris por default. Un perfil sin foto se lee como cuenta abandonada.</li><li><strong>Nombre completo y bio</strong> — una línea que diga qué haces: \"Construyo sistemas web con IA · Fundador de DEV SYSTEM\"</li><li><strong>Ubicación y enlaces</strong> — tu sitio, tu WhatsApp de negocio, tu LinkedIn</li><li><strong>Repositorios fijados (pinned)</strong> — puedes destacar hasta 6 proyectos. Estos son tu portafolio.</li><li><strong>El README de perfil</strong> — un truco: si creas un repositorio con EXACTAMENTE tu nombre de usuario y le pones un <code>README.md</code>, ese contenido aparece como portada de tu perfil. Es la carta de presentación que casi nadie usa y te distingue de inmediato.</li></ol><p><strong>El gráfico de contribuciones</strong> (los cuadritos verdes) muestra tu actividad diaria. No lo persigas obsesivamente — pero un perfil con actividad constante transmite algo que ningún texto transmite: <strong>que esto lo haces en serio</strong>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu perfil de GitHub es el <strong>escaparate de tu taller</strong>. Un cliente que pasa por la calle no entra a preguntar tu currículum: mira la vitrina. Si ve trabajos terminados, orden y actividad reciente, entra. Si ve una cortina bajada y polvo, sigue de largo. Lo que expones ahí decide si te toman en serio antes de que hables.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un perfil bien armado:</p><pre><code>👤 Raymundo Flores\n   @rayflores\n\n   Construyo sistemas web con IA\n   🏢 DEV SYSTEM ACADEMY\n   📍 Ciudad de México\n   🔗 devsystemacademy.com\n\n   📌 Repositorios destacados\n   ┌─────────────────────┐  ┌─────────────────────┐\n   │ mi-primera-pagina   │  │ tienda-el-guero     │\n   │ Landing responsive  │  │ Sitio de negocio    │\n   │ ● HTML  ⭐ 2        │  │ ● HTML  ⭐ 1        │\n   └─────────────────────┘  └─────────────────────┘</code></pre><p>Eso, para quien lo ve, dice: esta persona construye y publica cosas reales.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a crear mi perfil de GitHub. Escríbeme una bio profesional de una línea (máximo 160 caracteres) para alguien que construye sistemas web dirigiendo IA y tiene [describe tu negocio]. Dame 3 opciones con distinto tono.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué username conviene elegir en GitHub?", opciones: ["El más creativo posible", "Uno profesional, porque será tu URL pública y es difícil de cambiar", "Uno con números para que sea único", "Da igual, nadie lo ve"], correcta: 1 },
              { tipo: "vf", afirmacion: "Conviene usar el mismo correo en Git y en GitHub.", correcta: true, explicacion: "así tus commits se vinculan automáticamente a tu perfil." },
              { tipo: "completar", frase: "Si creas un repositorio con exactamente tu ____ de usuario y le pones un ____, ese contenido aparece como portada de tu perfil.", banco: ["nombre", "README.md", "correo", "index.html"], respuestas: ["nombre", "README.md"] },
              { tipo: "multiple", pregunta: "¿Cuántos repositorios puedes destacar (pin) en tu perfil?", opciones: ["3", "6", "10", "Ilimitados"], correcta: 1 },
              { tipo: "relacionar", pares: [["Foto real", "Cuenta activa y seria"], ["Bio de una línea", "Qué haces exactamente"], ["Repos fijados", "Tu portafolio"], ["Gráfico de contribuciones", "Constancia en el tiempo"]] }
            ]
          },
          {
            id: "m2-b3",
            titulo: "Repositorio remoto: la copia que vive en internet",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya tienes un repositorio local (Materia A): la carpeta con su <code>.git</code>. Un <strong>repositorio remoto</strong> es una copia de ese mismo repositorio que vive en un servidor — típicamente GitHub.</p><p>Lo importante de entender: <strong>son dos copias completas e independientes</strong>. Cada una tiene TODO el historial. No es que GitHub tenga \"el proyecto\" y tú una versión parcial: los dos tienen el proyecto entero. Se sincronizan cuando tú se lo pides, con dos comandos que verás en B5 y B6:</p><ul><li><strong><code>git push</code></strong> — empujar: subir tus commits locales al remoto</li><li><strong><code>git pull</code></strong> — jalar: bajar los commits del remoto a tu local</li></ul><p>Esa independencia es lo que hace a Git tan resistente: si GitHub se cae mañana, tu trabajo sigue completo en tu máquina. Si tu máquina se muere, tu trabajo sigue completo en GitHub.</p><p><strong>Cómo se crea un repositorio remoto:</strong></p><ol><li>En GitHub, botón <strong>New repository</strong> (o el <code>+</code> arriba a la derecha)</li><li>Le pones nombre (idealmente igual que tu carpeta local: <code>mi-tienda</code>)</li><li>Eliges <strong>público</strong> o <strong>privado</strong> (lección B8)</li><li><strong>NO marques</strong> \"Add a README\" si ya tienes un repo local con contenido — eso crea un commit inicial que después choca con el tuyo. Créalo vacío.</li><li>GitHub te muestra las instrucciones para conectarlo (eso es B4)</li></ol><p><strong>El vocabulario que confunde:</strong> al remoto principal se le llama por convención <strong><code>origin</code></strong>. No es una palabra mágica de Git, es solo el nombre estándar que todos usan. Cuando leas <code>git push origin main</code>, traduce: \"sube la rama main al remoto llamado origin\".</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tener repo local y remoto es como tener <strong>tu cuaderno y una copia idéntica en una caja fuerte del banco</strong>. Los dos tienen todo. Trabajas en el tuyo con libertad, y cada tanto vas al banco a actualizar la copia. Si pierdes el cuaderno, sacas la copia y sigues. Si el banco se incendia, tu cuaderno está intacto. La sincronización es manual y a tu ritmo: tú decides cuándo vas al banco.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>   TU COMPUTADORA                    GITHUB (origin)\n   ┌────────────────┐                ┌────────────────┐\n   │ mi-tienda/     │  --- push -->  │ mi-tienda      │\n   │  .git/         │                │  (historial    │\n   │  index.html    │  <-- pull ---  │   completo)    │\n   │  styles.css    │                │                │\n   └────────────────┘                └────────────────┘\n      Repo local                       Repo remoto</code></pre><p>Dos copias completas, sincronizadas cuando tú lo ordenas.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Ya tengo un repositorio local con mi proyecto. Explícame paso a paso cómo creo el repositorio remoto en GitHub y por qué NO debo marcar la opción de 'Add a README' al crearlo si mi carpeta local ya tiene archivos.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es un repositorio remoto?", opciones: ["Un repositorio al que accedes por WiFi", "Una copia completa de tu repositorio que vive en un servidor", "Un repositorio de otra persona", "Una carpeta comprimida"], correcta: 1 },
              { tipo: "relacionar", pares: [["git push", "Subir tus commits al remoto"], ["git pull", "Bajar commits del remoto"], ["origin", "El nombre convencional del remoto principal"]] },
              { tipo: "vf", afirmacion: "El repositorio remoto tiene el proyecto completo y el local solo una parte.", correcta: false, explicacion: "ambos tienen el historial COMPLETO; son copias independientes." },
              { tipo: "completar", frase: "Si GitHub se cae, tu trabajo sigue en tu ____. Si tu computadora muere, tu trabajo sigue en ____.", banco: ["computadora", "GitHub", "USB", "la nube de Apple"], respuestas: ["computadora", "GitHub"] },
              { tipo: "quehace", codigo: "Add a README", pregunta: "Al crear el repo en GitHub marcas \"Add a README\" aunque tu carpeta local ya tiene archivos. ¿Qué problema causa?", opciones: ["Ninguno", "Crea un commit inicial en el remoto que choca con tu historial local", "Borra tus archivos locales", "Hace el repo privado automáticamente"], correcta: 1 }
            ]
          },
          {
            id: "m2-b4",
            titulo: "git remote: conectar tu carpeta local con GitHub",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tienes el repo local (A4) y creaste el repo remoto vacío en GitHub (B3). Ahora hay que <strong>presentarlos</strong>: decirle a tu Git local dónde vive su copia en la nube.</p><p>El comando:</p><pre><code>git remote add origin https://github.com/tuusuario/mi-tienda.git</code></pre><p>Desglosado:</p><ul><li><code>git remote add</code> — \"agrega un repositorio remoto\"</li><li><code>origin</code> — el nombre con el que lo vas a llamar (la convención universal)</li><li><code>https://...</code> — la URL que GitHub te dio al crear el repo</li></ul><p>Se hace <strong>una sola vez por proyecto</strong>. A partir de ahí, tu Git local ya sabe a dónde mandar las cosas.</p><p><strong>Verificar que quedó:</strong></p><pre><code>git remote -v</code></pre><p>Responde:</p><pre><code>origin  https://github.com/tuusuario/mi-tienda.git (fetch)\norigin  https://github.com/tuusuario/mi-tienda.git (push)</code></pre><p>Dos líneas: una para bajar (fetch) y otra para subir (push). Es normal, es el mismo remoto.</p><p><strong>HTTPS vs SSH:</strong> vas a ver dos formas de URL. <code>https://github.com/...</code> te va a pedir usuario y contraseña (en realidad un token, ver B28). <code>git@github.com:...</code> usa llaves SSH, se configura una vez y ya no pide nada. Para empezar, <strong>usa HTTPS</strong> — es más simple. Cuando te canses de autenticarte, cambias a SSH.</p><p><strong>Errores comunes:</strong></p><ul><li><code>remote origin already exists</code> — ya habías conectado un remoto. Míralo con <code>git remote -v</code>; si está mal, cámbialo con <code>git remote set-url origin &lt;nueva-url&gt;</code>.</li><li>URL con typo — el push va a fallar con \"repository not found\". Copia la URL directo de GitHub, no la escribas a mano.</li></ul>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git remote add origin</code> es <strong>guardar el número de la sucursal en tu agenda</strong>. Tu cuaderno (repo local) ahora sabe a qué banco pertenece su copia. No manda nada todavía — solo registra la dirección para poder mandar después. Se hace una vez y queda anotado para siempre.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Flujo completo de conexión:</p><pre><code>C:\\...\\mi-tienda&gt; git remote add origin https://github.com/rayflores/mi-tienda.git\n\nC:\\...\\mi-tienda&gt; git remote -v\norigin  https://github.com/rayflores/mi-tienda.git (fetch)\norigin  https://github.com/rayflores/mi-tienda.git (push)\n\nC:\\...\\mi-tienda&gt; git branch -M main\nC:\\...\\mi-tienda&gt; git push -u origin main</code></pre><p>Esas últimas dos líneas son las que GitHub te muestra literalmente cuando creas un repo vacío. La primera asegura que tu rama se llame <code>main</code>; la segunda sube todo por primera vez (lección B5).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo mi repositorio local listo y acabo de crear el repo vacío en GitHub. Dame los comandos exactos para conectarlos y subir mi código por primera vez, explicando qué hace cada uno. Uso HTTPS.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace <code>git remote add origin &lt;url&gt;</code>?", opciones: ["Sube tu código a GitHub", "Registra en tu repo local la dirección de su copia remota", "Descarga el proyecto de GitHub", "Crea el repositorio en GitHub"], correcta: 1 },
              { tipo: "completar", frase: "Por convención universal, al remoto principal se le llama ____, y para verificar la conexión se usa <code>git remote ____</code>.", banco: ["origin", "-v", "main", "--check"], respuestas: ["origin", "-v"] },
              { tipo: "vf", afirmacion: "<code>git remote add</code> hay que correrlo cada vez que quieres subir cambios.", correcta: false, explicacion: "se hace UNA vez por proyecto; después solo usas push/pull." },
              { tipo: "relacionar", pares: [["HTTPS (https://github.com/...)", "Pide credenciales, más simple para empezar"], ["SSH (git@github.com:...)", "Se configura una vez con llaves, no pide nada después"]] },
              { tipo: "quehace", codigo: "remote origin already exists", pregunta: "Git responde <code>remote origin already exists</code>. ¿Qué significa?", opciones: ["El repo de GitHub ya tiene dueño", "Ya habías conectado un remoto con ese nombre en este proyecto", "Tu internet está caído", "Falta instalar Git"], correcta: 1 }
            ]
          },
          {
            id: "m2-b5",
            titulo: "git push: subir tu trabajo al mundo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><code>git push</code> es el comando que toma tus commits locales y los sube al repositorio remoto. Es el momento en que tu trabajo deja de vivir solo en tu computadora.</p><p><strong>La primera vez</strong> (y solo la primera) se usa así:</p><pre><code>git push -u origin main</code></pre><ul><li><code>push</code> — subir</li><li><code>-u</code> — \"recuerda esta conexión\" (upstream). Gracias a esta bandera, las siguientes veces basta con <code>git push</code> a secas</li><li><code>origin</code> — a qué remoto</li><li><code>main</code> — qué rama</li></ul><p><strong>Las siguientes veces:</strong></p><pre><code>git push</code></pre><p>Y ya. Git recuerda a dónde y qué rama.</p><p><strong>Qué NO hace push:</strong> no sube lo que no has commiteado. Si editaste archivos pero no hiciste <code>git add</code> + <code>git commit</code>, esos cambios se quedan en tu computadora. <strong>Push sube commits, no archivos sueltos.</strong> Este es el malentendido número uno de los principiantes: \"hice push y no aparece mi cambio\" — casi siempre es que faltó el commit.</p><p><strong>Autenticación:</strong> la primera vez, GitHub te va a pedir identificarte. Ya NO acepta tu contraseña normal: necesitas un <strong>Personal Access Token</strong> (una contraseña especial de un solo uso para herramientas). Se genera en GitHub → Settings → Developer settings → Personal access tokens. Guárdalo en tu gestor de contraseñas: no lo vuelves a ver. (Más sobre tokens y seguridad en B28.)</p><p><strong>Errores comunes:</strong></p><ul><li><code>rejected — non-fast-forward</code>: alguien (o tú desde otra compu) subió cambios que tú no tienes. Solución: <code>git pull</code> primero, resuelve, y vuelve a hacer push.</li><li><code>Authentication failed</code>: tu token expiró o está mal. Genera uno nuevo.</li></ul>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git push</code> es <strong>llevar las fotos reveladas al álbum del banco</strong>. Solo puedes llevar fotos ya reveladas (commits), no negativos sueltos (cambios sin commitear). Y si mientras estabas fuera alguien más agregó fotos al álbum, el banco te dice \"espera, primero mira lo que se agregó\" — eso es el error de non-fast-forward.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git push -u origin main\nEnumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nWriting objects: 100% (5/5), 1.24 KiB | 634.00 KiB/s, done.\nTotal 5 (delta 0), reused 0 (delta 0)\nTo https://github.com/rayflores/mi-tienda.git\n * [new branch]      main -> main\nbranch 'main' set up to track 'origin/main'.</code></pre><p>Esa última línea (<code>set up to track</code>) es la magia del <code>-u</code>: de aquí en adelante, <code>git push</code> solo.</p><p>Y en GitHub, refrescando la página, tus archivos ya están ahí. Visible desde cualquier parte del mundo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Hice <code>git push</code> y en GitHub no aparecen mis cambios. Ayúdame a diagnosticar: dime qué comandos correr para revisar si el problema es que falta commitear, si el remoto está mal conectado, o si hay otro motivo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué sube <code>git push</code>?", opciones: ["Todos los archivos de la carpeta", "Solo los commits que ya hiciste", "Solo los archivos modificados hoy", "La carpeta .git completa"], correcta: 1 },
              { tipo: "completar", frase: "La primera vez se usa <code>git push -u origin main</code>; la bandera <code>-u</code> sirve para que las siguientes veces baste con <code>git ____</code>.", banco: ["push", "pull", "commit", "remote"], respuestas: ["push"] },
              { tipo: "vf", afirmacion: "Si editas un archivo y haces push, el cambio sube aunque no hayas hecho commit.", correcta: false, explicacion: "push sube commits; sin commit, el cambio no viaja." },
              { tipo: "ordenar", instruccion: "Acomoda el flujo completo desde editar hasta que esté en GitHub:", elementos: ["editar el archivo", "git add", "git commit", "git push"] },
              { tipo: "quehace", codigo: "rejected — non-fast-forward", pregunta: "Git responde <code>rejected — non-fast-forward</code>. ¿Qué pasó y qué haces?", opciones: ["Tu internet falló; reintenta", "El remoto tiene commits que tú no tienes; haz <code>git pull</code> primero", "Tu token expiró; genera otro", "El repo es privado; hazlo público"], correcta: 1 }
            ]
          },
          { id: "m2-b6", titulo: "git pull y git fetch: traer los cambios de otros", proximamente: true },
          { id: "m2-b7", titulo: "git clone: copiar un proyecto ajeno completo", proximamente: true },
          { id: "m2-b8", titulo: "Público vs privado: qué exponer y qué proteger", proximamente: true },
          { id: "m2-b9", titulo: "README.md: la portada de tu proyecto", proximamente: true },
          { id: "m2-b10", titulo: "Markdown: el idioma con el que se documenta el software", proximamente: true },
          { id: "m2-b11", titulo: "Issues: el sistema de tickets del mundo real", proximamente: true },
          { id: "m2-b12", titulo: "Labels, milestones y proyectos: organizar el trabajo", proximamente: true },
          { id: "m2-b13", titulo: "Pull Requests I: qué son y por qué existen", proximamente: true },
          { id: "m2-b14", titulo: "Pull Requests II: crear el tuyo paso a paso", proximamente: true },
          { id: "m2-b15", titulo: "Code review: revisar código (tuyo, ajeno y de la IA)", proximamente: true },
          { id: "m2-b16", titulo: "Merge de un PR: squash, rebase o merge commit", proximamente: true },
          { id: "m2-b17", titulo: "Forks: copiar el proyecto de alguien más", proximamente: true },
          { id: "m2-b18", titulo: "Tu primera contribución a open source", proximamente: true },
          { id: "m2-b19", titulo: "GitHub Actions: cuando el robot trabaja por ti", proximamente: true },
          { id: "m2-b20", titulo: "GitHub Pages: publicar tu sitio gratis desde el repo", proximamente: true },
          { id: "m2-b21", titulo: "Colaboradores y permisos: quién puede hacer qué", proximamente: true },
          { id: "m2-b22", titulo: "Protección de ramas: candados que evitan desastres", proximamente: true },
          { id: "m2-b23", titulo: "Releases y changelogs: comunicar qué cambió", proximamente: true },
          { id: "m2-b24", titulo: "GitHub Copilot: la IA que vive dentro del editor", proximamente: true },
          { id: "m2-b25", titulo: "Buscar código en GitHub: tu biblioteca infinita", proximamente: true },
          { id: "m2-b26", titulo: "Estrellas, forks y watchers: las métricas sociales del código", proximamente: true },
          { id: "m2-b27", titulo: "Licencias explicadas simple: MIT, Apache, GPL", proximamente: true },
          { id: "m2-b28", titulo: "Seguridad: secretos, tokens y lo que NUNCA debes subir", proximamente: true },
          { id: "m2-b29", titulo: "Tu portafolio en GitHub: cómo te ve un cliente", proximamente: true },
          { id: "m2-b30", titulo: "Repaso integrador de GitHub (mega-quiz jugable)", proximamente: true }
        ]
      },
      "c": {
        nombre: "Construye con IA II",
        icono: "🔧",
        lecciones: [
          {
            id: "m2-c1",
            titulo: "Por qué versionar cambia cómo trabajas con IA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En el Mes 1 construiste páginas dirigiendo IA. Funcionó — pero trabajabas <strong>sin red de seguridad</strong>. Si le pedías un cambio y el resultado empeoraba todo, tu única salida era pedirle a la IA que lo revirtiera… y esperar que se acordara de cómo estaba antes.</p><p>Con Git, esa fragilidad desaparece. Y cambia tu forma de trabajar en tres formas concretas:</p><p><strong>1. Pierdes el miedo a experimentar.</strong><br>Antes: \"¿y si le pido un rediseño completo y lo arruina?\". Ahora: haces commit, pides el rediseño, y si no te gusta, vuelves atrás en 2 segundos. <strong>El miedo era el freno, y Git lo quita.</strong> Los alumnos que versionan piden cosas más ambiciosas.</p><p><strong>2. Puedes auditar lo que la IA hizo.</strong><br><code>git diff</code> te muestra EXACTAMENTE qué líneas cambió la IA. No \"confía en mí, lo arreglé\": líneas concretas, en verde lo agregado y en rojo lo quitado. Es la diferencia entre revisar el trabajo y creer en el trabajo.</p><p><strong>3. Puedes trabajar con varias IAs sin caos.</strong><br>Una IA en una rama, otra en otra rama, tú comparando resultados. O el flujo profesional que ya conoces: una IA planea, otra ejecuta, y el repositorio es el punto de verdad donde ambas coinciden.</p><p>Hay un cuarto beneficio del que casi nadie habla: <strong>el historial de commits es un diario de tu aprendizaje</strong>. Dentro de un año vas a poder abrir tu repositorio del Mes 2 y ver, commit por commit, cómo pensabas cuando empezaste. Ese registro no lo da ninguna otra herramienta.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Trabajar con IA sin Git es <strong>escalar sin arnés</strong>: puedes llegar arriba, pero cada movimiento arriesgado te da pánico, así que te mueves poco. Con arnés (Git), pruebas la ruta difícil — porque si te caes, caes medio metro y vuelves a intentar. La red no te hace mejor escalador de golpe: te hace <strong>atrevido</strong>, y de ahí sale la mejora.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El flujo con red de seguridad:</p><pre><code>1. git commit -m \"versión que funciona\"      ← punto seguro\n2. \"IA, rediseña toda la página con estilo\n    minimalista y tipografía grande\"\n3. Abres el resultado... quedó horrible\n4. git restore .                             ← todo vuelve al punto seguro\n5. \"IA, intentemos otra dirección: ...\"</code></pre><p>Cuatro segundos para deshacer un experimento fallido. Ese es el cambio.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a pedirte un cambio grande a mi proyecto. Antes de empezar, dime qué comando de Git debo correr para tener un punto de retorno seguro, y cuál correría después si el resultado no me gusta.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es el beneficio principal de versionar cuando trabajas con IA?", opciones: ["La IA responde más rápido", "Puedes experimentar sin miedo porque siempre puedes volver atrás", "Los tokens cuestan menos", "La IA comete menos errores"], correcta: 1 },
              { tipo: "completar", frase: "El comando ____ te muestra exactamente qué líneas cambió la IA, en verde lo agregado y en ____ lo quitado.", banco: ["git diff", "rojo", "git log", "azul"], respuestas: ["git diff", "rojo"] },
              { tipo: "vf", afirmacion: "Sin Git, la única forma de deshacer un cambio de la IA es pedirle que lo revierta de memoria.", correcta: true, explicacion: "y es frágil, porque depende de que la IA recuerde el estado anterior." },
              { tipo: "relacionar", pares: [["Punto de retorno", "Perder el miedo a experimentar"], ["git diff", "Auditar lo que la IA cambió"], ["Ramas", "Varias IAs trabajando sin pisarse"], ["Historial", "Diario de tu propio aprendizaje"]] },
              { tipo: "quehace", codigo: "el arnés", pregunta: "En la analogía del escalador, ¿qué representa Git?", opciones: ["La montaña", "El arnés", "El compañero de escalada", "El mapa de la ruta"], correcta: 1 }
            ]
          },
          {
            id: "m2-c2",
            titulo: "PRÁCTICA: instalar Git y verificar que funciona",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hoy no lees: <strong>instalas</strong>. Al terminar esta lección vas a tener Git funcionando en tu computadora, configurado con tu nombre, listo para versionar cualquier proyecto del resto de tu vida.</p><p><strong>Paso 1 — Verifica si ya lo tienes.</strong> Abre la terminal (Mes 1, lección A5) y escribe:</p><pre><code>git --version</code></pre><p>Si responde con un número de versión, ya lo tienes: salta al Paso 3. Si dice \"no se reconoce el comando\" o \"command not found\", sigue al Paso 2.</p><p><strong>Paso 2 — Instálalo.</strong></p><p>En <strong>Windows</strong>, la forma rápida por terminal:</p><pre><code>winget install --id Git.Git -e</code></pre><p>O descarga el instalador de <code>git-scm.com/download/win</code> y dale siguiente a todo (las opciones por default están bien).</p><p>En <strong>Mac</strong>:</p><pre><code>brew install git</code></pre><p>Si no tienes Homebrew, al escribir <code>git --version</code> macOS te ofrece instalar las Command Line Tools: acepta.</p><p>En <strong>Linux/Ubuntu</strong>:</p><pre><code>sudo apt update && sudo apt install git</code></pre><p><strong>Importante en Windows:</strong> después de instalar, <strong>cierra y vuelve a abrir la terminal</strong>. Si no, sigue sin reconocer el comando (el sistema necesita recargar las rutas).</p><p><strong>Paso 3 — Configúrate.</strong> Los tres comandos de la lección A2:</p><pre><code>git config --global user.name \"Tu Nombre Completo\"\ngit config --global user.email \"tucorreo@ejemplo.com\"\ngit config --global init.defaultBranch main</code></pre><p>El tercero asegura que tus repos nuevos usen <code>main</code> (el estándar actual) en vez de <code>master</code>.</p><p><strong>Paso 4 — Verifica todo:</strong></p><pre><code>git --version\ngit config --global --list</code></pre><p>Debes ver tu versión, tu nombre y tu correo. <strong>Si eso aparece, ya está.</strong> Acabas de instalar la herramienta más importante del desarrollo de software.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es como <strong>estrenar la caja de herramientas</strong>. Todavía no arreglaste nada, pero ya tienes el martillo, el desarmador y la llave, con tu nombre grabado. Todo lo que viene el resto del programa asume que esta caja ya está en tu banco de trabajo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Sesión completa exitosa:</p><pre><code>C:\\Users\\Ray&gt; git --version\n'git' no se reconoce como un comando...\n\nC:\\Users\\Ray&gt; winget install --id Git.Git -e\nFound Git [Git.Git] Version 2.47.0\nSuccessfully installed\n\n[cierras y reabres la terminal]\n\nC:\\Users\\Ray&gt; git --version\ngit version 2.47.0.windows.1\n\nC:\\Users\\Ray&gt; git config --global user.name \"Raymundo Flores\"\nC:\\Users\\Ray&gt; git config --global user.email \"rayfg96@gmail.com\"\nC:\\Users\\Ray&gt; git config --global init.defaultBranch main\n\nC:\\Users\\Ray&gt; git config --global --list\nuser.name=Raymundo Flores\nuser.email=rayfg96@gmail.com\ninit.defaultbranch=main</code></pre><p>Listo. Herramienta instalada y firmada con tu nombre.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Estoy en [Windows/Mac/Linux]. Guíame paso a paso para instalar Git y configurarlo. Después de cada comando, dime qué debería ver en pantalla si salió bien, para poder confirmar antes de continuar.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda los pasos de la práctica:", elementos: ["verificar con git --version", "instalar Git", "configurar nombre y correo", "verificar con git config --list"] },
              { tipo: "multiple", pregunta: "En Windows, después de instalar Git el comando sigue sin reconocerse. ¿Qué haces?", opciones: ["Reinstalar", "Cerrar y volver a abrir la terminal", "Reiniciar la computadora", "Instalar Linux"], correcta: 1 },
              { tipo: "completar", frase: "El comando <code>git config --global init.defaultBranch main</code> asegura que tus repos nuevos usen ____ en vez de ____.", banco: ["main", "master", "origin", "trunk"], respuestas: ["main", "master"] },
              { tipo: "quehace", codigo: "git config --global --list", pregunta: "<code>git config --global --list</code> — ¿qué muestra?", opciones: ["Los archivos de tu proyecto", "Tu configuración global: nombre, correo y demás ajustes", "El historial de commits", "Los repositorios en GitHub"], correcta: 1 },
              { tipo: "vf", afirmacion: "Git hay que instalarlo en cada carpeta de proyecto.", correcta: false, explicacion: "se instala una vez en la computadora y sirve para todos los proyectos." }
            ]
          },
          {
            id: "m2-c3",
            titulo: "PRÁCTICA: convertir tu página del Mes 1 en un repositorio",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Recupera la carpeta de tu proyecto del Mes 1 (<code>mi-primera-pagina</code> o como la hayas llamado). Hoy la conviertes en un proyecto versionado de verdad.</p><p><strong>Paso 1 — Llega a la carpeta desde la terminal.</strong></p><pre><code>cd Desktop\ncd mi-primera-pagina\nls</code></pre><p>El <code>ls</code> (o <code>dir</code>) debe mostrarte tu <code>index.html</code>. <strong>Si no lo ves, estás en la carpeta equivocada</strong> — no sigas hasta confirmarlo. Este es el error #1 de principiante: hacer <code>git init</code> donde no era.</p><p><strong>Paso 2 — Enciende la máquina del tiempo.</strong></p><pre><code>git init</code></pre><p><strong>Paso 3 — Mira el estado.</strong></p><pre><code>git status</code></pre><p>Vas a ver algo así:</p><pre><code>On branch main\nNo commits yet\nUntracked files:\n        index.html</code></pre><p>\"Untracked\" significa: \"veo este archivo, pero todavía no lo estoy siguiendo\". Git es explícito: <strong>nada entra al historial sin que tú lo digas.</strong></p><p><strong>Paso 4 — Crea tu <code>.gitignore</code></strong> (aunque tu proyecto sea simple, es buen hábito). Crea un archivo llamado exactamente <code>.gitignore</code> (con el punto al inicio) con este contenido:</p><pre><code># Archivos del sistema\n.DS_Store\nThumbs.db\ndesktop.ini\n\n# Editores\n.vscode/\n.idea/\n\n# Dependencias (por si acaso más adelante)\nnode_modules/\n\n# Variables de entorno — NUNCA subir secretos\n.env</code></pre><p>Ese archivo le dice a Git: \"estos archivos NUNCA los rastrees\". El <code>.env</code> es especialmente importante — ahí es donde se guardan contraseñas y llaves de API. <strong>Subir un <code>.env</code> a GitHub es el error más caro que comete un principiante.</strong></p><p><strong>Paso 5 — Confirma.</strong></p><pre><code>git status</code></pre><p>Ahora debe listar tu <code>index.html</code> Y tu <code>.gitignore</code> como untracked. Ya tienes un repositorio listo para su primer commit (lección C4).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es el día que <strong>le instalas la caja fuerte a tu local</strong>. El local ya llevaba tiempo abierto, con mercancía adentro. Hoy llega el instalador, atornilla la caja, y a partir de este momento todo lo que decidas guardar queda protegido y registrado. Lo de antes no está registrado — la historia empieza hoy.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\Users\\Ray&gt; cd Desktop\\mi-primera-pagina\nC:\\Users\\Ray\\Desktop\\mi-primera-pagina&gt; ls\n    index.html\n\nC:\\Users\\Ray\\Desktop\\mi-primera-pagina&gt; git init\nInitialized empty Git repository in .../mi-primera-pagina/.git/\n\nC:\\Users\\Ray\\Desktop\\mi-primera-pagina&gt; git status\nOn branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add &lt;file&gt;...\" to include in what will be committed)\n        index.html\n\nnothing added to commit but untracked files present</code></pre><p>Git te habla claro: \"veo tu index.html, no lo estoy rastreando todavía, usa <code>git add</code> cuando quieras incluirlo\".</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo una carpeta con mi página web en el escritorio. Guíame para convertirla en repositorio de Git desde la terminal, incluyendo cómo verifico en cada paso que estoy en la carpeta correcta. También genérame un <code>.gitignore</code> apropiado para un proyecto de HTML/CSS/JS simple.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué significa que un archivo esté \"untracked\"?", opciones: ["Que está dañado", "Que Git lo ve pero todavía no lo está siguiendo", "Que ya se subió a GitHub", "Que está en el .gitignore"], correcta: 1 },
              { tipo: "completar", frase: "El archivo ____ le dice a Git qué archivos NUNCA debe rastrear, y el más importante de incluir es ____ porque guarda contraseñas y llaves.", banco: [".gitignore", ".env", ".git", "README.md"], respuestas: [".gitignore", ".env"] },
              { tipo: "ordenar", instruccion: "Acomoda los pasos de la práctica:", elementos: ["cd a la carpeta del proyecto", "git init", "git status", "crear .gitignore"] },
              { tipo: "vf", afirmacion: "Antes de correr <code>git init</code> conviene confirmar con <code>ls</code> que estás en la carpeta correcta.", correcta: true, explicacion: "el error #1 de principiante es inicializar un repo donde no era." },
              { tipo: "quehace", codigo: "subir un .env a GitHub", pregunta: "¿Por qué es grave subir un archivo <code>.env</code> a GitHub?", opciones: ["Ocupa mucho espacio", "Contiene contraseñas y llaves de API que quedarían públicas", "Git no lo soporta", "Rompe el sitio web"], correcta: 1 }
            ]
          },
          {
            id: "m2-c4",
            titulo: "PRÁCTICA: tu primer commit real",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Llegó el momento. Vas a tomar la primera fotografía de tu proyecto.</p><p><strong>Paso 1 — Prepara los archivos (staging).</strong></p><pre><code>git add .</code></pre><p>Ese punto significa \"todo lo que hay en esta carpeta\". Git agrega tu <code>index.html</code>, tu <code>.gitignore</code>, y cualquier otra cosa que no esté ignorada.</p><p>(También puedes agregar archivo por archivo: <code>git add index.html</code>. El punto es el atajo cuando quieres todo.)</p><p><strong>Paso 2 — Verifica qué está preparado.</strong></p><pre><code>git status</code></pre><p>Ahora los archivos aparecen bajo \"Changes to be committed\" (cambios por confirmar), en verde. Están en la caja, listos para sellar.</p><p><strong>Paso 3 — Toma la foto.</strong></p><pre><code>git commit -m \"Versión inicial de mi página personal\"</code></pre><ul><li><code>commit</code> — guarda la fotografía</li><li><code>-m</code> — \"el mensaje viene aquí\" (message)</li><li>El texto entre comillas es tu mensaje: <strong>la descripción de qué contiene esta foto</strong></li></ul><p>Git responde algo como:</p><pre><code>[main (root-commit) a3f9c1d] Versión inicial de mi página personal\n 2 files changed, 47 insertions(+)\n create mode 100644 .gitignore\n create mode 100644 index.html</code></pre><p>Ese <code>a3f9c1d</code> es el identificador único de tu commit. <strong>Ya existe el primer punto de retorno de tu vida como constructor.</strong></p><p><strong>Paso 4 — Mira tu historial.</strong></p><pre><code>git log --oneline</code></pre><pre><code>a3f9c1d (HEAD -> main) Versión inicial de mi página personal</code></pre><p>Una línea. Tu primera línea de historia. En seis meses vas a tener cientos.</p><p><strong>Paso 5 — Haz un segundo commit</strong> para sentir el ciclo completo. Abre tu <code>index.html</code>, cambia algo (un texto, un color), guarda, y:</p><pre><code>git add .\ngit commit -m \"Cambiar título principal\"\ngit log --oneline</code></pre><p>Ahora tienes dos fotos. Y puedes viajar entre ellas.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu primer commit es la <strong>primera página del acta de un negocio</strong>. A partir de aquí, todo lo que pase queda registrado: quién, cuándo, qué. Antes de esta página no hay registro; después de ella, hay historia. Y como toda acta, vale por lo que dice el texto — un mensaje flojo hace inútil el registro (por eso la lección A9 es sobre escribir buenos mensajes).</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El ciclo completo, que vas a repetir miles de veces:</p><pre><code>C:\\...\\mi-primera-pagina&gt; git add .\n\nC:\\...\\mi-primera-pagina&gt; git status\nOn branch main\nChanges to be committed:\n        new file:   .gitignore\n        new file:   index.html\n\nC:\\...\\mi-primera-pagina&gt; git commit -m \"Versión inicial de mi página personal\"\n[main (root-commit) a3f9c1d] Versión inicial de mi página personal\n 2 files changed, 47 insertions(+)\n\nC:\\...\\mi-primera-pagina&gt; git log --oneline\na3f9c1d (HEAD -> main) Versión inicial de mi página personal</code></pre><p><strong>add → commit → log.</strong> Ese trío es el 80% de tu uso diario de Git.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Acabo de hacer mi primer commit. Explícame qué significa cada parte de la respuesta que me dio Git: el código a3f9c1d, la palabra root-commit, y '2 files changed, 47 insertions'.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda el ciclo básico de Git:", elementos: ["editar archivos", "git add .", "git commit -m \"mensaje\""] },
              { tipo: "multiple", pregunta: "¿Qué significa el punto en <code>git add .</code>?", opciones: ["Agregar solo archivos ocultos", "Agregar todo lo que hay en la carpeta actual", "Agregar el último archivo modificado", "Cancelar la operación"], correcta: 1 },
              { tipo: "completar", frase: "La bandera <code>-m</code> en <code>git commit</code> sirve para escribir el ____ del commit directamente en la línea de comandos.", banco: ["mensaje", "nombre", "archivo", "modo"], respuestas: ["mensaje"] },
              { tipo: "quehace", codigo: "git log --oneline", pregunta: "<code>git log --oneline</code> — ¿qué muestra?", opciones: ["Los archivos sin rastrear", "El historial de commits, uno por línea", "Los cambios de la última hora", "La configuración de Git"], correcta: 1 },
              { tipo: "vf", afirmacion: "Después de <code>git commit</code>, tus cambios ya están en GitHub.", correcta: false, explicacion: "el commit es local; para que lleguen a GitHub falta <code>git push</code> (lección B5)." }
            ]
          },
          {
            id: "m2-c5",
            titulo: "Pedirle a la IA que escriba tus mensajes de commit",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Escribir buenos mensajes de commit es una habilidad real, y es de las primeras que puedes delegar bien a la IA. Un buen mensaje responde <strong>qué cambió y por qué</strong>, no \"cómo\" (el código ya muestra el cómo).</p><p>Malos mensajes (los que todos escribimos al principio):</p><pre><code>cambios\narreglos\nupdate\nasdf\nya quedó</code></pre><p>Buenos mensajes:</p><pre><code>Agregar botón de WhatsApp en el header\nCorregir precios de productos que mostraban el costo\nCambiar paleta a naranja para mejorar contraste</code></pre><p><strong>La convención profesional</strong> que verás en proyectos serios se llama <em>Conventional Commits</em>: un prefijo que categoriza el cambio.</p><ul><li><code>feat:</code> — funcionalidad nueva</li><li><code>fix:</code> — corrección de un error</li><li><code>docs:</code> — documentación</li><li><code>style:</code> — formato, colores, espaciado (sin cambiar lógica)</li><li><code>refactor:</code> — reorganizar código sin cambiar comportamiento</li><li><code>chore:</code> — mantenimiento, configuración</li></ul><p>Ejemplos:</p><pre><code>feat: agregar sección de testimonios\nfix: corregir enlace roto de WhatsApp\nstyle: aumentar tamaño de tipografía en móvil</code></pre><p><strong>Cómo delegarlo a la IA.</strong> El truco es darle el <code>git diff</code> — la IA no adivina, lee los cambios reales:</p><pre><code>git diff --staged</code></pre><p>Copias esa salida, se la pegas a la IA con el prompt de abajo, y te devuelve un mensaje preciso. En 20 segundos tienes un historial que parece de equipo profesional.</p><p>Y cuando uses herramientas de IA que trabajan directo con tu repo (Claude Code, Cursor), esto lo hacen solas: leen el diff y escriben el mensaje.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un mensaje de commit es la <strong>etiqueta de una caja de mudanza</strong>. \"Cosas\" no sirve de nada cuando buscas el sacacorchos entre 40 cajas. \"Cocina — utensilios y vajilla\" te salva la tarde. El costo de escribir bien la etiqueta son 10 segundos; el costo de escribirla mal lo pagas dentro de tres meses, buscando cuándo se rompió algo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El flujo completo con IA:</p><pre><code>C:\\...\\mi-tienda&gt; git add .\nC:\\...\\mi-tienda&gt; git diff --staged\n\ndiff --git a/index.html b/index.html\n-  &lt;h1&gt;Mi Tienda&lt;/h1&gt;\n+  &lt;h1&gt;Tortas El Güero&lt;/h1&gt;\n+  &lt;a href=\"https://wa.me/5512345678\" class=\"btn-wa\"&gt;\n+    Pídenos por WhatsApp\n+  &lt;/a&gt;</code></pre><p>Le pegas eso a la IA y responde:</p><pre><code>feat: cambiar nombre a Tortas El Güero y agregar botón de WhatsApp</code></pre><p>Y tú:</p><pre><code>C:\\...\\mi-tienda&gt; git commit -m \"feat: cambiar nombre a Tortas El Güero y agregar botón de WhatsApp\"</code></pre><p>Historial profesional, sin esfuerzo mental.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te voy a pegar la salida de <code>git diff --staged</code>. Escríbeme un mensaje de commit siguiendo Conventional Commits (feat/fix/docs/style/refactor/chore), en español, máximo 72 caracteres, que diga QUÉ cambió y POR QUÉ. Si los cambios son de temas distintos, avísame que convendría separarlos en commits diferentes.\"</p></blockquote><p>Esa última frase es valiosa: la IA te va a avisar cuando estés mezclando cambios que merecen commits separados.</p>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["feat:", "Funcionalidad nueva"], ["fix:", "Corrección de un error"], ["docs:", "Documentación"], ["style:", "Formato y apariencia sin cambiar lógica"]] },
              { tipo: "multiple", pregunta: "¿Cuál es un buen mensaje de commit?", opciones: ["cambios", "ya quedó", "fix: corregir enlace roto de WhatsApp", "update final v2"], correcta: 2 },
              { tipo: "completar", frase: "Un buen mensaje de commit responde qué cambió y ____, no el ____ — porque eso ya lo muestra el código.", banco: ["por qué", "cómo", "cuándo", "quién"], respuestas: ["por qué", "cómo"] },
              { tipo: "quehace", codigo: "git diff --staged", pregunta: "<code>git diff --staged</code> — ¿para qué lo usas antes de pedirle el mensaje a la IA?", opciones: ["Para subir los cambios", "Para mostrarle a la IA exactamente qué líneas cambiaron", "Para deshacer los cambios", "Para crear una rama"], correcta: 1 },
              { tipo: "vf", afirmacion: "Si la IA detecta que tus cambios son de temas distintos, conviene que te avise para separarlos en commits diferentes.", correcta: true, explicacion: "commits atómicos (un tema por commit) hacen el historial útil." }
            ]
          },
          { id: "m2-c6", titulo: "PRÁCTICA: crear tu cuenta de GitHub y tu perfil", proximamente: true },
          { id: "m2-c7", titulo: "PRÁCTICA: subir tu proyecto a GitHub", proximamente: true },
          { id: "m2-c8", titulo: "PRÁCTICA: publicar tu página con GitHub Pages", proximamente: true },
          { id: "m2-c9", titulo: "El flujo diario: pedir → probar → commitear", proximamente: true },
          { id: "m2-c10", titulo: "PRÁCTICA: trabajar en una rama nueva con IA", proximamente: true },
          { id: "m2-c11", titulo: "Cuando la IA rompe algo: volver atrás con Git", proximamente: true },
          { id: "m2-c12", titulo: "PRÁCTICA: tu primer Pull Request (a tu propio repo)", proximamente: true },
          { id: "m2-c13", titulo: "Revisar el código que la IA generó, en el PR", proximamente: true },
          { id: "m2-c14", titulo: "PRÁCTICA: escribir un README que venda tu proyecto", proximamente: true },
          { id: "m2-c15", titulo: "El brief para la IA cuando hay repo de por medio", proximamente: true },
          { id: "m2-c16", titulo: "PRÁCTICA: documentar tu proyecto con IA", proximamente: true },
          { id: "m2-c17", titulo: "Issues como lista de tareas dirigida a la IA", proximamente: true },
          { id: "m2-c18", titulo: "PRÁCTICA: proyecto nuevo — sitio de un negocio real", proximamente: true },
          { id: "m2-c19", titulo: "PRÁCTICA: iterar el proyecto en ramas", proximamente: true },
          { id: "m2-c20", titulo: "PRÁCTICA: resolver tu primer conflicto de merge", proximamente: true },
          { id: "m2-c21", titulo: "Herramientas IA que trabajan con Git directamente", proximamente: true },
          { id: "m2-c22", titulo: "Claude Code, Cursor y el flujo con repositorio", proximamente: true },
          { id: "m2-c23", titulo: "PRÁCTICA: dejar que una IA trabaje sobre tu repo", proximamente: true },
          { id: "m2-c24", titulo: "Revisar el trabajo de una IA ejecutora", proximamente: true },
          { id: "m2-c25", titulo: "Seguridad: qué nunca le compartes a una IA", proximamente: true },
          { id: "m2-c26", titulo: "PRÁCTICA: limpiar tu repo antes de mostrarlo", proximamente: true },
          { id: "m2-c27", titulo: "Tu portafolio: 3 proyectos que demuestran nivel", proximamente: true },
          { id: "m2-c28", titulo: "Cómo se ve un repo profesional vs uno de principiante", proximamente: true },
          { id: "m2-c29", titulo: "Tu flujo de trabajo completo, de idea a publicación", proximamente: true },
          { id: "m2-c30", titulo: "Repaso + arranque del proyecto final del mes", proximamente: true }
        ]
      }
    }
  }
};
