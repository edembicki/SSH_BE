import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientsDto } from './dto/create-clients.dto';
import { UpdateClientsDto } from './dto/update-clients.dto';
import { Clients } from './entities/clients.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Clients)
    private clientsRepository: Repository<Clients>,
  ) {}
  create(createClientsDto: CreateClientsDto) {
    return this.clientsRepository.save(createClientsDto);
  }

  findAll() {
    return this.clientsRepository.find();
  }

  findOne(id: number) {
    return this.clientsRepository.findOneBy({ client_id: id });
  }

  update(id: number, updateClientsDto: UpdateClientsDto) {
    return this.clientsRepository.update(id, updateClientsDto);
  }

  remove(id: number) {
    return this.clientsRepository.delete(id);
  }
}
