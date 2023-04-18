import { TestBed } from '@angular/core/testing';

import { RouteRoleGuard } from './route-role.guard';

describe('RouteRoleGuard', () => {
  let guard: RouteRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
