import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpenseInputDto } from './dto/expense-input.dto';
import { Expense } from './entities/expense.entity';

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
