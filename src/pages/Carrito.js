// src/pages/Carrito.jsx
import React, { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosClient";

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito, totalPrecio, totalItems } =
    useCarrito();
  const { isUser, user } = useAuth();
  const navigate = useNavigate();

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFinalizarCompra = async () => {
    setMensaje("");
    setError("");

    // 1) Validar login
    if (!isUser) {
      setError("⚠️ Debes iniciar sesión para finalizar la compra.");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    // 2) Validar carrito
    if (carrito.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }

    // 3) Armar payload para el backend
    const descripcion = carrito
      .map(
        (item) =>
          `${item.titulo} x${item.cantidad || 1} ($${item.precio.toLocaleString()})`
      )
      .join(", ");

    const body = {
      title: `Compra de ${totalItems || carrito.length} servicio(s)`,
      description: descripcion,
      customerEmail: user?.email || "sin-correo@datadiamonds.cl",
      priority: "HIGH", // usamos uno que ya funcionó en Swagger
    };


    try {
      setLoading(true);

      const res = await api.post("/orders", body);
      const ordenCreada = res.data;

      setMensaje(
        `✅ Compra realizada con éxito. N° de orden: ${ordenCreada.id}. ¡Gracias por confiar en nosotros!`
      );
      vaciarCarrito();
    } catch (err) {
      console.error("Error al finalizar la compra:", err);
      const status = err.response?.status;
      const backendMsg = err.response?.data?.message || err.message;
      setError(
        `❌ No se pudo procesar la compra (Error ${status || "desconocido"}). Detalle: ${backendMsg}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">🛒 Carrito de Compras</h1>

      {mensaje && (
        <Alert variant="success" className="text-center fw-bold">
          {mensaje}
        </Alert>
      )}

      {error && (
        <Alert variant="danger" className="text-center fw-bold">
          {error}
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
                  <td>${item.precio.toLocaleString()}</td>
                  <td>{item.cantidad || 1}</td>
                  <td>
                    $
                    {(item.precio * (item.cantidad || 1)).toLocaleString()}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        eliminarDelCarrito(item.__lineId || item.id)
                      }
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
              disabled={loading}
            >
              Vaciar Carrito
            </Button>
            <Button
              variant="success"
              onClick={handleFinalizarCompra}
              disabled={loading}
            >
              {loading ? "Procesando..." : "Finalizar Compra"}
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Carrito;
