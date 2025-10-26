import React, { useEffect, useState } from "react";
import { Container, Table, Button, Alert, Tabs, Tab, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function AdminDashboard() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('usuarios');
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });
  const [servicios, setServicios] = useState(() => {
    const stored = localStorage.getItem("servicios");
    return stored ? JSON.parse(stored) : [
      { id: 1, titulo: "Desarrollo Web", precio: 80000 },
      { id: 2, titulo: "Diseño UX/UI", precio: 60000 },
      { id: 3, titulo: "Ciberseguridad", precio: 90000 },
      { id: 4, titulo: "Aplicaciones Móviles", precio: 100000 },
      { id: 5, titulo: "Consultoría Cloud", precio: 70000 },
      { id: 6, titulo: "Soporte Técnico", precio: 50000 }
    ];
  });

  useEffect(() => {
    if (!auth.isAdmin) {
      navigate("/login");
    }
  }, [auth.isAdmin, navigate]);

  useEffect(() => {
    localStorage.setItem("servicios", JSON.stringify(servicios));
  }, [servicios]);

  // Funciones para servicios
  function handlePrecioChange(id, nuevoPrecio) {
    setServicios(prev =>
      prev.map(s => s.id === id ? { ...s, precio: Number(nuevoPrecio) || 0 } : s)
    );
  }

  function handleAgregarServicio() {
    const nuevo = {
      id: Date.now(),
      titulo: "Nuevo servicio",
      precio: 0,
    };
    setServicios(prev => [...prev, nuevo]);
  }

  function handleEliminarServicio(id) {
    setServicios(prev => prev.filter(s => s.id !== id));
  }

  // Funciones para usuarios
  const handleDeleteUser = (email) => {
    if (window.confirm(`¿Eliminar al usuario ${email}?`)) {
      const updated = users.filter((u) => u.email !== email);
      setUsers(updated);
      localStorage.setItem("users", JSON.stringify(updated));
    }
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  if (!auth.isAdmin) return null;

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Panel de Administración</h1>
        <Button variant="danger" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </div>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="usuarios" title="Usuarios">
          {users.length === 0 ? (
            <Alert variant="info">No hay usuarios registrados.</Alert>
          ) : (
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Fecha de Registro</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{u.nombre}</td>
                      <td>{u.email}</td>
                      <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDeleteUser(u.email)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Tab>

        <Tab eventKey="servicios" title="Servicios">
          <Button variant="primary" className="mb-3" onClick={handleAgregarServicio}>
            Añadir servicio
          </Button>

          <Table bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Precio</th>
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
                        setServicios(prev =>
                          prev.map(x => x.id === s.id ? { ...x, titulo: e.target.value } : x)
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
                    <Button variant="danger" onClick={() => handleEliminarServicio(s.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default AdminDashboard;