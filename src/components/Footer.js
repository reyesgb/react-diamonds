// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BRAND = "Data Diamonds";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-5 py-4 bg-light border-top">
      <Container>
        <Row className="gy-4 align-items-center">
          
          {/* Marca */}
          <Col md={4}>
            <h5 className="mb-1 fw-bold">{BRAND}</h5>
            <small className="text-muted">
              Soluciones digitales profesionales para tu negocio.
            </small>
          </Col>

          {/* Navegación */}
          <Col md={4} className="text-md-center">
            <nav className="footer-nav d-flex gap-3 justify-content-center flex-wrap">
              <Link className="footer-link" to="/blog">Blog</Link>
              <Link className="footer-link" to="/nosotros">Nosotros</Link>
              <Link className="footer-link" to="/servicios">Servicios</Link>
              <Link className="footer-link" to="/contacto">Contacto</Link>
            </nav>
          </Col>

          {/* Derechos Reservados */}
          <Col md={4} className="text-md-end text-muted small">
            © {year} {BRAND} — Todos los derechos reservados.
          </Col>

        </Row>
      </Container>

      {/* Estilos propios */}
      <style>{`
        .footer-link {
          color: #555;
          text-decoration: none;
          transition: 0.2s ease-in-out;
        }

        .footer-link:hover {
          color: #0d6efd;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}
