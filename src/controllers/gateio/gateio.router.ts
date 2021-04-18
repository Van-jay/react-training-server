import { Router } from 'express';
import gateioController from './gateio.controller';

export default Router().get(
  '/getAccountsList',
  gateioController.getAccountsList
);
