# Previsão do Tempo

## 1. Sobre o projeto

Este projeto é um site de previsão do tempo que permite ao usuário pesquisar uma cidade e visualizar informações meteorológicas, como temperatura, umidade e condições climáticas.

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript no front-end, com um back-end desenvolvido em Node.js e Express.

## 2. Tecnologias utilizadas

- **HTML:** estrutura das páginas.
- **CSS:** estilização e aparência do site.
- **JavaScript:** interatividade e comunicação com a API.
- **Node.js:** ambiente de execução do back-end.
- **Express:** criação do servidor e das rotas da API.
- **dotenv:** leitura das variáveis de ambiente.
- **CORS:** controle das requisições entre diferentes origens.
- **OpenWeather API:** fornecimento dos dados meteorológicos.
- **Render:** hospedagem do back-end.
- **GitHub Pages:** hospedagem do front-end.

## 3. Arquitetura do projeto

O projeto é dividido em duas partes principais:

**Front-end:** apresenta a interface ao usuário e envia uma requisição ao back-end quando uma cidade é pesquisada.

**Back-end:** recebe a cidade informada, consulta a API da OpenWeather e devolve os dados meteorológicos ao front-end.

A chave de acesso à OpenWeather é armazenada em uma variável de ambiente, evitando deixá-la diretamente no código JavaScript público.

## 4. Endpoint da API

O back-end disponibiliza a seguinte rota:

`GET /api/clima?cidade=Lisboa`

Essa rota recebe o nome de uma cidade por meio do parâmetro `cidade` e retorna os dados meteorológicos em formato JSON.

Exemplo de endereço para teste:

https://previsao-do-tempo-wzuj.onrender.com/api/clima?cidade=Lisboa

Também existe a rota `/api`, utilizada para verificar se o servidor está funcionando.

https://previsao-do-tempo-wzuj.onrender.com/api

## 5. Como executar o back-end localmente

1. Instale o Node.js.
2. Abra a pasta `backend` no terminal.
3. Execute `npm install` para instalar as dependências.
4. Crie ou configure o arquivo `.env` com a variável `OPENWEATHER_API_KEY`, contendo uma chave válida da OpenWeather.
5. Execute `node server.js`.
6. Acesse `http://localhost:3000/api` para testar o servidor.
7. Acesse `http://localhost:3000/api/clima?cidade=Lisboa` para testar a consulta do clima.

A chave da API deve permanecer privada e não deve ser enviada ao GitHub.

## 6. Tratamento de erros

O back-end verifica se o nome da cidade foi informado e se a chave da API está configurada. Também trata falhas na consulta à OpenWeather e retorna mensagens de erro em formato JSON.

## 7. Hospedagem

O front-end é disponibilizado pelo GitHub Pages, enquanto o back-end está hospedado no Render.

Essa separação permite que o site seja acessado pela internet sem precisar iniciar manualmente o servidor no computador do desenvolvedor.

## 8. Possíveis melhorias futuras

- Implementar testes automatizados para as rotas.
- Melhorar o tratamento de erros e as mensagens exibidas ao usuário.
- Implementar limites de requisições para evitar uso excessivo da API.
- Adicionar testes de segurança e validação dos dados recebidos.
- Implementar um banco de dados caso seja necessário armazenar pesquisas ou histórico de consultas.
- Melhorar a documentação e o monitoramento do servidor.