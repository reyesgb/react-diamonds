import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import DevImg from "../assets/images/Servicios/dev.jpg";

function DetallesDesarrollo() {
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  const servicio = {
    id: 1,
    titulo: "Desarrollo Web",
    descripcion:
      "Creamos sitios y aplicaciones web modernas, rápidas y seguras, adaptadas a tus necesidades empresariales.",
    detalleExtendido:
      "Nuestro equipo combina las últimas tecnologías con buenas prácticas de diseño y desarrollo, garantizando sitios escalables, optimizados para SEO y completamente responsivos. Ideal para empresas que buscan fortalecer su presencia digital.",
    precio: 80000,
    socios: ["Cristian Padilla"],
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Img src={DevImg} alt={servicio.titulo} style={{ borderRadius: "10px" }} />
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

export default DetallesDesarrollo;
