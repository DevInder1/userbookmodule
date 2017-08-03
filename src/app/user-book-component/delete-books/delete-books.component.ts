import {Component, OnInit} from '@angular/core';

import {Bookdetails} from '../../shared/services/bookdetails.service';

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
