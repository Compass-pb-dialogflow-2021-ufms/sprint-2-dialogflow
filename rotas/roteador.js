const roteador = require('express').Router()
const mongoose = require('mongoose')
const Game = require('../infraestrutura/Models/Game')


roteador.post('/', async (req, res) =>
{
    const {name, valor, plataforma, emailContato} = req.body
    if(!name)
        res.status(400).json({erro: "O nome do jogo é obrigatório"})
    const game = {name, valor, plataforma, emailContato}

    try
    {
        await Game.create(game)
        res.status(201).json({message: 'Pessoa inserida com sucesso'})
    }
    catch (erro)
    {
        res.status(500).json({erro: erro})
    }
})


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
        if (!game)
        {
            res.status(400).json({message: 'O usuário não foi encontrado'})
            return
        }
        res.status(200).json({game})    
    }
    catch (erro)
    {
        res.status(500).json({erro: erro})
    }
})


roteador.patch('/:id', async (req, res) =>
{
    const id = req.params.id
    const {name, valor, plataforma, emailContato} = req.body
    const game = {name, valor, plataforma, emailContato}

    try
    {
        const updatedGame = await Game.updateOne({_id: id}, game)
        if(updatedGame.matchedCount === 0)
        {
            res.status(400).json({message: 'O usuário não foi encontrado'})
            return
        }
        res.status(200).json(game)
    }
    catch (erro)
    {
        res.status(500).json({erro: erro})
    }
})


roteador.delete('/:id', async (req, res) =>
{
    const id = req.params.id
    try
    {
        await Game.deleteOne({_id: id})
        res.status(200).json({message: "Jogo removido com sucesso!"})
    }
    catch (erro)
    {
        res.status(500).json({erro: erro})
    }
})


module.exports = roteador