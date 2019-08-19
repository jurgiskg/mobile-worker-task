import { DayReport } from 'src/app/models/day-report';
import { Injectable } from '@angular/core';
import { WorkEvent } from '../../models/work-event';
import { DayStatus } from '../../models/day-status';
import { CalendarService } from '../calendar/calendar.service';
import { TimesheetWorkEvent } from 'src/app/models/timesheet-work-event';
import { WorkEventType } from 'src/app/models/work-event-type';
import { WorkTask } from 'src/app/models/work-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private calendarService: CalendarService) { }

  getDayState = (dayTasks: Array<WorkTask>): DayStatus => {
    if (dayTasks.length === 0) {
      return DayStatus.Unknown;
    }
    if (dayTasks.some(e => e.isRejected)) {
      return DayStatus.Rejected;
    }
    if (dayTasks.every(e => e.isApproved)) {
      return DayStatus.Approved;
    }
    return DayStatus.Pending;
  }

  getMinutesWorked = (dayTasks: Array<WorkTask>): number => {
    const hourSum = dayTasks.filter(t => t.isWorkHour)
      .reduce((acc, curr) => acc + this.calendarService.getTwoDatesMinuteDifference(curr.start, curr.end), 0);

    return hourSum;
  }

  getTimesheetWorkEventsByType = (dayTasks: Array<WorkTask>, type: WorkEventType): Array<TimesheetWorkEvent> => {
    switch (type) {
      case WorkEventType.WorkHours:
        const dayHourEvents: Array<WorkEvent> = dayTasks.filter(t => t.isWorkHour).reduce((acc, curr) => acc.concat(curr.events), []);
        const mainWorkHourEvents: Array<TimesheetWorkEvent> = dayHourEvents.filter(e => e.isHoursEventType).map(e => {
          return {
            name: e.eventType,
            amount: this.calendarService.getTwoDatesMinuteDifference(e.start, e.end)
          };
        });
        return mainWorkHourEvents;

      case WorkEventType.Expenses:
        const dayEvents: Array<WorkEvent> = dayTasks.reduce((acc, curr) => acc.concat(curr.events), []);
        const expenseEvents: Array<TimesheetWorkEvent> = dayEvents.filter(e => e.isExpenseType).map(e => {
          return {
            name: e.eventType,
            amount: e.quantity * e.price,
            quantity: e.quantity
          };
        });
        return expenseEvents;

      case WorkEventType.AdditionalHours:
        const daysHourEvents: Array<WorkEvent> = dayTasks.filter(t => t.isWorkHour).reduce((acc, curr) => acc.concat(curr.events), []);
        const additionalWorkHourEvents: Array<TimesheetWorkEvent> = daysHourEvents.filter(e => e.isAdditionalHoursEventType).map(e => {
          return {
            name: e.eventType,
            amount: this.calendarService.getTwoDatesMinuteDifference(e.start, e.end)
          };
        });
        return additionalWorkHourEvents;
    }
  }
}
