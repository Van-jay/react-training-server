import { Request, Response } from 'express';
import { listSpotAccounts } from '../../clients/gateio.client';
import { Account } from '../../models/gateio.models';

const getAccountsList = async (req: Request, res: Response) => {
  listSpotAccounts().then(
    (accountsList: Account[]) => res.send(accountsList),
    (error: any) =>
      res.status(error.response.status).send('Could not fetch accounts.')
  );
};

export default { getAccountsList };
