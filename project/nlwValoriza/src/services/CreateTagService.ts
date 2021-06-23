import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
// Como só receberemos um campo, não é necessário
// criar uma interface

class CreateTagService {

	async execute(name: string) {
		const tagsRepositories = getCustomRepository(TagsRepositories);

		if(!name) {
			throw new Error("Incorrect name!");
		}

		// Checando se o nome já existe no banco de dados
		// findOne faz um SELECT * FROM tags WHERE name = "name", nesse caso
		const tagAlreadyExists = await tagsRepositories.findOne({
			name
		})

		if(tagAlreadyExists) {
			throw new Error("Tag already exists!");
		}

		const tag = tagsRepositories.create({
			name
		});

		await tagsRepositories.save(tag);

		return tag;
	}
}

export { CreateTagService }