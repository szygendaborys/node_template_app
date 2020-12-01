import env from "../config/env";

export default class Database {
    private mongoose = require("mongoose");

    public async connectToDb(startServer: Function): Promise<void> {
        const connection = true;
        // const mongoKey = env.nodeEnv === 'production' ? env.mongo.prodKey : env.mongo.devKey;
        // AFTER CONNECTING TO MONGO UNCOMMENT BELOW...
        // const mongoKey = process.env.NODE_ENV === 'production' ? process.env.MONGO_PROD_KEY : process.env.MONGO_DEV_KEY;
        // const connection = await this.mongoose
        //     .connect(
        //         mongoKey,
        //         {
        //             useFindAndModify: false,
        //             useNewUrlParser: true
        //         }
        //     );

        if (connection) {
            startServer();
        }
    };
}