import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/estilos.css";

function Servicios() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Nuestros Servicios</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="/images/desarrollo-web.jpg" className="card-img-top" alt="Desarrollo Web" />
            <div className="card-body">
              <h5 className="card-title">Desarrollo Web</h5>
              <p className="card-text">Sitios modernos y adaptativos.</p>
              <Link to="/servicios/desarrollo-web" className="btn btn-primary">Ver detalle</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="/images/diseno-ux.jpg" className="card-img-top" alt="Diseño UX" />
            <div className="card-body">
              <h5 className="card-title">Diseño UX/UI</h5>
              <p className="card-text">Experiencias de usuario óptimas.</p>
              <Link to="/servicios/diseno-ux" className="btn btn-primary">Ver detalle</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="/images/ciberseguridad.jpg" className="card-img-top" alt="Ciberseguridad" />
            <div className="card-body">
              <h5 className="card-title">Ciberseguridad</h5>
              <p className="card-text">Protección digital para tu empresa.</p>
              <Link to="/servicios/ciberseguridad" className="btn btn-primary">Ver detalle</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
