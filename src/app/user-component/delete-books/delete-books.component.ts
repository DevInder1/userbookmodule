import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ViewBooksComponent} from "../view-books/view-books.component";
import {Bookdetails} from "../../shared/bookdetails.service";
import {Bookdata} from "../../shared/book-data.service";

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.css']
})
export class DeleteBooksComponent implements OnInit {

  constructor(private bookdetails: Bookdetails) {
  }


  ngOnInit() {
  }
onDelete() {
  this.bookdetails.removeBook();

}

}
