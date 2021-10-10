"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefoneService = void 0;
const common_1 = require("@nestjs/common");
const telefone_repository_1 = require("./telefone.repository");
let TelefoneService = class TelefoneService {
    constructor(telefoneRepository) {
        this.telefoneRepository = telefoneRepository;
    }
    criarTelefone(objeto) {
        this.telefoneRepository.criarTelefone(objeto);
        return "Ok " + objeto.nome;
    }
    atualizarTelefone(objeto) {
        this.telefoneRepository.atualizarTelefone(objeto);
        return "ok atualizar " + objeto.nome;
    }
    deletarTelefone(objeto) {
        this.telefoneRepository.deletarTelefone(objeto);
        return "ok deletar ";
    }
    procurarTodosTelefone(objeto) {
        return this.telefoneRepository.procureTodosTelefone(objeto);
    }
    procurarUmTelefone(objeto) {
        return this.telefoneRepository.procureTelefone(objeto);
    }
};
TelefoneService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [telefone_repository_1.TelefoneRepository])
], TelefoneService);
exports.TelefoneService = TelefoneService;
//# sourceMappingURL=telefone.service.js.map