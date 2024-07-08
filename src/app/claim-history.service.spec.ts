import { TestBed } from '@angular/core/testing';

import { ClaimHistoryService } from './claim-history.service';

describe('ClaimHistoryService', () => {
  let service: ClaimHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
