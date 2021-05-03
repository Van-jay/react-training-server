import { Balance } from '../models/firestore.models';
import firestore, { getBalancesFromBalanceCollection } from './firestore';

const balanceCollection = firestore.collection('balance');

export const getBalanceFromDb = async (): Promise<Balance> => {
  const balances = await getBalancesFromBalanceCollection(balanceCollection);
  return balances;
};
