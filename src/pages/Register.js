import React from "react";

function Register() {
  return (
    <div className="container">
      <h1>Registro de Usuario</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
