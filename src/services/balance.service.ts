import { injectable } from 'inversify';
import { Balance, EditStartingBalanceRequest } from '../models/balance.model';
import { getBalanceFromDb } from '../repositores/balance.collection';
import { IBalanceService } from './interfaces/IBalanceService';

@injectable()
export default class BalanceService implements IBalanceService {
  getBalance = async (): Promise<Balance> => {
    const balances = await getBalanceFromDb();
    return balances;
  };

  editStartingBalance = async (
    editStartingBalanceRequest: EditStartingBalanceRequest
  ): Promise<void> => {
    return Promise.resolve();
  };
}
