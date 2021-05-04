import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt, { sign } from 'jsonwebtoken';

dotenv.config();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const nonSecurePaths = ['/auth'];
  if (nonSecurePaths.includes(req.path)) {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }
  const token = req.headers.authorization.split(' ')[1];
  console.log(token);
  if (token === 'null') {
    return res.status(401).send('Unauthorized request');
  }
  const signKey = process.env.JWT_SIGN_KEY;
  console.log(signKey);
  if (!signKey) {
    return res.status(400).send('Something went wrong');
  }
  const payload = jwt.verify(token, signKey);
  console.log(payload);
  if (!payload) {
    return res.status(401).send('Unauthorized request');
  }
  next();
};

export default verifyToken;
