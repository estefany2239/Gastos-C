import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/User.js'; // Ajusta la ruta a tu modelo

const router = express.Router();

// --- RUTA DE LOGIN (LA QUE TE FALLA) ---
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Buscar el usuario por email
        const usuario = await User.findOne({ email });
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Credenciales incorrectas' });
        }

        // 2. Comparar contraseña escrita con la de la BD (encriptada)
        const passwordCorrecto = await bcrypt.compare(password, usuario.password);
        if (!passwordCorrecto) {
            return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        }

        // 3. Crear el Token (JWT)
        const token = jwt.sign(
            { id: usuario._id }, 
            process.env.JWT_SECRET || 'clave_secreta_provisional', 
            { expiresIn: '1d' }
        );

        // 4. Enviar respuesta exitosa
        res.json({
            token,
            usuario: {
                id: usuario._id,
                name: usuario.name,
                email: usuario.email
            }
        });

    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// --- RUTA DE REGISTRO (POR SI ACASO) ---
router.post('/registrar', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const existe = await User.findOne({ email });
        if (existe) return res.status(400).json({ mensaje: 'El correo ya existe' });

        // Encriptar antes de guardar
        const salt = await bcrypt.genSalt(10);
        const passwordHasheado = await bcrypt.hash(password, salt);

        const nuevoUsuario = new User({
            name,
            email,
            password: passwordHasheado
        });

        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario creado con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar' });
    }
});

export default router;