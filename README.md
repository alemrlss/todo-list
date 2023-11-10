# ToDo List App

Esta es una aplicación de lista de tareas desarrollada en JavaScript vanilla y construida con Webpack. Permite a los usuarios organizar tareas en proyectos, marcar tareas como favoritas, completarlas, editarlas y eliminarlas.

## Funcionalidades

- **Crear Proyectos:** Puedes organizar tus tareas creando proyectos. Por ejemplo, podrías tener un proyecto llamado "Matemáticas" para tus tareas de matemáticas.
- **Agregar Tareas al Proyecto:** Dentro de cada proyecto, puedes agregar nuevas tareas relacionadas.
- **Marcar como Favoritas:** Destaca las tareas más importantes marcándolas como favoritas.
- **Marcar como Completadas:** Indica que una tarea ha sido completada.
- **Editar Tareas:** Modifica los detalles de una tarea existente.
- **Eliminar Tareas:** Elimina tareas que ya no necesitas.

## Tecnologías Utilizadas

- JavaScript
- Webpack
- Uniqid (para la generación de identificadores únicos)

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
- `dist/`: Carpeta generada por Webpack, que contiene los archivos construidos.

## Configuración y Despliegue

1. **Instalación de Dependencias:**
   ```bash
   npm install

## Tener en cuenta

- Al hacer algun cambio al repositorio se debe ejecutar npm run build para efectuar los cambios en la carpeta dist. 
- Para poder ver los cambios locales abrir el archivo index.html en la carpeta dist con LiveServer o algun otro plugin semejante