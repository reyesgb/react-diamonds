import React from "react";
import { useCarrito } from "../context/CarritoContext";
import { Button, Container } from "react-bootstrap";

function DetallesDesarrollo() {
  const { agregarAlCarrito } = useCarrito();

  const servicio = {
    id: 1,
    titulo: "Desarrollo Web",
    precio: 50000,
  };

  return (
    <Container className="py-5">
      <h1>{servicio.titulo}</h1>
      <p>Desarrollo de sitios web modernos y escalables.</p>
      <h4>Precio: ${servicio.precio}</h4>
      <Button variant="primary" onClick={() => agregarAlCarrito(servicio)}>
        Añadir al carrito 🛒
      </Button>
    </Container>
  );
}

export default DetallesDesarrollo;