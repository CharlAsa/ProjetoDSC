"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefoneRepository = void 0;
const typeorm_1 = require("typeorm");
const telefone_entity_1 = require("./telefone.entity");
let TelefoneRepository = class TelefoneRepository extends typeorm_1.Repository {
    procureTodosTelefone(t) {
        return this.createQueryBuilder('telefone').select('*').where({ idpessoa: 1 }).getMany();
    }
    procureTelefone(t) {
        return this.findOne({ where: { id: t.id, idpessoa: t.idpessoa } });
    }
    criarTelefone(t) {
        const { numero, nome, sobre, idpessoa } = t;
        let telefone = this.create({
            idpessoa,
            numero,
            nome,
            sobre
        });
        return this.save(telefone);
    }
    async atualizarTelefone(t) {
        const { numero, nome, sobre, id, idpessoa } = t;
        const telefoneatualizado = await this.procureTelefone(t);
        telefoneatualizado.numero = numero;
        telefoneatualizado.sobre = sobre;
        telefoneatualizado.nome = nome;
        return this.save(telefoneatualizado);
    }
    deletarTelefone(t) {
        return this.delete(t);
    }
};
TelefoneRepository = __decorate([
    (0, typeorm_1.EntityRepository)(telefone_entity_1.Telefone)
], TelefoneRepository);
exports.TelefoneRepository = TelefoneRepository;
//# sourceMappingURL=telefone.repository.js.map