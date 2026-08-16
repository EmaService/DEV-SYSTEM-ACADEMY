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
          {
            id: "m1-b11",
            titulo: "Condicionales: if/else, el código que toma decisiones",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un programa que no decide nada es un folleto estático. Las apps reales toman decisiones a cada segundo: ¿el usuario ya pagó? ¿hay stock? ¿es cliente nuevo? En código, esas decisiones se escriben con <strong>condicionales</strong> — la estructura <code>if/else</code>.</p><p><code>if</code> significa \"si\": si una condición es verdadera, ejecuta este bloque. <code>else</code> significa \"si no\": el camino para cuando la condición es falsa. Y <code>else if</code> encadena varias opciones: \"si pasa A haz esto; si no, si pasa B haz esto otro; si no...\".</p><p>La condición siempre se evalúa a un <strong>booleano</strong> (lo viste en B10): <code>true</code> o <code>false</code>. Para construirla usas comparaciones: <code>===</code> (igual exacto), <code>!==</code> (distinto), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>. Y ojo con el clásico: <code>=</code> ASIGNA un valor, <code>==</code> compara con trucos raros, <code>===</code> compara exacto. Un <code>=</code> de más o de menos es uno de los bugs más comunes del mundo (B20).</p><p>Para ti, director de IA, esto es oro: <strong>cada regla de negocio que tienes en la cabeza es una serie de condicionales</strong>. \"Los clientes nuevos pagan la mitad el primer mes\", \"el envío es gratis arriba de $5,000\" — le describes la regla a la IA en palabras, y ella la traduce a <code>if/else</code>. Tu trabajo es leer la traducción y cazar el caso que se le olvidó cubrir.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El <strong>vigilante de la entrada de un edificio</strong>. Alguien llega: \"¿trae gafete?\" (la condición). Si lo trae, pasa (<code>if</code>). Si no, firma el libro de visitas (<code>else</code>). Y si llega un directivo, ni siquiera firma (<code>else if</code>). Ese vigilante es un condicional con patas: revisa una condición y toma caminos distintos según el resultado. Cambia la regla del edificio y cambias los caminos — el vigilante solo obedece.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>const pagoRecibido = true;\nconst monto = 7000;\n\nif (pagoRecibido === true) {\n  console.log(\"Acceso concedido. Bienvenido.\");\n} else {\n  console.log(\"Primero completa tu pago.\");\n}\n\nif (monto &gt;= 5000) {\n  console.log(\"Tienes envío gratis.\");\n} else if (monto &gt;= 1000) {\n  console.log(\"Tienes 10% de descuento.\");\n} else {\n  console.log(\"Sin beneficios.\");\n}</code></pre><p>Primero se evalúa la condición entre paréntesis. Si da <code>true</code>, entra al primer bloque; si da <code>false</code>, va al <code>else</code> (o revisa el siguiente <code>else if</code>). Con <code>monto = 7000</code> verás dos mensajes: \"Acceso concedido\" y \"Tienes envío gratis\". Cambia el <code>monto</code> a 800 y el descuento desaparece — la misma estructura decide distinto.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Esta es mi regla de negocio: [descríbela con todos los casos que se te ocurran, ej. 'si el cliente es nuevo paga la mitad del primer mes; si ya pagó 6 meses seguidos, 15% menos; si no, precio normal']. Tradúcela a if/else en JavaScript. Hazme una tabla de cada caso que cubriste y dime qué casos NO cubriste.\"</p></blockquote><p>Esa última línea convierte la IA en tu revisor de reglas: te obliga a llenar los huecos antes de que se conviertan en bugs.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace <code>else</code> en un condicional?", opciones: ["Ejecuta el código siempre, sin revisar nada", "Define el camino cuando la condición es falsa", "Repite el bloque N veces", "Borra la condición"], correcta: 1 },
              { tipo: "completar", frase: "La condición de un <code>if</code> siempre se evalúa a un ____: <code>true</code> o ____.", banco: ["booleano", "false", "número", "texto"], respuestas: ["booleano", "false"] },
              { tipo: "relacionar", pares: [["===", "Igualdad estricta (mismo valor y tipo)"], ["!==", "Distinto estricto"], [">", "Mayor que"], [">=", "Mayor o igual que"]] },
              { tipo: "quehace", codigo: "if (monto >= 5000) { mostrar(\"Envío gratis\"); } else { mostrar(\"Cobra envío\"); }", pregunta: "Con <code>monto = 7000</code>, ¿qué muestra este código?", opciones: ["Cobra envío", "Envío gratis", "Ambos mensajes", "Un error"], correcta: 1 },
              { tipo: "vf", afirmacion: "En JavaScript, <code>=</code> y <code>===</code> hacen exactamente lo mismo.", correcta: false, explicacion: "el <code>=</code> asigna un valor; el <code>===</code> compara si dos cosas son iguales." }
            ]
          },
          {
            id: "m1-b12",
            titulo: "Ciclos: repetir sin cansarse (for, while)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Los programas repiten tareas sin cansarse, y sin equivocarse: mandar un correo a 500 clientes, sumar 10,000 ventas, revisar cada producto. En código, la repetición se llama <strong>ciclo</strong> (loop), y hay dos formas principales.</p><p>El <strong><code>for</code></strong> repite un número de veces conocido, con un contador: <code>for (let i = 0; i &lt; 5; i++) { ... }</code>. Se lee así: \"inicia el contador <code>i</code> en 0; mientras <code>i</code> sea menor que 5, ejecuta el bloque; al terminar, aumenta <code>i</code> en 1\". Piensa en él como \"haz esto exactamente 5 veces\".</p><p>El <strong><code>while</code></strong> repite mientras una condición sea verdadera, sin contador fijo: <code>while (condicion) { ... }</code>. Se usa cuando no sabes de antemano cuántas vueltas harán falta: \"reintenta la conexión hasta que funcione\", \"sigue leyendo líneas hasta que se acabe el archivo\".</p><p>Peligro real: si la condición del <code>while</code> nunca se vuelve falsa, es un <strong>ciclo infinito</strong> — el programa se queda atrapado repitiendo y se cuelga. El botón de cerrar deja de responder. Todos los programadores lo han sufrido, y es la broma más vieja del oficio.</p><p>Cuando dirijas a la IA, la repetición es de tus mejores aliadas: en vez de escribir 500 veces lo mismo, le dices \"haz esto para cada cliente\" y la IA escribe un ciclo. Tú solo necesitas leerlo y verificar el inicio (el contador), la condición (cuándo para) y que algo la modifique.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La <strong>tortillería</strong>: la máquina de tortillas sale con un ritmo fijo — \"haz 100 tortillas\" es un <code>for</code>, con su contador y su tope. Pero la máquina que tortea hasta que se acaba la masa es un <code>while</code>: sigue mientras haya masa, sin saber cuántas tortillas saldrán. Tú nunca le dices a la máquina \"otra, otra, otra\": la máquina ya sabe repetir. En código pasa igual: le describes cuánto repetir, no cada repetición.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>const ventas = [7000, 7900, 9100, 5400];\nlet total = 0;\n\nfor (let i = 0; i &lt; ventas.length; i++) {\n  total = total + ventas[i];\n}\nconsole.log(\"Total: $\" + total); // Total: $29400\n\nlet intentos = 0;\nwhile (intentos &lt; 3) {\n  console.log(\"Reintentando conexión... intento \" + intentos);\n  intentos = intentos + 1; // esta línea evita el ciclo infinito\n}</code></pre><p>Fíjate en el patrón: el <code>for</code> recorre la lista de ventas y las va sumando; el <code>while</code> reintenta hasta completar 3 intentos. Y nota la última línea del <code>while</code>: si no aumentas <code>intentos</code>, la condición jamás se vuelve falsa y el programa se cuelga. Esa línea es la \"válvula de escape\".</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito repetir esta tarea para cada [cliente/producto/fila]: [describe la tarea]. Escríbela con un ciclo. Dime cuál usaste (for o while), por qué, y enséñame cómo verificar que no terminará en un ciclo infinito.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "El ciclo ____ repite un número fijo de veces; el ciclo ____ repite mientras una condición sea verdadera.", banco: ["for", "while", "if", "else"], respuestas: ["for", "while"] },
              { tipo: "multiple", pregunta: "¿Qué pasa si la condición de un <code>while</code> nunca se vuelve falsa?", opciones: ["El programa sigue normal", "Ciclo infinito: el programa se cuelga", "La computadora se reinicia", "El ciclo se salta y no ejecuta nada"], correcta: 1 },
              { tipo: "relacionar", pares: [["let i = 0", "El contador inicia en 0"], ["i < 5", "La condición que se revisa cada vuelta"], ["i++", "Aumenta el contador en 1"], ["ventas.length", "Cuántos elementos hay en la lista"]] },
              { tipo: "quehace", codigo: "for (let i = 0; i < 3; i++) { console.log(i); }", pregunta: "<code>for (let i = 0; i &lt; 3; i++) { console.log(i); }</code> — ¿qué imprime?", opciones: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3, 2, 1"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Acomoda lo que pasa en cada vuelta de un <code>for</code>:", elementos: ["inicia el contador en 0", "revisa la condición", "si es verdadera, ejecuta el bloque", "aumenta el contador y repite"] }
            ]
          },
          {
            id: "m1-b13",
            titulo: "Funciones I: recetas reutilizables",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Una <strong>función</strong> es un bloque de código con nombre que puedes ejecutar las veces que quieras. En vez de copiar el mismo código 10 veces, lo guardas una sola vez y lo \"llamas\" cada vez que lo necesitas.</p><p>En JavaScript se define así: <code>function saludar() { console.log(\"Hola\"); }</code>. Eso solo la guarda. Para ejecutarla la <strong>llamas</strong>: <code>saludar();</code> — cada llamada corre el bloque de adentro. Los paréntesis vacíos significan \"no necesita ingredientes\" (eso llega en B14).</p><p>Los programadores tienen un principio sagrado: <strong>DRY</strong> (Don't Repeat Yourself, \"no te repitas\"). Si ves el mismo código copiado en tres lugares, es candidato a convertirse en función. El código repetido es una bomba de tiempo: cuando tengas que cambiar algo, olvidarás una de las copias y la app quedará a medias.</p><p>Dato que conecta con A11: las <strong>librerías</strong> son colecciones de funciones ya escritas por otros. Cuando usas <code>console.log(...)</code> o <code>sum(ventas)</code> de Python, estás llamando funciones que alguien más escribió. Reconocer \"esto es una función\" te deja leer cualquier código como una serie de recetas encadenadas.</p><p>Cuando dirijas a la IA, pedirle que \"guarde la lógica en funciones\" convierte tu proyecto en algo ordenado y mantenible. Y cuando leas lo que generó, cada <code>function algo() { }</code> te dice: aquí hay una receta con nombre, lista para usarse y reutilizarse.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La <strong>tarjeta de receta de la abuela</strong>. Cuando quieres torta de chocolate no le repites los ingredientes y los pasos cada vez: la receta ya está escrita en su tarjeta, y cada que la quieres \"llamas\" la receta — sacas la tarjeta y la sigues. Si mañana quieres cambiar el sabor, cambias UNA tarjeta, no las mil tortas. La función es esa tarjeta: un solo cambio, y todas las llamadas se benefician.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>function mostrarBienvenida() {\n  const hora = new Date().getHours();\n  if (hora &lt; 12) {\n    console.log(\"¡Buenos días, bienvenido!\");\n  } else {\n    console.log(\"¡Bienvenido!\");\n  }\n}\n\nmostrarBienvenida(); // llama la receta por primera vez\nmostrarBienvenida(); // y puedes llamarla mil veces</code></pre><p>Lee la historia: hay una receta llamada <code>mostrarBienvenida</code> que decide qué mensaje mostrar según la hora (un condicional, B11). Después se llama dos veces. Si mañana cambias el mensaje de bienvenida, solo tocas la función — no cada llamada. Eso es el poder de la reutilización.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Este código repite el mismo bloque [N] veces: [pega el código]. Refactorízalo: crea una función que lo contenga, reemplaza las copias por llamadas a la función, y nómbrala con un verbo claro en inglés. Explícame qué ganamos con el cambio.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "Una función es un bloque de código con ____ que se puede ____ las veces que quieras.", banco: ["nombre", "ejecutar", "color", "copiar"], respuestas: ["nombre", "ejecutar"] },
              { tipo: "vf", afirmacion: "Si ves el mismo código copiado varias veces, conviene convertirlo en función.", correcta: true, explicacion: "es el principio DRY (don't repeat yourself)." },
              { tipo: "multiple", pregunta: "¿Qué significa \"llamar\" una función?", opciones: ["Copiarla a otro archivo", "Ejecutar su código", "Borrar la función", "Renombrarla"], correcta: 1 },
              { tipo: "quehace", codigo: "function saludar() { console.log(\"Hola\"); } saludar();", pregunta: "<code>function saludar() { console.log(\"Hola\"); } saludar();</code> — ¿qué imprime?", opciones: ["Nada", "Hola", "Un error", "saludar"], correcta: 1 },
              { tipo: "relacionar", pares: [["function saludar() {}", "Define la receta"], ["saludar();", "Ejecuta la receta"], ["console.log(\"Hola\")", "Una función ya hecha para mostrar"], ["// nota", "Un comentario que la computadora ignora"]] }
            ]
          },
          {
            id: "m1-b14",
            titulo: "Funciones II: ingredientes que entran (parámetros) y platillo que sale (return)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Las funciones se vuelven poderosas cuando aceptan <strong>ingredientes</strong> de entrada y entregan un <strong>resultado</strong> de salida. Los ingredientes se llaman <strong>parámetros</strong>; el resultado se entrega con <code>return</code>.</p><pre><code>function sumar(a, b) {\n  return a + b;\n}</code></pre><p><code>a</code> y <code>b</code> son los parámetros: la función espera dos valores. Cuando la llamas con <code>sumar(3, 4)</code>, esos valores se llaman <strong>argumentos</strong>, y el <code>return a + b</code> entrega el resultado — que puedes guardar: <code>const r = sumar(3, 4);</code> deja <code>r</code> con el valor 7.</p><p>Dos cosas clave. Primera: si una función no tiene <code>return</code>, cuando la ejecutas no devuelve nada (técnicamente devuelve <code>undefined</code>, de B10) — hace su trabajo, pero no te entrega un platillo para usar fuera. Segunda: una función sin parámetros es una receta sin ingredientes: siempre sale el mismo platillo. Con parámetros, la misma receta produce platillos distintos según lo que le pases.</p><p>Lee cualquier función así: lo que está entre los paréntesis de la DEFINICIÓN son los ingredientes que espera; el <code>return</code> es el platillo que sale por la ventanilla. Si ves <code>function calcularTotal(precio, cantidad) { return ... }</code>, ya sabes que espera un precio y una cantidad, y que regresa algo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La <strong>taquería</strong>: la receta es \"taquear(proteína, salsa)\". Le pasas los ingredientes (pastor, salsa verde) y te entrega el platillo terminado por la ventanilla. Si le pides un taco sin decirle la proteína, no hay taco — falta un ingrediente. Y el <code>return</code> es exactamente esa ventanilla: sin ella, la cocina hace el taco pero nunca te lo entrega.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>function calcularTotal(precio, cantidad, impuesto) {\n  const subtotal = precio * cantidad;\n  const total = subtotal + subtotal * impuesto;\n  return total;\n}\n\nconst pedido1 = calcularTotal(7000, 12, 0.16);\nconst pedido2 = calcularTotal(1500, 3, 0.16);\nconsole.log(\"Pedido 1: $\" + pedido1); // Pedido 1: $97440\nconsole.log(\"Pedido 2: $\" + pedido2); // Pedido 2: $5220</code></pre><p>Una sola receta, tres ingredientes, y dos platillos distintos. Misma función, distintos argumentos, distintos resultados. Eso es reutilización con variantes: la función no sabe nada de tu negocio, solo recibe números y los procesa.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Crea una función que calcule [lo que necesitas, ej. 'el precio de un pedido con varios productos y su IVA']. Defínela con parámetros claros, devuelve el resultado con return, y dame 3 ejemplos de llamadas con resultados distintos para que yo verifique que hace lo correcto.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "Los ____ son los ingredientes que entran a la función; el ____ es el platillo que sale.", banco: ["parámetros", "return", "nombre", "error"], respuestas: ["parámetros", "return"] },
              { tipo: "multiple", pregunta: "¿Qué hace <code>return</code> en una función?", opciones: ["Detiene todo el programa", "Entrega el resultado para usarse fuera de la función", "Imprime el resultado en pantalla", "Agrega un parámetro nuevo"], correcta: 1 },
              { tipo: "quehace", codigo: "function sumar(a, b) { return a + b; } const r = sumar(2, 5);", pregunta: "Si <code>function sumar(a, b) { return a + b; }</code>, ¿cuánto vale <code>const r = sumar(2, 5)</code>?", opciones: ["\"25\"", "7", "\"2 + 5\"", "Un error"], correcta: 1 },
              { tipo: "vf", afirmacion: "Una función sin <code>return</code> devuelve el número 0.", correcta: false, explicacion: "devuelve <code>undefined</code>: no entrega ningún valor (B10)." },
              { tipo: "relacionar", pares: [["Parámetro", "El ingrediente que la receta espera"], ["Argumento", "El valor concreto que le pasas al llamarla"], ["return", "El platillo que entrega por la ventanilla"], ["Función", "La receta"]] }
            ]
          },
          {
            id: "m1-b15",
            titulo: "Listas y arreglos: muchas cosas en una sola variable",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hasta ahora cada variable guardaba una sola cosa. Un <strong>array</strong> (arreglo) guarda una <strong>lista ordenada</strong> de cosas en una sola variable: <code>const productos = [\"tenis\", \"playera\", \"gorra\"];</code>. Los elementos van entre corchetes, separados por comas.</p><p>Para leer un elemento usas su <strong>posición</strong> (índice): <code>productos[0]</code> es \"tenis\". Y aquí está la trampa favorita del oficio: <strong>los índices empiezan en 0, no en 1</strong>. <code>productos[1]</code> es el segundo. Pedir <code>productos[3]</code> cuando solo hay 3 elementos es un error clásico — el famoso \"off by one\" (equivocarte por uno). Ese error es tan común que tiene nombre propio.</p><p>Dos ayudas constantes: <code>productos.length</code> te dice cuántos elementos hay, y <code>productos.push(\"chamarra\")</code> agrega uno al final. Con <code>length</code> y un ciclo (B12) recorres toda la lista sin saber de antemano su tamaño.</p><p>Los arrays son el corazón de los datos: un catálogo, una lista de clientes, los mensajes de un chat — todo es una lista. Cuando le pidas a la IA \"dame un listado\", casi siempre estará trabajando con un array por detrás. Y la combinación estrella llega en B16: listas de objetos.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Los <strong>casilleros numerados de un gimnasio</strong>. El casillero 0, el 1, el 2 — cada uno guarda una cosa, y los conoces por su número. El conjunto de casilleros es el array; el número es el índice; y \"casilleros.length\" es cuántos hay. Si agregas un casillero al final (push), la fila crece pero los números de los que ya estaban no cambian.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>const carrito = [\"tenis\", \"playera\", \"gorra\", \"calcetines\"];\n\nconsole.log(carrito[0]);      // \"tenis\" — el primero\nconsole.log(carrito[2]);      // \"gorra\"\nconsole.log(carrito.length);  // 4 — cuántos hay\n\ncarrito.push(\"chamarra\");     // agrega al final\n\nfor (let i = 0; i &lt; carrito.length; i++) {\n  console.log(\"Artículo \" + i + \": \" + carrito[i]);\n}</code></pre><p>Fíjate en la combinación: un ciclo (B12) recorre el array usando <code>length</code> como tope y <code>i</code> como índice. Imprime \"Artículo 0: tenis\", \"Artículo 1: playera\", etc. Ese patrón — \"recorrer una lista y hacer algo con cada elemento\" — es probablemente el más repetido de toda la programación.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito trabajar con una lista de [elementos]. Muéstrame cómo declararla como array, cómo agregar y quitar elementos, cómo obtener su tamaño, y cómo recorrerla con un ciclo para [hacer algo con cada uno]. Dame un ejemplo completo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿En qué posición está el primer elemento de un array?", opciones: ["1", "0", "-1", "No tiene posición"], correcta: 1 },
              { tipo: "quehace", codigo: "const lista = [\"a\", \"b\", \"c\"]; console.log(lista[1]);", pregunta: "<code>const lista = [\"a\", \"b\", \"c\"]; console.log(lista[1]);</code> — ¿qué imprime?", opciones: ["\"a\"", "\"b\"", "\"c\"", "1"], correcta: 1 },
              { tipo: "completar", frase: "La propiedad ____ te dice cuántos elementos tiene un array, y el método ____ agrega uno al final.", banco: ["length", "push", "pop", "width"], respuestas: ["length", "push"] },
              { tipo: "relacionar", pares: [["lista[0]", "El primer elemento"], ["lista.length", "Cuántos elementos hay"], ["lista.push(\"x\")", "Agregar \"x\" al final"], ["lista[2]", "El tercer elemento"]] },
              { tipo: "vf", afirmacion: "Los índices de un array empiezan en 1, como las posiciones de una carrera.", correcta: false, explicacion: "empiezan en 0, y equivocarse por uno es el famoso \"off by one\"." }
            ]
          },
          {
            id: "m1-b16",
            titulo: "Objetos: fichas con datos (nombre, precio, teléfono…)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Las variables guardan un valor y los arrays guardan listas. Los <strong>objetos</strong> guardan <strong>datos agrupados</strong> de una misma cosa: un producto con su nombre, precio y disponibilidad; un cliente con su nombre, correo y teléfono. Un objeto es una ficha con campos.</p><pre><code>const producto = {\n  nombre: \"Tenis\",\n  precio: 1500,\n  disponible: true\n};</code></pre><p>Los campos (claves) y sus valores van separados por dos puntos: <code>clave: valor</code>. Para leer un valor usas el punto: <code>producto.nombre</code> te da \"Tenis\". (También funciona con corchetes: <code>producto[\"nombre\"]</code>, y a veces lo verás así.)</p><p>Y aquí está la combinación que mueve el mundo de los datos: <strong>un array de objetos</strong>. Un catálogo es una lista donde cada elemento es la ficha de un producto. Una tabla de clientes es una lista de fichas. Cada objeto es un renglón, cada clave es una columna (esto lo conectas directo con las bases de datos de B26).</p><p>Cuando la IA te muestre datos de tu negocio, los verás así: listas de objetos. Saber leer <code>producto.precio</code> o <code>cliente.correo</code> es saber leer la información misma de tu empresa.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La <strong>agenda de tarjetas del taller mecánico</strong>: una caja con fichas, y en cada ficha los campos del cliente — nombre, teléfono, modelo, fecha de la última visita. El objeto es la ficha; los campos son las claves; los datos escritos son los valores. Y toda la caja de fichas es el array de objetos. Sacar la ficha de un cliente y leer \"nombre\" y \"teléfono\" es exactamente <code>cliente.nombre</code> y <code>cliente.telefono</code>.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>const alumno = {\n  nombre: \"Ray Fernández\",\n  edad: 34,\n  pagoAlDia: true,\n  correo: \"ray@ejemplo.com\"\n};\n\nconsole.log(alumno.nombre);      // Ray Fernández\nconsole.log(alumno[\"correo\"]);   // ray@ejemplo.com\n\nconst catalogo = [\n  { nombre: \"Tenis\", precio: 1500 },\n  { nombre: \"Playera\", precio: 350 },\n  { nombre: \"Gorra\", precio: 200 }\n];\n\nfor (let i = 0; i &lt; catalogo.length; i++) {\n  console.log(catalogo[i].nombre + \" — $\" + catalogo[i].precio);\n}</code></pre><p>Lee la segunda parte con calma: hay una lista (array) de tres fichas (objetos). Un ciclo (B12) la recorre, y en cada vuelta accede a <code>.nombre</code> y <code>.precio</code>. Ese patrón — \"recorrer una lista de fichas y leerles campos\" — es el más común en apps de catálogos, clientes y pedidos.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito modelar [mi entidad: cliente, producto, pedido…] como objeto en JavaScript. Lista los campos que me conviene tener, el tipo de cada uno (string, number, boolean), y un ejemplo real. Después muéstrame cómo se ve una lista de 3 de estos objetos.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "En un objeto, la ____ es el nombre del campo y el ____ es el dato guardado.", banco: ["clave", "valor", "índice", "archivo"], respuestas: ["clave", "valor"] },
              { tipo: "multiple", pregunta: "¿Cómo accedes al campo <code>nombre</code> de un objeto <code>persona</code>?", opciones: ["persona[nombre]", "persona.nombre", "persona -> nombre", "get persona.nombre"], correcta: 1 },
              { tipo: "quehace", codigo: "const p = { nombre: \"Tenis\", precio: 1500 }; console.log(p.precio);", pregunta: "<code>const p = { nombre: \"Tenis\", precio: 1500 }; console.log(p.precio);</code> — ¿qué imprime?", opciones: ["Tenis", "1500", "Un error", "precio"], correcta: 1 },
              { tipo: "relacionar", pares: [["{ }", "Objeto (ficha con campos)"], [".campo", "Acceder al valor del campo"], ["[ ]", "Lista (array)"], [":", "Separa la clave del valor"]] },
              { tipo: "vf", afirmacion: "Un array de objetos sirve para modelar un catálogo de productos.", correcta: true, explicacion: "es la estructura de datos más usada del mundo real." }
            ]
          },
          {
            id: "m1-b17",
            titulo: "JSON: el formato en el que viajan los datos por internet",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>JSON</strong> (JavaScript Object Notation, \"notación de objetos de JavaScript\") es un formato de texto para representar datos. Se parece muchísimo a un objeto de B16, pero con reglas más estrictas: las claves SIEMPRE van entre comillas dobles, no admite funciones ni comentarios, y todo es texto plano.</p><p>¿Por qué existe? Porque cuando una app le pide datos a un servidor, necesita un idioma que AMBOS entiendan — y que cualquier sistema del mundo pueda abrir, sin importar si está hecho con JavaScript, Python o Java. Ese idioma estándar es JSON. Respuestas de APIs (B25), archivos de configuración, exportaciones de datos: si algo viaja por internet como datos, casi seguro viaja en JSON.</p><p>En JavaScript tienes dos herramientas: <code>JSON.stringify(objeto)</code> convierte un objeto en texto JSON (para enviarlo), y <code>JSON.parse(texto)</code> convierte texto JSON en objeto real (para usarlo). Los verás en toda app que hable con un servidor.</p><p>Dato memorable: JSON lo popularizó <strong>Douglas Crockford</strong> a principios de los 2000. No inventó un lenguaje nuevo — tomó la forma de los objetos de JavaScript, la estandarizó, y el mundo entero la adoptó. Hoy casi todo el tráfico de datos de internet habla JSON.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El <strong>contenedor estándar de un barco de carga</strong>. Puedes meter adentro cualquier mercancía, pero el contenedor siempre tiene las mismas medidas y reglas, así cualquier puerto del mundo lo puede recibir, abrir y entender. JSON es el contenedor de los datos: el contenido cambia (tus productos, tus clientes), pero el formato es siempre el mismo, y cualquier sistema sabe cómo abrirlo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>// Un objeto en JavaScript\nconst producto = { nombre: \"Tenis\", precio: 1500, disponible: true };\n\n// Convertido a texto JSON (lo que viaja por internet)\nconst textoJSON = JSON.stringify(producto);\n// '{\"nombre\":\"Tenis\",\"precio\":1500,\"disponible\":true}'\n\n// El texto JSON recibido se convierte de vuelta en objeto\nconst objetoDeNuevo = JSON.parse(textoJSON);\nconsole.log(objetoDeNuevo.nombre); // Tenis</code></pre><p>Compara los dos formatos de la pantalla: el objeto usa claves sin comillas, el JSON las lleva siempre con <code>\"</code>. Esa diferencia es sutil pero crucial: el JSON es texto estricto que cualquier sistema puede leer; el objeto es algo que vive dentro del JavaScript.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo estos datos: [pega tu estructura]. Conviértelos a JSON válido, revisa que las claves estén entre comillas dobles y que no haya comentarios, y pásame también la línea de JSON.stringify para usarlos en JavaScript.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "En JSON, las claves deben ir entre comillas dobles.", correcta: true, explicacion: "es la regla que lo hace entendible para cualquier sistema." },
              { tipo: "multiple", pregunta: "¿Para qué sirve JSON?", opciones: ["Estilizar páginas web", "Intercambiar datos entre sistemas en formato de texto estándar", "Conectar cables de red", "Editar imágenes"], correcta: 1 },
              { tipo: "relacionar", pares: [["JSON.stringify()", "Convierte un objeto a texto JSON"], ["JSON.parse()", "Convierte texto JSON a objeto"], ["\"clave\"", "Siempre entre comillas dobles"], ["{ }", "La estructura de los datos"]] },
              { tipo: "completar", frase: "Cuando una app le pide datos a un servidor, la respuesta típicamente viaja en formato ____.", banco: ["JSON", "PDF", "MP3", "ZIP"], respuestas: ["JSON"] },
              { tipo: "quehace", codigo: "JSON.parse('{\"precio\": 1500}')", pregunta: "<code>JSON.parse('{\"precio\": 1500}')</code> — ¿qué devuelve?", opciones: ["Un error", "Un objeto con la clave \"precio\" igual a 1500", "El texto \"1500\"", "El número 1500 suelto"], correcta: 1 }
            ]
          },
          {
            id: "m1-b18",
            titulo: "Comentarios: las notas que el código ignora pero los humanos leen",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Los <strong>comentarios</strong> son texto que vive dentro del código pero que la computadora ignora por completo: solo los leen los humanos. En JavaScript se escriben con <code>//</code> (una línea) o <code>/* ... */</code> (varias líneas); en Python, con <code>#</code>. Puedes poner lo que quieras: no afecta el programa en nada.</p><p>¿Para qué sirven si la computadora no los lee? Para el humano del futuro — y ese humano del futuro muy probablemente eres tú, dentro de tres meses, cuando vuelvas a un proyecto sin recordar nada. El código explica el QUÉ (qué hace cada línea); el comentario bueno explica el PORQUÉ: por qué se hizo así, qué regla de negocio lo obliga, qué se espera de esa parte.</p><p>Hay comentarios malos y buenos. Malo: <code>// suma a y b</code> sobre una línea <code>a + b</code> — repite lo obvio. Bueno: <code>// El impuesto se redondea a centavos porque el recibo debe cuadrar con el SAT</code> — cuenta algo que el código no dice y que tú necesitas saber.</p><p>En la era de la IA esto cambia de nivel: cuando la IA genera código, pedirle que lo comente bien es una de las instrucciones más valiosas del mundo. Y tú también los usas en la dirección inversa: \"esta parte NO la toques\" se escribe en un comentario, y hasta la IA respeta las marcas claras.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Las <strong>notas en la caja de recetas de tu abuela</strong>: \"esta masa, si hace frío, déjala reposar 10 minutos más\". La masa no lee la nota — pero tú sí, y sin ella la receta se arruina cada invierno. El comentario es para el humano del futuro, nunca para la máquina.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>// Precio con IVA del 16% — NO tocar: lo usa el reporte mensual\nconst PRECIO_CON_IVA = 1.16;\n\nfunction calcularIVA(monto) {\n  // El impuesto se redondea a centavos para que el recibo cuadre\n  return Math.round(monto * PRECIO_CON_IVA * 100) / 100;\n}</code></pre><p>Fíjate en lo que cuentan los comentarios: el primero marca una zona protegida (\"no tocar\") y la razón; el segundo explica una decisión rara (redondear) que sin el comentario parecería un error. Eso es un comentario de verdad: cuenta lo que el código no puede decir.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Agrega comentarios a este código: [pega el código]. Deben explicar el PORQUÉ (intención, reglas de negocio, decisiones raras) y NO repetir lo que el código ya dice. Marca con // NO TOCAR las partes que no se deben cambiar.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Quién lee los comentarios del código?", opciones: ["La computadora, para optimizar", "Los humanos", "Nadie, no sirven para nada", "Solo el navegador"], correcta: 1 },
              { tipo: "completar", frase: "En JavaScript un comentario de una línea empieza con ____; en Python, con ____.", banco: ["//", "#", "/*", "--"], respuestas: ["//", "#"] },
              { tipo: "quehace", codigo: "// No borrar: lo pide contabilidad\nconst topDescuento = 0.30;", pregunta: "En este código, ¿qué hace la línea <code>// No borrar: lo pide contabilidad</code>?", opciones: ["Da un error de sintaxis", "Nada: es una nota para humanos, la computadora la ignora", "Descuenta 0.30 al total", "Bloquea la línea siguiente"], correcta: 1 },
              { tipo: "vf", afirmacion: "Los comentarios ralentizan el programa porque la computadora los procesa.", correcta: false, explicacion: "la computadora los ignora por completo; solo los leen los humanos." },
              { tipo: "relacionar", pares: [["//", "Comentario de una línea en JavaScript"], ["#", "Comentario en Python"], ["/* ... */", "Comentario de varias líneas en JS"], ["Explica el porqué", "El mejor uso de un comentario"]] }
            ]
          },
          {
            id: "m1-b19",
            titulo: "Errores I: leer un mensaje de error sin entrar en pánico",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Los <strong>mensajes de error</strong> son la computadora diciéndote qué no entendió o qué se rompió. Están en inglés, se ven feos y salen con un montón de ruido — pero casi siempre dicen exactamente dónde está el problema. Aprender a leerlos es de las habilidades que más tiempo te ahorran.</p><p>La anatomía típica: el <strong>nombre</strong> del error (<code>ReferenceError</code>, <code>TypeError</code>, <code>SyntaxError</code>...), una <strong>descripción</strong> (\"x is not defined\"), y el <strong>stack trace</strong> (la pila): una lista de <code>at ...</code> con archivos y líneas que muestra el camino completo — dónde empezó la cadena de llamadas y por dónde llegó al punto que falló.</p><p>Lo primero que debes buscar: la línea que dice <code>at algo (archivo.js:12:34)</code> — ese es el archivo y la línea exacta donde el programa se quejó. Lo segundo: la primera línea del mensaje, que casi siempre es la causa. El resto es ruido.</p><p>Dato tranquilizador: no necesitas entender TODO el mensaje. Tu superpoder de director es copiar el mensaje completo y pegárselo a la IA con el contexto (\"esto pasó cuando hice X\"). La IA lee errores a velocidad máquina; tú solo necesitas saber que ese texto vale oro y que nunca, nunca lo ignores.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La <strong>luz del \"check engine\" del coche</strong>. La primera vez da miedo, pero es información: no es que el coche esté enojado, es que hay algo específico que revisar. El conductor que pega el código de error en Google (o se lo da a la IA) llega a su destino; el que cierra los ojos y sigue manejando se queda varado. El error no es el enemigo: es el mapa del problema.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>ReferenceError: precio is not defined\n    at calcularTotal (checkout.js:12:9)\n    at procesarPedido (checkout.js:28:5)\n    at &lt;anonymous&gt; (app.js:3:1)</code></pre><p>Lee la primera línea: \"la variable <code>precio</code> no está definida\". Luego el stack: el problema está en <code>checkout.js</code>, línea 12; esa función (<code>calcularTotal</code>) fue llamada desde <code>procesarPedido</code> en la línea 28; y esa desde <code>app.js</code> línea 3. Con esos tres datos, abres el archivo en la línea 12 y buscas por qué <code>precio</code> no existe ahí — casi siempre porque se llamó mal o se escribió distinto.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Este es el error que me sale al correr mi programa: [pega el mensaje completo]. No entiendo nada de lo que dice. Explícame en español qué falló, en qué archivo y línea exacta, qué línea de mi código lo causa y cómo lo arreglo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es la información más útil de un mensaje de error?", opciones: ["Los colores de la terminal", "El archivo y la línea donde falló", "La hora en que falló", "El tamaño de la pantalla"], correcta: 1 },
              { tipo: "completar", frase: "El ____ trace es la pila de llamadas: dónde empezó el problema y por dónde llegó.", banco: ["stack", "error", "log", "debug"], respuestas: ["stack"] },
              { tipo: "quehace", codigo: "ReferenceError: precio is not defined at checkout.js:12", pregunta: "<code>ReferenceError: precio is not defined at checkout.js:12</code> — ¿qué te dice?", opciones: ["Que la línea 12 funciona perfecto", "Que en la línea 12 de checkout.js se usa la variable \"precio\", que no existe", "Que la computadora no tiene memoria", "Que el archivo se llama distinto"], correcta: 1 },
              { tipo: "vf", afirmacion: "Los mensajes de error están para asustarte: si no entiendes el primero, el programa está roto para siempre.", correcta: false, explicacion: "son pistas técnicas; casi siempre señalan archivo y línea exacta." },
              { tipo: "ordenar", instruccion: "Pasos al recibir un error:", elementos: ["lee la primera línea del mensaje", "anota el archivo y la línea que señala", "copia el mensaje completo", "pégalo a la IA con contexto", "aplica el arreglo y vuelve a probar"] }
            ]
          },
          {
            id: "m1-b20",
            titulo: "Errores II: sintaxis vs lógica vs runtime",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Los errores no son todos iguales, y saber cuál tienes enfrente te dice qué tan grave es. Hay tres familias.</p><p><strong>Sintaxis</strong>: la \"gramática\" del código está mal — falta un paréntesis, una coma, una llave. El programa ni siquiera arranca; el motor te avisa de inmediato señalando la línea. Es el más fácil de arreglar: es como una carta con un error de puntuación, se ve al primer vistazo.</p><p><strong>Lógica</strong>: el código corre perfecto, sin un solo error, pero hace lo incorrecto — restaste cuando debías sumar, la condición quedó invertida. Nadie te avisa: solo lo notas cuando el resultado no es lo que esperabas. Es el más traicionero, porque el programa \"funciona\" y puede correr meses con el error adentro.</p><p><strong>Runtime</strong> (de ejecución): truena a mitad de camino, cuando ya está corriendo — leer una variable que no existe, conectarse a un servidor apagado, dividir entre cero. El programa arranca bien y se cae después, y el mensaje aparece en el peor momento.</p><p>Para el director de IA esto define tu papel: la IA arregla la sintaxis en segundos. Los errores de runtime también los diagnostica rápido. Pero los de <strong>lógica son territorio tuyo</strong>: son reglas de negocio mal traducidas, y solo tú sabes cómo debería comportarse el sistema. \"El descuento se aplica al revés\" es información que solo tú tienes.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>En una <strong>carta</strong>: el error de sintaxis es la ortografía y la puntuación — se nota de inmediato y nadie la lee mal dos veces. El error de lógica es haber escrito \"no vender\" cuando querías \"vender\" — la carta está perfectamente escrita, pero hace lo contrario de lo que pediste. Y el error runtime es el cartero que llega a una casa que ya no existe: todo iba bien hasta el último momento.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>// 1) SINTAXIS — falta un paréntesis: el programa no arranca\n// const total = calcularTotal(7000, 12;\n\n// 2) LÓGICA — corre perfecto, pero resta en vez de sumar\nconst saldo = pagos - cobros;  // ✘ debería ser pagos + cobros\n\n// 3) RUNTIME — truena en ejecución si usuario no existe\nconsole.log(usuario.nombre);   // TypeError si usuario es null</code></pre><p>El primero se ve mal desde lejos y el motor lo señala al instante. El segundo no da ningún error: corre, y el saldo sale mal en silencio. El tercero pasa el arranque pero explota cuando el dato no está. Reconocer a cuál pertenece tu síntoma te dice por dónde empezar.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Mi programa corre pero hace algo incorrecto: [describe el comportamiento incorrecto y el esperado]. Revisa el código, dime si es un error de lógica, señala la línea donde la intención y el código no coinciden, y corrígelo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Sintaxis", "El programa ni arranca: falta una coma o paréntesis"], ["Lógica", "Corre perfecto pero hace lo incorrecto"], ["Runtime", "Truena a mitad de la ejecución"]] },
              { tipo: "completar", frase: "El error más traicionero es el de ____: nadie te avisa, solo notas que el resultado está ____.", banco: ["lógica", "mal", "sintaxis", "rápido"], respuestas: ["lógica", "mal"] },
              { tipo: "multiple", pregunta: "Falta un paréntesis de cierre en una línea. ¿Qué tipo de error es?", opciones: ["De lógica", "De sintaxis", "De runtime", "De red"], correcta: 1 },
              { tipo: "quehace", codigo: "const saldo = pagos - cobros;", pregunta: "La regla del negocio es <code>saldo = pagos + cobros</code>, pero el código resta. ¿Qué pasa?", opciones: ["El programa no arranca", "Corre sin errores, pero el saldo sale mal", "Se cae en la primera ejecución", "Un mensaje de error lo explica"], correcta: 1 },
              { tipo: "vf", afirmacion: "La IA puede detectar sola los errores de lógica de negocio porque conoce tu negocio.", correcta: false, explicacion: "la lógica de negocio es tuya; tú le describes cómo debería comportarse el sistema." }
            ]
          },
          {
            id: "m1-b21",
            titulo: "¿Qué es un bug? (y la polilla real de 1947)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un <strong>bug</strong> es un defecto en el software: el programa hace algo que no debía, o no hace lo que debía. Puede venir de un error de lógica (B20), de un caso que nadie previó, de un dato raro, de una suposición equivocada. No es un error de \"que se cayó\": es el comportamiento incorrecto que nadie notó.</p><p>La historia que le dio nombre es legendaria: en <strong>1947</strong>, en la computadora <strong>Harvard Mark II</strong>, el equipo de <strong>Grace Hopper</strong> encontró una <strong>polilla real</strong> atrapada en un relevador. La pegaron con cinta al libro de bitácora y anotaron: \"First actual case of bug being found\" — \"primer caso real de bug encontrado\". La palabra \"bug\" (bicho) ya se usaba para fallas técnicas, pero esa polilla pegada en un cuaderno la convirtió en leyenda. Esa bitácora todavía existe en un museo.</p><p>¿Dónde viven los bugs? Casi siempre en los <strong>casos límite</strong>: \"¿qué pasa si el cliente compra 0 artículos?\", \"¿si escribe la contraseña con espacios?\", \"¿si paga exactamente con la tarjeta que acaba de vencer?\", \"¿si la lista está vacía?\". El código funciona perfecto con datos normales y explota (o se comporta mal) justo en el caso raro.</p><p>Para ti, director de IA, la cacería de bugs es una habilidad de imaginación y de conocimiento de tu negocio, no de código: describir los \"¿y si...?\" que la IA no ve sola. Cada caso límite que imagines es un bug que no va a existir.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Una <strong>receta perfecta que falla solo el día de lluvia</strong>. No fue el cocinero ni el horno: fue un caso que nadie imaginó — la masa reacciona a la humedad. El bug es eso: no un error del cocinero, sino el caso que nadie previó. Por eso los bugs más caros del mundo han venido de datos que \"nadie pensó que pasarían\".</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>function darDescuento(cantidad) {\n  return cantidad &gt;= 5 ? 0.15 : 0;\n}\n\n// Caso límite: el usuario escribe \"5\" como texto (del formulario)\ndarDescuento(\"5\"); // \"5\" &gt;= 5 es true... pero el 15% se aplica raro</code></pre><p>El código funciona perfecto con números. El bug aparece cuando llega texto donde se esperaba número — un caso límite clásico de formularios. La solución sería verificar el tipo antes de comparar (recuerdas B10: <code>\"5\"</code> y <code>5</code> no son lo mismo). Ese es el patrón: funciona hasta que llega el dato raro.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Revisa este código buscando bugs, especialmente en casos límite: entradas vacías, valores extremos, texto en vez de número, cero, datos que no existen. Hazme una tabla: caso → qué hace el código hoy → qué debería hacer → cómo corregirlo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "En 1947 encontraron una polilla real atrapada en una computadora y la pegaron a la bitácora.", correcta: true, explicacion: "pasó en la Harvard Mark II, con Grace Hopper." },
              { tipo: "completar", frase: "Los bugs se esconden casi siempre en los casos ____: entradas vacías, valores extremos, datos raros.", banco: ["límite", "normales", "felices", "bonitos"], respuestas: ["límite"] },
              { tipo: "multiple", pregunta: "¿Qué es un bug?", opciones: ["Un virus de internet", "Un defecto del software: hace algo que no debía", "Una actualización de seguridad", "Un tipo de librería"], correcta: 1 },
              { tipo: "relacionar", pares: [["Bug", "Defecto del software"], ["1947", "El año de la polilla documentada"], ["Grace Hopper", "La programadora que la encontró"], ["Caso límite", "Donde se esconden los bugs"]] },
              { tipo: "ordenar", instruccion: "Cómo se resuelve un bug:", elementos: ["imagina el caso raro", "reproduce el error", "confirma el comportamiento incorrecto", "descríbelo a la IA", "corrige y vuelve a probar"] }
            ]
          },
          {
            id: "m1-b22",
            titulo: "Librerías y frameworks: la diferencia entre piezas y esqueletos",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya conoces las <strong>librerías</strong> desde A11: piezas de código listo que tú (o la IA) llaman cuando las necesitan — una para fechas, otra para pagos, otra para gráficas. La regla clave: con una librería, <strong>tu código tiene el control</strong>; tú decides cuándo usarla.</p><p>Los <strong>frameworks</strong> son otro nivel. No son una pieza que tú tomas: son el <strong>esqueleto</strong> de todo el proyecto. Dictan la estructura, las convenciones y el flujo — y la regla se invierte: <strong>el framework tiene el control y te llama a ti</strong>. Ejemplos que verás mucho: <strong>React</strong> (interfaces web), <strong>Vue</strong> (lo mismo, distinto estilo), <strong>Express</strong> (servidores en Node), <strong>Django</strong> (servidores en Python).</p><p>La regla de oro para distinguirlos se llama <strong>inversión de control</strong>: con una librería, tú llamas a las funciones. Con un framework, él decide cuándo ejecutar el código que le diste. \"Librería: tú la usas. Framework: él te usa.\"</p><p>¿Por qué te importa? Cuando dirijas a la IA, la conversación va a ser \"¿lo hacemos con React o con HTML normal?\" — y entender la diferencia te deja opinar con criterio. Además, cuando la IA diga \"el framework hace X por ti\", sabrás que no está siendo vaga: es que hay un esqueleto cargando el trabajo pesado.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La librería es tu <strong>caja de herramientas</strong>: tomas el desatornillador cuando lo necesitas y decides exactamente qué hacer con él. El framework es la <strong>estructura de una casa en obra</strong>: las paredes, puertas y ventanas ya vienen decididas; tu trabajo es llenar cada espacio, no preguntarte dónde van las paredes. Con herramientas decides todo; con el esqueleto, te adaptas a lo que ya está armado — y por eso construyes más rápido.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>// Con una LIBRERÍA: TU código llama a la pieza\nconst fecha = moment(fechaISO).format(\"DD/MM/YYYY\");\n\n// Con un FRAMEWORK: el framework llama a TU componente\nfunction TarjetaProducto(props) {\n  return &lt;div&gt;{props.nombre} — ${props.precio}&lt;/div&gt;;\n}\n// React decide cuándo y cómo pintar tu TarjetaProducto</code></pre><p>En el primer caso, tú usas <code>moment</code> como herramienta. En el segundo, escribes un componente y React lo ejecuta cuando corresponde. La diferencia es sutil en el código, pero cambia todo el flujo del proyecto: con el framework, tú escribes piezas que él encaja; con la librería, tú armas todo y solo tomas prestadas funciones.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a construir [mi app] y estoy entre [opción A] y [opción B]. Explícame cuál es una librería y cuál un framework, qué tan difícil es cada una para alguien nuevo, y cuál me conviene para [mi objetivo]. No decidas tú solo: dame pros, contras y tu recomendación razonada.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "Con una librería, tú ____ la pieza cuando la necesitas; con un framework, el framework ____ a ti.", banco: ["llamas", "te llama", "olvidas", "pagas"], respuestas: ["llamas", "te llama"] },
              { tipo: "relacionar", pares: [["Librería", "Pieza de código que tú tomas cuando la necesitas"], ["Framework", "Esqueleto que dicta la estructura del proyecto"], ["React", "Un framework de interfaces"], ["moment", "Una librería de fechas"]] },
              { tipo: "multiple", pregunta: "¿Cuál es la diferencia clave entre ambos?", opciones: ["La librería es siempre más cara", "Con la librería tu código controla; con el framework, él controla", "La librería solo sirve para diseño", "No hay ninguna diferencia"], correcta: 1 },
              { tipo: "vf", afirmacion: "Un framework solo sirve para proyectos gigantes de empresas.", correcta: false, explicacion: "hay frameworks ligeros perfectos para proyectos pequeños y medianos." },
              { tipo: "quehace", codigo: "function TarjetaProducto(props) { return <div>{props.nombre}</div>; }", pregunta: "En React, este código es...", opciones: ["Un error de sintaxis", "Un componente que el framework pintará cuando corresponda", "Una tabla de una base de datos", "Un comando de terminal"], correcta: 1 }
            ]
          },
          {
            id: "m1-b23",
            titulo: "Frontend, Backend y Base de datos: las tres capas de toda app",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Toda app moderna — desde tu página hasta Netflix — tiene <strong>tres capas</strong>. Entender cuál es cuál te dice qué estás viendo y dónde está cada problema.</p><p>El <strong>frontend</strong> es lo que el usuario ve y toca: los botones, las tarjetas, los colores. Vive en el navegador y está hecho de HTML (B7), CSS (B8) y JavaScript (B3). Es la cara.</p><p>El <strong>backend</strong> es la lógica que no se ve: recibe lo que el usuario hizo, lo valida, lo procesa y decide. Vive en un servidor (A20, A22) y puede estar hecho con Node.js, Python, Java. Es el cerebro: el frontend le dice \"compró esto\" y él responde \"ok, cobra, guarda, confirma\".</p><p>La <strong>base de datos</strong> (a fondo en B26) es el almacén: donde viven los datos de verdad — clientes, pedidos, precios. El backend le pregunta y le ordena con SQL (B5). Es la memoria permanente.</p><p>El flujo clásico: el frontend pide → el backend valida y consulta la base de datos → la base responde → el backend arma la respuesta → el frontend la muestra. Como director de IA, cada \"está mal\" que detectes pertenece a una capa: un color malo es frontend; \"no guarda el pedido\" puede ser backend o base de datos. Y al pedirle un arreglo a la IA, decirle la capa la enfoca al instante.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El <strong>restaurante completo</strong>: el frontend es el comedor con su menú — lo que el cliente ve y toca. El backend es la cocina — donde se procesa todo y no se ve. La base de datos es el refrigerador y la despensa — donde se guarda todo lo que hay. El mesero (la API, B25) conecta el comedor con la cocina. Si el cliente dice \"la sopa está fría\", nadie va a cambiar la mesa (frontend): hay que ir a la cocina o revisar el refri.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Cliente toca \"Comprar\" en el navegador     ← FRONTEND\n        ↓ petición HTTP (A19)\nServidor procesa la orden y cobra           ← BACKEND\n        ↓ consulta SQL (B5)\nBase de datos guarda el pedido              ← BASE DE DATOS\n        ↓ respuesta\nEl navegador muestra \"¡Pedido confirmado!\"  ← FRONTEND</code></pre><p>Fíjate en el viaje redondo: empieza en el frontend, baja al backend, toca la base de datos, y sube de vuelta hasta la pantalla. Cada capa hace UNA cosa. Cuando alguien te diga \"el sistema no funciona\", esa secuencia es tu mapa de búsqueda: ¿en qué capa se cortó el viaje?</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Mi app tiene un problema: [describe el síntoma]. Quiero saber en qué capa está el problema (frontend, backend o base de datos), qué archivo habría que tocar, y qué debo decirle a la IA para que lo arregle.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Frontend", "Lo que el usuario ve y toca"], ["Backend", "La lógica que procesa en el servidor"], ["Base de datos", "El almacén de datos"], ["Navegador", "Donde corre el frontend"]] },
              { tipo: "completar", frase: "El ____ es lo que se ve en el navegador; el ____ corre en un servidor y procesa las peticiones.", banco: ["frontend", "backend", "firewall", "motor"], respuestas: ["frontend", "backend"] },
              { tipo: "multiple", pregunta: "Un botón no responde al hacer clic. ¿En qué capa buscarías primero?", opciones: ["Backend", "Frontend", "Base de datos", "El sistema operativo"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Flujo de un pedido:", elementos: ["el usuario toca \"Comprar\" en el navegador", "el backend recibe y valida", "el backend consulta la base de datos", "la base de datos guarda el pedido", "el navegador muestra \"Pedido confirmado\""] },
              { tipo: "vf", afirmacion: "La base de datos vive dentro del navegador, junto al frontend.", correcta: false, explicacion: "es una capa aparte, normalmente en sus propios servidores." }
            ]
          },
          {
            id: "m1-b24",
            titulo: "¿Qué es un algoritmo? (la receta paso a paso)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un <strong>algoritmo</strong> es una secuencia ordenada de pasos para resolver un problema. Eso es todo — y significa que ya conoces cientos: una receta de cocina, las indicaciones para llegar a un lugar, los pasos para sacar tu INE. Los seres humanos somos máquinas de algoritmos; solo que no les decíamos así.</p><p>En software, un algoritmo bien hecho tiene tres ingredientes: <strong>pasos</strong> en orden, <strong>decisiones</strong> (los condicionales de B11: \"si pasa X, haz Y\") y <strong>repeticiones</strong> (los ciclos de B12: \"haz esto para cada uno\"). Se puede describir sin escribir una sola línea de código — eso se llama <strong>pseudocódigo</strong>: instrucciones claras que cualquier humano entiende y que luego la IA convierte a código.</p><p>Dato memorable: los algoritmos son más viejos que las computadoras. <strong>Euclides</strong>, hace más de 2,300 años, describió su famoso algoritmo para calcular el máximo común divisor — sin que existiera una sola computadora en el planeta. La lógica vino primero; las máquinas llegaron después.</p><p>Para ti, director de IA, el algoritmo es TU parte del trabajo: describir el proceso en pasos claros, con sus decisiones y repeticiones, es exactamente el input que la IA necesita. \"Toma cada pedido, si supera $1000 aplícale 15%, suma todo, mándalo al correo\" — tú pones el algoritmo en palabras, la IA lo vuelve código.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La <strong>ruta de tu casa al mercado</strong>: pasos en orden (salir, caminar dos cuadras, doblar a la izquierda), una decisión (si la avenida está cerrada, dar la vuelta), y una repetición (lo haces cada semana igual). Eso es un algoritmo que llevas años ejecutando sin saberlo. La única diferencia es que la computadora no puede improvisar: necesita que le escribas la ruta completa, con todos los \"si\" y todos los \"repite\".</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>PSEUDOCÓDIGO: calcular el descuento de un carrito\n1. Toma la lista de productos del carrito\n2. Suma todos los precios → subtotal\n3. SI subtotal &gt;= $1000:\n     descuento = 15% del subtotal\n   SI NO:\n     descuento = 0\n4. total = subtotal - descuento\n5. Muestra el total y el descuento</code></pre><p>Ese texto no es código de ningún lenguaje: es el algoritmo, describible por cualquier persona. Nota las decisiones (el SI) y los pasos en orden. Cuando la IA lo convierta a JavaScript, cada línea tendrá un equivalente directo. Practicar esta forma de pensar es el entrenamiento base de director.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito un algoritmo para [describe tu proceso de negocio]. Escríbelo primero en pseudocódigo paso a paso, con pasos, decisiones y repeticiones claras. Revísalo conmigo, y solo cuando te diga 'OK' conviértelo a [lenguaje]. No lo conviertas antes.\"</p></blockquote><p>Ese \"solo cuando te diga OK\" es importante: separa el diseño (tú) del código (la IA), y te permite revisar la lógica antes de que se vuelva incomprensible.</p>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "Un algoritmo es una ____ ordenada de pasos para ____ un problema.", banco: ["secuencia", "resolver", "adivinar", "borrar"], respuestas: ["secuencia", "resolver"] },
              { tipo: "vf", afirmacion: "Los algoritmos solo existen dentro de las computadoras.", correcta: false, explicacion: "Euclides describió uno hace más de 2,300 años, sin computadoras." },
              { tipo: "multiple", pregunta: "¿Qué elementos suele tener un algoritmo?", opciones: ["Pasos, decisiones y repeticiones", "Colores y fuentes", "Solo números", "Archivos y carpetas"], correcta: 0 },
              { tipo: "ordenar", instruccion: "Algoritmo para el descuento:", elementos: ["suma los precios del carrito", "revisa si el subtotal supera $1000", "aplica el 15% si aplica", "calcula el total"] },
              { tipo: "quehace", codigo: "SI pago >= 5000 ENTONCES envío gratis SI NO cobrar envío", pregunta: "Este pseudocódigo...", opciones: ["Siempre cobra envío", "Cobra envío solo si el pago es menor a 5000", "Nunca cobra envío", "Suma 5000 al pago"], correcta: 1 }
            ]
          },
          {
            id: "m1-b25",
            titulo: "¿Qué es una API? Primer vistazo al mesero de los datos",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cuando tu app necesita información de otro sistema, no entra a su base de datos directamente: habla con su <strong>API</strong>. Una API (Application Programming Interface) es el intermediario oficial entre dos programas — la regla escrita de qué puedes pedir y qué te van a responder.</p><p>Lo verás en todas partes: tu página cobra con tarjeta a través de la API de pagos; la app del clima pide datos a la API meteorológica; el tipo de cambio que muestra tu app viene de una API bancaria. Ninguno de esos sistemas te deja tocar su base de datos: te dejan hablar con su API.</p><p>La API define <strong>endpoints</strong>: rutas exactas como <code>/productos</code> o <code>/clima/cdmx</code>. Y define los verbos: <strong>GET</strong> para pedir datos (\"dame los productos\"), <strong>POST</strong> para enviar/guardar (\"registra este pedido\"). Nota el parecido con los verbos de SQL de B5 — el mundo repite la misma idea: leer, escribir, modificar, borrar.</p><p>La respuesta de una API casi siempre viaja en <strong>JSON</strong> (B17), que ya sabes leer. Cuando la IA conecte tu página con servicios externos, el flujo será: tu frontend pide → la API responde con JSON → tu app lo muestra. Tú no escribes APIs de entrada: describes qué necesitas (\"quiero que la página muestre el clima de cada ciudad\") y la IA hace el puente.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El <strong>cajero del banco</strong>. No puedes entrar a la bóveda (la base de datos del banco) a sacar tu dinero tú mismo. Le pides al cajero por la ventanilla: \"retira $500 de mi cuenta\" (una petición con reglas), y él hace el trámite y te entrega el resultado. Tú no sabes cómo lo hizo, solo sigues el protocolo: fila, identificación, y lo que se te permite pedir. La API es ese cajero — la barrera amable que te da lo que pides sin dejarte meter las manos.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>// Pedirle datos del clima a una API (fetch, la herramienta de peticiones)\nconst respuesta = await fetch(\"https://api.clima.com/ciudades/cdmx\");\nconst datos = await respuesta.json();\n\nconsole.log(datos.temperatura);  // 22\nconsole.log(datos.condicion);    // \"despejado\"</code></pre><p>Dos líneas y media hacen el milagro: se pide la URL del endpoint (una petición GET), la respuesta llega en JSON y se convierte con <code>.json()</code>, y ya puedes leer los datos como objeto (B16). Sin saber los secretos de la meteorología, tu app ya muestra el clima. Eso es lo que las APIs hacen por el mundo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero que mi [app] obtenga [dato, ej. 'el clima', 'el tipo de cambio'] de una API pública. Investiga cuál es la mejor opción gratuita, muéstrame cómo se ve la respuesta en JSON, y dime qué le tengo que pedir a la IA para conectarla a mi página.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "Una API es el ____ entre dos programas: define qué puedes ____ y qué te responde.", banco: ["intermediario", "pedir", "inventar", "cobrar"], respuestas: ["intermediario", "pedir"] },
              { tipo: "relacionar", pares: [["GET", "Pedir datos"], ["POST", "Guardar o enviar datos nuevos"], ["Endpoint", "La ruta exacta (ej. /productos)"], ["JSON", "El formato típico de la respuesta"]] },
              { tipo: "multiple", pregunta: "Tu página cobra con tarjeta sin manejar tarjetas directamente. ¿Con quién habla?", opciones: ["Con la base de datos local", "Con la API de pagos", "Con el sistema operativo", "Con el navegador"], correcta: 1 },
              { tipo: "quehace", codigo: "fetch(\"https://api.clima.com/ciudades/cdmx\")", pregunta: "<code>fetch(\"https://api.clima.com/ciudades/cdmx\")</code> — ¿qué hace?", opciones: ["Guarda el clima en tu disco", "Pide datos del clima de CDMX a esa API", "Borra los datos del clima", "Instala una librería"], correcta: 1 },
              { tipo: "vf", afirmacion: "Una API te da acceso directo a la base de datos de otro sistema, sin reglas.", correcta: false, explicacion: "la API ES la regla: solo puedes pedir lo que sus endpoints permiten." }
            ]
          },
          {
            id: "m1-b26",
            titulo: "Bases de datos: tablas, filas, columnas y el Excel con esteroides",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Una <strong>base de datos</strong> (BD) es donde vive la información estructurada de un sistema: clientes, productos, pedidos, pagos. Es un Excel gigante con superpoderes, y se organiza igual: <strong>tablas</strong>, <strong>columnas</strong> y <strong>filas</strong>.</p><p>Una <strong>tabla</strong> es una hoja de un tema: la tabla <code>clientes</code>, la tabla <code>productos</code>. Las <strong>columnas</strong> son los campos — <code>nombre</code>, <code>correo</code>, <code>precio</code>. Las <strong>filas</strong> son cada registro — cada cliente, cada producto. La <strong>clave primaria</strong> (normalmente <code>id</code>) es el número de serie que identifica cada fila de forma única.</p><p>¿Por qué no usar un Excel de plano? Por tres razones: maneja millones de filas sin despeinarse; varios usuarios pueden escribir al mismo tiempo sin pisarse; y protege los datos — no cualquiera borra una fila sin permiso. Un Excel es tu libreta personal; una base de datos es un sistema con guardias.</p><p>Hablas con ella con <strong>SQL</strong> (B5): <code>SELECT</code> para leer, <code>INSERT</code> para guardar, <code>UPDATE</code> para modificar, <code>DELETE</code> para borrar. Cuando la IA te diga \"ya guarda el pedido en la base de datos\", todo esto está por detrás.</p><p>Para ti, la idea clave es esta: <strong>la página se puede rehacer en una tarde; los datos no</strong>. Las decisiones serias de tu negocio — respaldos, quién puede borrar qué, qué se guarda y qué no — son decisiones sobre la base de datos. Por eso te interesa saber leerla, aunque nunca escribas una consulta a mano.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un <strong>almacén con pasillos, estantes y etiquetas</strong>: cada pasillo es una tabla (clientes, productos), cada estante una fila (un cliente concreto), cada etiqueta una columna (correo, teléfono). El Excel es tu libreta en el escritorio; la base de datos es el almacén con empleados que nunca se equivocan, trabajan 24/7, y solo dejan entrar a quien tiene permiso. Si se incendia la libreta, pierdes todo; por eso el almacén hace respaldos.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>CREATE TABLE clientes (\n  id         INTEGER PRIMARY KEY,\n  nombre     TEXT,\n  correo     TEXT,\n  mes_pagado INTEGER\n);\n\nINSERT INTO clientes (id, nombre, correo, mes_pagado)\nVALUES (1, 'Ray Fernández', 'ray@ejemplo.com', 1);\n\nSELECT nombre FROM clientes WHERE mes_pagado = 1;</code></pre><p>Lee las tres frases: se crea la tabla con sus columnas y sus tipos; se inserta un cliente; se pregunta quién pagó el mes 1. Nota cómo el <code>id</code> marca a cada cliente de forma única — ese es el sistema de numeración del almacén. Y nota cómo la consulta final responde una pregunta de negocio: \"¿a quién le activo el acceso este mes?\".</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito guardar [mis datos: clientes, pedidos…]. Muéstrame cómo modelarlos en una tabla: qué columnas, qué tipo de dato en cada una, y cuál sería la clave primaria. Después dame las consultas SQL para registrar, consultar y actualizar, y dime cuáles son de solo lectura (seguras) y cuáles modifican datos.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "En una tabla de base de datos, las ____ son los campos (nombre, correo) y las ____ son cada registro.", banco: ["columnas", "filas", "puertas", "páginas"], respuestas: ["columnas", "filas"] },
              { tipo: "relacionar", pares: [["Tabla", "La hoja de datos de un tema"], ["Columna", "Un campo (ej. correo)"], ["Fila", "Un registro completo (un cliente)"], ["Clave primaria", "Identifica cada fila de forma única"]] },
              { tipo: "multiple", pregunta: "¿Por qué una base de datos es mejor que un Excel para una app real?", opciones: ["Es más bonita", "Maneja millones de filas, varios usuarios a la vez y protege los datos", "Ocupa menos internet", "No necesita servidor"], correcta: 1 },
              { tipo: "quehace", codigo: "SELECT nombre FROM clientes WHERE mes_pagado = 1;", pregunta: "<code>SELECT nombre FROM clientes WHERE mes_pagado = 1;</code> — ¿qué trae?", opciones: ["Todos los datos de todos los clientes", "Los nombres de los clientes que pagaron el mes 1", "Borra a los que no pagaron", "Actualiza el mes pagado"], correcta: 1 },
              { tipo: "vf", afirmacion: "La clave primaria (id) garantiza que cada fila se identifica de forma única.", correcta: true, explicacion: "por eso cada cliente tiene un id distinto." }
            ]
          },
          {
            id: "m1-b27",
            titulo: "Open source: el código abierto y por qué medio mundo es gratis",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>Open source</strong> (\"código abierto\") es software cuyo código fuente es público: cualquiera lo puede ver, estudiar, usar y modificar. No es lo mismo que \"gratis\" — es que el plano completo está a la vista de todos. El software de pago es un club privado: pagas para entrar, pero el plano de la casa es secreto.</p><p>La filosofía detrás: muchas manos, mejor revisado. Cuando el código es público, miles de programadores lo leen, encuentran errores y proponen arreglos. Recuerdas de A9 que Linux corre los servidores del mundo y que una de sus ventajas es ser auditable — esa es la lógica del open source funcionando.</p><p>Los ejemplos que ya usaste son la mayoría del mundo digital: <strong>Linux</strong> (A9), <strong>Python</strong> (B4), <strong>Git</strong> (tu materia del Mes 2), <strong>React</strong>, <strong>Node.js</strong>, <strong>Firefox</strong>, <strong>WordPress</strong>. La infraestructura de internet es, en su enorme mayoría, open source.</p><p>Cada proyecto define qué puedes hacer con su código mediante una <strong>licencia</strong>: la <strong>MIT</strong> es permisiva (usa y modifica casi sin restricciones), la <strong>GPL</strong> es \"contagiosa\" — si modificas y distribuyes, tu versión también debe ser abierta. Leer la licencia antes de adoptar una pieza es sentido común profesional.</p><p>Dato memorable: <strong>Linus Torvalds</strong> publicó Linux gratis en 1991, a los 21 años, con un mensaje donde decía que era \"solo un pasatiempo, nada grande\". Hoy es el sistema operativo que sostiene internet, mantenido por miles de personas que no cobran un centavo. Y sí: esta escuela misma corre sobre herramientas open source.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un <strong>parque público</strong> construido y mantenido por la comunidad: todos lo usan, cualquiera puede proponer una mejora, y los planos están en internet para quien quiera verlos. El software de pago es un club privado: puedes entrar como cliente, pero los planos de la casa son secretos y las mejoras las decide solo el dueño.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Un proyecto open source en GitHub (lo dominarás en el Mes 2):\n\nREADME.md       ← qué hace y cómo instalarlo\nLICENSE         ← MIT / Apache / GPL: qué puedes hacer con él\nsrc/            ← el código, abierto para todos\nissues/         ← los bugs y mejoras que cualquiera reporta</code></pre><p>Sin abrir un solo archivo, ese árbol de carpetas te cuenta la historia: hay documentación para humanos (README), las reglas de uso (LICENSE), el código abierto (src) y la plaza pública de reportes (issues). Cuando la IA te recomiende una librería, saber pedirle esta información te convierte en un consumidor informado.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito elegir una librería open source para [mi necesidad]. Investiga las 2-3 más populares, muéstrame qué licencia tiene cada una (MIT, Apache, GPL), qué tan activa está su comunidad y si hay reportes de bugs graves. Dime cuál me recomiendas y por qué.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "Open source significa que el código del programa es público y cualquiera puede verlo.", correcta: true, explicacion: "es más que gratis: está abierto a todos." },
              { tipo: "completar", frase: "La ____ define qué puedes hacer con el código; la licencia ____ obliga a que las versiones derivadas también sean abiertas.", banco: ["licencia", "GPL", "portada", "MIT"], respuestas: ["licencia", "GPL"] },
              { tipo: "relacionar", pares: [["Linux", "El sistema operativo abierto de los servidores"], ["Python", "Lenguaje abierto (B4)"], ["GitHub", "Donde vive el código abierto"], ["MIT", "Licencia permisiva"]] },
              { tipo: "multiple", pregunta: "¿Qué diferencia a open source de simplemente \"gratis\"?", opciones: ["El código es público y modificable", "No se puede usar en empresas", "Es más lento", "No tiene comunidad"], correcta: 0 },
              { tipo: "ordenar", instruccion: "Cómo evaluar una librería open source:", elementos: ["revisa la licencia", "mira qué tan activa está la comunidad", "busca reportes de bugs graves", "decide si conviene para tu proyecto"] }
            ]
          },
          {
            id: "m1-b28",
            titulo: "Leer código I: descifrar un archivo JavaScript simple (con IA de copiloto)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya tienes el vocabulario: variables (B9), tipos (B10), condicionales (B11), ciclos (B12), funciones (B13-B14), listas (B15) y objetos (B16). Ahora la práctica de todo director de IA: <strong>leer un archivo JavaScript completo sin entrar en pánico</strong>.</p><p>La estrategia es la de un detective, no la de un memorizador. <strong>Primera leída</strong>: busca las funciones y lee sus nombres — los nombres cuentan la historia (\"si se llama <code>calcularTotal</code>, ya sé qué hace\"). <strong>Segunda</strong>: sigue los datos — de dónde salen las variables, qué se guarda y qué se muestra. <strong>Tercera</strong>: identifica los condicionales y los ciclos — dónde decide el programa y dónde repite. Esas tres pasadas te dan el mapa.</p><p>Y cuando algo no cuadre, entra tu superpoder: la <strong>IA de copiloto</strong> (lo entrenas en C27). No es hacer trampa: es exactamente lo que hacen los programadores profesionales en 2026. Le pegas el archivo y le pides \"explica esta función\", \"qué hace la línea 20\", \"¿por qué hay un while aquí?\". Leer con copiloto es leer el doble de rápido con el doble de entendimiento.</p><p>La clave mental: no necesitas entender TODA la sintaxis. Necesitas entender la <strong>historia</strong>: qué datos entran, qué se decide, qué sale. El resto son detalles que la IA te aclara cuando se lo preguntas.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Leer una <strong>receta de otro cocinero</strong>: primero lees los nombres de los platillos (las funciones), luego los ingredientes (las variables), luego las instrucciones (la lógica). Y cuando no entiendes un paso, le preguntas al cocinero que la escribió. Tu copiloto es ese cocinero: siempre está disponible, nunca se molesta por la pregunta obvia, y te lo explica las veces que haga falta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>const PRECIO_ENVIO = 120;\n\nfunction calcularSubtotal(productos) {\n  let suma = 0;\n  for (let i = 0; i &lt; productos.length; i++) {\n    suma = suma + productos[i].precio;\n  }\n  return suma;\n}\n\nfunction calcularTotal(productos, envioGratis) {\n  const subtotal = calcularSubtotal(productos);\n  if (envioGratis === true) {\n    return subtotal;\n  }\n  return subtotal + PRECIO_ENVIO;\n}</code></pre><p>Aplica las tres pasadas: hay dos funciones con nombres que lo dicen todo — una suma precios, otra decide sobre el envío. Hay un dato fijo (<code>PRECIO_ENVIO</code>), un ciclo (recorre la lista) y un condicional (si el envío es gratis, no lo suma). Sin saber cada detalle de sintaxis, ya puedes contarle a alguien qué hace este archivo. Eso es leer código.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a pegarte el código de mi proyecto. Actúa como mi copiloto: primero dime en una tabla qué funciones existen y qué hace cada una en una línea; después señala las líneas que NO entiendo (te las pego debajo) y explícamelas como a un colega, no como a un manual.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Estrategia para leer código:", elementos: ["busca las funciones y sus nombres", "sigue los datos y las variables", "identifica condicionales y ciclos", "pregúntale a la IA lo que no cuadre"] },
              { tipo: "completar", frase: "Los ____ de las funciones cuentan la historia: si una se llama <code>calcularTotal</code>, ya sabes qué hace.", banco: ["nombres", "colores", "llaves", "comas"], respuestas: ["nombres"] },
              { tipo: "multiple", pregunta: "<code>calcularSubtotal(productos)</code> — leyendo solo el nombre, ¿qué esperas que haga?", opciones: ["Borrar los productos", "Sumar los precios de los productos", "Guardar en la base de datos", "Mandar un correo"], correcta: 1 },
              { tipo: "quehace", codigo: "calcularTotal(productos, true)", pregunta: "En la función <code>calcularTotal</code> de la lección, si <code>envioGratis</code> es <code>true</code>, ¿qué devuelve?", opciones: ["El subtotal más el envío", "Solo el subtotal, sin envío", "Un error", "Solo el precio del envío"], correcta: 1 },
              { tipo: "vf", afirmacion: "Pegar el código a la IA para que te lo explique es hacer trampa.", correcta: false, explicacion: "es el método profesional: la IA es tu copiloto de lectura." }
            ]
          },
          {
            id: "m1-b29",
            titulo: "Leer código II: descifrar un HTML + CSS real",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Con JavaScript ya puedes leer la lógica de una app. Ahora falta la mitad visual: <strong>HTML + CSS</strong>, los otros dos de la trinidad de la web (B7, B8). Y se leen con una estrategia distinta, porque son otro tipo de archivo.</p><p><strong>Leer HTML es de afuera hacia adentro.</strong> El <code>&lt;html&gt;</code> envuelve todo; dentro, <code>&lt;head&gt;</code> (metadatos) y <code>&lt;body&gt;</code> (lo visible). Las etiquetas se <strong>anidan</strong> como muñecas rusas: un <code>&lt;div&gt;</code> adentro de otro. La regla de oro: todo lo que abres lo cierras. Y cada elemento puede llevar <strong>atributos</strong> — los dos que más verás son <code>class</code> y <code>id</code>: son las manijas que conectan el HTML con el CSS.</p><p><strong>Leer CSS es identificar selectores.</strong> Un selector dice A QUÉ le aplicas estilos: <code>h1</code> (la etiqueta), <code>.tarjeta</code> (todos los que tengan <code>class=\"tarjeta\"</code>), <code>#boton-pagar</code> (el único con ese <code>id</code>). Entre llaves, los estilos: <code>{ color: red; padding: 12px; }</code>. Eso se lee: \"a todos los elementos de la clase tarjeta, píntalos rojo y dales 12 píxeles de relleno\".</p><p>Cuando la IA te arme una página, el HTML será el armazón y el CSS el look. Cuando le pidas \"haz la tarjeta de precios más grande\", ella buscará la clase <code>.precio</code> y la estilizará. Tú solo necesitas saber que esa conexión existe: <code>class</code> en HTML ↔ <code>.clase</code> en CSS. Es el puente de dos archivos que se hablan entre sí.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>HTML es el <strong>plano del arquitecto</strong>: cada habitación es una etiqueta, y las habitaciones anidadas (la recámara adentro del pasillo, el pasillo adentro de la casa) son la estructura. CSS es la <strong>carta de acabados</strong>: \"las recámaras en beige, los pisos de madera, las puertas altas\". Dos documentos distintos, dos trabajos distintos — y el plano usa las etiquetas (las clases) para decirle a la carta de acabados qué habitación es cuál.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>&lt;div class=\"tarjeta\"&gt;\n  &lt;h1 class=\"titulo\"&gt;Curso de Python&lt;/h1&gt;\n  &lt;p class=\"precio\"&gt;$7,000&lt;/p&gt;\n  &lt;button class=\"boton\" id=\"boton-comprar\"&gt;Comprar&lt;/button&gt;\n&lt;/div&gt;\n\n/* CSS */\n.tarjeta {\n  border: 1px solid #ccc;\n  border-radius: 12px;\n  padding: 24px;\n}\n.titulo { color: #7c3aed; }\n.boton {\n  background: #22c55e;\n  color: white;\n  border: none;\n}</code></pre><p>Lee la pareja: una tarjeta que contiene un título, un precio y un botón. El CSS le da borde redondeado a la tarjeta, morado al título y verde al botón. Fíjate cómo las clases del HTML (<code>.tarjeta</code>, <code>.titulo</code>, <code>.boton</code>) son exactamente los selectores del CSS. Sin esa conexión, los estilos no encuentran su elemento.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a pegarte mi HTML y mi CSS. Hazme un mapa: qué etiquetas están anidadas dentro de qué, qué clases usa cada elemento, y qué regla CSS aplica a cada clase. Si hay un elemento sin clase ni id, dímelo — sería difícil de estilizar.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["HTML", "La estructura (el plano)"], ["CSS", "Los estilos (la carta de acabados)"], [".clase", "Manija para estilizar varios elementos"], ["#id", "Manija única para un elemento"]] },
              { tipo: "completar", frase: "En HTML las etiquetas se ____ como muñecas rusas, y todo lo que abres debes ____.", banco: ["anidan", "cerrar", "pintar", "borrar"], respuestas: ["anidan", "cerrar"] },
              { tipo: "multiple", pregunta: "¿A qué elementos afecta la regla <code>.tarjeta { color: red; }</code>?", opciones: ["A todos los <p> de la página", "A todos los que tengan class=\"tarjeta\"", "Al primer elemento de la página", "A ningún elemento"], correcta: 1 },
              { tipo: "quehace", codigo: "<p class=\"precio\">$7,000</p>", pregunta: "Con <code>.precio { color: green; }</code>, ¿cómo se ve el precio?", opciones: ["Rojo", "Verde", "Sin estilo", "Se borra de la página"], correcta: 1 },
              { tipo: "vf", afirmacion: "El CSS siempre se escribe dentro del HTML, en la misma línea, sin archivos aparte.", correcta: false, explicacion: "normalmente vive en un archivo .css aparte (B8)." }
            ]
          },
          {
            id: "m1-b30",
            titulo: "Repaso integrador del Idioma (mega-quiz jugable)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cierra los ojos y mira todo lo que ya sabes leer. Hace 29 lecciones no sabías nada de esto; hoy reconoces las piezas del software como quien reconoce las herramientas de un taller. Ese es el verdadero logro del mes: no memorizaste código, <strong>aprendiste a reconocer</strong>.</p><p>Tu mapa mental de este mes:</p><ul><li><strong>Leer datos:</strong> variables (B9), tipos (B10), listas (B15), objetos (B16), JSON (B17)</li><li><strong>Leer lógica:</strong> condicionales (B11), ciclos (B12), funciones (B13-B14)</li><li><strong>Leer apps:</strong> las tres capas (B23), API (B25), bases de datos (B26)</li><li><strong>Leer mundos:</strong> lenguajes (B2-B6), HTML/CSS (B7-B8), librerías y frameworks (B22), open source (B27)</li><li><strong>Leer errores:</strong> mensajes (B19), tipos de error (B20), bugs (B21), comentarios (B18)</li></ul><p>Si hoy leyeras un archivo real de una app, podrías decir: aquí hay una variable, aquí decide, aquí repite, aquí guarda, y esto viaja como JSON. Hace un mes eso era griego. La Materia C ya viene: en ella construirás tu primera página dirigiendo a la IA — y cada concepto de este idioma te servirá para leer lo que ella produzca y corregirlo con criterio.</p><p>El quiz de esta lección es el ensayo general: no enseña nada nuevo, te dice dónde estás parado ANTES del escenario. Ve a por él.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El <strong>ensayo general antes del concierto</strong>: no aprendes canciones nuevas — repasas el setlist, descubres qué partes te fallan y las pules ANTES de que haya público. Ese es el papel de esta lección: detectar los huecos del idioma antes de la Materia C, donde vas a construir de verdad.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>MAPA DEL IDIOMA — MES 1\n\nLeer datos:   variables (B9) · tipos (B10) · listas (B15) · objetos (B16) · JSON (B17)\nLeer lógica:  if/else (B11) · ciclos (B12) · funciones (B13-B14)\nLeer apps:    frontend/backend/BD (B23) · API (B25) · BD (B26)\nLeer mundos:  lenguajes (B2-B6) · HTML/CSS (B7-B8) · librerías (B22) · open source (B27)\nLeer errores: mensajes (B19) · tipos (B20) · bugs (B21) · comentarios (B18)</code></pre><p>Ese es tu mapa de referencia. Si algo se te olvida, el mapa te lleva directo a la lección. Eso es lo que te llevas del mes: un idioma completo, un mapa de dónde está cada concepto, y la seguridad de que los puedes volver a consultar las veces que quieras. Nadie lee un idioma de memoria — lo lee porque lo reconoce.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Soy estudiante del Mes 1 de un programa donde aprendí a leer código, no a escribirlo. Hazme un examen de autoevaluación de 10 preguntas sobre: variables, tipos de datos, condicionales, ciclos, funciones, JSON, APIs, bases de datos y lectura de código. Corrígeme cada respuesta, explícame por qué fallé cuando falle, y al final dime en qué 2 temas debo repasar.\"</p></blockquote><p>Ese es tu prompt de autoevaluación: la IA te examina, te corrige con explicación, y te da un diagnóstico accionable. Los temas que te marque son exactamente las lecciones que debes releer antes de seguir.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué describe mejor a una computadora?", opciones: ["Inteligente y creativa", "Obediente y literal: hace lo que le dices, no lo que quisiste decir", "Rápida pero impredecible", "Lenta y tonta"], correcta: 1 },
              { tipo: "completar", frase: "En la era de la IA, la IA ____ el código y tú lo ____, lo ____ y lo corriges.", banco: ["escribe", "lees", "verificas", "memorizas"], respuestas: ["escribe", "lees", "verificas"] },
              { tipo: "relacionar", pares: [["Variable", "B9"], ["Condicionales (if/else)", "B11"], ["JSON", "B17"], ["API", "B25"]] },
              { tipo: "vf", afirmacion: "Java y JavaScript son versiones del mismo lenguaje.", correcta: false, explicacion: "solo comparten el nombre por marketing (B6)." },
              { tipo: "quehace", codigo: "for (let i = 0; i < 3; i++) { console.log(i); }", pregunta: "<code>for (let i = 0; i &lt; 3; i++) { console.log(i); }</code> — ¿qué imprime?", opciones: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "Nada, es un error"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Flujo para construir una app dirigiendo IA:", elementos: ["describe qué quieres en palabras", "pídele el código a la IA", "lee y verifica cada parte", "corrige iterando la conversación", "prueba que funcione"] },
              { tipo: "multiple", pregunta: "La página muestra los precios mal: resta en vez de sumar, pero no da ningún error. ¿Qué tipo de error es?", opciones: ["De sintaxis", "De lógica", "De runtime", "De red"], correcta: 1 },
              { tipo: "vf", afirmacion: "Un mensaje de error es una pista: casi siempre dice el archivo, la línea y qué no entendió.", correcta: true, explicacion: "y por eso se lo pegas completo a la IA (B19)." }
            ]
          }
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
          {
            id: "m1-c11",
            titulo: "PRÁCTICA: agregar una sección con imagen",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hoy tu página de <strong>Tortas El Güero</strong> gana músculo: vas a agregar una sección con imagen. Las imágenes hacen que una landing page deje de verse como \"tarea\" y se vea como negocio — y son de las cosas más fáciles de dirigir con IA si entiendes una idea: para el navegador, una imagen no es \"un dibujito\", es <strong>un archivo que vive en una carpeta</strong>.</p><p>La etiqueta que inserta imágenes es <code>&lt;img&gt;</code>, y necesita dos atributos que son su vida y su palabra: <code>src</code> (la ruta: dónde está tu imagen) y <code>alt</code> (un texto que la describe para cuando no carga o para lectores de pantalla). Si <code>src</code> apunta a un archivo que no existe, el navegador no adivina — muestra un cuadro vacío.</p><p>Reglas de la imagen (recuerda C10): el archivo debe vivir <strong>dentro de tu carpeta de proyecto</strong> — si le pides a la IA una imagen \"del internet\", dependerás de un enlace ajeno que puede morir. Nombres sin espacios, sin acentos, en minúsculas: <code>torta-del-dia.jpg</code>, no <code>Torta Del Día.JPG</code>. Y la ruta que usas en <code>src</code> se escribe relativa al archivo <code>index.html</code>.</p><p>Hoy la imagen la eliges tú: descarga una foto libre de uso (por ejemplo de Unsplash) o usa una propia. Guárdala en <code>mi-primera-pagina</code> con un nombre limpio, y deja que la IA haga el resto. Al terminar, tu página va a sentirse, por fin, de verdad.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Una imagen en tu página es como el <strong>cuadro enmarcado de tu tienda</strong>: si la foto está en el cuarto de atrás (la carpeta correcta), se cuelga y se ve. Si la pierdes o la mueves, el marco se queda vacío. El navegador no va a buscar la foto por ti — tú le dices exactamente en qué cuarto está, y si la pista está mal, el marco queda vacío.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Pasos, secos:</p><ol><li><strong>Consigue una imagen</strong>: descarga una foto libre de uso o usa una propia.</li><li><strong>Guárdala</strong> dentro de <code>mi-primera-pagina</code> como <code>torta-del-dia.jpg</code> (reglas de C10: sin espacios, sin acentos, minúsculas).</li><li><strong>Vuelve al chat</strong> donde creaste la página (el contexto sigue vivo, C4) y pide:</li></ol><pre><code>Objetivo: Agrega a la página una sección \"Nuestras tortas\" con la\nimagen del archivo torta-del-dia.jpg (está en la misma carpeta\nque index.html). Quiero la imagen redonda con borde amarillo, el\ntexto a su lado en computadora y debajo de ella en celular.\nFormato: Dame el index.html completo actualizado.</code></pre><ol start=\"4\"><li><strong>Pega, guarda y refresca</strong> (F5).</li><li><strong>Prueba a fondo</strong>: renombra temporalmente la imagen y refresca — verás el cuadro vacío. Ese es el poder de <code>src</code>: la página no recuerda tu imagen, la busca donde dice el atributo.</li></ol>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>Antes de que la IA escriba el código, que te confirme el trato de las carpetas:</p><blockquote><p>\"Voy a agregar una imagen a mi página. Tengo el archivo en la misma carpeta que index.html. Antes de escribir código, dime: qué nombre y qué ruta debo usar para que la imagen cargue al abrir la página desde mi computadora.\"</p></blockquote><p>Esa pregunta te ahorra el clásico \"no se ve tu imagen\", que casi siempre sale de no cuidar la carpeta.</p>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "La etiqueta que inserta imágenes es <code>&lt;img&gt;</code> y necesita dos atributos: ____ (dónde está el archivo) y ____ (el texto que describe la imagen si no carga).", banco: ["src", "alt", "href", "title"], respuestas: ["src", "alt"] },
              { tipo: "vf", afirmacion: "Si el archivo de la imagen no está en la ruta que dice src, el navegador muestra un cuadro vacío.", correcta: true, explicacion: "el navegador no adivina dónde está la imagen: si la ruta no existe, la imagen no se muestra." },
              { tipo: "multiple", pregunta: "¿Cuál es el mejor nombre de archivo para la imagen de tu página?", opciones: ["Torta Del Día.jpg", "torta-del-dia.jpg", "torta del dia.jpg", "TortaDelDía.JPG"], correcta: 1 },
              { tipo: "relacionar", pares: [["src", "Dónde está el archivo de la imagen"], ["alt", "Texto alternativo si la imagen no carga"], ["img", "La etiqueta que inserta la imagen"]] },
              { tipo: "quehace", codigo: "<img src=\"torta-del-dia.jpg\" alt=\"Torta cubana recién hecha\">", pregunta: "Abres la página desde una carpeta donde NO está torta-del-dia.jpg. ¿Qué verás?", opciones: ["La imagen más grande", "Un cuadro roto o vacío, porque el navegador no encuentra el archivo en esa ruta", "La imagen se descarga automáticamente", "La página no abre"], correcta: 1 }
            ]
          },
          {
            id: "m1-c12",
            titulo: "Cuando la IA se equivoca: el arte de pedir correcciones",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Vamos a ser honestos: aunque tu prompt sea perfecto (C6), <strong>la IA se va a equivocar</strong>. Código que truena, estilos que no van, lógica que se le escapa. Eso no significa que dirijas mal — significa que estás en el mundo real. La habilidad profesional no es evitar los errores: es <strong>corregirlos rápido</strong>.</p><p>El error más caro no lo comete la IA, lo cometes tú: reportar \"no funciona\". Esa frase no le dice nada. El reporte profesional tiene 4 piezas (la versión diagnóstica del prompt de C3): <strong>1) qué pediste que hiciera, 2) qué hace en realidad, 3) qué esperabas que hiciera, 4) el código o el mensaje de error exacto.</strong></p><p>Segundo: corrige <strong>en la misma conversación</strong>. La IA todavía tiene el contexto (C4); describirle el proyecto otra vez desde cero es botar contexto a la basura. Solo abres conversación nueva si la anterior se saturó o si el error viene de un giro total de tema.</p><p>Tercero: no confundas corregir con regañar. Regañar gasta tokens y no arregla nada. Un buen reporte vale más que mil reclamos: con él, la IA no \"intenta de nuevo\" — diagnostica y te da el cambio mínimo. Y si quieres cerrar el círculo, pídele que te explique por qué fallaba: esa explicación es tu aprendizaje gratis (C8).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Reportar un error a la IA es como <strong>regresar el coche al mecánico</strong>: llegar y decir \"no funciona\" es abrir el cofre sin palabras; decir \"frena raro, hace un ruidito y huele a quemado al enfriar\" es ahorrarle media hora de diagnóstico. Mismo taller, mismo mecánico — la diferencia está en el reporte. La IA es tu mecánica de primera; llégale con el síntoma bien contado.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El antes y el después de un reporte:</p><pre><code>Mal:\nTú:  \"No funciona, arréglalo.\"\nIA:  \"¿Qué no funciona exactamente? ¿Qué esperabas que pasara?\"\n\nBien:\nTú:  \"El botón de WhatsApp no hace nada. Esperaba que se abriera\n     el chat con el 55-1234-5678. Aquí está mi index.html [pega].\"\nIA:  \"El enlace dice href=\"https://wa.me/\" sin número. Cambia la\n     línea 12 por href=\"https://wa.me/5215512345678\". Listo.\"</code></pre><p>Segundo mensaje: 30 segundos. Reporte claro, diagnóstico en un tiro. Así se corrige en serio.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>El formato del reporte que la IA agradece:</p><blockquote><p>\"Este es el código que me diste y esto pasa al ejecutarlo: [pega el mensaje de error o describe el síntoma exacto]. ¿Cuál es la causa más probable y cuál es el cambio MÍNIMO para corregirla?\"</p></blockquote><p>Con \"cambio mínimo\" evitas que la IA reescriba media página por un typo.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Reportas un error y escribes solo \"no funciona\". ¿Qué está pasando?", opciones: ["Estás reportando como un profesional", "El reporte es demasiado vago: la IA no tiene cómo saber qué falla", "Haces que la IA reinicie su memoria", "Esa frase hace que la IA lo sepa todo automáticamente"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Acomoda las 4 piezas del reporte de error profesional:", elementos: ["qué pediste que hiciera", "qué hace en realidad", "qué esperabas que hiciera", "pega el código o el mensaje de error exacto"] },
              { tipo: "completar", frase: "Corrige en la misma ____ (C4): abrir una nueva y describir todo otra vez es botar contexto a la basura.", banco: ["conversación", "carpeta", "página", "computadora"], respuestas: ["conversación"] },
              { tipo: "vf", afirmacion: "Regañar a la IA cuando se equivoca es una estrategia efectiva para corregirla.", correcta: false, explicacion: "regañar no arregla nada; un reporte con síntoma, código y comportamiento esperado sí." },
              { tipo: "quehace", codigo: "\"El botón de WhatsApp no hace nada. Aquí está mi index.html [pega]. Esperaba que abriera el chat con el 55-1234-5678.\"", pregunta: "¿Qué estás haciendo bien en este reporte?", opciones: ["Describes el síntoma, das el código y el comportamiento esperado", "Estás regañando a la IA", "Estás pidiendo un rediseño", "Estás ahorrando contexto a propósito"], correcta: 0 }
            ]
          },
          {
            id: "m1-c13",
            titulo: "Iterar: la conversación como herramienta de construcción",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En C9 descubriste el loop pedir → pegar → refrescar. Hoy le subimos el nivel: <strong>la conversación misma es tu herramienta de construcción</strong>. No escribes código a mano ni pegas bloques mágicos — construyes con la sucesión de mensajes, y cada turno es una iteración de tu obra.</p><p>El amateur cree que el trabajo es lograr que la IA acierte a la primera. El constructor sabe que <strong>la primera versión es solo el borrador</strong>. Lo valioso es la racha: versión 1 rápida → feedback concreto → probar → versión 2. La IA volvió casi gratis el iterar: antes, cada intento costaba tiempo y dinero; hoy, cada vuelta cuesta 30 segundos de tu atención.</p><p>Tres movimientos del iterador profesional: <strong>1) Suelta la versión 1 rápido</strong> — no pulas el prompt buscando la perfección; <strong>2) Da feedback concreto y atómico</strong> — un cambio a la vez y medible (\"el título se ve chico\" vale más que \"hazlo más bonito\"); <strong>3) Prueba de verdad</strong> — refresca, haz clic, arrastra la ventana. Quien no prueba, no itera: \"me suena bien\" no es una prueba.</p><p>Y no solo iteras el código: itera también <strong>tus instrucciones</strong>. Si la IA te entrega algo distinto de lo que imaginabas, no es fracaso — es feedback para tu prompt. Ajusta, describe más y vuelve a lanzar. Cada iteración malentendida te enseña cómo pedir mejor, y eso es exactamente lo que estás aquí para aprender.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Construir con IA es <strong>esculpir en barro, no en mármol</strong>. El marmolista tiene una sola pieza y no puede equivocarse; el que trabaja barro da forma, quita, agrega y vuelve a dar forma — y cada mano que mueve es un mensaje de tu conversación. Tu conversación son las manos: el barro nunca se acaba, y la obra se decide en la suma de pequeños movimientos, no en un golpe de genio.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Una iteración bien dirigida:</p><pre><code>Tú:  \"Tengo mi página lista. Dime 3 cosas que mejorarías antes\n     de que yo pida cambios.\"\nIA:  \"1) El título compite con la imagen. 2) Los precios no\n     contrastan con el fondo. 3) El botón se pega al borde en\n     celular.\"\nTú:  \"Corrige las 3, una a la vez. Después de cada cambio dime\n     qué probar en el navegador.\"\nIA:  \"Cambio 1 de 3 listo: título más chico y con respiro. Prueba:\n     refresca y mira si la imagen ya respira. Sigo con el 2.\"</code></pre><p>Fíjate: tú no escribiste nada de código. Dirigiste — pediste un diagnóstico, marcaste el ritmo (una a la vez) y exigiste pruebas. Eso es construcción, y es tuya.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>El acuerdo de trabajo por iteraciones:</p><blockquote><p>\"Vamos a trabajar por iteraciones. Dame la versión 1 completa ahora. Después de cada iteración, dime en una línea qué mejorarías y yo decido si aplicarlo. No reescribas el archivo completo si el cambio son pocas líneas: muéstrame solo las líneas que cambian.\"</p></blockquote><p>Esa última instrucción también es dirección: te ahorra leer 200 líneas idénticas por un typo.</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El ciclo del iterador profesional:", elementos: ["sacar la versión 1 rápido", "dar feedback concreto (un cambio a la vez)", "pegar, guardar y refrescar", "probar de verdad y pedir la siguiente mejora"] },
              { tipo: "multiple", pregunta: "¿Cuál es el corazón de construir software con IA?", opciones: ["Escribir el prompt perfecto a la primera", "La conversación: iterar versión tras versión", "Memorizar HTML", "Copiar código de internet"], correcta: 1 },
              { tipo: "completar", frase: "La IA volvió casi gratis el ____: ya no necesitas acertar a la primera, necesitas ____ rápido y aprender del resultado.", banco: ["iterar", "probar", "diseñar", "pagar"], respuestas: ["iterar", "probar"] },
              { tipo: "vf", afirmacion: "Un buen constructor pule su prompt hasta lograr la versión perfecta antes de generar nada.", correcta: false, explicacion: "primero sueltas una versión rápida y la mejoras iterando; la perfección no llega planificando sin fin." },
              { tipo: "relacionar", pares: [["El título se ve chico", "Iteración visual"], ["El botón no abre WhatsApp", "Iteración funcional"], ["Los precios no contrastan", "Iteración de legibilidad"]] }
            ]
          },
          {
            id: "m1-c14",
            titulo: "PRÁCTICA: hacer tu página responsive (que se vea bien en celular)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>Responsive</strong> significa que tu página se adapta al tamaño de la pantalla: se ve bien en una computadora de 24 pulgadas y en un celular de 15 centímetros. No es diseño bonito — es <strong>cuestión de supervivencia</strong>: la mayoría de la gente visita landing pages de negocios desde el teléfono, y el que ve tu página rota, se va.</p><p>Las dos piezas técnicas que hacen el trabajo (pídele a la IA que te las muestre, C8): <strong>el meta viewport</strong> — una línea en el <code>&lt;head&gt;</code> que le dice al celular \"usa mi ancho real, no finjas ser una pantalla gigante\" — y las <strong>media queries</strong>: reglas CSS que se activan según el ancho de la pantalla, como \"si mide menos de 600px, apila estos elementos\".</p><p>Lo importante no es memorizarlas, es <strong>probarlas</strong>. Tu navegador tiene un simulador de celular gratis: presiona <strong>F12</strong>, activa el icono de dispositivo (un rectángulo con pantalla) y arrastra el ancho. Ahí ves en vivo dónde se rompe tu página: texto cortado, botón chiquito, imagen desbordada.</p><p>Los pasos: <strong>1)</strong> abre tu página y ponla en modo dispositivo; <strong>2)</strong> anota qué se ve mal en ancho de celular; <strong>3)</strong> pídele a la IA que lo arregle con media queries (prompt abajo); <strong>4)</strong> pega, guarda y refresca en modo dispositivo; <strong>5)</strong> arrastra el ancho de chico a grande y confirma que nada se rompe. En C16, cuando publiques, repetirás la prueba en tu celular de verdad.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Una página responsive es como un <strong>mesero que reacomoda la mesa según quién llega</strong>: en mesa grande sirve con todo extendido; en barra chica apila la misma comida para que quepa sin caerse. El menú no cambia — cambia el acomodo. Tu página es el mesero: mismo contenido, acomodo distinto según la pantalla.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El prompt para volverla responsive:</p><pre><code>Objetivo: Haz mi página responsive. En celular (menos de 600px):\n- La imagen y el texto se apilan uno debajo del otro\n- Los productos se leen sin hacer zoom\n- El botón de WhatsApp ocupa todo el ancho y se toca fácil\nRestricciones: No cambies colores ni textos. Usa media queries.\nFormato: Dame el index.html completo actualizado.</code></pre><p>Y el ritual de prueba, siempre el mismo: pega, guarda, abre F12, activa el icono de celular y refresca. Arrastra el ancho de 360px (celular chico) a 1400px (computadora) y mira cómo todo se reacomoda solo. Cuando nada se corte ni se desborde, está responsive.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Explícame qué hace responsive a una página: qué es el meta viewport, qué es una media query y cómo verifico en mi navegador que se ve bien en celular. Después dime si mi página cumple con eso y qué le falta.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["meta viewport", "Le dice al celular que use su ancho real"], ["media query", "Reglas CSS que cambian según el tamaño de pantalla"], ["device toolbar (F12)", "Simula una pantalla de celular en tu navegador"]] },
              { tipo: "vf", afirmacion: "Una página responsive se ve bien en computadora y en celular.", correcta: true, explicacion: "ese es exactamente su objetivo: adaptarse al tamaño de la pantalla." },
              { tipo: "multiple", pregunta: "¿Cómo compruebas que tu página se ve bien en celular antes de publicarla?", opciones: ["Compras un teléfono por cada pantalla", "Abres F12, activas el icono de dispositivo y arrastras el ancho", "Le preguntas a la IA si se ve bien", "Cambias el color de fondo"], correcta: 1 },
              { tipo: "completar", frase: "Las reglas CSS que se activan según el ancho de pantalla se llaman ____ ____, y el ancho donde cambian se llama breakpoint.", banco: ["media", "queries", "pixeles", "estilos"], respuestas: ["media", "queries"] },
              { tipo: "quehace", codigo: "@media (max-width: 600px) { .productos { flex-direction: column; } }", pregunta: "Tus clientes ven tu página en celulares chicos. ¿Qué logra esta regla?", opciones: ["Oculta la página en celulares", "Apila los productos en columna cuando la pantalla mide menos de 600px", "Agranda los precios", "Desactiva el botón de WhatsApp"], correcta: 1 }
            ]
          },
          {
            id: "m1-c15",
            titulo: "Publicar I: qué es hosting y qué opciones existen",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu página existe en tu computadora — y solo ahí. Cuando la abres, la dirección del navegador dice algo como <code>file:///.../index.html</code>: un archivo local que ves tú y nadie más. Para que el mundo la vea, necesita un <strong>hosting</strong>: un servidor, una computadora profesional que está <strong>encendida 24/7</strong>, conectada a internet, que entrega tu página a cualquiera que pida su dirección.</p><p>El hosting es el alquiler del espacio. Opciones de hoy, sin rodeos: <strong>Netlify</strong> (gratis para lo que construimos; publicas arrastrando una carpeta — es tu herramienta, la usas en C16), <strong>GitHub Pages</strong> (gratis, pero conectado a Git, que es materia de Mes 2) y <strong>hosting de pago</strong> (cPanel y similares: más potencia, pero la necesitas hasta que tengas bases de datos y servidores propios, Mes 6+). Para una landing page de HTML puro, Netlify gratis sobra y alcanza.</p><p>Tu página subida recibe una URL automática tipo <code>tus-tortas.netlify.app</code>. Eso ya es publicarte. Un <strong>dominio propio</strong> (<code>tortaselguero.com</code>) es la versión \"con letrero bonito\": se compra (~$10-15 al año, verifica precios actuales — C5) y se conecta después. Hoy no lo necesitas; lo que sí necesitas es dejar de ser invisible.</p><p>La diferencia mental que te separa del \"solo tengo mi archivo\": tu página local es un boceto; tu página publicada es el negocio abierto. En C16 harás el paso — Netlify Drop, arrastras la carpeta <code>mi-primera-pagina</code> y listo. Hoy entiendes qué estás haciendo y por qué.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu computadora es tu <strong>sala</strong>: muestras tu producto ahí y solo lo ve quien entra a tu casa. Hosting es <strong>rentar local en la calle principal</strong>: tu producto se exhibe todo el día, todos los días, aunque tú duermas. Netlify (gratis) es el local de barrio que alcanza para lo que vendes hoy; el hosting de pago es el de plaza comercial, para cuando vendas en grande.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El mapa mental de \"publicar\":</p><pre><code>Antes (solo tú):\n  index.html → tu computadora → file:///... → SOLO TÚ\n\nDespués (publicada, C16):\n  mi-primera-pagina/ → arrastras la carpeta a Netlify Drop\n  → https://tus-tortas.netlify.app → CUALQUIERA CON EL LINK\n\nOpciones de hosting (resumen):\n  Netlify Drop ..... gratis · arrastrar y soltar · HTML/CSS/JS puro\n  GitHub Pages ..... gratis · con cuenta de GitHub · enlaza en Mes 2\n  Hosting de pago .. costo mensual · más potencia · para Mes 6+</code></pre><p>Ese mapa responde la pregunta de siempre: \"¿mi página ya está en internet?\" Estará el día que la subas a un hosting. Ese día es C16.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero publicar una página estática hecha solo con HTML y CSS. Compárame las opciones gratuitas (Netlify y GitHub Pages): qué necesito para cada una, qué URL obtengo y qué límites tienen. Verifica los precios actuales en sus páginas oficiales antes de responder.\"</p></blockquote><p>La última frase es tu protocolo anti-alucinación de C5 aplicado a una decisión real.</p>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Netlify Drop", "Gratis, arrastras tu carpeta, URL .netlify.app"], ["GitHub Pages", "Gratis con cuenta de GitHub, URL .github.io"], ["Hosting de pago", "Más potencia, cuesta dinero, para proyectos grandes"]] },
              { tipo: "vf", afirmacion: "Mientras tu página esté solo en tu computadora, nadie más puede verla desde internet.", correcta: true, explicacion: "tu computadora no es un servidor público; el hosting es lo que la conecta con el mundo." },
              { tipo: "multiple", pregunta: "¿Qué es un servidor (hosting)?", opciones: ["Un antivirus que protege tu página", "Una computadora encendida 24/7 que entrega tu página a quien pide su URL", "Un disco duro externo", "Un programa de diseño"], correcta: 1 },
              { tipo: "completar", frase: "Tu página necesita un ____ que la entregue a cualquier ____ que pida su ____.", banco: ["servidor", "navegador", "URL", "color"], respuestas: ["servidor", "navegador", "URL"] },
              { tipo: "quehace", codigo: "\"Oye primo, ya subí mi página\" (le mandaste el archivo index.html por WhatsApp)", pregunta: "Tu primo abre el archivo y NO ve tu página, solo el código. ¿Por qué?", opciones: ["Porque HTML no se puede compartir", "Porque el archivo es solo tu boceto local: sin hosting no hay página pública", "Porque WhatsApp borra los archivos .html", "Porque a tu primo le falta internet"], correcta: 1 }
            ]
          },
          {
            id: "m1-c16",
            titulo: "PRÁCTICA: Netlify Drop — tu página EN VIVO en internet",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hoy ocurre lo que en C15 quedó pendiente: tu página deja de ser un boceto en tu computadora y se vuelve <strong>pública</strong>. La herramienta es <strong>Netlify Drop</strong>: un servicio gratuito que sube tu carpeta a un servidor (una computadora profesional encendida 24/7) y te regresa una <strong>URL</strong> que cualquiera en el mundo puede abrir.</p><p>Lo genial de Netlify Drop es que no hay terminales ni cuentas complicadas: <strong>arrastras y sueltas tu carpeta en el navegador</strong> y Netlify hace el resto. En segundos te da una dirección tipo <code>nombre-aleatorio.netlify.app</code>. Y puedes cambiar ese nombre por uno a tu gusto (por ejemplo <code>tortas-el-guero.netlify.app</code>) sin que cueste nada.</p><p>Tres datos que importan: <strong>1)</strong> cada vez que arrastras la carpeta de nuevo, publicas una versión nueva (así sigues iterando, C13); <strong>2)</strong> lo que Netlify guarda es una <strong>copia</strong> de tus archivos — si después cambias tu <code>index.html</code> local, la página publicada no cambia hasta que arrastres otra vez; <strong>3)</strong> el plan gratuito alcanza de sobra para esto: no hay tarjeta de crédito ni letras chiquitas.</p><p>El objetivo de hoy no es subirla y ya. Es <strong>probarla en vivo</strong>: ábrela en tu celular (el simulador de C14 te preparó; hoy es de verdad), pásale el link a alguien y mírala lejos de tu pantalla. Ahí empieza el paso de invisible a <strong>en internet</strong>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tener la página solo en tu computadora era tener el anuncio guardado en el cajón. Netlify Drop es <strong>ponerlo en la cartelera del barrio</strong>: llegas con tu papel, lo entregas y el editor lo fija en un lugar visible que todo mundo puede leer desde la calle. Y como toda cartelera, si quieres corregir algo, llevas una versión nueva y se cambia. La cartelera no se actualiza sola — pero cambiar el papel toma segundos.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Pasos, en orden:</p><ol><li><strong>Abre Netlify Drop</strong>: ve a <code>app.netlify.com/drop</code> en tu navegador.</li><li><strong>Arrastra tu carpeta</strong> <code>mi-primera-pagina</code> y suéltala en el recuadro punteado. Lleva el proyecto completo: el <code>index.html</code> y la imagen (C10 y C11 te enseñaron a tenerlos juntos).</li><li><strong>Espera el deploy</strong>: Netlify sube, procesa y te entrega una URL tipo <code>nombre-aleatorio.netlify.app</code>.</li><li><strong>Renombra tu sitio</strong> (opcional y recomendado): ve a <em>Site settings</em> y cambia el nombre a algo limpio, sin espacios ni acentos (C10): <code>tortas-el-guero</code>.</li><li><strong>Ábrela en tu celular</strong>: mándate el link por WhatsApp, ábrelo y pásate por tu propia página con el dedo.</li><li><strong>Compártela</strong>: mándasela a alguien y observa su reacción. Eso es una URL pública: el mundo entra, aunque tú no estés encendido.</li></ol><pre><code>Antes:  solo tú, con file:/// en tu navegador\nAhora:  https://tortas-el-guero.netlify.app — CUALQUIERA\n\nSi algo se ve mal en el celular: corrige con la IA (C12),\nguarda, vuelve a arrastrar la carpeta y listo. El deploy\ntoma segundos.</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>Antes de publicar, que la IA haga la revisión final:</p><blockquote><p>\"Esta página va a publicarse tal cual en Netlify. Revísala como si un cliente la visitara desde su celular: ¿se ve bien?, ¿el botón de WhatsApp funciona?, ¿hay algo roto o mal escrito? Si hay algo que corregir, dime qué y cómo.\"</p></blockquote><p>Con ese feedback ajustas, vuelves a arrastrar la carpeta y publicas la versión buena. Nadie conoce la versión 1 fallida: solo queda viva la que el mundo ve.</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El orden de publicación en Netlify Drop:", elementos: ["abrir app.netlify.com/drop", "arrastrar la carpeta mi-primera-pagina", "esperar el deploy y copiar la URL", "probar la URL en tu celular"] },
              { tipo: "multiple", pregunta: "Acabas de arrastrar tu carpeta a Netlify Drop. ¿Qué pasó exactamente?", opciones: ["Se borró tu carpeta local", "Netlify subió una copia de tus archivos a un servidor y te dio una URL pública", "Tu computadora se convirtió en servidor", "Se activó una cuenta de pago automática"], correcta: 1 },
              { tipo: "completar", frase: "Después del deploy obtienes una URL pública tipo <code>tortas-el-guero</code>.netlify.____; la parte del nombre se puede ____ sin costo.", banco: ["app", "cambiar", "borrar", "pagar"], respuestas: ["app", "cambiar"] },
              { tipo: "vf", afirmacion: "Si modificas tu index.html en tu computadora, la página publicada en Netlify se actualiza sola.", correcta: false, explicacion: "Netlify guardó una copia: para publicar el cambio hay que arrastrar la carpeta otra vez." },
              { tipo: "quehace", codigo: "arrastras la carpeta mi-primera-pagina completa (index.html + la imagen) a Netlify Drop", pregunta: "¿Por qué arrastras la carpeta completa y no solo el index.html?", opciones: ["Porque Netlify cobra por archivo", "Porque la página usa la imagen (C11): sin ella el navegador muestra un cuadro vacío", "Para que la URL sea más corta", "Para que la página cargue más rápido"], correcta: 1 }
            ]
          },
          {
            id: "m1-c17",
            titulo: "Tu URL en el mundo: qué pasa por detrás cuando alguien la abre",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu página ya está en internet (C16). Hoy descubres <strong>qué pasa en los segundos entre que alguien escribe tu URL y que tu página aparece en su pantalla</strong>. Hay tres actores: tu <strong>URL</strong>, el <strong>DNS</strong> y el <strong>servidor</strong>.</p><p><strong>La URL</strong> es una dirección pensada para humanos: <code>tortas-el-guero.netlify.app</code>. Pero las computadoras no trabajan con nombres: trabajan con <strong>IP</strong>, una dirección numérica tipo <code>75.2.60.5</code>. Alguien tiene que traducir tu nombre bonito a esa IP. Ese traductor es el <strong>DNS</strong> (Domain Name System): una red mundial de directorios que sabe qué IP le corresponde a cada dominio.</p><p>El recorrido completo, resumido: <strong>1)</strong> alguien escribe tu URL; <strong>2)</strong> su navegador le pregunta al DNS dónde está <code>tortas-el-guero.netlify.app</code> y recibe la IP; <strong>3)</strong> con esa IP, el navegador hace una petición (un <strong>request</strong>) al <strong>servidor</strong> — la computadora encendida 24/7 que guarda una copia de tus archivos (C16); <strong>4)</strong> el servidor responde enviando tu <code>index.html</code>, tu CSS y tu imagen; <strong>5)</strong> el navegador dibuja la página (el <strong>render</strong>) en la pantalla. Todo eso ocurre en menos de un segundo.</p><p>Falta el candado: cuando la URL empieza con <code>https://</code>, los datos viajan <strong>cifrados</strong> — ese es el candado que ves junto a la dirección. Si alguien intercepta la conexión, no puede leer nada. Netlify te da HTTPS gratis y por default. Si algún día ves una URL <code>http://</code> (sin la s), desconfía, y en lo tuyo nunca publiques así.</p><p>Nada de esto hay que memorizar: hay que <strong>reconocerlo</strong>. El día que tu página no cargue, ya sabrás en cuál eslabón buscar: el nombre (DNS), el servidor (¿está publicada?) o tu propia conexión.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La URL es el <strong>nombre de tu negocio</strong>; el DNS es la <strong>guía de la ciudad</strong>: buscas el nombre y te da la dirección exacta; y el servidor es la <strong>bodega en esa dirección, abierta 24 horas</strong>, donde guardas una copia de tu página. No caminas calle por calle preguntando dónde está la torta — la guía te lleva directo. Y el candado de HTTPS es la <strong>puerta con cerradura</strong>: el repartidor que pasa no ve lo que llevas dentro, solo ve que hay movimiento.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El recorrido, dibujado:</p><pre><code>Tú (en tu celular):\n  escribes https://tortas-el-guero.netlify.app\n        ↓\n1. El navegador consulta al DNS:\n   cuál es la IP de tortas-el-guero.netlify.app\n        ↓\n2. El DNS responde: 75.2.60.5 (ejemplo)\n        ↓\n3. El navegador le pide al servidor de esa IP:\n   mándame tu index.html y tus archivos\n        ↓\n4. El servidor (24/7, C16) envía los archivos\n        ↓\n5. El navegador dibuja tu página (render)\n   y muestra el candado de HTTPS</code></pre><p>Haz la prueba: abre la URL de C16, haz clic en el candado junto a la dirección y revisa que la conexión esté segura. Ese candado es tu página diciendo que sus datos viajan cerrados — gratis y por default en Netlify.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>Si quieres el recorrido a la medida de tu página:</p><blockquote><p>\"Explícame paso a paso qué ocurre cuando alguien abre mi URL [tu URL de C16]: qué consulta hace el navegador, qué responde el DNS, qué envía el servidor y dónde interviene HTTPS. Después dime: si la página no carga, ¿en cuál eslabón busco primero?\"</p></blockquote><p>Próxima vez que una página no cargue, ya no culparás al internet: buscarás el eslabón.</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El viaje de tu página desde que alguien escribe la URL hasta que la ve:", elementos: ["escribir la URL en el navegador", "el DNS responde cuál es la IP", "el navegador pide los archivos al servidor", "el servidor envía index.html, CSS e imagen", "el navegador dibuja (render) la página"] },
              { tipo: "multiple", pregunta: "¿Qué es el DNS?", opciones: ["Un antivirus para dominios", "La red mundial de directorios que traduce nombres como tortas-el-guero.netlify.app a IPs numéricas", "Un programa para editar fotos", "El lugar físico donde vive tu servidor"], correcta: 1 },
              { tipo: "completar", frase: "Las computadoras no trabajan con nombres bonitos sino con ____ numéricas; el ____ hace la traducción entre ambas.", banco: ["IPs", "DNS", "cookies", "antivirus"], respuestas: ["IPs", "DNS"] },
              { tipo: "relacionar", pares: [["URL", "La dirección legible para humanos"], ["DNS", "Traduce el nombre a la IP"], ["Servidor", "Computadora 24/7 con una copia de tu página"], ["HTTPS", "Cifra los datos que viajan"]] },
              { tipo: "vf", afirmacion: "Cuando una URL empieza con http:// (sin la s), los datos viajan cifrados y seguros.", correcta: false, explicacion: "HTTPS es el que cifra; http viaja en claro, y por eso hay que desconfiar de esas URLs." }
            ]
          },
          {
            id: "m1-c18",
            titulo: "PRÁCTICA: página para un negocio I — escribir el brief",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hasta hoy construías la página de <strong>Tortas El Güero</strong> que tú mismo inventaste. Esta semana la subimos de nivel: la construyes <strong>como un trabajo profesional</strong>, como si Tortas El Güero fuera un cliente real que te pagó. Y un trabajo profesional no empieza en el código: empieza en el <strong>brief</strong>.</p><p>Un <strong>brief</strong> es el documento donde queda escrito todo lo que la página necesita: de qué negocio hablamos, qué ofrece, quién la va a visitar, qué secciones tendrá, qué textos, qué colores, qué botones y qué se considera terminada. Es la versión en papel de las 4 piezas del prompt de C3, pero escrita antes de pedirle nada a la IA.</p><p>¿Por qué escribir primero? Por tres razones: <strong>1)</strong> obliga a pensar — los textos, precios y horarios no los inventa la IA, los sabe el negocio (si no, alucina, C5); <strong>2)</strong> es tu guía contra el desorden — con el brief a la mano, la IA no tiene que adivinar nada en cada prompt; <strong>3)</strong> es la firma del trato — si el cliente (o tú mismo en 2 meses) pregunta por qué una sección quedó así, la respuesta está escrita en negro.</p><p>Hoy tu trabajo es completar un brief para Tortas El Güero. No necesitas que el negocio exista de verdad: tú eres dueño y cliente a la vez. Pero respóndelo como cliente real, con datos, no con lo que sea.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un brief es el <strong>croquis que le entregas al arquitecto</strong> antes de construir: el arquitecto no recibe \"haga una casa\", recibe cuartos, medidas, materiales y vistas. Tu IA es una excelente arquitecta; si tú no llevas el croquis, la casa sale con el baño donde el cliente quería la cocina. Y el croquis no se firma después de construir — se firma antes.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Las secciones del brief y cómo llenarlas para Tortas El Güero:</p><ol><li><strong>El negocio</strong>: qué es, a qué se dedica, en qué zona. → \"Tortería de barrio especializada en tortas cubanas, sobre Insurgentes.\"</li><li><strong>La oferta</strong>: qué vende y a qué precio. → Los tres productos de C7 con sus precios; actualízalos si quieres.</li><li><strong>El público</strong>: quién la visita. → \"Vecinos y oficinistas de la zona que piden por WhatsApp en la hora de la comida.\"</li><li><strong>Las secciones</strong>: qué contiene la página. → Encabezado con el nombre, descripción, menú con precios, ubicación y horarios, botón de WhatsApp.</li><li><strong>El estilo</strong>: colores y tono. → Amarillo y café (C7), letras grandes, aire familiar.</li><li><strong>El éxito</strong>: qué significa terminada. → Se ve bien en celular (C14), el botón abre WhatsApp, publicada en Netlify (C16).</li></ol><pre><code>FORMATO DEL BRIEF — complétalo con este esqueleto:\n\nNEGOCIO:   ____\nOFERTA:    ____\nPÚBLICO:   ____\nSECCIONES: 1) ____ 2) ____ 3) ____\nESTILO:    ____\nÉXITO:     ____\n\nEsas 6 líneas son tu piedra angular: en C19\nse convierten en el prompt de construcción.</code></pre><p>No se trata de escribir elegante: se trata de escribir <strong>completo</strong>. Un brief de 6 líneas con datos vale más que tres páginas de adjetivos.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>El brief se afina como todo lo demás — preguntándole a la IA:</p><blockquote><p>\"Voy a construir una landing page para el negocio Tortas El Güero. Este es mi brief: [pega el tuyo]. Antes de que escribas código: ¿qué preguntas le harías al dueño para que la página quede impecable? ¿Qué me falta decidir?\"</p></blockquote><p>Como en C3, la IA te entrevista. Sus preguntas son las decisiones que te faltaban — y van directo a tu brief.</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El orden de esta práctica (y de todo proyecto serio):", elementos: ["completar el brief con datos del negocio", "hacer que la IA critique el brief y te entreviste", "afinar el brief con las respuestas", "tener un brief listo para construir en C19"] },
              { tipo: "multiple", pregunta: "¿Para qué sirve el brief ANTES de pedirle código a la IA?", opciones: ["Para impresionar al cliente con un documento bonito", "Para que la IA no tenga que adivinar: textos, precios y secciones ya están decididos", "Para que la IA escriba el código más rápido", "Para cumplir un trámite de Netlify"], correcta: 1 },
              { tipo: "completar", frase: "El brief es la versión en papel de las 4 piezas del ____ (C3), escrita ____ de pedirle código a la IA.", banco: ["prompt", "antes", "diseño", "después"], respuestas: ["prompt", "antes"] },
              { tipo: "vf", afirmacion: "Si el brief no trae los datos del negocio, la IA los va a inventar con total seguridad — y eso se llama alucinación (C5).", correcta: true, explicacion: "la IA completa los huecos con lo que suena correcto; los precios, textos y horarios reales los pone el negocio." },
              { tipo: "relacionar", pares: [["OFERTA", "Qué vende el negocio y a qué precio"], ["PÚBLICO", "Quién visita la página"], ["SECCIONES", "Qué contiene la página"], ["ÉXITO", "Qué significa terminada"]] }
            ]
          },
          {
            id: "m1-c19",
            titulo: "PRÁCTICA: página para un negocio II — dirigir la construcción",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya tienes el brief de C18. Hoy lo conviertes en <strong>construcción dirigida</strong>: el brief se transforma en un prompt (las 6 piezas de C6), la IA construye y tú diriges — sección por sección, revisando contra el brief, iterando (C13) y reportando errores como en C12.</p><p>El movimiento clave de esta lección: <strong>construir en secciones, no de golpe</strong>. Si pides que hagan toda la página perfecta de una vez, recibes una versión 1 grande y frágil. Si construyes por bloques (encabezado, menú, ubicación, botón), cada bloque se revisa, se prueba y se aprueba antes de seguir. Es la diferencia entre llenar un formulario campo por campo o en un solo envío a ciegas.</p><p>Y el filtro del director: <strong>todo lo que la IA entrega se compara con el brief</strong>. ¿Dijo amarillo y café (C7)? ¿Los precios coinciden? ¿Está la sección de horarios que prometiste? Si algo no cuadra, no es casi: es feedback para el siguiente mensaje (C13). La IA no se revisa sola — tú la revisas con el brief en la mano.</p><p>Al terminar, la página de hoy no es una página: es <strong>la página del brief</strong>, la que un cliente real firmaría. Esa diferencia es todo el oficio.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Construir con el brief es como <strong>un DJ en la consola</strong>: no toca cada instrumento, pero decide qué pista entra, cuándo, cuál se corta y cuál se repite. Tú no escribes cada línea de código — decides qué entra y qué se queda fuera, compás por compás, con la lista de canciones (tu brief) a la vista. El DJ no compone las notas: compone la experiencia.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Del brief al código, en pasos:</p><ol><li><strong>Convierte el brief en prompt</strong> (C6): pega el brief como contexto y exige formato de entrega.</li></ol><pre><code>Rol: Desarrollador senior de frontend.\nContexto: Página de un negocio real. Brief:\n[pegas tu brief de C18, completo]\nObjetivo: Construye la página en SECCIONES. Empecemos\npor el encabezado y el menú con los precios del brief.\nRestricciones: Los precios y textos SON los del brief,\nno los cambies. Colores del brief. Responsive (C14).\nFormato: Dame el index.html completo de esta sección.\nTests: Después, dime cómo la pruebo en mi celular.</code></pre><ol start=\"2\"><li><strong>Pega, guarda y refresca</strong> (C9), y <strong>compara con el brief</strong>.</li><li><strong>Pide la siguiente sección</strong> en la misma conversación (C4): \"Ahora agrega la sección de ubicación y horarios del brief.\"</li><li><strong>Si algo truena</strong>, reporta con las 4 piezas de C12: qué pediste, qué hace, qué esperabas y el código.</li><li><strong>Cierra con la pasada de director</strong>: pide que revise la página completa contra el brief antes del archivo final.</li></ol><p>Cada sección se aprueba antes de pedir la siguiente. La página terminada es la suma de bloques revisados — no un milagro de un solo mensaje.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>El filtro de calidad del director, al final de la construcción:</p><blockquote><p>\"Esta es mi página completa. Aquí está el brief original: [pega]. Revisa la página sección por sección contra el brief: ¿qué cumple?, ¿qué falta?, ¿qué se desvió? Dame una lista de pendientes antes de dar la página por terminada.\"</p></blockquote><p>Ese prompt convierte a la IA en tu socio de calidad. Los pendientes que liste son tu checklist para C20.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Por qué conviene construir en secciones y no pedir la página completa de un golpe?", opciones: ["Porque la IA se confunde con prompts largos", "Porque cada bloque se revisa y se aprueba contra el brief antes de seguir", "Porque Netlify lo exige", "Porque así el archivo pesa menos"], correcta: 1 },
              { tipo: "completar", frase: "El director revisa cada entrega contra el ____: lo que no cuadra se reporta como ____ para el siguiente mensaje.", banco: ["brief", "feedback", "diseño", "prompt"], respuestas: ["brief", "feedback"] },
              { tipo: "ordenar", instruccion: "El flujo de construcción dirigida:", elementos: ["convertir el brief en prompt (C6)", "construir la primera sección", "pegar, guardar y refrescar", "comparar con el brief y pedir la siguiente sección", "pasada final de revisión contra el brief"] },
              { tipo: "quehace", codigo: "\"Los precios y textos SON los del brief, no los cambies.\"", pregunta: "Le escribes a la IA: \"Los precios y textos SON los del brief, no los cambies.\" ¿Qué proteges?", opciones: ["La velocidad de la IA", "Que no invente datos del negocio: los que tú fijaste en C18", "El peso de la página", "El nombre del archivo"], correcta: 1 },
              { tipo: "vf", afirmacion: "Una vez que la IA entrega una sección, conviene pedir la siguiente en una conversación NUEVA para no llenar el contexto.", correcta: false, explicacion: "al contrario (C4): continúas en la misma conversación para conservar el contexto; solo abres una nueva si se saturó." }
            ]
          },
          {
            id: "m1-c20",
            titulo: "PRÁCTICA: página para un negocio III — publicar y presumir",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>La página del brief está terminada (C19). Hoy la sacas a la calle: <strong>la publicas en vivo y la presumes</strong>. Y presumir aquí no es vanidad: es el último paso del ciclo que empezó en C7 — una página que nadie ve no existe para nadie.</p><p>Publicar es lo que ya dominas (C16): arrastras la carpeta a Netlify Drop y listo. Si arrastras la <strong>misma</strong> carpeta <code>mi-primera-pagina</code>, Netlify <strong>actualiza el mismo sitio</strong> con la misma URL: no se crea otro. El deploy nuevo reemplaza la copia vieja en segundos.</p><p>El trabajo fino de hoy es <strong>la prueba real</strong>: el simulador de C14 te dio la práctica; hoy es en serio. Abre la URL en tu celular, recorre la página con el dedo, que el botón de WhatsApp abra el chat y que nada se desborde ni se corte. Y después, el paso que casi todos brincan: <strong>pedir feedback a humanos</strong>. Mándeale la URL a 3 personas con una pregunta concreta (\"¿en qué parte se te hizo difícil leer o tocar algo?\"), no con un \"¿qué te pareció?\" que casi siempre responde \"está bien\".</p><p>Con el feedback regresas a la mesa (C19), corriges, vuelves a arrastrar y vuelves a presumir. Ese loop — publicar, probar, recibir, mejorar — es literalmente la vida de un sitio profesional. Hoy lo estrenas.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Publicar y presumir es el <strong>estreno de tu película</strong>: el rodaje terminó (C19) y la distribuidora la publicó (C16); hoy abre la sala, invitas a los primeros espectadores y les preguntas qué se vio raro. El primer espectador siempre nota el error que el director no vio — por eso quieres oírlos antes de las funciones masivas. La película no existe hasta que alguien la ve.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El ritual completo:</p><ol><li><strong>Publica</strong>: arrastra la carpeta a Netlify Drop (C16). Si actualizas el mismo proyecto, la URL no cambia.</li><li><strong>Prueba en serio</strong>: abre la URL en tu celular. Verifica menú, precios del brief (C18) y que el botón de WhatsApp abra el chat (C7).</li><li><strong>Comparte con una pregunta concreta</strong>: mándale la URL a 3 personas y pregunta algo específico, no lo genérico. Ejemplo: \"¿En qué parte se te hizo difícil leer o tocar algo?\"</li><li><strong>Junta el feedback en el chat de tu IA</strong> (C4): pega lo que te dijeron y pide el arreglo (C12).</li><li><strong>Re-publica y presume</strong>: arrastra otra vez, confirma en tu celular y comparte la versión viva con presentación:</li></ol><pre><code>\"Ya está en línea el sitio de Tortas El Güero 👇\n[URL]\nSi andas por la zona y antojas una cubana, pide por ahí.\"\n\nPro-tip de director: guarda el link y la fecha. Dentro de\ndos meses vas a verlo y a medir qué lejos has llegado.</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<p>Para cerrar con clase, deja que la IA te escriba el discurso:</p><blockquote><p>\"Terminé la página de Tortas El Güero y la publiqué. Escríbeme un mensaje corto para enviarla por WhatsApp a clientes y conocidos: quién soy, qué contiene la página, la URL y una invitación clara a probar el botón de pedido. Tono cercano, sin exagerar.\"</p></blockquote><p>Y cuando alguien pida una torta desde tu página, regresa aquí: eso que va a pasar — un negocio recibiendo pedidos desde una página que TÚ dirigiste — empezó con un simple index.html en C7.</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El ritual de publicación y presumir, en orden:", elementos: ["arrastrar la carpeta a Netlify Drop", "probar la URL en tu celular de verdad", "pedir feedback con una pregunta concreta", "corregir con la IA y re-publicar", "compartir la versión viva con presentación"] },
              { tipo: "multiple", pregunta: "Arrrastras la MISMA carpeta mi-primera-pagina a Netlify Drop por segunda vez. ¿Qué ocurre?", opciones: ["Se crea un sitio nuevo con URL distinta", "Se actualiza el mismo sitio: misma URL, versión nueva", "Se duplican los archivos en el servidor", "Netlify cobra por la segunda publicación"], correcta: 1 },
              { tipo: "completar", frase: "La prueba real de hoy se hace en tu ____ y verifica que el botón de ____ abra el chat con el número.", banco: ["celular", "WhatsApp", "navegador", "Netlify"], respuestas: ["celular", "WhatsApp"] },
              { tipo: "vf", afirmacion: "Para pedir feedback de verdad, basta con mandar la URL y preguntar qué te pareció.", correcta: false, explicacion: "la pregunta genérica casi siempre responde \"está bien\"; una concreta (¿dónde se te hizo difícil algo?) sí trae información útil." },
              { tipo: "relacionar", pares: [["Publicar", "Arrastrar la carpeta a Netlify Drop"], ["Probar", "Abrir la URL en tu celular de verdad"], ["Recibir", "Feedback con pregunta concreta"], ["Mejorar", "Corregir con la IA y re-publicar"]] }
            ]
          },
          {
            id: "m1-c21",
            titulo: "El mapa de herramientas: Copilot, Cursor, Claude Code, v0, Bolt",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En C2 conociste a los asistentes de chat (ChatGPT, Claude, Gemini): la puerta de entrada. Pero el mundo real de construir con IA no es solo chat — es un <strong>mapa de herramientas</strong>, y hoy lo dibujas para no perderte. Todas sirven lo mismo (dirigir a una IA), pero viven en lugares distintos y atacan problemas distintos.</p><p><strong>Primera familia: la IA dentro del editor de código.</strong> Son herramientas que trabajan donde tú trabajas — dentro de VS Code o la terminal: <strong>Copilot</strong> (de Microsoft) es la más famosa: sugiere código mientras escribes (autocompletado) y trae chat integrado; <strong>Cursor</strong> es un editor de código armado desde cero alrededor de la IA (una versión especializada de VS Code); <strong>Claude Code</strong> trabaja en la terminal: lee tus archivos, los edita y ejecuta comandos por ti. A esta familia le dedicas C22 a C24.</p><p><strong>Segunda familia: los generadores de interfaz.</strong> Son herramientas web que convierten un prompt en una página o aplicación completa, y tú descargas el resultado: <strong>v0</strong> (de Vercel) genera interfaces y landing pages listas; <strong>Bolt</strong> genera proyectos completos en el navegador, incluyendo backend. Son espectaculares para prototipar y para ver rápido \"cómo se ve la idea\" — pero generan código que después tienes que entender y mantener (C8).</p><p><strong>El mapa no es una competencia:</strong> es un camino. Empiezas con chat (C2-C20), hoy ubicas las herramientas, en C22-C24 las usas dentro del editor, y en el Mes 2 las ves trabajar con Git. No necesitas aprenderlas todas hoy: necesitas saber <strong>cuál existe, para qué sirve y cuándo conviene cada una</strong>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es el <strong>tablero de una estación de servicio</strong>: el chat es el taxi (le dices el destino y te lleva), la IA dentro del editor es tu coche con copiloto (manejas tú, el copiloto sugiere la ruta y te avisa de los baches), y v0/Bolt son el pedido a domicilio (describes lo que quieres y te llega armado). Los tres te llevan a donde necesitas — solo cambia cuánto controlas tú el volante.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El mapa, en una tabla mental:</p><pre><code>FAMILIA: DENTRO DEL EDITOR  |  DÓNDE VIVE  |  EJEMPLOS\n------------------------------------------------\nAutocompletado y chat      |  VS Code     |  Copilot\nEditor diseñado para IA    |  Su propio   |  Cursor\nIA que trabaja en terminal |  Terminal    |  Claude Code\n\nFAMILIA: GENERADORES  |  QUÉ HACEN            |  EJEMPLOS\n----------------------------------------------------\nInterfaces desde prompt  |  Landing pages/UI    |  v0\nApps completas en línea  |  Front + backend     |  Bolt\n\nTu camino en el programa:\n  chat (C2-C20) → editor con IA (C22-C24) → Git (Mes 2)</code></pre><p>No hay herramienta mala en la lista: hay herramientas para momentos distintos. El constructor no jura lealtad a una — decide cuál usar según la tarea (C2: no te cases con uno).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero elegir por dónde empezar. Con mi nivel actual (ya construí una página HTML con chat), compara: Copilot, Cursor, Claude Code, v0 y Bolt. Para cada una dime: qué resuelve, cuánto cuesta, cuánta curva de aprendizaje tiene y en qué momento de mi aprendizaje conviene usarla. Termina con una recomendación.\"</p></blockquote><p>Esa respuesta es tu hoja de ruta personal — y en C24 ya la estás usando dentro del editor.</p>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Copilot", "Autocompletado y chat dentro del editor"], ["v0", "Genera interfaces desde un prompt en el navegador"], ["Claude Code", "IA que lee, edita y ejecuta en la terminal"], ["Bolt", "Genera apps completas en el navegador"]] },
              { tipo: "multiple", pregunta: "¿Cuál de estas herramientas vive DENTRO de un editor de código?", opciones: ["v0", "Copilot", "Bolt", "Gemini"], correcta: 1 },
              { tipo: "completar", frase: "Las herramientas de IA se dividen en dos familias: las que viven ____, como Copilot o Claude Code, y las que ____ por ti, como v0 o Bolt.", banco: ["dentro del editor", "generan", "fuera", "cobran"], respuestas: ["dentro del editor", "generan"] },
              { tipo: "vf", afirmacion: "Para construir con IA solo necesitas el asistente de chat de C2; los editores con IA son una moda prescindible.", correcta: false, explicacion: "el chat es la entrada (C2), pero los editores y generadores aceleran el flujo: cada familia resuelve un momento distinto." },
              { tipo: "ordenar", instruccion: "El orden de tu ruta con las herramientas:", elementos: ["dominar el chat y los prompts (C3-C20)", "publicar tu primera página (C16)", "ubicar el mapa de herramientas (hoy)", "usarlas dentro del editor (C22-C24)", "versionar tu trabajo con Git (Mes 2)"] }
            ]
          },
          {
            id: "m1-c22",
            titulo: "¿Qué es un editor de código? VS Code sin miedo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hasta hoy, tu proyecto de Tortas El Güero vivía como archivos en el Explorador de Windows y lo abrías con doble clic. Eso funciona — pero a partir de aquí trabajas como los profesionales: con un <strong>editor de código</strong>. Y el estándar de la industria, gratis y hecho por Microsoft, es <strong>VS Code</strong> (Visual Studio Code).</p><p>Un editor de código es <strong>un programa para escribir y administrar código</strong>. Parece un bloc de notas con superpoderes, y lo que te importa hoy son tres: <strong>1)</strong> el <strong>explorador de archivos</strong> — a la izquierda ves toda tu carpeta de proyecto de un vistazo (los archivos que ordenaste en C10), sin andar brincando entre ventanas; <strong>2)</strong> el <strong>resaltado de sintaxis</strong> — el código aparece coloreado: etiquetas de un color, atributos de otro, texto de otro; eso te ayuda a leer (C8) y a detectar errores de tipeo al ojo; <strong>3)</strong> las <strong>pestañas</strong> — puedes tener varios archivos abiertos y cambiar entre ellos sin perder tu lugar.</p><p>VS Code abre <strong>una carpeta completa</strong>, no archivos sueltos: se llama abrir un <strong>workspace</strong> (espacio de trabajo). Eso es clave: tu proyecto es la carpeta entera — HTML, imagen, README — y VS Code la muestra tal cual.</p><p>Y el dato que te quita el miedo: <strong>abrir un proyecto no modifica nada</strong>. VS Code solo muestra tus archivos; nada cambia en tu computadora hasta que tú guardas con <code>Ctrl+S</code>. Es un espejo, no un martillo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu proyecto pasó de vivir en un cajón de zapatos (archivos sueltos en el escritorio) a vivir en una <strong>mesa de trabajo con herramientas colgadas en la pared</strong>: a la vista está el cajón completo (explorador de archivos), cada herramienta tiene su lugar (pestañas) y el material está marcado con colores (resaltado de sintaxis) para saber qué es qué al instante. Seguirás haciendo lo mismo de C9 — editar y refrescar — solo que ahora con el taller ordenado.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Lo que vas a ver la primera vez que abras VS Code:</p><pre><code>Panel izquierdo  →  Explorador: los archivos de tu proyecto\nBarra de arriba  →  Pestañas: los archivos que tienes abiertos\nCentro           →  El editor: donde se ve y se edita el código\nAbajo            →  Terminal integrada (se usa desde el Mes 2)\nBarra lateral    →  Extensiones: se instalan desde el marketplace\n                     (la IA de C24 vive aquí)</code></pre><p>Tu primer contacto es de <strong>reconocimiento</strong>, no de dominio: abre VS Code, abre tu carpeta (C23) y mira cómo el archivo <code>index.html</code> que leíste en C8 aparece coloreado. Eso que ves — explorador, pestañas, colores — es todo lo que necesitas entender hoy.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Soy nuevo en VS Code. Muéstrame, paso a paso y sin tecnicismos: cómo abrir mi carpeta de proyecto, qué significan el panel izquierdo, las pestañas y el resaltado de colores, y qué cosas NO puedo romper aunque le pique a todo. Termina con las 3 acciones que más usará un principiante.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es VS Code?", opciones: ["Un navegador web", "Un editor de código gratuito y el más popular, donde escribes y administras tus archivos de proyecto", "Un servicio de hosting", "Un antivirus"], correcta: 1 },
              { tipo: "completar", frase: "VS Code abre una ____ completa de proyecto y en el panel izquierdo muestra el ____ de archivos.", banco: ["carpeta", "explorador", "ventana", "navegador"], respuestas: ["carpeta", "explorador"] },
              { tipo: "vf", afirmacion: "Abrir tu proyecto en VS Code modifica automáticamente tus archivos.", correcta: false, explicacion: "abrir solo muestra: nada cambia en tus archivos hasta que guardas con Ctrl+S." },
              { tipo: "relacionar", pares: [["Explorador de archivos", "Los archivos de tu proyecto en el panel izquierdo"], ["Pestañas", "Los archivos que tienes abiertos"], ["Resaltado de sintaxis", "Colorea el código para leerlo mejor"], ["Terminal integrada", "Consola para comandos (se usa desde el Mes 2)"]] },
              { tipo: "quehace", codigo: "File → Open Folder → eliges la carpeta mi-primera-pagina", pregunta: "¿Qué estás haciendo con esta acción?", opciones: ["Publicando tu página en internet", "Abriendo tu proyecto completo en VS Code para trabajar con todos sus archivos", "Borrando tu carpeta", "Creando una página nueva desde cero"], correcta: 1 }
            ]
          },
          {
            id: "m1-c23",
            titulo: "PRÁCTICA: abrir tu proyecto en VS Code",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hoy no hay teoría que memorizar: hay <strong>movimiento</strong>. Tu proyecto de Tortas El Güero se muda a su casa definitiva: VS Code. Al terminar esta lección, la carpeta <code>mi-primera-pagina</code> estará abierta en el editor, verás todos sus archivos en el explorador y sabrás abrir tu página en el navegador desde ahí. Es el punto de partida de todo lo que viene: la IA dentro del editor (C24) y Git (Mes 2) trabajan sobre esta misma carpeta.</p><p>La lógica es simple: <strong>un proyecto = una carpeta = un workspace</strong>. En VS Code eliges <em>File → Open Folder</em> y apuntas a <code>mi-primera-pagina</code>. No creas archivos nuevos, no copias nada: abres lo que ya existe y sigues donde lo dejaste. Tus archivos no se mueven de lugar — solo cambia la ventana desde la que los miras y editas.</p><p>Un detalle de seguridad (tu regla de C8 no negocia): VS Code no publica ni sube nada. Todo sigue viviendo solo en tu computadora hasta que tú decidas publicar (C16) o subirlo (Mes 2).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es la <strong>mudanza de tu proyecto a su casa nueva</strong>: los muebles son los mismos (tus archivos), solo cambia la casa donde viven — ahora con cuartos etiquetados, buena luz y herramientas colgadas en la pared. El día de la mudanza no remodelas nada: instalas, abres la puerta y compruebas que todo llegó completo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Pasos, en orden, para hacerlos sin prisa:</p><ol><li><strong>Instala VS Code</strong>: ve a <code>code.visualstudio.com</code>, descarga la versión de Windows y corre el instalador. Todo en siguiente-siguiente-terminar.</li><li><strong>Ábrelo</strong>: en la pantalla de inicio verás un botón grande <em>Open Folder</em>.</li><li><strong>Abre tu proyecto</strong>: <em>File → Open Folder</em> → navega hasta <code>mi-primera-pagina</code> → <em>Select Folder</em>.</li><li><strong>Revisa el explorador</strong> (panel izquierdo): ahí están tus archivos — <code>index.html</code>, <code>README.md</code>, <code>.gitignore</code> y tu imagen (C10 y C11). Todo llegó.</li><li><strong>Haz clic en <code>index.html</code></strong>: el código aparece coloreado. Es el mismo código que leíste en C8 y que iteraste hasta C20.</li><li><strong>Compruébalo en el navegador</strong>: clic derecho en <code>index.html</code> → <em>Reveal in File Explorer</em> → doble clic. La página abre como siempre (C7).</li><li><strong>Cierra el ciclo</strong>: vuelve al chat de tu IA, pide un cambio chico (C9), pega la versión nueva en VS Code, guarda con <code>Ctrl+S</code> y refresca el navegador con <code>F5</code>.</li></ol><pre><code>Mi-primera-pagina en VS Code debe verse así:\n\nExplorador            |  1  index.html   [pestaña abierta]\n▸ mi-primera-pagina   |  <h1>🌮 Tortas El Güero 🥪</h1>\n  ▸ index.html        |  <p>La torta que tu día necesita.</p>\n    README.md         |  ... colores por todos lados\n    .gitignore        |\n    torta-del-dia.jpg |</code></pre><p>Si algo no abre, no entres en pánico: cierra VS Code, verifica que la carpeta siga en tu escritorio y repite desde el paso 2.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Acabo de abrir mi proyecto en VS Code por primera vez. Muéstrame en una descripción cómo debería verse la pantalla con mi carpeta abierta, y dime qué cosas son normales la primera vez (mensajes, avisos de extensiones) y cuáles sí debo atender.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Los pasos de la práctica, en orden:", elementos: ["descargar e instalar VS Code", "abrir VS Code", "File → Open Folder y elegir mi-primera-pagina", "hacer clic en index.html en el explorador", "probar que la página sigue abriendo en el navegador"] },
              { tipo: "multiple", pregunta: "Acabas de instalar VS Code y quieres trabajar en Tortas El Güero. ¿Qué haces primero?", opciones: ["Crear un archivo nuevo en blanco", "File → Open Folder y elegir tu carpeta mi-primera-pagina", "Cerrar el explorador de archivos", "Descargar otro editor"], correcta: 1 },
              { tipo: "completar", frase: "En el panel izquierdo de VS Code ves el ____ con tus archivos: index.html, README.md y .gitignore (C10). Al hacer clic en index.html, el código aparece ____ por el resaltado de sintaxis.", banco: ["explorador", "coloreado", "borrado", "oculto"], respuestas: ["explorador", "coloreado"] },
              { tipo: "vf", afirmacion: "Después de editar en VS Code, guardas con Ctrl+S y refrescas el navegador con F5 para ver el cambio.", correcta: true, explicacion: "es el mismo loop de C9: VS Code solo cambió el lugar donde editas el archivo." },
              { tipo: "quehace", codigo: "cambias una palabra en index.html dentro de VS Code, guardas con Ctrl+S y refrescas el navegador con F5", pregunta: "¿Qué esperas que pase?", opciones: ["Que la página se rompa para siempre", "Que la página muestre tu cambio: el archivo es el mismo, solo cambió tu manera de editarlo", "Que se borre la carpeta del proyecto", "Que se cree una página nueva"], correcta: 1 }
            ]
          },
          {
            id: "m1-c24",
            titulo: "La IA dentro del editor: autocompletado y chat integrado",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En C21 conociste la familia: la IA vive dentro del editor. Hoy la enciendes, en dos sabores: <strong>autocompletado</strong> y <strong>chat integrado</strong>.</p><p><strong>El autocompletado</strong> es la IA que trabaja mientras escribes: cuando empiezas a teclear, sugiere la línea o el bloque que sigue, y la aceptas con la tecla <code>Tab</code>. Para ti, que estás aprendiendo a leer código (C8), es doble regalo: ahorra tecleo y te muestra cómo escribiría el código un profesional. La regla no cambia: <strong>una sugerencia que no entiendes no se acepta a ciegas</strong> — pides explicación antes de guardar.</p><p><strong>El chat integrado</strong> es la versión de C2 que se sienta a tu escritorio: un panel dentro de VS Code donde conversas con una IA que <strong>lee tus archivos abiertos</strong>. Puedes seleccionar un pedazo de tu <code>index.html</code> y pedir \"explícame esto\" o \"cambia el color del botón a verde\"; la IA responde con la explicación o con el cambio exacto, y en muchos casos lo <strong>aplica al archivo por ti</strong>. Eso elimina la mitad del loop de C13 — ya no copias y pegas del chat externo al archivo.</p><p>Dónde vive cada cosa: el autocompletado y el chat los traen <strong>extensiones</strong> que se instalan desde el marketplace de VS Code (Copilot es la más famosa; hay alternativas gratuitas). Antes de instalar cualquier extensión, la regla de siempre: <strong>revisa que sea oficial y lee qué hace</strong>. Y como en C8: cuando la IA edite tu archivo, <strong>revisa el cambio antes de guardar</strong> — el chat te muestra la diferencia entre el antes y el después.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El autocompletado es como el <strong>teclado predictivo del celular, pero entrenado en código</strong>: te adivina la palabra y te la termina; aceptar el \"te voy a querer\" de la nada siempre fue tu decisión. El chat integrado es el <strong>colega que se sienta a tu lado y lee tu pantalla</strong>: no le cuentas qué hay en tu archivo — lo ve, te dice qué está mal y hasta lo corrige si se lo pides. Tú sigues siendo el que decide qué queda y qué no.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El flujo, con el chat integrado:</p><pre><code>1. Abres tu index.html en VS Code (C23).\n2. Seleccionas el bloque que quieres cambiar.\n3. En el chat integrado escribes:\n   \"Este es el botón de WhatsApp. Hazlo más grande,\n    verde WhatsApp (#25D366) y con bordes redondeados.\n    No cambies nada más.\"\n4. Revisas la propuesta: el chat muestra QUÉ líneas cambió.\n5. Si va contigo, lo aplicas; si no, pides ajuste.\n6. Guardas (Ctrl+S), refrescas (F5) y pruebas (C9).\n\nEl autocompletado, mientras tanto:\n  escribes <h1> y la IA sugiere el resto del encabezado;\n  aceptas con Tab si lo entiendes.</code></pre><p>Prueba hoy algo chico: selecciona el título de tu página y pide en el chat que te lo explique. Ese ejercicio de C8, ahora sin salir del editor, es el ritual que harás miles de veces.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Dentro de VS Code, explícame cómo funcionan el autocompletado y el chat integrado con Copilot (o su alternativa gratuita): cómo se instala, cómo se aceptan las sugerencias con Tab, cómo le pido al chat que edite un archivo y cómo reviso qué cambió antes de guardar. Dame el flujo para el primer día.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Autocompletado (Tab)", "Sugiere código mientras escribes"], ["Chat integrado", "Conversas con una IA que lee tus archivos abiertos"], ["Copilot", "La IA de Microsoft dentro del editor"], ["Extensión", "Complemento que se instala desde el marketplace"]] },
              { tipo: "multiple", pregunta: "La IA del autocompletado sugiere una línea de código. ¿Qué haces?", opciones: ["La aceptas sin mirar y guardas", "La revisas, la entiendes (C8) y la aceptas con Tab si va contigo", "Boras el editor", "Le preguntas a otro editor"], correcta: 1 },
              { tipo: "completar", frase: "El autocompletado trabaja con ____ mientras escribes; el chat integrado lee los archivos ____ y hasta puede editarlos por ti.", banco: ["sugerencias", "abiertos", "cerrados", "nombres"], respuestas: ["sugerencias", "abiertos"] },
              { tipo: "vf", afirmacion: "Con el chat integrado puedes seleccionar un pedazo de código y pedir que te lo explique, sin salir del editor.", correcta: true, explicacion: "esa es su ventaja: la IA ve tu archivo y responde ahí mismo, sin copiar y pegar." },
              { tipo: "ordenar", instruccion: "El flujo para pedir un cambio con el chat integrado:", elementos: ["seleccionar el código que quieres cambiar", "escribir el pedido en el chat", "revisar qué líneas propone cambiar", "aceptar o pedir ajustes", "guardar y probar en el navegador"] }
            ]
          },
          {
            id: "m1-c25",
            titulo: "Versiones de tu trabajo: copias, respaldos y el problema que Git resolverá (Mes 2)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Has iterado tu página desde C9: cada versión nueva <strong>sobrescribió</strong> la anterior, y el <code>index.html</code> que tienes hoy es el único. Piensa un segundo en el riesgo: si un cambio rompe todo (C12) y ni tú ni la IA logran deshacerlo, no hay versión buena a la que volver. Ese es <strong>el problema de las versiones</strong>, y hoy vas a entenderlo antes de que Git lo resuelva en el Mes 2.</p><p>Hay tres niveles de respuesta, de más frágil a más profesional:</p><ol><li><strong>Copias manuales</strong> — lo que todos hacen al principio: <code>index_final.html</code>, <code>index_final2.html</code>, <code>index_ultimo_definitivo.html</code>. Es el método de la desesperación: se multiplican, se confunden y nadie recuerda cuál es la buena.</li><li><strong>Respaldos (backups)</strong> — copias de tu carpeta guardadas <strong>en otro lugar</strong> (una USB, un disco externo, la nube) para sobrevivir a un desastre: se muere tu disco, se borra la carpeta. Los respaldos te protegen de <em>perder</em> tu trabajo; no te ayudan a <em>regresar a una versión</em>.</li><li><strong>Versionado (version control)</strong> — un sistema que registra <strong>cada cambio</strong> con su fecha y autor, y te permite volver a <strong>cualquier punto</strong> de la historia como si nada. Es la parte que te falta, y se llama <strong>Git</strong>.</li></ol><p>Hoy el regalo es doble: <strong>1)</strong> haces tu respaldo final del Mes 1 (copia la carpeta <code>mi-primera-pagina</code> a una USB o a la nube — es tu seguro contra desastre); <strong>2)</strong> entiendes por qué en el Mes 2, sobre la misma carpeta que vas a abrir en VS Code (C23), Git te dará una historia completa: cada versión un punto guardado, sin archivos duplicados, sin miedo a romper.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Hoy estás jugando <strong>un videojuego sin puntos de guardado</strong>: cada iteración es un riesgo total, y si mueres, vuelves al inicio. Las copias manuales son guardar en 15 ranuras distintas y olvidar cuál tiene el avance real; los respaldos son guardar la partida en otra consola por si la tuya se quema. <strong>Git es el sistema de puntos de guardado del videojuego</strong>: mueres, y en vez de empezar de cero, cargas el último punto — o el de hace tres horas. En el Mes 2 desbloqueas esa función, y ya nunca vuelves a jugar sin guardar.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El problema, visto con tus archivos:</p><pre><code>El caos de las copias manuales:\n  index.html\n  index FINAL.html\n  index_final2.html\n  index_definitivo.html\n  index_definitivo_real.html   ← ¿cuál es la buena?\n\nEl orden de hoy (respaldo del Mes 1):\n  1. Cierra VS Code (C23) para copiar la carpeta completa.\n  2. Copia mi-primera-pagina a tu USB o a la nube.\n  3. Nombra la copia con fecha: mi-primera-pagina-backup-2026-08-16.\n  4. Eso es un respaldo: te protege de perder. No es versionado.\n\nLo que trae Git en el Mes 2 (avance):\n  cada cambio queda registrado y puedes volver a cualquier punto,\n  sin duplicar archivos. Se acabaron los index_final_definitivo.</code></pre><p>Una regla de oficio para llevarte: <strong>respaldo para no perder, versionado para no tener miedo</strong>. El respaldo de hoy cuesta 2 minutos; el caos que previene no tiene precio.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo una página HTML en la carpeta mi-primera-pagina y he iterado mucho. Explícame en términos simples la diferencia entre: copiar archivos con nombres tipo index_final.html, hacer un respaldo en otra unidad, y usar Git. Después dime qué ventaja concreta tendría Git EN MI caso y qué debo tener listo antes de empezar el Mes 2.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["Copia manual", "index_final2.html: frágil y se multiplica"], ["Respaldo", "Copia guardada en otro lugar por si el disco muere"], ["Versionado (Git)", "Historia de cada cambio con vuelta a cualquier punto"], ["Commit", "Un punto guardado en la historia (Mes 2)"]] },
              { tipo: "multiple", pregunta: "¿Cuál es el problema del método index_final.html → index_final2.html?", opciones: ["Es demasiado elegante para proyectos chicos", "Se multiplican, se confunden y nadie recuerda cuál es la versión buena", "No deja guardar archivos", "Requiere internet para funcionar"], correcta: 1 },
              { tipo: "completar", frase: "Git registra cada ____ con quién, cuándo y qué cambió, y te deja ____ atrás si algo se rompe.", banco: ["cambio", "volver", "archivo", "pagar"], respuestas: ["cambio", "volver"] },
              { tipo: "vf", afirmacion: "Un respaldo te permite volver a una versión anterior de tu proyecto, igual que Git.", correcta: false, explicacion: "el respaldo te protege de perder (si muere tu disco); volver a cualquier versión de la historia es lo que hace el versionado." },
              { tipo: "ordenar", instruccion: "La evolución del caos a la solución:", elementos: ["tener un solo index.html y sobrescribirlo con cada iteración", "multiplicar copias: index_final.html, index_final2.html…", "perder la pista de cuál era la versión buena", "descubrir Git en el Mes 2 para registrar y volver a cualquier versión"] }
            ]
          },
          {
            id: "m1-c26",
            titulo: "PRÁCTICA: rehacer tu página personal, versión mejorada",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En C7 construiste tu primera página con la adrenalina de quien recién aprende: la sacaste adelante, la iteraste y la publicaste (C16). Era tu versión 1: la prueba de que podías. Hoy la rehaces — pero no como parche, <strong>con todo lo que aprendiste</strong>. Tu página personal es la que habla de ti: quién eres, a qué te dedicas, por qué estás aprendiendo a construir con IA y cómo te contactan. Es la carta de presentación que vas a mostrar cuando alguien pregunte \"¿qué sabes hacer?\"</p><p>La versión 1 ya cumplió su trabajo: demostrarte que podías. La versión de hoy se hace como se hace un trabajo real (C18 y C19): primero brief, después secciones, con imagen (C11), responsiva (C14), editada en VS Code con la IA al lado (C22 a C24), publicada en Netlify (C16) y respaldada (C25).</p><p>La regla del rehacer: <strong>no le pidas a la IA \"mejora mi página vieja\"</strong> — pídele que construya una página nueva para un brief nuevo, en una carpeta nueva. Tu página vieja fue el borrador; esta es la copia en limpio. Y mientras la rehaces, cada paso del mes se vuelve hábito: brief, construir en secciones, probar en celular, publicar, respaldar.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu página de C7 fue la <strong>maqueta grabada con el celular en el baño</strong>: suena, existe y le dio vida a la idea. Hoy ya tienes estudio, productor (la IA) y mezcla para todas las plataformas (la responsiva). Rehacer tu página personal es <strong>grabar el disco de verdad</strong>: misma canción, misma voz, pero con la producción que se merece. Nadie escucha la maqueta cuando existe el disco.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Pasos, en orden:</p><ol><li><strong>Escribe tu brief</strong> (C18) para TU página personal: quién eres, qué haces, a quién va dirigida, qué secciones tendrá (presentación, lo que estás aprendiendo, contacto) y qué significa \"terminada\" (se ve bien en celular, botón de WhatsApp, publicada en Netlify).</li><li><strong>Crea la carpeta</strong> <code>pagina-personal</code> (reglas de C10: sin espacios, sin acentos) y ábrela en VS Code (C23).</li><li><strong>Convierte el brief en prompt</strong> (C6) y pide la primera sección. Usa el chat integrado del editor (C24) para que la IA lea y edite tus archivos sin copiar y pegar.</li><li><strong>Agrega tu imagen</strong> (C11): una foto tuya o un avatar en la misma carpeta, con nombre limpio y su <code>alt</code>.</li><li><strong>Hazla responsiva</strong> (C14): simulador F12, arrastra el ancho hasta que todo se lea en celular.</li><li><strong>Publícala</strong> (C16) en Netlify Drop con la carpeta <code>pagina-personal</code> y renómbrala a algo limpio.</li><li><strong>Respáldala</strong> (C25) en tu USB o nube, con fecha en el nombre.</li><li><strong>Presume</strong> (C20): mándale la URL a 3 personas con pregunta concreta.</li></ol><pre><code>PROMPT DE LA VERSIÓN 2 (adáptalo a tu brief):\nRol: Desarrollador senior de frontend.\nContexto: Esta es mi página personal. Brief:\n[pegas tu brief completo]\nObjetivo: Construye la página en SECCIONES. Empecemos\npor la presentación: mi nombre grande, una frase de\nqué hago y el botón de contacto por WhatsApp.\nRestricciones: Textos del brief, no los cambies.\nResponsiva (C14). La foto está en la misma carpeta.\nFormato: Dame el index.html de la sección.\nTests: Dime cómo la pruebo en mi celular.</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Esta es mi página personal. Revísala como si la viera alguien que no me conoce: ¿en 5 segundos queda claro quién soy y qué hago? ¿El contacto se ve y se toca fácil en celular? Dame 3 cosas para pulir antes de publicarla.\"</p></blockquote><p>Esa revisión de director (C19) es la última prueba antes de la versión 2 en vivo.</p>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El orden de la práctica de hoy:", elementos: ["escribir el brief de tu página personal", "crear la carpeta pagina-personal y abrirla en VS Code", "construir en secciones con la IA del editor", "publicar en Netlify Drop", "respaldar la carpeta con fecha"] },
              { tipo: "multiple", pregunta: "¿Por qué rehacer tu página desde cero en vez de pedir \"mejora mi página vieja\"?", opciones: ["Porque la página vieja está dañada", "Porque la versión 2 se construye como trabajo real: brief, secciones, imagen, responsiva, publicación — no como parche", "Porque Netlify lo exige", "Porque la IA solo sabe hacer páginas nuevas"], correcta: 1 },
              { tipo: "completar", frase: "La regla del rehacer: pídele a la IA que ____ una página nueva para un brief ____, no que parchee la vieja.", banco: ["construya", "nuevo", "borre", "viejo"], respuestas: ["construya", "nuevo"] },
              { tipo: "vf", afirmacion: "La versión 1 de tu página fue el borrador; la versión 2 usa el mismo flujo de un trabajo real: brief, secciones, prueba y publicación.", correcta: true, explicacion: "exactamente: lo que distingue la v2 es el método, no la herramienta." },
              { tipo: "quehace", codigo: "arrastras la carpeta pagina-personal (no mi-primera-pagina) a Netlify Drop", pregunta: "¿Qué esperas que pase?", opciones: ["Se actualice tu página de Tortas El Güero con la misma URL", "Se cree un sitio nuevo e independiente con su propia URL", "Netlify borre tu cuenta", "Tu página personal reemplace a la de Tortas"], correcta: 1 }
            ]
          },
          {
            id: "m1-c27",
            titulo: "Pedirle a la IA que explique código ajeno (tu superpoder de lectura)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Desde C8 tienes una regla no negociable: nunca publicas código que no entiendes. Hoy le agregas el complemento: <strong>entender código que no escribiste tú</strong>. Vas a vivir rodeado de código ajeno: el que genera la IA (C7 en adelante), el que bajan las plantillas de v0 o Bolt (C21), las librerías que instalas (A11) y el que un día leas de un compañero o de un tutorial. La IA te dio el código; ahora te da también <strong>la traducción</strong>.</p><p>Tu superpoder de lectura tiene 4 movimientos, en orden:</p><ol><li><strong>Contexto primero.</strong> Antes de pegar código suelto, dile a la IA qué es el archivo y qué esperas que haga: \"Este es mi index.html, quiero entender cómo funciona la sección de precios\". Sin contexto, la IA explica lo que a ella le parece; con contexto, explica lo que tú necesitas.</li><li><strong>El mapa antes de los detalles.</strong> Primero pide la estructura: una línea por cada bloque. Después eliges a cuál bajar. Leer un código nuevo es entrar a un edificio: primero el plano, después el cuarto.</li><li><strong>Baja a lo que necesitas.</strong> Con el mapa en mano, selecciona el bloque exacto (en el chat integrado de C24 lo marcas directo) y pide: \"explícame estas líneas\". Función por función, línea por línea, sin vergüenza.</li><li><strong>Cierra con acción.</strong> La lectura termina en poder cambiar: \"si quiero cambiar X, ¿qué línea toco?\"</li></ol><p>El error que no cometes: pegar 400 líneas y pedir \"explícamelo todo\". Eso devuelve un resumen genérico que no sirve. El profesional pide el mapa, elige el cuarto y entra.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Entender código ajeno es <strong>llegar a la escena del crimen como detective</strong>: hay pistas por todos lados (las variables), objetos con historia (las funciones) y un caso que resolver. La IA es el testigo que estuvo toda la noche: lo vio todo y puede narrártelo — pero si le preguntas mal, te cuenta la película entera en vez de la parte que importa. Tu técnica es la misma de la lección: primero el mapa de la escena, después la pista exacta y, al final, la acción. Con un testigo tan bueno, ningún código ajeno vuelve a ser un misterio.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un código ajeno típico (funciones de JavaScript; las dominarás en el Mes 3):</p><pre><code>function calcularTotal(precios, descuento) {\n  const total = precios.reduce((a, b) =&gt; a + b, 0);\n  if (descuento) return total * (1 - descuento);\n  return total;\n}</code></pre><p>El protocolo en el chat integrado (C24):</p><pre><code>Tú:  \"Este archivo calcula el total de un carrito. Dame el\n     mapa: una línea por cada función.\"\nIA:  calcularTotal(precios, descuento): suma los precios y\n     aplica un descuento si le pasan uno.\n\nTú:  \"Explícame la línea con reduce.\"\nIA:  reduce recorre la lista sumando cada precio; empieza\n     en 0 (el segundo argumento).\n\nTú:  \"Si quiero un descuento fijo de 20%, ¿qué cambio?\"\nIA:  Llama a la función así: calcularTotal(precios, 0.2).</code></pre><p>Mapa → detalle → acción. Sin mover una línea a mano, terminaste sabiendo qué hace el código y cómo cambiarlo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te voy a pegar código que no escribí yo. Quiero entenderlo en 3 pasos: 1) mapa: una línea por bloque, ¿qué hace cada uno?; 2) explícame solo el bloque que te señale; 3) termina diciéndome qué línea tocaría para [el cambio que quiero]. Si algo está raro o roto, dímelo en el paso 1.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El protocolo de lectura de código ajeno:", elementos: ["dar contexto: qué es el archivo y qué esperas que haga", "pedir el mapa: una línea por bloque", "explicar el bloque exacto que necesitas", "preguntar qué línea tocar para el cambio que quieres"] },
              { tipo: "multiple", pregunta: "Pegas 400 líneas y pides \"explícamelo todo\". ¿Qué pasa?", opciones: ["Recibes la explicación perfecta", "La IA te da un resumen genérico que casi nunca sirve para lo que necesitas", "La IA se niega a leer más de 100 líneas", "El código se borra"], correcta: 1 },
              { tipo: "completar", frase: "La lectura de código ajeno tiene 3 fases: el ____ (estructura general), el ____ (el bloque exacto) y la ____ (qué línea cambiar).", banco: ["mapa", "detalle", "acción", "diseño"], respuestas: ["mapa", "detalle", "acción"] },
              { tipo: "vf", afirmacion: "Cuando pides que la IA te explique código ajeno, lo correcto es pegar el archivo sin decirle qué es, para no condicionar su respuesta.", correcta: false, explicacion: "sin contexto la IA explica lo que a ella le parece; con contexto explica lo que tú necesitas." },
              { tipo: "quehace", codigo: "\"Explícame la línea con reduce.\"", pregunta: "Después de pedir el mapa de un código, le pides: \"Explícame la línea con reduce.\" ¿En qué fase del protocolo estás?", opciones: ["Contexto primero", "Bajar al detalle del bloque que necesitas", "Cerrar con acción", "Verificar el dato en la fuente original"], correcta: 1 }
            ]
          },
          {
            id: "m1-c28",
            titulo: "Los límites: qué NO puede hacer la IA (todavía) y dónde entras tú",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya dirigiste a la IA todo el mes y sabes lo que hace increíblemente bien (C1 a C29). Hoy, con la misma honestidad, la lista de lo que <strong>no</strong> hace — y por qué ahí entras tú. No es para desanimarte: es para que dirijas con los ojos abiertos.</p><ul><li><strong>No verifica el mundo real.</strong> La IA no llama a la tienda a confirmar el precio (C5). Cifras, precios, fechas y datos de negocio los verificas TÚ, en la fuente original, siempre.</li><li><strong>No tiene tu criterio.</strong> No sabe qué le gusta a tu cliente, cuánto puedes pagar ni qué se te hace bonito. La IA propone; decides tú.</li><li><strong>No guarda secretos.</strong> Advertencia real: <strong>nunca pegues contraseñas, tokens, API keys, números de tarjeta ni datos personales de clientes en el chat.</strong> Lo que escribes queda guardado y puede usarse para entrenar. Trata cada conversación como un espacio público: si no lo dirías en un café, no lo pegues.</li><li><strong>No firma nada.</strong> Si algo se rompe, se pierde o sale mal, el responsable eres tú. La IA no paga la multa ni llama al cliente a disculparse. No es un defecto: es por qué el humano siempre estará en el oficio.</li><li><strong>No declara sus dudas.</strong> Puede inventar con total seguridad (C5) y responde aunque no sepa. La pregunta \"¿qué tan seguro estás?\" es tu herramienta.</li><li><strong>Sí tiene límites técnicos.</strong> La ventana de contexto (C4), no ver tus archivos por default (C24 construyó ese puente) y no saber lo que pasó hoy. Todo eso lo manejas tú.</li></ul><p>Dónde entras tú, en una frase: <strong>la IA ejecuta y propone; tú decides, verificas, proteges y respondes.</strong> Ese reparto es el oficio completo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La IA es el <strong>GPS que conoce todas las rutas del planeta</strong>: te lleva a cualquier lugar a velocidad sobrehumana y sin quejarse. Pero el GPS no sabe si la gasolinera está abierta (no verifica el mundo real), no sabe que hoy no tienes prisa (no tiene tu criterio), y si le escribes mal el destino, <strong>te lleva con total confianza al lugar equivocado</strong>. Nadie culpa al GPS por la gasolinera cerrada: el conductor decide la ruta, verifica las salidas y aprieta el freno. El GPS no conduce — te lleva. La IA no construye — te construye, cuando tú diriges.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El riesgo real, en dos escenarios que NO debes repetir:</p><pre><code>NO PEGUES ESTO EN EL CHAT:\n  API_KEY=sk-4f8a2b...   ← tu token de pago\n  Usuario: admin\n  Contraseña: tortas1234\n\nEN SU LUGAR, ASÍ SÍ:\n  \"Voy a configurar una clave secreta en mi app.\n   Explícame cómo hacerlo SIN que el token quede\n   en el código ni se suba a mi página.\"\n\nY para datos de negocio (C5):\n  Tú: \"¿Cuánto cobra Netlify en el plan gratis?\"\n  Tú: \"¿Qué tan seguro estás? ¿Dónde lo verifico?\"\n  → Verifica en la fuente oficial, no con fe.</code></pre><p>Dos reflejos que se entrenan hoy: <strong>secreto → no se pega</strong>, y <strong>dato crítico → se verifica</strong>. Con esos dos, la parte de seguridad está cubierta.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Antes de que me des la solución, dime: ¿hay algo en esta tarea sobre lo que NO deberías responder con certeza? ¿Qué datos debería verificar yo en una fuente oficial? ¿Y el plan que propones maneja secretos o información sensible? Adviérteme antes de actuar.\"</p></blockquote><p>Ese prompt convierte a la IA en tu guardia de seguridad — úsalo cada vez que el tema sea dinero, datos o accesos.</p>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "Pegar contraseñas y tokens en el chat de la IA es seguro porque la conversación es privada.", correcta: false, explicacion: "lo que escribes queda guardado y puede usarse para entrenar; trata el chat como un espacio público." },
              { tipo: "multiple", pregunta: "La IA te da el precio de un plan y suena muy segura. ¿Qué haces?", opciones: ["Lo pones en tu página sin dudar", "Verificas en la fuente oficial antes de decidir con ese dato", "Le pides que te lo repita más fuerte", "Buscas otro asistente de IA"], correcta: 1 },
              { tipo: "relacionar", pares: [["Verificar datos del mundo real", "Tú, en la fuente oficial"], ["Guardar secretos", "Tú: no se pegan en el chat"], ["Decidir qué se ve bien", "Tú, con tu criterio"], ["Ejecutar y proponer", "La IA"], ["Responder por el resultado", "Tú, siempre"]] },
              { tipo: "completar", frase: "La IA ejecuta y ____; tú decides, ____, proteges y ____.", banco: ["propone", "verificas", "respondes", "olvidas"], respuestas: ["propone", "verificas", "respondes"] },
              { tipo: "quehace", codigo: "\"Mi API key es sk-1234567890. Úsala para conectar mi app.\"", pregunta: "Un amigo te enseña que le pegó su API key a la IA. ¿Qué le dirías?", opciones: ["Que bien, así la IA lo ayuda más rápido", "Que es un riesgo real: la clave se queda en el chat y puede entrenar con ella; debe rotarla y no volver a pegarla", "Que la pegue dos veces para que no se pierda", "Que no hay problema porque la IA no guarda nada"], correcta: 1 }
            ]
          },
          {
            id: "m1-c29",
            titulo: "Tu flujo personal de trabajo con IA para todo el programa",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Treinta lecciones te dieron herramientas sueltas: prompts (C3, C6), contexto (C4), iteración (C13), reportes de error (C12), revisión (C8), publicación (C16). Hoy las atas en una sola cuerda: <strong>tu flujo personal de trabajo</strong>. Un flujo es la rutina fija que haces SIEMPRE, en el mismo orden, hasta que se vuelve automática. Los profesionales no improvisan: siguen su flujo y lo ajustan con la experiencia.</p><p>El flujo DEV SYSTEM, en 6 pasos:</p><ol><li><strong>Prepara.</strong> Una conversación, una misión (C4). Brief claro y prompt completo (C3 y C6).</li><li><strong>Dirige.</strong> Construye en secciones (C19), un cambio a la vez (C9), pide el mapa antes del detalle (C27).</li><li><strong>Prueba.</strong> Refresca (C9), prueba en celular (C14), lee lo que generó (C8).</li><li><strong>Corrige.</strong> Si falla, reporta con las 4 piezas (C12) e itera (C13).</li><li><strong>Guarda.</strong> Respalda al terminar la sesión (C25). En el Mes 2, Git lo hace mejor.</li><li><strong>Publica.</strong> Saca al mundo lo que funciona (C16 y C20) y presume.</li></ol><p>Hoy lo haces tuyo: escríbelo a tu manera, agrégale tus atajos, y úsalo en cada práctica del resto del programa. La rutina que se repite es la que construye.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es la <strong>lista de pre-vuelo del piloto</strong>: antes de cada despegue, los mismos puntos, en el mismo orden, cada vez — sin importar cuántos vuelos lleve. No lo hace porque no sepa: lo hace porque la rutina fija elimina el olvido justo cuando más cuesta pensar. Tu flujo es tu checklist de piloto: cuando un proyecto se ponga intenso (y se va a poner), no vas a decidir qué hacer: vas a seguir la lista. Por eso el flujo no te quita libertad — te da aviones que despegan siempre.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Tu checklist, para copiar a tu README (C10):</p><pre><code>FLUJO DEV SYSTEM — versión mía\n1. PREPARA\n   □ Una conversación, una misión (C4)\n   □ Brief o prompt completo: contexto, objetivo,\n     restricciones, formato (C3/C6)\n2. DIRIGE\n   □ Construye en secciones (C19)\n   □ Un cambio a la vez (C9)\n   □ Pide el mapa antes del detalle (C27)\n3. PRUEBA\n   □ Refresca y mira (C9)\n   □ Simulador de celular (C14)\n   □ ¿Entiendo lo que generó? (C8)\n4. CORRIGE\n   □ Reporte con las 4 piezas (C12)\n   □ Itera hasta que quede (C13)\n5. GUARDA\n   □ Respaldo con fecha (C25)\n6. PUBLICA\n   □ Netlify Drop (C16) y presume (C20)</code></pre><p>Escribe tu versión en papel hoy. En C30 lo usas para el proyecto final del mes.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a trabajar contigo en un proyecto de varias sesiones. Este es mi flujo: [pega el tuyo]. Propón cómo ajustarlo para proyectos largos: ¿cuándo conviene cerrar sesión y usar el resumen puente (C4)? ¿Cómo le damos seguimiento a los pendientes entre sesiones?\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El flujo DEV SYSTEM, en orden:", elementos: ["prepara: brief y prompt completo", "dirige: secciones y un cambio a la vez", "prueba: refresca y celular", "corrige: reporte e iteración", "guarda: respaldo con fecha", "publica: Netlify y presume"] },
              { tipo: "relacionar", pares: [["Prepara", "Prompt completo y una misión por conversación"], ["Dirige", "Construir en secciones"], ["Prueba", "Refrescar y probar en celular"], ["Corrige", "Reporte con las 4 piezas"], ["Guarda", "Respaldo con fecha"], ["Publica", "Netlify Drop y presumir"]] },
              { tipo: "completar", frase: "El flujo no te quita libertad: cuando el proyecto se ponga ____, no decides qué hacer — sigues la ____.", banco: ["intenso", "lista", "fácil", "moda"], respuestas: ["intenso", "lista"] },
              { tipo: "vf", afirmacion: "El flujo de trabajo es una plantilla rígida: hay que seguirlo igual aunque tengas una forma propia que funcione mejor.", correcta: false, explicacion: "hoy lo haces tuyo: lo escribes, le agregas tus atajos y lo ajustas con la experiencia." },
              { tipo: "multiple", pregunta: "¿Por qué conviene una rutina fija aunque ya sepas hacer cada paso?", opciones: ["Porque la rutina elimina el olvido justo cuando más cuesta pensar", "Porque la IA lo exige", "Porque sin rutina Netlify no publica", "Porque el flujo vale más que el resultado"], correcta: 0 }
            ]
          },
          {
            id: "m1-c30",
            titulo: "Repaso + arranque del proyecto final del mes",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Última lección de la Materia C y del mes. Hoy haces dos cosas: <strong>repasas el mes entero</strong> y <strong>arrancas el proyecto final</strong>: una página de negocio — real o ficticio — publicada en vivo.</p><p>El repaso, en tres bloques: <strong>1) Entender</strong> — qué es la IA y cómo funciona (C1 y C2), su contexto y memoria (C4), las alucinaciones (C5) y sus límites (C28); <strong>2) Dirigir</strong> — los prompts (C3 y C6), la iteración (C13), los reportes de error (C12), el brief (C18), la construcción en secciones (C19) y tu flujo de trabajo (C29); <strong>3) Construir</strong> — tus primeras páginas (C7 a C20), leer código (C8 y C27), las herramientas del editor (C21 a C24) y los respaldos (C25). Todo el mes fue una sola cosa: dirigir a la IA para construir.</p><p>El proyecto final, el que presume que terminaste el mes: <strong>una página de negocio publicada en vivo</strong>. Puede ser tu negocio, el de alguien que conoces o uno ficticio como Tortas El Güero. Debe cumplir lo que ya sabes: brief primero (C18), secciones construidas y revisadas (C19), imagen (C11), responsiva (C14), revisada con la IA (C27), publicada en Netlify (C16) y respaldada (C25). La prueba final no la califica nadie: la haces tú, abriendo la URL en tu celular.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es el <strong>ensayo general antes de la función</strong>: ya montaste la obra por partes (C7 a C29) y hoy la ensayas completa, con vestuario, luces y público (tu celular y las 3 personas a quienes se la muestras). Un ensayo general no es un repaso tímido: es la obra completa buscando el error de última hora. Y el estreno del proyecto final arranca hoy, en este ensayo — con tu flujo de C29 como guion.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El arranque del proyecto final, paso a paso (usa tu flujo de C29):</p><ol><li><strong>Elige el negocio</strong> y escribe su brief completo (C18): negocio, oferta, público, secciones, estilo, éxito.</li><li><strong>Pásale el brief a la IA</strong> para que te entreviste y afines lo que falte (C18).</li><li><strong>Crea la carpeta</strong> del proyecto (C10) y ábrela en VS Code (C23).</li><li><strong>Construye la primera sección</strong> con el chat integrado (C24), prueba y sigue (C19).</li><li><strong>Completa</strong> imagen, responsiva y revisión final con la IA (C11, C14, C27).</li><li><strong>Publica en Netlify Drop</strong> (C16), prueba en tu celular y respalda (C25).</li><li><strong>Presume</strong> con pregunta concreta (C20) y regresa a pulir lo que te digan.</li></ol><pre><code>CRITERIOS DEL PROYECTO FINAL:\n□ Brief completo antes de pedir código\n□ Construido en secciones, no de un golpe\n□ Imagen en la carpeta, con alt\n□ Se ve bien en celular (simulador F12)\n□ Botón de WhatsApp que abre el chat\n□ Publicado: URL tipo nombre.netlify.app\n□ Respaldado con fecha\n□ Mostrado a 3 personas con pregunta concreta\n\nTerminar el mes es completar esa lista.\nLa prueba final: abres la URL en tu celular\ny la recorres como cliente.</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Autoevaluación del mes",
                html: "<p>El repaso más importante no lo hace la IA: <strong>te lo haces tú</strong>. Responde con honestidad — todos estos puntos los viste este mes:</p><blockquote><p>\"¿Puedo explicar qué es un LLM y por qué gana el que dirige mejor? ¿Escribo prompts completos (C3/C6) y manejo la ventana de contexto (C4)? ¿Reporto errores sin decir solo 'no funciona' (C12)? ¿Leo lo que la IA genera antes de publicarlo (C8/C27)? ¿Conozco los límites y no pego secretos en el chat (C28)? ¿Sigo mi flujo de C29? ¿Publico y respaldo cada proyecto (C16/C25)? ¿Qué lección repetiría antes de arrancar el proyecto final?\"</p></blockquote><p>Cada \"no\" o \"a medias\" te dice exactamente qué lección volver a abrir antes de empezar. Y recuerda el final de C7: guarda tu primera página y compara. En el Mes 12 vas a reír con esta comparación.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Un código ajeno no te deja avanzar. ¿Cuál es el primer movimiento del protocolo de C27?", opciones: ["Pegarlo completo y pedir \"explícamelo todo\"", "Dar contexto: qué es el archivo y qué esperas que haga", "Reescribirlo tú a mano", "Pedirle a la IA que lo borre"], correcta: 1 },
              { tipo: "completar", frase: "Las 4 piezas del buen prompt (C3) son: ____, ____, ____ y ____.", banco: ["contexto", "objetivo", "restricciones", "formato", "colores", "precio"], respuestas: ["contexto", "objetivo", "restricciones", "formato"] },
              { tipo: "relacionar", pares: [["Netlify Drop (C16)", "Publicar la página en vivo"], ["Media query (C14)", "Que se vea bien en celular"], ["src y alt (C11)", "Imagen con ruta y descripción"], ["Brief (C18)", "Decisiones del negocio antes del código"], ["Respaldo con fecha (C25)", "Protegerse de perder el trabajo"]] },
              { tipo: "vf", afirmacion: "Tu flujo personal (C29) se usa solo en proyectos grandes; en los chicos conviene improvisar.", correcta: false, explicacion: "el flujo es la rutina fija que se aplica siempre; en proyectos chicos se vuelve automático, no se salta." },
              { tipo: "ordenar", instruccion: "El arranque del proyecto final, en orden:", elementos: ["escribir el brief del negocio (C18)", "hacer que la IA critique el brief y te entreviste", "crear la carpeta y abrirla en VS Code (C23)", "construir la primera sección y probar (C19)", "publicar en Netlify y probar en tu celular (C16)", "respaldar con fecha (C25)"] },
              { tipo: "quehace", codigo: "\"¿Qué tan seguro estás de esas cifras? ¿Dónde las verifico?\"", pregunta: "Le preguntas eso a la IA antes de publicar un precio en tu página final. ¿Qué estás haciendo?", opciones: ["Perder el tiempo: la IA ya dio el dato", "Aplicar tu protocolo anti-alucinación: dato crítico se verifica en la fuente oficial", "Regañar a la IA", "Pedirle que baje el precio"], correcta: 1 },
              { tipo: "multiple", pregunta: "¿Cuál de estos hace que tu página final esté TERMINADA de verdad?", opciones: ["Que el código sea largo", "Que esté publicada en vivo, probada en tu celular y presumida con pregunta concreta (C16 y C20)", "Que la hayas escrito a mano", "Que la IA la haya hecho en un solo mensaje"], correcta: 1 },
              { tipo: "completar", frase: "El repaso del mes cabe en una frase: todo fue aprender a ____ a la IA para ____.", banco: ["dirigir", "construir", "admirar", "copiar"], respuestas: ["dirigir", "construir"] }
            ]
          }
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
          {
            id: "m2-a6",
            titulo: "git status: tu brújula, el comando que más vas a usar",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>De los miles de comandos de Git, hay uno que correrás más que cualquier otro: <code>git status</code>. Y no por gusto: te dice, en un instante, <strong>en qué punto del flujo está cada archivo</strong> de tu proyecto.</p><p>Recuerda las 3 zonas (lo viste en A5): lo que editas vive en el <strong>working</strong>, lo que preparas con <code>git add</code> vive en el <strong>staging</strong>, y lo que confirmas con <code>git commit</code> vive en el <strong>historial</strong>. <code>git status</code> es el espejo que te muestra, en vivo, qué hay en cada zona:</p><ul><li><strong>Changes to be committed:</strong> cambios que ya preparaste, esperando su foto</li><li><strong>Changes not staged for commit:</strong> archivos modificados que aún no preparas</li><li><strong>Untracked files:</strong> archivos nuevos que Git todavía no conoce</li></ul><p>Y algo más importante que el comando en sí: <strong><code>git status</code> es de solo lectura</strong>. No modifica nada, no borra nada, no toma ninguna foto. Es completamente inofensivo — la brújula perfecta para cuando no sabes ni dónde estás.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git status</code> es la <strong>brújula de tu proyecto</strong>. Cuando te pierdes en la montaña, el primer paso nunca es \"seguir caminando\": es pararte, mirar la brújula y saber dónde estás. En Git pasa igual: cuando una IA te pida un comando y no entiendas el estado de tu repo, corre <code>git status</code> antes que cualquier otra cosa. El mapa te dice el camino; la brújula te dice dónde estás.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Estado típico de un proyecto en plena faena:</p><pre><code>C:\\...\\mi-tienda&gt; git status\nOn branch main\nChanges to be committed:\n        new file:   logo.png            ← preparado, esperando commit\nChanges not staged for commit:\n        modified:   index.html          ← editado, sin preparar\nUntracked files:\n        contacto.html                   ← nuevo, Git no lo conoce</code></pre><p>En tres líneas sabes la historia completa: el logo ya está listo para la foto, la página principal tiene cambios pendientes de preparar, y la página de contacto ni siquiera está registrada. Todo sin abrir un solo archivo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Corrí <code>git status</code> y salió esto: [pega la salida]. Explícame en español claro qué significa cada línea y qué debo hacer a continuación, paso a paso.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace <code>git status</code>?", opciones: ["Muestra el estado actual del repositorio: qué hay en cada zona", "Sube tus cambios a internet", "Borra los archivos que ya no uses", "Toma una fotografía del proyecto"], correcta: 0 },
              { tipo: "completar", frase: "git status es de solo ____: te dice qué pasa, pero nunca ____ tus archivos.", banco: ["lectura", "modifica", "escribe", "sube"], respuestas: ["lectura", "modifica"] },
              { tipo: "vf", afirmacion: "<code>git status</code> puede borrar tus cambios sin avisar.", correcta: false, explicacion: "es de solo lectura; no modifica nada de tu proyecto." },
              { tipo: "relacionar", pares: [["Changes to be committed", "Cambios ya preparados en staging"], ["Changes not staged for commit", "Archivos editados que aún no preparas"], ["Untracked files", "Archivos nuevos que Git aún no conoce"]] },
              { tipo: "quehace", codigo: "nothing to commit, working tree clean", pregunta: "Corres <code>git status</code> y Git responde <code>nothing to commit, working tree clean</code>. ¿Qué significa?", opciones: ["Tu proyecto está vacío y se va a borrar", "No hay cambios pendientes: todo está guardado y al día", "Hay un error y debes reinstalar Git", "Perdiste todos tus archivos"], correcta: 1 }
            ]
          },
          {
            id: "m2-a7",
            titulo: "git add: elegir qué entra en la foto",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya sabes qué es el staging (lo viste en A5): la antesala donde armas la PRÓXIMA fotografía. <code>git add</code> es el comando que mete archivos a esa antesala — y la clave es que <strong>tú eliges cuáles</strong>.</p><p>Sus formas más comunes:</p><ul><li><code>git add index.html</code> — prepara solo ese archivo</li><li><code>git add imagenes/</code> — prepara todo lo que cambió dentro de esa carpeta</li><li><code>git add .</code> — prepara TODOS los cambios del directorio actual (y sus subcarpetas)</li></ul><p>¿Por qué existe elegir? Porque un commit debe contar UNA historia. Si trabajaste en un bug y en colores a la vez, quieres dos fotos: primero el bug, luego los colores. Sin <code>git add</code> selectivo, todo se mezclaría en una sola foto confusa que nadie podrá leer después.</p><p>Importante: <code>git add</code> NO guarda nada de forma permanente. Solo pone cambios en la antesala. La foto real se toma con <code>git commit</code> (siguiente lección).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git add</code> es <strong>armar la maleta para el viaje</strong>. Tienes toda tu ropa regada (working), pero no todo merece ir al viaje de mañana: ¿esa sudadera de invierno en pleno agosto? Se queda. Vas metiendo a la maleta (staging) exactamente lo que quieres llevar, con calma y revisando. <code>git commit</code> es cerrar la maleta y subir al avión. Si te das cuenta de que olvidaste algo, todavía puedes abrirla… pero solo antes de despegar.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git status\nChanges not staged for commit:\n        modified:   index.html\n        modified:   styles.css\n\nC:\\...\\mi-tienda&gt; git add index.html\n\nC:\\...\\mi-tienda&gt; git status\nChanges to be committed:\n        modified:   index.html      ← ya en la maleta\nChanges not staged for commit:\n        modified:   styles.css      ← sigue fuera, esperando</code></pre><p>Dos archivos editados, una sola maleta con uno de ellos. El próximo <code>git commit</code> va a incluir SOLO <code>index.html</code>. Eso es control fino.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Trabajé en varias cosas a la vez y quiero prepararlas en <code>git add</code> separados para hacer un commit por tema. Enséñame la secuencia exacta y dime cómo reviso con <code>git status</code> que cada preparación quedó bien.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda el flujo de preparación de un cambio:", elementos: ["editar index.html", "git add index.html", "git status para verificar"] },
              { tipo: "multiple", pregunta: "¿Qué hace <code>git add .</code>?", opciones: ["Prepara todos los cambios del directorio actual", "Prepara solo el archivo llamado \".\"", "Sube todo el proyecto a GitHub", "Borra los cambios no preparados"], correcta: 0 },
              { tipo: "completar", frase: "El área de ____ se llena con git add; lo que no preparas se queda en ____.", banco: ["staging", "working", "historial", "papelera"], respuestas: ["staging", "working"] },
              { tipo: "vf", afirmacion: "<code>git add</code> guarda tus cambios de forma permanente en el historial.", correcta: false, explicacion: "solo los mete a staging; lo permanente llega con git commit." },
              { tipo: "quehace", codigo: "git add imagenes/", pregunta: "<code>git add imagenes/</code> — ¿qué prepara?", opciones: ["Todos los cambios dentro de la carpeta imagenes", "Una imagen llamada \"/\"", "Todo el proyecto", "Nada, es un comando inválido"], correcta: 0 }
            ]
          },
          {
            id: "m2-a8",
            titulo: "git commit: tomar la foto",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Llegó el momento de la foto. <code>git commit</code> toma todo lo que está en el staging (lo viste en A5) y lo guarda <strong>para siempre</strong> en el historial.</p><p>Su forma básica incluye SIEMPRE un mensaje:</p><pre><code>git commit -m \"Corregir precios de la página principal\"</code></pre><p>El <code>-m</code> significa \"message\": el mensaje que le dejas a tu yo del futuro (a fondo en A9). Si lo corres sin <code>-m</code>, Git abre el editor de texto para que lo escribas ahí — el famoso <code>vim</code> del que nadie sabe salir (lo configuraste en A2).</p><p>Lo que pasa al hacer commit:</p><ul><li>Git guarda la foto con un <strong>hash</strong>: un código único de 40 caracteres. Verás los primeros 7, como <code>a3f9c1</code>.</li><li>El staging se vacía (la caja ya se envió).</li><li>El historial crece una foto.</li></ul><p>Un detalle que te va a salvar: <strong>si no hiciste <code>git add</code>, no hay nada que fotografiar.</strong> El commit solo toma lo que está en la antesala — los cambios del working se quedan esperando su turno.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git commit</code> es <strong>pulsar el obturador de la cámara</strong>. Los pasos anteriores eran preparación: encuadrar (elegir con <code>git add</code>), mirar el visor (<code>git status</code>)… y entonces, clic. La foto queda tomada, numerada con su código único (el hash) y archivada en el álbum. No puedes des-tomarla; puedes tomar más, pero esa foto ya es parte de la historia.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git add index.html\nC:\\...\\mi-tienda&gt; git commit -m \"Corregir precios de la página principal\"\n[main a3f9c1] Corregir precios de la página principal\n 1 file changed, 3 insertions(+), 1 deletion(-)\n\nC:\\...\\mi-tienda&gt; git status\nOn branch main\nnothing to commit, working tree clean</code></pre><p>Lee la segunda línea: <code>[main a3f9c1]</code> = \"en la rama main, foto número a3f9c1\". La tercera línea te da el resumen: 3 líneas añadidas y 1 eliminada, en 1 archivo. Y <code>git status</code> confirma la paz: no queda nada pendiente, el árbol está limpio.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Acabo de preparar mis cambios con <code>git add</code>. Dime si ya estoy listo para hacer <code>git commit</code> y ayúdame a redactar el mensaje: lo que hice fue [describe]. Quiero un mensaje corto, claro y en imperativo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "completar", frase: "Para tomar la foto usas ____ y el mensaje va con la bandera ____.", banco: ["git commit", "-m", "git add", "-a"], respuestas: ["git commit", "-m"] },
              { tipo: "multiple", pregunta: "Corres <code>git commit</code> sin haber hecho <code>git add</code>. ¿Qué pasa?", opciones: ["Se guardan todos tus cambios del working", "No hay nada preparado en staging: Git no toma ninguna foto", "Git toma la foto con los archivos que estén abiertos", "Git borra los cambios no preparados"], correcta: 1 },
              { tipo: "vf", afirmacion: "Un commit queda registrado de forma permanente en el historial.", correcta: true, explicacion: "por eso son la base del control de versiones." },
              { tipo: "quehace", codigo: "git commit -m \"Agregar botón de WhatsApp\"", pregunta: "<code>git commit -m \"Agregar botón de WhatsApp\"</code> — ¿qué hace?", opciones: ["Agrega un botón de WhatsApp al código", "Guarda en el historial una foto con ese mensaje", "Envía un mensaje por WhatsApp", "Descarga un botón de internet"], correcta: 1 },
              { tipo: "relacionar", pares: [["git init", "Instalar la cámara"], ["git add", "Encuadrar la foto"], ["git status", "Mirar el visor"], ["git commit", "Pulsar el obturador"]] }
            ]
          },
          {
            id: "m2-a9",
            titulo: "Mensajes de commit: escribirle a tu yo del futuro",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>El hash identifica cada foto, pero la gente — y las IAs — no leen hashes: leen <strong>mensajes</strong>. El mensaje de commit es lo que tu yo del futuro (y tu equipo en las pull requests, a fondo en B13) va a leer cuando intente entender qué pasó en cada punto de la historia.</p><p>Dos reglas de oro:</p><ol><li><strong>Imperativo, presente:</strong> \"Corregir precios\", no \"Corregí precios\" ni \"Precios corregidos\". Piensa: \"esta foto hace tal cosa\".</li><li><strong>Qué y por qué, no cómo:</strong> el código ya muestra el cómo. El mensaje explica la intención: <code>Corregir precio duplicado en el checkout</code> vale más que <code>cambiar linea 42</code>.</li></ol><p>Ejemplos reales:</p><pre><code>malo:   \"cambios\"\nmalo:   \"asdf\"\nmalo:   \"fix\"\nbueno:  \"Corregir error al iniciar sesión\"\nmejor:  \"Corregir error al iniciar sesión: validar correo vacío\"</code></pre><p>¿Por qué \"mejor\" gana? Porque en 6 meses le dice a tu yo del futuro exactamente qué se corrigió, y a la IA que interpreta el historial le da el contexto para encontrar el commit correcto.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El mensaje de commit es <strong>la nota que le dejas a tu yo del futuro</strong>. Como cuando guardas una caja en el clóset y escribes encima \"jerseys de invierno\" en vez de \"cosas\". Dentro de dos años no quieres abrir veinte cajas con la leyenda \"cosas\": quieres saber exactamente qué hay en cada una sin abrirla. Un historial con buenos mensajes es un archivero que se lee sin abrir cajones.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Dos historiales del MISMO proyecto:</p><pre><code>Historial inútil:\nb7a201 cambios\nc4f19f asdf\na3f9c1 cambios\n\nHistorial profesional:\nb7a201 Corregir bug de sesión caducada\nc4f19f Añadir página de contacto\na3f9c1 Corregir precios de la página principal</code></pre><p>Con el segundo puedes encontrar la foto que rompió algo en segundos. Con el primero, a adivinar. La única diferencia es la disciplina de escribir dos líneas de texto.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a hacer un commit. Esto fue lo que cambié: [describe los cambios]. Redáctame el mensaje perfecto en imperativo, en una línea, y explícame por qué es mejor que esta versión mía: [pega tu borrador].\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es el mejor mensaje de commit?", opciones: ["cambios", "arreglos xd", "Corregir precio duplicado en el checkout", "ñññ"], correcta: 2 },
              { tipo: "completar", frase: "Los mensajes de commit van en ____: \"Añadir X\", no \"Añadí X\" ni \"X añadido\".", banco: ["imperativo", "pasado", "futuro", "inglés"], respuestas: ["imperativo"] },
              { tipo: "vf", afirmacion: "El mensaje de commit debe explicar el CÓMO (qué código se escribió), no el qué ni el por qué.", correcta: false, explicacion: "el código ya muestra el cómo; el mensaje explica la intención: qué y por qué." },
              { tipo: "relacionar", pares: [["\"cambios\"", "No dice nada útil"], ["\"asdf\"", "Texto sin sentido"], ["\"Corregir precio duplicado en el checkout\"", "Claro, específico y accionable"], ["\"fix\"", "Muy vago para encontrar algo después"]] },
              { tipo: "ordenar", instruccion: "Pasos para escribir un buen mensaje de commit:", elementos: ["pensar qué cambió y por qué", "escribirlo en imperativo", "mantenerlo corto y específico"] }
            ]
          },
          {
            id: "m2-a10",
            titulo: "git log: leer la historia de tu proyecto",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Guardaste fotos. Ahora aprende a <strong>leer el álbum</strong>. <code>git log</code> muestra la historia de tu proyecto, del commit más nuevo al más viejo:</p><pre><code>git log\n\ncommit a3f9c1d2b48f5a71e3c09d87a2b4c5d6e7f8a9b0\nAuthor: Raymundo Flores &lt;rayfg96@gmail.com&gt;\nDate:   Sun Aug 16 12:30:00 2026 -0600\n\n    Corregir precios de la página principal</code></pre><p>Cada bloque es una foto con su ficha:</p><ul><li><strong>El hash</strong> (<code>a3f9c1d2…</code>): el número único de la foto</li><li><strong>Autor y fecha:</strong> quién la tomó y cuándo (por eso configuraste tu nombre en A2)</li><li><strong>El mensaje:</strong> la nota de la foto (la calidad que trabajamos en A9)</li></ul><p>En la vida real casi siempre lo usarás en versión compacta:</p><pre><code>git log --oneline\na3f9c1 (HEAD -&gt; main) Corregir precios de la página principal\n7d2b84 Cambiar colores a paleta nueva\n1e8a05 Versión inicial de la tienda</code></pre><p>Una foto por línea. Ese <code>(HEAD -&gt; main)</code> te dice dónde estás parado. Y ojo: <code>git log</code> también es de solo lectura, cero riesgo. Es la historia que compartirás con tu equipo en GitHub (a fondo en B13).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git log</code> es <strong>abrir el álbum de fotos familiar</strong>. Las fotos están ordenadas, la más reciente hasta arriba, y cada una tiene su fecha, quién la tomó y una leyenda al pie (el mensaje). Revisar el álbum no cambia nada: solo te cuenta la historia. Y una buena historia — con buenas leyendas — es la diferencia entre un álbum que entiendes y una caja de fotos sueltas.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El flujo completo: tomas la foto y luego lees la historia que acabas de crear:</p><pre><code>C:\\...\\mi-tienda&gt; git commit -m \"Añadir página de contacto\"\n[main 7d2b84] Añadir página de contacto\n 1 file changed, 12 insertions(+)\n\nC:\\...\\mi-tienda&gt; git log --oneline\n7d2b84 (HEAD -&gt; main) Añadir página de contacto\na3f9c1 Corregir precios de la página principal\n1e8a05 Versión inicial de la tienda</code></pre><p>La foto nueva aparece hasta arriba. La historia tiene tres capítulos, y el más reciente es el que acabas de escribir. Así se lee un proyecto: con <code>git log</code>.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Esta es la salida de mi <code>git log --oneline</code>: [pégala]. Explícame qué historia cuenta mi proyecto, cuál es el commit más reciente, y si los mensajes tienen buena calidad o debería mejorarlos.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué muestra <code>git log</code>?", opciones: ["Los errores del proyecto", "La historia de commits, del más nuevo al más viejo", "Los archivos de la carpeta actual", "Los mensajes que te escribió la IA"], correcta: 1 },
              { tipo: "completar", frase: "Cada commit tiene un ____ único (el hash), un autor y un ____ que explica qué cambió.", banco: ["identificador", "mensaje", "precio", "vínculo"], respuestas: ["identificador", "mensaje"] },
              { tipo: "quehace", codigo: "git log --oneline", pregunta: "<code>git log --oneline</code> — ¿qué te muestra?", opciones: ["Cada commit en una sola línea compacta", "Los archivos modificados en detalle", "La carpeta .git al completo", "Un error de Git"], correcta: 0 },
              { tipo: "vf", afirmacion: "<code>git log</code> es de solo lectura: no modifica ni borra nada.", correcta: true, explicacion: "solo muestra el historial." },
              { tipo: "relacionar", pares: [["a3f9c1", "Hash único del commit"], ["(HEAD -> main)", "El commit actual y la rama donde estás"], ["Raymundo Flores", "Autor de la foto"], ["\"Corregir precios\"", "El mensaje del commit"]] }
            ]
          },
          {
            id: "m2-a11",
            titulo: ".gitignore: lo que Git NUNCA debe rastrear",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cada vez que creas un archivo nuevo, Git lo marca como <strong>untracked</strong> (¿lo recuerdas de A6?) — y <code>git status</code> te lo recuerda cada vez que lo corres. Pero no todo lo que hay en tu carpeta merece entrar al historial. Hay archivos que <strong>NUNCA</strong> deben ser rastreados:</p><ul><li><strong>Secretos:</strong> <code>.env</code>, <code>.env.local</code> — guardan contraseñas, API keys y tokens. Si se commitean, quedan en el historial <strong>para siempre</strong>, y cualquiera con acceso al repo puede leerlos.</li><li><strong>Pesadillas de peso:</strong> <code>node_modules/</code> — miles de archivos de librerías que se regeneran con <code>npm install</code> (lo viste en A13 del Mes 1). Versionarlos hace tu repo gigante y lentísimo.</li><li><strong>Salidas generadas:</strong> <code>dist/</code>, <code>build/</code> — lo que produce una compilación. Se puede volver a generar; no tiene historia que contar.</li><li><strong>Basura del sistema:</strong> <code>.DS_Store</code> (Mac), archivos temporales, logs.</li></ul><p>La solución es un archivo llamado <strong><code>.gitignore</code></strong>: texto plano, en la raíz de tu proyecto, donde le dices a Git qué no debe rastrear. Un patrón por línea; <code>#</code> para comentarios:</p><pre><code># Secretos\n.env\n.env.local\n\n# Dependencias (se regeneran con npm install)\nnode_modules/\n\n# Salidas de compilación\ndist/\n\n# Basura del sistema\n.DS_Store</code></pre><p>Detalle que ahorra dramas: <strong><code>.gitignore</code> solo aplica a archivos que Git todavía no rastrea</strong>. Si ya commiteaste <code>.env</code> por error, escribir su nombre aquí no lo va a ocultar: hay que sacarlo del rastreo con <code>git rm --cached</code>. La buena noticia: cuando la IA te diga \"olvidé ignorar un archivo\", ya sabrás por qué sigue apareciendo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>.gitignore</code> es como <strong>las reglas de la casa antes de la visita</strong>. El invitado (Git) es curioso y lo mira todo; el <code>.gitignore</code> es la puerta con candado que le avisa: \"esta recámara no se toca\". Los archivos ignorados no dejan de existir — siguen en tu computadora — solo que Git ya no los ve, no los lista y nunca los fotografía.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Sin <code>.gitignore</code>, tu <code>git status</code> es un caos:</p><pre><code>C:\\...\\mi-tienda&gt; git status\nUntracked files:\n        .env\n        node_modules/\n        dist/\n        .DS_Store\n        index.html</code></pre><p>Después de crear el <code>.gitignore</code> con las reglas de arriba:</p><pre><code>C:\\...\\mi-tienda&gt; git status\nUntracked files:\n        index.html</code></pre><p>Solo queda lo que de verdad quieres versionar. <code>git status</code> (A6) volvió a ser tu brújula en vez de un muro de ruido.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Estoy iniciando un proyecto en [lenguaje o framework]. Crea un archivo <code>.gitignore</code> completo para él, agrupado por secciones (secretos, dependencias, build, sistema), y explícame cada línea en una línea de español. Dime qué riesgos de seguridad evito con cada grupo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál de estos archivos NUNCA debe entrar al historial de Git?", opciones: ["index.html", ".env con contraseñas y claves", "styles.css", "logo.png"], correcta: 1 },
              { tipo: "completar", frase: "El archivo que le dice a Git qué no rastrear se llama ____ y vive en la ____ del proyecto.", banco: [".gitignore", "raíz", "carpeta .git", "escritorio"], respuestas: [".gitignore", "raíz"] },
              { tipo: "vf", afirmacion: "Si ya commiteaste un archivo, escribir su nombre en el .gitignore lo oculta del historial.", correcta: false, explicacion: "el .gitignore solo aplica a archivos que Git aún no rastrea; lo ya commiteado necesita git rm --cached." },
              { tipo: "relacionar", pares: [[".env", "Contraseñas y claves"], ["node_modules/", "Dependencias que se regeneran"], ["dist/", "Salida de compilación"], [".DS_Store", "Basura del sistema"]] },
              { tipo: "multiple", pregunta: "¿Por qué no se versiona node_modules/?", opciones: ["Porque es ilegal compartir librerías", "Porque son miles de archivos que se regeneran con npm install; versionarlos hincha el repo", "Porque Git no puede trabajar con librerías", "Porque ocupa muy poco y no importa"], correcta: 1 }
            ]
          },
          {
            id: "m2-a12",
            titulo: "git diff: ver exactamente qué cambió, línea por línea",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><code>git status</code> (A6) te dice QUÉ archivos cambiaron. <code>git diff</code> te dice <strong>exactamente qué cambió dentro de ellos</strong>, línea por línea. Es la lupa del proyecto.</p><pre><code>git diff</code></pre><p>Muestra las diferencias de los archivos modificados del working. Su salida se lee así:</p><pre><code>diff --git a/index.html b/index.html\n--- a/index.html\n+++ b/index.html\n@@ -10,6 +10,7 @@\n &lt;h1&gt;Bienvenido a mi tienda&lt;/h1&gt;\n-&lt;h2&gt;Precio: $100&lt;/h2&gt;\n+&lt;h2&gt;Precio: $99&lt;/h2&gt;\n+&lt;p&gt;Envío gratis hoy&lt;/p&gt;</code></pre><ul><li><code>--- a/index.html</code> y <code>+++ b/index.html</code>: la versión vieja (a) frente a la nueva (b)</li><li><code>-</code>: la línea que se eliminó o cambió</li><li><code>+</code>: la línea nueva o la que la reemplaza</li><li><code>@@ -10,6 +10,7 @@</code>: las coordenadas — dónde empieza el cambio y cuántas líneas abarca en cada versión</li></ul><p>Dos variantes que vas a usar siempre:</p><pre><code>git diff              # cambios del working (sin preparar)\ngit diff --staged     # cambios que ya están en staging</code></pre>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git diff</code> es como <strong>el marcador rojo del profesor sobre tu ensayo</strong>: no te dice \"trajiste cambios\", te señala tachando lo que sobra y subrayando lo que agregaste, palabra por palabra. <code>git status</code> es el profesor anunciando \"hay trabajo nuevo que revisar\"; <code>git diff</code> es él marcándote cada línea exacta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git status\nChanges not staged for commit:\n        modified:   index.html\n\nC:\\...\\mi-tienda&gt; git diff\n--- a/index.html\n+++ b/index.html\n@@ -8,4 +8,5 @@\n &lt;p&gt;Bienvenido a mi tienda&lt;/p&gt;\n+&lt;a href=\"contacto.html\"&gt;Contáctanos&lt;/a&gt;</code></pre><p>Un solo cambio: se agregó un enlace. Antes de commitear, revisas el detalle exacto — y si te gusta lo que ves, preparas y fotografías. Si ya habías hecho <code>git add</code>, usa <code>git diff --staged</code> para ver las diferencias de lo que está en la maleta.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a correr <code>git diff</code> en mi proyecto. Te pego la salida: [pégalo aquí]. Explícame en español qué cambió, línea por línea, y si ves algo riesgoso (un secreto, un archivo que no debería ir) dímelo ANTES de que haga commit.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "quehace", codigo: "-&lt;h2&gt;Precio: $100&lt;/h2&gt;\n+&lt;h2&gt;Precio: $99&lt;/h2&gt;", pregunta: "En la salida de git diff, ¿qué significan estas dos líneas?", opciones: ["Que hay dos precios y Git no sabe cuál elegir", "La línea con - es la versión vieja; la línea con + es la nueva", "Que el archivo se duplicó", "Que hubo un conflicto de merge"], correcta: 1 },
              { tipo: "multiple", pregunta: "¿Qué comando muestra las diferencias de los cambios que ya están en staging?", opciones: ["git diff --staged", "git diff --clean", "git status --diff", "git log --diff"], correcta: 0 },
              { tipo: "completar", frase: "En git diff, la línea con el signo ____ muestra lo que se eliminó, y la que tiene ____ muestra lo nuevo.", banco: ["-", "+", "=", "*"], respuestas: ["-", "+"] },
              { tipo: "vf", afirmacion: "git diff modifica los archivos para arreglar las diferencias que encuentra.", correcta: false, explicacion: "es de solo lectura: muestra diferencias, no cambia nada." },
              { tipo: "ordenar", instruccion: "Acomoda el flujo para revisar un cambio antes de commitearlo:", elementos: ["editar el archivo", "git status para ver qué cambió", "git diff para ver el detalle línea por línea", "git add y git commit si estás conforme"] }
            ]
          },
          {
            id: "m2-a13",
            titulo: "Deshacer I: git restore (antes del commit)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hasta ahora todo era guardar. Bienvenido a las tres lecciones de <strong>deshacer</strong>, y a la regla que las ordena: la herramienta correcta depende de <strong>si tu cambio ya llegó al commit</strong> o no.</p><p><code>git restore</code> es el deshacer de <strong>antes</strong> del commit: trabaja con los cambios que aún viven en el working o en el staging. Dos formas:</p><pre><code>git restore index.html\n# descarta los cambios del working → vuelve a la versión del último commit\n\ngit restore --staged index.html\n# saca el archivo del staging → deja de estar preparado (conserva sus cambios)</code></pre><ul><li><strong>Quieres borrar cambios que no has guardado:</strong> <code>git restore index.html</code> — el archivo regresa a como estaba en el último commit.</li><li><strong>Preparaste por accidente con <code>git add</code>:</strong> <code>git restore --staged index.html</code> — sale de la maleta, pero sus cambios se conservan en el working.</li></ul><p><strong>La advertencia real:</strong> <code>git restore</code> sin <code>--staged</code> <strong>borra los cambios de forma permanente</strong>. No hay papelera ni deshacer-del-deshacer. Úsalo solo cuando estés seguro de que esos cambios ya no los quieres — pregúntale a la IA antes si tienes dudas.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El staging es una maleta (lo viste en A7) y el working tu recámara. <code>git restore --staged</code> es <strong>sacar de la maleta lo que metiste por accidente</strong>: la prenda vuelve a tu recámara intacta, lista para decidir después. <code>git restore</code> sin bandera es más fuerte: es <strong>tirar la prenda a la basura</strong>, no a la lavandería. Piensa antes de tirar.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git add index.html      ← metiste el archivo a staging\n\nC:\\...\\mi-tienda&gt; git status\nChanges to be committed:\n        modified:   index.html\n\nC:\\...\\mi-tienda&gt; git restore --staged index.html\n\nC:\\...\\mi-tienda&gt; git status\nChanges not staged for commit:\n        modified:   index.html      ← salió de staging, sigue modificado\n\nC:\\...\\mi-tienda&gt; git restore index.html    ← ahora sí: borra los cambios del working\n\nC:\\...\\mi-tienda&gt; git status\nnothing to commit, working tree clean        ← todo como al principio</code></pre><p>Dos pasos, dos decisiones: primero sacaste el archivo de la maleta conservando sus cambios, y después decidiste descartarlos del todo. La foto del último commit quedó intacta.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Modifiqué un archivo y quiero deshacerlo. Corrí <code>git status</code> y esto salió: [pégalo]. Dime exactamente qué comando usar (¿restore a secas o con --staged?), qué pasará con mis cambios, y si hay algo de lo que debería hacer respaldo antes.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuándo se usa git restore?", opciones: ["Para deshacer cambios que aún no llegaron al commit", "Para deshacer cambios ya commiteados", "Para subir el proyecto a GitHub", "Para borrar un commit del historial"], correcta: 0 },
              { tipo: "completar", frase: "git restore ____ saca un archivo del staging sin borrar sus cambios; git restore a secas ____ los cambios del working.", banco: ["--staged", "borra", "duplica", "prepara"], respuestas: ["--staged", "borra"] },
              { tipo: "quehace", codigo: "git restore --staged index.html", pregunta: "<code>git restore --staged index.html</code> — ¿qué hace exactamente?", opciones: ["Borra los cambios del archivo para siempre", "Saca el archivo del staging pero conserva sus cambios en el working", "Guarda el archivo en el historial", "Restaura el archivo desde GitHub"], correcta: 1 },
              { tipo: "vf", afirmacion: "git restore sin --staged puede borrar cambios sin recuperación.", correcta: true, explicacion: "descarta los cambios del working de forma permanente; úsalo solo con certeza." },
              { tipo: "relacionar", pares: [["git restore index.html", "Borrar cambios no guardados del working"], ["git restore --staged index.html", "Solo sacar del staging, conservando cambios"], ["git commit", "Guardar la foto en el historial"]] }
            ]
          },
          {
            id: "m2-a14",
            titulo: "Deshacer II: git revert (después del commit, sin borrar historia)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cuando tu cambio <strong>ya llegó al commit</strong>, <code>git restore</code> (A13) ya no aplica. Ahí entra el deshacer de la historia: <code>git revert</code>.</p><p>Lo clave: <code>git revert</code> <strong>NO borra el commit malo — crea un commit NUEVO que deshace sus cambios</strong>. El historial queda completo y legible:</p><pre><code>git revert a3f9c1   ← el hash del commit que quieres deshacer\n\n[main b48d77] Revert \"Corregir precios de la página principal\"\n 1 file changed, 1 insertion(+), 1 deletion(-)</code></pre><p>Fíjate: el commit <code>a3f9c1</code> sigue en el historial, y encima aparece <code>b48d77</code>, que hace lo contrario. Dos ventajas gigantes:</p><ul><li><strong>El pasado queda intacto:</strong> cualquiera puede leer qué pasó y qué se deshizo</li><li><strong>Es seguro en equipo:</strong> no reescribe nada compartido, así que no rompe el historial de nadie (a diferencia de <code>git reset</code>, que verás en A15)</li></ul><p>¿Cómo sabes el hash del commit a deshacer? Con <code>git log --oneline</code> (A10). Esta es la herramienta por default para deshacer algo ya publicado — y será tu aliada cuando subas el repo a GitHub (Materia B).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git revert</code> es como <strong>publicar una fe de erratas en el periódico</strong>. El artículo equivocado ya salió impreso; no lo arrancas de los periódicos ya distribuidos (eso sería reescribir la historia). Publicas un artículo NUEVO que dice \"corrige lo anterior\". Ambos quedan en el archivo: los lectores ven la corrección y el archivo histórico sigue completo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El flujo completo: encuentras el commit que rompió algo, lo reviertes y verificas:</p><pre><code>C:\\...\\mi-tienda&gt; git log --oneline\na3f9c1 Corregir precios de la página principal   ← este rompió algo\n7d2b84 Añadir página de contacto\n\nC:\\...\\mi-tienda&gt; git revert a3f9c1\n[main b48d77] Revert \"Corregir precios de la página principal\"\n 1 file changed, 1 insertion(+), 1 deletion(-)\n\nC:\\...\\mi-tienda&gt; git log --oneline\nb48d77 Revert \"Corregir precios de la página principal\"\n a3f9c1 Corregir precios de la página principal\n7d2b84 Añadir página de contacto</code></pre><p>La historia ahora cuenta el relato completo: alguien hizo algo, y después alguien lo deshizo. Nada se borró, nada se reescribió.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Me di cuenta de que mi último commit rompió algo. Corrí <code>git log --oneline</code> y esto salió: [pégalo]. Ayúdame a identificar cuál commit deshacer y dame el comando exacto de <code>git revert</code>. Confírmame que no se va a borrar nada del historial.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace git revert?", opciones: ["Borra el commit malo del historial", "Crea un commit NUEVO que deshace los cambios del commit objetivo", "Reescribe el historial para eliminar la evidencia", "Restaura archivos del working sin tocar la historia"], correcta: 1 },
              { tipo: "completar", frase: "git revert se usa cuando el cambio ya llegó al ____ y, en vez de borrarlo, crea un commit ____ que lo deshace.", banco: ["historial", "nuevo", "working", "vacío"], respuestas: ["historial", "nuevo"] },
              { tipo: "vf", afirmacion: "git revert es seguro para trabajar en equipo porque no reescribe el historial compartido.", correcta: true, explicacion: "crea un commit nuevo encima; el pasado queda intacto." },
              { tipo: "quehace", codigo: "git revert 7d2b84", pregunta: "<code>git revert 7d2b84</code> — ¿qué hace?", opciones: ["Borra la carpeta del proyecto", "Crea un commit que deshace los cambios del commit 7d2b84, sin tocar los demás", "Viaja al estado del commit 7d2b84", "Copia el commit 7d2b84 en otro proyecto"], correcta: 1 },
              { tipo: "relacionar", pares: [["git restore", "Deshacer antes del commit"], ["git revert", "Deshacer después del commit, sin borrar historia"], ["git log --oneline", "Encontrar el hash del commit a revertir"]] }
            ]
          },
          {
            id: "m2-a15",
            titulo: "Deshacer III: git reset y por qué da miedo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Llegamos a la herramienta que más respeto merece. <code>git reset</code> mueve el puntero del historial hacia atrás y, según la bandera que uses, <strong>puede borrar commits y cambios para siempre</strong>.</p><p>Partimos de este historial:</p><pre><code>c48d77 Agregar botón de WhatsApp   ← commit actual (HEAD)\na3f9c1 Corregir precios\n1e8a05 Versión inicial</code></pre><p><code>git reset</code> te deja \"quitar\" el commit actual. Tres modos, de menos a más destructivo:</p><pre><code>git reset --soft 1e8a05\n# mueve el puntero atrás, PERO deja los cambios en el staging\n\ngit reset 1e8a05    # equivalente a --mixed (el default)\n# mueve el puntero atrás y deja los cambios en el working\n\ngit reset --hard 1e8a05\n# mueve el puntero atrás y BORRA los cambios para siempre</code></pre><p><strong>EL AVISO QUE TE DEBE QUEDAR GRABADO:</strong></p><ul><li><code>git reset --hard</code> borra los cambios del working <strong>en el instante, sin papelera ni recuperación</strong>.</li><li>Los commits que \"saliste\" quedan huérfanos: sin nadie que apunte a ellos, Git los limpia con el tiempo. Recuperarlos después es una misión de rescate con herramientas avanzadas (reflog), no algo para hacer a la ligera.</li><li>Si esos commits ya estaban <strong>compartidos</strong> (en GitHub o con tu equipo), el reset reescribe la historia de TODOS. Es el error que rompe el trabajo ajeno.</li></ul><p>Regla práctica de oro: <strong>si el commit ya fue compartido, usa <code>git revert</code> (A14).</strong> <code>git reset</code> queda para cuando el commit es tuyo, reciente y no ha salido de tu computadora — y aun así, piensa dos veces antes del <code>--hard</code>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El historial de Git es una <strong>película</strong>. <code>git revert</code> agrega una escena nueva que deshace lo que pasó: la película sigue contando todo. <code>git reset --hard</code> es <strong>cortar y quemar el metraje</strong>: las escenas que quitaste dejan de existir en la cinta, y quienes ya vieron el estreno (tu equipo) se quedan con una versión distinta a la tuya. Por eso da miedo: puedes quemar escenas que otros ya vieron.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Decides que el último commit fue un error y quieres volver a antes de él. Con <code>--hard</code>, todo lo que vivía en ese commit desaparece:</p><pre><code>C:\\...\\mi-tienda&gt; git log --oneline\nc48d77 Agregar botón de WhatsApp\n a3f9c1 Corregir precios\n1e8a05 Versión inicial\n\nC:\\...\\mi-tienda&gt; git reset --hard a3f9c1\nHEAD is now at a3f9c1 Corregir precios\n\nC:\\...\\mi-tienda&gt; git log --oneline\na3f9c1 Corregir precios\n1e8a05 Versión inicial</code></pre><p>El commit <code>c48d77</code> y todos sus cambios <strong>se fueron</strong>. El mensaje <code>HEAD is now at a3f9c1</code> confirma que el puntero se movió. Antes de correr esto, responde en voz alta: ¿ese commit ya lo subí o lo compartí? Si la respuesta es sí, cierra este comando y usa revert.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero deshacer un commit local que aún no he compartido. Te pego mi <code>git log --oneline</code>: [pégalo]. Quiero eliminar [este commit] sin perder [estos otros cambios]. Recomiéndame entre --soft, --mixed y --hard, dime exactamente qué perderé en cada opción, y adviérteme ANTES de darme el comando final si hay cualquier riesgo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace git reset --hard?", opciones: ["Mueve el puntero hacia atrás y borra los cambios para siempre", "Crea un commit nuevo que deshace el anterior", "Pausa el trabajo y lo guarda aparte", "Borra solo el mensaje del último commit"], correcta: 0 },
              { tipo: "ordenar", instruccion: "Acomoda los modos de git reset de menor a mayor destrucción:", elementos: ["--soft", "--mixed (default)", "--hard"] },
              { tipo: "vf", afirmacion: "Es seguro usar git reset --hard en commits que ya subiste y compartiste con tu equipo.", correcta: false, explicacion: "reescribe la historia compartida y puede romper el trabajo de todos; para eso existe git revert." },
              { tipo: "completar", frase: "git reset --soft deja los cambios en el ____, --mixed los deja en el ____, y --hard los ____.", banco: ["staging", "working", "borra", "sube"], respuestas: ["staging", "working", "borra"] },
              { tipo: "quehace", codigo: "git reset --hard a3f9c1", pregunta: "<code>git reset --hard a3f9c1</code> — ¿qué hace exactamente?", opciones: ["Salta al commit a3f9c1 conservando todos los cambios", "Mueve el puntero a a3f9c1 y borra los commits y cambios posteriores sin recuperación", "Crea un commit que revierte a a3f9c1", "Borra la rama completa"], correcta: 1 }
            ]
          },
          {
            id: "m2-a16",
            titulo: "Ramas: qué son y por qué lo cambian todo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Desde la lección A1 conoces a las ramas como la solución a un problema: <strong>probar una idea sin arriesgar lo que ya funciona</strong>. Hoy las conoces de verdad.</p><p>Una <strong>rama</strong> (branch, en inglés) es una <strong>línea de desarrollo separada</strong>: una copia paralela de tu proyecto donde puedes trabajar sin tocar la rama principal. La rama principal se llama <code>main</code> (lo viste en A4), y es la versión que todo el mundo considera \"la buena\".</p><p>La idea en dos líneas:</p><ul><li>Todo lo que hagas en <code>main</code> queda en <code>main</code>.</li><li>Todo lo que hagas en tu rama nueva queda <strong>solo en ella</strong>, hasta que tú decidas unirlos (A19).</li></ul><p>¿Por qué esto lo cambia todo?</p><ul><li><strong>Probar sin miedo:</strong> le pides a la IA un cambio grande, lo haces en una rama, lo pruebas... y si el resultado no te gusta, descartas la rama y <code>main</code> sigue exactamente como estaba.</li><li><strong>Varios frentes a la vez:</strong> cada tarea (un botón, un bug, un rediseño) puede tener su propia rama, sin mezclarse.</li><li><strong>Colaboración limpia:</strong> varias personas — o varias IAs — trabajan en paralelo sin pisarse los pies.</li></ul><p>Visualmente, el historial deja de ser una línea recta y se vuelve un <strong>árbol</strong>: un tronco (<code>main</code>) del que crecen ramas que pueden volver a unirse. Ese famoso \"árbol de commits\" que verás en A24 es exactamente esto.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Git es un <strong>árbol</strong>, literal. <code>main</code> es el tronco: sostiene todo y no se corta. Una rama crece desde el tronco: puedes podarla, hacerla crecer en otra dirección o dejarla morir, y el tronco no se entera. Cuando la rama cumple su misión, se injerta de vuelta al tronco (merge, A19). Si la idea no sirvió, se corta la rama y el tronco sigue ahí, con la vida que ya tenía.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Así se ve el historial con ramas en acción:</p><pre><code>main:    c1 --- c2 --- c3\n\nrama:    c1 --- c2 --- t1 --- t2\n\nTu rama arrancó desde c2: tiene a c1 y c2, y además sus propios commits t1 y t2.</code></pre><p>Los commits <code>t1</code> y <code>t2</code> solo existen en la rama. <code>main</code> tiene su propia historia y no se entera de lo que pasa allá arriba. Para saber en qué rama estás parado, Git te lo dice cada vez que pides estado:</p><pre><code>C:\\...\\mi-tienda&gt; git status\nOn branch main</code></pre><p><code>On branch main</code> es Git diciéndote: \"estás parado en el tronco\". En A17 aprendes a crear ramas y moverte entre ellas.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo una idea grande que quiero probar sin tocar mi proyecto estable. Estoy en la rama main. Explícame qué es una rama en mis propias palabras y cómo me conviene trabajar: ¿en qué rama pido los cambios, cómo los pruebo, y qué pasa si no me gusta el resultado?\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una rama en Git?", opciones: ["Una copia del proyecto guardada en una USB", "Una línea de desarrollo separada donde trabajas sin tocar main", "Un tipo especial de commit", "Un archivo del repositorio"], correcta: 1 },
              { tipo: "vf", afirmacion: "El trabajo que haces en una rama nueva afecta automáticamente a main.", correcta: false, explicacion: "los cambios de una rama no llegan a main hasta que haces merge (A19)." },
              { tipo: "relacionar", pares: [["Quiero probar una idea riesgosa", "La trabajo en una rama; main queda intacto"], ["La IA hará un cambio grande", "Lo pido en una rama; si falla, la descarto"], ["Somos varias personas en el equipo", "Cada quien en su rama, sin pisarse"], ["La rama principal por default", "main"]] },
              { tipo: "completar", frase: "Una rama es una ____ de desarrollo separada: lo que haces ahí no toca la rama ____.", banco: ["línea", "main", "carpeta", "final"], respuestas: ["línea", "main"] },
              { tipo: "ordenar", instruccion: "Secuencia para probar una idea nueva sin riesgo:", elementos: ["crear una rama nueva", "moverte a ella", "trabajar y commitear ahí", "unirla a main con merge o descartarla"] }
            ]
          },
          {
            id: "m2-a17",
            titulo: "git branch y git switch: crear y moverte entre ramas",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Dos comandos manejan toda la vida de las ramas: <code>git branch</code> y <code>git switch</code>.</p><p><strong>git branch</strong> hace dos cosas según cómo lo uses:</p><ul><li><code>git branch</code> — lista todas las ramas. El <strong>asterisco (*)</strong> marca en cuál estás parado.</li><li><code>git branch nombre</code> — crea una rama nueva con ese nombre.</li></ul><p><strong>git switch</strong> te mueve entre ramas:</p><ul><li><code>git switch nombre</code> — cambia a la rama que ya existe.</li><li><code>git switch -c nombre</code> — crea la rama Y te mueves a ella en un solo paso (el <code>-c</code> es de <em>create</em>).</li></ul><p>Dato que te ahorra confusión: en tutoriales viejos verás <code>git checkout</code> para moverte. Es el comando antiguo; <code>git switch</code> es su reemplazo moderno. Ambos funcionan, pero hoy se escribe <code>git switch</code>.</p><p>Reglas de nombres que evitan dolores de cabeza:</p><ul><li>Minúsculas y palabras separadas con guion: <code>boton-whatsapp</code>, <code>corregir-precios</code>.</li><li>Que el nombre describa la tarea, no a ti: <code>arreglo-login</code> sí, <code>cambios-finales-v2</code> no.</li></ul><p>En A18 trabajas dentro de una rama; aquí aprendes a crearla y moverte. Una cosa a la vez.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git branch</code> es <strong>ver la lista de expedientes</strong> del archivero: te muestra cuáles existen y en cuál estás (el asterisco). <code>git switch</code> es <strong>caminar a otro escritorio</strong>: tu silla (HEAD) se mueve, y lo que está sobre el escritorio cambia. Solo puedes sentarte en un escritorio a la vez — y los commits que hagas quedan sobre el escritorio donde estés sentado.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Sesión completa: crear una rama y moverte a ella.</p><pre><code>C:\\...\\mi-tienda&gt; git branch\n* main\n\nC:\\...\\mi-tienda&gt; git branch boton-whatsapp\n\nC:\\...\\mi-tienda&gt; git branch\n  boton-whatsapp\n* main\n\nC:\\...\\mi-tienda&gt; git switch boton-whatsapp\nSwitched to branch 'boton-whatsapp'\n\nC:\\...\\mi-tienda&gt; git branch\n* boton-whatsapp\n  main</code></pre><p>Y el atajo para crear y moverte en uno solo:</p><pre><code>C:\\...\\mi-tienda&gt; git switch -c corregir-precios\nSwitched to a new branch 'corregir-precios'</code></pre><p>Fíjate en el asterisco: después de <code>git switch</code>, tu silla se movió. Cualquier commit que hagas de aquí en adelante (A18) quedará en <code>boton-whatsapp</code> o <code>corregir-precios</code>, no en <code>main</code>.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a trabajar en [describe la tarea] sin tocar mi rama main. Dame los comandos exactos para crear una rama con un buen nombre y moverme a ella, y dime cómo confirmo con git status que ya no estoy en main antes de empezar.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué comando lista todas las ramas y marca en cuál estás con un asterisco?", opciones: ["git list", "git branch", "git switch", "git log"], correcta: 1 },
              { tipo: "completar", frase: "Para CREAR una rama usas git ____ nombre; para MOVERTE a una rama que ya existe usas git ____ nombre.", banco: ["branch", "switch", "merge", "add"], respuestas: ["branch", "switch"] },
              { tipo: "vf", afirmacion: "git switch -c rama-nueva crea la rama y te mueves a ella en un solo paso.", correcta: true, explicacion: "la bandera -c es de create: crea y cambia de una vez." },
              { tipo: "quehace", codigo: "git switch -c arreglo-login", pregunta: "<code>git switch -c arreglo-login</code> — ¿qué hace?", opciones: ["Se mueve a la rama arreglo-login sin crearla", "Crea la rama arreglo-login y se mueve a ella", "Borra la rama arreglo-login", "Muestra el historial de la rama arreglo-login"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Crear una rama con dos comandos y verificar el movimiento:", elementos: ["git branch arreglo-login", "git switch arreglo-login", "git branch para ver el asterisco"] }
            ]
          },
          {
            id: "m2-a18",
            titulo: "Trabajar en una rama sin romper lo que ya funciona",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya sabes crear una rama y moverte a ella (A17). Ahora la parte valiosa: <strong>todo lo que hagas dentro de la rama queda ahí</strong>, y <code>main</code> sigue intacto, como si tu rama ni existiera.</p><p>El flujo dentro de una rama es exactamente el de siempre (A5): editas, <code>git add</code>, <code>git commit</code>. La única diferencia es <strong>dónde cae</strong> ese commit: en tu rama, no en <code>main</code>.</p><p>Dos beneficios directos para ti:</p><ul><li><strong>La versión estable nunca se rompe.</strong> Si tu experimento explota, descartas la rama y <code>main</code> no se enteró de nada. Es el botón de deshacer gigante de la lección A1, pero a nivel de proyecto completo.</li><li><strong>La IA puede experimentar sin red.</strong> Le pides el cambio en una rama; si el resultado es malo, la rama se va y ya.</li></ul><p>El error de principiante que debes evitar desde hoy: <strong>commitear sin confirmar en qué rama estás</strong>. Si creíste estar en tu rama pero olvidaste el <code>git switch</code>, el commit cae en <code>main</code> y tu versión estable deja de serlo. El hábito que lo evita es uno solo: antes de commitear, <code>git status</code> (A6) y leer la primera línea.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu rama es un <strong>taller de trabajo al lado de la tienda</strong>. En el taller pruebas, desarmas y ensamblas sin miedo; la tienda (main) sigue atendiendo a los clientes con lo que ya sabía que funcionaba. Cuando el producto del taller está listo y probado, lo llevas a la tienda (merge, A19). Si no funcionó, el taller se limpia y la tienda ni se entera.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Mira cómo el mismo trabajo no toca a <code>main</code>:</p><pre><code>C:\\...\\mi-tienda&gt; git switch -c boton-whatsapp\nSwitched to a new branch 'boton-whatsapp'\n\nC:\\...\\mi-tienda&gt; git status\nOn branch boton-whatsapp        ← confirmas dónde vas a trabajar\n\nC:\\...\\mi-tienda&gt; git add whatsapp.js\nC:\\...\\mi-tienda&gt; git commit -m \"Agregar botón de WhatsApp\"\n[boton-whatsapp 9c4f21] Agregar botón de WhatsApp\n\nC:\\...\\mi-tienda&gt; git switch main\nSwitched to branch 'main'\n\nC:\\...\\mi-tienda&gt; git log --oneline\na3f9c1 Corregir precios        ← main NO tiene el botón\n\nC:\\...\\mi-tienda&gt; git switch boton-whatsapp\nC:\\...\\mi-tienda&gt; git log --oneline\n9c4f21 Agregar botón de WhatsApp   ← aquí sí\n a3f9c1 Corregir precios</code></pre><p>Cada rama con su propia historia. Para llevar el botón a <code>main</code>, el siguiente paso es el merge (A19).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a pedirte cambios en [mi proyecto] pero no quiero tocar mi rama main. Guíame: creo una rama, hago los cambios y commiteo ahí. Antes de cada commit dime cómo verifico con git status que sigo en mi rama y no en main.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Terminas un commit estando en la rama boton-whatsapp. Luego corres <code>git switch main</code>. ¿Dónde está tu commit?", opciones: ["En main", "Solo en boton-whatsapp", "En ambas ramas", "Se perdió"], correcta: 1 },
              { tipo: "vf", afirmacion: "Mientras trabajas en una rama, main sigue igual: tus commits no lo tocan.", correcta: true, explicacion: "los commits de una rama viven solo en ella hasta que haces merge (A19)." },
              { tipo: "completar", frase: "Antes de commitear, corre ____ para confirmar en qué ____ estás parado.", banco: ["git status", "rama", "git commit", "archivo"], respuestas: ["git status", "rama"] },
              { tipo: "relacionar", pares: [["git switch main", "Volver a la versión estable"], ["git switch boton-whatsapp", "Seguir con tu experimento"], ["git status", "Confirmar en qué rama estás antes de commitear"]] },
              { tipo: "quehace", codigo: "git switch main", pregunta: "Después de commitear en boton-whatsapp, corres <code>git switch main</code>. ¿Qué ves en tus archivos?", opciones: ["El botón de WhatsApp ya incluido", "Los archivos como estaban antes del experimento, sin el botón", "Un error: no se puede cambiar de rama", "El botón a medio agregar"], correcta: 1 }
            ]
          },
          {
            id: "m2-a19",
            titulo: "git merge: unir tu trabajo con el principal",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu rama terminó su trabajo y lo probaste (A18). Es hora de llevarlo a <code>main</code>: eso es <strong>merge</strong> — unir tu trabajo con el principal.</p><p>El comando y el orden que importa:</p><pre><code>git switch main          ← 1. párate en la rama que va a RECIBIR\n\ngit merge boton-whatsapp ← 2. dile qué rama trae el trabajo</code></pre><p>Fíjate: primero te mueves a <code>main</code>, y el merge trae los commits de la rama hacia donde estás parado. Merge siempre dice \"trae esto hacia aquí\".</p><p>Cuando termina:</p><ul><li><code>main</code> ahora incluye los commits de tu rama.</li><li>La rama sigue existiendo, pero ya cumplió su misión. Se borra con <code>git branch -d nombre</code> (la <code>-d</code> solo borra si ya está mergeada; si no, Git te detiene — y eso te salva de perder trabajo).</li></ul><p>Dos escenarios en el momento del merge:</p><ul><li><strong>Fast-forward:</strong> <code>main</code> no se movió desde que creaste la rama. Git solo adelanta el puntero: rápido y limpio.</li><li><strong>Merge con commits en ambos lados:</strong> <code>main</code> también avanzó. Git crea un <strong>merge commit</strong> que une las dos historias.</li></ul><p>Y el caso que vas a conocer antes de que pase (porque pasará): si las dos ramas cambiaron las mismas líneas, Git no decide solo — eso es un <strong>conflicto</strong>, y lo resuelves en A20.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Merge es <strong>cuando el taller entrega el producto a la tienda</strong>. El taller (rama) fabricó y probó el botón de WhatsApp; la tienda (main) lo recibe y lo pone en el mostrador. Una vez entregado y verificado, el taller se desmonta (<code>git branch -d</code>). Si la tienda también se renovó en paralelo, hay que coordinar las dos versiones — y cuando se pelean por el mismo espacio, nace un conflicto (A20).</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El flujo completo de integrar tu rama:</p><pre><code>C:\\...\\mi-tienda&gt; git switch main\nSwitched to branch 'main'\n\nC:\\...\\mi-tienda&gt; git merge boton-whatsapp\nUpdating a3f9c1..9c4f21\nFast-forward\n whatsapp.js | 12 ++++++++++++\n 1 file changed, 12 insertions(+)\n create mode 100644 whatsapp.js\n\nC:\\...\\mi-tienda&gt; git log --oneline\n9c4f21 Agregar botón de WhatsApp   ← main ya lo tiene\n a3f9c1 Corregir precios\n\nC:\\...\\mi-tienda&gt; git branch -d boton-whatsapp\nDeleted branch boton-whatsapp (was 9c4f21).</code></pre><p>Tres pasos: moverte a <code>main</code>, merge, y borrar la rama que ya entregó. El historial de <code>main</code> quedó con el botón dentro.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Terminé mi trabajo en la rama [nombre] y lo probé. Estoy parado en esa rama. Guíame para integrarlo a main con merge: confírmame que debo moverme a main primero y explícame qué significa la salida del merge antes de que continúe. Si puede haber conflicto, adviérteme antes.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué comando une el trabajo de una rama con main?", opciones: ["git merge", "git switch", "git branch", "git commit"], correcta: 0 },
              { tipo: "ordenar", instruccion: "Pasos para integrar tu rama boton-whatsapp a main:", elementos: ["git switch main", "git merge boton-whatsapp", "git branch -d boton-whatsapp"] },
              { tipo: "completar", frase: "Antes de hacer merge, tienes que estar parado en la rama que va a ____ el trabajo (la rama ____), no en la que lo aporta.", banco: ["recibir", "destino", "enviar", "origen"], respuestas: ["recibir", "destino"] },
              { tipo: "vf", afirmacion: "Al hacer merge, la rama que aportó el trabajo se borra automáticamente.", correcta: false, explicacion: "el merge no borra nada; la rama sigue existiendo hasta que la borras con git branch -d." },
              { tipo: "relacionar", pares: [["git switch main", "Pararte en la rama que recibirá el trabajo"], ["git merge boton-whatsapp", "Integrar los commits de la rama a main"], ["git branch -d boton-whatsapp", "Borrar la rama que ya cumplió su misión"]] }
            ]
          },
          {
            id: "m2-a20",
            titulo: "Conflictos de merge: qué son, por qué pasan, cómo se resuelven",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Atención: aquí es donde muchos principiantes entran en pánico — y por eso vamos a desarmarlo bien. Un <strong>conflicto de merge</strong> no es un error tuyo ni de Git: es una <strong>pregunta</strong>. Git encontró que dos ramas cambiaron las mismas líneas del mismo archivo de formas distintas, y no sabe cuál conservar. Te pregunta a ti.</p><p>Ocurre al hacer <code>git merge</code> (A19) y también al hacer <code>git pull</code> (Materia B). En ambos casos el mecanismo es el mismo.</p><p>Así se ve la señal de alerta:</p><pre><code>git merge arreglo-precios\nAuto-merging precios.js\nCONFLICT (content): Merge conflict in precios.js\nAutomatic merge failed; fix conflicts and then commit the result.</code></pre><p>Y así se ve un archivo en conflicto:</p><pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nconst precio = 100;\n=======\nconst precio = 99;\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; arreglo-precios</code></pre><ul><li><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> — empieza TU versión (la rama donde estabas parado)</li><li><code>=======</code> — el separador entre las dos versiones</li><li><code>&gt;&gt;&gt;&gt;&gt;&gt;&gt; arreglo-precios</code> — termina la versión de la rama que estás integrando</li></ul><p>Para resolver: abres el archivo, <strong>decides qué queda</strong> (la tuya, la otra, o una mezcla), <strong>borras los tres marcadores</strong>, guardas, y cierras el merge con <code>git add</code> + <code>git commit</code>.</p><p>Aviso real, los tres errores que sí dañan:</p><ul><li><strong>Elegir a lo bruto:</strong> conservar una versión sin entender la otra. Si no sabes cuál es la correcta, pregúntale a la IA o a quien hizo la otra rama.</li><li><strong>Borrar el archivo para \"resolverlo\":</strong> eso no resuelve nada: destruye las dos versiones.</li><li><strong>Ignorar que el merge quedó a medias:</strong> mientras haya conflicto, Git no te deja avanzar hasta resolverlo. Y si te arrepientes, la salida de emergencia es <code>git merge --abort</code>, que cancela todo y regresa al estado anterior.</li></ul>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un conflicto es como <strong>dos cocineros que condimentaron el mismo platillo de forma distinta</strong>. Uno puso 100 gramos de sal, el otro 99. La cocina no puede servir dos versiones del mismo platillo: alguien decide. Ese alguien eres tú. Los marcadores son los dos platillos sobre la mesa, y tu trabajo es elegir cuál va al menú — no servir ambos, y no tirar la olla.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Resolución paso a paso. El archivo en conflicto:</p><pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nconst precio = 100;\n=======\nconst precio = 99;\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; arreglo-precios</code></pre><p>Decides que el precio correcto es 99. Dejas solo la línea que quieres y borras los tres marcadores:</p><pre><code>const precio = 99;</code></pre><p>Y cierras el merge:</p><pre><code>C:\\...\\mi-tienda&gt; git add precios.js\nC:\\...\\mi-tienda&gt; git commit -m \"Resolver conflicto: el precio correcto es 99\"\n[main 8d2fa5] Resolver conflicto: el precio correcto es 99</code></pre><p>Listo: la rama quedó integrada con la decisión que tomaste. Y si en cualquier punto el conflicto se complica demasiado, la salida limpia es <code>git merge --abort</code>: el merge se cancela y todo regresa a cómo estaba antes de intentarlo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Estoy haciendo un merge y me salió un conflicto en [archivo]. Te pego el contenido con los marcadores. Explícame qué propone cada lado, recomiéndame cuál conservar y por qué, y dame el archivo ya resuelto. Después guíame con git add y git commit para cerrar el merge.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Por qué ocurre un conflicto de merge?", opciones: ["Porque el internet está lento", "Porque dos ramas cambiaron las mismas líneas del mismo archivo de forma distinta y Git no sabe cuál conservar", "Porque hay archivos muy grandes", "Porque olvidaste commitear antes del merge"], correcta: 1 },
              { tipo: "relacionar", pares: [["<<<<<<< HEAD", "Tu versión (la rama donde estás parado)"], ["=======", "El separador entre las dos versiones"], [">>>>>>> arreglo-precios", "La versión de la rama que estás integrando"]] },
              { tipo: "completar", frase: "Para resolver un conflicto: decides qué versión ____, borras los ____ y cierras con git add + git ____.", banco: ["queda", "marcadores", "commit", "branch"], respuestas: ["queda", "marcadores", "commit"] },
              { tipo: "vf", afirmacion: "git merge --abort cancela el merge y devuelve todo al estado anterior.", correcta: true, explicacion: "es la salida de emergencia cuando el conflicto se sale de control." },
              { tipo: "quehace", codigo: "<<<<<<< HEAD\nconst precio = 100;\n=======\nconst precio = 99;\n>>>>>>> arreglo-precios", pregunta: "Encuentras esto en precios.js tras un merge. ¿Qué significa?", opciones: ["Un error de sintaxis que se borra solo", "Un conflicto: HEAD propone 100 y arreglo-precios propone 99; tú decides cuál queda y quitas las marcas", "Que el archivo se duplicó", "Que Git ya eligió la respuesta correcta"], correcta: 1 }
            ]
          },
          {
            id: "m2-a21",
            titulo: "HEAD, main, origin: el vocabulario que confunde a todos",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En tus tutoriales y en la salida de Git verás tres palabras en mayúsculas una y otra vez: <strong>HEAD</strong>, <strong>main</strong> y <strong>origin</strong>. Confunden porque parecen la misma cosa, y no lo son. Hoy las separas de una vez.</p><p><strong>1. HEAD</strong> — la etiqueta que Git mueve solo. Marca el commit donde estás parado. No es una rama ni un archivo: es \"tú, aquí, ahora\". Cada vez que haces commit (A8), HEAD avanza. Cada vez que cambias de rama (A17), HEAD apunta a la posición de esa rama. En <code>git log --oneline</code> lo ves como <code>(HEAD -&gt; main)</code>: \"estás parado en main, en este commit\". Y en los conflictos de merge (A20), el bloque <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> es TU versión, la de donde estabas parado.</p><p><strong>2. main</strong> — el nombre de la rama principal (lo conoces desde A4). main no es especial por su nombre; es especial porque todo el mundo lo trata como \"la versión buena\". Técnicamente es una etiqueta que apunta a un commit y avanza cuando commiteas o mergeas ahí (A8, A19).</p><p><strong>3. origin</strong> — el que más confunde, porque no existe en tu computadora. origin es el nombre que Git le da por default al <strong>repositorio remoto</strong>: la copia de tu proyecto que vive en la nube. Se configura en Materia B, cuando conectes tu carpeta con GitHub. Cuando veas <code>origin/main</code>, significa \"la copia de main que vive en el remoto\".</p><p>Regla de oro: las tres son <strong>punteros</strong>, no contenido. Apuntan a commits. HEAD apunta a dónde estás, main a dónde crece tu línea principal y origin a la copia remota.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>HEAD es <strong>tú, parado en la línea del tiempo del proyecto</strong>. main es el tronco del árbol (A16): una línea que crece con cada commit. origin es un espejo del árbol que está en la oficina central — te enterarás de cómo sincronizarlo en Materia B. Los tres son señalamientos: te dicen dónde estás, dónde crece lo principal y dónde vive la copia remota.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git log --oneline\n9c4f21 (HEAD -&gt; main) Agregar botón de WhatsApp\na3f9c1 Corregir precios\n1e8a05 Versión inicial</code></pre><p><code>(HEAD -&gt; main)</code>: HEAD está parado en el commit 9c4f21, que pertenece a main. Crea una rama y muévete (A17), y verás cómo HEAD se mueve contigo:</p><pre><code>C:\\...\\mi-tienda&gt; git switch -c boton-whatsapp\nSwitched to a new branch 'boton-whatsapp'\n\nC:\\...\\mi-tienda&gt; git log --oneline\n9c4f21 (HEAD -&gt; boton-whatsapp) Agregar botón de WhatsApp</code></pre><p>HEAD ya no apunta a main: apunta a <code>boton-whatsapp</code>. El commit es el mismo; lo que cambió es dónde estás parado. Por eso HEAD se llama \"el commit actual\": es tu posición, siempre.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te pego la salida de mi <code>git log</code> y <code>git status</code>: [pégalas aquí]. Explícame en mis propias palabras qué significa cada una: qué es HEAD en esta salida, en qué rama estoy parado, y si mi historial se ve normal para un proyecto de mi tamaño.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es HEAD?", opciones: ["El nombre de la rama principal del proyecto", "La etiqueta que marca el commit donde estás parado", "La copia del proyecto en la nube", "El primer commit del historial"], correcta: 1 },
              { tipo: "completar", frase: "HEAD es la etiqueta que marca el ____ donde estás parado; main es la rama ____; origin es el nombre por default del repositorio ____.", banco: ["commit", "principal", "remoto", "final"], respuestas: ["commit", "principal", "remoto"] },
              { tipo: "vf", afirmacion: "origin es el nombre que Git le da por default a tu repositorio remoto, la copia que vive en la nube.", correcta: true, explicacion: "origin no existe en tu computadora; lo conectas en Materia B." },
              { tipo: "relacionar", pares: [["HEAD", "El commit donde estás parado ahora"], ["main", "La rama principal del proyecto"], ["origin", "La copia remota en la nube"], ["(HEAD -> main)", "Estás parado en main, en este commit"]] },
              { tipo: "quehace", codigo: "git commit -m \"Corregir precios\"", pregunta: "Haces un commit nuevo. ¿Qué pasa con HEAD?", opciones: ["HEAD se queda donde estaba", "HEAD avanza y ahora apunta al commit nuevo", "HEAD apunta al remoto", "HEAD se borra"], correcta: 1 }
            ]
          },
          {
            id: "m2-a22",
            titulo: "git stash: guardar temporalmente sin commitear",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Estás a medias: cambiaste archivos, falta terminar, y necesitas hacer otra cosa — moverte de rama (A17), probar algo, arreglar un bug urgente. Commitear trabajo a medias ensucia el historial (la disciplina que verás en A28). Y borrar tu avance, pierdes el trabajo. Ahí nace el cajón: <strong>git stash</strong>.</p><p><code>git stash</code> guarda tus cambios del working directory y del staging (recuerda los 3 estados de A5), y deja tu carpeta limpia, como si no hubieras tocado nada. Tu avance no se pierde: queda guardado aparte, fuera del historial.</p><p>El vocabulario que necesitas:</p><ul><li><code>git stash</code> — guardar los cambios sin commitear y limpiar el working directory.</li><li><code>git stash list</code> — ver los cajones que tienes guardados.</li><li><code>git stash pop</code> — recuperar el último cajón y aplicar tus cambios de vuelta (y sacarlo de la lista).</li><li><code>git stash push -m \"mensaje\"</code> — guardar con una nota para saber qué había dentro.</li></ul><p>Tres puntos que evitan sustos:</p><ul><li><strong>El historial no se toca:</strong> stash guarda cambios sin commitear; tu <code>git log</code> queda intacto.</li><li><strong>Pop puede generar conflictos:</strong> si los archivos cambiaron mientras tu trabajo estaba guardado, se resuelven como cualquier conflicto de merge (A20).</li><li><strong>Es una pila:</strong> puedes guardar varias veces; <code>pop</code> siempre saca el último que metiste.</li></ul>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Git stash es <strong>el estacionamiento del proyecto</strong>. Vas conduciendo con trabajo a medias en el asiento del copiloto y de pronto necesitas el auto para otra cosa. No lo botes: lo estacionas. Tu trabajo sigue ahí, intacto, en el cajón del estacionamiento. Cuando terminas lo otro, regresas, lo sacas del estacionamiento (<code>pop</code>) y sigues conduciendo exactamente donde te quedaste.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git status\nOn branch main\nChanges not staged for commit:\n        modified:   index.html\n\nC:\\...\\mi-tienda&gt; git stash\nSaved working directory and index state WIP on main: 9c4f21 Agregar botón de WhatsApp\n\nC:\\...\\mi-tienda&gt; git status\nOn branch main\nnothing to commit, working tree clean</code></pre><p>Tu avance está guardado y tu carpeta quedó limpia. Haces lo que necesitabas. Después recuperas el trabajo:</p><pre><code>C:\\...\\mi-tienda&gt; git stash list\nstash@{0}: WIP on main: 9c4f21 Agregar botón de WhatsApp\n\nC:\\...\\mi-tienda&gt; git stash pop\nOn branch main\nChanges not staged for commit:\n        modified:   index.html</code></pre><p>Tus cambios regresaron tal cual: ni se perdieron, ni entraron al historial.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo cambios a medias en [archivos] que aún no quiero commitear, pero necesito cambiar a otra rama para [tarea]. Guíame con git stash: el comando exacto para guardar mis cambios, cómo verifico que el working directory quedó limpio, y cómo los recupero después sin perder nada.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Para qué sirve <code>git stash</code>?", opciones: ["Para borrar commits del historial", "Para guardar cambios sin terminar sin hacer commit y dejar la carpeta limpia", "Para subir tu código a GitHub", "Para crear una rama nueva"], correcta: 1 },
              { tipo: "completar", frase: "git stash guarda tus cambios ____ y deja el working directory ____; git stash pop los ____.", banco: ["sin commitear", "limpio", "devuelve", "borra"], respuestas: ["sin commitear", "limpio", "devuelve"] },
              { tipo: "vf", afirmacion: "git stash crea un commit en el historial de tu proyecto.", correcta: false, explicacion: "el stash vive aparte; el historial de commits no se toca." },
              { tipo: "ordenar", instruccion: "Secuencia: guardar tu avance, hacer otra cosa y recuperarlo.", elementos: ["git status para ver tus cambios", "git stash para guardarlos", "hacer la otra tarea", "git stash pop para recuperarlos"] },
              { tipo: "quehace", codigo: "git stash pop", pregunta: "<code>git stash pop</code> — ¿qué hace?", opciones: ["Guarda tus cambios y limpia la carpeta", "Recupera el último stash y aplica tus cambios de vuelta", "Borra el stash sin recuperar nada", "Crea una rama nueva"], correcta: 1 }
            ]
          },
          {
            id: "m2-a23",
            titulo: "Tags y versiones: marcar los momentos importantes",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tus commits son fotos (A8). Tus ramas son líneas que crecen (A16). Las <strong>tags</strong> son <strong>marcadores fijos sobre fotos importantes</strong>: \"esta foto es la versión 1.0\". A diferencia de una rama, una tag no se mueve jamás: apunta para siempre al commit que marcó.</p><p>Para qué sirven:</p><ul><li><strong>Versionar lanzamientos:</strong> v1.0.0, v2.1.3... Cuando entregas algo — a un cliente, al mundo, a tu yo del futuro — marcas esa foto.</li><li><strong>Encontrar momentos clave:</strong> \"¿cómo era exactamente el código que funcionaba en producción?\" La respuesta siempre será una tag.</li><li><strong>Generar changelogs y releases:</strong> la base para comunicar qué cambió entre versiones (Materia B).</li></ul><p>Comandos mínimos:</p><pre><code>git tag                ← lista las tags que existen\ngit tag v1.0.0         ← marca el commit actual con esa tag\ngit tag -a v1.0.0 -m \"Primera versión\"   ← tag con anotación (mensaje)</code></pre><p>Y el <strong>versionado semántico</strong>, el estándar que verás en todo el software profesional. Se escribe <code>vMAYOR.MENOR.PARCHE</code> (ejemplo: v1.2.3):</p><ul><li><strong>MAYOR:</strong> cambio que rompe lo que ya existía (v1.0.0 → v2.0.0).</li><li><strong>MENOR:</strong> nueva funcionalidad que no rompe nada (v1.1.0).</li><li><strong>PARCHE:</strong> corrección de bugs (v1.1.1).</li></ul><p>La tag se clava en el commit actual: antes de crearla, confirma con <code>git log --oneline</code> dónde estás parado, para que quede en el commit correcto.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Las tags son <strong>las placas que se cuelgan en las fotos del álbum</strong>. Las ramas son hojas sueltas que siguen creciendo; la tag es el marco dorado sobre la foto del día importante: esa foto no va a cambiar, esté quien esté. Dentro de un año, si alguien pregunta \"¿cómo era exactamente la versión que entregamos?\", la respuesta es una tag: un punto fijo en la historia.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git log --oneline\n9c4f21 (HEAD -&gt; main) Agregar botón de WhatsApp\na3f9c1 Corregir precios\n1e8a05 Versión inicial\n\nC:\\...\\mi-tienda&gt; git tag -a v1.0.0 -m \"Primera versión publicada\"\n\nC:\\...\\mi-tienda&gt; git tag\nv1.0.0\n\nC:\\...\\mi-tienda&gt; git log --oneline\n9c4f21 (HEAD -&gt; main, tag: v1.0.0) Agregar botón de WhatsApp\na3f9c1 Corregir precios\n1e8a05 Versión inicial</code></pre><p>La tag quedó clavada en el commit 9c4f21 — verás la marca <code>(tag: v1.0.0)</code> junto al commit. Hagas lo que hagas después, esa foto quedó etiquetada como versión 1.0.0 para siempre.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a publicar mi proyecto por primera vez. Explícame cómo marco esta versión con una tag: el comando exacto para crear la tag v1.0.0 con un mensaje, cómo verifico que quedó en el commit correcto, y cómo sé si mi versión debe ser v1.0.0 o algo distinto según el versionado semántico.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una tag en Git?", opciones: ["Una rama que crece con cada commit", "Un marcador fijo sobre un commit importante, como v1.0.0", "Un archivo de configuración del proyecto", "Un respaldo automático en la nube"], correcta: 1 },
              { tipo: "completar", frase: "En vMAYOR.MENOR.PARCHE: MAYOR son cambios que ____, MENOR son nuevas ____ y PARCHE son ____ de bugs.", banco: ["rompen", "funcionalidades", "correcciones", "ramas"], respuestas: ["rompen", "funcionalidades", "correcciones"] },
              { tipo: "vf", afirmacion: "A diferencia de una rama, una tag no se mueve: apunta siempre al commit que marcó.", correcta: true, explicacion: "por eso sirve para versionar: la v1.0.0 de hoy es idéntica dentro de un año." },
              { tipo: "relacionar", pares: [["git tag", "Lista las tags del proyecto"], ["git tag v1.0.0", "Marca el commit actual con v1.0.0"], ["git tag -a v1.0.0 -m \"...\"", "Crea la tag con un mensaje anotado"], ["v2.0.0", "Versión mayor: cambios que rompen lo existente"]] },
              { tipo: "quehace", codigo: "git tag -a v2.0.0 -m \"Rediseño completo\"", pregunta: "<code>git tag -a v2.0.0 -m \"Rediseño completo\"</code> — ¿qué hace?", opciones: ["Mueve la tag v1.0.0 al commit actual", "Crea la tag v2.0.0 con un mensaje, sobre el commit actual", "Crea una rama llamada v2.0.0", "Borra la tag v1.0.0"], correcta: 1 }
            ]
          },
          {
            id: "m2-a24",
            titulo: "El árbol de commits: leer el historial gráfico",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Desde A10 sabes leer <code>git log</code>. Hoy aprendes a leer el <strong>árbol</strong>: la versión gráfica del historial que muestra cómo las ramas nacieron, crecieron y se volvieron a juntar. Es el mapa de tu proyecto.</p><p>El comando clásico:</p><pre><code>git log --oneline --graph --all --decorate</code></pre><ul><li><code>--oneline</code> — un commit por línea.</li><li><code>--graph</code> — dibuja el árbol con líneas y asteriscos.</li><li><code>--all</code> — muestra todas las ramas, no solo la actual.</li><li><code>--decorate</code> — marca con sus nombres HEAD, ramas y tags (A21, A23).</li></ul><p>Cómo se lee:</p><ul><li>Cada <code>*</code> es un commit.</li><li>Las líneas conectan la historia: muestran de qué rama viene cada commit.</li><li>Donde dos líneas <strong>se juntan</strong> en un commit, hubo un merge (A19).</li><li>Donde una línea <strong>se separa</strong>, nació una rama (A16, A17).</li><li>Los nombres entre paréntesis (<code>HEAD -&gt; main</code>, <code>boton-whatsapp</code>, <code>tag: v1.0.0</code>) son las etiquetas.</li></ul>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es <strong>el mapa del metro</strong>. Cada línea es una rama; cada estación es un commit; donde dos líneas comparten una estación, hubo un merge. Algunas estaciones tienen nombre propio (una tag, una rama). El mapa te dice dónde estás parado y de dónde viene cada línea. Nadie se aprende el mapa de memoria: se consulta cuando se necesita.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git log --oneline --graph --all --decorate\n*   8d2fa5 (HEAD -&gt; main) Merge branch 'boton-whatsapp'\n|\\\n| * 9c4f21 (boton-whatsapp) Agregar botón de WhatsApp\n|/\n* a3f9c1 Corregir precios\n* 1e8a05 Versión inicial de la tienda</code></pre><p>Punto por punto:</p><ul><li>El commit <code>8d2fa5</code> es un <strong>merge commit</strong>: tiene dos líneas bajando, juntó main con boton-whatsapp (A19).</li><li>La rama boton-whatsapp nació en <code>a3f9c1</code>, aportó el commit <code>9c4f21</code> y se reintegró a main.</li><li>Estás parado en main: <code>HEAD -&gt; main</code> (A21).</li></ul><p>En un proyecto con varias ramas el árbol se ve más tupido, pero la lógica es idéntica: líneas que nacen, crecen y se juntan.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te pego la salida de <code>git log --oneline --graph --all --decorate</code> de mi proyecto: [pégalas aquí]. Explícame qué historia cuenta: qué ramas existen, en qué commit nació cada una, dónde hubo merges, en qué rama estoy parado y si hay algo raro en el historial que debería arreglar.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué comando muestra el historial en forma de árbol gráfico?", opciones: ["git status", "git log --oneline --graph --all --decorate", "git branch --tree", "git stash list"], correcta: 1 },
              { tipo: "completar", frase: "En el árbol de commits, cada ____ es un commit; donde dos líneas se juntan hubo un ____; donde se separan, nació una ____.", banco: ["asterisco", "merge", "rama", "tag"], respuestas: ["asterisco", "merge", "rama"] },
              { tipo: "relacionar", pares: [["--graph", "Dibuja el árbol con líneas y asteriscos"], ["--all", "Muestra todas las ramas, no solo la actual"], ["--decorate", "Marca HEAD, ramas y tags con sus nombres"], ["--oneline", "Un commit por línea"]] },
              { tipo: "vf", afirmacion: "En el árbol, un punto donde dos líneas se juntan normalmente es un merge.", correcta: true, explicacion: "ahí convergen dos ramas en un solo commit." },
              { tipo: "quehace", codigo: "*   8d2fa5 (HEAD -> main) Merge branch 'boton-whatsapp'\n|\\\n| * 9c4f21 (boton-whatsapp) Agregar botón de WhatsApp\n|/\n* a3f9c1 Corregir precios", pregunta: "Lees esto en tu historial. ¿Qué pasó en el commit 8d2fa5?", opciones: ["Se borró la rama boton-whatsapp", "Es un merge: main recibió el trabajo de boton-whatsapp", "Es el primer commit del proyecto", "Hay un conflicto sin resolver"], correcta: 1 }
            ]
          },
          {
            id: "m2-a25",
            titulo: "Git + IA: pedirle a la IA que interprete tu historial",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu historial de Git es información que una IA lee <strong>muy</strong> bien. Y la clave que hace esto seguro: los comandos de lectura de Git (<code>git log</code>, <code>git status</code>, <code>git diff</code>, <code>git branch</code>) son de <strong>solo lectura</strong> — no cambian nada. Pegar su salida a una IA no toca tu repo. Es el truco de productividad más barato de todo el mes.</p><p>Qué puedes pedirle que haga con tu historial:</p><ul><li><strong>Interpretar tu historia:</strong> \"cuéntame qué pasó en este proyecto\".</li><li><strong>Encontrar cuándo cambió algo:</strong> \"¿en qué commit se tocó el precio?\"</li><li><strong>Detectar qué rompió algo:</strong> \"mi página dejó de funcionar, ¿qué se commitearon antes del fallo?\"</li><li><strong>Escribir mensajes de commit</strong> (A9) y changelogs (Materia B) a partir del historial.</li><li><strong>Auditar tu historial:</strong> \"¿los mensajes son claros? ¿hay commits que deberían dividirse?\" (A28).</li></ul><p>La disciplina al pedírselo — la misma de todo el curso:</p><ol><li><strong>Pega la salida real,</strong> no la describas: captura con <code>git log --oneline --graph --all --decorate</code> (A24).</li><li><strong>Da contexto:</strong> qué proyecto es, qué estabas haciendo, qué buscas.</li><li><strong>Pide una tarea concreta,</strong> no \"¿qué opinas?\".</li><li><strong>La IA interpreta; tú decides.</strong> Nada de leer el historial completo de memoria: para eso están el árbol (A24) y la IA.</li></ol>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es como <strong>llevarle el álbum de fotos a un buen historiador</strong>. Tú tienes cientos de fotos sin orden; él las lee, te cuenta la historia, te dice cuándo se mudó la familia y qué foto fue la del error. No borra ni mueve ninguna foto: solo interpreta. Tú decides qué hacer con la información. La única regla: llévale el álbum real, no un resumen que tú inventes.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Primero capturas el historial real, tal como lo viste en A24:</p><pre><code>C:\\...\\mi-tienda&gt; git log --oneline --graph --all --decorate\n*   8d2fa5 (HEAD -&gt; main) Merge branch 'boton-whatsapp'\n|\\\n| * 9c4f21 (boton-whatsapp) Agregar botón de WhatsApp\n|/\n* a3f9c1 Corregir precios\n* 1e8a05 Versión inicial</code></pre><p>Ese output se copia y se pega literal en el prompt. Es de solo lectura: puedes pegarlo mil veces y tu repo no cambia. El prompt completo lo tienes en la siguiente sección: cópialo, pega tu salida y ejecuta.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te pego la salida de <code>git log --oneline --graph --all --decorate</code> de mi proyecto de una tienda en línea. [PEGA AQUÍ TU SALIDA]</p><ol><li>Cuéntame la historia completa que cuenta este historial, como si fueras mi historiador.</li><li>¿Qué ramas existen y cuál es su estado? ¿Alguna quedó sin fusionar a main?</li><li>¿En qué commit se agregó el botón de WhatsApp?</li><li>Revisa la calidad de los mensajes: ¿cuáles cambiarías y con qué redacción?</li></ol><p>No modifiques nada de mi código: solo interpreta y responde.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Por qué es seguro pegarle a una IA la salida de <code>git log</code> o <code>git status</code>?", opciones: ["Porque Git lo permite", "Porque son comandos de solo lectura: no modifican ni borran nada", "Porque la IA no puede leerla", "Porque el historial no tiene información útil"], correcta: 1 },
              { tipo: "completar", frase: "Para que la IA interprete bien tu historial: pégale la ____ real, dale ____ del proyecto y pide una ____ concreta.", banco: ["salida", "contexto", "tarea", "contraseña"], respuestas: ["salida", "contexto", "tarea"] },
              { tipo: "vf", afirmacion: "Pegar la salida de git log a una IA puede modificar tu historial de commits.", correcta: false, explicacion: "git log solo lee; ninguna IA ejecuta cambios por pegarle texto." },
              { tipo: "relacionar", pares: [["\"¿En qué commit se tocó el precio?\"", "Buscar el commit exacto de un cambio"], ["\"¿Qué se commitearon antes de que la página se rompiera?\"", "Investigar qué causó un fallo"], ["\"Mejora mis mensajes de commit\"", "Auditar la calidad del historial (A9)"], ["\"Cuéntame la historia del proyecto\"", "Interpretar el árbol de commits (A24)"]] },
              { tipo: "quehace", codigo: "git log --oneline --graph --all --decorate", pregunta: "<code>git log --oneline --graph --all --decorate</code> — ¿para qué lo corres antes de pedirle a una IA que interprete tu historial?", opciones: ["Para borrar commits que no sirven", "Para capturar el historial completo en un formato que la IA puede interpretar", "Para crear una rama nueva", "Para subir el historial a GitHub"], correcta: 1 }
            ]
          },
          {
            id: "m2-a26",
            titulo: "Los 5 errores de principiante y cómo salir de cada uno",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya llevas 25 lecciones de Git: instalaste (A2), versionaste (A4-A8), deshiciste (A13-A15), ramificaste (A16-A20) y aprendiste el vocabulario que confunde (A21). Hoy apagamos incendios: los <strong>5 errores que comete todo principiante</strong> — y cómo salir de cada uno sin pánico.</p><p><strong>Error 1: commits gigantes sin tema.</strong> Un commit que junta 30 archivos con mensaje \"cambios\". Nadie puede entender qué pasó ahí y no se puede revertir un solo cambio (A14). <em>Salida:</em> usa el staging (A5) y la disciplina de los commits atómicos (A28): una foto por cambio lógico.</p><p><strong>Error 2: commitear lo que no debes.</strong> <code>node_modules</code>, un <code>.env</code> con contraseñas, archivos generados. Se cuelan porque <code>git add .</code> mete todo (A7). <em>Salida:</em> un <code>.gitignore</code> sólido (A11) antes del primer commit; si ya se colaron, <code>git rm --cached</code> los saca del seguimiento sin borrarlos de tu disco.</p><p><strong>Error 3: mensajes que no dicen nada.</strong> \"wip\", \"aaa\", \"arreglos\". El historial (A10) es para tu yo del futuro. <em>Salida:</em> la receta de A9: verbo + qué + por qué. <code>fix: calcular IVA en el total</code>.</p><p><strong>Error 4: miedo a deshacer.</strong> Rompiste algo y te quedas paralizado. <em>Salida:</em> el mapa de deshacer: <code>git restore</code> (A13) antes de commitear, <code>git revert</code> (A14) después sin borrar historia, y <code>git reset</code> (A15) solo cuando sabes qué haces.</p><p><strong>Error 5: vivir todo en main.</strong> Cada prueba, cada idea, directo a la rama principal. <em>Salida:</em> las ramas (A16): crea una por feature con <code>git branch</code> y <code>git switch</code> (A17), experimenta sin riesgo y mergea (A19) solo lo que funciona.</p><p>Regla de oro: un error NO se arregla reescribiendo el historial. Se arregla identificando qué zona de Git tocó (A5) y usando la herramienta correcta.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Los 5 errores son como <strong>los accidentes clásicos de quien recién aprende a manejar</strong>: no frenar, no usar el espejo, acelerar en la curva. No pasa nada por cometerlos: todos los cometimos. Lo que separa al conductor del principiante es saber, sin pánico, qué palanca tocar para salir del apuro — y para cada error de la lista existe una palanca exacta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El caso más caro es el Error 2: se te cuelan secretos. Todo empieza en <code>git status</code> (A6):</p><pre><code>C:\\...\\mi-proyecto&gt; git status\nOn branch main\nUntracked files:\n  (use \"git add &lt;file&gt;...\" to include in what will be committed)\n        .env           ← ¡contraseñas!\n        node_modules/  ← miles de archivos generados</code></pre><p>La salida profesional: arma tu <code>.gitignore</code> (A11) ANTES del primer commit:</p><pre><code>C:\\...\\mi-proyecto&gt; echo node_modules/ &gt;&gt; .gitignore\nC:\\...\\mi-proyecto&gt; echo .env &gt;&gt; .gitignore\nC:\\...\\mi-proyecto&gt; git status\nnothing to commit, working tree clean</code></pre><p>Y si ya los commitearon, sácalos del seguimiento sin borrarlos de tu disco:</p><pre><code>C:\\...\\mi-proyecto&gt; git rm --cached .env -r\nrm '.env'</code></pre><p>Deja de usar <code>git add .</code> a ciegas (A7): revisa <code>git status</code> antes de cada foto y decide qué entra al staging (A5).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te pego la salida de <code>git log --oneline --graph --all --decorate</code> y <code>git status</code> de mi proyecto. [PEGA AQUÍ TUS SALIDAS]</p><p>Revisa mi historial buscando los 5 errores de principiante: commits gigantes, archivos que no deberían estar rastreados, mensajes sin sentido, miedo a deshacer o todo en main. Dime cuáles tengo y el plan exacto para corregirlos SIN reescribir el historial. Si encuentras secretos, explícame cómo rotarlos.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es el problema con un commit gigante de 30 archivos llamado 'cambios'?", opciones: ["Git no permite commits tan grandes", "Nadie puede entender qué pasó ahí y no se puede aislar un solo cambio para revertirlo", "El historial se borra automáticamente", "Es imposible hacer un commit con 30 archivos"], correcta: 1 },
              { tipo: "completar", frase: "Para el Error 2, el .gitignore (A11) se arma ____ del primer commit; si ya se colaron archivos, git rm ____ los saca del seguimiento sin borrarlos del disco.", banco: ["antes", "--cached", "después", "--add"], respuestas: ["antes", "--cached"] },
              { tipo: "vf", afirmacion: "git rm --cached borra el archivo de tu computadora.", correcta: false, explicacion: "lo saca del seguimiento de Git, pero el archivo sigue en tu disco." },
              { tipo: "relacionar", pares: [["Commits gigantes", "Staging (A5) + commits atómicos (A28)"], ["Se colaron node_modules", ".gitignore (A11) + git rm --cached"], ["Mensajes tipo 'wip'", "Verbo + qué + por qué (A9)"], ["Rompiste algo y tienes miedo", "git restore (A13), revert (A14) o reset (A15)"]] },
              { tipo: "quehace", codigo: "git add .", pregunta: "<code>git add .</code> (A7) en un proyecto recién creado sin .gitignore. ¿Por qué es peligroso?", opciones: ["No es peligroso: es el comando más seguro de Git", "Mete TODO al staging, incluidos archivos que no deberían versionarse (A11)", "Borra los archivos que no quieres commitear", "Solo agrega los archivos que ya estaban rastreados"], correcta: 1 }
            ]
          },
          {
            id: "m2-a27",
            titulo: "Git dentro de VS Code: la interfaz visual sin terminal",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hasta aquí todo Git fue por terminal. Hay una segunda puerta que vas a usar muchísimo: <strong>el panel Source Control (Control de código fuente) de VS Code</strong>. Para las operaciones de todos los días no necesitas memorizar comandos: aquí son clics.</p><p>Dónde está: el ícono con <strong>tres ramitas entrelazadas</strong> en la barra de actividad (la columna de la izquierda) o el atajo <code>Ctrl+Shift+G</code>. Abre un proyecto y el panel está activo desde el primer <code>git init</code> (A4).</p><p>Qué te muestra, traducido al Git que ya conoces:</p><ul><li><strong>Changes (Cambios):</strong> los archivos del working directory sin preparar (A5). Cada uno con su inicial: <code>M</code> modificado, <code>U</code> sin seguimiento (untracked), <code>D</code> borrado. Es tu <code>git status</code> (A6) en vivo.</li><li><strong>Staged Changes:</strong> tu staging area (A5). Pulsas el <strong>+</strong> junto a un archivo y aterriza aquí: tu <code>git add</code> (A7) con clic.</li><li><strong>El cuadro de mensaje:</strong> escribes el mensaje del commit (A9) arriba y pulsas el <strong>✓</strong>: tu <code>git commit</code> (A8).</li><li><strong>El diff integrado:</strong> clic en cualquier archivo y VS Code abre la comparación lado a lado: lo que quitaste y lo que pusiste (A12).</li><li><strong>Descartar:</strong> el ícono de deshacer en un archivo lo restaura a la última versión commitada: tu <code>git restore</code> (A13).</li></ul><p>Y un bonus visual: en la esquina inferior izquierda ves el <strong>nombre de la rama actual</strong>. Con clic abres el menú de ramas (A17) y desde ahí creas, cambias y eliminas ramas sin escribir un comando.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La terminal es <strong>manejar con caja estándar</strong>: preciso, potente, imponente. El panel Source Control es <strong>la caja automática</strong>: haces exactamente lo mismo —acelerar, frenar, reversa— moviendo una palanca. Saber la estándar te vuelve mejor conductor; usar la automática a diario no te hace menos conductor. Al contrario: te deja energía para lo que importa, tu código.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Flujo completo del día a día, sin terminal. Ya editaste <code>index.html</code> y <code>styles.css</code>:</p><pre><code>1. Ctrl+Shift+G (o el ícono de ramitas).\n   → verás \"Changes (2)\":  index.html (M)  styles.css (M)\n\n2. Pulsa el + de cada archivo.\n   → ahora están en \"Staged Changes\": hiciste git add.\n\n3. Escribe el mensaje: \"Agregar banner de bienvenida\"\n\n4. Pulsa el ✓ (commit).\n   → foto tomada. Revisa el historial en el gráfico del panel.</code></pre><p>Quieres inspeccionar antes de commitear (A12): clic en <code>index.html</code> dentro de Changes → se abre el diff lado a lado. El panel no modifica nada mientras no pulses <code>+</code>, <code>✓</code> o el deshacer.</p><p>Tip: pasa el mouse sobre cada botón y VS Code te muestra el comando de terminal equivalente. Así aprendes el mismo Git dos veces: visual y de texto.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Estoy usando el panel Source Control de VS Code y quiero [describe tu tarea: commitear solo un archivo, ver el diff, crear una rama, descartar un cambio]. Explícame paso a paso qué clic hacer en la interfaz y dime qué comando de terminal equivale a cada clic, para aprender las dos formas.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Con qué atajo abres el panel Source Control en VS Code?", opciones: ["Ctrl+Z", "Ctrl+Shift+G", "Ctrl+S", "Alt+F4"], correcta: 1 },
              { tipo: "relacionar", pares: [["Botón +", "git add: mover un archivo al staging (A5)"], ["Botón ✓", "git commit: tomar la foto (A8)"], ["Clic en un archivo de Changes", "Ver el diff de ese archivo (A12)"], ["Ícono de deshacer", "git restore: descartar cambios (A13)"]] },
              { tipo: "vf", afirmacion: "Desde el panel Source Control de VS Code no se puede hacer commit; eso es exclusivo de la terminal.", correcta: false, explicacion: "el cuadro de mensaje + el ✓ son tu git commit en la interfaz." },
              { tipo: "completar", frase: "En el panel Source Control, la sección ____ es tu staging area; los archivos de Changes están en el ____ directory, sin preparar (A5).", banco: ["Staged Changes", "working", "historial", "remoto"], respuestas: ["Staged Changes", "working"] },
              { tipo: "quehace", codigo: "index.html (M) aparece en Changes\ny pulsas el botón + → pasa a \"Staged Changes\"\nluego escribes el mensaje y pulsas ✓", pregunta: "Acabas de ejecutar, en orden, las operaciones de terminal equivalentes a:", opciones: ["git init y luego git log", "git add index.html y luego git commit", "git stash y luego git pop", "git branch y luego git switch"], correcta: 1 }
            ]
          },
          {
            id: "m2-a28",
            titulo: "Commits atómicos: la disciplina que te salva",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>La regla es corta y lo cambia todo: <strong>un commit = un cambio lógico</strong>. Esto se llama <strong>commit atómico</strong>, y es la disciplina que convierte tu historial (A10) en un índice útil en vez de un borrador.</p><p>Cambio lógico no es cantidad de archivos. Tocaste 10 archivos porque \"el precio se calcula en 10 lugares\": es UN cambio, merece UN commit. Tocaste 1 archivo con dos ideas distintas: merece DOS commits. El staging (A5) existe exactamente para esto: elegir qué va en cada foto.</p><p>La prueba de fuego: <strong>el mensaje del commit (A9) tiene que caber en una línea</strong>. Si tu mensaje necesita un \"y también\", son dos commits. <code>fix: corregir cálculo del IVA</code> es un commit. <code>fix: IVA y colores y footer</code> es un desastre.</p><p>Por qué te salva:</p><ul><li><strong>Revertir limpio (A14):</strong> si el IVA rompe algo, reviertes solo ese commit. En un commit gigante, reviertes todo o nada.</li><li><strong>Encontrar culpables (A12):</strong> el historial es un índice: cada foto dice exactamente qué cambió.</li><li><strong>Merges tranquilos (A19-A20):</strong> cambios chicos y separados chocan menos y se entienden mejor.</li></ul><p>El superpoder técnico: <code>git add -p</code>. En vez de agregar archivos completos (A7), te muestra los cambios <strong>por bloques (hunks)</strong> y tú decides cuáles entran al staging. Un mismo archivo puede repartirse entre dos commits.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un commit atómico es <strong>una foto con un solo sujeto</strong>. El álbum de tu proyecto tiene una foto para el IVA, otra para los colores, otra para el footer. Cuando algo sale mal, encuentras la foto exacta al instante y la descartas sin tocar el resto. El historial de commits gigantes es la foto de una fiesta llena de gente: para saber quién rompió el florero estudias la foto con lupa — y descartarla significa perder la fiesta entera.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Editaste <code>styles.css</code> y metiste dos cambios lógicos: el color de la paleta Y el tamaño de la fuente. Con <code>git add -p</code> los separas:</p><pre><code>C:\\...\\mi-tienda&gt; git add -p styles.css\n\n@@ -12,3 +12,3 @@ body { background: #fff; }\n-  --color-primario: #2b6cb0;\n+  --color-primario: #e53e3e;   ← cambio 1 (color)\nStage this hunk? [y,n,q,a,d,j,J,g,/,e,?] y\n\n@@ -40,3 +40,3 @@ body { font-size: 16px; }\n-  font-size: 16px;\n+  font-size: 18px;            ← cambio 2 (fuente)\nStage this hunk? [y,n,q,a,d,j,J,g,/,e,?] n</code></pre><p>Aceptaste el hunk del color y rechazaste el de la fuente. Ahora dos fotos limpias:</p><pre><code>C:\\...\\mi-tienda&gt; git commit -m \"style: cambiar paleta a rojo\"\n\nC:\\...\\mi-tienda&gt; git add -p styles.css     ← otra vez, ahora el hunk de la fuente\nC:\\...\\mi-tienda&gt; git commit -m \"style: aumentar tamaño de fuente\"</code></pre><p>Dos mensajes, dos cambios lógicos, dos commits. Si mañana el rojo no funciona, reviertes el primero (A14) y el tamaño de la fuente queda intacto.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Trabajé en varios cambios a la vez y no sé cuántos commits atómicos debería hacer. Te los describo: [lista de cambios]. Divídelos en commits atómicos y dame el mensaje exacto de cada uno (A9) y el orden en que los haría. Si alguno necesita git add -p, explícamelo paso a paso con el archivo y los hunks.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "Un commit atómico puede tocar varios archivos, siempre que todos sean parte del mismo cambio lógico.", correcta: true, explicacion: "el tamaño se mide en lógica, no en cantidad de archivos." },
              { tipo: "multiple", pregunta: "Cambiaste el cálculo del IVA Y agregaste un footer. ¿Qué hace la disciplina atómica?", opciones: ["Un commit único con un mensaje largo", "Dos commits atómicos: uno para el IVA y otro para el footer", "Un commit solo para el footer; el IVA se queda sin commit", "Dos commits: uno por cada archivo tocado"], correcta: 1 },
              { tipo: "completar", frase: "Para separar en dos commits los cambios de UN mismo archivo usas git add ____, que presenta los cambios por bloques llamados ____.", banco: ["-p", "hunks", "cached", "rama"], respuestas: ["-p", "hunks"] },
              { tipo: "relacionar", pares: [["Revertir limpio", "Deshaces solo el commit del cambio que rompió (A14)"], ["git add -p", "Elegir por bloques qué entra al staging (A5)"], ["Mensaje de una línea", "Señal de que es un commit atómico (A9)"], ["\"cambios\" como mensaje", "Antiatómico: no dice qué cambió"]] },
              { tipo: "quehace", codigo: "git add -p index.html", pregunta: "<code>git add -p</code> — ¿qué te muestra este comando?", opciones: ["El mensaje de tus últimos commits", "Los cambios de index.html por bloques para que elijas cuáles van al staging", "Los archivos que Git está ignorando", "Los errores de sintaxis de tu código"], correcta: 1 }
            ]
          },
          {
            id: "m2-a29",
            titulo: "Cuándo NO usar Git (y qué usar en su lugar)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Git es una herramienta fantástica, no una religión. Saber cuándo NO usarla te ahorra dolores y demuestra oficio: el profesional elige la herramienta, no le echa martillo a todo.</p><p><strong>1. Archivos binarios grandes.</strong> Videos, audios, diseños, modelos 3D. Git no muestra un diff útil de un binario: su comparación (A12) trabaja con texto. Un video de 2 GB infla el repositorio y cada clon pesa una fortuna. <em>En su lugar:</em> Git LFS para archivos grandes puntuales, o la nube (Drive, Dropbox) con la URL en el README.</p><p><strong>2. Secretos y contraseñas.</strong> Nunca. Si un <code>.env</code> con claves llegó a un commit (A26, Error 2), esas claves ya no son solo tuyas: quedaron en el historial. <em>En su lugar:</em> variables de entorno locales, gestores de secretos y tu <code>.gitignore</code> (A11). Si un secreto se filtró, la única salida real es rotarlo: generar claves nuevas.</p><p><strong>3. Archivos que se generan solos.</strong> <code>node_modules</code>, <code>dist</code>, builds. No tienen historia propia: se regeneran con <code>npm install</code> o <code>npm run build</code>. Versionarlos es puro ruido. <em>En su lugar:</em> <code>.gitignore</code> y que el código fuente sea la única fuente de verdad.</p><p><strong>4. Documentos que Git no puede fusionar.</strong> Un Word, un Photoshop o un Figma no son texto: Git no sabe mezclarlos (A20 es para código). <em>En su lugar:</em> herramientas de colaboración en línea pensadas para eso (Google Docs, Figma).</p><p><strong>5. Git como ÚNICO respaldo.</strong> Git registra tu historia, pero si tu disco muere y solo existe tu repo local, la historia muere contigo. <em>En su lugar:</em> un remoto (GitHub, Materia B) que reciba tus <code>git push</code> con regularidad. Un repo sin copia remota no es un respaldo: es una bitácora que se puede incendiar.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Git es <strong>el archivero de tu oficina</strong>: perfecto para papeles de texto con versión e historial. Pero no le metes el refrigerador (binarios gigantes), ni la caja fuerte con la combinación (secretos), ni fotocopias en serie del mismo folleto (archivos generados). Saber qué NO va al archivero es parte del oficio. Y el archivero no es un bunker: si la oficina se quema y no hiciste copia, se pierde todo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El caso del día a día con IA: pides código, aparece <code>node_modules</code> (miles de archivos generados) y el instinto dice \"a commitear todo\". No:</p><pre><code>C:\\...\\mi-proyecto&gt; git status\nUntracked files:\n  node_modules/      ← lo genera npm install: NO se versiona\n  src/               ← tu código fuente: ESTO sí\n  .env               ← secretos: NUNCA</code></pre><p>Antes del primer commit, tu <code>.gitignore</code> (A11):</p><pre><code>C:\\...\\mi-proyecto&gt; echo node_modules/ &gt;&gt; .gitignore\nC:\\...\\mi-proyecto&gt; echo .env &gt;&gt; .gitignore\nC:\\...\\mi-proyecto&gt; git status\n  src/  .gitignore</code></pre><p>Regla mental: versiona la <strong>receta</strong>, no el <strong>platillo</strong>. <code>package.json</code> es la receta (de dónde salen las dependencias); <code>node_modules</code> es el platillo servido: cualquiera lo rehace con <code>npm install</code>.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te describo los archivos de mi proyecto: [lista]. Dime cuáles DEBEN versionarse con Git, cuáles deben ir a .gitignore y por qué, y si hay binarios o secretos que mejor no toquen Git. Si detectas un secreto ya filtrado en un commit, explícame cómo rotarlo y sacarlo del seguimiento sin reescribir el historial.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "node_modules debe versionarse porque contiene las dependencias del proyecto.", correcta: false, explicacion: "se regenera con npm install; lo que se versiona es package.json, la receta." },
              { tipo: "multiple", pregunta: "Subiste por accidente un .env con contraseñas en un commit. ¿Qué haces primero?", opciones: ["Cambiar el mensaje del commit", "Rotar las contraseñas y sacar el archivo del seguimiento", "Borrar la carpeta .git y empezar de nuevo", "Pedirle a la IA que borre el commit"], correcta: 1 },
              { tipo: "relacionar", pares: [["Video de 2 GB", "Fuera de Git: Git LFS o la nube"], ["Config con claves de API", "Nunca: gestor de secretos + .gitignore"], ["node_modules", "Se regenera: solo .gitignore (A11)"], ["Documento Word en equipo", "Herramientas como Google Docs"]] },
              { tipo: "completar", frase: "Versiona la ____, no el ____: sube package.json y deja que node_modules se ____ con npm install.", banco: ["receta", "platillo", "regenere", "borre"], respuestas: ["receta", "platillo", "regenere"] },
              { tipo: "quehace", codigo: "git rm --cached .env", pregunta: "Ya agregaste .env al .gitignore y corres este comando. ¿Qué logra?", opciones: ["Borra el archivo .env de tu computadora", "Saca .env del seguimiento de Git sin borrarlo de tu disco", "Borra TODO el historial del proyecto", "Sube .env a GitHub"], correcta: 1 }
            ]
          },
          {
            id: "m2-a30",
            titulo: "Repaso integrador de Git (mega-quiz jugable)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Llegaste al final de Materia A. Este repaso no mide memoria: mide que puedas <strong>decidir qué comando usar ante una situación real</strong>. Los 8 ejercicios mezclan todo el mes: flujo de trabajo (A5-A8), inspección (A6, A10, A12, A24), deshacer (A13-A15), ramas y merges (A16-A20), vocabulario (A21), herramientas y disciplina (A22, A26-A29).</p><p>Cómo jugarlo:</p><ol><li>Resuélvelo entero, de corrido, sin ayuda.</li><li>Cuenta tus aciertos: cada fallo viene con su lección a repasar.</li><li>Si aciertas 7 o más, estás listo para Materia B. Si menos, reabre las lecciones señaladas y vuelve a intentarlo.</li></ol><p>El mega-quiz completo está en los ejercicios, aquí abajo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es <strong>el examen práctico de manejo antes de salir a carretera</strong>. No te piden recitar el reglamento: te suben al auto, te plantean situaciones —una patrulla atrás, hielo en la curva— y evalúan tu decisión. Igual aquí: cada pregunta es una situación y cada comando, una decisión. Y como en el manejo, fallar no es rendirse: es saber exactamente qué señal repasar antes del próximo giro.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>En los ejercicios están las 8 preguntas. Referencias por si fallas:</p><ul><li>Flujo working → staging → historial: A5, A7, A8.</li><li>Inspeccionar: git status (A6), git log (A10), git diff (A12), árbol (A24).</li><li>Deshacer: git restore (A13), git revert (A14), git reset (A15).</li><li>Ramas, merge y conflictos: A16-A20.</li><li>Vocabulario HEAD/main/origin: A21.</li><li>Guardar a medias: git stash (A22).</li><li>Disciplina y buenas prácticas: A26-A29.</li></ul><p>Contéstalo sin consultar el material: ese es el punto. Al terminar, la sección \"Díselo a la IA\" te deja el examen de autoevaluación con una IA.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Actúa como mi instructor de Git. Acabo de terminar un mes de estudio y quiero una autoevaluación estricta.</p><ol><li>Hazme preguntas de opción múltiple, una a la vez, cubriendo: los 3 estados, git status/add/commit, git log y el árbol, deshacer con restore/revert/reset, ramas, merge y conflictos, HEAD/main/origin, stash, tags y buenas prácticas.</li><li>Cuando responda, califícame y explica la respuesta correcta en una línea.</li><li>Tras 10 preguntas, dame mi puntaje y crea un plan de repaso: qué lecciones reabrir y con qué ejercicios. Sé directo y preciso, sin palmaditas.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Editaste index.html y quieres que entre en la próxima foto. ¿Cuál es la secuencia correcta (A5-A8)?", opciones: ["git init y luego git commit", "git add index.html y luego git commit", "git commit y luego git add index.html", "git status y luego git log"], correcta: 1 },
              { tipo: "completar", frase: "El flujo de un cambio: editas en el ____ Directory, lo preparas con git ____ y guardas la foto con git ____ (A5-A8).", banco: ["working", "add", "commit", "clone"], respuestas: ["working", "add", "commit"] },
              { tipo: "relacionar", pares: [["git status", "¿Qué está pasando en mi repo ahora? (A6)"], ["git log", "¿Qué ha pasado? El historial (A10)"], ["git diff", "¿Qué cambió exactamente? (A12)"], ["git log --oneline --graph", "El árbol de commits (A24)"]] },
              { tipo: "vf", afirmacion: "Trabajar directamente en main es la práctica recomendada para probar ideas nuevas.", correcta: false, explicacion: "las ideas se prueban en ramas (A16-A17); main recibe lo que ya funciona (A19)." },
              { tipo: "ordenar", instruccion: "Flujo completo para crear un proyecto versionado y tomar la primera foto:", elementos: ["mkdir mi-tienda", "cd mi-tienda", "git init", "crear archivos", "git add .", "git commit -m \"Versión inicial\""] },
              { tipo: "quehace", codigo: "git revert 9c4f21", pregunta: "<code>git revert</code> (A14) — ¿qué hace este comando?", opciones: ["Borra el commit 9c4f21 del historial", "Crea un commit nuevo que deshace los cambios de 9c4f21, sin borrar historia", "Vuelve el working directory al estado de 9c4f21", "Muestra los cambios del commit 9c4f21"], correcta: 1 },
              { tipo: "multiple", pregunta: "Durante un merge con conflicto (A20), el archivo muestra bloques con <<<<<<< HEAD. ¿Qué contienen?", opciones: ["Las dos versiones en conflicto, separadas por marcadores", "Solo tu versión", "Solo la versión de la otra rama", "Una lista de comandos para resolver el conflicto"], correcta: 0 },
              { tipo: "vf", afirmacion: "git stash guarda tus cambios sin commitear y deja el working directory limpio (A22).", correcta: true, explicacion: "tu avance queda aparte, fuera del historial, y lo recuperas con git stash pop." }
            ]
          }
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
          {
            id: "m2-b6",
            titulo: "git pull y git fetch: traer los cambios de otros",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya sabes subir tu trabajo con <code>git push</code> (B5). Ahora toca el otro lado del trato: <strong>traer los cambios que hicieron otros</strong>. Para eso existen <code>git fetch</code> y <code>git pull</code>.</p><p><strong><code>git fetch</code> — mirar sin tocar.</strong> Descarga del remoto los commits que no tienes, pero NO los integra en tu working directory. Solo actualiza el \"conocimiento\" local de qué hay allá: la rama <code>origin/main</code>. Tus archivos quedan exactamente como estaban.</p><p><strong><code>git pull</code> — traer y colocar.</strong> Es dos comandos en uno: <code>git fetch</code> + <code>git merge</code>. Descarga los cambios del remoto y los integra directo en tu rama actual, actualizando tus archivos.</p><p><strong>¿Cuál usar?</strong></p><ul><li>Quieres revisar qué hay antes de decidir → <code>git fetch</code> y luego inspeccionas.</li><li>Quieres los cambios de tu equipo ya, en tu rama → <code>git pull</code>.</li></ul><p><strong>El detalle que todos confunden:</strong> si tu rama local no avanzó, <code>git pull</code> hace un <em>fast-forward</em>: se adelanta directo a los commits nuevos, sin merge commit. Si tú ya hiciste commits propios, Git crea un merge automático — y si ambos tocaron las mismas líneas, aparece un conflicto (se resuelve igual que en A20).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git fetch</code> es <strong>asomarte a la ventana del taller del socio</strong> para ver qué piezas nuevas llegaron — sin entrar ni tocar nada tuyo. <code>git pull</code> es <strong>entrar, tomar las piezas y colocarlas en tu mesa</strong>: el trabajo ya está hecho. El sabio primero se asoma; el práctico jala y resuelve.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\mi-tienda&gt; git fetch origin\nC:\\...\\mi-tienda&gt; git status\nYour branch is behind 'origin/main' by 2 commits.\n  (use \"git pull\" to update your local branch)\n\nC:\\...\\mi-tienda&gt; git pull\nUpdating a1b2c3d..e4f5g6h\nFast-forward\n index.html | 2 ++\n 1 file changed, 2 insertions(+)</code></pre><p><code>fetch</code> avisó: \"estás 2 commits atrás\". <code>pull</code> los trajo y actualizó <code>index.html</code>. Ese <em>Fast-forward</em> es el caso ideal: sin conflictos y sin merge commit.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Estoy en mi rama main y quiero traer los cambios que subió un compañero. ¿Debo usar <code>git fetch</code> o <code>git pull</code>? Explícame la diferencia, en qué orden conviene cada uno, y qué pasa si yo también tengo commits locales sin subir.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace <code>git fetch</code>?", opciones: ["Descarga los commits del remoto y los integra en tu working directory", "Descarga los commits del remoto pero NO toca tu working directory", "Sube tus commits locales al remoto", "Borra los cambios que hiciste sin commitear"], correcta: 1 },
              { tipo: "relacionar", pares: [["git fetch", "Baja los cambios del remoto sin integrarlos a tu trabajo"], ["git pull", "Baja los cambios y los integra a tu rama actual"], ["git push", "Sube tus commits locales al remoto"]] },
              { tipo: "vf", afirmacion: "git pull es equivalente a hacer git fetch y luego integrar los cambios en tu rama.", correcta: true, explicacion: "pull = fetch + merge de la rama remota trackeada (origin/main)." },
              { tipo: "completar", frase: "git ____ es 'mirar sin tocar': baja la información del remoto sin integrarla. git ____ baja los cambios y los integra de una vez.", banco: ["fetch", "pull", "push", "clone"], respuestas: ["fetch", "pull"] },
              { tipo: "quehace", codigo: "git pull", pregunta: "Estás en main, con tu working directory limpio y sin commits propios. El remoto tiene 2 commits nuevos. ¿Qué pasa al correr git pull?", opciones: ["Crea un merge commit y te pide resolver conflictos", "Adelanta tu rama (fast-forward) hasta los commits nuevos y actualiza tus archivos", "Descarga los commits pero no toca tus archivos", "Rechaza la operación porque no hiciste commit"], correcta: 1 }
            ]
          },
          {
            id: "m2-b7",
            titulo: "git clone: copiar un proyecto ajeno completo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><code>git clone</code> descarga a tu computadora una copia <strong>completa</strong> de un repositorio: todos los archivos <strong>y todo su historial de commits</strong>. Se usa cuando el proyecto <strong>aún no existe en tu máquina</strong>.</p><p>La diferencia clave con B4: <code>git remote add</code> conecta tu repo local con una copia remota <em>de tu propio proyecto</em>. <code>git clone</code> baja un proyecto que no tienes — ajeno o tuyo — y de una vez te deja todo listo:</p><ul><li>Crea una carpeta nueva con el nombre del repo</li><li>Descarga el historial completo de commits</li><li>Conecta el remoto <code>origin</code> automáticamente, apuntando al repo original</li></ul><p>Un solo comando:</p><pre><code>git clone https://github.com/usuario/proyecto.git</code></pre><p><strong>Advertencia que ahorra corajes:</strong> clonar <strong>NO te da permiso de push</strong>. Puedes leer, estudiar y modificar tu copia, pero subir cambios a ese repo requiere ser colaborador (B21) o ir por la vía de fork + pull request (B17).</p><p>En tu día a día con IA: <code>git clone</code> es la forma estándar de entregarle un proyecto existente a una IA — le clonas el repo, ella lo estudia y trabaja sobre tu copia.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p><code>git clone</code> es <strong>fotocopiar el cuaderno completo de un compañero</strong>: cada página, cada anotación y todo su historial. Te quedas con tu copia para trabajar, rayar y experimentar — sin tocar el original. Y si alguien más trabaja sobre el original, tú vuelves a jalar los cambios con <code>git pull</code> (B6).</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>C:\\...\\&gt; git clone https://github.com/rayflores/mi-tienda.git\nCloning into 'mi-tienda'...\nremote: Enumerating objects: 42, done.\nremote: Total 42 (delta 0), reused 0 (delta 0)\nReceiving objects: 100% (42/42), 13.5 KiB, done.\nResolving deltas: 100% (6/6), done.\n\nC:\\...\\&gt; cd mi-tienda\nC:\\...\\mi-tienda&gt; git log --oneline\na1b2c3d fix: botón de pago\nc4d5e6f feat: carrito de compras\n9f8e7d6 Versión inicial</code></pre><p>La carpeta <code>mi-tienda</code> nació con TODO: el proyecto y sus 3 commits de historia, listos para estudiar. El historial completo lo confirma <code>git log</code>.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Cloné este proyecto: [URL]. Quiero entenderlo antes de tocarlo: explícame su estructura de carpetas, qué hace cada archivo principal y dónde vive la lógica de [función]. No modifiques nada todavía.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué copia <code>git clone</code> a tu computadora?", opciones: ["Solo la última versión de los archivos", "Todo el proyecto más su historial completo de commits", "Solo la carpeta .git sin los archivos", "Un archivo comprimido sin estructura"], correcta: 1 },
              { tipo: "relacionar", pares: [["git clone", "Descarga un proyecto que no tienes, con todo su historial"], ["git remote add", "Conecta tu repo local con una copia remota de tu propio proyecto"], ["git push", "Sube tus commits al remoto"], ["git pull", "Baja cambios del remoto a tu repo"]] },
              { tipo: "vf", afirmacion: "Al clonar un repositorio, el remoto origin queda conectado automáticamente.", correcta: true, explicacion: "clone configura origin por ti, apuntando al repo original." },
              { tipo: "completar", frase: "Para clonar un repo se usa <code>git clone</code> seguido de la ____ del repositorio. El resultado incluye la carpeta, el historial completo y el remoto ____ ya conectado.", banco: ["URL", "origin", "main", "contraseña"], respuestas: ["URL", "origin"] },
              { tipo: "quehace", codigo: "git clone https://github.com/otro/proyecto.git", pregunta: "Acabas de clonar un proyecto ajeno. ¿Puedes hacer push directo a él?", opciones: ["Sí, siempre puedes hacer push a cualquier repo clonado", "No: necesitas ser colaborador, o usar fork + pull request", "Sí, pero solo al día siguiente", "No, porque git clone no descarga el .git"], correcta: 1 }
            ]
          },
          {
            id: "m2-b8",
            titulo: "Público vs privado: qué exponer y qué proteger",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Al crear un repositorio (B3) eliges su visibilidad. Es una decisión de dos caras: <strong>público</strong> (lo ve cualquiera en el mundo) o <strong>privado</strong> (solo tú y los colaboradores que invites, tema de B21). Y se puede cambiar después: <em>Settings → General → Danger Zone → Change repository visibility</em>.</p><p><strong>Público es literal: público.</strong> Cualquier persona en el planeta puede entrar, leer y descargar tu código. También los bots: hay programas que escanean repos públicos las 24 horas buscando secretos accidentales. Por eso esta es la regla de oro de la lección:</p><p><strong>NUNCA subas secretos — a ningún repo, público o privado.</strong> Tokens, contraseñas, llaves de API, archivos <code>.env</code>, datos personales de clientes. Detalle a fondo en B28.</p><p><strong>El riesgo real que casi nadie entiende:</strong> una vez que algo se sube a Git, queda en el <strong>historial</strong> para siempre. Borrar el archivo o borrar el repo NO borra lo que ya se copió. Si un token tocó un repo público, asume que está comprometido y revócalo hoy.</p><p><strong>¿Qué va público?</strong> Portafolio (B2, B29), proyectos open source, ejemplos de muestra, tu README de perfil.</p><p><strong>¿Qué va privado?</strong> Proyectos de clientes, trabajo en progreso, cualquier cosa con datos sensibles. Y recuerda: repos privados son ilimitados y gratis en GitHub.</p><p>Última puntada: <strong>privado no es \"a prueba de errores\"</strong>. Todo colaborador que invites lo ve. GitHub no es tu gestor de contraseñas: la seguridad de los secretos empieza por no subirlos jamás.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Público es <strong>poner tu taller con vitrina a la calle</strong>: cualquiera ve lo que haces, y eso construye reputación — pero también expone. Privado es <strong>trabajar en el patio de atrás con invitados que tú eliges</strong>. Y en ninguno de los dos lugares dejas las llaves de la caja fuerte a la vista: hay cosas que no van ni en el escaparate ni en el patio.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>github.com/rayflores\n  mi-tienda/     🔒 Privado   ← solo tú + invitados\n  portfolio/     🌍 Público   ← todo el mundo\n\nCambiar visibilidad:\n  Settings → General → Danger Zone\n  → Change repository visibility</code></pre><p>Un mismo perfil convive con ambos: lo privado para clientes y avances, lo público para que el mundo vea de lo que eres capaz.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero decidir si este proyecto va público o privado: [describe el proyecto]. Recomiéndame cuál conviene y por qué. Después dame la lista de lo que NUNCA debe estar en ningún repo —ni público ni privado— y el riesgo real de cada cosa.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Quién puede ver un repositorio público en GitHub?", opciones: ["Solo las personas con cuenta de GitHub", "Cualquier persona en el mundo, con cuenta o sin cuenta", "Solo tus colaboradores", "Nadie hasta que lo compartas"], correcta: 1 },
              { tipo: "vf", afirmacion: "Un repositorio privado es un lugar seguro para guardar tokens y contraseñas.", correcta: false, explicacion: "los secretos no van en Git: quedan en el historial y cualquier colaborador invitado los ve." },
              { tipo: "relacionar", pares: [["Público", "Portafolio, open source y proyectos de muestra"], ["Privado", "Proyectos de clientes y trabajo en progreso"], ["Tokens y contraseñas", "No van en ningún repo, ni público ni privado"]] },
              { tipo: "completar", frase: "Si subes un secreto a un repo y luego lo borras, el secreto sigue en el ____ de Git y pudo haber sido ____ por bots.", banco: ["historial", "copiado", "README", "ignorado"], respuestas: ["historial", "copiado"] },
              { tipo: "quehace", codigo: "Settings → General → Danger Zone → Change repository visibility", pregunta: "Vas a cambiar un repo de privado a público para tu portafolio. ¿Qué debes revisar ANTES?", opciones: ["Que no haya secretos ni datos personales en ningún commit", "Que el repo tenga por lo menos 10 estrellas", "Que hayas borrado la carpeta .git local", "Que el historial esté en español"], correcta: 0 }
            ]
          },
          {
            id: "m2-b9",
            titulo: "README.md: la portada de tu proyecto",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><code>README.md</code> es el archivo que GitHub muestra por default cuando alguien abre tu repositorio. Es la <strong>portada de tu proyecto</strong>: lo primero que lee un visitante, un cliente o una IA. Su nombre viene de \"read me\" — léeme.</p><p><strong>Los datos técnicos:</strong></p><ul><li>Va en la <strong>raíz</strong> del repositorio (junto a tus carpetas y archivos).</li><li>Su extensión <code>.md</code> significa que está escrito en <strong>Markdown</strong> (lección B10): texto plano con formato.</li><li>GitHub lo detecta y lo renderiza automáticamente.</li></ul><p><strong>Qué debe tener un buen README:</strong></p><ol><li><strong>Título y descripción</strong> — qué es y para qué sirve</li><li><strong>Instalación</strong> — cómo ponerlo a correr</li><li><strong>Uso</strong> — cómo se utiliza</li><li><strong>Tecnologías</strong> — con qué está hecho</li><li><strong>Licencia</strong> — qué se puede hacer con el código (B27)</li></ol><p>Un repo sin README se lee como un cajón sin etiqueta: nadie sabe qué es ni cómo abrirlo. Con README, tu proyecto se presenta solo.</p><p><strong>El truco para ti y la IA:</strong> el README es lo primero que lee una IA cuando recibe un proyecto. Un buen README le da contexto sin adivinar: qué hace el proyecto, cómo correrlo, qué decisiones tomaste. Escríbelo bien y tendrás una IA más precisa desde el primer mensaje.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El README es la <strong>portada y contraportada de tu libro</strong>: el título, de qué trata y cómo usarlo. Un libro sin portada no lo compra nadie en la librería; un repo sin README no lo clona nadie en GitHub. Y en la era de la IA, es también la <strong>presentación que le lees a tu nuevo socio antes de empezar a trabajar</strong>.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code># mi-tienda\n\nTienda en línea para el negocio familiar.\n\n## Instalación\n\n    git clone https://github.com/rayflores/mi-tienda.git\n    npm install\n\n## Uso\n\nAbre index.html en tu navegador y navega el catálogo.\n\n## Tecnologías\n\nHTML · CSS · JavaScript</code></pre><p>Así, cualquiera —humano o IA— entiende en 10 segundos qué es el proyecto y cómo correrlo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Escribe el README.md para mi proyecto [describe el proyecto o pega su estructura]. Incluye: qué hace, cómo instalarlo, cómo usarlo y tecnologías. Formato Markdown, directo y sin relleno.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué muestra GitHub en la portada de un repositorio por default?", opciones: ["La lista de estrellas y forks", "El contenido del README.md de la raíz", "El último commit", "Los archivos ordenados por tamaño"], correcta: 1 },
              { tipo: "vf", afirmacion: "Un repositorio sin README se ve poco confiable y nadie sabe cómo usarlo.", correcta: true, explicacion: "el README es la portada: explica qué es el proyecto y cómo correrlo." },
              { tipo: "relacionar", pares: [["Título y descripción", "¿Qué es este proyecto?"], ["Instalación", "¿Cómo lo pongo a correr?"], ["Uso", "¿Cómo lo utilizo?"], ["Licencia", "¿Qué puedo hacer con el código?"]] },
              { tipo: "completar", frase: "El README va en la ____ del repositorio, y su extensión .md significa que está escrito en ____.", banco: ["raíz", "Markdown", "rama", "HTML"], respuestas: ["raíz", "Markdown"] },
              { tipo: "ordenar", instruccion: "Acomoda de arriba a abajo las secciones de un README bien hecho:", elementos: ["Título y descripción", "Instalación", "Uso", "Tecnologías", "Licencia"] }
            ]
          },
          {
            id: "m2-b10",
            titulo: "Markdown: el idioma con el que se documenta el software",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>Markdown</strong> es un lenguaje de marcado ligero: texto plano que usa símbolos para dar formato. Lo crearon para escribir con títulos, negritas y listas sin depender de editores complicados.</p><p>GitHub lo usa en TODOS lados: los README (B9), los issues (B11), las pull requests (B13), los comentarios y la documentación. Aprenderlo es aprender el idioma de la documentación del software.</p><p><strong>Las reglas que usas el 90% del tiempo:</strong></p><ul><li><code># Título</code> — encabezado (más <code>#</code>, más pequeño: <code>##</code>, <code>###</code>)</li><li><code>**texto**</code> — negrita · <code>*texto*</code> — cursiva</li><li><code>- item</code> — lista · <code>1. item</code> — lista numerada</li><li><code>[texto](https://url)</code> — enlace</li><li><code>![alt](https://url-imagen)</code> — imagen</li><li><code>`código`</code> — código inline · tres backticks <code>```</code> abren y cierran un bloque de código</li><li><code>&gt; texto</code> — cita</li><li><code>| a | b |</code> — tabla</li></ul><p><strong>La magia de Markdown:</strong> el archivo se lee perfecto como texto plano (puedes abrirlo en el bloc de notas) y al mismo tiempo se ve con formato bonito en GitHub. Un solo archivo, dos lecturas.</p><p>Para ti: cuando le pidas a la IA que documente tu proyecto, te va a entregar Markdown; cuando leas la documentación de cualquier software, será Markdown. Saberlo leer es entender todo el ecosistema.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Markdown es <strong>escribir con resaltador, pero con códigos que la máquina entiende</strong>. La <code>#</code> es tu marcador de título; los <code>**</code> tu resaltador de negrita. Escribes con las letras de siempre, pero marcas el formato mientras escribes — y cualquier computadora, navegador o GitHub lo interpreta igual.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code># Título grande        →  Título grande\n## Título mediano      →  Título mediano\n**importante**         →  importante (negrita)\n[visítanos](URL)       →  visítanos (enlace)\n`git pull`             →  git pull (código inline)\n&gt; Nota del autor       →  cita con barra</code></pre><p>A la izquierda el texto plano que tú escribes; a la derecha lo que se ve en GitHub. Misma información, doble lectura.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Enséñame las reglas de Markdown que más usa GitHub: encabezados, negrita, listas, enlaces, código inline y bloques de código. Dame un ejemplo de cada una. Después escribe un mini-README de práctica sobre [mi proyecto] con secciones en blanco para que yo las complete.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es Markdown?", opciones: ["Un lenguaje de programación para apps", "Un lenguaje de marcado ligero que da formato a texto plano", "Un editor de código de GitHub", "Un tipo de archivo de imagen"], correcta: 1 },
              { tipo: "relacionar", pares: [["# Título", "Encabezado"], ["**texto**", "Negrita"], ["`git pull`", "Código inline"], ["[texto](URL)", "Enlace"]] },
              { tipo: "completar", frase: "Un encabezado se marca con el símbolo ____ y el texto en negrita va entre dos ____.", banco: ["#", "**", "*", "|"], respuestas: ["#", "**"] },
              { tipo: "vf", afirmacion: "Un archivo README.md se muestra renderizado (con formato) automáticamente en GitHub.", correcta: true, explicacion: "GitHub interpreta el Markdown y lo muestra con formato." },
              { tipo: "quehace", codigo: "## Mi proyecto", pregunta: "En Markdown, ¿qué muestra esta línea en GitHub?", opciones: ["Un encabezado de nivel 2", "Texto en negrita", "Un bloque de código", "Una cita con barra"], correcta: 0 }
            ]
          },
          {
            id: "m2-b11",
            titulo: "Issues: el sistema de tickets del mundo real",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En cualquier proyecto real — y en tu día a día con IA — el trabajo no se queda en la cabeza: se <strong>anota, se prioriza y se rastrea</strong>. En GitHub eso se hace con <strong>Issues</strong>: el sistema de tickets del proyecto. Un issue es un pendiente registrado: un bug, una función nueva, una mejora, una pregunta. Cada uno vive dentro de un repositorio y tiene su propia identidad.</p><ul><li><strong>Número único:</strong> cada issue recibe un número que lo identifica para siempre — el issue <code>#12</code> es distinto del <code>#13</code>. Ese número es su nombre oficial.</li><li><strong>Título y cuerpo:</strong> el cuerpo se escribe en Markdown (lección B10): qué pasa, pasos para reproducirlo, capturas, lo que esperabas.</li><li><strong>Asignados y labels:</strong> quién lo resuelve y de qué tipo es (lección B12).</li><li><strong>Comentarios:</strong> la conversación alrededor del pendiente: dudas, avances, soluciones.</li></ul><p>El truco que hace a los issues la columna vertebral de GitHub: se <strong>referencian desde el código</strong>. Escribir <code>#12</code> en cualquier commit, PR o comentario crea un enlace a ese issue. Y si en un commit escribes <code>closes #12</code>, GitHub lo cierra automáticamente cuando ese cambio se mergea (lección B16).</p><p>Para tu forma de trabajar: el issue es el <strong>brief</strong>. Tú registras el pendiente en GitHub, la IA lo lee y lo resuelve, y el número del issue queda en el historial como evidencia de todo el ciclo. Los issues son también tu checklist de negocio: cada cambio que pide un cliente es un issue.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un issue es el <strong>ticket de la cocina</strong>. El comensal no le grita al chef: escribe su pedido en el ticket, el ticket lleva número de orden, y por ese número el mesero y la cocina saben de qué se habla. Cuando el platillo sale, el ticket se marca como servido. Sin tickets, la cocina sería un caos de gritos; sin issues, un proyecto es un caos de \"me dijiste que…\".</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un issue bien redactado:</p><pre><code>#12  El botón de pago no funciona en Safari\n     Abierto por rayflores hace 2 días · 4 comentarios\n\n     Los clientes reportan que al dar clic en \"Pagar\"\n     la página se queda en blanco, solo en Safari.\n\n     Pasos para reproducir:\n     1. Abrir el sitio en Safari\n     2. Ir a /checkout\n     3. Clic en \"Pagar\"\n\n     Labels: bug · urgencia\n     Assignees: @rayflores</code></pre><p>Y su cierre, cuando ya está resuelto:</p><pre><code>git commit -m \"fix: pago en Safari · closes #12\"</code></pre><p>Ese commit, al mergearse (B16), cierra el issue #12 solo: el ticket pasó de \"abierto\" a \"resuelto\" sin que nadie lo tocara a mano.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Necesito registrar este pendiente en GitHub: [describe el bug o la tarea]. Escríbeme el issue completo en formato Markdown: título claro, pasos para reproducir si es un bug, y qué esperaba que pasara. Termina sugiriendo los labels que le pondrías.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es un issue en GitHub?", opciones: ["Un mensaje privado entre colaboradores", "Un pendiente registrado en el repositorio: bug, tarea, idea o pregunta", "Una copia del repositorio", "Un comando de Git para borrar cambios"], correcta: 1 },
              { tipo: "completar", frase: "Cada issue tiene un ____ único para referenciarlo. Escribir ____ #12 en un commit cierra el issue automáticamente al mergearse.", banco: ["número", "closes", "rama", "main"], respuestas: ["número", "closes"] },
              { tipo: "vf", afirmacion: "Un issue sirve únicamente para reportar bugs.", correcta: false, explicacion: "sirve para bugs, funciones nuevas, tareas y preguntas: cualquier pendiente del proyecto." },
              { tipo: "relacionar", pares: [["Issue", "El ticket del pendiente registrado"], ["#12", "El número que lo identifica"], ["closes #12", "Cierra el issue al mergearse el cambio"], ["Comentarios", "La conversación alrededor del pendiente"]] },
              { tipo: "quehace", codigo: "fix: pago en Safari · closes #12", pregunta: "Ves este mensaje de commit: <code>fix: pago en Safari · closes #12</code>. ¿Qué pasa cuando el cambio se mergea?", opciones: ["Nada, es solo un texto decorativo", "El issue #12 se cierra automáticamente", "Se borra el issue #12 para siempre", "Se crea un issue nuevo con el número 12"], correcta: 1 }
            ]
          },
          {
            id: "m2-b12",
            titulo: "Labels, milestones y proyectos: organizar el trabajo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un repositorio con muchos issues (B11) sin orden se convierte en ruido. Para organizarlos existen tres herramientas que se combinan: <strong>labels</strong>, <strong>milestones</strong> y <strong>projects</strong>.</p><ul><li><strong>Labels</strong> — etiquetas de color que clasifican un issue por tipo: <code>bug</code>, <code>feature</code>, <code>urgencia</code>, <code>documentación</code>. Se crean a medida y se filtran con un clic. Son las categorías del proyecto.</li><li><strong>Milestones</strong> — una meta con fecha que agrupa issues. Un milestone \"v1.0 · Lanzamiento\" junta los issues que deben resolverse para lanzar y muestra una barra de progreso (3/6 cerrados). Son las etapas del proyecto.</li><li><strong>Projects</strong> — tableros tipo kanban con columnas: \"Por hacer\", \"En curso\", \"Hecho\". Arrastras issues (y PRs, B13) entre columnas. Es el pizarrón de trabajo visible para todo el equipo.</li></ul><p>La jerarquía mental: los <strong>labels clasifican</strong>, los <strong>milestones agrupan hacia una meta</strong>, los <strong>projects muestran el flujo</strong>. Un mismo issue puede tener el label <code>bug</code>, pertenecer al milestone <code>v1.0</code> y vivir en la columna \"En curso\" — las tres herramientas no compiten, se suman.</p><p>Para ti con la IA: el milestone es tu sprint. Le dices \"los issues del milestone v1.0\" y la IA sabe exactamente cuál es el alcance. Tú decides el qué y el cuándo; las herramientas solo lo vuelven visible.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es la <strong>obra de tu casa</strong>. Los labels son los cascos de colores de cada oficio: el plomero azul, el electricista amarillo — sabes de un vistazo quién trabaja de qué. El milestone es la <strong>etapa de cimientos</strong>: tiene fecha y agrupa todos los trabajos que deben terminar antes de levantar paredes. Y el project es el <strong>pizarrón del capataz</strong>: tres columnas donde se ve qué está por hacer, qué se está haciendo y qué ya quedó. La obra avanza porque el pizarrón, los cascos y las etapas existen.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Labels:\n  bug       🔴 error en el código\n  feature   🟢 función nueva\n  urgencia  ⭐ atender ya\n\nMilestone: v1.0 · Lanzamiento (fecha: 2026-09-30)\n  ● ● ● ○ ○ ○   →   3/6 issues cerrados\n\nProject: Lanzamiento v1.0\n  [ Por hacer ] [ En curso ] [ Hecho ]\n  #12 login      #14 pago     #10 README\n  #13 checkout</code></pre><p>Cada issue aparece en los tres lugares a la vez: clasificado (label), agrupado (milestone) y con su estado (project).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Estos son mis pendientes: [lista de issues o tareas]. Organízame el proyecto: qué labels crear, qué issues van a cada uno, y si me conviene agruparlos en un milestone con fecha realista. Explícame el porqué de cada decisión.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es un milestone?", opciones: ["Una etiqueta de color para clasificar issues", "Un grupo de issues que apuntan a una misma meta, con fecha y barra de progreso", "Una copia del repositorio en otra rama", "Un mensaje de commit especial"], correcta: 1 },
              { tipo: "relacionar", pares: [["Labels", "Etiquetas que clasifican por tipo"], ["Milestones", "Grupos de issues hacia una meta con fecha"], ["Projects", "Tableros de columnas para el flujo de trabajo"]] },
              { tipo: "completar", frase: "La jerarquía: los ____ clasifican, los ____ agrupan hacia una meta y los ____ muestran el flujo de trabajo.", banco: ["labels", "milestones", "projects", "commits"], respuestas: ["labels", "milestones", "projects"] },
              { tipo: "vf", afirmacion: "Un mismo issue puede tener un label, pertenecer a un milestone y estar en una columna del project a la vez.", correcta: true, explicacion: "las tres herramientas se combinan: clasifican, agrupan y muestran el flujo por separado." },
              { tipo: "ordenar", instruccion: "Pasos para organizar el lanzamiento de tu proyecto:", elementos: ["registrar los pendientes como issues", "clasificarlos con labels", "agruparlos en un milestone con fecha", "moverlos por las columnas del project", "cerrar cada issue al terminar"] }
            ]
          },
          {
            id: "m2-b13",
            titulo: "Pull Requests I: qué son y por qué existen",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Una <strong>Pull Request</strong> (PR) es la propuesta formal de integrar los cambios de una rama a otra — casi siempre, de tu rama de trabajo hacia <code>main</code>. Existe porque tocar la rama principal directamente es peligroso: un cambio mal hecho se rompe para todos. La PR pone un <strong>candado de revisión</strong> entre tus cambios y la rama principal.</p><p>Qué contiene una PR:</p><ul><li><strong>Rama base y rama comparada:</strong> la base es a donde llegan los cambios (<code>main</code>); la comparada es de donde salen (<code>feature-carrito</code>).</li><li><strong>El diff:</strong> la vista de diferencias entre las dos ramas: líneas que se agregan (<code>+</code>) y líneas que se quitan (<code>-</code>). Ahí se revisa todo.</li><li><strong>Commits:</strong> todos los commits de la rama comparada, listos para integrarse.</li><li><strong>Descripción y conversación:</strong> el porqué del cambio y los comentarios de quien revisa.</li><li><strong>Checks:</strong> las pruebas automáticas (B19) que confirman que el cambio no rompe nada.</li></ul><p>Por qué existen — y por qué te convienen aunque trabajes solo: porque <strong>tú también eres un colaborador</strong>. Abrir una PR de tu propio trabajo te obliga a explicarlo, a revisarlo y a dejarlo documentado. Con IA es tu mejor herramienta de control: la IA propone el cambio, tú lo revisas en la PR antes de que toque <code>main</code>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La PR es <strong>la orden de cambio que se presenta antes de tocar el original</strong>. En un taller de carrocería, el pintor no repinta el coche del cliente por su cuenta: llena una orden, el dueño la firma y recién entonces se trabaja. La PR es esa orden: describe qué se va a cambiar, quién la firma (aprueba) y el trabajo no toca el coche (main) hasta que se autoriza.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Pull request #37 · Abierta por rayflores\n  Añade carrito de compras con localStorage\n  de rayflores:feature-carrito  →  a  main\n\n  ✔ Checks pasaron (3)\n  💬 2 comentarios de revisión\n  📄 Files changed: 4   ＋1,240  －312\n\n  ¿Se ve bien? El carrito guarda lo que el\n  cliente agrega aunque recargue la página.</code></pre><p>Esa pantalla es el momento \"antes del merge\": los cambios están completos, alguien los leyó, y solo falta el botón que los integra a main (lección B16).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Terminé [describe el cambio] en mi rama [rama]. Escríbeme el título y la descripción de mi pull request en formato Markdown: qué hace, cómo probarlo y qué partes necesitan más atención en la revisión.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una pull request?", opciones: ["Un comando de Git para fusionar ramas sin revisar", "Una propuesta formal de integrar los cambios de una rama a otra", "Un tipo de issue para bugs urgentes", "Una copia del repositorio para otro usuario"], correcta: 1 },
              { tipo: "relacionar", pares: [["Rama base", "Adónde llegan los cambios (normalmente main)"], ["Rama comparada", "De dónde salen los cambios"], ["Diff", "Las diferencias: líneas agregadas (+) y quitadas (-)"], ["Checks", "Las pruebas automáticas que validan el cambio"]] },
              { tipo: "completar", frase: "En el diff, las líneas que se ____ aparecen con + y las que se ____ aparecen con -.", banco: ["agregan", "quitan", "duplican", "esconden"], respuestas: ["agregan", "quitan"] },
              { tipo: "vf", afirmacion: "Abrir una pull request obliga a explicar el cambio y permite que alguien lo revise antes de integrarlo a main.", correcta: true, explicacion: "esa es su razón de ser: un candado de revisión antes de tocar la rama principal." },
              { tipo: "quehace", codigo: "base: main ← compare: feature-carrito", pregunta: "En una PR ves <code>base: main</code> y <code>compare: feature-carrito</code>. ¿Qué significa?", opciones: ["Los cambios de main se van a integrar a feature-carrito", "Los cambios de feature-carrito se proponen para integrarse a main", "Las dos ramas se van a borrar", "El diff está vacío"], correcta: 1 }
            ]
          },
          {
            id: "m2-b14",
            titulo: "Pull Requests II: crear el tuyo paso a paso",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya sabes qué es una PR (B13). Ahora el paso a paso completo para crear la tuya, desde la rama hasta el botón de merge. Funciona igual trabajes solo o en equipo.</p><ol><li><strong>Crea tu rama de trabajo</strong> (ramas de la Materia A): <code>git switch -c feature-carrito</code>. Ahí viven tus cambios sin tocar <code>main</code>.</li><li><strong>Haz tus commits</strong> en esa rama, con mensajes claros.</li><li><strong>Sube la rama al remoto</strong> (B5): <code>git push -u origin feature-carrito</code>.</li><li><strong>En GitHub</strong> aparece el botón <strong>\"Compare &amp; pull request\"</strong> — o entra a la pestaña Pull requests → New pull request.</li><li><strong>Elige ramas:</strong> base (<code>main</code>) y compare (tu rama).</li><li><strong>Escribe título y descripción</strong> en Markdown (B10): qué hace y cómo probarlo.</li><li><strong>Opcional:</strong> asigna revisores, labels y milestone (B12).</li><li><strong>Create pull request.</strong> Ya está abierta la revisión.</li><li><strong>Mientras se revisa:</strong> si piden cambios, editas en tu rama, commiteas y haces push — <strong>la PR se actualiza sola</strong>, nunca hay que recrearla.</li><li><strong>Cuando esté aprobada:</strong> botón Merge (lección B16).</li></ol><p>El punto que más confunde: <strong>la PR no es una rama nueva, es una vista sobre tu rama</strong>. Mientras sigas haciendo push a <code>feature-carrito</code>, tu PR refleja esos commits. Por eso corregir es tan fácil: nada se borra, todo se agrega.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Crear una PR es <strong>entregar un trámite en la ventanilla</strong>. Llenas la solicitud (título y descripción), la entregas con tus documentos (los commits), el que revisa la valida y la firma (el approve), y solo entonces se sella (el merge). Y si te piden un dato extra, no rehaces el trámite desde cero: agregas la hoja y la entregas en la misma carpeta — la solicitud ya estaba abierta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Flujo completo, desde la rama hasta la PR:</p><pre><code>C:\\...\\mi-tienda&gt; git switch -c feature-carrito\nSwitched to a new branch 'feature-carrito'\n\n  ...editas, git add y git commit...\n\nC:\\...\\mi-tienda&gt; git push -u origin feature-carrito\nEnumerating objects: 6, done.\n * [new branch]  feature-carrito -&gt; feature-carrito\nbranch 'feature-carrito' set up to track 'origin/feature-carrito'.\n\n  → En GitHub aparece:  [Compare &amp; pull request]\n  → Título: \"Añade carrito de compras con localStorage\"\n  → Create pull request → revisores → Merge</code></pre><p>Todo lo que hagas desde ahí — responder comentarios, corregir, push de nuevo — se refleja en la misma PR.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a crear mi primera pull request. Mi rama es [rama] y quiero integrarla a [main]. Dame el paso a paso: los comandos exactos para subir mi rama, dónde hago clic en GitHub, qué escribir en el título y la descripción, y qué revisar antes de mergear.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Pasos para crear y completar una pull request:", elementos: ["crear la rama de trabajo", "commiteear los cambios en esa rama", "subir la rama con git push -u origin <rama>", "abrir 'Compare & pull request' en GitHub", "escribir título y descripción", "mergear cuando esté aprobada"] },
              { tipo: "multiple", pregunta: "Después de hacer commits en tu rama nueva, ¿qué comando la sube al remoto para poder crear la PR?", opciones: ["git push -u origin main", "git push -u origin feature-carrito", "git pull origin feature-carrito", "git merge main"], correcta: 1 },
              { tipo: "completar", frase: "Después del push, GitHub muestra el botón ____. Al abrirlo eliges la rama ____ (a dónde llegan los cambios) y la rama que comparas.", banco: ["Compare & pull request", "base", "main", "issue"], respuestas: ["Compare & pull request", "base"] },
              { tipo: "vf", afirmacion: "Si un revisor te pide cambios, tienes que cerrar la PR y abrir otra nueva.", correcta: false, explicacion: "no: corriges en tu rama, commiteas, haces push y la PR abierta se actualiza sola." },
              { tipo: "quehace", codigo: "git push -u origin feature-carrito", pregunta: "Corres <code>git push -u origin feature-carrito</code> y en GitHub aparece el botón 'Compare & pull request'. ¿Qué haces?", opciones: ["Lo ignoras: ya quedó todo en GitHub", "Lo abres, eliges base y compare, escribes título y descripción, y creas la PR", "Reinicias el navegador porque es un error", "Boras la rama del remoto"], correcta: 1 }
            ]
          },
          {
            id: "m2-b15",
            titulo: "Code review: revisar código (tuyo, ajeno y de la IA)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>La PR (B14) junta los cambios; el <strong>code review</strong> es la revisión crítica de esos cambios antes del merge. No es cazar al autor en error: es <strong>leer el diff con ojo profesional</strong> y decidir si el cambio está listo para integrarse.</p><p>Qué se revisa en una PR:</p><ul><li><strong>¿Cumple lo que promete?</strong> El título dice \"arregla el pago\" — ¿realmente lo arregla?</li><li><strong>¿Hay bugs?</strong> ¿Hay casos en los que falle?</li><li><strong>¿Es claro y consistente?</strong> Nombres con sentido y mismo estilo que el resto del proyecto.</li><li><strong>¿Hay riesgos de seguridad?</strong> ¿Se filtran secretos (B28) o datos de clientes?</li></ul><p>Los tres escenarios de tu vida con IA:</p><ol><li><strong>Revisar tu propio código:</strong> vuelve a leerlo como si fuera de otro. Te sorprenderá lo que encuentras.</li><li><strong>Revisar código ajeno:</strong> comentas en las líneas exactas del diff. Puedes dejar un comentario (<em>comment</em>), aprobar (<em>approve</em>) o pedir cambios (<em>request changes</em>).</li><li><strong>Revisar código de la IA:</strong> el caso más común para ti. La IA es tu junior dev: <strong>no confías a ciegas, verificas</strong>. Que cumpla lo pedido, que no haya secretos, que no rompa lo que ya funcionaba.</li></ol><p>Regla de oro: <strong>el review se hace en la PR, no en la cabeza</strong>. Todo comentario queda escrito, visible y rastreable. Y el revisor más duro con tu propio código te ahorra los sustos más caros.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El code review es el <strong>chef que prueba el platillo antes de que salga a la mesa</strong>. El cocinero (quien escribió el código, humano o IA) cree que está listo; el chef prueba, ajusta la sal y recién entonces lo deja pasar. En una cocina seria nadie sirve sin esa prueba; en un proyecto serio nadie mergea sin revisión. Y el mejor chef es el que prueba con la misma exigencia sus propios platillos.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>PR #37 · Revisión en Files changed\n\n@@ -12,7 +12,8 @@ función guardarCarrito\n-  localStorage.setItem(\"carrito\", items);\n+  localStorage.setItem(\"carrito\", JSON.stringify(items));\n\nComentario de rayflores:\n  \"Si guardamos el objeto directo se guarda\n   '[object Object]'. Con JSON.stringify se\n   guarda el texto real. Aprobado ✔\"</code></pre><p>El comentario quedó en la línea exacta del diff. El autor (o la IA) hace el cambio, hace push, y la PR queda lista para merge.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Actúa como revisor senior de esta pull request: [pega el diff o el código]. Dime si cumple lo que promete, si hay bugs, riesgos de seguridad, código confuso o secretos filtrados. Señala cada problema en la línea donde está y sugiere el arreglo concreto. No apruebes por cortesía.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es un code review?", opciones: ["Aprobar la PR sin leer el diff para ir más rápido", "Leer el diff de una PR con ojo crítico antes de integrarlo", "Un programa que escribe el código por ti", "Borrar los comentarios de la PR"], correcta: 1 },
              { tipo: "relacionar", pares: [["Comment", "Dejar una observación en una línea del diff"], ["Approve", "Aprobar los cambios para mergear"], ["Request changes", "Pedir correcciones antes de aprobar"], ["Files changed", "La pestaña donde se revisa el diff"]] },
              { tipo: "completar", frase: "El caso más común para ti es revisar código ____: no se confía a ciegas, se ____ que cumpla lo pedido, que no haya secretos y que siga el estilo del proyecto.", banco: ["de la IA", "verifica", "de otro", "adivina"], respuestas: ["de la IA", "verifica"] },
              { tipo: "vf", afirmacion: "El code review solo sirve para encontrar errores; los comentarios de claridad y estilo son innecesarios.", correcta: false, explicacion: "la claridad, la consistencia y la seguridad importan tanto como los bugs: dejan el proyecto legible para el siguiente humano o IA." },
              { tipo: "quehace", codigo: "localStorage.setItem(\"carrito\", items);", pregunta: "En una PR, el código original hace <code>localStorage.setItem(\"carrito\", items)</code> y el revisor sugiere <code>JSON.stringify(items)</code>. ¿Por qué?", opciones: ["Porque guardar el objeto directo guarda '[object Object]' en lugar de los datos reales", "Porque JSON.stringify borra el carrito", "Porque setItem no funciona en Safari", "Porque JSON.stringify es un comando de Git"], correcta: 0 }
            ]
          },
          {
            id: "m2-b16",
            titulo: "Merge de un PR: squash, rebase o merge commit",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu PR fue revisada y aprobada (B15). Falta el paso final: el <strong>merge</strong>. El botón verde de merge de GitHub ofrece tres estrategias, y la que elijas define cómo queda tu historial de commits.</p><ul><li><strong>Merge commit:</strong> conserva todos los commits de tu rama tal cual y agrega uno de unión al final. Cuenta la historia completa del trabajo, con cada intento y cada corrección.</li><li><strong>Squash and merge:</strong> aplasta todos los commits de la rama en uno solo y lo integra a main. Historial limpio: un cambio = un commit. Es la opción por default de GitHub.</li><li><strong>Rebase and merge:</strong> toma tus commits y los reacomoda en la punta de main, sin commit de unión. Historial lineal que conserva cada commit individual.</li></ul><p>Regla práctica para tu flujo con IA: <strong>usa squash</strong>. La IA suele producir muchos commits intermedios que a nadie le importan (\"wip\", \"fix\", \"otro intento\"). Dejar un solo commit limpio por cambio terminado se lee mejor y es más fácil de revertir. Usa el merge commit cuando quieras conservar la historia completa de una rama larga, y el rebase cuando el proyecto busque un historial perfectamente lineal.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es la diferencia entre <strong>cómo se guarda la evidencia de un trabajo</strong>. El merge commit guarda el video completo: cada intento, cada corrección, cada paso. El squash guarda solo la foto del resultado final: un commit limpio por cambio terminado. El rebase guarda el video pero lo recorta para que quede en orden con lo que ya había. Para tu flujo con IA casi siempre querrás la foto: un squash por cada cambio terminado.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>[ Merge pull request ▾ ]\n\n  Merge commit       12 commits + 1 de unión\n  Squash and merge     12 commits → 1 solo commit\n  Rebase and merge     12 commits, reordenados en main\n\nAntes (rama feature-carrito):\n  a1b2c3 fix: typo en el carrito\n  d4e5f6 feat: agrega localStorage\n  b7c8d9 wip: intento de pago\n\nDespués de \"Squash and merge\" en main:\n  e9f0a1 feat: carrito de compras con localStorage</code></pre><p>La rama intermedia desapareció y main quedó con un solo commit limpio por cambio terminado.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo mi rama [rama] lista para mergear a [main]. Explícame la diferencia entre merge commit, squash y rebase aplicada a mi caso: cuántos commits tiene mi rama y cuál me conviene elegir para que el historial de main se vea limpio. Dame la opción exacta que debo elegir y el porqué.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace la estrategia 'Squash and merge'?", opciones: ["Borra los commits de la rama para siempre", "Comprime todos los commits de la rama en uno solo dentro de main", "Crea un commit de unión conservando todos los commits", "Reordena los commits de todo el repositorio"], correcta: 1 },
              { tipo: "relacionar", pares: [["Merge commit", "Conserva todos los commits y agrega uno de unión"], ["Squash and merge", "Aplasta los commits de la rama en uno solo"], ["Rebase and merge", "Reacomoda los commits sobre la punta de main, sin unión"]] },
              { tipo: "completar", frase: "Para tu flujo con IA casi siempre conviene ____: deja un solo ____ limpio por cambio terminado.", banco: ["squash", "commit", "rebase", "merge"], respuestas: ["squash", "commit"] },
              { tipo: "vf", afirmacion: "El merge commit borra los commits de la rama de trabajo al integrarlos.", correcta: false, explicacion: "los conserva todos y agrega un commit de unión al final del historial." },
              { tipo: "quehace", codigo: "e9f0a1 feat: carrito de compras con localStorage", pregunta: "En main ves un solo commit con este mensaje después de mergear una rama que tenía 12 commits. ¿Qué estrategia se usó?", opciones: ["Merge commit", "Squash and merge", "Rebase and merge", "Un push directo a main"], correcta: 1 }
            ]
          },
          {
            id: "m2-b17",
            titulo: "Forks: copiar el proyecto de alguien más",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un <strong>fork</strong> es una copia completa de un repositorio de otra persona que se crea dentro de tu cuenta de GitHub. No es una descarga: es un repositorio nuevo que te pertenece, con todo el historial, y que guarda un vínculo con el original llamado <strong>upstream</strong>.</p><ul><li><strong>Fork es distinto de clone (B3-B5):</strong> el clone baja el repositorio a tu computadora; el fork lo copia a tu cuenta en GitHub. Después clonas tu fork como cualquier repositorio tuyo.</li><li><strong>Tu fork es tuyo:</strong> puedes cambiarlo, romperlo y mejorarlo; el original no se afecta ni se entera.</li><li><strong>Sync:</strong> cuando el proyecto original avanza, puedes traer esos cambios a tu fork para mantenerlo al día.</li><li><strong>Pull request:</strong> desde tu fork puedes proponer tus cambios al original (lección B18).</li></ul><p>Usos reales: contribuir a open source (B18), usar un proyecto como base para el tuyo, y aprender leyendo y modificando código real de otras personas. En la práctica es un botón: <strong>Fork</strong>, arriba a la derecha de cualquier repositorio, crea <code>tuusuario/proyecto</code> a partir de <code>otrousuario/proyecto</code>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un fork es <strong>sacar una fotocopia del libro de recetas de la familia</strong>. El original queda intacto en casa; tú llevas tu copia a tu casa y puedes rayar, tachar, arrancar hojas y pegar tus propias recetas. Si algún día mejoras una receta del libro original, se la llevas al dueño como propuesta (una pull request) para que la agregue al libro familiar. Y si el dueño agrega recetas nuevas, puedes ir a actualizar tu copia (sync).</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>github.com/luisaarmenta/recetario-verde       el original\n        |   [Fork]\n        v\ngithub.com/tuusuario/recetario-verde         tu copia\n        |   puedes modificarla libremente\n        |   [Sync] trae cambios del original\n        |   [Pull request] propones tus cambios\n\nEn GitHub, el botón Fork (arriba a la derecha):\n  Owner: tuusuario\n  Repository name: recetario-verde\n  [Create fork]</code></pre><p>La dirección de tu copia ahora comienza con tu nombre de usuario: es un repositorio tuyo más.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero usar el proyecto [URL] como base para [describe tu idea]. Explícame la diferencia entre fork, clone y copiar los archivos a mano, y dime cuál me conviene en este caso. Si hago fork, dame el paso a paso para crearlo y clonarlo en mi computadora.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es un fork en GitHub?", opciones: ["Una descarga del repositorio a tu computadora", "Una copia completa del repositorio dentro de tu cuenta, conectada al original", "Una rama nueva del repositorio original", "Un respaldo que GitHub hace automáticamente"], correcta: 1 },
              { tipo: "completar", frase: "El fork copia el proyecto a ____ cuenta de GitHub. El vínculo con el original se llama ____.", banco: ["tu", "upstream", "la ajena", "origin"], respuestas: ["tu", "upstream"] },
              { tipo: "vf", afirmacion: "Si haces fork de un repositorio y lo modificas, los cambios aparecen también en el repositorio original.", correcta: false, explicacion: "tu fork es independiente: el original no se afecta ni se entera de tus cambios." },
              { tipo: "relacionar", pares: [["Fork", "Copia del repo en tu cuenta de GitHub"], ["Clone", "Copia del repo en tu computadora"], ["Sync", "Trae los cambios del original a tu fork"], ["Pull request desde el fork", "Propone tus cambios al original"]] },
              { tipo: "ordenar", instruccion: "Pasos para trabajar sobre el fork de un proyecto:", elementos: ["hacer clic en Fork en GitHub", "clonar tu fork en tu computadora", "crear una rama de trabajo", "hacer tus cambios y commits", "subir tu rama con git push"] }
            ]
          },
          {
            id: "m2-b18",
            titulo: "Tu primera contribución a open source",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Contribuir a open source suena a cosa de genios, pero es la forma más barata de demostrar que sabes construir. Y lo primero que hay que entender: <strong>contribuir no es solo escribir código</strong>. Los proyectos necesitan documentación, traducciones, correcciones de typos y reportes de bugs bien hechos (B11). La primera contribución más común del mundo es mejorar un README.</p><p>El flujo completo junta varias lecciones de esta materia:</p><ol><li><strong>Encuentra el pendiente:</strong> busca issues con el label <code>good first issue</code> (B12), tareas pensadas para principiantes. Antes de tomarla, comenta en el issue que la trabajas tú, para que no quede en choque con otro contribuidor.</li><li><strong>Lee las reglas:</strong> casi todo proyecto tiene un archivo <code>CONTRIBUTING.md</code> con cómo proponer cambios. Léelo antes de tocar nada.</li><li><strong>Fork (B17), clona, crea tu rama</strong> y haz el cambio.</li><li><strong>Abre la PR (B14)</strong> describiendo qué cambiaste y qué resuelve.</li><li><strong>Atiende el code review (B15):</strong> los mantenedores pedirán ajustes. No es rechazo: es parte del trámite.</li><li><strong>Merge (B16):</strong> tu nombre queda en el historial del proyecto.</li></ol><p>Dos reglas que te ahorran problemas: PR pequeñas y enfocadas — una PR, un cambio — y jamás tocar el proyecto solo para \"dejar huella\". Para un cliente, que tu perfil (B2) muestre contribuciones reales vale más que cualquier curso completado.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un proyecto open source es una <strong>biblioteca pública construida entre todos</strong>. La mayoría solo la usa. Quien nota una página doblada, lo anota en un papelito y lo deja en el mostrador (un issue). Quien se anima más, corrige y devuelve el libro con la página arreglada (una PR). Nadie espera que escribas la biblioteca completa: solo que cuides lo que usas y ayudes con lo que sabes.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Issue #214  [good first issue]  [documentación]\n  \"El README no explica cómo instalar en Windows\"\n\n1) Comentas: \"Hola, lo trabajo yo\"        te asignan\n2) Fork  →  clone  →  git switch -c fix-readme-windows\n3) Editas el README y agregas los pasos de Windows\n4) git add · git commit · git push\n5) PR: \"docs: agrega instrucciones de instalación en Windows\"\n   closes #214\n6) Atiendes los comentarios del review\n7) [Merge]  →  tu commit queda en el historial</code></pre><p>Todo el camino se apoya en lo que ya sabes de B5, B14 y B17: lo único nuevo es que el repo es de otra persona y lo tomaste prestado.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero hacer mi primera contribución a open source y estoy empezando. Me interesa [tema o tipo de proyecto]. Ayúdame a: 1) darme ideas de repositorios con issues marcados como 'good first issue', 2) redactar mi comentario para pedir la tarea, y 3) escribir el título y la descripción de mi PR cuando haga el cambio. Dime exactamente qué escribir en cada paso.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es una forma válida de contribuir a open source sin escribir código?", opciones: ["Ninguna: solo el código cuenta", "Corregir documentación, traducir o reportar bugs con un buen issue", "Darle estrellas al proyecto", "Compartir el repositorio en redes sociales"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Flujo de tu primera contribución:", elementos: ["elegir un issue con label 'good first issue'", "comentar en el issue que lo tomas", "hacer fork y clonar el proyecto", "crear una rama y hacer el cambio", "abrir la pull request", "atender el code review hasta el merge"] },
              { tipo: "completar", frase: "Antes de proponer cambios, casi todo proyecto tiene un archivo ____ con las reglas. Y conviene que tu PR sea ____: un solo cambio por PR.", banco: ["CONTRIBUTING.md", "pequeña", "README.md", "enorme"], respuestas: ["CONTRIBUTING.md", "pequeña"] },
              { tipo: "vf", afirmacion: "Un issue con label 'good first issue' es una tarea pensada para quienes van empezando, con instrucciones claras.", correcta: true, explicacion: "es el puente oficial hacia la primera contribución de los proyectos." },
              { tipo: "quehace", codigo: "\"Hola, lo trabajo yo\"", pregunta: "Comentas esto en el issue que quieres tomar. ¿Cuál es el objetivo principal?", opciones: ["Cumplir con el protocolo social del proyecto", "Que el mantenedor te asigne la tarea y nadie más la tome al mismo tiempo", "Avisar a la IA que debe trabajar", "Ninguno: es un comentario decorativo"], correcta: 1 }
            ]
          },
          {
            id: "m2-b19",
            titulo: "GitHub Actions: cuando el robot trabaja por ti",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>GitHub Actions</strong> es el robot del repositorio: ejecuta tareas automáticas cada vez que algo pasa — un push, una PR abierta, una hora programada. Es la automatización (CI/CD) que antes exigía servidores y especialistas, y ahora vive dentro de GitHub, gratis.</p><p>Así funciona por dentro:</p><ul><li><strong>Workflow:</strong> la receta completa de automatización, escrita en un archivo YAML dentro de la carpeta <code>.github/workflows/</code>.</li><li><strong>Eventos:</strong> lo que dispara la receta: <code>push</code>, <code>pull_request</code>, <code>schedule</code> (por tiempo) y <code>workflow_dispatch</code> (a mano).</li><li><strong>Jobs y steps:</strong> el workflow tiene trabajos (jobs) que corren en runners — computadoras de GitHub — con su sistema operativo (<code>ubuntu-latest</code>, <code>windows-latest</code>), y cada trabajo tiene pasos (steps): instalar, probar, construir, desplegar.</li></ul><p>Lo que más te importa a ti: los <strong>checks</strong> de la pull request (B13, B15). Cuando la IA abre o actualiza una PR, Actions corre tu workflow y el estado se pone verde o rojo. Tú no confías a ciegas: el robot verifica por ti. Con el mismo mecanismo puedes desplegar tu sitio en Pages (B20) o cerrar issues automáticamente.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>GitHub Actions es el <strong>control de calidad de la fábrica</strong>. Tú fabricas la pieza, pero no la vendes directo: pasa por el robot que la prueba con las reglas que definiste una vez. Si la pieza cumple, sigue; si no, la regresa con el sello rojo. El robot trabaja las 24 horas, sin cansarse y sin favoritismos — y tú escribes sus reglas una sola vez en el YAML.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El archivo <code>.github/workflows/pruebas.yml</code>:</p><pre><code>name: Pruebas del proyecto\n\non:\n  push:\n    branches: [main]\n  pull_request:\n\njobs:\n  probar:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Bajar el código\n        uses: actions/checkout@v4\n      - name: Verificación simple\n        run: echo \"Las pruebas corren en cada PR\"</code></pre><p>Ese workflow aparece como un check dentro de cada pull request: verde si pasó, rojo si falló. Es el sello del robot.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero automatizar mi repositorio con GitHub Actions. Cada vez que alguien abra o actualice una pull request quiero que corra una verificación que [describe: revisa formato, corre pruebas, etc.]. Escríbeme el archivo YAML completo en .github/workflows/, explicando cada parte (eventos, jobs, steps) y cómo se ve el resultado en la PR. Mi proyecto es estático (HTML, CSS y JS).\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es GitHub Actions?", opciones: ["Un chat de soporte técnico de GitHub", "La plataforma de automatización de GitHub: ejecuta tareas en tus repos cuando ocurre un evento", "Un editor de código dentro de GitHub", "Un antivirus para repositorios"], correcta: 1 },
              { tipo: "completar", frase: "Un workflow se define en un archivo ____ que vive en la carpeta ____.", banco: ["YAML", ".github/workflows/", "JSON", "src/"], respuestas: ["YAML", ".github/workflows/"] },
              { tipo: "vf", afirmacion: "Los checks verdes o rojos que ves en una pull request pueden venir de un workflow de GitHub Actions.", correcta: true, explicacion: "es su trabajo central: validar cada cambio automáticamente antes del merge." },
              { tipo: "relacionar", pares: [["push o pull_request", "Eventos que disparan el workflow"], ["runs-on: ubuntu-latest", "La máquina del runner donde corre el job"], ["steps", "Los pasos individuales de un job"], ["schedule", "Disparo por tiempo, tipo cron"]] },
              { tipo: "quehace", codigo: "on: [push, pull_request]", pregunta: "Ves esta línea en tu archivo YAML: <code>on: [push, pull_request]</code>. ¿Cuándo se ejecuta el workflow?", opciones: ["Cada vez que haces push a cualquier rama y cada vez que se abre o actualiza una PR", "Una vez por semana", "Solo cuando aprietas un botón manual", "Cada vez que borras una rama"], correcta: 0 }
            ]
          },
          {
            id: "m2-b20",
            titulo: "GitHub Pages: publicar tu sitio gratis desde el repo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p><strong>GitHub Pages</strong> convierte tu repositorio en un sitio web público y gratis. Ese sitio que publicaste en el Mes 1 (C16) puede vivir aquí sin pagar hosting: GitHub lo sirve directo desde tu repo.</p><p>Puntos clave:</p><ul><li><strong>Sirve archivos estáticos:</strong> HTML, CSS y JS. Tu landing, el sitio de tu negocio, tu portafolio — todo lo que funciona en el navegador sin servidor. No sirve para aplicaciones con base de datos.</li><li><strong>Habilitarlo:</strong> Settings → Pages → Source: <code>Deploy from a branch</code> → rama <code>main</code> → carpeta <code>/ (root)</code> → Save.</li><li><strong>La URL:</strong> <code>https://tuusuario.github.io/nombre-del-repo/</code>. Si el repo se llama exactamente <code>tuusuario.github.io</code>, la URL es <code>https://tuusuario.github.io</code>, sin nombre de proyecto.</li><li><strong>Se actualiza solo:</strong> cada push a la rama publicada regenera el sitio. Puedes automatizarlo con Actions (B19), pero el deploy desde rama basta para empezar.</li></ul><p>Errores comunes: si sale en blanco, revisa que el archivo principal se llame <code>index.html</code> y que esté en la carpeta correcta; si sale 404, revisa que la URL sea exacta — minúsculas y sin espacios. El primer deploy tarda alrededor de un minuto: refresca un par de veces.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>GitHub Pages es <strong>la vitrina gratis en la plaza</strong>. Construyes tu producto en tu taller (el repo), lo llevas a la vitrina pública (Settings → Pages) y la plaza le pone el letrero: <code>tuusuario.github.io/tu-repo</code>. Cualquiera lo ve sin pagarte renta, y cada vez que le haces mejoras y haces push, la vitrina se actualiza sola.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Settings → Pages\n  Build and deployment\n  Source: Deploy from a branch\n  Branch: main   Folder: / (root)   [Save]\n\nTu sitio público:\n  https://tuusuario.github.io/mi-primera-pagina/\n\nEn el repo:\n  mi-primera-pagina/\n    index.html      ← así se llama sí o sí\n    styles.css\n    assets/</code></pre><p>Con eso, tu landing del Mes 1 queda en línea. Cada push a main la actualiza (B5).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero publicar mi página [describe tu landing del Mes 1] con GitHub Pages. Ya tengo el repositorio [nombre] subido. Dame el paso a paso exacto: qué elegir en Settings → Pages, cómo debe llamarse mi archivo principal y cómo verifico que quedó publicada. Si sale en blanco o con 404, dime qué revisar primero.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué tipos de proyectos sirve GitHub Pages?", opciones: ["Cualquiera, incluso con base de datos", "Sitios estáticos: HTML, CSS y JS, gratis desde tu repo", "Solo sitios de venta en línea", "Archivos comprimidos para descargar"], correcta: 1 },
              { tipo: "completar", frase: "El archivo principal de tu sitio debe llamarse ____. La URL pública de tu repo [nombre] en tu cuenta será ____/[nombre]/.", banco: ["index.html", "https://tuusuario.github.io", "main.html", "https://github.com"], respuestas: ["index.html", "https://tuusuario.github.io"] },
              { tipo: "ordenar", instruccion: "Pasos para publicar tu sitio con GitHub Pages:", elementos: ["subir tu proyecto con index.html a un repo", "ir a Settings → Pages", "elegir 'Deploy from a branch' y la rama main", "guardar y esperar el primer deploy", "abrir https://tuusuario.github.io/nombre-del-repo/"] },
              { tipo: "vf", afirmacion: "Cada vez que haces push de cambios a la rama publicada, GitHub Pages actualiza el sitio automáticamente.", correcta: true, explicacion: "el deploy se regenera con cada push: editas, haces push (B5) y la vitrina se actualiza." },
              { tipo: "quehace", codigo: "https://tuusuario.github.io/mi-primera-pagina/", pregunta: "Abres esta URL y carga tu landing del Mes 1. ¿Qué está pasando detrás?", opciones: ["GitHub Pages está sirviendo los archivos públicos de tu repositorio desde esa dirección", "Tu computadora tiene que estar encendida para que se vea", "GitHub convirtió tu HTML en una aplicación con servidor", "La URL es temporal y se apagará en una hora"], correcta: 0 }
            ]
          },
          {
            id: "m2-b21",
            titulo: "Colaboradores y permisos: quién puede hacer qué",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un repositorio tuyo puede estar solo, pero lo normal es tener compañía: otra persona de tu negocio, un freelancer, o una IA ejecutora trabajando sobre el mismo código. Para eso existen los <strong>colaboradores</strong> y los <strong>permisos</strong>: tú decides quién entra y qué tanto puede hacer.</p><p>En GitHub, cada persona recibe un rol. De menor a mayor poder:</p><ul><li><strong>Read</strong> — solo ver y clonar (B7). No cambia nada.</li><li><strong>Triage</strong> — lee y administra issues y pull requests (B11-B15), pero no puede tocar el código.</li><li><strong>Write</strong> — todo lo anterior + crear ramas, hacer push y abrir PRs. Es el rol típico de trabajo.</li><li><strong>Maintain</strong> — Write + administrar la configuración básica del repo.</li><li><strong>Admin</strong> — el control total: invitar colaboradores, cambiar la protección de ramas (B22), transferir el repositorio y hasta borrarlo.</li></ul><p>Dónde se configura: en el repositorio, <strong>Settings → Collaborators and teams → Add people</strong>. En un repo privado (B8) se agrega por nombre de usuario o correo; en uno público, cualquiera puede entrar a leer, pero solo quien tú invites puede escribir.</p><p><strong>El riesgo real:</strong> el permiso Write ya permite hacer push directo. Si lo tiene una IA ejecutora o un colaborador descuidado, puede subir cambios a main sin pasar por revisión — y si main no tiene protección (B22), se publica al instante. El Admin, además, puede transferir tu proyecto a otra cuenta o borrarlo sin que puedas reclamarlo. Regla: <strong>el mínimo permiso que haga el trabajo</strong>. Para una IA ejecutora, Read + flujo de PR (B13) casi siempre es lo correcto.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu repositorio es tu <strong>casa-taller</strong>. Los permisos son las llaves que entregas. Read es la llave de la vitrina: quien la tiene puede mirar, pero no entrar. Write es la llave del taller: quien la tiene puede mover tus herramientas y dejar sus piezas en tu mesa. Admin es la llave maestra con la escritura de la casa: puede dar copias a quien quiera — o vender la propiedad. No le entregas la llave maestra a quien apenas conoces, ¿verdad? Pues con el repo es igual.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Settings → Collaborators and teams → Add people\n\n  Invite a collaborator:  ana@miempresa.com\n  Role:  Write            (Read · Triage · Write · Maintain · Admin)\n  [Add ana@miempresa.com]\n\nDespués de agregar, el repo muestra:\n  ana@miempresa.com   Write   (puede hacer push)\n  ia-ejecutora@bot    Read    (solo clona y hace PRs)</code></pre><p>Fíjate: a la persona de tu equipo le diste Write, pero a la IA ejecutora solo Read + PR. La diferencia está en los candados de la rama (B22).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero darle acceso a [persona o IA ejecutora] a mi repositorio [nombre], que es [público o privado]. ¿Qué rol exacto le doy — Read, Triage, Write, Maintain o Admin — para que pueda [lo que debe hacer]? Dime dónde se configura exactamente, qué puede y qué NO puede hacer con ese rol, y qué riesgo hay si le doy Write mientras mi rama main no está protegida.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué permiso necesita un colaborador para hacer push directo al repositorio?", opciones: ["Read", "Write o uno superior (Maintain/Admin)", "Solo Admin", "Triage"], correcta: 1 },
              { tipo: "relacionar", pares: [["Read", "Solo ver y clonar (B7)"], ["Write", "Crear ramas y hacer push"], ["Triage", "Administrar issues y PRs sin tocar código"], ["Admin", "Todo, incluso borrar o transferir el repo"]] },
              { tipo: "vf", afirmacion: "Un colaborador con rol Admin puede transferir o borrar el repositorio, así que debe ser alguien de confianza absoluta.", correcta: true, explicacion: "Admin es el control total: invita gente, cambia la protección de ramas (B22) y puede transferir o borrar el proyecto." },
              { tipo: "completar", frase: "La regla de permisos es dar el ____ permiso que haga el trabajo. Para una IA ejecutora, ____ + flujo de pull request suele ser lo correcto.", banco: ["mínimo", "Read", "Admin", "máximo"], respuestas: ["mínimo", "Read"] },
              { tipo: "quehace", codigo: "Role: Write", pregunta: "Le asignas rol Write a una IA ejecutora mientras tu rama main no tiene protección (B22). ¿Cuál es el riesgo principal?", opciones: ["Que no pueda ver el código", "Que haga push directo a main, sin revisión, y rompa lo publicado", "Que borre el repositorio", "Ninguno: Write solo lee"], correcta: 1 }
            ]
          },
          {
            id: "m2-b22",
            titulo: "Protección de ramas: candados que evitan desastres",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En B21 viste quién puede entrar y qué puede hacer. Ahora el candado: la <strong>protección de ramas</strong> (branch protection) son reglas que GitHub aplica sobre una rama — normalmente <code>main</code> — para que nadie, ni tú, haga tonterías sin control.</p><p>Se configura en <strong>Settings → Branches → Branch protection rules</strong>. Lo esencial:</p><ul><li><strong>Require a pull request before merging:</strong> nadie puede hacer push directo a la rama. Todo cambio entra por una PR (B13) y pasa por code review (B15). Es el candado que te salva de tu propia prisa.</li><li><strong>Require approvals:</strong> la PR necesita al menos una aprobación explícita antes del merge (B15).</li><li><strong>Require status checks to pass:</strong> los checks de GitHub Actions (B19) deben quedar en verde antes de mergear. El robot valida por ti.</li><li><strong>Require branches to be up to date:</strong> tu rama debe traer los últimos cambios de main antes de poder mergear.</li><li><strong>Allow force pushes / Allow deletions:</strong> dejarlos <strong>desactivados</strong>. Un force push puede reescribir el historial y borrar trabajo ajeno.</li></ul><p>Un dato que ahorra sustos: <strong>GitHub ya protege la rama principal por defecto contra force push y contra borrado</strong>. Lo que tú agregas con una regla es el requisito de PR, las aprobaciones y los checks.</p><p><strong>El riesgo real:</strong> sin la regla de PR, cualquier persona con Write (B21) — o tu IA ejecutora — puede hacer push directo a main. El error se publica al instante, y si no hay checks, nadie lo notó. La protección convierte \"lo subo y a ver\" en \"lo reviso y después subo\".</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La protección de ramas es el <strong>candado doble de la caja fuerte</strong>. La caja es main: lo que se despliega, lo que ve el cliente. Para abrirla necesitas dos llaves que no tiene la misma persona: la PR (la propuesta) y la aprobación del review (la segunda firma). Los status checks son el escáner: aunque tengan las llaves, la caja solo abre si el escáner pasa. Y dejar force push desactivado es prohibir que alguien forje la cerradura en vez de usar las llaves.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Settings → Branches → Branch protection rules → Add rule\n\n  Branch name pattern:  main\n\n  ☑ Require a pull request before merging\n      ☑ Require approvals        (1 aprobación mínima)\n  ☑ Require status checks to pass\n      ☑ Require branches to be up to date\n  ☐ Allow force pushes     ← mantener DESACTIVADO\n  ☐ Allow deletions        ← mantener DESACTIVADO\n\n  [Create]\n\nIntento de push directo después de la regla:\n  ! [remote rejected] main -> main (protected branch hook declined)\n  error: failed to push some refs to ...</code></pre><p>El error del final es la señal de que el candado funciona: la única vía de entrada ahora es una PR aprobada.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero proteger la rama main de mi repositorio [nombre]. Necesito que: 1) nadie pueda hacer push directo, 2) toda PR requiera al menos una aprobación, 3) los checks de GitHub Actions pasen antes del merge. Escríbeme el paso a paso exacto de Settings → Branches con cada casilla que debo marcar, y explícame qué pasa si alguien intenta hacer push directo después de configurarlo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué hace 'Require a pull request before merging'?", opciones: ["Impide cualquier cambio en el repositorio", "Bloquea el push directo a la rama protegida: los cambios entran solo por PR aprobada", "Borra automáticamente las ramas viejas", "Solo aplica a repositorios públicos"], correcta: 1 },
              { tipo: "vf", afirmacion: "GitHub protege la rama principal por defecto contra force push y borrado, pero no exige PRs hasta que tú configures la regla.", correcta: true, explicacion: "la protección básica viene por defecto; el requisito de PR, aprobaciones y checks lo agregas tú." },
              { tipo: "relacionar", pares: [["Require a pull request before merging", "No hay push directo: todo entra por PR"], ["Require approvals", "Se necesita al menos una aprobación del review (B15)"], ["Require status checks to pass", "Los checks de Actions (B19) deben pasar antes del merge"], ["Require branches up to date", "La rama debe incluir los últimos cambios de main"]] },
              { tipo: "completar", frase: "Con la regla activa, intentar un push directo a main falla con el error 'protected ____ hook declined'. La única vía de entrada es una ____ aprobada (B13-B15).", banco: ["branch", "pull request", "rama", "password"], respuestas: ["branch", "pull request"] },
              { tipo: "quehace", codigo: "Allow force pushes ✘ (desactivado)", pregunta: "En tu regla de protección, 'Allow force pushes' está desactivado. ¿Qué significa?", opciones: ["Nadie puede hacer push normal", "Nadie puede reescribir el historial de la rama con force push", "Los push solo los hace GitHub", "La regla no está activa"], correcta: 1 }
            ]
          },
          {
            id: "m2-b23",
            titulo: "Releases y changelogs: comunicar qué cambió",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya tienes ramas, PRs y merges (B13-B16). Ahora toca <strong>comunicar qué cambió</strong>. Una <strong>release</strong> en GitHub es un snapshot publicado de tu código con un número de versión y notas de qué trae. Es el entregable que ve tu cliente o quien use tu proyecto.</p><p>Tres piezas que conviene no confundir:</p><ul><li><strong>Tag:</strong> una marca en el historial, normalmente con el número de versión (<code>v1.2.0</code>). Como un marcador de página en un punto exacto del código.</li><li><strong>Release:</strong> el tag + notas de qué cambió + descargas automáticas (<code>Source code (zip)</code> y <code>Source code (tar.gz)</code>). Se crea en <strong>Releases → Draft a new release</strong>, eligiendo el tag y escribiendo el título y las notas.</li><li><strong>Changelog:</strong> el archivo <code>CHANGELOG.md</code> del repositorio, que acumula por escrito qué cambió en cada versión. La release es la noticia; el changelog es el archivo histórico.</li></ul><p>Para escribir buenas notas, apóyate en el versionado semántico que viste en la Materia A: el número mayor cambia con cambios que rompen, el menor con funciones nuevas y el patch corrige bugs. Una convención útil separa los cambios en categorías: <strong>Added</strong> (nuevo), <strong>Changed</strong> (mejorado), <strong>Fixed</strong> (corregido), <strong>Security</strong> (seguridad).</p><p>Tu flujo con IA: cuando terminas un bloque de trabajo, publicas una release y el cliente tiene una dirección clara a dónde mirar — y un snapshot estable al que volver si algo falla.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La release es <strong>el empaque que le entregas al cliente</strong>: caja con número de lote (v1.2.0) y etiqueta de qué trae adentro. El tag es la marca en la cinta de la caja; el changelog es el cuaderno donde llevas la lista de todos los lotes que has entregado. El cliente no necesita el cuaderno completo — le basta la etiqueta — pero tú lo necesitas para saber exactamente qué fue y cuándo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>Releases → Draft a new release\n\n  Choose a tag:    v1.2.0        (o [Create new tag])\n  Target:          main\n  Release title:   v1.2.0\n\n  Write release notes:\n  ### ✨ Added\n  - Checkout con tarjeta de crédito\n  ### 🔧 Changed\n  - Tiempo de carga del catálogo -40%\n  ### 🐛 Fixed\n  - Bug del carrito en Safari\n\n  ☑ Set as latest release\n  [Publish release]\n\nPublicada:\n  v1.2.0  ·  hace 2 minutos\n  Assets:  Source code (zip) · Source code (tar.gz)  ← automático</code></pre><p>GitHub genera las descargas solas. Y en el repo, el changelog acumula la misma historia:</p><pre><code>## [1.2.0] - 2026-08-16\n### Added\n- Checkout con tarjeta\n### Fixed\n- Bug del carrito en Safari</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero publicar la versión [x.y.z] de mi repositorio [nombre]. Estos fueron los cambios: [resumen]. Ayúdame a: 1) elegir el número de versión correcto según el versionado semántico, 2) escribir las notas de release en español con categorías Added/Changed/Fixed, 3) armar la entrada correspondiente en CHANGELOG.md. Explícame la diferencia entre tag, release y changelog.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una release en GitHub?", opciones: ["Un respaldo automático que hace GitHub cada noche", "Un snapshot publicado del código con su versión, notas y descargas", "Una rama nueva de desarrollo", "Un issue con prioridad alta"], correcta: 1 },
              { tipo: "relacionar", pares: [["Tag", "Marca un punto del historial con un nombre (v1.2.0)"], ["Release", "Tag + notas de cambios + descargas del snapshot"], ["CHANGELOG.md", "El archivo que acumula qué cambió en cada versión"], ["Source code (zip)", "Descarga que GitHub genera automáticamente por release"]] },
              { tipo: "completar", frase: "Según el versionado semántico, la versión ____ cambia con cambios que rompen, la ____ con funciones nuevas y el ____ corrige bugs.", banco: ["mayor", "menor", "parche", "etiqueta"], respuestas: ["mayor", "menor", "parche"] },
              { tipo: "vf", afirmacion: "Las notas de release son comunicación directa con quien usa o despliega tu proyecto: con una versión y una lista clara, sabe si puede actualizar sin miedo.", correcta: true, explicacion: "por eso se escriben pensando en quien las lee, no en el código interno." },
              { tipo: "quehace", codigo: "v1.2.0  ·  Source code (zip)", pregunta: "Ves esta línea en la sección Releases de un repositorio. ¿Qué es?", opciones: ["Un tag sin notas, abandonado", "Una release publicada: versión 1.2.0 con descarga del código en ese punto", "Un branch de desarrollo", "Un issue resuelto"], correcta: 1 }
            ]
          },
          {
            id: "m2-b24",
            titulo: "GitHub Copilot: la IA que vive dentro del editor",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hasta ahora le has hablado a la IA por separado: le pegas el código, te devuelve cambios. <strong>GitHub Copilot</strong> es otra cosa: es la IA que vive <strong>dentro de tu editor de código</strong> (VS Code, entre otros), sugiriendo y respondiendo ahí donde trabajas, sin copiar y pegar.</p><p>Tres formas de usarlo:</p><ul><li><strong>Autocomplete:</strong> mientras escribes, Copilot sugiere la siguiente línea o bloque en texto gris. Presionas <code>Tab</code> para aceptar. Es como tener a un compañero que va terminando tus frases.</li><li><strong>Chat:</strong> un panel donde le preguntas por tu proyecto: \"explícame este archivo\", \"encuentra por qué falla el login\", \"refactoriza esta función\".</li><li><strong>Chat en línea (inline):</strong> seleccionas un fragmento de código y le pides cambios ahí mismo, sin salir del archivo.</li></ul><p>Para sugerir bien, Copilot necesita <strong>contexto</strong>: entre más archivos tengas abiertos, mejores serán sus respuestas. Y como vive dentro del editor, ya está leyendo tu repo — no tienes que explicarle qué tienes.</p><p><strong>El punto crítico:</strong> Copilot sugiere código <em>plausible</em>, no código <em>correcto</em>. Se entrena con muchísimo código público y repite patrones — buenos y malos. Puede sugerir funciones que no existen, código desactualizado, o fragmentos con vulnerabilidades de seguridad. Por eso sus sugerencias pasan por el mismo <strong>code review</strong> (B15) que el código de cualquier persona: tú decides qué entra y qué no.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Copilot es el <strong>aprendiz sentado a tu lado</strong> en el taller. Mientras escribes, te pasa la siguiente herramienta antes de que la pidas (autocomplete). Le preguntas cosas del proyecto y te responde sin moverse (chat). Pero es aprendiz: entusiasmado y rápido, y a veces se equivoca con total seguridad. Nadie en un taller serio deja que el aprendiz firme solo la pieza final — alguien revisa. Ese alguien eres tú.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>// Escribes esto en tu archivo:\nfunction calcularTotal(items) {\n  const total = items.reduce(\n\n// Copilot sugiere en texto gris (Tab para aceptar):\n  (acc, item) => acc + item.precio * item.cantidad, 0);\n  return total;\n}\n\n// En el panel de chat:\n@Copilot  ¿Por qué se rompe el carrito al pagar?\n          El error parece estar en cart.js:34, donde\n          guardas el objeto sin JSON.stringify... revisa.</code></pre><p>El flujo correcto: dejas que Copilot escriba el borrador, lo lees con ojo de revisión (B15), y solo entonces haces tu commit.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo la extensión GitHub Copilot instalada en VS Code y mi proyecto [repo] abierto. Explícame: 1) la diferencia entre el autocomplete, el chat y el chat en línea, con un ejemplo de cuándo usar cada uno; 2) cómo darle mejor contexto para que sus sugerencias sirvan; 3) tres errores típicos que comete al sugerir código, para que yo sepa qué revisar antes de aceptar. Mi proyecto usa [lenguajes o stack].\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Dónde vive GitHub Copilot?", opciones: ["Es un sitio web separado de GitHub", "Dentro del editor de código, sugiriendo mientras escribes", "Solo en la terminal", "Es un reemplazo de Git"], correcta: 1 },
              { tipo: "vf", afirmacion: "Las sugerencias de Copilot siempre son correctas y seguras: puedes aceptarlas sin revisarlas.", correcta: false, explicacion: "sugiere código plausible pero puede estar mal, desactualizado o con vulnerabilidades; pásalas por code review (B15)." },
              { tipo: "relacionar", pares: [["Autocomplete", "Sugiere la siguiente línea en texto gris; Tab para aceptar"], ["Chat", "Le preguntas por tu proyecto en el editor"], ["Chat en línea (inline)", "Seleccionas código y le pides cambios ahí mismo"], ["Code review (B15)", "El paso donde verificas todo lo que sugiere"]] },
              { tipo: "completar", frase: "Copilot necesita ____: entre más archivos del proyecto tengas abiertos, mejor sugiere. Y sus resultados pasan por el mismo ____ que el código de cualquier persona.", banco: ["contexto", "code review", "internet", "permiso"], respuestas: ["contexto", "code review"] },
              { tipo: "quehace", codigo: "const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);", pregunta: "Copilot sugiere esta línea en texto gris. ¿Qué haces antes de presionar Tab?", opciones: ["Presionar Tab sin mirar: es Copilot, confío", "Leer la línea, confirmar que hace lo que pediste y verificar los nombres de variables", "Pedirle que cambie de lenguaje", "Cerrar el archivo y volver a abrirlo"], correcta: 1 }
            ]
          },
          {
            id: "m2-b25",
            titulo: "Buscar código en GitHub: tu biblioteca infinita",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>B1 te dijo que GitHub es una biblioteca infinita. Ahora el cómo encontrarla: el <strong>buscador de GitHub</strong>. Desde la barra superior puedes buscar repositorios, código, issues, usuarios y temas. El buscador tiene <strong>filtros</strong> que hacen la magia:</p><ul><li><code>language:javascript</code> — solo repos en ese lenguaje</li><li><code>stars:&gt;1000</code> — repos con más de 1000 estrellas (B26)</li><li><code>user:rayflores</code> / <code>org:mi-empresa</code> — lo que tiene una cuenta u organización</li><li><code>path:</code> — busca dentro de archivos con esa ruta</li><li><code>created:&gt;2025-01-01</code> — repos creados después de una fecha</li></ul><p>Detalle práctico: el buscador de <strong>repositorios</strong> funciona sin cuenta; el de <strong>código</strong> te pide iniciar sesión. Dentro de un repositorio ya abierto, la tecla <code>T</code> abre un buscador de archivos instantáneo para saltar a donde quieras.</p><p>Usos que te tocan de cerca:</p><ul><li><strong>Encontrar librerías</strong> (Materia A): en vez de preguntarle a la IA a ciegas, buscas \"carrito language:javascript stars:&gt;1000\" y ves qué existe.</li><li><strong>Evaluar antes de adoptar:</strong> estrellas (B26), commits recientes, issues abiertos (B11) y licencia (B27) — tres minutos de lectura te ahorran semanas de arrepentimiento.</li><li><strong>Aprender de código real:</strong> busca una solución, clona (B7) o haz fork (B17), y lee cómo otros lo resolvieron. Es la mejor escuela que existe.</li></ul><p>Tip que vale oro: busca listas <code>awesome-...</code> (por ejemplo <code>awesome-javascript</code>): son curadurías humanas de las mejores librerías por tema.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>GitHub es la biblioteca pública más grande del mundo y el buscador es el <strong>bibliotecario experto</strong>. No le pides \"un libro de cocina\": le dices \"recetas mexicanas, vegetarianas, con menos de 30 minutos, publicadas este año\" y te trae exactamente eso. Los filtros son tu forma de hablarle al bibliotecario en su idioma — cuanto más preciso el pedido, mejor el resultado.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<pre><code>En la barra superior de GitHub:\n\n  carrito de compras language:javascript stars:&gt;1000\n\n→ Repos ordenados por relevancia. Entras al que más te convence.\n\nDentro del repo, presionas T:\n\n  [ Find file ]  →  escribes: cart.js\n  → salta directo al archivo que busca la lógica del carrito</code></pre><p>Mismo flujo para librerías: busca el tema, mira las estrellas y la última actividad, lee el README (B9) y decide. Todo en menos de cinco minutos.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero aprender a resolver [problema concreto] leyendo código real en GitHub. Ayúdame a: 1) armar la búsqueda exacta con los filtros correctos (lenguaje, estrellas, fecha), 2) recomendarme 3 repositorios para estudiar el tema y por qué cada uno, 3) decirme qué archivos abrir primero en cada uno para entender cómo funciona. Quiero ejemplos de código real, no teoría.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué puedes buscar en GitHub?", opciones: ["Solo repositorios de Microsoft", "Repositorios, código, issues, usuarios y temas, con filtros", "Videos y música", "Precios de hosting"], correcta: 1 },
              { tipo: "relacionar", pares: [["language:javascript", "Solo repos en JavaScript"], ["stars:>1000", "Más de 1000 estrellas (B26)"], ["user:rayflores", "Todo lo que tiene ese usuario"], ["created:>2025-01-01", "Creados después de esa fecha"]] },
              { tipo: "completar", frase: "Antes de adoptar una librería revisa sus ____ (B26), si tiene ____ recientes y qué ____ tiene (B27).", banco: ["estrellas", "commits", "licencia", "seguidores"], respuestas: ["estrellas", "commits", "licencia"] },
              { tipo: "vf", afirmacion: "Dentro de un repositorio abierto, la tecla T abre un buscador de archivos para saltar directo a cualquier archivo del repo.", correcta: true, explicacion: "es el atajo para moverse rápido por código ajeno o propio." },
              { tipo: "quehace", codigo: "carrito de compras language:javascript stars:>1000", pregunta: "Escribes esto en el buscador de GitHub. ¿Qué obtienes?", opciones: ["Páginas web que mencionan carrito de compras", "Repositorios de JavaScript con más de 1000 estrellas sobre carrito de compras", "Issues de un repo llamado 'carrito'", "Solo repositorios privados"], correcta: 1 }
            ]
          },
          {
            id: "m2-b26",
            titulo: "Estrellas, forks y watchers: las métricas sociales del código",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En B1 te presenté GitHub como la plaza pública del código. Cada proyecto que vive ahí tiene tres contadores que leen todos — estrellas, forks y watchers — y aunque parecen decoración, son la <strong>moneda social</strong> con la que se mide la confianza en este mundo.</p><ul><li><strong>Star (estrella) ⭐</strong> — un \"me gusta\" que además guarda el repo en tu lista personal. Quien la da no modifica nada: solo dice \"este proyecto me interesa\". Es el indicador de popularidad por excelencia.</li><li><strong>Fork 🍴</strong> — una copia completa del repositorio que se crea <strong>en tu cuenta</strong> de GitHub. No es una copia local: es un repo tuyo que nace del de otro, para modificarlo con libertad o usarlo como base. Cuando alguien \"usa tu código\", casi siempre es porque hizo fork.</li><li><strong>Watch 👁</strong> — una suscripción: quien la activa recibe notificaciones de la actividad del repo (releases, issues, discusiones). Su contador dice cuánta gente sigue este proyecto de cerca.</li></ul><p>La confusión clásica es fork vs clone (B7). <strong>Clone</strong> copia el repo a tu computadora para trabajar; <strong>fork</strong> crea una copia en tu cuenta de GitHub. Puedes clonar tu propio fork, y si mejoras el proyecto original, le ofreces los cambios con un pull request (B13).</p><p>Para ti, estos números son el radar que empezaste a usar en B25: muchas estrellas = el proyecto goza de confianza; forks altos = otros lo toman de base; watchers = gente siguiendo de cerca. Un repo con 10,000 estrellas y su último commit hace 4 años es popular pero posiblemente muerto — los tres contadores juntos cuentan la historia completa.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Las métricas son los <strong>post-its que la gente pega en la puerta de un restaurante</strong>. Las estrellas son los \"recomendado\" con nombre que otros se anotan para no olvidar el lugar. Los forks son las copias de tu receta que otros se llevan a su cocina — y si la mejoran, te mandan el resultado. Los watchers son los vecinos que preguntan cuándo abres para llegar primero. Y ojo: un restaurante puede tener miles de recomendaciones… y estar cerrado desde hace un año. Por eso los tres números se leen juntos.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La ficha de un repositorio, tal como la ve cualquiera:</p><pre><code>rayflores / DEV-SYSTEM-ACADEMY\n⭐ 12  🍴 3  👁 45\n\nConstruye sitios web dirigiendo IA — materiales del curso.\n\nReleases: v2.4.0 · hace 3 días\nPull requests merged: 12 · Issues abiertos: 58</code></pre><p>Y el flujo de fork, el que vas a usar para aprender de código ajeno:</p><pre><code>1. Abres el repo que quieres estudiar\n2. Clic en [Fork]  →  se crea la copia en TU cuenta\n3. git clone https://github.com/tuusuario/repo.git\n4. Modificas, experimentas, rompes y aprendes\n5. Si mejoras algo, abres un pull request (B13) al original</code></pre><p>Ese flujo — fork, clone, mejorar, PR — es literalmente cómo funciona la colaboración en el mundo open source.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero elegir entre estos repositorios para [tu objetivo]: [URLs]. Compáralos usando estrellas, forks, watchers, la fecha del último commit y las issues abiertas (B11). ¿Cuál está más vivo y es más confiable, y por qué? Dime qué significan en conjunto sus tres contadores.\"</p></blockquote><p>Ese prompt te entrena para leer métricas como lo haría un ingeniero senior.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es una estrella en GitHub?", opciones: ["Guardar el código del repo en tu disco", "Marcar un repositorio como favorito o de interés (un 'me gusta')", "Copiar el repo a tu cuenta de GitHub", "Suscribirte a sus notificaciones"], correcta: 1 },
              { tipo: "relacionar", pares: [["Star ⭐", "Un 'me gusta' que guarda el repo en tu lista"], ["Fork 🍴", "Copia del repo que se crea en tu cuenta"], ["Watch 👁", "Suscribirte para recibir notificaciones de su actividad"], ["Clone", "Copia local para trabajar (B7)"]] },
              { tipo: "vf", afirmacion: "Hacer fork y hacer clone es exactamente lo mismo.", correcta: false, explicacion: "clone copia el repo a tu computadora; fork crea una copia en tu cuenta de GitHub, vinculada al original." },
              { tipo: "completar", frase: "Después de hacer fork y mejorar el proyecto, ofreces tus cambios al original con un ____ (B13). Las estrellas miden ____ y los watchers siguen de cerca.", banco: ["pull request", "popularidad", "código", "descarga"], respuestas: ["pull request", "popularidad"] },
              { tipo: "quehace", codigo: "⭐ 12,400 · 🍴 3,100 · 👁 890 · último commit: 2026-02-14", pregunta: "Ves estos números en la página de un repositorio. ¿Qué concluyes?", opciones: ["Es un repo impopular y abandonado", "Es popular (12 mil estrellas), muy usado de base (3 mil forks) y con seguidores de cerca (890 watchers); falta confirmar con la fecha del último commit si sigue vivo", "Las estrellas significan que el repo cobra", "No sirve porque tiene pocos watchers"], correcta: 1 }
            ]
          },
          {
            id: "m2-b27",
            titulo: "Licencias explicadas simple: MIT, Apache, GPL",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Todo código tiene un dueño legal, y la <strong>licencia</strong> es el permiso escrito de ese dueño: qué puedes hacer con su código y bajo qué condiciones. Parece papeleo, pero es la diferencia entre usar código de forma legítima y estar violando derechos sin saberlo.</p><p>El dato que casi nadie conoce: <strong>si un repositorio NO tiene licencia, la ley presume \"todos los derechos reservados\"</strong> — nadie puede copiarlo, modificarlo ni usarlo, aunque esté público en GitHub. Público no es sinónimo de libre.</p><p>Las tres que dominan el mundo:</p><ul><li><strong>MIT</strong> — la más permisiva. Puedes usar, copiar, modificar y vender el código; solo debes incluir el aviso de copyright original. Es la licencia por default de los proyectos que quieren máxima adopción (React, jQuery).</li><li><strong>Apache 2.0</strong> — también permisiva, con dos extras: una concesión explícita de <strong>patentes</strong> (tranquiliza a las empresas) y la regla de que si modificas el código, lo anotes en un archivo <code>NOTICE</code>. Ideal cuando el código lo usarán empresas.</li><li><strong>GPL</strong> — la de \"copyleft\": puedes usarla y modificarla libremente, pero <strong>si distribuyes tu versión, debe publicarse bajo GPL también</strong>. Si la usas, tu obra se queda tan libre como la original (Linux y WordPress usan GPL).</li></ul><p>Cuál elegir: para tus proyectos personales y de negocio, <strong>MIT es casi siempre la respuesta</strong> — permite que cualquiera los use sin miedo legal. Apache 2.0 cuando hay empresas o patentes de por medio. GPL cuando quieres forzar que las mejoras se mantengan abiertas. Y antes de usar una librería (Materia A), revisa su licencia — recuerda el chequeo de B25.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La licencia es el <strong>letrero de las reglas del estacionamiento</strong> del edificio. Sin letrero, nadie se atreve a estacionarse (por ley, todo reservado). Con MIT, el letrero dice: \"entra y quédate, solo di que es del edificio de fulanito\". Con Apache: \"entra y quédate; si remodelas, avisa qué cambiaste\". Con GPL: \"entra y quédate — y si construyes aquí tu oficina, tu oficina también queda abierta para todos\". Elegir la licencia es escribir ese letrero para que otros sepan si pueden entrar.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>En la página de un repo, la licencia aparece como un letrero automático, y en el proyecto hay un archivo <code>LICENSE</code>:</p><pre><code>rayflores / mi-tienda\nMIT license  ·  View license\n\n(archivos del repo)\nLICENSE          ← texto completo de la licencia\nREADME.md</code></pre><p>Agregar una licencia desde GitHub:</p><pre><code>1. Abres el repo → botón [Add file] → Create new file\n2. Nombre:  LICENSE\n3. Clic en [Choose a license template]\n4. Buscas MIT, la seleccionas, editas el año y tu nombre\n5. Commit\n\nDespués:  MIT license  aparece en la página del repo</code></pre><p>El texto completo importa — copiar \"MIT\" a mano sin el aviso oficial deja el repo sin la protección real.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Quiero publicar mi repositorio [nombre], que es [describe tu proyecto]. ¿Qué licencia me conviene: MIT, Apache 2.0 o GPL? Mi caso: [¿lo quieres libre para cualquiera? ¿lo usarán empresas? ¿quieres que las mejoras sigan abiertas?]. Explícame en una línea qué permite y qué obliga cada una, y recomiéndame una.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["MIT", "Permisiva: uso libre incluyendo el aviso de copyright"], ["Apache 2.0", "Permisiva + concesión de patentes y aviso de cambios"], ["GPL", "Si distribuyes tu versión, debe seguir siendo abierta"]] },
              { tipo: "multiple", pregunta: "Un repositorio público en GitHub no tiene ningún archivo de licencia. ¿Qué significa legalmente?", opciones: ["Que cualquiera puede usarlo gratis", "Que por defecto nadie puede copiarlo ni modificarlo: todos los derechos reservados", "Que es código libre automáticamente", "Que GitHub le asigna MIT automáticamente"], correcta: 1 },
              { tipo: "vf", afirmacion: "Si tomas código con licencia GPL y haces una versión modificada, puedes distribuirla como software cerrado sin publicar el código.", correcta: false, explicacion: "GPL obliga a que las versiones modificadas que distribuyas se publiquen bajo GPL: tu obra sigue siendo tan libre como la original." },
              { tipo: "completar", frase: "La licencia ____ es la más permisiva y solo pide incluir el ____ de copyright. ____, en cambio, exige que las versiones modificadas distribuidas sigan siendo abiertas.", banco: ["MIT", "aviso", "GPL", "precio"], respuestas: ["MIT", "aviso", "GPL"] },
              { tipo: "quehace", codigo: "MIT license", pregunta: "Ves el letrero <code>MIT license</code> en la página de un repositorio. ¿Qué te dice?", opciones: ["Que el código está protegido y no puedes usarlo", "Que el autor permite usar, copiar, modificar y vender su código incluyendo el aviso de copyright", "Que el repositorio está vacío", "Que la licencia caducó"], correcta: 1 }
            ]
          },
          {
            id: "m2-b28",
            titulo: "Seguridad: secretos, tokens y lo que NUNCA debes subir",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Esta es la lección más importante de todo el mes, y no es exageración. <strong>Los secretos son credenciales que nadie más debe ver:</strong> contraseñas, llaves de API, tokens, cadenas de conexión a bases de datos, certificados. Normalmente viven en un archivo <code>.env</code> (lo viste en A11) — y ese archivo <strong>NUNCA debe subirse a GitHub</strong>.</p><p>El riesgo es real y silencioso: <strong>los bots escanean GitHub permanentemente</strong> buscando claves expuestas (GitHub lo llama secret scanning). A los minutos de subir un token, alguien puede estar usándolo para leer tus repositorios privados, escribir en tu nombre o —con una llave de API de un servicio de pago o de nube— generar cargos en tu tarjeta.</p><ul><li><strong>Tu contraseña normal de GitHub no sirve para autenticar comandos</strong> (lo viste en B5): se usa un <strong>Personal Access Token</strong>, una llave con permisos específicos y fecha de caducidad. Ese token es una llave de tu casa: subirlo es pegar la llave en la puerta del edificio.</li><li><strong>Borrar el archivo no alcanza:</strong> si un secreto se subió, quedó en el historial del repo. Aunque un commit siguiente lo borre, cualquiera puede ver la historia. La única respuesta correcta es <strong>revocar</strong> el token (regenerarlo) y girar cualquier contraseña filtrada.</li></ul><p>Reglas de oro de este programa:</p><ol><li><strong>Nunca</strong> pongas un token, contraseña o llave en un commit. El <code>.gitignore</code> (A11) protege el <code>.env</code>.</li><li>Antes de cada push, <strong>revisa <code>git status</code> y <code>git diff</code></strong> para ver exactamente qué va a viajar.</li><li>Si algo se filtró: <strong>revoca, rota y avisa</strong>. Sin excusas, ni \"pero es mi repo privado\" (B8).</li><li>Nunca compartas secretos con la IA en prompts ni en código.</li></ol><p>GitHub además te ayuda: si detecta un patrón de secreto en un commit, te envía una alerta para que actúes. Esa alerta no es un bug: es tu salvavidas.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un token es la <strong>llave de la puerta principal</strong> de tu casa-taller. La contraseña normal es el uniforme: lo ves y sabes quién es. Pero el token es la llave física que abre: con ella, cualquiera entra, toma las cajas, firma en tu nombre y deja la puerta abierta. Subir un token a un repo es <strong>colgar la llave en el poste del parque con tu nombre y tu dirección</strong>. Y cuando la llave se pierde, no se regresa a su lugar: se cambia la cerradura entera. En términos de código: se revoca.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El error y su costo, sin drama:</p><pre><code># archivo .env (tu computadora — NO debe viajar)\nDB_PASSWORD=SuperSecreto123\nSTRIPE_SECRET_KEY=sk_live_51HxK...\n\n# El día del desastre:\n#     git add .\n#     git commit -m \"config\"\n#     git push\n# …el .env viajó. Aunque el siguiente commit lo borre,\n# el secreto ya está en el historial público del repo.\n\n# Plan de respuesta correcto (en orden):\n1. Revocar YA el token / girar la contraseña (Stripe, AWS, GitHub…)\n2. Regenerar credenciales y guardarlas en el gestor de contraseñas\n3. Verificar que .env esté en el .gitignore (A11)\n4. Para limpiar el historial: git filter-repo / BFG, con ayuda de la IA\n5. Mover el secreto a una variable de entorno del servicio (Mes 9)</code></pre><p>El paso 1 es innegociable: <strong>revocar</strong>. Todo lo demás se hace con calma; lo que no se revoca, se sigue cobrando.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Antes de hacer push de mi proyecto, revisa que no haya secretos: 1) tokens, contraseñas o llaves de API hardcodeadas en mis archivos (busca patrones como sk_, api_key, password, .env); 2) qué archivos va a subir git según <code>git status</code>; 3) si mi <code>.gitignore</code> cubre todo lo necesario. Esto es para [nombre de tu repo].\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "vf", afirmacion: "Los bots escanean GitHub automáticamente buscando secretos expuestos como tokens y llaves de API.", correcta: true, explicacion: "es el secret scanning: a los minutos de subir una clave, alguien puede estar usándola." },
              { tipo: "multiple", pregunta: "¿Qué es un Personal Access Token?", opciones: ["La contraseña normal de tu cuenta de GitHub", "Una llave de acceso con permisos específicos que usan las herramientas para autenticarse en tu nombre", "Un certificado para publicar páginas", "Un código de descuento para GitHub"], correcta: 1 },
              { tipo: "completar", frase: "Los secretos viven en el archivo ____, que debe estar incluido en el ____ para que Git nunca lo suba.", banco: [".env", ".gitignore", "config.json", "README"], respuestas: [".env", ".gitignore"] },
              { tipo: "quehace", codigo: "Subiste por error un token al hacer push", pregunta: "Acabas de hacer push y descubres que en el historial quedó un token. ¿Qué haces PRIMERO?", opciones: ["Hacer un commit que lo borre", "Revocar el token de inmediato y girar la clave", "Borrar el repositorio", "Nada, el repo es privado"], correcta: 1 },
              { tipo: "relacionar", pares: [["Leak de token en un push", "Revocarlo YA: ya quedó en el historial"], ["Archivo .env sin ignorar", "Agregarlo a .gitignore (A11) antes del commit"], ["Llave de API escrita en el código", "Moverla a una variable de entorno (Mes 9)"], ["Vas a hacer push de cambios", "Revisar git status y git diff para ver qué viaja"]] }
            ]
          },
          {
            id: "m2-b29",
            titulo: "Tu portafolio en GitHub: cómo te ve un cliente",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En B2 armaste tu perfil como carta de presentación. Ahora el otro lado del mostrador: <strong>lo que un cliente ve cuando llega</strong>. Un cliente no lee código ni revisa tu CV — mira tu perfil de GitHub y tus repositorios durante unos segundos, y de esos segundos saca una conclusión.</p><p>Lo que un cliente evalúa, en orden:</p><ol><li><strong>Los repos fijados (pinned, B2):</strong> hasta 6 proyectos que eliges tú. Es tu vitrina; no se publican 30 repos sin README.</li><li><strong>El README (B9):</strong> en 10 segundos responde qué hace el proyecto, por qué vale la pena y qué problema resuelve. Con una captura de pantalla y un enlace a la demo en vivo (GitHub Pages, B20), el cliente ya no tiene que adivinar nada.</li><li><strong>La demo funcionando:</strong> un enlace a la página viva. Nada convence como tocar el resultado.</li><li><strong>El historial de commits:</strong> actividad constante = persona que trabaja en serio (volviste a B2). Un repo con un solo commit hace un año se lee como proyecto abandonado.</li><li><strong>El estado del repo:</strong> sin <code>node_modules</code>, sin <code>.env</code> ni secretos (A11, B28), sin archivos basura, con un nombre claro y una descripción de una línea.</li></ol><p>La gran diferencia entre \"repo de práctica\" y \"repo de portafolio\" es la intención: el primero demuestra que aprendes; el segundo demuestra que <strong>construyes resultados</strong>. Para un cliente, tres proyectos terminados y bien presentados valen más que treinta ejercicios sin pulir.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu perfil es la <strong>vitrina de tu taller</strong> y cada repo fijado es el <strong>producto estrella en exhibición</strong>. El README es la etiqueta que explica el producto sin que tengas que hablar; la captura de pantalla es la foto del resultado terminado; la demo en vivo es el \"pruébelo usted mismo\" del vendedor. Un cliente que llega a una vitrina con tres productos bien etiquetados y probables entra. Uno que ve 30 cajas amontonadas sin etiquetas, pasa de largo. La vitrina no dice qué sabes: dice qué entregas.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El punto de vista del cliente, de frente:</p><pre><code>Raymundo Flores\nConstruyo sistemas web con IA\n📌 Pinned (4 repos):\n\n┌──────────────────────────────────────┐\n│ Tortas El Güero — Sitio de negocio  │\n│ Catálogo, pedidos por WhatsApp y     │\n│ Google Maps. Live demo:              │\n│ → demo.tortaselguero.com   ⭐ 3      │\n└──────────────────────────────────────┘\n\nLista de chequeo antes de mostrar algo:\n☑ README con captura y demo en vivo (B9)\n☑ Sin .env, tokens ni archivos basura (A11, B28)\n☑ Nombre claro + descripción de una línea\n☑ Licencia (B27) + commits recientes\n☑ Proyecto funcional de verdad, no maqueta</code></pre><p>Esa lista es tu rutina antes de mandarle tu perfil a cualquier cliente.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a enviarle mi portafolio de GitHub a un posible cliente. Asume que eres ese cliente y evalúa mi perfil y mis repositorios fijados: 1) ¿qué primera impresión dan mis títulos, descripciones y READMEs? 2) ¿qué repo presenta mejor y cuál flojea? 3) escríbeme los textos (bio, descripciones de repo y README) para que un negocio local entienda en 10 segundos qué hago. Enlace a mi perfil: [URL].\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué es lo primero que mira un cliente en tu perfil de GitHub?", opciones: ["El número de seguidores", "Tus repositorios fijados (pinned) y cómo están presentados", "Tu foto de perfil", "La antigüedad de tu cuenta"], correcta: 1 },
              { tipo: "relacionar", pares: [["README que vende (B9)", "Qué hace el proyecto y por qué vale la pena"], ["Demo en vivo (B20)", "Que lo pueda probar sin instalar nada"], ["Historial de commits", "Señal de trabajo constante"], ["Repo limpio, sin .env", "Profesionalismo y seguridad (A11, B28)"]] },
              { tipo: "vf", afirmacion: "Tres proyectos terminados y bien presentados valen más para un cliente que treinta repos sin README.", correcta: true, explicacion: "el cliente evalúa resultados, no la cantidad de ejercicios." },
              { tipo: "completar", frase: "El ____ del repo es la puerta de entrada: con una captura de pantalla y un enlace a la ____, el cliente entiende qué construiste en 10 segundos sin leer código.", banco: ["README", "demo en vivo", "licencia", "rama"], respuestas: ["README", "demo en vivo"] },
              { tipo: "quehace", codigo: "Tortas El Güero · Sitio de negocio con catálogo y pedidos por WhatsApp · Live demo → demo.tortaselguero.com", pregunta: "Un cliente ve esta descripción de un repo fijado. ¿Qué conclusión saca razonablemente?", opciones: ["Que el proyecto es complicado de usar", "Que construiste un sitio real y puede probarlo en vivo", "Que no sabes programar", "Que el repositorio está vacío"], correcta: 1 }
            ]
          },
          {
            id: "m2-b30",
            titulo: "Repaso integrador de GitHub (mega-quiz jugable)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Cerramos la Materia B con un repaso que no es una clase nueva: es el <strong>mapa de lo que ya construiste</strong>. Todo esto ya lo viste; aquí se acomoda para que la Materia C (puro ejercicio) tenga cimientos firmes.</p><p>El mapa completo de GitHub, en cuatro capas:</p><ul><li><strong>Fundamentos (B1-B5):</strong> Git es el programa local y GitHub el servicio web (B1). Tu perfil es tu carta de presentación (B2). El remoto es una copia completa que vive en la nube (B3-B4), y <code>git push</code> la actualiza (B5).</li><li><strong>Trabajo diario (B6-B10):</strong> traer cambios con <code>git pull</code> (B6), clonar proyectos con <code>git clone</code> (B7), público vs privado (B8) y el README como puerta de entrada (B9).</li><li><strong>Colaboración (B11-B16):</strong> issues como lista de tareas (B11), pull requests como propuestas formales (B13-B14), code review como tu candado de calidad (B15) y el merge que las cierra (B16).</li><li><strong>Nivel pro (B17-B29):</strong> forks y contribución a open source (B17-B18), GitHub Actions como tu robot validador (B19), publicar con Pages (B20), candados para main (B22), releases que comunican (B23), Copilot en tu editor (B24), búsqueda (B25), métricas sociales (B26), licencias (B27), secretos (B28) y el portafolio que le vende a un cliente (B29).</li></ul><p>El mega-quiz que sigue mezcla los 6 tipos de ejercicio que ya dominas — opción múltiple, completar, relacionar, verdadero/falso, ordenar y \"qué hace este código\" — para que el repaso también te divierta. Contesta sin adivinar: si no estás seguro, es la señal de a qué lección volver.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>La Materia B fue <strong>armar tu taller</strong>: instalaste la máquina (Git), abriste el local (GitHub), aprendiste a recibir mercancía y despacharla (push y pull), a trabajar con socios sin pisarse (ramas y PRs), a proteger el inventario (ramas protegidas y secretos) y a poner la vitrina (portafolio). El repaso es la <strong>inspección de seguridad antes de abrir las puertas</strong>: revisas que cada herramienta esté en su lugar, no para aprender algo nuevo, sino para confirmar que nada se quedó flojo. La Materia C es el primer día de atención al cliente — ahí sí se aprende en marcha.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Cómo jugar el mega-quiz para que sirva:</p><pre><code>1. Responde los 8 ejercicios SIN ver tus notas.\n2. Si dudas, NO adivines: márcalo para repasar.\n\nInterpreta tu resultado:\n  8/8  → listo para la Materia C, sigue así\n  6-7  → repasa los temas de las que fallaste\n  &lt; 6  → vuelve a las lecciones señaladas y repite\n\nCada pregunta apunta a su lección:\n  flujo add/commit/push  → B4-B5\n  comandos               → B5-B7\n  repo privado           → B8\n  pull requests          → B13-B16\n  protección de main     → B22\n  clone                  → B7\n  secretos               → B28\n  licencias              → B27</code></pre><p>La meta no es memorizar respuestas: es que cada ejercicio te recuerde <em>por qué</em> funciona así.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Autoevaluación",
                html: "<p>Antes de saltar a las prácticas de la Materia C, pruébate con honestidad. Si puedes responder cada punto sin mirar tus notas, estás listo:</p><ul><li>Expliqué la diferencia entre Git y GitHub (B1) y armé un perfil que no da vergüenza (B2).</li><li>Conecté mi repo local con <code>git remote add origin</code> (B4) y subí mi trabajo con <code>git push</code> (B5).</li><li>Distingo <code>push</code>, <code>pull</code> y <code>clone</code> (B5-B7) y sé cuándo usar una rama (Materia A).</li><li>Abro y reviso un pull request con code review antes de mergear (B13-B15).</li><li>Protegí mi rama main para que todo entre por PR aprobada (B22).</li><li>Leo estrellas, forks y watchers antes de adoptar una librería (B25-B26).</li><li>Mi repositorio tiene licencia (B27) y NUNCA subo secretos ni tokens (B28).</li><li>Mi portafolio le vende a un cliente en 10 segundos (B29).</li></ul><p>Si algún punto se te atora, vuelve a esa lección antes de la práctica. La Materia C es puro ejercicio: llegar con la teoría clara es la mitad del camino.</p>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Para que un cambio tuyo llegue a GitHub, el orden correcto es:", opciones: ["git push → git commit → git add", "git add → git commit → git push", "git commit → git push → git add", "git add → git push → git commit"], correcta: 1 },
              { tipo: "relacionar", pares: [["git push", "Subir commits al remoto (B5)"], ["git pull", "Bajar commits del remoto (B6)"], ["git clone", "Copiar un repo remoto a tu computadora (B7)"], ["git branch", "Crear o manejar ramas (Materia A)"]] },
              { tipo: "vf", afirmacion: "En un repositorio privado, el código solo lo ven el dueño y quienes él invite.", correcta: true, explicacion: "privado (B8) = acceso restringido; lo público es visible para todo el mundo." },
              { tipo: "completar", frase: "Con la rama main protegida (B22), todo cambio entra por una ____ aprobada y los ____ de GitHub Actions (B19) deben pasar antes del merge.", banco: ["pull request", "checks", "rama", "token"], respuestas: ["pull request", "checks"] },
              { tipo: "ordenar", instruccion: "Acomoda el flujo completo de una mejora en un repo protegido:", elementos: ["crear una rama nueva", "hacer los cambios y commitear", "abrir un pull request", "pasar los checks y recibir aprobación", "hacer merge a main"] },
              { tipo: "quehace", codigo: "git clone https://github.com/rayflores/mi-tienda.git", pregunta: "Corres este comando. ¿Qué pasó?", opciones: ["Subiste tu proyecto a GitHub", "Copiaste el repositorio de rayflores a tu computadora para trabajar con él", "Creaste una rama nueva", "Borraste el repositorio local"], correcta: 1 },
              { tipo: "multiple", pregunta: "Descubres que acabas de hacer push de un token. ¿Cuál es TU primera acción?", opciones: ["Borrar el commit con un commit nuevo", "Revocar el token de inmediato y girar la clave", "Cerrar sesión en GitHub", "Cambiar tu contraseña de correo"], correcta: 1 },
              { tipo: "vf", afirmacion: "Un repositorio público sin archivo de licencia se puede usar libremente porque está público.", correcta: false, explicacion: "sin licencia, la ley presume todos los derechos reservados: nadie puede usarlo legalmente (B27)." }
            ]
          }
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
          {
            id: "m2-c6",
            titulo: "PRÁCTICA: crear tu cuenta de GitHub y tu perfil",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En la lección B2 entendiste por qué GitHub es tu <strong>carta de presentación</strong> — la vitrina donde tus repositorios van a vivir (y en unos días, tu página de Tortas El Güero). Hoy lo haces en serio: <strong>creas tu cuenta y dejas tu perfil listo</strong>.</p><p><strong>Paso 1 — Crea la cuenta.</strong> Entra a <code>github.com</code> y presiona <strong>Sign up</strong>. Te piden tres cosas:</p><ul><li><strong>Correo:</strong> uno real, el mismo que uses de aquí en adelante. Ahí llegan las verificaciones y las alertas de seguridad.</li><li><strong>Contraseña:</strong> fuerte, y guardada en tu gestor de contraseñas (recuerda B28: un secreto que se filtra se paga caro).</li><li><strong>Username:</strong> tu identidad profesional. Aparecerá en TODAS tus URLs: <code>https://github.com/tuusuario</code>. Sin espacios ni mayúsculas raras, fácil de leer y de decir: <code>rayflores</code>, <code>luis_dev</code>, <code>tortas-el-guero</code>. Puedes cambiarlo después, pero cada cambio rompe los enlaces viejos — elige con cabeza desde hoy.</li></ul><p><strong>Paso 2 — Verifica tu correo.</strong> GitHub te manda un enlace de confirmación. <strong>No sigas sin verificar:</strong> con el correo pendiente no podrás crear tu repositorio en C7.</p><p><strong>Paso 3 — Elige el plan Free.</strong> En la pantalla de planes, <strong>Continue for free</strong> es la respuesta correcta. Todo este programa cabe en la cuenta gratis.</p><p><strong>Paso 4 — Completa tu perfil.</strong> Botón de tu avatar → <strong>Settings</strong> → <strong>Profile</strong>: nombre completo, una foto (tu cara o tu logo, no un dibujito random) y una bio de una línea, por ejemplo \"Construyo sitios web con IA\". El avatar y la bio son lo primero que mira un cliente (B29) — y en esta semana tu perfil empieza a hablar por ti.</p><p><strong>Paso 5 — Haz coincidir tus correos.</strong> Revisa con qué correo configuraste Git en C2:</p><pre><code>git config --global user.email</code></pre><p>Ese correo DEBE ser el mismo de tu cuenta de GitHub. Si no coinciden, tus commits quedan <strong>sin dueño</strong> (\"Autor desconocido\") y el historial que construiste en C3-C4 deja de hablar por ti.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu cuenta de GitHub es <strong>el local donde va a vivir tu taller</strong>; tu perfil es la fachada que le pones. Puedes tener el mejor trabajo del mundo adentro, pero si la fachada está vacía o mal pintada, nadie entra a verlo. Hoy pones el letrero, la foto y el horario — mañana metes el producto (C7 y C8).</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La sesión completa, de cero:</p><pre><code>1. github.com  →  [Sign up]\n\n2. Email:        rayfg96@gmail.com\n   Password:     ******** (guardada en tu gestor)\n   Username:     rayflores\n\n3. Revisa tu correo → confirma con [Verify email address]\n\n4. Plan → [Continue for free]     ← el correcto\n\n5. Avatar → Settings → Profile:\n   Name:  Raymundo Flores\n   Bio:   Construyo sitios web con IA\n\n6. Verificación final:\n   C:\\...\\&gt; git config --global user.email\n   rayfg96@gmail.com    ← debe ser el MISMO correo de GitHub\n\nTu dirección pública:\n   https://github.com/rayflores</code></pre><p>Ese enlace ya existe y ya es tuyo. En C7 lo vas a llenar con tu primer repositorio.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Acabo de crear mi cuenta de GitHub. Antes de subir mi primer proyecto, revisa mi perfil como lo vería un cliente: 1) ¿mi username se lee bien y es fácil de decir? 2) ¿mi bio comunica qué hago? 3) dame 3 opciones de bio de una línea para alguien que construye sitios web con IA. Mi username es [tu username].\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál de estas es una buena práctica al elegir tu username?", opciones: ["Tu nombre completo con espacios", "Algo corto, sin espacios y fácil de decir: rayflores o luis_dev", "Letras y números al azar para que nadie lo adivine", "Mayúsculas en cada palabra para que resalte"], correcta: 1 },
              { tipo: "completar", frase: "El username aparece en todas tus ____: https://github.com/____. Elegirlo bien importa porque cambiarlo después ____ los enlaces viejos.", banco: ["URLs", "tuusuario", "rompe", "mejora"], respuestas: ["URLs", "tuusuario", "rompe"] },
              { tipo: "vf", afirmacion: "Con el correo sin verificar ya puedes subir tu proyecto a GitHub.", correcta: false, explicacion: "la verificación es obligatoria: sin ella no puedes crear repositorios ni hacer push en C7." },
              { tipo: "relacionar", pares: [["Sign up", "Crear tu cuenta nueva"], ["Verify email address", "Confirmar tu correo con el enlace que te llega"], ["Continue for free", "Elegir el plan correcto"], ["Settings → Profile", "Poner tu nombre, tu foto y tu bio"]] },
              { tipo: "quehace", codigo: "git config --global user.email", pregunta: "Corres este comando y te devuelve rayfg96@gmail.com. ¿Para qué lo verificas en esta lección?", opciones: ["Para confirmar que el correo de tus commits coincida con el de tu cuenta de GitHub", "Para cambiar tu contraseña de GitHub", "Para saber qué versión de Git tienes", "Para comprobar tu conexión a internet"], correcta: 0 }
            ]
          },
          {
            id: "m2-c7",
            titulo: "PRÁCTICA: subir tu proyecto a GitHub",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu página de Tortas El Güero ya es un repositorio local con commits (C3-C4). Hoy le das casa en internet: creas el repositorio en GitHub, conectas tu carpeta local (B4) y subes tus commits (B5). El resultado: tu proyecto deja de vivir solo en tu computadora.</p><p><strong>Paso 1 — Crea el repo VACÍO en GitHub.</strong> En tu perfil, el botón verde <strong>New</strong> (o <code>Create repository</code>). Nómbralo exactamente igual que tu carpeta: <code>mi-primera-pagina</code>.</p><ul><li><strong>Public</strong> — este proyecto es tu vitrina; público es lo que quieres.</li><li><strong>NO marques \"Add a README\".</strong> Si lo marcas, GitHub crea un commit inicial en el remoto que tu historial local no tiene, y al hacer push las dos historias chocan (lo viste en B3). Tu repo local ya tiene todo.</li><li>Tampoco marques <code>.gitignore</code> ni <code>license</code>: tú ya tienes tu <code>.gitignore</code> desde C3.</li></ul><p><strong>Paso 2 — Copia la URL del repo.</strong> GitHub te la da al terminar: <code>https://github.com/tuusuario/mi-primera-pagina.git</code>. Cópiala, no la escribas a mano — un typo en la URL es la causa #1 de \"repository not found\" (B4).</p><p><strong>Paso 3 — Conecta tu repo local con el remoto.</strong> En la terminal, dentro de tu carpeta:</p><pre><code>git remote add origin https://github.com/tuusuario/mi-primera-pagina.git\ngit remote -v</code></pre><p>Si aparece <code>origin</code> con tu URL dos veces, quedó conectado.</p><p><strong>Paso 4 — Asegura que tu rama se llame main.</strong> Es lo que GitHub espera:</p><pre><code>git branch -M main</code></pre><p><strong>Paso 5 — Sube todo por primera vez.</strong></p><pre><code>git push -u origin main</code></pre><p>La primera vez GitHub te pide identificarte. Ya NO es tu contraseña: es un <strong>Personal Access Token</strong> (B5, B28). Si no tienes uno, genera un token en Settings → Developer settings → Personal access tokens, y úsalo como contraseña.</p><p><strong>Paso 6 — Refresca tu página de GitHub.</strong> Verás <code>index.html</code>, tu <code>.gitignore</code> y —en la pestaña <strong>Commits</strong>— todo el historial de C4. Tu proyecto viajó completo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es el día de la <strong>mudanza al local</strong>. Tu página vivía en una bodega (tu computadora), con todo acomodado por commits (C4). Hoy la cargas completa —archivos e historial— y la dejas instalada en su dirección pública. Todavía nadie puede entrar, pero ya tiene dirección y llave. En C8 abres las puertas al público.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La sesión completa de subida:</p><pre><code>1. GitHub → [New] → Repository name: mi-primera-pagina\n   ● Public   ○ Private\n   ☐ Add a README          ← NO marcar\n   ☐ .gitignore            ← NO marcar (ya tienes uno)\n   ☐ license               ← NO marcar\n   [Create repository]\n\n2. Copias la URL:  https://github.com/rayflores/mi-primera-pagina.git\n\n3. C:\\...\\mi-primera-pagina&gt; git remote add origin https://github.com/rayflores/mi-primera-pagina.git\n   C:\\...\\mi-primera-pagina&gt; git remote -v\n   origin  https://github.com/rayflores/mi-primera-pagina.git (fetch)\n   origin  https://github.com/rayflores/mi-primera-pagina.git (push)\n\n4. C:\\...\\mi-primera-pagina&gt; git branch -M main\n\n5. C:\\...\\mi-primera-pagina&gt; git push -u origin main\n   [pegas tu Personal Access Token cuando lo pida]\n   Enumerating objects: 5, done.\n   To https://github.com/rayflores/mi-primera-pagina.git\n    * [new branch]      main -&gt; main\n   branch 'main' set up to track 'origin/main'.\n\n6. Refrescas GitHub → tus archivos y tus commits están ahí.</code></pre><p>Ese <code>set up to track</code> es la magia de <code>-u</code>: de ahora en adelante, <code>git push</code> a secas sube tus cambios.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Acabo de subir mi proyecto a GitHub por primera vez. Te pego la salida de mi push: [pégalas aquí]. 1) Confírmame que quedó bien. 2) Si algo falló (repository not found, authentication failed, rejected), dime exactamente qué significa y qué comando correr. Mi repo se llama mi-primera-pagina.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Pasos para subir tu proyecto a GitHub:", elementos: ["crear el repo vacío en GitHub (sin README)", "copiar la URL del repo", "git remote add origin URL", "git branch -M main", "git push -u origin main"] },
              { tipo: "multiple", pregunta: "¿Por qué NO debes marcar \"Add a README\" al crear el repo si tu carpeta local ya tiene commits?", opciones: ["GitHub no permite README en repos públicos", "Crea un commit inicial en el remoto que tu historial local no tiene, y chocará al hacer push", "El README vuelve el repo privado", "Es indiferente: no pasa nada"], correcta: 1 },
              { tipo: "completar", frase: "git remote add origin ____ registra en tu repo local la dirección de su copia ____. Para verificar la conexión usas git remote ____.", banco: ["URL", "remota", "-v", "main"], respuestas: ["URL", "remota", "-v"] },
              { tipo: "quehace", codigo: "git push -u origin main", pregunta: "Corres este comando por primera vez. ¿Qué logra la bandera -u?", opciones: ["Sube solo el commit más reciente", "Sube tus commits Y recuerda la conexión para que después baste con git push", "Borra el remoto y lo crea de nuevo", "Renombra tu rama a origin"], correcta: 1 },
              { tipo: "vf", afirmacion: "Después del push exitoso, en github.com/tuusuario/mi-primera-pagina verás tus archivos y todo tu historial de commits de C4.", correcta: true, explicacion: "push sube los commits completos: archivos e historial viajan juntos." }
            ]
          },
          {
            id: "m2-c8",
            titulo: "PRÁCTICA: publicar tu página con GitHub Pages",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu página ya vive en GitHub (C7). Hoy deja de ser código y se vuelve página pública: la habilitas con <strong>GitHub Pages</strong> (la teoría fue B20). En el Mes 1 la publicaste con Netlify Drop (C16); ahora haces lo mismo con la versión profesional: el sitio sale directo del repositorio y se actualiza solo con cada push.</p><p><strong>Paso 1 — Revisa la raíz.</strong> GitHub Pages sirve los archivos de tu repo, y el principal debe llamarse <code>index.html</code> y estar en la raíz (C3 te lo dejó así). Si lo tienes, vas bien.</p><p><strong>Paso 2 — Enciende Pages.</strong> En tu repo: <strong>Settings</strong> → <strong>Pages</strong> → <strong>Build and deployment</strong> → Source: <strong>Deploy from a branch</strong> → Branch: <code>main</code> → Folder: <code>/ (root)</code> → <strong>Save</strong>.</p><p><strong>Paso 3 — Espera el primer deploy.</strong> GitHub procesa tu página: el primero tarda alrededor de un minuto (B20). Verás el mensaje <code>Your site is published at</code> con tu URL.</p><p><strong>Paso 4 — Abre tu URL.</strong> El formato es <code>https://tuusuario.github.io/mi-primera-pagina/</code>. Ahí está Tortas El Güero, en línea, sin pagar hosting.</p><p><strong>Si algo sale mal:</strong></p><ul><li><strong>Página en blanco:</strong> revisa que el archivo se llame <code>index.html</code> y esté en la raíz, no en una subcarpeta.</li><li><strong>Error 404:</strong> la URL debe ser exacta: minúsculas, sin espacios, con el nombre del repo.</li><li><strong>No se actualiza un cambio:</strong> cada push regenera el sitio; espera un minuto y refresca.</li></ul><p>Y un detalle que le encantará a tu cliente imaginario: el botón de WhatsApp del Mes 1 ahora funciona en internet — cualquiera que abra tu página puede escribirte.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>En C7 tu página se mudó al local; hoy <strong>abres las puertas al público</strong>. Tu computadora deja de ser el único lugar donde se ve tu trabajo: cualquiera con el enlace —la familia, un cliente, una vacante— entra a verla sin pedirte permiso. GitHub Pages es el portero que abre y cierra todos los días, sin cobrar renta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El camino exacto en tu repo:</p><pre><code>github.com/tuusuario/mi-primera-pagina\n  → Settings\n  → Pages\n  → Build and deployment\n  → Source: Deploy from a branch\n  → Branch: main\n  → Folder: / (root)\n  → [Save]\n\nMensaje de éxito (≈1 minuto después):\n  \"Your site is published at\n   https://tuusuario.github.io/mi-primera-pagina/\"\n\nÁbrelo y verifica:\n  Tortas El Güero — página completa con menú,\n  productos y el botón de WhatsApp funcionando\n  desde internet.</code></pre><p>Desde ahora, tu ciclo de publicación es: editas → commiteas → <code>git push</code> (C7) → GitHub actualiza la página.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Acabo de habilitar GitHub Pages en mi repo [nombre]. Dame los pasos para verificar que quedó publicada y qué revisar en orden si sale en blanco, con 404 o sin los últimos cambios. Este es el mensaje que me dio GitHub: [pégalo aquí].\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué requisito debe cumplir tu repo para que GitHub Pages funcione sin líos?", opciones: ["Tener un archivo llamado index.html en la raíz del repo", "Tener una base de datos conectada", "Tener más de 10 commits", "Estar en una rama llamada develop"], correcta: 0 },
              { tipo: "completar", frase: "En Settings → Pages eliges \"Deploy from a ____\", la rama ____ y la carpeta ____.", banco: ["branch", "main", "/ (root)", "styles"], respuestas: ["branch", "main", "/ (root)"] },
              { tipo: "ordenar", instruccion: "Pasos para publicar tu página:", elementos: ["confirmar que index.html esté en la raíz del repo", "ir a Settings → Pages", "elegir \"Deploy from a branch\", rama main y carpeta / (root)", "guardar y esperar el primer deploy (~1 min)", "abrir https://tuusuario.github.io/mi-primera-pagina/"] },
              { tipo: "vf", afirmacion: "Cada vez que haces push de un cambio a main, GitHub Pages regenera tu sitio solo.", correcta: true, explicacion: "el deploy se dispara con cada push: editas, commiteas, haces push (C7) y el sitio se actualiza." },
              { tipo: "quehace", codigo: "Your site is published at https://rayflores.github.io/mi-primera-pagina/", pregunta: "GitHub muestra este mensaje tras el primer deploy. ¿Qué significa?", opciones: ["Tu repo se sincronizó con Netlify", "Tu página quedó publicada y cualquiera puede abrirla en esa URL", "Tu sitio solo se ve en tu computadora", "Tienes que copiar la URL manualmente a tu navegador cada vez"], correcta: 1 }
            ]
          },
          {
            id: "m2-c9",
            titulo: "El flujo diario: pedir → probar → commitear",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya tienes todas las piezas: pedir cambios a la IA (Mes 1), versionar (C1-C5) y publicar (C7-C8). Hoy se juntan en <strong>la rutina con la que vas a trabajar el resto del programa — y el resto de tu carrera</strong>. Tres pasos, en orden, siempre:</p><p><strong>1. Pedir.</strong> Le pides el cambio a la IA con un prompt claro: qué quieres, dónde, y cómo verificarlo. Mientras más preciso el pedido, menos vueltas.</p><p><strong>2. Probar.</strong> Abres la página en el navegador y compruebas con tus propios ojos que quedó como pediste. Aquí vives como director: la IA dice que quedó; tú lo confirmas. <strong>No firmas lo que no probaste.</strong></p><p><strong>3. Commitear.</strong> Si el resultado está bien, lo conviertes en punto seguro (C1):</p><pre><code>git status        ← qué archivos cambiaron\ngit diff          ← auditas línea por línea (C1)\ngit add .\ngit commit -m \"feat: ...\"   ← mensaje bueno (C5)</code></pre><p>¿Y si el resultado está mal? <strong>No commitees.</strong> Vuelves a pedir con más contexto, o si la IA lo arruinó feo, reviertes con <code>git restore</code> (C1) y vuelves a pedir. El commit es para lo bueno; el punto seguro protege lo que ya funciona.</p><p>El orden es sagrado: <strong>probar antes de commitear</strong>. Commitear algo que no probaste es firmar un cheque en blanco — y el historial (tu diario, C1) queda mintiendo.</p><p>Ejemplo real sobre Tortas El Güero: pides \"agrega una sección de testimonios\", pruebas en el navegador, y si quedó, commiteas <code>feat: agregar sección de testimonios</code>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El flujo es <strong>el chef que prueba antes de servir</strong>. El cocinero nunca manda un platillo del que no conoce el sabor: lo prueba, ajusta la sal, y solo entonces lo pasa al mesero. Tú eres ese chef; la IA es tu cocinero auxiliar. Ella prepara (pedir), tú pruebas (probar), y solo cuando el sabor está bien lo escribes en la receta oficial (commitear). Lo que no se probó, no entra a la receta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un ciclo completo, de principio a fin:</p><pre><code>1. PEDIR\n   \"Agrega una sección de testimonios a mi página de\n    Tortas El Güero, con 2 reseñas inventadas. Mantén\n    los colores amarillo y café.\"\n\n2. PROBAR\n   Abres index.html en el navegador:\n   ✔ la sección aparece donde la pediste\n   ✔ el botón de WhatsApp sigue funcionando\n   ✔ se ve bien en celular\n\n3. COMMITEAR\n   C:\\...\\mi-primera-pagina&gt; git status\n       modified:   index.html\n   C:\\...\\mi-primera-pagina&gt; git diff     ← auditas (C1)\n   C:\\...\\mi-primera-pagina&gt; git add .\n   C:\\...\\mi-primera-pagina&gt; git commit -m \"feat: agregar sección de testimonios\"\n   C:\\...\\mi-primera-pagina&gt; git log --oneline\n   b7f2a1 (HEAD -&gt; main) feat: agregar sección de testimonios\n   a3f9c1 Versión inicial de mi página personal</code></pre><p>Pedir → probar → commitear. Ese ciclo, repetido varias veces al día, es el corazón de este programa.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a hacerte un pedido para mi página. Cuando me des el código, NO me des el mensaje de commit todavía: primero lo pruebo en el navegador. Si quedó bien, te pego el git diff y me escribes el mensaje con Conventional Commits. Si no quedó, te digo qué falló y me lo corriges.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "El flujo diario con la IA:", elementos: ["pedir el cambio a la IA", "probar el resultado en el navegador", "auditar con git status y git diff", "git add y git commit con buen mensaje"] },
              { tipo: "multiple", pregunta: "El cambio que hizo la IA rompió la página. ¿Qué haces?", opciones: ["Commiteas igual para no perder el trabajo", "No commiteas: vuelves a pedirle, o reviertes con git restore si lo arruinó feo", "Borrras todo el repositorio y empiezas de nuevo", "Le pides el mensaje de commit a la IA"], correcta: 1 },
              { tipo: "completar", frase: "El orden es sagrado: ____ antes de commitear. Commitear algo que no probaste es ____ un cheque en blanco.", banco: ["probar", "firmar", "pedir", "dibujar"], respuestas: ["probar", "firmar"] },
              { tipo: "vf", afirmacion: "git status y git diff son parte del paso de auditar antes de commitear.", correcta: true, explicacion: "status te dice qué archivos cambiaron y diff te deja auditar línea por línea lo que la IA hizo (C1)." },
              { tipo: "quehace", codigo: "feat: agregar sección de testimonios", pregunta: "Después de probar el cambio en el navegador, usas este mensaje en git commit. ¿Qué demuestra?", opciones: ["Que hiciste push directo a GitHub", "Que seguiste la convención de C5 y el cambio quedó probado antes de commitear", "Que no probaste nada antes de commitear", "Que cambiaste de rama"], correcta: 1 }
            ]
          },
          {
            id: "m2-c10",
            titulo: "PRÁCTICA: trabajar en una rama nueva con IA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Viste la teoría de las ramas en A17-A18: aíslan tu trabajo para que lo estable nunca se rompa. Hoy lo llevas a la práctica con IA sobre tu proyecto real: <strong>le pides un cambio grande sin tocar main</strong>, la versión segura (C1). Si el experimento funciona, lo integras con merge (A19); si no, descartas la rama y main ni se entera.</p><p><strong>Paso 1 — Crea tu rama.</strong> El nombre describe la tarea, no a ti (A17): <code>agregar-menu</code>, <code>cambiar-colores</code>, nunca <code>cambios-finales-v2</code>.</p><pre><code>git switch -c agregar-menu-semanal</code></pre><p><strong>Paso 2 — Confirma que estás en la rama.</strong> El error de principiante de A18: commitear en main creyendo estar en la rama. Una sola lectura:</p><pre><code>git status     ← la primera línea dice: On branch agregar-menu-semanal</code></pre><p><strong>Paso 3 — Pide el cambio a la IA</strong> (el paso 1 de C9).</p><p><strong>Paso 4 — Prueba en el navegador</strong> (el paso 2 de C9).</p><p><strong>Paso 5 — Commitea EN LA RAMA.</strong> El mismo ciclo de siempre (C4):</p><pre><code>git add .\ngit commit -m \"feat: agregar menú semanal\"</code></pre><p>Ese commit cae en <code>agregar-menu-semanal</code>, no en <code>main</code>.</p><p><strong>Paso 6 — Verifica el aislamiento.</strong></p><pre><code>git switch main          ← la página vuelve a estar como antes\ngit switch agregar-menu-semanal   ← ahí está tu experimento</code></pre><p>Dos historiales separados (A18). Cuando decidas que el experimento está listo, lo llevas a main con merge (A19). Y si no te convence, borras la rama y sigues como si nada.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es la <strong>cocina de pruebas del local de Tortas</strong>: la carta (main) nunca cambia de golpe. Los platillos nuevos se preparan aparte, se prueban, y solo si salen bien entran a la carta (merge). Si el platillo falla, se descarta y la carta sigue igual — los clientes (tu página en producción, C8) nunca se enteraron del intento.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La sesión completa:</p><pre><code>C:\\...\\mi-primera-pagina&gt; git switch -c agregar-menu-semanal\nSwitched to a new branch 'agregar-menu-semanal'\n\nC:\\...\\mi-primera-pagina&gt; git status\nOn branch agregar-menu-semanal      ← confirmado\n\n→ Pides a la IA: \"Agrega una sección de menú semanal a\n  mi página de Tortas El Güero, con un platillo distinto\n  para cada día de la semana.\"\n\n→ Pruebas en el navegador: quedó bien ✔\n\nC:\\...\\mi-primera-pagina&gt; git add .\nC:\\...\\mi-primera-pagina&gt; git commit -m \"feat: agregar menú semanal\"\n[agregar-menu-semanal c8d3e2] feat: agregar menú semanal\n\nC:\\...\\mi-primera-pagina&gt; git switch main\nSwitched to branch 'main'\n\nC:\\...\\mi-primera-pagina&gt; git log --oneline\na3f9c1 Versión inicial de mi página personal   ← main no cambió\n\nC:\\...\\mi-primera-pagina&gt; git switch agregar-menu-semanal\nC:\\...\\mi-primera-pagina&gt; git log --oneline\nc8d3e2 feat: agregar menú semanal             ← aquí vive el experimento\n a3f9c1 Versión inicial de mi página personal</code></pre><p>El experimento quedó aislado. Ahora decides: merge a main (A19) o descartarlo. Con la rama, el miedo que te quitó Git en C1 nunca vuelve.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a pedirte un cambio grande a mi página y lo voy a probar en una rama para no tocar main. Pásame el código del cambio. Cuando yo lo pruebe, te pego el git diff de mi rama y me escribes el mensaje de commit con Conventional Commits. Si decido descartarlo, solo te aviso.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Antes de pedirle un cambio grande a la IA creas la rama con git switch -c agregar-menu. ¿Por qué conviene?", opciones: ["Porque sin rama la IA no puede trabajar", "Para que el experimento no toque main: si falla, descartas la rama y la versión estable sigue intacta", "Porque las ramas hacen el sitio más rápido", "Para hacer push sin necesitar token"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Flujo de trabajo en una rama nueva:", elementos: ["git switch -c nombre-de-la-rama", "confirmar con git status que estás en la rama", "pedir el cambio a la IA y probarlo en el navegador", "git add y git commit en tu rama", "git switch main para verificar que main no cambió"] },
              { tipo: "vf", afirmacion: "Si haces commit estando en tu rama nueva, ese commit también aparece en main.", correcta: false, explicacion: "los commits de una rama viven solo en ella; main no se entera hasta el merge (A18-A19)." },
              { tipo: "completar", frase: "El nombre de una rama describe la ____, no a ti: ____ sí, cambios-finales-v2 no. Antes de commitear confirmas en qué rama estás con ____.", banco: ["tarea", "agregar-menu", "git status", "git push"], respuestas: ["tarea", "agregar-menu", "git status"] },
              { tipo: "relacionar", pares: [["git switch -c agregar-menu", "Crea la rama y te mueves a ella"], ["git status", "Confirmas en qué rama estás antes de commitear"], ["git switch main", "Volver a la versión estable"], ["git commit en tu rama", "Guardar el experimento sin tocar main"]] }
            ]
          },
          {
            id: "m2-c11",
            titulo: "Cuando la IA rompe algo: volver atrás con Git",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>La IA va a romper algo en algún momento. No es mala suerte: es parte del trabajo. La diferencia entre un principiante y un constructor es qué pasa en los segundos siguientes.</p><p>Tu red de seguridad ya está puesta (C1): el punto seguro es tu último commit (C4). Lo que aprendes hoy es <strong>el botón de deshacer</strong> de Git — y cuál usar en cada situación. Tres escenarios, tres comandos:</p><p><strong>Escenario 1 — La IA rompió archivos y NO has commiteado.</strong> El caso más común (C9: pruebas antes de commitear):</p><pre><code>git restore .</code></pre><p>Vuelve todos los archivos a como estaban en el último commit. Los cambios malos desaparecen y, como nunca se commitearon, no dejan rastro. Para un solo archivo: <code>git restore index.html</code>.</p><p><strong>Escenario 2 — Commiteaste algo malo pero NO lo has subido.</strong> Solo tú y tu computadora saben del error; GitHub todavía no. Puedes regresar a un commit anterior:</p><pre><code>git reset --hard a3f9c1d</code></pre><p>Regresa al commit <code>a3f9c1d</code> y descarta los posteriores. Es seguro únicamente porque nada de eso está publicado.</p><p><strong>Escenario 3 — El error ya está en GitHub.</strong> Lo subiste con <code>git push</code> (C7), y borrarlo con reset reescribiría un historial que otros comparten. En vez de borrarlo, lo <em>deshaces</em>:</p><pre><code>git revert b7f2a1</code></pre><p>Crea un commit nuevo que revierte ese cambio, dejando el historial completo y contando la historia honesta: aquí se arregló.</p><p><strong>El bonus: git stash.</strong> Para guardar el trabajo a medias sin perderlo ni borrarlo:</p><pre><code>git stash\ngit stash list\ngit stash pop</code></pre><p>Regla mental: <strong>commit = fotografía, restore = borrar borrador, stash = cajón de guardado, revert = deshacer sin reescribir</strong>.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es un <strong>videojuego con checkpoints</strong>. Cuando el jefe final te derrota (la IA rompió todo), no vuelves a empezar desde cero: reapareces en el último checkpoint (tu commit) y lo vuelves a intentar. Saber que existe el checkpoint es lo que te deja intentar la pelea difícil sin miedo. Git es tu checkpoint infinito: en vez de empezar de nuevo, rebobinas unos segundos y sigues.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La sesión completa del escenario más común — la IA rompió el archivo y no has commiteado:</p><pre><code>C:\\...\\mi-primera-pagina&gt; git status\nOn branch main\nChanges not staged for commit:\n  (use \"git restore &lt;file&gt;...\" to discard changes)\n        modified:   index.html\n\n→ \"IA, cambia la paleta a tonos azules\"\n→ Abres la página: el contraste quedó fatal\n\nC:\\...\\mi-primera-pagina&gt; git restore .\n\nC:\\...\\mi-primera-pagina&gt; git status\nOn branch main\nnothing to commit, working tree clean\n\n→ Como si nada hubiera pasado. Pides la siguiente idea.</code></pre><p>Y si ya había subido el cambio por error:</p><pre><code>C:\\...\\mi-primera-pagina&gt; git revert b7f2a1\n[main 91c4e2] Revert \"feat: agregar paleta azul\"\n\nC:\\...\\mi-primera-pagina&gt; git push   ← el historial sigue limpio y completo</code></pre><p>Ese ciclo — rompió, revierte, sigue — es el que convierte a la IA en una herramienta segura en vez de un riesgo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"La IA me hizo un cambio que no me gustó y no lo he commiteado. Confírmame cuál comando corresponde: git restore, git reset --hard o git revert. Si el cambio ya lo subí a GitHub, cuál debo usar y por qué no debo borrar el historial.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "La IA rompió tu index.html y todavía NO has commiteado el cambio. ¿Qué comando deshace el desastre?", opciones: ["git revert b7f2a1", "git restore .", "git push --force", "git stash pop"], correcta: 1 },
              { tipo: "completar", frase: "Si el cambio malo ya lo subiste a GitHub, usas ____: crea un commit nuevo que lo deshace. Si es local y no está subido, puedes usar ____ para volver a un commit anterior descartando los posteriores.", banco: ["git revert", "git reset --hard", "git push", "git stash"], respuestas: ["git revert", "git reset --hard"] },
              { tipo: "relacionar", pares: [["git restore .", "Descartar cambios NO commiteados y volver al último commit"], ["git stash", "Guardar el trabajo a medias aparte y recuperarlo después"], ["git revert", "Deshacer un cambio ya subido a GitHub creando un commit inverso"], ["git reset --hard", "Volver a un commit local descartando los posteriores (solo si no está subido)"]] },
              { tipo: "vf", afirmacion: "Después de git restore ., los cambios que descartaste siguen recuperables desde el historial de Git.", correcta: false, explicacion: "si nunca se commitearon no existen en el historial: restore los borra de la rama de trabajo; el commit es la única fotografía que Git conserva." },
              { tipo: "quehace", codigo: "git revert b7f2a1\n[main 91c4e2] Revert \"feat: agregar paleta azul\"", pregunta: "Corres este comando y Git responde [main 91c4e2] Revert \"feat: agregar paleta azul\". ¿Qué pasó?", opciones: ["Se borró el commit b7f2a1 del historial", "Se creó un commit nuevo que deshace los cambios de b7f2a1, dejando el historial completo", "Tu rama se renombró a main", "Se subieron tus cambios sin hacer push"], correcta: 1 }
            ]
          },
          {
            id: "m2-c12",
            titulo: "PRÁCTICA: tu primer Pull Request (a tu propio repo)",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu página de Tortas El Güero ya vive en GitHub (C7-C8). Hoy haces el ensayo completo de un flujo profesional: <strong>cambias algo en una rama y lo llevas a main con un Pull Request</strong> (la teoría fue B13-B14). Es tu primer PR, y es a tu propio repo — el mejor lugar para practicar: no hay jefe que te apure.</p><p><strong>Paso 1 — Crea una rama para un cambio concreto.</strong> El nombre describe la tarea (C10):</p><pre><code>git switch -c agregar-seccion-contacto</code></pre><p><strong>Paso 2 — Pide el cambio a la IA</strong> (el paso 1 de C9): \"Agrega una sección de contacto a mi página de Tortas El Güero, con teléfono, dirección y horario.\"</p><p><strong>Paso 3 — Prueba en el navegador</strong> (el paso 2 de C9). Si no quedó bien, vuelve a pedir hasta que quede.</p><p><strong>Paso 4 — Commitea EN LA RAMA</strong> (C10), con buen mensaje (C5):</p><pre><code>git add .\ngit commit -m \"feat: agregar sección de contacto\"</code></pre><p><strong>Paso 5 — Sube la rama al remoto.</strong> Es lo que hace visible tu rama en GitHub:</p><pre><code>git push -u origin agregar-seccion-contacto</code></pre><p><strong>Paso 6 — Abre la PR.</strong> GitHub te muestra el botón <strong>Compare &amp; pull request</strong>. Verifica: base <code>main</code>, compare tu rama. Escribe un título claro y una descripción de qué hace y cómo probarlo (B14).</p><p><strong>Paso 7 — Mergea con squash.</strong> Es tu repo y tu main todavía no está protegido (eso llega en C22), así que el botón de merge está disponible. Presiona <strong>Merge pull request</strong> → <strong>Squash and merge</strong> (B16): tu rama se integra como un solo commit limpio.</p><p><strong>Paso 8 — Limpia.</strong> GitHub te ofrece borrar la rama remota: acepta. En la terminal vuelve a main, baja los cambios y borra la rama local:</p><pre><code>git switch main\ngit pull\ngit branch -d agregar-seccion-contacto</code></pre><p>Verifica el resultado en GitHub Pages (C8): la página publicada ya tiene tu sección de contacto.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es el <strong>ensayo general antes del estreno</strong>. El escenario es el mismo (tu proyecto), el público todavía no llega (es tu propio repo) y el guion completo se prueba una vez: rama, PR, revisión, merge. Cuando un cliente o un equipo real entre en escena, el flujo ya no te va a sorprender: lo hiciste contigo mismo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La sesión completa de tu primer PR:</p><pre><code>C:\\...\\mi-primera-pagina&gt; git switch -c agregar-seccion-contacto\nSwitched to a new branch 'agregar-seccion-contacto'\n\n→ Pides a la IA y pruebas en el navegador ✔\n\nC:\\...\\mi-primera-pagina&gt; git add .\nC:\\...\\mi-primera-pagina&gt; git commit -m \"feat: agregar sección de contacto\"\n[agregar-seccion-contacto 8e2f4a] feat: agregar sección de contacto\n\nC:\\...\\mi-primera-pagina&gt; git push -u origin agregar-seccion-contacto\n * [new branch]  agregar-seccion-contacto -&gt; agregar-seccion-contacto\n\n→ GitHub: [Compare &amp; pull request]\n  Título: \"Agrega sección de contacto\"\n  Descripción: \"Muestra teléfono, dirección y horario.\n   Se prueba abriendo la página en el navegador.\"\n  [Create pull request] → [Merge pull request] → [Squash and merge]\n\n→ GitHub: [Delete branch]   ← borra la rama remota\n\nC:\\...\\mi-primera-pagina&gt; git switch main\nC:\\...\\mi-primera-pagina&gt; git pull\nC:\\...\\mi-primera-pagina&gt; git branch -d agregar-seccion-contacto\nDeleted branch agregar-seccion-contacto</code></pre><p>Refresca tu página en GitHub Pages: la sección de contacto quedó integrada por una PR que aprobaste tú.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Ya subí mi rama [agregar-seccion-contacto] y quiero abrir mi primer Pull Request a mi propio repo. Dame el paso a paso: qué revisar al elegir base y compare, cómo escribir un título y una descripción que sirvan, y la estrategia de merge que me conviene para que main quede con un solo commit limpio.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda el flujo de tu primer Pull Request:", elementos: ["crear la rama con git switch -c", "pedir el cambio a la IA y probarlo en el navegador", "commitear en la rama con buen mensaje", "subir la rama con git push -u origin agregar-seccion-contacto", "abrir Compare & pull request y crear la PR", "mergear con squash y limpiar la rama"] },
              { tipo: "multiple", pregunta: "Tu rama agregar-seccion-contacto ya tiene commits. ¿Qué comando la sube a GitHub para poder abrir la PR?", opciones: ["git push -u origin main", "git push -u origin agregar-seccion-contacto", "git pull origin agregar-seccion-contacto", "git merge main"], correcta: 1 },
              { tipo: "completar", frase: "Al crear la PR eliges la rama ____ (a donde llegan los cambios) y la ____ (de donde salen). Al mergear, usa ____ para que main quede con un solo commit limpio.", banco: ["base", "comparada", "squash", "reset"], respuestas: ["base", "comparada", "squash"] },
              { tipo: "vf", afirmacion: "Después del merge con squash y de borrar la rama remota, tu rama local ya se integró y puedes borrarla con git branch -d.", correcta: true, explicacion: "sí: la rama local ya se fusionó con main; se borra con git branch -d después de volver a main y hacer pull." },
              { tipo: "quehace", codigo: "git branch -d agregar-seccion-contacto", pregunta: "Después de mergear el PR corres este comando y Git responde Deleted branch agregar-seccion-contacto. ¿Qué hiciste?", opciones: ["Borraste tu rama local porque ya se integró a main con el merge", "Borraste la rama main", "Cancelaste el merge del PR", "Eliminaste tu proyecto de GitHub"], correcta: 0 }
            ]
          },
          {
            id: "m2-c13",
            titulo: "Revisar el código que la IA generó, en el PR",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Abrir la PR (C12) no es el final: es el momento de <strong>revisar</strong>. El código que entrará a main lo generó la IA y, como viste en B15, a la IA no se le aprueba por cortesía — se le verifica. En la pestaña <strong>Files changed</strong> de la PR está el diff completo: todo lo que la IA agregó, quitó o modificó, línea por línea.</p><p>Tu lista de revisión para código de la IA, en este orden:</p><ol><li><strong>¿Cumple lo que pediste?</strong> Tu brief (C15) pedía una sección de horarios — ¿eso aparece?</li><li><strong>¿Cambió algo que no pediste?</strong> La IA suele \"ayudar\" de más: borrar un botón, renombrar clases, mover secciones. Todo lo que no pediste es señal de alerta.</li><li><strong>¿Hay secretos?</strong> Correos personales, teléfonos reales, llaves de API o un <code>.env</code> (C3) — nada de eso va a un repo público.</li><li><strong>¿Hay basura o ruido?</strong> Cambios de formato, archivos sueltos, <code>console.log</code> de prueba. Si no forma parte del cambio, se quita.</li><li><strong>¿Lo probaste?</strong> Ya lo verificaste en el navegador (C9) antes de commitear; la PR confirma lo mismo para el historial.</li></ol><p>Cómo dejas tu veredicto: en <strong>Files changed</strong> pasas el cursor sobre una línea, aparece un botón <code>+</code> y dejas un comentario en esa línea exacta. Con la IA como junior dev, el ciclo típico es: revisas el diff → encuentras algo → comentas → le pides el arreglo → haces push → la PR se actualiza sola (B14) → re-revisas → <strong>Approve</strong> → merge (B16).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es <strong>recibir la mercancía del proveedor contra la nota de pedido</strong>. Pediste cinco cajas de manteca y una docena de huevos; cuando llega el reparto (la IA), no firmas sin abrir: cuentas contra la nota qué llegó, qué falta y qué vino de más. Si todo cuadra, firmas (approve). Si algo no cuadra, lo devuelves con nota (request changes). Firmar sin revisar es el error que se paga después, con la página rota en producción.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un diff real de una PR de la IA sobre Tortas El Güero — y la revisión que lo atrapa:</p><pre><code>PR #12 · Files changed · index.html\n\n@@ -20,7 +20,7 @@\n   &lt;a href=\"https://wa.me/5512345678\" class=\"btn-wa\"&gt;\n     Pídenos por WhatsApp\n   &lt;/a&gt;\n-  &lt;section class=\"testimonios\"&gt;\n+  &lt;!-- sección temporal mientras arreglo el menú --&gt;\n+  &lt;section class=\"testimonios\" style=\"display:none\"&gt;\n     &lt;h2&gt;Lo que dicen nuestros clientes&lt;/h2&gt;\n\nComentario tuyo en la línea 23:\n  \"No pedí ocultar los testimonios. Restaura el bloque\n   completo y quita el style display:none.\"\n\n→ Le pides el arreglo a la IA, haces push,\n  la PR se actualiza y apruebas.</code></pre><p>La revisión atrapó algo que la IA hizo por su cuenta. Eso — y no el merge ciego — es lo que mantiene tu página sana.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Actúa como revisor senior de la PR de mi página: te pego el diff. Dime: 1) si cumple lo que pedí, 2) si cambió algo que no estaba en mi pedido, 3) si hay secretos o datos reales que no deben ser públicos, 4) si hay basura o cambios de formato. Señala cada problema en la línea exacta y propón el arreglo. No apruebes por cortesía.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "En la pestaña Files changed de la PR ves que la IA también cambió los colores de toda la página — algo que no le pediste. ¿Qué haces?", opciones: ["Lo apruebas: la IA sabe lo que hace", "Dejas un comentario en esa línea pidiendo que lo revierta antes del merge", "Borras la PR y abres otra sin revisar", "Mergeas y lo corriges después en producción"], correcta: 1 },
              { tipo: "completar", frase: "En Files changed pasas el cursor sobre una línea, presionas el ____ y dejas un ____. Si pides un arreglo, la IA lo hace, haces push y la PR ____ sola.", banco: ["+", "comentario", "se actualiza", "se cierra"], respuestas: ["+", "comentario", "se actualiza"] },
              { tipo: "relacionar", pares: [["Cumple lo que pediste", "Apruebas y mergeas"], ["Cambió algo que no pediste", "Comentas la línea y pides que lo revierta"], ["Hay un token o dato real en el diff", "No mergear: retirar el secreto y rotarlo"], ["Cambios de formato sin sentido", "Pedir que los quite: no forman parte del cambio"]] },
              { tipo: "vf", afirmacion: "Si la IA te dice que el cambio quedó bien, ya puedes aprobar la PR sin abrir el diff.", correcta: false, explicacion: "lo que dice la IA no reemplaza tu revisión: abres Files changed y verificas con tus ojos (B15 y C9)." },
              { tipo: "quehace", codigo: "-  &lt;section class=\"testimonios\"&gt;\n+  &lt;section class=\"testimonios\" style=\"display:none\"&gt;", pregunta: "Este fragmento del diff de una PR de la IA oculta la sección de testimonios. Tu prompt no pedía tocarla. ¿Qué concluyes?", opciones: ["Que es un cambio pedido y debes aprobarlo", "Que la IA modificó algo fuera de lo pedido: comentas la línea y pides que lo restaure", "Que el diff siempre miente", "Que los testimonios se duplicaron"], correcta: 1 }
            ]
          },
          {
            id: "m2-c14",
            titulo: "PRÁCTICA: escribir un README que venda tu proyecto",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu repo ya tiene historia: commits, ramas, una PR y una página publicada (C7-C12). Lo que le falta es <strong>la cara</strong>: un <code>README.md</code> que le diga a cualquiera — un cliente, una vacante, otro dev — qué es tu proyecto y por qué importa. La regla de B29: <strong>un repo se juzga en 10 segundos</strong>, y el README es lo primero que se lee.</p><p>Las secciones de un README que vende, para un proyecto como Tortas El Güero:</p><ol><li><strong>Título + línea de qué es.</strong> \"Tortas El Güero — sitio de una tortillería real del barrio, con menú, testimonios y pedido por WhatsApp.\"</li><li><strong>Enlace a la página viva.</strong> Tu página ya está publicada (C8): <code>https://tuusuario.github.io/mi-primera-pagina/</code>. Un enlace que se puede abrir vale más que cualquier descripción.</li><li><strong>Qué hace.</strong> Dos o tres frases del valor y para quién es.</li><li><strong>Tecnologías.</strong> HTML, CSS y JavaScript. Sin adornos.</li><li><strong>Cómo ejecutarlo en local.</strong> <code>git clone</code> y abrir <code>index.html</code>. Tres líneas bastan.</li><li><strong>Próximos pasos (opcional).</strong> Una o dos ideas reales: menú semanal, pedidos en línea.</li></ol><p>La regla de oro del README que vende: <strong>nada de mentiras</strong>. No escribas \"carrito de compras\" si no existe: se descubre al primer clic. El README vende con lo que ya está hecho y probado.</p><p>Cómo lo integras con tu flujo: lo creas en una rama (C10), lo mandas por PR (C12), lo revisas en Files changed (C13) y lo mergeas con squash. El repo queda con cara profesional y tu flujo intacto.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El README es el <strong>escaparate del local</strong>. El negocio puede tener la mejor cocina del barrio, pero si el escaparate está vacío o dice \"proyecto de práctica\", la gente pasa de largo. El escaparate muestra el producto real — tu página viva, con su enlace — y el letrero con lo esencial. Nadie entra por la cocina; entran por lo que ven en la puerta.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El README de Tortas El Güero, listo para tu repo:</p><pre><code># Tortas El Güero\n\nSitio de la tortillería del barrio: menú del día,\ntestimonios de clientes y pedido directo por WhatsApp.\n\nPágina publicada: https://tuusuario.github.io/mi-primera-pagina/\n\n## Qué hace\n\nMuestra el menú y los precios, presenta los testimonios\nde los clientes y abre WhatsApp para pedir sin salir\nde la página.\n\n## Tecnologías\n\n- HTML\n- CSS\n- JavaScript\n\n## Cómo ejecutarlo en local\n\ngit clone https://github.com/tuusuario/mi-primera-pagina.git\ncd mi-primera-pagina\ny abre index.html en tu navegador.\n\n## Próximos pasos\n\n- Menú semanal en la página\n- Pedidos en línea</code></pre><p>Flujo de integración: <code>git switch -c agregar-readme</code> → creas el archivo → <code>git add .</code> → <code>git commit -m \"docs: agregar README del proyecto\"</code> → push → PR → revisas (C13) → squash merge (C12).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te voy a contar qué hace mi proyecto: la página de la tortillería Tortas El Güero con menú, testimonios y botón de WhatsApp, publicada en GitHub Pages. Redáctame el README.md que venda el proyecto, con estas secciones: título, qué es, enlace a la página viva, tecnologías, cómo ejecutarlo en local y próximos pasos. NO inventes funcionalidades que no existen.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda las secciones de un README que vende:", elementos: ["título y línea de qué es", "enlace a la página viva", "qué hace el proyecto", "tecnologías usadas", "cómo ejecutarlo en local", "próximos pasos"] },
              { tipo: "multiple", pregunta: "¿Cuál de estas líneas sí corresponde a un README que vende?", opciones: ["Tortas El Güero — sitio de una tortillería real con menú, testimonios y pedido por WhatsApp", "proyecto de práctica para la clase", "tarea de la semana 2, casi no funciona", "no sé qué es esto, lo hizo una IA"], correcta: 0 },
              { tipo: "completar", frase: "En un README que vende, un ____ a la página publicada (C8) vale más que cualquier descripción. Y la regla de oro: nada de ____ — si el repo no tiene carrito, no lo prometas.", banco: ["enlace", "mentiras", "código", "screenshots"], respuestas: ["enlace", "mentiras"] },
              { tipo: "vf", afirmacion: "El README se crea en una rama, se integra por Pull Request y se mergea con squash, igual que cualquier otro cambio del proyecto.", correcta: true, explicacion: "sí: el README es un cambio más del repo y sigue el flujo de C10-C13 sin excepciones." },
              { tipo: "quehace", codigo: "git clone https://github.com/tuusuario/mi-primera-pagina.git", pregunta: "Esta línea va en la sección 'Cómo ejecutarlo en local'. ¿Qué le permite hacer a quien la corra?", opciones: ["Publicar la página con GitHub Pages", "Descargar una copia del proyecto a su computadora para abrir index.html en su navegador", "Borrar el repositorio de GitHub", "Crear una rama nueva"], correcta: 1 }
            ]
          },
          {
            id: "m2-c15",
            titulo: "El brief para la IA cuando hay repo de por medio",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>En el Mes 1 le pedías cambios a la IA sobre archivos sueltos. Ahora tu proyecto vive en un repositorio, y eso cambia el prompt: la IA necesita saber <strong>qué repo, qué archivos y qué límites</strong>, y tú necesitas definir <strong>cómo se entrega el cambio</strong>. Ese prompt completo es el <strong>brief con repo de por medio</strong>.</p><p>Las cinco partes de un brief cuando hay repo:</p><ol><li><strong>Contexto.</strong> \"Mi repo es mi-primera-pagina: la página de Tortas El Güero. El archivo principal es index.html.\" Sin esto, la IA adivina.</li><li><strong>El cambio.</strong> Qué quieres, dónde y cómo se verifica (C9): \"Agrega una sección de horarios con una tabla de lunes a domingo. Verifico abriendo index.html en el navegador.\"</li><li><strong>Los límites.</strong> Qué NO tocar. Es lo que previene el \"ayudó de más\" que revisaste en C13: \"No borres el botón de WhatsApp ni cambies la paleta amarillo y café.\"</li><li><strong>La forma de entrega.</strong> Qué quieres recibir: \"Pásame el bloque HTML para pegar en index.html\", o \"propón el cambio y sugiéreme cuándo crear la rama y el PR\".</li><li><strong>El contrato de revisión.</strong> Cómo se cierra el ciclo (C9): \"No me des el mensaje de commit: primero lo pruebo; si quedó, te pido el mensaje con Conventional Commits (C5).\"</li></ol><p>La diferencia práctica: sin brief, la IA decide por ti el alcance — y el alcance inventado es el origen de casi todos los desastres de C11. Con brief, cada vuelta del ciclo pedir → probar → commitear (C9) es más corta y más predecible.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es <strong>encargar un traje a la medida</strong>. Si le dices al sastre \"hazme un traje\", te llega cualquier cosa a su medida y con sus gustos. Si le das medidas, tela, ocasión y le dices \"no toques la solapa\", el resultado es tuyo. La IA es el sastre más talentoso que existe — y por eso mismo necesita medidas exactas: su talento sin instrucciones es un catálogo al azar.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El mismo pedido, con y sin brief. Sin brief:</p><pre><code>\"Agrégale cosas a mi página\"</code></pre><p>Resultado: la IA agrega un carrito, cambia los colores, borra el botón de WhatsApp y devuelve 200 líneas que no pediste. Te toca deshacer con <code>git restore .</code> (C11).</p><p>Con brief:</p><pre><code>\"Mi repo es mi-primera-pagina: la página de Tortas\nEl Güero, archivo principal index.html.\n\nAgrega una sección de horarios con una tabla de\nlunes a domingo, abajo de los testimonios.\n\nLímites: no toques el botón de WhatsApp ni la\npaleta amarillo y café.\n\nEntrega: el bloque HTML para pegar en index.html.\nNo me des el mensaje de commit: primero lo pruebo.\"</code></pre><p>Un resultado predecible: solo la tabla, en el lugar pedido, sin daños colaterales. Pruebas, commiteas con un mensaje de C5 y, si lo quieres formal, lo integras por rama y PR (C12).</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te voy a pedir cambios para mi repo. Antes de escribir código, confirma que entiendes: 1) qué repo y archivos voy a tocar, 2) qué cambio pido y cómo lo voy a verificar, 3) qué cosas NO debes tocar, 4) cómo me vas a entregar el cambio. Si algo de esto me falta en el pedido, pídemelo antes de empezar.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es la diferencia clave al pedirle un cambio a la IA ahora que tienes repositorio?", opciones: ["El prompt debe incluir contexto del repo, archivos a tocar, límites y forma de entrega", "Ya no se le pide nada: la IA trabaja sola sobre el repo", "Los prompts ahora van en inglés obligatorio", "El brief solo sirve para proyectos grandes"], correcta: 0 },
              { tipo: "completar", frase: "El brief con repo tiene cinco partes: ____ (qué repo y archivos), el ____ pedido, los ____ (qué NO tocar), la forma de ____ y el contrato de revisión.", banco: ["contexto", "cambio", "límites", "entrega"], respuestas: ["contexto", "cambio", "límites", "entrega"] },
              { tipo: "relacionar", pares: [["Contexto", "Mi repo es mi-primera-pagina: la página de Tortas El Güero, archivo principal index.html"], ["Cambio", "Agrega una sección de horarios con tabla de lunes a domingo, abajo de los testimonios"], ["Límites", "No toques el botón de WhatsApp ni la paleta amarillo y café"], ["Entrega", "Pásame el bloque HTML para index.html; el mensaje de commit lo pedimos después de probar"]] },
              { tipo: "vf", afirmacion: "Un prompt vago como 'agrégale cosas a mi página' es eficiente cuando ya hay repo: la IA conoce el contexto y decide el alcance.", correcta: false, explicacion: "sin brief la IA inventa el alcance: toca lo que no pediste y rompe lo que funcionaba (C11 y C13)." },
              { tipo: "quehace", codigo: "Límites: no toques el botón de WhatsApp ni la paleta amarillo y café.\nEntrega: el bloque HTML para index.html. Primero lo pruebo.", pregunta: "Esta parte del brief…", opciones: ["Define qué no puede tocar la IA y cómo entregará el cambio, dejándote la verificación a ti", "Es opcional y solo le da ruido a la IA", "Es un comando de Git para la terminal", "Es el título de tu pull request"], correcta: 0 }
            ]
          },
          {
            id: "m2-c16",
            titulo: "PRÁCTICA: documentar tu proyecto con IA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu repo ya tiene cara: el README de C14. Lo que le falta es el manual de taller: documentar cómo funciona el proyecto para que tu yo de dentro de tres meses — o cualquier otro dev — lo entienda sin leer el código línea por línea.</p><p>Para tu nivel, la documentación que vale es un archivo nuevo, <code>docs/proyecto.md</code>, que responda tres preguntas:</p><ol><li><strong>Estructura.</strong> Qué archivos hay y para qué sirve cada uno.</li><li><strong>Conexiones.</strong> Qué pieza depende de qué; dónde está el botón de WhatsApp y por qué aparece en todas las secciones.</li><li><strong>Decisiones.</strong> Por qué está hecho así. Eso no aparece en el código, y es justo lo que más se pierde con el tiempo.</li></ol><p>La buena noticia: la documentación es texto, y el texto es el territorio natural de la IA. No la escribes tú: le pasas a la IA tu historia (<code>git log --oneline</code>) y tu lista de archivos, y ella redacta el manual. Tu trabajo es revisarlo con los mismos ojos de C13 — si no cumple lo que pediste, se corrige — e integrarlo por rama y PR (C12).</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El README es el escaparate del local (C14): lo que ve el cliente. La documentación es el <strong>recetario interno de la cocina</strong>: el procedimiento de cada platillo, con cantidades y orden, para que cualquier cocinero nuevo — o tu yo del futuro — prepare lo mismo sin que el chef que lo armó esté presente. El cliente nunca ve el recetario, pero sin él el negocio depende de la memoria de una sola persona.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El flujo completo, sobre tu proyecto de Tortas El Güero:</p><pre><code>C:\\...\\tortas-el-guero&gt; git log --oneline\na3f9c1d docs: agregar README (C14)\nb7f2a1 feat: agregar sección de contacto\n8e2f4a feat: agregar menú del día\n\nC:\\...\\tortas-el-guero&gt; dir /B\n.gitignore\nindex.html\nREADME.md\nscript.js\nstyle.css\n\nC:\\...\\tortas-el-guero&gt; git switch -c agregar-documentacion\nSwitched to a new branch 'agregar-documentacion'\n\n→ Le pegas la salida a la IA y pides el manual (prompt de abajo)\n→ Revisas que no invente archivos ni funciones (C13); si inventó, pides corrección\n\nC:\\...\\tortas-el-guero&gt; mkdir docs\nC:\\...\\tortas-el-guero&gt; git add .\nC:\\...\\tortas-el-guero&gt; git commit -m \"docs: agregar documentación del proyecto\"\n[agregar-documentacion 4c1e9d] docs: agregar documentación del proyecto\n\nC:\\...\\tortas-el-guero&gt; git push -u origin agregar-documentacion\n→ PR (C12) → revisión (C13) → squash merge</code></pre><p>Documentado. Tu proyecto ya se explica solo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te voy a pegar la historia de mi proyecto (git log --oneline) y su lista de archivos. Redáctame un manual en docs/proyecto.md que responda: 1) la estructura del proyecto, 2) cómo se conectan las piezas, 3) las decisiones de diseño que se notan en los commits. NO inventes archivos, funciones ni características que no aparezcan en lo que te pego. Si algo no está claro, dime qué información te falta.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué responde la documentación de docs/proyecto.md que NO aparece en el código?", opciones: ["La sintaxis de HTML y CSS", "El porqué de las decisiones de diseño", "El código fuente de index.html", "Los precios de GitHub"], correcta: 1 },
              { tipo: "completar", frase: "El ____ es el escaparate del local (C14); la ____ es el recetario interno de la cocina: estructura, conexiones y decisiones.", banco: ["README", "documentación", "commit", "rama"], respuestas: ["README", "documentación"] },
              { tipo: "relacionar", pares: [["git log --oneline", "La historia del proyecto, para pasársela a la IA"], ["docs/proyecto.md", "El manual de estructura, conexiones y decisiones"], ["Revisar como en C13", "Atrapar lo que la IA inventa al documentar"], ["Squash merge", "Integrar la documentación como un solo commit limpio"]] },
              { tipo: "vf", afirmacion: "La IA puede inventar archivos o funciones al documentar, por eso revisas su manual con el mismo criterio de C13 antes de mergear.", correcta: true, explicacion: "sí: sin el contexto exacto la IA alucina; la revisión atrapa lo que no cumple lo pedido." },
              { tipo: "ordenar", instruccion: "Acomoda el flujo para documentar tu proyecto con IA:", elementos: ["revisar la historia con git log --oneline", "crear la rama agregar-documentacion", "pasar historia y archivos a la IA para el manual", "revisar que no invente archivos ni funciones (C13)", "commitea con docs: y sube la rama", "abrir PR, revisar y mergear con squash"] }
            ]
          },
          {
            id: "m2-c17",
            titulo: "Issues como lista de tareas dirigida a la IA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Un Issue de GitHub es una tarea escrita, con número propio y un hilo de conversación. Para tu flujo con IA es la pieza que faltaba: el puente entre \"quiero algo\" y \"le pido algo a la IA\".</p><p>Por qué los Issues son ideales para trabajar con IA:</p><ol><li><strong>Te obligan a escribir la tarea bien.</strong> No existe \"arregla eso\". Escribir un Issue es escribir un mini-brief (C15): qué, dónde, cómo se verifica y qué no tocar.</li><li><strong>Cada Issue es una unidad de trabajo.</strong> Una tarea, un número, una rama (C10), un PR (C12). El patrón profesional: crear Issue → crear rama → pegar el Issue a la IA → PR que dice \"Closes #12\" → merge. El Issue se cierra solo.</li><li><strong>Le dan contexto a la IA.</strong> Un Issue bien escrito ES el brief: se lo pegas a la IA tal cual y ella ya tiene qué pedir, límites y criterio de aceptación.</li></ol><p>La anatomía de un Issue que sirve:</p><ul><li><strong>Título:</strong> la tarea, no el tema. \"Agregar tabla de horarios\", no \"mejoras a la página\".</li><li><strong>Qué:</strong> qué se quiere y dónde.</li><li><strong>Por qué:</strong> para qué sirve; prioriza.</li><li><strong>Cómo se verifica:</strong> qué vas a ver en el navegador cuando esté listo.</li><li><strong>Límites:</strong> qué NO tocar.</li></ul><p>Y cierras el ciclo: en la descripción del PR escribes <code>Closes #12</code> y, al mergear, GitHub cierra el Issue automáticamente. Cada tarea queda con su número y su solución en el historial.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Un Issue es la <strong>comanda del restaurante</strong>. El comensal (tú) escribe con claridad el platillo, la cocina (la IA) lo prepara, y la comanda se cancela cuando sale el platillo. Una comanda por pedido, numerada, para poder seguirla. El restaurante que trabaja con comandas sabe qué se está cocinando; el que solo grita pedidos a la cocina vive en el caos.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Un Issue bien escrito, y el ciclo que cierra:</p><pre><code>Issue #12 · Agregar tabla de horarios\n------------------------------------\nQUÉ: tabla con horarios de lunes a domingo,\n     abajo de la sección de testimonios.\nPOR QUÉ: los clientes preguntan por teléfono.\nCÓMO SE VERIFICA: abro la página y veo la\n     tabla con los 7 días; de preferencia\n     \"Lunes a Viernes\" resumido.\nLÍMITES: no tocar el botón de WhatsApp ni la\n     paleta amarillo y café.\n\nTítulo bueno vs malo:\n  Malo:  \"mejoras en general\"\n  Bueno: \"Agregar tabla de horarios\"\n  Malo:  \"arreglar la página\"\n  Bueno: \"Corregir precios que muestran el costo\"\n\nEl ciclo completo:\n→ git switch -c agregar-horarios        (C10)\n→ pegas el Issue a la IA                (C15)\n→ pides → pruebas → commiteas           (C9)\n→ git push -u origin agregar-horarios\n→ PR: título \"Agregar tabla de horarios\"\n  descripción: \"Closes #12\"\n→ squash merge → GitHub cierra el Issue #12</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Tengo esta idea: [describe la tarea]. Escríbeme un Issue de GitHub con título, qué, por qué, cómo se verifica y límites, igual que un brief (C15). Si la idea es ambigua, hazme las preguntas que necesites antes de redactarlo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es un buen título de Issue?", opciones: ["arreglar cosas", "Agregar tabla de horarios", "mejoras en general", "ya no sirve la página"], correcta: 1 },
              { tipo: "completar", frase: "Cada Issue es una unidad de trabajo: un ____, una rama (C10), un PR. Si en la descripción del PR escribes \"Closes #12\", GitHub ____ el Issue al ____.", banco: ["número", "cierra", "mergear", "borrar"], respuestas: ["número", "cierra", "mergear"] },
              { tipo: "relacionar", pares: [["Qué", "Qué se quiere y dónde"], ["Por qué", "Para qué sirve: prioriza"], ["Cómo se verifica", "Qué verás en el navegador cuando esté listo"], ["Límites", "Qué NO tocar"]] },
              { tipo: "vf", afirmacion: "Escribir un Issue es escribir un mini-brief (C15): sin límites ni criterio de verificación, la IA decide el alcance por ti.", correcta: true, explicacion: "exacto: el Issue mal escrito produce el mismo alcance inventado que el prompt vago de C15." },
              { tipo: "quehace", codigo: "PR descripción:\n\"Closes #12\"", pregunta: "Escribes esto en la descripción de tu PR y la mergeas. ¿Qué pasa?", opciones: ["Nada: es un comentario opcional", "GitHub cierra el Issue #12 automáticamente al mergear el PR", "Se borra el Issue y su historial de conversación", "La IA edita el Issue por ti"], correcta: 1 }
            ]
          },
          {
            id: "m2-c18",
            titulo: "PRÁCTICA: proyecto nuevo — sitio de un negocio real",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hasta hoy trabajaste sobre tu página del Mes 1 y sobre Tortas El Güero. Hoy arrancas un proyecto nuevo y distinto: <strong>el sitio de un negocio real</strong>. Real significa que existe de verdad: la taquería del primo, la estética de tu hermana, tu propio emprendimiento. Alguien que abra la página pueda encontrarlo.</p><p>Por qué un negocio real y no otro inventado:</p><ul><li><strong>Contenido real.</strong> Precios, horarios, fotos y datos verdaderos. La IA deja de inventar menús y escribe sobre hechos.</li><li><strong>Cliente real.</strong> Podrás mostrar el resultado a alguien a quien de verdad le importa. Ese es el portafolio que pesa (C27).</li><li><strong>Límites reales.</strong> Un negocio tiene reglas: precios que no cambian solos, datos que no se inventan. Ahí practicas el brief (C15) de verdad.</li></ul><p>El plan del proyecto:</p><ol><li>Elige el negocio y recopila la información (prompt de abajo).</li><li>Escribe el brief (C15): qué hace el sitio, qué secciones, límites.</li><li>Arma el repo: carpeta nueva, <code>git init</code>, <code>.gitignore</code> (C3), primer commit (C4).</li><li>Crea la estructura con la IA: <code>index.html</code>, <code>style.css</code>, <code>script.js</code>.</li><li>Construye por ramas (C10): cada sección es una rama, cada rama un PR (C12).</li><li>Publica con GitHub Pages (C8) y comparte el enlace con el dueño del negocio.</li></ol><p>Este proyecto es el que vas a iterar en C19 y donde vas a resolver tu primer conflicto en C20. Trátalo como negocio real desde el día uno.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es tu <strong>primer cliente de verdad</strong>, aunque no te pague. Hasta ahora cocinabas en tu casa: solo tú probabas los platillos. Hoy abres un local nuevo con una carta real y un dueño que va a entrar por la puerta. El estándar cambia: ya no es \"que funcione\", es \"que alguien lo use\" — y que se vea a la altura del negocio que representa.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El arranque del proyecto, paso a paso (con la estética \"Bella\" de ejemplo):</p><pre><code>Paso 1 — Elige el negocio.\nPaso 2 — Entrevista al negocio con la IA (prompt de abajo).\n\nPaso 3 — Arma el repo:\nmkdir sitio-estetica-bella\ncd sitio-estetica-bella\ngit init\n→ creas .gitignore (C3), con .env adentro\ngit add .\ngit commit -m \"chore: iniciar repo de Estética Bella\"\n\nPaso 4 — Pide la estructura con brief (C15):\n  \"index.html con header, servicios, precios,\n   testimonios y contacto; CSS en style.css\"\n\nPaso 5 — Prueba en el navegador (C9) y commitea (C5):\ngit add .\ngit commit -m \"feat: estructura inicial del sitio\"\n\nPaso 6 — Sube y publica (C7-C8):\ngit push -u origin main\n→ Settings → Pages → activar GitHub Pages\n\nPaso 7 — Sigue construyendo por ramas (C19): cada\n  sección nueva en su rama, cada rama con su PR (C12).</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a hacer el sitio web de un negocio real. Hazme de periodista: pregúntame una por una las cosas que necesito averiguar — nombre, servicios o productos con precios, horarios, dirección, contacto, historia corta, qué lo hace distinto y si tiene fotos. Después de mis respuestas, escríbeme el brief del sitio (C15): qué secciones, qué hace cada una y qué NO debe tocar la IA.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Por qué este proyecto es \"de un negocio real\" y no otro ejercicio?", opciones: ["Porque usa Git y GitHub", "Porque el contenido, el cliente y las reglas son verdaderos, y el resultado se puede mostrar", "Porque el código es más difícil", "Porque se publica en GitHub Pages"], correcta: 1 },
              { tipo: "ordenar", instruccion: "Acomoda el arranque del proyecto nuevo:", elementos: ["elegir el negocio y recopilar la información", "escribir el brief (C15)", "armar el repo con git init, .gitignore y primer commit (C3-C4)", "crear la estructura con la IA y probar en el navegador (C9)", "subir y publicar con GitHub Pages (C7-C8)", "seguir construyendo por ramas y PRs"] },
              { tipo: "completar", frase: "El proyecto nuevo se trata como negocio real desde el día uno: contenido ____ (precios y horarios verdaderos), ____ real (el dueño) y límites reales para practicar el ____ (C15).", banco: ["real", "cliente", "brief", "conflicto"], respuestas: ["real", "cliente", "brief"] },
              { tipo: "vf", afirmacion: "La página del negocio real se construye directo en main, sin ramas, porque es un proyecto pequeño.", correcta: false, explicacion: "no: se construye por ramas (C10-C12) desde el primer cambio; ese es el ritmo que practicarás en C19." },
              { tipo: "quehace", codigo: "mkdir sitio-estetica-bella\ncd sitio-estetica-bella\ngit init", pregunta: "Estos tres comandos…", opciones: ["Crean una carpeta nueva, entran a ella y la convierten en un repositorio", "Publican el sitio en GitHub Pages", "Borran el proyecto anterior", "Crean una rama nueva"], correcta: 0 }
            ]
          },
          {
            id: "m2-c19",
            titulo: "PRÁCTICA: iterar el proyecto en ramas",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>El proyecto de C18 ya está vivo: repo, main, primera versión publicada. Ahora le das el ritmo de trabajo real: <strong>cada mejora es una rama nueva</strong> y el ciclo completo se repite tantas veces como ideas tengas.</p><p>El ciclo de iteración, en automático:</p><ol><li><strong>Idea.</strong> \"Agregar galería de fotos\".</li><li><strong>Rama (C10).</strong> <code>git switch -c agregar-galeria</code>.</li><li><strong>Brief (C15).</strong> Le pides el cambio a la IA con contexto, límites y cómo lo vas a verificar.</li><li><strong>Probar (C9).</strong> Abres el navegador; si no quedó, vuelves a pedir.</li><li><strong>Commit (C5).</strong> Mensaje con Conventional Commits, en la rama.</li><li><strong>PR (C12).</strong> Subes la rama, abres PR, revisas (C13), squash merge.</li><li><strong>Actualizar local.</strong> <code>git switch main</code> → <code>git pull</code>.</li></ol><p>La regla del trabajo en ramas: <strong>una rama, un cambio</strong>. Si a mitad del camino la idea crece — \"y agrega también un mapa\" — no lo mezcles: termina la primera, mergea, y abre una rama nueva. Las ramas cortas son fáciles de revisar (C13), de mergear y, si se complican, de desechar (C11) sin que main se entere.</p><p>La disciplina de ahora — todo por rama, hasta el cambio chico — se vuelve instinto profesional después.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Cada rama es <strong>un platillo de prueba en su propia estación</strong>. El menú (main) nunca cambia mientras pruebas: cada cocinero (tú + la IA) prueba su variante en su estación, la presenta al comensal (tú mismo, en el navegador), y solo cuando la apruebas pasa al menú. Si la variante sale mal, se tira en la estación — y el menú ni se entera.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Tres iteraciones seguidas, cada una con su rama, su PR y su merge:</p><pre><code>Iteración 1 — galería de fotos:\ngit switch -c agregar-galeria\n→ brief (C15) + IA + pruebas en el navegador (C9)\ngit add . &amp;&amp; git commit -m \"feat: agregar galería de fotos\"\ngit push -u origin agregar-galeria\n→ PR → revisas (C13) → squash merge\ngit switch main &amp;&amp; git pull\n\nIteración 2 — mapa de ubicación:\ngit switch -c agregar-mapa\n→ brief + IA + pruebas\ngit add . &amp;&amp; git commit -m \"feat: agregar mapa de ubicación\"\ngit push -u origin agregar-mapa\n→ PR → squash merge\ngit switch main &amp;&amp; git pull\n\nIteración 3 — corregir precios:\ngit switch -c corregir-precios\n→ brief: \"los precios muestran el costo anterior\"\ngit add . &amp;&amp; git commit -m \"fix: corregir precios\"\ngit push -u origin corregir-precios\n→ PR → squash merge\ngit switch main &amp;&amp; git pull\n\nTu repo avanza así: una rama a la vez, main siempre\nestable, historial limpio.</code></pre>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a iterar mi proyecto en ramas: una rama por cambio, y cada cambio cierra con PR. Para esta tarea — [describe la idea] — dame la lista exacta: la rama que debo crear, los archivos que voy a tocar y cómo pruebo el resultado antes del commit. Respétame la regla: una rama, un cambio.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda el ciclo de iteración en ramas:", elementos: ["la idea", "crear la rama nueva (C10)", "brief + IA + probar en el navegador (C15, C9)", "commit con buen mensaje (C5)", "PR + squash merge (C12)", "git switch main + git pull"] },
              { tipo: "multiple", pregunta: "A media iteración se te ocurre \"agregar también un mapa\". ¿Qué haces?", opciones: ["Lo agregas en la misma rama para ahorrar pasos", "Terminas el cambio actual, mergeas, y abres una rama nueva para el mapa", "Lo anotas en un Issue (C17) y lo trabajas después, sin mezclarlo en la rama actual", "b y c son válidas"], correcta: 3 },
              { tipo: "completar", frase: "La regla del trabajo en ramas: una ____, un ____. Las ramas cortas son fáciles de ____ (C13) y, si se complican, de ____ (C11) sin que main se entere.", banco: ["rama", "cambio", "revisar", "desechar"], respuestas: ["rama", "cambio", "revisar", "desechar"] },
              { tipo: "vf", afirmacion: "Después del merge en GitHub, vuelves a main con git switch main y git pull para que tu local tenga lo nuevo.", correcta: true, explicacion: "sí: el merge pasó en GitHub; tu main local baja los cambios con git pull." },
              { tipo: "relacionar", pares: [["Rama (C10)", "El espacio aislado para el cambio"], ["Brief (C15)", "El pedido con contexto, límites y verificación"], ["PR (C12)", "La puerta del cambio hacia main"], ["Ciclo C9", "Pedir → probar → commitear"]] }
            ]
          },
          {
            id: "m2-c20",
            titulo: "PRÁCTICA: resolver tu primer conflicto de merge",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Llega el momento que asusta a todo el mundo y que es más simple de lo que parece. <strong>Un conflicto de merge ocurre cuando dos ramas modificaron las mismas líneas del mismo archivo</strong> y Git no sabe cuál versión ganar. Git no se rompió ni está enojado: te está pidiendo que decidas tú.</p><p>Cuándo pasa: en C19 iteraste en ramas. Si dos ramas tocan la misma zona — por ejemplo, dos que editan la sección de precios — la segunda en mergear choca con la primera. Git avisa con \"merge conflict\" (o \"both modified\" en <code>git status</code>).</p><p>Qué haces. Git deja marcadores en el archivo:</p><pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nversión de main\n=======\nversión de la rama\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; nombre-rama</code></pre><p>Tu trabajo: borrar los marcadores, dejar la versión correcta (o una mezcla de ambas) y guardar. Después <code>git add</code> y <code>git commit</code>. Eso es todo: decides, marcas y commiteas.</p><p>Y la IA es tu copiloto de conflicto: le pegas el archivo con los marcadores, le dices qué quieres conservar, y te devuelve el archivo limpio. Tú decides si es correcto.</p><p>Cómo evitar conflictos: ramas cortas (C19), un cambio por rama, y mergear seguido para que tu rama no se aleje de main. El conflicto no es un error: es la señal de que dos ramas trabajaron en lo mismo — y resolverlo es decidir con información.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Dos pintores dejaron la misma pared del local con colores distintos: uno pintó la parte superior azul, el otro la inferior café. La pared no se puede quedar a medias ni pintarse encima sin decidir. <strong>El conflicto es que alguien decide el color final</strong>. Git es el que avisa que hay dos manos en la misma pared — no es el que elige el color.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El primer conflicto real, paso a paso:</p><pre><code>Dos ramas editaron la sección de precios:\n- corregir-precios (ya mergeada en main)\n- agregar-promociones (intenta entrar)\n\ngit switch main\ngit merge agregar-promociones\nAuto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit.\n\ngit status\n  both modified: index.html\n\n→ Abres index.html y encuentras:\n&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n&lt;h2&gt;Precios&lt;/h2&gt;\n&lt;p&gt;Mollete: $35&lt;/p&gt;\n=======\n&lt;h2&gt;Precios&lt;/h2&gt;\n&lt;p&gt;Mollete: $40 (promo con bebida)&lt;/p&gt;\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; agregar-promociones\n\n→ Decides: \"sí al $40, sin la promesa de promo\".\n  Dejas el archivo así, sin marcadores:\n&lt;h2&gt;Precios&lt;/h2&gt;\n&lt;p&gt;Mollete: $40&lt;/p&gt;\n\ngit add index.html\ngit commit -m \"merge: integrar agregar-promociones\"\n\n→ Y si el conflicto aparece en una PR, GitHub\n  muestra \"This branch has conflicts\": traes\n  main a tu rama, resuelves igual y haces push.</code></pre><p>Resolviste tu primer conflicto: decidiste, marcaste y commiteaste.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Te voy a pegar un archivo con marcadores de conflicto de merge (&lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;). Esta es la situación: [resumen de las dos versiones]. Decide cuál conservar o propón una mezcla, y devuélveme el archivo completo SIN marcadores. Explica brevemente qué cambiaste.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué significa que Git te muestre un conflicto de merge?", opciones: ["Que tu proyecto se corrompió y hay que rehacerlo", "Que dos ramas modificaron las mismas líneas y Git necesita que decidas qué versión conservar", "Que la IA cometió un error grave e irreparable", "Que hay que borrar una de las ramas"], correcta: 1 },
              { tipo: "completar", frase: "Los marcadores de conflicto son ____, ____ y ____ (con el nombre de la rama). Tu trabajo es ____ los marcadores y dejar la versión correcta.", banco: ["<<<<<<< HEAD", "=======", ">>>>>>>", "borrar"], respuestas: ["<<<<<<< HEAD", "=======", ">>>>>>>", "borrar"] },
              { tipo: "ordenar", instruccion: "Acomoda la resolución de un conflicto de merge:", elementos: ["git merge agregar-promociones → CONFLICT", "git status para ver los archivos con conflicto", "abrir index.html y borrar los marcadores", "dejar la versión correcta y guardar", "git add index.html", "git commit para cerrar el merge"] },
              { tipo: "vf", afirmacion: "Si el conflicto aparece en una PR, GitHub muestra \"This branch has conflicts\" y la solución es traer main a tu rama, resolver y hacer push.", correcta: true, explicacion: "sí: se resuelve igual, con marcadores, y el push actualiza el PR." },
              { tipo: "relacionar", pares: [["<<<<<<< HEAD", "Inicio: arriba está la versión de tu rama actual"], ["=======", "Separador entre las dos versiones"], [">>>>>>> agregar-promociones", "Fin: abajo está la versión de la otra rama"], ["git add + git commit", "Cerrar el conflicto con tu decisión"]] }
            ]
          },
          {
            id: "m2-c21",
            titulo: "Herramientas IA que trabajan con Git directamente",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hasta la lección C20, la cadena siempre fue: la IA propone, tú copias, tú pegas en la terminal, tú haces commit. Tú eras el mensajero entre dos sistemas que no se hablaban. Eso acaba hoy: existe toda una generación de herramientas IA que <strong>trabajan dentro de tu repositorio</strong> — leen tus archivos, corren comandos, hacen commits y abren PRs. No te dictan qué escribir: escriben, ejecutan y versionan.</p><p>Tres familias, para que no te pierdas:</p><ul><li><strong>Agentes de terminal</strong> (Claude Code, Codex CLI, Aider): se lanzan desde la terminal dentro de tu carpeta, leen el repo completo y ejecutan tareas reales — hasta corren tu proyecto para probarlo. Te piden permiso antes de acciones delicadas.</li><li><strong>Editores con IA integrada</strong> (Cursor, VS Code + Copilot): trabajan en el editor donde ves tu código, entienden todo el proyecto y proponen cambios con el diff a la vista.</li><li><strong>Agentes en la nube</strong> (revisión de PRs con IA, automatización): actúan sobre el remoto y hasta dejan comentarios en tus Pull Requests (C12).</li></ul><p>Lo que cambia no es la herramienta: es el <strong>nivel de delegación</strong>. Antes dirigías desde afuera; ahora la IA entra al taller. Por eso todo lo de esta materia se vuelve tu superpoder: el <code>.gitignore</code> (C3), las ramas (C19), el diff para auditar (C5), la revisión del PR (C13). <strong>Un repo ordenado es el mejor escenario para estas herramientas.</strong> Un repo sucio es donde se pierden y se rompen cosas.</p><p>Y lo que NUNCA cambia: la herramienta ejecuta, <strong>tú decides</strong>. Ella propone commits; tú decides qué mergear. En C24 revisas su trabajo; en C25, qué jamás le compartes.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Hasta hoy eras el <strong>intérprete entre dos personas que no se hablan</strong>: la IA te dictaba y tú le traducías a Git para que hiciera el commit. Estas herramientas nuevas son el <strong>intérprete bilingüe que se sienta a la mesa</strong>: escucha, lee el menú, ordena y trae la cuenta — y tú solo revisas si el platillo es lo que pediste. No se acabó tu trabajo: se acabó tu papel de teléfono. Ahora eres el dueño del restaurante, no el mensajero.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Sesión mínima con un agente de terminal (Claude Code):</p><pre><code>C:\\...\\tortas-el-guero&gt; claude\n\n&gt; Agrega una sección de testimonios con 3 clientes\n  y súbela por rama con PR\n\n◆ leyó tu repo (index.html, style.css, script.js)\n◆ creó la rama: agregar-testimonios\n◆ editó index.html (+18 líneas) y style.css (+9)\n◆ propone: git add + git commit\n  ¿Aprobado? [sí/no]  →  sí\n\n[agregar-testimonios 9c41d2] feat: agregar testimonios\n◆ git push -u origin agregar-testimonios\n◆ tu PR ya está en GitHub: [Ver pull request]</code></pre><p>Tu trabajo: abrir el PR, revisar el diff (C13), correr la página y decidir el merge (C12). La herramienta hizo lo mecánico; tú hiciste lo que vale.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Voy a instalar y probar una herramienta IA que trabaja con Git (Claude Code / Cursor). Antes de empezar: 1) dime si mi repo está listo para que trabaje (qué debe mostrar git status), 2) explícame qué permisos me va a pedir y cuáles conviene aceptar, 3) muéstrame cómo deshacer su trabajo si algo sale mal.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Qué distingue a las herramientas IA de esta lección de las que usaste hasta ahora?", opciones: ["Responden más rápido los chats", "Leen tu repositorio, corren comandos y hacen commits por ti", "Solo escriben código, no tocan Git", "Reemplazan tu revisión y tus decisiones"], correcta: 1 },
              { tipo: "relacionar", pares: [["Agente de terminal", "Claude Code / Aider: trabaja desde la carpeta del proyecto"], ["Editor con IA integrada", "Cursor / Copilot: cambios con diff visible en tu editor"], ["Agente en la nube", "Revisa tus PRs y deja comentarios en GitHub"], ["Tú", "Decides qué se mergea y qué no"]] },
              { tipo: "completar", frase: "Antes dirigías a la IA desde ____; ahora la IA entra al ____ y trabaja sobre tus archivos.", banco: ["afuera", "taller", "chat", "nube"], respuestas: ["afuera", "taller"] },
              { tipo: "vf", afirmacion: "Un repositorio con ramas cortas y commits claros (C19) es el mejor terreno para estas herramientas.", correcta: true, explicacion: "leen el historial y las ramas para entender el proyecto y no pisarse." },
              { tipo: "quehace", codigo: "claude", pregunta: "Corres <code>claude</code> dentro de tu carpeta y la IA responde: \"creé la rama agregar-testimonios y propongo un commit\". ¿Qué significa que te pregunte antes de hacer el commit?", opciones: ["Que la herramienta está fallando", "Que te pide permiso porque hará un cambio en el historial; tú apruebas o rechazas", "Que el commit ya se hizo y solo te avisa", "Que necesitas instalar otra cosa"], correcta: 1 }
            ]
          },
          {
            id: "m2-c22",
            titulo: "Claude Code, Cursor y el flujo con repositorio",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Dos herramientas se llevan hoy la atención, y con ellas entiendes el flujo completo: <strong>Claude Code</strong> (agente de terminal) y <strong>Cursor</strong> (editor con IA integrada).</p><p><strong>Claude Code</strong> vive en la terminal. Entras a tu carpeta, corres <code>claude</code>, y desde ahí: lee archivos, los modifica, corre tu proyecto para probarlo, hace commits y hasta crea ramas. Antes de cada acción delicada (un comando, un commit, un push) te pide aprobación: <code>[sí/no]</code>. Tú aprietas el gatillo.</p><p><strong>Cursor</strong> es un editor (primo de VS Code) con IA integrada. No es un chat aparte: el asistente ve el archivo abierto, entiende todo el repo y propone cambios que aceptas o descartas en el mismo editor, viendo el diff línea por línea. Su modo agente encadena tareas con tu visto bueno.</p><p>El flujo con repositorio — el mismo de C9, con la herramienta haciendo lo mecánico:</p><pre><code>1. Abres el proyecto en la herramienta\n2. La herramienta LEE el repo (archivos, historial, ramas)\n3. Le das la tarea (un buen brief: C15)\n4. La herramienta propone cambios → tú ves el diff\n5. Apruebas, hace commit y push\n6. Abres PR (C12) → revisión (C13) → merge</code></pre><p>Los tres reflejos de esta materia se vuelven automáticos: <strong>rama antes de tocar</strong> (C19), <strong>diff antes de creer</strong> (C5) y <strong>revisión antes de mergear</strong> (C13). La herramienta te da velocidad; esas tres reglas te dan control.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Hasta hoy le dictabas recetas a alguien que cocinaba en otra cocina. Ahora la IA es un <strong>sous-chef con pase de cocina</strong>: se para en tu cocina, abre tu alacena (tu repo), prepara el platillo siguiendo tu receta y lo deja en la barra con la nota (commit) para que lo pruebes. Cursor es la cocina compartida donde ambos trabajan lado a lado; Claude Code es el auxiliar que entra, trabaja y te entrega la cuenta. Tú no cocinas con las manos: <strong>pruebas, apruebas y decides qué se sirve.</strong></p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Sesión típica con una tarea concreta y segura:</p><pre><code>C:\\...\\tortas-el-guero&gt; claude\n\n&gt; Trabaja en una rama nueva llamada mejorar-menu.\n&gt; Cambia el color del botón de WhatsApp a verde\n&gt; y agrega un enlace de teléfono en el header.\n&gt; NO toques el .gitignore. Muestra el diff antes de commitear.\n\n◆ creando rama mejorar-menu\n◆ index.html: +8 líneas (enlace de teléfono)\n◆ style.css: +4 líneas (color del botón)\n◆ diff propuesto:\n  -  background: #ff6600;\n  +  background: #22c55e;\n◆ ¿hago commit? [sí/no]  sí\n[mejorar-menu 6e19a3] feat: botón verde y teléfono en header\n◆ ¿subo y abro PR? [sí/no]  sí</code></pre><p>Fíjate en el brief: tarea específica, rama propia, un \"no toques\" claro y la petición de ver el diff. Eso es C15 aplicado — la calidad del resultado depende más de tu brief que de la herramienta.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Abre mi proyecto. Antes de tocar nada, dime qué archivos piensas modificar y por qué. Trabaja en una rama nueva llamada [nombre] y después de cada cambio muéstrame el diff. NO hagas commit, push ni PR sin que yo te lo ordene.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Dónde corre Claude Code?", opciones: ["Dentro de tu navegador", "En la terminal, dentro de la carpeta de tu proyecto", "Solo en GitHub", "En la nube sin tocar tu computadora"], correcta: 1 },
              { tipo: "relacionar", pares: [["Claude Code", "Agente de terminal: lee tu repo y ejecuta tareas"], ["Cursor", "Editor con IA integrada y diff visible"], ["El diff", "Lo que revisas antes de aprobar cualquier cambio"], ["Tú", "Apruebas commits y decides qué se mergea"]] },
              { tipo: "completar", frase: "El flujo con repositorio: abres el proyecto → la herramienta ____ el repo → le das la tarea → revisas el ____ → apruebas commit → PR y merge.", banco: ["lee", "diff", "borra", "historial"], respuestas: ["lee", "diff"] },
              { tipo: "vf", afirmacion: "Aunque la IA haga el commit, tú sigues aprobando cada cambio y decidiendo qué entra al historial.", correcta: true, explicacion: "la herramienta propone; el control lo tienes tú con las aprobaciones y la revisión." },
              { tipo: "ordenar", instruccion: "Acomoda el flujo con repositorio:", elementos: ["abrir el proyecto en la herramienta", "la herramienta lee el repo", "darle la tarea con un brief (C15)", "revisar el diff propuesto", "aprobar commit y push", "abrir PR, revisar y mergear"] }
            ]
          },
          {
            id: "m2-c23",
            titulo: "PRÁCTICA: dejar que una IA trabaje sobre tu repo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hoy le sueltas las riendas: una IA ejecutora va a tocar tu repositorio de verdad. La práctica se hace sobre tu proyecto de Tortas El Güero, con una tarea chica — el objetivo no es la función, es el <strong>proceso</strong>.</p><p>La secuencia completa:</p><pre><code>PASO 1  git status                    → repo LIMPIO\nPASO 2  git switch -c ia-testimonios  → rama aparte (C19)\nPASO 3  Le das el brief a la IA (prompt de abajo)\nPASO 4  Ves sus cambios: git diff     → entiendes qué hizo\nPASO 5  git log --oneline             → confirmas su commit\nPASO 6  git push -u origin ia-testimonios\nPASO 7  PR (C12) → revisas (C13) → merge\nPASO 8  git switch main && git pull</code></pre><p>Tres reglas que no se negocian:</p><ul><li><strong>Repo limpio antes de empezar.</strong> Si hay cambios sin commit, la IA trabaja sobre un piso inestable y el historial se vuelve un tiradero. Si hay algo sin guardar, haz commit (C4).</li><li><strong>Rama propia.</strong> La IA trabaja aislada; si su experimento falla, borras la rama y listo (C11).</li><li><strong>Tú apruebas cada commit.</strong> Cuando la herramienta pida permiso, es tu momento de decir sí o no — no un trámite.</li></ul><p>Si en cualquier paso algo se siente raro — borró un archivo, cambió más de lo pedido — ese es el momento de parar y revisar (C24), no de seguir de largo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Hoy contratas a un <strong>jardinero por un día</strong>. Le das la llave del portón (la rama), una orden de trabajo escrita con lo que sí y lo que no (el brief), lo dejas trabajar en su sector sin acceso a tu casa (los archivos que proteges), y antes de pagarle revisas el resultado (el diff y la página corriendo). Si no te gusta, no pagas — no merges. El commit es su recibo de trabajo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La sesión real, con una tarea chica y segura:</p><pre><code>C:\\...\\tortas-el-guero&gt; git status\nOn branch main\nnothing to commit, working tree clean   ← LISTO\n\nC:\\...\\tortas-el-guero&gt; git switch -c ia-testimonios\nSwitched to a new branch 'ia-testimonios'\n\nC:\\...\\tortas-el-guero&gt; claude\n\n&gt; Agrega una sección de testimonios con 3 clientes inventados.\n&gt; Usa un diseño sencillo que combine con la página.\n&gt; No toques los otros bloques de style.css.\n&gt; Muéstrame el diff antes de hacer cualquier commit.\n\n◆ editó index.html (+14 líneas) y style.css (+6)\n◆ ¿hago commit? [sí/no]  sí\n[ia-testimonios 3f8a1b] feat: agregar sección de testimonios\n\nC:\\...\\tortas-el-guero&gt; git diff main..ia-testimonios\n+  &lt;section id=\"testimonios\"&gt;\n+    &lt;h2&gt;Lo que dicen nuestros clientes&lt;/h2&gt;\n+    &lt;p&gt;\"La mejor torta del barrio\" — Laura G.&lt;/p&gt;\n\nC:\\...\\tortas-el-guero&gt; git push -u origin ia-testimonios\n→ PR → revisión → merge (C12-C13)</code></pre><p>Y si la sección no te gusta:</p><pre><code>git switch main\ngit branch -D ia-testimonios   ← la rama desaparece, main intacto</code></pre><p>Experimentaste con red de seguridad (C1). Ese es el punto.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Trabaja en la rama actual de mi repo. Tarea: [describe el cambio concreto]. Criterios: 1) no toques [los archivos o zonas que proteges], 2) respeta el estilo de los archivos existentes, 3) antes de cada commit muéstrame el diff y espera mi aprobación, 4) si necesitas tocar algo fuera de la tarea, dime primero por qué. Empieza por revisar git status y git log para entender el proyecto.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda la práctica de dejar que la IA trabaje en tu repo:", elementos: ["confirmar con git status que el repo está limpio", "crear una rama nueva (git switch -c)", "darle el brief a la IA", "revisar el diff de sus cambios", "aprobar su commit y subir la rama", "abrir PR, revisar y mergear"] },
              { tipo: "completar", frase: "Regla de oro: la IA solo trabaja sobre un repo ____, y siempre en una ____ separada para no tocar main directo.", banco: ["limpio", "rama", "sucio", "copia"], respuestas: ["limpio", "rama"] },
              { tipo: "vf", afirmacion: "Si la IA te pide aprobar su commit y no revisaste el diff, igual debes aprobar para no frenar el flujo.", correcta: false, explicacion: "el diff es tu única forma de saber qué cambió antes de que quede grabado; si no lo viste, pídeselo." },
              { tipo: "multiple", pregunta: "La IA hizo cambios que no pediste, además de la tarea. ¿Qué haces?", opciones: ["Merges igual, total no dañó nada", "Paras, revisas qué tocó de más y le pides que lo revierta antes de seguir", "Borras la rama y empiezas de cero siempre", "Ignoras el diff y confías"], correcta: 1 },
              { tipo: "relacionar", pares: [["git status limpio", "Que la IA trabaje sobre un piso estable"], ["Rama propia", "Aislar su experimento; si falla, se borra la rama"], ["git diff", "Ver exactamente qué cambió antes de aprobar"], ["Tú apruebas el commit", "El control sigue en tus manos, no en la herramienta"]] }
            ]
          },
          {
            id: "m2-c24",
            titulo: "Revisar el trabajo de una IA ejecutora",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Ya dejaste que una IA trabaje sobre tu repo (C23). Ahora la parte que separa a un director real de alguien que solo aprieta botones: <strong>revisar su trabajo como un dev senior</strong>. No se lee todo línea por línea: se revisa con criterio, en cuatro movimientos.</p><ol><li><strong>Mira el mapa, no el detalle.</strong> <code>git diff --stat</code> te dice qué archivos cambió y cuánto. Si tocó un archivo que no estaba en el radar, ya es una alerta.</li><li><strong>Revisa las líneas importantes.</strong> <code>git diff</code> te muestra el cambio exacto. Pregunta por cada uno: ¿lo pedí? ¿tiene sentido? ¿rompe algo?</li><li><strong>Caza sorpresas.</strong> <code>git status</code> te muestra archivos nuevos (untracked) y borrados. Una IA ejecutora puede crear o eliminar archivos sin que se lo pidas — tu trabajo es atraparlo.</li><li><strong>Prueba de verdad.</strong> El diff no basta: abre tu página, corre el proyecto, haz clic. El código que se ve bien puede romper en vivo.</li></ol><p>Y una revisión extra que las ejecutoras agradecen: <strong>pídele que se auto-revise</strong> (el truco de C5 aplicado a todo el cambio). Pero su auto-reporte es opinión, no veredicto: la decisión de mergear es tuya (C13).</p><p>Si algo se ve sospechoso y no entiendes el porqué: pregúntale a la propia IA por cada línea rara, y usa el historial — <code>git log</code> — para ver qué cambió y cuándo.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El trabajo de una IA ejecutora es el <strong>reporte de un empleado nuevo</strong>. No lees cada palabra de su trabajo completo: revisas su lista de entregables (diff --stat), lees las partes importantes (diff), te fijas si trajo algo que no se pidió o se le olvidó algo (status), y pruebas el resultado (correr la página). Un buen jefe no lee todo: <strong>revisa con criterio</strong>. Eso es lo que aprendes hoy.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La revisión completa de lo que la IA hizo en C23:</p><pre><code>C:\\...\\tortas-el-guero&gt; git diff --stat main..ia-testimonios\n index.html | 14 ++++++++++++\n style.css  |  6 ++++++\n 2 files changed, 19 insertions(+)    ← solo 2 archivos, todo agregado\n\nC:\\...\\tortas-el-guero&gt; git status\nOn branch ia-testimonios\nnothing to commit, working tree clean  ← sin archivos raros\n\nC:\\...\\tortas-el-guero&gt; git diff main..ia-testimonios\n+  &lt;section id=\"testimonios\"&gt;\n+    &lt;h2&gt;Lo que dicen nuestros clientes&lt;/h2&gt;\n+    &lt;p&gt;\"La mejor torta del barrio\" — Laura G.&lt;/p&gt;\n\n→ Abres index.html en el navegador... se ve bien\n→ Pruebas la vista móvil... también\n→ APRUEBAS</code></pre><p>La alerta que debes cazar:</p><pre><code>git status\n D style.css             ← borrado SIN que lo pidieras  ⚠\n untracked: footer.html  ← archivo nuevo raro            ⚠</code></pre><p>Si ves eso, no merges: pídele a la IA que restablezca el archivo y justifique lo nuevo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Antes de terminar, haz tu propia revisión: corre git status y git diff, y dime 1) qué archivos cambiaste y cuántas líneas de cada uno, 2) las 3 líneas más importantes de tu cambio y por qué, 3) si creaste, borraste o renombraste archivos que no te pedí, y 4) un resumen de un párrafo de lo que hiciste. NO hagas commit ni push todavía.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "quehace", codigo: "git diff --stat main..rama", pregunta: "<code>git diff --stat main..rama</code> — ¿qué te muestra en un vistazo?", opciones: ["Las líneas exactas de cada cambio", "Qué archivos cambió y cuántas líneas de cada uno", "El historial de commits de la rama", "Los archivos sin rastrear"], correcta: 1 },
              { tipo: "multiple", pregunta: "¿Cuál es la forma completa de revisar el trabajo de una IA ejecutora?", opciones: ["Leer el código línea por línea entero", "Revisar el diff, cazar sorpresas con git status y probar la página corriendo", "Confiar en su auto-reporte", "Revisar solo el mensaje del commit"], correcta: 1 },
              { tipo: "vf", afirmacion: "Si la IA ejecutora borró o creó archivos que no le pediste, eso lo atrapa la revisión con git status.", correcta: true, explicacion: "git status muestra los archivos nuevos y los borrados que el diff por sí solo puede no resaltar." },
              { tipo: "relacionar", pares: [["git diff --stat", "El mapa: qué archivos y cuántas líneas"], ["git diff", "El detalle: líneas exactas del cambio"], ["git status", "Sorpresas: archivos nuevos o borrados"], ["Correr la página", "La prueba de verdad, más allá del código"]] },
              { tipo: "completar", frase: "La revisión no es leer todo: es mirar el ____, leer las partes ____ y probar el resultado en vivo.", banco: ["mapa (diff --stat)", "importantes", "contraseña", "historial"], respuestas: ["mapa (diff --stat)", "importantes"] }
            ]
          },
          {
            id: "m2-c25",
            titulo: "Seguridad: qué nunca le compartes a una IA",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Esta es la lección más cara de toda la materia — literal. Leerla te cuesta cinco minutos; no leerla puede costarte dinero, clientes o el proyecto. Hay cosas que <strong>NUNCA le pegas a una IA</strong>, en ningún chat, agente ni herramienta:</p><ul><li><strong>API keys y tokens.</strong> Una llave de API es dinero y acceso. Si se filtra, alguien puede gastar tu saldo o entrar a tus servicios. Regla: una llave que se filtra es una llave quemada — la única cura es <strong>revocarla y rotarla</strong> (generar una nueva).</li><li><strong>Contraseñas y archivos de secretos.</strong> Tu <code>.env</code> (C3) y tu gestor de contraseñas (A28) existen para que los secretos no anden viajando. Ni un solo valor de ahí al chat.</li><li><strong>Datos personales de clientes o usuarios.</strong> Correos, teléfonos, listas de clientes, datos de pago. No son tuyos para compartir, y en varios países es delito. Jamás le pidas a una IA que procese una lista real de clientes.</li><li><strong>Información de proyectos ajenos.</strong> Si trabajas para un negocio, lo que ves ahí se queda ahí — a menos que te lo autorice explícitamente.</li></ul><p>Dónde se filtran las cosas en la vida real:</p><ul><li>Pegar salidas de terminal sin revisarlas — una línea <code>TOKEN=...</code> se cuela en el mensaje.</li><li>Pedirle a la IA que arregle el login y pegarle las credenciales completas.</li><li>Commitear un <code>.env</code> (C3): el secreto queda en el historial de Git para siempre, aunque borres el archivo.</li><li>Capturas de pantalla de dashboards con datos reales de usuarios.</li><li>Subir un repo con secretos a GitHub y que quede público.</li></ul><p>Reglas de oro que no se negocian:</p><ol><li>Los secretos viven en <code>.env</code> o en tu gestor (A28) — nunca en un mensaje.</li><li>Si una herramienta necesita una llave, configúrala como variable de entorno: lee el <code>.env</code> del sistema, no te lo pegues.</li><li>Usa datos de prueba: <code>test@ejemplo.com</code>, <code>Cliente Demo 1</code>, nunca los reales.</li><li>Antes de pegar cualquier salida de terminal, escanéala con ojos de cazador de secretos.</li><li>Si un secreto se filtró: <strong>revócalo hoy</strong>, no mañana. Rotar es barato; el daño de una llave viva es caro.</li></ol><p>Las herramientas de C21 y C22 van a pedirte acceso a tu repo. Eso está bien — es su trabajo. Lo que no está bien es que tu repo contenga secretos listos para encontrarse. <strong>Un repo con llaves es una bomba; tu .gitignore (C3) y tu revisión (C24) son la seguridad.</strong></p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>El chat con una IA es una <strong>conversación en un restaurante concurrido</strong>: se escucha, se graba y puede repetirse. Nunca sacas ahí tu cartera (llaves API), el directorio de tus clientes (sus datos) ni las llaves del edificio de tu cliente (proyectos ajenos). Y si la cartera se te cae en el restaurante, no basta con recogerla: cambias de cerradura (revocas la llave). En seguridad no hay arrepentimiento: solo prevención y rotación.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Lo que nunca debes hacer — y la alternativa:</p><pre><code>❌ Pegar esto a una IA:\nAPI_KEY=sk-live-9f3e8c2b4a\nPASSWORD=MiContraseña123\n\n✅ Lo correcto: configurar el entorno\n# .env (NUNCA se commitea, C3):\nAPI_KEY=sk-live-9f3e8c2b4a\n\n# La herramienta lee el .env del sistema:\nclaude → \"usa la variable API_KEY de mi entorno\"\n\n✅ Datos de prueba en tu repo:\ncorreo: test@ejemplo.com   (nunca un cliente real)\ncliente: Cliente Demo 1    (nunca la lista de la taquería)</code></pre><p>Y la emergencia real:</p><pre><code>⚠ Te diste cuenta de que pegaste una llave en el chat:\n1. Cierra el chat y no sigas enviando mensajes.\n2. Ve al panel del servicio (OpenAI, Stripe, GitHub…).\n3. REVOCA la llave de inmediato.\n4. Genera una nueva y guárdala en tu gestor (A28).\n\n⚠ El .env se coló a un commit:\n1. REVOCA las llaves (borrar el archivo NO basta:\n   el secreto ya vive en el historial de Git).\n2. git rm .env  y  agrega .env a .gitignore (C3).\n3. Si el repo es público, revoca TAMBIÉN los tokens\n   que alguna vez estuvieron ahí.</code></pre><p>Dos segundos de revocar una llave; cero drama. Ignorarla puede ser el fin de un mes de trabajo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Antes de pedirme credenciales, llaves o datos para hacer tu trabajo, dime si hay una alternativa que no requiera que te los pegue, como variables de entorno o un archivo .env local que lees del sistema. Y si en cualquier momento detectas que un secreto pudo filtrarse, dime exactamente cómo revocarlo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Tu API key se filtró en un chat de IA. ¿Qué haces?", opciones: ["Borro el mensaje y sigo usando la misma llave", "Revoco la llave de inmediato y genero una nueva", "Cambio la contraseña del chat", "Reinicio la computadora"], correcta: 1 },
              { tipo: "completar", frase: "Las API keys y contraseñas viven en tu ____ o en tu gestor de contraseñas (A28); nunca en el ____ de una IA.", banco: [".env", "chat", "README", "historial"], respuestas: [".env", "chat"] },
              { tipo: "vf", afirmacion: "Borrar un archivo .env de un repo no es suficiente: si se subió, el secreto ya está en el historial y hay que revocar la llave.", correcta: true, explicacion: "Git guarda el historial completo; lo que se subió queda ahí aunque borres el archivo." },
              { tipo: "relacionar", pares: [["API key filtrada", "Alguien puede gastar tu saldo o acceder a tus servicios"], ["Datos de clientes reales", "Privacidad ajena y riesgo legal — no son tuyos para compartir"], ["Salida de terminal sin revisar", "Un TOKEN se te cuela en el mensaje sin que lo notes"], ["Revocar una llave", "La única cura para un secreto quemado"]] },
              { tipo: "quehace", codigo: "cat .env", pregunta: "La IA ejecutora te pide: \"corre <code>cat .env</code> y pégame la salida para configurar la integración\". ¿Qué haces?", opciones: ["Corres el comando y le pegas todo el contenido", "Le dices que use las variables de entorno del sistema, sin mostrarle el contenido del .env", "Le pegas solo los nombres de las variables", "Borras el .env para que no se lo pida otra vez"], correcta: 1 }
            ]
          },
          {
            id: "m2-c26",
            titulo: "PRÁCTICA: limpiar tu repo antes de mostrarlo",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Vas a dejar tu repositorio presentable. ¿Para quién? Para cualquiera que lo abra: un cliente, un reclutador, o una IA que entra a trabajar a tu repo (C21). La regla es simple: <strong>desde el primer segundo debe verse orden</strong>. Cinco pasos y terminas con un repo que puedes mostrar sin vergüenza.</p><p><strong>Paso 1 — Mira todo.</strong> Corres <code>git status</code>. Ese comando te muestra el estado completo: archivos modificados, nuevos (untracked) y borrados. Todo lo que Git ve, tú también.</p><p><strong>Paso 2 — Revisa tu escudo.</strong> Tu <code>.gitignore</code> (C3) debe cubrir la basura que aparece en cualquier proyecto: <code>node_modules/</code>, <code>.env</code>, <code>.DS_Store</code>, <code>Thumbs.db</code>, <code>.vscode/</code>. Si algo se te cuela una y otra vez, es porque falta su patrón en el archivo.</p><p><strong>Paso 3 — Decide por cada archivo suelto.</strong> Cada archivo untracked es una decisión: lo quieres y se queda, o no lo quieres y se borra o se ignora. Un repo limpio no tiene archivos que no decidiste. Esa es la diferencia entre una carpeta de trabajo y un repo.</p><p><strong>Paso 4 — Caza secretos (C25).</strong> Busca <code>.env</code>, llaves y contraseñas en tu carpeta. Y revisa tu historial: <code>git log --oneline</code>. Si un secreto ya se commit-eó, borrar el archivo NO basta — el historial lo conserva y la única cura es revocar la llave.</p><p><strong>Paso 5 — Deja todo en orden.</strong> <code>git add .</code> y un commit con mensaje claro (C5). La meta: <code>git status</code> responda <code>nothing to commit, working tree clean</code> y <code>git log --oneline</code> cuente una historia con sentido.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Limpiar tu repo antes de mostrarlo es <strong>recibir invitados a tu casa</strong>. Recoges lo que no quieres que se vea (la basura), guardas lo que vale en su lugar, confirmas que no haya papeles privados tirados en la mesa (los secretos) y dejas la casa en un estado donde cualquiera puede entrar sin tropezarse. Nadie recibe invitados con los cajones abiertos — y nadie muestra un repo con <code>node_modules</code> adentro.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La limpieza completa en una sesión:</p><pre><code>C:\\...\\tortas-el-guero&gt; git status\nOn branch main\nUntracked files:\n  .DS_Store          ← basura del sistema\n  node_modules/      ← basura de dependencias\n  datos-prueba.xlsx  ← ¿esto qué hace aquí?\n  index.html\n\nPaso 2 — agregas los patrones a .gitignore:\n.DS_Store\nnode_modules/\n\nPaso 3 — borras lo que no debe estar:\nrm datos-prueba.xlsx\n\nPaso 4 — revisas que no haya secretos commiteados:\ngit log --oneline\n(1 commit) Versión inicial de mi página personal  ← limpio\n\nPaso 5 — dejas todo en orden:\ngit add .\ngit commit -m \"chore: limpiar repo y actualizar .gitignore\"\ngit status\nOn branch main\nnothing to commit, working tree clean   ← LA META</code></pre><p>Del caos a la meta en cinco pasos. La próxima vez que alguien abra tu repo, lo primero que ve es <code>working tree clean</code> y una historia ordenada.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Revisa mi repositorio con ojo de profesional: dime 1) qué archivos no deberían estar versionados y por qué, 2) si detectas algún secreto o dato sensible en los archivos o en el historial, 3) qué patrones le faltan a mi .gitignore, y 4) si mi historial de commits cuenta una historia clara o conviene reorganizarlo. NO hagas cambios, solo diagnostica.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "Tu repo está listo para mostrarse. ¿Qué te debe responder git status al final de la limpieza?", opciones: ["Untracked files listados", "nothing to commit, working tree clean", "Changes to be committed", "Your branch is up to date"], correcta: 1 },
              { tipo: "completar", frase: "Si un archivo basura aparece una y otra vez en git status, la solución es agregar su patrón al ____ (C3); si un secreto ya se commit-eó, la única cura es ____ (C25).", banco: [".gitignore", "revocar la llave", "borrarlo con rm", "reiniciar Git"], respuestas: [".gitignore", "revocar la llave"] },
              { tipo: "vf", afirmacion: "En un repo limpio, cada archivo untracked es una decisión: o lo quieres versionado, o se borra o se ignora.", correcta: true, explicacion: "la limpieza es decidir por cada archivo, no dejar que la basura se acumule por inercia." },
              { tipo: "relacionar", pares: [["git status", "Ver todo: modificados, nuevos y borrados"], [".gitignore", "El escudo que frena la basura (C3)"], ["git log --oneline", "Revisar el historial buscando secretos"], ["working tree clean", "La meta: un repo que se puede mostrar"]] },
              { tipo: "quehace", codigo: "git status\nOn branch main\nnothing to commit, working tree clean", pregunta: "Corres <code>git status</code> y te responde esto. ¿Qué significa?", opciones: ["Que hay archivos por agregar", "Que tu repo está limpio: no hay cambios pendientes", "Que se borraron archivos sin querer", "Que tu commit falló"], correcta: 1 }
            ]
          },
          {
            id: "m2-c27",
            titulo: "Tu portafolio: 3 proyectos que demuestran nivel",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Tu portafolio es la prueba de que lo sabes hacer — no tu palabra, no tu currículum: <strong>la evidencia</strong>. Y la evidencia funciona mejor con calidad que con cantidad. Tres proyectos bien hechos te posicionan mejor que diez a medio terminar, porque quien te revisa (un cliente, un reclutador) va a abrir en profundidad los dos o tres que le llamen la atención.</p><p>Los tres proyectos que demuestran nivel — y qué prueba cada uno:</p><ul><li><strong>1. Tu página del Mes 1 versionada y publicada.</strong> La que convertiste en repo (C3), commiteaste (C4) y publicaste con GitHub Pages (C8). Prueba que <strong>terminas lo que empiezas</strong> — el punto más raro del mundo.</li><li><strong>2. Un proyecto con lógica real.</strong> Un catálogo, una calculadora, un contador, un organizador de gastos: algo con JavaScript de verdad, no solo una maqueta. Prueba que <strong>diriges IA para resolver problemas</strong>, no solo para llenar pantallas.</li><li><strong>3. Un proyecto ambicioso o real.</strong> Una landing para un negocio conocido, una herramienta que te resuelve algo del día a día, una mini-app útil para alguien más. Prueba <strong>nivel</strong>: que puedes construir algo que otros usarían.</li></ul><p>Los tres comparten el mismo estándar de presentación: README que venda (C14), sitio vivo (C8), historial con mensajes claros (C5) y repo limpio (C26). Y al menos en uno, una rama de feature con PR (C19 y C12) — esa es la prueba de que trabajas como se trabaja en serio.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Tu portafolio es la <strong>vitrina de una pastelería</strong>. Nadie decide por 50 pasteles apilados sin etiquetas; se decide por dos o tres bien presentados, con su nombre, su precio y con ganas de probarlos. Los 50 pasteles de tu carrera están en tu historial de Git; la vitrina solo necesita los tres que hagan decir: <em>de este vendedor quiero comprar</em>.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>Así se ve un portafolio de tres proyectos en tu perfil de GitHub (B29):</p><pre><code>tu-usuario\n│\n├─ mi-primera-pagina      → página personal, publicada (C8)\n│    README con captura y link vivo\n│    6 commits con mensajes claros\n├─ presupuesto-app        → calculadora de gastos con JS\n│    README, demo publicada, .gitignore (C3)\n│    9 commits + rama de feature mergeada por PR\n└─ taqueria-don-luis      → landing real para un negocio\n     README que vende (C14), link vivo\n     12 commits, 2 PRs, cero secretos (C25)</code></pre><p>Fíjate en el patrón: cada repo dice qué es, tiene un link para probarlo y un historial que muestra cómo se construyó. Quien abra cualquiera de los tres entiende qué hiciste, cómo lo hiciste y que quedó publicado.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Con base en lo que sé hacer (página personal con HTML/CSS/JS, Git con ramas y PRs, publicación con GitHub Pages), propón mis 3 proyectos de portafolio: uno que demuestre constancia, uno que demuestre lógica y uno que demuestre nivel. Para cada uno dame: descripción de una línea, qué prueba, qué secciones debe tener su README y los entregables para considerarlo terminado.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es el criterio para tus 3 proyectos de portafolio?", opciones: ["Cuantos más, mejor", "Uno que termines, uno con lógica real y uno que demuestre nivel", "Tres copias de la misma página", "Los más difíciles posibles, aunque queden a medias"], correcta: 1 },
              { tipo: "relacionar", pares: [["Página del Mes 1 publicada", "Prueba que terminas lo que empiezas"], ["Proyecto con lógica real (JS)", "Prueba que resuelves problemas dirigiendo IA"], ["Landing real o herramienta útil", "Prueba nivel: algo que otros usarían"], ["Rama de feature con PR en un repo", "Prueba que trabajas como en un equipo profesional"]] },
              { tipo: "completar", frase: "Tus tres proyectos comparten el estándar de presentación: README que ____ (C14), sitio ____ (C8) e historial con ____ claros (C5).", banco: ["venda", "publicado", "mensajes", "público"], respuestas: ["venda", "publicado", "mensajes"] },
              { tipo: "vf", afirmacion: "Un portafolio de 10 proyectos a medio terminar convence más que 3 terminados y publicados.", correcta: false, explicacion: "quien revisa abre en profundidad lo que le llama la atención; un repo a medias prueba lo contrario de lo que buscas." },
              { tipo: "quehace", codigo: "tu-usuario\n├─ mi-primera-pagina   README + link vivo + 6 commits\n├─ presupuesto-app      README + demo + rama con PR\n└─ taqueria-don-luis    README + link vivo + 12 commits", pregunta: "Revisas un perfil de GitHub con esta estructura. ¿Qué piensa un cliente que lo ve?", opciones: ["Que el dueño no sabe organizar", "Que hay tres proyectos terminados, explicados y publicados", "Que solo hizo páginas de ejemplo", "Que copió todo de IA sin entender nada"], correcta: 1 }
            ]
          },
          {
            id: "m2-c28",
            titulo: "Cómo se ve un repo profesional vs uno de principiante",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Saber reconocer un repo profesional es parte de tu oficio: es el estándar al que te vas a medir. La buena noticia: <strong>se ve a la distancia</strong>. Cuatro diferencias saltan a la vista:</p><ul><li><strong>README.</strong> Profesional: nombre, descripción de qué hace y para quién, captura, tecnologías, cómo correrlo y el link del sitio vivo (B9, C14). Principiante: vacío, o un genérico «mi proyecto» que no dice nada.</li><li><strong>Mensajes de commit (C5).</strong> Profesional: <code>feat:</code>, <code>fix:</code>, <code>docs:</code> — cada commit cuenta qué cambió y por qué. Principiante: <code>update</code>, <code>cambios</code>, <code>ya quedó</code>, un commit gigante con todo junto.</li><li><strong>Historial y ramas (C19, C12).</strong> Profesional: ramas de feature, PRs con revisión, main estable. Principiante: todo directo a main, sin PRs, con commits a medias.</li><li><strong>Orden del repo (C26, C3).</strong> Profesional: <code>.gitignore</code> desde el día uno, sin archivos basura, estructura clara. Principiante: <code>node_modules/</code> subido, un <code>.env</code> a la vista, archivos de prueba regados.</li></ul><p>Ninguna de estas cosas es talento: son <strong>decisiones</strong>. Y las tomas igual de fácil hoy que un dev con diez años. Un repo profesional no se ve así por accidente: se ve así porque alguien decidió que su trabajo merecía presentarse bien.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es la diferencia entre <strong>dos locales en la misma calle</strong>. Uno tiene letrero con el nombre, la vitrina ordenada, el menú con precios y se nota qué vende; el otro no tiene letrero, hay cajas amontonadas en la puerta y no sabes si entras. Venden cosas parecidas; la diferencia es la presentación. Tu repo es tu local: cualquiera puede verlo, así que cualquiera decide con la vista.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>La diferencia en un vistazo — dos historiales:</p><pre><code>PROFESIONAL (git log --oneline)\nfeat: agregar sección de testimonios\nfix: corregir enlace roto de WhatsApp\nstyle: subir contraste del botón en móvil\ndocs: escribir README con captura\nfeat: versión inicial de la página\n\nPRINCIPIANTE\nupdate\ncambios\nfinal\nupdate2\nyo que creo que ya\nasdf</code></pre><p>Y el archivo que separa ambos mundos:</p><pre><code># .gitignore (C3) — presente en el repo profesional:\nnode_modules/\n.env\n.DS_Store\n\n→ en el de principiante: subido a GitHub, con tokens dentro  ⚠ (C25)</code></pre><p>El profesional no es más listo: <strong>tiene mejores hábitos</strong>. Esos hábitos son exactamente lo que has estado practicando todo el mes.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Evalúa mi repositorio como lo haría un dev senior en una entrevista. Califica del 1 al 10: README, mensajes de commit, uso de ramas y PRs, .gitignore, y orden general. Para cada punto dime exactamente qué cambiarías y cómo, ordenado de mayor a menor impacto.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "relacionar", pares: [["README con captura y link vivo", "Repo profesional"], ["git commit -m \"cambios\"", "Repo principiante"], [".gitignore desde el día uno", "Repo profesional"], ["node_modules subido al repo", "Repo principiante"]] },
              { tipo: "completar", frase: "En un repo profesional cada commit cuenta qué ____ y por qué, usando prefijos como ____ (C5); en uno de principiante ves mensajes como ____.", banco: ["cambió", "feat:", "update", "rama"], respuestas: ["cambió", "feat:", "update"] },
              { tipo: "vf", afirmacion: "Un repo profesional se ve así por accidente, por la experiencia del autor.", correcta: false, explicacion: "es el resultado de decisiones conscientes: README, mensajes, ramas y orden — decisiones que tú ya sabes tomar." },
              { tipo: "multiple", pregunta: "Abres un repo y ves un .env subido con tokens. ¿Qué es?", opciones: ["Un detalle sin importancia", "Una bandera roja grave: hay secretos expuestos (C25)", "Algo que cualquier repo tiene", "Prueba de que el autor sabe de seguridad"], correcta: 1 },
              { tipo: "quehace", codigo: "git log --oneline\nfeat: agregar sección de testimonios\nfix: corregir enlace roto de WhatsApp\ndocs: escribir README\nfeat: versión inicial", pregunta: "Este historial pertenece a un repo…", opciones: ["…de principiante: no se entiende", "…profesional: cada commit es un tema con mensaje claro (C5)", "…roto: faltan commits de merge", "…que copió el historial de otro"], correcta: 1 }
            ]
          },
          {
            id: "m2-c29",
            titulo: "Tu flujo de trabajo completo, de idea a publicación",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Hoy juntas todo lo del mes en un solo flujo. Este es <strong>tu oficio de ahora en adelante</strong>: no es una lista de comandos sueltos, es una sola cadena que va de una idea a un sitio publicado. Cada vez que la recorras, repites un ciclo probado:</p><pre><code>IDEA → BRIEF (C15) → RAMA (C19) → LA IA TRABAJA (C23)\n     → REVISAS (C24) → COMMIT (C4, C5) → PUSH (B5)\n     → PR (C12) → MERGE (C13) → PUBLICACIÓN (C8)</code></pre><p>Los momentos donde se decide el resultado son tres, y ninguno es de tecnología:</p><ul><li><strong>El brief (C15).</strong> Qué quieres, para quién, qué NO se toca. Un buen brief evita rehacer el trabajo.</li><li><strong>La revisión (C24).</strong> El mapa del diff, las líneas importantes, las sorpresas del status, y la prueba en vivo. Antes de mergear, tú eres el filtro.</li><li><strong>La publicación (C8, B20).</strong> El flujo no termina en el push: termina cuando el sitio está en vivo y lo abres para confirmarlo.</li></ul><p>Ese es el flujo completo de tu trabajo con IA: <strong>decides, delegas, revisas y publicas</strong>. Para tareas de cinco minutos o proyectos de un mes, la cadena es la misma — solo cambia el tamaño.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es <strong>el recorrido de un platillo en un restaurante bien organizado</strong>: el cliente pide con una receta clara (brief), cada estación trabaja en su rincón sin pisar a la otra (ramas), el auxiliar prepara (la IA), el chef prueba antes de servir (tu revisión), el capitán aprueba que salga a la mesa (merge), y el comensal recibe el platillo servido (la publicación). Un restaurante así sirve igual un café que un banquete — el sistema no cambia, solo el tamaño del pedido.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El ciclo completo, de idea a sitio vivo, en una sesión:</p><pre><code>IDEA: agregar horarios y teléfono a Tortas El Güero\n\nC:\\...\\tortas-el-guero&gt; git switch -c horarios-contacto   ← rama (C19)\nC:\\...\\tortas-el-guero&gt; claude\n&gt; Brief (C15): agrega una sección de horarios y teléfono\n&gt; en la página, sin tocar el resto. Muestra el diff.\n◆ editó index.html (+10 líneas)\n◆ ¿commit? [sí/no]  sí   →   feat: agregar horarios y contacto\n\nC:\\...\\tortas-el-guero&gt; git diff main..horarios-contacto  ← revisas (C24)\nC:\\...\\tortas-el-guero&gt; abres la página en el navegador → se ve bien\n\nC:\\...\\tortas-el-guero&gt; git push -u origin horarios-contacto\n→ abres el PR (C12), lo revisas (C13), merge\n→ main actualizado → GitHub Pages publica (C8, B20)\n→ abres la URL del sitio: los horarios están en vivo  ✓</code></pre><p>De idea a URL viva sin saltarte un paso. Ese recorrido es tu trabajo — y ya lo sabes hacer completo.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Actúa como mi lead developer. Tengo esta tarea: [describe la idea]. Recórrela por mi flujo completo — brief, rama, trabajo de IA, revisión, commit, PR y publicación — y dime: 1) el brief que le darías a la IA, 2) en qué puntos debo revisar yo antes de dar el visto bueno, y 3) qué me puede salir mal en cada etapa y cómo detectarlo.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "ordenar", instruccion: "Acomoda tu flujo de trabajo de idea a publicación:", elementos: ["escribir un brief claro (C15)", "crear una rama de feature (C19)", "dejar que la IA trabaje (C23)", "revisar el diff y probar en vivo (C24)", "hacer commit y push", "abrir PR, revisar y mergear", "publicar el sitio (C8)"] },
              { tipo: "completar", frase: "El flujo no termina en el push: termina cuando el sitio está ____ y lo ____ para confirmarlo.", banco: ["en vivo", "abres", "roto", "commiteado"], respuestas: ["en vivo", "abres"] },
              { tipo: "multiple", pregunta: "¿En qué momento de tu flujo entra tu revisión?", opciones: ["Solo al final, cuando todo está publicado", "En el brief y en el diff, antes de mergear", "Nunca: la IA se revisa sola", "Solo si algo se ve feo"], correcta: 1 },
              { tipo: "vf", afirmacion: "Un brief flojo (C15) se nota después: si el resultado no es lo que querías, muchas veces el error fue del brief, no de la IA.", correcta: true, explicacion: "la calidad del resultado depende más de la claridad de la petición que de la herramienta." },
              { tipo: "quehace", codigo: "git push -u origin horarios-contacto", pregunta: "Después del push, la IA te dice «tu sitio ya está actualizado». ¿Qué revisas?", opciones: ["Confías: el push publica solo", "Abres la URL del sitio publicado para confirmar que el cambio está en vivo", "Nada: el push solo sube código, revisas git log", "Borras la rama"], correcta: 1 }
            ]
          },
          {
            id: "m2-c30",
            titulo: "Repaso + arranque del proyecto final del mes",
            proximamente: false,
            secciones: [
              {
                tipo: "concepto",
                titulo: "Concepto",
                html: "<p>Lección 30: no hay concepto nuevo. Hay dos cosas: <strong>demostrar que te quedó todo el mes</strong> y <strong>arrancar el proyecto que lo cierra</strong>. El Mes 2, materia C, en una sola página:</p><p><strong>El mapa de lo que ya sabes:</strong></p><ul><li><strong>Versionar sin miedo (C1)</strong> — instalaste Git (C2), convertiste tu página en repo (C3) y tomaste tu primer commit (C4).</li><li><strong>Hablar claro con el historial (C5)</strong> — mensajes de commit que cuentan qué cambió y por qué.</li><li><strong>Trabajar con ramas (C19)</strong> y entregar por PRs (C12) con revisión antes de mergear (C13).</li><li><strong>Delegar de verdad (C21–C24)</strong> — herramientas IA que entran a tu repo, y tu revisión como filtro (C24).</li><li><strong>Proteger lo que importa (C25)</strong> — secretos que nunca viajan, llaves que se revocan.</li><li><strong>Presentar tu trabajo (C26–C29)</strong> — repo limpio, portafolio de 3 proyectos, estándar profesional y el flujo completo.</li></ul><p><strong>Y ahora, el proyecto final del mes.</strong> Este es el entregable que demuestra todo:</p><pre><code>PROYECTO FINAL — MES 2 (Materia C)\n\nUn repositorio PÚBLICO en GitHub con:\n✓ README profesional (B9, C14): qué hace, captura,\n  cómo correrlo, tecnologías y link del sitio vivo.\n✓ Al menos 10 commits con mensajes claros (C5),\n  que cuenten cómo se construyó.\n✓ Una rama de feature (C19) mergeada vía PULL REQUEST (C12),\n  revisada antes del merge (C13).\n✓ .gitignore desde el día uno (C3) y cero secretos (C25).\n✓ El sitio publicado con GitHub Pages (C8, B20).\n\nENTREGAS: la URL del repo y la URL del sitio vivo.</code></pre><p>Puede ser tu página del Mes 1 mejorada o un proyecto nuevo. La regla de oro: <strong>cualquiera de tus compañeros debería poder abrir el repo, leer el README y visitar el sitio funcionando</strong> sin preguntarte nada.</p>"
              },
              {
                tipo: "analogia",
                titulo: "Analogía",
                html: "<p>Es el <strong>examen de conducir de tu mes</strong>. No te preguntan qué sabes de mecánica: te piden que manejes un recorrido completo — salir, avanzar, respetar señales, estacionar — y te evalúan viéndote manejar. Tu proyecto final es eso: todo lo que aprendiste, en una sola ruta completa, de idea a sitio vivo.</p>"
              },
              {
                tipo: "practica",
                titulo: "Cómo se ve en la práctica",
                html: "<p>El arranque del proyecto en 4 movimientos — hoy mismo:</p><pre><code>1. ELIGE el proyecto (tu página del Mes 1 mejorada, o algo nuevo).\n   Decide con criterio de portafolio (C27): ¿qué prueba?\n\n2. REPO PÚBLICO:\n   git init (C3) · .gitignore al día · git add . ·\n   git commit -m \"feat: versión inicial del proyecto final\"\n   → sube a GitHub como repo público (B5)\n\n3. PRIMERA RAMA CON PR:\n   git switch -c mejora-destacada\n   → pide a la IA el cambio (C23), revisa (C24),\n   → push + PR (C12) → revisa de nuevo → merge (C13)\n\n4. PÚBLICA:\n   GitHub Pages (C8, B20) → abre la URL → confirma\n   que el sitio está en vivo y el README dice cómo verlo.</code></pre><p>Del 1 al 4 recorres cada lección del mes en orden. Si te atoras, el mapa de arriba es tu índice: vuelve a la lección exacta.</p>"
              },
              {
                tipo: "prompt",
                titulo: "Díselo a la IA",
                html: "<blockquote><p>\"Hazme un examen de autoevaluación del Mes 2, materia C (lecciones C1 a C29): 10 preguntas mezclando conceptos de versionado, ramas, PRs, mensajes de commit, revisión de IA, seguridad y portafolio. Hazme UNA pregunta a la vez, dime la respuesta correcta después de que yo responda, y al final dame una calificación con los temas que debo repasar citando la lección exacta.\"</p></blockquote>"
              }
            ],
            ejercicios: [
              { tipo: "multiple", pregunta: "¿Cuál es el entregable final del proyecto del mes (C30)?", opciones: ["Un repositorio privado sin publicar", "Un repo público con README profesional, 10+ commits, un PR mergeado y el sitio publicado con GitHub Pages", "Tres proyectos terminados a la vez", "Un examen escrito de 50 preguntas"], correcta: 1 },
              { tipo: "completar", frase: "El proyecto final exige al menos ____ commits con mensajes ____ (C5), una rama de feature mergeada vía ____ (C12) y el sitio publicado con ____ (C8).", banco: ["10", "claros", "Pull Request", "GitHub Pages", "5", "secretos"], respuestas: ["10", "claros", "Pull Request", "GitHub Pages"] },
              { tipo: "relacionar", pares: [["C1–C4", "Versionar: instalar, primer repo, primer commit"], ["C5", "Mensajes de commit que cuentan historia"], ["C12–C13", "PR: entregar y revisar antes de mergear"], ["C24", "Revisar el trabajo de una IA ejecutora"], ["C25", "Qué nunca le compartes a una IA"], ["C26–C29", "Repo limpio, portafolio, estándar y flujo completo"]] },
              { tipo: "vf", afirmacion: "Si tu repo final tiene 1 commit gigante con todo junto, cumple con la parte de «10 commits con mensajes claros» siempre que el mensaje sea descriptivo.", correcta: false, explicacion: "la exigencia es de historial, no de descripción: 10+ commits que cuenten la construcción del proyecto (C5)." },
              { tipo: "ordenar", instruccion: "Acomoda el arranque del proyecto final:", elementos: ["elegir el proyecto con criterio de portafolio (C27)", "crear el repo público con .gitignore y primer commit", "crear una rama de feature y dejar que la IA trabaje", "revisar el diff y mergear por PR", "publicar con GitHub Pages y confirmar el sitio vivo"] },
              { tipo: "quehace", codigo: "git log --oneline\nfeat: versión inicial del proyecto final\nfix: corregir enlace roto\nfeat: agregar sección de testimonios\nchore: limpiar .gitignore", pregunta: "Revisas tu historial antes de entregar el proyecto final. ¿Qué concluyes?", opciones: ["Faltan commits: deberías tener más de 4", "Está listo si sumas los demás commits y cada mensaje cuenta un tema (C5)", "El historial está mal porque mezcla feat y fix", "Debes borrar el historial y empezar de nuevo"], correcta: 1 },
              { tipo: "multiple", pregunta: "¿Qué revisa tu compañero cuando abre tu repo final?", opciones: ["Solo el código, nada más", "El README para entender qué es, el historial para ver cómo se construyó y el link para probarlo", "El número de estrellas", "Los mensajes de commit en inglés"], correcta: 1 },
              { tipo: "vf", afirmacion: "El flujo completo del proyecto final — idea, brief, rama, revisión, PR y publicación — es el mismo flujo de C29, solo que a escala de proyecto.", correcta: true, explicacion: "la cadena es la misma para una tarea chica y para un proyecto de un mes (C29); el proyecto final lo recorre entero." }
            ]
          }
        ]
      }
    }
  }
};
