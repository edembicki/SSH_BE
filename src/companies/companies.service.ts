import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompaniesDto } from './dto/create-companies.dto';
import { UpdateCompaniesDto } from './dto/update-companies.dto';
import { Companies } from './entities/companies.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Companies)
    private companiesRepository: Repository<Companies>,
  ) {}
  create(createCompaniesDto: CreateCompaniesDto) {
    return this.companiesRepository.save(createCompaniesDto);
  }

  findAll() {
    return this.companiesRepository.find();
  }

  findOne(id: number) {
    return this.companiesRepository.findOneBy({ company_id: id });
  }

  update(id: number, updateCompaniesDto: UpdateCompaniesDto) {
    return this.companiesRepository.update(id, updateCompaniesDto);
  }

  remove(id: number) {
    return this.companiesRepository.delete(id);
  }
}
