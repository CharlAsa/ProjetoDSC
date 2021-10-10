import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
export declare class PessoaRepository extends Repository<Pessoa> {
    getAllPessoas(): void;
    createPessoa(p: Pessoa): void;
}
