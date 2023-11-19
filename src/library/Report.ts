import { Author } from "./Author";
import { Book } from "./Book";
import { User } from "./User";

export class Report{
    listBooks(books: Book[]){
        books.forEach(book => {
            book.info()
        });
    }

    listAuthors(authors: Author[]){
        authors.forEach(author => {
            author.info()
        });
    }

    listUsers(users: User[]){
        users.forEach(user => {
            user.info()
        });
    }
}