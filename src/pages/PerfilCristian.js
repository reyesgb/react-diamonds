import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function PerfilCristian() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={5} className="mb-4 mb-md-0">
          <img
            src="/images/Equipo/Cristian.jpg"
            alt="Cristian Padilla"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={7}>
          <h1 className="fw-bold text-primary">Cristian Padilla</h1>
          <h5 className="text-muted mb-3">Diseñador UX/UI</h5>
          <p>
            Diseñador especializado en crear interfaces intuitivas y accesibles. Su enfoque está en la
            experiencia del usuario, combinando estética, funcionalidad y usabilidad.
          </p>

          <h4 className="mt-4">Estudios</h4>
          <ul>
            <li>Diseño Gráfico Profesional — DUOC UC</li>
            <li>Diplomado en UX Research y Usabilidad</li>
            <li>Especialización en Figma y Adobe XD</li>
          </ul>

          <h4 className="mt-4">Servicios</h4>
          <ul>
            <li>Diseño de interfaces centradas en el usuario</li>
            <li>Maquetación web con HTML, CSS y Bootstrap</li>
            <li>Optimización de experiencia digital</li>
          </ul>

          <Button variant="outline-primary" href="/nosotros" className="mt-3">
            ← Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PerfilCristian;
