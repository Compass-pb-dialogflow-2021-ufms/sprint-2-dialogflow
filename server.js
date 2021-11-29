require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')

app.use(cors())

//Minha url do banco no Mongo dentro do .env
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('O banco tá on!'))

app.use(express.json())

const rotasDeJogos = require('./rotas/jogos')
app.use('/jogos', rotasDeJogos)


app.listen(3000, () => console.log("A api tá on!"))