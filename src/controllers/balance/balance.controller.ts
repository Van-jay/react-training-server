import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/di.types';
import BalanceService from '../../services/balance.service';
import { IBalanceController } from './interfaces/IBalanceController';

@injectable()
export default class BalanceController implements IBalanceController {
  private _balanceService: BalanceService;

  constructor(
    @inject(TYPES.IBalanceService) private balanceService: BalanceService
  ) {
    this._balanceService = balanceService;
  }

  getBalance = async (req: Request, res: Response) => {
    const balance = await this._balanceService.getBalance();
    res.send(balance);
  };

  editStartingBalance = (req: Request, res: Response) => {
    res.send({ startingBalance: 123 });
  };
}
