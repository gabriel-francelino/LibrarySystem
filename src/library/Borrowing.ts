import { Book } from "./Book";
import { User } from "./User";

export class Borrowing {
    private _book: Book;
    private _user: User;
    private _borrowedAt: Date;
    private _returnedAt: Date;

    constructor(book: Book, user: User) {
        this._book = book;
        this._user = user;
        this._borrowedAt = new Date();
        this._returnedAt = new Date();
        this._returnedAt.setDate(this._borrowedAt.getDate() + 7);
    }
}
