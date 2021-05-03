import { Balance, EditStartingBalanceRequest } from '../models/balance.model';
import { getBalanceFromDb } from '../repositores/balance.collection';

const getBalance = async (): Promise<Balance> => {
  const balances = await getBalanceFromDb();
  return balances;
};

const editStartingBalance = async (
  editStartingBalanceRequest: EditStartingBalanceRequest
): Promise<void> => {
  return Promise.resolve();
};

export default { getBalance };
