import { Author } from "./Author";
import { Book } from "./Book";
import { Borrowing } from "./Borrowing";
import { User } from "./User";
import { DataValidation } from "./validation/DataValitation";

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

    get books(): Book[] {
        return this._books;
    }

    get users(): User[] {
        return this._users;
    }

    get authors(): Author[] {
        return this._authors;
    }

    addBook(book: Book): void {
        if (
            DataValidation.validateBook(book) &&
            !DataValidation.existsId(book.id, this._books)
        )
            this._books.push(book);
        else throw new Error("Invalid book data");
    }

    removeBook(id: number) {
        
    }

    addUser(user: User): void {
        if (
            DataValidation.validateUser(user) &&
            !DataValidation.existsId(user.id, this._users)
        )
            this._users.push(user);
        else throw new Error("Invalid user data");
    }

    removeUser() {
        // TODO
    }

    addAuthor(author: Author): void {
        if (
            DataValidation.validateAuthor(author) &&
            !DataValidation.existsId(author.id, this._authors)
        )
            this._authors.push(author);
        else throw new Error("Invalid author data");
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
