import { TestBed } from '@angular/core/testing';

import { NgxTwcssService } from './ngx-twcss.service';

describe('NgxTwcssService', () => {
  let service: NgxTwcssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTwcssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
