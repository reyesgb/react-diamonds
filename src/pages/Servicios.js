// src/pages/Servicios.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api/axiosClient";

// Imágenes locales como fallback
import DevImg from "../assets/images/Servicios/dev.jpg";
import UXImg from "../assets/images/Servicios/ux.jpg";
import SeguridadImg from "../assets/images/Servicios/seguridad.jpg";
import MarketingImg from "../assets/images/Servicios/marketing.jpg";
import CloudImg from "../assets/images/Servicios/datos.jpg";
import SoporteImg from "../assets/images/Servicios/soporte.jpg";

function Servicios() {
  const navigate = useNavigate();
  const location = useLocation();

  // Leer query ?search=
  const query = new URLSearchParams(location.search);
  const termino = query.get("search") || "";

  const [busqueda, setBusqueda] = useState(termino);
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setBusqueda(termino);
  }, [termino]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const res = await api.get("/services"); // GET http://localhost:8080/api/services
        setServicios(res.data || []);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los servicios.");
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  // Elegir imagen según datos del servicio
  const getImagen = (servicio) => {
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

  // Filtrar según búsqueda
  const resultados = servicios.filter((servicio) =>
    (servicio.titulo || "").toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Nuestros Servicios</h1>

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {loading ? (
        <p className="text-center">Cargando servicios...</p>
      ) : (
        <Row>
          {resultados.length > 0 ? (
            resultados.map((servicio) => (
              <Col key={servicio.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={getImagen(servicio)}
                    alt={servicio.titulo}
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{servicio.titulo}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {servicio.descripcion || "Servicio sin descripción."}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <strong>
                        ${servicio.precio?.toLocaleString() || 0}
                      </strong>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/servicios/${servicio.id}`)}
                      >
                        Ver Detalle
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">
              No se encontraron resultados.
            </p>
          )}
        </Row>
      )}
    </Container>
  );
}

export default Servicios;
