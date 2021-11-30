require('dotenv').config()
const express = require('express')
const roteador = require('./rotas/roteador')
const mongoose = require('mongoose')


const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/game', roteador)


//credenciais do banco de dados
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@entregasprint2.xcqrc.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() =>
{
    console.log('Banco de dados conectado!')
    app.listen(5000, ()=> {console.log('Servidor Rodando!!!')})
})
.catch((erro) => console.log(erro))