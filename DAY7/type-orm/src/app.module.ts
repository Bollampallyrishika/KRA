import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'scott',
      database: 'testdb',

      autoLoadEntities: true,
      // synchronize: false, // ❌ disable when using migrations
    }),

    UserModule,
    ProfileModule,
    PostModule,
    RoleModule,
  ],
})
export class AppModule {}
