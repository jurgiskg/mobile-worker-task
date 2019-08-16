import { Injectable } from '@angular/core';
import { WorkEvent } from '../work-event/work-event';
import { DayStatus } from './day-status';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

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
      .reduce((acc, curr) => acc + Math.abs(curr.firstTaskStart.getTime() - curr.lastTaskEnd.getTime()) / 36e5, 0);

    return hourSum;
  }
}
