import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { User } from '../user/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const { title, content, userId } = createPostDto;

    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const post = this.postRepo.create({
      title,
      content,
      user,
    });

    return this.postRepo.save(post);
  }

  findAll() {
    return this.postRepo.find({ relations: ['user'] });
  }
}
