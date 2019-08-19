import { Component, OnInit } from '@angular/core';
import { WorkEventService } from 'src/app/services/work-event/work-event.service';
import { DayReport } from 'src/app/models/day-report';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { TimesheetWorkEvent } from 'src/app/models/timesheet-work-event';
import { TaskService } from 'src/app/services/business-logic/task.service';
import { WorkEventType } from 'src/app/models/work-event-type';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.less']
})
export class TimesheetComponent implements OnInit {

  weekReports: Array<DayReport>;
  selectedDay: Date = new Date();
  workHourTasks: Array<TimesheetWorkEvent> = [];
  expensesTasks: Array<TimesheetWorkEvent> = [];
  additionalHourTasks: Array<TimesheetWorkEvent> = [];
  workDayStart: Date;
  workDayEnd: Date;

  workTaskTypes = WorkEventType;

  constructor(private workEventService: WorkEventService,
              private taskService: TaskService,
              private calendarService: CalendarService) { }

  ngOnInit() {
    const today = new Date();
    const firstTimesheetDay = new Date(new Date().setDate(new Date().getDate() - 6));

    this.workEventService.getLastWeekReports(firstTimesheetDay, today).subscribe(data => {
      this.weekReports = data;
      this.onSelectedDate(today);
    });
  }

  onSelectedDate = (selectedDay: Date) => {
    this.selectedDay = selectedDay;
    const currentReport = this.weekReports.find(r => this.calendarService.isSameDay(r.date, selectedDay));

    this.workHourTasks = this.taskService.getTimesheetWorkEventsByType(currentReport.tasks, WorkEventType.WorkHours);
    this.expensesTasks = this.taskService.getTimesheetWorkEventsByType(currentReport.tasks, WorkEventType.Expenses);
    this.additionalHourTasks = this.taskService.getTimesheetWorkEventsByType(currentReport.tasks, WorkEventType.AdditionalHours);

    if (currentReport.tasks.length !== 0) {
      this.workDayStart = currentReport.firstTaskStart;
      this.workDayEnd = currentReport.lastTaskEnd;
    }
  }

}
