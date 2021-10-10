import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Telefone{
	@PrimaryGeneratedColumn()
	id: number;

	@Column('int')
	idpessoa: string;

	@Column('int')
	numero: string;

	@Column({ length: 50 })
	nome: string;

	@Column({ nullable: true })
	sobre: string;
}