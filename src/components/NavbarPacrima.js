import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import Logo from "../assets/images/logo.png"; // 👈 nuevo logo

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
    if (valor.trim() === "") setSugerencias([]);
    else {
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
        {/* LOGO Y NOMBRE */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Data Diamonds Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold fs-5 text-dark">Data Diamonds</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center gap-3">
          {/* LINKS PRINCIPALES */}
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
          <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

          <div
            className="vr mx-2"
            style={{ height: "24px", opacity: "0.5" }}
          ></div>

          {/* LOGIN Y REGISTRO */}
          <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
          <Nav.Link as={Link} to="/register">Registrar</Nav.Link>

          <div
            className="vr mx-2"
            style={{ height: "24px", opacity: "0.5" }}
          ></div>

          {/* CARRITO */}
          <Nav.Link as={Link} to="/carrito">🛒 ({carrito.length})</Nav.Link>

          {/* BUSCADOR */}
          <Form className="d-flex ms-3 position-relative">
            <FormControl
              type="search"
              placeholder="Buscar..."
              value={busqueda}
              onChange={manejarCambio}
              style={{ borderRadius: "20px", padding: "6px 12px" }}
            />
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
          </Form>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarPacrima;
