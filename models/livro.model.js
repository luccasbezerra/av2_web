const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let LivroSchema = new Schema({
    nomeLivro: {type: String, required: true, max: 100},
    autor: {type: String, required: true, max: 100},
    editora: {type: String, required: true, max: 100},
    dataLancamento: {type: Date, required: true},
    volume: {type: Number, required: true},
    isbn: {type: Number, required: true, unique: true},
});
// Exportar o modelo
module.exports = mongoose.model('Livro', LivroSchema);