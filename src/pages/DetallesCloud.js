import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/estilos.css";
import { Card } from "react-bootstrap";
import DesarrolloImg from "../assets/images/Servicios/datos.jpg";


function DetallesCloud() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <Card.Img
                  variant="top"
                  src={DesarrolloImg}
                  alt="consultoría cloud"
                  className="rounded-circle mx-auto"
                />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="text-primary fw-bold">Consultoría Cloud</h2>
          <p className="text-muted">
            Te ayudamos a migrar tus sistemas a la nube con seguridad, optimizando costos y mejorando la escalabilidad de tu negocio.
          </p>
          <ul className="list-unstyled mb-3">
            <li>✅ Migración a AWS, Azure o Google Cloud</li>
            <li>✅ Automatización de procesos</li>
            <li>✅ Respaldo y recuperación</li>
            <li>✅ Monitoreo en tiempo real</li>
          </ul>
          <button className="btn btn-primary px-4">Solicitar servicio</button>
        </div>
      </div>
    </div>
  );
}

export default DetallesCloud;
