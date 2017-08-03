import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {BookModule} from "./app/book.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BookModule);
