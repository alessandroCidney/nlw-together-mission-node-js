import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

// Classes usam extends
// Interfaces usam implements

@EntityRepository(User)
class UsersRepositories extends Repository<User> {

}

export { UsersRepositories };