import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/di.types';
import AuthService from '../../services/auth.service';
import { IAuthController } from './interfaces/IAuthController';

@injectable()
export default class AuthController implements IAuthController {
  private _authService: AuthService;

  constructor(@inject(TYPES.IAuthService) private authService: AuthService) {
    this._authService = authService;
  }

  authorise = (req: Request, res: Response) => {
    const userCredentials = req.body;
    this._authService
      .authoriseUser(userCredentials)
      .then((token) => {
        res.status(200).send({ token });
        token;
      })
      .catch((error) => {
        res.status(400).send({ error });
      });
  };
}
