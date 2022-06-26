import { UserInterface } from 'src/app/interfaces/user';

export interface CredentialsInterface {
  user: Partial<UserInterface>;
  token: string;
}
