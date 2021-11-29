const mongoose = require('../config/databaseConnection')

const FilmeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        unique: true,
        required: true
    },
    diretor: {
        type: String
    },
    anoLancamento: {
        type: String
    },
    critica: {
        type: String
    }
})

const Filme = mongoose.model('Filme', FilmeSchema)

module.exports = Filme