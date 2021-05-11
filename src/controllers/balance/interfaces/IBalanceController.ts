import { Request, Response } from 'express';

export interface IBalanceController {
  getBalance: (req: Request, res: Response) => void;
  editStartingBalance: (req: Request, res: Response) => void;
}
