import { TestBed } from '@angular/core/testing';

import { GpxReaderService } from './gpx-reader.service';

describe('GpxReaderService', () => {
  let service: GpxReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpxReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
