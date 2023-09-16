import { StoresService } from './stores.service';
import { CreateStoresDto } from './dto/create-stores.dto';
import { UpdateStoresDto } from './dto/update-stores.dto';
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    create(createStoresDto: CreateStoresDto): Promise<CreateStoresDto & import("./entities/stores.entity").Stores>;
    findAll(): Promise<import("./entities/stores.entity").Stores[]>;
    findOne(id: string): Promise<import("./entities/stores.entity").Stores>;
    update(id: string, updateStoresDto: UpdateStoresDto): Promise<import("typeorm").UpdateResult>;
}
