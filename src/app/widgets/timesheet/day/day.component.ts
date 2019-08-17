import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { DayStatus } from 'src/app/models/day-status';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.less']
})
export class DayComponent implements OnInit {

  @Input() day: Date;
  @Input() minutesWorked: number;
  @Input() dayStatus: DayStatus;
  @Input() selectedTimesheetDay: Date;

  @Output() daySelected = new EventEmitter<Date>();

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
  }

  selectDay = () => {
    this.daySelected.emit(this.day);
  }

}
