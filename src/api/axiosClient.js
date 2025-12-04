// src/api/axiosClient.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api", // usa env var si está disponible
});

// Interceptor para agregar el token en cada request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("dd_token"); // nombre que usaremos
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
