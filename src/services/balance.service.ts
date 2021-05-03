import { Balance } from '../models/firestore.models';
import { getBalanceFromDb } from '../repositores/balance.collection';

const getBalance = async (): Promise<Balance> => {
  const balances = await getBalanceFromDb();
  return balances;
};

export default { getBalance };
