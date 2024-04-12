const mongoose = require('mongoose');
const Decimal128 = mongoose.Types.Decimal128;
const Schema = mongoose.Schema;
const Categoria = mongoose.model('Categoria');
const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: new Decimal128(),
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    fechaVencimiento: {
        type: Date,
        required: false
    },
    foto: {
        type: String,
        required: true
    },
    categoria: {
        type: Schema.ObjectId,
        ref: "Categoria",
        required: true
    },
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
