import { TelefoneService } from './telefone.service';
export declare class TelefoneController {
    private telefoneService;
    constructor(telefoneService: TelefoneService);
    criarTelefone(objeto: any): string;
    atualizarTelefone(objeto: any): string;
    deletarTelefone(objeto: any): string;
    listarTelefone(objeto: any): Promise<import("./telefone.entity").Telefone[]>;
    verUmTelefone(objeto: any): Promise<import("./telefone.entity").Telefone>;
}
