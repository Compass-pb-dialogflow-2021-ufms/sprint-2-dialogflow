const express = require('express')
const router = express.Router()

const livroController = require('../controllers/Livro')

router.get('/', livroController.buscarLivros)

router.post('/', livroController.inserirLivro)

router.put('/', livroController.atualizarLivro)

router.delete('/', livroController.deletarLivro)

module.exports = router