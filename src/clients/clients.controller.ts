import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientsDto } from './dto/create-clients.dto';
import { UpdateClientsDto } from './dto/update-clients.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async create(@Body() createClientsDto: CreateClientsDto) {
    return await this.clientsService.create(createClientsDto);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  update(@Param('id') id: string, @Body() updateClientsDto: UpdateClientsDto) {
    return this.clientsService.update(+id, updateClientsDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'The record has been successfully deleted.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
