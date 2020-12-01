export default class ErrorHandler extends Error {
    public statusCode: number;
    public messageCode: string;
    public data?: string;
    constructor(statusCode: number, msgCode: string, data?:any) {
        super();
        this.statusCode = statusCode;
        this.messageCode = msgCode
        this.data = data;
    }
}