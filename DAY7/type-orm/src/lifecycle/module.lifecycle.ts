import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ModuleLifecycle implements OnModuleInit {
  onModuleInit() {
    console.log('Feature module initialized');
  }
}
