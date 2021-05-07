import { Router } from 'express';
import BalanceController from './balance.controller';
import BalanceService from '../../services/balance.service';

const balanceController = new BalanceController(new BalanceService());

export default Router()
  .get('/getBalance', balanceController.getBalance)
  .put('/editStartingBalance', balanceController.editStartingBalance);
