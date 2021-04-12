import express from 'express';
import dotenv from 'dotenv';
import { users } from './users';

dotenv.config();
const APP_PORT = process.env.APP_PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(APP_PORT, () => {
  console.log(`Server has started on port ${APP_PORT}!`);
});
