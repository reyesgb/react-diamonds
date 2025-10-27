import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CristianImg from "../assets/images/Equipo/Cristian.jpg"; // ✅ Importar imagen correctamente

function PerfilCristian() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Imagen */}
        <Col md={5} className="mb-4 mb-md-0">
          <Card className="shadow border-0">
            <Card.Img
              src={CristianImg}
              alt="Cristian Padilla"
              className="rounded"
              style={{ objectFit: "cover", height: "350px" }}
            />
          </Card>
        </Col>

        {/* Información */}
        <Col md={7}>
          <h1 className="fw-bold text-primary">Cristian Padilla</h1>
          <h5 className="text-muted mb-3">Desarrollador Frontend</h5>

          <p>
            Cristian es un desarrollador enfocado en la creación de interfaces funcionales,
            modernas y responsivas. Su trabajo combina la precisión técnica con un fuerte
            enfoque en la experiencia del usuario, utilizando las últimas tecnologías web.
          </p>

          <h4 className="mt-4 text-secondary">🎓 Estudios</h4>
          <ul>
            <li>Ingeniería en Informática — DUOC UC</li>
            <li>Diplomado en Desarrollo Frontend con React</li>
            <li>Certificación en Responsive Design y Accesibilidad Web</li>
          </ul>

          <h4 className="mt-4 text-secondary">💼 Servicios</h4>
          <ul>
            <li>Desarrollo de sitios y aplicaciones web</li>
            <li>Optimización de rendimiento y SEO técnico</li>
            <li>Integración con APIs y sistemas backend</li>
          </ul>

          <div className="d-flex gap-3 mt-4">
            <Button variant="outline-primary" onClick={() => navigate(-1)}>
              ← Volver atrás
            </Button>
            <Button variant="primary" onClick={() => navigate("/contacto")}>
              Contactar a Cristian
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PerfilCristian;
