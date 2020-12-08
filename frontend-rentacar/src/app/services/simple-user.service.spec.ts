import { TestBed } from '@angular/core/testing';

import { SimpleUserService } from './simple-user.service';

describe('SimpleUserService', () => {
  let service: SimpleUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
