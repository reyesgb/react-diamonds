import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/estilos.css";

// Componentes
import NavbarPacrima from "./components/NavbarPacrima";
import Footer from "./components/Footer";
import Carrito from "./pages/Carrito"; // <-- añadido

// Páginas principales
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Detalles de servicios
import DetallesDesarrollo from "./pages/DetallesDesarrollo";
import DetallesUX from "./pages/DetallesUX";
import DetallesSeguridad from "./pages/DetallesSeguridad";
import DetallesApps from "./pages/DetallesApps";
import DetallesCloud from "./pages/DetallesCloud";
import DetallesSoporte from "./pages/DetallesSoporte";

// Perfiles de socios
import PerfilPablo from "./pages/PerfilPablo";
import PerfilCristian from "./pages/PerfilCristian";
import PerfilMatias from "./pages/PerfilMatias";

// ...existing code...

function App() {
  return (
    <Router>
      <NavbarPacrima />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Detalles individuales */}
          <Route path="/servicios/desarrollo-web" element={<DetallesDesarrollo />} />
          <Route path="/servicios/diseno-ux" element={<DetallesUX />} />
          <Route path="/servicios/ciberseguridad" element={<DetallesSeguridad />} />
          <Route path="/servicios/apps" element={<DetallesApps />} />
          <Route path="/servicios/cloud" element={<DetallesCloud />} />
          <Route path="/servicios/soporte" element={<DetallesSoporte />} />
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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
// ...existing code...