const Contato = require('../models/ContatoModel');
const ContatoDomain = require('../domain/ContatoDomain');

exports.test = function (req, res) {
    res.send('Teste controller');
};

//Listar contatos
exports.listarContatos = function (req, res) {
    Contato.find({}).then(function(contato){
        res.send(contato);
    });
};
//Listar contato por id
exports.listarContatoId = function (req, res) {
    Contato.findById({_id: req.params.id}).then(function(contato){
        res.send(contato);
    })
};
//Adicionar contato
exports.add = function (req, res, next) {
    Contato.create(req.body).then(function (contato) {
        res.send(contato);
    }).catch(next);
};
//Atualizar contato
exports.update = function (req, res, next) {
   Contato.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(contato){
       Contato.findOne({_id: req.params.id}).then(function(contato){
           res.send(contato);
       });
   }).catch(next);
};
//Deletar contato por id
exports.delete = function (req, res, next) {
    Contato.findByIdAndRemove({
        _id: req.params.id
    }).then(function (contato) {
        res.send(contato);
    }).catch(next);
};