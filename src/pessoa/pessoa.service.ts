import { Injectable } from '@nestjs/common';
import { PessoaRepository } from './pessoa.repository';

@Injectable()
export class PessoaService {

	constructor(private pessoaRepository: PessoaRepository) {}

	private pR: PessoaRepository;
	//createTask(name){
	//	return "Vou criar sua task com os dados " + name;
	//}

	criarPessoa(objeto){
		this.pessoaRepository.createPessoa(objeto);
		return "Ok " + objeto.nome + " " + objeto.senha + " " + objeto.login;
	}
}
