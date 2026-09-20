# EXAMEN DEL MES 2 — Git, GitHub y el trabajo real con código

**40 preguntas · Teoría y práctica · Aprobatorio: 70/100**
**Cada pregunta vale 2.5 puntos.**

> Notación: `✔` = respuesta correcta · `👤` = respuesta del alumno.
> Cuando ambas marcas están en la misma opción, el alumno acertó.

**Resultado de rayfg96@gmail.com — presentado el 12 de septiembre de 2026: 37/40 = 93/100 · APROBADO**

---

## BLOQUE A — Git (14 preguntas)

**1.** ¿Cuál es el problema de fondo que resuelve Git?
- a) Hacer el código más rápido
- b) Registrar cada cambio del proyecto y poder volver a cualquier punto ✔ 👤
- c) Publicar sitios web en internet
- d) Comprimir archivos para que ocupen menos

**2.** ¿Dónde vive el historial completo de un repositorio?
- a) En GitHub
- b) En la carpeta oculta `.git` ✔ 👤
- c) En un archivo `historial.log`
- d) En la memoria RAM mientras el proyecto está abierto

**3.** Borras la carpeta `.git` de tu proyecto. ¿Qué pasa?
- a) Se borran todos los archivos del proyecto
- b) Pierdes el historial pero conservas los archivos actuales ✔ 👤
- c) El proyecto deja de funcionar
- d) Git la regenera automáticamente

**4.** Ordena el recorrido de un cambio en Git:
- a) Staging → Working Directory → Repository
- b) Working Directory → Staging → Repository ✔ 👤
- c) Repository → Staging → Working Directory
- d) Working Directory → Repository → Staging

**5.** ¿Para qué sirve el área de staging?
- a) Para respaldar los archivos antes de editarlos
- b) Para elegir qué cambios entran en el próximo commit ✔ 👤
- c) Para comprimir el historial
- d) Para sincronizar con GitHub

**6.** Editaste `index.html` y `styles.css`, pero solo corriste `git add index.html`. Haces commit. ¿Qué se guarda?
- a) Los dos archivos
- b) Solo `index.html` ✔ 👤
- c) Ninguno, falta agregar ambos
- d) Solo `styles.css`

**7.** ¿Cuál es un buen mensaje de commit?
- a) `cambios`
- b) `update v2 final`
- c) `fix: corregir enlace roto del botón de WhatsApp` ✔ 👤
- d) `asdf`

**8.** ¿Qué archivo le dice a Git qué NO debe rastrear?
- a) `.gitconfig`
- b) `.gitignore` ✔ 👤
- c) `.gitmodules`
- d) `package.json`

**9.** ¿Cuál es el archivo que JAMÁS debe subirse a un repositorio público?
- a) `README.md`
- b) `.gitignore`
- c) `.env` con llaves y contraseñas ✔ 👤
- d) `index.html`

**10.** Quieres deshacer un commit que **ya compartiste** con tu equipo. ¿Qué usas?
- a) `git reset --hard`
- b) `git revert` ✔ 👤
- c) `git stash`
- d) `git clean -fd`

**11.** ¿Qué diferencia hay entre `git reset --soft` y `git reset --hard`?
- a) Ninguna, son alias del mismo comando
- b) `--soft` conserva tus cambios en el área de trabajo; `--hard` los destruye ✔
- c) `--soft` borra los cambios; `--hard` los conserva 👤
- d) `--soft` afecta al remoto; `--hard` solo al local

*(Falló. `--soft` mueve el puntero pero deja los cambios listos para recommitear; `--hard` borra todo sin retorno.)*

**12.** ¿Para qué sirve una rama (branch)?
- a) Para hacer respaldos automáticos
- b) Para trabajar en algo nuevo sin tocar la versión que ya funciona ✔ 👤
- c) Para dividir el repositorio en carpetas
- d) Para dar permisos a otros colaboradores

**13.** ¿Cuándo ocurre un conflicto de merge?
- a) Cuando dos personas trabajan en archivos distintos
- b) Cuando dos ramas modificaron las mismas líneas de un archivo ✔ 👤
- c) Cuando el repositorio remoto está caído
- d) Cuando el mensaje de commit está vacío

**14.** Estás a media tarea, sin querer commitear, y necesitas cambiar de rama urgentemente. ¿Qué comando te salva?
- a) `git commit -m "wip"`
- b) `git stash` ✔ 👤
- c) `git reset --hard`
- d) `git branch -d`

