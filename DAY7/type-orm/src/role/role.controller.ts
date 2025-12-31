import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.roleService.create(name);
  }

  @Post('assign')
  assignRoles(
    @Body('userId') userId: number,
    @Body('roleIds') roleIds: number[],
  ) {
    return this.roleService.assignRole(userId, roleIds);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }
}
