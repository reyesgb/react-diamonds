import React from "react";
import { Container, Button } from "react-bootstrap";
import LogoDiamond from "../assets/images/logo-datadiamonds.png";

function Inicio() {
  return (
    <main>
      {/* HERO PRINCIPAL */}
      <section
        className="text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#f8fafc",
          minHeight: "70vh",
          flexDirection: "column",
        }}
      >
        <Container>
          <img
            src={LogoDiamond}
            alt="Data Diamonds Logo"
            width="160"
            height="160"
            className="mb-3"
          />
          <h1 className="fw-bold display-5 mb-3 text-dark">
            Bienvenido a <span style={{ color: "#0d6efd" }}>Data Diamonds</span>
          </h1>
          <p
            className="lead text-muted mx-auto mb-4"
            style={{ maxWidth: "700px" }}
          >
            Transformamos tus ideas en soluciones digitales inteligentes.
            Somos expertos en desarrollo web, UX/UI, aplicaciones móviles,
            ciberseguridad y servicios cloud.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/servicios"
            className="px-4 py-2"
          >
            Explorar Servicios
          </Button>
        </Container>
      </section>
    </main>
  );
}

export default Inicio;
