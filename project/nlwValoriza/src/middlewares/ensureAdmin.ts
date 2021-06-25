// Verificação do usuário (é administrador ou não?)

import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureAdmin(
	request: Request, 
	response: Response, 
	next: NextFunction
) {
	
	// Pegando o user_id de dentro do request

	const { user_id } = request;

	console.log(user_id);

	const usersRepositories = getCustomRepository(UsersRepositories);

	// Captando o boolean admin do usuário com o id informado

	const { admin } = await usersRepositories.findOne(user_id);

	if(admin) {
		return next();
	}

	// No estado 401, o usuário não tem autorização para continuar
	return response.status(401).json({
		error: "Unauthorized"
	});
}