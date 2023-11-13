import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { hashConfig } from 'src/config/hash.config';

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
}
