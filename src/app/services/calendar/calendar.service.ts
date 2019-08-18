import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  isToday = (date: Date): boolean => {
    const today = new Date();
    return this.isSameDay(today, date);
  }

  isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth()
      && date1.getFullYear() === date2.getFullYear();
  }

  isWeekend = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 6 || dayOfWeek === 0;
  }

  getTwoDatesMinuteDifference = (date1: Date, date2: Date) => {
    const diff = Math.abs(date1.getTime() - date2.getTime());
    const minutes = Math.floor((diff / 1000) / 60);
    return minutes;
  }

  isBiggerOrEqualDay = (date1: Date, date2: Date): boolean => {
    if (date1.getFullYear() > date2.getFullYear()) {
      return true;
    }
    if (date1.getMonth() > date2.getMonth()) {
      return true;
    }
    if (date1.getDate() >= date2.getDate()) {
      return true;
    }
    return false;
  }

  isLesserOrEqualDay = (date1: Date, date2: Date): boolean => {
    if (date1.getFullYear() < date2.getFullYear()) {
      return true;
    }
    if (date1.getMonth() < date2.getMonth()) {
      return true;
    }
    if (date1.getDate() <= date2.getDate()) {
      return true;
    }
    return false;
  }
}
