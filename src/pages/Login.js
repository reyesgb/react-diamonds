import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", pass: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Obtener usuarios registrados
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Verificar si el usuario existe
    const found = users.find(
      (u) => u.email === form.email.trim() && u.pass === form.pass
    );

    if (found) {
      localStorage.setItem("userLogged", JSON.stringify(found));
      navigate("/"); // redirige al inicio
    } else if (
      form.email === "admin@admin.cl" &&
      form.pass === "admin123"
    ) {
      // acceso de administrador
      localStorage.setItem("adminLogged", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Correo o contraseña incorrectos.");
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