import winston from 'winston';
import expressWinston from 'express-winston';

export const requestLogger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  meta: false,
  msg: 'HTTP {{req.url}}',
  expressFormat: true,
  colorize: false,
});
