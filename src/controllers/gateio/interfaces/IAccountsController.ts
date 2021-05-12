import { Request, Response } from 'express';

export interface IAccountsController {
  getAccountsList: (req: Request, res: Response) => Promise<void>;
}
