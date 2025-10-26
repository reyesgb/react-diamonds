import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

function NavbarPacrima() {
  const navigate = useNavigate();
  const { carrito } = useCarrito();
  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  const servicios = [
    { nombre: "Desarrollo Web", ruta: "/servicios/desarrollo-web" },
    { nombre: "Diseño UX/UI", ruta: "/servicios/diseno-ux" },
    { nombre: "Ciberseguridad", ruta: "/servicios/ciberseguridad" },
    { nombre: "Aplicaciones Móviles", ruta: "/servicios/apps" },
    { nombre: "Consultoría Cloud", ruta: "/servicios/cloud" },
    { nombre: "Soporte Técnico", ruta: "/servicios/soporte" },
    { nombre: "Pablo Reyes", ruta: "/nosotros#pablo" },
    { nombre: "Cristian Padilla", ruta: "/nosotros#cristian" },
    { nombre: "Matías Vargas", ruta: "/nosotros#matias" },
  ];

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    if (valor.trim() === "") {
      setSugerencias([]);
    } else {
      const filtradas = servicios.filter((s) =>
        s.nombre.toLowerCase().includes(valor.toLowerCase())
      );
      setSugerencias(filtradas);
    }
  };

  const manejarSeleccion = (ruta) => {
    navigate(ruta);
    setBusqueda("");
    setSugerencias([]);
  };
return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Pacrima</Navbar.Brand>
        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
          <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Registrar</Nav.Link>
          <Nav.Link as={Link} to="/carrito">🛒 ({carrito.length})</Nav.Link>
        </Nav>
      </Container>

      <div className="position-relative w-50 mx-auto mt-3">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar servicios o socios..."
            value={busqueda}
            onChange={manejarCambio}
          />
        </Form>

        {sugerencias.length > 0 && (
          <div
            className="position-absolute bg-white border mt-1 w-100 rounded shadow-sm"
            style={{ zIndex: 10 }}
          >
            {sugerencias.map((s, i) => (
              <div
                key={i}
                className="p-2 hover-bg"
                style={{ cursor: "pointer" }}
                onClick={() => manejarSeleccion(s.ruta)}
              >
                {s.nombre}
              </div>
            ))}
          </div>
        )}
      </div>
    </Navbar>
  );
}

export default NavbarPacrima;