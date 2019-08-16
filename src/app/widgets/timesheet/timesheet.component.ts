import { Component, OnInit } from '@angular/core';
import { WorkEventService } from 'src/app/services/work-event/work-event.service';
import { DayReport } from 'src/app/services/work-event/day-report';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.less']
})
export class TimesheetComponent implements OnInit {

  weekReports: Array<DayReport>;
  selectedDay: Date = new Date();

  constructor(private workEventService: WorkEventService) { }

  ngOnInit() {
    const today = new Date();
    const firstTimesheetDay = new Date(new Date().setDate(new Date().getDate() - 6));

    this.workEventService.getWeekReports(firstTimesheetDay, today).subscribe(data => {
      this.weekReports = data;
    });
  }

  onSelectedDate = (selectedDay: Date) => {
    this.selectedDay = selectedDay;
  }

}
