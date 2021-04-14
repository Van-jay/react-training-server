import { Router } from 'express';
import gateioRouter from './controllers/gateio/gateio-router';

export default Router().use('/gateio', gateioRouter);
