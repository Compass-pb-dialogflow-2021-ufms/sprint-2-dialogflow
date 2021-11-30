const express = require('express')
const roteador = require('./rotas/roteador')
const mongoose = require('mongoose')


const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/game', roteador)


mongoose.connect('mongodb+srv://horiel:admin@entregasprint2.xcqrc.mongodb.net/bancodaapi?retryWrites=true&w=majority')
.then(() =>
{
    console.log('Banco de dados conectado!')
    app.listen(5000, ()=> {console.log('Servidor Rodando!!!')})
})
.catch((erro) => console.log(erro))


//usuario: horiel   senha: admin
//mongodb+srv://horiel:admin@entregasprint2.xcqrc.mongodb.net/bancodaapi?retryWrites=true&w=majority