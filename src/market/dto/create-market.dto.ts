import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMarketDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
