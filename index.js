require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

app.use(bodyParser.json());

mongoose.connection.on('error', (erro) => {
    console.log(`Erro de banco de dados ${erro}`);
});

app.get('/', function (req, res) {
    res.send('End point inválido');
})

const routes = require("./routes/contatoRouter");
app.use('/api', routes);

app.use(function (erro, req, res, next) {
    console.log(erro);
    res.status(422).send({
        error: erro.message
    });
});

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@nodejscluster.ygy5j.mongodb.net/contatoDB?retryWrites=true&w=majority`
).then(() => {
    console.log("Conectado ao banco contatoDB")
    app.listen(process.env.PORT || 3000, () => {
        console.log('Rodando em  http://localhost:3000/api/teste');
    })
})