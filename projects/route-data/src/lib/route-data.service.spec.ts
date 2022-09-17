import { TestBed } from '@angular/core/testing';

import { RouteDataService } from './route-data.service';

describe('RouteDataService', () => {
  let service: RouteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
