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
}
