import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateWorkerDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly phone: string;

  @IsNumber()
  @IsOptional()
  readonly branch_id: number;
}
