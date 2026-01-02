/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { DynProModule } from './dyn-pro/dyn-pro.module';

// ✅ ADD THESE
import { AppLifecycle } from './lifecycle/app.lifecycle';
import { DbLifecycle } from './lifecycle/db.lifecycle';
import { ModuleLifecycle } from './lifecycle/module.lifecycle';

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
    }),

    AuthModule,
    UserModule,
    ProfileModule,
    PostModule,
    RoleModule,

    DynProModule.registerAsync(),
  ],
  controllers: [AppController],
  providers: [
    AppService,

    // ✅ ADD ONLY THIS
    AppLifecycle,
    DbLifecycle,
    ModuleLifecycle,
  ],
})
export class AppModule {}
