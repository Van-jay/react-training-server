import { getBalances } from '../../db/balance.collection';

const getStartingBalance = async (req: any, res: any) => {
  const balances = await getBalances();
  res.send({ startingBalance: balances.startingBalance });
};

const editStartingBalance = (req: any, res: any) => {
  console.log(req);
  res.send({ startingBalance: 123 });
};

export default { getStartingBalance, editStartingBalance };
