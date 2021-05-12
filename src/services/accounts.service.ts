import { injectable } from 'inversify';
import { Account } from '../models/gateio.models';
import gateioAPI from '../clients/gateio.client';
import { IAccountsService } from './IAccountsService';

@injectable()
export default class AccountsService implements IAccountsService {
  listSpotAccountsGateio = async (): Promise<Account[]> => {
    // const opts = {
    //   currency: 'asdasdas', // string | Retrieved specified currency related data
    // };
    return gateioAPI.listSpotAccounts().then(
      (value: any) => Promise.resolve(value.body),
      (error: any) => Promise.reject(error)
    );
  };
}
