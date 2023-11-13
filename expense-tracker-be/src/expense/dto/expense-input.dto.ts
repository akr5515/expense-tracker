import { IsNotEmpty, IsString } from 'class-validator';

export class ExpenseInputDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  label: string;

  @IsNotEmpty()
  @IsString()
  amount: string;
}
