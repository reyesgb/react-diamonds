// src/pages/ServicioDetalle.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Alert, Card } from "react-bootstrap";
import api from "../api/axiosClient";
import { useCarrito } from "../context/CarritoContext";

// Imágenes fallback (igual que en Servicios)
import DevImg from "../assets/images/Servicios/dev.jpg";
import UXImg from "../assets/images/Servicios/ux.jpg";
import SeguridadImg from "../assets/images/Servicios/seguridad.jpg";
import MarketingImg from "../assets/images/Servicios/marketing.jpg";
import CloudImg from "../assets/images/Servicios/datos.jpg";
import SoporteImg from "../assets/images/Servicios/soporte.jpg";

function ServicioDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();

  const [servicio, setServicio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const getImagen = (servicio) => {
    if (!servicio) return DevImg;
    if (servicio.imagenUrl) return servicio.imagenUrl;

    const titulo = (servicio.titulo || "").toLowerCase();
    const categoria = (servicio.categoria || "").toLowerCase();
    const texto = `${titulo} ${categoria}`;

    if (texto.includes("desarrollo")) return DevImg;
    if (texto.includes("ux") || texto.includes("diseño")) return UXImg;
    if (texto.includes("ciber") || texto.includes("segur")) return SeguridadImg;
    if (texto.includes("app") || texto.includes("móvil") || texto.includes("movil"))
      return MarketingImg;
    if (texto.includes("cloud") || texto.includes("nube") || texto.includes("datos"))
      return CloudImg;
    if (texto.includes("soporte") || texto.includes("técnico"))
      return SoporteImg;

    return DevImg;
  };

  useEffect(() => {
    const fetchServicio = async () => {
      try {
        const res = await api.get(`/services/${id}`);
        setServicio(res.data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el servicio.");
      } finally {
        setLoading(false);
      }
    };

    fetchServicio();
  }, [id]);

  const handleAgregarAlCarrito = () => {
    if (!servicio) return;
    agregarAlCarrito(
      {
        id: servicio.id,
        titulo: servicio.titulo,
        precio: servicio.precio,
      },
      1,
      true // merge = true para acumular cantidad si ya existe
    );
    setMensaje("Servicio agregado al carrito.");
    setTimeout(() => setMensaje(""), 2000);
  };

  if (loading) {
    return (
      <Container className="py-5">
        <p>Cargando servicio...</p>
      </Container>
    );
  }

  if (error || !servicio) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error || "Servicio no encontrado."}</Alert>
        <Button variant="secondary" onClick={() => navigate("/servicios")}>
          Volver a servicios
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      {mensaje && (
        <Alert variant="success" className="text-center">
          {mensaje}
        </Alert>
      )}

      <Row className="align-items-center">
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Img
              src={getImagen(servicio)}
              alt={servicio.titulo}
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{servicio.titulo}</h2>
          <p className="text-muted">
            {servicio.categoria ? `Categoría: ${servicio.categoria}` : ""}
          </p>
          <p>{servicio.descripcion}</p>
          <h4 className="mt-3">
            Precio: ${servicio.precio?.toLocaleString() || 0}
          </h4>

          <div className="mt-4 d-flex gap-2">
            <Button variant="success" onClick={handleAgregarAlCarrito}>
              Agregar al carrito
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate("/servicios")}
            >
              Volver a servicios
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicioDetalle;
