import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true},
  stock: { type: Number}
});

const products = mongoose.model('products', productsSchema);

export default products;
