import { Request, Response } from 'express';
import { getBalances } from '../../db/balance.collection';

const getStartingBalance = async (req: Request, res: Response) => {
  const balances = await getBalances();
  res.send({ startingBalance: balances.startingBalance });
};

const editStartingBalance = (req: Request, res: Response) => {
  console.log(req.body);
  res.send({ startingBalance: 123 });
};

export default { getStartingBalance, editStartingBalance };
