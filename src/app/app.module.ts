import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { RentedBooksComponent } from './rented-books/rented-books.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { BookListComponent } from './available-books/book-list/book-list.component';
import { BookDetailComponent } from './available-books/book-detail/book-detail.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectedBookComponent } from './available-books/selected-book/selected-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    RentedBooksComponent,
    AvailableBooksComponent,
    HeaderComponent,
    SelectedBookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
