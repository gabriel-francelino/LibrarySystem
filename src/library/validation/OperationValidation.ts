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
            throw new Error('Livro não encontrado.')
        }
    }
    static findAuthor(name: string, authors: Author[]){
        const author = authors.find(author => author.name == name)
        if (author) {
            return author
        }else{
            throw new Error('Autor não encontrado.')
        }
    }
    static findUser(name: string, users: User[]){
        const user = users.find(user => user.name == name)
        if (user) {
            return user
        }else{
            throw new Error('Usuário não encontrado.')
        }
    }
    
}