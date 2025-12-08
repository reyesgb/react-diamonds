// src/components/NavbarPacrima.jsx
import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/images/logo.png";

function NavbarPacrima() {
  const navigate = useNavigate();

  // Carrito
  const { carrito, totalItems } = useCarrito();

  // AuthContext (⛔ antes usabas isLoggedIn, que no existe)
  const { isUser, isAdmin, user, logout } = useAuth();

  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  // Servicios + socios para el buscador
  const servicios = [
    { nombre: "Desarrollo Web", ruta: "/servicios/desarrollo-web" },
    { nombre: "Diseño UX/UI", ruta: "/servicios/diseno-ux" },
    { nombre: "Ciberseguridad", ruta: "/servicios/ciberseguridad" },
    { nombre: "Aplicaciones Móviles", ruta: "/servicios/apps" },
    { nombre: "Consultoría Cloud", ruta: "/servicios/cloud" },
    { nombre: "Soporte Técnico", ruta: "/servicios/soporte" },
    { nombre: "Pablo Reyes", ruta: "/socios/pablo" },
    { nombre: "Cristian Padilla", ruta: "/socios/cristian" },
    { nombre: "Matías Vargas", ruta: "/socios/matias" },
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

  // Nombre a mostrar en el saludo
  const displayName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "Usuario";

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
        <Container>

          {/* LOGO */}
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

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-lg-center gap-2">

              {/* Links principales */}
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

              {/* Link al panel admin solo si es admin */}
              {isAdmin && (
                <Nav.Link as={Link} to="/admin/dashboard">
                  Panel Admin
                </Nav.Link>
              )}

              <div
                className="vr d-none d-lg-block mx-2"
                style={{ height: "24px", opacity: 0.5 }}
              />

              {/* Auth: si hay sesión, mostrar saludo + logout;
                  si no, login / register */}
              {isUser ? (
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted small">
                    👋 {isAdmin ? "Admin" : displayName}
                  </span>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </Button>
                </div>
              ) : (
                <div className="d-flex align-items-center gap-2">
                  <Nav.Link as={Link} to="/login">
                    Iniciar sesión
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Registrar
                  </Nav.Link>
                </div>
              )}

              <div
                className="vr d-none d-lg-block mx-2"
                style={{ height: "24px", opacity: 0.5 }}
              />

              {/* CARRITO */}
              <Nav.Link as={Link} to="/carrito">
                🛒 ({totalItems ?? carrito.length})
              </Nav.Link>

              {/* BUSCADOR */}
              <Form className="d-flex ms-lg-3 mt-3 mt-lg-0 position-relative">
                <FormControl
                  type="search"
                  placeholder="Buscar servicios o socios..."
                  value={busqueda}
                  onChange={manejarCambio}
                  style={{ borderRadius: "20px", padding: "6px 12px" }}
                />
                {sugerencias.length > 0 && (
                  <div
                    className="position-absolute bg-white border mt-1 w-100 rounded shadow-sm"
                    style={{ zIndex: 10, top: "100%" }}
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Pequeños estilos para el hover del buscador */}
      <style>{`
        .hover-bg:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
}

export default NavbarPacrima;
