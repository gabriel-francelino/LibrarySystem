import { Author } from "./library/Author";
import { Book } from "./library/Book";
import { Library } from "./library/Library";
import { User } from "./library/User";

const library = new Library();

// Exemplo de instâncias dos autores
const author1 = new Author("Elena Smith", "British", new Date("1980-03-15"));
const author2 = new Author("David Johnson", "American", new Date("1975-11-28"));
const author3 = new Author("Sophie Brown", "Canadian", new Date("1992-08-04"));
const author4 = new Author(
    "Carlos Rodriguez",
    "Spanish",
    new Date("1988-06-22")
);
const author5 = new Author("Emily Clark", "Australian", new Date("1979-09-10"));
const author6 = new Author("James Turner", "British", new Date("1995-02-18"));
const author7 = new Author("Olivia White", "American", new Date("1983-04-30"));
const author8 = new Author("Lucas Martinez", "Italian", new Date("1987-12-08"));
const author9 = new Author("Isabella Brown", "French", new Date("1998-07-25"));
const author10 = new Author("Liam Harris", "British", new Date("1991-01-05"));

// Exemplo de instâncias de livros aleatórios
const book1 = new Book("The Hidden Island", author1, 2015, "Adventure", 5);
const book2 = new Book("Echoes of Time", author2, 2008, "Sci-Fi", 8);
const book3 = new Book("Whispers in the Dark", author3, 2020, "Mystery", 3);
const book4 = new Book("Beyond the Horizon", author4, 2012, "Fantasy", 6);
const book5 = new Book("Silent Echo", author5, 2017, "Thriller", 4);
const book6 = new Book("Lost Connections", author6, 2019, "Science", 7);
const book7 = new Book("The Enigma Key", author7, 2014, "Suspense", 9);
const book8 = new Book("Midnight Serenade", author8, 2011, "Romance", 2);
const book9 = new Book("Shadows of Destiny", author9, 2022, "Drama", 5);
const book10 = new Book("Ripples of Fate", author10, 2016, "Fiction", 6);

const user1 = new User("Gabriel", "gabriel@123");

try {
    library.addAuthor(author1);
    library.addAuthor(author2);
    library.addAuthor(author3);
    library.addAuthor(author4);
    library.addAuthor(author5);
    library.addAuthor(author6);
    library.addAuthor(author7);
    library.addAuthor(author8);
    library.addAuthor(author9);
    library.addAuthor(author10);

    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);
    library.addBook(book4);
    library.addBook(book5);
    library.addBook(book6);
    library.addBook(book7);
    library.addBook(book8);
    library.addBook(book9);
    library.addBook(book10);

    library.addBook(book1);
    library.addUser(user1);
    library.addAuthor(author1);
    library.removeBook(10);

    library.borrowBook("Shadows of Destiny", "Gabriel");
    // library.returnBook("Shadows of Destiny", "Gabriel");

    // console.log(library.authors);
    // console.log(library.borrowings);
    // console.log(library.books);

    library.listBorrowedBooks();
} catch (Error) {
    console.log(Error.message);
}
