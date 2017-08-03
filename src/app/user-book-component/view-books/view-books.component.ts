import {Component, OnInit} from '@angular/core';
import {Bookdata} from '../../shared/book-model';
import {Bookdetails} from '../../shared/services/bookdetails.service';
import {SearchService} from '../../shared/services/search.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  bookview: Bookdata[];
  recievedText: string;

  constructor(private bookviewservice: Bookdetails , private searchservice: SearchService) {
  }

  ngOnInit() {

    this.bookview = this.bookviewservice.getBookDetails();
   this.bookviewservice.addnewbookchanged.subscribe((bookview: Bookdata[]) => {
        this.bookview = bookview;
      }
    );
    this.searchservice.searchValue.subscribe((data: string) => {
      this.recievedText = data;
    })
    console.log('inside view');
    console.log(this.bookview);
    console.log(this.recievedText);
  }

}
