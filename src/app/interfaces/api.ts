import { UsersApiService } from '@App/api/modules/users-api.service';
import { RolesApiService } from '@App/api/modules/roles-api.service';

export interface ApiInterface {
  users: () => UsersApiService;
  roles: () => RolesApiService;
}
