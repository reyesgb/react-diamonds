import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import UXImg from "../assets/images/Servicios/ux.jpg";

function DetallesUX() {
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  const servicio = {
    id: 2,
    titulo: "Diseño UX/UI",
    descripcion:
      "Diseñamos experiencias digitales atractivas y funcionales centradas en el usuario.",
    detalleExtendido:
      "Cada interfaz que creamos busca lograr un equilibrio entre estética y usabilidad. Realizamos análisis de comportamiento, diseño de flujos, prototipado y pruebas de usuario para asegurar una experiencia óptima.",
    precio: 60000,
    socios: ["Matías Vargas"],
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Img src={UXImg} alt={servicio.titulo} style={{ borderRadius: "10px" }} />
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

export default DetallesUX;
