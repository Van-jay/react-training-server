import { Request, Response } from 'express';

const authorise = (req: Request, res: Response) => {
  console.log(req.body);
  res.send({ token: 'fakeToken' });
};

export default { authorise };
