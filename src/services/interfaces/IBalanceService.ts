import {
  Balance,
  EditStartingBalanceRequest,
} from '../../models/balance.model';

export interface IBalanceService {
  getBalance: () => Promise<Balance>;
  editStartingBalance: (
    editStartingBalanceRequest: EditStartingBalanceRequest
  ) => Promise<void>;
}
