/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RoleEnum } from '../auth/roles.enum';

@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard) // 🔐 applied at controller level
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ================= QUERY BUILDER ROUTES =================

  @Get('qb')
  @Roles(RoleEnum.ADMIN)
  findAllQB() {
    return this.userService.findAllQB();
  }

  @Get('qb/:id')
  @Roles(RoleEnum.ADMIN)
  findOneQB(@Param('id') id: string) {
    return this.userService.findOneQB(+id);
  }

  @Get('qb/email/:email')
  @Roles(RoleEnum.ADMIN)
  findByEmailQB(@Param('email') email: string) {
    return this.userService.findByEmailQB(email);
  }

  @Get('qb/page/:page/limit/:limit')
  @Roles(RoleEnum.ADMIN)
  findPaginatedQB(
    @Param('page') page: string,
    @Param('limit') limit: string,
  ) {
    return this.userService.findPaginatedQB(+page, +limit);
  }

  @Get('qb-count')
  @Roles(RoleEnum.ADMIN)
  countUsersQB() {
    return this.userService.countUsersQB();
  }

  // ================= NORMAL CRUD ROUTES =================

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Roles(RoleEnum.ADMIN)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
