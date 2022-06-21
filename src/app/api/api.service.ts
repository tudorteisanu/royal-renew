import { Injectable } from '@angular/core';
import { ApiInterface } from '@App/interfaces/api';
import { UsersApiService } from '@App/api/modules/users-api.service';
import { RolesApiService } from '@App/api/modules/roles-api.service';
import { AuthApiService } from '@App/api/modules/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements ApiInterface {
  public users;
  public roles;
  public auth;

  constructor(
    protected readonly usersApiService: UsersApiService,
    protected readonly rolesApiService: RolesApiService,
    protected readonly authApiService: AuthApiService
  ) {
    this.users = () => usersApiService;
    this.roles = () => rolesApiService;
    this.auth = () => authApiService;
  }
}
