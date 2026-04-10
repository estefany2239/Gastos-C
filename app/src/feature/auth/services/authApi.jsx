import axios from 'axios';

// Usamos 127.0.0.1 para evitar problemas de conexión en local
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:4000/api/users' });

export const registrarUsuario = async (datos) => {
    const res = await API.post('/registrar', datos);
    return res.data;
};

// Exportación exacta para que Iniciar.jsx la encuentre
export const iniciarSesion = async (datos) => {
    const res = await API.post('/login', datos);
    return res.data;
};