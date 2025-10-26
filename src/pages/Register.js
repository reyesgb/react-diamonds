import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

// Reglas de validación con Regex
const rules = {
  nombre: (v) => /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]{3,}$/.test(v.trim()),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  pass: (v) => /^(?=.{6,})/.test(v), // mínimo 6 caracteres
};

function Register() {
  const [form, setForm] = useState({ nombre: "", email: "", pass: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Maneja el cambio de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Función que valida cada campo individual
  const validateField = (name, value) => {
    if (name === "nombre" && !rules.nombre(value)) return "Debe tener al menos 3 letras";
    if (name === "email" && !rules.email(value)) return "Correo inválido";
    if (name === "pass" && !rules.pass(value)) return "Mínimo 6 caracteres";
    return "";
  };

  // Validar formulario completo
  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, form[key]);
    });
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Guardar en localStorage (demo)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.email === form.email.trim())) {
      alert("❌ Este correo ya está registrado.");
      return;
    }
    users.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess(true);
    setForm({ nombre: "", email: "", pass: "" });
  };

  return (
    <Container className="py-5" style={{ maxWidth: "400px" }}>
      <h1 className="text-center mb-4">Crear Cuenta</h1>

      {success && (
        <Alert
          variant="success"
          onClose={() => setSuccess(false)}
          dismissible
        >
          ✅ Registro exitoso. Ahora puedes iniciar sesión.
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        {/* NOMBRE */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={form.nombre}
            placeholder="Tu nombre"
            onChange={handleChange}
            isInvalid={!!errors.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombre}
          </Form.Control.Feedback>
        </Form.Group>

        {/* CORREO */}
        <Form.Group className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            placeholder="nombre@correo.com"
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* CONTRASEÑA */}
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="pass"
            value={form.pass}
            placeholder="********"
            onChange={handleChange}
            isInvalid={!!errors.pass}
          />
          <Form.Control.Feedback type="invalid">
            {errors.pass}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="w-100"
          disabled={!form.nombre || !form.email || !form.pass}
        >
          Registrarse
        </Button>
      </Form>

      <p className="text-center mt-3">
        ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </Container>
  );
}

export default Register;
