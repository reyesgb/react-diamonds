import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/estilos.css";
import { Card } from "react-bootstrap";
import SeguridadImg from "../assets/images/Servicios/seguridad.jpg";

function DetallesSeguridad() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <Card.Img
                  variant="top"
                  src={SeguridadImg}
                  alt="ciberseguridad"
                  className="rounded-circle mx-auto"
                />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="text-primary fw-bold">Ciberseguridad</h2>
          <p className="text-muted">
            Protege tus datos y los de tus clientes con nuestros servicios de auditoría, monitoreo y gestión de seguridad digital.
          </p>
          <ul className="list-unstyled mb-3">
            <li>✅ Análisis de vulnerabilidades</li>
            <li>✅ Protección contra ataques</li>
            <li>✅ Copias de seguridad automáticas</li>
            <li>✅ Cumplimiento de normativas</li>
          </ul>
          <button className="btn btn-primary px-4">Solicitar servicio</button>
        </div>
      </div>
    </div>
  );
}

export default DetallesSeguridad;
