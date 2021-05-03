import dotenv from 'dotenv';
import { AccountsList } from '../models/gateio.models';

const GateApi = require('gate-api');

dotenv.config();

const client = new GateApi.ApiClient();
const SpotApi = new GateApi.SpotApi(client);
client.setApiKeySecret(process.env.GATEIO_KEY, process.env.GATEIO_SECRET);

export const listSpotAccounts = async (): Promise<AccountsList[]> => {
  // const opts = {
  //   currency: 'asdasdas', // string | Retrieved specified currency related data
  // };
  return SpotApi.listSpotAccounts().then(
    (value: any) => Promise.resolve(value.body),
    (error: any) => Promise.reject(error)
  );
};
