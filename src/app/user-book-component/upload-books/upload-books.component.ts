import {Component, OnInit} from '@angular/core';
import {Bookdata} from '../../shared/book-model';
import {NgForm} from '@angular/forms';
import {Bookdetails} from '../../shared/services/bookdetails.service';

@Component({
  selector: 'app-upload-books',
  templateUrl: './upload-books.component.html',
  styleUrls: ['./upload-books.component.css']
})
export class UploadBooksComponent implements OnInit {
  bookdetails: Bookdata[];
  inputdata;


  constructor(private bkservice: Bookdetails) {
  }

  onAddBook(form: NgForm) {
    console.log(form.value);
    console.log('book is added');
    const bktitle = form.value.title;
    const bkauthor = form.value.author;
    const bkprice = form.value.price;
    const bkimagepath = form.value.imagepath;
    const bkobject = new Bookdata(bktitle , bkauthor , bkprice , bkimagepath);
    this.bkservice.addbook(bkobject);
  }
  get() {
    console.log('called');
    this.inputdata = this.bkservice.getBookDetails();
  }

  ngOnInit()  {
    /*this.bookdetails = this.bkservice.getBookDetails();
    this.bkservice.addnewbookchanged.subscribe((bookdetails: Bookdata[]) => {
        this.bookdetails = this.bookdetails;
      }
    );*/
  }

}
