import { Reflector } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  it('should be defined', () => {
    const reflector = new Reflector();
    const guard = new RolesGuard(reflector);

    expect(guard).toBeDefined();
  });
});
