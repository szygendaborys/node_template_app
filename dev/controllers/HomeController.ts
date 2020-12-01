import * as express from "express";
import { Controller } from "./interfaces/Controller.interface";

export class HomeController implements Controller {
    public path: string = '/home';
    public router = express.Router();

    // model inits
    // public static testModel = new Test(
    //     '', Constants.Tests.Test, new Date(), new Date(), true, 0, 0
    // ).getModelForClass(Test);

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path, this.testRoute);
        // this.router.post(this.path, this.testtest);
    }
    
    private testRoute = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            res.status(200).json({
                message: 'All great!'
            })
        } catch (err) {
            if(!err.statusCode) 
                err.statusCode = 500;
            next(err);
        }
    };
}