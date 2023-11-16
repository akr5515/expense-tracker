import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ExpenseInputDto } from './dto/expense-input.dto';
import { ExpenseService } from './expense.service';
import { Expense } from './entities/expense.entity';
import { JwtGuard } from 'src/auth/guard';
@UseGuards(JwtGuard)
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  // Budget
  @HttpCode(HttpStatus.CREATED)
  @Post('budget')
  async addBudget(@Body() addBudgetDto: ExpenseInputDto): Promise<void> {
    return this.expenseService.addBudget(addBudgetDto);
  }
  @HttpCode(HttpStatus.OK)
  @Get('budget/:id')
  async getBudgetByUserId(@Param('id') userId: string): Promise<Expense[]> {
    return this.expenseService.getBudgetByUserId(userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('budget-monthly/:id')
  async getMonthlyBudgetByUserId(
    @Param('id') userId: string,
  ): Promise<{ dayList: number[]; sumList: number[] }> {
    return this.expenseService.getMonthlyBudgetByUserId(userId);
  }
  // expense
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async addExpense(@Body() addExpenseDto: ExpenseInputDto): Promise<void> {
    return this.expenseService.addExpense(addExpenseDto);
  }
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async getExpenseByUserId(@Param('id') userId: string): Promise<Expense[]> {
    return this.expenseService.getExpenseByUserId(userId);
  }

  // asset
  @HttpCode(HttpStatus.CREATED)
  @Post('asset')
  async addAsset(@Body() addAssetDto: ExpenseInputDto): Promise<void> {
    return this.expenseService.addAsset(addAssetDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('asset/:id')
  async getAssetByUserId(@Param('id') userId: string): Promise<Expense[]> {
    return this.expenseService.getAssetByUserId(userId);
  }

  // Debt
  @HttpCode(HttpStatus.CREATED)
  @Post('debt')
  async addDebt(@Body() addDebtDto: ExpenseInputDto): Promise<void> {
    return this.expenseService.addDebt(addDebtDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('debt/:id')
  async getDebtByUserId(@Param('id') userId: string): Promise<Expense[]> {
    return this.expenseService.getDebtByUserId(userId);
  }
}
