// src/pages/Contacto.jsx
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import api from "../api/axiosClient";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [mensajeOk, setMensajeOk] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeOk("");
    setError("");

    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      setLoading(true);
      await api.post("/contact-messages", {
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
      });
      setMensajeOk("✅ Tu mensaje ha sido enviado. Te contactaremos pronto.");
      setForm({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      console.error(err);
      setError("No se pudo enviar el mensaje. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <h1 className="text-center mb-4">Contáctanos</h1>

      {mensajeOk && (
        <Alert variant="success" onClose={() => setMensajeOk("")} dismissible>
          {mensajeOk}
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          {error}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            placeholder="Tu nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="nombre@correo.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </Form>
    </Container>
  );
}

export default Contacto;
