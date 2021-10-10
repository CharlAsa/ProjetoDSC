import { Controller, Body, Post } from '@nestjs/common';
import { TelefoneService } from './telefone.service';
import { getManager } from "typeorm"; 

@Controller('telefone')
export class TelefoneController {
	constructor (private telefoneService: TelefoneService){

	}

	@Post('/criar')
	criarTelefone(@Body() objeto){
		return this.telefoneService.criarTelefone(objeto);
	}

	@Post('/atualizar')
	atualizarTelefone(@Body() objeto){
		return this.telefoneService.atualizarTelefone(objeto);
	}

	@Post('/deletar')
	deletarTelefone(@Body() objeto){
		return this.telefoneService.deletarTelefone(objeto);
	}

	@Post('/listartodos')
	listarTelefone(@Body() objeto){
		return this.telefoneService.procurarTodosTelefone(objeto);
	}
	
	@Post('/vertelefone')
	verUmTelefone(@Body() objeto){
		return this.telefoneService.procurarUmTelefone(objeto);
	}
}
