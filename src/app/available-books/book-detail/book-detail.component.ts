import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book-list/book.model';
import { BookService } from '../book.service';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookDetails:Book[];
  clientId:number;
  constructor(private route:ActivatedRoute,private bookService:BookService,private serverService:ServerService) { }
  
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        console.log(params['id'])
         this.bookDetails=this.bookService.getSelectedBooks(+params['id']) 
         this.clientId=this.bookService.getClientId(+params['id']) 
         console.log(this.bookDetails)
       })
  }
  buyBook(book:Book){
    let bookDetails={bookId:book.bookId,clientId:this.clientId}
    this.serverService.buyOrDeleteBooks(bookDetails)
  }
}
