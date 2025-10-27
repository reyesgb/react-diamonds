import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MatiasImg from "../assets/images/Equipo/Matias.jpg";

function PerfilMatias() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={5} className="mb-4 mb-md-0">
          <Card className="shadow border-0">
            <Card.Img
              src={MatiasImg}
              alt="Matías Vargas"
              className="rounded"
              style={{ objectFit: "cover", height: "350px" }}
            />
          </Card>
        </Col>

        <Col md={7}>
          <h1 className="fw-bold text-primary">Matías Vargas</h1>
          <h5 className="text-muted mb-3">Diseñador UX/UI</h5>
          <p>
            Matías es experto en diseño de interfaces centradas en la experiencia de usuario.
            Su trabajo busca armonizar la estética, la accesibilidad y la funcionalidad para
            crear productos digitales que conectan con las personas.
          </p>

          <h4 className="mt-4 text-secondary">🎓 Estudios</h4>
          <ul>
            <li>Diseño Gráfico Profesional — DUOC UC</li>
            <li>Diplomado en UX Research y Prototipado</li>
            <li>Especialización en Figma y Adobe XD</li>
          </ul>

          <h4 className="mt-4 text-secondary">💼 Servicios</h4>
          <ul>
            <li>Diseño de interfaces intuitivas y funcionales</li>
            <li>Investigación y testeo de usuarios</li>
            <li>Creación de sistemas de diseño</li>
          </ul>

          <div className="d-flex gap-3 mt-4">
            <Button variant="outline-primary" onClick={() => navigate(-1)}>
              ← Volver atrás
            </Button>
            <Button variant="primary" onClick={() => navigate("/contacto")}>
              Contactar a Matías
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PerfilMatias;
