import { Inject, Injectable, Scope } from '@nestjs/common';
import { DYN_PRO_OPTIONS } from './dyn-pro.constants';

@Injectable({ scope: Scope.REQUEST })
export class DynProService {
  constructor(
    @Inject(DYN_PRO_OPTIONS)
    private readonly options: { prefix: string },
  ) {}

  getMessage(msg: string) {
    return `${this.options.prefix} ${msg}`;
  }
}
