# mo-net-email

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd masterclass-nodejs-background-jobs`;
3. Rode `yarn` para instalar as dependências;
4. Copie o arquivo `.env.example` e crie um arquivo `.env` com as credenciais de email e do Redis;
7. Rode `yarn dev` para iniciar o servidor.

##  Redis (DOcker)
  Rodar o comando abaixo para ultizar o Redis na porta 6379 usando o label alpine
  - `cmd: docker run --name redis -p 6379:6379 -d -t redis:alpine`
