# Frontend Project

## Descripción

Este proyecto frontend está desarrollado con **Angular** y tiene como objetivo gestionar usuarios y tareas. Permite realizar operaciones como la creación de usuarios, la visualización de tareas, la adición de tareas nuevas y la actualización del estado de las tareas.

### Tecnologías

- **Angular 19.x**: Framework para el desarrollo de aplicaciones web.
- **RxJS**: Biblioteca para la programación reactiva usando Observables.
- **HTML/SCSS**: Para la estructura y el diseño de la interfaz de usuario.
- **SCSS**: Preprocesador de CSS para un diseño más limpio y modular.

### Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión recomendada: 14.x o superior)
- **Angular CLI** (versión recomendada: 19.x)

### Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone <URL del repositorio>
    ```

2. Navega al directorio del frontend:
    ```bash
    cd frontend
    ```

3. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    ng serve
    ```

   Esto iniciará la aplicación en `http://localhost:4200`.

### Estructura del Proyecto

- **src/app/components/**: Componentes reutilizables de la interfaz de usuario.
- **src/app/services/**: Servicios para gestionar la lógica de negocio y las interacciones con la API (simulada con datos mockeados).
- **src/app/mock-data.ts**: Contiene datos simulados de usuarios y tareas.
- **src/app/app.component.ts**: Componente principal de la aplicación.
- **src/styles.scss**: Archivo global de estilos SCSS.

### Servicios

- **MockService**: Proporciona operaciones para obtener, crear y actualizar usuarios y tareas. Los datos provienen de un archivo `mock-data.ts`.

### Funcionalidades

1. **Visualización de Usuarios**: Muestra una lista de usuarios con su nombre, correo electrónico y rol.
2. **Creación de Usuarios**: Permite agregar nuevos usuarios.
3. **Visualización de Tareas**: Muestra una lista de tareas con su estado y usuario asignado.
4. **Adición de Tareas**: Permite agregar nuevas tareas.
5. **Actualización de Estado de Tareas**: Cambia el estado de las tareas entre `PENDING`, `IN_PROGRESS`, y `COMPLETED`.
