const mongoose = require('mongoose')


const Game = mongoose.model('Game', {
    name: String,
    valor: Number,
    plataforma: String,
    emailContato: String
})


module.exports = Game