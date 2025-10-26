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
      <Container fluid className="px-4">
        {/* IZQUIERDA */}
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="fw-bold me-3">
            Pacrima
          </Navbar.Brand>
          <Nav className="me-3">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>

          {/* Separador vertical 1 */}
          <div
            style={{
              borderLeft: "1px solid #ccc",
              height: "30px",
              margin: "0 20px",
            }}
          ></div>
        </div>

        {/* DERECHA */}
        <div className="d-flex align-items-center ms-auto gap-3">
          <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>

          {/* Separador vertical 2 */}
          <div
            style={{
              borderLeft: "1px solid #ccc",
              height: "25px",
            }}
          ></div>

          <Nav.Link as={Link} to="/register">Registrar</Nav.Link>
          <Nav.Link as={Link} to="/carrito" className="fw-semibold">
            🛒 ({carrito.length})
          </Nav.Link>

          {/* Buscador */}
          <div className="position-relative" style={{ width: "250px" }}>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar..."
                value={busqueda}
                onChange={manejarCambio}
                className="rounded-pill px-3"
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
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarPacrima;
