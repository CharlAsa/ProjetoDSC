import { TelefoneRepository } from './telefone.repository';
export declare class TelefoneService {
    private telefoneRepository;
    constructor(telefoneRepository: TelefoneRepository);
    criarTelefone(objeto: any): string;
    atualizarTelefone(objeto: any): string;
    deletarTelefone(objeto: any): string;
    procurarTodosTelefone(objeto: any): Promise<import("./telefone.entity").Telefone[]>;
    procurarUmTelefone(objeto: any): Promise<import("./telefone.entity").Telefone>;
}
