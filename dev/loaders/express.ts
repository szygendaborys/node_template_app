import controllers  from '../config/controllers';
import { Application } from 'express';
import { Controller } from '../controllers/interfaces/Controller.interface';

type IClassDefinition<T> = { new (...args: any[]): T; };

export default async ({ app }: { app: Application }) => {

    controllers.forEach((controller:IClassDefinition<Controller>) => {
        const instance = new controller();
        app.use('/api', instance.router);
    });

    return app;
  }
