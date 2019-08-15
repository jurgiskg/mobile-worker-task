import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  getCurrentTimesheetWeek = (): Array<Date>  => {
    const week: Array<Date> = [];
    const currDate = new Date();
    week.push(new Date(currDate.getTime()));

    let daysLeft = 6;
    while (daysLeft > 0) {
      const clonedCurrDate = new Date(currDate.setDate(currDate.getDate() - 1));
      week.unshift(clonedCurrDate);
      daysLeft--;
    }
    return week;
  }
}
