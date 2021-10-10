import { PessoaService } from './pessoa.service';
export declare class PessoaController {
    private pessoaService;
    constructor(pessoaService: PessoaService);
    criarPessoas(objeto: any): string;
}
