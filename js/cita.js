const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Servicio = mongoose.model('Servicio');
const Usuario = mongoose.model('Usuario');
const Decimal128 = mongoose.Types.Decimal128;
const citaSchema = new mongoose.Schema({
  cliente: {
    type: Schema.ObjectId,
    ref: "Usuario",
    required: true
  },
  fechaHora: {
    type: new Date().toISOString(),
    required: true
  },
  precio: {
    type: new Decimal128(),
    required: true
  },
  servicio: {
    type: Schema.ObjectId,
    ref: "Servicio",
    required: true
  }
});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;
