import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const articulos = [
  {
    id: 1,
    titulo: "Tendencias en Desarrollo Web 2025",
    imagen: "/images/blog/desarrollo.jpg",
    contenido:
      "El desarrollo web en 2025 está marcado por la inteligencia artificial, frameworks más ligeros y experiencias ultra personalizadas. Las empresas buscan optimizar el rendimiento, el SEO y la seguridad en cada etapa del desarrollo. Los frameworks como Next.js y Astro están cambiando la forma en que se crean sitios rápidos y escalables.",
  },
  {
    id: 2,
    titulo: "La importancia de la Ciberseguridad en las Pymes",
    imagen: "/images/blog/ciberseguridad.jpg",
    contenido:
      "Las Pymes se han convertido en blanco frecuente de ciberataques debido a su limitada inversión en seguridad. Implementar políticas de contraseñas seguras, backups regulares y monitoreo de red son pasos esenciales. Invertir en concientización de empleados es clave para evitar errores humanos.",
  },
  {
    id: 3,
    titulo: "Migrar a la Nube: beneficios y desafíos",
    imagen: "/images/blog/cloud.jpg",
    contenido:
      "Migrar a la nube permite reducir costos, aumentar la disponibilidad y mejorar la seguridad. Sin embargo, requiere una correcta planificación y elección de proveedores. La consultoría cloud ayuda a definir estrategias de migración, backup y escalabilidad adaptadas a cada empresa.",
  },
];

function DetalleBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const articulo = articulos.find((a) => a.id === Number(id));

  if (!articulo) return <p>Artículo no encontrado</p>;

  return (
    <Container className="py-5">
      <h1>{articulo.titulo}</h1>
      <img
        src={articulo.imagen}
        alt={articulo.titulo}
        className="img-fluid rounded shadow my-4"
      />
      <p>{articulo.contenido}</p>
      <Button variant="secondary" onClick={() => navigate(-1)}>
        ← Volver al Blog
      </Button>
    </Container>
  );
}

export default DetalleBlog;
