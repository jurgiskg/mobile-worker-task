import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { DayComponent } from './timesheet/day/day.component';

@NgModule({
  declarations: [
    TimesheetComponent,
    DayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimesheetComponent
  ],
  providers: [
    DatePipe
  ]
})
export class WidgetsModule { }
