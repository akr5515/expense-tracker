import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: string;

  email: string;
  password: string;
  firstName?: string;
  lastName?: string;

  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export class UserTotalAmount {
  budgets: number;
  expenses: number;
  assets: number;
  debts: number;
}
