import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayStatusDirective } from './directives/day-status.directive';
import { HoursWorkedPipe } from './pipes/hours-worked.pipe';
import { MonthYearPipe } from './pipes/month-year.pipe';

@NgModule({
  declarations: [
    DayStatusDirective,
    HoursWorkedPipe,
    MonthYearPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DayStatusDirective,
    HoursWorkedPipe,
    MonthYearPipe
  ]
})
export class SharedModule { }
