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
    return this.http.get<Array<DayReport>>('assets/work-events-mock.json')
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
          dayReport.tasks.filter(t => t.isWorkHour).forEach(t => {
            t.start = new Date(t.start);
            t.end = new Date(t.end);
            t.events.filter(e => e.isHoursEventType || e.isAdditionalHoursEventType).forEach(e => {
              e.start = new Date(e.start);
              e.end = new Date(e.end);
            });
          });
          dayReport.minutesWorked = this.taskService.getMinutesWorked(dayReport.tasks);
          dayReport.status = this.taskService.getDayState(dayReport.tasks);
        });
        return response;
      }));
  }
}
