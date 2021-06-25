// Verificação de autenticação

import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
	sub: string;
}

export function ensureAuthenticated(
	request: Request, 
	response: Response, 
	next: NextFunction
) {

	// Receber o token
	const authToken = request.headers.authorization;

	// Checar se o token está preenchido
	if(!authToken) {
		return response.status(401).end();
	}

	// Ignora a primeira posição do array (com "Bearer") e adiciona a segunda em token
	const [, token] = authToken.split(" ");

	// Verificar se o token é válido
	try {

		// const decode = verify(token, "50cba2380b557b209f10e6b561ef3aa3");
		// Estamos forçando o resultado do sub a ser uma string, que antes era uma função
		// Pois request.user_id espera uma string

		const { sub } = verify(token, "50cba2380b557b209f10e6b561ef3aa3") as IPayload;
		
		// Passando o sub dentro da request
		request.user_id = sub; 

		return next();

	} catch (err) {

		return response.status(401).end();

	}

}