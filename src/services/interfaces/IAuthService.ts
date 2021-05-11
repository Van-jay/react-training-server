import { UserCredentials } from '../../models/user';

export interface IAuthService {
  authoriseUser: (authCredentials: UserCredentials) => Promise<string>;
}
