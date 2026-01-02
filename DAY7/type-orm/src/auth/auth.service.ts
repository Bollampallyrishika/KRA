/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(user: any) {
    const payload = {
      sub: user.id,              // ✅ STANDARD
      email: user.email,
      roles: [user.role],        // ✅ MUST BE ARRAY
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
