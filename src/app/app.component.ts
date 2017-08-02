import { Component } from '@angular/core';
import {Bookdetails} from "./shared/bookdetails.service";
import {Bookdata} from "./shared/book-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  bookdata: Bookdata[];
  loadedFeature= 'bookview';

  constructor(private bkservice: Bookdetails ) {}
  onNavigate(featuredata: string) {
    console.log(featuredata);
    this.loadedFeature = featuredata ;

  }

}


