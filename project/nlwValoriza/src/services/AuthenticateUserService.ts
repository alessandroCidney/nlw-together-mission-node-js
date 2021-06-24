import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
	email: string;
	password: string;
}

class AuthenticateUserService {

	async execute({email, password}: IAuthenticateRequest) {
		const usersRepositories = getCustomRepository(UsersRepositories);
		
		// Verificando a existência do usuário
		const user = await usersRepositories.findOne({
			email
		});

		if(!user) {
			throw new Error("Email/password incorrect");
		}

		// compare(password, hash)

		const passwordMatch = await compare(password, user.password);

		if(!passwordMatch) {
			throw new Error("Email/password incorrect");
		}

		/**
		 * Caso não saiba se é necessário usar await ou não
		 * cheque o retorno da função através do VS Code
		 * */

		const token = sign({
			email: user.email
		}, "50cba2380b557b209f10e6b561ef3aa3", {
			subject: user.id, // ID do usuário
			expiresIn: "1d" // Tempo de expiração 
		});

		return token;
	}
}

export { AuthenticateUserService };