import React from "react";

function Login() {
  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
