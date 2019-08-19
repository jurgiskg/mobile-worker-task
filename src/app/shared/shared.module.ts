import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayStatusDirective } from './directives/day-status.directive';
import { MinutesToHours } from './pipes/minutes-to-hours.pipe';
import { MonthYearPipe } from './pipes/month-year.pipe';
import { TimeDurationPipe } from './pipes/time-duration.pipe';

@NgModule({
  declarations: [
    DayStatusDirective,
    MinutesToHours,
    MonthYearPipe,
    TimeDurationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DayStatusDirective,
    MinutesToHours,
    MonthYearPipe,
    TimeDurationPipe
  ]
})
export class SharedModule { }
