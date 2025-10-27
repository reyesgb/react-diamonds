import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import SeguridadImg from "../assets/images/Servicios/seguridad.jpg";

function DetallesSeguridad() {
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  const servicio = {
    id: 3,
    titulo: "Ciberseguridad",
    descripcion:
      "Protegemos tus sistemas y datos frente a amenazas digitales con tecnología de vanguardia.",
    detalleExtendido:
      "Ofrecemos auditorías de seguridad, gestión de vulnerabilidades, encriptación avanzada y capacitación para tus empleados. Nuestro objetivo es blindar tus sistemas ante ataques cibernéticos y pérdidas de información.",
    precio: 90000,
    socios: ["Pablo Reyes"],
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Img src={SeguridadImg} alt={servicio.titulo} style={{ borderRadius: "10px" }} />
          </Card>
        </Col>
        <Col md={6}>
          <h1>{servicio.titulo}</h1>
          <p>{servicio.descripcion}</p>
          <p>{servicio.detalleExtendido}</p>
          <h4>💰 Precio: ${servicio.precio}</h4>
          <p><strong>👥 Socio recomendado:</strong> {servicio.socios.join(", ")}</p>
          <div className="d-flex gap-3 mt-4">
            <Button variant="primary" onClick={() => agregarAlCarrito(servicio)}>Añadir al carrito 🛒</Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>← Volver atrás</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetallesSeguridad;
