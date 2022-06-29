class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received an rating of ${this.rating}`;
    }
}

const beast = new Movie("Beast", "Nelson", "Commercial", 2022, 3);
const theri = new Movie("Theri", "Atlee", "Commercial", 2019, 4.5);

console.log(beast);
console.log(beast.getOverview());

console.log("\n");

console.log(theri);
console.log(theri.getOverview());