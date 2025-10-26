import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavbarPacrima() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  // 🔹 Servicios disponibles
  const servicios = [
    { titulo: "Desarrollo Web", subtitulo: "Creación de sitios modernos", link: "/servicios/desarrollo-web" },
    { titulo: "Diseño UX/UI", subtitulo: "Experiencia y usabilidad", link: "/servicios/diseno-ux" },
    { titulo: "Ciberseguridad", subtitulo: "Protección de sistemas", link: "/servicios/ciberseguridad" },
    { titulo: "Aplicaciones Móviles", subtitulo: "Apps Android / iOS", link: "/servicios/apps" },
    { titulo: "Consultoría Cloud", subtitulo: "Migración y optimización en la nube", link: "/servicios/cloud" },
    { titulo: "Soporte Técnico", subtitulo: "Asistencia remota y presencial", link: "/servicios/soporte" },
  ];

  // 🔹 Socios (ahora llevan directo a su detalle)
  const socios = [
    { titulo: "Pablo Reyes", subtitulo: "Desarrollador Web Fullstack", link: "/socios/pablo" },
    { titulo: "Cristian Padilla", subtitulo: "Diseñador UX/UI", link: "/socios/cristian" },
    { titulo: "Matías Vargas", subtitulo: "Consultor en Ciberseguridad", link: "/socios/matias" },
  ];

  // 🔍 Combinar ambos arrays
  const datosBusqueda = [...servicios, ...socios];

  // 📦 Detectar cambios en el input
  const handleChange = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);

    if (texto.length > 0) {
      const coincidencias = datosBusqueda.filter((item) =>
        item.titulo.toLowerCase().includes(texto.toLowerCase())
      );
      setSugerencias(coincidencias);
    } else {
      setSugerencias([]);
    }
  };

  // 🚀 Navegar al hacer clic o Enter
  const handleSelect = (link) => {
    navigate(link);
    setBusqueda("");
    setSugerencias([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sugerencias.length > 0) {
      handleSelect(sugerencias[0].link);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Pacrima
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate("/servicios")}>Servicios</Nav.Link>
            <Nav.Link onClick={() => navigate("/nosotros")}>Nosotros</Nav.Link>
            <Nav.Link onClick={() => navigate("/contacto")}>Contacto</Nav.Link>
          </Nav>

          {/* 🔎 Buscador Predictivo */}
          <Form className="position-relative" onSubmit={handleSubmit} style={{ width: "250px" }}>
            <FormControl
              type="search"
              placeholder="Buscar..."
              value={busqueda}
              onChange={handleChange}
              className="me-2"
              autoComplete="off"
            />
            {sugerencias.length > 0 && (
              <ListGroup
                className="position-absolute w-100"
                style={{
                  top: "100%",
                  zIndex: 10,
                  maxHeight: "250px",
                  overflowY: "auto",
                }}
              >
                {sugerencias.map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    onClick={() => handleSelect(item.link)}
                  >
                    <strong>{item.titulo}</strong>
                    <br />
                    <small className="text-muted">{item.subtitulo}</small>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPacrima;
