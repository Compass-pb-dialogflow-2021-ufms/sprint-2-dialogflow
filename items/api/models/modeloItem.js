const mongoose = require('../db')

    //Schema básico de um item
    const ItemSchema = new mongoose.Schema({
        itemID: {
            type: Number,
            require: true,
        },
        nameItem: {
            type: String,
            require: true,
        },
        itemImgUrl: {
            type: String,
        },
        itemDescription: {
            type: String,
            require: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },

    });

//Transforma o Schema em modelo para uso dos métodos do mongo nas rotas
const Item = mongoose.model('Item', ItemSchema)
module.exports = Item
