// src/pages/TicketsPage.jsx
import { useEffect, useState } from "react";
import api from "../api/axiosClient";
import { useAuth } from "../context/AuthContext";

const TicketsPage = () => {
  const { user, role, isAdmin, logout } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");

  const cargarTickets = async () => {
    try {
      const res = await api.get("/tickets");
      setTickets(res.data);
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los tickets");
    }
  };

  useEffect(() => {
    cargarTickets();
  }, []);

  const crearTicket = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await api.post("/tickets", {
        title: titulo,
        description: descripcion,
      });
      setTitulo("");
      setDescripcion("");
      await cargarTickets();
    } catch (err) {
      console.error(err);
      setError("No se pudo crear el ticket");
    }
  };

  const eliminarTicket = async (id) => {
    if (!isAdmin) return;
    try {
      await api.delete(`/tickets/${id}`);
      await cargarTickets();
    } catch (err) {
      console.error(err);
      setError("No se pudo eliminar el ticket (¿eres ADMIN?)");
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "20px auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>Tickets DataDiamonds</h2>
          <p>
            Usuario: {user?.email} | Rol: <b>{role}</b>
          </p>
        </div>
        <button onClick={logout}>Cerrar sesión</button>
      </header>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Formulario: lo pueden usar USER y ADMIN */}
      <section style={{ marginTop: 20 }}>
        <h3>Crear nuevo ticket</h3>
        <form onSubmit={crearTicket}>
          <div>
            <label>Título</label>
            <input
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label>Descripción</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <button type="submit" style={{ marginTop: 10 }}>
            Crear
          </button>
        </form>
      </section>

      {/* Listado de tickets */}
      <section style={{ marginTop: 30 }}>
        <h3>Listado de tickets</h3>
        {tickets.length === 0 ? (
          <p>No hay tickets aún.</p>
        ) : (
          <ul>
            {tickets.map((t) => (
              <li
                key={t.id}
                style={{
                  border: "1px solid #ccc",
                  padding: 10,
                  marginBottom: 10,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <b>{t.title}</b>
                  <p>{t.description}</p>
                  <p>Estado: {t.status}</p>
                </div>

                {/* ⛔ Botón visible solo para ADMIN */}
                {isAdmin && (
                  <button onClick={() => eliminarTicket(t.id)}>
                    Eliminar (ADMIN)
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default TicketsPage;
