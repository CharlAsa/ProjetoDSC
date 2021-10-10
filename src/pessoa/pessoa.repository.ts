import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa>{
	//private pessoa: Pessoa[] = [];

	getAllPessoas(){
		//return this.pessoa;
	}

	createPessoa(p: Pessoa){
		const{login, senha, nome} = p;
		let pessoa = this.create({
			login,
			senha,
			nome
		});
		this.save(pessoa);
	}
}