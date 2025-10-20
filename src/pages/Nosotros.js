import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function Nosotros() {
  const equipo = [
    { nombre: "Pablo Reyes", rol: "Desarrollador Web Fullstack", descripcion: "Experto en React, Node y diseño web." },
    { nombre: "Cristian Padilla", rol: "Diseñador UX/UI", descripcion: "Interfaces modernas y accesibles." },
    { nombre: "Matías Vargas", rol: "Consultor en Ciberseguridad", descripcion: "Auditorías, pentesting y seguridad digital." },
  ];

  return (
    <div>
      <h1 className="text-center mb-4">Nuestro Equipo</h1>
      <Row>
        {equipo.map((p, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{p.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{p.rol}</Card.Subtitle>
                <Card.Text>{p.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Nosotros;
