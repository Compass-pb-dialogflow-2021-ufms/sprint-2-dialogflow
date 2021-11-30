# Avaliação Sprint 2 - Programa de Bolsas Compass.uol e UFMS

Segunda sprint do programa de bolsas Compass.uol para formação em chatbot Dialogflow.


## Execução

- Criar CRUD em Nodejs com rotas GET, POST, PUT, DELETE;

- Armazenar as consultas no MongoDB;

- Utilizar de Firebase para subir API;


## Entrega

- Aceitar o convite do repositório da sprint-2-dialogflow;

- Criar uma branch no repositório com o formato nome-sobrenome;

- Subir o trabalho na branch com um readme.md, documentando detalhes sobre como a avaliação foi desenvolvida e como utilizar o sistema.

- O prazo de entrega é até às 13h do dia 30/11 no repositório do github (https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-2-dialogflow).

---

## A API

A API funciona como um CRUD de reviews/críticas de filmes e livros, podendo ser inserido novos modulos futuramente, como
albuns de música por exemplo.

### Create

Na inserção de uma nova review/crítica, informamos o título da obra, este sendo obrigatório, para filmes informamos
também o diretor, o ano de lançamento e a crítica, já para livros informamos o autor, a edição e a crítica.

Todos os parâmetros são enviados pelo corpo da requisição.

### Read

Podemos procurar pela review/crítica buscando pelo título, diretor/autor, ano de lançamento/edição e crítica, não
sendo obrigátorio os valores estarem exatamente iguais aos do banco de dados.

Todos os parâmetros são enviados como parâmetros de rota.

### Update

Podemos atualizar quaisquer valores do registro informando apenas o título, este sendo obrigatório ser igual ao
valor no banco de dados.

Todos os parâmetros são enviados pelo corpo da requisição exceto o titulo que é enviado como parâmentro de rota.

### Delete

Para a deleção de um registro basta informar o título, este sendo obrigatório ser igual ao
valor no banco de dados.

O titulo é enviado como um parâmetro de rota.

## Tecnologias

### Gerenciamento de requisições

- Express
- Body-Parser

### Banco de Dados

- MongoDB Atlas

### API CLient

- Postman

## Desenvolvimento

No primeiro momento foquei na organização de diretórios, após definido essa parte começei o desenvolvimento das rotas e
a conexão com o MongoDB Atlas, então criei as models e controllers e estabeleci as comunicações entre os arquivos.
Feito isso foquei nas funcionalidades CRUD e tratamento de erro, estas localizadas nas controllers.

## Links

O deploy da API foi feito pela plataforma <a href="https://www.heroku.com/home">Heroku</a> e pode ser acessada pelo endpoint
<a href="https://sprint-2-teste.herokuapp.com">sprint-2-teste.herokuapp.com</a>.

Para facilitar a realização das requisição a API é possivel acessar ao workspace da Postman criado para este projeto 
através este <a href="https://www.postman.com/fugishima/workspace/sprint-2-dialogflow/overview">link</a>.