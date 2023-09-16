"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_clients_dto_1 = require("./create-clients.dto");
class UpdateClientsDto extends (0, mapped_types_1.PartialType)(create_clients_dto_1.CreateClientsDto) {
}
exports.UpdateClientsDto = UpdateClientsDto;
//# sourceMappingURL=update-clients.dto.js.map