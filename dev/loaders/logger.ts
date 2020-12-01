import * as express from 'express';
import morgan from 'morgan';
import logger from '../config/winston';

export default async({ app }:{ app:express.Application }) => {
    app.use(morgan('combined', { stream: logger.stream }));

    return app;
}