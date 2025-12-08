// src/pages/AdminUsuarios.jsx
import React, { useEffect, useState } from "react";
import api from "../api/axiosClient";
import { Container, Table, Button, Form, Row, Col, Alert } from "react-bootstrap";

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    email: "",
    nombre: "",
    rol: "USER",
    activo: true,
  });
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const esEdicion = formData.id !== null;

  const cargarUsuarios = async () => {
    try {
      const res = await api.get("/users");
      setUsuarios(res.data || []);
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los usuarios.");
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const manejarEditar = (usuario) => {
    setFormData({
      id: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre || "",
      rol: usuario.rol || "USER",
      activo: usuario.activo ?? true,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const limpiarFormulario = () => {
    setFormData({
      id: null,
      email: "",
      nombre: "",
      rol: "USER",
      activo: true,
    });
  };

  const manejarEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      await api.delete(`/users/${id}`);
      setMensaje("Usuario eliminado correctamente.");
      setError("");
      cargarUsuarios();
    } catch (err) {
      console.error(err);
      setError("No se pudo eliminar el usuario.");
      setMensaje("");
    }
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    if (!formData.email) {
      setError("El email es obligatorio.");
      return;
    }

    const payload = {
      email: formData.email,
      nombre: formData.nombre,
      rol: formData.rol,
      activo: formData.activo,
    };

    try {
      setLoading(true);

      if (esEdicion) {
        await api.put(`/users/${formData.id}`, payload);
        setMensaje("Usuario actualizado correctamente.");
      } else {
        // No se suele crear usuarios desde aquí, pero lo dejamos por si acaso
        await api.post("/users", payload);
        setMensaje("Usuario creado correctamente.");
      }

      limpiarFormulario();
      cargarUsuarios();
    } catch (err) {
      console.error("Error al guardar usuario:", err);
      const status = err.response?.status;
      const backendMsg = err.response?.data?.message || err.message;
      setError(
        `Ocurrió un error al guardar el usuario. (Error ${status || "?"}) Detalle: ${backendMsg}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-3">Administración de Usuarios</h2>

      {mensaje && (
        <Alert variant="success" onClose={() => setMensaje("")} dismissible>
          {mensaje}
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          {error}
        </Alert>
      )}

      {/* Formulario */}
      <Form onSubmit={manejarSubmit} className="mb-4">
        <Row className="gy-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={manejarCambio}
                disabled={esEdicion} // no cambiar email en edición
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={manejarCambio}
              />
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group>
              <Form.Label>Rol</Form.Label>
              <Form.Select
                name="rol"
                value={formData.rol}
                onChange={manejarCambio}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={2} className="d-flex align-items-center mt-3">
            <Form.Check
              type="checkbox"
              label="Activo"
              name="activo"
              checked={formData.activo}
              onChange={manejarCambio}
            />
          </Col>

          <Col md={12} className="d-flex justify-content-end mt-3">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Guardando..." : esEdicion ? "Actualizar usuario" : "Crear usuario"}
            </Button>
            {esEdicion && (
              <Button variant="secondary" className="ms-2" onClick={limpiarFormulario}>
                Cancelar
              </Button>
            )}
          </Col>
        </Row>
      </Form>

      {/* Tabla */}
      <h4>Usuarios registrados</h4>
      <Table striped bordered hover responsive className="mt-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No hay usuarios registrados.
              </td>
            </tr>
          ) : (
            usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.email}</td>
                <td>{u.nombre || "-"}</td>
                <td>{u.rol || "USER"}</td>
                <td>{u.activo ? "Sí" : "No"}</td>
                <td>
                  <Button
                    size="sm"
                    variant="outline-primary"
                    className="me-2"
                    onClick={() => manejarEditar(u)}
                  >
                    Editar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => manejarEliminar(u.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminUsuarios;
