import axios from "axios";

// ==============================
// URLS DEL BACKEND
// ==============================

const URL_PRODUCCION = "https://gastos-c.vercel.app/api/users";
const URL_LOCAL = "http://localhost:4000/api/users";

// Detecta automáticamente si estás en producción o local
const BASE_URL = import.meta.env.PROD ? URL_PRODUCCION : URL_LOCAL;

// ==============================
// INSTANCIA DE AXIOS
// ==============================

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// ==============================
// REGISTRAR USUARIO
// ==============================

export const registrarUsuario = async (datos) => {
  try {

    const respuesta = await API.post("/registrar", datos);

    return respuesta.data;

  } catch (error) {

    console.error(
      "Error en registro:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// ==============================
// INICIAR SESIÓN
// ==============================

export const iniciarSesion = async (datos) => {
  try {

    const respuesta = await API.post("/login", datos);

    return respuesta.data;

  } catch (error) {

    console.error(
      "Error en login:",
      error.response?.data || error.message
    );

    throw error;
  }
};