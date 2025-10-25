import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function PerfilMatias() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={5} className="mb-4 mb-md-0">
          <img
            src="/images/fotos_equipo/matias.jpg"
            alt="Matías Vargas"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={7}>
          <h1 className="fw-bold text-primary">Matías Vargas</h1>
          <h5 className="text-muted mb-3">Consultor en Ciberseguridad</h5>
          <p>
            Experto en auditorías, protección de datos y ciberseguridad. Su misión es proteger la
            infraestructura digital de las empresas frente a vulnerabilidades.
          </p>

          <h4 className="mt-4">Estudios</h4>
          <ul>
            <li>Ingeniería en Informática — DUOC UC</li>
            <li>Certificación Ethical Hacking — EC-Council</li>
            <li>Diplomado en Seguridad en Redes</li>
          </ul>

          <h4 className="mt-4">Servicios</h4>
          <ul>
            <li>Auditorías de seguridad</li>
            <li>Análisis de vulnerabilidades</li>
            <li>Implementación de políticas de seguridad</li>
          </ul>

          <Button variant="outline-primary" href="/nosotros" className="mt-3">
            ← Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PerfilMatias;
