import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅

function Login() {
  const [form, setForm] = useState({ email: "", pass: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ usamos el contexto

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const result = login(form);

    if (result.success) {
      if (result.isAdmin) navigate("/admin/dashboard");
      else navigate("/");
    } else {
      setError("❌ Correo o contraseña incorrectos.");
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "400px" }}>
      <h1 className="text-center mb-4">Iniciar Sesión</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
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

        <Button variant="primary" type="submit" className="w-100 fw-bold">
          Entrar
        </Button>
      </Form>

      <p className="text-center mt-3">
        ¿No tienes una cuenta?{" "}
        <a href="/register" className="text-decoration-none">
          Regístrate aquí
        </a>
      </p>
    </Container>
  );
}

export default Login;