import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Constants } from './../shared/Constants';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'p-calendar-ptbr',
  templateUrl: './p-calendar-ptbr.component.html',
  styleUrls: ['./p-calendar-ptbr.component.css']
})
export class PCalendarPtbrComponent {

  @Input() yearRange: string;

  @Input() placeholder: string;

  @Input() showButtonBar: boolean;

  @Input() showTime: boolean;

  @Input() monthNavigator: boolean;

  @Input() yearNavigator: boolean;

  @Input() showIcon: boolean;

  @Input() readonlyInput: boolean;

  @Input() clearButtonStyleClass: string;

  @Input() todayButtonStyleClass: string;

  @Input() maxDateCount: number;

  @Input() selectionMode: string;

  @Input() inputId: string;

  @Input() disabled: boolean;

  @Input() inline: boolean;

  @Input() minDate: Date;

  @Input() maxDate: Date;

  @Input() disabledDates: Array<Date>;

  @Input() disabledDays: number[];

  @Input() timeOnly: boolean;

  @Input() required: boolean;

  pt: any = Constants.pt_BR;

  data: Date;

  previousData: Date;

  @Output() value = new EventEmitter();

  constructor(private datePipe: DatePipe) {
    this.yearRange = new Date().getFullYear()+":"+new Date().getFullYear();
    this.showTime = false;
    this.showButtonBar = false;
    this.monthNavigator = false;
    this.yearNavigator = false;
    this.showIcon = true;
    this.readonlyInput = false;
    this.maxDateCount = 1;
    this.selectionMode = 'single';
    this.inline = false;
    this.timeOnly = false;
    this.required = false;
  }

  ngDoCheck(){
    if(this.data != this.previousData){
      this.value.emit(this.data);
    }
      this.previousData = this.data;
  }

  formataData(evento : KeyboardEvent){
    let temp: any = (<HTMLInputElement>evento.target).value;
    (<HTMLInputElement>evento.target).value =
    temp.length == 2 ? temp + '/' :
    temp.length == 5 ? temp + '/' :
    temp;
  }
}


