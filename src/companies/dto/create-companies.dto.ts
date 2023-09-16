import { ApiProperty } from "@nestjs/swagger";

export class CreateCompaniesDto {
  @ApiProperty()
  company_corporate_name: string;
  @ApiProperty()
  company_name: string;
}
