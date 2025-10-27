## 📦 Funcionalidades Principales

### 🏠 Sitio Público
- **Inicio:** Presentación general de la agencia.
- **Servicios:** Sección con descripción y detalle de cada servicio.
- **Nosotros:** Información sobre los socios fundadores.
- **Contacto:** Formulario o información de contacto.
- **Blog:** Publicaciones informativas y artículos relacionados con tecnología.

### 💼 Panel Administrativo
- Acceso exclusivo para administradores.
- Edición de precios y servicios.
- Gestión local de productos (con `localStorage`).
- Cierre de sesión seguro.

### 👥 Autenticación
- Registro de usuarios con validación de campos.
- Inicio de sesión de usuarios o administradores.
- Persistencia de sesión mediante `localStorage`.

### 🛒 Carrito de Compras
- Agregar servicios al carrito desde su detalle.
- Calcular total automáticamente.
- Eliminar elementos o vaciar carrito completo.
- Acceso restringido (solo usuarios logeados pueden comprar).

### 🔍 Buscador Predictivo
- Búsqueda en tiempo real de **servicios y socios**.
- Redirección directa al detalle correspondiente.

---

## ⚙️ Hooks Utilizados

- **useState:** Manejo de estados locales (formularios, filtros, búsquedas, etc.).
- **useEffect:** Carga inicial de datos y sincronización con `localStorage`.
- **useContext:** Consumo de contextos globales (`AuthContext`, `CarritoContext`).
- **useNavigate:** Navegación programática entre rutas (React Router).

---

## 🧠 Estructura Lógica

- **AuthContext:** Controla el inicio y cierre de sesión, almacenamiento de usuarios y verificación de roles.
- **CarritoContext:** Gestiona los productos agregados, totales y acciones de compra.
- **NavbarPacrima:** Cambia dinámicamente según si el usuario está logeado.
- **AdminDashboard:** Panel interactivo con edición de servicios y precios.
- **Blog.js / DetalleBlog.js:** Sistema básico de blog con artículos estáticos y navegación individual.

---

## 🗺️ Mapa de Sitio

Inicio (/)
├── Servicios (/servicios)
│ ├── Detalle Desarrollo Web (/servicios/desarrollo-web)
│ ├── Detalle UX/UI (/servicios/diseno-ux)
│ ├── Detalle Ciberseguridad (/servicios/ciberseguridad)
│ ├── Detalle Apps (/servicios/apps)
│ ├── Detalle Cloud (/servicios/cloud)
│ └── Detalle Soporte (/servicios/soporte)
│
├── Nosotros (/nosotros)
│ ├── Perfil Pablo (/socios/pablo)
│ ├── Perfil Cristian (/socios/cristian)
│ └── Perfil Matías (/socios/matias)
│
├── Contacto (/contacto)
├── Blog (/blog)
│ └── Detalle Blog (/blog/:id)
├── Carrito (/carrito)
├── Login (/login)
├── Register (/register)
└── Admin (/admin)
├── Dashboard
├── Servicios
└── Productos


---

## 🔧 Próximos Pasos

- Conectar con una **API real** para guardar usuarios y servicios.
- Integrar **base de datos **.
- Añadir **autenticación JWT**.
- Implementar **pasarela de pagos simulada**.
- Ampliar el **panel administrativo** para control de usuarios y pedidos.

---

## 👥 Equipo de Desarrollo

**Integrantes:**
- Cristian Padilla Arriagada – Desarrollador Frontend / UX / Lógica de Contextos
- Pablo Reyes – Full Stack Developer / Infraestructura
- Matías Vargas – Seguridad Informática / Testing

---

## 🏁 Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/react-diamonds.git

2.
    npm install

3.
    npm start

El sitio estará disponible en http://localhost:3000

Proyecto desarrollado con fines académicos — Duoc UC, Evaluación 2 (Ingeniería en Informática).