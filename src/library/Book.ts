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

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get author(): Author {
        return this._author;
    }

    get year(): number {
        return this._year;
    }

    get genre(): string {
        return this._genre;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    hasBook(): boolean{
        return (this._amount > 0) ? true : false
    }

    info(): void{
        console.log(`\n---------- LIVRO ID: ${this._id} ----------`)
        console.log(`Título: ${this._title}`)
        console.log(`Autor: ${this._author.name}`)
        console.log(`Ano: ${this._year}`)
        console.log(`Gênero: ${this._genre}`)
        console.log(`Quantidade: ${this._amount}`)
        console.log(`---------------------------------\n`)
    }
}
