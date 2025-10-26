import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DEFAULT_PRODUCTOS = [
  { id: 1, nombre: "Desarrollo Web", descripcion: "Desarrollo de sitios y aplicaciones web", precio: 80000 },
  { id: 2, nombre: "Diseño UX/UI", descripcion: "Diseño de experiencia e interfaz de usuario", precio: 60000 },
  { id: 3, nombre: "Ciberseguridad", descripcion: "Servicios de seguridad informática", precio: 90000 },
  { id: 4, nombre: "Apps Móviles", descripcion: "Desarrollo de aplicaciones móviles", precio: 100000 },
  { id: 5, nombre: "Cloud", descripcion: "Servicios en la nube", precio: 70000 },
  { id: 6, nombre: "Soporte", descripcion: "Soporte técnico", precio: 50000 }
];

function AdminProductos() {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [productos, setProductos] = useState(() => {
    const stored = localStorage.getItem("productos");
    return stored ? JSON.parse(stored) : DEFAULT_PRODUCTOS;
  });

  useEffect(() => {
    if (!isAdmin) navigate("/login");
  }, [isAdmin, navigate]);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const handleAgregarProducto = () => {
    const nuevo = {
      id: Date.now(),
      nombre: "Nuevo Producto",
      descripcion: "Descripción del producto",
      precio: 0
    };
    setProductos(prev => [...prev, nuevo]);
  };

  const handleEliminarProducto = (id) => {
    setProductos(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestión de Productos</h2>
        <Button variant="primary" onClick={handleAgregarProducto}>
          Agregar Producto
        </Button>
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>
                <Form.Control
                  value={producto.nombre}
                  onChange={(e) => setProductos(prev =>
                    prev.map(p => p.id === producto.id ? {...p, nombre: e.target.value} : p)
                  )}
                />
              </td>
              <td>
                <Form.Control
                  value={producto.descripcion}
                  onChange={(e) => setProductos(prev =>
                    prev.map(p => p.id === producto.id ? {...p, descripcion: e.target.value} : p)
                  )}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={producto.precio}
                  onChange={(e) => setProductos(prev =>
                    prev.map(p => p.id === producto.id ? {...p, precio: Number(e.target.value)} : p)
                  )}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => handleEliminarProducto(producto.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminProductos;