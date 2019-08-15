import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.less']
})
export class TimesheetComponent implements OnInit {

  currentWeek: Array<Date> = [];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.currentWeek = this.calendarService.getCurrentTimesheetWeek();
  }

}
