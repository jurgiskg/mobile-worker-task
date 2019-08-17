import { Component, OnInit, Input } from '@angular/core';
import { WorkTask } from 'src/app/models/work-task';
import { WorkTaskType } from 'src/app/models/work-task-type';

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
  @Input() taskGroupType: WorkTaskType;
  @Input() workStart: Date;
  @Input() workEnd: Date;
  @Input() workTasks: Array<WorkTask> = [];

  workTaskTypes = WorkTaskType;

  constructor() { }

  ngOnInit() {
  }

}
