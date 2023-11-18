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

    addBook() {
        // TODO
    }

    removeBook() {
        // TODO
    }

    addUser() {
        // TODO
    }

    removeUser() {
        // TODO
    }

    addAuthor() {
        // TODO
    }

    removeAuthor() {
        // TODO
    }

    borrowBook(bookName: string, userName: string): void {
        const book = this._books.find((book) => book.title === bookName);
        const user = this._users.find((user) => user.name === userName);

        if (book && user) {
            const borrowing = new Borrowing(book, user);
            this._borrowings.push(borrowing);
            book.amount = book.amount - 1;
        } else {
            throw new Error("Book or user not found");
        }
    }
}
