import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class AppLifecycle implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    console.log('App module initialized');
  }

  onModuleDestroy() {
    console.log('App module destroyed');
  }
}
