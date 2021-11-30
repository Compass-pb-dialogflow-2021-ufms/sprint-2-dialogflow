# Avaliação Sprint 2 - Programa de Bolsas Compass.uol e UFMS

Segunda sprint do programa de bolsas Compass.uol para formação em chatbot Dialogflow.


## Execução

- Criar CRUD em Nodejs com rotas GET, POST, PUT, DELETE;

- Armazenar as consultas no MongoDB;

- ~~Utilizar de Firebase para subir API;~~

- Utilizar o Heroku para fazer o Deploy;


## Entrega

- Aceitar o convite do repositório da sprint-2-dialogflow; 

- Criar uma branch no repositório com o formato nome-sobrenome;

- Subir o trabalho na branch com um readme.md, documentando detalhes sobre como a avaliação foi desenvolvida e como utilizar o sistema.

- O prazo de entrega é até às 13h do dia 30/11 no repositório do github (https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-2-dialogflow).

## API

## Documentação

### Sobre a entrega

Nessa entrega, resolvi implementar a API do projeto anterior, já que um dos problemas que enfrentei foi que a requisição à API que estava usando demorava muito com algumas requisições, além de que também não tinha padrões, como REST no seu uso. 
Apesar das dificuldades enfrentadas, fiquei contente com o projeto, pois pude implementar o que aprendi, e consegui aprender muito mais durante essa atividade.

### Métodos

Como requerido, a api implementa as rotas de GET, POST, PUT, DELETE. O método GET conta com duas formas de requisição, geral e por ID

- GET: /api/items -> Retorna todos itens, caso existam, do banco. Caso não exista item registrado, retorna mensagem de erro apropriada.

- GET:ID /api/items/id -> Retorna item especifico, onde id é substituido por um inteiro. Caso id não seja encontrado, retorna mensagem apropriada.

- POST /api/items -> Adiciona item no banco, caso seu ID ainda não exista.

- PUT /api/items/id -> Permite alterar um campo dentro de um item, como nome, descrição, url, etc. É possível fazer alteração de apenas um campo, e há campos, como created, onde não são permitidas alterações.

- DELETE /api/items/id -> Deleta um item do banco, se o id passado como parâmetro for válido.

## Especificação
A API funciona com o express, e o router, onde toda responsabilidade do roteamento cabe dentro das 'routes', possibilitando escalabilidade, tanto que um dos meus projetos é adicionar a API de monstros dentro do mesmo servidor, assim que possível. O banco usado é o mongodb, com auxílio do mongoose, e é utilizado sistema de modelo para estrutura de um Item.

## Deploy

- A deploy foi feito no heroku, e pode ser acessado pelo link: https://api-ragnarok-backend.herokuapp.com/