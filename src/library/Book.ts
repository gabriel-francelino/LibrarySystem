import { Author } from "./Author";

export class Book {
    private static _lastId: number = 0;
    private _id: number;
    private _title: string;
    private _author: Author;
    private _year: number;
    private _genre: string;
    private _amount: number;

    constructor(
        title: string,
        author: Author,
        year: number,
        genre: string,
        amount: number
    ) {
        this._id = ++Book._lastId;
        this._title = title;
        this._author = author;
        this._year = year;
        this._genre = genre;
        this._amount = amount;
    }
}
