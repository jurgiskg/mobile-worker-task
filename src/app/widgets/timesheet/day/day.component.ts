import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.less']
})
export class DayComponent implements OnInit {

  @Input() day: Date;
  @Input() hoursWorked: string;
  @Input() status: string;

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
  }

}
