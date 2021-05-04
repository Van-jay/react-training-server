import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routers from './routers';
import { requestLogger } from './middlewares/requestLogger';
import { errorLogger } from './middlewares/errorLogger';
import verifyToken from './middlewares/verifyToken';

const user = {
  id: 1,
  username: 'example',
  password: 'password',
};

dotenv.config();
const APP_PORT = process.env.APP_PORT;

express()
  .use(cors())
  .use(bodyParser.json())
  .use(verifyToken)
  .use(requestLogger)
  .use(routers)
  .use(errorLogger)
  .listen(APP_PORT, () => {
    console.log(`Server has started on port ${APP_PORT}!`);
  });
