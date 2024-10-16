export class Book {

    title : string;
    author : string;
    isRead : boolean;

    constructor(title : string, author : string, isRead : boolean) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }
}