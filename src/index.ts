import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routers from './routers';
import { requestLogger } from './middlewares/requestLogger';
import { errorLogger } from './middlewares/errorLogger';
import { getBalances, getWatchlist } from './db/firestore';

dotenv.config();
const APP_PORT = process.env.APP_PORT;

getWatchlist();
getBalances();

express()
  .use(cors())
  .use(requestLogger)
  .use(routers)
  .use(errorLogger)
  .listen(APP_PORT, () => {
    console.log(`Server has started on port ${APP_PORT}!`);
  });