## BLOQUE B — GitHub (14 preguntas)

**15.** ¿Cuál es la diferencia entre Git y GitHub?
- a) Son el mismo producto con dos nombres
- b) Git es el programa local; GitHub es el servicio web que aloja repositorios ✔ 👤
- c) Git es de paga y GitHub gratuito
- d) Git sirve para código y GitHub para documentación

**16.** ¿Puedes usar Git sin internet?
- a) No, requiere conexión permanente
- b) Sí, Git es local; solo `push` y `pull` necesitan red ✔ 👤
- c) Solo si tienes una licencia offline
- d) Únicamente para leer el historial

**17.** ¿Qué hace `git remote add origin <url>`?
- a) Sube tu proyecto a GitHub
- b) Registra en tu repo local la dirección de su copia remota ✔ 👤
- c) Descarga un repositorio ajeno
- d) Crea el repositorio en GitHub

**18.** Hiciste cambios, guardaste los archivos y corriste `git push`, pero en GitHub no aparece nada. ¿Cuál es la causa más probable?
- a) GitHub tarda en actualizar
- b) Falta hacer `git commit`: push sube commits, no archivos sueltos ✔ 👤
- c) El repositorio está en privado
- d) Falta ejecutar `git init` otra vez

**19.** ¿Qué hace `git clone`?
- a) Duplica una rama dentro del mismo repositorio
- b) Descarga una copia completa de un repositorio remoto, con su historial ✔ 👤
- c) Copia archivos entre carpetas locales
- d) Crea una rama nueva a partir de main

**20.** Git rechaza tu push con `non-fast-forward`. ¿Qué significa?
- a) Tu conexión es lenta
- b) El remoto tiene commits que tú no tienes; primero haz `pull` ✔ 👤
- c) Tu token expiró
- d) El repositorio excedió su tamaño

**21.** ¿Qué es un Pull Request?
- a) Una petición para descargar un repositorio
- b) Una propuesta de cambios lista para revisión antes de integrarse ✔ 👤
- c) Un respaldo automático del repositorio
- d) Una solicitud de permisos al dueño

**22.** ¿Para qué sirve un fork?
- a) Para dividir un archivo en partes
- b) Para tener tu propia copia del proyecto de alguien más y trabajar en ella ✔ 👤
- c) Para borrar el historial de un repositorio
- d) Para crear ramas protegidas

**23.** ¿Qué es GitHub Pages?
- a) Un editor de código en el navegador
- b) Un servicio para publicar sitios web gratis desde tu repositorio ✔ 👤
- c) La documentación oficial de Git
- d) Un sistema de wikis internas

**24.** ¿Cuál es el propósito principal de los Issues?
- a) Reportar fallas de la plataforma GitHub
- b) Llevar el registro de tareas, errores y mejoras del proyecto ✔ 👤
- c) Solicitar acceso a un repositorio privado
- d) Gestionar el cobro de suscripciones

**25.** En un README, ¿qué hace `## Instalación`?
- a) Ejecuta el proceso de instalación
- b) Crea un encabezado de segundo nivel ✔ 👤
- c) Genera un enlace a la documentación
- d) Comenta la línea para que no se muestre

**26.** ¿Qué implica la licencia MIT en un proyecto?
- a) Que nadie puede usar el código sin pagar
- b) Que cualquiera puede usar, modificar y vender el código conservando el aviso de copyright ✔
- c) Que todo proyecto derivado debe ser también open source 👤
- d) Que el código pertenece a GitHub

*(Falló. Esa última es la GPL, no la MIT. La MIT es permisiva: casi todo se vale mientras se conserve la atribución.)*

**27.** ¿Qué NUNCA debes subir a un repositorio, ni siquiera privado?
- a) Imágenes pesadas
- b) Llaves de API, tokens y contraseñas ✔ 👤
- c) Archivos de documentación
- d) El archivo `.gitignore`

**28.** ¿Para qué sirve la protección de ramas en GitHub?
- a) Para cifrar el código del repositorio
- b) Para impedir cambios directos en ramas críticas y exigir revisión ✔ 👤
- c) Para respaldar las ramas automáticamente
- d) Para limitar el número de ramas del proyecto

## BLOQUE C — Construye con IA II (12 preguntas)

