import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {BookModule} from './app/book.module';
import {AppComponent} from "./app/app.component";


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BookModule);
