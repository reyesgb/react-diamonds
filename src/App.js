import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/estilos.css";

// Contexto de autenticación
import { useAuth } from "./context/AuthContext";

// Componentes
import NavbarPacrima from "./components/NavbarPacrima";
import Footer from "./components/Footer";


// Páginas principales
import OrdersPage from "./pages/OrdersPage";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Carrito from "./pages/Carrito";

// Detalles de servicios
import ServicioDetalle from "./pages/ServicioDetalle";
//import DetallesDesarrollo from "./pages/DetallesDesarrollo";
//import DetallesUX from "./pages/DetallesUX";
//import DetallesSeguridad from "./pages/DetallesSeguridad";
//import DetallesApps from "./pages/DetallesApps";
//import DetallesCloud from "./pages/DetallesCloud";
//import DetallesSoporte from "./pages/DetallesSoporte";

// Perfiles de socios
import PerfilPablo from "./pages/PerfilPablo";
import PerfilCristian from "./pages/PerfilCristian";
import PerfilMatias from "./pages/PerfilMatias";

// Panel de administración
import AdminDashboard from "./pages/AdminDashboard";
import AdminServicios from "./pages/AdminServicios";
import AdminPanel from "./pages/AdminPanel";
import AdminProductos from "./pages/AdminProductos";

// Blog
import Blog from "./pages/Blog";
import DetalleBlog from "./pages/DetalleBlog";

// Admin Usuarios
import AdminUsuarios from "./pages/AdminUsuarios";

import AdminSocios from "./pages/AdminSocios";
import AdminContactos from "./pages/AdminContactos";



// =======================
// RUTAS PROTEGIDAS
// =======================

const PrivateRoute = ({ children }) => {
  const { isUser, loading } = useAuth();

  if (loading) return null; // puedes poner un spinner aquí

  return isUser ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();

  if (loading) return null;

  // Si no es admin, lo mando al inicio
  return isAdmin ? children : <Navigate to="/" />;
};


// =======================
// APP PRINCIPAL
// =======================

function App() {
  return (
    <Router>
      <NavbarPacrima />
      <div className="content-wrapper">
        <Routes>
          {/* Públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />

          {/* Detalle único de servicio (dinámico por ID) */}
          <Route path="/servicios/:id" element={<ServicioDetalle />} />

          {/* Panel de administración*/}
          <Route
            path="/admin/panel"
            element={
              <AdminRoute>
                <AdminPanel />
              </AdminRoute>
            }
          />


          {/* Carrito (si quieres también puedes protegerlo con PrivateRoute) */}
          <Route path="/carrito" element={<Carrito />} />

          {/* Perfiles de socios */}
          <Route path="/persona1" element={<PerfilPablo />} />
          <Route path="/persona2" element={<PerfilCristian />} />
          <Route path="/persona3" element={<PerfilMatias />} />

          <Route path="/Cristian" element={<PerfilCristian />} />
          <Route path="/Matias" element={<PerfilMatias />} />
          <Route path="/Pablo" element={<PerfilPablo />} />

          <Route path="/socios/pablo" element={<PerfilPablo />} />
          <Route path="/socios/cristian" element={<PerfilCristian />} />
          <Route path="/socios/matias" element={<PerfilMatias />} />


          <Route path="/admin/ordenes-servicio" element={<AdminRoute><OrdersPage /></AdminRoute>} />

          {/* ADMIN – protegidas por rol */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/servicios"
            element={
              <AdminRoute>
                <AdminServicios />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/usuarios"
            element={
              <AdminRoute>
                <AdminUsuarios />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/ordenes-servicio"
            element={
              <AdminRoute>
                <OrdersPage />
              </AdminRoute>
            }
          />


          {/* Cambié esta ruta para evitar duplicidad con /admin/dashboard */}
          <Route
            path="/admin/panel"
            element={
              <AdminRoute>
                <AdminPanel />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/usuarios"
            element={
              <AdminRoute>
                <AdminUsuarios />
              </AdminRoute>
            }
          />


          <Route
            path="/admin/productos"
            element={
              <AdminRoute>
                <AdminProductos />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/socios"
            element={
              <AdminRoute>
                <AdminSocios />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/contactos"
            element={
              <AdminRoute>
                <AdminContactos />
              </AdminRoute>
            }
          />


          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<DetalleBlog />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
