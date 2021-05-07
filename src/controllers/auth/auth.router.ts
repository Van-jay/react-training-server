import { Router } from 'express';
import AuthController from './auth.controller';
import AuthService from '../../services/auth.service';

const authController = new AuthController(new AuthService());

export default Router().post('/', authController.authorise);
