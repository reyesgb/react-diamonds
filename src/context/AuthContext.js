// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getIdToken,
  getIdTokenResult,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);          // objeto de Firebase
  const [role, setRole] = useState(null);          // "ADMIN" o "USER"
  const [loading, setLoading] = useState(true);    // mientras verifica sesión

  // ✅ Mantener sesión al recargar (usa Firebase + localStorage)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        setUser(fbUser);
        const token = await getIdToken(fbUser, true);
        localStorage.setItem("dd_token", token);

        const tokenResult = await getIdTokenResult(fbUser);
        const claimsRole = tokenResult.claims.role || "USER";
        setRole(claimsRole);
        localStorage.setItem("dd_role", claimsRole);
      } else {
        setUser(null);
        setRole(null);
        localStorage.removeItem("dd_token");
        localStorage.removeItem("dd_role");
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const fbUser = res.user;
    setUser(fbUser);

    const token = await getIdToken(fbUser, true);
    localStorage.setItem("dd_token", token);

    const tokenResult = await getIdTokenResult(fbUser);
    const claimsRole = tokenResult.claims.role || "USER";
    setRole(claimsRole);
    localStorage.setItem("dd_role", claimsRole);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setRole(null);
    localStorage.removeItem("dd_token");
    localStorage.removeItem("dd_role");
  };

  const value = {
    user,
    role,
    loading,
    login,
    logout,
    isAdmin: role === "ADMIN",
    isUser: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
