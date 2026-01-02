import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DynProService } from './dyn-pro/dyn-pro.service'; // 👈 ADD

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dynProService: DynProService, // 👈 ADD
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 👇 NEW ENDPOINT (Proof)
  @Get('/dyn-pro')
  getDynamicProvider() {
    return {
      success: true,
      data: this.dynProService.getMessage(
        'Dynamic Modules & Providers working 🚀',
      ),
    };
  }
}
