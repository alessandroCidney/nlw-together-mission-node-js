import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
	tag_id: string;
	user_sender: string;
	user_receiver: string;
	message: string;
}

class CreateComplimentService {

	async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
		const usersRepositories = getCustomRepository(UsersRepositories);

		// user_receiver é o id do usuário que recebe o elogio
		// Ao utilizar o findOne sem mandar um objeto, o parâmetro é considerado como o campo ID, nesse caso

		if(user_sender === user_receiver) {
			// throw new Error("User doesn't send a compliment to himself");

			throw new Error("Incorrect user receiver");
		}

		const userReceiverExists = await usersRepositories.findOne(user_receiver);

		if(!userReceiverExists) {
			throw new Error("User receiver doesn't exists!");
		}

		const compliment = complimentsRepositories.create({
			tag_id,
			user_receiver,
			user_sender,
			message
		});

		await complimentsRepositories.save(compliment);

		return compliment;
	}
}

export { CreateComplimentService };