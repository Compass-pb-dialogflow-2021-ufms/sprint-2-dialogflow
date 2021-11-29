# Projeto-Sprint-2
Foi desenvolvido um sistema de backend para uma loja de celulares.
### Diário de Bordo:
Em primeiro plano foi escolhido o "tema" do projeto. Logo após comecei a criação da API, definindo a organização do sistema e das rotas. Em seguida empreendi no estudo da documentação do Mongoose e do MongoDB Atlas, seguidamente, conectei o cluster criado no MongoDB Atlas ao código. Depois disso desenvolvi todo mecanismo de conversação entre o sistema e o Banco de Dados. E por fim, subi o projeto neste repositório e realizei o deploy do mesmo na Heroku;
### Algumas tecnologias usadas:
* [Nodejs](https://nodejs.org/en/): Linguagem utilizada para desenvolvimento da aplicação;
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?https://www.mongodb.com/cloud/atlas/lp/try2-aterms&utm_source=google&utm_campaign=gs_americas_brazil_search_core_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308&adgroup=115749705983&gclid=Cj0KCQiAkZKNBhDiARIsAPsk0WgPiIsL7i5x9sxjUjMUaUYE3LmL435nR_9HjC_aK-6_ei3TZjZaiFEaApPoEALw_wcB): Banco de Dados com armazenamento em nuvem;
* [Express](https://www.npmjs.com/package/express): Framework que auxiliou no desenvolvimento da API;
* [Dotenv](https://www.npmjs.com/package/dotenv): Ferramenta que ajudou no manuseio de variáveis sensíveis do sistema;
* [Mongoose](https://www.npmjs.com/package/mongoose) : Biblioteca que realizou a conexão com Banco de Dados;
## Methodos de requisição:
#### **Get -** Devolve uma lista de celulares:
- URL : https://projeto-sprint-two.herokuapp.com/celulares , caso queira informações de um celular específico basta adicionar o id do mesmo no endereço, como no exemplo: https://projeto-sprint-two.herokuapp.com/celulares/61a285c72dec6c4007fa7cbd;
#### **Post -** Encaminha dados - através do body da requisição - a serem adicionados no Banco de Dados :
- URL: https://projeto-sprint-two.herokuapp.com/celulares
- Exemplo de informações necessárias no Body:
  * "marca" : "Samsung"
  * "modelo" : "S20"
  * "valor" : "1500"
 #### **Put -**  Encaminha dados - através do body da requisição - a serem adicionados no lugar de outros no Banco de Dados. Faz-se necessário passar o id na URL de qual celular terá os dados alterados:
 - URL : https://projeto-sprint-two.herokuapp.com/celulares/ **idCelular**
 - Exemplo de informação no Body:
    * "Valor" : "1900"
  #### **Delete -**  Deleta um celular do banco de dados. Faz-se necessário passar o id na URL de qual celular será deletado:
 - URL : https://projeto-sprint-two.herokuapp.com/celulares/ **idCelular**
## Como Funciona o Sistema:
O sistema apresenta apenas o lado do backend, logo, o usuário para utilizá-lo necessita realizar uma requisição por meio de um navegador ou uma API Client como [Postman](https://www.postman.com/) e [Insomnia](https://insomnia.rest/). Desse modo fluxo será assim:
1. Escolhido o methodo (GET, POST, PUT E DELETE) de requisição;
2. Feito a Requisição;
3. O arquivo [index.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-2-dialogflow/blob/denner-basilio/index.js), responsavel pelo levantamento do sistema, vai ser o primeiro a ser chamado;
4. index,js realizara a conexão com o banco de dados - por meio de [conexao.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-2-dialogflow/blob/denner-basilio/database/conexao.js) - e passara a requisicao para [celularRota.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-2-dialogflow/blob/denner-basilio/Rotas/celularRota.js), onde estão as rotas http;
5. celularRota.js selecionará a melhor rota de acordo com o methodo passado;
6. Independetemente da rota selecionada, [metodos.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-2-dialogflow/blob/denner-basilio/database/metodos.js) será convocado, pois onde estão as funções que cada rota deve executar;
7. A funcao da rota previamente selecionada solicitara [tabelas.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-2-dialogflow/blob/denner-basilio/database/tabelas.js), que realizará a troca de informações com o Banco de dados;
8. tabelas.js devolverá uma resposta seja ela com ou sem conteúdo.

*Obs: [validacao.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-2-dialogflow/blob/denner-basilio/database/validacao.js) será acionada quando o methodo escolhido for PUT. Esse arquivo possui uma função responsável por validar os dados passados para o update.

## Como utilizar a Aplicação:
### Localmente(Faz-se necessário ter Nodejs em sua máquina):
1. Clone esse repositório;
2. No terminal do arquivo digite :" **npm install** " para instalar as dependências
3. Novamente no terminal do arquivo digite: " **node index.js** " para iniciar a aplicação
4. Na ferramenta de sua escolha realize a requisição pela URL : http://localhost:3000/celulares
### Remotamente:
1. Para utilizar remotamente basta você realizar requisão pela URL : https://projeto-sprint-two.herokuapp.com/celulares
