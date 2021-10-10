import { EntityRepository, Repository } from 'typeorm';
import { Telefone } from './telefone.entity';

@EntityRepository(Telefone)
export class TelefoneRepository extends Repository<Telefone>{
	//private pessoa: Pessoa[] = [];

	procureTodosTelefone(t: Telefone){
		return this.createQueryBuilder('telefone').select('*').where('idpessoa=1').getMany();
	}

	procureTelefone(t: Telefone){
		return this.findOne( {where:{ id: t.id, idpessoa: t.idpessoa }});
	}

	criarTelefone(t: Telefone){
		const{numero, nome, sobre, idpessoa} = t;
		let telefone = this.create({
			idpessoa,
			numero,
			nome,
			sobre
		});
		return this.save(telefone);
	}

	async atualizarTelefone(t: Telefone){
		const {numero, nome, sobre, id, idpessoa} = t;

		const telefoneatualizado = await this.procureTelefone(t);

		telefoneatualizado.numero = numero;
		telefoneatualizado.sobre = sobre;
		telefoneatualizado.nome = nome;

		return this.save(telefoneatualizado);
	}

	deletarTelefone(t: Telefone) {
		return this.delete(t);
	}
}