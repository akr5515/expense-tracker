import { JwtSignOptions } from '@nestjs/jwt';

export const accessJwtConfig: JwtSignOptions = {
  secret: process.env.ACCESS_JWT_SECRET,
  expiresIn: '2h',
};
