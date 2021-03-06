import { Container } from 'inversify';
import { TYPES } from './di.types';
import { IBalanceService } from '../services/interfaces/IBalanceService';
import BalanceService from '../services/balance.service';
import { IBalanceController } from '../controllers/balance/interfaces/IBalanceController';
import BalanceController from '../controllers/balance/balance.controller';
import { IAuthService } from '../services/interfaces/IAuthService';
import AuthService from '../services/auth.service';
import { IAuthController } from '../controllers/auth/interfaces/IAuthController';
import AuthController from '../controllers/auth/auth.controller';
import { IAccountsService } from '../services/IAccountsService';
import AccountsService from '../services/accounts.service';
import { IAccountsController } from '../controllers/gateio/interfaces/IAccountsController';
import GateioController from '../controllers/gateio/gateio.controller';

const container = new Container();

// balance
container.bind<IBalanceService>(TYPES.IBalanceService).to(BalanceService);
container
  .bind<IBalanceController>(TYPES.IBalanceController)
  .to(BalanceController);

// auth
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService);
container.bind<IAuthController>(TYPES.IAuthController).to(AuthController);

// accounts
container.bind<IAccountsService>(TYPES.IAccountsService).to(AccountsService);
container
  .bind<IAccountsController>(TYPES.IAccountsController)
  .to(GateioController);

export { container };
