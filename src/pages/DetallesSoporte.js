import React from "react";
import { Container, Button } from "react-bootstrap";
import { useCarrito } from "../context/CarritoContext";

function DetallesSoporte() {
  const { agregarAlCarrito } = useCarrito();

  const servicio = {
    id: 6,
    titulo: "Soporte Técnico",
    descripcion:
      "Brindamos soporte remoto y presencial para resolver incidencias técnicas y garantizar el funcionamiento de tus sistemas.",
    precio: 40000,
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

export default DetallesSoporte;