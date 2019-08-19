import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { DayReport } from '../../models/day-report';
import { TaskService } from '../business-logic/task.service';
import { CalendarService } from '../calendar/calendar.service';

@Injectable({
  providedIn: 'root'
})
export class WorkEventService {

  constructor(private http: HttpClient,
              private taskService: TaskService,
              private calendarService: CalendarService) { }

  // filtering by startDate and endDate should be done by server
  getLastWeekReports = (startDate: Date, endDate: Date): Observable<Array<DayReport>> => {
    return this.http.get<Array<DayReport>>('assets/data-mock.json')
      .pipe(map(response => {
        response.forEach(dayReport => {
          dayReport.date = new Date(dayReport.date);
        });
        return response;
      }),
      map(response => response.filter(r => this.calendarService.isBiggerOrEqualDay(r.date, startDate)
        && this.calendarService.isLesserOrEqualDay(r.date, endDate))),
      map(response => {
        response.forEach(dayReport => {
          dayReport.firstTaskStart = new Date(dayReport.firstTaskStart);
          dayReport.lastTaskEnd = new Date(dayReport.lastTaskEnd);
          dayReport.tasks.forEach(t => {
            t.start = new Date(t.start);
            t.end = new Date(t.end);
            t.events.filter(e => e.isWorkHour).forEach(e => {
              e.start = new Date(e.start);
              e.end = new Date(e.end);
            });
          });
          dayReport.minutesWorked = this.taskService.getDayMinutesWorked(dayReport.tasks);
          dayReport.status = this.taskService.getDayState(dayReport.tasks);
        });
        return response;
      }));
  }
}
