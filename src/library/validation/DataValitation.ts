import { Book } from "../Book";
import { User } from "../User";
import { Author } from "../Author";
import { Borrowing } from "../Borrowing";
import { InvalidDataError } from "../exception/InvalidDataError";

export class DataValidation {
    static validateBook(book: Book): boolean {
        if (book.title.length < 2) {
            throw new InvalidDataError(
                "O título do livro deve ter no mínimo 2 caracteres."
            );
        }
        if (book.author && book.author.name.length < 2) {
            throw new InvalidDataError("O nome do autor deve ter no mínimo 2 caracteres.");
        }
        if (book.year < 0) {
            throw new InvalidDataError("O ano do livro deve ser maior que 0.");
        }
        if (book.genre.length < 2) {
            throw new InvalidDataError(
                "O gênero do livro deve ter no mínimo 2 caracteres."
            );
        }
        if (book.amount < 0) {
            throw new InvalidDataError(
                "A quantidade de livros deve ser maior ou igual a 0."
            );
        }

        return true;
    }
    static validateUser(user: User): boolean {
        if (user.name.length < 2) {
            throw new InvalidDataError(
                "O nome do usuário deve ter no mínimo 2 caracteres."
            );
        }
        if (user.email.length < 2) {
            throw new InvalidDataError(
                "O e-mail do usuário deve ter no mínimo 2 caracteres."
            );
        }

        return true;
    }
    static validateAuthor(author: Author): boolean {
        if (author.name.length < 2) {
            throw new InvalidDataError("O nome do autor deve ter no mínimo 2 caracteres.");
        }
        if (author.nationality.length < 2) {
            throw new InvalidDataError(
                "O e-mail do autor deve ter no mínimo 2 caracteres."
            );
        }
        if (author.dateOfBirth > new Date()) {
            throw new InvalidDataError(
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
            return false
        }
    }
}
