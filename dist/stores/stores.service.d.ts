import { Repository } from 'typeorm';
import { CreateStoresDto } from './dto/create-stores.dto';
import { UpdateStoresDto } from './dto/update-stores.dto';
import { Stores } from './entities/stores.entity';
export declare class StoresService {
    private storesRepository;
    constructor(storesRepository: Repository<Stores>);
    create(createStoresDto: CreateStoresDto): Promise<CreateStoresDto & Stores>;
    findAll(): Promise<Stores[]>;
    findOne(id: number): Promise<Stores>;
    update(id: number, updateStoresDto: UpdateStoresDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
