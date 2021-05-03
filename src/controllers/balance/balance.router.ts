import { Router } from 'express';
import balanceController from './balance.controller';

export default Router()
  .get('/getBalance', balanceController.getBalance)
  .put('/editStartingBalance', balanceController.editStartingBalance);
