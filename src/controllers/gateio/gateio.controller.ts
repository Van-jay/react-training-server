import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/di.types';
import { Account } from '../../models/gateio.models';
import AccountsService from '../../services/accounts.service';
import { IAccountsService } from '../../services/IAccountsService';
import { IAccountsController } from './interfaces/IAccountsController';
@injectable()
export default class GateioController implements IAccountsController {
  private _accountsService: IAccountsService;

  constructor(
    @inject(TYPES.IAccountsService) private accountsService: AccountsService
  ) {
    this._accountsService = accountsService;
  }

  getAccountsList = async (req: Request, res: Response) => {
    this._accountsService.listSpotAccountsGateio().then(
      (accountsList: Account[]) => res.send(accountsList),
      (error: any) =>
        res.status(error.response.status).send('Could not fetch accounts.')
    );
  };
}
