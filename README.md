# Acads

## Motivação

Minha primeira vez criando um CRUD com o Node.js, também não tinha feito antes nenhuma outra aplicação utilizando MongoDB. Já utilizei outros bancos, como MySQL e SQLite. Entretanto, este foi o contato inaugural com o NoSQL, muito interessante o funcionamento e a escalabilidade dessa tecnologia.
 
Inicialmente eu pensei em criar apenas o backend, porém a parte de exibir as operações por meio do Postman não me agradou muito. Como o escopo da avaliação era amplo, resolvi utilizar o EJS para deixar a aplicação um pouco mais amigável e permitir que o usuário faça e veja as alterações.
 
Tive um pouco de dificuldade na implementação do render da operação UPDATE, dei uma boa lida nas documentações e consegui vencer esse obstáculo. No hora do deploy também foi frustrante porque o Heroku é bem rigoroso para subir as aplicações e não perdoa nem um espaço a mais no package.json. Brincadeiras a parte, estou satisfeito com o que desenvolvi. 

## Sobre a aplicação

  Escolhi criar uma biblioteca que registra o nome, sobrenome e qual o tipo de matrícula este aluno possui (por exemplo: musculação, luta, musculação + muay thai).
  
  É possível cadastrar novos alunos, ver os alunos matriculados, editar as informações de cada aluno e também excluir o registro do aluno.

  Para a realização deste projeto utilizei as seguintes tecnologias: 
<ul>
  <li>Express - para criar o servidor e e criar as rotas.</li>
  <li>dotenv - acessar o banco de dados no arquivo .env</li>
  <li>body-parser - realizar a análise do corpo das solicitações.</li>
  <li>EJS: Para renderizar o HTML para a página estática que é visualizada no navegador.</li>
  <li>MongoDB: para armazenar e persistir os as informações no banco de dados </li>
</ul>

## Execução  

  Primeiramente é necessário que o Node.JS esteja instalado na máquina. 
  
  Clone este repositório e no mesmo diretório instale as depenêcias pelo terminal:

  ```node
  npm install express dotenv body-parser ejs mongodb
  ```
  Após a instalação dos pacotes, ainda no terminal, digite
  ```
  npm start
  ```
O terminal vai informar que a aplicação está funcionando na porta 3000, basta acessar no seu navagador preferido: 
```
localhost:3000
  ```

  A aplicação também pode ser acessada na internet, hospedada na Heroku, basta clicar [aqui](https://acads.herokuapp.com/)

