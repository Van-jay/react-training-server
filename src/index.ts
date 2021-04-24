import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routers from './routers';
import { requestLogger } from './middlewares/requestLogger';
import { errorLogger } from './middlewares/errorLogger';

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import passportJWT from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;

const user = {
  id: 1,
  username: 'example',
  password: 'password',
};

dotenv.config();
const APP_PORT = process.env.APP_PORT;
express().use(passport.initialize());

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
    },
    (email: any, password: any, done: any) => {
      if (email === user.username && password === user.password) {
        return done(null, user);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'jwt_secret',
    },
    (jwt_payload, done) => {
      console.log(jwt_payload);
      if (user.id === jwt_payload.user.id) {
        return done(null, user);
      } else {
        return done(null, false, { message: `Token doesn't match` });
      }
    }
  )
);

express()
  .use(cors())
  .use(requestLogger)
  .use(routers)
  .use(errorLogger)
  .listen(APP_PORT, () => {
    console.log(`Server has started on port ${APP_PORT}!`);
  });
