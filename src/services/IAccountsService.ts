import { Account } from '../models/gateio.models';

export interface IAccountsService {
  listSpotAccountsGateio: () => Promise<Account[]>;
}
