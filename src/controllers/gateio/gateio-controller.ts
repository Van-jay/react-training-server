import { listSpotAccounts } from '../../clients/gateio-client';

const getAccountsList = async (req: any, res: any) => {
  const accountsList = await listSpotAccounts();
  console.log(accountsList);
  res.send(accountsList);
};

export default { getAccountsList };
