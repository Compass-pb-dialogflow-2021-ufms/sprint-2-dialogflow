const express = require('express')
const { restart } = require('nodemon')
const roteador = express.Router()
const Jogo = require('../modelos/jogo')

//Rota de GET geral
roteador.get('/', async (req, res) =>{
    try{
        const jogo = await Jogo.find()
        res.json(jogo)
    } catch(err){
        res.status(500).json({message: 'Erro interno do servidor'})
    }
})

//Rota de GET especifico
roteador.get('/:id', getJogo, (req, res) =>{
    res.send(res.jogo)
})

//Rota de POST
roteador.post('/', async (req, res) =>{
    const jogo = new Jogo({
        nome: req.body.nome,
        nota: req.body.nota,
        genero: req.body.genero
    })
    try{
        const novoJogo = await jogo.save()
        res.status(201).json(novoJogo)
    }catch(err){
        res.status(400).json({ message: 'Não foi possível adicionar um jogo' })
    }
})

//Rota de UPDATE
roteador.patch('/:id', getJogo, async (req, res) => {
    if (req.body.nome != null) {
      res.jogo.nome = req.body.nome
    }
    if (req.body.nota != null) {
      res.jogo.nota = req.body.nota
    }
    if (req.body.genero != null) {
        res.jogo.genero = req.body.genero
    }
    try {
      const updateDoJogo = await res.jogo.save()
      res.json(updateDoJogo)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

//Rota de DELETE
roteador.delete('/:id', getJogo, async (req, res) =>{
    try{
        await res.jogo.remove()
        res.json({message: 'Jogo deletado'})
    }catch (err){
        res.status(500).json({message: 'Erro interno do servidor'})
    }
})

//Middleware que pega o jogo e pula para o próximo
async function getJogo(req, res, next){
    let jogo
    try{
        jogo = await Jogo.findById(req.params.id)
        if(jogo == null){
            return res.status(404).json({ message: 'Jogo não encontrado'})
        }
    } catch(err){
        return res.status(500).json({ message: 'Erro interno do servidor'})
    }

    res.jogo = jogo
    next()
}

module.exports = roteador