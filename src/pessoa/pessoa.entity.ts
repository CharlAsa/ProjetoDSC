import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 10 })
	login: string;

	@Column({ length: 10 })
	senha: string;

	@Column({ length: 50, nullable: true })
	token: string;

	@Column({ length: 50 })
	nome: string;
}