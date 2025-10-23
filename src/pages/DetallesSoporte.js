import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/estilos.css";

function DetallesSoporte() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src="/images/soporte.jpg" alt="Soporte Técnico" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="text-primary fw-bold">Soporte Técnico</h2>
          <p className="text-muted">
            Ofrecemos soporte técnico remoto y presencial para resolver incidencias y mantener tu sistema siempre operativo.
          </p>
          <ul className="list-unstyled mb-3">
            <li>✅ Atención personalizada</li>
            <li>✅ Mantenimiento preventivo</li>
            <li>✅ Diagnóstico de fallas</li>
            <li>✅ Asistencia 24/7</li>
          </ul>
          <button className="btn btn-primary px-4">Solicitar servicio</button>
        </div>
      </div>
    </div>
  );
}

export default DetallesSoporte;
