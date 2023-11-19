import { Book } from "../Book";
import { User } from "../User";
import { Author } from "../Author";
import { Borrowing } from "../Borrowing";


export class OperationValidation {
    static validateBook(book) {
        if (book.title.length < 2) {
            throw new Error("O título do livro deve ter no mínimo 2 caracteres.");
        }
        if (book.author.name.length < 2) {
            throw new Error("O nome do autor deve ter no mínimo 2 caracteres.");
        }
        if (book.year < 0) {
            throw new Error("O ano do livro deve ser maior que 0.");
        }
        if (book.genre.length < 2) {
            throw new Error("O gênero do livro deve ter no mínimo 2 caracteres.");
        }
        if (book.amount < 0) {
            throw new Error("A quantidade de livros deve ser maior ou igual a 0.");
        }
    }
    static validateUser(user) {
        if (user.name.length < 2) {
            throw new Error("O nome do usuário deve ter no mínimo 2 caracteres.");
        }
        if (user.email.length < 2) {
            throw new Error("O e-mail do usuário deve ter no mínimo 2 caracteres.");
        }
    }
    static validateBorrowing(borrowing) {
        if (borrowing.book.amount < 1) {
            throw new Error("Não há exemplares disponíveis deste livro.");
        }
        if (borrowing.user.borrowings.length >= 3) {
            throw new Error("O usuário já possui 3 empréstimos.");
        }
    }
    static validateReturn(borrowing) {
        if (borrowing.book.amount < 1) {
            throw new Error("Não há exemplares disponíveis deste livro.");
        }
    }
}