import { Router } from 'express';
import { IAccountsController } from './interfaces/IAccountsController';
import { TYPES } from '../../di/di.types';
import { container } from '../../di/inversify.config';

const gateioController = container.get<IAccountsController>(
  TYPES.IAccountsController
);

export default Router().get(
  '/getAccountsList',
  gateioController.getAccountsList
);
