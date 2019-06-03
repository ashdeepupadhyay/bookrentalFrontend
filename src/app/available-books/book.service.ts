import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookList } from './book-list/book-list.model';
import { Book } from './book-list/book.model';
import { ServerService } from '../server.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private serverService: ServerService) {
  }
  bookSelected = new Subject();
  bookChanged = new Subject<BookList[]>()
  private availableBookList: BookList[] = [
    new BookList(
      1,
      [new Book("HarryPotter", "JK Rowling", 1, "fiction"),
      new Book("The CAT", "cat", 2, "Novel")]),

    new BookList(
      2,
      [new Book("The wolf", "wolf", 3, "fiction"),
      new Book("Cow", "Cow", 1, "novel")]),
  ]

  getBooks() {
    // this.availableBookList = this.serverService.fetchAvailableBooks();
    // this.bookChanged.next(this.availableBookList.slice())
    return this.availableBookList.slice();//To make new copy of receipe and use the reference of the original
  }
  getSelectedBooks(id: number): Book[] {
    return this.availableBookList[id].books;
  }
  getClientId(id: number) {
    return this.availableBookList[id].clientId;
  }
}
