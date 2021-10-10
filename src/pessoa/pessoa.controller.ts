import { Controller, Body, Post } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.entity';

@Controller('pessoa')
export class PessoaController {
	constructor (private pessoaService: PessoaService){

	}

	@Post()
	criarPessoas(@Body() objeto){
		return this.pessoaService.criarPessoa(objeto);
	}
}
