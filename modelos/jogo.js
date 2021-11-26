const mongoose = require('mongoose')

const jogoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    nota:{
        type: Number,
        required: true
    },
    genero:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Jogo', jogoSchema)