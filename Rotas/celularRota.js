const router = require('express').Router();
const Celular = require('../database/metodos');

router.get('/', async (req,res) => {
    try{
        const resultados = await Celular.listar();
        res.status(200).send(
            JSON.stringify(resultados)
        );
    }catch (erro){
        console.error(erro);
    }
});

router.post('/', async (req,res) =>{
    try{
        const resultados = await Celular.adicionar(req);    
        res.status(201).send(
            JSON.stringify(resultados)
        )    
    }catch (erro){
        res.status(400).send(
            JSON.stringify({mensagem : erro.message})
        );
    }
});

router.put('/:id', async (req,res) =>{
    try{
        const id = req.params;
        const resultado = await Celular.atualizar(id,req);
        res.status(204).end();
    }catch (erro){
        res.status(400).send(
            JSON.stringify({mensagem : erro.message})
        );
    }
});

router.delete('/:id', async (req,res) =>{
    try{
        const id = req.params;
        const resultado = await Celular.deletar(id,req);
        res.status(204).end();
    }catch (erro){
        res.status(400).send(
            JSON.stringify({mensagem : erro.message})
        );
    }
});

router.get('/:id', async (req,res) => {
    try{
        const id = req.params;
        const resultado = await Celular.buscaEspecifica(id);
        res.status(200).send(
            JSON.stringify(resultado)
        );
    }catch (erro){
        res.status(400).send(
            JSON.stringify({mensagem : erro.message})
        );
    }
});

module.exports = router;