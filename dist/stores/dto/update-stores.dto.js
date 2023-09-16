"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoresDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_stores_dto_1 = require("./create-stores.dto");
class UpdateStoresDto extends (0, mapped_types_1.PartialType)(create_stores_dto_1.CreateStoresDto) {
}
exports.UpdateStoresDto = UpdateStoresDto;
//# sourceMappingURL=update-stores.dto.js.map