import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table, Form, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DEFAULT_SERVICIOS = [
  { id: 1, titulo: "Desarrollo Web", precio: 80000 },
  { id: 2, titulo: "Diseño UX/UI", precio: 60000 },
  { id: 3, titulo: "Ciberseguridad", precio: 90000 },
  { id: 4, titulo: "Aplicaciones Móviles", precio: 100000 },
  { id: 5, titulo: "Consultoría Cloud", precio: 70000 },
  { id: 6, titulo: "Soporte Técnico", precio: 50000 },
];

function AdminPanel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("usuarios");

  // 🧍 Lista de usuarios guardados en localStorage
  const [usuarios, setUsuarios] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  // ⚙️ Servicios desde localStorage o por defecto
  const [servicios, setServicios] = useState(() => {
    const stored = localStorage.getItem("servicios");
    return stored ? JSON.parse(stored) : DEFAULT_SERVICIOS;
  });

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLogged") === "true";
    if (!isAdmin) navigate("/login");
  }, [navigate]);

  // Guardar cambios
  useEffect(() => {
    localStorage.setItem("servicios", JSON.stringify(servicios));
  }, [servicios]);

  // 🧾 Funciones de administración
  const handleEliminarUsuario = (email) => {
    if (window.confirm("¿Eliminar este usuario?")) {
      const nuevos = usuarios.filter((u) => u.email !== email);
      setUsuarios(nuevos);
      localStorage.setItem("users", JSON.stringify(nuevos));
    }
  };

  const handleAgregarServicio = () => {
    const nuevo = { id: Date.now(), titulo: "Nuevo servicio", precio: 0 };
    setServicios((p) => [...p, nuevo]);
  };

  const handleEliminarServicio = (id) => {
    if (window.confirm("¿Eliminar este servicio?")) {
      setServicios((p) => p.filter((s) => s.id !== id));
    }
  };

  const handlePrecioChange = (id, nuevoPrecio) => {
    setServicios((prev) =>
      prev.map((s) => (s.id === id ? { ...s, precio: Number(nuevoPrecio) || 0 } : s))
    );
  };

  const logout = () => {
    localStorage.removeItem("adminLogged");
    navigate("/");
  };

  return (
    <Container fluid className="py-4">
      <Row>
        {/* 📋 Menú lateral */}
        <Col md={3} className="bg-dark text-white p-4" style={{ minHeight: "100vh" }}>
          <h3 className="text-center mb-4">Panel Admin</h3>
          <Nav className="flex-column">
            <Nav.Link
              onClick={() => setActiveTab("usuarios")}
              className={`text-white mb-2 ${activeTab === "usuarios" ? "fw-bold" : ""}`}
            >
              👥 Usuarios
            </Nav.Link>
            <Nav.Link
              onClick={() => setActiveTab("servicios")}
              className={`text-white mb-2 ${activeTab === "servicios" ? "fw-bold" : ""}`}
            >
              💼 Servicios
            </Nav.Link>
            <Nav.Link onClick={logout} className="text-danger mt-4">
              🚪 Cerrar Sesión
            </Nav.Link>
          </Nav>
        </Col>

        {/* 📄 Contenido dinámico */}
        <Col md={9} className="p-4">
          {activeTab === "usuarios" && (
            <>
              <h2>Gestión de Usuarios</h2>
              <p>Visualiza o elimina usuarios registrados.</p>
              <Table bordered hover responsive>
                <thead className="table-dark">
                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.length > 0 ? (
                    usuarios.map((u) => (
                      <tr key={u.email}>
                        <td>{u.nombre}</td>
                        <td>{u.email}</td>
                        <td>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleEliminarUsuario(u.email)}
                          >
                            🗑 Eliminar
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-muted">
                        No hay usuarios registrados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </>
          )}

          {activeTab === "servicios" && (
            <>
              <h2>Gestión de Servicios</h2>
              <p>Agrega, modifica o elimina los servicios disponibles.</p>
              <Button variant="primary" className="mb-3" onClick={handleAgregarServicio}>
                ➕ Añadir Servicio
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
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPanel;
