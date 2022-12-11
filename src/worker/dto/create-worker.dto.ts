import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWorkerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: number;

  @IsNotEmpty()
  @IsNumber()
  readonly branch_id: number;
}
