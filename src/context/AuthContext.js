// ...existing code...
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin ? "true" : "false");
  }, [isAdmin]);

  function login(email, password) {
    if (email === "admin@admin.com" && password === "admin") {
      setIsAdmin(true);
      return true;
    }
    return false;
  }

  function logout() {
    setIsAdmin(false);
  }

  const value = { isAdmin, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
// ...existing code...