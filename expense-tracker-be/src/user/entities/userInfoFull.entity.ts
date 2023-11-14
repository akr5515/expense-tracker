import { User } from './user.entity';
import { Expense } from 'src/expense/entities/expense.entity';

export class UserInfoFull extends User {
  expenses: Expense[];
  budgets: Expense[];
  debts: Expense[];
  assets: Expense[];
}
