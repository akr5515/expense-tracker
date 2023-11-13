import { IsNotEmpty, IsString } from 'class-validator';

export class LoginCredentialsDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
