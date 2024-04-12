const mongoose = require('mongoose');
const Decimal128 = mongoose.Types.Decimal128;
const servicioSchema = new mongoose.Schema({
    nombre:  { 
        type: String,
        required: true
    }, 
    descripcion: { 
        type: String,
        required: true
    }
  });
  
  const Servicio = mongoose.model('Servicio', servicioSchema);
  
  // Exportar los modelos
  module.exports = Servicio;