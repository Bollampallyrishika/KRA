import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepo: Repository<Profile>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  // ✅ already correct
  async create(bio: string, userId: number): Promise<Profile> {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const profile = this.profileRepo.create({
      bio,
      user,
    });

    return this.profileRepo.save(profile);
  }

  // ✅ ADD THIS
  async findAll(): Promise<Profile[]> {
    return this.profileRepo.find({
      relations: ['user'],
    });
  }

  // ✅ ADD THIS
  async findOne(id: number): Promise<Profile> {
    const profile = await this.profileRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }

  // ✅ ADD THIS
  async remove(id: number): Promise<{ message: string }> {
    const profile = await this.profileRepo.findOne({
      where: { id },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    await this.profileRepo.delete(id);

    return { message: `Profile with id ${id} deleted successfully` };
  }
}
