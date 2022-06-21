import { TestBed } from '@angular/core/testing';

import { RolesApiService } from './roles-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RolesApiService', () => {
  let service: RolesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(RolesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
