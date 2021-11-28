const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');


const app = express();
app.use(bodyParser.json());

//Passa o express do servidor para as rotas
const roteador = require('./routes')(app);

//Porta localizada na config
app.listen(config.get('api.port'), () => console.log('API rodando!'));

