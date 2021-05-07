import { Router } from 'express';
import GateioController from './gateio.controller';
import AccountsService from '../../services/accounts.service';

const gateioController = new GateioController(new AccountsService());

export default Router().get(
  '/getAccountsList',
  gateioController.getAccountsList
);
