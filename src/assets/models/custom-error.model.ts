export class CustomError {

    public readonly name: string;
    public readonly message: string;

    constructor(message: string) {
        this.name = 'CustomError';
        this.message = message;
    }
}


