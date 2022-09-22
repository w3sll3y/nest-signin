import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class SigninDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}