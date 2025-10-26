import React from "react";
import { Container, Button } from "react-bootstrap";
import { useCarrito } from "../context/CarritoContext";

function DetallesApps() {
  const { agregarAlCarrito } = useCarrito();

  const servicio = {
    id: 4,
    titulo: "Aplicaciones Móviles",
    descripcion:
      "Desarrollamos aplicaciones nativas e híbridas para Android e iOS, enfocadas en el rendimiento y la experiencia del usuario.",
    precio: 100000,
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

export default DetallesApps;