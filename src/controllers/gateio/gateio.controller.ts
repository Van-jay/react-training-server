import { Request, Response } from 'express';
import { Account } from '../../models/gateio.models';
import AccountsService from '../../services/accounts.service';

// const accountsService = new AccountsService();
export default class GateioController {
  constructor(private readonly accountsService: AccountsService) {}

  getAccountsList = async (req: Request, res: Response) => {
    this.accountsService.listSpotAccountsGateio().then(
      (accountsList: Account[]) => res.send(accountsList),
      (error: any) =>
        res.status(error.response.status).send('Could not fetch accounts.')
    );
  };
}
