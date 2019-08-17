import { Injectable } from '@angular/core';
import { WorkEvent } from '../../models/work-event';
import { DayStatus } from '../../models/day-status';
import { CalendarService } from '../calendar/calendar.service';

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
}
