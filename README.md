# TP Mongoose

#Problema: 
Un comercio de suministros de limpieza requiere que cada uno de sus empleados pueda
registrar sus ventas de forma individual. Además, los empleados deben tener acceso a la
aplicación utilizando credenciales.

#Diagrama: 
![Productos](https://github.com/user-attachments/assets/064f4077-4e82-4849-9a0c-916e61ae72f8)


#Para solucionar el prblema planteado, se crearon diferentes modelos, entre los que tenemos: Usuarios, Empleados, Ventas y Productos.


#Modelo de Users:
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 userName: { type: String, required: true },
  contraseña: { type: String, required: true },
});

const user = mongoose.model('user', userSchema);

export default user;

 (en este modelo, se solicitan los datos de nombre de usuario y contraseña)

 #Modelo de Personal:

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


(En este, se solicitan los datos personales del empleado, nombre, apellido, etc)

#Modelo de Products:
import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true},
  stock: { type: Number}
});

const products = mongoose.model('products', productsSchema);

export default products;
(En este, se solicitan los datos de los productos del comercio)


#Modelo de Sale:

import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
  personal: { type: mongoose.Schema.Types.ObjectId, ref: 'personal', required: true },
  producto: {  type: mongoose.Schema.Types.ObjectId, ref: 'products',required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const sale = mongoose.model('sale', saleSchema);

export default sale;
(En este modelo, se solicitan los datos de las ventas, como el empleado que la realizó, y los ptos, entre otros)
