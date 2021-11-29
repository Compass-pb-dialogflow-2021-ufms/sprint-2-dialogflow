const Livro = require('../models/Livro')
const Filme = require("../models/Filme");

const buscarLivros = async (req, res, next) => {
    try {

        const titulo    = req.query.titulo ? req.query.titulo : ''
        const autor     = req.query.autor ? req.query.autor : ''
        const edicao    = req.query.edicao ? req.query.edicao : ''

        const queryResult = await Livro.find(
            {
                  titulo: new RegExp(titulo, 'i')
                , autor: new RegExp(autor, 'i')
                , edicao: new RegExp(edicao, 'i')
            }
        ).then(result => {
            // Caso não encontre nenhum registro.
            if (result.toString() === '') throw error

            return result
        })

        return res.status(200).send(queryResult)

    } catch {
        return res.status(404).send({
            error: 'Nenhum livro encontrado !!!'
        })
    }
}

const inserirLivro = async (req, res, next) => {
    try {

        await Livro.create(req.body)
        return res.status(201).send({
            message: 'Livro inserido com sucesso !!!'
        })

    } catch {
        return res.status(409).send({
            error: 'O livro já existe !!!'
        })
    }
}

const atualizarLivro = async (req, res, next) => {
    try {

        // Parâmetro de buscar.
        const titulo = req.query.titulo
        // Valores para atualizar o registro.
        let novoTitulo  = req.body.novoTitulo ? req.body.novoTitulo : ''
        let novoAutor   = req.body.novoAutor ? req.body.novoAutor : ''
        let novaEdicao  = req.body.novaEdicao ? req.body.novaEdicao : ''
        let novaCritica = req.body.novaCritica ? req.body.novaCritica : ''

        // Verificar se há campos vazios e manter os valores anteriores do registro.
        const queryResult = await Livro.findOne({ titulo: titulo })

        if (novoTitulo === '')  novoTitulo = queryResult.titulo
        if (novoAutor === '')   novoAutor = queryResult.autor
        if (novaEdicao === '')  novaEdicao = queryResult.edicao
        if (novaCritica === '') novaCritica = queryResult.critica

        await Livro.findOneAndUpdate(
            {
                titulo: titulo
            },
            {
                  titulo: novoTitulo
                , autor: novoAutor
                , edicao: novaEdicao
                , critica: novaCritica
            }
        )

        return res.status(200).send({
            message: 'Livro atualizado com sucesso !!!'
        })

    } catch {
        res.status(404).send({
            error: 'Nenhum livro encontrado !!!'
        })
    }
}

const deletarLivro = async (req, res, next) => {
    try {

        const titulo = req.query.titulo
        await Livro.deleteOne({
            titulo: titulo
        }).then(result => {
            // Caso não delete nenhum registro.
            if (result.deletedCount === 0) throw error
        })

        return res.status(200).send({
            message: 'Livro deletado com sucesso !!!'
        })

    } catch {
        return res.status(404).send({
            error: 'Nenhum livro encontrado !!!'
        })
    }
}

module.exports = {
      buscarLivros
    , inserirLivro
    , atualizarLivro
    , deletarLivro
}