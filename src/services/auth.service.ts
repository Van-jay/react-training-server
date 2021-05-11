import dotenv from 'dotenv';
import { injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { UserCredentials } from '../models/user';
import { IAuthService } from './interfaces/IAuthService';

dotenv.config();

const usersMock: UserCredentials[] = [
  {
    id: '123',
    username: 'admin',
    password: 'root',
  },
];

@injectable()
export default class AuthService implements IAuthService {
  authoriseUser = async (authCredentials: UserCredentials): Promise<string> => {
    const user = usersMock.find(
      (user: UserCredentials) => user.username === authCredentials.username
    );
    if (!user) {
      return Promise.reject('User not found');
    } else {
      if (user.password !== authCredentials.password) {
        return Promise.reject('Wrong password');
      } else {
        const payload = { subject: user.id };
        const signKey = process.env.JWT_SIGN_KEY;
        if (signKey) {
          const token = jwt.sign(payload, signKey);
          return Promise.resolve(token);
        }
        return Promise.reject({ error: 'Something went wrong' });
      }
    }
  };
}
