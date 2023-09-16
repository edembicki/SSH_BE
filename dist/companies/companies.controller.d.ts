import { CompaniesService } from './companies.service';
import { CreateCompaniesDto } from './dto/create-companies.dto';
import { UpdateCompaniesDto } from './dto/update-companies.dto';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    create(createCompaniesDto: CreateCompaniesDto): Promise<CreateCompaniesDto & import("./entities/companies.entity").Companies>;
    findAll(): Promise<import("./entities/companies.entity").Companies[]>;
    findOne(id: string): Promise<import("./entities/companies.entity").Companies>;
    update(id: string, updateCompaniesDto: UpdateCompaniesDto): Promise<import("typeorm").UpdateResult>;
}
