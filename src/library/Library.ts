import { Author } from "./Author";
import { Book } from "./Book";
import { Borrowing } from "./Borrowing";
import { User } from "./User";

export class Library {
    private _books: Book[];
    private _users: User[];
    private _authors: Author[];
    private _borrowings: Borrowing[];

    constructor() {
        this._books = [];
        this._users = [];
        this._authors = [];
        this._borrowings = [];
    }

    borrowBook(bookName: string, userName: string): void {}
}
