import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRoutes from './Routes/User.routes.js';

dotenv.config();
const app = express();

// --- CONFIGURACIÓN DE CORS ---
// Permite que tu frontend local y el de producción hablen con este backend
const dominiosPermitidos = [
  'https://gastos-c-g2x2.vercel.app', 
  'http://localhost:5173',
  'http://127.0.0.1:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || dominiosPermitidos.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado por CORS'));
    }
  },
  credentials: true
}));

// Middleware para leer datos JSON
app.use(express.json());

// --- CONEXIÓN A MONGODB ---
const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB conectado exitosamente");
    } catch (error) {
        console.error("❌ Error conectando a MongoDB:", error);
    }
};

connectDB();

// --- RUTAS ---
app.use('/api/users', UserRoutes);

// --- MANEJO DEL PUERTO ---
const PORT = process.env.PORT || 4000;

// Solo ejecutamos app.listen en local. Vercel maneja esto automáticamente.
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
    });
}

export default app; // Vital para Vercel