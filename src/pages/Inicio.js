import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// 👇 Importa las imágenes
import Cristian from "../assets/images/Equipo/Cristian.jpg";
import Matias from "../assets/images/Equipo/Matias.jpg";
import Pablo from "../assets/images/Equipo/Pablo.jpg";

import DevImg from "../assets/images/Servicios/dev.jpg";
import UXImg from "../assets/images/Servicios/ux.jpg";
import SeguridadImg from "../assets/images/Servicios/seguridad.jpg";

function Inicio() {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-light text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold mb-3">Bienvenido a Pacrima</h1>
          <p className="lead text-muted mb-4">
            Somos un equipo especializado en desarrollo web, diseño UX/UI, aplicaciones móviles,
            ciberseguridad, soporte técnico y soluciones cloud.
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate("/servicios")}>
            Explorar Servicios
          </Button>
        </Container>
      </section>

      {/* Servicios Destacados */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4">Nuestros Servicios Destacados</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={DevImg}
                  alt="desarrollo web"
                  className="rounded-circle mx-auto"
                  />                
                  <Card.Body>
                  <Card.Title>Desarrollo Web</Card.Title>
                  <Card.Text>
                    Sitios modernos, rápidos y optimizados para destacar tu marca en internet.
                  </Card.Text>
                  <Button variant="outline-primary" onClick={() => navigate("/servicios/desarrollo-web")}>
                    Ver Detalle
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={UXImg}
                  alt="ux/ui"
                  className="rounded-circle mx-auto"
                />
                <Card.Body>
                  <Card.Title>Diseño UX/UI</Card.Title>
                  <Card.Text>
                    Experiencias digitales centradas en la usabilidad y el diseño atractivo.
                  </Card.Text>
                  <Button variant="outline-primary" onClick={() => navigate("/servicios/diseno-ux")}>
                    Ver Detalle
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                 <Card.Img
                  variant="top"
                  src={SeguridadImg}
                  alt="Ciberseguridad"
                />
                <Card.Body>
                  <Card.Title>Ciberseguridad</Card.Title>
                  <Card.Text>
                    Protegemos tus sistemas y datos con soluciones avanzadas de seguridad digital.
                  </Card.Text>
                  <Button variant="outline-primary" onClick={() => navigate("/servicios/ciberseguridad")}>
                    Ver Detalle
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Socios */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Conoce a Nuestro Equipo</h2>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="border-0 bg-transparent">
                <Card.Img
                  variant="top"
                  src={Cristian}
                  alt="Cristian"
                  className="rounded-circle mx-auto"
                  style={{ width: "160px", height: "160px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Cristian</Card.Title>
                  <Card.Text>Desarrollador Frontend</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 bg-transparent">
                <Card.Img
                  variant="top"
                  src={Matias}
                  alt="Matias"
                  className="rounded-circle mx-auto"
                  style={{ width: "160px", height: "160px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Matías</Card.Title>
                  <Card.Text>Diseñador UX/UI</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 bg-transparent">
                <Card.Img
                  variant="top"
                  src={Pablo}
                  alt="Pablo"
                  className="rounded-circle mx-auto"
                  style={{ width: "160px", height: "160px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Pablo</Card.Title>
                  <Card.Text>Especialista en Ciberseguridad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Inicio;
