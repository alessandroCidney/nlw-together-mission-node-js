import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

// Listar elogios enviados pelo usuário

class ListUserSendComplimentsService {

	async execute(user_id: string) {
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

		const compliments = complimentsRepositories.find({
			where: {
				user_sender: user_id
			}
		});

		return compliments;
	}
}

export { ListUserSendComplimentsService };