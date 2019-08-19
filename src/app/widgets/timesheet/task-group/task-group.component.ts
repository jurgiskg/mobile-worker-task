import { Component, OnInit, Input } from '@angular/core';
import { TimesheetWorkEvent } from 'src/app/models/timesheet-work-event';
import { WorkEventType } from 'src/app/models/work-event-type';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.less']
})
export class TaskGroupComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() taskAmountName: string;
  @Input() taskQuantityName: string;
  @Input() taskGroupType: WorkEventType;
  @Input() workStart: Date;
  @Input() workEnd: Date;
  @Input() workTasks: Array<TimesheetWorkEvent> = [];

  workTaskTypes = WorkEventType;

  constructor() { }

  ngOnInit() {
  }

}
