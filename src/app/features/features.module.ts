import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TimesheetPageComponent } from './timesheet-page/timesheet-page.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    TimesheetPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimesheetPageComponent
  ]
})
export class FeaturesModule { }
