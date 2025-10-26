import React from "react";
import { Container, Button } from "react-bootstrap";
import { useCarrito } from "../context/CarritoContext";

function DetallesUX() {
  const { agregarAlCarrito } = useCarrito();

  const servicio = {
    id: 2,
    titulo: "Diseño UX/UI",
    descripcion:
      "Diseños atractivos y funcionales que priorizan la experiencia del usuario y la accesibilidad digital.",
    precio: 60000,
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

export default DetallesUX;