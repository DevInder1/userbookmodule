import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserButtonComponent} from './user-book-component/user-button/user-button.component';
import {AppComponent} from './app.component';
import {HeaderComponent} from './user-book-component/header/header.component';
import {ViewBooksComponent} from './user-book-component/view-books/view-books.component';
import {UploadBooksComponent} from './user-book-component/upload-books/upload-books.component';
import {DeleteBooksComponent} from './user-book-component/delete-books/delete-books.component';
import {SearchBooksComponent} from './user-book-component/search-books/search-books.component';
import {FilterPipe} from './shared/pipes/filter.pipe';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Bookdetails} from './shared/services/bookdetails.service';
import {SearchService} from './shared/services/search.service';
import { NvD3Component } from 'ng2-nvd3';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  declarations: [
    AppComponent,
    UserButtonComponent,
    HeaderComponent,
    ViewBooksComponent,
    UploadBooksComponent,
    DeleteBooksComponent,
    SearchBooksComponent,
    FilterPipe,
    NvD3Component,
  ],
  providers: [Bookdetails , SearchService],
  bootstrap: [AppComponent]

})
export class BookModule { }
