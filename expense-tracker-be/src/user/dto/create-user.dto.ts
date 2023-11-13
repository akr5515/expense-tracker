import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

/** Describes the fields needed to create an User */
export class CreateUserDto implements User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must have length of at least 8' })
  password: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
