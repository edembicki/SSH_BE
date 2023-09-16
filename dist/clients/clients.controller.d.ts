import { ClientsService } from './clients.service';
import { CreateClientsDto } from './dto/create-clients.dto';
import { UpdateClientsDto } from './dto/update-clients.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientsDto: CreateClientsDto): Promise<CreateClientsDto & import("./entities/clients.entity").Clients>;
    findAll(): Promise<import("./entities/clients.entity").Clients[]>;
    findOne(id: string): Promise<import("./entities/clients.entity").Clients>;
    update(id: string, updateClientsDto: UpdateClientsDto): Promise<import("typeorm").UpdateResult>;
}
