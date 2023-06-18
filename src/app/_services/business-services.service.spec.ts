import { TestBed } from '@angular/core/testing';

import { BusinessServicesService } from './business-services.service';

describe('BusinessServicesService', () => {
  let service: BusinessServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
