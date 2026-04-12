import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRoutes from './Routes/User.routes.js';

dotenv.config();

const app = express();

// ===============================
// CONFIGURACIÓN DE CORS
// ===============================
const dominiosPermitidos = [
  'https://gastos-c-g2x2.vercel.app',
  'https://gastos-c-s7tf.vercel.app',
  'http://localhost:5173',
  'http://127.0.0.1:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permite Postman, Thunder Client o requests sin origin
    if (!origin) {
      return callback(null, true);
    }

    // Permite tus dominios + cualquier deploy de Vercel
    if (
      dominiosPermitidos.includes(origin) ||
      origin.endsWith('.vercel.app')
    ) {
      return callback(null, true);
    }

    return callback(new Error('Bloqueado por CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Aplicar CORS
app.use(cors(corsOptions));

// Responder preflight OPTIONS manualmente
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// ===============================
// MIDDLEWARES
// ===============================
app.use(express.json());

// ===============================
// CONEXIÓN A MONGODB
// ===============================
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado exitosamente');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error);
  }
};

connectDB();

// ===============================
// RUTAS
// ===============================
app.use('/api/users', UserRoutes);

// ===============================
// SERVIDOR LOCAL
// ===============================
const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
  });
}

// Exportar para Vercel
export default app;