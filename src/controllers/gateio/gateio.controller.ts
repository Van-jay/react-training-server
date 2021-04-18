import { listSpotAccounts } from '../../clients/gateio.client';

const getAccountsList = async (req: any, res: any) => {
  listSpotAccounts().then(
    (value: any) => res.send(value.body),
    (error: any) =>
      res.status(error.response.status).send('Could not fetch accounts.')
  );
};

export default { getAccountsList };
