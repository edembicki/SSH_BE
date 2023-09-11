import { ApiProperty } from "@nestjs/swagger";

export class CreateClientsDto {
  @ApiProperty()
  client_first_name: string;
  @ApiProperty()
  client_last_name: string;
}
