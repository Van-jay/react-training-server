import { Request, Response } from 'express';
import AuthService from '../../services/auth.service';

const authService = new AuthService();

export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  authorise = (req: Request, res: Response) => {
    const userCredentials = req.body;
    this.authService
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
