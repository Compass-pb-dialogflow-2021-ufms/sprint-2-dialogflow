const express = require("express");
const router = express.Router();
const Contato = require('../models/ContatoModel')

router.get('/teste', (req,res) =>{
    res.json({mensagem: "Api teste"})
});

router.get('/contatos', async (req, res) => {
    try {
        const contato = await Contato.find()
        res.status(200).json(contato)

    } catch (erro) {
        res.status(500).json({
            erro: erro
        })
    }
})

router.get('/contatos/:id', async (req, res) => {
    const contatoId = req.params.id

    try {
        const contato = await Contato.findOne({
            _id: contatoId
        });

        if (!contato) {
            res.status(422).json({
                mensagem: 'O ususario não foi encontrado'
            })
            return
        }

        res.status(200).json(contato);

    } catch (erro) {
        res.status(500).json({
            erro: erro
        });
    }
})

router.post('/contatos', async (req, res) => {
    const {
        nome,
        email,
        telefone
    } = req.body;

    if (!nome) {
        res.status(422).json({
            erro: "Campo nome é obrigatório"
        })
        return;
    }

    const contato = {
        nome,
        email,
        telefone
    }

    try {
        await Contato.create(contato);
        res.status(201).json({
            mensagem: 'Contato Criado com sucesso'
        });
    } catch (erro) {
        res.status(400).json({
            erro: erro
        })
    }
})

router.put('/contatos/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const {
            nome,
            email,
            telefone
        } = req.body;

        const contato = {
            nome,
            email,
            telefone,
        }

        const contatoAtualizado = await Contato.updateOne({
            _id: id
        }, contato)

        res.status(200).json(contatoAtualizado);

    } catch (erro) {
        res.status(500).json({
            erro: erro
        })
    }

})

router.delete('/contatos/:id', async (req, res) => {
    const id = req.params.id

    const contato = await Contato.findOne({
        _id: id
    })

    if (!contato) {
        res.status(422).json({
            mensagem: 'O ususario não foi encontrado'
        })
        return
    }

    try {
        await Contato.deleteOne({
            _id: id
        })
        res.status(200).json({
            mensagem: 'Contato removido com sucesso'
        })
    } catch (erro) {
        res.status(500).json({
            erro: error
        })
    }
})

module.exports = router;