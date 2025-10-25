import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <h5 className="fw-bold">Pacrima</h5>
            <p className="small mb-0">
              Soluciones digitales profesionales y personalizadas para tu negocio.
            </p>
          </Col>
          <Col md={4} className="text-center my-3 my-md-0">
            <a href="/nosotros" className="text-light mx-2 small text-decoration-none">
              Nosotros
            </a>
            <a href="/servicios" className="text-light mx-2 small text-decoration-none">
              Servicios
            </a>
            <a href="/contacto" className="text-light mx-2 small text-decoration-none">
              Contacto
            </a>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <p className="small mb-0">
              © {new Date().getFullYear()} Pacrima — Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
