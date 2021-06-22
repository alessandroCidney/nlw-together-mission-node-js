import express from 'express';

// Necessário utilizar o comando yarn @types/express -D

// Inicializando o Express
const app = express();

/**
 * GET    => Buscar informações 
 * POST   => Inserir informações 
 * DELETE => Remover informações
 * PUT    => Alterar informações
 * PATCH  => Alterar uma informação específica
 */

app.get("/test", (request,response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá NLW / Método GET"); // Acessando localhost:3000/test é possível receber a mensagem
});

// Há erro ao tentar acessar requisições POST pelo navegador
// Por isso, durante a semana, utilizamos o Insomnia
// (Criar request collection no Insomnia)
app.post("/test-post", (request, response) => {
    return response.send("Olá NLW / Método POST");
})

// Inicializando o servidor em http://localhost:3000
app.listen(3000, () => console.log("Server is running!"));

// yarn tsc
// node src/server.js

// Para facilitar o desenvolvimento, utilize:
// yarn add ts-node-dev -D

// Possível executar com yarn dev