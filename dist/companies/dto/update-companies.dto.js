"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompaniesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_companies_dto_1 = require("./create-companies.dto");
class UpdateCompaniesDto extends (0, mapped_types_1.PartialType)(create_companies_dto_1.CreateCompaniesDto) {
}
exports.UpdateCompaniesDto = UpdateCompaniesDto;
//# sourceMappingURL=update-companies.dto.js.map