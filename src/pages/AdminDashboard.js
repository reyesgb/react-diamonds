import React, { useEffect, useState } from "react";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  <Button
  variant="info"
  className="mb-3"
  onClick={() => navigate("/admin/servicios")}
>
  Gestionar Servicios
</Button>

  // Verifica si el admin está logueado
  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLogged") === "true";
    if (!isAdmin) {
      navigate("/login");
    } else {
      setAdmin(true);
    }

    // Obtiene usuarios registrados
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, [navigate]);

  // Eliminar usuario
  const handleDelete = (email) => {
    if (window.confirm(`¿Eliminar al usuario ${email}?`)) {
      const updated = users.filter((u) => u.email !== email);
      setUsers(updated);
      localStorage.setItem("users", JSON.stringify(updated));
    }
  };

  // Cerrar sesión admin
  const handleLogout = () => {
    localStorage.removeItem("adminLogged");
    navigate("/login");
  };

  if (!admin) return null;

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Panel de Administración</h1>
        <Button variant="danger" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </div>

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
                      onClick={() => handleDelete(u.email)}
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
    </Container>
  );
}

export default AdminDashboard;