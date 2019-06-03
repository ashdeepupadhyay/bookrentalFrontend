export class RentedBook {
    public bookName: string;
    public author: string;
    public bookId: number;
    public category: string;
    public price: number;
    public date:string
    constructor(bookName: string, author: string,  bookId: number, category: string ,price:number,date:string) {
      this.bookName=bookName;
      this.author=author;
      this.bookId=bookId;
      this.category=category;
      this.price=price;
      this.date=date;
    }
}