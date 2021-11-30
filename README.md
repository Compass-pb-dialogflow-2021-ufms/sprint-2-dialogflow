# Projeto da segunda sprint
A ideia do sistema consiste em usuários poderem listar jogos que eles possuem e que desejam vender para outra pessoa, funcionando como uma "vitrine" por assim dizer.


## Link para a aplicação na heroku
https://entrega-sprint-2.herokuapp.com/game/


## Diario de bordo
Escolhi o tema para o projeto e pesquisei sobre o atlas e como faria a conexão com o banco de dados. Sobre o desenvolvimento, criei inicialmente algo que funcionasse e depois fui lapidando, separando algumas responsabilidades e tentando seguir o padrão REST na medida que conseguia. No fim, tive que pesquisar um pouco para fazer o deploy na heroku, pois há várias regrinhas nela.


## Metodos de requisição
- Get all - retorna todos os jogos cadastrados em um array => Para utilizar esse método basta enviar no navegador o link da heroku.

- Get one - retorna, caso exista, o jogo com o id informado => Para utilizar esse método basta enviar no navegador o link da heroku adicionando uma '/' e o id do jogo. Caso não haja no sistema um jogo com o id mencionado, é retornado uma mensagem informando que não há jogo com esse id.

- Post - insere um jogo com todas as suas informações => Para utilizar esse método é necessário uma API Cliente, como o Postman. Uma vez com o verbo http certo, basta inserir o link da heroku e definir o body que DEVE ser em formato json. Todos os campos são obrigatórios, possuindo algumas validações. Segue um exemplo de post:

{
    "name": "Oxygen not included",
    "valor": 41,
    "plataforma": "PC",
    "emailContato": "meuemail@email.com"
}


- Patch - permite a alteração de um ou mais valores de um jogo => Para utilizar esse método é necessário uma API Cliente, como o Postman. Uma vez com o verbo http certo, basta inserir o link da heroku, uma '/' e o id do jogo que se deseja alterar algum valor. O formato do body dessa requisição deve ser json e para que ela funcione corretamente, é necessário que pelo menos uma chave seja válida. O método só altere caso seja escrito a chave com o nome setado, ou seja, "name", "valor", "plataforma" ou "emailContato". Qualquer outra chave é ignorada. Caso não haja um jogo com o id informado, a requisição retorna uma resposta e se encerra.


- Delete - deleta um jogo do sistema => Para utilizar esse método é necessário uma API Cliente, como o Postman. Uma vez com o verbo http certo, basta inserir o link da heroku, uma '/' e o id do jogo que se deseja deletar. Caso não haja um jogo com o id informado, a requisição retorna uma resposta e se encerra.


## Como funciona o sistema
- O arquivo na raíz server.js se conecta ao banco de dados e inicia o servidor. Nele, temos um roteador que leva para a pasta rotas no arquivo roteador.js, que trata todas as requisições e as suas respostas, além de se comunicar com o banco de dados, realizando todas as ações dos métodos. A pasta infraestrutura/Models possui o modelo da base de dados.


## Dificuldades que possuo consciência
- Acabei colocando responsabilidades demais no arquivo roteador.js e deveria ter dividido mais.
- Algumas validações me parecem o jeito bruto de fazer, sendo que sei que provavelmente tem um jeito melhor.
- O heroku ainda me deu trabalho em relação a conexão com o banco de dados e em fazer o deploy


## OBS
- Se eu pudesse te recomendar algo, falaria para usar uma API Client até para os métodos GET, pois quando testei no Postman, a visualização está bem melhor do que a que tenho no navegador.