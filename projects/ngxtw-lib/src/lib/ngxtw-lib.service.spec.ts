import { TestBed } from '@angular/core/testing';

import { NgxtwLibService } from './ngxtw-lib.service';

describe('NgxtwLibService', () => {
  let service: NgxtwLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxtwLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
