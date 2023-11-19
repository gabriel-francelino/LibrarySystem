import { Author } from "./Author";
import { Book } from "./Book";
import { Borrowing } from "./Borrowing";
import { User } from "./User";
import { DataValidation } from "./validation/DataValitation";
import { OperationValidation } from "./validation/OperationValidation";
import { Report } from "./Report";

export class Library {
    private _books: Book[];
    private _users: User[];
    private _authors: Author[];
    private _borrowings: Borrowing[];
    private _reports: Report;

    constructor() {
        this._books = [];
        this._users = [];
        this._authors = [];
        this._borrowings = [];
        this._reports = new Report();
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

    get borrowings(): Borrowing[] {
        return this._borrowings;
    }

    addAuthor(author: Author): void {
        if (
            DataValidation.validateAuthor(author) &&
            !DataValidation.existsId(author.id, this._authors)
        )
            this._authors.push(author);
        else if (
            !DataValidation.validateAuthor(author) &&
            DataValidation.existsId(author.id, this._authors)
        ) 
            throw new Error("Invalid author data");
        
    }

    removeAuthor() {
        // TODO
    }

    addBook(book: Book): void {
        if (
            DataValidation.validateBook(book) &&
            !DataValidation.existsId(book.id, this._books)
        ) {
            this._books.push(book);
        } else if (DataValidation.existsId(book.id, this._books)) {
            const newBook = OperationValidation.findBook(
                book.title,
                this._books
            );
            newBook.amount++;
        } else throw new Error("Invalid book data");
    }

    removeBook(id: number): void {
        const bookRemoved = this._books.find(book => book.id === id)
        if(bookRemoved)
            this._books.splice(this._books.indexOf(bookRemoved), 1)
        else throw new Error('Could not remove book')
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

    borrowBook(bookName: string, userName: string): void {
        // const book = this._books.find((book) => book.title === bookName);
        // const user = this._users.find((user) => user.name === userName);

        const book = OperationValidation.findBook(bookName, this._books);
        const user = OperationValidation.findUser(userName, this._users);

        if (book && user) {
            const borrowing = new Borrowing(book, user);
            this._borrowings.push(borrowing);
            book.amount = book.amount - 1;
        } else {
            throw new Error("Book or user not found");
        }
    }

    returnBook(bookName: string, userName: string): void {
        const book = OperationValidation.findBook(bookName, this._books);
        const user = OperationValidation.findUser(userName, this._users);

        if (book && user) {
            const borrowing = this._borrowings.find(
                (borrowing) =>
                    borrowing.book.title === bookName &&
                    borrowing.user.name === userName
            );
            if (borrowing) {
                this._borrowings.splice(this._borrowings.indexOf(borrowing), 1);
                book.amount = book.amount + 1;
            } else {
                throw new Error("Borrowing not found");
            }
        } else {
            throw new Error("Book or user not found");
        }
    }

    listBooks(): void {
        console.log("\n====================== LIVROS ======================");
        this._reports.listBooks(this._books);
        console.log("====================================================\n");
    }

    listAuthors(): void {
        console.log("\n====================== AUTORES ======================");
        this._reports.listAuthors(this._authors);
        console.log("=====================================================\n");
    }

    listUsers(): void {
        console.log("\n====================== USUÁRIOS ======================");
        this._reports.listUsers(this._users);
        console.log("======================================================\n");
    }

    listAvailableBooks(): void {
        console.log("\n====================== LIVROS DISPONÍVEIS ======================");
        this._reports.availableBooks(this._books);
        console.log("================================================================\n");
    }

    listUnavailableBooks(): void {
        console.log("\n====================== LIVROS INDISPONÍVEIS ======================");
        this._reports.unavailableBooks(this._books);
        console.log("==================================================================\n");
    }

    listBooksByAuthor(authorName: string): void {
        console.log("\n====================== LIVROS POR AUTOR ======================");
        this._reports.booksByAuthor(authorName, this._books);
        console.log("================================================================\n");
    }

    listBooksByGenre(genre: string): void {
        console.log("\n====================== LIVROS POR GÊNERO ======================");
        this._reports.booksByGenre(genre, this._books);
        console.log("=================================================================\n");
    }

    listBorrowedBooks(): void {
        console.log("\n====================== LIVROS EMPRESTADOS ======================");
        this._reports.borrowedBooks(this._borrowings);
        console.log("=================================================================\n");
    }
    
}
