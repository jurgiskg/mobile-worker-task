import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { DayComponent } from './timesheet/day/day.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './timesheet/header/header.component';
import { TaskGroupComponent } from './timesheet/task-group/task-group.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    TimesheetComponent,
    DayComponent,
    HeaderComponent,
    TaskGroupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports: [
    TimesheetComponent
  ],
  providers: [
    DatePipe
  ]
})
export class WidgetsModule { }
