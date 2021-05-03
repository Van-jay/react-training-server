import { Request, Response } from 'express';
import { listSpotAccounts } from '../../clients/gateio.client';
import { AccountsList } from '../../models/gateio.models';

const getAccountsList = async (req: Request, res: Response) => {
  listSpotAccounts().then(
    (accountsList: AccountsList[]) => res.send(accountsList),
    (error: any) =>
      res.status(error.response.status).send('Could not fetch accounts.')
  );
};

export default { getAccountsList };
