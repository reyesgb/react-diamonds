import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function PerfilPablo() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={5} className="mb-4 mb-md-0">
          <img
            src="/images/fotos_equipo/pablo.jpg"
            alt="Pablo Reyes"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={7}>
          <h1 className="fw-bold text-primary">Pablo Reyes</h1>
          <h5 className="text-muted mb-3">Desarrollador Web Fullstack</h5>
          <p>
            Desarrollador con amplia experiencia en diseño y construcción de aplicaciones modernas,
            escalables y seguras, utilizando tecnologías como React, Node.js y bases de datos Oracle.
          </p>

          <h4 className="mt-4">Estudios</h4>
          <ul>
            <li>Ingeniería en Informática — DUOC UC</li>
            <li>Certificación Fullstack JavaScript</li>
            <li>Especialización en Node.js y React</li>
          </ul>

          <h4 className="mt-4">Servicios</h4>
          <ul>
            <li>Desarrollo de sitios web corporativos</li>
            <li>Aplicaciones SPA y APIs REST</li>
            <li>Integración con bases de datos</li>
          </ul>

          <Button variant="outline-primary" href="/nosotros" className="mt-3">
            ← Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PerfilPablo;
