import { Router } from 'express';
import authRouter from './controllers/auth/auth.router';
import balanceRouter from './controllers/balance/balance.router';
import gateioRouter from './controllers/gateio/gateio.router';

export default Router()
  .use('/gateio', gateioRouter)
  .use('/auth', authRouter)
  .use('/balance', balanceRouter);
