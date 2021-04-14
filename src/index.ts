import express from 'express';
import dotenv from 'dotenv';
import routers from './routers';

dotenv.config();
const APP_PORT = process.env.APP_PORT;

express()
  .use(routers)
  .listen(APP_PORT, () => {
    console.log(`Server has started on port ${APP_PORT}!`);
  });
