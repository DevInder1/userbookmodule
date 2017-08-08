


import { NgModule } from '@angular/core';
import {BookModule} from './user-book-component/book.module';
import { D3Component } from './d3/d3.component';
import {AppComponent} from "./app.component";







@NgModule({
  declarations: [D3Component],
  imports: [
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


