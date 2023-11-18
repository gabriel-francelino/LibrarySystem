import { Book } from "./Book";

export class Author {
    private static _lastId: number = 0;
    private _id: number;
    private _name: string;
    private _nationality: string;
    private _dateOfBirth: Date;
    private _books: Book[];

    constructor(name: string, nationality: string, dateOfBirth: Date) {
        this._id = ++Author._lastId;
        this._name = name;
        this._nationality = nationality;
        this._dateOfBirth = dateOfBirth;
        this._books = [];
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get nationality(): string {
        return this.nationality;
    }

    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }

    get books(): Book[] {
        return this._books;
    }
}
