import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Pacrima</h5>
            <p>Soluciones digitales profesionales y personalizadas para tu negocio.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>&copy; {new Date().getFullYear()} Pacrima - Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
