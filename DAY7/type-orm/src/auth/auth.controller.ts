import { Controller, Post, Get, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  // LOGIN (POST)
  @Post('login')
  login() {
    const payload = {
      sub: 1,
      email: 'admin@test.com',
      roles: ['admin'], // 🔥 must match RoleEnum
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // ✅ PROTECTED GET ROUTE
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile() {
    return {
      message: 'JWT is working 🎉',
    };
  }
}
