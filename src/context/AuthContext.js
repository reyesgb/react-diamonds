// ✅ AuthContext.js (actualizado)
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userLogged");
    const adminData = localStorage.getItem("adminLogged");
    if (adminData === "true") setIsAdmin(true);
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const login = (data) => {
    if (data.email === "admin@admin.cl" && data.pass === "admin123") {
      localStorage.setItem("adminLogged", "true");
      setIsAdmin(true);
      return { success: true, isAdmin: true };
    } else {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const found = users.find(
        (u) => u.email === data.email.trim() && u.pass === data.pass
      );
      if (found) {
        localStorage.setItem("userLogged", JSON.stringify(found));
        setUser(found);
        return { success: true, isAdmin: false };
      }
    }
    return { success: false };
  };

  const logout = () => {
    localStorage.removeItem("userLogged");
    localStorage.removeItem("adminLogged");
    setUser(null);
    setIsAdmin(false);
  };

  const isLoggedIn = isAdmin || !!user;

  return (
    <AuthContext.Provider value={{ user, isAdmin, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
