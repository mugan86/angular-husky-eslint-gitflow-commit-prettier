import { TestBed } from '@angular/core/testing';

import { RouteLogService } from './route-log.service';

describe('RouteLogService', () => {
  let service: RouteLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
