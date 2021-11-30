const express = require('express')
const mongoose = require('mongoose')
const Game = require('./infraestrutura/Models/Game')


const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/', (_, res) =>
{
    res.json({ message: 'Você está na página inicial!'})
})


app.post('/game', async (req, res) =>
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


app.get('/game', async (_, res) =>
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


app.get('/game/:id', async (req, res) =>
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


app.patch('/game/:id', async (req, res) =>
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


app.delete('/game/:id', async (req, res) =>
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


mongoose.connect('mongodb+srv://horiel:admin@entregasprint2.xcqrc.mongodb.net/bancodaapi?retryWrites=true&w=majority')
.then(() =>
{
    console.log('Banco de dados conectado!')
    app.listen(5000, ()=> {console.log('Servidor Rodando!!!')})
})
.catch((erro) => console.log(erro))


//usuario: horiel   senha: admin
//mongodb+srv://horiel:admin@entregasprint2.xcqrc.mongodb.net/bancodaapi?retryWrites=true&w=majority