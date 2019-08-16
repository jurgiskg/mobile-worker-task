import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarService } from './calendar/calendar.service';
import { WorkEventService } from './work-event/work-event.service';
import { TaskService } from './business-logic/task.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarService,
    WorkEventService,
    TaskService
  ]
})
export class ServicesModule { }
