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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInfoFull } from './entities/userInfoFull.entity';
import { JwtGuard } from 'src/auth/guard';
import { UserTotalAmount } from './entities/user.entity';
import { UserTransaction } from './entities/userTransaction.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.create(createUserDto);
  }
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async getUserInformation(@Param('id') userId: string): Promise<UserInfoFull> {
    return this.userService.getUserInformation(userId);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/get-total/:id')
  async getTotalAmount(@Param('id') userId: string): Promise<UserTotalAmount> {
    return this.userService.geTotalAmountByUserId(userId);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/transaction-list/:id')
  async geTransactionListByUserId(
    @Param('id') userId: string,
  ): Promise<UserTransaction[]> {
    return this.userService.geTransactionListByUserId(userId);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/budget-list/:id')
  async geBudgetListByUserId(
    @Param('id') userId: string,
  ): Promise<UserTransaction[]> {
    return this.userService.geTransactionListByUserId(userId);
  }
}
