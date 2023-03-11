import { TestBed } from '@angular/core/testing';

import { PaymentprocessingService } from './paymentprocessing.service';

describe('PaymentprocessingService', () => {
  let service: PaymentprocessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentprocessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
