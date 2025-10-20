import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const serviciosData = {
  1: {
    titulo: "Desarrollo Web",
    descripcion:
      "Creamos sitios web modernos, responsivos y optimizados para cualquier dispositivo. Utilizamos tecnologías como React, Node.js y bases de datos seguras.",
    imagen: "https://source.unsplash.com/800x400/?website,code",
    beneficios: [
      "Diseño personalizado",
      "Optimización SEO",
      "Seguridad avanzada",
      "Mantenimiento continuo",
    ],
  },
  2: {
    titulo: "Diseño UX/UI",
    descripcion:
      "Diseñamos interfaces que combinan estética y funcionalidad. Nuestro objetivo es que los usuarios disfruten cada interacción.",
    imagen: "https://source.unsplash.com/800x400/?design,ui",
    beneficios: [
      "Experiencia centrada en el usuario",
      "Diseño adaptable y accesible",
      "Prototipos interactivos",
    ],
  },
  3: {
    titulo: "Ciberseguridad",
    descripcion:
      "Protegemos la información y los sistemas de tu empresa mediante auditorías, análisis de vulnerabilidades y medidas preventivas.",
    imagen: "https://source.unsplash.com/800x400/?cybersecurity,network",
    beneficios: [
      "Análisis de riesgos",
      "Seguridad en la nube",
      "Monitoreo constante",
    ],
  },
  4: {
    titulo: "Consultoría Cloud",
    descripcion:
      "Te ayudamos a migrar tus servicios a la nube de manera eficiente, reduciendo costos y aumentando el rendimiento.",
    imagen: "https://source.unsplash.com/800x400/?cloud,server",
    beneficios: [
      "Migración AWS / Azure",
      "Infraestructura escalable",
      "Optimización de costos",
    ],
  },
  5: {
    titulo: "Aplicaciones Móviles",
    descripcion:
      "Desarrollamos aplicaciones móviles para Android e iOS con tecnología moderna y diseño atractivo.",
    imagen: "https://source.unsplash.com/800x400/?mobile,app",
    beneficios: [
      "Apps híbridas y nativas",
      "Diseño intuitivo",
      "Integración con APIs",
    ],
  },
  6: {
    titulo: "Soporte Técnico",
    descripcion:
      "Ofrecemos soporte preventivo y correctivo, asistencia remota y presencial, y mantenimiento de sistemas.",
    imagen: "https://source.unsplash.com/800x400/?support,tech",
    beneficios: [
      "Atención personalizada",
      "Soporte 24/7",
      "Resolución rápida de incidentes",
    ],
  },
};

function DetalleServicio() {
  const { id } = useParams();
  const servicio = serviciosData[id];

  if (!servicio) {
    return (
      <Container className="mt-5 text-center">
        <h2>Servicio no encontrado</h2>
        <Link to="/servicios" className="btn btn-secondary mt-3">
          Volver a Servicios
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg border-0">
        <Card.Img variant="top" src={servicio.imagen} alt={servicio.titulo} />
        <Card.Body>
          <h2>{servicio.titulo}</h2>
          <p className="text-muted">{servicio.descripcion}</p>

          <h4>Beneficios principales:</h4>
          <ul>
            {servicio.beneficios.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="d-flex justify-content-between mt-4">
            <Link to="/servicios" className="btn btn-outline-secondary">
              ← Volver
            </Link>
            <Button variant="primary">Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetalleServicio;
