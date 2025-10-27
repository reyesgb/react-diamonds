import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

// 🖼️ Importa la imagen del servicio
import CloudImg from "../assets/images/Servicios/datos.jpg";

function DetallesCloud() {
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  const servicio = {
    id: 5,
    titulo: "Consultoría Cloud",
    descripcion:
      "Te ayudamos a migrar tus sistemas a la nube, optimizando costos, mejorando el rendimiento y asegurando la continuidad operativa de tu empresa. Nuestro enfoque combina experiencia técnica y estrategia de negocio para implementar soluciones escalables, seguras y eficientes.",
    detalleExtendido:
      "Nuestro equipo trabaja con las principales plataformas (AWS, Azure y Google Cloud), ofreciendo monitoreo constante, copias de seguridad automatizadas y soporte personalizado para asegurar una transición sin contratiempos. Ideal para empresas en crecimiento o que buscan modernizar su infraestructura digital.",
    precio: 70000,
    socios: ["Cristian Padilla", "Matías Vargas"], // 👈 socios recomendados
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        {/* Imagen del servicio */}
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Img
              variant="top"
              src={CloudImg}
              alt={servicio.titulo}
              style={{ borderRadius: "10px" }}
            />
          </Card>
        </Col>

        {/* Descripción */}
        <Col md={6}>
          <h1 className="fw-bold mb-3">{servicio.titulo}</h1>
          <p className="text-muted">{servicio.descripcion}</p>
          <p>{servicio.detalleExtendido}</p>
          <h4 className="mt-3 text-primary">💰 Precio: ${servicio.precio}</h4>

          <p className="mt-2">
            <strong>👥 Socios recomendados:</strong>{" "}
            {servicio.socios.join(" y ")}.
          </p>

          <div className="d-flex gap-3 mt-4">
            <Button variant="primary" onClick={() => agregarAlCarrito(servicio)}>
              Añadir al carrito 🛒
            </Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              ← Volver atrás
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetallesCloud;
