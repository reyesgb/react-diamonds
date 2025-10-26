import React from "react";
import { Container, Button } from "react-bootstrap";
import { useCarrito } from "../context/CarritoContext";

function DetallesCloud() {
  const { agregarAlCarrito } = useCarrito();

  const servicio = {
    id: 5,
    titulo: "Consultoría Cloud",
    descripcion:
      "Te ayudamos a migrar tus sistemas a la nube, optimizando costos y garantizando seguridad en tu infraestructura digital.",
    precio: 70000,
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

export default DetallesCloud;