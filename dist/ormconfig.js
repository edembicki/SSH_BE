"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Somepassword',
    database: 'crud',
    synchronize: true,
    entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
};
//# sourceMappingURL=ormconfig.js.map