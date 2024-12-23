import { UserData } from '../user-data';

export type Token = string;

export type AuthorizedUserData = UserData & {
  email: string;
  token: Token;
}
