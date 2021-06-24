import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {
	// Alguns itens são foreign keys

	@PrimaryColumn()
	readonly id: string;

	@Column()
	user_sender: string;

	// Forma de representar foreign key
	// Nesse caso, as foreign keys relacionadas a usuários

	@JoinColumn({name: "user_sender"}) // Passa-se o nome da foreign key
	@ManyToOne(() => User) // Tipo de relacionamento
	userSender: User;

	@Column()
	user_receiver: string;

	@JoinColumn({name: "user_receiver"})
	@ManyToOne(() => User)
	userReceiver: User;

	@Column()
	tag_id: string;

	// Forma de representar foreign key
	// tag passa a representar tag_id

	@JoinColumn({name: "tag_id"})
	@ManyToOne(() => Tag) // Relacionamento entre elogios e tags do tipo "muitos para um"
	tag: Tag;

	@Column()
	message: string;

	@CreateDateColumn()
	created_at: string;

	constructor() {
		if(!this.id) {
			this.id = uuid();
		}
	}
}

export { Compliment };