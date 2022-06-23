import { TestBed } from '@angular/core/testing';

import { AuthApiService } from './auth-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthApiService', () => {
  let service: AuthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(AuthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
