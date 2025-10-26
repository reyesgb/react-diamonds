import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

function Register() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    confirmarEmail: "",
    pass: "",
    confirmarPass: "",
    telefono: "",
    region: "",
    comuna: "",
  });

  const [success, setSuccess] = useState(false);

  const regiones = [
    "Región Metropolitana",
    "Valparaíso",
    "Biobío",
    "La Araucanía",
    "Antofagasta",
  ];

  const comunas = [
    "Santiago",
    "Maipú",
    "Puente Alto",
    "Valparaíso",
    "Concepción",
    "Temuco",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (form.email !== form.confirmarEmail) {
      alert("❌ Los correos no coinciden.");
      return;
    }
    if (form.pass !== form.confirmarPass) {
      alert("❌ Las contraseñas no coinciden.");
      return;
    }

    // Guardar en localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess(true);
    setForm({
      nombre: "",
      email: "",
      confirmarEmail: "",
      pass: "",
      confirmarPass: "",
      telefono: "",
      region: "",
      comuna: "",
    });
  };

  return (
    <Container className="py-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-4 fw-bold">Registro de Usuario</h1>

      {success && (
        <Alert
          variant="success"
          onClose={() => setSuccess(false)}
          dismissible
          className="text-center"
        >
          ✅ Registro exitoso. Ahora puedes iniciar sesión.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* Nombre */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Ej: Juan Pérez"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Correo */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="nombre@correo.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Confirmar correo</Form.Label>
              <Form.Control
                type="email"
                name="confirmarEmail"
                placeholder="Confirma tu correo"
                value={form.confirmarEmail}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Contraseña */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="pass"
                placeholder="********"
                value={form.pass}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                name="confirmarPass"
                placeholder="********"
                value={form.confirmarPass}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Teléfono */}
        <Form.Group className="mb-3">
          <Form.Label>Teléfono (opcional)</Form.Label>
          <Form.Control
            type="tel"
            name="telefono"
            placeholder="+56 9 1234 5678"
            value={form.telefono}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Región y Comuna */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Región</Form.Label>
              <Form.Select
                name="region"
                value={form.region}
                onChange={handleChange}
                required
              >
                <option value="">-- Selecciona la región --</option>
                {regiones.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Comuna</Form.Label>
              <Form.Select
                name="comuna"
                value={form.comuna}
                onChange={handleChange}
                required
              >
                <option value="">-- Selecciona la comuna --</option>
                {comunas.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Botón */}
        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-2 fw-bold"
        >
          REGISTRAR
        </Button>
      </Form>
    </Container>
  );
}

export default Register;