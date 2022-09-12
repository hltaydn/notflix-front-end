import { TestBed } from '@angular/core/testing';

import { LoginzService } from './loginz.service';

describe('LoginzService', () => {
  let service: LoginzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
