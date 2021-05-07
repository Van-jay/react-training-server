import { Request, Response } from 'express';
import BalanceService from '../../services/balance.service';

export default class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  getBalance = async (req: Request, res: Response) => {
    const balance = await this.balanceService.getBalance();
    res.send(balance);
  };

  editStartingBalance = (req: Request, res: Response) => {
    res.send({ startingBalance: 123 });
  };
}
