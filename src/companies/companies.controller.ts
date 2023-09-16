import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompaniesDto } from './dto/create-companies.dto';
import { UpdateCompaniesDto } from './dto/update-companies.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async create(@Body() createCompaniesDto: CreateCompaniesDto) {
    return await this.companiesService.create(createCompaniesDto);
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  update(@Param('id') id: string, @Body() updateCompaniesDto: UpdateCompaniesDto) {
    return this.companiesService.update(+id, updateCompaniesDto);
  }

  // @Delete(':id')
  // @ApiResponse({ status: 201, description: 'The record has been successfully deleted.'})
  // @ApiResponse({ status: 403, description: 'Forbidden.'})
  // remove(@Param('id') id: string) {
  //   return this.companiesService.remove(+id);
  // }
}
