import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PabloImg from "../assets/images/Equipo/Pablo.jpg";

function PerfilPablo() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={5} className="mb-4 mb-md-0">
          <Card className="shadow border-0">
            <Card.Img
              src={PabloImg}
              alt="Pablo Reyes"
              className="rounded"
              style={{ objectFit: "cover", height: "350px" }}
            />
          </Card>
        </Col>

        <Col md={7}>
          <h1 className="fw-bold text-primary">Pablo Reyes</h1>
          <h5 className="text-muted mb-3">Especialista en Ciberseguridad</h5>
          <p>
            Pablo se dedica a proteger infraestructuras tecnológicas mediante la aplicación
            de estrategias avanzadas de seguridad digital. Con amplia experiencia en análisis
            de vulnerabilidades y gestión de incidentes, asegura entornos confiables.
          </p>

          <h4 className="mt-4 text-secondary">🎓 Estudios</h4>
          <ul>
            <li>Ingeniería en Ciberseguridad — Universidad de Chile</li>
            <li>Certificación CEH (Certified Ethical Hacker)</li>
            <li>Diplomado en Seguridad de Redes</li>
          </ul>

          <h4 className="mt-4 text-secondary">💼 Servicios</h4>
          <ul>
            <li>Análisis de vulnerabilidades y pentesting</li>
            <li>Gestión de incidentes y respuesta rápida</li>
            <li>Consultoría en políticas de seguridad</li>
          </ul>

          <div className="d-flex gap-3 mt-4">
            <Button variant="outline-primary" onClick={() => navigate(-1)}>
              ← Volver atrás
            </Button>
            <Button variant="primary" onClick={() => navigate("/contacto")}>
              Contactar a Pablo
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PerfilPablo;
