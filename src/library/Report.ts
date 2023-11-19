import { Author } from "./Author";
import { Book } from "./Book";
import { User } from "./User";
import { Borrowing } from "./Borrowing";

export class Report {
    hasBook(books: Book[]): boolean {
        if (books.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    hasAuthor(authors: Author[]): boolean {
        if (authors.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    hasUser(users: User[]): boolean {
        if (users.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    hasBorrowing(borrowings: Borrowing[]): boolean {
        if (borrowings.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    listBooks(books: Book[]): void {
        if (this.hasBook(books)) {
            books.forEach((book) => {
                book.info();
            });
        } else {
            console.log("Não há livros cadastrados");
        }
    }

    listAuthors(authors: Author[]): void {
        if (this.hasAuthor(authors)) {
            authors.forEach((author) => {
                author.info();
            });
        } else {
            console.log("Não há autores cadastrados");
        }
    }

    listUsers(users: User[]): void {
        if (this.hasUser(users)) {
            users.forEach((user) => {
                user.info();
            });
        } else {
            console.log("Não há usuários cadastrados");
        }
    }

    availableBooks(books: Book[]): void {
        const availableBooks = books.filter((book) => book.hasBook());

        if (availableBooks.length == 0) {
            console.log("Não há livros disponíveis");
        } else {
            availableBooks.forEach((book) => {
                book.info();
            });
        }
    }

    unavailableBooks(books: Book[]): void {
        const unavailableBooks = books.filter((book) => !book.hasBook());

        if (unavailableBooks.length == 0) {
            console.log("Não há livros indisponíveis");
        } else {
            unavailableBooks.forEach((book) => {
                book.info();
            });
        }
    }

    booksByAuthor(author: string, books: Book[]): void {
        const booksByAuthor = books.filter(
            (book) => book.author.name == author
        );

        if (booksByAuthor.length == 0) {
            console.log("Não há livros desse autor");
        } else {
            booksByAuthor.forEach((book) => {
                book.info();
            });
        }
    }

    booksByGenre(genre: string, books: Book[]): void {
        const booksByGenre = books.filter((book) => book.genre == genre);

        if (booksByGenre.length == 0) {
            console.log("Não há livros desse gênero");
        } else {
            booksByGenre.forEach((book) => {
                book.info();
            });
        }
    }

    borrowedBooks(borrowings: Borrowing[]): void {
        if (!this.hasBorrowing(borrowings)) {
            console.log("Não há livros emprestados");
        } else {
            borrowings.forEach((borrowing) => {
                borrowing.info();
            });
        }
    }
}
