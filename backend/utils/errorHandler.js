export class ErrorHandler extends Error{
    constructor(message, status){
        super(message);//message comes from parameter
        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    }
}