import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ViewBooksComponent} from './user-book-component/view-books/view-books.component';
import {UploadBooksComponent} from "./user-book-component/upload-books/upload-books.component";
import {DeleteBooksComponent} from './user-book-component/delete-books/delete-books.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/view' , pathMatch: 'full'},
  {path: 'view', component: ViewBooksComponent},
  {path: 'upload', component: UploadBooksComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {
}
