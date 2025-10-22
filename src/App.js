import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPacrima from "./components/NavbarPacrima";
import Footer from "./components/Footer";

// Páginas
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavbarPacrima />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
