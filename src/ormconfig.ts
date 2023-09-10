import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Somepassword',
  database: 'crud',
  synchronize: true,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
};
