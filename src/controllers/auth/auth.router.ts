import { Router } from 'express';
import authController from './auth.controller';

export default Router().post('/', authController.authorise);
