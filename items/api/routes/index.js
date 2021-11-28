const roteador = require('express').Router()
const Item = require('../models/modeloItem')

//GET TODOS----------------
roteador.get('/items/', async (req, res, next) => {
    try {
        const items = await Item.find( {}, {_id: 0, __v: 0, createdAt: 0} ).orFail()
        
        return res.status(200).send({ items })
    } catch (error) {
        return res.status(404).send( { Error: 'Não existem itens cadastrados' })
    }
})

//GET DETALHADO------------
roteador.get('/items/:id', async (req, res, next) => {
    try {
        const item = await Item.findOne( {
            itemID : req.params.id
        }, {_id: 0, __v: 0, createdAt: 0}).orFail()
        
        return res.status(200).send({ item })
    } catch (error) {
        return res.status(404).send( { Error: 'Item não encontrado' })
    }
})

//POST--------------------
roteador.post('/items', async (req, res, next) => {
    try {
        const item = await Item.create(req.body)
        
        return res.status(201).send({ item })
    } catch (error) {
        return res.status(303).send( { Error: 'Item já existe' })
    }
})

//DELETE-------------------
roteador.delete('/items/:id', async (req, res, next) => {
    try {
        const item = await Item.findOneAndDelete( {
            itemID : req.params.id
        }).orFail()
        
        return res.status(200).send({ Message: `item com o itemID: ${item.itemID} foi deletado!`})
    } catch (error) {
        return res.status(404).send( { Error: 'Item não encontrado' })
    }
})



//recebe a rota do servidor
module.exports = app => app.use('/api', roteador)
