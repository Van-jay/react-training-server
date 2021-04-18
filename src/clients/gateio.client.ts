import dotenv from 'dotenv';

const GateApi = require('gate-api');

dotenv.config();

const client = new GateApi.ApiClient();
const SpotApi = new GateApi.SpotApi(client);
client.setApiKeySecret(process.env.GATEIO_KEY, process.env.GATEIO_SECRET);

export const listSpotAccounts = async () => {
  // const opts = {
  //   currency: 'asdasdas', // string | Retrieved specified currency related data
  // };
  return SpotApi.listSpotAccounts({ currency: 'abasdasd' }).then(
    (value: any) => Promise.resolve(value),
    (error: any) => Promise.reject(error)
  );
};
