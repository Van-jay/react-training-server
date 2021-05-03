import { Balances } from '../models/firestore.models';
import firestore, { getBalancesFromBalanceCollection } from './firestore';

const balanceCollection = firestore.collection('balance');

export const getBalances = async (): Promise<Balances> => {
  const balances = await getBalancesFromBalanceCollection(balanceCollection);
  return balances;
};
