import { Container } from 'inversify';
import { TYPES } from './di.types';
import { IBalanceService } from '../services/interfaces/IBalanceService';
import BalanceService from '../services/balance.service';
import { IBalanceController } from '../controllers/balance/interfaces/IBalanceController';
import BalanceController from '../controllers/balance/balance.controller';

const container = new Container();
container.bind<IBalanceService>(TYPES.IBalanceService).to(BalanceService);
container
  .bind<IBalanceController>(TYPES.IBalanceController)
  .to(BalanceController);

export { container };
