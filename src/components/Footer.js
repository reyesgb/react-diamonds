import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BRAND = "Data Diamonds";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-5">
      <Container>
        <Row className="gy-3 align-items-center">
          <Col md={4}>
            <h5 className="mb-0">{BRAND}</h5>
            <small className="text-muted d-block">
              Soluciones digitales profesionales y personalizadas para tu negocio.
            </small>
          </Col>

          <Col md={4} className="text-md-center">
            <nav className="footer-nav">
              <Link to="/nosotros">Nosotros</Link>
              <span className="sep">·</span>
              <Link to="/servicios">Servicios</Link>
              <span className="sep">·</span>
              <Link to="/contacto">Contacto</Link>
            </nav>
          </Col>

          <Col md={4} className="text-md-end">
            <small className="text-muted">
              © {year} {BRAND} — Todos los derechos reservados.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
