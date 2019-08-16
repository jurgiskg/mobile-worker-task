import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { DayStatus } from 'src/app/services/business-logic/day-status';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.less']
})
export class DayComponent implements OnInit {

  @Input() day: Date;
  @Input() hoursWorked: number;
  @Input() dayStatus: DayStatus;

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
  }

}
