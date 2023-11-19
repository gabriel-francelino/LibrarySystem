import { Author } from "./Author";
import { Book } from "./Book";
import { User } from "./User";
import { Borrowing } from "./Borrowing";

export class Report{
    hasBook(book: Book): boolean{
        if (book.hasBook()) {
            return true
        }else{
            return false
        }
    }

    listBooks(books: Book[]): void{
        books.forEach(book => {
            book.info()
        });
    }

    listAuthors(authors: Author[]): void{
        authors.forEach(author => {
            author.info()
        });
    }

    listUsers(users: User[]): void{
        users.forEach(user => {
            user.info()
        });
    }

    availableBooks(books: Book[]): void{
        const availableBooks = books.filter(book => book.hasBook())
        availableBooks.forEach(book => {
            book.info()
        });
    }

    unavailableBooks(books: Book[]): void{
        const unavailableBooks = books.filter(book => !book.hasBook())
        unavailableBooks.forEach(book => {
            book.info()
        });
    }

    booksByAuthor(author: string, books: Book[]): void{
        const booksByAuthor = books.filter(book => book.author.name == author)
        booksByAuthor.forEach(book => {
            book.info()
        });
    }

    booksByGenre(genre: string, books: Book[]): void{
        const booksByGenre = books.filter(book => book.genre == genre)
        booksByGenre.forEach(book => {
            book.info()
        });
    }

    borrowedBooks(borrowings: Borrowing[]): void{
        borrowings.forEach(borrowing => {
            borrowing.info()
        }); 
    }
}