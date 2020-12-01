import ErrorHandler from "../ErrorHandler";
import * as express from 'express';

export default async({ app }:{ app:express.Application }) => {
    app.use((error: ErrorHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
        //console.log(error);
        const status = error.statusCode;
        const message = error.message;
        const data = error.data;
        res.status(status).json({message: message, data: data});
    });
}