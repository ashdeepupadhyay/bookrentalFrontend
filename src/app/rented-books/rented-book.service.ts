import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ServerService } from '../server.service';
import { RentedBook } from './rented-book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private serverService: ServerService) {
  }
  rentedBookList:RentedBook[]=[];
  bookSelected = new Subject();
  bookChanged = new Subject<RentedBook[]>()
  
  getBooks() {
    this.rentedBookList = this.serverService.fetchRentedBooks();
    this.bookChanged.next(this.rentedBookList.slice())//To make new copy of receipe and use the reference of the original
  }
}
