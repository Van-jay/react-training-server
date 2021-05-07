import { Balance, EditStartingBalanceRequest } from '../models/balance.model';
import { getBalanceFromDb } from '../repositores/balance.collection';

export default class BalanceService {
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
