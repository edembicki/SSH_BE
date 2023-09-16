import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoresDto } from './dto/create-stores.dto';
import { UpdateStoresDto } from './dto/update-stores.dto';
import { Stores } from './entities/stores.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Stores)
    private storesRepository: Repository<Stores>,
  ) {}
  create(createStoresDto: CreateStoresDto) {
    return this.storesRepository.save(createStoresDto);
  }

  findAll() {
    return this.storesRepository.find();
  }

  findOne(id: number) {
    return this.storesRepository.findOneBy({ store_id: id });
  }

  update(id: number, updateStoresDto: UpdateStoresDto) {
    return this.storesRepository.update(id, updateStoresDto);
  }

  remove(id: number) {
    return this.storesRepository.delete(id);
  }
}
