export class BookImpl {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    getInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}`);
    }
}
