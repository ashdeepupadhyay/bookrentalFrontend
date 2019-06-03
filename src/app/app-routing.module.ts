import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RentedBooksComponent } from './rented-books/rented-books.component';
import { BookListComponent } from './available-books/book-list/book-list.component';
import { BookDetailComponent } from './available-books/book-detail/book-detail.component';
import { SelectedBookComponent } from './available-books/selected-book/selected-book.component';
import { AvailableBooksComponent } from './available-books/available-books.component';


const routes: Routes = [
  {path:"",redirectTo:"/selectedBooks",pathMatch:"full"},
  {path:"selectedBooks",component:AvailableBooksComponent,children:[
    {path:"",component:SelectedBookComponent},
    {path:":id",component:BookDetailComponent}   
  ]},
  {path:"rentedBooks",component:RentedBooksComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
