import React, { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito, totalPrecio } = useCarrito();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("");

  const handleFinalizarCompra = () => {
    if (!isLoggedIn) {
      setMensaje("⚠️ Debes iniciar sesión para finalizar la compra.");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    if (carrito.length === 0) {
      setMensaje("Tu carrito está vacío.");
      return;
    }

    // Simula la compra
    setMensaje("✅ Compra realizada con éxito. ¡Gracias por confiar en nosotros!");
    vaciarCarrito();
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">🛒 Carrito de Compras</h1>

      {mensaje && (
        <Alert variant="info" className="text-center fw-bold">
          {mensaje}
        </Alert>
      )}

      {carrito.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item, i) => (
                <tr key={i}>
                  <td>{item.titulo}</td>
                  <td>${item.precio}</td>
                  <td>{item.cantidad || 1}</td>
                  <td>${(item.precio * (item.cantidad || 1)).toLocaleString()}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => eliminarDelCarrito(item.__lineId || item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4 className="text-end mt-3 fw-bold">
            Total: ${totalPrecio.toLocaleString()}
          </h4>

          <div className="text-end mt-3">
            <Button
              variant="secondary"
              className="me-2"
              onClick={vaciarCarrito}
            >
              Vaciar Carrito
            </Button>
            <Button variant="success" onClick={handleFinalizarCompra}>
              Finalizar Compra
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Carrito;
