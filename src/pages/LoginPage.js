// src/pages/LoginPage.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, pass);
    } catch (err) {
      console.error(err);
      setError("Error al iniciar sesión. Revisa tus credenciales.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Login DataDiamonds</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Contraseña</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        {error && (
          <p style={{ color: "red", marginTop: 10 }}>{error}</p>
        )}
        <button type="submit" style={{ marginTop: 15 }}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
