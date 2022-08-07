import { Injectable } from '@angular/core';
import { ApiInterface } from 'src/app/ts/interfaces/api';
import { AuthApiService } from 'src/app/api/modules/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements ApiInterface {
  public auth;

  constructor(protected readonly authApiService: AuthApiService) {
    this.auth = () => authApiService;
  }
}
