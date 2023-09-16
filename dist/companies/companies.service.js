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
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const companies_entity_1 = require("./entities/companies.entity");
let CompaniesService = class CompaniesService {
    constructor(companiesRepository) {
        this.companiesRepository = companiesRepository;
    }
    create(createCompaniesDto) {
        return this.companiesRepository.save(createCompaniesDto);
    }
    findAll() {
        return this.companiesRepository.find();
    }
    findOne(id) {
        return this.companiesRepository.findOneBy({ company_id: id });
    }
    update(id, updateCompaniesDto) {
        return this.companiesRepository.update(id, updateCompaniesDto);
    }
    remove(id) {
        return this.companiesRepository.delete(id);
    }
};
CompaniesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(companies_entity_1.Companies)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map