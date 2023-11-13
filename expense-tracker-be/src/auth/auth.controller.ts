import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { LoginResponse } from './dto/login.response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() { email, password }: LoginCredentialsDto,
  ): Promise<LoginResponse> {
    return this.authService.login(email, password);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(): Promise<{ message: string }> {
    return this.authService.logout();
  }
}
