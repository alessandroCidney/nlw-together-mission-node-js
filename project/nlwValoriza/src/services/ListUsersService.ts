import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

// Com a função classToPlain, faremos as alterações indicadas na entidade User com os itens do class-transformer
import { classToPlain } from "class-transformer";

class ListUsersService {

	async execute() {

		const usersRepositories = getCustomRepository(UsersRepositories);

		const users = usersRepositories.find();

		return classToPlain(users);
	}
}

export { ListUsersService };