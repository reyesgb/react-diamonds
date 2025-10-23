import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Inicio() {
  return (
    <Container className="text-center py-5">
      <Row>
        <Col>
          <h1 className="mb-4">Bienvenido a Pacrima</h1>
          <p className="lead">
            Somos un equipo de profesionales en desarrollo, diseño y ciberseguridad.
            Ofrecemos soluciones digitales modernas y seguras para tu empresa.
          </p>
          <Button href="/servicios" variant="primary" size="lg">
            Ver Servicios
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
