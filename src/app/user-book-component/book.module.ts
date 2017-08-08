///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserButtonComponent} from './user-button/user-button.component';
import {AppComponent} from '../app.component';
import {HeaderComponent} from './header/header.component';
import {ViewBooksComponent} from './view-books/view-books.component';
import {UploadBooksComponent} from './upload-books/upload-books.component';
import {DeleteBooksComponent} from './delete-books/delete-books.component';
import {SearchBooksComponent} from './search-books/search-books.component';
import {FilterPipe} from '../shared/pipes/filter.pipe';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Bookdetails} from '../shared/services/bookdetails.service';
import {SearchService} from '../shared/services/search.service';
import { NvD3Component } from 'ng2-nvd3';
import { ChartModule } from 'angular2-highcharts';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule.forRoot(require('highcharts')),

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
  bootstrap: []

})
export class BookModule { }
