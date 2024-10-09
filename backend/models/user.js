import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 userName: { type: String, required: true },
  contraseña: { type: String, required: true },
});

const user = mongoose.model('user', userSchema);

export default user;
