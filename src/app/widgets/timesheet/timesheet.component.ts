import { Component, OnInit } from '@angular/core';
import { WorkEventService } from 'src/app/services/work-event/work-event.service';
import { DayReport } from 'src/app/services/work-event/day-report';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.less']
})
export class TimesheetComponent implements OnInit {

  weekReports: Array<DayReport>;

  constructor(private workEventService: WorkEventService) { }

  ngOnInit() {
    const today = new Date();
    const firstTimesheetDay = new Date(today.setDate(today.getDate() - 6));

    this.workEventService.getWeekReports(firstTimesheetDay, today).subscribe(data => {
      this.weekReports = data;
    });
  }

}
