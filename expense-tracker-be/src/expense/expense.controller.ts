import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExpenseInputDto } from './dto/expense-input.dto';
import { ExpenseService } from './expense.service';
import { Expense } from './entities/expense.entity';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post('budget')
  async addBudget(@Body() addBudgetDto: ExpenseInputDto): Promise<void> {
    return this.expenseService.addBudget(addBudgetDto);
  }

  @Get('budget/:id')
  async getBudgetByUserId(@Param('id') userId: string): Promise<Expense[]> {
    return this.expenseService.getBudgetByUserId(userId);
  }
}
