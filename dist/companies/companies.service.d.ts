import { Repository } from 'typeorm';
import { CreateCompaniesDto } from './dto/create-companies.dto';
import { UpdateCompaniesDto } from './dto/update-companies.dto';
import { Companies } from './entities/companies.entity';
export declare class CompaniesService {
    private companiesRepository;
    constructor(companiesRepository: Repository<Companies>);
    create(createCompaniesDto: CreateCompaniesDto): Promise<CreateCompaniesDto & Companies>;
    findAll(): Promise<Companies[]>;
    findOne(id: number): Promise<Companies>;
    update(id: number, updateCompaniesDto: UpdateCompaniesDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
