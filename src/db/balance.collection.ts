import firestore, { getBalancesFromBalanceCollection } from './firestore';

const balanceCollection = firestore.collection('balance');

export const getBalances = async () => {
  const balances = await getBalancesFromBalanceCollection(balanceCollection);
  return balances;
};
