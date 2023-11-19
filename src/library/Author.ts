import { Book } from "./Book";

export class Author {
    private static _lastId: number = 0;
    private _id: number;
    private _name: string;
    private _nationality: string;
    private _dateOfBirth: Date;

    constructor(name: string, nationality: string, dateOfBirth: Date) {
        this._id = ++Author._lastId;
        this._name = name;
        this._nationality = nationality;
        this._dateOfBirth = dateOfBirth;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get nationality(): string {
        return this._nationality;
    }

    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }

    info(): void{
        console.log(`\n---------- AUTOR ID: ${this._id} ----------`)
        console.log(`Nome: ${this._name}`)
        console.log(`Nationality: ${this._nationality}`)
        console.log(`Data de nascimento: ${this._dateOfBirth.toLocaleDateString('pt-br')}`)
        console.log(`---------------------------------\n`)

    }
}
