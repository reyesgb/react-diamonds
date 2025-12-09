// src/pages/AdminSocios.jsx
import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form, Row, Col, Alert } from "react-bootstrap";
import api from "../api/axiosClient";

function AdminSocios() {
  const [socios, setSocios] = useState([]);
  const [form, setForm] = useState({
    id: null,
    nombre: "",
    rol: "",
    descripcion: "",
    imagenUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    activo: true,
    orden: 1,
  });
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const esEdicion = form.id !== null;

  const cargarSocios = async () => {
  try {
    const res = await api.get("/partners");
    setSocios(res.data || []);
  } catch (err) {
    console.error("Error cargando socios:", err.response || err);
    const status = err.response?.status;
    setError(
      `No se pudieron cargar los socios. ${
        status ? "(Error " + status + ")" : ""
      }`
    );
  }
};

  useEffect(() => {
    cargarSocios();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const limpiarForm = () => {
    setForm({
      id: null,
      nombre: "",
      rol: "",
      descripcion: "",
      imagenUrl: "",
      linkedinUrl: "",
      githubUrl: "",
      activo: true,
      orden: 1,
    });
  };

  const manejarEditar = (s) => {
    setForm({
      id: s.id,
      nombre: s.nombre || "",
      rol: s.rol || "",
      descripcion: s.descripcion || "",
      imagenUrl: s.imagenUrl || "",
      linkedinUrl: s.linkedinUrl || "",
      githubUrl: s.githubUrl || "",
      activo: s.activo ?? true,
      orden: s.orden ?? 1,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const manejarEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este socio?")) return;
    try {
      await api.delete(`/partners/${id}`);
      setMensaje("Socio eliminado correctamente.");
      setError("");
      cargarSocios();
    } catch (err) {
      console.error(err);
      setError("No se pudo eliminar el socio.");
      setMensaje("");
    }
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMensaje("");

    if (!form.nombre || !form.rol) {
      setError("Nombre y rol son obligatorios.");
      return;
    }

    const payload = { ...form };

    try {
      if (esEdicion) {
        await api.put(`/partners/${form.id}`, payload);
        setMensaje("Socio actualizado correctamente.");
      } else {
        await api.post("/partners", payload);
        setMensaje("Socio creado correctamente.");
      }
      limpiarForm();
      cargarSocios();
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al guardar el socio.");
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-3">Administración de Socios</h2>

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
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Rol</Form.Label>
              <Form.Control
                name="rol"
                value={form.rol}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Orden</Form.Label>
              <Form.Control
                type="number"
                name="orden"
                value={form.orden}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={2} className="d-flex align-items-center mt-3">
            <Form.Check
              type="checkbox"
              label="Activo"
              name="activo"
              checked={form.activo}
              onChange={handleChange}
            />
          </Col>

          <Col md={12}>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>URL imagen</Form.Label>
              <Form.Control
                name="imagenUrl"
                value={form.imagenUrl}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                name="linkedinUrl"
                value={form.linkedinUrl}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>GitHub</Form.Label>
              <Form.Control
                name="githubUrl"
                value={form.githubUrl}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={12} className="d-flex justify-content-end mt-2">
            <Button type="submit" variant="primary">
              {esEdicion ? "Actualizar socio" : "Crear socio"}
            </Button>
            {esEdicion && (
              <Button
                variant="secondary"
                className="ms-2"
                onClick={limpiarForm}
              >
                Cancelar
              </Button>
            )}
          </Col>
        </Row>
      </Form>

      {/* Tabla */}
      <h4>Listado de socios</h4>
      <Table striped bordered hover responsive className="mt-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Orden</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {socios.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No hay socios registrados.
              </td>
            </tr>
          ) : (
            socios.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.orden}</td>
                <td>{s.nombre}</td>
                <td>{s.rol}</td>
                <td>{s.activo ? "Sí" : "No"}</td>
                <td>
                  <Button
                    size="sm"
                    variant="outline-primary"
                    className="me-2"
                    onClick={() => manejarEditar(s)}
                  >
                    Editar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => manejarEliminar(s.id)}
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

export default AdminSocios;
