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

    get book(): Book {
        return this._book;
    }

    get user(): User {
        return this._user;
    }

    get borrowedAt(): Date {
        return this._borrowedAt;
    }

    get returnedAt(): Date {
        return this._returnedAt;
    }

    info(): void {
        console.log(`\n---------- EMPRÉSTIMO ----------`)
        console.log(`Livro: ${this._book.title}`)
        console.log(`Usuário: ${this._user.name}`)
        console.log(`Data de empréstimo: ${this._borrowedAt.toLocaleDateString('pt-br')}`)
        console.log(`Data de devolução: ${this._returnedAt.toLocaleDateString('pt-br')}`)
        console.log(`---------------------------------\n`)
    }
}
