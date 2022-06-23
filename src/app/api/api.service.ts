import { Injectable } from '@angular/core';
import { ApiInterface } from '@App/interfaces/api';
import { AuthApiService } from '@App/api/modules/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements ApiInterface {
  public auth;

  constructor(
    protected readonly authApiService: AuthApiService
  ) {
    this.auth = () => authApiService;
  }
}
