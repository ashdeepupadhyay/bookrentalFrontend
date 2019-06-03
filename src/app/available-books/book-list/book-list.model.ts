import { Book } from './book.model';
export class BookList {
    public clientId: number;
    public books: Book[];
    constructor(clientId: number, books: Book[]) {
        this.clientId = clientId;
        this.books = books;
    }

}