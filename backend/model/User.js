import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('User', userSchema);