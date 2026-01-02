import { DynamicModule, Module, Provider, Scope } from '@nestjs/common';
import { DynProService } from './dyn-pro.service';
import { DYN_PRO_OPTIONS } from './dyn-pro.constants';

@Module({})
export class DynProModule {
  static registerAsync(): DynamicModule {
    const asyncOptionsProvider: Provider = {
      provide: DYN_PRO_OPTIONS,
      useFactory: async () => {
        // simulate async config (env / db / api)
        await new Promise((res) => setTimeout(res, 100));

        return {
          prefix: '[DYN-PRO]',
        };
      },
    };

    return {
      module: DynProModule,
      providers: [
        asyncOptionsProvider,
        {
          provide: DynProService,
          useClass: DynProService,
          scope: Scope.REQUEST,
        },
      ],
      exports: [DynProService],
    };
  }
}
