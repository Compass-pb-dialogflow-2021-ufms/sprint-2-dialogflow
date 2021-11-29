const Filme = require('../models/Filme')

const buscarFilmes = (req, res, next) => {
    res.send({ msg: "Rota GET para filmes." })
}

const inserirFilme = (req, res, next) => {
    res.send({ msg: "Rota POST para filmes." })
}

const atualizarFilme = (req, res, next) => {
    res.send({ msg: "Rota PUT para filmes." })
}

const deletarFilme = (req, res, next) => {
    res.send({ msg: "Rota DELETE para filmes." })
}

module.exports = {
      buscarFilmes
    , inserirFilme
    , atualizarFilme
    , deletarFilme
}