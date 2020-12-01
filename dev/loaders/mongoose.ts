import Database from "../db/Database";

export default async (startServer: Function): Promise<any> => {
    return new Database().connectToDb(startServer)
        .then(() => {
            console.log('Mongo connected!');
        })
        .catch((err: any) => {
            console.log(startServer);
            console.log(err);
            console.log('Cannot connect to Mongo!');
        })
}