import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
  personal: { type: mongoose.Schema.Types.ObjectId, ref: 'personal', required: true },
  producto: {  type: mongoose.Schema.Types.ObjectId, ref: 'products',required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const sale = mongoose.model('sale', saleSchema);

export default sale;
