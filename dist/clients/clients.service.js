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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const clients_entity_1 = require("./entities/clients.entity");
let ClientsService = class ClientsService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    create(createClientsDto) {
        return this.clientsRepository.save(createClientsDto);
    }
    findAll() {
        return this.clientsRepository.find();
    }
    findOne(id) {
        return this.clientsRepository.findOneBy({ client_id: id });
    }
    update(id, updateClientsDto) {
        return this.clientsRepository.update(id, updateClientsDto);
    }
    remove(id) {
        return this.clientsRepository.delete(id);
    }
};
ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clients_entity_1.Clients)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map