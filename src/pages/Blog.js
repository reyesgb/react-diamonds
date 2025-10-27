import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const articulos = [
  {
    id: 1,
    titulo: "Tendencias en Desarrollo Web 2025",
    imagen: "/images/blog/desarrollo.jpg",
    resumen:
      "Descubre las principales tecnologías y tendencias que dominarán el mundo del desarrollo web este año.",
    contenido:
      "El desarrollo web en 2025 está marcado por la inteligencia artificial, frameworks más ligeros y experiencias ultra personalizadas. Las empresas buscan optimizar el rendimiento, el SEO y la seguridad en cada etapa del desarrollo. Los frameworks como Next.js y Astro están cambiando la forma en que se crean sitios rápidos y escalables.",
  },
  {
    id: 2,
    titulo: "La importancia de la Ciberseguridad en las Pymes",
    imagen: "/images/blog/ciberseguridad.jpg",
    resumen:
      "Cada día más empresas pequeñas son víctimas de ciberataques. Aquí te explicamos cómo proteger tu negocio.",
    contenido:
      "Las Pymes se han convertido en blanco frecuente de ciberataques debido a su limitada inversión en seguridad. Implementar políticas de contraseñas seguras, backups regulares y monitoreo de red son pasos esenciales. Invertir en concientización de empleados es clave para evitar errores humanos.",
  },
  {
    id: 3,
    titulo: "Migrar a la Nube: beneficios y desafíos",
    imagen: "/images/blog/cloud.jpg",
    resumen:
      "Te explicamos por qué la consultoría cloud puede ser la mejor inversión para tu empresa en 2025.",
    contenido:
      "Migrar a la nube permite reducir costos, aumentar la disponibilidad y mejorar la seguridad. Sin embargo, requiere una correcta planificación y elección de proveedores. La consultoría cloud ayuda a definir estrategias de migración, backup y escalabilidad adaptadas a cada empresa.",
  },
];

function Blog() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">📰 Blog Data Diamonds</h1>
      <Row>
        {articulos.map((art) => (
          <Col md={4} className="mb-4" key={art.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={art.imagen}
                alt={art.titulo}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{art.titulo}</Card.Title>
                <Card.Text>{art.resumen}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/blog/${art.id}`)}
                >
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
