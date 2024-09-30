This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# ICL-Guru-NextJS

## Tecnologías
- Next.js
- Redux Toolkit
- React js
- CSS Modules: lo utilicé para definir estilos específicos para algunos componentes.

## Dependencias instaladas
Aquí tienes la lista de dependencias enumeradas de manera ordenada:

1. **@popperjs/core**  
   **Descripción**: Biblioteca para crear elementos emergentes, como tooltips y popovers, en aplicaciones web.

2. **@react-pdf/renderer**  
   **Descripción**: Permite generar documentos PDF en aplicaciones React, útil para crear informes o facturas.

3. **@reduxjs/toolkit**  
   **Descripción**: Herramienta oficial de Redux que simplifica la configuración del store y la gestión del estado.

4. **@splidejs/react-splide**  
   **Descripción**: Un componente de carrusel y slider para React, que facilita la creación de presentaciones de imágenes y contenido.

5. **axios**  
   **Descripción**: Biblioteca para hacer solicitudes HTTP, utilizada para interactuar con APIs de manera sencilla.

6. **bootstrap**  
   **Descripción**: Framework CSS para el desarrollo de interfaces responsivas y atractivas.

7. **bootstrap-icons**  
   **Descripción**: Conjunto de iconos diseñados para usarse con Bootstrap, que facilita la incorporación de iconos en la UI.

8. **jwt-decode**  
   **Descripción**: Biblioteca para decodificar tokens JWT (JSON Web Tokens) y extraer información útil de ellos.

9. **next**  
   **Descripción**: Framework de React para el desarrollo de aplicaciones y sitios web, que incluye características como renderizado del lado del servidor y generación de sitios estáticos.

10. **react**  
    **Descripción**: Biblioteca principal para construir interfaces de usuario en aplicaciones web.

11. **react-dom**  
    **Descripción**: Proporciona métodos específicos para interactuar con el DOM en aplicaciones React.

12. **react-hook-form**  
    **Descripción**: Biblioteca para gestionar formularios en React de manera eficiente y con menos código, facilitando la validación y el manejo de datos.

13. **react-redux**  
    **Descripción**: Conexión entre React y Redux, que permite acceder al store de Redux desde componentes React.

14. **react-toastify**  
    **Descripción**: Componente de notificaciones que permite mostrar mensajes emergentes de forma sencilla y personalizable en aplicaciones React.

15. **rsuite**  
    **Descripción**: Conjunto de componentes de UI para React que incluye elementos como tablas, formularios y modales, diseñado para aplicaciones empresariales. 

---

Esta enumeración clara facilita la lectura y comprensión de cada dependencia y su propósito en el proyecto.

## Estructura del proyecto (archivos y carpetas)
/src    
 ├── /app                   # Contiene las rutas y la lógica de la aplicación
 ├      ├── layout.jsx      # Componente reutilizable, en este caso el encabezado y el menú lateral.
 ├      ├── page.jsx        # Es el archivo núcleo (index) de la app. En este proyecto, el archivo de inicio es la página de inicio de sesión.
 ├      ├── /globals.css    # En este archivo definimos los estilos globales.
 ├      ├── /metadata.js    # Configuración de los metadatos
 ├      ├── /store.js       # Archivo donde se establece la estructura del store de Redux. Organiza el manejo del estado de la aplicación y facilita la gestión de la lógica para la autenticación, pacientes, clínicas, cuentas y cálculos.
 ├      ├── /accounts       # Componente para la gestión de cuentas
 ├      ├── /calculations   # Componente para la gestión de cálculos
 ├      ├── /patients       # Componente para la gestión de pacientes
 ├      ├── /clinics        # Componente para la gestión de clínicas
 ├      ├── /login          # Componente de inicio de sesión
 ├      ├── /my-account     # Componente para el perfil del usuario
 ├── /components            # Contiene componentes reutilizables
 ├── /reduxSlices           # Contiene los slices de Redux que manejan el estado global de la aplicación: pacientes, clínicas, cuentas y cálculos.
 ├── /services              # Contiene archivos donde se gestiona la autenticación y las solicitudes API.
 ├── /utils                 # Este archivo contiene la gestión de Tokens y la autenticación de usuarios.
