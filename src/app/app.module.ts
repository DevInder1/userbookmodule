


import { NgModule } from '@angular/core';
import {BookModule} from './user-book-component/book.module';
import { D3Component } from './d3/d3.component';
import {AppComponent} from './app.component';
import { NvD3Module } from 'ng2-nvd3';
import { Ngd3Component } from './ngd3/ngd3.component';
import {RoutingModule} from './routing.module';







@NgModule({
  declarations: [D3Component],
  imports: [
    BookModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


