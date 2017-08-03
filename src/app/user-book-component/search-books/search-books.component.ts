import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../shared/services/search.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  filterData: string;

  constructor(private searchservice: SearchService) { }

  ngOnInit() {
  }
  Onserch() {
    this.searchservice.searchValue.next(this.filterData);
    console.log(this.filterData);
  }

}
