/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find({
      relations: ['profile'], // 👈 load profile
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ['profile'], // 👈 IMPORTANT
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepo.update(id, updateUserDto);

    return this.findOne(id); // 👈 reuse logic
  }

  async remove(id: number): Promise<{ message: string }> {
    const user = await this.userRepo.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepo.delete(id);

    return { message: `User with id ${id} deleted successfully` };
  }
  // ================= QUERY BUILDER METHODS =================

// 1️⃣ Get all users with profile (QueryBuilder)
async findAllQB(): Promise<User[]> {
  return this.userRepo
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.profile', 'profile')
    .getMany();
}

// 2️⃣ Get single user by id (QueryBuilder)
async findOneQB(id: number): Promise<User> {
  const user = await this.userRepo
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.profile', 'profile')
    .where('user.id = :id', { id })
    .getOne();

  if (!user) {
    throw new NotFoundException('User not found');
  }

  return user;
}

// 3️⃣ Filter users by email (QueryBuilder)
async findByEmailQB(email: string): Promise<User[]> {
  return this.userRepo
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.profile', 'profile')
    .where('user.email = :email', { email })
    .getMany();
}

// 4️⃣ Pagination (QueryBuilder)
async findPaginatedQB(page: number, limit: number): Promise<User[]> {
  return this.userRepo
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.profile', 'profile')
    .skip((page - 1) * limit)
    .take(limit)
    .getMany();
}

// 5️⃣ Count users
async countUsersQB(): Promise<number> {
  return this.userRepo
    .createQueryBuilder('user')
    .getCount();
}

}
