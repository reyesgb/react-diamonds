import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function Inicio() {
  const servicios = [
    { id: 1, nombre: "Desarrollo Web", descripcion: "Sitios modernos y adaptables." },
    { id: 2, nombre: "Diseño UX/UI", descripcion: "Interfaces centradas en el usuario." },
    { id: 3, nombre: "Ciberseguridad", descripcion: "Protección de datos y auditorías." },
  ];

  return (
    <div>
      <h1 className="text-center mb-4">Bienvenido a Pacrima</h1>
      <Row>
        {servicios.map((s) => (
          <Col md={4} key={s.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{s.nombre}</Card.Title>
                <Card.Text>{s.descripcion}</Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Inicio;
