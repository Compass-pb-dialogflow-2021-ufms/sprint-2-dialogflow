<p> Projeto é um CRUD simples de uma lista de contatos. Foi utilizado o deploy pelo Heroku CLI para subir a api no Heroku
</p>

 Utilizado para desenvolvimento da api:
  
 -   Express.js: facilitar o desenvolvimento da api
 -  Moongose: lib para trabalhar com o mongodb no nodejs
    
Aplicação disponivel em https://nodejs-contato-api.herokuapp.com/

Funcionamento:

* Utilizar um aplicativo para testar as rotas, como POSTMAN.

* URI = https://nodejs-contato-api.herokuapp.com/

Todas as rotas seguem o padrão URI/api/contatos ou URI/api/contatos/:id
dessa forma:

```
GET     URI/api/contatos     -> Lista todos contatos
```
```
GET     URI/api/contatos/:id -> Lista contato especifico, identificado a partir do id
```
```
POST    URI/api/contatos     -> Adiciona novo contato passando no body o senguinte formato json: 
        {
            "nome": "",
            "email": [" ", " "],
            "telefone": [" "]
        }
```
```
 PUT    URI/api/contatos/:id  -> Altera algum dado do contato especifico (semelhante ao POST, informar no body os dados para alterar)
     {
      "nome": "",
      "email": [""],
      "telefone": [""],
     }
```
```
DELETE  URI/api/contatos/:id  -> Remove contato especifico
```




