import { getBalancesFromBalanceCollection } from '../utils/firestore.utils';
import firestore from './firestore';

const balanceCollection = firestore.collection('balance');

export const getBalances = async () => {
  const balances = await getBalancesFromBalanceCollection(balanceCollection);
  return balances;
};
