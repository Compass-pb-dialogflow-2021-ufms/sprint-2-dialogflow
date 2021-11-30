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
const uri = process.env.MONGODB_URI

mongoose.connect(uri)
.then(() =>
{
    console.log('Banco de dados conectado!')
    app.listen(process.env.PORT, ()=> {console.log('Servidor Rodando!!!')})
})
.catch((erro) => console.log(erro))