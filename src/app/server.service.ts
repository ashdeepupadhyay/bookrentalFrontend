import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { BookList } from './available-books/book-list/book-list.model';
import { BookService } from './available-books/book.service';
import { RentedBook } from './rented-books/rented-book.model';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  books: BookList[];
  rentedBook:RentedBook[];

  constructor(private http: Http) {
  }
  
  fetchAvailableBooks(): BookList[] {
    // return this.http.get('https://ng-receipe-book-1de3a.firebaseio.com/receipe.json')
    // .pipe(map((res)=>{
    //   return res.json();
    // }))
    this.http.get('https://ng-receipe-book-1de3a.firebaseio.com/receipe.json?auth=')
      .subscribe((response: Response) => {
        console.log(response.json())
        this.books = response.json();
      })
    return this.books;
  }
  fetchRentedBooks(): RentedBook[] {
    // return this.http.get('https://ng-receipe-book-1de3a.firebaseio.com/receipe.json')
    // .pipe(map((res)=>{
    //   return res.json();
    // }))
    this.http.get('https://ng-receipe-book-1de3a.firebaseio.com/receipe.json?auth=')
      .subscribe((response: Response) => {
        console.log(response.json())
        this.rentedBook = response.json();
      })
    return this.rentedBook;
  }
  buyOrDeleteBooks(bookDetail: { bookId: number, clientId: number }) {
    this.http.post('https://ng-receipe-book-1de3a.firebaseio.com/receipe.json?auth=', bookDetail)
  }
}
