import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpenseInputDto } from './dto/expense-input.dto';
import { Expense } from './entities/expense.entity';
import { getCurrentMonthYear } from 'src/utils/helpers';

@Injectable()
export class ExpenseService {
  constructor(private readonly prismaService: PrismaService) {}

  async addBudget(payload: ExpenseInputDto): Promise<void> {
    const budget = await this.prismaService.budget.create({ data: payload });
    return;
  }

  async addExpense(payload: ExpenseInputDto): Promise<void> {
    const expense = await this.prismaService.expense.create({ data: payload });
    return;
  }

  async addAsset(payload: ExpenseInputDto): Promise<void> {
    const asset = await this.prismaService.asset.create({ data: payload });
    return;
  }

  async addDebt(payload: ExpenseInputDto): Promise<void> {
    const debt = await this.prismaService.debt.create({ data: payload });
    return;
  }

  async getBudgetByUserId(userId: string): Promise<Expense[]> {
    const budget = await this.prismaService.budget.findMany({
      where: {
        userId: userId,
      },
    });
    return budget;
  }

  async getMonthlyBudgetByUserId(
    userId: string,
  ): Promise<{ dayList: number[]; sumList: number[] }> {
    const { currentMonth, currentYear, totalDaysInMonth } =
      getCurrentMonthYear();

    // console.log('The month ', currentMonth, ' The year ', currentYear);

    const budget = await this.prismaService.budget.findMany({
      where: {
        userId: userId,
      },
    });
    const currentMonthBudgets = budget.filter((item) => {
      const itemDate = item.createdAt;
      return (
        itemDate.getMonth() === currentMonth &&
        itemDate.getFullYear() === currentYear
      );
    });

    const sumOfAmountsPerDay = new Map<number, number>();

    currentMonthBudgets.map((transaction) => {
      const transactionDate = transaction.createdAt.getDate();
      const amount = parseInt(transaction.amount);

      if (sumOfAmountsPerDay.has(transactionDate)) {
        const currentSum = sumOfAmountsPerDay.get(transactionDate) || 0;
        sumOfAmountsPerDay.set(transactionDate, currentSum + amount);
      } else {
        sumOfAmountsPerDay.set(transactionDate, amount);
      }
    });

    // Converting the Map to an array of objects
    const sumArray = Array.from(sumOfAmountsPerDay, ([date, sum]) => ({
      date,
      sum,
    }));

    const dayArray = [];
    const amountArray = [];
    const monthlyArray = [];
    for (let i = 1; i <= 30; i++) {
      const temp = sumArray.find((obj) => obj.date === i);
      monthlyArray.push({
        day: i,
        amount: temp ? temp.sum : 0,
      });
      dayArray.push(i);
      amountArray.push(temp ? temp.sum : 0);

      console.log(i, ' temp ', temp);
    }

    console.log('day s ', totalDaysInMonth);
    console.log('The array', monthlyArray);

    return { dayList: dayArray, sumList: amountArray };
  }

  async getExpenseByUserId(userId: string): Promise<Expense[]> {
    const expense = await this.prismaService.expense.findMany({
      where: {
        userId: userId,
      },
    });
    return expense;
  }

  async getAssetByUserId(userId: string): Promise<Expense[]> {
    const asset = await this.prismaService.asset.findMany({
      where: {
        userId: userId,
      },
    });
    return asset;
  }

  async getDebtByUserId(userId: string): Promise<Expense[]> {
    const debt = await this.prismaService.debt.findMany({
      where: {
        userId: userId,
      },
    });
    return debt;
  }
}
