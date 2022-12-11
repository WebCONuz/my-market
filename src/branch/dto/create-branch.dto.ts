import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly addres: string;

  @IsNumber()
  readonly market_id: number;
}
