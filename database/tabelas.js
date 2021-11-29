const moongose = require('mongoose');

const Schema = moongose.Schema;

const celularSchema = new Schema({
    marca: {type: String, required: true, index : true},
    modelo: {type: String, required: true},
    valor:  {type: Number, required: true}
});

const celular = moongose.model('celular', celularSchema);


module.exports = celular;