// src/pages/OrdersPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("idToken"); // el que guardas al loguear con Firebase

    axios
      .get("http://localhost:8080/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: 0,
          size: 20,
        },
      })
      .then((res) => setOrders(res.data.content || []))
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar las órdenes de servicio");
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Órdenes de Servicio</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.title}</td>
              <td>{o.customerEmail}</td>
              <td>{o.status}</td>
              <td>{o.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;