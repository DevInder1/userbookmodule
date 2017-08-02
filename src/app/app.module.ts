import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserButtonComponent } from './user-component/user-button/user-button.component';
import { HeaderComponent } from './user-component/header/header.component';
import { ViewBooksComponent } from './user-component/view-books/view-books.component';
import { UploadBooksComponent } from './user-component/upload-books/upload-books.component';
import { DeleteBooksComponent } from './user-component/delete-books/delete-books.component';
import { SearchBooksComponent } from './user-component/search-books/search-books.component';
import {Bookdetails} from "app/shared/bookdetails.service";


@NgModule({
  declarations: [
    AppComponent,
    UserButtonComponent,
    HeaderComponent,
    ViewBooksComponent,
    UploadBooksComponent,
    DeleteBooksComponent,
    SearchBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Bookdetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
