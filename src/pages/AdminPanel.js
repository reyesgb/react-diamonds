// src/pages/AdminPanel.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();

  return (
    <Container className="py-4">
      <h2 className="mb-4">Panel de Administración</h2>
      <Row className="g-3">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Servicios</Card.Title>
              <Card.Text>
                Crea, edita o elimina los servicios ofrecidos en Data Diamonds.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/admin/servicios")}>
                Ir a Servicios
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Órdenes de Servicio</Card.Title>
              <Card.Text>
                Revisa las órdenes generadas por los clientes y su estado.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/admin/ordenes-servicio")}
              >
                Ver Órdenes
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Usuarios</Card.Title>
              <Card.Text>
                Visualiza y administra los usuarios registrados en el sistema.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/admin/usuarios")}
              >
                Ir a Usuarios
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default AdminPanel;
