require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Importando rotas.
const filmesRoute   = require('./routes/Filmes')
const livrosRoutes  = require('./routes/Livros')

// Aplicando as rotas.
app.use('/filmes', filmesRoute)
app.use('/livros', livrosRoutes)

app.listen(process.env.PORT, () => {
    console.log('API on-line... ')
})