import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Desarrollo Web",
      descripcion: "Creamos sitios modernos, responsivos y optimizados.",
      imagen: "https://picsum.photos/400/250?random=1",
      link: "/detalle-desarrollo",
    },
    {
      id: 2,
      titulo: "Diseño UX/UI",
      descripcion: "Diseños centrados en el usuario, usabilidad y experiencia.",
      imagen: "https://picsum.photos/400/250?random=2",
      link: "/detalle-ux",
    },
    {
      id: 3,
      titulo: "Ciberseguridad",
      descripcion: "Protección de datos, auditorías y seguridad digital.",
      imagen: "https://picsum.photos/400/250?random=3",
      link: "/detalle-seguridad",
    },
    {
      id: 4,
      titulo: "Aplicaciones Móviles",
      descripcion: "Desarrollamos apps nativas e híbridas para Android e iOS.",
      imagen: "https://picsum.photos/400/250?random=4",
      link: "/detalle-apps",
    },
    {
      id: 5,
      titulo: "Consultoría Cloud",
      descripcion: "Migramos y optimizamos tus sistemas en la nube.",
      imagen: "https://picsum.photos/400/250?random=5",
      link: "/detalle-cloud",
    },
    {
      id: 6,
      titulo: "Soporte Técnico",
      descripcion: "Asistencia remota y presencial para tus sistemas.",
      imagen: "https://picsum.photos/400/250?random=6",
      link: "/detalle-soporte",
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Nuestros Servicios</h1>
      <Row>
        {servicios.map((servicio) => (
          <Col key={servicio.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={servicio.imagen}
                alt={servicio.titulo}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{servicio.titulo}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {servicio.descripcion}
                </Card.Text>
                <Button variant="primary" href={servicio.link}>
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
