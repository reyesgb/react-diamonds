import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminDashboard() {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  // Si no es admin, lo echamos al login
  useEffect(() => {
    if (!isAdmin) {
      navigate("/login");
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Panel de Administración</h1>
        <Button variant="danger" onClick={logout}>
          Cerrar sesión
        </Button>
      </div>

      <Row className="g-4">
        {/* Card: Servicios */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Servicios</Card.Title>
              <Card.Text>
                Crea, edita y elimina los servicios ofrecidos en Data Diamonds.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/admin/servicios")}
              >
                Ir a Servicios
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card: Órdenes */}
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

        {/* Card: Usuarios */}
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

        {/* Card: Socios */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Socios / Equipo</Card.Title>
              <Card.Text>
                Administra la información de los profesionales que aparecen en la sección "Nosotros".
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/admin/socios")}
              >
                Ir a Socios
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card: Contacto */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Mensajes de Contacto</Card.Title>
              <Card.Text>
                Revisa los mensajes enviados desde el formulario de contacto.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/admin/contactos")}
              >
                Ver mensajes
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default AdminDashboard;
