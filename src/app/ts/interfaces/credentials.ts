import { UserInterface } from 'src/app/ts/interfaces/user';

export interface CredentialsInterface {
  user: Partial<UserInterface>;
  token: string;
}
