/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() body: { bio: string; userId: number }) {
    return this.profileService.create(body.bio, body.userId);
  }

  // ✅ ADD THIS
  @Get()
  findAll() {
    return this.profileService.findAll();
  }
}
