import { TestBed } from '@angular/core/testing';

import { DeliverTrackerService } from './deliver-tracker.service';

describe('DeliverTrackerService', () => {
  let service: DeliverTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
