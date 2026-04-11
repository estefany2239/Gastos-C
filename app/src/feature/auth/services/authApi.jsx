import axios from 'axios';

// Si existe la variable de entorno la usa (para Vercel), si no usa el local
const API = axios.create({ 
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api/users' 
});

export const registrarUsuario = async (datos) => {
    try {
        const res = await API.post('/registrar', datos);
        return res.data;
    } catch (error) {
        console.error("Error en registro:", error.response?.data || error.message);
        throw error;
    }
};

export const iniciarSesion = async (datos) => {
    try {
        const res = await API.post('/login', datos);
        return res.data;
    } catch (error) {
        console.error("Error en login:", error.response?.data || error.message);
        throw error;
    }
};