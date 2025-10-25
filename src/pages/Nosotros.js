import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/css/estilos.css";

import Pablo from "../assets/images/Equipo/Pablo.jpg";
import Cristian from "../assets/images/Equipo/Cristian.jpg";
import Matias from "../assets/images/Equipo/Matias.jpg";

function Nosotros() {
  const socios = [
    {
      id: 1,
      nombre: "Pablo Reyes",
      rol: "Desarrollador Web Fullstack",
      descripcion: "Especialista en desarrollo de aplicaciones web modernas y escalables.",
      imagen: Pablo,
      perfil: "/persona1",
    },
    {
      id: 2,
      nombre: "Cristian Padilla",
      rol: "Diseñador UX/UI",
      descripcion: "Diseña interfaces centradas en el usuario y en la accesibilidad.",
      imagen: Cristian,
      perfil: "/persona2",
    },
    {
      id: 3,
      nombre: "Matías Vargas",
      rol: "Consultor en Ciberseguridad",
      descripcion: "Protege la infraestructura digital y los datos de los clientes.",
      imagen: Matias,
      perfil: "/persona3",
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4 fw-bold">Nuestro Equipo</h1>
      <p className="text-center text-muted mb-5">
        Conoce a los profesionales detrás de <strong>Pacrima</strong>, un grupo de especialistas comprometidos con la innovación y la calidad.
      </p>

      <Row>
        {socios.map((s) => (
          <Col key={s.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={s.imagen}
                alt={s.nombre}
                style={{ height: "260px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <h5 className="card-title fw-bold text-primary">{s.nombre}</h5>
                <p className="text-muted mb-1">{s.rol}</p>
                <p className="flex-grow-1">{s.descripcion}</p>
                <Button variant="outline-primary" href={s.perfil}>
                  Ver perfil
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Nosotros;
