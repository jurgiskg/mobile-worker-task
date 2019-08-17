import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayStatusDirective } from './directives/day-status.directive';
import { HoursWorkedPipe } from './pipes/hours-worked.pipe';
import { MonthYearPipe } from './pipes/month-year.pipe';
import { TimeDurationPipe } from './pipes/time-duration.pipe';

@NgModule({
  declarations: [
    DayStatusDirective,
    HoursWorkedPipe,
    MonthYearPipe,
    TimeDurationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DayStatusDirective,
    HoursWorkedPipe,
    MonthYearPipe,
    TimeDurationPipe
  ]
})
export class SharedModule { }
