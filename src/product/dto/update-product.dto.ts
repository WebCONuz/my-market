import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsNumber()
  @IsOptional()
  readonly price: number;

  @IsNumber()
  @IsOptional()
  readonly branch_id: number;
}
