const express = require('express')
const router = express.Router()

const filmeController = require('../controllers/Filme')

router.get('/', filmeController.buscarFilmes)

router.post('/', filmeController.inserirFilme)

router.put('/', filmeController.atualizarFilme)

router.delete('/', filmeController.deletarFilme)

module.exports = router