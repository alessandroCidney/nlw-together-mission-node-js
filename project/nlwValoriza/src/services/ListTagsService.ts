import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {

	async execute() {

		const tagsRepositories = getCustomRepository(TagsRepositories);

		// Retornando todas as tags

		const tags = await tagsRepositories.find();

		// A função classToPlain será responsável por criar novos objetos a partir dos objetos que já vieram em tags
		// Nesse caso, ela adicionará o "nameCustom", definido na entidade Tag através do Expose
		return classToPlain(tags);
	}
}

export { ListTagsService };