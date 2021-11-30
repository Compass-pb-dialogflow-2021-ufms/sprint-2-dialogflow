const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContatoSchema = new Schema({
    nome:{
        type: String,
        required: [true, 'Campo Obrigatório']
    },
    email:[
        {
            type: String
        }
    ],
    telefone:[
        {
            type: String,
        }
    ],
});

const Contato = mongoose.model('contatos', ContatoSchema);

module.exports = Contato;
