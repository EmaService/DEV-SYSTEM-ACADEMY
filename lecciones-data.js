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
