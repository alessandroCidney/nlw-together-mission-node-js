import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUsersService {

	async execute() {

		const usersRepositories = getCustomRepository(UsersRepositories);

		const users = usersRepositories.find();

		return users;
	}
}

export { ListUsersService };