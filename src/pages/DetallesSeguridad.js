import React from "react";
import { Container, Button } from "react-bootstrap";
import { useCarrito } from "../context/CarritoContext";

function DetallesSeguridad() {
  const { agregarAlCarrito } = useCarrito();

  const servicio = {
    id: 3,
    titulo: "Ciberseguridad",
    descripcion:
      "Protegemos tus datos y sistemas contra amenazas digitales mediante auditorías, firewalls y análisis de vulnerabilidades.",
    precio: 90000,
  };

  return (
    <Container className="py-5">
      <h1>{servicio.titulo}</h1>
      <p>{servicio.descripcion}</p>
      <h4>💰 Precio: ${servicio.precio}</h4>
      <Button variant="primary" onClick={() => agregarAlCarrito(servicio)}>
        Añadir al carrito 🛒
      </Button>
    </Container>
  );
}

export default DetallesSeguridad;