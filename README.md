# Avaliação Sprint 2 - Programa de Bolsas Compass.uol e UFMS

## Diário de bordo
Basicamente iniciei pesquisando como utilizar o MongoDB junto com o node, pois até o momento só sabia a integração com o MySQL
e a doc do Mongo ajudou bastante, mas para mim foi uma dificuldade em integrar o projeto pois não possuia a experiencia com o mesmo.
Prosseguindo com o resto da aplicação, foi bem tranquilo pois os cursos na alura foram otimos e conseguiram auxiliar bastante no desenvolvimento,
cada coisa que desenvolvi bate com certeza com o que foi ministrado na alura. Desde a criação de rotas com o GET, POST, DELETE e PATCH até o retorno de
status e integrações com o banco. Resumidamente comecei criando o server.js e configurando tudo que iria precisar(express, mongoose e dotenv), depois criei
uma pasta rotas onde iria começar a criar as rotas necessárias da aplicação utilizando as funções aprendidas no curso de mongodb, logo após criei a modelos que seria a
pasta onde ficaria o modelo de objeto no banco, seguinte foi integrar esse objetos as rotas de crud e testar elas.


## Entrega
Para iniciar a aplicação, deve-se ter o MongoDB e Node.JS na maquina.
1- Na pasta do projeto, abra o terminal e digite npm install para instalar todas as dependencias.
2- Após instalar, digite npm start para iniciar a aplicação
3- Agora é so testar as rotas que se encontram em http://localhost:3000/jogos

## Rotas no Heroku:
POST E GET
https://compassojogos.herokuapp.com/jogos
GET, DELETE E PATCH com um jogo de exemplo
https://compassojogos.herokuapp.com/jogos/61a2340ef82db3b5c242df89