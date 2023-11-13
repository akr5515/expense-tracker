import { Prisma } from '@prisma/client';

export class Expense implements Prisma.ExpenseUncheckedCreateInput {
  id?: string;
  label: string;
  amount: string;

  userId: string;

  createdAt?: string | Date;

  updatedAt?: string | Date;
}
