// Caminho: Fabinho\Documents\Alessandro\Programação\NWL

/**
 * AULA 3
 * - Adição de Middleware para erros em server.ts
 * - Criação e Execução da migration CreateTags
 * - Criação da Entity Tag
 * - Criação do Repositório TagsRepositories
 * - Criação do Service para Tags
 * - Criação do Controller para Tags
 * - Adição da rota para tags no routes.ts
 * - Criação do Middleware ensureAdmin 
 * */

 /**
  * SUGESTÕES - AULA 3
  * - Criar uma classe de erros customizável(que receberia um status e uma mensagem)
  * - Lembrar do Try e Catch para tratar erros
  * */

  /**
   * AULA 4
   * - Criação e utilização da migration AlterUserAddPassword
   * - Instalação e utilização da biblioteca bcryptjs para criptografia
   * - Adicionando a criptografia de senhas através da função hash 
   * */

import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";

import { router } from "./routes";

import "./database";

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

 /** 
  * APP.USE() representam MIDDLEWARES
  * ou seja, itens entre o início e o fim de uma requisição que podem controlá-la 
 */

// O Express trabalha com vários formatos
// Como utilizamos JSON no body da Request, devemos especificar isso
app.use(express.json());

// Inserindo as rotas no Express
app.use(router);

// Middleware de erro
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

/**
 * OBSERVAÇÃO
 * - A biblioteca do Express, por padrão, não consegue capturar erros vindos de funções async
 * - É necessário instalar a biblioteca express-async-errors
 * */

// Inicializando o servidor em http://localhost:3000
app.listen(3000, () => console.log("Server is running!"));

// yarn tsc
// node src/server.js

// Para facilitar o desenvolvimento, utilize:
// yarn add ts-node-dev -D

// Possível executar com yarn dev

/**
 * Migrations
 * - Controle de versionamento de tabelas
 */