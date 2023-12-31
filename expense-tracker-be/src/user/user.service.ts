import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { hashConfig } from 'src/config/hash.config';
import { UserInfoFull } from './entities/userInfoFull.entity';
import { calculateSum } from 'src/utils/helpers';
import { UserTotalAmount } from './entities/user.entity';
import { UserTransaction } from './entities/userTransaction.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    const hashedPassword = await hash(
      createUserDto.password,
      hashConfig.saltRounds,
    );

    const lowerCaseEmail = createUserDto.email.toLowerCase();

    await this.prisma.user.create({
      data: {
        ...createUserDto,
        email: lowerCaseEmail,
        password: hashedPassword,
      },
    });
  }

  async getUserInformation(userId: string): Promise<UserInfoFull> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        budgets: true,
        assets: true,
        expenses: true,
        debts: true,
      },
    });

    delete user.password;

    return user;
  }

  async geTotalAmountByUserId(userId: string): Promise<UserTotalAmount> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        budgets: true,
        assets: true,
        expenses: true,
        debts: true,
      },
    });

    delete user.password;

    const budgets = await calculateSum(user.budgets);
    const assets = await calculateSum(user.assets);
    const expenses = await calculateSum(user.expenses);
    const debts = await calculateSum(user.debts);

    const totalAmount = { budgets, expenses, assets, debts };

    return totalAmount;
  }

  async geTransactionListByUserId(userId: string): Promise<UserTransaction[]> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        budgets: true,
        assets: true,
        expenses: true,
        debts: true,
      },
    });

    delete user.password;

    const list = [
      ...user.budgets.map((obj) => ({ ...obj, type: 'budget' })),
      ...user.expenses.map((obj) => ({ ...obj, type: 'expense' })),
      ...user.assets.map((obj) => ({ ...obj, type: 'asset' })),
      ...user.debts.map((obj) => ({ ...obj, type: 'debt' })),
    ];

    list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    console.log('The list ', list);

    return list;
  }

  async geBudgetListByUserId(userId: string): Promise<UserTransaction[]> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        budgets: true,
      },
    });

    delete user.password;

    const list = [...user.budgets.map((obj) => ({ ...obj, type: 'budget' }))];

    list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    console.log('The list ', list);

    return list;
  }
}
