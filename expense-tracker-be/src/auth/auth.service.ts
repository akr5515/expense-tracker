import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { compare } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponse } from './dto/login.response';
import { accessJwtConfig } from 'src/config/jwt.config';
import { InvalidEmailOrPasswordException } from './exceptions/invalid-email-or-password.exception.';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<LoginResponse> {
    const lowerCaseEmail = email.toLowerCase();

    const user = await this.prismaService.user.findUnique({
      where: { email: lowerCaseEmail },
    });

    if (user) {
      const isPasswordValid = await compare(password, user.password);

      if (isPasswordValid) {
        const accessToken = await this.jwtService.signAsync(
          { sub: user.id },
          accessJwtConfig,
        );

        return {
          userId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          accessToken,
        };
      }
      throw new UnauthorizedException('Invalid  password');
    }
    throw new NotFoundException('User not found');
  }

  async logout(): Promise<{ message: string }> {
    return { message: 'Loggged out' };
  }
}
