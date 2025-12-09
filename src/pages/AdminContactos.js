// src/pages/AdminContactos.jsx
import React, { useEffect, useState } from "react";
import { Container, Table, Button, Alert, Badge } from "react-bootstrap";
import api from "../api/axiosClient";

function AdminContactos() {
    const [mensajes, setMensajes] = useState([]);
    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");

    const cargarMensajes = async () => {
        try {
            const res = await api.get("/contact-messages");
            setMensajes(res.data || []);
        } catch (err) {
            console.error("Error cargando mensajes:", err.response || err);
            const status = err.response?.status;
            setError(
                `No se pudieron cargar los mensajes de contacto. ${status ? "(Error " + status + ")" : ""
                }`
            );
        }
    };


    useEffect(() => {
        cargarMensajes();
    }, []);

    const etiquetaEstado = (estado) => {
        if (estado === "RESPONDIDO") return <Badge bg="success">Respondido</Badge>;
        if (estado === "LEIDO") return <Badge bg="warning">Leído</Badge>;
        return <Badge bg="secondary">Nuevo</Badge>;
    };

    const cambiarEstado = async (id, nuevoEstado) => {
        try {
            await api.put(`/contact-messages/${id}/estado`, { estado: nuevoEstado });
            setMensaje("Estado actualizado correctamente.");
            setError("");
            cargarMensajes();
        } catch (err) {
            console.error(err);
            setError("No se pudo actualizar el estado.");
            setMensaje("");
        }
    };

    const eliminarMensaje = async (id) => {
        if (!window.confirm("¿Eliminar este mensaje?")) return;
        try {
            await api.delete(`/contact-messages/${id}`);
            setMensaje("Mensaje eliminado.");
            setError("");
            cargarMensajes();
        } catch (err) {
            console.error(err);
            setError("No se pudo eliminar el mensaje.");
            setMensaje("");
        }
    };

    return (
        <Container className="py-4">
            <h2 className="mb-3">Mensajes de Contacto</h2>

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

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Mensaje</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mensajes.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="text-center">
                                No hay mensajes recibidos.
                            </td>
                        </tr>
                    ) : (
                        mensajes.map((m) => (
                            <tr key={m.id}>
                                <td>{m.id}</td>
                                <td>
                                    {m.createdAt
                                        ? new Date(m.createdAt).toLocaleString()
                                        : "-"}
                                </td>
                                <td>{m.nombre}</td>
                                <td>{m.email}</td>
                                <td style={{ maxWidth: "350px" }}>{m.mensaje}</td>
                                <td>{etiquetaEstado(m.estado)}</td>
                                <td className="d-flex flex-column gap-1">
                                    <Button
                                        size="sm"
                                        variant="outline-secondary"
                                        onClick={() => cambiarEstado(m.id, "LEIDO")}
                                    >
                                        Marcar leído
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline-success"
                                        onClick={() => cambiarEstado(m.id, "RESPONDIDO")}
                                    >
                                        Marcar respondido
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline-danger"
                                        onClick={() => eliminarMensaje(m.id)}
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

export default AdminContactos;
