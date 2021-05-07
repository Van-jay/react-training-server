import dotenv from 'dotenv';
import { Account } from '../models/gateio.models';

const GateApi = require('gate-api');

dotenv.config();

const client = new GateApi.ApiClient();
const SpotApi = new GateApi.SpotApi(client);
client.setApiKeySecret(process.env.GATEIO_KEY, process.env.GATEIO_SECRET);

export default SpotApi;
