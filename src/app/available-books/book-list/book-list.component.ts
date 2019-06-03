import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book.model';
import { BookList } from './book-list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  booksList:BookList[];
  subscription:Subscription;
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.booksList=this.bookService.getBooks();
    this.subscription=this.bookService.bookChanged.subscribe((data:BookList[])=>{
      this.booksList=data;
    });
    //console.log(this.booksList)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe;
  }

}
