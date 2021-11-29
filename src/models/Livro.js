const mongoose = require('../config/databaseConnection')

const LivroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        unique: true,
        required: true
    },
    autor: {
        type: String
    },
    edicao: {
        type: String
    },
    critica: {
        type: String
    }
})

const Livro = mongoose.model('Livro', LivroSchema)