import mongoose from 'mongoose';

const personalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  sex: { type: String },
  birthDate: {type: Date, required: true},
  dni: {type: Number, required: true},
});

const personal = mongoose.model('user',personalSchema);

export default personal;
