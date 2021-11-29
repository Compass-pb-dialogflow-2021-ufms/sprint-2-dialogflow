const Celular = require('../database/tabelas');
const mongoose = require('mongoose');
const validacao = require('./validacao');
module.exports = {

    async listar(){
        const resultados = await Celular.find().lean();    
        return resultados;
    },

    async adicionar(req){
        const resultado = await Celular.create(req.body);
        return resultado;
    },

    async atualizar(id,req){
        validacao.validaRequisicao(req.body);
        await Celular.updateOne({_id : `${mongoose.Types.ObjectId(id)}`},{
                $set: {
                    marca : req.body.marca,
                    modelo : req.body.modelo,
                    valor : req.body.valor}
             }).lean();   
    },

    async deletar(id){
        await Celular.deleteOne({_id : `${mongoose.Types.ObjectId(id)}`});
    },

    async buscaEspecifica(id){
        const resultado = await Celular.findById({_id : `${mongoose.Types.ObjectId(id)}`}).lean();
        if(!resultado){
            throw new Error("Celular não encontrado");
        }
        return resultado;
    }

    


}
