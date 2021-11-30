const roteador = require('express').Router()
const mongoose = require('mongoose')
const Game = require('../infraestrutura/Models/Game')


async function existeId(id, res) 
{
    try
    {
        const acharId = await Game.findOne({_id: id})
        return true
    }
    catch (erro)
    {
        res.status(404).json({erro: "O id solicitado não corresponde a nenhum jogo cadastrado!"})
        erro.message = "O id solicitado não corresponde a nenhum jogo cadastrado!"
        console.log(erro)
        return false
    }
}


roteador.get('/', async (_, res) =>
{
    try
    {
        const games = await Game.find()
        res.status(200).json(games)
    }
    catch (erro)
    {
        res.status(500).json({erro: erro})
    }
})


roteador.get('/:id', async (req, res) =>
{
    const id = req.params.id
    try
    {
        const game = await Game.findOne({_id: id})
        res.status(200).json({game})    
    }
    catch (erro)
    {
        res.status(404).json({erro: "O id solicitado não corresponde a nenhum jogo cadastrado!"})
        erro.message = "O id solicitado não corresponde a nenhum jogo cadastrado!"
        console.log(erro)
    }
})


roteador.post('/', async (req, res) =>
{
    const {name, valor, plataforma, emailContato} = req.body
    if(!name)
    {
        res.status(400).json({erro: "O nome do jogo é obrigatório!"})
        return
    }
    if(!valor || typeof valor == "string")
    {
        res.status(400).json({erro: "O valor do jogo é obrigatório e deve ser um número!"})
        return
    }
    if(!plataforma)
    {
        res.status(400).json({erro: "A plataforma do jogo é obrigatória!"})
        return
    }
    if(!emailContato)
    {
        res.status(400).json({erro: "É obrigatório o fornecimento de um email para contato!"})
        return
    }
    const game = {name, valor, plataforma, emailContato}

    try
    {
        await Game.create(game)
        res.status(201).json({message: 'Jogo inserido com sucesso'})
    }
    catch (erro)
    {
        res.status(500).json({erro: erro})
    }
})


roteador.patch('/:id', async (req, res) =>
{
    const id = req.params.id
    const idValido = await existeId(id, res)
    if(idValido)
    {

        const {name, valor, plataforma, emailContato} = req.body
        if(typeof name == "undefined" && typeof valor == "undefined" && typeof plataforma == "undefined" && typeof emailContato == "undefined")
        {
            res.status(400).json({message: "O conjunto de chaves é inválido!"})
            return
        }
        const game = {name, valor, plataforma, emailContato}
    
        try
        {
            const updatedGame = await Game.updateOne({_id: id}, game)
            res.status(204)
            res.end()
        }
        catch (erro)
        {
            res.status(500).json({erro: erro})
        }
    }
})


roteador.delete('/:id', async (req, res) =>
{
    const id = req.params.id
    const idValido = await existeId(id, res)
    if(idValido)
    {
        try
        {
            await Game.deleteOne({_id: id})
            res.status(204)
            res.end()
        }
        catch (erro)
        {
            res.status(500).json({erro: erro})
        }
    }
})


module.exports = roteador