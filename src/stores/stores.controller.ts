import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoresDto } from './dto/create-stores.dto';
import { UpdateStoresDto } from './dto/update-stores.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('stores')
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async create(@Body() createStoresDto: CreateStoresDto) {
    return await this.storesService.create(createStoresDto);
  }

  @Get()
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  update(@Param('id') id: string, @Body() updateStoresDto: UpdateStoresDto) {
    return this.storesService.update(+id, updateStoresDto);
  }

  // @Delete(':id')
  // @ApiResponse({ status: 201, description: 'The record has been successfully deleted.'})
  // @ApiResponse({ status: 403, description: 'Forbidden.'})
  // remove(@Param('id') id: string) {
  //   return this.storesService.remove(+id);
  // }
}
