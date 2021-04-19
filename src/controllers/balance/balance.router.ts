import { Router } from 'express';
import balanceController from './balance.controller';

export default Router()
  .get('/getStartingBalance', balanceController.getStartingBalance)
  .put('/editStartingBalance', balanceController.editStartingBalance);
