🚀 FiveStock - Sistema de Gestión de Inventarios

FiveStock es una aplicación web moderna para la gestión de inventarios, diseñada para que empresas o negocios puedan administrar productos, categorías, marcas y personal, así como controlar entradas y salidas mediante un Kardex. Además, permite generar reportes PDF con información detallada del stock.

🧩 Características Principales
🔐 Autenticación de Usuarios

Sistema de inicio de sesión y registro.

Roles y permisos personalizados según el tipo de usuario.

📊 Dashboard Principal

Vista general de la empresa.

Accesos directos a las principales funcionalidades.

📦 Gestión de Productos

CRUD completo (crear, leer, actualizar, eliminar).

Datos: descripción, stock, precios de compra y venta, etc.

Asignación de categorías y marcas.

🏷️ Gestión de Categorías y Marcas

Creación, edición y eliminación.

Organización eficiente del inventario.

👥 Gestión de Personal

Administración de usuarios del sistema.

Asignación de roles y permisos por módulo.

📈 Kardex de Inventario

Registro detallado de entradas y salidas.

Historial completo de movimientos.

🧾 Generación de Reportes

Exportación en formato PDF:

Stock actual.

Productos bajo el mínimo.

Kardex por producto.

Inventario valorado.

🌗 Tema Claro y Oscuro

Interfaz adaptable a las preferencias del usuario.

🛠️ Tecnologías Utilizadas
🖥️ Frontend

⚛️ React (v19) – Biblioteca para construir interfaces modernas.

⚡ Vite – Herramienta de desarrollo rápida y ligera.

💅 Styled Components – Estilización basada en componentes.

🧭 React Router (v7) – Enrutamiento de vistas.

🔁 React Query (v5) – Gestión del estado del servidor y caché.

🧠 Zustand – Estado global simple y escalable.

📝 React Hook Form – Manejo eficiente de formularios.

☁️ Backend (BaaS)

🐘 Supabase – Plataforma open source basada en PostgreSQL, con autenticación y almacenamiento integrados.

📚 Librerías Adicionales

📄 @react-pdf/renderer → Generación de PDFs desde el cliente.

📊 @tanstack/react-table → Tablas y datagrids.

💬 SweetAlert2 → Alertas y modales personalizados.

🎨 React Icons → Amplio set de íconos vectoriales.

🧱 Estructura del Proyecto
/src
├── assets/             # Archivos estáticos (imágenes, JSON, etc.)
├── components/         # Componentes reutilizables
│   ├── atomos/         # Componentes básicos
│   ├── moleculas/      # Compuestos por átomos
│   ├── organismos/     # Componentes complejos
│   └── templates/      # Plantillas de páginas
├── context/            # Contextos globales (AuthContext, etc.)
├── hooks/              # Hooks personalizados
├── pages/              # Vistas principales
├── routers/            # Configuración de rutas
├── store/              # Estado global con Zustand
├── styles/             # Estilos globales, temas y variables
└── supabase/           # Configuración y funciones CRUD de Supabase

⚙️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente 👇

1️⃣ Clonar el repositorio
git clone https://github.com/santinofernandez14/inventarios-pro.git
cd FiveStock

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto con tus credenciales de Supabase:

VITE_APP_SUPABASE_URL=TU_URL_DE_SUPABASE
VITE_APP_SUPABASE_ANON_KEY=TU_API_KEY_DE_SUPABASE

4️⃣ Ejecutar el proyecto
npm run dev


La aplicación estará disponible en 👉 http://localhost:5173