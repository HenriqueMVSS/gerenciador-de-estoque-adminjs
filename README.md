

Este é um projeto simples desenvolvido com typescript e adminjs de cadastro e gerenciado de estoque de produtos.

## Como Executar

Siga os passos abaixo para executar o projeto em sua máquina:

1. Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. Clone este repositório para o seu computador:

```sh
git clone https://github.com/HenriqueMVSS/gerenciador-de-estoque-adminjs.git
```

3. Navegue até a pasta do projeto:

```sh
cd gerenciador-de-estoque-adminjs
```

4. Instale as dependências do projeto:

```sh
npm install
```
5. Renomeio o arquivo .env-example para .env e na pasta e arquivo config/config.json configure de acordo com o seu ambiente:

```sh
Obs: Criar um banco antes de executar o passo das migrations. 
```


6. Execute as migrations para criar no bando de dados as tabelas:

```sh
npx sequelize-cli db:migrate
```

7. Inicie o aplicativo:

```sh
npm run start
```

8. Abra o navegador e acesse [http://localhost:3000/admin](http://localhost:3000) para ver a aplicação em execução.

## Estrutura do Projeto

- `src/components/dashboard.jsx.`: Tela inicial de bem vindo.
- `src/app.js`: Arquivo principal de execução da aplicação.
- `src/models`: Estrutura de banco de dados da aplicação.
- `config/config.json`: Configuração do ambiente de execução.
- `.env-example`: Exemplo de como configurar o .env

## Personalização

Você pode personalizar este projeto de acordo com suas necessidades. Você pode modificar e adicionar mais recursos conforme desejar.

