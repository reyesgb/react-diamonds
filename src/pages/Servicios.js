import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const servicios = [
  { id: 1, titulo: "Desarrollo Web", descripcion: "Sitios modernos, responsivos y adaptados a tu negocio.", imagen: "https://source.unsplash.com/400x250/?website,code" },
  { id: 2, titulo: "Diseño UX/UI", descripcion: "Interfaces centradas en la experiencia del usuario.", imagen: "https://source.unsplash.com/400x250/?design,ui" },
  { id: 3, titulo: "Ciberseguridad", descripcion: "Protección de datos, auditorías y gestión de accesos.", imagen: "https://source.unsplash.com/400x250/?cybersecurity,hacking" },
  { id: 4, titulo: "Consultoría Cloud", descripcion: "Migración y optimización de sistemas en la nube.", imagen: "https://source.unsplash.com/400x250/?cloud,server" },
  { id: 5, titulo: "Aplicaciones Móviles", descripcion: "Desarrollo de apps nativas e híbridas.", imagen: "https://source.unsplash.com/400x250/?mobile,app" },
  { id: 6, titulo: "Soporte Técnico", descripcion: "Mantenimiento preventivo y asistencia remota.", imagen: "https://source.unsplash.com/400x250/?support,tech" },
];

function Servicios() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Nuestros Servicios</h1>
      <Row>
        {servicios.map((servicio) => (
          <Col key={servicio.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img variant="top" src={servicio.imagen} alt={servicio.titulo} />
              <Card.Body>
                <Card.Title>{servicio.titulo}</Card.Title>
                <Card.Text>{servicio.descripcion}</Card.Text>
                <Button as={Link} to={`/servicios/${servicio.id}`} variant="primary">
                  Ver Detalle
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Servicios;
