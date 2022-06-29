// Javascript Class
function Book(title, author, ISBN, numOfCopies) {
    console.log("<-- Invoked From Available Books Program with Prototype Implementation -->");
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numOfCopies = numOfCopies;
}

Book.prototype.getBookAvailability = function () {
    console.log("<-- Available Book Copies --> : ", this.numOfCopies);
    if (this.numOfCopies === 0) {
        return "Out of Stocks";
    } else if (this.numOfCopies < 10) {
        return "Less Number of Stocks";
    }

    return "In Stock";
}

Book.prototype.sellBook = function (numOfCopiesSold = 1) {
    this.numOfCopies -= numOfCopiesSold;
}

Book.prototype.restockBook = function (numOfCopiesToRestock = 5) {
    this.numOfCopies += numOfCopiesToRestock;
}

const kidBooks = new Book("Kid Book", "Kishore", 1212, 5);
console.log(kidBooks.getBookAvailability());
kidBooks.restockBook(12);
console.log(kidBooks.getBookAvailability());
kidBooks.sellBook(15);
console.log(kidBooks.getBookAvailability());