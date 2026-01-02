import {
  Injectable,
  OnModuleInit,
  BeforeApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class DbLifecycle
  implements OnModuleInit, BeforeApplicationShutdown
{
  onModuleInit() {
    console.log('Database initialized');
  }

  beforeApplicationShutdown(signal: string) {
    console.log('Database shutdown', signal);
  }
}
