import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { UsersModule } from './users/users.module';
import { config } from './ormconfig';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ClientsModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
