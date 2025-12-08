// src/pages/OrdersPage.js
import React, { useEffect, useState } from "react";
import api from "../api/axiosClient"; // ✅ usamos el axiosClient con el interceptor

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // El baseURL ya es http://localhost:8080/api
        const res = await api.get("/orders", {
          params: {
            page: 0,
            size: 20,
          },
        });

        // Si el backend devuelve un Page<...>, viene en data.content
        setOrders(res.data.content || res.data || []);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las órdenes de servicio.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Órdenes de Servicio</h2>
        <span className="text-muted small">
          Total: {orders.length} orden(es)
        </span>
      </div>

      {loading && <p>Cargando órdenes...</p>}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && orders.length === 0 && (
        <div className="alert alert-info" role="alert">
          No hay órdenes registradas por el momento.
        </div>
      )}

      {!loading && orders.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Cliente</th>
                <th>Estado</th>
                <th>Prioridad</th>
                <th>Creado</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.title}</td>
                  <td>{o.customerEmail}</td>
                  <td>
                    <span className="badge bg-secondary">
                      {o.status || "PENDIENTE"}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        o.priority === "HIGH"
                          ? "badge bg-danger"
                          : o.priority === "MEDIUM"
                          ? "badge bg-warning text-dark"
                          : "badge bg-success"
                      }
                    >
                      {o.priority || "NORMAL"}
                    </span>
                  </td>
                  <td>
                    {o.createdAt
                      ? new Date(o.createdAt).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
