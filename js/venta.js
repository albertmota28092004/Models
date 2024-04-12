const mongoose = require('mongoose');
const Decimal128 = mongoose.Types.Decimal128;
const ventaSchema = new mongoose.Schema({
    fecha: { 
        type: Date,
        required: true
    },
    usuario: {
        type: Schema.ObjectId,
        ref: "Usuario",
        required: true
    },
    estado:  { 
        type: String,
        required: true
    }
  });
  
  const Venta = mongoose.model('Venta', ventaSchema);
  
  // Exportar los modelos
  module.exports = Venta;