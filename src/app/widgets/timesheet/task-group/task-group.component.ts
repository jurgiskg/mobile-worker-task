import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.less']
})
export class TaskGroupComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() taskInformation: string;

  constructor() { }

  ngOnInit() {
  }

}
