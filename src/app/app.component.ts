import { Component } from '@angular/core';
import {Bookdetails} from "./shared/services/bookdetails.service";
import {Bookdata} from "./shared/book-model";

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


