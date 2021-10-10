import { Repository } from 'typeorm';
import { Telefone } from './telefone.entity';
export declare class TelefoneRepository extends Repository<Telefone> {
    procureTodosTelefone(t: Telefone): Promise<Telefone[]>;
    procureTelefone(t: Telefone): Promise<Telefone>;
    criarTelefone(t: Telefone): Promise<Telefone>;
    atualizarTelefone(t: Telefone): Promise<Telefone>;
    deletarTelefone(t: Telefone): Promise<import("typeorm").DeleteResult>;
}
