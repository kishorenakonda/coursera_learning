import { TestBed, inject } from '@angular/core/testing';

import { IpBatchJobsService } from './ip-batch-jobs.service';

describe('IpBatchJobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpBatchJobsService]
    });
  });

  it('should be created', inject([IpBatchJobsService], (service: IpBatchJobsService) => {
    expect(service).toBeTruthy();
  }));
});
