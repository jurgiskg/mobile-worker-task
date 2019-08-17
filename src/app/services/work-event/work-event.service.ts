import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DayReport } from '../../models/day-report';
import { TaskService } from '../business-logic/task.service';

@Injectable({
  providedIn: 'root'
})
export class WorkEventService {

  constructor(private http: HttpClient,
              private taskService: TaskService) { }

  // startDate and endDate should be sent to server in real-world scenario
  getWeekReports = (startDate: Date, endDate: Date): Observable<Array<DayReport>> => {
    return this.http.get<Array<DayReport>>('assets/work-events-mock.json')
      .pipe(map(response => {
        response.forEach(dayReport => {
          dayReport.date = new Date(dayReport.date);
          dayReport.events.forEach(event => {
            event.firstTaskStart = new Date(event.firstTaskStart);
            event.lastTaskEnd = new Date(event.lastTaskEnd);
          });
        });
        return response;
      }),
      map(response => {
        response.forEach(dayReport => {
          dayReport.minutesWorked = this.taskService.getHoursWorked(dayReport.events);
          dayReport.status = this.taskService.getDayState(dayReport.events);
        });
        return response;
      }));
  }
}
