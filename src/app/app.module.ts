import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviecardComponent } from './shared/component/moviecard/moviecard.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviecardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
