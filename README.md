# RocketShoes App

## Descrição do Projeto

RocketShoes é uma aplicação de e-commerce desenvolvida com React e Vite. Este projeto simula uma experiência de compra, permitindo que os usuários visualizem produtos, adicionem itens ao carrinho e realizem o checkout.

## Tecnologias Utilizadas

- **Frontend:**
  - React
  - Vite
  - Material-UI (MUI)
  - Styled-components
  - React Router

- **Testes:**
  - Vitest
  - React Testing Library

- **Outras Dependências:**
  - Axios para requisições HTTP
  - Emotion para estilização

## Dados Mockados

Os dados da aplicação são mockados usando um arquivo `db.json`. Para simular um servidor local e visualizar os dados, você pode usar o `json-server`. 

### Instruções para Executar o JSON Server

1. Certifique-se de ter o `json-server` instalado. Se não tiver, você pode instalá-lo globalmente usando o seguinte comando:

  ```bash
  npm install -g json-server
  ```

2. Navegue até o diretório do projeto e execute o seguinte comando para iniciar o servidor:
    
  ```bash
  json-server --watch db.json
  ```

3. O servidor irá rodar em ``` http://localhost:3000 ```, e você poderá acessar os dados mockados.

## Para ultilizar a Aplicação

- Para a ultilização do projeto é essencial a instalação do [Node.js](https://nodejs.org/), sendo a versão 14 ou superior.
  
- fazer uma instalação da dependências ultilizando:
  
  ```bash
  npm install

- Precisa tambem digitar o comando:
  ```bash
  npm run dev

Isso iniciará o servidor de desenvolvimento do Vite e a aplicação estará disponível em ```http://localhost:517```.

- **Scripts Disponíveis**-

  - **dev**: Inicia o servidor de desenvolvimento.
  - **build**: Compila a aplicação para produção.
  - **lint**: Executa o linter no código.
  - **preview**: Visualiza a aplicação em modo de pré-visualização.
  - **test**: Executa os testes usando Vitest.

## Contribuição
Sinta-se à vontade para contribuir para o projeto. Faça um fork do repositório, realize suas alterações e envie um pull request.

