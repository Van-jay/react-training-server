import { Request, Response } from 'express';

export interface IAuthController {
  authorise: (req: Request, res: Response) => void;
}
