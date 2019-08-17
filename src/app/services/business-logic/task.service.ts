import { Injectable } from '@angular/core';
import { WorkEvent } from '../../models/work-event';
import { DayStatus } from '../../models/day-status';
import { CalendarService } from '../calendar/calendar.service';
import { WorkTask } from 'src/app/models/work-task';
import { WorkTaskType } from 'src/app/models/work-task-type';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private calendarService: CalendarService) { }

  getDayState = (dayEvents: Array<WorkEvent>): DayStatus => {
    if (dayEvents.length === 0) {
      return DayStatus.Unknown;
    }
    if (dayEvents.some(e => e.isRejected)) {
      return DayStatus.Rejected;
    }
    if (dayEvents.every(e => e.isApproved)) {
      return DayStatus.Approved;
    }
    return DayStatus.Pending;
  }

  getHoursWorked = (dayEvents: Array<WorkEvent>): number => {
    const hourSum = dayEvents.filter(e => e.isHoursEventType || e.isAdditionalHoursEventType)
      .reduce((acc, curr) => acc + this.calendarService.getTwoDatesMinuteDifference(curr.firstTaskStart, curr.lastTaskEnd), 0);

    return hourSum;
  }

  getWorkTasksByType = (dayEvents: Array<WorkEvent>, type: WorkTaskType): Array<WorkTask> => {
    switch (type) {
      case WorkTaskType.WorkHours:
        const filterHourEvents = (e: WorkEvent) => e.isHoursEventType;
        const mapToWorkHourTask = (e: WorkEvent) => {
          const workTask: WorkTask = {
            name: e.eventType,
            amount: this.calendarService.getTwoDatesMinuteDifference(e.firstTaskStart, e.lastTaskEnd)
          };
          return workTask;
        };
        return this.getWorkTasks(dayEvents, filterHourEvents, mapToWorkHourTask);

      case WorkTaskType.Expenses:
        const filterExpensesTasks = (e: WorkEvent) => e.isExpenseType;
        const mapToExpenseTask = (e: WorkEvent) => {
          const workTask: WorkTask = {
            name: e.eventType,
            amount: e.quantity * e.price,
            quantity: e.quantity
          };
          return workTask;
        };
        return this.getWorkTasks(dayEvents, filterExpensesTasks, mapToExpenseTask);

      case WorkTaskType.AdditionalHours:
        const filterAdditionalHoursTasks = (e: WorkEvent) => e.isAdditionalHoursEventType;
        const mapToAdditionalHoursTask = (e: WorkEvent) => {
          const workTask: WorkTask = {
            name: e.eventType,
            amount: e.tasksCount
          };
          return workTask;
        };
        return this.getWorkTasks(dayEvents, filterAdditionalHoursTasks, mapToAdditionalHoursTask);
    }
  }

  getWorkDayStartAndEnd = (dayEvents: Array<WorkEvent>): [Date, Date] => {
    const workHourEvents = dayEvents.filter(e => e.isHoursEventType);
    const workDayStart = new Date(Math.min.apply(null, workHourEvents.map(e => e.firstTaskStart)));
    const workDayEnd = new Date(Math.max.apply(null, workHourEvents.map(e => e.lastTaskEnd)));

    return [workDayStart, workDayEnd];
  }

  private getWorkTasks = (dayEvents: Array<WorkEvent>, filterEvents: (WorkEvent) => boolean, mapToWorkTask: (WorkEvent) => WorkTask) => {
    const workHoursTasks = dayEvents.filter(e => filterEvents(e)).map(e => mapToWorkTask(e));
    return workHoursTasks;
  }
}
