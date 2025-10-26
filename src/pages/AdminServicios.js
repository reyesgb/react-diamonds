import React, { useState, useEffect } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DEFAULT_SERVICIOS = [
  { id: 1, titulo: "Desarrollo Web", precio: 80000 },
  { id: 2, titulo: "Diseño UX/UI", precio: 60000 },
  { id: 3, titulo: "Ciberseguridad", precio: 90000 },
  { id: 4, titulo: "Aplicaciones Móviles", precio: 100000 },
  { id: 5, titulo: "Consultoría Cloud", precio: 70000 },
  { id: 6, titulo: "Soporte Técnico", precio: 50000 },
];

function AdminServicios() {
  const navigate = useNavigate();
  const [servicios, setServicios] = useState(() => {
    const stored = localStorage.getItem("servicios");
    return stored ? JSON.parse(stored) : DEFAULT_SERVICIOS;
  });

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLogged") === "true";
    if (!isAdmin) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("servicios", JSON.stringify(servicios));
  }, [servicios]);

  const handlePrecioChange = (id, nuevoPrecio) => {
    setServicios((prev) =>
      prev.map((s) => (s.id === id ? { ...s, precio: Number(nuevoPrecio) || 0 } : s))
    );
  };

  const handleAgregarServicio = () => {
    const nuevo = {
      id: Date.now(),
      titulo: "Nuevo servicio",
      precio: 0,
    };
    setServicios((p) => [...p, nuevo]);
  };

  const handleEliminarServicio = (id) => {
    if (window.confirm("¿Eliminar este servicio?")) {
      setServicios((p) => p.filter((s) => s.id !== id));
    }
  };

  const handleVolver = () => navigate("/admin/dashboard");

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Servicios</h1>
        <Button variant="secondary" onClick={handleVolver}>
          ⬅ Volver al Panel
        </Button>
      </div>

      <p className="mb-3">
        Aquí puedes <strong>editar, agregar o eliminar servicios</strong>. Los cambios se guardan automáticamente en <code>localStorage</code>.
      </p>

      <Button variant="primary" className="mb-3" onClick={handleAgregarServicio}>
        ➕ Añadir servicio
      </Button>

      <Table bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Precio (CLP)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>
                <Form.Control
                  value={s.titulo}
                  onChange={(e) =>
                    setServicios((prev) =>
                      prev.map((x) =>
                        x.id === s.id ? { ...x, titulo: e.target.value } : x
                      )
                    )
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={s.precio}
                  onChange={(e) => handlePrecioChange(s.id, e.target.value)}
                />
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleEliminarServicio(s.id)}
                >
                  🗑 Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminServicios;
