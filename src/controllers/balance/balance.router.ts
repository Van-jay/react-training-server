import { Router } from 'express';
import { container } from '../../di/inversify.config';
import { IBalanceController } from './interfaces/IBalanceController';
import { TYPES } from '../../di/di.types';

const balanceController = container.get<IBalanceController>(
  TYPES.IBalanceController
);

export default Router()
  .get('/getBalance', balanceController.getBalance)
  .put('/editStartingBalance', balanceController.editStartingBalance);
