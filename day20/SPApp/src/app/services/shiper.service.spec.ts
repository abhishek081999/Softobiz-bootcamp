import { TestBed } from '@angular/core/testing';

import { ShiperService } from './shiper.service';

describe('ShiperService', () => {
  let service: ShiperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
