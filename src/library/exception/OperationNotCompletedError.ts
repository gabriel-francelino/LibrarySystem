export class OperationNotCompletedError extends Error {
    constructor(message: string){
        super(message);
        this.name = 'OperationNotCompletedError'
    }
}