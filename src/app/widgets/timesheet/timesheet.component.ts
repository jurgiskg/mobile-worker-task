import { Component, OnInit } from '@angular/core';
import { WorkEventService } from 'src/app/services/work-event/work-event.service';
import { DayReport } from 'src/app/models/day-report';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { WorkTask } from 'src/app/models/work-task';
import { TaskService } from 'src/app/services/business-logic/task.service';
import { WorkTaskType } from 'src/app/models/work-task-type';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.less']
})
export class TimesheetComponent implements OnInit {

  weekReports: Array<DayReport>;
  selectedDay: Date = new Date();
  workHourTasks: Array<WorkTask> = [];
  expensesTasks: Array<WorkTask> = [];
  additionalHourTasks: Array<WorkTask> = [];
  workDayStart: Date;
  workDayEnd: Date;

  workTaskTypes = WorkTaskType;

  constructor(private workEventService: WorkEventService,
              private taskService: TaskService,
              private calendarService: CalendarService) { }

  ngOnInit() {
    const today = new Date();
    const firstTimesheetDay = new Date(new Date().setDate(new Date().getDate() - 6));

    this.workEventService.getWeekReports(firstTimesheetDay, today).subscribe(data => {
      this.weekReports = data;
      this.onSelectedDate(today);
    });
  }

  onSelectedDate = (selectedDay: Date) => {
    this.selectedDay = selectedDay;
    const currentReport = this.weekReports.find(r => this.calendarService.isSameDay(r.date, selectedDay));

    this.workHourTasks = this.taskService.getWorkTasksByType(currentReport.events, WorkTaskType.WorkHours);
    this.expensesTasks = this.taskService.getWorkTasksByType(currentReport.events, WorkTaskType.Expenses);
    this.additionalHourTasks = this.taskService.getWorkTasksByType(currentReport.events, WorkTaskType.AdditionalHours);

    if (this.workHourTasks.length !== 0) {
      const workStartAndEnd = this.taskService.getWorkDayStartAndEnd(currentReport.events);
      this.workDayStart = workStartAndEnd[0];
      this.workDayEnd = workStartAndEnd[1];
    }
  }

}
