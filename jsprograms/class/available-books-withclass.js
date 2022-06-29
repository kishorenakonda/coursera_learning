export default class Book {
    constructor(title, author, ISBN, numOfCopies) {
        console.log("\n<-- Invoked From Available Books Program with Class Implementation -->");
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numOfCopies = numOfCopies;
    }

    getBookAvailability() {
        console.log("<-- Available Book Copies --> : ", this.numOfCopies);
        if (this.numOfCopies === 0) {
            return "Out of Stock";
        } else if (this.numOfCopies < 10) {
            return "Less Stock";
        }

        return "In Stock";
    }

    sellBook(numOfCopiesSold = 1) {
        this.numOfCopies -= numOfCopiesSold;
    }

    restockBook(numOfCopiesToRestock = 5) {
        this.numOfCopies += numOfCopiesToRestock;
    }
}

const kidBooks = new Book("Kid Book", "Kishore", 1212, 5);
console.log(kidBooks.getBookAvailability());
kidBooks.restockBook(12);
console.log(kidBooks.getBookAvailability());
kidBooks.sellBook(15);
console.log(kidBooks.getBookAvailability());
