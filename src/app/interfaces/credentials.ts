import { UserInterface } from '@App/modules/users/interfaces';

export interface CredentialsInterface {
  user: Partial<UserInterface>;
  token: string;
}
