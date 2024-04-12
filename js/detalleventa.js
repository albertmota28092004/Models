const mongoose = require('mongoose');
const Decimal128 = mongoose.Types.Decimal128;
const Schema = mongoose.Schema;
const Venta = mongoose.model('Venta');
const Producto = mongoose.model('Producto');
const detalleVentaSchema = new mongoose.Schema({
    venta: { 
        type: Schema.ObjectId,
        ref: "Venta",
        required: true
    },
    producto:  { 
        type: Schema.ObjectId,
        ref: "Producto",
        required: true
    },
    cantidad:  { 
        type: Number,
        required: true
    },
    precioHistorico:  { 
        type: new Decimal128(),
        required: true
    }
  });
  
  const DetalleVenta = mongoose.model('DetalleVenta', detalleVentaSchema);
  
  // Exportar los modelos
  module.exports = DetalleVenta;