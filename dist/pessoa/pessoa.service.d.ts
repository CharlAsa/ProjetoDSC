import { PessoaRepository } from './pessoa.repository';
export declare class PessoaService {
    private pessoaRepository;
    constructor(pessoaRepository: PessoaRepository);
    private pR;
    criarPessoa(objeto: any): string;
}
