import { ApiProperty } from "@nestjs/swagger";

export class CreateStoresDto {
  @ApiProperty()
  store_company_id: number;
  @ApiProperty()
  store_postal_code: number;
  @ApiProperty()
  store_address: string;
}
