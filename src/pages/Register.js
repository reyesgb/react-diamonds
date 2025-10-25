import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Register() {
  return (
    <Container className="py-5" style={{ maxWidth: "400px" }}>
      <h1 className="text-center mb-4">Crear Cuenta</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="text" placeholder="Tu nombre" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="nombre@correo.com" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
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
