import { PartialType } from '@nestjs/mapped-types';
import { CreateStoresDto } from './create-stores.dto';

export class UpdateStoresDto extends PartialType(CreateStoresDto) {}
