import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container className="py-5" style={{ maxWidth: "400px" }}>
      <h1 className="text-center mb-4">Iniciar Sesión</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="nombre@correo.com" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>

      <p className="text-center mt-3">
        ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
      </p>
    </Container>
  );
}

export default Login;
