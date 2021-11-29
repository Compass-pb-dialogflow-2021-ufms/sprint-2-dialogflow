const Filme = require('../models/Filme')

const buscarFilmes = async (req, res, next) => {
    try {

        const titulo        = req.query.titulo ? req.query.titulo : ''
        const diretor       = req.query.diretor ? req.query.diretor : ''
        const anoLancamento = req.query.anoLancamento ? req.query.anoLancamento : ''

        const queryResult = await Filme.find(
            {
                  titulo: new RegExp(titulo, 'i')
                , diretor: new RegExp(diretor, 'i')
                , anoLancamento: new RegExp(anoLancamento, 'i')
            }
        ).then(result => {
            // Caso não encontre nenhum registro.
            if (result.toString() === '') throw error

            return result
        })

        return res.status(200).send(queryResult)

    } catch {
        return res.status(404).send({
            error: 'Nenhum filme encontrado !!!'
        })
    }
}

const inserirFilme = async (req, res, next) => {
    try {

        await Filme.create(req.body)
        return res.status(201).send({
            message: 'Filme inserido com sucesso !!!'
        })

    } catch {
        return res.status(409).send({
            error: 'O filme já existe !!!'
        })
    }
}

const atualizarFilme = async (req, res, next) => {
    try {

        // Parâmetro de buscar.
        const titulo = req.query.titulo
        // Valores para atualizar o registro.
        let novoTitulo            = req.body.novoTitulo ? req.body.novoTitulo : ''
        let novoDiretor           = req.body.novoDiretor ? req.body.novoDiretor : ''
        let novoAnoLancanmento    = req.body.novoAnoLancamento ? req.body.novoAnoLancamento : ''
        let novaCritica           = req.body.novaCritica ? req.body.novaCritica : ''

        // Verificar se há campos vazios e manter os valores anteriores do registro.
        const queryResult = await Filme.findOne({ titulo: titulo })

        if (novoTitulo === '')          novoTitulo = queryResult.titulo
        if (novoDiretor === '')         novoDiretor = queryResult.diretor
        if (novoAnoLancanmento === '')  novoAnoLancanmento = queryResult.anoLancamento
        if (novaCritica === '')         novaCritica = queryResult.critica

        await Filme.findOneAndUpdate(
            {
                titulo: titulo
            },
            {
                  titulo: novoTitulo
                , diretor: novoDiretor
                , anoLancamento: novoAnoLancanmento
                , critica: novaCritica
            }
        )

        return res.status(200).send({
            message: 'Filme atualizado com sucesso !!!'
        })

    } catch {
        res.status(404).send({
            error: 'Nenhum filme encontrado !!!'
        })
    }
}

const deletarFilme = async (req, res, next) => {
    try {

        const titulo = req.query.titulo
        await Filme.deleteOne({
            titulo: titulo
        }).then(result => {
            // Caso não delete nenhum registro.
            if (result.deletedCount === 0) throw error
        })

        return res.status(200).send({
            message: 'Filme deletado com sucesso !!!'
        })

    } catch {
        return res.status(404).send({
            error: 'Nenhum filme encontrado !!!'
        })
    }
}

module.exports = {
      buscarFilmes
    , inserirFilme
    , atualizarFilme
    , deletarFilme
}