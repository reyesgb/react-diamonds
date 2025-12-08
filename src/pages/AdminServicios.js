// src/pages/AdminServicios.jsx
import React, { useEffect, useState } from "react";
import api from "../api/axiosClient";
import { Container, Table, Button, Form, Row, Col, Alert } from "react-bootstrap";

function AdminServicios() {
  const [servicios, setServicios] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    titulo: "",
    descripcion: "",
    precio: "",
    categoria: "",
    activo: true,
    imagenUrl: "",
  });
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const esEdicion = formData.id !== null;

  const cargarServicios = async () => {
    try {
      const res = await api.get("/services");
      setServicios(res.data || []);
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los servicios.");
    }
  };

  useEffect(() => {
    cargarServicios();
  }, []);

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const limpiarFormulario = () => {
    setFormData({
      id: null,
      titulo: "",
      descripcion: "",
      precio: "",
      categoria: "",
      activo: true,
      imagenUrl: "",
    });
  };

  const manejarEditar = (servicio) => {
    setFormData({
      id: servicio.id,
      titulo: servicio.titulo || "",
      descripcion: servicio.descripcion || "",
      precio: servicio.precio || "",
      categoria: servicio.categoria || "",
      activo: servicio.activo ?? true,
      imagenUrl: servicio.imagenUrl || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const manejarEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este servicio?")) return;
    try {
      await api.delete(`/services/${id}`);
      setMensaje("Servicio eliminado correctamente.");
      setError("");
      cargarServicios();
    } catch (err) {
      console.error(err);
      setError("No se pudo eliminar el servicio.");
      setMensaje("");
    }
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    if (!formData.titulo || !formData.precio) {
      setError("Título y precio son obligatorios.");
      return;
    }

    const payload = {
      titulo: formData.titulo,
      descripcion: formData.descripcion,
      precio: Number(formData.precio),
      categoria: formData.categoria,
      activo: formData.activo,
      imagenUrl: formData.imagenUrl,
    };

    try {
      setLoading(true);
      if (esEdicion) {
        await api.put(`/services/${formData.id}`, payload);
        setMensaje("Servicio actualizado correctamente.");
      } else {
        await api.post("/services", payload);
        setMensaje("Servicio creado correctamente.");
      }
      limpiarFormulario();
      cargarServicios();
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al guardar el servicio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-3">Administración de Servicios</h2>

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

      {/* Formulario de creación/edición */}
      <Form onSubmit={manejarSubmit} className="mb-4">
        <Row className="gy-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={manejarCambio}
                placeholder="Ej: Desarrollo Web Corporativo"
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label>Precio (CLP)</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={formData.precio}
                onChange={manejarCambio}
                placeholder="60000"
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="categoria"
                value={formData.categoria}
                onChange={manejarCambio}
                placeholder="Desarrollo, UX, Cloud..."
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descripcion"
                value={formData.descripcion}
                onChange={manejarCambio}
                placeholder="Describe el servicio que ofreces..."
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                type="text"
                name="imagenUrl"
                value={formData.imagenUrl}
                onChange={manejarCambio}
                placeholder="https://..."
              />
            </Form.Group>
          </Col>

          <Col md={3} className="d-flex align-items-center mt-3">
            <Form.Check
              type="checkbox"
              label="Activo"
              name="activo"
              checked={formData.activo}
              onChange={manejarCambio}
            />
          </Col>

          <Col md={3} className="d-flex align-items-center mt-3 justify-content-end">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Guardando..." : esEdicion ? "Actualizar servicio" : "Crear servicio"}
            </Button>
            {esEdicion && (
              <Button
                variant="secondary"
                className="ms-2"
                onClick={limpiarFormulario}
              >
                Cancelar
              </Button>
            )}
          </Col>
        </Row>
      </Form>

      {/* Tabla de servicios */}
      <h4>Servicios existentes</h4>
      <Table striped bordered hover responsive className="mt-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {servicios.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No hay servicios registrados.
              </td>
            </tr>
          ) : (
            servicios.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.titulo}</td>
                <td>{s.categoria || "-"}</td>
                <td>${(s.precio || 0).toLocaleString()}</td>
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

export default AdminServicios;
