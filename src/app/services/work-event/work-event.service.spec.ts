import { TestBed } from '@angular/core/testing';

import { WorkEventService } from './work-event.service';

describe('WorkEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkEventService = TestBed.get(WorkEventService);
    expect(service).toBeTruthy();
  });
});
