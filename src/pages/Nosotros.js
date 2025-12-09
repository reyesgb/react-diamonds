// src/pages/Nosotros.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import api from "../api/axiosClient";

function Nosotros() {
  const [socios, setSocios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocios = async () => {
      try {
        const res = await api.get("/partners/public");
        setSocios(res.data || []);
      } catch (err) {
        console.error("Error cargando socios:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSocios();
  }, []);

  if (loading) {
    return (
      <Container className="py-5">
        <p>Cargando equipo...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-3">Nuestro Equipo</h1>
      <p className="text-center text-muted mb-5">
        Conoce a los profesionales detrás de Data Diamonds.
      </p>

      <Row className="g-4">
        {socios.map((s) => (
          <Col md={4} key={s.id}>
            <Card className="h-100 shadow-sm">
              {s.imagenUrl && (
                <Card.Img
                  variant="top"
                  src={s.imagenUrl}
                  alt={s.nombre}
                  style={{ height: "230px", objectFit: "cover" }}
                />
              )}
              <Card.Body>
                <Card.Title>{s.nombre}</Card.Title>
                <h6 className="text-primary">{s.rol}</h6>
                <Card.Text>{s.descripcion}</Card.Text>
                {(s.linkedinUrl || s.githubUrl) && (
                  <div className="d-flex gap-2 mt-3">
                    {s.linkedinUrl && (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        as="a"
                        href={s.linkedinUrl}
                        target="_blank"
                      >
                        LinkedIn
                      </Button>
                    )}
                    {s.githubUrl && (
                      <Button
                        variant="outline-dark"
                        size="sm"
                        as="a"
                        href={s.githubUrl}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    )}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Nosotros;
