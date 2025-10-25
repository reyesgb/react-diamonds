import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contacto() {
  return (
    <Container className="py-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-4">Contáctanos</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Tu nombre completo" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="nombre@correo.com" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Contacto;
