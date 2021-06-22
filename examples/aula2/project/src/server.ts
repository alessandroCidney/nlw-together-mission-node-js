// Caminho: Fabinho\Documents\Alessandro\Programação\NWL

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

/**
 * Tipos de parâmetros (requisições)
 * 
 * Route Params => Parâmetros que vem com as rotas (no endereço, por exemplo)
 * Exemplo: http://localhost:3000/produtos/2122323212a343453434
 * (
 *  Devem ser configurados na hora de construir a rota
 *  Exemplo: app.get(/test/{id}...)
 * )
 * 
 * Query Params => Parâmetros que fazem parte de uma query (não são obrigatórios)
 * http://localhost:3000/produtos?name=teclado&description=teclado-master
 * (Não vem explícitos na configuração da rota)
 * 
 * Body Params  => Parâmetros para POST, PUT e PATCH, vem no corpo da requisição
 * {
 *   "name": "teclado"
 *   "description": "teclado-master" 
 * }
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