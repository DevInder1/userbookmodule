import {EventEmitter} from '@angular/core';
import {Bookdata} from './book-data.service';
/**
 * Created by Isingh on 8/1/2017.
 */
export class Bookdetails {
  addnewbookchanged = new EventEmitter<Bookdata[]>();
  private bookdetails: Bookdata [] = [
    new Bookdata('2 states', 'chetan bhagath', 2300, 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/2_States_-_The_Story_Of_My_Marriage.jpg/220px-2_States_-_The_Story_Of_My_Marriage.jpg'),
    new Bookdata('love story' , 'walley' , 450, 'https://cdn.thisiswhyimbroke.com/images/our-love-story-book.jpg'),
  ];

  getBookDetails() {
    // console.log(this.bookdetails);
    return this.bookdetails.slice();

  }

  addbook(bookdetails: Bookdata) {
    this.bookdetails.push(bookdetails);
    this.addnewbookchanged.emit(this.bookdetails.slice());
  }

  removeBook() {
    this.bookdetails.splice(0, 1);
    this.addnewbookchanged.emit(this.bookdetails.slice());
    console.log('inside delete');
    /*
    console.log(this.bookdetails);
    return this.bookdetails.slice();*/

  }
}

