import {Component, OnInit} from '@angular/core';
import {Bookdata} from "../../shared/book-data.service";
import {Bookdetails} from "../../shared/bookdetails.service";

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  bookview: Bookdata[];

  constructor(private bookviewservice: Bookdetails) {
  }

  ngOnInit() {

    this.bookview = this.bookviewservice.getBookDetails();
   this.bookviewservice.addnewbookchanged.subscribe((bookview: Bookdata[]) => {
        this.bookview = bookview;
      }
    );
    console.log('inside view');
    console.log(this.bookview);
  }

}
