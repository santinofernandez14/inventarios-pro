# 🧾 FiveStock - Sistema de Gestión de Inventarios

## 📋 Descripción General
FiveStock es una aplicación web diseñada para la gestión de inventarios, permitiendo a los usuarios administrar productos, categorías, marcas, personal y realizar un seguimiento de las entradas y salidas de inventario a través de un Kardex. Además, ofrece la generación de reportes detallados.

---


## 🚀 Características Principales


🔐 **Autenticación de Usuarios**

Sistema de inicio de sesión y registro de usuarios, con diferentes roles y permisos.

📊 **Dashboard Principal**

Visualización de información general de la empresa y accesos directos a las principales funcionalidades.

📦 **Gestión de Productos**

CRUD completo para productos, incluyendo descripción, stock, precios de venta y compra, etc.

Asignación de categorías y marcas.

🏷️ **Gestión de Categorías y Marcas**

Creación, edición y eliminación de categorías y marcas para una mejor organización de los productos.

👥 **Gestión de Personal**

Administración de usuarios (personal) con asignación de roles y permisos específicos para cada módulo del sistema.

📈 **Kardex de Inventario**

Registro de entradas y salidas de productos, manteniendo un historial detallado de los movimientos de inventario.

🧾 **Generación de Reportes**

Reportes en formato PDF para visualizar el stock actual, productos bajo el mínimo, kardex por producto e inventario valorado.

🌗 **Tema Claro y Oscuro**

Interfaz adaptable a las preferencias del usuario.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

🖥️ Frontend

React (v19): Biblioteca para construir interfaces de usuario.

Vite: Herramienta de desarrollo frontend moderna y rápida.

Styled Components: Para la estilización de componentes.

React Router (v7): Para el enrutamiento en la aplicación.

React Query (v5): Para la gestión del estado del servidor, fetching, caching y actualización de datos.

Zustand: Para la gestión del estado global de la aplicación.

React Hook Form: Para la gestión de formularios.

☁️ Backend (BaaS)

Supabase: Plataforma open source que provee base de datos PostgreSQL, autenticación y almacenamiento.

📚 Librerías Adicionales

@react-pdf/renderer: Para la generación de documentos PDF en el cliente.

@tanstack/react-table: Para la creación de tablas y datagrids.

SweetAlert2: Para la creación de alertas y modales atractivos.

React Icons: Para la inclusión de iconos en la aplicación.

📁 Estructura del Proyecto
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

⚙️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1️⃣ Clonar el repositorio
```bash
git clone 
cd pps_pf

```


## 2️⃣ Instalar dependencias
```bash
npm install

```

## 3️⃣ Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto y añade las credenciales de tu proyecto de Supabase:

VITE_APP_SUPABASE_URL=TU_URL_DE_SUPABASE
VITE_APP_SUPABASE_ANON_KEY=TU_API_KEY_DE_SUPABASE

## 4️⃣ Ejecutar el proyecto
npm run dev


La aplicación estará disponible en
👉 http://localhost:5173

