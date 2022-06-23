import { AuthApiService } from '@App/api/modules/auth-api.service';

export interface ApiInterface {
  auth: () => AuthApiService;
}
