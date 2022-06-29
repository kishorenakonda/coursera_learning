// This import throws error since it is not able to identify the file in the mentioned path without extension
// import Book from '../class/available-books-withclass';

// This imports works properly since it is able to identify the extension
import Book from '../class/available-books-withclass.js';

class TechnicalBook extends Book {
    constructor(title, author, ISBN, numOfCopies, edition) {
        super(title, author, ISBN, numOfCopies);
        this.edition = edition;
    }

    getEdition() {
        return `The current version of the book is ${this.edition}`;
    }

}

const technicalBook = new TechnicalBook("Cracking the coding interview", "Kishore", 1212, 5, 1.1);
console.log(technicalBook.getBookAvailability());
console.log(technicalBook.getEdition());