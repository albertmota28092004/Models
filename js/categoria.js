const mongoose = require('mongoose');
const Decimal128 = mongoose.Types.Decimal128;
const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

// Exportar los modelos
module.exports = Categoria;