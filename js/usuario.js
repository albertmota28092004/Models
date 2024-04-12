const mongoose = require('mongoose');
/*const ObjectId = mongoose.Types.ObjectId;*/
const usuarioSchema = new mongoose.Schema({
    cedula: {
        type: Number,
        required: true,
        unique: [true, 'Debe registrar su cédula'],
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    nombreUsuario: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: [true, 'Debe registrar su correo']
    },
    rol: {
        type: String,
        required: true
    }
  });
  
  const Usuario = mongoose.model('Usuario', usuarioSchema);

  module.exports = Usuario;
