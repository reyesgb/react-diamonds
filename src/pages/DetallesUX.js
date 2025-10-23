import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/estilos.css";

function DetallesUX() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src="/images/diseno-ux.jpg" alt="Diseño UX/UI" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="text-primary fw-bold">Diseño UX/UI</h2>
          <p className="text-muted">
            Desarrollamos interfaces centradas en el usuario. Nuestra prioridad es que tus clientes 
            disfruten una experiencia digital fluida, accesible y moderna.
          </p>
          <ul className="list-unstyled mb-3">
            <li>✅ Prototipos en Figma</li>
            <li>✅ Diseño accesible y funcional</li>
            <li>✅ Test de usabilidad</li>
            <li>✅ Identidad visual coherente</li>
          </ul>
          <button className="btn btn-primary px-4">Solicitar servicio</button>
        </div>
      </div>
    </div>
  );
}

export default DetallesUX;
