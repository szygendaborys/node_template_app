import cookieParser from "cookie-parser";
import csurf from "csurf";
import * as express from "express";
import helmet from 'helmet';

export default async({ app }:{ app:express.Application }) => {
    let bodyParser = require('body-parser');
    csurf({cookie: true});

    app.use(bodyParser.json({limit:'10mb'}));
    app.use(bodyParser.text({limit:'10mb'}));
    app.use(bodyParser.urlencoded({extended: true, limit:'10mb', parameterLimit: 2000}));

    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });

    app.use(cookieParser());
    app.use(helmet());
}