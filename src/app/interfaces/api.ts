import { AuthApiService } from 'src/app/api/modules/auth-api.service';

export interface ApiInterface {
  auth: () => AuthApiService;
}
