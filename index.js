const express = require('express');
const app = express();
const conexao = require('./database/conexao');
const router = require('./Rotas/celularRota');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, () => console.log("Servidor rodando"));

app.use('/celulares',router);






