import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Profile } from './profile/entities/profile.entity';
import { Post } from './post/entities/post.entity';
import { Role } from './role/entities/role.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'scott',
  database: 'testdb',

  entities: [User, Profile, Post, Role],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // ✅ REQUIRED for migrations
});
