export class User {
    private static _lastId: number = 0;
    private _id: number;
    private _name: string;
    private _email: string;

    constructor(name: string, email: string) {
        this._id = ++User._lastId;
        this._name = name;
        this._email = email;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    info(): void{
        console.log(`\n---------- USUÁRIO ID: ${this._id} ----------`)
        console.log(`Nome: ${this._name}`)
        console.log(`Email: ${this._email}`)
        console.log(`---------------------------------\n`)

    }
}
