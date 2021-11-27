const config = require('config')
const mongoose = require('mongoose')

mongoose.connect(config.get( 'mongo.con' ))

mongoose.Promise = global.Promise

module.exports = mongoose

//Utilizado conexão ao MongoDB via atlas, caminhos dentro de config