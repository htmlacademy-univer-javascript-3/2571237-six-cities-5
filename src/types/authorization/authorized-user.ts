import { User } from '../user';

export type Token = string;

export type AuthorizedUser = User & {
  email: string;
  token: Token;
}
