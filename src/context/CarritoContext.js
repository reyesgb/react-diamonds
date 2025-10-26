// ...existing code...
import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function useCarrito() {
  return useContext(CarritoContext);
}

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const mismoId = (a, b) => String(a) === String(b);

  function agregarAlCarrito(producto, cantidad = 1, merge = false) {
    if (!producto || producto.id === undefined) return;
    setCarrito((prev) => {
      if (merge) {
        const existe = prev.find((p) => mismoId(p.id, producto.id));
        if (existe) {
          return prev.map((p) =>
            mismoId(p.id, producto.id)
              ? { ...p, cantidad: (p.cantidad || 0) + cantidad }
              : p
          );
        }
        return [...prev, { ...producto, cantidad }];
      } else {
        const linea = {
          ...producto,
          cantidad,
          __lineId: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        };
        return [...prev, linea];
      }
    });
  }

  // ahora elimina solo la línea exacta si recibe __lineId,
  // o elimina la primera ocurrencia del id (o todas si removeAll === true)
  function eliminarDelCarrito(idOrLineId, removeAll = false) {
    if (idOrLineId === undefined || idOrLineId === null) return;

    setCarrito((prev) => {
      // Si coincide con __lineId => eliminar esa línea concreta
      if (prev.some((p) => String(p.__lineId) === String(idOrLineId))) {
        return prev.filter((p) => String(p.__lineId) !== String(idOrLineId));
      }

      // Si se pidió eliminar todas las ocurrencias del id
      if (removeAll) {
        return prev.filter((p) => !mismoId(p.id, idOrLineId));
      }

      // Sino eliminar solo la primera coincidencia por id
      const index = prev.findIndex((p) => mismoId(p.id, idOrLineId));
      if (index === -1) return prev;
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  }

  function decrementarProducto(idOrLineId) {
    setCarrito((prev) => {
      // intenta por __lineId primero
      if (prev.some((p) => String(p.__lineId) === String(idOrLineId))) {
        return prev
          .map((p) =>
            String(p.__lineId) === String(idOrLineId)
              ? { ...p, cantidad: Math.max((p.cantidad || 1) - 1, 0) }
              : p
          )
          .filter((p) => p.cantidad > 0);
      }
      // sino decrementa la primera coincidencia por id
      let decremented = false;
      return prev
        .map((p) => {
          if (!decremented && mismoId(p.id, idOrLineId)) {
            decremented = true;
            return { ...p, cantidad: Math.max((p.cantidad || 1) - 1, 0) };
          }
          return p;
        })
        .filter((p) => p.cantidad > 0);
    });
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  const totalItems = carrito.reduce((s, p) => s + (p.cantidad || 0), 0);
  const totalPrecio = carrito.reduce(
    (s, p) => s + (p.precio || 0) * (p.cantidad || 0),
    0
  );

  const value = {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    decrementarProducto,
    vaciarCarrito,
    totalItems,
    totalPrecio,
  };

  return <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>;
}
// ...existing code...