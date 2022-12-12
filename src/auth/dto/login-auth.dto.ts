import { IsString, IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @IsString({ message: "Email string bo'lishi kerak" })
  @IsEmail({}, { message: "Noto'g'ri email" })
  readonly email: string;

  @IsString({ message: "Parol string bo'lishi kerak" })
  @MinLength(6, { message: "Parol kamida 6ta belgidan iborat bo'lishi kerak" })
  readonly password: string;
}
