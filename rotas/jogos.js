const express = require('express')
const { restart } = require('nodemon')
const roteador = express.Router()
const controladorDeJogos = require('../controlador/controladorDeJogos')

//Rota de GET geral
roteador.get('/', controladorDeJogos.buscarJogos)

//Rota de GET especifico
roteador.get('/:id', controladorDeJogos.getJogo, controladorDeJogos.buscarJogoEspecifico)

//Rota de POST
roteador.post('/', controladorDeJogos.inserirJogo)

//Rota de UPDATE
roteador.patch('/:id', controladorDeJogos.getJogo, controladorDeJogos.atualizarJogo)

//Rota de DELETE
roteador.delete('/:id', controladorDeJogos.getJogo, controladorDeJogos.deletarJogo)

module.exports = roteador