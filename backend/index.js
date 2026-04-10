import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRoutes from './Routes/User.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // <--- Vital para que el registro funcione

// 2. Conexión a DB mejorada para Serverless
const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Mongo conectado exitosamente");
    } catch (error) {
        console.error("Error conectando a Mongo:", error);
    }
};

// Conectamos antes de definir rutas
connectDB();

app.use('/api/users', UserRoutes); // <--- La ruta base

const PORT = 4000; 
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}