import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PCalendarPtbrModule } from './p-calendar-ptbr/p-calendar-ptbr.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PCalendarPtbrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
