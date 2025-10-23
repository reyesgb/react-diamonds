import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/estilos.css";

function DetallesDesarrollo() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src="/images/desarrollo-web.jpg" alt="Desarrollo Web" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="text-primary fw-bold">Desarrollo Web</h2>
          <p className="text-muted">
            Creamos sitios web modernos, rápidos y adaptativos. Utilizamos las tecnologías más recientes
            para ofrecer experiencias digitales funcionales, atractivas y seguras.
          </p>
          <ul className="list-unstyled mb-3">
            <li>✅ Diseño responsive</li>
            <li>✅ Optimización SEO</li>
            <li>✅ Conexión con bases de datos</li>
            <li>✅ Escalabilidad garantizada</li>
          </ul>
          <button className="btn btn-primary px-4">Solicitar servicio</button>
        </div>
      </div>
    </div>
  );
}

export default DetallesDesarrollo;
