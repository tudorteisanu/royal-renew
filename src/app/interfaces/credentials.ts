import {UserInterface} from "@App/interfaces/user";


export interface CredentialsInterface {
  user: Partial<UserInterface>;
  token: string;
}
