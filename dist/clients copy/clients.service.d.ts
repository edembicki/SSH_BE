import { Repository } from 'typeorm';
import { CreateClientsDto } from './dto/create-clients.dto';
import { UpdateClientsDto } from './dto/update-clients.dto';
import { Clients } from './entities/clients.entity';
export declare class ClientsService {
    private clientsRepository;
    constructor(clientsRepository: Repository<Clients>);
    create(createClientsDto: CreateClientsDto): Promise<CreateClientsDto & Clients>;
    findAll(): Promise<Clients[]>;
    findOne(id: number): Promise<Clients>;
    update(id: number, updateClientsDto: UpdateClientsDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
