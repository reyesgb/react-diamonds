import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/estilos.css";

function DetallesServicio() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Imagen del servicio */}
        <div className="col-md-6 text-center">
          <img
            src="/images/servicio1.jpg"
            alt="Servicio ejemplo"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Texto del servicio */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="mb-3 text-primary fw-bold">Desarrollo Web Personalizado</h2>
          <p className="text-muted">
            Creamos soluciones web a la medida de tus necesidades, optimizadas para todos los dispositivos.
            Nuestro equipo combina diseño moderno y funcionalidad avanzada para ofrecerte una experiencia
            digital profesional y atractiva.
          </p>

          <ul className="list-unstyled mb-3">
            <li>✅ Diseño adaptable (responsive)</li>
            <li>✅ Código optimizado para SEO</li>
            <li>✅ Integración con redes sociales</li>
            <li>✅ Soporte técnico post-lanzamiento</li>
          </ul>

          <button className="btn btn-primary px-4">Solicitar servicio</button>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="row mt-5">
        <div className="col">
          <h4 className="text-secondary mb-3">¿Por qué elegirnos?</h4>
          <p>
            En Padima EcoMarket creemos en el desarrollo sostenible y la innovación.
            Nuestros servicios están pensados para potenciar tu presencia digital mientras cuidamos el entorno.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetallesServicio;
