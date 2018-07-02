import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PCalendarPtbrComponent } from './p-calendar-ptbr.component';
import { FormsModule } from '@angular/forms';

import {CalendarModule} from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  declarations: [PCalendarPtbrComponent],
  exports: [
    PCalendarPtbrComponent
  ],
  providers: [
    DatePipe
  ]
})
export class PCalendarPtbrModule { }
