import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import AppsImg from "../assets/images/Servicios/marketing.jpg";

function DetallesApps() {
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  const servicio = {
    id: 4,
    titulo: "Aplicaciones Móviles",
    descripcion:
      "Desarrollamos apps móviles nativas e híbridas con alto rendimiento y diseño atractivo.",
    detalleExtendido:
      "Creamos soluciones móviles para Android y iOS, integrando funcionalidades avanzadas, notificaciones push, autenticación segura y sincronización en la nube. Perfecto para negocios que buscan una conexión directa con sus clientes.",
    precio: 100000,
    socios: ["Cristian Padilla", "Matías Vargas"],
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Img src={AppsImg} alt={servicio.titulo} style={{ borderRadius: "10px" }} />
          </Card>
        </Col>
        <Col md={6}>
          <h1>{servicio.titulo}</h1>
          <p>{servicio.descripcion}</p>
          <p>{servicio.detalleExtendido}</p>
          <h4>💰 Precio: ${servicio.precio}</h4>
          <p><strong>👥 Socios recomendados:</strong> {servicio.socios.join(" y ")}</p>
          <div className="d-flex gap-3 mt-4">
            <Button variant="primary" onClick={() => agregarAlCarrito(servicio)}>Añadir al carrito 🛒</Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>← Volver atrás</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetallesApps;
