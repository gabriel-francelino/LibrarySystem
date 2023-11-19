import { Book } from "../Book";
import { User } from "../User";
import { Author } from "../Author";
import { Borrowing } from "../Borrowing";

export class OperationValidation {
    static findBook(title: string, books: Book[]){
        const book = books.find(book => book.title == title)
        if (book) {
            return book
        }else{
            throw new Error('Book does not exist')
        }
    }
    static findAuthor(name: string, authors: Author[]){
        const author = authors.find(author => author.name == name)
        if (author) {
            return author
        }else{
            throw new Error('author does not exist')
        }
    }
    static findUser(name: string, users: User[]){
        const user = users.find(user => user.name == name)
        if (user) {
            return user
        }else{
            throw new Error('User does not exist')
        }
    }
    
}