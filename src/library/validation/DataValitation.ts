import { Book } from "../Book";
import { User } from "../User";
import { Author } from "../Author";
import { Borrowing } from "../Borrowing";

export class DataValidation {
    static validateBook(book: Book): boolean {
        if (book.title.length < 2) {
            throw new Error(
                "O título do livro deve ter no mínimo 2 caracteres."
            );
        }
        if (book.author.name.length < 2) {
            throw new Error("O nome do autor deve ter no mínimo 2 caracteres.");
        }
        if (book.year < 0) {
            throw new Error("O ano do livro deve ser maior que 0.");
        }
        if (book.genre.length < 2) {
            throw new Error(
                "O gênero do livro deve ter no mínimo 2 caracteres."
            );
        }
        if (book.amount < 0) {
            throw new Error(
                "A quantidade de livros deve ser maior ou igual a 0."
            );
        }

        return true;
    }
    static validateUser(user: User): boolean {
        if (user.name.length < 2) {
            throw new Error(
                "O nome do usuário deve ter no mínimo 2 caracteres."
            );
        }
        if (user.email.length < 2) {
            throw new Error(
                "O e-mail do usuário deve ter no mínimo 2 caracteres."
            );
        }

        return true;
    }
    static validateAuthor(author: Author): boolean {
        if (author.name.length < 2) {
            throw new Error("O nome do autor deve ter no mínimo 2 caracteres.");
        }
        if (author.nationality.length < 2) {
            throw new Error(
                "O e-mail do autor deve ter no mínimo 2 caracteres."
            );
        }
        if (author.dateOfBirth > new Date()) {
            throw new Error(
                "A data de nascimento do autor deve ser anterior à data atual."
            );
        }

        return true;
    }

    static existsId(id: number, array: Author[] | Book[] | User[]): boolean {
        const item = array.find((item) => item.id === id);
        if (item) {
            return true;
        }else{
            throw new Error('Does not exist id')
        }
    }
}