**29.** ¿Por qué versionar cambia la forma en que trabajas con IA?
- a) Porque la IA responde más rápido en repositorios
- b) Porque puedes experimentar sin miedo: si empeora, vuelves atrás ✔ 👤
- c) Porque reduce el costo por token
- d) Porque la IA comete menos errores

**30.** ¿Qué comando te muestra exactamente qué líneas cambió la IA?
- a) `git log`
- b) `git diff` ✔ 👤
- c) `git status`
- d) `git show-changes`

**31.** Vas a pedirle a la IA un rediseño grande de tu página. ¿Qué haces ANTES?
- a) Duplicar la carpeta del proyecto
- b) Hacer un commit para tener un punto de retorno seguro ✔ 👤
- c) Cerrar todas las pestañas del editor
- d) Crear una cuenta nueva de GitHub

**32.** ¿Cuál es el mejor uso de `git diff --staged` trabajando con IA?
- a) Subir los cambios más rápido
- b) Pegárselo a la IA para que escriba un mensaje de commit preciso ✔ 👤
- c) Revertir todos los cambios
- d) Comprimir el historial

**33.** La IA te entregó código y dice que "ya quedó arreglado". ¿Qué haces?
- a) Confías y haces push
- b) Revisas el diff y lo pruebas antes de aceptarlo ✔ 👤
- c) Le pides que lo repita para confirmar
- d) Lo comparas con otra IA

**34.** ¿Qué convención de mensajes de commit usa prefijos como `feat:`, `fix:` y `docs:`?
- a) Semantic Versioning
- b) Conventional Commits ✔ 👤
- c) GitFlow
- d) Keep a Changelog

**35.** Le pides a la IA un cambio y te responde con el archivo completo modificado. ¿Cuál es el riesgo principal?
- a) Que el archivo pese más
- b) Que haya reescrito o eliminado partes que funcionaban sin avisarte ✔ 👤
- c) Que el formato de indentación cambie
- d) Que tarde más en generarse

**36.** ¿Qué NO debes compartirle nunca a una IA?
- a) La estructura de tus carpetas
- b) Tus llaves de API, tokens y contraseñas reales ✔ 👤
- c) El contenido de tu README
- d) Tus mensajes de commit

**37.** ¿Cuál es la ventaja de trabajar en una rama cuando una IA hace cambios grandes?
- a) La IA trabaja más rápido en ramas
- b) Si el resultado no sirve, borras la rama y `main` queda intacta ✔ 👤
- c) Los commits ocupan menos espacio
- d) GitHub cobra menos por rama

**38.** ¿Qué diferencia principal hay entre `merge` y `rebase` al integrar una rama?
- a) `merge` conserva la historia tal como ocurrió; `rebase` la reescribe en línea recta ✔
- b) `merge` borra la rama y `rebase` la conserva 👤
- c) `merge` es local y `rebase` es remoto
- d) No hay diferencia, son sinónimos

*(Falló. Ninguno borra ramas por sí mismo: la diferencia está en la forma del historial resultante.)*

**39.** Un repositorio que se ve profesional, ¿qué tiene que uno de principiante no?
- a) Más de mil commits
- b) README claro, `.gitignore`, commits con mensajes descriptivos y sin secretos ✔ 👤
- c) Muchas ramas abiertas
- d) Código escrito completamente a mano

**40.** ¿Cuál es el flujo correcto para publicar un cambio en tu sitio de GitHub Pages?
- a) Editar → push → commit → add
- b) Editar → `git add` → `git commit` → `git push` ✔ 👤
- c) Editar → `git clone` → `git push`
- d) Editar → `git pull` → `git stash`

---

## Resultado

| Bloque | Aciertos |
|---|---|
| A — Git | 13 / 14 |
| B — GitHub | 13 / 14 |
| C — Construye con IA II | 11 / 12 |
| **Total** | **37 / 40** |

**Calificación: 93 / 100 — APROBADO**

**Preguntas falladas:** 11 (`reset --soft` vs `--hard`), 26 (licencia MIT vs GPL) y 38 (`merge` vs `rebase`).

**Observación del sistema:** manejo sólido del flujo diario de Git y del criterio para revisar trabajo de IA. Las tres fallas caen en el mismo patrón: distinciones finas entre herramientas que se parecen. Se recomienda repasar A15 (`reset`), B27 (licencias) y el apartado de rebase de A19. Progresión respecto al Mes 1: de 88 a 93.
