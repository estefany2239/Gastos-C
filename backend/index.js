import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRoutes from './Routes/User.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // <--- Vital para que el registro funcione

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Conectado'))
    .catch(err => console.error('❌ Error:', err));

app.use('/api/users', UserRoutes); // <--- La ruta base

const PORT = 4000; 
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));