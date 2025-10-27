import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import SoporteImg from "../assets/images/Servicios/soporte.jpg";

function DetallesSoporte() {
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  const servicio = {
    id: 6,
    titulo: "Soporte Técnico",
    descripcion:
      "Brindamos asistencia técnica personalizada para resolver problemas informáticos y mantener tus sistemas operativos.",
    detalleExtendido:
      "Ofrecemos mantenimiento preventivo, reparación de hardware, optimización de software y soporte remoto. Nuestro objetivo es mantener tu entorno tecnológico estable y seguro.",
    precio: 50000,
    socios: ["Pablo Reyes"],
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Img src={SoporteImg} alt={servicio.titulo} style={{ borderRadius: "10px" }} />
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

export default DetallesSoporte;
