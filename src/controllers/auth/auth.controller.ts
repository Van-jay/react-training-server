import { Request, Response } from 'express';
import authService from '../../services/auth.service';

const authorise = (req: Request, res: Response) => {
  const userCredentials = req.body;
  authService
    .authoriseUser(userCredentials)
    .then((token) => {
      res.status(200).send({ token });
      console.log(token);
    })
    .catch((error) => {
      res.status(400).send({ error });
    });
};

export default { authorise };
