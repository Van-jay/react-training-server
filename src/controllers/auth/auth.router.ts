import { Router } from 'express';
import AuthController from './auth.controller';
import AuthService from '../../services/auth.service';
import { TYPES } from '../../di/di.types';
import { container } from '../../di/inversify.config';
import { IAuthController } from './interfaces/IAuthController';

const authController = container.get<IAuthController>(TYPES.IAuthController);

export default Router().post('/', authController.authorise);
