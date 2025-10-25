import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

// 📸 Importamos las imágenes locales
import DevImg from "../assets/images/Servicios/dev.jpg";
import UXImg from "../assets/images/Servicios/ux.jpg";
import SeguridadImg from "../assets/images/Servicios/seguridad.jpg";
import MarketingImg from "../assets/images/Servicios/marketing.jpg";
import CloudImg from "../assets/images/Servicios/datos.jpg"; // para consultoría cloud
import SoporteImg from "../assets/images/Servicios/soporte.jpg";

function Servicios() {
  const navigate = useNavigate();
  const location = useLocation();

  // 📌 Leer parámetro de búsqueda desde la URL
  const query = new URLSearchParams(location.search);
  const termino = query.get("search") || "";
  const [busqueda, setBusqueda] = useState(termino);

  useEffect(() => {
    setBusqueda(termino);
  }, [termino]);

  // 🧩 Lista de servicios
  const servicios = [
    {
      id: 1,
      titulo: "Desarrollo Web",
      descripcion: "Creamos sitios modernos, responsivos y optimizados para tu negocio.",
      imagen: DevImg,
      link: "/servicios/desarrollo-web",
    },
    {
      id: 2,
      titulo: "Diseño UX/UI",
      descripcion: "Diseños centrados en la usabilidad y experiencia de usuario.",
      imagen: UXImg,
      link: "/servicios/diseno-ux",
    },
    {
      id: 3,
      titulo: "Ciberseguridad",
      descripcion: "Protección de datos, auditorías y defensa contra amenazas digitales.",
      imagen: SeguridadImg,
      link: "/servicios/ciberseguridad",
    },
    {
      id: 4,
      titulo: "Aplicaciones Móviles",
      descripcion: "Desarrollamos apps nativas e híbridas para Android e iOS.",
      imagen: MarketingImg, // la más parecida
      link: "/servicios/apps",
    },
    {
      id: 5,
      titulo: "Consultoría Cloud",
      descripcion: "Migramos y optimizamos tus sistemas en la nube.",
      imagen: CloudImg,
      link: "/servicios/cloud",
    },
    {
      id: 6,
      titulo: "Soporte Técnico",
      descripcion: "Asistencia remota y presencial para tus sistemas.",
      imagen: SoporteImg,
      link: "/servicios/soporte",
    },
  ];

  // 🔍 Filtramos los servicios según lo buscado
  const resultados = servicios.filter((servicio) =>
    servicio.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Nuestros Servicios</h1>

      <Row>
        {resultados.length > 0 ? (
          resultados.map((servicio) => (
            <Col key={servicio.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{servicio.titulo}</Card.Title>
                  <Card.Text className="flex-grow-1">{servicio.descripcion}</Card.Text>
                  <Button variant="primary" onClick={() => navigate(servicio.link)}>
                    Ver Detalle
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No se encontraron resultados.</p>
        )}
      </Row>
    </Container>
  );
}

export default Servicios;
