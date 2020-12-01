import env from '../config/env';
import expressLoader from './express';
import mongooseLoader from './mongoose';
import errorLoader from './errors';
import middlewareLoader from './middleware';
import loggerLoader from './logger';
import { Application } from 'express';
import logger from '../config/winston';

export default async ({ app }:{ app:Application }) => {
    await loggerLoader({ app });
    logger.info('Logger initialized');

    await mongooseLoader(function () {
        app.listen(env.port);
    });
    logger.info('MongoDB Intialized');
    
    await expressLoader({ app });
    logger.info('Express Intialized');

    await errorLoader({ app });
    logger.info('Error middleware initialized');

    await middlewareLoader({ app });
    logger.info('Middleware initialized');

}