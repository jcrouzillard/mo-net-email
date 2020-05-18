# mo-net-email
- Projeto criado com o proposito de estudo e como resultado o desenvolvimento de um app para monitorar a qualidade da internet na maquina local(...)
  - Utilizamos o projeto https://github.com/Rocketseat/masterclass-nodejs-background-jobs como base para os estudos.

## Tech`s
- `express`
- `redis`
- `nodemailer`
- `bull (bullboards)`


## 🔥 Instalação e execução 

1. Faça um clone desse repositório;
2. Entre na pasta `cd mo-net-email`;
3. Rode `yarn` para instalar as dependências;
4. Copie o arquivo `.env.example` e crie um arquivo `.env` com as credenciais de email e do Redis;
7. Rode `yarn dev` para iniciar o servidor.

##  Redis - (Docker)
  Rodar o comando abaixo para ultizar o Redis na porta 6379 usando o label alpine
  - `cmd: docker run --name redis -p 6379:6379 -d -t redis:alpine`

---
##  Dev's 💠
- Samuel W. (Mestre Samuca!) 👨‍🏫
- Julien C. 🕵
