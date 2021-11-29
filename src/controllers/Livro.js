const Livro = require('../models/Livro')

const buscarLivros = (req, res, next) => {
    res.send({ msg: "Rota GET para livros." })
}

const inserirLivro = (req, res, next) => {
    res.send({ msg: "Rota POST para livros." })
}

const atualizarLivro = (req, res, next) => {
    res.send({ msg: "Rota PUT para livros." })
}

const deletarLivro = (req, res, next) => {
    res.send({ msg: "Rota DELETE para livros." })
}

module.exports = {
      buscarLivros
    , inserirLivro
    , atualizarLivro
    , deletarLivro
}