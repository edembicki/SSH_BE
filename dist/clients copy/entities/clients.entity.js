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
exports.Clients = void 0;
const typeorm_1 = require("typeorm");
let Clients = class Clients {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Clients.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clients.prototype, "client_first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clients.prototype, "client_last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["Solteiro(a)", "Divorciado(a)", "Separado(a)", "Viúvo(a)", "N/A"],
        default: "N/A"
    }),
    __metadata("design:type", String)
], Clients.prototype, "client_marital_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["Masculino", "Feminino", "N/A"],
        default: "N/A"
    }),
    __metadata("design:type", String)
], Clients.prototype, "client_gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Clients.prototype, "client_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Clients.prototype, "client_birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Clients.prototype, "client_nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Clients.prototype, "client_father", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Clients.prototype, "client_mother", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Clients.prototype, "client_created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Clients.prototype, "client_updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Clients.prototype, "client_deleted_at", void 0);
Clients = __decorate([
    (0, typeorm_1.Entity)()
], Clients);
exports.Clients = Clients;
//# sourceMappingURL=clients.entity.js.map