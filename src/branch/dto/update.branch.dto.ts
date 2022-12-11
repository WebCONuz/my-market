import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly addres: string;

  @IsNumber()
  @IsOptional()
  readonly market_id: number;
}
