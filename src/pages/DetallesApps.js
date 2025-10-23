import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/estilos.css";

function DetallesApps() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src="/images/apps-moviles.jpg" alt="Aplicaciones móviles" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="text-primary fw-bold">Aplicaciones Móviles</h2>
          <p className="text-muted">
            Creamos aplicaciones móviles nativas e híbridas que se adaptan a las necesidades de tu negocio.
          </p>
          <ul className="list-unstyled mb-3">
            <li>✅ Apps para Android e iOS</li>
            <li>✅ Desarrollo con React Native</li>
            <li>✅ Diseño intuitivo y rápido</li>
            <li>✅ Integración con APIs externas</li>
          </ul>
          <button className="btn btn-primary px-4">Solicitar servicio</button>
        </div>
      </div>
    </div>
  );
}

export default DetallesApps;
