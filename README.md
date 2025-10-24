FiveStock - Sistema de Gestión de Inventarios
FiveStock es una aplicación web diseñada para la gestión de inventarios, permitiendo a los usuarios administrar productos, categorías, marcas, personal y realizar un seguimiento de las entradas y salidas de inventario a través de un Kardex. Además, ofrece la generación de reportes detallados.
Características Principales
•	Autenticación de Usuarios: Sistema de inicio de sesión y registro de usuarios, con diferentes roles y permisos.
•	Dashboard Principal: Visualización de información general de la empresa y accesos directos a las principales funcionalidades.
•	Gestión de Productos:
o	CRUD completo para productos, incluyendo descripción, stock, precios de venta y compra, etc.
o	Asignación de categorías y marcas.
•	Gestión de Categorías y Marcas:
o	Creación, edición y eliminación de categorías y marcas para una mejor organización de los productos.
•	Gestión de Personal:
o	Administración de usuarios (personal) con asignación de roles y permisos específicos para cada módulo del sistema.
•	Kardex de Inventario:
o	Registro de entradas y salidas de productos, manteniendo un historial detallado de los movimientos de inventario.
•	Generación de Reportes:
o	Reportes en formato PDF para visualizar el stock actual, productos bajo el mínimo, kardex por producto e inventario valorado.
•	Tema Claro y Oscuro: Interfaz adaptable a las preferencias del usuario.
Tecnologías Utilizadas
Este proyecto fue desarrollado utilizando las siguientes tecnologías:
•	Frontend:
o	React (v19): Biblioteca para construir interfaces de usuario.
o	Vite: Herramienta de desarrollo frontend moderna y rápida.
o	Styled Components: Para la estilización de componentes.
o	React Router (v7): Para el enrutamiento en la aplicación.
o	React Query (v5): Para la gestión del estado del servidor, fetching, caching, y actualización de datos.
o	Zustand: Para la gestión del estado global de la aplicación.
o	React Hook Form: Para la gestión de formularios.
•	Backend (BaaS):
o	Supabase: Plataforma open source que provee base de datos PostgreSQL, autenticación, y almacenamiento.
•	Librerías Adicionales:
o	@react-pdf/renderer: Para la generación de documentos PDF en el cliente.
o	@tanstack/react-table: Para la creación de tablas y datagrids.
o	SweetAlert2: Para la creación de alertas y modales atractivos.
o	React Icons: Para la inclusión de iconos en la aplicación.
Estructura del Proyecto
El proyecto está organizado de la siguiente manera:
/src
├── assets/             # Archivos estáticos como imágenes y JSON
├── components/         # Componentes reutilizables
│   ├── atomos/         # Componentes más pequeños y básicos
│   ├── moleculas/      # Componentes compuestos por átomos
│   ├── organismos/     # Componentes más complejos
│   └── templates/      # Plantillas de páginas
├── context/            # Contexto de React (ej. AuthContext)
├── hooks/              # Hooks personalizados
├── pages/              # Vistas principales de la aplicación
├── routers/            # Configuración de rutas
├── store/              # Stores de Zustand para el estado global
├── styles/             # Estilos globales, temas y variables
└── supabase/           # Configuración y funciones CRUD de Supabase
Instalación y Configuración
Sigue estos pasos para ejecutar el proyecto en tu entorno local:
1.	Clonar el repositorio:
2.	git clone [https://github.com/jnzader/pf_pps.git](https://github.com/jnzader/pps_pf.git)
cd pps_pf
3.	Instalar dependencias:
npm install
4.	Configurar variables de entorno: Crea un archivo .env en la raíz del proyecto y añade las credenciales de tu proyecto de Supabase:
5.	VITE_APP_SUPABASE_URL=TU_URL_DE_SUPABASE
6.	VITE_APP_SUPABASE_ANON_KEY=TU_API_KEY_DE_SUPABASE
7.	Ejecutar el proyecto:
npm run dev
La aplicación estará disponible en http://localhost:5173.


