import React from "react";
import { useCarrito } from "../context/CarritoContext";
import { Container, Table, Button } from "react-bootstrap";

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito, total } = useCarrito();

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">🛒 Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item, i) => (
                <tr key={i}>
                  <td>{item.titulo}</td>
                  <td>${item.precio}</td>
                  <td>
                    <Button variant="danger" onClick={() => eliminarDelCarrito(item.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4 className="text-end">Total: ${total}</h4>
          <div className="text-end">
            <Button variant="secondary" className="me-2" onClick={vaciarCarrito}>
              Vaciar Carrito
            </Button>
            <Button variant="success">Finalizar Compra</Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Carrito;
