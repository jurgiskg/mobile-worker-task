import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ]
})
export class WidgetsModule { }
