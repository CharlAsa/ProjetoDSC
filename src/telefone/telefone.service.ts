import { Injectable } from '@nestjs/common';
import { TelefoneRepository } from './telefone.repository';

@Injectable()
export class TelefoneService {

	constructor(private telefoneRepository: TelefoneRepository){}

	criarTelefone(objeto){
		this.telefoneRepository.criarTelefone(objeto);
		return "Ok " + objeto.nome;
	}

	atualizarTelefone(objeto){
		this.telefoneRepository.atualizarTelefone(objeto);
		return "ok atualizar " + objeto.nome;
	}

	deletarTelefone(objeto){
		this.telefoneRepository.deletarTelefone(objeto);
		return "ok deletar ";
	}

	procurarTodosTelefone(objeto){
		return this.telefoneRepository.procureTodosTelefone(objeto);
	}

	procurarUmTelefone(objeto){
		return this.telefoneRepository.procureTelefone(objeto);
	}
}
