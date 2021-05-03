import { Request, Response } from 'express';
import balanceService from '../../services/balance.service';

const getBalance = async (req: Request, res: Response) => {
  const balance = await balanceService.getBalance();
  res.send(balance);
};

const editStartingBalance = (req: Request, res: Response) => {
  console.log(req.body);
  res.send({ startingBalance: 123 });
};

export default { getBalance, editStartingBalance };
