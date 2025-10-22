import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/estilos.css";

// Componentes
import NavbarPacrima from "./components/NavbarPacrima";
import Footer from "./components/Footer";

// Páginas
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import DetallesServicio from "./pages/DetallesServicio";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
    <Router>
      {/* Navbar global */}
      <NavbarPacrima />

      {/* Contenido principal */}
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicio/:id" element={<DetallesServicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* Footer global */}
      <Footer />
    </Router>
  );
}

export default App;
