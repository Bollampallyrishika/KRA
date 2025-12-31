/* eslint-disable prettier/prettier */
import { Module} from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from 'src/profile/entities/profile.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule], // allows other modules to use UserRepository
})
export class UserModule {}
