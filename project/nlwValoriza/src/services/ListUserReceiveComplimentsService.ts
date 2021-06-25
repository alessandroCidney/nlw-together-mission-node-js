import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { getCustomRepository } from "typeorm";

// Mostrando todos os elogios recebidos pelo usuário

class ListUserReceiveComplimentsService {

	async execute(user_id: string) {
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepositories.find({
			where: {
				user_receiver: user_id
			}
		});

		return compliments;
	}	
}

export { ListUserReceiveComplimentsService };