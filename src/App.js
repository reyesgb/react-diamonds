import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Servicios from "./pages/Servicios";
import DetallesServicio from "./pages/DetallesServicio";



function Home() {
  return (
    <Container className="mt-4">
      <h1>Bienvenido a Pacrima</h1>
      <p>Soluciones digitales y tecnológicas a tu medida.</p>
    </Container>
  );
}

function Nosotros() {
  return (
    <Container className="mt-4">
      <h1>Nosotros</h1>
      <p>Somos un equipo de profesionales dedicados al desarrollo web, diseño y ciberseguridad.</p>
    </Container>
  );
}

function Contacto() {
  return (
    <Container className="mt-4">
      <h1>Contacto</h1>
      <p>Puedes escribirnos a contacto@diamonds.com o llamarnos al +56 9 1234 5678.</p>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">DIAMONDS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/servicios" element={<Servicios />} />
  <Route path="/servicios/:id" element={<DetallesServicio />} />
  <Route path="/nosotros" element={<Nosotros />} />
  <Route path="/contacto" element={<Contacto />} />
</Routes>

    </Router>
  );
}

export default App;
