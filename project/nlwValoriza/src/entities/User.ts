import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// Importando a função Exclude
import { Exclude } from "class-transformer";

// O UUID possui diferentes versões para serem importadas
import { v4 as uuid } from "uuid"; 

// V4 gera IDs aleatórios
// Chamados v4 de uuid

// Tudo o que estiver na entidade será referente à tabela users
@Entity("users")
class User {

	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	admin: boolean;

	// Com Exclude, a senha não será mostrada ao exibir a listagem de usuários
	
	@Exclude()
	@Column()
	password: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	/**
	 * Caso na tabela original o nome fosse diferente do do
	 * utilizado aqui, bastava passar o nome original como parâmetro
	 * 
	 * Exemplo:
	 * @ Column("name")
	 * nome: string;
	 * 
	 */

	 constructor() {
	 	if(!this.id) {
	 		this.id = uuid();
	 	}
	 }
}

export { User };

// Entidade < - > ORM < - > BD (users)

// yarn add uuid
// yarn add @types/uuid -D